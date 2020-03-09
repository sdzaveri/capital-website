import PropTypes from 'prop-types';
import React from 'react';

import styles from './MDX.scss';

const Grid = (props) => {
  return (
    <div className={`${styles.grid} ${styles[props.columns]}`}>
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  columns: PropTypes.number.isRequired
};

export { Grid };
