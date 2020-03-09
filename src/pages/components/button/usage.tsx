/* tslint:disable:no-default-export max-line-length */

import { Button } from '@opengov/component-library/capital';
import React from 'react';

import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="button">
    <h2>Styles</h2>

    <h3>Neutral</h3>
    <Button.Neutral>Example</Button.Neutral>
    <p>The most commonly used button style. Used in most situations where this is not the primary action on the page and it is not destructive.</p>

    <h3>Primary</h3>
    <Button.Primary>Example</Button.Primary>
    <p>Used for the button that performs the primary action for the page (ex: Save). Try to limit to one primary button per a screen.</p>

    <h3>Naked</h3>
    <p>Description of naked style</p>

    <h3>Destructive</h3>
    <p>Used for buttons that perform a destructive action.</p>

    <h2>Sizes</h2>

    <h3>Default</h3>
    <p>Most commonly used size. Should be used for all primary tasks.</p>

    <h3>Small</h3>
    <p>Limit use of this size and do not mix with other sizes. Reserved mostly for smaller components such as complex menus that appear on hover or click.</p>

    <h3>Large</h3>
    <p>Limited for actions that need emphasis. Good for empty state views. Should not be used for most primary actions.</p>

    <h2>States</h2>

    <h3>Disabled</h3>

    <h3>Loading</h3>

    <h2>Content</h2>

    <p>Buttons can contain text, an icon, or a combination of both. If text an an icon are present, the icon should always be to the left.</p>

  </LayoutComponents>
);
