import React from 'react';

class GenreInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: ''
    };
    this.updateGenre = this.updateGenre.bind(this);
    this.checkForEnter = this.checkForEnter.bind(this);
    this.submitGenre = this.submitGenre.bind(this);
  }

  updateGenre(e) {
    this.setState({genre: e.target.value});
  }

  checkForEnter(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.submitGenre();
    }
  }

  submitGenre() {
    this.props.addGenre(this.state.genre);
    this.setState({genre: ''});
  }

  render() {
    const genre = this.state.genre;

    return (
      <div id="genre-input" className="adventure-form-group input-group">
        <input
          type="text"
          className="form-control"
          value={genre}
          placeholder="Add genres"
          onChange={this.updateGenre}
          onKeyDown={this.checkForEnter}
        />
        <div>
          <button className="btn btn-success" type="button" onClick={this.submitGenre}>Add</button>
        </div>
      </div>
    );
  }
}

export default GenreInput;
