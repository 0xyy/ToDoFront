import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPageView } from './views/NotFoundView';
import { RegisterView } from './views/RegisterView';
import { AuthView } from './views/AuthView';
import { Layout } from './components/layout/Layout';
import { HomePageView } from './views/HomePageView';

export const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePageView/>}/>
                <Route path='/register' element={<RegisterView/>}/>
                <Route path='/*' element={<NotFoundPageView/>}/>
            </Routes>
        </Layout>
    );
};