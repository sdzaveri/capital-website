/* tslint:disable:no-default-export */

import { Header, RadioButton, RadioGroup } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="radiogroup">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ RadioButton }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="RadioGroup"
      code={`<RadioGroup>
  <RadioButton label="..." value="..." />
  <RadioButton label="..." value="..." />
</RadioGroup>`}
    >
      <RadioGroup>
        <RadioButton label="Example" />
        <RadioButton label="Example" />
      </RadioGroup>
    </ComponentExample>

    <ComponentExample
      component="RadioGroup"
      config="size: Small"
      code={`<RadioGroup>
  <RadioButton.Small label="..." value="..." />
  <RadioButton.Small label="..." value="..." />
</RadioGroup>`}
    >
      <RadioGroup>
        <RadioButton.Small label="Example" />
        <RadioButton.Small label="Example" />
      </RadioGroup>
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
