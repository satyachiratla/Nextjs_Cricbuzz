(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{5303:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/matches/world/[matchid]",function(){return c(7394)}])},449:function(a,b,c){"use strict";c.d(b,{Z:function(){return y}});var d=c(5893),e=c(7294),f=c(2716),g=c.n(f),h=c(9745),i=c(967),j=c(7508),k=c(1799),l=c(3439),m=c.n(l),n=e.forwardRef(function(a,b){return(0,d.jsxs)("div",{className:m().input,children:[(0,d.jsx)("label",{htmlFor:a.input.id,children:a.label}),(0,d.jsx)("input",(0,k.Z)({ref:b},a.input))]})}),o=n,p=c(961),q=c.n(p),r=function(a){var b=a.id,c=a.name,f=(0,e.useRef)(),g=(0,e.useState)(0),k=g[0],l=g[1],m=(0,e.useState)(!0),n=m[0],p=m[1],r=(0,e.useState)(!1),s=r[0],t=r[1],u=(0,e.useState)(!1),v=u[0],w=u[1],x=(0,e.useState)(!1),y=x[0],z=x[1],A=function(a){p(!1),t(!0),B.removeWicket1(),w(a.target.checked),z(!0)},B=(0,e.useContext)(j.Z),C=function(a){a.preventDefault();var b=+f.current.value;l(function(a){return a+b}),B.addRuns1(b),f.current.value=""};return(0,d.jsx)("div",{className:q().teamlist,children:(0,d.jsxs)("div",{className:q().content,children:[(0,d.jsxs)("div",{className:q().name,children:[(0,d.jsxs)("div",{className:q().runs,children:[(0,d.jsx)("h4",{children:c}),(0,d.jsxs)("span",{children:["Runs: ",k," "]})]}),s&&(0,d.jsx)("p",{children:"c and b shammi"})]}),(0,d.jsx)("div",{className:q().switch,children:(0,d.jsx)(h.Z,{onChange:A,checked:v,label:"Out",color:"warning",disabled:y,control:(0,d.jsx)(i.Z,{})})}),n&&(0,d.jsxs)("form",{className:q().board,onSubmit:C,children:[(0,d.jsx)(o,{ref:f,label:"Add Runs",input:{id:"runs_"+b,type:"number",min:1,max:6,defaultValue:"0"}}),(0,d.jsx)("button",{type:"submit",children:"Add"})]})]})})},s=r,t=c(8195),u=c.n(t),v=function(a){var b=a.id,c=a.name,f=(0,e.useRef)(),g=(0,e.useState)(0),k=g[0],l=g[1],m=(0,e.useState)(!0),n=m[0],p=m[1],q=(0,e.useState)(!1),r=q[0],s=q[1],t=(0,e.useState)(!1),v=t[0],w=t[1],x=(0,e.useState)(!1),y=x[0],z=x[1],A=function(a){p(!1),s(!0),B.removeWicket2(),w(a.target.checked),z(!0)},B=(0,e.useContext)(j.Z),C=function(a){a.preventDefault();var b=+f.current.value;l(function(a){return a+b}),B.addRuns2(b),f.current.value=""};return(0,d.jsx)("div",{className:u().teamlist,children:(0,d.jsxs)("div",{className:u().content,children:[(0,d.jsxs)("div",{className:u().name,children:[(0,d.jsxs)("div",{className:u().runs,children:[(0,d.jsx)("h4",{children:c}),(0,d.jsxs)("span",{children:["Runs: ",k," "]})]}),r&&(0,d.jsx)("p",{children:"c and b shammi"})]}),(0,d.jsx)("div",{className:u().switch,children:(0,d.jsx)(h.Z,{onChange:A,checked:v,label:"Out",color:"warning",disabled:y,control:(0,d.jsx)(i.Z,{})})}),n&&(0,d.jsxs)("form",{className:u().board,onSubmit:C,children:[(0,d.jsx)(o,{ref:f,label:"Add Runs",input:{id:"runs_"+b,type:"number",min:1,max:6,defaultValue:"0"}}),(0,d.jsx)("button",{type:"submit",children:"Add"})]})]})})},w=v,x=function(a){var b=(0,e.useContext)(j.Z),c=a.match,f=a.team1,h=a.team2,i=a.t1,k=a.t2,l=a.description,m=f.map(function(a){return(0,d.jsx)(s,{id:a.id,name:a.name},a.id)}),n=h.map(function(a){return(0,d.jsx)(w,{id:a.id,name:a.name},a.id)});return(0,d.jsxs)("div",{className:g().matchDetail,children:[(0,d.jsx)("div",{className:g().header,children:(0,d.jsx)("h1",{children:c})}),(0,d.jsxs)("div",{className:g().summary,children:[(0,d.jsx)("u",{children:(0,d.jsx)("h2",{children:"Scorecard"})}),(0,d.jsx)("div",{className:g().description,children:(0,d.jsx)("p",{children:l})}),(0,d.jsxs)("div",{className:g().playerslist,children:[(0,d.jsxs)("h3",{children:[i,"'s Score ",(0,d.jsxs)("span",{children:[b.totalScore1,"/",b.wickets1]})]}),(0,d.jsx)("ul",{children:m})]}),(0,d.jsxs)("div",{className:g().playerslist,children:[(0,d.jsxs)("h3",{children:[k,"'s Score ",(0,d.jsxs)("span",{children:[b.totalScore2,"/",b.wickets2]})]}),(0,d.jsx)("ul",{children:n})]})]})]})},y=x},7508:function(a,b,c){"use strict";var d=c(7294).createContext({totalScore1:0,totalScore2:0,wickets1:0,wickets2:0,addRuns1:function(a){},addRuns2:function(a){},removeWicket1:function(){},removeWicket2:function(){}});b.Z=d},7821:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(7508),g={totalScore1:0,totalScore2:0,wickets1:0,wickets2:0},h=function(a,b){if("ADD1"===b.type){var c=a.totalScore1+b.value,d=a.totalScore2;return{totalScore1:c,totalScore2:d,wickets1:a.wickets1,wickets2:a.wickets2}}if("ADD2"===b.type){var e=a.totalScore2+b.value,f=a.totalScore1;return{totalScore1:f,totalScore2:e,wickets1:a.wickets1,wickets2:a.wickets2}}if("Remove1"===b.type){var h=a.wickets1+1;if(a.wickets1.length>10)return;return{totalScore1:a.totalScore1,totalScore2:a.totalScore2,wickets1:h,wickets2:a.wickets2}}if("Remove2"===b.type){var i=a.wickets2+1;return{totalScore1:a.totalScore1,totalScore2:a.totalScore2,wickets1:a.wickets1,wickets2:i}}return g},i=function(a){var b=(0,e.useReducer)(h,g),c=b[0],i=b[1],j=function(a){i({type:"ADD1",value:a})},k=function(a){i({type:"ADD2",value:a})},l=function(){i({type:"Remove1"})},m=function(){i({type:"Remove2"})},n={totalScore1:c.totalScore1,totalScore2:c.totalScore2,wickets1:c.wickets1,wickets2:c.wickets2,addRuns1:j,addRuns2:k,removeWicket1:l,removeWicket2:m};return(0,d.jsx)(f.Z.Provider,{value:n,children:a.children})};b.Z=i},7394:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return j}});var d=c(5893),e=c(9008),f=c.n(e),g=c(449),h=c(7821),i=function(a){var b=a.worldEvents;if(!b)return(0,d.jsx)("p",{children:"Loading..."});var c=[];for(var e in b.team1)c.push({id:e,name:b.team1[e].name});var i=[];for(var j in b.team2)i.push({id:j,name:b.team2[j].name});return(0,d.jsxs)(h.Z,{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:b.match}),(0,d.jsx)("meta",{name:"description",content:b.description})]}),(0,d.jsx)(g.Z,{match:b.match,t1:b.t1,t2:b.t2,team1:c,team2:i,description:b.description})]})},j=!0;b.default=i},2716:function(a){a.exports={matchDetail:"MatchDetail_matchDetail__M_xqa",header:"MatchDetail_header__gnFGV",summary:"MatchDetail_summary__xumUU",playerslist:"MatchDetail_playerslist__jCr80",description:"MatchDetail_description__fz7RE"}},961:function(a){a.exports={teamlist:"Teamlist_teamlist__gype7",content:"Teamlist_content__SRAh3",name:"Teamlist_name__eyHMR",runs:"Teamlist_runs__5NtTl",board:"Teamlist_board__WP9lI"}},8195:function(a){a.exports={teamlist:"Teamlist2_teamlist__cj8Ry",content:"Teamlist2_content__Z4Frb",name:"Teamlist2_name___YHAJ",runs:"Teamlist2_runs___VkT1",board:"Teamlist2_board__O5mnZ"}},3439:function(a){a.exports={input:"Input_input__NJrll"}}},function(a){a.O(0,[107,53,774,888,179],function(){var b;return a(a.s=5303)}),_N_E=a.O()}])