import React from 'react';
import { withRouter } from 'react-router';

import AdventureForm from './adventure_form';

const AdventureNew = ({ createAdventure }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <h1>Create An Adventure</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <AdventureForm
          formAction="CREATE"
          submitAction={createAdventure}
        />
      </div>
    </div>
  </div>
);

export default withRouter(AdventureNew);
