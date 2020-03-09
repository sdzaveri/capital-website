import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './WebsiteHeader.scss';

const WebsiteHeader = props => (
  <header className={styles.header}>
    <Link to="/" className={styles.siteTitle}>
      <strong>Capital</strong> Design System
    </Link>
    <nav>
      <ul>
        <li className={props.activeTab === 'overview' ? styles.activeTab : null}>
          <Link to="/overview">Overview</Link>
        </li>
        <li className={props.activeTab === 'patterns' ? styles.activeTab : null}>
          <Link to="/patterns">Patterns & Styles</Link>
        </li>
        <li className={props.activeTab === 'components' ? styles.activeTab : null}>
          <Link to="/components">Components</Link>
        </li>
        <li className={styles.button}>
          <Link activeClassName={styles.activeTab} to="/tokens">Tokens</Link>
          <Link activeClassName={styles.activeTab} to="/changelog">Changelogs</Link>
        </li>
      </ul>
    </nav>
  </header>
);

WebsiteHeader.propTypes = {
  siteTitle: PropTypes.string,
  activeTab: PropTypes.oneOf(['overview', 'patterns', 'components'])
};

WebsiteHeader.defaultProps = {
  siteTitle: ``
};

export { WebsiteHeader };
