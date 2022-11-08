import api from "./../auth/FetchInterceptor";

//insert question
const questionService = {};

//get all questions
questionService.getAll = () => {
  return api("/questions", {
    //Route is /questions
    method: "GET",
  }).then((res) => res); //Return response
};

//get question by id
questionService.get = (id) => {
  return api(`/questions/${id}`, {
    //Route is /questions/:id
    method: "GET", //Use GET method
  }).then((res) => res); //Return response
};

//export questionService
export default questionService;
