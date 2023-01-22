import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePageView } from './views/HomePageView';
import { RegisterView } from './views/RegisterView';
import { AuthView } from './views/AuthView';
import { ProfileView } from './views/ProfileView';
import { NotFoundPageView } from './views/NotFoundView';

export const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePageView/>}/>
                <Route path='/register' element={<RegisterView/>}/>
                <Route path='/auth' element={<AuthView/>}/>
                <Route path='/profile' element={<ProfileView/>}/>
                <Route path='/*' element={<NotFoundPageView/>}/>
            </Routes>
        </Layout>
    );
};