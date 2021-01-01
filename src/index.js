import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './styles/normalize.scss';
import './styles/global.scss';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

