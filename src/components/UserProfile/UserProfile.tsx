import React from 'react';

import welcome from '../../assets/welcome.svg';
import styles from './UserProfile.module.css';

export const UserProfile = () => {



    return <div className={`${styles.box} card`}>
        <img src={welcome} alt="Welcome cats image"/>
        <div className={styles.textBox}>
            <h1>Hello, Tommy</h1>
            <p>Nice to see you, here is a mini guide:</p>
            <ul>
                <li>Tasks are added by you</li>
                <li>A short description is possible for each task</li>
                <li>Each task has an expiration date previously assigned by you</li>
                <li>A task can be highlighted by marking it as important</li>
                <li>The creation date of all tasks are shown</li>
            </ul>
            <button>Task list</button>
        </div>
    </div>;
};