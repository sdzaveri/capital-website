import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import opengovIcon from '../../images/OpenGov-Icon-White.png';
import { LeftNav } from '../LeftNav';

import styles from './WebsiteHeader.scss';

const WebsiteHeader = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <img src={opengovIcon} className={styles.logo} alt="OpenGov Icon" />
      <Link to="/" className={styles.siteTitle}>
        <strong>Capital</strong> Design System
      </Link>
      <button aria-label="Open menu" className={`${styles.menuToggle} ${menuOpen ? styles.open : null}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div class={styles.bar1}></div>
        <div class={styles.bar2}></div>
        <div class={styles.bar3}></div>
      </button>
      <div class={`${styles.navContainer}  ${menuOpen ? styles.open : null}`}>
        <nav className={styles.primaryNav}>
          <ul>
            <li className={props.activeTab === 'overview' ? styles.activeTab : null}>
              <Link to="/overview">Overview</Link>
            </li>
            <li className={props.activeTab === 'styles' ? styles.activeTab : null}>
              <Link to="/styles">Styles</Link>
            </li>
            <li className={props.activeTab === 'components' ? styles.activeTab : null}>
              <Link to="/components">Components</Link>
            </li>
            <li className={props.activeTab === 'patterns' ? styles.activeTab : null}>
              <Link to="/patterns">Patterns</Link>
            </li>
          </ul>
        </nav>
        <LeftNav variant="header" activeTab={props.activeTab} />
      </div>
    </header>
  );
};

WebsiteHeader.propTypes = {
  siteTitle: PropTypes.string,
  activeTab: PropTypes.oneOf(['overview', 'patterns', 'components'])
};

WebsiteHeader.defaultProps = {
  siteTitle: ``
};

export { WebsiteHeader };
