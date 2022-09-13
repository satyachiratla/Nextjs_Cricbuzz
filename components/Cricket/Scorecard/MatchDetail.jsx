import { useContext } from "react";
import classes from "./MatchDetail.module.css";
import Teamlist from "../Scorecard/Teamlist";
import CricketContext from "../../store/cricket-context";
import Teamlist2 from "../Scorecard/Teamlist2";

const MatchDetail = (props) => {
  const cricCtx = useContext(CricketContext);

  const { match, team1, team2, t1, t2, description } = props;

  const teamlist1 = team1.map((team1) => {
    return (
      <Teamlist key={team1.id} id={team1.id} name={team1.name} />
    );
  });

  const teamlist2 = team2.map((team2) => {
    return (
      <Teamlist2 key={team2.id} id={team2.id} name={team2.name} />
    );
  });

  return (
    <div className={classes.matchDetail}>
      <div className={classes.header}>
        <h1>{match}</h1>
      </div>
      <div className={classes.summary}>
        <u>
          <h2>Scorecard</h2>
        </u>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
        <div className={classes.playerslist}>
          <h3>
            {t1}'s Score <span>{cricCtx.totalScore1}/{cricCtx.wickets1}</span>
          </h3>
          <ul>{teamlist1}</ul>
        </div>
        <div className={classes.playerslist}>
          <h3>
            {t2}'s Score <span>{cricCtx.totalScore2}/{cricCtx.wickets2}</span>
          </h3>
          <ul>{teamlist2}</ul>
        </div>
      </div>
    </div>
  );
};

export default MatchDetail;
