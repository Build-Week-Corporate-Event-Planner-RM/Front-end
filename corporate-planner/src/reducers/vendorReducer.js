import { initialState } from "./initialState";

export const GETTING_VENDORS = "GETTING_VENDORS";
export const GOT_VENDORS = "GOT_VENDORS";
export const GET_VENDORS_FAILED = "GET_VENDORS_FAILED";

export const POSTING_VENDOR = "POSTING_VENDOR";
export const POSTED_VENDOR = "POSTED_VENDOR";
export const POST_VENDOR_FAILED = "POST_VENDOR_FAILED";

export const EDITING_VENDOR = "EDITING_VENDOR";
export const EDITED_VENDOR = "EDITED_VENDOR";
export const EDIT_VENDOR_FAILED = "EDIT_VENDOR_FAILED";

export const DELETING_VENDOR = "DELETING_VENDOR";
export const DELETED_VENDOR = "DELETED_VENDOR";
export const DELETE_VENDOR_FAILED = "DELETE_VENDOR_FAILED";

const vendorReducer = (state = initialState, action) => {
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

    case POSTING_VENDOR: {
      return {
        ...state,
        postingVendor: true
      };
    }
    case POSTED_VENDOR: {
      return {
        ...state,
        vendors: [...state.vendors, action.payload],
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

    default:
      return state;
  }
};

export default vendorReducer;
