(this.webpackJsonpmy_amazon=this.webpackJsonpmy_amazon||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},108:function(e,a,t){},110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(46),i=t.n(c),l=(t(61),t(47)),s=t(3),m=(t(62),t(63),t(48)),o=t.n(m),u=t(49),d=t.n(u),p=t(11),E=Object(n.createContext)(),g=function(e){var a=e.reducer,t=e.initialState,c=e.children;return r.a.createElement(E.Provider,{value:Object(n.useReducer)(a,t)},c)},_=function(){return Object(n.useContext)(E)},h=t(30),v=t.n(h),f=v.a.initializeApp({apiKey:"AIzaSyDzGXoi0QfducvrQLg0ApelAYeRC8uFrb4",authDomain:"fir-c12e4.firebaseapp.com",databaseURL:"https://fir-c12e4.firebaseio.com",projectId:"fir-c12e4",storageBucket:"fir-c12e4.appspot.com",messagingSenderId:"730768055954",appId:"1:730768055954:web:12943cc62df34d8626504b",measurementId:"G-1H0SYT7HXJ"}).firestore(),N=v.a.auth();var b=function(){var e=_(),a=Object(s.a)(e,2),t=a[0],n=t.basket,c=t.user;return a[1],r.a.createElement("div",{className:"header"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{className:"header__searchInput",type:"text"}),r.a.createElement(o.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(p.b,{to:!c&&"/login"},r.a.createElement("div",{onClick:function(){c&&N.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Hello ",c?c.email:"Guest"),r.a.createElement("span",{className:"header__optionLineTwo"},c?"Sign Out":"Sign In"))),r.a.createElement(p.b,{to:"/orders"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),r.a.createElement(p.b,{to:"/checkout"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(d.a,null),r.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};t(79),t(80);var S=function(e){var a=e.id,t=e.title,n=e.image,c=e.price,i=e.rating,l=_(),m=Object(s.a)(l,2),o=(m[0].basket,m[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,t),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"product__rating"},Array(i).fill().map((function(e,a){return r.a.createElement("p",null,"\ud83c\udf1f")})))),r.a.createElement("img",{className:"product__image",src:n,alt:"Product image"}),r.a.createElement("button",{onClick:function(){o({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:c,rating:i}})}},"Add to Basket"))},k=t(50),j=(t(81),["https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5529_B._CB406173267_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/sm/Evergreen_Shared/RebrandAssets/Sept2020/GW_Banner_1500x600_US_1x._CB404913951_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Marketing/012020_AMHD_Q1/US-EN_012020_AMUHD_Q1promo_OS_GW_Hero_D_1500x600_1X_CV2B._CB426550131_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTU0NGZhYWQt/MTU0NGZhYWQt-Mzc1NDBkNTct-w1500._CB405104207_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTIzMTg1NGEt/MTIzMTg1NGEt-YzQzZjY0OGQt-w1500._CB404804090_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTU0NGZhYWQt/MTU0NGZhYWQt-Mzc1NDBkNTct-w1500._CB405104207_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MWE1MmNlZDAt-w1500._CB406132032_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/theoutpost/GW_DHERO_TheOutpost_1500x600_EN-US_5538_v2._CB407273330_.jpg"]),y=function(){return r.a.createElement("div",{className:"slider"},r.a.createElement("div",{className:"slide-container"},r.a.createElement(k.Fade,null,r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:j[0]}))),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:j[1]}))),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:j[2]}))),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:j[3]}))),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:j[4]}))),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:j[5]}))),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:j[6]}))),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:j[7]}))))))};var O=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"49038500",title:"ASUS VivoBook 15 Thin and Light Laptop, 15.6\u201d FHD, Intel Core i3-8145U CPU",price:541,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81mZ4eDWYkL._AC_SX679_.jpghttps://www.bhphotovideo.com/images/images2500x2500/samsung_c49hg90dmn_49_curved_va_panel_1345182.jpg"}),r.a.createElement(S,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"http://mobileimages.lowes.com/product/converted/841667/841667162096.jpg?size=pdhi"}),r.a.createElement(S,{id:"32543543",title:"New Apple iPad Pro (12.9-inch, WiFi, 128GB) - Silver (4th Generation",price:598.99,rating:4,image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583552356577"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"39025829",title:"Audio-Technica AT-LP120XUSB-BK Direct-Drive Turntable (Analog & USB)",price:249,image:"https://images-na.ssl-images-amazon.com/images/I/81LDEgi0awL._AC_SX679_.jpg",rating:5}),r.a.createElement(S,{id:"33020829",title:"Power Theory iPhone X/iPhone Xs Glass Screen Protector [2-Pack]",price:11.85,image:"https://images-na.ssl-images-amazon.com/images/I/81wdDf6o-QL._AC_SL1500_.jpg",rating:2}),r.a.createElement(S,{id:"53634666",title:"Edifier R1700BT Bluetooth Bookshelf Speakers - Active Near-Field Studio Monitors - Powered Speakers",price:149.99,image:"https://images-na.ssl-images-amazon.com/images/I/71J1U2tVdYL._AC_SL1500_.jpg",rating:4}),r.a.createElement(S,{id:"09344829",title:" 49.2FT LED Strip Lights, QZYL Lights Strip Music Sync, App Control with Remote",price:13.76,image:"https://images-na.ssl-images-amazon.com/images/I/81lmAL14poL._AC_SL1500_.jpg",rating:3})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"49453968",title:" Sceptre 30-Inch 21: 9 Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI DisplayPort Up to 85Hz Mprt 1ms FPS-RTS Build-in Speakers, Machine Black 2020",price:228.87,image:"https://images-na.ssl-images-amazon.com/images/I/81uNJ%2B-LyJL._AC_SL1500_.jpg",rating:5}),r.a.createElement(S,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"}))))},C=t(4),B=(t(82),t(83),t(20)),T=t.n(B),A=t(34),w=t(23),z=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},M=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(w.a)({},e,{basket:[].concat(Object(A.a)(e.basket),[a.item])});case"EMPTY_BASKET":return Object(w.a)({},e,{basket:[]});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(A.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(w.a)({},e,{basket:n});case"SET_USER":return Object(w.a)({},e,{user:a.user});default:return e}};var L=function(){var e=Object(C.f)(),a=_(),t=Object(s.a)(a,2),n=t[0].basket;return t[1],r.a.createElement("div",{className:"subtotal"},r.a.createElement(T.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",n.length," items): ",r.a.createElement("strong",null,e)),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:z(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",{onClick:function(a){return e.push("/payment")}},"Proceed to Checkout"))};t(85);var P=function(e){var a=e.id,t=e.image,n=e.title,c=e.price,i=e.rating,l=e.hideButton,m=_(),o=Object(s.a)(m,2),u=(o[0].basket,o[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct__image",src:t}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},n),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(i).fill().map((function(e,a){return r.a.createElement("p",null,"\ud83c\udf1f")}))),!l&&r.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Basket")))};var D=function(){var e=_(),a=Object(s.a)(e,2),t=a[0],n=t.basket,c=t.user;return a[1],r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg",alt:"checkout basket"}),r.a.createElement("div",null,r.a.createElement("h3",null,"Hello, ",null===c||void 0===c?void 0:c.email),r.a.createElement("h2",{className:"checkout__title"}," Your Shopping Basket"),n.map((function(e){return r.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,item:e.rating})})))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(L,null)))};t(86);var x=function(){var e=Object(C.f)(),a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],i=t[1],l=Object(n.useState)(""),m=Object(s.a)(l,2),o=m[0],u=m[1];return r.a.createElement("div",{className:"login"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign-in"),r.a.createElement("form",null,r.a.createElement("h5",null,"E-mail"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{type:"password",value:o,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),N.signInWithEmailAndPassword(c,o).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),r.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),r.a.createElement("button",{onClick:function(a){a.preventDefault(),N.createUserWithEmailAndPassword(c,o).then((function(a){a&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))},G=t(22),U=t.n(G),I=t(33),W=(t(88),t(19)),Y=t(51),R=t.n(Y).a.create({baseURL:"https://fir-c12e4.firebaseio.com"});var F=function(){var e=_(),a=Object(s.a)(e,2),t=a[0],c=t.basket,i=t.user,l=a[1],m=Object(C.f)(),o=Object(W.useStripe)(),u=Object(W.useElements)(),d=Object(n.useState)(!1),E=Object(s.a)(d,2),g=E[0],h=E[1],v=Object(n.useState)(""),N=Object(s.a)(v,2),b=N[0],S=N[1],k=Object(n.useState)(null),j=Object(s.a)(k,2),y=j[0],O=j[1],B=Object(n.useState)(!0),A=Object(s.a)(B,2),w=A[0],M=A[1],L=Object(n.useState)(!0),D=Object(s.a)(L,2),x=D[0],G=D[1];Object(n.useEffect)((function(){(function(){var e=Object(I.a)(U.a.mark((function e(){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({method:"post",url:"/payments/create?total=".concat(100*z(c))});case 2:a=e.sent,G(a.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),console.log(x);var Y=function(){var e=Object(I.a)(U.a.mark((function e(a){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),S(!0),e.next=4,o.confirmCardPayment(x,{payment_method:{card:u.getElement(W.CardElement)}}).then((function(e){var a=e.paymentIntent;f.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(a.id).set({basket:c,amount:a.amount,created:a.created}),h(!0),O(null),S(!1),l({type:"EMPTY_BASKET"}),m.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout (",r.a.createElement(p.b,{to:"/checkout"},null===c||void 0===c?void 0:c.length," items"),")"),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery Address")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,null===i||void 0===i?void 0:i.email),r.a.createElement("p",null,"7635 Elizabeht St."),r.a.createElement("p",null,"Delray Beach, FL"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Review items and delivery")),r.a.createElement("div",{className:"payment__items"},c.map((function(e){return r.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:Y},r.a.createElement(W.CardElement,{onChange:function(e){M(e.empty),O(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment__priceContainer"},r.a.createElement(T.a,{renderText:function(e){return r.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:z(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",{disabled:b||w||g},r.a.createElement("span",null,b?r.a.createElement("p",null,"Processing"):"Buy Now"))),y&&r.a.createElement("div",null,y))))))},H=(t(105),t(106),t(52)),Q=t.n(H);var Z=function(e){var a,t=e.order;return r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",null,Q.a.unix(t.data.created).format("MMMM Do YYYY, h:mma")),r.a.createElement("p",{className:"order__id"},r.a.createElement("small",null,t.id)),null===(a=t.data.basket)||void 0===a?void 0:a.map((function(e){return r.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),r.a.createElement(T.a,{renderText:function(e){return r.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:t.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"}))};var K=function(){var e=_(),a=Object(s.a)(e,2),t=a[0],c=(t.basket,t.user),i=(a[1],Object(n.useState)([])),l=Object(s.a)(i,2),m=l[0],o=l[1];return Object(n.useEffect)((function(){c?f.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):o([])}),[c]),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Your Orders"),r.a.createElement("div",{className:"orders__order"},null===m||void 0===m?void 0:m.map((function(e){return r.a.createElement(Z,{order:e})}))))},X=t(53),J=(t(108),t(54)),V=t.n(J);var $=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("img",{src:V.a}))},q=Object(X.a)("pk_live_51HPvUtB1fbBTGpJWMAf2cmBzt9ZZtGqhBWF1Kva7LyIc0v2y4x361nzVMry1utCTALLtnqElOKtT9pBzy4ikWP2H002ZYjZpk6");var ee=function(){var e=_(),a=Object(s.a)(e,2);Object(l.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){N.onAuthStateChanged((function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/orders"},r.a.createElement(b,null),r.a.createElement(K,null)),r.a.createElement(C.a,{path:"/login"},r.a.createElement(x,null)),r.a.createElement(C.a,{path:"/checkout"},r.a.createElement(b,null),r.a.createElement(D,null)),r.a.createElement(C.a,{path:"/payment"},r.a.createElement(b,null),r.a.createElement(W.Elements,{stripe:q},r.a.createElement(F,null))),r.a.createElement(C.a,{path:"/"},r.a.createElement(b,null),r.a.createElement(y,null),r.a.createElement(O,null),r.a.createElement($,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,{initialState:{basket:[],user:null},reducer:M},r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,a,t){e.exports=t.p+"static/media/footer.b2b0baa7.png"},56:function(e,a,t){e.exports=t(110)},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},88:function(e,a,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.de6460e2.chunk.js.map