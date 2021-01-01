import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.scss';


const Container = props => {

  const {children} = props;

  return (
    <div className={styles.component}>
      {children}
    </div>
  );

};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;