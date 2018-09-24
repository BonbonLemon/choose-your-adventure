import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AdventureForm from '../adventure_new/adventure_form';
import GenreInput from '../genre/genre_input';
import GenreInputs from '../genre/genre_inputs';
import PageContainer from './pages/pages_container';

class AdventureEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startPageId: "",
      isSaved: false
    }

    this.setStartPageId = this.setStartPageId.bind(this);
    this.saveStartPage = this.saveStartPage.bind(this);
    this.editAdventure = this.editAdventure.bind(this);
    this.navigateToAdventure = this.navigateToAdventure.bind(this);
    this.startingPageLabel = this.startingPageLabel.bind(this);
    this.alertSaved = this.alertSaved.bind(this);
    this.togglePublished = this.togglePublished.bind(this);
  }

  componentDidMount() {
    this.props.fetchAdventure(this.props.adventureId, adventure => {
      this.setStartPageId(adventure);
      this.checkCurrentUser(adventure);
    });
    this.props.fetchPages(this.props.adventureId);
  }

  componentWillReceiveProps(nextProps) {
    const { adventure } = nextProps
    if (adventure.start_page_id !== this.state.startPageId) {
      this.setState({startPageId: adventure.start_page_id});
    }
  }

  checkCurrentUser(adventure) {
    const currentUser = this.props.currentUser;
    if (!currentUser || currentUser.id !== adventure.author.id) {
      this.props.history.push('/');
    }
  }

  setStartPageId(adventure) {
    if (adventure.start_page_id) {
      this.setState({startPageId: adventure.start_page_id});
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  saveStartPage(e) {
    e.preventDefault();

    let { adventure } = this.props;
    adventure = Object.assign({id: adventure.id, start_page_id: this.state.startPageId});
    this.props.editAdventure({adventure}, this.alertSaved);
  }

  alertSaved() {
    this.setState({isSaved: true});

    setTimeout(function () {
      this.setState({isSaved: false});
    }.bind(this), 1500);
  }

  editAdventure(attributes, e) {
    e.preventDefault();
    const adventure = Object.assign({id: this.props.adventureId}, attributes);
    this.props.editAdventure({adventure}, this.navigateToAdventure);
  }

  navigateToAdventure(adventure) {
    this.props.history.push("/adventures/" + adventure.id);
  }

  startingPageLabel() {
    if (this.state.isSaved) {
      return (
        <button
          className="btn btn-success starting-page-label"
          type="button"
          disabled
        >
          Saved!
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-secondary starting-page-label"
          type="button"
          disabled
        >
          Starting Page
        </button>
      );
    }
  }

  togglePublished(e) {
    e.preventDefault();

    let { adventure } = this.props;
    const isPublished = {"published?": !adventure["published?"]};
    adventure = Object.assign({id: adventure.id}, isPublished);
    this.props.editAdventure({adventure});
  }

  publishButtons() {
    const publish = (
      <button type="button" className="btn btn-info" onClick={this.togglePublished}>Make Public</button>
    );
    const hidden = (
      <button type="button" className="btn btn-secondary" onClick={this.togglePublished}>Hide From Public</button>
    );
    if (this.props.adventure["published?"]) {
      return hidden;
    } else {
      return publish;
    }
  }

  render() {
    const { startPageId } = this.state;
    const { adventure, pages } = this.props;

    return (
      <div>
        <h1 id="adventure-form-header">Edit An Adventure</h1>
        <div id="publish-button-wrapper">
          { this.publishButtons() }
        </div>
        <AdventureForm adventure={adventure} handleSubmit={this.editAdventure} />

        <div id="pages-container">
          <h2>Pages</h2>
          <div className="starting-page-select">
            <div className="input-group">
              <div className="input-group-prepend">
                { this.startingPageLabel() }
              </div>
              <select
                className="custom-select form-control"
                value={startPageId}
                onChange={this.update("startPageId")}
                required
              >
                <option value="">No Page Selected</option>
                { pages.map(page => {
                  return (
                    <option key={page.id} value={page.id}>{page.name}</option>
                  );
                })}
              </select>
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={this.saveStartPage}>Set</button>
              </div>
            </div>
          </div>
          <PageContainer pages={pages} />
        </div>
      </div>
    );
  }
}

export default withRouter(AdventureEdit);
