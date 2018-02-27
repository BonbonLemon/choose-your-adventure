import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AdventureForm from '../adventure_new/adventure_form';
import GenreInput from '../genre/genre_input';
import GenreInputs from '../genre/genre_inputs';
import PageContainer from './pages/pages_container';

class AdventureEdit extends React.Component {
  constructor(props) {
    super(props);

    this.updateAdventure = this.updateAdventure.bind(this);
    this.editAdventure = this.editAdventure.bind(this);
    this.navigateToAdventure = this.navigateToAdventure.bind(this);
  }

  componentDidMount() {
    this.updateAdventure();
  }

  updateAdventure() {
    // TODO: Check with jeff is this needs an if statement
    this.props.fetchAdventure(this.props.adventureId);
  }

  editAdventure(attributes, e) {
    e.preventDefault();
    const adventure = Object.assign({}, attributes);
    // TODO:
    this.props.editAdventure({adventure}, this.navigateToAdventure);
  }

  navigateToAdventure(adventure) {
    this.props.history.push(`/adventures/${adventure.id}`);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Edit An Adventure</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <AdventureForm adventure={this.props.adventure} handleSubmit={this.editAdventure} />
          </div>
        </div>
        <PageContainer adventure={this.props.adventure} updateAdventure={this.updateAdventure} />
      </div>
    );
  }
}

export default withRouter(AdventureEdit);
