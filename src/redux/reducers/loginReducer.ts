import {
  GET_USERNAME_FAILED,
  GET_USERNAME_SUCCESS,
} from "../../common/constants";

const initState = {
  error: false,
  uname: "",
};

export const loginReducer = (state = initState, action?: any) => {
  switch (action.type) {
    case GET_USERNAME_SUCCESS:
      return { ...initState, error: false, uname: action.data };
    case GET_USERNAME_FAILED:
      return { ...initState, uname: "", error: true };
    default: {
      return state;
    }
  }
};
