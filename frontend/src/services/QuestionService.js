import api from "./../axios/FetchInterceptor";

//insert question
const questionService = {};

//get all questions
questionService.getAll = () => {
  return api("/questions", {
    //Route is /questions
    method: "GET",
  }).then((res) => res.data); //Return response
};

//export questionService
export default questionService;
