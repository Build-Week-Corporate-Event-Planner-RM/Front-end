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

//Mike
//pass
export const registerAcct = user => {
  axios
    .post(
      `https://corporate-event-planner-api.herokuapp.com/api/auth/register`,
      user
    )
    .then(res => {
      console.log(res.data);
      sessionStorage.setItem("id", res.data.id);
      sessionStorage.setItem("token", res.data.token);
    })
    .catch(err => console.log(err));
};

export const login = user => {
  axios
    .post(
      `https://corporate-event-planner-api.herokuapp.com/api/auth/login`,
      user
    )
    .then(res => {
      console.log(res);
      sessionStorage.setItem("id", res.data.id);
      sessionStorage.setItem("token", res.data.token);
    })
    .catch(err => console.log(err));
};

export const getEvents = () => dispatch => {
  dispatch({ type: GETTING_EVENTS });

  authAxios()
    .get(`https://corporate-event-planner-api.herokuapp.com/api/events`)
    .then(res => {
      console.log(res);
      dispatch({ type: GOT_EVENTS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_EVENTS_FAILED, payload: err }));
};

export const submitNewEvent = event => dispatch => {
  dispatch({ type: POSTING });
  console.log(event);

  authAxios()
    .post(`https://corporate-event-planner-api.herokuapp.com/api/events`, event)
    .then(res => {
      console.log(res);
      dispatch({ type: POSTED, payload: res.data });
    })
    .catch(err => dispatch({ type: POST_FAILED, payload: err }))
    .finally(alert("New event posted"));
};

export const deleteEvent = event => dispatch => {
  dispatch({ type: DELETING });

  authAxios()
    .delete(
      `https://corporate-event-planner-api.herokuapp.com/api/events/${event.id}`
    )
    .then(
      authAxios()
        .get(`https://corporate-event-planner-api.herokuapp.com/api/events`)
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
    .put(
      `https://corporate-event-planner-api.herokuapp.com/api/events/${id}`,
      event
    )
    .then(res => {
      dispatch({ type: EDITED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_FAILED, payload: err });
    });
};
