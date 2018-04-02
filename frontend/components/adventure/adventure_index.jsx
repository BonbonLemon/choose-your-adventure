import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AdventureIndexItem from './adventure_index_item';

class AdventureIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAdventures();
  }

  render() {
    return (
      <div className="container-fluid">
        <Link to="adventures/new">
          <button type="button" className="btn btn-info create-adventure-button">Create New Adventure</button>
        </Link>
        <div className="row">
          {this.props.adventures.map((adventure) => (
            <AdventureIndexItem
              adventure={adventure}
              key={adventure.id}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default withRouter(AdventureIndex);
