import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.username);
  }


  render() {
    const { user } = this.props;
    const adventures = user.adventures || [];

    return (
      <div>
        <div>
          <h2>Adventures</h2>
          <ul>
            {
              adventures.map(function (adventure) {
                return <li key={adventure.id}>{adventure.title}</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
};

export default withRouter(User);
