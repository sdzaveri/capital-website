import PropTypes from 'prop-types';
import React from 'react';

import styles from './MDX.scss';

const Grid = (props) => {
  const columnsClass = "columns" + props.columns;
  return (
    <div className={`${styles.grid} ${styles[columnsClass]}`}>
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  columns: PropTypes.number.isRequired
};

export { Grid };
