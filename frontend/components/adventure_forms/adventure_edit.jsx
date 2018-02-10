import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AdventureForm from './adventure_form';

const AdventureEdit = ({ adventure, editAdventure }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <h1>Edit An Adventure</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <AdventureForm
          adventure={adventure}
          formAction="EDIT"
          submitAction={editAdventure}
        />
      </div>
    </div>
  </div>
)

export default withRouter(AdventureEdit);
