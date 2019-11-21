import axios from "axios";

export const authAxios = () => {
  return axios.create({
    baseURL: `https://corporate-event-planner-api.herokuapp.com/api`,
    headers: {
      authorization: sessionStorage.getItem("token")
    }
  });
};
