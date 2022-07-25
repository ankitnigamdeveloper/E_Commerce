import firebase from "firebase";
import Auth from "../../modules/Auth";
import { login } from "../../ServerRequest";

export const userLogin = (email, password) => dispatch => {
  dispatch({
    type: LOGIN_BEGIN
  });
  return firebase.auth().signInWithEmailAndPassword(email, password)
  // login(email, password)
    .then(res => {
//       alert(email)
//       firebase.firestore()
//       .collection("AllUser")
//       .where('uid', '==', res.user.uid).get().then(rq => {
//         alert(rq.size)
//           // //console.log("rq --> ", rq.docs[0].data())
//           if (rq.size > 0) {
//               const { email, uid,  name} = rq.docs[0].data()
//             const data = {
//                 email:email,
//                 uid:uid,
//                 name:name,
//                 // createdAt:createdAt
//   }
// alert(email + name + uid)
      Auth.setUserToken(res.user);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      });

      return res;
    // }
    // }) 
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error }
      });

      throw error;
    });
};

export const insertToken = () => dispatch => {
  let token;
  if (localStorage.getItem("auth")) {
    token = JSON.parse(localStorage.getItem("auth"));
    dispatch({
      type: INSERT_TOKEN_SUCCESS,
      payload: token
    });
  } else {
    dispatch({
      type: INSERT_TOKEN_FAIL
    });
  }
};

export const LOGIN_BEGIN = "LOGIN_BEGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const INSERT_TOKEN_SUCCESS = "INSERT_TOKEN_SUCCESS";
export const INSERT_TOKEN_FAIL = "INSERT_TOKEN_FAIL";
