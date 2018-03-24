import React from 'react';
import PageForm from './page_form.jsx';

class PagesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editPageClicked: false
    };
    this.editPage = this.editPage.bind(this);
    this.editPageCallback = this.editPageCallback.bind(this);
    this.toggleEditPage = this.toggleEditPage.bind(this);
    this.deletePage = this.deletePage.bind(this);
  }

  editPage(attributes, e) {
    e.preventDefault();
    const page = Object.assign({id: this.props.page.id}, attributes);
    this.props.editPage({page}, this.editPageCallback);
  }

  editPageCallback() {
    this.toggleEditPage();
    this.props.updateAdventure();
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
      <div className="page-box input-group">
        <div className="page-index-item-buttons input-group-prepend mr-3">
          <span className="mr-3"><img className="page-index-item-button" onClick={this.toggleEditPage} src="http://res.cloudinary.com/dnyxuskhe/image/upload/v1519423463/edit_qif1lz.png" /></span>
          <span><img className="page-index-item-button" onClick={this.deletePage} src="http://res.cloudinary.com/dnyxuskhe/image/upload/v1519423844/x_bkgfwz.png" /></span>
        </div>
        <div className="page-index-item-details">
          <div className="row">
            <div className="col-12">
              <span className="page-index-item-name">{name}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <span>{text}</span>
            </div>
          </div>
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
