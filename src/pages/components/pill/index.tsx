/* tslint:disable:no-default-export */

import { Header, Pill } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="pill">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Pill }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Pill"
      code={`<Pill text="Example" onClick=() onRemove=() />`}
    >
      <Pill text="Example" />
    </ComponentExample>

    <ComponentExample
      component="Pill"
      config="icon: icon-name"
      code={`<Pill icon="icon-name" text="Example" onClick=() onRemove=() />`}
    >
      <Pill icon="operator-greaterthanorequal" text="Example" />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'text',
            type: 'string',
            default: null,
            required: true,
            description: 'Text displayed in pill'
          },
          {
            name: 'icon',
            type: 'keyof typeof IconSVGs',
            default: null,
            required: true,
            description: 'Determines icon displayed, see possible values at **link to icon page**'
          },
          {
            name: 'iconAriaLabel',
            type: 'string',
            default: null,
            required: true,
            description: 'Icon label to be read by screenreader'
          },
          {
            name: 'onClick',
            type: 'function',
            default: null,
            required: true,
            description: 'Function run when user hit main button'
          },
          {
            name: 'onRemove',
            type: 'function',
            default: null,
            required: true,
            description: 'Function run when user hits remove buttons'
          }
        ]
      }
    />
  </LayoutComponents>
);
