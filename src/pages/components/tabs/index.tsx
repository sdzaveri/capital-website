/* tslint:disable:no-default-export */

import { Header, Tab } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="tabs">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Tab }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Tab"
      code={
`<Tab.Group activeTabIndex={0}>
  <Tab.Option label="...">
    ...
  </Tab.Option>
  <Tab.Option label="...">
    ...
  </Tab.Option>
  <Tab.Setting>
    ...
  </Tab.Setting>
</Tab.Group>`
}
    >
      <Tab.Group activeTabIndex={0}>
        <Tab.Option label="First tab">
          <p>Content for the first tab</p>
        </Tab.Option>
        <Tab.Option label="Second tab">
          <p>Content for the second tab</p>
        </Tab.Option>
        <Tab.Setting>
          <p>Content for the settings tab</p>
        </Tab.Setting>
      </Tab.Group>
    </ComponentExample>

    <ComponentExample
      component="Tab"
      config="style: White"
      code={`<Tab.Group activeTabIndex={0}>
  <Tab.Option activeBackgroundColor="white" label="...">
    ...
  </Tab.Option>
  <Tab.Option activeBackgroundColor="white" label="...">
    ...
  </Tab.Option>
  <Tab.Setting activeBackgroundColor="white">
    ...
  </Tab.Setting>
</Tab.Group>`}
    >
      <Tab.Group activeTabIndex={0}>
        <Tab.Option activeBackgroundColor="white" label="First tab">
          <p>Content for the first tab</p>
        </Tab.Option>
        <Tab.Option activeBackgroundColor="white" label="Second tab">
          <p>Content for the second tab</p>
        </Tab.Option>
        <Tab.Setting activeBackgroundColor="white">
          <p>Content for the settings tab</p>
        </Tab.Setting>
      </Tab.Group>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <Header variant="h3" className="websiteH3">Tab.Group</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'activeTabIndex',
            type: 'number',
            default: null,
            required: true,
            description: 'This number indicates which tab is active and sets the state in Tab.Group'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            private: true,
            name: 'onTabIndexChanged',
            type: 'function',
            default: null,
            required: false,
            description: 'Callback function for the tab group'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3">Tab.Option & Tab.Setting</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'activeBackgroundColor',
            type: 'string',
            default: 'gray',
            required: false,
            description: 'Accepts values "gray" or "white" to set background color of active tabs'
          },
          {
            name: 'label',
            type: 'number',
            default: 0,
            required: true,
            description: 'Text displayed as tab title'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            private: 'true',
            name: 'index',
            type: 'number',
            default: 0,
            required: true,
            description: 'Indicates the order of the tab ib relation to it\'s siblings'
          },
          {
            private: true,
            name: 'onTabClicked',
            type: 'function',
            default: null,
            required: false,
            description: 'Callback function for the tab group'
          }
        ]
      }
    />
  </LayoutComponents>
);
