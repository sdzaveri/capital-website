/* tslint:disable:no-default-export */

import { Card, Header, Icon } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="card">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Card }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Card"
      code={`<Card.Basic content="..." onClick={...} title="..." />`}
    >
    <Card.Basic
      content="Description"
      title="Example"
    />
    </ComponentExample>

    <ComponentExample
      component="Card"
      config="icon: icon-name"
      code={`<Card.Basic content="..." onClick={...} title="..." icon={<Icon icon="icon-name" />} />`}
    >
      <Card.Basic
        content="Description"
        title="Example"
        icon={<Icon icon="chart-bar" />}
      />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'content',
            type: 'string',
            default: null,
            required: false,
            description: 'Text for card description'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'icon',
            type: '<Icon />',
            default: null,
            required: false,
            description: 'Icon displayed on left of card'
          },
          {
            name: 'title',
            type: 'string',
            default: null,
            required: true,
            description: 'Text for card title'
          },

          {
            name: 'onClick',
            type: 'function',
            default: null,
            required: false,
            description: 'A function that is called on click event'
          }
        ]
      }
    />
  </LayoutComponents>
);
