exports.id = 611;
exports.ids = [611];
exports.modules = {

/***/ 8587:
/***/ ((module) => {

// Exports
module.exports = {
	"matchDetail": "MatchDetail_matchDetail__M_xqa",
	"header": "MatchDetail_header__gnFGV",
	"summary": "MatchDetail_summary__xumUU",
	"playerslist": "MatchDetail_playerslist__jCr80",
	"description": "MatchDetail_description__fz7RE"
};


/***/ }),

/***/ 1466:
/***/ ((module) => {

// Exports
module.exports = {
	"teamlist": "Teamlist_teamlist__gype7",
	"content": "Teamlist_content__SRAh3",
	"name": "Teamlist_name__eyHMR",
	"runs": "Teamlist_runs__5NtTl",
	"board": "Teamlist_board__WP9lI"
};


/***/ }),

/***/ 300:
/***/ ((module) => {

// Exports
module.exports = {
	"teamlist": "Teamlist2_teamlist__cj8Ry",
	"content": "Teamlist2_content__Z4Frb",
	"name": "Teamlist2_name___YHAJ",
	"runs": "Teamlist2_runs___VkT1",
	"board": "Teamlist2_board__O5mnZ"
};


/***/ }),

/***/ 6898:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__NJrll"
};


/***/ }),

/***/ 449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Scorecard_MatchDetail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Cricket/Scorecard/MatchDetail.module.css
var MatchDetail_module = __webpack_require__(8587);
var MatchDetail_module_default = /*#__PURE__*/__webpack_require__.n(MatchDetail_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/store/cricket-context.jsx
var cricket_context = __webpack_require__(7508);
// EXTERNAL MODULE: ./components/UI/Input.module.css
var Input_module = __webpack_require__(6898);
var Input_module_default = /*#__PURE__*/__webpack_require__.n(Input_module);
;// CONCATENATED MODULE: ./components/UI/Input.jsx



const Input = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Input_module_default()).input,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: props.input.id,
                children: props.label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ref: ref,
                ...props.input
            })
        ]
    });
});
/* harmony default export */ const UI_Input = (Input);

// EXTERNAL MODULE: ./components/Cricket/Scorecard/Teamlist.module.css
var Teamlist_module = __webpack_require__(1466);
var Teamlist_module_default = /*#__PURE__*/__webpack_require__.n(Teamlist_module);
;// CONCATENATED MODULE: ./components/Cricket/Scorecard/Teamlist.jsx







