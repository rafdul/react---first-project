import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
// import {Draggable} from 'react-beautiful-dnd';


// KOMPONENT W WERSJI FUNKCYJNEJ
const Card = (props) => {
  const {title /*, id, index*/} = props;

  return (
    // <Draggable draggableId={id} index={index}>
    //   {(provided) => (
    //     <article
    //       className={styles.component}
    //       {...provided.draggableProps}
    //       {...provided.dragHandleProps}
    //       ref={provided.innerRef}
    //     >
    //       {title}
    //     </article>
    //   )}
    // </Draggable>
    <article className={styles.component}>
      <h4 className={styles.subtitle}>{title}</h4>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  // id: PropTypes.string,
  // index: PropTypes.number,
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
  