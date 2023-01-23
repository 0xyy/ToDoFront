import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { NavigationLink } from '../../UI/NavigationLink/NavigationLink';
import { useHttp } from '../../../hooks/http-hook';
import { useAuth } from '../../../hooks/auth-hook';
import { LoadingSpinner } from '../../UI/LoadingSpinner/LoadingSpinner';
import { InfoModal } from '../../UI/InfoModal/InfoModal';
import { FormErrorMessage } from '../../UI/FormErrorMessage/FormErrorMessage';

import styles from './LoginForm.module.css';
import loginImg from '../../../assets/login.svg';

export type LoginResponse = {
    isSuccess: true,
    userId: string;
    userName: string;
} | {
    isSuccess: false,
    message: string;
}

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(4, 'Password is too short')
        .max(30, 'Password is too long')
        .required('Password is required'),
    email: Yup.string()
        .email('Enter a valid email address!')
        .min(6, 'Email address is too short')
        .max(255, 'Email address is too long')
        .required('Email address is required'),
});

export const LoginForm = () => {
    const { sendRequest, isLoading, clearError, error } = useHttp();
    const { login } = useAuth();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            const data: LoginResponse = await sendRequest(
                '/auth/login',
                'POST',
                {
                    email: values.email,
                    password: values.password,
                },
                {
                    'Content-Type': 'application/json',
                }
            );

            if (data.isSuccess) {
                login(data.userId, data.userName);
            }
        },
    });

    if (isLoading) {
        return <div className={`${styles.box} card`}>
            <LoadingSpinner/>
        </div>;
    }

    return <div className={`${styles.box} card`}>
        {error && <InfoModal isError message={error} onClose={clearError} title='Login failed!'/>}
        <h1>Log in</h1>
        <div className={styles.formBox}>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </label>
                {!!formik.errors.password && <FormErrorMessage message={formik.errors.password}/>}
                {!!formik.errors.email && <FormErrorMessage message={formik.errors.email}/>}
                <button type="submit">Log in!</button>
                <p><NavigationLink text='Back to home page' to='/'/></p>
            </form>
            <img src={loginImg} alt="Log in image"/>
        </div>
    </div>;
};


