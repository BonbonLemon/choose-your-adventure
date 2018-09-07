import React from 'react';
import { withRouter } from 'react-router';

import AdventureForm from './adventure_form';
import GenreInput from '../genre/genre_input';
import GenreInputs from '../genre/genre_inputs';

class AdventureNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genres: [],
      description: '',
      cover_url: ''
    };
    this.createAdventure = this.createAdventure.bind(this);
    this.navigateToAdventureEdit = this.navigateToAdventureEdit.bind(this);
  }

  createAdventure(attributes, e) {
    e.preventDefault();
    const adventure = Object.assign({}, attributes);
    this.props.createAdventure({adventure}, this.navigateToAdventureEdit);
  }

  navigateToAdventureEdit(adventure) {
    this.props.history.push(`/adventureeditor/${adventure.id}`);
  }

  render() {
    return (
      <div>
        <h1 id="adventure-form-header">Create An Adventure</h1>
        <AdventureForm handleSubmit={this.createAdventure}/>
      </div>
    );
  }
}

export default withRouter(AdventureNew);
