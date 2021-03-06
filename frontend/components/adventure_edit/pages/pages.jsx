import React from 'react';
import PageIndexItemContainer from './page_index_item_container';

class Pages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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
      <form className="mini-page-form" onSubmit={this.handleSubmit}>
        <h5>Create A New Page</h5>
        <div className="input-group">
          <input
            type="text"
            value={this.state.name}
            className="form-control"
            placeholder="Page Name"
            onChange={this.update("name")}
            required
          />
          <button className="btn btn-primary" type="submit">Create Page</button>
        </div>
      </form>
    );
  }

  render() {
    const pages = this.props.pages || [];
    const { adventure } = this.props;

    return (
      <div>
        <div id="pages-index">
          {pages.map(page => (
            <PageIndexItemContainer key={page.id} pageId={page.id} />
          ))}
        </div>
        { this.miniPageForm() }
      </div>
    );
  }
};

export default Pages;
