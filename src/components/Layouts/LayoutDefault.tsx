/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import PropTypes from 'prop-types';
import React from 'react';

import LayoutBase from './LayoutBase';

import styles from './Layout.scss';

const LayoutDefault = props => (
  <LayoutBase activeTab={props.activeTab}>
    <div className={styles.pageHeader}>
      <Header variant="hero">{props.title}</Header>
      <p className={styles.pageDescription}>{props.description && props.description}</p>
    </div>
    <div className={styles.content}>{props.children}</div>
  </LayoutBase>
);

LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired,
  activeTab: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default LayoutDefault;
