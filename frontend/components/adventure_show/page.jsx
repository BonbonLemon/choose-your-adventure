import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {}
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
    }
  }

  handleOptionClick(e, optionId) {
    e.preventDefault()
    this.props.history.push(optionId.toString());
  }

  optionsIndex(options) {
    return (
      <div id="options-list">
        { 
          options.map(option => (
            <div className="option" key={option.id} onClick={e => this.handleOptionClick(e, option.destination_id)}>
              {option.text}
            </div>
          ))
        }
      </div>
    );
  }

  theEnd() {
    return (
      <div id="the-end">The End</div>
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
      <div id="page-buttons">
        { isFirstPage ? "" : <button type="button" className="btn btn-info mr-3" onClick={this.props.history.goBack}>Back</button> }
        { options.length == 0 ? <button type="button" className="btn btn-info" onClick={this.tryAgain}>Try Again</button> : "" }
      </div>
    );
  }

  render() {
    const { page } = this.state;
    const options = page.options || [];

    return (
      <div id="page-box">
        <h3 id="page-box-text">{page.text}</h3>
        { options.length === 0 ? this.theEnd() : this.optionsIndex(options) }
        { this.pageButtons(options) }
      </div>
    );
  }
}

export default Page;
