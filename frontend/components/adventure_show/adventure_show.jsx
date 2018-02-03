import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AdventureShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserIsAuthor: false
    }
    this.checkCurrentUser = this.checkCurrentUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchAdventure(this.props.adventureId, this.checkCurrentUser);
  }

  checkCurrentUser(adventure) {
    const currentUser = this.props.currentUser;
    if (currentUser && currentUser.id == adventure.author.id) {
      this.setState({
        currentUserIsAuthor: true
      });
    }
  }

  render() {
    const adventure = this.props.adventure;
    const author = adventure.author || {};
    // <div className="adventure-box-left col-sm-5 offset-sm-1 col-xs-10 offset-xs-1">
    //   <div className="adventure-details container-fluid">
    //     <div className="row">
    //       <h2 className="adventure-title">{adventure.title}</h2>
    //     </div>
    //     <div className="row">
    //       <span className="author-name">By {author.username}</span>
    //     </div>
    //     <div className="row">
    //       <button className="start-button" type="button">Start</button>
    //     </div>
    //   </div>
    // </div>
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="adventure-show-title">{adventure.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4 className="adventure-show-author">By {author.username}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{padding: 0}}>
            <img className="adventure-show-image" src={adventure.cover_url}/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            // TODO: Page stuff
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(AdventureShow);
