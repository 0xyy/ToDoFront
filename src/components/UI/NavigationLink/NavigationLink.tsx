import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavigationLink.module.css';

interface Props {
    to: string;
    text: string;
}

export const NavigationLink = ({ to, text }: Props) => {
    return <Link to={to} className={styles.link}>{text}</Link>;
};