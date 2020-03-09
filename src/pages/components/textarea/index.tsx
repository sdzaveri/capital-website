/* tslint:disable:no-default-export */

import { Header, TextArea } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="textarea">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ TextArea }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="TextArea"
      code={`<Form.CharacterCounter align={...} currentCount={...} maxCount={...} />`}
    >
      <TextArea
        placeholder="Example..."
        rowCount={3}
      />
    </ComponentExample>

    <ComponentExample
      component="TextArea"
      config="variant: Naked"
      code={`<Form.CharacterCounter align={...} currentCount={...} maxCount={...} />`}
    >
      <TextArea
        variant="naked"
        placeholder="Example..."
        rowCount={3}
      />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Configuration</Header>
    <Header variant="h3" className="websiteH3">Size</Header>

    <ComponentExample
      component="Textarea"
      config="size: Small"
      code={`<Form.CharacterCounter align={...} currentCount={...} maxCount={...} />`}
    >
      <TextArea
        size="small"
        placeholder="Example..."
        rowCount={3}
      />
    </ComponentExample>

    <ComponentExample
      component="Textarea"
      config="size: Large"
      code={`<Form.CharacterCounter align={...} currentCount={...} maxCount={...} />`}
    >
      <TextArea
        size="large"
        placeholder="Example..."
        rowCount={3}
      />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">States</Header>
    <ComponentExample
      component="Textarea"
      state="Disabled"
      code={`<Form.CharacterCounter align={...} currentCount={...} maxCount={...} />`}
    >
      <TextArea
        placeholder="Example..."
        rowCount={3}
        disabled={true}
      />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'align',
            type: 'string',
            default: 'right',
            required: false,
            description: 'Aligns counter to right or left'
          },
          {
            name: 'currentCount',
            type: 'number',
            default: 'false',
            required: true,
            description: 'Current count of characters'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'maxCount',
            type: 'number',
            default: 'false',
            required: true,
            description: 'Maximum count of characters, exceeding this value will turn counter to error state'
          }
        ]
      }
    />
  </LayoutComponents>
);
