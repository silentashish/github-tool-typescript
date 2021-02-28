import React, { useEffect } from "react";
import { columnHeaders } from "../../common/constants";
import { useSelector } from "react-redux";
import { GITHUB_WEB_URL } from "../../common/appEnv";
import { GET_USER_REPO_SUCCESS } from "../../common/constants";
import { useDispatch } from "react-redux";
import { useStyles } from "../../styles/components/listOfRepo";
import { Box, Button } from "@material-ui/core";
import GridDisplay from "../GridDisplay";
import { useHistory } from "react-router-dom";
import { withSnackbar } from "notistack";
import PropTypes from "prop-types";
import { fetchRepoForNewUser } from "../../api/fetchRepoForUser";

const LinkComponent = (props: any) => {
  const getUserNameFromRedux = (state: any) => state.loginReducer.uname;
  const uname = useSelector(getUserNameFromRedux);
  const url = `${GITHUB_WEB_URL}/${uname}/${props.value}`;
  return (
    <a id="repositoryData" href={url}>
      {props.value}
    </a>
  );
};

const ListOfRepo = (props: any) => {
  const { enqueueSnackbar } = props;
  const history = useHistory();
  const getUserNameFromRedux = (state: any) => state.loginReducer.uname;
  const username = useSelector(getUserNameFromRedux);
  const getUserRepoFromRedux = (state: any) => state.appReducer.data;
  const rowData = useSelector(getUserRepoFromRedux);

  const userNameInUrl =
    history.location.pathname !== "/" &&
    history.location.pathname.split("/")[2];

  useEffect(() => {
    userNameInUrl !== username &&
      fetchRepoForNewUser(userNameInUrl, enqueueSnackbar, dispatch, history);
  }, []);

  const classes = useStyles(props);
  const dispatch = useDispatch();

  const onClickHandler = () =>
    dispatch({ type: GET_USER_REPO_SUCCESS, data: [] });

  return (
    <Box className={classes.listOfRepoContainer}>
      <GridDisplay
        rowData={rowData}
        columnHeaders={columnHeaders}
        LinkComponent={LinkComponent}
      />
      <Button
        disabled={rowData.length === 0}
        className={classes.resetBtn}
        variant="contained"
        color="primary"
        onClick={onClickHandler}
      >
        Clear Repositories
      </Button>
    </Box>
  );
};

export default withSnackbar(ListOfRepo);

ListOfRepo.propTypes = {
  enqueueSnackbar: PropTypes.func,
};

ListOfRepo.defaultProps = {
  enqueueSnackbar: () => {},
};
