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
    if (this.props.currentUser.id == adventure.author.id) {
      this.setState({
        currentUserIsAuthor: true
      });
    }
  }

  render() {
    // let edit;
    // if (this.state.currentUserIsAuthor) { edit = <button>Edit</button>; }
    // return (
    //   <div>
    //     <div>
    //       { edit }
    //     </div>
    //     <div>
    //       {this.props.adventure.title}
    //     </div>
    //   </div>
    // )
    const adventure = this.props.adventure;
    const author = adventure.author || {};
    return (
      <div className="container-fluid">
        <div className="adventure-box row">
          <div className="adventure-box-left col-sm-5 offset-sm-1 col-xs-10 offset-xs-1">
            <div className="adventure-details container-fluid">
              <div className="row">
                <h2 className="adventure-title">{adventure.title}</h2>
              </div>
              <div className="row">
                <span className="author-name">By {author.username}</span>
              </div>
              <div className="row">
                <button className="start-button" type="button">Start</button>
              </div>
            </div>
          </div>

          <div className="adventure-image col-sm-5 col-xs-0" style={{padding: 0}}>
            <img src={adventure.cover_url}/>
          </div>
        </div>

      </div>
    );
  }
};

export default withRouter(AdventureShow);
