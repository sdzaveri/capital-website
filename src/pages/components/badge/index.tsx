/* tslint:disable:no-default-export */

import { Badge, Header } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="badge">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Badge }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Badge"
      config="variant: Neutral"
      code={`<Badge variant="neutral" text="..." />`}
    >
      <Badge variant="neutral" text="Example" />
    </ComponentExample>
    <ComponentExample
      component="Badge"
      config="variant: Bright"
      code={`<Badge variant="bright" text="..." />`}
    >
      <Badge variant="bright" text="Example" />
    </ComponentExample>
    <ComponentExample
      component="Badge"
      config="variant: Strong"
      code={`<Badge variant="strong" text="..." />`}
    >
      <Badge variant="strong" text="Example" />
    </ComponentExample>
    <ComponentExample
      component="Badge"
      config="variant: Positive"
      code={`<Badge variant="positive" text="..." />`}
    >
      <Badge variant="positive" text="Example" />
    </ComponentExample>
    <ComponentExample
      component="Badge"
      config="variant: Warning"
      code={`<Badge variant="warning" text="..." />`}
    >
      <Badge variant="warning" text="Example" />
    </ComponentExample>
    <ComponentExample
      component="Badge"
      config="variant: Negative"
      code={`<Badge variant="negative" text="..." />`}
    >
      <Badge variant="negative" text="Example" />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'variant',
            type: 'string',
            default: 'neutral',
            required: true,
            description: 'Visual style of badge'
          },
          {
            name: 'text',
            type: 'string',
            default: 'false',
            required: true,
            description: 'Text displayed in badge'
          }
        ]
      }
    />
  </LayoutComponents>

);
