/* tslint:disable:no-default-export */

import { Header, Modal } from '@opengov/component-library/capital';
import React from 'react';

import { ComponentExample, PropsTable } from '../../../components';
import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="modal">
    <Header variant="h2" className="websiteH2">Import</Header>
    <code>import {'{ Modal }'} from '@opengov/component-library/capital';</code>

    <Header variant="h2" className="websiteH2">Variants</Header>
    <ComponentExample
      component="Modal"
      code={`<Modal.Work title="..." description="..." onClose={...}>...</Modal.Work>`}
    >
      <div style={{position: 'relative', height: '300px', width: '100%', transform: 'translate3d(0,0,0)'}}>
        <Modal.Work title="Example modal title" description="Example modal description">
          Example modal content
        </Modal.Work>
      </div>
    </ComponentExample>

    <ComponentExample
      component="Modal"
      config="size: Wide"
      code={`<Modal.Work.Wide title="..." description="..." onClose={...}>...</Modal.Work>`}
    >
      <div style={{position: 'relative', height: '300px', width: '100%', transform: 'translate3d(0,0,0)'}}>
        <Modal.Work.Wide title="Example modal title" description="Example modal description">
          Example modal content
        </Modal.Work.Wide>
      </div>
    </ComponentExample>


    <Header variant="h2" className="websiteH2">Props</Header>
    <PropsTable
      componentProps={
        [
          {
            name: 'description',
            type: 'string',
            default: null,
            required: false,
            description: 'Text to display as the modal description'
          },
          {
            name: 'title',
            type: 'string',
            default: null,
            required: false,
            description: 'Text to display as the modal title'
          },
          {
            name: 'onClose',
            type: 'function',
            default: null,
            required: false,
            description: 'Callback for when the top right close icon is clicked'
          }
        ]
      }
    />
  </LayoutComponents>

);
