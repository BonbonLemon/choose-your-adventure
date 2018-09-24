import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import Page from './page';

class AdventureShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAdventure(this.props.adventureId);
    this.props.fetchPages(this.props.adventureId);

    if (this.props.location.pathname.indexOf("pages") !== -1) {
      this.startAdventure();
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

  adventureShowDetail() {
    const { adventure } = this.props;

    return (
      <div id="adventure-show-details">
        <p>
          <span className="font-weight-bold">Description: </span>{ adventure.description }
        </p>
        <div id="start-adventure-button">
          <Link to={"/adventures/" + adventure.id + "/page/" + adventure.start_page_id} onClick={this.startAdventure}>
            <button type="button" className="btn btn-warning btn-lg">Start Adventure</button>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const { currentUser, adventure, adventureId, pages, pageId } = this.props;
    const author = adventure.author || {};
    const page = pages[pageId];
    
    return (
      <div id="adventure-show">
        <h2 id="adventure-show-title">{adventure.title}</h2>
        <div>
          {currentUser && adventure.author && currentUser.id == adventure.author.id ? this.editButton() : null }
          <h4 className="adventure-show-author">By {author.username}</h4>
        </div>
        <div className="adventure-show-box">
          <div className="adventure-show-cover-box">
            { adventure.cover_url ? this.coverImage(adventure.cover_url) : this.defaultImage() }
          </div>
          <div id="adventure-show-content">
            { 
              pageId == 0 ? 
              this.adventureShowDetail() :
              <Page props={this.props} />
            }
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(AdventureShow);
