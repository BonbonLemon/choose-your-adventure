import React from 'react';

import OptionsContainer from './options/options_container';

class PageForm extends React.Component {
  constructor(props) {
    super(props);
    const { name, text } = props.page;

    this.state = {
      hasNewOption: false,
      name: name,
      text: text || ""
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

  render() {
    const { hasNewOption, name, text } = this.state;

    return (
      <div className="page-box new-page-form">
        <form onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
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
              <button type="submit" className="btn btn-info mr-3">Save Page</button>
              <button type="button" className="btn btn-danger" onClick={this.props.toggleEditPage}>Cancel</button>
            </div>
          </div>
        </form>

        <OptionsContainer page={this.props.page} />
      </div>
    );
  }
};

export default PageForm;
