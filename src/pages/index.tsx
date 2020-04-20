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
          Learn how to use and contribute to CDS and the component library.
        </div>
      </Link>
      <Link to="/styles" className={styles.homeButton}>
      <div className={styles.homeButtonIcon}><img src={stylesIcon} alt="" role="presentation" /></div>
      <span className={styles.homeButtonHeader}>Styles</span>
        <div className={styles.homeButtonDescription}>
          The patterns and design guidelines that shape the design system.
        </div>
      </Link>
      <Link to="/components" className={styles.homeButton}>
        <div className={styles.homeButtonIcon}>
          <img src={componentsIcon} alt="" role="presentation" />
        </div>
        <span className={styles.homeButtonHeader}>Components</span>
        <div className={styles.homeButtonDescription}>
          API and usage guidelines for all packages built with CDS.
        </div>
      </Link>
      <Link to="/patterns" className={styles.homeButton}>
      <div className={styles.homeButtonIcon}>
        <img src={patternsIcon} alt="" role="presentation" />
      </div>
      <span className={styles.homeButtonHeader}>Patterns</span>
        <div className={styles.homeButtonDescription}>
          The patterns and design guidelines that shape the design system.
        </div>
      </Link>
    </div>
  </LayoutHome>
);

// Future Homepage Content
// <div className={styles.grid2}>
//   <div>
//     <Header variant="h2" className="websiteH2">Roadmap</Header>
//     <Header variant="h3" className="websiteH3">Released in Q2</Header>
//     <ul>
//       <li>Text</li>
//       <li>Text</li>
//       <li>Text</li>
//     </ul>
//     <Header variant="h3" className="websiteH3">Coming soon</Header>
//     <ul>
//       <li>Template components</li>
//       <li>This website!</li>
//       <li>Component refactors for Buttons, Forms and more</li>
//       <li>A new table component</li>
//     </ul>
//   </div>
//   <div>
//     <Header variant="h2" className="websiteH2">Popular resources</Header>
//     <div className={styles.grid2}>
//       <div>
//         <Link to=""><Text.Body.Prominent>Changelog</Text.Body.Prominent></Link>
//         <p>All recent changes made</p>
//       </div>
//       <div>
//         <Link to=""><Text.Body.Prominent>Design Specs</Text.Body.Prominent></Link>
//         <p>Lorem ipsum dolor sit amet.</p>
//       </div>
//       <div>
//         <Link to=""><Text.Body.Prominent>Sketch Library</Text.Body.Prominent></Link>
//         <p>Lorem ipsum dolor sit amet.</p>
//       </div>
//       <div>
//         <Link to=""><Text.Body.Prominent>Tokens</Text.Body.Prominent></Link>
//         <p>Lorem ipsum dolor sit amet.</p>
//       </div>
//     </div>
//   </div>
// </div>
