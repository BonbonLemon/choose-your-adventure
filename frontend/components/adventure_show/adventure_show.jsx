import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AdventureShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserIsAuthor: false
    }
    this.checkCurrentUser = this.checkCurrentUser.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentDidMount() {
    // TODO: Check with jeff is this needs an if statement
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

  defaultImage() {
    return (
      <div className="adventure-show-default-cover">?</div>
    );
  }

  coverImage(cover_url) {
    return (
      <img className="adventure-show-cover" src={cover_url}/>
    );
  }

  editButton() {
    return (
      <button onClick={this.handleEditClick} type="button" className="edit-button btn btn-danger btn-sm">Edit</button>
    );
  }

  handleEditClick() {
    this.props.history.push(this.props.history.location.pathname + "/edit");
  }

  render() {
    const {adventure} = this.props;
    const {currentUserIsAuthor} = this.state;
    const author = adventure.author || {};
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="adventure-show-title">{adventure.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {currentUserIsAuthor ? this.editButton() : null }
            <h4 className="adventure-show-author">By {author.username}</h4>
          </div>
        </div>
        <div className="row">
          <div className="adventure-show-cover-box col-12" style={{padding: 0}}>
            { adventure.cover_url ? this.coverImage(adventure.cover_url) : this.defaultImage() }
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
