import React from 'react';
import { withRouter } from 'react-router-dom';

class AdventureIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleAdventureClick = this.handleAdventureClick.bind(this);
  }

  handleAdventureClick(e) {
    e.preventDefault();
    this.props.history.push(`/adventures/${this.props.adventure.id}`);
  }

  defaultImage() {
    return (
      <div className="default-cover">?</div>
    )
  }

  coverImage(cover_url) {
    return (
      <img src={cover_url} />
    );
  }

  render() {
    const { title, author, cover_url } = this.props.adventure;

    return (
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="adventure-index-item" onClick={this.handleAdventureClick}>
          <div className="adventure-index-item-cover">
            { cover_url ? this.coverImage(cover_url) : this.defaultImage() }
          </div>
          <div className="adventure-index-item-description">
            <div className="adventure-index-item-title">
              {title}
            </div>
            <div className="adventure-index-item-author">
              {author.username}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(AdventureIndexItem);
