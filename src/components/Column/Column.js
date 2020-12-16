import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import styles from './Column.scss';


class Column extends React.Component {
  // state = {
  //   cards: this.props.cards || [],
  // }

  static propTypes = {
    title: PropTypes.string,
    // icon: PropTypes.string,
    icon: settings.defaultColumnIcon,
    cards: PropTypes.array,
  }

  static defaultProps = {
    desciption: settings.cardCreatorText,
  }

  // addCard(title){
  //   this.setState(state => (
  //     {
  //       cards: [
  //         ...state.cards,
  //         {
  //           key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
  //           title,
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const {title, icon, cards} = this.props;
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
        {/* <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div> */}
      </section>
    );
  }
}
  
export default Column;
  