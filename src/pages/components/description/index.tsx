/* tslint:disable:no-default-export */

import { Description, Header } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="description">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Description }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Description"
      code={`<Description>Example</Description>`}
    >
      <Description>Example</Description>
    </ComponentExample>

    <ComponentExample
      component="Description"
      config="variant: condensed"
      code={`<Description variant="condensed" id={id}>Example</Description>`}
    >
      <Description variant="condensed">Example</Description>
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
          },
          {
            name: 'variant',
            type: 'default, condensed',
            default: null,
            required: false,
            description: 'Changes the font of the description.'
          }
        ]
      }
    />
  </LayoutComponents>

);
