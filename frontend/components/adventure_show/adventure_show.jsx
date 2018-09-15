import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import PageContainer from './page_container';

class AdventureShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserIsAuthor: false,
      adventureStarted: false
    }
    this.checkCurrentUser = this.checkCurrentUser.bind(this);
    this.startAdventure = this.startAdventure.bind(this);
  }

  componentDidMount() {
    this.props.fetchAdventure(this.props.adventureId, this.checkCurrentUser);

    if (this.props.location.pathname.indexOf("pages") !== -1) {
      this.startAdventure();
    }
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
      <div id="adventure-show-edit-button">
        <Link to={"/adventureeditor/" + this.props.adventureId}>
          <button type="button" className="edit-button btn btn-danger btn-sm">Edit</button>
        </Link>
      </div>
    );
  }

  startAdventure() {
    this.setState({adventureStarted: true});
  }

  adventureShowDetail() {
    const { adventure } = this.props;

    return (
      <div id="adventure-show-details">
        <p>
          <span className="font-weight-bold">Description: </span>{ adventure.description }
        </p>
        <div id="start-adventure-button">
          <Link to={this.props.location.pathname + "/pages/" + adventure.start_page_id} onClick={this.startAdventure}>
            <button type="button" className="btn btn-warning btn-lg">Start Adventure</button>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const { adventure } = this.props;
    const { currentUserIsAuthor } = this.state;
    const author = adventure.author || {};

    return (
      <div id="adventure-show">
        <h2 id="adventure-show-title">{adventure.title}</h2>
        <div>
          {currentUserIsAuthor ? this.editButton() : null }
          <h4 className="adventure-show-author">By {author.username}</h4>
        </div>
        <div className="adventure-show-box">
          <div className="adventure-show-cover-box">
            { adventure.cover_url ? this.coverImage(adventure.cover_url) : this.defaultImage() }
          </div>
          <div id="adventure-show-page-box">
            { this.state.adventureStarted ? "" : this.adventureShowDetail() }
            <Route path="/adventures/:adventureId/pages/:pageId" adventure={adventure} component={PageContainer} />
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(AdventureShow);
