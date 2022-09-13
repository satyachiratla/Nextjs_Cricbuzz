import classes from "./Matches.module.css";
import Matchlist from "../Matches/Matchlist";

const Matches = (props) => {

  return (
    <div className={classes.matches}>
      <div className={classes.header}>
        <h1>Schedule</h1>
      </div>
      <div className={classes.schedules}>
        <div className={classes.schedule}>
          <h1>Asia Cup 2022</h1>
        </div>
        <div className={classes.schedule}>
          <h1>World Cup 2022</h1>
        </div>
      </div>
      <div>
        <Matchlist asiaEvents={props.asiaEvents} worldEvents={props.worldEvents} />
      </div>
    </div>
  );
};

export default Matches;
