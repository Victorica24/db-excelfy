webpackJsonp([1],{"+ODQ":function(module,exports){module.exports={render:function(){with(this)return _c("svg",{attrs:{viewBox:"0 0 710 497",xmlns:"http://www.w3.org/2000/svg"}},[_c("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[_c("path",{attrs:{fill:"#FFF","fill-rule":"nonzero",d:"M664.15 459.405H41.726V33.13h622.422z"}}),_c("path",{attrs:{d:"M98.204 87.03h124.672c77.803 0 123.5 50.15 123.5 158.417 0 115.298-47.806 161.465-123.5 161.465H98.204V87.03zm283.09 0H520.73c58.352 0 87.645 35.152 87.645 75.693 0 53.197-31.168 71.241-55.305 76.397v1.406c36.089 4.687 68.663 30.23 68.663 79.21-.235 52.727-38.433 87.176-109.674 87.176H381.294V87.03zm-205.99 50.15h27.418c44.292 0 67.726 31.87 67.726 106.861 0 86.005-27.418 111.783-66.32 111.783h-28.824V137.18zm282.387-.469h29.527c30.231 0 42.651 16.873 42.651 36.558 0 23.903-12.889 40.542-43.12 40.542h-29.058v-77.1zm0 137.327h36.323c35.855 0 45.463 17.341 45.463 40.073 0 26.48-19.216 41.713-44.994 41.713h-36.792v-81.786zM73.129.79h563.602c40.073 0 72.647 32.34 72.647 72.412v345.895c0 40.073-32.574 72.647-72.647 72.647H73.129c-40.073 0-72.412-32.574-72.412-72.647V73.203C.717 33.13 33.057.791 73.129.791zm.938 49.446h561.96c12.421 0 22.498 10.077 22.498 22.498v346.831c0 12.42-10.077 22.497-22.497 22.497H74.067c-12.42 0-22.497-10.076-22.497-22.497V72.735c0-12.42 10.076-22.498 22.497-22.498z",fill:"#EC1B2D"}})])])}}},"1Ak+":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"site__header"},[a("div",{staticClass:"site__header--left"},[a("Logo",{staticClass:"site__logo"}),t._v(" "),a("h3",{staticClass:"site__title"},[t._v(t._s(t.title))])],1),t._v(" "),a("div",{staticClass:"site__header--center"}),t._v(" "),a("div",{staticClass:"site__header--right"})]),t._v(" "),a("nav",{staticClass:"site__navigation"})])},i=[],n={render:s,staticRenderFns:i};e.a=n},"1FMP":function(t,e){},"2C+1":function(t,e,a){"use strict";function s(t){a("F3sX")}var i=a("AYtL"),n=a("xGoJ"),r=a("VU/8"),o=s,l=r(i.a,n.a,!1,o,"data-v-f6a3064e",null);e.a=l.exports},AYtL:function(t,e,a){"use strict";e.a={name:"loadingIndicator",props:["caption"]}},"Brq/":function(t,e,a){"use strict";e.a={name:"site-footer",props:["copyrights"]}},CiIy:function(t,e){},F3sX:function(t,e){},JwYN:function(t,e,a){"use strict";function s(t){a("xODO")}var i=a("auYY"),n=a("1Ak+"),r=a("VU/8"),o=s,l=r(i.a,n.a,!1,o,"data-v-0c35d880",null);e.a=l.exports},M93x:function(t,e,a){"use strict";function s(t){a("1FMP")}var i=a("xJD8"),n=a("U4m7"),r=a("VU/8"),o=s,l=r(i.a,n.a,!1,o,null,null);e.a=l.exports},MjzB:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("M93x"),n=a("YaEn"),r=a("CiIy");a.n(r);s.default.config.productionTip=!1,new s.default({el:"#app",router:n.a,template:"<App/>",components:{App:i.a}})},PoCO:function(t,e){},S7Ll:function(t,e,a){"use strict";function s(t){a("MjzB")}var i=a("Brq/"),n=a("t/hu"),r=a("VU/8"),o=s,l=r(i.a,n.a,!1,o,"data-v-1fe717ca",null);e.a=l.exports},U4m7:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("site-template",[a("site-header",{attrs:{slot:"header",title:t.title},slot:"header"}),t._v(" "),a("div",{staticClass:"app__content",attrs:{id:"app"}},[a("router-view")],1),t._v(" "),a("site-footer",{attrs:{slot:"footer",copyrights:t.copyrights},slot:"footer"})],1)},i=[],n={render:s,staticRenderFns:i};e.a=n},Uaxh:function(t,e,a){"use strict";var s=a("2jId"),i=(a.n(s),a("mtWM")),n=a.n(i),r=a("2C+1");a("7+uW").default.filter("translateError",function(t){return{minOneFilled:"One field must be filled",required:"Field entry is required",email:"Field entry is not a valid email",phone:"Field entry is not a valid phone number",weblink:"Field entry is not a valid link address"}[t]||t}),e.a={name:"ExcelPage",data:function(){return{focused:!0,headline:"Import",uploadState:"",uploadMessage:"Choose a file ...",showLoadingIndicator:!1,records:[],wrongData:[],unhadledError:!1,validationState:"",validationMessage:""}},components:{LoadingIndicator:r.a},computed:{hasValidationError:function(){return"error"===this.validationState},hasValidationSuccess:function(){return"success"===this.validationState},getCSV:function(){return"/api/download/"+this.records.file}},methods:{uploadFile:function(){var t=this,e=new FormData,a=document.getElementById("fileinput"),s=document.getElementById("uploadForm");e.append("excelfile",a.files[0]),this.showLoadingIndicator=!0,this.unhadledError=!1,this.records=[],this.wrongRecords=[],this.uploadState="",this.validationState="",this.validationMessage="",this.uploadMessage="Uploading file "+a.files[0].name,n.a.post("/api/upload",e).then(function(e){try{t.uploadState="success",t.records=e.data,t.uploadMessage="Upload successful",t.validateData()}catch(e){console.log(e),t.unhadledError=!0,t.validationState="error",t.validationMessage="Unhadled error"}s.reset(),t.showLoadingIndicator=!1}).catch(function(e){t.uploadState="error",t.uploadMessage=(e.response.data.message||"Wrong file")+" "+a.files[0].name,s.reset(),t.showLoadingIndicator=!1})},validateData:function(){this.wrongRecords=this.records.records.filter(function(t){return t.errors.length>0}),this.wrongRecords.length>0?this.validationState="error":this.validationState="success"}},directives:{focus:s.focus}}},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),i=a("/ocq"),n=a("oRBx");s.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:n.a}]})},auYY:function(t,e,a){"use strict";var s=a("+ODQ"),i=a.n(s);e.a={name:"site-header",props:["title"],methods:{},components:{Logo:i.a}}},dJw3:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"template"},[a("header",{staticClass:"template__header"},[t._t("header")],2),t._v(" "),a("main",{staticClass:"template__content"},[t._t("default")],2),t._v(" "),a("footer",{staticClass:"template__footer"},[t._t("footer")],2)])},i=[],n={render:s,staticRenderFns:i};e.a=n},iyzt:function(t,e){},mmLQ:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"excel__container"},[a("div",{staticClass:"excel__content"},[a("section",{staticClass:"excel__sections section__load boxShadow",class:t.uploadState,attrs:{id:"section-load"}},[a("div",{staticClass:"counter"},[t._v("1")]),t._v(" "),a("h2",[t._v("Upload your file . . .")]),t._v(" "),a("div",{staticClass:"box"},[a("form",{staticClass:"excel__upload-form",attrs:{id:"uploadForm"}},[a("input",{staticClass:"inputfile",attrs:{type:"file",name:"fileinput",id:"fileinput","data-multiple-caption":"{count} files selected",multiple:""},on:{change:t.uploadFile}}),t._v(" "),a("label",{attrs:{for:"fileinput"}},[a("figure",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",viewBox:"0 0 20 17"}},[a("path",{attrs:{d:"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"}})])]),t._v(" "),a("span",{attrs:{id:"message-load"}},[t._v(t._s(t.uploadMessage))])]),t._v(" "),t.showLoadingIndicator?a("loading-indicator"):t._e()],1)])]),t._v(" "),a("section",{staticClass:"excel__sections section__validation boxShadow",class:t.validationState,attrs:{id:"section-processed"}},[a("div",{staticClass:"counter"},[t._v("2")]),t._v(" "),a("h2",[t._v("Data validation. . .")]),t._v(" "),t.hasValidationSuccess?a("div",{staticClass:"box"},[a("h2",[t._v("Excelfile data is valid")])]):t._e(),t._v(" "),t.unhadledError?a("div",{staticClass:"box"},[a("h2",[t._v(t._s(t.validationMessage))])]):t._e(),t._v(" "),t.hasValidationError&&!t.unhadledError?a("div",{staticClass:"box"},[a("h2",[t._v(t._s(t.wrongRecords.length)+" invalid records of "+t._s(t.records.records.length))])]):t._e(),t._v(" "),t.hasValidationError&&!t.unhadledError?a("div",{staticClass:"error__records"},t._l(t.wrongRecords,function(e){return a("div",{staticClass:"error__record"},[a("div",{staticClass:"error__line"},[t._v(t._s(e.column_id))]),t._v(" "),a("div",{staticClass:"error__details"},t._l(e.errors,function(e){return a("div",{staticClass:"error__detail"},[t._v(t._s(t._f("translateError")(e.validation_type))+" on "+t._s(e.validation_fields))])}))])})):t._e()]),t._v(" "),a("section",{staticClass:"excel__sections section__export boxShadow",attrs:{id:"section-export"}},[a("div",{staticClass:"counter"},[t._v("3")]),t._v(" "),a("h2",[t._v("Download CSV file . . .")]),t._v(" "),"success"!==t.uploadState||t.unhadledError?t._e():a("div",{staticClass:"box"},[a("a",{staticClass:"button__download",attrs:{href:t.getCSV,download:""}},[a("figure",[a("svg",{attrs:{height:"26px",version:"1.1",viewBox:"0 0 16 16",width:"26px",xmlns:"http://www.w3.org/2000/svg"}},[a("title"),a("defs"),a("g",{attrs:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"}},[a("g",{attrs:{fill:"#000000",id:"Group",transform:"translate(-480.000000, 0.000000)"}},[a("path",{attrs:{d:"M495,11 L495,15 L481,15 L481,11 L480.975342,11 L484,2 L486,2 L486,3 L484.571429,3 L482,11 L494,11 L491.428571,3 L490,3 L490,2 L492,2 L495.00354,11 Z M487,1 L489,1 L489,6 L491,6 L488,10 L485,6 L487,6 Z M486,12 L486,13 L490,13 L490,12 Z M486,12"}})])])])]),t._v(" "),a("span",[t._v("Download CSV file")])])])])])])},i=[],n={render:s,staticRenderFns:i};e.a=n},nAsn:function(t,e,a){"use strict";e.a={name:"template"}},oRBx:function(t,e,a){"use strict";function s(t){a("PoCO")}var i=a("Uaxh"),n=a("mmLQ"),r=a("VU/8"),o=s,l=r(i.a,n.a,!1,o,"data-v-e7cf1e40",null);e.a=l.exports},"t/hu":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"site__footer",attrs:{slot:"footer"},slot:"footer"},[t._v("\n    "+t._s(t.copyrights)+"\n")])},i=[],n={render:s,staticRenderFns:i};e.a=n},tgXt:function(t,e,a){"use strict";function s(t){a("iyzt")}var i=a("nAsn"),n=a("dJw3"),r=a("VU/8"),o=s,l=r(i.a,n.a,!1,o,null,null);e.a=l.exports},xGoJ:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"},[t._m(0),t._v(" "),t.caption?a("h1",[t._v(t._s(t.caption))]):t._e()])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"indicator"},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])}],n={render:s,staticRenderFns:i};e.a=n},xJD8:function(t,e,a){"use strict";var s=a("tgXt"),i=a("JwYN"),n=a("S7Ll");e.a={name:"app",data:function(){return{title:"EVI Excel Import",copyrights:"© Deutsche Bahn AG"}},components:{SiteTemplate:s.a,SiteHeader:i.a,SiteFooter:n.a}}},xODO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bd8bbace689eb6c2a10b.js.map