import React from 'react';

const GenreInputs = ({ genres, removeGenre }) => (
  <div className="genres-container">
    {genres.map((genre, idx) => (
      <div className="genre-box" key={idx}>
        <span className="genre-box-name">{genre}</span>
        <button className="genre-remove-button" onClick={e => removeGenre(e, genre)}>x</button>
      </div>
    ))}
  </div>
);

export default GenreInputs;
