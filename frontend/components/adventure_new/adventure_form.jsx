import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import GenreInput from '../genre/genre_input';
import GenreInputs from '../genre/genre_inputs';

class AdventureEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genres: [],
      description: '',
      cover_url: ''
    };
    this.setAdventureProperties = this.setAdventureProperties.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
    this.addGenre = this.addGenre.bind(this);
    this.removeGenre = this.removeGenre.bind(this);
  }

  componentDidMount() {
    if (this.props.adventure && this.props.adventure.title) {
      this.setAdventureProperties(this.props.adventure);
    }
  }

  componentWillReceiveProps(nextProps) {
    // TODO: check if there is a better way to update the adventure
    if (nextProps.adventure.title && nextProps.adventure.title !== this.state.title) {
      this.setAdventureProperties(nextProps.adventure);
    }
  }

  setAdventureProperties(adventure) {
    const genres = adventure.genres.map(genre => (
      genre.name
    ));
    const properties = Object.assign({}, adventure, {genres});
    this.setState(properties);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleCloudinary(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(error) {
        console.log(error);
      } else {
        this.setState({ cover_url: results[0].secure_url });
      }
    });
  }

  addGenre(genre) {
    const capitalizedGenre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();
    if (!this.state.genres.includes(capitalizedGenre)) {
      this.setState({genres: this.state.genres.concat(capitalizedGenre)});
    }
  }

  removeGenre(e, deletedGenre) {
    e.preventDefault();
    this.setState({
      genres: this.state.genres.filter(genre => genre !== deletedGenre)
    });
  }

  render() {
    const { title, genres, description, cover_url } = this.state;
    let cover;
    if (cover_url) {
      cover =
        <div className="upload-cover-image-wrapper form-group">
          <img src={cover_url}/>
        </div>;
    }

    return (
      <form onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
        <div className="form-group col-6">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            placeholder="Add a Title"
            onChange={this.update("title")}
            required
          />
        </div>

        <div className="form-group col-6">
          <label>Genres</label>
          <GenreInput addGenre={this.addGenre} />
          <GenreInputs genres={this.state.genres} removeGenre={this.removeGenre} />
        </div>

        <div className="form-group col-12">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            placeholder="Add a Description"
            rows="3"
            onChange={this.update("description")}
          />
        </div>

        <div className="form-group col-6">
          { cover }
          <div className="input-group">
            <div className="input-group-prepend">
              <button
                onClick={this.handleCloudinary}
                className="btn btn-secondary"
                type="button"
              >
                Upload Image
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Cover Photo"
              disabled
            />
          </div>
        </div>

        <div className="form-group col-12">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    );
  }
}

export default withRouter(AdventureEdit);
