(this.webpackJsonpbuzzer=this.webpackJsonpbuzzer||[]).push([[0],{10:function(e,t,a){e.exports={Slice:"Hamburger_Slice__2UqGc",Burger:"Hamburger_Burger__2lg46"}},11:function(e,t,a){e.exports={PlayersGame:"PlayersGame_PlayersGame__3XN8S",Answering:"PlayersGame_Answering__3B4Kk",BuzzButton:"PlayersGame_BuzzButton__2xJ_G",WaitForQuestion:"PlayersGame_WaitForQuestion__1P6LZ"}},17:function(e,t,a){e.exports={HostNav:"HostNav_HostNav__17Z_h",EndButton:"HostNav_EndButton__-lbC4",TopNav:"HostNav_TopNav__1NieC"}},18:function(e,t,a){e.exports={HostScreen:"HostScreen_HostScreen__2cMzp",CodeDisplay:"HostScreen_CodeDisplay__2RKXA",PlayersList:"HostScreen_PlayersList__2tAi-"}},2:function(e,t,a){e.exports={HostsGame:"HostsGame_HostsGame__7yLPM",AskQuestion:"HostsGame_AskQuestion__1Qe1b",NameButton:"HostsGame_NameButton__3zfE0",AnswerCheck:"HostsGame_AnswerCheck__3W-U9",slidein:"HostsGame_slidein__3sBdz",fontgrow:"HostsGame_fontgrow__1RhVV",RightWrongButtons:"HostsGame_RightWrongButtons__2n5Ja",TimeLimitInput:"HostsGame_TimeLimitInput__1otnk",Timer:"HostsGame_Timer__323aG",NameList:"HostsGame_NameList__31of2",GoodJob:"HostsGame_GoodJob__3IwFM",LeaderBoard:"HostsGame_LeaderBoard__P5Ttn",GamePin:"HostsGame_GamePin__3r4Ye",PositivePointsNotifier:"HostsGame_PositivePointsNotifier__g2TI9",NegativePointsNotifier:"HostsGame_NegativePointsNotifier__392sc"}},44:function(e,t,a){e.exports={StartButton:"StartButton_StartButton__1O8aZ"}},45:function(e,t,a){e.exports={genericButt:"GenericButton_genericButt__ju7Mb"}},46:function(e,t,a){e.exports={StartScreen:"StartScreen_StartScreen__2YFVK"}},48:function(e,t,a){e.exports=a(87)},53:function(e,t,a){},55:function(e,t,a){},6:function(e,t,a){e.exports={JoinScreen:"JoinScreen_JoinScreen__Qcczc",NumberDisplay:"JoinScreen_NumberDisplay__2L9EC",NumberPad:"JoinScreen_NumberPad__1s5_A",NameInput:"JoinScreen_NameInput__o28uR"}},84:function(e,t){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(43),r=a.n(c),s=(a(53),a(3)),l=a.n(s),i=a(5),u=a(7),m=a(1),d=a(2),f=a.n(d);function b(e){return o.a.createElement("div",null,o.a.createElement("div",{className:f.a.AnswerCheck},o.a.createElement("h1",null,e.answer),o.a.createElement("div",{className:f.a.RightWrongButtons},o.a.createElement("button",{onClick:function(){e.setPointsAvailable(e.pointsAvailable-1),e.handleAnswer(e.pointsAvailable)}},o.a.createElement("span",{role:"img","aria-label":"CORRECT"},"\ud83d\ude46\u200d\u2640\ufe0f")),o.a.createElement("button",{onClick:function(){e.setPointsAvailable(e.pointsAvailable-1),e.handleAnswer(-1*e.pointsAvailable)}},o.a.createElement("span",{role:"img","aria-label":"WRONG"},"\ud83d\ude45\u200d\u2640\ufe0f")))))}var p=a(44),E=a.n(p);function g(e){return o.a.createElement("button",{className:E.a.StartButton,onClick:e.handleClick},e.text)}function v(e){return o.a.createElement("div",{className:f.a.AskQuestion},o.a.createElement("h1",{style:{userSelect:"none"}},"Question number: ",e.questionNumber),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"time-limit-input",style:{fontSize:"22px",userSelect:"none"}},"Time limit: \xa0"),o.a.createElement("input",{className:f.a.TimeLimitInput,name:"time-limit-input",type:"number",min:"5",onChange:function(t){e.setTimeLimit(t.target.value),e.setTimeLeft(t.target.value)},defaultValue:e.timeLimit})),o.a.createElement(g,{handleClick:e.allowAnswers,text:"\u2728Get Answers\u2728"}))}function j(e){return o.a.createElement("div",null,o.a.createElement("div",{className:f.a.Timer},o.a.createElement("h1",null,"Time remaining:\xa0"),o.a.createElement("span",null,e.timeLeft)),o.a.createElement("ol",{className:f.a.NameList},e.buzzes))}function h(e){var t=Object(n.useState)({x:null,y:null}),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useRef)(),l=e.leaderBoard.map((function(e){return o.a.createElement("li",{key:"".concat(e).concat(Math.floor(Math.random()))},e)}));return o.a.createElement("div",{ref:s,draggable:!0,className:f.a.LeaderBoard,onDragEnd:function(e){r({x:e.clientX,y:e.clientY})},style:{top:"".concat(c.y,"px"),left:"".concat(c.x,"px")}},o.a.createElement("button",{className:f.a.closer,onClick:e.close},"\xd7"),o.a.createElement("h2",null,"Leaders"),o.a.createElement("ul",null,l))}var O=a(17),_=a.n(O),S=a(45),w=a.n(S);function N(e){return o.a.createElement("button",{className:w.a.genericButt,onClick:function(){e.handleClick()}},e.text)}function C(e){var t,a,c=Object(n.useContext)(te),r=Object(n.useRef)(null);return t=r,a=e.setNavOut,Object(n.useEffect)((function(){function e(e){t.current&&!t.current.contains(e.target)&&(e.target.className.includes("Hamburger")?console.log("HamburGER CLICKED MAN"):a(0))}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t]),o.a.createElement("div",null,o.a.createElement("div",{className:_.a.TopNav},e.showAnswerCheck&&o.a.createElement(N,{text:"Next question\u2728",handleClick:e.goToNext}),e.showTimer&&o.a.createElement(N,{text:"Skip\u2728",handleClick:e.skipQuestion})),o.a.createElement("div",{className:_.a.HostNav,out:e.out,ref:r},o.a.createElement(N,{text:"Show leader board\ud83e\udd4a",handleClick:function(){e.setShowLeaderBoard(!0)}}),e.questionTime&&o.a.createElement(N,{text:"Next question\u2728",handleClick:e.goToNext}),e.showAnswerCheck&&o.a.createElement(N,{text:"Next question\u2728",handleClick:e.goToNext}),e.showTimer&&o.a.createElement(N,{text:"Skip\u2728",handleClick:e.skipQuestion}),o.a.createElement("button",{className:_.a.EndButton,onClick:function(){e.endGame(c),window.location.reload()}},"END GAME")))}var y=a(10),k=a.n(y);function x(e){return o.a.createElement("div",{className:k.a.Burger,onClick:e.handleClick},o.a.createElement("div",{className:k.a.Slice}),o.a.createElement("div",{className:k.a.Slice}),o.a.createElement("div",{className:k.a.Slice}))}var z=0;function G(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(null),l=Object(m.a)(s,2),i=(l[0],l[1]),d=Object(n.useState)(!0),p=Object(m.a)(d,2),E=p[0],g=p[1],O=Object(n.useState)(30),_=Object(m.a)(O,2),S=_[0],w=_[1],N=Object(n.useState)(30),y=Object(m.a)(N,2),k=y[0],G=y[1],B=Object(n.useState)(!1),A=Object(m.a)(B,2),P=A[0],T=A[1],H=Object(n.useState)(!1),L=Object(m.a)(H,2),R=L[0],J=L[1],D=Object(n.useState)(0),W=Object(m.a)(D,2),I=W[0],Q=W[1],M=Object(n.useState)(1),q=Object(m.a)(M,2),F=q[0],K=q[1],U=Object(n.useState)(!1),Y=Object(m.a)(U,2),Z=Y[0],V=Y[1],X=Object(n.useState)(!1),ee=Object(m.a)(X,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(!1),oe=Object(m.a)(ne,2),ce=oe[0],re=oe[1],se=Object(n.useState)(!1),le=Object(m.a)(se,2),ie=le[0],ue=le[1],me=Object(n.useState)(0),de=Object(m.a)(me,2),fe=de[0],be=de[1],pe=Object(n.useState)(e.playersList.length),Ee=Object(m.a)(pe,2),ge=Ee[0],ve=Ee[1],je=Object(n.useState)("points"),he=Object(m.a)(je,2),Oe=he[0],_e=he[1],Se=Object(n.useState)(!1),we=Object(m.a)(Se,2),Ne=we[0];we[1];function Ce(){if(Date.now()-I+900<1e3*S&&!z){var e=Math.floor(.001*(1e3*S-(Date.now()-I)));G(e),requestAnimationFrame(Ce)}else T(!1),V(!0),ke(),z=0}Object(n.useEffect)((function(){P&&Ce()}),[I]),Object(n.useEffect)((function(){0===k&&G(S)}),[k]),Object(n.useEffect)((function(){Z&&0===e.buzzes.length&&J(!0)}),[Z]),Object(n.useEffect)((function(){e.buzzes.length===e.playersList.length&&P&&(z=1,V(!0),G(0),T(!1),g(!1),ke())}),[e.buzzes,e.playersList,P]),Object(n.useEffect)((function(){console.log(ge),0===ge&&ve(e.playersList.length),_e(1===ge?"point":"points")}),[ge,e.playersList.length]),Object(n.useEffect)((function(){if(Z){var t=e.buzzes.map((function(e){return e.name}));e.hostGamePlayers.forEach((function(a){t.includes(a.name)?console.log("".concat(a.name," answered")):(console.log("".concat(a.name," didnt answer")),$.emit("givePoints",e.gameCode,a,-1*e.playersList.length))})),console.log(e.hostGamePlayers)}}),[Z]),Object(n.useEffect)((function(){Z&&R&&e.timeUpSound.play()}),[Z,R,e.timeUpSound]);var ye=function(t){var a=Object(u.a)(e.buzzes),n=a.shift();e.setBuzzes(a),r(null),$.emit("givePoints",e.gameCode,n,t),t<0?(ze(),e.failSound.play()):(xe(),e.successSound.play())},ke=function(){$.emit("checkingAnswers",e.gameCode)},xe=function(){ae(!0),setTimeout((function(){ae(!1)}),1500)},ze=function(){re(!0),setTimeout((function(){re(!1)}),1500)},Ge=e.buzzes.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("button",{className:f.a.NameButton,onClick:function(){var t,a;t=e.answer,a=e.name,r(t),i(a),console.log(t),P&&(z=1,V(!0),G(0),T(!1),g(!1),ke())}},e.name))}));return o.a.createElement("div",{className:f.a.HostsGame},o.a.createElement(x,{handleClick:function(){console.log("hamburger clicked"),be(fe?0:1)}}),o.a.createElement(C,{endGame:e.endGame,goToNext:function(){z=1,K(F+1),e.setBuzzes([]),G(0),T(!1),g(!0),V(!1),r(null),J(!1),$.emit("goToNext",e.gameCode)},setShowLeaderBoard:ue,skipQuestion:function(){z=1,V(!0),G(0),T(!1),g(!1),ke()},questionTime:E,showAnswerCheck:Z,showTimer:P,out:fe,setNavOut:be}),E&&o.a.createElement(v,{questionNumber:F,allowAnswers:function(){z=0,g(!1),e.allowAnswers(),e.beginHost(),G(S),T(!0),Q(Date.now())},timeLimit:S,setTimeLeft:G,setTimeLimit:w}),P&&o.a.createElement(j,{timeLeft:k,buzzes:Ge}),c&&o.a.createElement(b,{answer:c,handleAnswer:ye,pointsAvailable:ge,setPointsAvailable:ve}),""===c&&o.a.createElement(b,{answer:c,handleAnswer:ye,pointsAvailable:ge,setPointsAvailable:ve}),Z&&e.buzzes.length>0&&o.a.createElement("ol",null,Ge),Z&&R&&o.a.createElement("div",null,o.a.createElement("h1",null,"Nobody answered!",o.a.createElement("span",{role:"img","aria-label":""},"\ud83d\ude2d"))),te&&o.a.createElement("div",{className:f.a.GoodJob},o.a.createElement("img",{style:{borderRadius:"10px"},alt:"Good job!",src:"images/goodjob.gif"})),ce&&o.a.createElement("div",{className:f.a.GoodJob},o.a.createElement("img",{style:{borderRadius:"10px"},alt:"Oh no!",src:"images/ohno.gif"})),ie&&o.a.createElement(h,{leaderBoard:e.leaderBoard,close:function(){ue(!1)}}),o.a.createElement("div",{className:f.a.GamePin},"Game pin: ",e.gameCode),Ne&&o.a.createElement("div",{className:f.a.PositivePointsNotifier},"+ ",ge," ",Oe,"!!!"),o.a.createElement("div",{className:f.a.NegativePointsNotifier}))}var B=a(11),A=a.n(B);function P(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),l=Object(m.a)(s,2),i=l[0],u=l[1],d=Object(n.useState)(!1),f=Object(m.a)(d,2),b=f[0],p=f[1],E=Object(n.useState)(!1),g=Object(m.a)(E,2),v=g[0],j=g[1],h=Object(n.useState)(!1),O=Object(m.a)(h,2),_=O[0],S=O[1],w=Object(n.useRef)(null);Object(n.useEffect)((function(){$.on("goToNext",(function(){console.log("go to next"),r(!0),j(!1),p(!1),S(!1)})),$.on("allowAnswers",(function(){console.log("allow answers"),p(!0),j(!1),S(!1),console.log("You may answer now"),r(!1)})),$.on("checkingAnswers",(function(){console.log("check answers"),S(!0),j(!1),p(!1),r(!1)}))}),[]),Object(n.useEffect)((function(){b&&!v&&w.current.focus()}));return o.a.createElement("div",{className:A.a.PlayersGame},b&&!v&&o.a.createElement("div",{className:A.a.Answering},o.a.createElement("textarea",{ref:w,placeholder:"Type your answer here. \u2728",onChange:function(e){u(e.target.value)}}),o.a.createElement(T,{buzz:function(){e.buzz(i),j(!0)}})),c&&o.a.createElement("div",{className:A.a.WaitForQuestion},o.a.createElement("h1",null,"Listen carefully to the question!"," ",o.a.createElement("span",{role:"img","aria-label":"LISTEN!"},"\ud83d\udc42")),o.a.createElement("img",{alt:"\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42\ud83d\udc42",src:"/images/listen.gif"})),v&&o.a.createElement("img",{alt:"One moment please...\u2728",src:"/images/waiting.gif",style:{width:"50vh"}}),_&&o.a.createElement("img",{style:{width:"50vw"},src:"/images/anticipation.gif",alt:"Checking the answers...\ud83d\udc96\ud83c\udf08"}))}function T(e){return o.a.createElement("button",{onClick:e.buzz,className:A.a.BuzzButton},"BUZZ")}var H=a(6),L=a.n(H);function R(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current.focus()}),[t]),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("form",{onSubmit:e.joinWithName},o.a.createElement("input",{ref:t,onChange:e.updateName,className:L.a.NameInput,maxLength:"15"})),o.a.createElement(N,{text:"Join",handleClick:e.joinWithName}))}var J=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),alert(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(l.a.mark((function e(t,a){var n,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"post",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}},e.next=4,fetch(t,n);case 4:return o=e.sent,e.next=7,o.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}();function W(e){var t=function(t){var a=parseInt(t.target.innerText);e.enteredCode.length<6&&e.setEnteredCode("".concat(e.enteredCode).concat(a))},a=function(t){if("OK"===t.target.innerText)6===e.enteredCode.length?e.join(e.enteredCode):alert("You must enter at least 6 numbers\u2763\ufe0f\u2728");else{var a=e.enteredCode.slice(0,-1);e.setEnteredCode(a)}};return o.a.createElement("div",{className:L.a.NumberPad},o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{onClick:t},"1"),o.a.createElement("td",{onClick:t},"2"),o.a.createElement("td",{onClick:t},"3")),o.a.createElement("tr",null,o.a.createElement("td",{onClick:t},"4"),o.a.createElement("td",{onClick:t},"5"),o.a.createElement("td",{onClick:t},"6")),o.a.createElement("tr",null,o.a.createElement("td",{onClick:t},"7"),o.a.createElement("td",{onClick:t},"8"),o.a.createElement("td",{onClick:t},"9")),o.a.createElement("tr",null,o.a.createElement("td",{onClick:a,style:{fontSize:"4vh"}},"\u2b05"),o.a.createElement("td",{onClick:t},"0"),o.a.createElement("td",{onClick:a,style:{fontSize:"4vh"}},"OK")))))}function I(e){return o.a.createElement("div",{className:L.a.NumberDisplay},o.a.createElement("span",null,e.enteredCode[0]?"".concat(e.enteredCode[0]," "):"_ "),o.a.createElement("span",null,e.enteredCode[1]?"".concat(e.enteredCode[1]," "):"_ "),o.a.createElement("span",null,e.enteredCode[2]?"".concat(e.enteredCode[2]," "):"_ "),o.a.createElement("span",null,e.enteredCode[3]?"".concat(e.enteredCode[3]," "):"_ "),o.a.createElement("span",null,e.enteredCode[4]?"".concat(e.enteredCode[4]," "):"_ "),o.a.createElement("span",null,e.enteredCode[5]?"".concat(e.enteredCode[5]," "):"_ "))}function Q(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(null),u=Object(m.a)(s,2),d=u[0],f=u[1],b=Object(n.useState)(!1),p=Object(m.a)(b,2),E=p[0],g=p[1],v=Object(n.useState)(!1),j=Object(m.a)(v,2),h=j[0],O=j[1],_=Object(n.useState)(!1),S=Object(m.a)(_,2),w=S[0],C=S[1],y=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("/join",{code:a});case 2:t.sent.ok?(e.setJoinedGame(c),g(!0)):alert("That game is not currently available \ud83d\ude2d");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(i.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a&&a.preventDefault(),!d||w){t.next=8;break}return C(!0),t.next=5,D("/add-player",{player:d,code:c});case 5:n=t.sent,console.log(n),n.ok?(C(!1),console.log("It worked!"),e.setPlayerName(d),e.setGameCode(c),e.joinRoom(c,d),g(!1),O(!0)):(n.msg="used")?(C(!1),alert("Sorry, that name is already used. Please choose a new one\u2763\ufe0f\u2728")):(C(!1),alert("Sorry, the game you are trying to play no longer seems to be available. Please try again.\u2728"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(N,{text:"\u23eaBack",handleClick:e.goBack}),o.a.createElement("div",{className:L.a.JoinScreen},o.a.createElement(I,{enteredCode:c}),!E&&!h&&o.a.createElement(W,{enteredCode:c,setEnteredCode:r,join:y}),E&&o.a.createElement(R,{updateName:function(e){f(e.target.value)},joinWithName:k}),h&&o.a.createElement(M,null)))}function M(){return o.a.createElement("div",null,o.a.createElement("img",{alt:"Please wait for the game to begin...\u2728",src:"/images/waiting.gif",style:{width:"50vh"}}))}var q=a(18),F=a.n(q);function K(e){var t=e.playersList.map((function(e){return o.a.createElement("span",{key:e,style:{marginRight:"16px"}},"\xa0\u2b50\ufe0f",e)}));return o.a.createElement("div",null,o.a.createElement(N,{text:"\u23eaBack",handleClick:e.goBack}),o.a.createElement("div",{className:F.a.HostScreen},o.a.createElement("div",{className:F.a.CodeDisplay},e.gameCode),o.a.createElement("div",{className:F.a.PlayersList},t),o.a.createElement(g,{handleClick:e.beginHost,text:"\u2728START GAME\u2728"})))}var U=a(46),Y=a.n(U);function Z(e){return o.a.createElement("div",{className:Y.a.StartScreen},o.a.createElement(g,{text:"\u2728Host game \u2728",handleClick:e.createGame}),o.a.createElement(g,{text:"\u2728Join game \u2728",handleClick:e.join}))}a(55);var V=a(4),X=a(47),$=a.n(X)()("/games"),ee=o.a.createContext();var te=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(m.a)(r,2),d=s[0],f=s[1],b=Object(n.useState)(!0),p=Object(m.a)(b,2),E=p[0],g=p[1],v=Object(n.useState)(!1),j=Object(m.a)(v,2),h=j[0],O=j[1],_=Object(n.useState)(!1),S=Object(m.a)(_,2),w=S[0],N=S[1],C=Object(n.useState)(null),y=Object(m.a)(C,2),k=y[0],x=y[1],z=Object(n.useState)(null),B=Object(m.a)(z,2),A=B[0],T=B[1],H=Object(n.useState)([]),L=Object(m.a)(H,2),R=L[0],W=L[1],I=Object(n.useState)([]),M=Object(m.a)(I,2),q=M[0],F=M[1],U=Object(n.useState)(!1),Y=Object(m.a)(U,2),X=Y[0],te=Y[1],ae=Object(n.useState)(!1),ne=Object(m.a)(ae,2),oe=ne[0],ce=ne[1],re=Object(n.useState)(null),se=Object(m.a)(re,2),le=se[0],ie=se[1],ue=Object(n.useState)([]),me=Object(m.a)(ue,2),de=me[0],fe=me[1],be=Object(n.useState)([]),pe=Object(m.a)(be,2),Ee=pe[0],ge=pe[1],ve=Object(n.useState)(null),je=Object(m.a)(ve,2),he=je[0],Oe=je[1],_e=Object(n.useState)(null),Se=Object(m.a)(_e,2),we=Se[0],Ne=Se[1],Ce=Object(n.useState)(null),ye=Object(m.a)(Ce,2),ke=ye[0],xe=ye[1],ze=Object(n.useState)(null),Ge=Object(m.a)(ze,2),Be=Ge[0],Ae=Ge[1],Pe=Object(n.useRef)();Object(n.useEffect)((function(){$.on("newPlayer",(function(e){for(var t=[],a=0;a<e.players.length;a++)t.push(e.players[a].name);F(t),W(e.players)})),$.on("buzz",(function(e,t){ie({name:e,answer:t}),console.log(t)})),$.on("start",(function(){ce(!0),g(!1),N(!1),O(!1)})),$.on("gameObjectUpdated",(function(e){f(e)})),V.a.addCanvas(Pe.current,"".concat(window.innerWidth),"".concat(window.innerHeight)),V.a.onResize((function(){V.a.resize(window.innerWidth,window.innerHeight)})),V.a.listenForKeyboard(),V.a.listenForMouse(),V.a.listenForTouch(),V.a.stillCanvas(),Oe(new V.a.Sound("/sound/bgm.mp3",.2,!0,1)),Ne(new V.a.Sound("/sound/cheer.mp3",.4,!1,1)),xe(new V.a.Sound("/sound/failure.mp3",.4,!1,1)),Ae(new V.a.Sound("/sound/Buzzer-sound.mp3",.2,!1,1.3)),V.a.whileLoading((function(){})),V.a.loop((function(){}))}),[]),Object(n.useEffect)((function(){if(d){var e=Object(u.a)(d.players);e.sort((function(e,t){return e.points-t.points})),e.reverse();var t=[];console.log(e);for(var a=0;a<e.length;a++)1===e[a].points?t.push("\u2b50\ufe0f".concat(e[a].name,": ").concat(e[a].points," point")):t.push("\u2b50\ufe0f".concat(e[a].name,": ").concat(e[a].points," points"));ge(t)}}),[d]),Object(n.useEffect)((function(){console.log("leader board: ",Ee)}),[Ee]),Object(n.useEffect)((function(){le&&(de.includes(le.name)||fe((function(e){return[].concat(Object(u.a)(e),[le])})))}),[le]);var Te=function(e){$.emit("join","/".concat(e))},He=function(){g(!0),N(!1),O(!1),k&&(Re(k),x(null)),a&&(Re(a),c(null))},Le=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("/create");case 2:t=e.sent,V.a.loadAudio(),he.play(),t?(c(t.gameNumber),g(!1),O(!1),N(!0),console.log(t.gameNumber),Te(t.gameNumber)):console.log("error!");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,D("/create",{code:t});case 3:(a=e.sent)?console.log(a):console.log("error!");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Je=function(){console.log("HOSTIN"),O(!1),N(!1),g(!1),te(!0),$.emit("host",a)},De=function(e){e.preventDefault(),e.stopPropagation()};return o.a.createElement("div",{className:"App",onDragEnter:De,onDragOver:De},o.a.createElement("canvas",{ref:Pe}),o.a.createElement(ee.Provider,{value:{player:A,gameCode:a}},E&&o.a.createElement(Z,{goBack:He,createGame:Le,join:function(){O(!0),N(!1),g(!1)}}),w&&o.a.createElement(K,{goBack:He,gameCode:a,playersList:q,beginHost:Je}),h&&o.a.createElement(Q,{goBack:He,setJoinedGame:x,setGameCode:c,setPlayerName:T,joinRoom:Te}),X&&o.a.createElement(G,{buzzes:de,setBuzzes:fe,allowAnswers:function(){$.emit("allowAnswers",a)},endGame:Re,beginHost:Je,gameCode:a,hostGoToNextQuestion:function(){$.emit("goToNext",a)},hostGamePlayers:R,leaderBoard:Ee,failSound:ke,successSound:we,timeUpSound:Be,playersList:q}),oe&&o.a.createElement(P,{buzz:function(e){$.emit("buzz",A,a,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.54b2250b.chunk.js.map