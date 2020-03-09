/* tslint:disable:no-default-export max-line-length */

import { Badge, Header } from '@opengov/component-library/capital';
import React from 'react';

import LayoutComponents from '../../../components/Layouts/LayoutComponents';

export default () => (
  <LayoutComponents component="badge">
    <Header variant="h2" className="websiteH2">Overview</Header>
    <p>Badges communicate status or data about an object. Badges are not directly removable but do update based on data (going over budget) or user action (publishing a story).</p>
    <p>There are two types of badges. <strong>Strong and Neutral</strong></p>
    <Header variant="h3" className="websiteH3">Strong badges</Header>
    <Badge variant="strong" text="New" /> <Badge variant="negative" text="Rejected" /> <Badge variant="positive" text="On Target" />
    <p>Strong badges are used to indicate high priority, discernably negative, positive, or impactful states. Examples of strong badges are: going over budget, hitting a target, or a new feature.</p>
    <Header variant="h3" className="websiteH3">Neutral badges</Header>
    <Badge variant="neutral" text="Submitted" /> <Badge variant="warning" text="On Track" /> <Badge variant="bright" text="In Progress" />
    <p>Neutral badges are used to indicate lower priority, nonessential or tentative states.</p>
    <Header variant="h2" className="websiteH2">Layout</Header>
    <Header variant="h2" className="websiteH2">Content</Header>
    <p>Badge text should be kept to 1-2 words.</p>
  </LayoutComponents>
);
