
import firebase from "firebase";
import { register } from "../../ServerRequest";

export const userRegister = (
  fullname,
  email,
  password,
  verifyPassword
) => dispatch => {
  dispatch({
    type: POST_REGISTER_BEGIN
  });

  // return register(fullname, email, password, verifyPassword)
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((rs) => {
      // alert(rs.user.uid)
     firebase.firestore().collection("AllUser")
      .doc(rs.user.uid)
      .set({
        email:email,
        name:fullname,
        uid:rs.user.uid
      })
      .then((res)=>{
        dispatch({
          type: POST_REGISTER_SUCCESS,
          payload: rs.user
        })
      return res;
      })
      .catch((e)=>{
        alert(e.message)
        
        dispatch({

          type: POST_REGISTER_FAIL,
          payload: { e }
        });
        return e;
      })

    })
    .catch(error => {
alert(error.message)
      dispatch({
        type: POST_REGISTER_FAIL,
        payload: { error }
      });
      
      throw error;
    });
};

export const POST_REGISTER_BEGIN = "POST_REGISTER_BEGIN";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_FAIL = "POST_REGISTER_FAIL";
