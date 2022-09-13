import { useReducer } from "react";
import CricketContext from "../store/cricket-context";

const defaultScore = {
  totalScore1: 0,
  totalScore2: 0,
  wickets1: 0,
  wickets2: 0
};

const cricketReducer = (state, action) => {
  if (action.type === "ADD1") {
    const updatedTotalScore1 = state.totalScore1 + action.value;
    const score2 = state.totalScore2

    return {
      totalScore1: updatedTotalScore1,
      totalScore2: score2,
      wickets1: state.wickets1,
      wickets2: state.wickets2
    };
  }

  if (action.type === "ADD2") {
    const updatedTotalScore2 = state.totalScore2 + action.value;
    const score1 = state.totalScore1

    return {
      totalScore1: score1,
      totalScore2: updatedTotalScore2,
      wickets1: state.wickets1,
      wickets2: state.wickets2
    };
  }

  if (action.type === 'Remove1') {
    const updatedWickets1 = state.wickets1 + 1;

    if (state.wickets1.length > 10) {
      return;
    } 

    return {
      totalScore1: state.totalScore1,
      totalScore2: state.totalScore2,
      wickets1: updatedWickets1,
      wickets2: state.wickets2
    }
  }

  if (action.type === 'Remove2') {
    const updatedWickets2 = state.wickets2 + 1;

    return {
      totalScore1: state.totalScore1,
      totalScore2: state.totalScore2,
      wickets1: state.wickets1,
      wickets2: updatedWickets2
    }
  }
  return defaultScore;
};

const CricketProvider = (props) => {
  const [cricketState, dispatchCricItem] = useReducer(
    cricketReducer,
    defaultScore
  );

  const addRunsHandler1 = (val) => {
    dispatchCricItem({ type: "ADD1", value: val });
  };

  const addRunsHandler2 = (val) => {
    dispatchCricItem({ type: "ADD2", value: val });
  };

  const removeWicketHandler1 = () => {
    dispatchCricItem({ type: 'Remove1' })
  }

  const removeWicketHandler2 = () => {
    dispatchCricItem({ type: 'Remove2' })
  }

  const cricketContext = {
    totalScore1: cricketState.totalScore1,
    totalScore2: cricketState.totalScore2,
    wickets1: cricketState.wickets1,
    wickets2: cricketState.wickets2,
    addRuns1: addRunsHandler1,
    addRuns2: addRunsHandler2,
    removeWicket1: removeWicketHandler1,
    removeWicket2: removeWicketHandler2

  };
  return (
    <CricketContext.Provider value={cricketContext}>
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketProvider;
