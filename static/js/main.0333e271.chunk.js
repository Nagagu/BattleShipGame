(this["webpackJsonpjuego-hundirbarcos"]=this["webpackJsonpjuego-hundirbarcos"]||[]).push([[0],{12:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(3),r=n.n(o),a=(n(12),n(2)),i="[Config] BoxesBoard",s="[Interaction] BoxStatesOnClick",l=n(1),u=function(e){var t=e.box,n=e.board,c=e.turn,o=e.disabled,r=Object(a.b)();return Object(l.jsx)("div",{onClick:t.attacked||o?"":function(e){r(function(e,t,n){return{type:s,payload:{box:e,board:t,turn:n}}}(t,n,c))},className:"box "+(t.attacked?t.ship?"attackedBox":"waterBox":" "),children:Object(l.jsx)("span",{class:"positionBox",children:t.id})})},d=function(e){var t=e.configKey,n=Object(a.c)((function(e){return e.config})),c=n.boards,o=n.playerTurn,r=c.filter((function(e){return e.configKey===t}))[0];return console.log(o),Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"board "+(o===t?"boardDis":""),style:{"grid-template-columns":"1fr ".repeat(r.columns)},children:r.boxesList.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(u,{disabled:o===t,box:e,board:r,turn:o},e.id)})}))})})})},b=function(e,t){return{type:i,payload:{columns:e,configKey:t}}},f=function(e){var t=e.configKey,n=Object(a.b)(),o=Object(c.useRef)();Object(c.useEffect)((function(){n(b(o.current.value,t))}),[]);return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"boardSizeConfig",children:[Object(l.jsx)("h4",{children:"Choose a board size:"}),Object(l.jsxs)("select",{className:"configuration",ref:o,onChange:function(e){var c=e.target.value;n(b(c,t))},children:[Object(l.jsx)("option",{value:"0",children:"None"}),Object(l.jsx)("option",{selected:!0,value:"4",children:"4 boxes"}),Object(l.jsx)("option",{value:"8",children:"8 boxes"}),Object(l.jsx)("option",{value:"16",children:"16 boxes"})]})]})})},j=function(e){var t=e.configKey;return Object(l.jsxs)("div",{className:"playerScreen",children:[Object(l.jsx)("h4",{children:t}),Object(l.jsx)(f,{configKey:t}),Object(l.jsx)(d,{configKey:t})]})},x=n(4),y=n.n(x),h=function(){return Object(c.useEffect)((function(){y.a.fire({title:"Ready?, Go!",timer:2e3,willClose:function(){clearInterval()}})}),[]),Object(l.jsxs)("div",{className:"gameScreen",children:[Object(l.jsxs)("div",{className:"title",children:[" ",Object(l.jsx)("h1",{children:" BattleShip Game "})]}),Object(l.jsx)(j,{configKey:"Player 1"}),Object(l.jsx)(j,{configKey:"Player 2"})]})},O=n(11),p=n(5),g=n(10);function m(e,t){return Object(g.a)(e).sort((function(){return Math.random()>.5?1:-1})).slice(0,t)}var v=[{columns:0,configKey:"Player 1",boxesList:[],boxesQuant:0},{columns:0,configKey:"Player 2",boxesList:[],boxesQuant:0}],K={boards:v,playerTurn:m(v,1)[0].configKey},N="A B C D E F G H I J K L M N O P Q".split(" ");function E(e,t){for(var n=[],c=0;c<e;c++)for(var o=0;o<t;o++){var r={id:N[o]+(c+1),ship:!1,attacked:!1};n.push(r)}return m(n,2*t).map((function(e){return e.ship=!0})),console.log(n),n}var _=Object(O.a)({config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n=t.payload.columns*t.payload.columns,c=t.payload.columns,o=t.payload.columns,r=E(o,c);return Object(p.a)(Object(p.a)({},e),{},{boards:[].concat(Object(g.a)(e.boards.filter((function(e){return e.configKey!==t.payload.configKey&&null!=e}))),[{columns:t.payload.columns,configKey:t.payload.configKey,boxesList:r,boxesQuant:n}])});case s:var a=e.boards.filter((function(e){return e.configKey===t.payload.board.configKey}))[0],l=a.boxesList.filter((function(e){return e.id===t.payload.box.id}))[0];l.attacked=!0;var u=a.boxesList.filter((function(e){return!0===e.ship&&!0===e.attacked})),d=a.boxesList.filter((function(e){return!0===e.ship}));switch(d.length===u.length&&y.a.fire({title:"You win!",imageUrl:"https://picsum.photos/id/828/350/250",imageWidth:350,imageHeight:250,imageAlt:"Custom image"}),e.playerTurn){case"Player 1":e.playerTurn="Player 2";break;case"Player 2":e.playerTurn="Player 1"}return Object(p.a)({},e);default:return e}}}),k=Object(O.b)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var w=function(){return Object(l.jsx)(a.a,{store:k,children:Object(l.jsx)(h,{})})};r.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0333e271.chunk.js.map