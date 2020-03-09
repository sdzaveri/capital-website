/* tslint:disable:no-default-export */

import { BlockList, Header } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="blocklist">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ BlockList }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="BlockList"
      code={
`<BlockList.Basic onSelectedIndexChanged={...} seelected={...}>
  <BlockList.Item label="..." />
  <BlockList.Item label="..." />
</BlockList.Basic>`
      }
    >
      <BlockList selectedIndex={1}>
        <BlockList.Item label="First List Item" />
        <BlockList.Item label="Second List Item" />
        <BlockList.Item label="Third List Item" />
        <BlockList.Item label="Fourth List Item" />
        <BlockList.Item label="Fifth List Item goes to two lines, because it's a chatty cathy" />
        <BlockList.Item label="Oneextremelylongwordwithnospacesthatcantjustbewrarppedatsomepointinthesentence" />
      </BlockList>
    </ComponentExample>

    <Header variant="h2" className="websiteH2">Props</Header>
    <Header variant="h3" className="websiteH3">BlockList</Header>
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
            name: 'selectedIndex',
            type: 'number',
            default: null,
            required: false,
            description: 'Which item index to show as active on first render.'
          },
          {
            name: 'onSelectedIndexChanged',
            type: 'function',
            default: null,
            required: false,
            description: 'Called with the item index when an item is clicked.'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3">BlockList.Item</Header>
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
            name: 'label',
            type: 'string',
            default: null,
            required: true,
            description: 'The text for the list item'
          },
          {
            name: 'selected',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Whether or not to render the selected style and aria-selected=”true” attribute'
          },
          {
            name: 'focused',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Whether or not the item is focused'
          },
          {
            name: 'lastItem',
            type: 'boolean',
            default: 'false',
            required: false,
            description: 'Whether or not to render the bottom divider'
          },
          {
            name: 'onClick',
            type: 'function',
            default: null,
            required: false,
            description: 'Is called on the click event'
          },
          {
            name: 'onMouseEnter',
            type: 'boolean',
            default: null,
            required: false,
            description: 'Is called on the mouse enter event'
          }
        ]
      }
    />
  </LayoutComponents>

);
