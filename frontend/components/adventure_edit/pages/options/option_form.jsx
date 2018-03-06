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
    // <div className="new-option-form">
    //   <div className="form-row">
    //     <div className="col-8">
    //       <label>Option Text</label>
    //       <input type="text" placeholder="Add Option Text" className="form-control" />
    //     </div>
    //     <div className="col-4">
    //       <label>Destination</label>
    //         <select className="custom-select">
    //           <option value="">Open this select menu</option>
    //           <option value="1">One</option>
    //           <option value="2">Two</option>
    //           <option value="3">Three</option>
    //         </select>
    //     </div>
    //   </div>
    //   <div className="form-row">
    //     <div className="col-12 mt-3">
    //       <button type="submit" className="btn btn-success">Save Option</button>
    //     </div>
    //   </div>
    // </div>

    return (
      <form className="new-option-form">
        <div className="form-row">
          <div className="col-8">
            <label>Option Text</label>
            <input type="text" placeholder="Add Option Text" className="form-control" />
          </div>
          <div className="col-4">
            <label>Destination</label>
              <select className="custom-select">
                <option value="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-success">Save Option</button>
          </div>
        </div>
      </form>
    );
  }
};

export default OptionForm;
