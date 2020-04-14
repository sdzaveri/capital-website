import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import navigationOverview from '../../data/navigation/overview.json';
import navigationStyles from '../../data/navigation/styles.json';
import navigationComponents from '../../data/navigation/components.json';
import navigationPatterns from '../../data/navigation/patterns.json';

import styles from './LeftNav.scss';

const navigation = {
  "overview": navigationOverview,
  "styles": navigationStyles,
  "components": navigationComponents,
  "patterns": navigationPatterns
};

const renderNavItems = section => {
  return section.links.map(item => {
    if (item.component) {
      return (
        <li key={components[item.component]}>
          <Link partiallyActive={true} activeClassName={styles.activePage} to={components[item.component].url}>
            {components[item.component].title}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={item.url}>
          <Link partiallyActive={true} activeClassName={styles.activePage} to={item.url}>
            {item.title}
          </Link>
        </li>
      );
    }
  });
};

const LeftNav = ({ activeTab = 'overview' }) => {
  const navigationMenuJSX = [];
  navigation[activeTab].sections.map(section => {
    if (section.package) {
      navigationMenuJSX.push(
        <li key={section.package} className={styles.package}>
          {section.package}
        </li>
      );
    } else if (section.title) {
      navigationMenuJSX.push(
        <li key={section.title} className={styles.section}>
          {section.title}
        </li>
      );
    }

    if (section.links) {
      navigationMenuJSX.push(renderNavItems(section));
    }

    return;
  });

  return (
    <nav aria-label="Side navigation" className={styles.secondaryNav}>
      <ul>{navigationMenuJSX}</ul>
    </nav>
  );
};

LeftNav.propTypes = {
  activeTab: PropTypes.string
};

LeftNav.defaultProps = {};

export { LeftNav };
