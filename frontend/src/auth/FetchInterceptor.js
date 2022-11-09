import axios from "axios";

//Create a new axios instance
const service = axios.create({
  baseURL: "https://api.quizverse.space", //API url
});

//export service
export default service;
