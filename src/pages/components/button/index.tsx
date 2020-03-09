/* tslint:disable:no-default-export */

import { Button, Header } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="button">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Button }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Button"
      config="variant: Neutral"
      code="<Button.Neutral>Example</Button.Neutral>"
    >
      <Button.Neutral>Example</Button.Neutral>
    </ComponentExample>
    <ComponentExample
      component="Button"
      config="variant: Primary"
      code="<Button.Primary>Example</Button.Primary>"
    >
      <Button.Primary>Example</Button.Primary>
    </ComponentExample>
    <ComponentExample
      component="Button"
      config="variant: Naked"
      code="<Button.Naked>Example</Button.Naked>"
    >
      <Button.Naked>Example</Button.Naked>
    </ComponentExample>
    <ComponentExample
      component="Button"
      config="variant: Destructive"
      code="<Button.Destructive>Example</Button.Destructive>"
    >
      <Button.Destructive>Example</Button.Destructive>
    </ComponentExample>
    <ComponentExample
      component="Button"
      config="size: Small"
      code="<Button.XX.Small>Example</Button.XX.Small>"
    >
      <div><Button.Neutral.Small>Example</Button.Neutral.Small></div>
    </ComponentExample>
    <ComponentExample
      component="Button"
      config="size: Small"
      code="<Button.XX.Large>Example</Button.XX.Large>"
    >
      <Button.Neutral.Large>Example</Button.Neutral.Large>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">States</Header>
    <ComponentExample
      component="Button"
      state="Disabled"
      code="<Button.XX disabled={}>Example</Button.XX>"
    >
      <Button.Neutral disabled={true}>Neutral</Button.Neutral>&nbsp;
      <Button.Primary disabled={true}>Primary</Button.Primary>&nbsp;
      <Button.Naked disabled={true}>Naked</Button.Naked>&nbsp;
      <Button.Destructive disabled={true}>Destructive</Button.Destructive>
    </ComponentExample>

    <ComponentExample
      component="Button"
      state="Loading"
      code="<Button.XX loading={}>Example</Button.XX>"
    >
      <Button.Neutral loading={true}>Neutral</Button.Neutral>&nbsp;
      <Button.Primary loading={true}>Primary</Button.Primary>&nbsp;
      <Button.Naked loading={true}>Naked</Button.Naked>&nbsp;
      <Button.Destructive loading={true}>Destructive</Button.Destructive>
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
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Whether the button should be disabled or not.'
          },
          {
            name: 'loading',
            type: 'boolean',
            default: 'false',
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'Whether the button is in a loading state or not. When on a loading state, the button cannot be pressed and its text is replaced by a loading animation.'
          },
          {
            name: 'onClick',
            type: 'function',
            default: 'undefined',
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'Callback for when the button is clicked by the user. If the button is disabled, the callback will not called.'
          },
          {
            name: 'children',
            type: 'JSX',
            default: null,
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'The text or icons to display within the button describing the action to be performed when clicked.'
          }
        ]
      }
    />
  </LayoutComponents>

);
