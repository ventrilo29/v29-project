import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const getPublicContent = () => {
    return axios.get(API_URL + "characters");
};

export default getPublicContent;