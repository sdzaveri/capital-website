/* tslint:disable:no-default-export */

import { Header, TooltipContent } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="charttooltip">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ TooltipContent }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="ChartTooltip"
      code={
`<TooltipContent
  amount="..."
  category="..."
  categoryColor="#..."
  change="..."
  percentOfTotal="..%"
  timeRange="..."
  total="..."
  value="..."
  xAxis="..."
/>`
      }
    >
      <TooltipContent
        amount="..."
        category="Category"
        categoryColor="#4781BF"
        change="..."
        percentOfTotal="...%"
        timeRange="..."
        total="..."
        value="Value"
        xAxis="xAxis Value"
      />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'amount',
            type: 'string',
            default: null,
            required: false,
            description: 'Amount displayed as meta data'
          },
          {
            name: 'category',
            type: 'string',
            default: null,
            required: true,
            description: 'Category value displayed at top of tooltip'
          },
          {
            name: 'categoryColor',
            type: 'string',
            default: null,
            required: true,
            description: 'Hex value used to color top bar of tooltip'
          },
          {
            name: 'change',
            type: 'string',
            default: null,
            required: false,
            description: 'Change displayed as meta data'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'percentOfTotal',
            type: 'string',
            default: null,
            required: false,
            description: 'Percent of total displayed as meta data'
          },
          {
            name: 'timeRange',
            type: 'string',
            default: null,
            required: false,
            description: 'Time range displayed as meta data'
          },
          {
            name: 'total',
            type: 'string',
            default: null,
            required: false,
            description: 'Total displayed as meta data'
          },
          {
            name: 'value',
            type: 'string',
            default: null,
            required: true,
            description: 'Data value displayed at top of tooltip'
          },
          {
            name: 'xAxis',
            type: 'string',
            default: null,
            required: true,
            description: 'xAxis value displayed at top of tooltip'
          }
        ]
      }
    />
  </LayoutComponents>

);
