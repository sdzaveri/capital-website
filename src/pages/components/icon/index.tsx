/* tslint:disable:no-default-export */

import { Header, Icon } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="icon">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Icon }'} from '@opengov/component-library/capital';</code>
    <Header variant="h2" className="websiteH2">Configurations</Header>
    <ComponentExample
      component="Icon"
      config="icon: icon-name, ariaLabel: Label"
      code={`<Icon icon="icon-name" ariaLabel="Label" />`}
    >
      <Icon icon="action-export" ariaLabel="Label" />
    </ComponentExample>

    <ComponentExample
      component="Icon"
      config="icon: icon-name, ariaHidden: true"
      code={`<Icon icon="icon-name" ariaHidden={true} />`}
    >
      <Icon icon="action-export" ariaHidden={true} />
    </ComponentExample>

    <ComponentExample
      component="Icon"
      config="icon: icon-name, ariaLabelledBy: ID"
      code={`<Icon icon="icon-name" ariaLabelledby="..." />`}
    >
      <Icon icon="action-export" ariaLabelledby="tooltipID" />
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Available Icons</Header>

    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'ariaHidden',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Determines if icon is hidden to screenreader'
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: null,
            required: false,
            description: 'Label to be read by screenreader'
          },
          {
            name: 'ariaLabelledby',
            type: 'string',
            default: null,
            required: false,
            description: 'DOM ID of object that labels icon'
          },
          {
            name: 'className',
            type: 'string',
            default: null,
            required: false,
            description: 'Adds a class to icon'
          },
          {
            name: 'dataTest',
            type: 'string',
            default: null,
            required: false,
            description: 'For testing purposes - enables QA to find the element'
          },
          {
            name: 'icon',
            type: 'string',
            default: null,
            required: false,
            description: 'Determines icon displayed, see possible values above.'
          }
        ]
      }
    />
  </LayoutComponents>
);
