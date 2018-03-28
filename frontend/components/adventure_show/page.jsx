import React from 'react';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {}
    };
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    if (!this.props.adventure.title) {
      this.props.fetchAdventure(this.props.adventureId, this.setPage);
    }
  }

  setPage(adventure) {
    debugger;
    this.setState({
      page: adventure.pages[this.props.match.params.pageId]
    });
  }

  render() {
    const { page } = this.state;

    return (
      <div>
        {page.name}
      </div>
    );
  }
}

export default Page;
