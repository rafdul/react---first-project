import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
      columnsTitles: PropTypes.string,
    }

    render() {
      return (
        <section className={styles.component}>
            <h3 className={styles.title}>{this.props.columnsTitles}</h3>
        </section>
      )
    }
  }
  
  export default Column;
  