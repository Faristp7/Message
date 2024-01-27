import api from './index'

const authApi = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    login: ((credentials : any) => api.post('/auth/google', credentials))
}

export default authApi