/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { WebsiteFooter } from '../WebsiteFooter';
import { WebsiteHeader } from '../WebsiteHeader';

import styles from './Layout.scss';

const LayoutHome = props => (
  <div className={styles.referenceWrapper}>
    <WebsiteHeader />
    <main>
      <div className={styles.pageHeader}>
        <Header variant="hero">{props.title}</Header>

        <p className={styles.pageDescription}>{props.description}</p>
      </div>
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
      <div className={styles.content}>
        {props.children}
      </div>
      <WebsiteFooter />
    </main>
  </div>
);

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutHome;
