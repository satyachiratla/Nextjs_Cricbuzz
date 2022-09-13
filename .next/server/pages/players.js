(() => {
var exports = {};
exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 9027:
/***/ ((module) => {

// Exports
module.exports = {
	"players": "Players_players__R7pqD",
	"name": "Players_name__p0QTK"
};


/***/ }),

/***/ 2249:
/***/ ((module) => {

// Exports
module.exports = {
	"playerslist": "Playerslist_playerslist__ychrN",
	"header": "Playerslist_header__7cUAf",
	"content": "Playerslist_content___amvo"
};


/***/ }),

/***/ 3781:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "button_btn__fP_PG"
};


/***/ }),

/***/ 9961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_players),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Cricket/Players/Playerslist.module.css
var Playerslist_module = __webpack_require__(2249);
var Playerslist_module_default = /*#__PURE__*/__webpack_require__.n(Playerslist_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: ./components/Cricket/Players/Players.module.css
var Players_module = __webpack_require__(9027);
var Players_module_default = /*#__PURE__*/__webpack_require__.n(Players_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/UI/button.module.css
var button_module = __webpack_require__(3781);
var button_module_default = /*#__PURE__*/__webpack_require__.n(button_module);
;// CONCATENATED MODULE: ./components/UI/button.jsx



function Button(props) {
    if (props.link) {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: props.link,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: (button_module_default()).btn,
                children: props.children
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: props.type,
        className: (button_module_default()).btn,
        onClick: props.onClick,
        children: props.children
    });
}
/* harmony default export */ const UI_button = (Button);

;// CONCATENATED MODULE: ./components/Cricket/Players/Players.jsx






const Players = (props)=>{
    const { image , name , id  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(UI_button, {
        link: `/players/${id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Players_module_default()).players,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                    direction: "row",
                    spacing: 2,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        alt: "Remy Sharp",
                        src: `/${image}`
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (Players_module_default()).name,
                    children: name
                })
            ]
        })
    });
};
/* harmony default export */ const Players_Players = (Players);

;// CONCATENATED MODULE: ./components/Cricket/Players/Playerslist.jsx



const Playerslist = (props)=>{
    const playerslist = props.players.map((player)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Players_Players, {
            id: player.id,
            name: player.name,
            image: player.image
        }, player.id);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Playerslist_module_default()).playerslist,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Playerslist_module_default()).header,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Players"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Playerslist_module_default()).content,
                children: playerslist
            })
        ]
    });
};
/* harmony default export */ const Players_Playerslist = (Playerslist);

// EXTERNAL MODULE: ./players.js
var players = __webpack_require__(3491);
;// CONCATENATED MODULE: ./pages/players/index.jsx




const PlayerslistPage = (props)=>{
    const { players  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Players"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Players_Playerslist, {
                players: players
            })
        ]
    });
};
async function getStaticProps() {
    const playerslist = await players/* getAllPlayers */.X;
    return {
        props: {
            players: playerslist
        },
        revalidate: 3600
    };
}
/* harmony default export */ const pages_players = (PlayerslistPage);


/***/ }),

/***/ 2120:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 8742:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Stack");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,491], () => (__webpack_exec__(9961)));
module.exports = __webpack_exports__;

})();