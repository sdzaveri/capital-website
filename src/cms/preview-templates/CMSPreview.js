import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '@opengov/component-library/capital';

import '../../components/Layouts/base.scss';
import styles from '../../components/Layouts/Layout.scss';

const CMSPreview = ({ entry, widgetFor }) => {
  return (
    <>
      <div className={styles.pageHeader}>
        <Header variant="hero">{entry.getIn(['data', 'title'])}</Header>
        <p className={styles.pageDescription}>{entry.getIn(['data', 'description']) && entry.getIn(['data', 'description'])}</p>
      </div>
      <div className={styles.content}>{widgetFor('body')}</div>
    </>
  );
};

CMSPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CMSPreview;
