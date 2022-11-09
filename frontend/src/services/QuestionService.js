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

//export questionService
export default questionService;
