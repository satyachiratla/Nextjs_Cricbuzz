import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import classes from "./Players.module.css";
import Button from '../../UI/button'

const Players = (props) => {
  const { image, name, id } = props;

  return (
    <Button link={`/players/${id}`}>
    <div className={classes.players}>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src={`/${image}`} />
      </Stack>
      <h2 className={classes.name}>{name}</h2>
    </div>
    </Button>
  );
};

export default Players;
