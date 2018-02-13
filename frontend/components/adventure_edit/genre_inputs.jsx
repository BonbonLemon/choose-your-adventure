import React from 'react';

const GenreInputs = ({ genres, removeGenre }) => (
  <div>
    {genres.map(genre => (
      <div className="genre-box" key={genre.id}>
        <span className="genre-box-name">{genre.name}</span>
        <button className="genre-remove-button" onClick={e => removeGenre(e, genre)}>x</button>
      </div>
    ))}
  </div>
);

export default GenreInputs;
