import { authAxios } from "./authAxios";
import {
  POSTING,
  POSTED,
  POST_FAILED,
  DELETING,
  DELETED,
  DELETE_FAILED,
  EDITING,
  EDITED,
  EDIT_FAILED
} from "../reducers/reducers";

//credentials:

//michaelcurry
//pass
export const registerAcct = user => {
  axios
    .post(`http://localhost:8000/api/auth/register`, user)
    .then(res => {
      console.log(res.data);
      sessionStorage.setItem("token", res.data);
    })
    .catch(err => console.log(err));
};

export const login = user => {
  axios
    .post(`http://localhost:8000/api/auth/login`, user)
    .then(res => {
      alert(res.data.message);
      sessionStorage.setItem("token", res.data.token);
    })
    .catch(err => console.log(err));
};

export const submitNewEvent = event => dispatch => {
  dispatch({ type: POSTING });

  authAxios()
    .post(``, event)
    .then(Alert("New event posted"))
    .catch(err => dispatch({ type: POST_FAILED, payload: err }))
    .finally(res => dispatch({ type: POSTED, payload: res.data }));
};

export const deleteEvent = id => dispatch => {
  dispatch({ type: DELETING });

  authAxios()
    .delete(``) //dynamic id
    .then(res => dispatch({ type: DELETED, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_FAILED, payload: err }));
};

export const editEvent = (id, event) => dispatch => {
  dispatch({ EDITING });

  authAxios()
    .put(``, event) //dynamic id
    .then(res => dispatch({ type: EDITED, payload: res.data }))
    .catch(err => dispatch({ type: EDIT_FAILED, payload: err }));
};
