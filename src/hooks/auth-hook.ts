import { useAppDispatch, useAppSelector } from './redux-hook';
import { useCallback } from 'react';
import { logIn, logOut } from '../redux/features/auth/auth-slice';

export const useAuth = () => {
    const { isLoggedIn, userId, userName } = useAppSelector(store => store.auth);
    const dispatch = useAppDispatch();

    const login = useCallback((userId: string, userName: string) => {
        dispatch(
            logIn({
                isLoggedIn: true,
                userId,
                userName,
            })
        );
    }, []);

    const logout = useCallback(() => {
        dispatch(logOut(true));
    }, []);

    return {
        isLoggedIn,
        userId,
        userName,
        login,
        logout,
    };
};