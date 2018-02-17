import React from 'react';

class PageEdit extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
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
            <div className="add-page-box">
              <span>[+]</span>
              <span> Add New Page</span>
            </div>
          </div>
        </div>
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default PageEdit;
