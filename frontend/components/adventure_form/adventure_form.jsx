import React from 'react';
import { withRouter } from 'react-router';

class AdventureForm extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        this is the adventure form...
      </div>
    )
  }
}

export default withRouter(AdventureForm);
