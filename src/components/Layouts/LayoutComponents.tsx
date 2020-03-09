/* tslint:disable:no-default-export no-import-side-effect */

import { Badge, Header } from '@opengov/component-library/capital';
import PropTypes from 'prop-types';
import React from 'react';
// import { Link } from 'gatsby';

import components from '../../data/components.json';

import './base.scss';
import styles from './Layout.scss';
import LayoutBase from './LayoutBase';

// <ul className={styles.tabs} role="tabs">
//   <li>
//     <Link
//       activeClassName={styles.tabsActive}
//       to={components[props.component].url}
//     >
//       Code
//     </Link>
//   </li>
//   <li>
//     <Link
//       activeClassName={styles.tabsActive}
//       to={`${components[props.component].url}/usage`}
//     >
//       Usage
//     </Link>
//   </li>
// </ul>

const LayoutComponents = props => (
  <LayoutBase activeTab="components">
    <div className={styles.pageHeader}>
      <div className={styles.tags}>
        {components[props.component] ? <Badge variant="strong" text={components[props.component].type} /> : ``}
        {components[props.component].tags.map((value, index) => {
          return (<Badge key={value} variant="neutral" text={value} />);
        })}
      </div>
      <Header variant="hero">{components[props.component] ? components[props.component].title : props.title}</Header>

      <p className={styles.pageDescription}>{components[props.component].description}</p>
    </div>

    <div className={styles.content}>{props.children}</div>
  </LayoutBase>
);

LayoutComponents.propTypes = {
  component: PropTypes.string,
  componentFolder: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired
};

export default LayoutComponents;
