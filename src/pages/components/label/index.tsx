/* tslint:disable:no-default-export */

import { Header, Label } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="label">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Label }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Label"
      code={`<Label htmlFor={id}>Example</Label>`}
    >
      <Label>Example</Label>
    </ComponentExample>

    <ComponentExample
      component="Label"
      config="variant: Group"
      code={`<Label variant="group" id={id}>Example</Label>`}
    >
      <Label variant="group">Example</Label>
    </ComponentExample>

    <ComponentExample
      component="Label"
      config="variant: Group, color: Dark"
      code={`<Label variant="group" color="dark" id={id}>Example</Label>`}
    >
      <Label variant="group" color="dark">Example</Label>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'className',
            type: 'string',
            default: null,
            required: false,
            description: 'Additional CSS classes to apply to the <label> tag.'
          },
          {
            name: 'color',
            type: 'default or dark',
            default: 'default',
            required: false,
            description: 'Changes the color of the text for the group variant only.'
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
            description: 'Set to true if label is paired with a disabled field and should look visually disabled.'
          },
          {
            name: 'htmlFor',
            type: 'string',
            default: null,
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'The for attribute value on the HTML label element. Assigned the ID of the form element it should be bound to.'
          },
          {
            name: 'id',
            type: 'string',
            default: null,
            required: false,
            description: 'The unique html ID for the <label> element.'
          },
          {
            name: 'variant',
            type: 'default or group',
            default: 'default',
            required: false,
            description: 'Changes the visual display of the label.'
          }
        ]
      }
    />
  </LayoutComponents>
);
