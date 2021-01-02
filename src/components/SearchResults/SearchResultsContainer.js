import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsFromSearch} from '../../redux/cardsRedux';
import {createAction_changeSearchString} from '../../redux/searchStringRedux.js';


const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  const cards = getCardsFromSearch(state, searchString);

  state.cards.map(card => {
    card.searchedCard = false;
  });

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
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);