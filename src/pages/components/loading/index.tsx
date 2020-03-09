/* tslint:disable:no-default-export */

import { Header, LoadingIndicator } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="loading">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ LoadingIndicator }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="LoadingIndicator"
      code={`<LoadingIndicator message="Loading..." />`}
    >
      <div><LoadingIndicator message="Loading..." /></div>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'message',
            type: 'string',
            default: null,
            required: false,
            description: 'Text displayed in indicator'
          }
        ]
      }
    />
  </LayoutComponents>

);
