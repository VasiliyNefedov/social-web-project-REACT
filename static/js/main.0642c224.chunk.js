(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{138:function(e,t,n){e.exports=n(227)},139:function(e,t,n){},14:function(e,t,n){e.exports={link:"sidebar_link__kM6Nl",sidebar_item:"sidebar_sidebar_item__3TD6B",sidebaritem:"sidebar_sidebaritem__2xrgL"}},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m}));var r=n(5),a=n.n(r),i=n(9),u=n(4),o=n(6),c=n(28),s={id:null,email:null,login:null,isAuth:!1,isFetching:!1},l=function(e){return{type:"SET_USER_DATA",data:e}},f=function(e){return{type:"TOGGLE_ISFETCHING",toggle:e}},d=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getAuth();case 2:0===(n=e.sent).data.resultCode&&t(l(n.data.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var r=Object(i.a)(a.a.mark((function r(i){var u,s,d;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i(f(!0)),r.next=3,o.a.setLogin({email:e,password:t,rememberMe:n});case 3:0===(u=r.sent).data.resultCode?o.a.getAuth().then((function(e){0===e.data.resultCode&&i(l(e.data.data))})):1===u.data.resultCode&&(s=u.data.messages.length>0?u.data.messages[0]:"some error",d=Object(c.a)("login",{_error:s}),i(d)),i(f(!1));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},m=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(f(!0)),e.next=3,o.a.setLogout();case 3:0===e.sent.data.resultCode&&(t({type:"SET_LOGOUT"}),t(f(!1)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(u.a)({},e,{},t.data,{isAuth:!0});case"SET_LOGOUT":return Object(u.a)({},e,{isAuth:!1});case"TOGGLE_ISFETCHING":return Object(u.a)({},e,{isFetching:t.toggle});default:return e}}},222:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);n(139),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(17),a=n(57),i=n(71),u={},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return e},c=n(79),s=n(22),l=n(4),f={initialized:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(l.a)({},e,{initialized:!0});default:return e}},p=n(81),m=n(78),E=Object(r.c)({profile:a.b,dialogs:i.b,sidebar:o,users:c.a,auth:s.a,form:m.a,app:d}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,h=Object(r.e)(E,g(Object(r.a)(p.a)));window.___store___=h;var b=h,O=n(0),v=n.n(O),_=n(45),T=n.n(_),S=n(32),I=n(33),w=n(35),L=n(34),j=n(36);n(222);var y=function(){return v.a.createElement("div",{className:"footer"},"footer")},P=n(14),N=n.n(P),C=n(11);var F=function(){return v.a.createElement("div",{className:"sidebar"},v.a.createElement(C.b,{to:"/profile",className:N.a.link},v.a.createElement("div",{className:N.a.sidebar_item},v.a.createElement("div",null,"Profile"))),v.a.createElement(C.b,{to:"/dialogs",className:N.a.link},v.a.createElement("div",{className:N.a.sidebar_item},v.a.createElement("div",null,"Dialogs"))),v.a.createElement(C.b,{to:"/music",className:N.a.link},v.a.createElement("div",{className:N.a.sidebar_item},v.a.createElement("div",null,"Music"))),v.a.createElement(C.b,{to:"/feed",className:N.a.link},v.a.createElement("div",{className:N.a.sidebar_item},v.a.createElement("div",null,"Feed"))),v.a.createElement(C.b,{to:"/users",className:N.a.link},v.a.createElement("div",{className:N.a.sidebar_item},v.a.createElement("div",null,"Users"))))},x=n(20),U=n(37),k=v.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,300))})),A=v.a.lazy((function(){return n.e(6).then(n.bind(null,301))})),G=v.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,299))})),R=v.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,302))}));var M=function(e){return v.a.createElement("div",{className:"content"},v.a.createElement(O.Suspense,{fallback:v.a.createElement(U.a,null)},v.a.createElement(x.b,{path:"/profile/:userId?",render:function(){return v.a.createElement(G,null)}}),v.a.createElement(x.b,{path:"/dialogs",render:function(){return v.a.createElement(k,null)}}),v.a.createElement(x.b,{path:"/users",render:function(){return v.a.createElement(A,null)}}),v.a.createElement(x.b,{path:"/login",render:function(){return v.a.createElement(R,null)}})))};var D=function(){return v.a.createElement("div",{className:"userPic"},"profilePic")},z=n(87),H=n.n(z),B=n(62),W=function(e){return v.a.createElement("div",{className:"header"},v.a.createElement("div",{className:H.a.loginBlock},e.isAuth?e.isFetching?v.a.createElement(B.a,null):v.a.createElement("div",null,v.a.createElement("div",null,e.login),v.a.createElement("button",{onClick:e.logout},"Logout")):v.a.createElement(C.b,{to:"/login"},"Login")),v.a.createElement("div",null))},J=n(24),X=function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(w.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(a)))).logout=function(){n.props.setLogout()},n}return Object(j.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return v.a.createElement(W,Object.assign({},this.props,{logout:this.logout}))}}]),t}(v.a.Component),Z=Object(J.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,isFetching:e.auth.isFetching}}),{getAuth:s.b,setLogout:s.d})(X),K=function(e){function t(){return Object(S.a)(this,t),Object(w.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){return this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?v.a.createElement("div",{className:"App"},v.a.createElement(Z,null),v.a.createElement(D,null),v.a.createElement(F,null),v.a.createElement(M,null),v.a.createElement(y,null)):v.a.createElement(U.a,null)}}]),t}(v.a.Component),q=Object(r.d)(Object(J.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(s.b)());Promise.all([t]).then((function(){return e({type:"SET_INITIALIZED"})}))}}}),x.f)(K);T.a.render(v.a.createElement(C.a,null,v.a.createElement(J.a,{store:b},v.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(85),u=n.n(i),o=n(86),c=n.n(o);t.a=function(){return a.a.createElement("div",{className:c.a.preloader},a.a.createElement("img",{src:u.a,alt:"loadind..."}))}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"h",(function(){return d})),n.d(t,"g",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"i",(function(){return O})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return _}));var r=n(5),a=n.n(r),i=n(9),u=n(23),o=n(4),c=n(6),s=n(28),l={profileBlogItems:[{id:1,message:"Hi all!",likesCount:8},{id:2,message:"Glad to see you!",likesCount:4}],currentPostText:"",displayProfile:null,status:"",isFetching:!1,photos:{large:null,small:null},info:{aboutMe:null,contacts:{facebook:null,github:null,instagram:null,mainLink:null,twitter:null,vk:null,website:null,youtube:null},lookingForAJob:!1,lookingForAJobDescription:null,fullName:null},isProfileEdit:!1},f=function(e){return{type:"SET-PROFILE-BLOG-ITEMS",text:e}},d=function(e){return{type:"SET_USER_PROFILE",profile:e}},p=function(e){return{type:"SET_USER_STATUS",statusText:e}},m=function(e){return{type:"TOOGLE_IS_FETCHING",isFetching:e}},E=function(e){return{type:"SET_PROFILE_INFO",info:e}},g=function(e){return{type:"PROFILE_EDIT_TOGGLE",isProfileEdit:e}},h=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getUserProfile(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getUserStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m(!0)),t.next=3,c.b.updatetUserStatus(e);case 3:r=t.sent,n(m(!1)),0===r.data.resultCode?n(p(e)):1===r.data.resultCode&&n(p(""));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n,r){var i,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r().auth.id,t.next=3,c.b.setUserPhoto(e);case 3:0===(u=t.sent).data.resultCode&&(n({type:"SET_USER_PHOTO",photos:u.data.photos}),n(h(i)));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n,r){var i,u,o,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r().auth.id,t.next=3,c.b.updateProfileInfo(e);case 3:0===(u=t.sent).data.resultCode?(n(E(u.data)),n(h(i)),n(g(!1))):1===u.data.resultCode&&(o=u.data.messages.length>0?u.data.messages[0]:"some error",l=Object(s.a)("profileEdit",{_error:o}),n(l));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PROFILE-BLOG-ITEMS":if(!t.text)return e;var n={id:5,message:t.text,likesCount:0},r=Object(o.a)({},e,{profileBlogItems:Object(u.a)(e.profileBlogItems)});return r.profileBlogItems.push(n),r;case"SET_USER_PROFILE":return Object(o.a)({},e,{displayProfile:t.profile});case"SET_USER_STATUS":return Object(o.a)({},e,{status:t.statusText});case"TOOGLE_IS_FETCHING":return Object(o.a)({},e,{isFetching:t.isFetching});case"SET_USER_PHOTO":return Object(o.a)({},e,{photos:t.photos});case"SET_PROFILE_INFO":return Object(o.a)({},e,{info:t.info});case"PROFILE_EDIT_TOGGLE":return Object(o.a)({},e,{isProfileEdit:t.isProfileEdit});default:return e}}},6:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return o}));var r=n(80),a=n.n(r).a.create({withCredentials:!0,headers:{"API-KEY":"04489b2f-612d-4121-98e8-d37b27a13021"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},setUnfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},setFollow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},getUserProfile:function(e){return console.warn("obsolete method. please use profileAPI.getUserProfile"),o.getUserProfile(e)}},u={getAuth:function(){return a.get("auth/me")},setLogin:function(e){return a.post("/auth/login",e)},setLogout:function(){return a.delete("auth/login")}},o={getUserProfile:function(e){return a.get("profile/".concat(e))},getUserStatus:function(e){return a.get("profile/status/".concat(e))},updatetUserStatus:function(e){return a.put("profile/status/",{status:e})},setUserPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},updateProfileInfo:function(e){return a.put("profile/",e)}}},62:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(88),u=n.n(i),o=n(89),c=n.n(o);t.a=function(){return a.a.createElement("div",{className:c.a.preloader},a.a.createElement("img",{src:u.a,alt:"loadind..."}))}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(23),a=n(4),i={dialogsListItems:[{name:"Chandler",id:1},{name:"Ross",id:2},{name:"Joe",id:3},{name:"Monica",id:4},{name:"Raychel",id:5},{name:"Phoebe",id:6}],dialogsChatMessages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"Do you learn react.JS?"}],currentMessageText:""},u=function(e){return{type:"SET-DIALOGS-CHAT-MESSAGES",text:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-DIALOGS-CHAT-MESSAGES":if(!t.text)return e;var n={id:4,message:t.text},u=Object(a.a)({},e,{dialogsChatMessages:Object(r.a)(e.dialogsChatMessages)});return u.dialogsChatMessages.push(n),u;case"UPDATE-CURRENT-MESSAGE-TEXT":var o=Object(a.a)({},e);return o.currentMessageText=t.currentText,o;default:return e}}},79:function(e,t,n){"use strict";var r=n(5),a=n.n(r),i=n(9),u=n(23),o=n(4),c=n(6),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)({},e,{},r):e}))};n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return O})),n.d(t,"b",(function(){return v}));var l={userList:[],pageSize:10,totalCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET_CURRENT_PAGE",page:e}},m=function(e){return{type:"SET_TOTAL_COUNT",count:e}},E=function(e){return{type:"TOOGLE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"TOOGLE_FOLLOWING_IN_PROGRESS",followingInProgress:e,userId:t}},h=function(e,t){return function(){var n=Object(i.a)(a.a.mark((function n(r){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(E(!0)),n.next=3,c.c.getUsers(e,t);case 3:i=n.sent,r(E(!1)),r({type:"SET_USERS",users:i.items}),r(m(i.totalCount)),r(p(e));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},b=function(){var e=Object(i.a)(a.a.mark((function e(t,n,r,i){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(i(n)),t(g(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),O=function(e){return function(t){b(t,e,c.c.setUnfollow.bind(c.c),d)}},v=function(e){return function(t){b(t,e,c.c.setFollow.bind(c.c),f)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(o.a)({},e,{userList:s(e.userList,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(o.a)({},e,{userList:s(e.userList,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(o.a)({},e,{userList:Object(u.a)(t.users)});case"SET_CURRENT_PAGE":return Object(o.a)({},e,{currentPage:t.page});case"SET_TOTAL_COUNT":return Object(o.a)({},e,{totalCount:t.count});case"TOOGLE_IS_FETCHING":return Object(o.a)({},e,{isFetching:t.isFetching});case"TOOGLE_FOLLOWING_IN_PROGRESS":return Object(o.a)({},e,{followingInProgress:t.followingInProgress?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},85:function(e,t,n){e.exports=n.p+"static/media/loader.2f6db7eb.svg"},86:function(e,t,n){e.exports={preloader:"preloader_preloader__2_zbK"}},87:function(e,t,n){e.exports={loginBlock:"header_loginBlock__2Sisp"}},88:function(e,t,n){e.exports=n.p+"static/media/loaderMini.8584a5ff.svg"},89:function(e,t,n){e.exports={preloader:"preloaderMini_preloader__3ZIGq"}}},[[138,2,3]]]);
//# sourceMappingURL=main.0642c224.chunk.js.map