import React from 'react';
import PagesIndexItem from './pages_index_item';

class Pages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [],
      name: ""
    }
    this.updatePages = this.updatePages.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.pages !== nextProps.adventure.pages) {
      this.updatePages(nextProps);
    }
  }

  updatePages(nextProps) {
    this.setState({
      pages: nextProps.adventure.pages
    });
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
    this.props.updateAdventure();
    this.setState({name: ""});
  }

  render() {
    const { name, pages } = this.state;

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
              <PagesIndexItem key={page.id} page={page} editPage={this.props.editPage} updateAdventure={this.props.updateAdventure}/>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.handleSubmit}>
              <label>Create A New Page</label>
              <div className="input-group">
                <input
                  type="text"
                  value={name}
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
          </div>
        </div>
      </div>
    );
  }
};

export default Pages;
