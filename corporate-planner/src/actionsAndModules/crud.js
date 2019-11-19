import axios from "axios";
import { authAxios } from "./authAxios";
import {
  GETTING_EVENTS,
  GOT_EVENTS,
  GET_EVENTS_FAILED,
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

export const getEvents = () => dispatch => {
  dispatch({ type: GETTING_EVENTS });

  authAxios()
    .get(`http://localhost:8000/api/events`)
    .then(res => {
      dispatch({ type: GOT_EVENTS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_EVENTS_FAILED, payload: err }));
};

export const submitNewEvent = event => dispatch => {
  dispatch({ type: POSTING });

  authAxios()
    .post(`https://corporate-event-planner-api.herokuapp.com/api/events`, event)
    .then(res => dispatch({ type: POSTED, payload: res.data }))
    .catch(err => dispatch({ type: POST_FAILED, payload: err }))
    .finally(alert("New event posted"));
};

export const deleteEvent = event => dispatch => {
  dispatch({ type: DELETING });

  authAxios()
    .delete(`http://localhost:8000/api/events/${event.id}`)
    .then(
      authAxios()
        .get(`http://localhost:8000/api/events`)
        .then(res => {
          console.log(res);
          dispatch({ type: DELETED });
          dispatch({ type: GOT_EVENTS, payload: res.data });
        })
    )
    .catch(err => dispatch({ type: DELETE_FAILED, payload: err }));
};

export const submitEditEvent = (id, event) => dispatch => {
  dispatch({ type: EDITING });

  delete event.completed;

  authAxios()
    .put(`http://localhost:8000/api/events/${id}`, event)
    .then(res => {
      dispatch({ type: EDITED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_FAILED, payload: err });
    });
};
