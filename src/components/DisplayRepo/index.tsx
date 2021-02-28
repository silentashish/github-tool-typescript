import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "../../styles/components/displayUserRepo";
import Header from "../Header";
import ListOfRepo from "./ListOfRepo";

const DisplayRepo = (props: any) => {
  const classes = useStyles(props);

  return (
    <Box className={classes.mainContainer}>
      <Header headerVariant="h4" />
      <ListOfRepo />
    </Box>
  );
};

export default DisplayRepo;
