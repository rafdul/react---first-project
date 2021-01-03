import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss'; 
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Hero from '../Hero/Hero';
import {searchingContent} from '../../data/dataStore';
import {Link} from 'react-router-dom';
import {Droppable, DragDropContext} from 'react-beautiful-dnd';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    listId: PropTypes.node,
    id: PropTypes.string,
    moveCard: PropTypes.func,
  }

  render () {
    const {cards, id, moveCard} = this.props;

    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };

    return (
      <Container>
        <Hero titleText={searchingContent.title} imageMain={searchingContent.image} />
        <DragDropContext onDragEnd={moveCardHandler}>
          <section className={styles.component}>
            <h3 className={styles.title}>
              <span className={styles.icon}><Icon name={searchingContent.icon} /></span>
            </h3>
            <Droppable droppableId={id}>
              {provided => (
                <div 
                  className={styles.cards}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {cards.map(cardData => {
                    return (
                      <Link to={`/list/${cardData.listId}`} className={styles.link} key={cardData.id}>
                        <Card key={cardData.id} {...cardData} />
                      </Link>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </section>
        </DragDropContext>
      </Container>
    );
  }
}

export default SearchResults;