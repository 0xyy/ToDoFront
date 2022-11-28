import React from 'react';
import { MainNavigation } from './MainNavigation';

interface Props {
    children: React.ReactNode;
}

export const Layout = (props: Props) => {
    return <>
        <MainNavigation/>
        <main>{props.children}</main>
    </>
}