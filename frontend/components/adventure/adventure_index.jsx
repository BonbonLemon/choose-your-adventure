import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AdventureIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.fetchAdventures();
  // }

  componentDidMount() {
    this.props.fetchAdventures();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.adventures.map((adventure, idx) => (
            <li key={idx}>
              {adventure.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(AdventureIndex);
