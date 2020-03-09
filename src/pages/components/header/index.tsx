/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="header">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Header }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Header"
      config="variant: Hero"
      code={`<Header variant="hero">Example</Header>`}
    >
      <Header variant="hero">Example</Header>
    </ComponentExample>

    <ComponentExample
      component="Header"
      config="variant: H1"
      code={`<Header variant="h1">Example</Header>`}
    >
      <Header variant="h1">Example</Header>
    </ComponentExample>

    <ComponentExample
      component="Header"
      config="variant: H2"
      code={`<Header variant="h2">Example</Header>`}
    >
      <Header variant="h2">Example</Header>
    </ComponentExample>

    <ComponentExample
      component="Header"
      config="variant: H3"
      code={`<Header variant="h3">Example</Header>`}
    >
      <Header variant="h3">Example</Header>
    </ComponentExample>

    <ComponentExample
      component="Header"
      config="variant: H4"
      code={`<Header variant="h4">Example</Header>`}
    >
      <Header variant="h4">Example</Header>
    </ComponentExample>

    <ComponentExample
      component="Header"
      config="variant: H5"
      code={`<Header variant="h5">Example</Header>`}
    >
      <Header variant="h5">Example</Header>
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
            description: 'Additional CSS classes to apply to the header tag.'
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
            description: 'The unique html ID for the header element.'
          },
          {
            name: 'role',
            type: 'heading, presentation',
            default: 'heading',
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'Changes the html role attribute of the header, using presentation removes it from the DOM outline.'
          },
          {
            name: 'variant',
            type: 'hero, h1, h2, h3, h4, h5',
            default: 'hero',
            required: false,
            description: 'Changes the header level and style.'
          }
        ]
      }
    />
  </LayoutComponents>

);
