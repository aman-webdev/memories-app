import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (data, navigate) => async (dispatch) => {
  try {
    //login user
    navigate("/");
  } catch (err) {
    //err
    console.log(err);
  }
};

export const signup = (data, navigate) => async (dispatch) => {
  try {
    //signup user
    navigate("/");
  } catch (err) {
    //err
    console.log(err);
  }
};
