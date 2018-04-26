import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AdventureIndexItem from './adventure_index_item';

class AdventureIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAdventures();
  }

  handleCreateClick(e) {
    e.preventDefault();
    this.props.history.push('/adventures/new');
  }

  render() {
    return (
      <div id="adventure-index-wrapper">
        <div className="adventure-index-item-wrapper" onClick={this.handleCreateClick}>
          <div className="adventure-index-item">
            <div className="adventure-index-item-cover">
              <div className="default-cover">+</div>
            </div>
            <div className="adventure-index-item-description">
              <div className="adventure-index-item-title">
                Create New Adventure
              </div>
            </div>
          </div>
        </div>
        {this.props.adventures.map((adventure) => {
          if (adventure["published?"]) {
            return (
              <AdventureIndexItem
                adventure={adventure}
                key={adventure.id}
                />
            );
          }
        })}
      </div>
    );
  }
};

export default withRouter(AdventureIndex);
