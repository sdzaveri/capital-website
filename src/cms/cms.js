import CMS from 'netlify-cms-app';
import CMSPreview from './preview-templates/CMSPreview';

CMS.registerPreviewStyle("/base.css");

CMS.registerPreviewTemplate('pages', CMSPreview);
CMS.registerPreviewTemplate('patterns', CMSPreview);
