import React from 'react';
import { NavigationLink } from '../../UI/NavigationLink/NavigationLink';

import registerImg from '../../../assets/register.svg';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
    return <div className={`${styles.box} card`}>
        <h1>Sign up, it's so simple</h1>
        <div className={styles.formBox}>
            <form>
                <label>
                    <input type="email" name="email" placeholder="E-mail"/>
                </label>
                <label>
                    <input type="text" name="name" placeholder="First name"/>
                </label>
                <label>
                    <input type="password" name="password" placeholder="Password"/>
                </label>
                <label>
                    <input type="password" name="repeatedPassword" placeholder="Repeated password"/>
                </label>
                <button>Create account</button>
                <p><NavigationLink text='Back to home page' to='/'/></p>
            </form>
            <img src={registerImg} alt="Register image"/>
        </div>
    </div>;
};