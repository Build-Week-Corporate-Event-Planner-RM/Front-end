import { initialState } from "./initialState";

export const GETTING_TODOS = "GETTING_TODOS";
export const GOT_TODOS = "GOT_TODOS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

export const POSTING_TODO = "POSTING_TODO";
export const POSTED_TODO = "POSTED_TODO";
export const POST_TODO_FAILED = "POST_TODO_FAILED";

export const EDITING_TODO = "EDITING_TODO";
export const EDITED_TODO = "EDITED_TODO";
export const EDIT_TODO_FAILED = "EDIT_TODO_FAILED";

export const DELETING_TODO = "DELETING_TODO";
export const DELETED_TODO = "DELETED_TODO";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default todoReducer;
