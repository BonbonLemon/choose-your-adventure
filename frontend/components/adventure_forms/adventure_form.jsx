import React from 'react';
import { withRouter } from 'react-router';

class AdventureForm extends React.Component{
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
    this.props.submitAction({adventure}, this.navigateToAdventure);
  }

  navigateToAdventure(adventure) {
    this.props.history.push(`/adventures/${adventure.id}`);
  }

  render() {
    const { title, genres, description, cover_url } = this.state;
    let cover, submitText;
    if (cover_url) {
      cover =
        <div className="upload-cover-image-wrapper form-group">
          <img src={cover_url}/>
        </div>;
    }
    switch (this.props.formAction) {
      case "CREATE":
        submitText = "Create";
        break;
      case "EDIT":
        submitText = "Save";
        break;
    }
    return (
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
        <button type="submit" className="btn btn-primary">{submitText}</button>
      </form>
    );
  }
}

export default withRouter(AdventureForm);
