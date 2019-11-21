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
  EDIT_FAILED,
  GETTING_VENDORS,
  GOT_VENDORS,
  GET_VENDORS_FAILED,
  GETTING_TODOS,
  GOT_TODOS,
  GET_TODOS_FAILED,
  EDITING_VENDOR,
  EDITED_VENDOR,
  EDIT_VENDOR_FAILED,
  POSTING_VENDOR,
  POSTED_VENDOR,
  POST_VENDOR_FAILED,
  POSTING_TODO,
  POSTED_TODO,
  POST_TODO_FAILED,
  DELETING_VENDOR,
  DELETED_VENDOR,
  DELETE_VENDOR_FAILED
} from "../reducers/reducers";

//
// login and register
//
export const registerAcct = (user, props) => {
  axios
    .post(`/auth/register`, user)
    .then(res => {
      sessionStorage.setItem("id", res.data.id);
      sessionStorage.setItem("token", res.data.token);
      props.history.push("/events");
    })
    .catch(err => console.log(err));
};

export const login = (user, props) => {
  axios
    .post(`/auth/login`, user)
    .then(res => {
      sessionStorage.setItem("id", res.data.id);
      sessionStorage.setItem("token", res.data.token);
      props.history.push("/events");
    })
    .catch(err => console.log(err));
};

//
//events
//
export const getEvents = () => dispatch => {
  dispatch({ type: GETTING_EVENTS });

  authAxios()
    .get(`/events`)
    .then(res => {
      dispatch({ type: GOT_EVENTS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_EVENTS_FAILED, payload: err }));
};

export const submitNewEvent = (event, props) => dispatch => {
  dispatch({ type: POSTING });

  authAxios()
    .post(`/events`, event)
    .then(res => {
      dispatch({ type: POSTED, payload: res.data });
      props.history.push("/events");
    })
    .catch(err => dispatch({ type: POST_FAILED, payload: err }))
    .finally(alert("New event posted"));
};

export const deleteEvent = event => dispatch => {
  dispatch({ type: DELETING });

  authAxios()
    .delete(`/events/${event.id}`)
    .then(
      authAxios()
        .get(`/events`)
        .then(res => {
          dispatch({ type: DELETED, payload: res.data });
        })
    )
    .catch(err => dispatch({ type: DELETE_FAILED, payload: err }));
};

export const submitEditEvent = (id, event) => dispatch => {
  dispatch({ type: EDITING });

  delete event.completed;

  authAxios()
    .put(`/events/${id}`, event)
    .then(res => {
      dispatch({ type: EDITED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_FAILED, payload: err });
    });
};

//
//vendors
//
export const getVendors = () => dispatch => {
  dispatch({ type: GETTING_VENDORS });

  authAxios()
    .get(`/events/vendors/`)
    .then(res => {
      dispatch({ type: GOT_VENDORS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_VENDORS_FAILED, payload: err }));
};

export const submitEditVendor = (id, vendor) => dispatch => {
  dispatch({ type: EDITING_VENDOR });

  authAxios()
    .put(`/events/vendors/${id}`, vendor)
    .then(res => {
      dispatch({ type: EDITED_VENDOR, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_VENDOR_FAILED, payload: err });
    });
};

export const submitNewVendor = (vendor, props) => dispatch => {
  dispatch({ type: POSTING_VENDOR });

  authAxios()
    .post(`/events/vendors`, vendor)
    .then(res => {
      dispatch({ type: POSTED_VENDOR });

      authAxios()
        .get(`/events/vendors/`)
        .then(res => {
          dispatch({ type: GOT_VENDORS, payload: res.data });
          props.history.push("/testVendors");
        })
        .catch(err => dispatch({ type: GET_VENDORS_FAILED, payload: err }));
    })
    .catch(err => dispatch({ type: POST_VENDOR_FAILED, payload: err }));
};

export const deleteVendor = vendor => dispatch => {
  dispatch({ type: DELETING_VENDOR });

  authAxios()
    .delete(`/events/vendors/${vendor.id}`)
    .then(res => {
      dispatch({ type: DELETED_VENDOR });
    })
    .catch(err => dispatch({ type: DELETE_VENDOR_FAILED, payload: err }));
};

//
//todos
//

export const getTodosByEvent = id => dispatch => {
  dispatch({ type: GETTING_TODOS });

  authAxios()
    .get(`/events/${id}/todos`)
    .then(res => {
      dispatch({ type: GOT_TODOS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_TODOS_FAILED, payload: err }));
};

export const addNewTodo = todo => dispatch => {
  dispatch({ type: POSTING_TODO });

  authAxios()
    .post(`/events/todos`, todo)
    .then(res => {
      dispatch({ type: POSTED_TODO, payload: res.data });
    })
    .catch(err => dispatch({ type: POST_TODO_FAILED, payload: err }))
    .finally(alert("Todo added"));
};
