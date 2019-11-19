import { initialState } from "./initialState";

export const GETTING_EVENTS = "GETTING_EVENTS";
export const GOT_EVENTS = "GOT_EVENTS";
export const GET_EVENTS_FAILED = "GET_EVENTS_FAILED";

export const POSTING = "POSTING";
export const POSTED = "POSTED";
export const POST_FAILED = "POST_FAILED";

export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const DELETE_FAILED = "DELETE_FAILED";

export const EDITING = "EDITING";
export const EDITED = "EDITED";
export const EDIT_FAILED = "EDIT_FAILED";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_EVENTS: {
      return {
        ...state,
        gettingEvents: true
      };
    }
    case GOT_EVENTS: {
      return {
        ...state,
        events: action.payload,
        gettingEvents: false
      };
    }
    case GET_EVENTS_FAILED: {
      return {
        ...state,
        gettingEvents: false,
        error: action.payload
      };
    }

    case POSTING: {
      return {
        ...state,
        posting: true
      };
    }
    case POSTED: {
      return {
        ...state,
        events: [...state.events, action.payload],
        posting: false
      };
    }
    case POST_FAILED: {
      return {
        ...state,
        posting: false,
        error: action.payload
      };
    }

    case DELETING: {
      return {
        ...state,
        deleting: true
      };
    }
    case DELETED: {
      return {
        ...state,
        deleting: false
        // events: state.events.filter(event => event.id !== action.payload.id)
      };
    }
    case DELETE_FAILED: {
      return {
        ...state,
        deleting: false,
        error: action.payload
      };
    }

    case EDITING: {
      return {
        ...state,
        editing: true
      };
    }
    case EDITED: {
      return {
        ...state,
        editing: false,
        events: [
          ...state.events.filter(event => event.id !== action.payload.id),
          action.payload
        ]
      };
    }
    case EDIT_FAILED: {
      return {
        ...state,
        editing: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
