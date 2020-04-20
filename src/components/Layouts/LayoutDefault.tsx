/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import LayoutBase from './LayoutBase';

import styles from './Layout.scss';

const LayoutDefault = props => (
  <LayoutBase activeTab={props.activeTab} title={props.title}>
    <div className={styles.pageHeader}>
      <Header variant="hero">{props.title}</Header>
      <p className={styles.pageDescription}>{props.description && props.description}</p>
      {props.tabs ? (
        <ul className={styles.tabs} role="navigation">
          {props.tabs.map((tab) => (
            <li>
              <Link
                activeClassName={styles.tabsActive}
                to={tab.url}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : ''}
    </div>
    <div className={styles.content}>{props.children}</div>
  </LayoutBase>
);

LayoutDefault.propTypes = {
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  tabs: PropTypes.array
};

export default LayoutDefault;
