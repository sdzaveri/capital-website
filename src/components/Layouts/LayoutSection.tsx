/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Layout.scss';
import LayoutBase from './LayoutBase';

import componentsIcon from '../../images/components-gray.svg';
import overviewIcon from '../../images/overview-gray.svg';
import patternsIcon from '../../images/patterns-gray.svg';
import stylesIcon from '../../images/styles-gray.svg';

const LayoutSection = props => (
  <LayoutBase activeTab={props.activeTab} title={props.title}>
    <div className={`${styles.pageHeader} ${styles.sectionHeader}`}>
      {props.activeTab === 'overview' ? <img src={overviewIcon} className={styles.sectionHeaderIcon} /> : null}
      {props.activeTab === 'components' ? <img src={componentsIcon} className={styles.sectionHeaderIcon} /> : null}
      {props.activeTab === 'styles' ? <img src={stylesIcon} className={styles.sectionHeaderIcon} /> : null}
      {props.activeTab === 'patterns' ? <img src={patternsIcon} className={styles.sectionHeaderIcon} /> : null}

      <Header variant="hero">{props.title}</Header>
      <p className={styles.sectionDescription}>{props.description && props.description}</p>

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
