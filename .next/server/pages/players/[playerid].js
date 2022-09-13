(() => {
var exports = {};
exports.id = 831;
exports.ids = [831];
exports.modules = {

/***/ 1920:
/***/ ((module) => {

// Exports
module.exports = {
	"playerdetails": "PlayerDetails_playerdetails__7sGD3",
	"avatar": "PlayerDetails_avatar__Zsmxv",
	"information": "PlayerDetails_information__JLLEJ",
	"bio": "PlayerDetails_bio__P_r2G",
	"detail": "PlayerDetails_detail__DzwON",
	"talent": "PlayerDetails_talent__GelAv"
};


/***/ }),

/***/ 1620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _playerid_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: ./components/Cricket/Players/PlayerDetails.module.css
var PlayerDetails_module = __webpack_require__(1920);
var PlayerDetails_module_default = /*#__PURE__*/__webpack_require__.n(PlayerDetails_module);
;// CONCATENATED MODULE: ./components/Cricket/Players/PlayerDetails.jsx






const PlayerDetails = (props)=>{
    const { name , role , image , birthplace , born , talent  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PlayerDetails_module_default()).playerdetails,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: talent
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PlayerDetails_module_default()).avatar,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                        direction: "row",
                        spacing: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                            alt: "Remy Sharp",
                            src: `/${image}`,
                            sx: {
                                width: 300,
                                height: 300
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: name
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PlayerDetails_module_default()).information,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (PlayerDetails_module_default()).bio,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (PlayerDetails_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Born: "
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            children: born
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (PlayerDetails_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Birthplace: "
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            children: birthplace
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (PlayerDetails_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Role: "
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            children: role
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (PlayerDetails_module_default()).talent,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Talent"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: talent
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Players_PlayerDetails = (PlayerDetails);

// EXTERNAL MODULE: ./helpers/api-util.jsx
var api_util = __webpack_require__(4103);
// EXTERNAL MODULE: ./players.js
var players = __webpack_require__(3491);
;// CONCATENATED MODULE: ./pages/players/[playerid].jsx


// import { getAllPlayers, getPlayerById } from "../../helpers/api-util";


const PlayerDetailsPage = (props)=>{
    const { details  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Players_PlayerDetails, {
            image: details.image,
            role: details.role,
            birthplace: details.birthplace,
            name: details.name,
            talent: details.talent,
            born: details.born
        })
    });
};
async function getStaticProps(context) {
    const { params  } = context;
    const playerId = params.playerid;
    const player = await (0,api_util/* getPlayerById */["in"])(playerId);
    if (!player) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            details: player
        },
        revalidate: 1800
    };
}
async function getStaticPaths() {
    const data = await players/* getAllPlayers */.X;
    const ids = data.map((data)=>data.id);
    const pathsWithParams = ids.map((id)=>({
            params: {
                playerid: id
            }
        }));
    return {
        paths: pathsWithParams,
        fallback: false
    };
}
/* harmony default export */ const _playerid_ = (PlayerDetailsPage);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [93,491,103], () => (__webpack_exec__(1620)));
module.exports = __webpack_exports__;

})();