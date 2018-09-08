import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {},
      // firstPageId: null
    };
    this.setPage = this.setPage.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
  }

  componentDidMount() {
    const { adventure, adventureId } = this.props;
    const pageId = this.props.match.params.pageId;

    if (!adventure.title) {
      this.props.fetchAdventure(adventureId, (adventure) => this.setPage(adventure, pageId));
    } else {
      this.setPage(adventure, pageId);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setPage(nextProps.adventure, nextProps.match.params.pageId);
  }

  setPage(adventure, pageId) {
    if (adventure.pages) {
      const page = adventure.pages.find(function (page) {
        return page.id == pageId;
      });
      this.setState({
        page: page
      });

      // if (!this.state.firstPageId) {
      //   this.setState({firstPageId: Object.keys(adventure.pages)[0]})
      // }
    }

  }

  handleOptionClick(e, optionId) {
    e.preventDefault()
    this.props.history.push(optionId.toString());
  }

  optionsIndex(options) {
    const optionButtons =
    options.map(option => {
      return (
        <div className="col-12" key={option.id}>
          <div className="option" onClick={e => this.handleOptionClick(e, option.destination_id)}>
            {option.text}
          </div>
        </div>
      );
    });
    return optionButtons;
  }

  theEnd() {
    return (
      <div className="the-end">The End</div>
    );
  }

  tryAgain() {
    this.props.history.push(this.props.adventure.start_page_id.toString());
    // this.props.history.push(this.state.firstPageId);
  }

  pageButtons(options) {
    const { adventure } = this.props;
    let isFirstPage = false;
    if (adventure.start_page_id && this.state.page.id === adventure.start_page_id) {
      isFirstPage = true;
    }
    return (
      <div className="page-buttons">
        { isFirstPage ? "" : <button type="button" className="btn btn-info mr-3" onClick={this.props.history.goBack}>Back</button> }
        { options.length == 0 ? <button type="button" className="btn btn-info" onClick={this.tryAgain}>Try Again</button> : "" }
      </div>
    );
  }

  render() {
    const { page } = this.state;
    const options = page.options || [];

    return (
      <div className="container-fluid full-height">
        <div className="row">
          <div className="col-12">
            <h3 className="page-box-text">{page.text}</h3>
          </div>
        </div>
        <div className="row">
          { options.length === 0 ? this.theEnd() : this.optionsIndex(options) }
        </div>
        { this.pageButtons(options) }
      </div>
    );
  }
}

export default Page;
