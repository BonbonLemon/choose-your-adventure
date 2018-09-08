import React from 'react';
import PageForm from './page_form.jsx';

class PagesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editPageClicked: false
    };
    this.editPage = this.editPage.bind(this);
    this.toggleEditPage = this.toggleEditPage.bind(this);
    this.deletePage = this.deletePage.bind(this);
  }

  editPage(attributes, e) {
    e.preventDefault();
    const page = Object.assign({id: this.props.page.id}, attributes);
    this.props.editPage({page}, this.toggleEditPage);
  }

  toggleEditPage() {
    this.setState({
      editPageClicked: !this.state.editPageClicked
    });
  }

  deletePage(e) {
    e.preventDefault();
    const isConfirmed = confirm(`Are you sure you want to delete the \"${this.props.page.name}\" page?`);
    if (isConfirmed) {
      this.props.deletePage(this.props.page.id);
    }
  }

  pageSummaryBox() {
    const { name, text } = this.props.page;
    return (
      <div className="page-index-item page-box input-group">
        <div className="page-index-item-button"><img onClick={this.toggleEditPage} src="http://res.cloudinary.com/dnyxuskhe/image/upload/v1519423463/edit_qif1lz.png" /></div>
        <div className="page-index-item-button"><img onClick={this.deletePage} src="http://res.cloudinary.com/dnyxuskhe/image/upload/v1519423844/x_bkgfwz.png" /></div>
        <div className="page-index-item-details">
          <div className="page-index-item-name">{name}</div>
          <div className="page-index-item-text">{text}</div>
        </div>
      </div>
    );
  }

  render() {
    const { page } = this.props;

    return (
      <div>
        { this.state.editPageClicked ? <PageForm page={page} handleSubmit={this.editPage} toggleEditPage={this.toggleEditPage}/> : this.pageSummaryBox() }
      </div>
    );
  }
};

export default PagesIndexItem;
