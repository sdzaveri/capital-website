/* tslint:disable:no-default-export */

import { Header, Icon, Input, Prefix, Suffix } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="input">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Input }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Input"
      config="type: Text"
      code={`<Input.Text placeholder="..." />`}
    >
      <Input.Text placeholder="Placeholder" />
    </ComponentExample>
    <ComponentExample
      component="Input"
      config="type: Number"
      code={`<Input.Number placeholder="..." />`}
    >
      <Input.Number placeholder="Placeholder" />
    </ComponentExample>
    <ComponentExample
      component="Input"
      config="type: Date"
      code={`<Input.Date />`}
    >
      <Input.Date />
    </ComponentExample>
    <ComponentExample
      component="Input"
      config="type: Year"
      code={`<Input.Year />`}
    >
      <Input.Year />
    </ComponentExample>
    <Header variant="h2" className="websiteH2">Configurations</Header>
    <h3>Prefix</h3>
    <p><code>import {'{ Prefix }'} from '@opengov/component-library/capital';</code></p>
    <ComponentExample
      component="Input"
      config="prefix"
      code={`<Input.XX prefix={<Prefix text="..." />} placeholder="..." />`}
    >
      <Input.Text prefix={<Prefix text="Text" />} placeholder="Placeholder" />
    </ComponentExample>
    <ComponentExample
      component="Input"
      config="prefix: icon=icon-id"
      code={`<Input.XX prefix={<Prefix icon={<Icon icon="..." />} />} placeholder="..." />`}
    >
      <Input.Text prefix={<Prefix icon={<Icon icon="datatype-currency" />} />} placeholder="Placeholder" />
    </ComponentExample>
    <h3>Suffix</h3>
    <p><code>import {'{ Suffix }'} from '@opengov/component-library/capital';</code></p>
    <div className="columns columns-2">
      <ComponentExample
        component="Input"
        config="suffix"
        code={`<Input.XX suffix={<Suffix text="..." />} placeholder="..." />`}
      >
        <Input.Text suffix={<Suffix text="Text" />} placeholder="Placeholder" />
      </ComponentExample>
      <ComponentExample
        component="Input"
        config="suffix: icon=icon-id"
        code={`<Input.XX suffix={<Suffix icon={<Icon icon="..." />} />} placeholder="..." />`}
      >
        <Input.Text suffix={<Suffix icon={<Icon icon="datatype-percentage" />} />} placeholder="Placeholder" />
      </ComponentExample>
    </div>
    <Header variant="h2" className="websiteH2">States</Header>
    <ComponentExample
      component="Input"
      state="Disabled"
      code={
`<Input.XX
  prefix={<Prefix text="..." disabled={true} />}
  suffix={<Suffix text="..." disabled={true} />}
  placeholder="..."
  disabled={true}
/>`
      }
    >
      <Input.Text
        prefix={<Prefix text="Prefix" disabled={true} />}
        suffix={<Suffix text="Suffix" disabled={true}/>}
        placeholder="Placeholder"
        disabled={true}
      />
    </ComponentExample>
    <Header variant="h2" className="websiteH2">Props</Header>
    <Header variant="h3" className="websiteH3">Input.Text & Input.Number</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: true,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'disabled',
            type: 'string',
            default: 'false',
            required: false,
            description: 'Set to true if you want to disable the input from accepting changes from the user'
          },
          {
            name: 'defaultValue',
            type: 'string',
            default: null,
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'For uncontrolled input components this sets the default value of the input. Do no use this for controlled inputs use value instead'
          },
          {
            name: 'id',
            type: 'string',
            default: null,
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'An unique id assigned to the input field. Used to associate the input with other form elements (Ex: label)'
          },
          {
            name: 'prefix',
            type: 'React.ReactNode',
            default: null,
            required: false,
            description: 'The component to prepend to the input'
          },
          {
            name: 'suffix',
            type: 'React.ReactNode',
            default: null,
            required: false,
            description: 'The component to append to the input'
          },
          {
            name: 'placeholder',
            type: 'string',
            default: null,
            required: false,
            description: 'Placeholder text displayed within the input when it is empty (no user input)'
          },
          {
            name: 'validationStates',
            type: 'string',
            default: null,
            required: false,
            description: 'Validation state of the input which can be either success or error'
          },
          {
            name: 'value',
            type: 'string',
            default: null,
            required: false,
            description: 'The current value of the input that is displayed to the user'
          },
          {
            name: 'onBlur',
            type: 'function',
            default: null,
            required: false,
            description: 'A function called whenever the user leaves the input'
          },
          {
            name: 'onChange',
            type: 'function',
            default: null,
            required: false,
            description: 'A function called whenever the user leaves the input'
          },
          {
            name: 'onFocus',
            type: 'function',
            default: null,
            required: false,
            description: 'A function called whenever the user leaves the input'
          },
          {
            name: 'onKeyDown',
            type: 'function',
            default: null,
            required: false,
            description: 'A function called whenever the user leaves the input'
          },
          {
            name: 'onKeyUp',
            type: 'function',
            default: null,
            required: false,
            description: 'A function called whenever the user leaves the input'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3">Input.Date & Input.Year</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'allowPartialDate',
            type: 'boolean',
            default: 'false',
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'For uncontrolled input components this sets the default value of the input. Do no use this for controlled inputs use value instead'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: true,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'disabled',
            type: 'string',
            default: 'false',
            required: false,
            description: 'Set to true if you want to disable the input from accepting changes from the user'
          },
          {
            name: 'errorMessage',
            type: 'string',
            default: null,
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'Application level error message that the component will display regardless of internal error state'
          },
          {
            name: 'id',
            type: 'string',
            default: null,
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'No	An unique id assigned to the input field. Used to associate the input with other form elements (Ex: label)'
          },
          {
            name: 'prefix',
            type: 'React.ReactNode',
            default: null,
            required: false,
            description: 'The component to prepend to the input'
          },
          {
            name: 'suffix',
            type: 'React.ReactNode',
            default: null,
            required: false,
            description: 'The component to append to the input'
          },
          {
            name: 'placeholder',
            type: 'string',
            default: null,
            required: false,
            description: 'Placeholder text displayed within the input when it is empty (no user input)'
          },
          {
            name: 'validationStates',
            type: 'string',
            default: null,
            required: false,
            description: 'Validation state of the input which can be either success or error'
          },
          {
            name: 'value',
            type: 'string',
            default: null,
            required: false,
            description: 'The current value of the input that is displayed to the user'
          },
          {
            name: 'onChange',
            type: 'function',
            default: null,
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'Application level error message that the component will display regardless of internal error state'
          },
          {
            name: 'onDateValid / onYearValid',
            type: 'function',
            default: null,
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'This callback is executed anytime validation happens in the date input component. Returns true or false for isDateValid / isYearValid, the current date / year being validated, and whether or not the date / year is complete'
          }
        ]
      }
    />
  </LayoutComponents>

);
