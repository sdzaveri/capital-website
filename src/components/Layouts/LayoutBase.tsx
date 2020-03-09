/* tslint:disable:no-default-export no-import-side-effect */

import PropTypes from 'prop-types';
import React from 'react';

import { LeftNav } from '../LeftNav';
import { WebsiteFooter } from '../WebsiteFooter';
import { WebsiteHeader } from '../WebsiteHeader';

import './base.scss';
import styles from './Layout.scss';

const LayoutBase = props => {
  return (
    <div className={styles.bodyWrapper}>
      <WebsiteHeader activeTab={props.activeTab} />
      <LeftNav activeTab={props.activeTab} />
      <main>
        {props.children}
        <WebsiteFooter />
      </main>
    </div>
  );
};

LayoutBase.propTypes = {
  children: PropTypes.node.isRequired,
  activeTab: PropTypes.string.isRequired
};

export default LayoutBase;
