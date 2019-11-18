import { initialState } from "./initialState";

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
    case DELETING: {
      return {
        ...state,
        deleting: true
      };
    }
    case DELETED: {
      return {
        ...state,
        events: action.payload,
        deleting: false
      };
    }
    case DELETE_FAILED: {
      return {
        ...state,
        deleting: false,
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
        events: action.payload,
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
        events: action.payload
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
