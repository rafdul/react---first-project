import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import styles from './List.scss';
import Container from '../Container/Container';


// KOMPONENT W WERSJI FUNKCYJNEJ
const List = props => {
  
  const {title, image, description, columns, addColumn, children} = props;
  return (
    <Container>
      <section className={styles.component}>
        <Hero titleText={title} imageMain={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData}>{children}</Column>
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn}/>
        </div>
      </section>
    </Container>
  );
};

List.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  columns: PropTypes.array,
  image: PropTypes.string,
  addColumn: PropTypes.func,
  children: PropTypes.node,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;

// KOMPONENT W WERSJI KLASOWEJ
// class List extends React.Component {
//   static propTypes = {
//     title: PropTypes.node.isRequired,
//     description: PropTypes.node,
//     columns: PropTypes.array,
//     image: PropTypes.string,
//     addColumn: PropTypes.func,
//   }

//   static defaultProps = {
//     description: settings.defaultListDescription,
//   }

//   render() {
//     const {title, image, description, columns, addColumn} = this.props;
//     return (
//       <section className={styles.component}>
//         <Hero titleText={title} imageMain={image} />
//         <div className={styles.description}>
//           {ReactHtmlParser(description)}
//         </div>
//         <div className={styles.columns}>
//           {columns.map(columnData => (
//             <Column key={columnData.id} {...columnData} />
//           ))}
//         </div>
//         <div className={styles.creator}>
//           <Creator text={settings.columnCreatorText} action={addColumn}/>
//         </div>
//       </section>
//     );
//   }
// }

// export default List;