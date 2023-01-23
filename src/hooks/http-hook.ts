import { useCallback, useState } from 'react';
// import { AuthLoginRequest, RegisterRequest, AddTodoRequest } from 'types';
import { apiUrl } from '../config/api';

// export type RequestBody = AuthLoginRequest | RegisterRequest | AddTodoRequest | null;

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>();

    let statusError = 500;

    const sendRequest = useCallback(async (
        url: string,
        method = 'GET',
        body: any,
        headers = {},
    ) => {
        try {
            setIsLoading(true);

            const res = await fetch(`${apiUrl}${url}`, {
                method,
                headers,
                body: body && {body: body instanceof FormData ? body : JSON.stringify(body)}.body,
                credentials: 'include',
            });

            const data = await res.json();

            setIsLoading(false);

            if (!data.isSuccess) {
                setError(data.message);
                return data;
            }

            return data;
        } catch (err: any) {
            setError(statusError === 500 ? 'Sorry, try again later.' : err.message);
            setIsLoading(false);
            throw err;
        }
    }, []);

    const clearError = () => {
        setError(null);
    };

    return {
        sendRequest,
        error,
        setError,
        isLoading,
        clearError,
    };
};