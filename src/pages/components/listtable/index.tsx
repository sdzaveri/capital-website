/* tslint:disable:no-default-export */

import { Header, ListTable } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="listtable">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ ListTable }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="ObjectList"
      code={`<ListTable>
  <ListTable.Header>
    <ListTable.HeaderCell>...</ListTable.HeaderCell>
    <ListTable.HeaderCell>...</ListTable.HeaderCell>
  </ListTable.Header>
  <ListTable.Row>
    <ListTable.Cell>...</ListTable.Cell>
    <ListTable.Cell>...</ListTable.Cell>
  </ListTable.Row>
  <ListTable.Row>
    <ListTable.Cell>...</ListTable.Cell>
    <ListTable.Cell>...</ListTable.Cell>
  </ListTable.Row>
</ListTable>`}
    >
      <ListTable>
        <ListTable.Header>
          <ListTable.HeaderCell>Name</ListTable.HeaderCell>
          <ListTable.HeaderCell>Last Updated</ListTable.HeaderCell>
          <ListTable.HeaderCell>Time Period</ListTable.HeaderCell>
        </ListTable.Header>
        <ListTable.Row>
          <ListTable.Cell>Example name</ListTable.Cell>
          <ListTable.Cell>June 1, 2018</ListTable.Cell>
          <ListTable.Cell>Jan 1, 2014 - May 31, 2018</ListTable.Cell>
        </ListTable.Row>
        <ListTable.Row>
          <ListTable.Cell>Example name</ListTable.Cell>
          <ListTable.Cell>June 1, 2018</ListTable.Cell>
          <ListTable.Cell>Jan 1, 2014 - May 31, 2018</ListTable.Cell>
        </ListTable.Row>
      </ListTable>
    </ComponentExample>


    <Header variant="h2" className="websiteH2">Props</Header>
    <Header variant="h3" className="websiteH3">
      ListTable, ListTable.Header, ListTable.HeaderCell, ListTable.Cell
    </Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3">ListTable.Row</Header>
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
            name: 'selected',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Visual state that shows row is clicked, should be used with a radio button within a cell'
          },
          {
            name: 'onClick',
            type: 'function',
            default: null,
            required: false,
            description: 'Callback function for when row is clicked on'
          }
        ]
      }
    />
  </LayoutComponents>
);
