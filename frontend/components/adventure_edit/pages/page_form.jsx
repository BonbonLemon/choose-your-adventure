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
      <div className="page-box page-form">
        <form onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
          <div className="pages-form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              value={name}
              placeholder="Page Name"
              onChange={this.update("name")}
              required
              />
          </div>
          <div className="pages-form-group">
            <label>Text</label>
            <textarea
              className="form-control"
              value={text}
              placeholder="Page Text"
              rows="3"
              onChange={this.update("text")}
              />
          </div>
          <div className="pages-form-group">
            <button type="submit" className="btn btn-info mr-3">Save Page</button>
            <button type="button" className="btn btn-danger" onClick={this.props.toggleEditPage}>Cancel</button>
          </div>
        </form>

        <OptionsContainer page={this.props.page} />
      </div>
    );
  }
};

export default PageForm;
