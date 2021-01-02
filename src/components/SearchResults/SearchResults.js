import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss'; 
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Hero from '../Hero/Hero';
import {searchingContent} from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    searchString: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
  }

  render () {
    const {cards} = this.props;
    return (
      <Container>
        <Hero titleText={searchingContent.title} imageMain={searchingContent.image} />
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}><Icon name={searchingContent.icon} /></span>
          </h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;