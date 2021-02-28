
// @ts-ignore
export const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api',
    timeout: 10000
})

// @ts-ignore

export const doApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/ashley/todos',
    timeout: 100000
})