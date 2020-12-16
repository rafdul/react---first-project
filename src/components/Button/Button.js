import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

// rozwiązanie zaproponowane przez Kamila
const Button = ({variant = '', onClick, ...otherProps}) => {
  
  const onButtonClick = () => {
    const confirmVariant = variant.split(' ').find(v => v === 'confirm');

    if (confirmVariant) {
      if(window.confirm('Czy jesteś pewny?')) {
        onClick();
      } 
    } else {
      onClick();
    }
  };

  return (
    <button 
      {...otherProps} 
      onClick={onButtonClick}
      className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.node,
};

// rozwiązanie ze skryptu
// const Button = ({variant = '', ...otherProps}) => (
//   <button 
//     {...otherProps} 
//     className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
//   />
// );

export default Button;
