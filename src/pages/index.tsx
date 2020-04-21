/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import { Link } from 'gatsby';
import React from 'react';

import LayoutHome from '../components/Layouts/LayoutHome';
import styles from '../components/Layouts/LayoutHome.scss';
import componentsIcon from '../images/components-white.svg';
import overviewIcon from '../images/overview-white.svg';
import patternsIcon from '../images/patterns-white.svg';
import stylesIcon from '../images/styles-white.svg';

export default () => (
  <LayoutHome>
    <div className={styles.homeGrid}>
      <Link to="/overview" className={styles.homeButton}>
      <div className={styles.homeButtonIcon}>
        <img src={overviewIcon} alt="" role="presentation" />
      </div>
        <span className={styles.homeButtonHeader}>Overview</span>
        <div className={styles.homeButtonDescription}>
          An overview of what the design system is, how it is built and maintained, and how to get started using it.
        </div>
      </Link>
      <Link to="/styles" className={styles.homeButton}>
      <div className={styles.homeButtonIcon}><img src={stylesIcon} alt="" role="presentation" /></div>
      <span className={styles.homeButtonHeader}>Styles</span>
        <div className={styles.homeButtonDescription}>
          Details behind the visual style of CDS UI, and resources for designers and developers to implement it.
        </div>
      </Link>
      <Link to="/components" className={styles.homeButton}>
        <div className={styles.homeButtonIcon}>
          <img src={componentsIcon} alt="" role="presentation" />
        </div>
        <span className={styles.homeButtonHeader}>Components</span>
        <div className={styles.homeButtonDescription}>
          Guidelines for using components and contributing to the component library for designers and developers.
        </div>
      </Link>
      <Link to="/patterns" className={styles.homeButton}>
      <div className={styles.homeButtonIcon}>
        <img src={patternsIcon} alt="" role="presentation" />
      </div>
      <span className={styles.homeButtonHeader}>Patterns</span>
        <div className={styles.homeButtonDescription}>
          Design patterns and best practices to use as guidelines when building interfaces for any user need.
        </div>
      </Link>
    </div>
  </LayoutHome>
);
