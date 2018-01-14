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
    const adventures = (this.props.adventures[1]) ? this.props.adventures : [];
    debugger;
    return (
      <div>
        <ul>
          {Object.keys(adventures).map(key => (
            <li>
              {adventures[key].title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(AdventureIndex);
