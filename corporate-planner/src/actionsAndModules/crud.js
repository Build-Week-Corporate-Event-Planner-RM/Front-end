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

//
//events
//
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
          console.log(res.data);
          dispatch({ type: DELETED, payload: res.data });
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

//
//vendors
//
export const getVendors = () => dispatch => {
  dispatch({ type: GETTING_VENDORS });

  authAxios()
    .get(
      `https://corporate-event-planner-api.herokuapp.com/api/events/vendors/`
    )
    .then(res => {
      console.log(res);
      dispatch({ type: GOT_VENDORS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_VENDORS_FAILED, payload: err }));
};

export const submitEditVendor = (id, vendor) => dispatch => {
  dispatch({ type: EDITING_VENDOR });

  authAxios()
    .put(
      `https://corporate-event-planner-api.herokuapp.com/api/events/vendors/${id}`,
      vendor
    )
    .then(res => {
      console.log(res);
      dispatch({ type: EDITED_VENDOR, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_VENDOR_FAILED, payload: err });
    });
};

export const submitNewVendor = vendor => dispatch => {
  dispatch({ type: POSTING_VENDOR });

  authAxios()
    .post(
      `https://corporate-event-planner-api.herokuapp.com/api/events/vendors`,
      vendor
    )
    .then(res => {
      console.log("post vendor res", res);
      dispatch({ type: POSTED_VENDOR, payload: res.data });
    })
    .catch(err => dispatch({ type: POST_VENDOR_FAILED, payload: err }));
};

export const deleteVendor = vendor => dispatch => {
  console.log("vendor into delete req", vendor.id);
  dispatch({ type: DELETING_VENDOR });

  authAxios()
    .delete(
      `https://corporate-event-planner-api.herokuapp.com/api/events/vendors/${vendor.id}`
    )
    .then(res => {
      console.log("delete req res", res.data);
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
    .get(
      `https://corporate-event-planner-api.herokuapp.com/api/events/${id}/todos`
    )
    .then(res => {
      dispatch({ type: GOT_TODOS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_TODOS_FAILED, payload: err }));
};
