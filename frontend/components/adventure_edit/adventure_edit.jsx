import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AdventureEdit extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genres: '',
      description: '',
      cover_url: ''
    };
    this.handleCloudinary = this.handleCloudinary.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToAdventure = this.navigateToAdventure.bind(this);
    this.setAdventureProperties = this.setAdventureProperties.bind(this);
  }

  componentDidMount() {
    // TODO: Check with jeff is this needs an if statement
    this.props.fetchAdventure(this.props.adventureId, this.setAdventureProperties);
  }

  setAdventureProperties(adventure) {
    this.setState(adventure);
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

  handleSubmit(e) {
    e.preventDefault();
    const adventure = Object.assign({}, this.state);
    // TODO:
    this.props.submitAction({adventure}, this.navigateToAdventure);
  }

  navigateToAdventure(adventure) {
    this.props.history.push(`/adventures/${adventure.id}`);
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Edit An Adventure</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  placeholder="Title"
                  onChange={this.update("title")}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  value={genres}
                  placeholder="Genres"
                  rows="2"
                  onChange={this.update("genres")}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  value={description}
                  placeholder="Description"
                  rows="3"
                  onChange={this.update("description")}
                />
              </div>
              { cover }
              <div className="form-group">
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
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdventureEdit);
