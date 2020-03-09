/* tslint:disable:no-default-export max-line-length  */

import React from 'react';

import { WebsiteHeader } from '../../components/WebsiteHeader';

export default () => (
  <>
    <WebsiteHeader activeTab="components" />
    <div className="iframeContainer">
      <iframe title="CDS Storybook" border="0" width="100%" height="100%" src="https://opengov.github.io/voltron/component-library/?path=/story/capital-accordionwizard--basic" />
    </div>
  </>
);
