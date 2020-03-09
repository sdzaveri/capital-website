/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import changelog from '@opengov/component-library/CHANGELOG.md';

import Markdown from 'markdown-to-jsx';
import React from 'react';

import LayoutReference from '../components/Layouts/LayoutReference';

export default () => (
  <LayoutReference
    title="Changelogs"
    tabs={[
      {
        name: 'Components',
        url: '/changelog'
      },
      {
        name: 'Styles',
        url: '/changelog-styles'
      }
    ]}
  >

  <Markdown
    options={{
      overrides: {
        h1: {
          component: Header,
          props: {
            className: 'websiteH2',
            variant: 'h2'
          }
        },
        h2: {
          component: Header,
          props: {
            className: 'websiteH3',
            variant: 'h3'
          }
        }
      }
    }}
    children={changelog}
  />
  </LayoutReference>
);
