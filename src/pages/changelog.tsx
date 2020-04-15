/* tslint:disable:no-default-export */

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

  </LayoutReference>
);
