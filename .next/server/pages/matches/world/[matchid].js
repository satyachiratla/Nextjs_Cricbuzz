"use strict";
(() => {
var exports = {};
exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 7394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4103);
/* harmony import */ var _world_matches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5155);
/* harmony import */ var _components_Cricket_Scorecard_MatchDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(449);
/* harmony import */ var _components_store_cricket_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7821);


// import { getWorldMatches, getWorldId } from "../../../helpers/api-util";




const MatchDetails = (props)=>{
    const { worldEvents  } = props;
    if (!worldEvents) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading..."
        });
    }
    const team1 = [];
    for(const key in worldEvents.team1){
        team1.push({
            id: key,
            name: worldEvents.team1[key].name
        });
    }
    const team2 = [];
    for(const key1 in worldEvents.team2){
        team2.push({
            id: key1,
            name: worldEvents.team2[key1].name
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_store_cricket_provider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: worldEvents.match
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: worldEvents.description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cricket_Scorecard_MatchDetail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                match: worldEvents.match,
                t1: worldEvents.t1,
                t2: worldEvents.t2,
                team1: team1,
                team2: team2,
                description: worldEvents.description
            })
        ]
    });
};
async function getStaticProps(context) {
    const { params  } = context;
    const worldId = params.matchid;
    const world = await (0,_helpers_api_util__WEBPACK_IMPORTED_MODULE_2__/* .getWorldId */ .Hv)(worldId);
    if (!world) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            worldEvents: world
        },
        revalidate: 1800
    };
}
async function getStaticPaths() {
    const data = await _world_matches__WEBPACK_IMPORTED_MODULE_3__/* .getWorldMatches */ .n;
    const ids = data.map((data)=>data.id);
    const pathsWithParams = ids.map((id)=>({
            params: {
                matchid: id
            }
        }));
    return {
        paths: pathsWithParams,
        fallback: true
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MatchDetails);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [93,491,103,611], () => (__webpack_exec__(7394)));
module.exports = __webpack_exports__;

})();