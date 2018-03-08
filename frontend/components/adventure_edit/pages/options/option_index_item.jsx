import React from 'react';
import OptionForm from './option_form.jsx';

class OptionsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editOptionClicked: false
    };
    this.toggleEditOption = this.toggleEditOption.bind(this);
  }

  editPage(attributes, e) {
    e.preventDefault();
    const option = Object.assign({id: this.props.option.id}, attributes);
    this.props.editPage({option}, this.editPageCallback);
  }

  // editPageCallback() {
  //   this.toggleEditOption();
  //   this.props.updateAdventure();
  // }

  toggleEditOption() {
    this.setState({
      editOptionClicked: !this.state.editOptionClicked
    });
  }

  optionSummaryBox() {
    const { text, destination } = this.props.option;
    return (
      <div className="option-box input-group">
        <div className="option-index-item-buttons input-group-prepend mr-3">
          <span onClick={this.toggleEditOption}>Edit</span>
          <span>Delete</span>
        </div>
        <div className="option-index-item-details form-control">
          <div className="row">
            <div className="col-10">
              <span className="option-index-item-name">{text}</span>
            </div>
            <div className="col-2">
              <span>{destination.name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { option, page } = this.props;

    return (
      <div>
        { this.state.editOptionClicked ? <OptionForm option={option} page={page} handleSubmit={this.editPage} toggleEditOption={this.toggleEditOption}/> : this.optionSummaryBox() }
      </div>
    );
  }
};

export default OptionsIndexItem;
