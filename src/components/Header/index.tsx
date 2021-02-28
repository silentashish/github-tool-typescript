import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "../../styles/components/header";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props: any) => {
  const getUserNameFromRedux = (state: any) => state.loginReducer.uname;
  const uname = useSelector(getUserNameFromRedux);
  const history = useHistory();
  const { headerVariant } = props;
  const classes = useStyles(props);
  return (
    <Box className={classes.heading}>
      <VpnKeyIcon fontSize="large" className={classes.icon} />
      <Typography
        variant={headerVariant}
        gutterBottom={true}
        className={classes.title}
      >
        GITHUB REPO TOOL
      </Typography>
      {history.location.pathname !== "/" && (
        <Typography
          variant="h6"
          gutterBottom={true}
          className={classes.username}
        >
          {uname}
        </Typography>
      )}
    </Box>
  );
};

export default Header;

Header.defaultProps = {
  headerVariant: "h6",
};

Header.propTypes = {
  headerVariant: PropTypes.string,
};
