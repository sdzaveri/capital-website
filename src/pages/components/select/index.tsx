/* tslint:disable:no-default-export */

import {
  ButtonGroup,
  ButtonToggle,
  Header,
  Icon,
  Label,
  Prefix,
  Select,
  Suffix
} from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="select">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Select }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Select"
      code={`<Select id={...} value={...} placeholder="..." onChange={...} maxMenuHeight={...} disabled={...}>
  <Select.Option label="..." value="..." />
  <Select.Option label="..." value="..." />
</Select>`}
    >
      <Select
        placeholder="Select option"
      >
        <Select.Option value="" label="Option 1" />
        <Select.Option value="" label="Option 2" />
        <Select.Option value="" label="Option 3" />
        <Select.Option value="" label="Option 4, a longer option to see how text flows" />
      </Select>

    </ComponentExample>

    <ComponentExample
      component="Select"
      config="size: Small"
      code={
`<Select.Small id={...} value={...} placeholder="..." onChange={...} maxMenuHeight={...} disabled={...}>
  <Select.Option label="..." value="..." />
  <Select.Option label="..." value="..." />
</Select.Small>`
      }
    >
      <Select.Small
        placeholder="Select option"
      >
        <Select.Option value="" label="Option 1" />
        <Select.Option value="" label="Option 2" />
        <Select.Option value="" label="Option 3" />
        <Select.Option value="" label="Option 4, a longer option to see how text flows" />
      </Select.Small>

    </ComponentExample>

    <Header variant="h2" className="websiteH2">Configurations</Header>
    <Header variant="h3" className="websiteH3">Prefix</Header>
    <ComponentExample
      component="Select"
      config="prefix"
      code={`<Select prefix={<Prefix text="..." />} > ... </Select>`}
    >
      <Select
        placeholder="Select an option"
        prefix={<Prefix text="Example" />}
      >
        <Select.Option value="" label="Option 1" />
        <Select.Option value="" label="Option 2" />
        <Select.Option value="" label="Option 3" />
      </Select>
    </ComponentExample>
    <ComponentExample
      component="Select"
      config="prefix: icon=icon-id"
      code={`<Select prefix={<Prefix icon={<Icon icon="icon-id" />} />} > ... </Select>`}
    >
      <Select
        placeholder="Select an option"
        prefix={<Prefix icon={<Icon icon="action-export" />} />}
      >
        <Select.Option value="" label="Option 1" />
        <Select.Option value="" label="Option 2" />
        <Select.Option value="" label="Option 3" />
      </Select>
    </ComponentExample>

    <Header variant="h3" className="websiteH3">Suffix</Header>

    <ComponentExample
      component="Select"
      config="suffix"
      code={`<Select suffix={<Suffix text="..." />} > ... </Select>`}
    >
      <Select
        placeholder="Select an option"
        suffix={<Suffix text="Example" />}
      >
        <Select.Option value="" label="Option 1" />
        <Select.Option value="" label="Option 2" />
        <Select.Option value="" label="Option 3" />
      </Select>
    </ComponentExample>

    <ComponentExample
      component="Select"
      config="suffix: icon=icon-id"
      code={`<Select suffix={<Suffix icon={<Icon icon="icon-id" />} />} > ... </Select>`}
    >
      <Select
        placeholder="Select an option"
        suffix={<Suffix icon={<Icon icon="action-export" />} />}
      >
        <Select.Option value="" label="Option 1" />
        <Select.Option value="" label="Option 2" />
        <Select.Option value="" label="Option 3" />
      </Select>
    </ComponentExample>

    <Header variant="h3" className="websiteH3">Select.Option Configurations</Header>
    <ComponentExample
      component="Select"
      state="Grouped Options"
      code={
`<Select>
  <Select.Option.Label text="..." />
  <Select.Option label="..." value="..." />
  <Select.Option label="..." value="..." />
  <Select.Option.Divider />
  <Select.Option label="..." value="..." />
  <Select.Option label="..." value="..." />
  <Select.Option.Section text="..." />
  <Select.Option label="..." value="..." />
  <Select.Option label="..." value="..." />
  <Select.Option.Label text="..." />
  <Select.Option label="..." value="..." />
</Select>`
      }
    >
        <Select
          placeholder="Select an option"
        >
          <Select.Option.Label text="Section 1" />
          <Select.Option value="" label="Option 1" />
          <Select.Option value="" label="Option 2" />
          <Select.Option.Divider />
          <Select.Option value="" label="Option 3" />
          <Select.Option value="" label="Option 4" />
          <Select.Option.Section text="Section 3" />
          <Select.Option value="" label="Option 5" />
          <Select.Option value="" label="Option 6" />
          <Select.Option.Label text="Section 4" />
          <Select.Option value="" label="Option 7" />
        </Select>
    </ComponentExample>
    <ComponentExample
      component="Select"
      state="Indentation"
      code={`<Select>
  <Select.Option label="..." value="..." />
  <Select.Option.Section text="..." />
  <Select.Option label="..." value="..." />
  <Select.Option.Label text="..." indentLevel={1} />
  <Select.Option label="..." value="..." indentLevel={1} />
  <Select.Option.Label text="..." indentLevel={2} />
  <Select.Option label="..." value="..." indentLevel={2} />
  <Select.Option.Section text="..." />
  <Select.Option label="..." value="..." />
</Select>`}
    >
      <Select
        placeholder="Select an option"
      >
        <Select.Option value="" label="Option 1" />
        <Select.Option.Section text="Section 1" />
        <Select.Option value="" label="Option 2" />
        <Select.Option.Label text="Section 1a" indentLevel={1} />
        <Select.Option value="" label="Option 3" indentLevel={1} />
        <Select.Option.Label text="Section 1b" indentLevel={2} />
        <Select.Option value="" label="Option 4" indentLevel={2} />
        <Select.Option.Section text="Section 2" />
        <Select.Option value="" label="Option 5" />
      </Select>
    </ComponentExample>

    <ComponentExample
      component="Select"
      state="Secondary Information"
      code={`<Select>
  <Select.Option label="..." secondaryLabel="..." value="..." />
</Select>`}
    >
      <Select placeholder="Select an option">
        <Select.Option
          value=""
          label="Option 1"
          secondaryLabel="Text"
        />
        <Select.Option
          value=""
          label="Option 2"
          secondaryLabel="Longer text"
        />
        <Select.Option
          value=""
          label="Option 3"
          secondaryLabel="$"
        />
      </Select>
    </ComponentExample>
    <ComponentExample
      component="Select"
      state="Menu Footer"
      code={`<Select>
  <Select.Option label="..." />
  <Select.Footer>
    ...
  </Select.Footer>
</Select>`}
    >
      <Select placeholder="Select an option">
        <Select.Option value="" label="Option 1" />
        <Select.Option value="" label="Option 2" />
        <Select.Footer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ flexGrow: 1, marginRight: '16px' }}>
              <Label>Example</Label>
            </span>
            <ButtonToggle.Neutral.Small>
              <ButtonGroup.Button>Value 1</ButtonGroup.Button>
              <ButtonGroup.Button>Value 2</ButtonGroup.Button>
            </ButtonToggle.Neutral.Small>
          </div>
        </Select.Footer>
      </Select>
    </ComponentExample>
    <Header variant="h2" className="websiteH2">States</Header>
    <ComponentExample
      component="Select"
      state="Disabled"
      code={`<Select disabled> ... </Select>`}
    >
      <Select placeholder="Select an option" disabled={true}>
        <Select.Option value="" label="Option 1" />
      </Select>
    </ComponentExample>
    <ComponentExample
      component="Select"
      state="Disabled Options"
      code={`<Select placeholder="Select an option">
  <Select.Option label="..." value="..." disabled />
</Select>`}
    >
      <Select placeholder="Select an option">
        <Select.Option value="" label="Option 1" />
        <Select.Option value="" label="Option 2" disabled={true} />
        <Select.Option value="" label="Option 3" />
        <Select.Option value="" label="Option 4" />
      </Select>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <Header variant="h3" className="websiteH3">Select</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'checked',
            type: 'boolean',
            default: 'false',
            required: false,
            // tslint:disable-next-line: max-line-length
            description: 'The current state of the checkbox. Used in conjunction with onChange to create a controlled component'
          },
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
            // tslint:disable-next-line: max-line-length
            description: 'Set to true if this checkbox should be disabled. The user won’t be able to trigger a onChange callback when clicking it'
          },
          {
            name: 'label',
            type: 'string',
            default: null,
            required: false,
            description: 'The text label that describes the purpose of this checkbox option to the user'
          },

          {
            name: 'onChange',
            type: 'function',
            default: null,
            required: true,
            // tslint:disable-next-line: max-line-length
            description: 'A function that is called whenever the user tries to update the checkbox input control value, except when disabled is set to true'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3">Select.Option</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Whether the option should be disabled'
          },
          {
            name: 'indentLevel',
            type: 'number',
            default: '0',
            required: false,
            description: 'The indentation level of this option. Should be a number between 0 and 4.'
          },
          {
            name: 'label',
            type: 'string',
            default: null,
            required: true,
            description: 'The text to be displayed for this option on the options menu.'
          },
          {
            name: 'prefixIcon',
            type: '<Icon />',
            default: null,
            required: false,
            description: 'The icon component to display to the left of the menu option.'
          },
          {
            name: 'value',
            type: 'string, Record',
            default: null,
            required: true,
            description: 'The form value associated with this option. It is passed to the onChange callback on Select.'
          },
          {
            name: 'onChange',
            type: 'function',
            default: null,
            required: false,
            description: 'Internal usage. Notifies Select about a new value being chosen.'
          },
          {
            name: 'selected',
            private: true,
            type: 'string',
            default: null,
            required: false,
            description: 'Internal usage. Used by Select to apply the appropriate style for selected options.'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3">Select.Option.Section</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'indentLevel',
            type: 'number',
            default: '0',
            required: false,
            description: 'The indentation level of this label. Should be a number between 0 and 4.'
          },
          {
            name: 'text',
            type: 'string',
            default: null,
            required: true,
            description: 'The text to be displayed on the label.'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3">Select.Option.Label</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Whether the label should be disabled'
          },
          {
            name: 'indentLevel',
            type: 'number',
            default: '0',
            required: false,
            description: 'The indentation level of this label. Should be a number between 0 and 4.'
          },
          {
            name: 'text',
            type: 'string',
            default: null,
            required: true,
            description: 'The text to be displayed on the label.'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3">Select.Option.Divider</Header>
    <em>No props</em>
  </LayoutComponents>
);
