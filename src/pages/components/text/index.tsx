/* tslint:disable:no-default-export */

import { Header, Text } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="text">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Text }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Configuration</Header>
    <ComponentExample
      component="Text"
      code={`<Text>Example</Text>`}
    >
      <Text>Example</Text>
    </ComponentExample>

    <Header variant="h3" className="websiteH3">Font</Header>

    <ComponentExample
      component="Text"
      config="font: Condensed"
      code={`<Text font="condensed">Example</Text>`}
    >
      <Text font="condensed">Example</Text>
    </ComponentExample>

    <Header variant="h3" className="websiteH3">Color</Header>

    <ComponentExample
      component="Text"
      config="color: Light"
      code={`<Text color="light">Example</Text>`}
    >
      <Text color="light">Example</Text>
    </ComponentExample>

    <ComponentExample
      component="Text"
      config="color: White"
      code={`<Text color="white">Example</Text>`}
      background="dark"
    >
      <Text color="white">Example</Text>
    </ComponentExample>

    <Header variant="h3" className="websiteH3">Size</Header>

    <ComponentExample
      component="Text"
      config="size: Small"
      code={`<Text size="small">Example</Text>`}
    >
      <Text size="small">Example</Text>
    </ComponentExample>

    <ComponentExample
      component="Text"
      config="size: Minimum"
      code={`<Text size="minimum">Example</Text>`}
    >
      <Text size="minimum">Example</Text>
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
            description: 'Class names to add to `span` tag'
          },
          {
            name: 'color',
            type: 'default, light, white',
            default: 'default',
            required: false,
            description: 'Changes color of text'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'font',
            type: 'default, condensed',
            default: 'default',
            required: false,
            description: 'Changes font of text'
          },
          {
            name: 'id',
            type: 'string',
            default: null,
            required: false,
            description: 'ID attribute for `span` tag'
          },
          {
            name: 'size',
            type: 'default, small, minimum',
            default: 'default',
            required: true,
            description: 'Changes size of text'
          }
        ]
      }
    />
  </LayoutComponents>
);
