import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AdventureShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchAdventure(this.props.adventureId);
  }

  render() {
    return (
      <div>
        This is the adventure page.
        {this.props.adventure.title}
      </div>
    )
  }
};

export default withRouter(AdventureShow);
