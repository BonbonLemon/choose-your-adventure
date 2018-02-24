import React from 'react';

class PageForm extends React.Component {
  constructor(props) {
    super(props);
    const { name, text } = props.page;

    this.state = {
      hasNewOption: false,
      name: name,
      text: text
    };
    this.toggleHasNewOption = this.toggleHasNewOption.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  toggleHasNewOption() {
    this.setState({
      hasNewOption: !this.state.hasNewOption
    });
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
    );
  }

  cancelButton() {
    return (
      <button type="button" className="btn btn-danger" onClick={this.props.toggleEditPage}>Cancel</button>
    );
  }

  render() {
    const { hasNewOption, name, text } = this.state;

    return (
      <form className="page-box new-page-form" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              placeholder="Page Name"
              onChange={this.update("name")}
              required
              />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12">
            <label>Text</label>
            <textarea
              className="form-control"
              value={text}
              placeholder="Page Text"
              rows="3"
              onChange={this.update("text")}
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
            <button type="submit" className="btn btn-info mr-3">Save Page</button>
            { this.props.toggleEditPage ? this.cancelButton() : "" }
          </div>
        </div>
      </form>
    );
  }
};

export default PageForm;
