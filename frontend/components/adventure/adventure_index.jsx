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
      <div>
        <Link to="adventures/new">Create New Adventure</Link>
        <div className="container-fluid">
          <div className="row">
            {this.props.adventures.map((adventure) => (
              <AdventureIndexItem
                adventure={adventure}
                key={adventure.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(AdventureIndex);
