import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Optional if using cookies/session
});
export default instance;
