/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import React from 'react';

import { ToolsTable } from '../../components';
import LayoutReference from '../../components/Layouts/LayoutReference';
import tocStyles from '../../components/Layouts/TOC.scss';

export const MixinTOC = props => (
  <ul className={tocStyles.toc}>
    <li><a className={tocStyles.section} href="#mixins">Focus</a></li>
  </ul>
);


export default () => (
  <LayoutReference
    title="Tokens"
    description="Tokens are Sass variables that support OpenGov styles."
    tabs={[
      {
        name: 'Tokens',
        url: '/tokens'
      },
      {
        name: 'Mixins',
        url: '/mixins'
      }
    ]}
  >
    <MixinTOC />
    <Header variant="h2" className="websiteH2" id="focus">Focus</Header>
    <ToolsTable
      tools={
        [
          {
            name: '@focus-default',
            value: ['outline: $border-primary-focus', 'outline-offset: 2px'],
            valueJS: { outline : '2px solid rgba(0, 149, 255, 1)', outlineOffset : '2px' },
            type: 'mixin'
          },
          {
            name: '@focus-wrap',
            value: ['border: $border-primary-focus', 'outline: none'],
            valueJS: { border : '2px solid rgba(0, 149, 255, 1)' },
            type: 'mixin'
          }
        ]
      }
    />
  </LayoutReference>
);
