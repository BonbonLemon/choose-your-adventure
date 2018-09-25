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
      destination_name = 'No Destination';
    }
    return (
      <div className="option-index-item input-group">
        <div className="option-index-item-button" onClick={this.toggleEditOption}>
          <img onClick={this.toggleEditPage} src="http://res.cloudinary.com/dnyxuskhe/image/upload/v1522659498/61776_ah30jf.svg" />
        </div>
        <div className="option-index-item-button" onClick={this.deleteOption}>
          <img onClick={this.toggleEditPage} src="http://res.cloudinary.com/dnyxuskhe/image/upload/v1522660345/trash_can_wulwhz.svg" />
        </div>
        <div className="option-index-item-text">{text}</div>
        <div className="option-index-item-destination-name">{destination_name}</div>
      </div>
    );
  }

  render() {
    const { option, pages, page } = this.props;

    return (
      <div>
        { this.state.editOptionClicked ? <OptionForm option={option} pages={pages} page={page} handleSubmit={this.editOption} toggleEditOption={this.toggleEditOption}/> : this.optionSummaryBox() }
      </div>
    );
  }
};

export default OptionsIndexItem;
