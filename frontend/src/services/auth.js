import axios from 'axios';
import { getToken } from '../utils/auth.js';

export const fetchUserFromServer = async () => {

    const token = getToken()
    if (!token) {
        return null
    }
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/authProfile`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.data.user
}