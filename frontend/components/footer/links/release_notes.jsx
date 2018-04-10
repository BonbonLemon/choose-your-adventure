import React from 'react';
import { Link } from 'react-router-dom';

const ReleaseNotes = () => {
  return (
    <div className="release-notes">
      <h1>Release Notes</h1>
      <span>Last updated April 9, 2018</span>

      <div className="known-bugs">
        <h3>Known Bugs</h3>
        <ul>
          <li>Going BACK does not allow certain pages to load contents (Refreshing will load contents)</li>
          <li>Footer does not sticks to bottom when page is not filled with enough content</li>
          <li>The "Back to list" button does not fit on a single line when page width gets too small</li>
          <li>After deleting a page, options that would lead to that page send user to an empty page</li>
        </ul>
      </div>
    </div>
  );
};

export default ReleaseNotes;
