import axios from "axios";
import { GITHUB_API_URL } from "../../common/appEnv";
import {
  GET_USER_REPO_LOADING,
  GET_USER_REPO_SUCCESS,
  GET_USER_REPO_FAILED,
  GET_USERNAME_SUCCESS,
  GET_USERNAME_FAILED,
  axiosHeader,
} from "../../common/constants";

export const getRepoAction = (uname: any) => {
  const url = `${GITHUB_API_URL}/${uname}/repos`;
  return async (dispatch: any) => {
    dispatch({ type: GET_USER_REPO_LOADING });

    try {
      const response = await axios.get(url, axiosHeader);
      if (response?.status && response.data.length > 0) {
        dispatch({ type: GET_USER_REPO_SUCCESS, data: response.data });
        dispatch({ type: GET_USERNAME_SUCCESS, data: uname });

        return true;
      } else {
        dispatch({ type: GET_USER_REPO_FAILED });
        return false;
      }
    } catch (error) {
      dispatch({ type: GET_USER_REPO_FAILED });
      dispatch({ type: GET_USERNAME_FAILED });

      return false;
    }
  };
};
