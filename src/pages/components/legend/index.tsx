/* tslint:disable:no-default-export */

import { getVizColors } from '@opengov/capital-style/';
import { Header } from '@opengov/component-library/capital';
import { Legend } from '@opengov/component-library/capital/Legend';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => {
  const vizColorPalette = getVizColors(20);

  return (
    <LayoutComponents component="legend">
      <Header variant="h2" className="websiteH2">Import</Header>
      <code>import {'{ Legend }'} from '@opengov/component-library/capital';</code>

      <Header variant="h2" className="websiteH2">Variants</Header>
      <ComponentExample
        component="Legend"
        code={`<Legend>
  <Legend.Item key="..." label="..." colorSwatchColor="..." hoverColor="..." />
</Legend>`}
      >
        <Legend>
          {vizColorPalette.map(color => (
            <Legend.Item
              key={color.base}
              label="Example legend item"
              colorSwatchColor={color.base}
              hoverColor={color.highlight}
            />
          ))}
        </Legend>
      </ComponentExample>

      <ComponentExample
        component="Legend"
        config="variant: Checklist"
        code={`<Legend>
  <Legend.ChecklistItem key="..." label="..." colorSwatchColor="..." hoverColor="..." />
</Legend>`}
      >
        <Legend>
          {vizColorPalette.map(color => (
            <Legend.ChecklistItem
              key={color.base}
              label="Example legend checklist item"
              checkboxColor={color.base}
              hoverColor={color.highlight}
            />
          ))}
        </Legend>
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
};
