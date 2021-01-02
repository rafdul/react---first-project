import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss'; 
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Hero from '../Hero/Hero';
import {searchingContent} from '../../data/dataStore';
import {Link} from 'react-router-dom';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    listId: PropTypes.node,
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
            {cards.map(cardData => {
              return (
                <Link to={`/list/${cardData.listId}`} className={styles.link} key={cardData.id}>
                  <Card key={cardData.id} {...cardData} />
                </Link>
              );
            })}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;