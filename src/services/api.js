import axios from "axios";

export const api = axios.create({
  baseURL: "https://apiv2-capstone-g1.herokuapp.com/",
});
