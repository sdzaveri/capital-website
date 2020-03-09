import { Text } from '@opengov/component-library/capital';
import React from 'react';

import styles from './WebsiteFooter.scss';

const WebsiteFooter = props => (
  <footer className={styles.footer}>
    <Text size="minimum" color="light">© {new Date().getFullYear()} OpenGov</Text>
  </footer>
);

export { WebsiteFooter };
