import PropTypes from 'prop-types';
import React from 'react';

import styles from './ToolsTable.scss';

const ToolsTable = (props) => {
  const toolsRows = props.tools.map((prop, index) => {

    const toolValue = prop.valueJS ? prop.valueJS : prop.value;

    let toolSample;

    switch (prop.type) {
      case 'color':
      case 'background':
        toolSample = (
          <td className={styles.toolSample}>
            <div className={styles.colorSample} style={{ background: toolValue }} />
          </td>
        );
        break;
      case 'fontFamily':
        toolSample = (
          <td className={styles.toolSample}>
            <div className={styles.textSample} style={{ fontFamily: toolValue }}>
              Font family example text
            </div>
          </td>
        );
        break;
      case 'fontSize':
        toolSample = (
          <td className={styles.toolSample}>
            <div className={styles.textSample} style={{ fontSize: toolValue }}>
              Font size example text
            </div>
          </td>
        );
        break;
      case 'fontWeight':
        toolSample = (
          <td className={styles.toolSample}>
            <div className={styles.textSample} style={{ fontWeight: toolValue }}>
              Font weight example text
            </div>
          </td>
        );
        break;
      case 'letterSpacing':
        toolSample = (
          <td className={styles.toolSample}>
            <div className={styles.textSample} style={{ letterSpacing: toolValue }}>
              Letter spacing example text
            </div>
          </td>
        );
        break;
      case 'lineHeight':
        toolSample = (
          <td className={styles.toolSample}>
            <div className={styles.lineHeightSample} style={toolValue}>
              Line height sample<br />text that has multiple<br/>lines of content
            </div>
          </td>
        );
        break;
      case 'border':
        toolSample = (
          <td className={styles.toolSample}>
            <div className={styles.containerSample} style={{ border: toolValue }} />
          </td>
        );
        break;
      case 'boxShadow':
        toolSample = (
          <td className={styles.toolSample}>
            <div className={styles.containerSample} style={{ boxShadow: toolValue }}/>
          </td>
        );
        break;
      case 'radius':
        toolSample = (
          <td className={styles.toolSample}>
            <div className={styles.radiusSample} style={{ borderRadius: toolValue }}/>
          </td>
        );
        break;
      case 'mixin':
        toolSample = (
          <td className={styles.toolSample}>
            <div className={styles.containerSample} style={toolValue} />
          </td>
        );
        break;
      default:
        break;
    }

    if (prop.type !== '2column') {
      return (
        <tr key={prop.name}>
          <td className={styles.toolName}>
            {prop.name}
            <span className={styles.toolValue}>
              {prop.type === 'mixin' ? prop.value.map((value) => (<p>{value}</p>)) : prop.value}
            </span>
          </td>
          {toolSample}
          <td className={styles.toolNotes}>{prop.note}</td>
        </tr>
      );
    } else {
      return (
        <tr key={prop.name}>
          <td className={styles.toolName}>
            {prop.name1}
            <span className={styles.toolValue}>
              {prop.value1}
            </span>
            </td>
          <td className={styles.toolNotes}>{prop.note1}</td>
          <td className={styles.toolName}>
            {prop.name2}
            <span className={styles.toolValue}>
              {prop.value2}
            </span>
            </td>
          <td className={styles.toolNotes}>{prop.note2}</td>
        </tr>
      );
    }
  });

  return (
    <table className={styles.toolsTable}>
      <tbody>
        {toolsRows}
      </tbody>
    </table>
  );
};

ToolsTable.propTypes = {
  tools: PropTypes.array.isRequired
};

export { ToolsTable };
