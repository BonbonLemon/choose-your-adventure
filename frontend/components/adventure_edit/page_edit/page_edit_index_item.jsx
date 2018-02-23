import React from 'react';

const PageEditIndexItem = ({ page }) => (
  <div className="page-box input-group">
    <div className="page-index-item-buttons input-group-prepend mr-3">
      <span className="mr-3"><img className="page-index-item-button" src="http://res.cloudinary.com/dnyxuskhe/image/upload/v1519423463/edit_qif1lz.png" /></span>
      <span><img className="page-index-item-button" src="http://res.cloudinary.com/dnyxuskhe/image/upload/v1519423844/x_bkgfwz.png" /></span>
    </div>
    <div className="page-index-item-details">
      <div className="row">
        <div className="col-12">
          <span className="page-index-item-name">{page.name}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <span>{page.text}</span>
        </div>
      </div>
    </div>
  </div>
);

export default PageEditIndexItem
