import React from 'react';
import { withRouter } from 'react-router-dom';

class AdventureIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  defaultImage() {
    return (
      <div className="default-image">?</div>
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
      <div className="col-lg-4 col-sm-6 col-xs-12">
        <div className="adventure">
          <div className="adventure-image">
            { cover_url ? this.coverImage(cover_url) : this.defaultImage() }
          </div>
          <div className="adventure-description">
            <div className="adventure-author">
              {author.username}
            </div>
            <div className="adventure-title">
              {title}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(AdventureIndexItem);
