/* tslint:disable:no-default-export */

import { Checkbox, Header } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="checkbox">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Checkbox }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Checkbox"
      code={`<Checkbox.Default label="Example" checked={} disabled={} onChange={} />`}
    >
    <Checkbox.Default
      label="Example"
    />
    </ComponentExample>

    <ComponentExample
      component="Checkbox"
      config="size: Small"
      code={`<Checkbox.Small label="Example" checked={} disabled={} onChange={} />`}
    >
    <Checkbox.Small
      label="Example"
    />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">States</Header>
    <ComponentExample
      component="Checkbox"
      state="Checked"
      code={`<Checkbox.Default label="Example" checked={}/>`}
    >
    <Checkbox.Default
      label="Example"
      checked={true}
    />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Checkbox.Small
      label="Example"
      checked={true}
    />
    </ComponentExample>

    <ComponentExample
      title="Disabled"
      code={`<Checkbox.Default label="Example" disabled={} />`}
    >
    <Checkbox.Default
      label="Example"
      disabled={true}
    />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Checkbox.Small
      label="Example"
      disabled={true}
    />
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
            // tslint:disable-next-line: max-line-length
            description: 'The current state of the checkbox. Used in conjunction with onChange to create a controlled component'
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
            // tslint:disable-next-line: max-line-length
            description: 'Set to true if this checkbox should be disabled. The user won’t be able to trigger a onChange callback when clicking it'
          },
          {
            name: 'label',
            type: 'string',
            default: null,
            required: false,
            description: 'The text label that describes the purpose of this checkbox option to the user'
          },

          {
            name: 'onChange',
            type: 'function',
            default: null,
            required: true,
            // tslint:disable-next-line: max-line-length
            description: 'A function that is called whenever the user tries to update the checkbox input control value, except when disabled is set to true'
          }
        ]
      }
    />
  </LayoutComponents>
);
