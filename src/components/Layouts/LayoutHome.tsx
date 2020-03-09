/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import PropTypes from 'prop-types';
import React from 'react';

import opengovIcon from '../../images/OpenGov-Icon-White.png';

import { WebsiteFooter } from '../WebsiteFooter';
import { WebsiteHeader } from '../WebsiteHeader';

import styles from './Layout.scss';
import homeStyles from './LayoutHome.scss';

const LayoutHome = props => (
  <div className={styles.homeWrapper}>
    <WebsiteHeader />
    <main>
      <div className={homeStyles.homeTitle}>
        <img src={opengovIcon} className={homeStyles.homeIcon} alt="OpenGov Icon" />
        <Header variant="hero">Capital Design System</Header>
        <p className={homeStyles.description}>
          enables OpenGov teams to build best-in-class government applications.
          The system is built and maintained by the OpenGov R&D team.
          It offers React components, design guidelines, and interaction patterns.
        </p>
      </div>
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
