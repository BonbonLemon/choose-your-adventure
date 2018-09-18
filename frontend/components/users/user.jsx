import React from 'react';
import { withRouter } from 'react-router-dom';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.username);
  }

  handleAdventureClick(adventureId) {
    return e => {
      this.props.history.push('/adventures/' + adventureId);
    };
  }

  render() {
    const { user } = this.props;
    const adventures = user.adventures || [];

    return (
      <div id="profile">
        <h1 id="profile-header">{ user.username + "'s" } Profile</h1>
        <p>More coming soon...</p>
        <h2 id="profile-header">Adventures</h2>
        {
          adventures.map(adventure => (
              <div className="profile-adventure-box" onClick={this.handleAdventureClick(adventure.id)} key={ adventure.id }>
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
              </div>
          ))
        }
      </div>
    );
  }
};

export default withRouter(User);
