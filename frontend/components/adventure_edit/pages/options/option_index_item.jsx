import React from 'react';
import OptionForm from './option_form.jsx';

class OptionsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editOptionClicked: false
    };
    this.toggleEditOption = this.toggleEditOption.bind(this);
    this.editOption = this.editOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
  }

  toggleEditOption() {
    this.setState({
      editOptionClicked: !this.state.editOptionClicked
    });
  }

  editOption(attributes, e) {
    e.preventDefault();
    const option = Object.assign({id: this.props.option.id}, attributes);
    this.props.editOption({option}, this.toggleEditOption);
  }

  deleteOption(e) {
    e.preventDefault();
    const isConfirmed = confirm(`Are you sure you want to delete the \"${this.props.option.text}\" option?`);
    if (isConfirmed) {
      this.props.deleteOption(this.props.option.id);
    }
  }

  optionSummaryBox() {
    const { option } = this.props;
    const { text } = option;

    let destination_name;
    if (option.destination_id) {
      destination_name = option.destination.name;
    } else {
      destination_name = 'The End';
    }
    return (
      <div className="option-box input-group">
        <div className="option-index-item-buttons input-group-prepend mr-3">
          <span onClick={this.toggleEditOption}>Edit</span>
          <span onClick={this.deleteOption}>Delete</span>
        </div>
        <div className="option-index-item-details form-control">
          <div className="row">
            <div className="col-10">
              <span className="option-index-item-name">{text}</span>
            </div>
            <div className="col-2">
              <span>{destination_name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { option } = this.props;

    return (
      <div>
        { this.state.editOptionClicked ? <OptionForm option={option} page={option.page} handleSubmit={this.editOption} toggleEditOption={this.toggleEditOption}/> : this.optionSummaryBox() }
      </div>
    );
  }
};

export default OptionsIndexItem;
