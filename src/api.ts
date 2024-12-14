import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Access-Control-Allow-Origins' : '*',
        'Content-Type' : 'application/json',
    } 
})

 export default api;