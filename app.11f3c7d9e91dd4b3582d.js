(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r,o=n(4),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}l((r=r.apply(e,t||[])).next())})},a=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};!function(e){var t,n=this;!function(e){e.LOAD_HIGHSCORES="LOAD_HIGHSCORES",e.ADD_HIGHSCORE="ADD_HIGHSCORE"}(t=e.Type||(e.Type={})),e.loadHighScores=function(){return function(e){return i(n,void 0,void 0,function(){return a(this,function(n){return[2,new Promise(function(n){e({type:t.LOAD_HIGHSCORES}),n()})]})})}},e.addHighScore=function(e,r,c){return function(l){return i(n,void 0,void 0,function(){return a(this,function(n){return[2,new Promise(function(n){l({type:t.ADD_HIGHSCORE,payload:{score:e,time:r,initials:c}}),l(Object(o.d)("/high-scores")),n()})]})})}}}(r||(r={}))},14:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={vapor:["#ff71ce","#01cdfe","#05ffa1","#b967ff","#fffb96"],phantom:["#135589","#272930","#3ddad7","#d1d3cf","#198967"]}},19:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var r=n(13),o=function(e,t){switch(void 0===e&&(e=[]),t.type){case r.a.Type.LOAD_HIGHSCORES:var n=localStorage.getItem("high-scores");if(n)try{return JSON.parse(n)}catch(e){}return[];case r.a.Type.ADD_HIGHSCORE:var o={initials:t.payload.initials,score:t.payload.score,time:t.payload.time},a=e.concat([o]).sort(i).slice(0,9);return localStorage.setItem("high-scores",JSON.stringify(a)),a;default:return e}},i=function(e,t){return e.score<t.score?1:e.score>t.score?-1:e.time>t.time?1:e.time<t.time?-1:0},a=function(e,t,n){var r=e.concat([{score:t,time:n,newScore:!0}]).sort(i);return r.length<10||!r[r.length-1].newScore}},22:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r,o=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},i=n(3).a.div(r||(r=o(["\n  position: absolute;\n  left: 30vw;\n  top: 20vh;\n  width: 40vw;\n  height: 60vh;\n  text-align: center;\n"],["\n  position: absolute;\n  left: 30vw;\n  top: 20vh;\n  width: 40vw;\n  height: 60vh;\n  text-align: center;\n"])))},39:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return v});var r=n(0),o=n(67),i=n(24),a=n(9),c=n(49),l=n(10),u=n(40),s=n(41),f=n(50),p=n(51),h=n(47),d=n(48),g=n(68),m=n(20),v=(n(64),Object(c.hot)(e)(Object(a.c)(function(e){return{color:e.game.background}})(function(e){var t=e.color;return r.createElement("div",null,r.createElement("header",null),r.createElement("main",null,r.createElement(u.a,{style:{position:"fixed",width:"100vw",height:"100vh",zIndex:"-1"}}),r.createElement(l.a,null,r.createElement(d.a,{color:m(t).darken(1).hex(),key:"background"})),r.createElement(g.a,null,r.createElement(o.a,null,r.createElement(i.a,{exact:!0,path:"/",component:s.a}),r.createElement(i.a,{path:"/settings",component:p.a}),r.createElement(i.a,{path:"/high-scores",component:h.a}),r.createElement(i.a,{path:"/game",component:f.a})))))})))}).call(this,n(32)(e))},41:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r,o,i=n(0),a=n(7),c=n(9),l=n(52),u=n(8),s=n(22),f=n(3),p=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},h=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},g=f.a.div(o||(o=p(["\n  margin-top: 5vh;\n  color: black;\n  text-decoration: none;\n  marginRight: 2vw;\n"],["\n  margin-top: 5vh;\n  color: black;\n  text-decoration: none;\n  marginRight: 2vw;\n"]))),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return h(t,e),t.prototype.render=function(){var e=this.props.actions.newGame;return i.createElement(s.a,null,i.createElement("h1",null,"A game of squares"),i.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},i.createElement(g,{id:"newGame",onClick:function(t){e()}},"New game"),i.createElement(l.a,{to:"/settings",style:{marginRight:"1vw",marginLeft:"1vw"}},i.createElement(g,null,"Settings")),i.createElement(l.a,{to:"/high-scores"},i.createElement(g,null,"Scores"))))},t=d([Object(c.c)(null,function(e){return{actions:Object(a.bindActionCreators)({newGame:u.a.newGame},e)}})],t)}(i.Component)},44:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAmRJREFUSA2dlT2PTVEUhu8wE98Rnc/iFjqJgkTmL1AQnSg0SDSi8ANkEg2FhtAq0OgkEgWFMZVKFAYRERkkCI1vYzzPvec9OefMvXdOZiXPWXuvvdZea6+zz71jnXYyhltIxD8GC5ksV7vpOKwYsMGotQHui00rMblJG9FXaZ5y6AYGzPdCOp316EnYC9vBtY/wBGbgPSgT8Kc3WuKRanQ7DI/gL9jvJrPYzsAaUGxlF2yrsqgD2dyF89DccNj8Nr4b4TRchmycRJj6R+8NeExBc7M5bNNwH6y8uf64sN1AR1Jw7eUcYLUa/J35BdgFa2EVbINT8BL0tfeJucY4UibIUQy+B3H+yfh4vAfondiegf5fCn0VHSkT5J57W75BElyJJ3o16GeQBTk+BhYRf/VNiIzH0a9S2Q22QfkKt3qjflvcSHFjr/AeOAov4DNo3wRe38iCCfLGNW7OCvodvC7m+Sacppg3jHOCicLuWgph2Jk3wXLEoj61CfRY9i3yIQP0VugW8/JlFXNjrNr4DeAN84JEyq4YqHMSGXQE1L5Uj3sXbJFzW2BwTq79IFyHffAbbO0vKJMwLgMGXdMTOgwRL8UsWKS8hS4otVObLRn3M06A2g/tItiGdWARO+AkvAJ9fhT6EjpSS6CxajjHvJrE8RxMwwOoVm2bXPcDzRVPCzHVpZpkiqVmkmHzO/huKbaq7lHffYDDIWwPofpbU03ynLWzkMq9LGk1w8akZ+k/rMKjK/Z9Epp/OE+xzYC3RjHGW2YBrcSAWjUjopZsy7BYE/jCPHpTRq2Vvm0r1C8kuFU7/gPODaVycBLR4gAAAABJRU5ErkJggg=="},45:function(e,t){e.exports="data:image/png;base64,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"},47:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r,o,i=n(0),a=n(9),c=n(7),l=n(10),u=n(3),s=n(8),f=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},d=u.a.div(o||(o=f(["\n  margin: 0 auto;\n  margin-top: 10vh;\n  width: 80vw;\n  max-width: 72vh;\n  height: 80vw;\n  max-height: 72vh;\n  text-align: center;\n"],["\n  margin: 0 auto;\n  margin-top: 10vh;\n  width: 80vw;\n  max-width: 72vh;\n  height: 80vw;\n  max-height: 72vh;\n  text-align: center;\n"]))),g=l.b.li({preenter:{opacity:0,x:-100},enter:{opacity:1,delay:function(e){return 650*e.delay+200},x:0}}),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.highScores,n=e.goHome;return i.createElement(d,null,i.createElement("h1",null,"Hall of Fame"),i.createElement("ul",null,i.createElement(l.a,{animateOnMount:!0,preEnterPose:"preenter"},t.map(function(e,t){return i.createElement(g,{delay:t+1,key:t},e.initials.toUpperCase()," - ",e.score,"pts @ ",e.time,"s")}))),i.createElement("div",{style:{display:"block",marginTop:"5vh",textAlign:"center"},onClick:function(e){n()}},"Back"))},t=h([Object(a.c)(function(e){return{highScores:e.highScores}},function(e){return Object(c.bindActionCreators)({goHome:s.a.goHome},e)})],t)}(i.Component)},48:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r,o=n(10),i=n(3),a=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},c=Object(i.a)(o.b.div({enter:{background:function(e){return e.color},transition:{default:{ease:"easeOut",duration:700}}}}))(r||(r=a(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -2;\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -2;\n"])))},50:function(e,t,n){"use strict";var r,o,i,a,c,l,u,s,f,p,h,d,g=n(0),m=n(7),v=n(9),y=n(8),b=n(13),w=n(10),A=n(3),E=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},O=Object(A.a)(w.b.div({enter:{opacity:1},exit:{opacity:0}}))(r||(r=E(["\n    margin: 0 auto;\n    margin-top: 10vh;\n    width: 80vw;\n    max-width: 72vh;\n    height: 80vw;\n    max-height: 72vh;\n    font-size: 1rem;\n    ","\n"],["\n    margin: 0 auto;\n    margin-top: 10vh;\n    width: 80vw;\n    max-width: 72vh;\n    height: 80vw;\n    max-height: 72vh;\n    font-size: 1rem;\n    ","\n"])),function(e){return"box-shadow: 20px 20px "+(e.lost?"transparent":"rgba(10,10,10, 0.4)")+";"}),j=A.a.div(o||(o=E(["\n    display: flex;\n"],["\n    display: flex;\n"]))),C=Object(A.a)(w.b.div({pressable:!0,init:{scale:1},press:{scale:.9,transition:{default:{ease:"easeOut",duration:400}}}}))(i||(i=E(["\n    margin: 2px;\n    color: white;\n    font-weight: bold;\n    flex: 1 0 auto;\n    position: relative;\n    ",'\n    :after {\n        content: "";\n        float:left;\n        display: block;\n        padding-top: 100%;\n    }\n'],["\n    margin: 2px;\n    color: white;\n    font-weight: bold;\n    flex: 1 0 auto;\n    position: relative;\n    ",'\n    :after {\n        content: "";\n        float:left;\n        display: block;\n        padding-top: 100%;\n    }\n'])),function(e){return"\n        box-shadow: 3px 3px "+(e.lost?"transparent":"black")+";\n        background: "+e.color+";\n    "}),k=function(e){var t=e.lost,n=e.grid,r=e.clickPanel,o=e.answer,i=void 0===o?[]:o;return g.createElement(O,{lost:t},n.map(function(e,n){return g.createElement(j,{key:n},e.map(function(e,o){return g.createElement(C,{id:i.join(",")===o+","+n?"correct":null,key:n+","+o,color:e,lost:t,onClick:function(e){r(n,o)}})}))}))},S=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},G=A.a.div(a||(a=S(["\n  position: absolute;\n  width: 22vh;\n  height: 22vh;\n  right: 3vh;\n  bottom: 3vh;\n  border-radius: 50%;\n  background: white;\n"],["\n  position: absolute;\n  width: 22vh;\n  height: 22vh;\n  right: 3vh;\n  bottom: 3vh;\n  border-radius: 50%;\n  background: white;\n"]))),I=A.a.div(c||(c=S(["\n  position: absolute;\n  width: 16vh;\n  height: 16vh;\n  right: 22vh;\n  bottom: 3vh;\n  border-radius: 50%;\n  background: white;\n"],["\n  position: absolute;\n  width: 16vh;\n  height: 16vh;\n  right: 22vh;\n  bottom: 3vh;\n  border-radius: 50%;\n  background: white;\n"]))),P=A.a.div(l||(l=S(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n"],["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n"]))),T=n(29),x=n.n(T),D=(u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),R=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return D(t,e),t.prototype.componentDidMount=function(){var e=this;this.timer=setInterval(function(){e.props.lost||e.forceUpdate()},1e3)},t.prototype.componentWillUnmount=function(){clearInterval(this.timer)},t.prototype.render=function(){var e=this.props,t=e.score,n=e.starttime,r=n?Math.floor((Date.now()-n)/1e3):0;return g.createElement(g.Fragment,null,g.createElement(I,null,g.createElement(x.a,{compressor:.6},g.createElement(P,null,r,"s"))),g.createElement(G,null,g.createElement(x.a,{compressor:.6},g.createElement(P,{id:"score"},t,"pts"))))},t}(g.Component),N=n(44),H=n.n(N),L=n(45),_=n.n(L),z=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},M=A.a.div(s||(s=z(["\n    position: absolute;\n    right: 1vw;\n    top: 1vh;\n    width: 3vw;\n    height: 3vh;\n"],["\n    position: absolute;\n    right: 1vw;\n    top: 1vh;\n    width: 3vw;\n    height: 3vh;\n"]))),U=function(e){var t=e.newGame,n=e.goHome;return g.createElement(g.Fragment,null,g.createElement(M,null,g.createElement("img",{src:_.a,alt:"Close",onClick:function(e){e.preventDefault(),t(),n()}}),g.createElement("img",{src:H.a,alt:"Refresh",onClick:function(e){e.preventDefault(),t()}})))},B=n(46),J=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},W=A.a.div(f||(f=J(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  font-weight: bold;\n  font-size: 6vw;\n"],["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  font-weight: bold;\n  font-size: 6vw;\n"]))),Z={exit:{opacity:.8,y:70},enter:{opacity:1,y:0,delay:function(e){return 30*e.charIndex+30*Math.random()},transition:{ease:"backOut",duration:700,flip:1e3}}},Y=function(){return g.createElement(W,null,g.createElement(B.a,{initialPose:"exit",pose:"enter",charPoses:Z},"New high score!!"))},X=A.a.div(p||(p=J(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  font-size: 3vw;\n"],["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  font-size: 3vw;\n"]))),F=A.a.input.attrs({type:"text",size:3,maxLength:3,autoFocus:!0,placeholder:"BOB"})(h||(h=J(["\n  background-color: transparent;\n  font-size: 3vw;\n"],["\n  background-color: transparent;\n  font-size: 3vw;\n"]))),K=function(e){var t=e.score,n=e.time,r=e.addHighScore;return g.createElement(g.Fragment,null,g.createElement(Y,null),g.createElement(X,null,g.createElement("p",null,"Enter your initials:"),g.createElement(F,{onKeyDown:function(e){"Enter"===e.key&&e.target.value&&(e.preventDefault(),r(t,n,e.target.value))}})))},V=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},q=Object(A.a)(w.b.div({enter:{opacity:1},exit:{opacity:0}}))(d||(d=V(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  font-weight: bold;\n  font-size: 10rem;\n"],["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  font-weight: bold;\n  font-size: 10rem;\n"])));n.d(t,"a",function(){return ee});var Q=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),$=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ee=function(e){function t(t){var n=e.call(this,t)||this;return t.started||t.newGame(),n}return Q(t,e),t.prototype.render=function(){var e=this.props,t=e.started,n=e.grid,r=e.answer,o=e.clickPanel,i=e.lost,a=e.score,c=e.startTime,l=e.newGame,u=e.goHome,s=e.outcome,f=e.addHighScore;return t?g.createElement(g.Fragment,null,g.createElement(k,{grid:n,answer:r,clickPanel:o,lost:i,key:"grid"}),g.createElement(R,{score:a,starttime:c,lost:i}),"DEFEAT"===s?g.createElement(q,null,"You lose!"):null,"HIGH_SCORE"===s?g.createElement(K,{addHighScore:f,score:a,time:Math.floor((Date.now()-(c||0))/1e3)}):null,g.createElement(U,{newGame:l,goHome:u})):null},t=$([Object(v.c)(function(e){var t=e.game;return{score:t.score,level:t.level,grid:t.grid,answer:t.answer,lost:t.lost,started:t.started,startTime:t.startTime,outcome:t.outcome,background:t.background}},function(e){return Object(m.bindActionCreators)({newGame:y.a.newGame,goHome:y.a.goHome,clickPanel:y.a.clickPanel,addHighScore:b.a.addHighScore},e)})],t)}(g.Component)},51:function(e,t,n){"use strict";var r=n(0),o=n(7),i=n(9),a=n(8),c=n(14),l=Object.keys(c.a),u=function(e){var t=e.theme,n=e.setBackground;return r.createElement(r.Fragment,null,r.createElement("div",{style:{marginBottom:"2vh"}},"theme:",t),r.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},c.a[t].map(function(e){return r.createElement("div",{key:e,style:{width:"5vw",height:"5vw",marginRight:"1vw",float:"left",background:e}})})),r.createElement("div",{style:{width:"100%",display:"block",paddingTop:"2vh"}},r.createElement("div",{style:{float:"left"},onClick:function(e){e.preventDefault();var r=l.indexOf(t)-1,o=l[-1===r?l.length-1:r];n(o)}},"Previous"),r.createElement("div",{style:{float:"right"},onClick:function(e){e.preventDefault();var r=l.indexOf(t)+1,o=l[r===l.length?0:r];console.log(t,l),n(o)}},"Next")))},s=n(22);n.d(t,"a",function(){return d});var f,p=(f=function(e,t){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props.actions,t=e.setBackground,n=e.goHome,o=this.props.theme;return r.createElement(s.a,null,r.createElement("h1",null,"Settings"),r.createElement(u,{theme:o,setBackground:t}),r.createElement("div",{style:{marginTop:"7vh",textAlign:"center"},onClick:function(e){n()}},"Back"))},t=h([Object(i.c)(function(e){return{theme:e.game.theme}},function(e){return{actions:Object(o.bindActionCreators)({setBackground:a.a.setBackground,goHome:a.a.goHome},e)}})],t)}(r.Component)},64:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r,o=n(0),i=n(15),a=n(9),c=n(7),l=(n(61),n(36)),u=n(33),s=function(e){return function(e){return function(t){return e(t)}}},f=n(19),p=n(8),h=n(14),d=n(20),g=function(e){return Math.floor(Math.random()*e)},m=function(e,t,n){n||(n=e[0]);var r=e.filter(function(e){return e!==n}),o=r[g(r.length)],i=d(o).saturate(3).hex(),a=[g(t+1),g(t+1)];return{answer:a,baseColor:o,alternateColor:i,grid:function(e,t,n,r,o){return Array(e+1).fill(0).map(function(i,a){return Array(e+1).fill(0).map(function(e,i){return i===t&&a===n?o:r})})}(t,a[0],a[1],o,i)}},v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},y={theme:"vapor",started:!1,lost:!1,level:1,score:0,background:h.a.vapor[0]},b=function(e,t){void 0===e&&(e=y);var n=h.a[e.theme];switch(t.type){case p.a.Type.NEW_GAME:return v({theme:e.theme,started:!0,lost:!1,level:1,score:0,background:n[0],startTime:Math.round((new Date).getTime())},m(n,1,n[0]));case p.a.Type.CLICK_PANEL:return e.answer&&e.baseColor?t.payload.join(",")!==e.answer.join(",")||e.lost?e.grid?v({},e,{grid:e.grid.map(function(n,r){return n.map(function(n,o){return t.payload.join(",")===[o,r].join(",")?"red":e.answer&&e.answer.join(",")===[o,r].join(",")?n:"transparent"})}),lost:!0}):e:v({},e,{level:e.level+1,score:e.score+1,background:e.alternateColor||"transparent"},m(n,e.level+1,e.baseColor)):e;case p.a.Type.SET_BACKGROUND:var r=h.a[t.color][0];return v({},e,{theme:t.color,background:r});case p.a.Type.SET_OUTCOME:return v({},e,{outcome:t.outcome});default:return e}};!function(e){var t;!function(e){e.LOAD_SETTINGS="LOAD_SETTINGS",e.TOGGLE_SETTING="TOGGLE_SETTING",e.SET_SETTING="SET_SETTING"}(t=e.Type||(e.Type={})),e.loadSettings=function(){return{type:t.LOAD_SETTINGS}},e.toggleSetting=function(e){return{type:t.TOGGLE_SETTING,setting:e}},e.setSetting=function(e,n){return{type:t.SET_SETTING,setting:e,value:n}}}(r||(r={}));var w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},A={theme:"vapor",music:!0,effects:!0},E=function(e,t){var n,o,i;switch(void 0===e&&(e=A),t.type){case r.Type.LOAD_SETTINGS:var a=localStorage.getItem("settings");if(a)try{return JSON.parse(a)}catch(e){}return[];case r.Type.TOGGLE_SETTING:return i=w({},e,((n={})[t.setting]=!e[t.setting],n)),localStorage.setItem("settings",JSON.stringify(i)),i;case r.Type.SET_SETTING:return i=w({},e,((o={})[t.setting]=t.value,o)),localStorage.setItem("settings",JSON.stringify(i)),i;default:return e}},O=n(12),j=function(e){return Object(c.combineReducers)({router:Object(O.b)(e),highScores:f.b,game:b,settings:E})},C=n(13),k=function(e){e(C.a.loadHighScores())},S=n(17),G=Object(S.a)({hashType:"slash"});var I,P,T,x=n(39),D=(P=Object(c.applyMiddleware)(Object(u.a)(G),l.a,s),T=Object(c.createStore)(j(G),I,P),k(T.dispatch),T);i.render(o.createElement(a.a,{store:D},o.createElement(O.a,{history:G},o.createElement(x.a,null))),document.getElementById("root"))},8:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r,o=n(4),i=n(19),a=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}l((r=r.apply(e,t||[])).next())})},c=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};!function(e){var t,n=this;!function(e){e.NEW_GAME="NEW_GAME",e.CLICK_PANEL="CLICK_PANEL",e.SET_OUTCOME="SET_OUTCOME",e.SET_BACKGROUND="SET_BACKGROUND"}(t=e.Type||(e.Type={})),e.setOutcome=function(e){return{type:t.SET_OUTCOME,outcome:e}},e.setBackground=function(e){return{type:t.SET_BACKGROUND,color:e}},e.goHome=function(){return Object(o.d)("/")},e.newGame=function(){return function(e){return a(n,void 0,void 0,function(){return c(this,function(n){return[2,new Promise(function(n){e({type:t.NEW_GAME}),e(Object(o.d)("/game"))})]})})}},e.clickPanel=function(e,r){return function(o,l){return a(n,void 0,void 0,function(){return c(this,function(n){return[2,new Promise(function(n){o({type:t.CLICK_PANEL,payload:[r,e]});var a=l().game,c=a.lost,u=a.score,s=a.elapsed;c&&setTimeout(function(){var e=Object(i.a)(l().highScores,u,s)?"HIGH_SCORE":"DEFEAT";o({type:t.SET_OUTCOME,outcome:e})},1e3)})]})})}}}(r||(r={}))}},[[66,1,2]]]);