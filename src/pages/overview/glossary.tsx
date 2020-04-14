/* tslint:disable:no-default-export */

import React from 'react';

import LayoutDefault from '../../components/Layouts/LayoutDefault';
import { Glossary } from '../../components';

import systemGlossary from '../../data/glossary/system.json';

export default () => (
  <LayoutDefault
    activeTab="overview"
    title="System Glossary"
    description="Terms used within and to describe Capital Design System."
  >
    <Glossary terms={systemGlossary.terms} />
  </LayoutDefault>
);
