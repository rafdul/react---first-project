import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column'
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
        image: PropTypes.string.isRequired,
        columnsTitle: PropTypes.string,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} imageMain={this.props.image} />
                <div className={styles.description}>
                    {ReactHtmlParser(this.props.description)}
                </div>
                <div className={styles.columns}>
                    <Column columnsTitles={this.props.columnsTitle[0]} /> 
                    <Column columnsTitles={this.props.columnsTitle[1]} />
                    <Column columnsTitles={this.props.columnsTitle[2]} />
                </div>
            </section>
        )
    }
}

export default List;