const Teamlist = (props)=>{
    const { id , name  } = props;
    const runsRef = (0,external_react_.useRef)();
    const { 0: score , 1: setScore  } = (0,external_react_.useState)(0);
    const { 0: showForm , 1: setShowForm  } = (0,external_react_.useState)(true);
    const { 0: closePara , 1: setClosePara  } = (0,external_react_.useState)(false);
    const { 0: checked , 1: setChecked  } = (0,external_react_.useState)(false);
    const { 0: disabled , 1: setDisabled  } = (0,external_react_.useState)(false);
    const formChangeHandler = (event)=>{
        setShowForm(false);
        setClosePara(true);
        cricCtx.removeWicket1();
        setChecked(event.target.checked);
        setDisabled(true);
    };
    const cricCtx = (0,external_react_.useContext)(cricket_context/* default */.Z);
    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredRuns = runsRef.current.value;
        const enteredRunsNumber = +enteredRuns;
        setScore((prevRuns)=>prevRuns + enteredRunsNumber);
        cricCtx.addRuns1(enteredRunsNumber);
        runsRef.current.value = "";
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Teamlist_module_default()).teamlist,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Teamlist_module_default()).content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Teamlist_module_default()).name,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Teamlist_module_default()).runs,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        "Runs: ",
                                        score,
                                        " "
                                    ]
                                })
                            ]
                        }),
                        closePara && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "c and b shammi"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Teamlist_module_default())["switch"],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                        onChange: formChangeHandler,
                        checked: checked,
                        label: "Out",
                        color: "warning",
                        disabled: disabled,
                        control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Switch, {})
                    })
                }),
                showForm && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: (Teamlist_module_default()).board,
                    onSubmit: submitHandler,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(UI_Input, {
                            ref: runsRef,
                            label: "Add Runs",
                            input: {
                                id: "runs_" + id,
                                type: "number",
                                min: 1,
                                max: 6,
                                defaultValue: "0"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            children: "Add"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Scorecard_Teamlist = (Teamlist);

// EXTERNAL MODULE: ./components/Cricket/Scorecard/Teamlist2.module.css
var Teamlist2_module = __webpack_require__(300);
var Teamlist2_module_default = /*#__PURE__*/__webpack_require__.n(Teamlist2_module);
;// CONCATENATED MODULE: ./components/Cricket/Scorecard/Teamlist2.jsx







const Teamlist2 = (props)=>{
    const { id , name  } = props;
    const runsRef = (0,external_react_.useRef)();
    const { 0: score , 1: setScore  } = (0,external_react_.useState)(0);
    const { 0: showForm , 1: setShowForm  } = (0,external_react_.useState)(true);
    const { 0: closePara , 1: setClosePara  } = (0,external_react_.useState)(false);
    const { 0: checked , 1: setChecked  } = (0,external_react_.useState)(false);
    const { 0: disabled , 1: setDisabled  } = (0,external_react_.useState)(false);
    const formChangeHandler = (event)=>{
        setShowForm(false);
        setClosePara(true);
        cricCtx.removeWicket2();
        setChecked(event.target.checked);
        setDisabled(true);
    };
    const cricCtx = (0,external_react_.useContext)(cricket_context/* default */.Z);
    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredRuns = runsRef.current.value;
        const enteredRunsNumber = +enteredRuns;
        setScore((prevRuns)=>prevRuns + enteredRunsNumber);
        cricCtx.addRuns2(enteredRunsNumber);
        runsRef.current.value = "";
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Teamlist2_module_default()).teamlist,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Teamlist2_module_default()).content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Teamlist2_module_default()).name,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Teamlist2_module_default()).runs,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        "Runs: ",
                                        score,
                                        " "
                                    ]
                                })
                            ]
                        }),
                        closePara && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "c and b shammi"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Teamlist2_module_default())["switch"],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                        onChange: formChangeHandler,
                        checked: checked,
                        label: "Out",
                        color: "warning",
                        disabled: disabled,
                        control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Switch, {})
                    })
                }),
                showForm && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: (Teamlist2_module_default()).board,
                    onSubmit: submitHandler,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(UI_Input, {
                            ref: runsRef,
                            label: "Add Runs",
                            input: {
                                id: "runs_" + id,
                                type: "number",
                                min: 1,
                                max: 6,
                                defaultValue: "0"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            children: "Add"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Scorecard_Teamlist2 = (Teamlist2);

;// CONCATENATED MODULE: ./components/Cricket/Scorecard/MatchDetail.jsx






const MatchDetail = (props)=>{
    const cricCtx = (0,external_react_.useContext)(cricket_context/* default */.Z);
    const { match , team1 , team2 , t1 , t2 , description  } = props;
    const teamlist1 = team1.map((team1)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Scorecard_Teamlist, {
            id: team1.id,
            name: team1.name
        }, team1.id);
    });
    const teamlist2 = team2.map((team2)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Scorecard_Teamlist2, {
            id: team2.id,
            name: team2.name
        }, team2.id);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (MatchDetail_module_default()).matchDetail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MatchDetail_module_default()).header,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: match
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MatchDetail_module_default()).summary,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("u", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Scorecard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (MatchDetail_module_default()).description,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: description
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (MatchDetail_module_default()).playerslist,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                children: [
                                    t1,
                                    "'s Score ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            cricCtx.totalScore1,
                                            "/",
                                            cricCtx.wickets1
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: teamlist1
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (MatchDetail_module_default()).playerslist,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                children: [
                                    t2,
                                    "'s Score ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            cricCtx.totalScore2,
                                            "/",
                                            cricCtx.wickets2
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: teamlist2
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Scorecard_MatchDetail = (MatchDetail);


/***/ }),

/***/ 7508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const cricketContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
    totalScore1: 0,
    totalScore2: 0,
    wickets1: 0,
    wickets2: 0,
    addRuns1: (val)=>{},
    addRuns2: (val)=>{},
    removeWicket1: ()=>{},
    removeWicket2: ()=>{}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cricketContext);


/***/ }),

/***/ 7821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_cricket_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7508);



const defaultScore = {
    totalScore1: 0,
    totalScore2: 0,
    wickets1: 0,
    wickets2: 0
};
const cricketReducer = (state, action)=>{
    if (action.type === "ADD1") {
        const updatedTotalScore1 = state.totalScore1 + action.value;
        const score2 = state.totalScore2;
        return {
            totalScore1: updatedTotalScore1,
            totalScore2: score2,
            wickets1: state.wickets1,
            wickets2: state.wickets2
        };
    }
    if (action.type === "ADD2") {
        const updatedTotalScore2 = state.totalScore2 + action.value;
        const score1 = state.totalScore1;
        return {
            totalScore1: score1,
            totalScore2: updatedTotalScore2,
            wickets1: state.wickets1,
            wickets2: state.wickets2
        };
    }
    if (action.type === "Remove1") {
        const updatedWickets1 = state.wickets1 + 1;
        if (state.wickets1.length > 10) {
            return;
        }
        return {
            totalScore1: state.totalScore1,
            totalScore2: state.totalScore2,
            wickets1: updatedWickets1,
            wickets2: state.wickets2
        };
    }
    if (action.type === "Remove2") {
        const updatedWickets2 = state.wickets2 + 1;
        return {
            totalScore1: state.totalScore1,
            totalScore2: state.totalScore2,
            wickets1: state.wickets1,
            wickets2: updatedWickets2
        };
    }
    return defaultScore;
};
const CricketProvider = (props)=>{
    const { 0: cricketState , 1: dispatchCricItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(cricketReducer, defaultScore);
    const addRunsHandler1 = (val)=>{
        dispatchCricItem({
            type: "ADD1",
            value: val
        });
    };
    const addRunsHandler2 = (val)=>{
        dispatchCricItem({
            type: "ADD2",
            value: val
        });
    };
    const removeWicketHandler1 = ()=>{
        dispatchCricItem({
            type: "Remove1"
        });
    };
    const removeWicketHandler2 = ()=>{
        dispatchCricItem({
            type: "Remove2"
        });
    };
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store_cricket_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Provider */ .Z.Provider, {
        value: cricketContext,
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CricketProvider);


/***/ })

};
;