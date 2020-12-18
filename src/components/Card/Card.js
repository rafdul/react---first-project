import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

// KOMPONENT W WERSJI FUNKCYJNEJ
const Card = (props) => {
  const {title} = props;
  return (
    <div className={styles.component}>
      <h4>{title}</h4>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;

// KOMPONENT W WERSJI KLASOWEJ
// class Card extends React.Component {
//   static propTypes = {
//     title: PropTypes.string,
//   }

//   render() {
//     const {title} = this.props;
//     return (
//       <div className={styles.component}>
//         <h4>{title}</h4>
//       </div>
//     );
//   }
// }
  