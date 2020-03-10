/* tslint:disable:no-default-export */

import { Header } from '@opengov/component-library/capital';
import React from 'react';

import { ToolsTable } from '../../components';
import LayoutDefault from '../../components/Layouts/LayoutDefault';
import tocStyles from '../../components/Layouts/TOC.scss';

const TokensTOC = props => (
  <ul className={tocStyles.toc}>
    <li><a className={tocStyles.section} href="#colors">Colors</a>
      <a className={tocStyles.subsection} href="#colors-grays">Grays</a>
      <a className={tocStyles.subsection} href="#colors-primary">Primary colors</a>
      <a className={tocStyles.subsection} href="#colors-status">Status colors</a>
      <a className={tocStyles.subsection} href="#colors-viz">Data visualization colors</a>
      <a className={tocStyles.subsection} href="#colors-gradients">Gradients</a>
    </li>
    <li><a className={tocStyles.section} href="#type">Typography</a>
      <a className={tocStyles.subsection} href="#type-fonts">Fonts</a>
      <a className={tocStyles.subsection} href="#type-sizes">Font sizes</a>
      <a className={tocStyles.subsection} href="#type-spacing">Letter spacing</a>
      <a className={tocStyles.subsection} href="#type-heights">Line heights</a>
      <a className={tocStyles.subsection} href="#type-weights">Font weights</a>
      <a className={tocStyles.subsection} href="#type-other">Other</a>
    </li>
    <li><a className={tocStyles.section} href="#layout">Layout</a>
      <a className={tocStyles.subsection} href="#layout-units">Units</a>
      <a className={tocStyles.subsection} href="#layout-z-indexes">Z-indexes</a>
      <a className={tocStyles.subsection} href="#layout-media-queries">Media Queries</a>
    </li>
    <li><a className={tocStyles.section} href="#containers">Containers</a>
      <a className={tocStyles.subsection} href="#containers-borders">Borders</a>
      <a className={tocStyles.subsection} href="#containers-radius">Border radius</a>
      <a className={tocStyles.subsection} href="#containers-shadows">Box Shadows</a>
      <a className={tocStyles.subsection} href="#containers-backgrounds">Backgrounds</a>
    </li>
    <li><a className={tocStyles.section} href="#animation">Animation</a>
      <a className={tocStyles.subsection} href="#animation-transitions">Transitions</a>
    </li>
  </ul>
);


