
import firebase from "firebase";
import API from "../../axios/API";

export const getDepartments = () => async dispatch => {
  dispatch({
    type: GET_DEPARTMENTS_BEGIN
  });
  // return API({
  //   method: "GET",
  //   url: "/departments"
  // })
  await firebase.firestore().collection('Departments')
  .get()

    .then(res => {
      // alert("hii")
      var department = []
      res.forEach((docUser) => {
        department.push(docUser.data())
      })
      dispatch({
        type: GET_DEPARTMENTS_SUCCESS,
        payload: department
      });
      // return department;
    })
    .catch(error => {
      alert(error)
      dispatch({
        type: GET_DEPARTMENTS_FAIL,
        payload: { error }
      });
      // return error;
    });
};

export const GET_DEPARTMENTS_BEGIN = "GET_DEPARTMENTS_BEGIN";
export const GET_DEPARTMENTS_SUCCESS = "GET_DEPARTMENTS_SUCCESS";
export const GET_DEPARTMENTS_FAIL = "GET_DEPARTMENTS_FAIL";
