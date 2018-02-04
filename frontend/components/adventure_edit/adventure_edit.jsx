import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AdventureEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAdventure(this.props.adventureId);
  }

  render() {
    return (
      <div>
        i am the edit page
      </div>
    );
  }
};

export default withRouter(AdventureEdit);
