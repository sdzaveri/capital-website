/* tslint:disable:no-default-export */

import { Header, Wizard } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="wizardlist">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Wizard }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="WizardList"
      code={
`<Wizard activeStepIndex={...} numberOfSteps={...} >
  <Wizard.Step label="Step One " />
  <Wizard.Step label="Step Two" />
  <Wizard.Step label="Step Three" />
  <Wizard.Step label="Step Four" />
  <Wizard.Step label="Step Five" />
</Wizard>`
      }
    >
      <Wizard
        activeStepIndex={2}
        numberOfSteps={5}
        isOnLastStep={false}
      >
        <Wizard.Step label="Step One " />
        <Wizard.Step label="Step Two" />
        <Wizard.Step label="Step Three" />
        <Wizard.Step label="Step Four" />
        <Wizard.Step label="Step Five" />
      </Wizard>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <Header variant="h3" className="websiteH3">Wizard</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'activeStepIndex',
            type: 'number',
            default: null,
            required: true,
            description: 'Index of the active step'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'isOnLastStep',
            type: 'boolean',
            default: 'false',
            required: true,
            description: 'Flag to know if the user is on the last step'
          },
          {
            name: 'numberOfSteps',
            type: 'number',
            default: null,
            required: true,
            description: 'Number of steps within list'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3">Wizard.Step</Header>
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
            name: 'label',
            type: 'string',
            default: null,
            required: true,
            description: 'Label to display on the step'
          },
          {
            name: 'onClick',
            type: 'function',
            default: null,
            required: false,
            description: 'Callback for when the step is clicked by the user. No functional purpose yet.'
          },
          {
            private: true,
            name: 'activeStepIndex',
            type: 'number',
            default: null,
            required: false,
            description: 'Index of current step. Active step index starts at 1. Used to calculate styles.'
          },
          {
            private: true,
            name: 'index',
            type: 'number',
            default: null,
            required: false,
            description: 'For component instance. Starts at 1 for compatibility with active step. Used for styles.'
          },
          {
            private: true,
            name: 'numberOfSteps',
            type: 'number',
            default: null,
            required: false,
            description: 'Number of tracked steps. Used to calculate styles.'
          }
        ]
      }
    />
  </LayoutComponents>
);
