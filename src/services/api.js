import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-capstone-g1.herokuapp.com/",
});

