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
  }

  toggleHasNewOption() {
    this.setState({
      hasNewOption: !this.state.hasNewOption
    });
  }

  render() {
    return (
      <div className="form-row">
        <div className="form-group col-12">
          <h4>Options</h4>
          <div className="form-row">
            <div className="form-group col-12">
              <div className="add-option-button toggle-button" onClick={this.toggleHasNewOption}>
                <span>[{hasNewOption ? "-" : "+" }]</span>
                <span> Add New Option</span>
              </div>
              { hasNewOption ? <OptionForm /> : "" }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Options;
