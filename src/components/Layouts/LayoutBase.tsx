/* tslint:disable:no-default-export no-import-side-effect */

import PropTypes from 'prop-types';
import React from 'react';

import SEO from '../seo';

import { LeftNav } from '../LeftNav';
import { WebsiteFooter } from '../WebsiteFooter';
import { WebsiteHeader } from '../WebsiteHeader';

import './base.scss';
import styles from './Layout.scss';

const LayoutBase = (props) => {
  return (
    <>
    <SEO title={props.title} />
    <div className={styles.bodyWrapper}>
      <WebsiteHeader activeTab={props.activeTab} />
      <LeftNav activeTab={props.activeTab} />
      <main>
        {props.children}
        {props.displayFooter ? <WebsiteFooter /> : null}
      </main>
    </div>
    </>
  );
};

LayoutBase.propTypes = {
  children: PropTypes.node.isRequired,
  activeTab: PropTypes.string.isRequired,
  displayFooter: PropTypes.bool,
  title: PropTypes.string
};

LayoutBase.defaultProps = {
  displayFooter: true
};

export default LayoutBase;
