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
          <li>Editing and creating pages is sometimes difficult as pages will jumble around and not save correctly at times</li>
          <li>After deleting a page, options that would lead to that page send user to an empty page</li>
        </ul>
      </div>

      <div className="known-bugs">
        <h3>In Progress</h3>
        <ul>
          <li>Search bar for adventures as well as sorting by genre, date, popularity etc.</li>
          <li>Comment, reviews, and rating system</li>
          <li>Discover page where users can find other users</li>
        </ul>
      </div>
    </div>
  );
};

export default ReleaseNotes;
