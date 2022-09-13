import * as React from "react";
import { FormControlLabel, Switch } from "@mui/material";

import { useRef, useState, useContext } from "react";
import cricketContext from "../../store/cricket-context";
import Input from "../../UI/Input";
import classes from "./Teamlist2.module.css";

const Teamlist2 = (props) => {
  const { id, name } = props;
  const runsRef = useRef();
  const [score, setScore] = useState(0);
  const [showForm, setShowForm] = useState(true);
  const [closePara, setClosePara] = useState(false);
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const formChangeHandler = (event) => {
    setShowForm(false);
    setClosePara(true);
    cricCtx.removeWicket2();
    setChecked(event.target.checked);
    setDisabled(true);
  };

  const cricCtx = useContext(cricketContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredRuns = runsRef.current.value;
    const enteredRunsNumber = +enteredRuns;

    setScore((prevRuns) => prevRuns + enteredRunsNumber);

    cricCtx.addRuns2(enteredRunsNumber);
    runsRef.current.value = "";
  };

  return (
    <div className={classes.teamlist}>
      <div className={classes.content}>
        <div className={classes.name}>
          <div className={classes.runs}>
            <h4>{name}</h4>
            <span>Runs: {score} </span>
          </div>
          {closePara && <p>c and b shammi</p>}
        </div>
        <div className={classes.switch}>
          <FormControlLabel
            onChange={formChangeHandler}
            checked={checked}
            label="Out"
            color="warning"
            disabled={disabled}
            control={<Switch />}
          />
        </div>
        {showForm && (
          <form className={classes.board} onSubmit={submitHandler}>
            <Input
              ref={runsRef}
              label="Add Runs"
              input={{
                id: "runs_" + id,
                type: "number",
                min: 1,
                max: 6,
                defaultValue: "0",
              }}
            />
            <button type="submit">Add</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Teamlist2;
