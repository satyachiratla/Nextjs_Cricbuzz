import React from 'react';

const cricketContext = React.createContext({
    totalScore1: 0,
    totalScore2: 0,
    wickets1: 0,
    wickets2: 0,
    addRuns1: (val) => {},
    addRuns2: (val) => {},
    removeWicket1: () => {},
    removeWicket2: () => {}
})

export default cricketContext;