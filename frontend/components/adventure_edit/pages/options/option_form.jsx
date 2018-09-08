import React from 'react';

class OptionForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.option) {
      const { text, destination_id } = this.props.option;
      this.state = {
        text: text,
        destination_id: destination_id
      };
    } else {
      this.state = {
        text: '',
        destination_id: ''
      };
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  render() {
    const thisPage = this.props.page;
    const { text, destination_id } = this.state;

    return (
      <form className="option-index-item option-form" onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
        <div className="option-form-row">
          <div className="option-text-input">
            <label>Option Text</label>
            <input
              type="text"
              className="form-control"
              value={text}
              placeholder="Add Option Text"
              onChange={this.update("text")}
              required
            />
          </div>
          <div className="option-destination-input">
            <label>Destination</label>
            <select
              className="custom-select"
              value={destination_id}
              onChange={this.update("destination_id")}
              required
            >
              <option value="">No Destination Selected</option>
              { thisPage.adventure.pages.map(page => {
                if (page.id !== thisPage.id) {
                  return (
                    <option key={page.id} value={page.id}>{page.name}</option>
                  );
                }
              })}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-success">Save Option</button>
      </form>
    );
  }
};

export default OptionForm;