export default () => (
  <LayoutDefault
    activeTab="styles"
    title="Tokens"
    description="Tokens are Sass variables that support OpenGov styles."
    tabs={[
      {
        name: 'Tokens',
        url: '/tokens'
      },
      {
        name: 'Mixins',
        url: '/mixins'
      }
    ]}
  >
    <TokensTOC />
    <Header variant="h2" className="websiteH2" id="colors">Colors</Header>
    <Header variant="h3" className="websiteH3" id="colors-grays">Grays</Header>
    <ToolsTable
      tools={
        [
          {
            name: '$color-white',
            value: 'rgba(255, 255, 255, 1)',
            type: 'color',
            note: '#FFFFFF'
          },
          {
            name: '$color-gray-50',
            value: 'rgba(247, 249, 250, 1)',
            type: 'color',
            note: '#F7F9FA'
          },
          {
            name: '$color-gray-100',
            value: 'rgba(239, 242, 245, 1)',
            type: 'color',
            note: '#EFF2F5'
          },
          {
            name: '$color-gray-200',
            value: 'rgba(223, 227, 232, 1)',
            type: 'color',
            note: '#DFE3E8'
          },
          {
            name: '$color-gray-300',
            value: 'rgba(206, 210, 214, 1)',
            type: 'color',
            note: '#CED2D6'
          },
          {
            name: '$color-gray-400',
            value: 'rgba(181, 185, 189, 1)',
            type: 'color',
            note: '#B5B9BD'
          },
          {
            name: '$color-gray-500',
            value: 'rgba(154, 157, 161, 1)',
            type: 'color',
            note: '#9A9DA1'
          },
          {
            name: '$color-gray-700',
            value: 'rgba(97, 99, 101, 1)',
            type: 'color',
            note: '#616365'
          },
          {
            name: '$color-gray-1000',
            value: 'rgba(19, 21, 23, 1)',
            type: 'color',
            note: '#131517'
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3" id="colors-primary">Primary colors</Header>

    <ToolsTable
      tools={
        [
          {
            name: '$color-primary-brand',
            value: 'rgba(22, 92, 171, 1)',
            type: 'color',
            note: '#165CAB'
          },
          {
            name: '$color-primary-medium',
            value: 'rgba(4, 65, 135, 1)',
            type: 'color',
            note: '#044187'
          },
          {
            name: '$color-primary-dark',
            value: 'rgba(7, 48, 92, 1)',
            type: 'color',
            note: '#07305C'
          },
          {
            name: '$color-primary-selection',
            value: 'rgba(31, 118, 216, 1)',
            type: 'color',
            note: '#1F76D8'
          },
          {
            name: '$color-primary-selection-a70',
            value: 'rgba(31, 118, 216, 0.7)',
            type: 'color',
            note: '#1F76D8, Opacity .7'
          },
          {
            name: '$color-primary-selection-a50',
            value: 'rgba(31, 118, 216, 0.5)',
            type: 'color',
            note: '#1F76D8'
          },
          {
            name: '$color-primary-hover',
            value: 'rgba(194, 229, 255, 1)',
            type: 'color',
            note: '#C2E5FF'
          },
          {
            name: '$color-primary-hover-a50',
            value: 'rgba(194, 229, 255, 0.5)',
            type: 'color',
            note: '#C2E5FF'
          },
          {
            name: '$color-primary-hover-light',
            value: 'rgba(224, 242, 255, 1)',
            type: 'color',
            note: '#E0F2FF'
          },
          {
            name: '$color-primary-focus',
            value: 'rgba(0, 149, 255, 1)',
            type: 'color',
            note: '#0095FF'
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3" id="colors-status">Status colors</Header>
    <ToolsTable
      tools={
        [
          {
            name: '$color-success-400',
            value: 'rgba(86, 186, 154, 1)',
            type: 'color',
            note: '#56BA9A'
          },
          {
            name: '$color-success-500',
            value: 'rgba(47, 168, 130, 1)',
            type: 'color',
            note: '#2FA882'
          },
          {
            name: '$color-success-600',
            value: 'rgba(30, 143, 107, 1)',
            type: 'color',
            note: '#1E8F6B'
          }
        ]
      }
    />
    <ToolsTable
      tools={
        [
          {
            name: '$color-info-600',
            value: 'rgba(71, 129, 191, 1)',
            type: 'color',
            note: '#4781BF'
          },
          {
            name: '$color-info-700',
            value: 'rgba(46, 98, 153, 1)',
            type: 'color',
            note: '#2E6299'
          }
        ]
      }
    />

    <ToolsTable
      tools={
        [
          {
            name: '$color-error-50',
            value: 'rgba(255, 236, 232, 1)',
            type: 'color',
            note: '#FFECE8'
          },
          {
            name: '$color-error-600',
            value: 'rgba(209, 83, 54, 1)',
            type: 'color',
            note: '#D15336'
          },
          {
            name: '$color-error-700',
            value: 'rgba(178, 62, 36, 1)',
            type: 'color',
            note: '#B23E24'
          },
          {
            name: '$color-error-800',
            value: 'rgba(148, 42, 18, 1)',
            type: 'color',
            note: '#942A12'
          },
          {
            name: '$color-error-900',
            value: 'rgba(107, 28, 11, 1)',
            type: 'color',
            note: '#6B1C0B'
          }
        ]
      }
    />
    <ToolsTable
      tools={
        [
          {
            name: '$color-in-progress-50',
            value: 'rgba(229, 199, 242, 1)',
            type: 'color',
            note: '#E5C7F2'
          },
          {
            name: '$color-in-progress-600',
            value: 'rgba(136, 95, 153, 1)',
            type: 'color',
            note: '#885F99'
          },
          {
            name: '$color-in-progress-700',
            value: 'rgba(107, 71, 122, 1)',
            type: 'color',
            note: '#6B477A'
          }
        ]
      }
    />

    <ToolsTable
      tools={
        [
          {
            name: '$color-warning-200',
            value: 'rgba(255, 207, 153, 1)',
            type: 'color',
            note: '#FFCF99'
          },
          {
            name: '$color-warning-500',
            value: 'rgba(229, 149, 57, 1)',
            type: 'color',
            note: '#E59539'
          },
          {
            name: '$color-warning-700',
            value: 'rgba(199, 113, 16, 1)',
            type: 'color',
            note: '#C77110'
          },
          {
            name: '$color-warning-800',
            value: 'rgba(176, 98, 9, 1)',
            type: 'color',
            note: '#B06209'
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3" id="colors-viz">Data visualization colors</Header>
    <ToolsTable
      tools={
        [
          {
            name: '$color-viz-1',
            value: 'rgba(71, 129, 191, 1)',
            type: 'color',
            note: '#4781BF'
          },
          {
            name: '$color-viz-2',
            value: 'rgba(161, 187, 229, 1)',
            type: 'color',
            note: '#A1BBE5'
          },
          {
            name: '$color-viz-3',
            value: 'rgba(229, 149, 57, 1)',
            type: 'color',
            note: '#E59539'
          },
          {
            name: '$color-viz-4',
            value: 'rgba(232, 206, 139, 1)',
            type: 'color',
            note: '#E8CE8B'
          },
          {
            name: '$color-viz-5',
            value: 'rgba(111, 93, 168, 1)',
            type: 'color',
            note: '#6F5DA8'
          },
          {
            name: '$color-viz-6',
            value: 'rgba(205, 171, 219, 1)',
            type: 'color',
            note: '#CDABDB'
          },
          {
            name: '$color-viz-7',
            value: 'rgba(61, 153, 144, 1)',
            type: 'color',
            note: '#3D9990'
          },
          {
            name: '$color-viz-8',
            value: 'rgba(124, 207, 180, 1)',
            type: 'color',
            note: '#7CCFB4'
          },
          {
            name: '$color-viz-9',
            value: 'rgba(76, 95, 181, 1)',
            type: 'color',
            note: '#4C5FB5'
          },
          {
            name: '$color-viz-10',
            value: 'rgba(151, 154, 204, 1)',
            type: 'color',
            note: '#979ACC'
          },
          {
            name: '$color-viz-11',
            value: 'rgba(204, 94, 105, 1)',
            type: 'color',
            note: '#CC5E69'
          },
          {
            name: '$color-viz-12',
            value: 'rgba(237, 161, 159, 1)',
            type: 'color',
            note: '#EDA19F'
          },
          {
            name: '$color-viz-13',
            value: 'rgba(70, 146, 176, 1)',
            type: 'color',
            note: '#4692B0'
          },
          {
            name: '$color-viz-14',
            value: 'rgba(139, 212, 214, 1)',
            type: 'color',
            note: '#8BD4D6'
          },
          {
            name: '$color-viz-15',
            value: 'rgba(224, 105, 79, 1)',
            type: 'color',
            note: '#E0694F'
          },
          {
            name: '$color-viz-16',
            value: 'rgba(245, 164, 130, 1)',
            type: 'color',
            note: '#F5A482'
          },
          {
            name: '$color-viz-17',
            value: 'rgba(84, 153, 112, 1)',
            type: 'color',
            note: '#549970'
          },
          {
            name: '$color-viz-18',
            value: 'rgba(154, 217, 164, 1)',
            type: 'color',
            note: '#9AD9A4'
          },
          {
            name: '$color-viz-19',
            value: 'rgba(156, 65, 116, 1)',
            type: 'color',
            note: '#9C4174'
          },
          {
            name: '$color-viz-20',
            value: 'rgba(207, 124, 146, 1)',
            type: 'color',
            note: '#CF7C92'
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3" id="colors-gradients">Gradients</Header>

    <ToolsTable
      tools={
        [
          {
            name: '$gradient-success',
            value: 'linear-gradient(-180deg, $color-success-500, $color-success-600)',
            valueJS: 'linear-gradient(-180deg, rgb(47, 168, 130), rgb(30, 143, 107))',
            type: 'background'
          },
          {
            name: '$gradient-warning',
            value: 'linear-gradient(-180deg, $color-warning-500, $color-warning-600)',
            valueJS: 'linear-gradient(-180deg, rgba(229, 149, 57, 1), rgba(176, 98, 9, 1))',
            type: 'background'
          },
          {
            name: '$gradient-error',
            value: 'linear-gradient(-180deg, $color-error-600, $color-error-700)',
            valueJS: 'linear-gradient(-180deg, rgba(209,83, 54, 1), rgba(178, 62, 36, 1))',
            type: 'background'
          },
          {
            name: '$gradient-info',
            value: 'linear-gradient(-180deg, $color-info-600, $color-info-700)',
            valueJS: 'linear-gradient(-180deg, rgba(71, 129, 191, 1), rgba(46, 98, 153, 1))',
            type: 'background'
          },
          {
            name: '$gradient-chrome',
            value: 'linear-gradient(-180deg, $color-gray-50, $color-gray-300)',
            valueJS: 'linear-gradient(-180deg, rgba(247, 249, 250, 1), rgba(206, 210, 214, 1))',
            type: 'background'
          }
        ]
      }
    />

    <Header variant="h2" className="websiteH2" id="type">Typography</Header>
    <Header variant="h3" className="websiteH3" id="type-fonts">Fonts</Header>
    <ToolsTable
      tools={
        [
          {
            type: 'fontFamily',
            name: '$base-font',
            value: '"Benton Sans", Arial, sans-serif'
          },
          {
            type: 'fontFamily',
            name: '$base-font-condensed',
            value: '"Benton Sans Condensed", Arial Narrow, sans-serif'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3" id="type-sizes">Font sizes</Header>
    <ToolsTable
      tools={
        [
          {
            type: 'fontSize',
            name: '$font-size-maximum',
            value: '3rem',
            note: '48px'
          },
          {
            type: 'fontSize',
            name: '$font-size-xxlarge',
            value: '2.5rem',
            note: '44px'
          },
          {
            type: 'fontSize',
            name: '$font-size-xlarge',
            value: '1.75rem',
            note: '28px'
          },
          {
            type: 'fontSize',
            name: '$font-size-large',
            value: '1.25rem',
            note: '20px'
          },
          {
            type: 'fontSize',
            name: '$font-size-default',
            value: '1rem',
            note: '16px'
          },
          {
            type: 'fontSize',
            name: '$font-size-small',
            value: '0.875rem',
            note: '14px'
          },
          {
            type: 'fontSize',
            name: '$font-size-minimum',
            value: '0.75rem',
            note: '12px'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3" id="type-spacing">Letter spacing</Header>
    <ToolsTable
      tools={
        [
          {
            type: 'letterSpacing',
            name: '$letter-spacing-default',
            value: '0.0125em'
          },
          {
            type: 'letterSpacing',
            name: '$letter-spacing-cap',
            value: '0.05em'
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3" id="type-heights">Line heights</Header>
    <ToolsTable
      tools={
        [
          {
            type: 'lineHeight',
            name: '$line-height-default',
            value: '1.50',
            valueJS: { lineHeight: '1.5', backgroundSize: '100% 1.5em'}
          },
          {
            type: 'lineHeight',
            name: '$line-height-tight',
            value: '1.25',
            valueJS: { lineHeight: '1.25', backgroundSize: '100% 1.25em'}
          },
          {
            type: 'lineHeight',
            name: '$line-height-small-font',
            value: '1.125rem',
            valueJS: { lineHeight: '1.125rem', backgroundSize: '100% 1.125rem'}
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3" id="type-weights">Font weights</Header>
    <ToolsTable
      tools={
        [
          {
            type: 'fontWeight',
            name: '$font-weight-thin',
            value: '100'
          },
          {
            type: 'fontWeight',
            name: '$font-weight-extra-light',
            value: '200'
          },
          {
            type: 'fontWeight',
            name: '$font-weight-light',
            value: '300'
          },
          {
            type: 'fontWeight',
            name: '$font-weight-book',
            value: '400'
          },
          {
            type: 'fontWeight',
            name: '$font-weight-regular',
            value: '500'
          },
          {
            type: 'fontWeight',
            name: '$font-weight-medium',
            value: '600'
          },
          {
            type: 'fontWeight',
            name: '$font-weight-bold',
            value: '700'
          },
          {
            type: 'fontWeight',
            name: '$font-weight-black',
            value: '800'
          }
        ]
      }
    />

    <Header variant="h2" className="websiteH2" id="layout">Layout</Header>
    <Header variant="h3" className="websiteH3" id="layout-units">Units</Header>
    <ToolsTable
      tools={
        [
          {
            type: '2column',
            name1: '$unit-quarter',
            value1: '$unit-1 / 4',
            note1: '2px',
            name2: '$unit-half',
            value2: '$unit-1 / 2',
            note2: '4px'
          },
          {
            type: '2column',
            name1: '$unit-1',
            value1: '8px',
            note1: '8px',
            name2: '$unit-2',
            value2: '2*$unit-1',
            note2: '16px'
          },
          {
            type: '2column',
            name1: '$unit-3',
            value1: '3*$unit-1',
            note1: '24px',
            name2: '$unit-4',
            value2: '4*$unit-1',
            note2: '32px'
          },
          {
            type: '2column',
            name1: '$unit-5',
            value1: '5*$unit-1',
            note1: '40px',
            name2: '$unit-6',
            value2: '6*$unit-1',
            note2: '48px'
          },
          {
            type: '2column',
            name1: '$unit-7',
            value1: '7*$unit-1',
            note1: '54px',
            name2: '$unit-8',
            value2: '8*$unit-1',
            note2: '64px'
          },
          {
            type: '2column',
            name1: '$unit-9',
            value1: '9*$unit-1',
            note1: '72px',
            name2: '$unit-10',
            value2: '10*$unit-1',
            note2: '80px'
          },
          {
            type: '2column',
            name1: '$unit-20',
            value1: '20*$unit-1',
            note1: '160px',
            name2: '$unit-30',
            value2: '30*$unit-1',
            note2: '240px'
          },
          {
            type: '2column',
            name1: '$unit-40',
            value1: '40*$unit-1',
            note1: '320px',
            name2: '$unit-50',
            value2: '50*$unit-1',
            note2: '400px'
          },
          {
            name: '$unit-75',
            value: '75*$unit-1',
            note: '600px'
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3" id="layout-z-indexes">Z-indexes</Header>
    <ToolsTable
      tools={
        [
          {
            type: '2column',
            name1: '$z-index-overlay',
            value1: '1000',
            name2: '$z-index-dialog',
            value2: '900'
          },
          {
            type: '2column',
            name1: '$z-index-alert',
            value1: '800',
            name2: '$z-index-flash',
            value2: '700'
          },
          {
            type: '2column',
            name1: '$z-index-main-nav',
            value1: '600',
            name2: '$z-index-form',
            value2: '500'
          },
          {
            type: '2column',
            name1: '$z-index-panel',
            value1: '400',
            name2: '$z-index-main-panel',
            value2: '400'
          },
          {
            type: '2column',
            name1: '$z-index-sub-panel',
            value1: '400',
            name2: '$z-index-main-header',
            value2: '300'
          },
          {
            type: '2column',
            name1: '$z-index-editable',
            value1: '200',
            name2: '$z-index-content',
            value2: '100'
          },
          {
            name: '$z-index-ground',
            value: '1'
          }
        ]
      }
    />
    <Header variant="h3" className="websiteH3" id="layout-media-queries">Media Queries</Header>
    <ToolsTable
      tools={
        [
          {
            type: '2column',
            name1: '$mq-xsmall',
            value1: 'screen and (max-width: 464px)',
            name2: '$mq-small',
            value2: 'screen and (min-width: 465px) and (max-width: 728px)'
          },
          {
            type: '2column',
            name1: '$mq-small-up',
            value1: 'screen and (min-width: 465px)',
            name2: '$mq-medium',
            value2: 'screen and (min-width: 729px) and (max-width: 1076px)'
          },
          {
            type: '2column',
            name1: '$mq-medium-up',
            value1: 'screen and (min-width: 729px)',
            name2: '$mq-large',
            value2: 'screen and (min-width: 1077px) and (max-width: 1436px)'
          },
          {
            type: '2column',
            name1: '$mq-large-up',
            value1: 'screen and (min-width: 1077px)',
            name2: '$mq-xlarge',
            value2: 'screen and (min-width: 1436px)'
          },
          {
            name: '$mq-xlarge-up',
            value: 'screen and (min-width: 1436px)'
          }
        ]
      }
    />

    <Header variant="h2" className="websiteH2" id="containers">Containers</Header>
    <Header variant="h3" className="websiteH3" id="containers-borders">Borders</Header>
    <ToolsTable
      tools={
        [
          {
            type: 'border',
            name: '$border-transparent',
            value: '1px solid transparent'
          },
          {
            type: 'border',
            name: '$border-gray-100',
            value: '1px solid $color-gray-100',
            valueJS: '1px solid rgba(239, 242, 245, 1)'
          },
          {
            type: 'border',
            name: '$border-gray-200',
            value: '1px solid $color-gray-200',
            valueJS: '1px solid rgba(223, 227, 232, 1)'
          },
          {
            type: 'border',
            name: '$border-gray-300',
            value: '1px solid $color-gray-300',
            valueJS: '1px solid rgba(206, 210, 214, 1)'
          },
          {
            type: 'border',
            name: '$border-gray-400',
            value: '1px solid $color-gray-400',
            valueJS: '1px solid rgba(181, 185, 189, 1)'
          },
          {
            type: 'border',
            name: '$border-gray-700',
            value: '1px solid $color-gray-700',
            valueJS: '1px solid rgba(97, 99, 101, 1)'
          }
        ]
      }
    />
    <ToolsTable
      tools={
        [
          {
            type: 'border',
            name: '$border-primary-dark',
            value: '1px solid $color-primary-dark',
            valueJS: '1px solid rgba(7, 48, 92, 1)'
          },
          {
            type: 'border',
            name: '$border-primary-active',
            value: '1px solid $color-primary-active',
            valueJS: '1px solid rgba(0, 149, 255, 1)'
          },
          {
            type: 'border',
            name: '$border-primary-focus',
            value: '2px solid $color-primary-focus',
            valueJS: '2px solid rgba(0, 149, 255, 1)'
          }
        ]
      }
    />

    <ToolsTable
      tools={
        [
          {
            type: 'border',
            name: '$border-error-600',
            value: '1px solid $color-error-600',
            valueJS: '1px solid	rgba(209, 83, 54, 1)'
          },
          {
            type: 'border',
            name: '$border-error-800',
            value: '1px solid $color-error-800',
            valueJS: '1px solid rgba(148, 42, 18, 1)'
          },
          {
            type: 'border',
            name: '$border-error-900',
            value: '1px solid $color-error-900',
            valueJS: '1px solid rgba(107, 28, 11, 1)'
          },
          {
            type: 'border',
            name: '$border-success-500',
            value: '1px solid $color-success-500',
            valueJS: '1px solid rgba(47, 168, 130, 1)'
          },
          {
            type: 'border',
            name: '$border-warning-500',
            value: '1px solid $color-warning-500',
            valueJS: '1px solid rgba(229, 149, 57, 1)'
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3" id="containers-radius">Border radius</Header>
    <ToolsTable
      tools={
        [
          {
            type: 'radius',
            name: '$border-radius-default',
            value: '3px'
          },
          {
            type: 'radius',
            name: '$border-radius-small',
            value: '1px'
          },
          {
            type: 'radius',
            name: '$border-radius-curve',
            value: '10em 5em'
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3" id="containers-shadows">Box shadows</Header>
    <ToolsTable
      tools={
        [
          {
            name: '$box-shadow-soft',
            value: '0 2px 4px 0 rgba(19, 21, 23, 0.30)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-soft-overlay',
            value: '0 4px 8px 0 rgba(19, 21, 23, 0.60)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-soft-selected',
            value: '0 1px 3px 0 rgba(7, 48, 92, 0.5)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-hard',
            value: '0 1px 0 0 rgba(181, 185, 189, 1)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-hard-hover',
            value: '0 1px 3px 0 rgba(97, 99, 101, 1)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-hard-focus',
            value: '0 1px 0 0 rgba(0, 149, 255, 1)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-hard-selected',
            value: '0 1px 0 0 rgba(7, 48, 92, 0.5)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-inset-dark',
            value: 'inset 0 2px 3px 1px rgba(19, 21, 23, 0.60)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-inset-light',
            value: 'inset 0 2px 3px 1px rgba(19, 21, 23, 0.30)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-above',
            value: '0 2px 4px 0 rgba(19, 21, 23, 0.10)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-below',
            value: '0 -2px 4px 0 rgba(19, 21, 23, 0.10)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-primary',
            value: 'inset 0 2em 1.8em -1em $color-primary-selection-a70',
            valueJS: 'inset 0 2em 1.8em -1em rgba(31, 118, 216, 0.7)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-primary-hover',
            value: 'inset 0 2px 3px 2px transparent',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-neutral',
            value: 'inset 0 2em 1.8em -1em $color-gray-100',
            valueJS: 'inset 0 2em 1.8em -1em rgba(223, 227, 232, 1)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-neutral-hover',
            value: 'inset 0 -1.5em 1.8em -1em $color-gray-100',
            valueJS: 'inset 0 -1.5em 1.8em -1em rgba(223, 227, 232, 1)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-error',
            value: 'inset 0 2em 1.8em -1em $color-error-600',
            valueJS: 'inset 0 2em 1.8em -1em rgba(209,83, 54, 1)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-error-hover',
            value: 'inset 0 2px 3px 2px $color-error-700',
            valueJS: 'inset 0 2px 3px 2px rgba(178, 62, 36, 1)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-neutral-affix',
            value: 'inset 0 -2em 1.8em -1em $color-gray-50',
            valueJS: 'inset 0 -2em 1.8em -1em rgba(247, 249, 250, 1)',
            type: 'boxShadow'
          },
          {
            name: '$box-shadow-neutral-affix-hover',
            value: 'inset 0 -1.5em 1.8em -1em $color-gray-50',
            valueJS: 'inset 0 -1.5em 1.8em -1em rgba(247, 249, 250, 1)',
            type: 'boxShadow'
          }
        ]
      }
    />

    <Header variant="h3" className="websiteH3" id="containers-backgrounds">Backgrounds</Header>
    <ToolsTable
      tools={
        [
          {
            name: '$background-primary',
            value: '$color-primary-medium',
            valueJS: 'rgba(4, 65, 135, 1)',
            type: 'background'
          },
          {
            name: '$background-neutral',
            value: '$color-white',
            valueJS: 'white',
            type: 'background'
          },
          {
            name: '$background-error',
            value: '$color-error-700',
            valueJS: 'rgba(178, 62, 36, 1)',
            type: 'background'
          },
          {
            name: '$background-neutral-affix',
            value: '$color-gray-200',
            valueJS: 'rgba(223, 227, 232, 1)',
            type: 'background'
          }
        ]
      }
    />

    <Header variant="h2" className="websiteH2" id="animation">Animation</Header>
    <Header variant="h3" className="websiteH3" id="animation-transitions">Transitions</Header>
    <ToolsTable
      tools={
        [
          {
            type: '2column',
            name1: '$transition-natural',
            value1: 'all 300ms ease',
            name2: '$transition-entrance',
            value2: 'all 300ms ease-out'
          },
          {
            name: '$transition-exit',
            value: 'all 300ms ease-in'
          }
        ]
      }
    />
  </LayoutDefault>
);
