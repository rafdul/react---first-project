import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {

    }

    render() {
      return (
        <div className={styles.component}>
            <h4>{this.props.title}</h4>
        </div>
      )
    }
}
  
export default Card;