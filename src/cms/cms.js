import CMS from 'netlify-cms-app';
import CMSPreview from './preview-templates/CMSPreview';

CMS.registerPreviewStyle("/base.css");

CMS.registerPreviewTemplate('overview', CMSPreview);
CMS.registerPreviewTemplate('styles', CMSPreview);
CMS.registerPreviewTemplate('patterns', CMSPreview);
CMS.registerPreviewTemplate('components', CMSPreview);
