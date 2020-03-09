/* tslint:disable:no-default-export */

import { Breadcrumb, Header } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="breadcrumb">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Breadcrumb }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Breadcrumb"
      code={
`<Breadcrumb prefixLabel="You are in:" label="breadcrumb">
  <Breadcrumb.Item title="Reports" href="#">Reports</Breadcrumb.Item>
  <Breadcrumb.Item title="Report Name" href="#">Report Name</Breadcrumb.Item>
  <Breadcrumb.Item title="Settings" active={true} href="#">Settings</Breadcrumb.Item>
</Breadcrumb>`
      }
    >
      <Breadcrumb prefixLabel="You are in:" label="breadcrumb">
        <Breadcrumb.Item title="Reports" href="#">
          Reports
        </Breadcrumb.Item>
        <Breadcrumb.Item title="Report Name" href="#">
          Report Name
        </Breadcrumb.Item>
        <Breadcrumb.Item title="Settings" active={true} href="#">
          Settings
        </Breadcrumb.Item>
      </Breadcrumb>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <Header variant="h3" className="websiteH3">Breadcrumb</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'variant',
            type: 'string',
            default: 'neutral',
            required: true,
            description: 'Style of badge'
          },
          {
            name: 'text',
            type: 'string',
            default: 'false',
            required: true,
            description: 'Text displayed in badged'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3">Breadcrumb.Item</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'variant',
            type: 'string',
            default: 'neutral',
            required: true,
            description: 'Style of badge'
          },
          {
            name: 'text',
            type: 'string',
            default: 'false',
            required: true,
            description: 'Text displayed in badged'
          }
        ]
      }
    />
  </LayoutComponents>

);
