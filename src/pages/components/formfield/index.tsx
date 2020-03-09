/* tslint:disable:no-default-export */

import {
  Checkbox,
  Form,
  Header,
  Input,
  RadioButton,
  RadioGroup,
  Select,
  Switch,
  TextArea
} from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="formfield">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Form }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="FormItem"
      code={`<Form.Item description="..." label="..." htmlFor="...">
  ...
</Form.Item>`}
    >
      <Form.Item
        description="Description"
        label="Example"
      >
        <Input.Text />
      </Form.Item>
    </ComponentExample>

    <ComponentExample
      component="FormItem"
      config="variant: Required"
      code={
`<Form.Item description="..." label="..." htmlFor="..." required={true}>
  ...
</Form.Item>`
      }
    >
      <Form.Item
        description="Description"
        htmlFor="formElement"
        label="Example"
        required={true}
      >
        <Input.Text />
      </Form.Item>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Examples</Header>

    <Header variant="h3" className="websiteH3">Input</Header>

    <code>import {'{ Form, Input }'} from '@opengov/component-library/capital';</code>

    <ComponentExample
      component="FormItem"
      code={
`<Form.Item description="..." label="..." htmlFor="...">
  <Input.Text />
</Form.Item>`
      }
    >
      <Form.Item
        description="Description"
        htmlFor="formElement"
        label="Example"
      >
        <Input.Text />
      </Form.Item>
    </ComponentExample>

    <Header variant="h3" className="websiteH3">Select</Header>

    <code>import {'{ Form, Select }'} from '@opengov/component-library/capital';</code>

    <ComponentExample
      component="FormItem"
      code={
`<Form.Item description="..." label="..." htmlFor="...">
  <Select placeholder="...">
    <Select.Option value="..." label="..." />
    <Select.Option value="..." label="..." />
    <Select.Option value="..." label="..." />
  </Select>
</Form.Item>`
      }
    >
      <Form.Item
        description="Description"
        htmlFor="formElement"
        label="Example"
      >
        <Select placeholder="Select an option">
          <Select.Option value="" label="Example" />
          <Select.Option value="" label="Example" />
          <Select.Option value="" label="Example" />
        </Select>
      </Form.Item>
    </ComponentExample>

    <Header variant="h3" className="websiteH3">TextaAea</Header>

    <code>import {'{ Form, TextArea }'} from '@opengov/component-library/capital';</code>

    <ComponentExample
      component="FormItem"
      code={
`<Form.Item description="..." label="..." htmlFor="...">
  <TextArea placeholder="..." />
</Form.Item>`
      }
    >
      <Form.Item
        description="Description"
        htmlFor="formElement"
        label="Example"
      >
        <TextArea placeholder="Example..." />
      </Form.Item>
    </ComponentExample>

    <Header variant="h3" className="websiteH3">Checkbox</Header>

    <code>import {'{ Form, Checkbox }'} from '@opengov/component-library/capital';</code>

    <ComponentExample
      component="FormItem"
      code={
`<Form.Item description="..." label="..." htmlFor="...">
  <Checkbox label="..."/>
</Form.Item>`
      }
    >
      <Form.Item
        description="Description"
        htmlFor="formElement"
        label="Example"
      >
        <Checkbox label="Example"/>
      </Form.Item>
    </ComponentExample>

    <Header variant="h3" className="websiteH3">Radio Buttons</Header>

    <code>import {'{ Form, RadioButton, RadioGroup }'} from '@opengov/component-library/capital';</code>

    <ComponentExample
      component="FormItem"
      code={
`<Form.Item description="..." label="..." htmlFor="...">
  <RadioGroup>
    <RadioButton value="..." label="..." />
    <RadioButton value="..." label="..." />
  </RadioGroup>
</Form.Item>`
      }
    >
      <Form.Item
        description="Description"
        htmlFor="formElement"
        label="Example"
      >
        <RadioGroup>
          <RadioButton label="Example" />
          <RadioButton label="Example" />
        </RadioGroup>
      </Form.Item>
    </ComponentExample>

    <Header variant="h3" className="websiteH3">Switch</Header>

    <code>import {'{ Form, Switch }'} from '@opengov/component-library/capital';</code>

    <ComponentExample
      component="FormItem"
      code={
`<Form.Item  description="..." label="..." htmlFor="...">
  <Switch id="..." label="..." />
</Form.Item>`
      }
    >
      <Form.Item
        description="Description"
        htmlFor="formElement"
        label="Example"
      >
        <Switch id="" label="Switch Example" labelOff="off" labelOn="on" />
      </Form.Item>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'description',
            type: 'string',
            default: 'false',
            required: false,
            description: 'Description text that describes the purpose of the field'
          },
          {
            name: 'htmlFor',
            type: 'string',
            default: null,
            required: false,
            description: 'ID of child component to be associated with label'
          },
          {
            name: 'label',
            type: 'string',
            default: null,
            required: true,
            description: 'The text for the label describing the field'
          },
          {
            name: 'required',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Set to true if this field is required to submit the form'
          }
        ]
      }
    />
  </LayoutComponents>
);
