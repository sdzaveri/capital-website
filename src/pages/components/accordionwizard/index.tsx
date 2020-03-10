/* tslint:disable:no-default-export */

import { AccordionWizard, Header } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="accordionwizard">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Badge }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="AccordionWizard"
      code={
`<AccordionWizard activeStepIndex={0} onSubmit={...} submitButtonText="..." nextButtonText="..." backButtonText="...">
  <AccordionWizard.Step buttonDisabled={...} keyLabel="1" label="Step One" summary={...} >
    ...
  </AccordionWizard.Step>
  <AccordionWizard.Step buttonDisabled={...} keyLabel="2" label="Step 2" summary={...} >
    ...
  </AccordionWizard.Step>
  <AccordionWizard.Step buttonDisabled={...} keyLabel="3" label="Step Three" summary={...} >
    ...
  </AccordionWizard.Step>
</AccordionWizard>`
      }
    >
      <AccordionWizard
        activeStepIndex={0}
      >
        <AccordionWizard.Step
          buttonDisabled={false}
          keyLabel="1"
          label="Step One"
          summary="Example description"
        >
          Step 1 example
        </AccordionWizard.Step>
        <AccordionWizard.Step
          buttonDisabled={false}
          keyLabel="2"
          label="Step Two"
          summary="Example description"
        >
          Step 2 example
        </AccordionWizard.Step>
        <AccordionWizard.Step
          buttonDisabled={false}
          keyLabel="3"
          label="Step Three"
          summary="Example description"
        >
          Step 3 example
        </AccordionWizard.Step>
      </AccordionWizard>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <Header variant="h3" className="websiteH3">AccordionWizard</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'activeStepIndex',
            type: 'number',
            default: '0',
            required: false,
            description: 'The active AccordionWizard.Step child component to mark as isActive'
          },
          {
            name: 'backButtonText',
            type: 'string',
            default: 'Back',
            required: false,
            description: 'Text for all back buttons'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'nextButtonText',
            type: 'string',
            default: 'Next',
            required: false,
            description: 'Text for all next buttons'
          },
          {
            name: 'submitButtonText',
            type: 'string',
            default: 'Submit',
            required: false,
            description: 'Text for the Submit button'
          },
          {
            name: 'onSubmit',
            type: 'function',
            default: null,
            required: false,
            description: 'Callback function for handling the submit button click event.'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3">AccordionWizard.Step</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'buttonDisabled',
            type: 'boolean',
            default: 'true',
            required: false,
            description: 'Whether or not the next/submit button is disabled.'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'keyLabel',
            type: 'string',
            default: null,
            required: false,
            description: 'The text label for the step Key component.'
          },
          {
            name: 'label',
            type: 'string',
            default: null,
            required: false,
            description: 'The text label for the step.'
          },
          {
            name: 'summary',
            type: 'ReactNode',
            default: null,
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'Content for the step summary. If you pass a string, it will be rendered in a <Text.Description>.'
          },
          {
            name: 'onBack',
            type: 'function',
            default: 'Move to previous step',
            required: false,
            description: 'Callback function for handling the back button click event.'
          },
          {
            name: 'onNext',
            type: 'function',
            default: 'Move to next step',
            required: false,
            description: 'Callback function for handling the next button click event.'
          },
          {
            name: 'onSubmit',
            type: 'function',
            default: null,
            required: false,
            description: 'Callback function for handling the submit button click event.'
          },
          {
            private: true,
            name: 'backButtonText',
            type: 'string',
            default: 'Back',
            required: false,
            description: 'Text for all back buttons'
          },
          {
            private: true,
            name: 'index',
            type: 'number',
            default: '0',
            required: false,
            description: 'The position of the step within the AccordionWizard.'
          },
          {
            private: true,
            name: 'isActive',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Renders the step as active in the Accordion.'
          },
          {
            private: true,
            name: 'isComplete',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Checkmark is visible.'
          },
          {
            private: true,
            name: 'isFirstStep',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Only the next button is visible.'
          },
          {
            private: true,
            name: 'isLastStep',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'A back button and submit button are visible.'
          },
          {
            private: true,
            name: 'nextButtonText',
            type: 'string',
            default: 'Next',
            required: false,
            description: 'Text for all next buttons'
          },
          {
            private: true,
            name: 'submitButtonText',
            type: 'string',
            default: 'Submit',
            required: false,
            description: 'Text for the Submit button'
          },
          {
            private: true,
            name: 'onSubmit',
            type: 'function',
            default: null,
            required: false,
            description: 'Callback function for handling the submit button click event.'
          }
        ]
      }
    />
  </LayoutComponents>

);
