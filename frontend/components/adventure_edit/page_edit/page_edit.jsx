import React from 'react';

class PageEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasNewPage: false,
      hasNewOption: false
    }
    this.toggleHasNewPage = this.toggleHasNewPage.bind(this);
    this.toggleHasNewOption = this.toggleHasNewOption.bind(this);
  }

  toggleHasNewPage() {
    this.setState({
      hasNewPage: !this.state.hasNewPage
    });
  }

  toggleHasNewOption() {
    this.setState({
      hasNewOption: !this.state.hasNewOption
    });
  }

  newPage() {
    const { hasNewOption } = this.state;

    return (
      <div className="row">
        <div className="col-12">
          <form className="new-page-form">
            <div className="form-row">
              <div className="form-group col-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Page Name"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-12">
                <label>Text</label>
                <textarea
                  className="form-control"
                  placeholder="Page Text"
                  rows="3"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-12">
                <h4>Options</h4>
                <div className="form-row">
                  <div className="form-group col-12">
                    <div className="add-option-button toggle-button" onClick={this.toggleHasNewOption}>
                      <span>[{hasNewOption ? "-" : "+" }]</span>
                      <span> Add New Option</span>
                    </div>
                    { hasNewOption ? this.newOption() : "" }
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-12">
                <button type="submit" className="btn btn-info">Save Page</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  newOption() {
    return (
      <div className="new-option-form">
        <div className="form-row">
          <div className="col-8">
            <label>Option Text</label>
            <input type="text" placeholder="Add Option Text" className="form-control" />
          </div>
          <div className="col-4">
            <label>Destination</label>
              <select className="custom-select">
                <option value="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-success">Save Option</button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { hasNewPage } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h2 className="text-left">Pages</h2>
          </div>
        </div>
        <div className="row">
          current page stuff...
        </div>
        <div className="row">
          <div className="col-12">
            <div className="add-page-button toggle-button" onClick={this.toggleHasNewPage}>
              <span>[{ hasNewPage ? "-" : "+" }]</span>
              <span> Add New Page</span>
            </div>
          </div>
        </div>
        { hasNewPage ? this.newPage() : "" }
      </div>
    );
  }
};

export default PageEdit;
