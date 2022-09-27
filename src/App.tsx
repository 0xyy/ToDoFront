import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPageView } from './views/NotFoundView';
import { RegisterView } from './views/RegisterView';
import { AuthView } from './views/AuthView';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthView/>}/>
            <Route path="/register" element={<RegisterView/>}/>
            <Route path="/*" element={<NotFoundPageView/>}/>
        </Routes>
    );
};