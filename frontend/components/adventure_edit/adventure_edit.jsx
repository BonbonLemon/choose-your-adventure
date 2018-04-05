import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AdventureForm from '../adventure_new/adventure_form';
import GenreInput from '../genre/genre_input';
import GenreInputs from '../genre/genre_inputs';
import PageContainer from './pages/pages_container';

class AdventureEdit extends React.Component {
  constructor(props) {
    super(props);

    this.editAdventure = this.editAdventure.bind(this);
    this.navigateToAdventure = this.navigateToAdventure.bind(this);
    this.togglePublished = this.togglePublished.bind(this);
  }

  componentDidMount() {
    if (!this.props.adventure.title) {
      this.props.fetchAdventure(this.props.adventureId);
    }
  }

  editAdventure(attributes, e) {
    e.preventDefault();
    const adventure = Object.assign({}, attributes);
    this.props.editAdventure({adventure}, this.navigateToAdventure);
  }

  navigateToAdventure(adventure) {
    this.props.history.push(`/adventures/${adventure.id}`);
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
      <button type="button" className="btn btn-info margin-left-10" onClick={this.togglePublished}>Make Public</button>
    );
    const hidden = (
      <button type="button" className="btn btn-secondary margin-left-10" onClick={this.togglePublished}>Hide From Public</button>
    );
    if (this.props.adventure["published?"]) {
      return hidden;
    } else {
      return publish;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="adventure-form-header">Edit An Adventure</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            { this.publishButtons() }
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <AdventureForm adventure={this.props.adventure} handleSubmit={this.editAdventure} />
          </div>
        </div>
        <PageContainer adventure={this.props.adventure} />
      </div>
    );
  }
}

export default withRouter(AdventureEdit);
