/* tslint:disable:no-default-export */

import { Dialog, Header, Text } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="dialog">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Dialog }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Dialog"
      config="variant: Info"
      code={`<Dialog.Info>...</Dialog.Info>`}
    >
      <div style={{ position: 'relative', height: '200px', width: '100%'}}>
        <Dialog.Info>Example dialog</Dialog.Info>
      </div>
    </ComponentExample>

    <ComponentExample
      component="Dialog"
      config="variant: Warning"
      code={`<Dialog.Warning>...</Dialog.Warning>`}
    >
      <div style={{ position: 'relative', height: '200px', width: '100%'}}>
        <Dialog.Warning>Example dialog</Dialog.Warning>
      </div>
    </ComponentExample>

    <ComponentExample
      component="Dialog"
      config="variant: Destructive"
      code={`<Dialog.Destructive>...</Dialog.Destructive>`}
    >
      <div style={{ position: 'relative', height: '200px', width: '100%'}}>
        <Dialog.Destructive>Example dialog</Dialog.Destructive>
      </div>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <Text color="light">This component does not have props.</Text>
  </LayoutComponents>
);
