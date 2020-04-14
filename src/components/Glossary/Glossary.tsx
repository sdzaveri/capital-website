import { Header, Input, InputGroup, Label } from '@opengov/component-library/capital';
import Fuse from 'fuse.js';
// import { Link } from 'gatsby';
import React, { useState } from 'react';

import styles from './Glossary.scss';

export const TERM_SEARCH_FIELDS = ['term', 'definition', 'tags', 'relatedTerms'];

const displayDefinition = (term) => (
  <div className={styles.term} key={term.term}>
    <dt>{term.term}</dt>
    <dd>
      <p className={styles.definition}>{term.definition}</p>
      <p>Tags: </p>
      <p>Related links: </p>
      <p>Related terms: </p>
    </dd>
  </div>
);

export interface IGlossaryProps {
  terms?: any[];
}

export const Glossary: React.FC<IGlossaryProps> = ({
  terms
}) => {
  const [searchText, setSearchText] = useState('');
  let filteredTerms = [];

  const fuse = new Fuse(terms, {
    keys: TERM_SEARCH_FIELDS,
    threshold: 0.2
  });

  if (searchText.length) {
    filteredTerms = fuse.search(searchText);
  } else {
    filteredTerms = terms;
  }

  let previousLetter = "";
  let previousTerm = "";

  return (
    <>
      <div className={styles.toolbar}>
        <InputGroup>
          <InputGroup.Prefix>
            <InputGroup.Text>Search</InputGroup.Text>
          </InputGroup.Prefix>
          <Input.Text onChange={setSearchText} placeholder="Filter by name, definition, or related terms" />
        </InputGroup>
        <Label>By letter: </Label>
        {
          filteredTerms.map((term, index) => {
            if (previousLetter !== term.term.charAt(0)) {
              previousLetter = term.term.charAt(0);
              return (
                <a
                  className={styles.letterButton}
                  href={'#' + term.term.charAt(0)}
                >
                  {term.term.charAt(0)}
                </a>
              );
            }
          })
        }
      </div>
      <dl className={styles.glossary}>
      {
        filteredTerms.map((term, index) => {
          if (previousTerm.charAt(0) !== term.term.charAt(0)) {
            previousTerm = term.term;
            return (
              <>
                <Header variant="h2" className={styles.letterHeader} id={term.term.charAt(0)}>{term.term.charAt(0)}</Header>
                { displayDefinition(term) }
              </>
            );
          } else {
            previousTerm = term.term;
            return (displayDefinition(term));
          }
        })
      }
      </dl>
    </>
  );
};
