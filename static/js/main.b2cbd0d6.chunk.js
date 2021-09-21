(this["webpackJsonpjuego-hundirbarcos"]=this["webpackJsonpjuego-hundirbarcos"]||[]).push([[0],{12:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(5),s=n.n(a),r=(n(12),n(2)),i="[Config] BoxesBoard",o="[Interaction] BoxStatesOnClick",l="[Game] Start game",d="[Game] Restart game",j=function(){return{type:d}},u=n(0),b=function(e){var t=e.box,n=e.board,c=e.turn,a=e.disabled,s=Object(r.b)();return Object(u.jsx)("div",{onClick:t.attacked||a?"":function(e){s(function(e,t,n){return{type:o,payload:{box:e,board:t,turn:n}}}(t,n,c))},className:"box "+(t.attacked?t.ship?"attackedBox":"waterBox":" "),children:Object(u.jsx)("span",{class:"positionBox",children:t.id})})},f=function(e){var t=e.configKey,n=Object(r.c)((function(e){return e.game})),c=n.boards,a=n.playerTurn,s=c.filter((function(e){return e.configKey===t}))[0];return console.log(a),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"board "+(a===t?"boardDisabled":"boardEnabled"),style:{"grid-template-columns":"1fr ".repeat(s.columns)},children:s.boxesList.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(b,{disabled:a===t,box:e,board:s,turn:a},e.id)})}))})})})},h=n(4),m=n.n(h),O=function(e,t){return{type:i,payload:{columns:e,configKey:t}}},x=function(e){var t=e.configKey,n=Object(r.b)(),a=Object(c.useRef)();Object(c.useEffect)((function(){n(O(a.current.value,t))}),[]);return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"boardSizeConfig",children:Object(u.jsxs)("select",{className:"configuration",ref:a,onChange:function(e){var c=e.target.value;n(O(c,t))},children:[Object(u.jsx)("option",{selected:!0,value:"4",children:"4 columns"}),Object(u.jsx)("option",{value:"6",children:"6 columns"}),Object(u.jsx)("option",{value:"8",children:"8 columns"})]})})})},y=function(e){var t=e.configKey;return Object(u.jsxs)("div",{className:"playerScreen",children:[Object(u.jsx)("div",{className:"configKey",children:Object(u.jsx)("h4",{children:t})}),Object(u.jsx)(f,{configKey:t})]})},g=function(){var e=Object(r.c)((function(e){return e.game})),t=e.startedGame,n=e.playerTurn,a=e.finishedGame,s=e.boards;Object(c.useEffect)((function(){a&&m.a.fire({title:n+" wins!",imageUrl:"https://picsum.photos/id/828/350/250",imageWidth:350,imageHeight:250,imageAlt:"Custom image"}).then((function(){return i(j())}))}),[a]),Object(c.useEffect)((function(){t&&m.a.fire({title:"Sink "+.25*s[0].boxesQuant+" opponent's ships to win",timer:6e3,willClose:function(){clearInterval()}})}),[t]);var i=Object(r.b)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"title",children:[" ",Object(u.jsx)("h1",{children:" BattleShip Game "}),Object(u.jsx)("button",{style:{display:t?"inline-block":"none"},className:"backButton",onClick:function(){i(j())},children:"Back"})]}),t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y,{configKey:"Player 1"}),Object(u.jsx)(y,{configKey:"Player 2"})," "]}):Object(u.jsxs)("div",{className:"container",children:[" ",Object(u.jsx)("div",{className:"chooseboard",children:Object(u.jsx)("h4",{children:"Customize your board size:"})}),Object(u.jsxs)("div",{className:"row justify-content-md-center",children:[Object(u.jsx)("div",{className:"col-sm-12 content-left",children:Object(u.jsxs)("div",{className:"content-left",children:[Object(u.jsx)("div",{className:"configKey",children:Object(u.jsx)("h4",{children:"Player 1"})})," ",Object(u.jsx)(x,{configKey:"Player 1"})]})}),Object(u.jsxs)("div",{className:"col-sm-12 content-right",children:[Object(u.jsx)("div",{className:"content-right"}),Object(u.jsx)("div",{className:"configKey",children:Object(u.jsx)("h4",{children:"Player 2"})})," ",Object(u.jsx)(x,{configKey:"Player 2"})]})]}),Object(u.jsxs)("div",{className:"row justify-content-md-center",children:[" ",Object(u.jsx)("div",{className:"col-sm-12 content-right",children:Object(u.jsx)("button",{className:"startButton"+(t?NaN:" "),onClick:function(){i({type:l})},children:"Start Game"})})]})]}),Object(u.jsx)("div",{className:t?"hidden":" ",children:Object(u.jsxs)("div",{class:"ocean",children:[Object(u.jsx)("div",{class:"wave"}),Object(u.jsx)("div",{class:"wave"})]})})]})},v=n(11),p=n(3),N=n(10);function K(e,t){return Object(N.a)(e).sort((function(){return Math.random()>.5?1:-1})).slice(0,t)}var w=[{columns:0,configKey:"Player 1",boxesList:[],boxesQuant:0},{columns:0,configKey:"Player 2",boxesList:[],boxesQuant:0}],k={boards:w,playerTurn:K(w,1)[0].configKey,startedGame:!1,finishedGame:!1},E="A B C D E F G H I J K L M N O P Q".split(" ");function G(e,t){for(var n=[],c=0;c<e;c++)for(var a=0;a<t;a++){var s={id:E[a]+(c+1),ship:!1,attacked:!1};n.push(s)}return K(n,.25*n.length).map((function(e){return e.ship=!0})),n}var B=Object(v.a)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(p.a)(Object(p.a)({},e),{},{startedGame:!0});case i:var n=t.payload.columns*t.payload.columns,c=t.payload.columns,a=t.payload.columns,s=G(a,c);return Object(p.a)(Object(p.a)({},e),{},{boards:[].concat(Object(N.a)(e.boards.filter((function(e){return e.configKey!==t.payload.configKey&&null!=e}))),[{columns:t.payload.columns,configKey:t.payload.configKey,boxesList:s,boxesQuant:n}])});case o:var r=e.boards.filter((function(e){return e.configKey===t.payload.board.configKey}))[0],j=r.boxesList.filter((function(e){return e.id===t.payload.box.id}))[0];j.attacked=!0;var u=r.boxesList.filter((function(e){return!0===e.ship&&!0===e.attacked})),b=r.boxesList.filter((function(e){return!0===e.ship}));switch(b.length===u.length&&(e.finishedGame=!0),e.playerTurn){case"Player 1":e.playerTurn="Player 2";break;case"Player 2":e.playerTurn="Player 1"}return Object(p.a)({},e);case d:return Object(p.a)(Object(p.a)({},e),{},{startedGame:!1,finishedGame:!1});default:return e}}}),P=Object(v.b)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var S="./sw.js";navigator.serviceWorker&&(window.location.href.includes("localhost")&&(S="./BattleShipGame/sw.js"),navigator.serviceWorker.register(S));var _=function(){return Object(u.jsx)(r.a,{store:P,children:Object(u.jsx)(g,{})})};s.a.render(Object(u.jsx)(_,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b2cbd0d6.chunk.js.map