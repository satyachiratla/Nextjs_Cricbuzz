(() => {
var exports = {};
exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 2576:
/***/ ((module) => {

// Exports
module.exports = {
	"matches": "Matches_matches__M7Vks",
	"header": "Matches_header__5RG_e",
	"schedules": "Matches_schedules__mGuhB",
	"schedule": "Matches_schedule__8NI3b"
};


/***/ }),

/***/ 8054:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "Matchitem_list__pQ5k0"
};


/***/ }),

/***/ 2038:
/***/ ((module) => {

// Exports
module.exports = {
	"matchlist": "Matchlist_matchlist__QcHj3",
	"match": "Matchlist_match__FD_WF"
};


/***/ }),

/***/ 8475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ matches),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Cricket/Matches/Matches.module.css
var Matches_module = __webpack_require__(2576);
var Matches_module_default = /*#__PURE__*/__webpack_require__.n(Matches_module);
// EXTERNAL MODULE: ./components/Cricket/Matches/Matchlist.module.css
var Matchlist_module = __webpack_require__(2038);
var Matchlist_module_default = /*#__PURE__*/__webpack_require__.n(Matchlist_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Cricket/Matches/Matchitem.module.css
var Matchitem_module = __webpack_require__(8054);
var Matchitem_module_default = /*#__PURE__*/__webpack_require__.n(Matchitem_module);
;// CONCATENATED MODULE: ./components/Cricket/Matches/Matchitem.jsx



const Matchitem = (props)=>{
    const { id , match , type  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (Matchitem_module_default()).list,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: {
                pathname: `matches/${type}/${id}`,
                query: {
                    id: id
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: match
            })
        })
    });
};
/* harmony default export */ const Matches_Matchitem = (Matchitem);

;// CONCATENATED MODULE: ./components/Cricket/Matches/Matchlist.jsx



const Matchlist = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Matchlist_module_default()).matchlist,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Matchlist_module_default()).match,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: props.asiaEvents.map((event)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(Matches_Matchitem, {
                            id: event.id,
                            match: event.match,
                            type: event.event
                        }, event.id);
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Matchlist_module_default()).match,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: props.worldEvents.map((event)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(Matches_Matchitem, {
                            id: event.id,
                            match: event.match,
                            type: event.event
                        }, event.id);
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Matches_Matchlist = (Matchlist);

;// CONCATENATED MODULE: ./components/Cricket/Matches/Matches.jsx



const Matches = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Matches_module_default()).matches,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Matches_module_default()).header,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Schedule"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Matches_module_default()).schedules,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Matches_module_default()).schedule,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Asia Cup 2022"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Matches_module_default()).schedule,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "World Cup 2022"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Matches_Matchlist, {
                    asiaEvents: props.asiaEvents,
                    worldEvents: props.worldEvents
                })
            })
        ]
    });
};
/* harmony default export */ const Matches_Matches = (Matches);

// EXTERNAL MODULE: ./asia_matches.js
var asia_matches = __webpack_require__(7018);
// EXTERNAL MODULE: ./world_matches.js
var world_matches = __webpack_require__(5155);
;// CONCATENATED MODULE: ./pages/matches/index.jsx



// import { getAsiaMatches, getWorldMatches } from "../../helpers/api-util";


const Matchespage = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "ICC Events"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Get the ICC events 2022 Scorecard, Schedules of International matches along with Latest News and ICC Cricket ..."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Matches_Matches, {
                asiaEvents: props.asia,
                worldEvents: props.world
            })
        ]
    });
};
async function getStaticProps() {
    const asiaMatches = await asia_matches/* getAsiaMatches */.I;
    const worldMatches = await world_matches/* getWorldMatches */.n;
    return {
        props: {
            asia: asiaMatches,
            world: worldMatches
        },
        revalidate: 3600
    };
}
/* harmony default export */ const matches = (Matchespage);


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,93], () => (__webpack_exec__(8475)));
module.exports = __webpack_exports__;

})();