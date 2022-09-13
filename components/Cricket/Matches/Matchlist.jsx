import classes from "./Matchlist.module.css";
import Matchitem from "./Matchitem";

const Matchlist = (props) => {
  return (
    <div className={classes.matchlist}>
      <div className={classes.match}>
        <ul>
          {props.asiaEvents.map((event) => {
            return (
              <Matchitem
                key={event.id}
                id={event.id}
                match={event.match}
                type={event.event}
              />
            );
          })}
        </ul>
      </div>
      <div className={classes.match}>
        <ul>
          {props.worldEvents.map((event) => {
            return (
              <Matchitem
                key={event.id}
                id={event.id}
                match={event.match}
                type={event.event}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Matchlist;
