import httpClient from './httpClient';

export const login = (data) => {
    return httpClient({
        method: 'POST',
        url: '/login',
        data,
    })
}
