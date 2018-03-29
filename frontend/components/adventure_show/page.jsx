import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {}
    };
    this.setPage = this.setPage.bind(this);
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
      this.setState({
        page: adventure.pages[pageId]
      });
    }
  }

  handleOptionClick(e, optionId) {
    e.preventDefault()
    this.props.history.push(this.state.page.options[optionId].destination_id.toString());
  }

  render() {
    const { page } = this.state;
    const options = page.options || {};

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3 className="page-box-text">{page.text}</h3>
          </div>
        </div>
        <div className="row">
          {Object.keys(options).map(optionId => {
            return (
              <div className="col-12" key={optionId}>
                <div className="option" onClick={e => this.handleOptionClick(e, optionId)}>
                  {options[optionId].text}
                </div>
              </div>
            );
          }
          )}
        </div>
      </div>
    );
  }
}

export default Page;
