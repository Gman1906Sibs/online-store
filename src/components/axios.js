import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-spares-nation-4b2d6.cloudfunctions.net/api"
    // "http://localhost:5001/spares-nation-4b2d6/us-central1/api"
});

export default instance;