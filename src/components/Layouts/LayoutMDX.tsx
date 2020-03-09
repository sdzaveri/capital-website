/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import PropTypes from 'prop-types';
import React from 'react';

import LayoutBase from './LayoutBase';

import styles from './Layout.scss';

const LayoutMDX = props => (
  <LayoutBase activeTab={props.pageContext.frontmatter.activeTab}>
    <div className={styles.pageHeader}>
      <Header variant="hero">{props.pageContext.frontmatter.title}</Header>
      <p className={styles.pageDescription}>{props.pageContext.frontmatter.description && props.pageContext.frontmatter.description}</p>
    </div>
    <div className={styles.content}>{props.children}</div>
  </LayoutBase>
);

LayoutMDX.propTypes = {
  children: PropTypes.node.isRequired,
  activeTab: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default LayoutMDX;
