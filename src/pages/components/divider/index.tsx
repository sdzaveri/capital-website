/* tslint:disable:no-default-export */

import { Divider, Header, Text } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="divider">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Divider }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Divider"
      config="variant: Horizontal"
      code={`<Divider.Horizontal />`}
    >
      <Divider.Horizontal />
    </ComponentExample>

    <ComponentExample
      component="Divider"
      config="variant: Thin"
      code={`<Divider.Thin />`}
    >
      <Divider.Thin />
    </ComponentExample>

    <ComponentExample
      component="Divider"
      config="variant: ListItem"
      code={`<Divider.ListItem />`}
    >
      <Divider.ListItem />
    </ComponentExample>

    <ComponentExample
      component="Divider"
      config="variant: Vertical"
      code={`<Divider.Vertical />`}
    >
      <div style={{ height: 75 }}><Divider.Vertical /></div>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <Text color="light">This component does not have props.</Text>
  </LayoutComponents>

);
