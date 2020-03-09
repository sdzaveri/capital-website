/* tslint:disable:no-default-export */

import { Header, Switch } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="switch">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Switch }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Switch"
      code={`<Switch id="..." label="" labelOff="..." labelOn="..." checked={} onChange={...} />`}
    >
      <Switch id="" label="Example" labelOff="off" labelOn="on" />
    </ComponentExample>

    <ComponentExample
      component="Switch"
      config="size: Small"
      code={`<Switch.Small id="..." label="" labelOff="..." labelOn="..." checked={} onChange={...} />`}
    >
      <Switch.Small id="" label="Example" labelOff="off" labelOn="on" />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">State</Header>
    <ComponentExample
      component="Switch"
      state="Checked"
      code={`<Switch id="..." checked={}/>`}
    >
      <Switch id="" label="Example" labelOff="off" labelOn="on" checked={true}/>
    </ComponentExample>

    <ComponentExample
      component="Switch"
      state="Disabled"
      code={`<Switch id="..." checked={}/>`}
    >
      <Switch id="" label="Example" labelOff="off" labelOn="on" disabled={true}/>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'checked',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Boolean for if switch is checked or not.'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Boolean for if switch is disabled or not.'
          },
          {
            name: 'id',
            type: 'string',
            default: 'right',
            required: false,
            description: 'HTML id attribute for switch.'
          },
          {
            name: 'label',
            type: 'string',
            default: null,
            required: false,
            description: 'Text label applied to full switch.'
          },
          {
            name: 'labelOn',
            type: 'string',
            default: null,
            required: false,
            description: 'Label for right side of switch representing state when it is on.'
          },
          {
            name: 'labelOff',
            type: 'string',
            default: null,
            required: false,
            description: 'Label for left side of switch representing state when it is off.'
          },
          {
            name: 'onChange',
            type: 'function',
            default: null,
            required: false,
            description: 'Callback function for when switch is toggled.'
          }
        ]
      }
    />
  </LayoutComponents>

);
