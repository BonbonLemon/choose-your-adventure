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
        <h1>{ user.username + "'s" } Profile</h1>
        <p>More coming soon...</p>
        <h2>Adventures</h2>
        {
          adventures.map(function (adventure) {
            return (
              <div key={ adventure.id } className="profile-adventure-box">
                <Link to={"/adventures/" + adventure.id }>
                  <div className="profile-adventure-details">
                    <h3 className="profile-adventure-title">
                      { adventure.title }
                    </h3>
                    <div className="profile-adventure-description">
                      { adventure.description }
                    </div>
                  </div>
                  <div className="profile-adventure-cover">
                    <img src={ adventure.cover_url } />
                  </div>
                </Link>
              </div>
            );
          })
        }
      </div>
    );
  }
};

export default withRouter(User);
