import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const theEnd = () => (
  <div id="the-end">The End</div>
);

const optionsIndex = (props, adventure, page) => {
  const { options } = page;

  return (
    <div id="options-list">
      { 
        options.map(option => (
          <div className="option" key={option.id} onClick={e => {props.history.push(option.destination_id.toString())}}>
            {option.text}
          </div>
        ))
      }
    </div>
  );
};

const pageButtons = (props, adventure, page) => {
  const { options } = page;

  return (
    <div id="page-buttons">
      { page.id == adventure.start_page_id ? "" : <button type="button" className="btn btn-info mr-3" onClick={props.history.goBack}>Back</button> }
      { options.length == 0 ? <button type="button" className="btn btn-info" onClick={() => {tryAgain(props, adventure)}}>Try Again</button> : "" }
    </div>
  );
}

const tryAgain = (props, adventure) => {
  props.history.push(adventure.start_page_id.toString());
}

const Page = ({props}) => {
  const { adventure, pageId, pages } = props;
  const page = pages[pageId];

  return (
    page ?
    <div id="page-box">
      <h3 id="page-box-text">{page.text}</h3>
      { page.options.length == 0 ? theEnd() : optionsIndex(props, adventure, page) }
      { pageButtons(props, adventure, page) }
    </div> :
    <div>Loading...</div>
  )
}

export default withRouter(Page);
