import React from 'react'
import PropTypes from 'prop-types'
import { LayoutDefault } from '../../components/Layout/LayoutDefault'

const CMSPreview = ({ entry, widgetFor }) => {
  return (
    <LayoutDefault
      children={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      activeTab={entry.getIn(['data', 'activeTab'])}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

CMSPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CMSPreview;
