import React from 'react';

import OptionForm from './option_form';

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasNewOption: false,
      options: []
    }
    this.toggleHasNewOption = this.toggleHasNewOption.bind(this);
    this.createOption = this.createOption.bind(this);
  }

  toggleHasNewOption() {
    this.setState({
      hasNewOption: !this.state.hasNewOption
    });
  }

  createOption(attributes, e) {
    e.preventDefault();
    const option = Object.assign({page_id: this.props.page.id}, attributes);
    debugger;
    this.props.createOption({option});
  }

  render() {
    const { hasNewOption } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h4>Options</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="add-option-button toggle-button" onClick={this.toggleHasNewOption}>
              <span>[{hasNewOption ? "-" : "+" }]</span>
              <span> Add New Option</span>
            </div>
            { hasNewOption ? <OptionForm page={this.props.page} handleSubmit={this.createOption}/> : "" }
          </div>
        </div>
      </div>
    );
  }
};

export default Options;
