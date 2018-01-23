import React from 'react';
import { withRouter } from 'react-router';

class AdventureForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={this.update('title')}
          />
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
