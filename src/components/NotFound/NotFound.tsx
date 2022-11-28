import React from 'react';
import { Link } from 'react-router-dom';

import notFound from '../../assets/not-found.svg';
import styles from './NotFound.module.css';

export const NotFound = () => {
    return <div className={`${styles.box} card`}>
        <h1>Are you lost?</h1>
        <p>Don't worry we will help you <Link to='/'>return to home page</Link></p>
        <img src={notFound} alt="Not found image"/>
    </div>;
};