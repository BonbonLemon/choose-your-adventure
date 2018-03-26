import React from 'react';
import PageIndexItem from './page_index_item';

class Pages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
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
    const page = Object.assign({adventure_id: this.props.adventure.id, name: this.state.name});
    this.props.createPage({page});
    this.setState({name: ""});
  }

  miniPageForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Create A New Page</label>
        <div className="input-group">
          <input
            type="text"
            value={this.state.name}
            className="form-control"
            placeholder="Page Name"
            onChange={this.update("name")}
            required
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">Create Page</button>
          </div>
        </div>
      </form>
    );
  }

  render() {
    const pages = this.props.pages || [];

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h2 className="text-left">Pages</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {pages.map(page => (
              <PageIndexItem key={page.id} page={page} editPage={this.props.editPage} updateAdventure={this.props.updateAdventure} deletePage={this.props.deletePage}/>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            { this.miniPageForm() }
          </div>
        </div>
      </div>
    );
  }
};

export default Pages;
