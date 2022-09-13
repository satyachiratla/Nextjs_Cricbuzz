import * as React from "react";
import Head from "next/head";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import classes from "./PlayerDetails.module.css";

const PlayerDetails = (props) => {
  const { name, role, image, birthplace, born, talent } = props;

  return (
    <div className={classes.playerdetails}>
      <Head>
        <title>{name}</title>
        <meta name="description" content={talent} />
      </Head>
      <div className={classes.avatar}>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src={`/${image}`}
            sx={{ width: 300, height: 300 }}
          />
        </Stack>
        <h2>{name}</h2>
      </div>
      <div className={classes.information}>
        <div className={classes.bio}>
          <div className={classes.detail}>
            <h3>Born: </h3>{" "}
            <span>
              <i>{born}</i>
            </span>
          </div>
          <div className={classes.detail}>
            <h3>Birthplace: </h3>{" "}
            <span>
              <i>{birthplace}</i>
            </span>
          </div>
          <div className={classes.detail}>
            <h3>Role: </h3>{" "}
            <span>
              <i>{role}</i>
            </span>
          </div>
        </div>
        <div className={classes.talent}>
          <h1>Talent</h1>
          <p>{talent}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
