/* tslint:disable:no-default-export */

import { ButtonGroup, Header, Label } from '@opengov/component-library/capital';
import { Link } from 'gatsby';
import React from 'react';

import { ComponentExample } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="buttongroup">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ ButtonGroup }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="ButtonGroup"
      config="variant: Neutral"
      code={
`<ButtonGroup.Neutral>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonGroup.Neutral>`
        }
    >
      <ButtonGroup.Neutral>
        <ButtonGroup.Button>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonGroup.Neutral>
    </ComponentExample>

    <ComponentExample
      component="ButtonGroup"
      config="variant: Naked"
      code={
`<ButtonGroup.Naked>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonGroup.Naked>`
      }
    >
      <ButtonGroup.Naked>
        <ButtonGroup.Button>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonGroup.Naked>
    </ComponentExample>

      <ComponentExample
        component="ButtonGroup"
        config="size: Small"
        code={
`<ButtonGroup.XX.Small>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonGroup.XX.Small>`
        }
      >
        <ButtonGroup.Neutral.Small>
          <ButtonGroup.Button>First</ButtonGroup.Button>
          <ButtonGroup.Button>Middle</ButtonGroup.Button>
          <ButtonGroup.Button>Last</ButtonGroup.Button>
        </ButtonGroup.Neutral.Small>
      </ComponentExample>

      <ComponentExample
        component="ButtonGroup"
        config="size: Large"
        code={
`<ButtonGroup.XX.Large>
  <ButtonGroup.Button>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonGroup.XX.Large>`
        }
      >
      <ButtonGroup.Neutral.Large>
        <ButtonGroup.Button>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonGroup.Neutral.Large>
      </ComponentExample>

    <Header variant="h2" className="websiteH2">State</Header>
    <ComponentExample
      component="ButtonGroup"
      state="Disabled"
      code={
`<ButtonGroup.XX disabled={}>
  <ButtonGroup.Button disabled>First</ButtonGroup.Button>
  <ButtonGroup.Button>Middle</ButtonGroup.Button>
  <ButtonGroup.Button>Last</ButtonGroup.Button>
</ButtonGroup.XX>`
      }
    >
      <p><Label>Neutral: </Label></p><p><ButtonGroup.Neutral>
        <ButtonGroup.Button disabled={true}>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonGroup.Neutral></p>
      <p><Label>Naked: </Label></p><p><ButtonGroup.Naked>
        <ButtonGroup.Button disabled={true}>First</ButtonGroup.Button>
        <ButtonGroup.Button>Middle</ButtonGroup.Button>
        <ButtonGroup.Button>Last</ButtonGroup.Button>
      </ButtonGroup.Naked></p>
    </ComponentExample>
    <Header variant="h2" className="websiteH2">Props</Header>
    <p>
      <code>{'<ButtonGroup.Button>'}</code> is a wrapper around <code>{'<Button>'}</code> and supports the same props.
    </p>
    <p><Link to="../button">View Button Specs</Link></p>
  </LayoutComponents>
);
