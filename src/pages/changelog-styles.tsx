/* tslint:disable:no-default-export */

import changelog from '@opengov/capital-style/CHANGELOG.md';
import { Header } from '@opengov/component-library/capital';
import Markdown from 'markdown-to-jsx';
import React from 'react';

import LayoutReference from '../components/Layouts/LayoutReference';

export default () => (
  <LayoutReference
    title="Changelogs"
    description="Tokens are Sass variables that support OpenGov styles."
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
        },
        h3: {
          component: Header,
          props: {
            className: 'websiteH4',
            variant: 'h4'
          }
        }
      }
    }}
    children={changelog}
  />
  </LayoutReference>
);
