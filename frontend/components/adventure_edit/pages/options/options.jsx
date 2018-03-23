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
    const { page } = this.props
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
            {page.options.map(option => (
              <OptionsIndexItem key={option.id} option={option} editOption={this.props.editOption} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="add-option-button toggle-button" onClick={this.toggleHasNewOption}>
              <span>[{hasNewOption ? "-" : "+" }]</span>
              <span> Add New Option</span>
            </div>
            { hasNewOption ? <OptionForm page={page} handleSubmit={this.createOption}/> : "" }
          </div>
        </div>
      </div>
    );
  }
};

export default Options;
