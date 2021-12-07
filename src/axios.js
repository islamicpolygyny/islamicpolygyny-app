import axios from "axios";

const instance = axios.create({
    baseURL: "https://islamicpolygyny-backend.herokuapp.com"
})

export default instance;