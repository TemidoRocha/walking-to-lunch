(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},a={app:0},n=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"05c3":function(t){t.exports=JSON.parse('{"walk to lunch":"en marche pour le déjeuner","coordinates":"coordonnées","name":"nom","code":"code","typology":"typologie","distance":"distance","measure":"mesure","duration":"durée","dificulty":"difficultée","search words":"mots de recherche","url":"url","high":"élevée","medium":"moyenne","low":"faible","round":"circulaire","linear":"linéaire","linear (with return)":"linear (with return)","show all tracks":"show all tracks","filter options":"filter options","password":"password","submit":"submit"}')},"076e":function(t,e,r){"use strict";r("b247")},"28d9":function(t,e,r){"use strict";r("2d6d")},"2d6d":function(t,e,r){},"2e7a":function(t){t.exports=JSON.parse('{"walk to lunch":"walk to lunch","coordinates":"coordinates","name":"name","code":"code","typology":"typology","distance":"distance","measure":"measure","duration":"duration","dificulty":"dificulty","search words":"search words","url":"url","high":"high","medium":"medium","low":"low","round":"round","linear":"linear","linear (with return)":"linear (with return)","show all tracks":"show all tracks","filter options":"filter options","password":"password","submit":"submit"}')},5318:function(t,e,r){var o={"./en.json":"2e7a","./fr.json":"05c3","./pt.json":"804b"};function a(t){var e=n(t);return r(e)}function n(t){if(!r.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=n,t.exports=a,a.id="5318"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("toolbar"),r("router-view")],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{color:"grey lighten-4",flat:"",height:"75px",tile:""}},[r("v-app-bar",{attrs:{dense:""}},[r("img",{staticClass:"bRadios8mr10",attrs:{src:t.getPublicPath+"xistov01.ico",alt:"favicon"}}),"xs"==t.$vuetify.breakpoint.name&&t.isCollapse?t._e():r("v-toolbar-title",[t._v(t._s(t.$t("walk to lunch")))]),"xs"==t.$vuetify.breakpoint.name&&t.isCollapse?t._e():r("v-spacer"),"xs"==t.$vuetify.breakpoint.name?r("v-btn",{attrs:{icon:""},on:{click:t.toggleXs}},[t.isCollapse?r("v-icon",[t._v("mdi-arrow-left")]):r("v-icon",[t._v("mdi-magnify")])],1):t._e(),"xs"!=t.$vuetify.breakpoint.name||t.isCollapse?[r("v-text-field",{attrs:{"hide-details":"","single-line":""},on:{keyup:t.searchHikes},model:{value:t.searchHikingSpot,callback:function(e){t.searchHikingSpot=e},expression:"searchHikingSpot"}}),r("v-btn",{attrs:{icon:""},on:{click:t.searchHikes}},[r("v-icon",[t._v("mdi-magnify")])],1)]:t._e(),r("i18n")],2)],1)},s=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"locale-changer"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.$i18n.locale,expression:"$i18n.locale"}],attrs:{value:"en"},on:{click:t.changeMetaTag,change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$i18n,"locale",e.target.multiple?r:r[0])}}},t._l(t.langs,(function(e,o){return r("option",{key:"Lang"+o,domProps:{value:e}},[t._v(t._s(e))])})),0)])},c=[],u={name:"locale-changer",data:function(){return{langs:["en","fr","pt"]}},methods:{changeMetaTag:function(){var t=document.documentElement;t.setAttribute("lang",this.$i18n.locale),t.setAttribute("xml:lang",this.$i18n.locale)}}},d=u,m=(r("076e"),r("2877")),p=Object(m["a"])(d,l,c,!1,null,null,null),f=p.exports,v={name:"toolbar",components:{i18n:f},data:function(){return{isCollapse:!1,searchHikingSpot:""}},computed:{getPublicPath:function(){return this.$store.getters.getPublicPath}},methods:{toggleXs:function(){this.isCollapse=!this.isCollapse},searchHikes:function(){this.$store.commit("filterHikes",this.searchHikingSpot)}}},h=v,g=r("6544"),b=r.n(g),k=r("40dc"),w=r("8336"),x=r("b0af"),_=r("132d"),y=r("2fa4"),$=r("8654"),S=r("2a7f"),C=Object(m["a"])(h,i,s,!1,null,null,null),A=C.exports;b()(C,{VAppBar:k["a"],VBtn:w["a"],VCard:x["a"],VIcon:_["a"],VSpacer:y["a"],VTextField:$["a"],VToolbarTitle:S["a"]});var O={name:"App",components:{toolbar:A},created:function(){this.$store.dispatch("setAllHikingSpots")}},V=O,j=(r("034f"),Object(m["a"])(V,a,n,!1,null,null,null)),H=j.exports,L=r("bc3a"),R=r.n(L),I=r("2106"),P=r.n(I),T=(r("6cc5"),r("4160"),r("d3b7"),r("ac1f"),r("466d"),r("159b"),r("ddb0"),r("a925"));function E(){var t=r("5318"),e={};return t.keys().forEach((function(r){var o=r.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var a=o[1];e[a]=t(r)}})),e}o["a"].use(T["a"]);var U=new T["a"]({locale:"pt",fallbackLocale:"pt",messages:E()}),M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-form",[r("v-container",[t.getUserId?t._e():r("v-row",[t.isSignup&&t.signupFalse?r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[r("v-text-field",{attrs:{label:t.$t("name"),solo:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1):t._e(),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"email",placeholder:"xxx@xxx.xx",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[r("v-text-field",{attrs:{label:t.$t("password"),solo:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[t.getUserId?t._e():r("v-btn",{attrs:{small:"",color:"primary",dark:""},on:{click:t.submit}},[t._v(" submit ")])],1),r("v-col",{attrs:{cols:"6"}},[t.isSignup||t.getUserId?t._e():r("v-btn",{attrs:{small:"",color:"primary",dark:""},on:{click:function(e){t.isSignup=!0}}},[t._v(" signup ")]),t.isSignup&&!t.getUserId?r("v-btn",{attrs:{small:"",color:"primary",dark:""},on:{click:function(e){t.isSignup=!1}}},[t._v(" login ")]):t._e()],1)],1)],1)],1),t.getUserId?r("div",[r("v-form",[r("v-container",[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{attrs:{small:"",color:"primary",dark:""},on:{click:t.logout}},[t._v(" logout ")])],1)],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:t.$t("latitude"),solo:""},model:{value:t.form.latitude,callback:function(e){t.$set(t.form,"latitude",e)},expression:"form.latitude"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:t.$t("longitude"),solo:""},model:{value:t.form.longitude,callback:function(e){t.$set(t.form,"longitude",e)},expression:"form.longitude"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:t.$t("name"),solo:"",placeholder:"Trilho do Linho"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:t.$t("code"),solo:"",placeholder:"ALB - PR1"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-container",{staticClass:"px-0",attrs:{fluid:""}},[r("v-radio-group",{model:{value:t.form.typology,callback:function(e){t.$set(t.form,"typology",e)},expression:"form.typology"}},[r("v-radio",{key:"round",attrs:{label:t.$t("round"),value:"round"}}),r("v-radio",{key:"linear",attrs:{label:t.$t("linear"),value:"linear"}})],1)],1)],1)],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:t.$t("distance"),solo:"",placeholder:"45.6"},model:{value:t.form.distance,callback:function(e){t.$set(t.form,"distance",t._n(e))},expression:"form.distance"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:t.$t("measure"),solo:"",disabled:""},model:{value:t.form.measure,callback:function(e){t.$set(t.form,"measure",e)},expression:"form.measure"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:t.$t("duration"),solo:"",placeholder:"01:00"},model:{value:t.form.duration0,callback:function(e){t.$set(t.form,"duration0",t._n(e))},expression:"form.duration0"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:t.$t("duration"),solo:"",placeholder:"01:30",disabled:!t.form.duration0},model:{value:t.form.duration1,callback:function(e){t.$set(t.form,"duration1",t._n(e))},expression:"form.duration1"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-container",{staticClass:"px-0",attrs:{fluid:""}},[r("v-radio-group",{model:{value:t.form.dificulty,callback:function(e){t.$set(t.form,"dificulty",e)},expression:"form.dificulty"}},[r("v-radio",{key:"low",attrs:{label:t.$t("low"),value:"low"}}),r("v-radio",{key:"medium",attrs:{label:t.$t("medium"),value:"medium"}}),r("v-radio",{key:"high",attrs:{label:t.$t("high"),value:"high"}})],1)],1)],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{label:t.$t("search words"),solo:"",placeholder:"Vilarinho São Roque, ALBERGARIA A VELHA"},model:{value:t.form.searchWords,callback:function(e){t.$set(t.form,"searchWords",e)},expression:"form.searchWords"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:t.$t("url"),solo:"",placeholder:"ALB_pr2_trilho_dos_tres_rios_folheto.pdf"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{small:"",color:"primary",dark:""},on:{click:t.inertHike}},[t._v(" insert track ")])],1)],1)],1)],1):t._e()],1)},N=[],B=(r("d81d"),r("b0c0"),r("1276"),r("498a"),r("96cf"),r("1da1")),F=r("5530"),W=r("2f62"),z={name:"InsertHike",data:function(){return{name:"",password:"",email:"",isSignup:!1,form:{latitude:null,longitude:null,name:"",code:"",typology:[""],distance:"",measure:"km",duration:null,dificulty:[""],searchWords:"",url:"",duration0:"",duration1:""},signupFalse:!1}},computed:Object(F["a"])({},Object(W["b"])(["getUserId","getUserName","getUserEmail"])),methods:{submit:function(){this.isSignup?this.$store.dispatch("signUp",{name:this.name,password:this.password,email:this.email}):this.$store.dispatch("login",{password:this.password,email:this.email}),this.name=null,this.password=null,this.email=null},logout:function(){this.$store.commit("logout")},inertHike:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.post("api/hikings",{name:t.form.name,coordinates:[t.form.latitude,t.form.longitude],code:t.form.code,typology:t.form.typology,distance:t.form.distance,measure:t.form.measure,duration:t.form.duration1?[t.form.duration0,t.form.duration1]:[t.form.duration0],dificulty:t.form.dificulty,searchWords:t.form.searchWords.split(",").map((function(t){return t.trim()}))});case 3:r=e.sent,console.dir(r),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.dir(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},J=z,G=r("62ad"),D=r("a523"),X=r("4bd4"),q=r("67b6"),Z=r("43a6"),K=r("0fd9"),Q=r("a844"),Y=Object(m["a"])(J,M,N,!1,null,null,null),tt=Y.exports;b()(Y,{VBtn:w["a"],VCol:G["a"],VContainer:D["a"],VForm:X["a"],VRadio:q["a"],VRadioGroup:Z["a"],VRow:K["a"],VTextField:$["a"],VTextarea:Q["a"]});var et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("leafletMap"),r("hikeCards")],1)},rt=[],ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"maxwidth100"},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{"no-gutters":""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"2",sm:"4",md:"2"}},[r("v-card-title",[t._v(t._s(t.$t("filter options")))])],1),r("v-col",{attrs:{cols:"4",sm:"4",md:"4"}},[r("v-checkbox",{attrs:{label:t.$t("show all tracks"),color:"red","hide-details":""},on:{click:t.showAllMethod},model:{value:t.showAll,callback:function(e){t.showAll=e},expression:"showAll"}})],1)],1)],1)],1)],1),r("v-row",{attrs:{dense:""}},t._l(t.getHikingsCards,(function(e){return r("v-col",{key:e.id,attrs:{cols:"xs"==t.$vuetify.breakpoint.name?"12":"6"}},[r("v-card",{attrs:{color:"#385F73",dark:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"xs"==t.$vuetify.breakpoint.name?"12":"6"}},[r("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(e.name)+" ")]),r("v-card-subtitle",[t._v(" "+t._s(e.code))])],1),r("v-col",{attrs:{cols:"xs"==t.$vuetify.breakpoint.name?"12":"6"}},[r("v-list",{attrs:{dense:"",color:"#385F73",dark:""}},[r("v-list-item-group",[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(""+t.$t("coordinates")))]),r("v-list-item-subtitle",[t._v("lat: "+t._s(e.coordinates[0])+", long: "+t._s(e.coordinates[1]))])],1)],1),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(""+t.$t("typology"))+": "+t._s(""+t.$t(e.typology)))])],1)],1),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(""+t.$t("distance"))+": "+t._s(e.distance)+" "+t._s(e.measure))])],1)],1),r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t("duration")+":")+" "+t._s(e.duration))]),r("v-list-item-subtitle",[t._v(t._s(t.$t("dificulty")+":")+" "+t._s(""+t.$t(e.dificulty)))])],1)],1)],1)],1)],1),r("v-col",{attrs:{cols:"12"}},[r("v-card-actions",[r("v-btn",{attrs:{text:""}},[t._v("download")])],1)],1)],1)],1)],1)})),1)],1)},at=[],nt={data:function(){return{}},computed:Object(F["a"])(Object(F["a"])({},Object(W["b"])(["getHikingsCards"])),{},{showAll:{get:function(){return this.$store.state.showAll},set:function(t){this.$store.commit("updateShowAll",t)}}}),methods:{showAllMethod:function(){this.$store.commit("setHikingCardsIsShowAll",this.showAll)}}},it=nt,st=(r("28d9"),r("99d9")),lt=r("ac7c"),ct=r("8860"),ut=r("da13"),dt=r("5d23"),mt=r("1baa"),pt=Object(m["a"])(it,ot,at,!1,null,"694c9642",null),ft=pt.exports;b()(pt,{VBtn:w["a"],VCard:x["a"],VCardActions:st["a"],VCardSubtitle:st["b"],VCardTitle:st["d"],VCheckbox:lt["a"],VCol:G["a"],VContainer:D["a"],VList:ct["a"],VListItem:ut["a"],VListItemContent:dt["a"],VListItemGroup:mt["a"],VListItemSubtitle:dt["b"],VListItemTitle:dt["c"],VRow:K["a"]});var vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"grey lighten-5 mb-6",attrs:{fluid:""}},[r("v-row",{staticStyle:{height:"75vh"},attrs:{"no-gutters":""}},[r("v-col",[r("l-map",{ref:"myMap",staticStyle:{width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[r("l-tile-layer",{attrs:{url:t.url}}),t._l(t.getHikingsSpots,(function(e){return r("l-circle-marker",{key:e._id,attrs:{"lat-lng":e.coordinates,radius:t.circle.radius,color:t.circle.color[e.dificulty]},on:{click:t.popupTriggered}},[r("l-popup",[r("v-card-subtitle",[t._v(" "+t._s(e.code)+" ")]),r("v-card-text",[t._v(" "+t._s(e.name)+" ")]),r("v-card-text",[t._v(" "+t._s(t.$t("distance"))+": "+t._s(e.distance)+" | "+t._s(t.$t("duration"))+": "+t._s(e.duration[0])+" "+t._s(e.duration[1]?", "+e.duration[1]:""))]),r("v-btn",{on:{click:function(r){return t.downloadHike(e.url)}}},[t._v("download")])],1)],1)}))],2)],1)],1)],1)},ht=[],gt=(r("3ca3"),r("2b3d"),r("ea97")),bt=r("2699"),kt=r("f60f"),wt=r("a40a"),xt={name:"App",components:{LCircleMarker:gt["a"],LMap:bt["a"],LPopup:kt["a"],LTileLayer:wt["a"]},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:6,center:[39.673561490554924,-8.146644540267728],bounds:null,circle:{radius:6,color:{low:"green",medium:"yellow",high:"red"}},hikingSpots:[]}},computed:Object(F["a"])({},Object(W["b"])(["getHikingsSpots"])),methods:{popupTriggered:function(t){this.$store.commit("filterHikingCards",t.target._popup._content.firstChild.innerText)},downloadHike:function(t){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function r(){var o,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.axios.get("/api/downloadPdf/".concat(t),{responseType:"arraybuffer",headers:{"Content-Type":"application/json",Accept:"application/pdf"}});case 3:o=r.sent,a=window.URL.createObjectURL(new Blob([o.data])),n=document.createElement("a"),n.href=a,n.setAttribute("download","".concat(t,".pdf")),document.body.appendChild(n),n.click(),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),console.error(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}},_t=xt,yt=Object(m["a"])(_t,vt,ht,!1,null,null,null),$t=yt.exports;b()(yt,{VBtn:w["a"],VCardSubtitle:st["b"],VCardText:st["c"],VCol:G["a"],VContainer:D["a"],VRow:K["a"]});var St={name:"Leaflet",components:{leafletMap:$t,hikeCards:ft}},Ct=St,At=Object(m["a"])(Ct,et,rt,!1,null,null,null),Ot=At.exports,Vt=[{path:"/",component:Ot},{path:"/insert-hike",component:tt}],jt=(r("4de4"),r("caad"),r("c975"),r("fb6a"),r("45fc"),r("2532"),r("2909"));o["a"].use(W["a"]);var Ht=new W["a"].Store({state:{publicPath:"/",userId:null,userEmail:null,userName:null,hikingSpotsApi:[],hikingSpots:[],showAll:!1,hikingCards:[]},getters:{getPublicPath:function(t){return t.publicPath},getUserId:function(t){return t.userId},getUserName:function(t){return t.userEmail},getUserEmail:function(t){return t.userName},getHikingsSpotsApi:function(t){return t.hikingSpotsApi},getHikingsSpots:function(t){return t.hikingSpots},getHikingsCards:function(t){return t.hikingCards},getShowAll:function(t){return t.showAll}},mutations:{setUser:function(t,e){t.userId=e._id,t.userEmail=e.email,t.userName=e.name},logout:function(t){t.userId=null,t.userEmail=null,t.userName=null},setAllHikingSpots:function(t,e){t.hikingSpotsApi=Object(jt["a"])(e),t.hikingSpots=Object(jt["a"])(e)},filterHikes:function(t,e){t.hikingSpots=e?t.hikingSpotsApi.filter((function(t){return t.searchWords.some((function(t){return t.toLowerCase().indexOf(e.toLowerCase())>=0}))})):t.hikingSpotsApi},filterHikingCards:function(t,e){e?(t.showAll=!1,t.hikingCards=t.hikingSpotsApi.filter((function(t){return t.code.includes(e.slice(1,4))}))):t.hikingCards=[]},setHikingCardsIsShowAll:function(t,e){t.hikingCards=e?t.hikingSpotsApi:[]},updateShowAll:function(t,e){t.showAll=e}},actions:{signUp:function(t,e){return Object(B["a"])(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=t.commit,r.prev=1,r.next=4,R.a.post("/api/authentication/sign-up",e);case 4:a=r.sent,o("setUser",a.data.user),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),console.dir(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},login:function(t,e){return Object(B["a"])(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=t.commit,r.prev=1,r.next=4,R.a.post("/api/authentication/sign-in",e);case 4:a=r.sent,o("setUser",a.data.user),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),console.dir(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},setAllHikingSpots:function(t){return Object(B["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,R.a.get("/api/all-hikings");case 4:o=e.sent,r("setAllHikingSpots",o.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}}),Lt=r("8c4f"),Rt=r("f309");o["a"].use(Rt["a"]);var It=new Rt["a"]({});o["a"].use(P.a,R.a),o["a"].use(Lt["a"]);var Pt=new Lt["a"]({routes:Vt});o["a"].config.productionTip=!1,new o["a"]({i18n:U,router:Pt,store:Ht,vuetify:It,render:function(t){return t(H)}}).$mount("#app")},"804b":function(t){t.exports=JSON.parse('{"walk to lunch":"a caminho do almoço","coordinates":"coordenadas","name":"nome","code":"código","typology":"tipologia","distance":"distância","measure":"medida","duration":"duração","dificulty":"dificuldade","search words":"palavras de busca","url":"url","high":"alta","medium":"média","low":"baixa","round":"circular","linear":"linear","linear (with return)":"linear (com regresso)","show all tracks":"mostrar todos os percursos","filter options":"filtros","password":"palavra-passe","submit":"enviar"}')},"85ec":function(t,e,r){},b247:function(t,e,r){}});
//# sourceMappingURL=app.eac1f1ac.js.map