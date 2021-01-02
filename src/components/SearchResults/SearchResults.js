import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss'; 
import Container from '../Container/Container';
import Icon from '../Icon/Icon';


class SearchResults extends React.Component {
  static propTypes = {
    searchString: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
  }

  render () {
    const {title, icon} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}><Icon name={icon} /></span>
            {title}
          </h3>
          <div className={styles.cards}>
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;