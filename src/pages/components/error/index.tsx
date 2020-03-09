/* tslint:disable:no-default-export */

import { Error, Header } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="error">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Error }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Error"
      code={`<Error>Example</Error>`}
    >
      <Error>Example</Error>
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
            description: 'Additional CSS classes to apply to the <p> tag.'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'id',
            type: 'string',
            default: null,
            required: false,
            description: 'The unique html ID for the <p> element.'
          }
        ]
      }
    />
  </LayoutComponents>
);
