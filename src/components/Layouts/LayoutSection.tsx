/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Layout.scss';
import LayoutBase from './LayoutBase';

const LayoutSection = props => (
  <LayoutBase activeTab={props.activeTab}>
    <div className={`${styles.pageHeader} ${styles.sectionHeader}`}>
      <Header variant="hero">{props.title}</Header>
    </div>
    <div className={styles.content}>{props.children}</div>
  </LayoutBase>
);

LayoutSection.propTypes = {
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default LayoutSection;
