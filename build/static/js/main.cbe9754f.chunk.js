(this.webpackJsonpbuzzer=this.webpackJsonpbuzzer||[]).push([[0],{10:function(e,t,n){e.exports={PlayersGame:"PlayersGame_PlayersGame__3XN8S",Answering:"PlayersGame_Answering__3B4Kk",BuzzButton:"PlayersGame_BuzzButton__2xJ_G",WaitForQuestion:"PlayersGame_WaitForQuestion__1P6LZ"}},16:function(e,t,n){e.exports={HostScreen:"HostScreen_HostScreen__2cMzp",CodeDisplay:"HostScreen_CodeDisplay__2RKXA",PlayersList:"HostScreen_PlayersList__2tAi-"}},2:function(e,t,n){e.exports={HostsGame:"HostsGame_HostsGame__7yLPM",NameButton:"HostsGame_NameButton__3zfE0",AnswerCheck:"HostsGame_AnswerCheck__3W-U9",slidein:"HostsGame_slidein__3sBdz",fontgrow:"HostsGame_fontgrow__1RhVV",RightWrongButtons:"HostsGame_RightWrongButtons__2n5Ja",TimeLimitInput:"HostsGame_TimeLimitInput__1otnk",Timer:"HostsGame_Timer__323aG",NameList:"HostsGame_NameList__31of2",GoodJob:"HostsGame_GoodJob__3IwFM",LeaderBoard:"HostsGame_LeaderBoard__P5Ttn"}},25:function(e,t,n){e.exports={HostNav:"HostNav_HostNav__17Z_h",EndButton:"HostNav_EndButton__-lbC4"}},43:function(e,t,n){e.exports={StartButton:"StartButton_StartButton__1O8aZ"}},44:function(e,t,n){e.exports={genericButt:"GenericButton_genericButt__ju7Mb"}},45:function(e,t,n){e.exports={StartScreen:"StartScreen_StartScreen__2YFVK"}},47:function(e,t,n){e.exports=n(86)},52:function(e,t,n){},54:function(e,t,n){},6:function(e,t,n){e.exports={JoinScreen:"JoinScreen_JoinScreen__Qcczc",NumberDisplay:"JoinScreen_NumberDisplay__2L9EC",NumberPad:"JoinScreen_NumberPad__1s5_A",NameInput:"JoinScreen_NameInput__o28uR"}},83:function(e,t){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(42),o=n.n(c),l=(n(52),n(4)),s=n.n(l),i=n(5),u=n(7),m=n(1),d=n(2),f=n.n(d);function b(e){return r.a.createElement("div",{className:f.a.AnswerCheck},r.a.createElement("h1",null,e.answer),r.a.createElement("div",{className:f.a.RightWrongButtons},r.a.createElement("button",{onClick:function(){e.handleAnswer(1)}},r.a.createElement("span",{role:"img","aria-label":"CORRECT"},"\ud83d\ude46\u200d\u2640\ufe0f")),r.a.createElement("button",{onClick:function(){e.handleAnswer(-1)}},r.a.createElement("span",{role:"img","aria-label":"WRONG"},"\ud83d\ude45\u200d\u2640\ufe0f"))))}var p=n(43),E=n.n(p);function g(e){return r.a.createElement("button",{className:E.a.StartButton,onClick:e.handleClick},e.text)}function j(e){return r.a.createElement("div",null,r.a.createElement("h1",{style:{userSelect:"none"}},"Question number: ",e.questionNumber),r.a.createElement("label",{htmlFor:"time-limit-input",style:{fontSize:"22px",userSelect:"none"}},"Time limit: \xa0"),r.a.createElement("input",{className:f.a.TimeLimitInput,name:"time-limit-input",type:"number",min:"5",onChange:function(t){e.setTimeLimit(t.target.value),e.setTimeLeft(t.target.value)},defaultValue:e.timeLimit}),r.a.createElement(g,{handleClick:e.allowAnswers,text:"\u2728Get Answers\u2728"}))}function h(e){return r.a.createElement("div",null,r.a.createElement("div",{className:f.a.Timer},r.a.createElement("h1",null,"Time remaining:\xa0"),r.a.createElement("span",null,e.timeLeft)),r.a.createElement("ol",{className:f.a.NameList},e.buzzes))}function O(e){var t=Object(a.useState)({x:null,y:null}),n=Object(m.a)(t,2),c=n[0],o=n[1],l=Object(a.useRef)(),s=e.leaderBoard.map((function(e){return r.a.createElement("li",{key:"".concat(e).concat(Math.floor(Math.random()))},e)}));return r.a.createElement("div",{ref:l,draggable:!0,className:f.a.LeaderBoard,onDragEnd:function(e){o({x:e.clientX,y:e.clientY})},style:{top:"".concat(c.y,"px"),left:"".concat(c.x,"px")}},r.a.createElement("button",{className:f.a.closer,onClick:e.close},"\xd7"),r.a.createElement("h2",null,"Leaders"),r.a.createElement("ul",null,s))}var v=n(25),w=n.n(v),S=n(44),_=n.n(S);function C(e){return r.a.createElement("button",{className:_.a.genericButt,onClick:function(){e.handleClick()}},e.text)}function y(e){var t=Object(a.useContext)(X);return r.a.createElement("nav",{className:w.a.HostNav},r.a.createElement("button",{className:w.a.EndButton,onClick:function(){e.endGame(t)}},"END GAME"),r.a.createElement(C,{text:"Show leader board\ud83e\udd4a",handleClick:function(){e.setShowLeaderBoard(!0)}}),e.questionTime&&r.a.createElement(C,{text:"Next question\u2728",handleClick:e.goToNext}),e.showAnswerCheck&&r.a.createElement(C,{text:"Next question\u2728",handleClick:e.goToNext}),e.showTimer&&r.a.createElement(C,{text:"Skip\u2728",handleClick:e.skipQuestion}))}var N=0;function k(e){var t=Object(a.useState)(null),n=Object(m.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(null),s=Object(m.a)(l,2),i=(s[0],s[1]),d=Object(a.useState)(!0),p=Object(m.a)(d,2),E=p[0],g=p[1],v=Object(a.useState)(30),w=Object(m.a)(v,2),S=w[0],_=w[1],C=Object(a.useState)(30),k=Object(m.a)(C,2),x=k[0],z=k[1],B=Object(a.useState)(!1),G=Object(m.a)(B,2),T=G[0],L=G[1],H=Object(a.useState)(!1),A=Object(m.a)(H,2),P=A[0],J=A[1],R=Object(a.useState)(0),D=Object(m.a)(R,2),W=D[0],I=D[1],M=Object(a.useState)(1),F=Object(m.a)(M,2),q=F[0],Q=F[1],K=Object(a.useState)(!1),Z=Object(m.a)(K,2),V=Z[0],U=Z[1],X=Object(a.useState)(!1),$=Object(m.a)(X,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(m.a)(ne,2),re=ae[0],ce=ae[1],oe=Object(a.useState)(!1),le=Object(m.a)(oe,2),se=le[0],ie=le[1];function ue(){if(Date.now()-W+900<1e3*S&&!N){var e=Math.floor(.001*(1e3*S-(Date.now()-W)));z(e),requestAnimationFrame(ue)}else L(!1),U(!0),de(),N=0}Object(a.useEffect)((function(){T&&ue()}),[W]),Object(a.useEffect)((function(){0===x&&z(S)}),[x]),Object(a.useEffect)((function(){V&&0===e.buzzes.length&&J(!0)}),[V]);var me=function(t){var n=Object(u.a)(e.buzzes),a=n.shift();e.setBuzzes(n),o(null),Y.emit("givePoints",e.gameCode,a,t),t<0?(be(),e.failSound.play()):(fe(),e.successSound.play())},de=function(){Y.emit("checkingAnswers",e.gameCode)},fe=function(){te(!0),setTimeout((function(){te(!1)}),1500)},be=function(){ce(!0),setTimeout((function(){ce(!1)}),1500)},pe=e.buzzes.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("button",{className:f.a.NameButton,onClick:function(){var t,n;t=e.answer,n=e.name,o(t),i(n),console.log(t),T&&(N=1,U(!0),z(0),L(!1),g(!1),de())}},e.name))}));return r.a.createElement("div",{className:f.a.HostsGame},r.a.createElement(y,{endGame:e.endGame,goToNext:function(){N=1,Q(q+1),e.setBuzzes([]),z(0),L(!1),g(!0),U(!1),o(null),J(!1),Y.emit("goToNext",e.gameCode)},setShowLeaderBoard:ie,skipQuestion:function(){N=1,U(!0),z(0),L(!1),g(!1),de()},questionTime:E,showAnswerCheck:V,showTimer:T}),E&&r.a.createElement(j,{questionNumber:q,allowAnswers:function(){N=0,g(!1),e.allowAnswers(),e.beginHost(),z(S),L(!0),I(Date.now())},timeLimit:S,setTimeLeft:z,setTimeLimit:_}),T&&r.a.createElement(h,{timeLeft:x,buzzes:pe}),c&&r.a.createElement(b,{answer:c,handleAnswer:me}),""===c&&r.a.createElement(b,{answer:c,handleAnswer:me}),V&&e.buzzes.length>0&&r.a.createElement("ol",null,pe),V&&P&&r.a.createElement("div",null,r.a.createElement("h1",null,"Nobody answered!",r.a.createElement("span",{role:"img","aria-label":""},"\ud83d\ude2d"))),ee&&r.a.createElement("div",{className:f.a.GoodJob},r.a.createElement("img",{style:{borderRadius:"10px"},alt:"Good job!",src:"images/goodjob.gif"})),re&&r.a.createElement("div",{className:f.a.GoodJob},r.a.createElement("img",{style:{borderRadius:"10px"},alt:"Oh no!",src:"images/ohno.gif"})),se&&r.a.createElement(O,{leaderBoard:e.leaderBoard,close:function(){ie(!1)}}))}var x=n(10),z=n.n(x);function B(e){var t=Object(a.useState)(!0),n=Object(m.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),s=Object(m.a)(l,2),i=s[0],u=s[1],d=Object(a.useState)(!1),f=Object(m.a)(d,2),b=f[0],p=f[1],E=Object(a.useState)(!1),g=Object(m.a)(E,2),j=g[0],h=g[1],O=Object(a.useState)(!1),v=Object(m.a)(O,2),w=v[0],S=v[1],_=Object(a.useRef)(null);Object(a.useEffect)((function(){Y.on("goToNext",(function(){console.log("go to next"),o(!0),h(!1),p(!1),S(!1)})),Y.on("allowAnswers",(function(){console.log("allow answers"),p(!0),h(!1),S(!1),console.log("You may answer now"),o(!1)})),Y.on("checkingAnswers",(function(){console.log("check answers"),S(!0),h(!1),p(!1),o(!1)}))}),[]),Object(a.useEffect)((function(){b&&!j&&_.current.focus()}));return r.a.createElement("div",{className:z.a.PlayersGame},b&&!j&&r.a.createElement("div",{className:z.a.Answering},r.a.createElement("textarea",{ref:_,placeholder:"Type your answer here. \u2728",onChange:function(e){u(e.target.value)}}),r.a.createElement(G,{buzz:function(){e.buzz(i),h(!0)}})),c&&r.a.createElement("div",{className:z.a.WaitForQuestion},r.a.createElement("h1",null,"Listen carefully to the question!"," ",r.a.createElement("span",{role:"img","aria-label":"LISTEN!"},"\ud83d\udc42")),r.a.createElement("img",{alt:"\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42",src:"/images/listen.gif"})),j&&r.a.createElement("img",{alt:"One moment please...\u2728",src:"/images/waiting.gif",style:{width:"50vh"}}),w&&r.a.createElement("img",{style:{width:"50vw"},src:"/images/anticipation.gif",alt:"Checking the answers...\ud83d\udc96\ud83c\udf08"}))}function G(e){return r.a.createElement("button",{onClick:e.buzz,className:z.a.BuzzButton},"BUZZ")}var T=n(6),L=n.n(T);function H(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current.focus()}),[t]),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("form",{onSubmit:e.joinWithName},r.a.createElement("input",{ref:t,onChange:e.updateName,className:L.a.NameInput,maxLength:"15"})),r.a.createElement(C,{text:"Join",handleClick:e.joinWithName}))}var A=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),alert(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={method:"post",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},e.next=4,fetch(t,a);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}();function J(e){var t=function(t){var n=parseInt(t.target.innerText);e.enteredCode.length<6&&e.setEnteredCode("".concat(e.enteredCode).concat(n))},n=function(t){if("OK"===t.target.innerText)6===e.enteredCode.length?e.join(e.enteredCode):alert("You must enter at least 6 numbers\u2763\ufe0f\u2728");else{var n=e.enteredCode.slice(0,-1);e.setEnteredCode(n)}};return r.a.createElement("div",{className:L.a.NumberPad},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{onClick:t},"1"),r.a.createElement("td",{onClick:t},"2"),r.a.createElement("td",{onClick:t},"3")),r.a.createElement("tr",null,r.a.createElement("td",{onClick:t},"4"),r.a.createElement("td",{onClick:t},"5"),r.a.createElement("td",{onClick:t},"6")),r.a.createElement("tr",null,r.a.createElement("td",{onClick:t},"7"),r.a.createElement("td",{onClick:t},"8"),r.a.createElement("td",{onClick:t},"9")),r.a.createElement("tr",null,r.a.createElement("td",{onClick:n,style:{fontSize:"4vh"}},"\u2b05"),r.a.createElement("td",{onClick:t},"0"),r.a.createElement("td",{onClick:n,style:{fontSize:"4vh"}},"OK")))))}function R(e){return r.a.createElement("div",{className:L.a.NumberDisplay},r.a.createElement("span",null,e.enteredCode[0]?"".concat(e.enteredCode[0]," "):"_ "),r.a.createElement("span",null,e.enteredCode[1]?"".concat(e.enteredCode[1]," "):"_ "),r.a.createElement("span",null,e.enteredCode[2]?"".concat(e.enteredCode[2]," "):"_ "),r.a.createElement("span",null,e.enteredCode[3]?"".concat(e.enteredCode[3]," "):"_ "),r.a.createElement("span",null,e.enteredCode[4]?"".concat(e.enteredCode[4]," "):"_ "),r.a.createElement("span",null,e.enteredCode[5]?"".concat(e.enteredCode[5]," "):"_ "))}function D(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(null),u=Object(m.a)(l,2),d=u[0],f=u[1],b=Object(a.useState)(!1),p=Object(m.a)(b,2),E=p[0],g=p[1],j=Object(a.useState)(!1),h=Object(m.a)(j,2),O=h[0],v=h[1],w=function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P("/join",{code:n});case 2:t.sent.ok?(e.setJoinedGame(c),g(!0)):alert("That game is not currently available \ud83d\ude2d");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n&&n.preventDefault(),t.next=3,P("/add-player",{player:d,code:c});case 3:a=t.sent,console.log(a),a.ok?(console.log("It worked!"),e.setPlayerName(d),e.setGameCode(c),e.joinRoom(c,d),g(!1),v(!0)):(a.msg="used")?alert("Sorry, that name is already used. Please choose a new one\u2763\ufe0f\u2728"):alert("Sorry, the game you are trying to play no longer seems to be available. Please try again.\u2728");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(C,{text:"\u23eaBack",handleClick:e.goBack}),r.a.createElement("div",{className:L.a.JoinScreen},r.a.createElement(R,{enteredCode:c}),!E&&!O&&r.a.createElement(J,{enteredCode:c,setEnteredCode:o,join:w}),E&&r.a.createElement(H,{updateName:function(e){f(e.target.value)},joinWithName:S}),O&&r.a.createElement(W,null)))}function W(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"Please wait for the game to begin...\u2728",src:"/images/waiting.gif",style:{width:"50vh"}}))}var I=n(16),M=n.n(I);function F(e){var t=e.playersList.map((function(e){return r.a.createElement("span",{key:e,style:{marginRight:"16px"}},"\xa0\u2b50\ufe0f",e)}));return r.a.createElement("div",null,r.a.createElement(C,{text:"\u23eaBack",handleClick:e.goBack}),r.a.createElement("div",{className:M.a.HostScreen},r.a.createElement("div",{className:M.a.CodeDisplay},e.gameCode),r.a.createElement("div",{className:M.a.PlayersList},t),r.a.createElement(g,{handleClick:e.beginHost,text:"\u2728START GAME\u2728"})))}var q=n(45),Q=n.n(q);function K(e){return r.a.createElement("div",{className:Q.a.StartScreen},r.a.createElement(g,{text:"\u2728Host game \u2728",handleClick:e.createGame}),r.a.createElement(g,{text:"\u2728Join game \u2728",handleClick:e.join}))}n(54);var Z=n(3),V=n(46),Y=n.n(V)()("/games"),U=r.a.createContext();var X=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),l=Object(m.a)(o,2),d=l[0],f=l[1],b=Object(a.useState)(!0),p=Object(m.a)(b,2),E=p[0],g=p[1],j=Object(a.useState)(!1),h=Object(m.a)(j,2),O=h[0],v=h[1],w=Object(a.useState)(!1),S=Object(m.a)(w,2),_=S[0],C=S[1],y=Object(a.useState)(null),N=Object(m.a)(y,2),x=N[0],z=N[1],G=Object(a.useState)(null),T=Object(m.a)(G,2),L=T[0],H=T[1],J=Object(a.useState)([]),R=Object(m.a)(J,2),W=R[0],I=R[1],M=Object(a.useState)([]),q=Object(m.a)(M,2),Q=q[0],V=q[1],X=Object(a.useState)(!1),$=Object(m.a)(X,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(m.a)(ne,2),re=ae[0],ce=ae[1],oe=Object(a.useState)(null),le=Object(m.a)(oe,2),se=le[0],ie=le[1],ue=Object(a.useState)([]),me=Object(m.a)(ue,2),de=me[0],fe=me[1],be=Object(a.useState)([]),pe=Object(m.a)(be,2),Ee=pe[0],ge=pe[1],je=Object(a.useState)(null),he=Object(m.a)(je,2),Oe=he[0],ve=he[1],we=Object(a.useState)(null),Se=Object(m.a)(we,2),_e=Se[0],Ce=Se[1],ye=Object(a.useState)(null),Ne=Object(m.a)(ye,2),ke=Ne[0],xe=Ne[1],ze=Object(a.useRef)();Object(a.useEffect)((function(){Y.on("newPlayer",(function(e){for(var t=[],n=0;n<e.players.length;n++)t.push(e.players[n].name);V(t),I(e.players)})),Y.on("buzz",(function(e,t){ie({name:e,answer:t}),console.log(t)})),Y.on("start",(function(){ce(!0),g(!1),C(!1),v(!1)})),Y.on("gameObjectUpdated",(function(e){f(e)})),Z.a.addCanvas(ze.current,"".concat(window.innerWidth),"".concat(window.innerHeight)),Z.a.onResize((function(){Z.a.resize(window.innerWidth,window.innerHeight)})),Z.a.listenForKeyboard(),Z.a.listenForMouse(),Z.a.listenForTouch(),Z.a.stillCanvas(),ve(new Z.a.Sound("/sound/bgm.mp3",.2,!0,1)),Ce(new Z.a.Sound("/sound/success.mp3",.4,!1,1)),xe(new Z.a.Sound("/sound/failure.mp3",.4,!1,1)),Z.a.whileLoading((function(){console.log(Z.a.percentLoaded)})),Z.a.loop((function(){console.log(Z.a.percentLoaded)}))}),[]),Object(a.useEffect)((function(){if(d){var e=Object(u.a)(d.players);e.sort((function(e,t){return e.points-t.points})),e.reverse();var t=[];console.log(e);for(var n=0;n<e.length;n++)1===e[n].points?t.push("\u2b50\ufe0f".concat(e[n].name,": ").concat(e[n].points," point")):t.push("\u2b50\ufe0f".concat(e[n].name,": ").concat(e[n].points," points"));ge(t)}}),[d]),Object(a.useEffect)((function(){console.log("leader board: ",Ee)}),[Ee]),Object(a.useEffect)((function(){se&&(de.includes(se.name)||fe((function(e){return[].concat(Object(u.a)(e),[se])})))}),[se]);var Be=function(e){Y.emit("join","/".concat(e))},Ge=function(){g(!0),C(!1),v(!1),x&&(Le(x),z(null)),n&&(Le(n),c(null))},Te=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("/create");case 2:t=e.sent,Z.a.loadAudio(),Oe.play(),t?(c(t.gameNumber),g(!1),v(!1),C(!0),console.log(t.gameNumber),Be(t.gameNumber)):console.log("error!");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Le=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,P("/create",{code:t});case 3:(n=e.sent)?console.log(n):console.log("error!");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=function(){console.log("HOSTIN"),v(!1),C(!1),g(!1),te(!0),Y.emit("host",n)},Ae=function(e){e.preventDefault(),e.stopPropagation(),console.log("draggy stuff!")};return r.a.createElement("div",{className:"App",onDragEnter:Ae,onDragOver:Ae},r.a.createElement("canvas",{ref:ze}),r.a.createElement(U.Provider,{value:{player:L,gameCode:n}},E&&r.a.createElement(K,{goBack:Ge,createGame:Te,join:function(){v(!0),C(!1),g(!1)}}),_&&r.a.createElement(F,{goBack:Ge,gameCode:n,playersList:Q,beginHost:He}),O&&r.a.createElement(D,{goBack:Ge,setJoinedGame:z,setGameCode:c,setPlayerName:H,joinRoom:Be}),ee&&r.a.createElement(k,{buzzes:de,setBuzzes:fe,allowAnswers:function(){Y.emit("allowAnswers",n)},endGame:Le,beginHost:He,gameCode:n,hostGoToNextQuestion:function(){Y.emit("goToNext",n)},hostGamePlayers:W,leaderBoard:Ee,failSound:ke,successSound:_e}),re&&r.a.createElement(B,{buzz:function(e){Y.emit("buzz",L,n,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.cbe9754f.chunk.js.map