import {
  GET_USER_REPO_LOADING,
  GET_USER_REPO_SUCCESS,
  GET_USER_REPO_FAILED,
} from "../../common/constants";

const initState = {
  loading: false,
  error: false,
  data: [],
};

export const appReducer = (state = initState, action?: any) => {
  switch (action.type) {
    case GET_USER_REPO_LOADING:
      return { ...initState, loading: true };
    case GET_USER_REPO_SUCCESS:
      return { ...initState, loading: false, error: false, data: action.data };
    case GET_USER_REPO_FAILED:
      return { ...initState, data: [], loading: false, error: true };
    default: {
      return state;
    }
  }
};
