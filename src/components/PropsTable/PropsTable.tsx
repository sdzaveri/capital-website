import PropTypes from 'prop-types';
import React from 'react';

import styles from './PropsTable.scss';

const PropsTable = (props) => {
  const propRows = props.componentProps.map((prop, index) => {
    return (
      <tr key={index} className={prop.private ? styles.private : ''}>
        <td><code>{prop.name}</code></td>
        <td><code>{prop.type}</code></td>
        <td><code className={styles.defaultCode}>{prop.default}</code></td>
        <td>{prop.private ? '' : prop.required ? 'Yes' : 'No'}</td>
        <td>{prop.private ? `For library use only: ${prop.description}` : prop.description}</td>
      </tr>
    );
  });

  return (
    <table className={styles.propsTable}>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required?</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {propRows}
      </tbody>
    </table>
  );
};

PropsTable.propTypes = {
  componentProps: PropTypes.array.isRequired
};

export { PropsTable };
