/* tslint:disable:no-default-export */

import { Header, Link } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="link">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Link }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Link"
      code={`<Link.Standard text="Example" href="..." />`}
    >
      <Link.Standard text="Example" href="#" />
    </ComponentExample>

    <ComponentExample
      component="Link"
      config="style: Quiet"
      code={`<Link.Quiet text="Example" href="..." />`}
    >
      <Link.Quiet text="Example" href="#" />
    </ComponentExample>

    <ComponentExample
      component="Link"
      config="style: Prominent"
      code={`<Link.Prominent text="Example" href="..." />`}
    >
      <Link.Prominent text="Example" href="#" />
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
            name: 'href',
            type: 'string',
            default: null,
            required: true,
            description: 'The URL the link will navigate to.'
          },
          {
            name: 'text',
            type: 'string',
            default: null,
            required: true,
            description: 'The text content of the link.'
          }
        ]
      }
    />
  </LayoutComponents>
);
