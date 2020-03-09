import CMS from 'netlify-cms-app';

import CMSPreview from './preview-templates/CMSPreview';

CMS.registerPreviewTemplate('patterns', CMSPreview);
CMS.registerPreviewTemplate('pages', CMSPreview);
