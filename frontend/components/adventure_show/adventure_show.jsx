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
    if (!this.props.adventure.title) {
      this.props.fetchAdventure(this.props.adventureId, this.checkCurrentUser);
    } else {
      this.checkCurrentUser(this.props.adventure);
    }

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
      <Link to={"/adventureeditor/" + this.props.adventureId}>
        <button type="button" className="edit-button btn btn-danger btn-sm">Edit</button>
      </Link>
    );
  }

  startAdventure() {
    this.setState({adventureStarted: true});
  }

  startAdventureButton() {
    const { adventure } = this.props;
    let firstPageId;
    if (adventure.pages) {
      firstPageId = Object.keys(adventure.pages)[0];
    } else {
      firstPageId = 1;
    }

    return (
      <Link to={this.props.location.pathname + "/pages/" + firstPageId} onClick={this.startAdventure}>Start Adventure</Link>
    );
  }

  render() {
    const { adventure } = this.props;
    const { currentUserIsAuthor } = this.state;
    const author = adventure.author || {};

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="adventure-show-title text-center">{adventure.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {currentUserIsAuthor ? this.editButton() : null }
            <h4 className="adventure-show-author">By {author.username}</h4>
          </div>
        </div>
        <div className="row">
          <div className="adventure-show-cover-box col-12">
            { adventure.cover_url ? this.coverImage(adventure.cover_url) : this.defaultImage() }
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="adventure-page-box">
              { this.state.adventureStarted ? "" : this.startAdventureButton() }
              <Route path="/adventures/:adventureId/pages/:pageId" adventure={adventure} component={PageContainer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(AdventureShow);
