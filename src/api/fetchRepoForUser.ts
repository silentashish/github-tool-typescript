import { buttonNotification } from "../common/constants";
import { getRepoAction } from "../redux/actions/getRepoAction";

export const fetchRepoForNewUser = async (
  userNameInUrl: any,
  enqueueSnackbar: any,
  dispatch: any,
  history: any
) => {
  const { successNotific, errorNotific, loadingNotific } = buttonNotification;
  enqueueSnackbar(loadingNotific.message, { variant: loadingNotific.variant });
  //   window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
  const isValidGitHubUser = await dispatch(getRepoAction(userNameInUrl));
  if (isValidGitHubUser) {
    enqueueSnackbar(successNotific.message, {
      variant: successNotific.variant,
    });
    history.push(`/displayuserrepo/${userNameInUrl.toLowerCase()}`);
  } else {
    enqueueSnackbar(errorNotific.message, { variant: errorNotific.variant });
  }
};
