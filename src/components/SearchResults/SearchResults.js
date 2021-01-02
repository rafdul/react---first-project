import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss'; 
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Hero from '../Hero/Hero';

class SearchResults extends React.Component {
  static propTypes = {
    searchString: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
  }

  render () {
    const {title, icon, cards} = this.props;
    return (
      <Container>
        <Hero titleText='Wynik wyszukiwania' />
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}><Icon name={icon} /></span>
            {title}
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