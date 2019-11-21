import { initialState } from "./initialState";

export const GETTING_EVENTS = "GETTING_EVENTS";
export const GOT_EVENTS = "GOT_EVENTS";
export const GET_EVENTS_FAILED = "GET_EVENTS_FAILED";

export const GETTING_VENDORS = "GETTING_VENDORS";
export const GOT_VENDORS = "GOT_VENDORS";
export const GET_VENDORS_FAILED = "GET_VENDORS_FAILED";

export const GETTING_TODOS = "GETTING_TODOS";
export const GOT_TODOS = "GOT_TODOS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

export const POSTING = "POSTING";
export const POSTED = "POSTED";
export const POST_FAILED = "POST_FAILED";

export const POSTING_VENDOR = "POSTING_VENDOR";
export const POSTED_VENDOR = "POSTED_VENDOR";
export const POST_VENDOR_FAILED = "POST_VENDOR_FAILED";

export const POSTING_TODO = "POSTING_TODO";
export const POSTED_TODO = "POSTED_TODO";
export const POST_TODO_FAILED = "POST_TODO_FAILED";

export const EDITING = "EDITING";
export const EDITED = "EDITED";
export const EDIT_FAILED = "EDIT_FAILED";

export const EDITING_VENDOR = "EDITING_VENDOR";
export const EDITED_VENDOR = "EDITED_VENDOR";
export const EDIT_VENDOR_FAILED = "EDIT_VENDOR_FAILED";

export const EDITING_TODO = "EDITING_TODO";
export const EDITED_TODO = "EDITED_TODO";
export const EDIT_TODO_FAILED = "EDIT_TODO_FAILED";

export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const DELETE_FAILED = "DELETE_FAILED";

export const DELETING_VENDOR = "DELETING_VENDOR";
export const DELETED_VENDOR = "DELETED_VENDOR";
export const DELETE_VENDOR_FAILED = "DELETE_VENDOR_FAILED";

export const DELETING_TODO = "DELETING_TODO";
export const DELETED_TODO = "DELETED_TODO";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_VENDORS: {
      return {
        ...state,
        gettingVendors: true
      };
    }
    case GOT_VENDORS: {
      return {
        ...state,
        gettingVendors: false,
        vendors: action.payload
      };
    }
    case GET_VENDORS_FAILED: {
      return {
        ...state,
        gettingVendors: false,
        error: action.payload
      };
    }

    case GETTING_TODOS: {
      return {
        ...state,
        gettingTodos: true
      };
    }
    case GOT_TODOS: {
      return {
        ...state,
        gettingTodos: false,
        eventTodos: action.payload
      };
    }
    case GET_TODOS_FAILED: {
      return {
        ...state,
        gettingTodos: false,
        error: action.payload
      };
    }

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

    case POSTING_VENDOR: {
      return {
        ...state,
        postingVendor: true
      };
    }
    case POSTED_VENDOR: {
      return {
        ...state,
        // vendors: [...state.vendors, action.payload],
        postingVendor: false
      };
    }
    case POST_VENDOR_FAILED: {
      return {
        ...state,
        postingVendor: false,
        error: action.payload
      };
    }

    case POSTING_TODO: {
      return {
        ...state,
        postingTodo: true
      };
    }
    case POSTED_TODO: {
      return {
        ...state,
        todos: [...state, action.payload],
        postingTodo: false
      };
    }
    case POST_TODO_FAILED: {
      return {
        ...state,
        postingTodo: false,
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
        deleting: false,
        events: action.payload
      };
    }
    case DELETE_FAILED: {
      return {
        ...state,
        deleting: false,
        error: action.payload
      };
    }

    case DELETING_VENDOR: {
      return {
        ...state,
        deletingVendor: true
      };
    }
    case DELETED_VENDOR: {
      return {
        ...state,
        deletingVendor: false
        // vendors: action.payload
      };
    }
    case DELETE_VENDOR_FAILED: {
      return {
        ...state,
        deletingVendor: false,
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

    case EDITING_VENDOR: {
      return {
        ...state,
        editingVendor: true
      };
    }
    case EDITED_VENDOR: {
      return {
        ...state,
        editingVendor: false,
        vendors: [
          ...state.vendors.filter(vendor => vendor.id !== action.payload.id),
          action.payload
        ]
      };
    }
    case EDIT_VENDOR_FAILED: {
      return {
        ...state,
        editingVendor: false,
        error: action.payload
      };
    }

    case EDITING_TODO: {
      return {
        ...state,
        editingTodo: true
      };
    }
    case EDITED_TODO: {
      return {
        ...state,
        editingTodo: false,
        todos: [
          ...state.todos.filter(todo => todo.id !== action.payload.id),
          action.payload
        ]
      };
    }
    case EDIT_TODO_FAILED: {
      return {
        ...state,
        editingTodo: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
