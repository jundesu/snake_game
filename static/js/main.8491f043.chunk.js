(this.webpackJsonpsnake_game=this.webpackJsonpsnake_game||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(4),u=n.n(a),s=(n(9),n(2)),i=(n(10),n(0)),o=[[7,4],[6,4],[5,4]];function f(){var t=Object(c.useState)(0),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([10,10]),u=Object(s.a)(a,2),f=u[0],m=u[1],p=Object(c.useState)(o),x=Object(s.a)(p,2),g=x[0],k=x[1],w=Object(c.useState)([1,0]),S=Object(s.a)(w,2),N=S[0],E=S[1],y=Object(c.useState)(null),A=Object(s.a)(y,2),B=A[0],C=A[1],L=Object(c.useState)("fullPage"),R=Object(s.a)(L,2),M=R[0],D=R[1],F=Object(c.useState)("turnRight"),I=Object(s.a)(F,2),P=I[0],G=I[1];return d((function(){var t=g[0],e=[t[0]+N[0],t[1]+N[1]],c=g.slice(),a=e[0]===f[0]&&e[1]===f[1];if(h(e,g))return C(null),void D("fullPage");if(a){var u=v(g);r(n+1),m(u),c.unshift(e),n%3===0&&C(B-50)}else c.unshift(e),c.pop();k(c)}),B),O("keydown",(function(t){switch(t.code){case"ArrowUp":0!==N[0]&&(E([0,-1]),G("up"));break;case"ArrowDown":0!==N[0]&&(E([0,1]),G("down"));break;case"ArrowLeft":0!==N[1]&&(E([-1,0]),G("turnLeft"));break;case"ArrowRight":0!==N[1]&&(E([1,0]),G("turnRight"))}})),Object(i.jsxs)("div",{className:"game",children:[Object(i.jsx)(j,{score:n}),Object(i.jsx)(l,{snake:g,food:f,headDirectionClass:P}),Object(i.jsx)(b,{startGame:function(){D("hidden"),C(300),k(o),r(0),E([1,0]),G("turnRight")},displayStartButton:M})]})}function j(t){return Object(i.jsxs)("div",{className:"scoreBoard",children:["Score",Object(i.jsx)("span",{children:t.score})]})}function l(t){for(var e=new Array(15).fill(null),n=0;n<e.length;n++){var c=new Array(15).fill(null);e[n]=c}var r=Object(s.a)(t.food,2),a=r[0],u=r[1];return e[a][u]=1,t.snake.forEach((function(t,n){var c=Object(s.a)(t,2),r=c[0],a=c[1];e[r][a]=0===n?3:2})),Object(i.jsx)("div",{className:"board",children:e.map((function(e,n){return e.map((function(e,c){var r="".concat(n).concat(c);return 1===e?Object(i.jsx)("div",{className:"unit food"},r):2===e?Object(i.jsx)("div",{className:"unit snake"},r):3===e?Object(i.jsx)("div",{className:"unit snakeHead ".concat(t.headDirectionClass)},r):Object(i.jsx)("div",{className:"unit"},r)}))}))})}function b(t){return Object(i.jsx)("div",{className:t.displayStartButton,children:Object(i.jsx)("button",{className:"startButton",onClick:t.startGame,children:"start"})})}var d=function(t,e){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=t}),[t]),Object(c.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){return clearInterval(t)}}}),[e])},O=function(t,e){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){var e=function(t){n.current(t)};return document.addEventListener(t,e),function(){return document.removeEventListener(t,e)}}),[t])},v=function(t){for(var e=function(){var e=Math.floor(15*Math.random()),n=Math.floor(15*Math.random());if(void 0===t.find((function(t){if(t[0]===e&&t[1]===n)return!0})))return{v:[e,n]}};;){var n=e();if("object"===typeof n)return n.v}},h=function(t,e){var n=t[0]>14||t[0]<0||t[1]>14||t[1]<0,c=e.find((function(e){return e[0]===t[0]&&e[1]===t[1]}));return n||c};var m=function(){return Object(i.jsx)("div",{className:"app",children:Object(i.jsx)(f,{})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,u=e.getTTFB;n(t),c(t),r(t),a(t),u(t)}))};u.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),p()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8491f043.chunk.js.map