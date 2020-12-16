import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
  }

  static defaultProps = {
    text: 'Add new item',
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange = event => {
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK = () => {
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  handleCancel = () => {

    this.setState({
      value: '',
      visibleButtons: false,
    });
  }

  handleCancelwithConfirm = () => {
    if (window.confirm('Czy jesteś pewny?')) {
      
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK}>{settings.creator.buttonOK}</Button>
          <Button onClick={this.handleCancel} variant='danger confirm'>cancel</Button>
          {/* <Button onClick={this.handleCancelwithConfirm} variant='danger confirm'>{settings.creator.buttonCancel}</Button> */}
        </div>
      </div>
    );
  }
}

export default Creator;
