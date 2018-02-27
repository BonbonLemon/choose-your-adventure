import React from 'react';
import PagesIndexItem from './pages_index_item';
import PageForm from './page_form';

class Pages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasNewPage: false,
      pages: []
    }
    this.updatePages = this.updatePages.bind(this);
    this.toggleHasNewPage = this.toggleHasNewPage.bind(this);
    this.createPage = this.createPage.bind(this);
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

  createPage(attributes, e) {
    e.preventDefault();
    const page = Object.assign({adventure_id: this.props.adventure.id}, attributes);
    this.props.createPage({page});
    this.props.updateAdventure();
    this.toggleHasNewPage();
  }

  toggleHasNewPage() {
    this.setState({
      hasNewPage: !this.state.hasNewPage
    });
  }

  render() {
    const { hasNewPage, pages } = this.state;
    const newPage = {name: '', text: ''};

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
              <PagesIndexItem key={page.id} page={page} editPage={this.props.editPage}/>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="page-box add-page-button toggle-button" onClick={this.toggleHasNewPage}>
              <span>[{ hasNewPage ? "-" : "+" }]</span>
              <span> Add New Page</span>
            </div>
          </div>
        </div>
        { hasNewPage ? <PageForm page={newPage} handleSubmit={this.createPage} /> : "" }
      </div>
    );
  }
};

export default Pages;
