import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css';

export const MainNavigation = () => {
    return <header className={styles.header}>
        <div className={styles.logo}>DO IT NOW!</div>
        <nav>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                {/*<li>*/}
                {/*    <button>Logout</button>*/}
                {/*</li>*/}
            </ul>
        </nav>
    </header>
};