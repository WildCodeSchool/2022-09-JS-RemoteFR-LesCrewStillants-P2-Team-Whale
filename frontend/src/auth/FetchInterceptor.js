import axios from "axios";

//Create a new axios instance
const service = axios.create({
  baseURL: "http://api.quizverse.space", //API url
});

//export service
export default service;
