import React from 'react';

import OptionForm from './option_form';
import OptionsIndexItem from './option_index_item';

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasNewOption: false
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
    this.props.createOption({option}, this.toggleHasNewOption);
  }

  render() {
    const { page, options } = this.props
    const { hasNewOption } = this.state;

    return (
      <div>
        <h4>Options</h4>
        <div className="options-index">
          {options.map(option => (
            <OptionsIndexItem key={option.id} option={option} editOption={this.props.editOption} deleteOption={this.props.deleteOption} />
          ))}
        </div>
        <div className="add-option-button toggle-button" onClick={this.toggleHasNewOption}>
          <span>[{hasNewOption ? "-" : "+" }]</span>
          <span> Add New Option</span>
          { hasNewOption ? <div id="add-option-line" /> : "" }
        </div>
        { hasNewOption ? <OptionForm page={page} handleSubmit={this.createOption}/> : "" }
      </div>
    );
  }
};

export default Options;
