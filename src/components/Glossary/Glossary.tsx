import { Header, Input, InputGroup } from '@opengov/component-library/capital';
import Fuse from 'fuse.js';
// import { Link } from 'gatsby';
import React, { useState } from 'react';

import tocStyles from '../Layouts/TOC.scss';

import styles from './Glossary.scss';

const TERM_SEARCH_FIELDS = ['term', 'definition', 'tags', 'relatedTerms'];

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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

const filterLetters = (filteredTerms) => {
  let filteredLetters = {};
  ALPHABET.map((letter) => {
    filteredLetters[letter] = false;
  });

  filteredTerms.map((term, index) => {
    filteredLetters[term.term.charAt(0)] = true;
  });

  return filteredLetters;
}

export interface IGlossaryProps {
  terms?: any[];
}

export const Glossary: React.FC<IGlossaryProps> = ({
  terms
}) => {
  const [searchText, setSearchText] = useState('');
  let filteredTerms = [];
  let filteredLetters = [];

  const fuse = new Fuse(terms, {
    keys: TERM_SEARCH_FIELDS,
    threshold: 0.2
  });

  if (searchText.length) {
    filteredTerms = fuse.search(searchText);
    filteredLetters = filterLetters(filteredTerms);
  } else {
    filteredTerms = terms;
    filteredLetters = filterLetters(filteredTerms);
  }

  let previousLetter = "";
  let previousTerm = "";

  const characterJump = (
    <ul className={tocStyles.toc}>
      {
        ALPHABET.map((letter) => {
          if (filteredLetters[letter]) {
            return (
              <li><a className={tocStyles.letter} href={`#${letter}`}>{letter}</a></li>
            );
          } else {
            return (
              <li><span className={tocStyles.letterDisabled}>{letter}</span></li>
            );
          }
        })
      }
    </ul>
  );

  return (
    <>
      {characterJump}
      <div className={styles.toolbar}>
        <InputGroup>
          <InputGroup.Prefix>
            <InputGroup.Text>Search</InputGroup.Text>
          </InputGroup.Prefix>
          <Input.Text onChange={setSearchText} placeholder="Filter by name, definition, or related terms" />
        </InputGroup>
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
