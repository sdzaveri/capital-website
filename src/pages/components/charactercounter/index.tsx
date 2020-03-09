/* tslint:disable:no-default-export */

import { Form, Header } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="charactercounter">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Form }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="CharacterCounter"
      code={`<Form.CharacterCounter align={...} currentCount={...} maxCount={...} />`}
    >
    <Form.CharacterCounter
      align="left"
      currentCount={10}
      maxCount={100}
    />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">States</Header>
    <ComponentExample
      component="CharacterCounter"
      state="Error"
      code={`<Form.CharacterCounter align={...} currentCount={...} maxCount={...} />`}
    >
    <Form.CharacterCounter
      align="left"
      currentCount={120}
      maxCount={100}
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
