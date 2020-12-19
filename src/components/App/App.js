import React from 'react';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
import styles from './App.scss';
import Creator from '../Creator/Creator';
import {listData, settings} from '../../data/dataStore';
import Search from '../Search/SearchContainer';
import {DragDropContext} from 'react-beautiful-dnd';

class App extends React.Component {
  state = {
    // lists: this.props.lists || [],
    lists: [listData],
  }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }


  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            // description: listData.description,
            image: settings.defaultListImage,
            columns: [],
          },
        ],
      }
    ));
  }
  
  render() {
    const {title, subtitle, lists} = this.props;

    const moveCardHandler = result => {
      console.log(result);
    };
    
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {/* kod do przenoszenia kart */}
        <DragDropContext onDragEnd={moveCardHandler}>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </DragDropContext>

        {/* kod z modułu 16 */}
        {/* {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))} */}

        {/* kod do tworzenia kolejnych list w module 15 */}
        {/* {this.state.lists.map(({key, ...listsProps}) => (
          <List key={key} {...listsProps} />
        ))} */}
        <div>
				  <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
      </main>
    );
  }
}

export default App;
