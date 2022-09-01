import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPageView } from './views/NotFoundView';
import { LoginView } from './views/LoginView';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginView/>}/>
            <Route path="/*" element={<NotFoundPageView/>}/>
        </Routes>
    );
};