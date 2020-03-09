/* tslint:disable:no-default-export */

import { ButtonGroup, ButtonToggle, Header, Label } from '@opengov/component-library/capital';
import { Link } from 'gatsby';
import React from 'react';

import { ComponentExample } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="buttontoggle">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ ButtonGroup, ButtonToggle }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="ButtonToggle"
      config="variant: Neutral"
      code={
`<ButtonToggle.Neutral>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonToggle.Neutral>`
      }
    >
      <ButtonToggle.Neutral>
        <ButtonGroup.Button>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonToggle.Neutral>
    </ComponentExample>

    <ComponentExample
      component="ButtonToggle"
      config="variant: Naked"
      code={
`<ButtonToggle.Naked>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonToggle.Naked>`
      }
    >
      <ButtonToggle.Naked>
        <ButtonGroup.Button>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonToggle.Naked>
    </ComponentExample>

    <ComponentExample
      component="ButtonToggle"
      config="size: Small"
      code={
`<ButtonToggle.XX.Small>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonToggle.XX.Small>`
      }
    >
      <ButtonToggle.Neutral.Small>
        <ButtonGroup.Button>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonToggle.Neutral.Small>
    </ComponentExample>

    <ComponentExample
      component="ButtonToggle"
      config="size: Large"
      code={
`<ButtonToggle.XX.Large>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonToggle.XX.Large>`
      }
    >
      <ButtonToggle.Neutral.Large>
        <ButtonGroup.Button>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonToggle.Neutral.Large>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">State</Header>
    <ComponentExample
      component="ButtonToggle"
      state="Disabled"
      code={`<ButtonToggle.XX disabled={}>...</ButtonToggle.XX>`}
    >
      <p><Label>Neutral: </Label></p><p><ButtonToggle.Neutral disabled={true}>
        <ButtonGroup.Button>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonToggle.Neutral></p>
      <p><Label>Naked: </Label></p><p><ButtonToggle.Naked disabled={true}>
        <ButtonGroup.Button>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonToggle.Naked></p>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <p>
      <code>{'<ButtonGroup.Button>'}</code> is a wrapper around <code>{'<Button>'}</code> and supports the same props.
    </p>
    <p><Link to="../button">View Button Specs</Link></p>
  </LayoutComponents>
);
