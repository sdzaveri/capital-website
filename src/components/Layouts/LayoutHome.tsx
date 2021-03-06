/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import PropTypes from 'prop-types';
import React from 'react';

import { WebsiteFooter } from '../WebsiteFooter';
import { WebsiteHeader } from '../WebsiteHeader';

import styles from './Layout.scss';
import homeStyles from './LayoutHome.scss';

const LayoutHome = props => (
  <div className={styles.homeWrapper} title="Capital Design System, made by OpenGov">
    <WebsiteHeader />
    <main>
      <div className={homeStyles.homeTitle}>
        <Header variant="hero">Capital Design System</Header>
        <p className={homeStyles.description}>
          enables OpenGov teams to build best-in-class government applications.
          The system is built and maintained by the OpenGov R&D team.
        </p>
      </div>
      <div className={`${styles.content} ${styles.contentWide}`}>
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
