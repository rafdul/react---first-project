import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import styles from './Column.scss';

// KOMPONENT W WERSJI FUNKCYJNEJ
const Column = (props) => {
  
  const {title, icon, cards, addCard} = props;
  
  return (
    <section className={styles.component}>
      <h3 className={styles.title}>
        <span className={styles.icon}><Icon name={icon} /></span>
        {title}
      </h3>
      <div>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
      <div>
        <Creator text={settings.cardCreatorText} action={addCard}/>
      </div>
    </section>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  cards: PropTypes.array,
  addCard: PropTypes.func,
};
  
Column.defaultProps = {
  desciption: settings.cardCreatorText,
  icon: settings.defaultColumnIcon,
};

export default Column;

// KOMPONENT W WERSJI KLASOWEJ
// class Column extends React.Component {

//   static propTypes = {
//     title: PropTypes.string,
//     icon: PropTypes.string,
//     cards: PropTypes.array,
//     addCard: PropTypes.func,
//   }

//   static defaultProps = {
//     desciption: settings.cardCreatorText,
//     icon: settings.defaultColumnIcon,
//   }

//   render() {
//     const {title, icon, cards, addCard} = this.props;
//     return (
//       <section className={styles.component}>
//         <h3 className={styles.title}>
//           <span className={styles.icon}><Icon name={icon} /></span>
//           {title}
//         </h3>
//         <div>
//           {cards.map(cardData => (
//             <Card key={cardData.id} {...cardData} />
//           ))}
//         </div>
//         <div>
//           <Creator text={settings.cardCreatorText} action={addCard}/>
//         </div>
//       </section>
//     );
//   }
// }
  

  