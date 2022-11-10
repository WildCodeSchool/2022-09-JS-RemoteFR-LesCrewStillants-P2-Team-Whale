import api from "./../axios/FetchInterceptor";

//insert question
const scoreService = {};

//get all easy scores
scoreService.getAllEasy = () => {
  return api("/scores/easy", {
    //Route is /scores/easy
    method: "GET",
  }).then((res) => res.data); //Return response
};

//get all hard scores
scoreService.getAllHard = () => {
  return api("/scores/hard", {
    //Route is /scores/hard
    method: "GET",
  }).then((res) => res.data); //Return response
};

//export scoreService
export default scoreService;
