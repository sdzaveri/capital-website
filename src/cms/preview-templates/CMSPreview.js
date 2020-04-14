import React from 'react'
import PropTypes from 'prop-types'

import './preview.css';

const CMSPreview = ({ entry, widgetFor }) => {
  return (
    <div className="body">
      <div className="pageHeader">
        <h1>{entry.getIn(['data', 'title'])}</h1>
        <p className="pageDescription">{entry.getIn(['data', 'description']) && entry.getIn(['data', 'description'])}</p>
      </div>
      <div className="content">{widgetFor('body')}</div>
    </div>
  );
};

CMSPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CMSPreview;
