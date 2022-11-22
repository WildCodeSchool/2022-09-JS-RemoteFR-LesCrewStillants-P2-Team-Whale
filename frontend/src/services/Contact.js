import api from "../axios/FetchInterceptor";

// insert contact
const contactService = {};

// get all easy contact
contactService.getAllContactMessage = () => {
  return api("/contact", {
    // Route is /contact
    method: "GET",
  }).then((res) => res.data); // Return response
};

scoreService.insertContact = (name, mail, message) => {
  return api("/contact", {
    // Route is /contact
    method: "POST",
    data: {
      name: name,
      mail: mail,
      message: message
    },
  }).then((res) => res.data); // Return response
};

export default contactService;
