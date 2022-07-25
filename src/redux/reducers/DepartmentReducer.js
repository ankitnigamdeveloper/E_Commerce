

import {
  GET_DEPARTMENTS_BEGIN,
  GET_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENTS_FAIL
} from "../actions/DepartmentAction";

const initialState = {
  loading: false,
  departments: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS_BEGIN:
      return {
        loading: true,
        error: null
      };
    case GET_DEPARTMENTS_SUCCESS:
      return {
        loading: false,
        departments: action.payload
        // departments:[{departmentName:"Men", categories:"Watch, Cloths"},{departmentName:"Women", categories:"Watch, Cloths"}],
      };
    case GET_DEPARTMENTS_FAIL:
      return {
        loading: false,
        // departments:[{departmentName:"Men", categories:"Watch, Cloths"},{departmentName:"Women", categories:"Watch, Cloths"}],
        error: action.payload
      };
    default:
      return state;
  }
};
