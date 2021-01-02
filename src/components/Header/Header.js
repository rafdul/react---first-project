import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings, faqContents, infoContents, pageContents} from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component {

  render () {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.defaultHeaderIcon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{pageContents.categoryTitle}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{infoContents.categoryTitle}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{faqContents.categoryTitle}</NavLink>
            </nav>
          </div>
          <Search />
        </Container>
      </header>
    );
  }
}

export default Header;
