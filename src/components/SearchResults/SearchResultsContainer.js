import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsFromSearch, createAction_moveCard} from '../../redux/cardsRedux';
import shortid from 'shortid';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  const cards = getCardsFromSearch(state, searchString);
  const id = shortid.generate();

  /*change searchedCard status for all cards to false*/
  state.cards.map(card => {
    card.searchedCard = false;
  });

  /*change searchedCard status for cards (getCardsFromSearch) to true */
  cards.map(card => {
    card.searchedCard = true;
  });

  const columns = state.columns.filter((columns) => {
    return cards.map(card => {
      if(columns.id === card.columnId) {
        card.listId = columns.listId;
        card.columnTitle = columns.title;
      }
      return columns.id === card.columnId;
    });
  });

  return {
    cards, 
    columns,
    id, 
  };
};

const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);