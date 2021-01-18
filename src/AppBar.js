import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { People } from "@material-ui/icons";
import { auth } from "./firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar({ username }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <People />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SAFE - chat
            <i className="name">Welcome {username}</i>
          </Typography>
          <Button color="inherit" onClick={() => auth.signOut()}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
