import React from 'react';
import { NavigationLink } from '../../UI/NavigationLink';

import login from '../../../assets/login.svg';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
    return <div className={`${styles.box} card`}>
        <h1>Log in</h1>
        <div className={styles.formBox}>
            <form>
                <label>
                    <input type="email" name="email" placeholder="E-mail"/>
                </label>
                <label>
                    <input type="password" name="password" placeholder="Password"/>
                </label>
                <button>Log in!</button>
                <p><NavigationLink text='Back to home page' to='/'/></p>
            </form>
            <img src={login} alt="Log in image"/>
        </div>
    </div>;
};


