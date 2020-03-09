/* tslint:disable:no-default-export */

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './ComponentExample.scss';

const ComponentExample = (props) => {
  const exampleBackground = props.background === 'dark' ? styles.exampleDark : '';
  return (
  <div className={styles.exampleContainer}>
    <div className={styles.exampleTitle}>
      <span className={styles.component}>{props.component}</span>
      <span className={styles.config}>{props.config}</span>
      <span className={styles.state}>{props.state}</span>
    </div>
    <div className={`${styles.example} ${exampleBackground}`}>{props.children}</div>
    <div className={styles.exampleCode}>
      <SyntaxHighlighter language="jsx" style={tomorrow} wrapLines={true}>
        {props.code}
      </SyntaxHighlighter>
    </div>
  </div>);
};

export { ComponentExample };
