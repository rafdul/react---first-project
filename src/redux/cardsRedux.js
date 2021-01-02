import shortid from 'shortid';

// selectors
// export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export const getCardsFromSearch = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });
// export const createAction_moveCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: MOVE_CARD });
export const createAction_moveCard = payload => ({ payload: {...payload}, type: MOVE_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD: {
      // console.log('ADD_CARD');
      return [...state, action.payload];
    }
    case MOVE_CARD: {
      console.log('MOVE_CARD');
      const {id, src, dest} = action.payload;
      const targetCard = state.filter(card => card.id == id)[0];
      console.log('targetCard', targetCard);
      const targetColumnCards = state.filter(card => card.columnId == dest.columnId).sort((a, b) => a.index - b.index);
      console.log('targetColumnCards', targetColumnCards.map(card => `${card.index}, title: ${card.title}`));

      if(dest.columnId == src.columnId){
        targetColumnCards.splice(src.index, 1);
        targetColumnCards.splice(dest.index, 0, targetCard);

        return state.map(card => {
          const targetColumnIndex = targetColumnCards.indexOf(card);
        
          if(targetColumnIndex > -1 && card.index != targetColumnIndex){
            return {...card, index: targetColumnIndex};
          } else {
            return card;
          }
        });
      } else {
        let sourceColumnCards = state.filter(card => card.columnId == src.columnId).sort((a, b) => a.index - b.index);

        // remove card from sourceColumn
        sourceColumnCards.splice(src.index, 1);
        // add card to targetColumn
        targetColumnCards.splice(dest.index, 0, targetCard);

        console.log('sourceColumnCards:');
        console.log(sourceColumnCards.map(card => `${card.index}, title: ${card.title}`));
        console.log('targetColumnCards:');
        console.log(targetColumnCards.map(card => `${card.index}, title: ${card.title}`));

        return state.map(card => {
          const targetColumnIndex = targetColumnCards.indexOf(card);

          if(card == targetCard){
            // card is targetCard
            return {...card, index: targetColumnIndex, columnId: dest.columnId};
          } else if(targetColumnIndex > -1 && card.index != targetColumnIndex){
            // card is in targetColumn
            return {...card, index: targetColumnIndex};
          } else {
            // card is NOT in targetColumn
            const sourceColumnIndex = sourceColumnCards.indexOf(card);

            if(sourceColumnIndex > -1 && card.index != sourceColumnIndex){
              // card is in sourceColumn
              return {...card, index: sourceColumnIndex};
            } else {
              // card is NOT in sourceColumn (and NOT in targetColumn)
              return card;
            }
          }
        });
      }
    }

    default:
      return state;
  }
}