import React from 'react';
import { withRouter } from 'react-router';

class AdventureForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image_url: ''
    };
    this.handleCloudinary = this.handleCloudinary.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({ image_url: results[0].secure_url });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const adventure = Object.assign({}, this.state)
    this.props.createAdventure({adventure});
    this.props.history.push('/');
  }

  render() {
    const { title } = this.state;
    const { image_url } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={this.update('title')}
          />
          <button
            onClick={this.handleCloudinary}
          >
            Add Cover Image
          </button>
          <img src={image_url}/>
          <input
            type='submit'
            value='Create Adventure'
          />
        </form>
      </div>
    )
  }
}

export default withRouter(AdventureForm);
