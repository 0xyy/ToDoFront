import React from 'react';
import { NavigationLink } from '../UI/NavigationLink';

import checkListDone from '../../assets/check-list-done.svg';
import styles from './HomePage.module.css';

export const HomePage = () => {
    return <div className={`${styles.box} card`}>
        <div className={styles.titleBox}>
            <h1>What is "DO IT NOW!" ?</h1>
            <p>The main purpose of this wholesome app is to provide yourself with a list of your priorities in order to ensure that you don't forget anything and are able to effectively plan out your tasks so that they are all accomplished in the correct time frame.</p>
            <p className={styles.text}>
                ARE YOU IN? LET'S START FOR FREE BY <NavigationLink text='CREATING YOUR ACCOUNT' to='/register'/>
            </p>
        </div>
        <img src={checkListDone} alt="Check list done image"/>
    </div>;
};