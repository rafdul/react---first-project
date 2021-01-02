import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import styles from './Column.scss';
// import {Droppable} from 'react-beautiful-dnd';

// KOMPONENT W WERSJI FUNKCYJNEJ
const Column = (props) => {
  
  const {title, icon, cards, addCard /*, id*/} = props;
  cards.sort((a, b) => a.index - b.index);
  
  return (
    <section className={styles.component}>
      <h3 className={styles.title}>
        <span className={styles.icon}><Icon name={icon} /></span>
        {title}
      </h3>
      {/* <Droppable droppableId={id}>
        {provided => (
          <div
            className={styles.cards}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable> */}
      <div className={styles.cards}>
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
  // id: PropTypes.string,
};
  
Column.defaultProps = {
  desciption: settings.cardCreatorText,
  icon: settings.defaultColumnIcon,
};

export default Column;

// KOMPONENT W WERSJI KLASOWEJ
// class Column extends React.Component {

//   state = {
//     card: this.props.cards || [],
//   }

//   static propTypes = {
//     title: PropTypes.string,
//     icon: PropTypes.string,
//     cards: PropTypes.array,
//     addCard: PropTypes.func,
//     id: PropTypes.string,
//   }

//   static defaultProps = {
//     desciption: settings.cardCreatorText,
//     icon: settings.defaultColumnIcon,
//   }

//   render() {
//     const {title, icon, cards, addCard, id} = this.props;
//     return (
//       <section className={styles.component}>
//         <h3 className={styles.title}>
//           <span className={styles.icon}><Icon name={icon} /></span>
//           {title}
//         </h3>
//         <Droppable droppableId={id}>
//           {provided => (
//             <div
//               className={styles.cards}
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {cards.map(cardData => (
//                 <Card key={cardData.id} {...cardData} />
//               ))}

//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//         <div>
//           <Creator text={settings.cardCreatorText} action={addCard}/>
//         </div>
//       </section>
//     );
//   }
// }
  
// export default Column;

  