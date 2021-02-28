import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import DisplayRepo from "../components/DisplayRepo";
import PageNotFound from "../components/PageNotFound";
import { Box } from "@material-ui/core";
import { useStyles } from "../styles/components/login";

const Approutes = (props: any) => {
  const classes = useStyles(props);
  return (
    <BrowserRouter>
      <Box className={classes.mainContainer}>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route
            path="/displayuserrepo/:uname"
            component={DisplayRepo}
            strict
            exact={true}
          />
          <Route path="/*" component={PageNotFound} strict exact={true} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
};

export default Approutes;
