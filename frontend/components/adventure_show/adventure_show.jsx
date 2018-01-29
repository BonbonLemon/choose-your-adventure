import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AdventureShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    // {this.props.adventure.title}
    return (
      <div>
        This is the adventure page.
      </div>
    )
  }
};

export default withRouter(AdventureShow);
