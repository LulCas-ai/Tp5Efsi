import axios from "axios";


const api = axios.create({
    baseURL:"http://www.omdbapi.com/?apikey=5039ce06"
})


export default api