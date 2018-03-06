import React from 'react';

class OptionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'text',
      destination_name: 'destination'
    };
  }

  render() {
    const thisPage = this.props.page;

    return (
      <div className="new-option-form">
        <div className="form-row">
          <div className="col-8">
            <label>Option Text</label>
            <input type="text" placeholder="Add Option Text" className="form-control" />
          </div>
          <div className="col-4">
            <label>Destination</label>
              <select className="custom-select">
                <option value="">No Destination Selected</option>
                {thisPage.adventure.pages.map(page => {
                  if (page.id !== thisPage.id) {
                    return (
                      <option key={page.id} value={page.id}>{page.name}</option>
                    );
                  }
                })}
              </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-12 mt-3">
            <button type="button" className="btn btn-success" onClick={e => (e.preventDefault)}>Save Option</button>
          </div>
        </div>
      </div>
    );
  }
};

export default OptionForm;
