(this["webpackJsonpjuego-hundirbarcos"]=this["webpackJsonpjuego-hundirbarcos"]||[]).push([[0],{12:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(4),r=c.n(a),s=(c(12),c(2)),i="[Config] BoxesBoard",o="[Interaction] BoxStatesOnClick",l="[Game] Start game",d="[Game] Restart game",j=c(0),b=function(e){var t=e.box,c=e.board,n=e.turn,a=e.disabled,r=Object(s.b)();return Object(j.jsx)("div",{onClick:t.attacked||a?"":function(e){r(function(e,t,c){return{type:o,payload:{box:e,board:t,turn:c}}}(t,c,n))},className:"box "+(t.attacked?t.ship?"attackedBox":"waterBox":" "),children:Object(j.jsx)("span",{class:"positionBox",children:t.id})})},u=function(e){var t=e.configKey,c=Object(s.c)((function(e){return e.game})),n=c.boards,a=c.playerTurn,r=n.filter((function(e){return e.configKey===t}))[0];return console.log(a),Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"board "+(a===t?"boardDisabled":"boardEnabled"),style:{"grid-template-columns":"1fr ".repeat(r.columns)},children:r.boxesList.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(b,{disabled:a===t,box:e,board:r,turn:a},e.id)})}))})})})},f=function(e,t){return{type:i,payload:{columns:e,configKey:t}}},O=function(e){var t=e.configKey,c=Object(s.b)(),a=Object(n.useRef)();Object(n.useEffect)((function(){c(f(a.current.value,t))}),[]);return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"boardSizeConfig",children:Object(j.jsxs)("select",{className:"configuration",ref:a,onChange:function(e){var n=e.target.value;c(f(n,t))},children:[Object(j.jsx)("option",{selected:!0,value:"4",children:"4 columns"}),Object(j.jsx)("option",{value:"6",children:"6 columns"}),Object(j.jsx)("option",{value:"8",children:"8 columns"})]})})})},h=function(e){var t=e.configKey;return Object(j.jsxs)("div",{className:"playerScreen",children:[Object(j.jsx)("div",{className:"configKey",children:Object(j.jsx)("h4",{children:t})}),Object(j.jsx)(u,{configKey:t})]})},m=c(5),x=c.n(m),y=function(){var e=Object(s.c)((function(e){return e.game})).startedGame,t=Object(s.c)((function(e){return e.game})).boards;console.log(t[0].boxesQuant),Object(n.useEffect)((function(){e&&x.a.fire({title:"Sink "+t[0].boxesQuant/2+" opponent's ships to win",timer:6e3,willClose:function(){clearInterval()}})}),[e]);var c=Object(s.b)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"title",children:[" ",Object(j.jsx)("h1",{children:" BattleShip Game "}),Object(j.jsx)("button",{style:{display:e?"inline-block":"none"},className:"backButton",onClick:function(){c({type:d})},children:"Back"})]}),e?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{configKey:"Player 1"}),Object(j.jsx)(h,{configKey:"Player 2"})," "]}):Object(j.jsxs)("div",{className:"container",children:[" ",Object(j.jsx)("div",{className:"chooseboard",children:Object(j.jsx)("h4",{children:"Customize your board size:"})}),Object(j.jsxs)("div",{className:"row justify-content-md-center",children:[Object(j.jsx)("div",{className:"col-sm-12 content-left",children:Object(j.jsxs)("div",{className:"content-left",children:[Object(j.jsx)("div",{className:"configKey",children:Object(j.jsx)("h4",{children:"Player 1"})})," ",Object(j.jsx)(O,{configKey:"Player 1"})]})}),Object(j.jsxs)("div",{className:"col-sm-12 content-right",children:[Object(j.jsx)("div",{className:"content-right"}),Object(j.jsx)("div",{className:"configKey",children:Object(j.jsx)("h4",{children:"Player 2"})})," ",Object(j.jsx)(O,{configKey:"Player 2"})]})]}),Object(j.jsxs)("div",{className:"row justify-content-md-center",children:[" ",Object(j.jsx)("div",{className:"col-sm-12 content-right",children:Object(j.jsx)("button",{className:"startButton"+(e?NaN:" "),onClick:function(){c({type:l})},children:"Start Game"})})]})]}),Object(j.jsx)("div",{className:e?"hidden":" ",children:Object(j.jsxs)("div",{class:"ocean",children:[Object(j.jsx)("div",{class:"wave"}),Object(j.jsx)("div",{class:"wave"})]})})]})},g=c(11),v=c(3),p=c(10);function N(e,t){return Object(p.a)(e).sort((function(){return Math.random()>.5?1:-1})).slice(0,t)}var K=[{columns:0,configKey:"Player 1",boxesList:[],boxesQuant:0},{columns:0,configKey:"Player 2",boxesList:[],boxesQuant:0}],w={boards:K,playerTurn:N(K,1)[0].configKey,startedGame:!1},k="A B C D E F G H I J K L M N O P Q".split(" ");function B(e,t){for(var c=[],n=0;n<e;n++)for(var a=0;a<t;a++){var r={id:k[a]+(n+1),ship:!1,attacked:!1};c.push(r)}return N(c,2*t).map((function(e){return e.ship=!0})),c}var E=Object(g.a)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(v.a)(Object(v.a)({},e),{},{startedGame:!0});case i:var c=t.payload.columns*t.payload.columns,n=t.payload.columns,a=t.payload.columns,r=B(a,n);return Object(v.a)(Object(v.a)({},e),{},{boards:[].concat(Object(p.a)(e.boards.filter((function(e){return e.configKey!==t.payload.configKey&&null!=e}))),[{columns:t.payload.columns,configKey:t.payload.configKey,boxesList:r,boxesQuant:c}])});case o:var s=e.boards.filter((function(e){return e.configKey===t.payload.board.configKey}))[0],j=s.boxesList.filter((function(e){return e.id===t.payload.box.id}))[0];j.attacked=!0;var b=s.boxesList.filter((function(e){return!0===e.ship&&!0===e.attacked})),u=s.boxesList.filter((function(e){return!0===e.ship}));switch(u.length===b.length&&x.a.fire({title:e.playerTurn+" wins!",imageUrl:"https://picsum.photos/id/828/350/250",imageWidth:350,imageHeight:250,imageAlt:"Custom image"}),e.playerTurn){case"Player 1":e.playerTurn="Player 2";break;case"Player 2":e.playerTurn="Player 1"}return Object(v.a)({},e);case d:return Object(v.a)(Object(v.a)({},e),{},{startedGame:!1});default:return e}}}),P=Object(g.b)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var S="./sw.js";navigator.serviceWorker&&(window.location.href.includes("localhost")&&(S="./BattleShipGame/sw.js"),navigator.serviceWorker.register(S));var _=function(){return Object(j.jsx)(s.a,{store:P,children:Object(j.jsx)(y,{})})};r.a.render(Object(j.jsx)(_,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.87c1e491.chunk.js.map