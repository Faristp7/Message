import api from './index'

const authApi = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    login: ((credentials : any) => api.post('/auth/login', credentials))
}

export default authApi