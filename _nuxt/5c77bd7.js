(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,9,13],{343:function(t,e,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(92).default)("12ce9248",content,!0,{sourceMap:!1})},344:function(t,e,r){"use strict";var n=r(12),o=r(6),c=r(75),l=r(20),d=r(16),f=r(52),m=r(131),v=r(73),h=r(8),y=r(59),x=r(74).f,k=r(40).f,_=r(18).f,j=r(346).trim,C="Number",w=o.Number,N=w.prototype,I=f(y(N))==C,O=function(t){var e,r,n,o,c,l,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=j(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c(C,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var E,S=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof S&&(I?h((function(){N.valueOf.call(r)})):f(r)!=C)?m(new w(O(e)),r,S):O(e)},z=n?x(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;z.length>A;A++)d(w,E=z[A])&&!d(S,E)&&_(S,E,k(w,E));S.prototype=N,N.constructor=S,l(o,C,S)}},345:function(t,e,r){"use strict";r.r(e);r(344),r(27);var n={props:{name:{type:String,required:!0},size:{type:[Number,Array]}},computed:{className:function(){return"icon icon-"+this.name}}},o=(r(349),r(51)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg-icon",{class:t.className,style:{width:("object"==typeof t.size?t.size[0]:t.size)+"px",height:("object"==typeof t.size?t.size[1]:t.size)+"px"},attrs:{name:t.name}})}),[],!1,null,"3d070ce6",null);e.default=component.exports},346:function(t,e,r){var n=r(26),o="["+r(347)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},347:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},349:function(t,e,r){"use strict";r(343)},350:function(t,e,r){var n=r(91)((function(i){return i[1]}));n.push([t.i,".icon[data-v-3d070ce6]{\n  display:block;\n  fill:currentColor\n}",""]),t.exports=n},351:function(t,e,r){"use strict";r.r(e);var n={props:{size:{type:String,default:"default"},theme:{type:String,default:"purple"},tag:{type:String,default:"button"},type:{type:String}},computed:{sizeClasses:function(){var t="";switch(this.size){case"default":t="px-6 lg:px-3 py-3 lg:py-2 text-sm lg:text-xs lg:font-medium";break;case"small":t="px-3 py-2 text-xs font-medium"}return t},themeClasses:function(){var t="";switch(this.theme){case"purple":t="text-white bg-purple-600 hover:bg-purple-700";break;case"black":t="text-white bg-gray-900 hover:bg-gray-800";break;case"gray":t="text-gray-500 bg-gray-50 hover:bg-gray-100";break;case"gray-transparent":t="text-gray-500 hover:bg-gray-50"}return t}}},o=r(51),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",staticClass:"rounded transition-colors",class:[t.sizeClasses,t.themeClasses],attrs:{type:t.type},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},352:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(p,t,e){if("number"!=typeof p||p<-1||p>1||"string"!=typeof t||"r"!=t[0]&&"#"!=t[0]||e&&"string"!=typeof e)return null;var r=function(t){var e=t.length,r={};if(e>9){if((t=t.split(",")).length<3||t.length>4)return null;r[0]=i(t[0].split("(")[1]),r[1]=i(t[1]),r[2]=i(t[2]),r[3]=t[3]?parseFloat(t[3]):-1}else{if(8==e||6==e||e<4)return null;e<6&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+(e>4?""+t[4]+t[4]:"")),t=i(t.slice(1),16),r[0]=t>>16&255,r[1]=t>>8&255,r[2]=255&t,r[3]=-1,9!=e&&5!=e||(r[3]=n(r[2]/255*1e4)/1e4,r[2]=r[1],r[1]=r[0],r[0]=t>>24&255)}return r},i=parseInt,n=Math.round,o=t.length>9,b=(o="string"==typeof e?e.length>9||"c"==e&&!o:o,p<0),c=(p=b?-1*p:p,e=e&&"c"!=e?e:b?"#000000":"#FFFFFF",r(t)),l=r(e);return c&&l?o?"rgb"+(c[3]>-1||l[3]>-1?"a(":"(")+n((l[0]-c[0])*p+c[0])+","+n((l[1]-c[1])*p+c[1])+","+n((l[2]-c[2])*p+c[2])+(c[3]<0&&l[3]<0?")":","+(c[3]>-1&&l[3]>-1?n(1e4*((l[3]-c[3])*p+c[3]))/1e4:l[3]<0?c[3]:l[3])+")"):"#"+(4294967296+16777216*n((l[0]-c[0])*p+c[0])+65536*n((l[1]-c[1])*p+c[1])+256*n((l[2]-c[2])*p+c[2])+(c[3]>-1&&l[3]>-1?n(255*((l[3]-c[3])*p+c[3])):l[3]>-1?n(255*l[3]):c[3]>-1?n(255*c[3]):255)).toString(16).slice(1,c[3]>-1||l[3]>-1?void 0:-2):null}},354:function(t,e,r){var content=r(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(92).default)("88f75748",content,!0,{sourceMap:!1})},358:function(t,e,r){"use strict";r(354)},359:function(t,e,r){var n=r(91)((function(i){return i[1]}));n.push([t.i,'.project-card[data-v-6b22ad38]{\n  -moz-column-break-inside:avoid;\n       break-inside:avoid\n}\n@media (max-width: 1023px){\n.project-card .row[data-v-6b22ad38]:not(:first-child){\n    margin-top:1rem\n}\n}\n.project-card .row:not(:first-child) td[data-v-6b22ad38]{\n  padding-top:0.5rem\n}\n@media (max-width: 1023px){\n.project-card .row:not(:first-child) td[data-v-6b22ad38]{\n    padding-top:0px\n}\n}\n.project-card .github-link[data-v-6b22ad38]:hover,.project-card .link[data-v-6b22ad38]:hover{\n  color:var(--color)\n}\n.project-card .description[data-v-6b22ad38]  li{\n  padding-left:1.8rem;\n  position:relative\n}\n.project-card .description[data-v-6b22ad38]  li:before{\n  position:absolute;\n  left:0;\n  top:0\n}\n.project-card .description[data-v-6b22ad38]  ol{\n  counter-reset:counter\n}\n.project-card .description[data-v-6b22ad38]  ol li{\n  counter-increment:counter\n}\n.project-card .description[data-v-6b22ad38]  ol li:before{\n  content:counter(counter) "."\n}\n.project-card .description[data-v-6b22ad38]  ul li:before{\n  content:"—"\n}\n.project-card .description[data-v-6b22ad38]  :not(:first-child){\n  margin-top:1.1428571429em\n}\n.project-card .description[data-v-6b22ad38]  li:not(:first-child){\n  margin-top:.5em\n}\n.project-card .youtube-icon-bg[data-v-6b22ad38]{\n  fill:#000;\n  opacity:.75\n}\n.project-card .video-block:hover .youtube-icon-bg[data-v-6b22ad38]{\n  fill:var(--color);\n  opacity:1\n}',""]),t.exports=n},370:function(t,e,r){"use strict";r.r(e);var n=r(24),o=(r(60),r(132),r(41),r(31),r(32),r(53),r(36),r(54),r(44)),c=r(352),l=r.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"ProjectCard",props:{project:{type:Object,required:!0}},data:function(){return{gitHubRepoStars:0}},mounted:function(){var t=this;this.project.gitHubRepoName&&this.octokit.rest.repos.get({owner:this.project.gitHubRepoName.split("/")[0],repo:this.project.gitHubRepoName.split("/")[1]}).then((function(e){var data=e.data;t.gitHubRepoStars=null==data?void 0:data.stargazers_count.toLocaleString()}))},computed:f(f({},Object(o.b)({categoryColors:"getCategoryColors",projects:"getProjects"})),{},{color:function(){return this.categoryColors[this.project.category][0]},backgroundColor:function(){return l()(.95,this.categoryColors[this.project.category][0])},octokit:function(){return this.$store.state.octokit}})},v=(r(358),r(51)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-card p-10 lg:p-6 rounded",style:"background-color: "+t.backgroundColor+"; --color: "+t.color+";"},[r("div",{staticClass:"flex lg:block"},[r("div",{staticClass:"flex mr-10 lg:mr-0 flex-1 text-zero"},[r("div",{staticClass:"w-8 h-8 lg:w-6 lg:h-6 mr-5 lg:mr-4 mt-0.5 lg:mt-1 inline-block align-middle flex-shrink-0"},[r("a",{staticClass:"block transition-opacity hover:opacity-70",attrs:{href:t.project.link,target:"_blank"},on:{click:function(e){return e.preventDefault(),t.$gtagEvents.externalLinkClick(t.project.link)}}},[r("img",{staticClass:"block w-full h-full transform-gpu",attrs:{src:t.project.logo||"/images/projects/default.svg",alt:"project.name",loading:"lazy"}})])]),t._v(" "),r("div",[r("h3",{staticClass:"text-2xl lg:text-xl font-bold inline mr-5 lg:mr-4 text-gray-900 align-middle"},[r("a",{staticClass:"link transition-colors",attrs:{href:t.project.link,target:"_blank"},on:{click:function(e){return e.preventDefault(),t.$gtagEvents.externalLinkClick(t.project.link)}}},[t._v(t._s(t.project.name))])]),t._v(" "),t.project.gitHubRepoName?r("a",{staticClass:"github-link inline-flex items-center text-gray-400 align-middle transition-colors my-1",attrs:{href:"https://github.com/"+t.project.gitHubRepoName,target:"_blank"},on:{click:function(e){return e.preventDefault(),t.$gtagEvents.externalLinkClick("https://github.com/"+t.project.gitHubRepoName)}}},[r("Icon",{staticClass:"block w-5 h-5 lg:w-4 lg:h-4",attrs:{name:"github"}}),t._v(" "),r("Transition",{attrs:{name:"fade"}},[parseInt(t.gitHubRepoStars)>0?r("div",{staticClass:"text-xs font-medium ml-2 lg:hidden"},[t._v("\n              "+t._s(t.gitHubRepoStars)+"\n            ")]):t._e()])],1):t._e()])]),t._v(" "),r("div",{staticClass:"text-sm lg:text-xs text-gray-400 flex-shrink-0 whitespace-nowrap mt-1.5 lg:mt-2"},[t._v("\n      "+t._s(t.project.category)+"\n    ")])]),t._v(" "),t.project.worksWellWith||t.project.competesWith?r("div",{staticClass:"mt-4 pb-6 border-b border-gray-200"},[r("table",{staticClass:"lg:block"},[t.project.worksWellWith?r("tr",{staticClass:"row lg:block"},[t._m(0),t._v(" "),r("td",{staticClass:"lg:block"},[r("div",{staticClass:"-m-1 flex justify-start flex-wrap"},t._l(t.project.worksWellWith,(function(e,n){return r("div",{key:n,staticClass:"py-1 px-2.5 rounded border border-gray-500table-item m-1",attrs:{target:"_blank"}},[r("span",{staticClass:"text-sm font-semibold align-middle",class:{"mr-2":e.length>1}},[t._v(t._s(e[0]))]),t._v(" "),e[1]?r("span",{staticClass:"text-xs align-middle text-gray-500"},[t._v(t._s(e[1]))]):t._e()])})),0)])]):t._e(),t._v(" "),t.project.competesWith?r("tr",{staticClass:"row lg:block"},[t._m(1),t._v(" "),r("td",{staticClass:"lg:block"},[r("div",{staticClass:"-m-1 flex justify-start flex-wrap"},t._l(t.project.competesWith,(function(e,n){return r("div",{key:n,staticClass:"py-1 px-2.5 rounded border border-gray-500table-item m-1"},[r("span",{staticClass:"text-sm font-semibold align-middle",class:{"mr-2":e.length>1}},[t._v(t._s(e[0]))]),t._v(" "),e[1]?r("span",{staticClass:"text-xs align-middle text-gray-500"},[t._v(t._s(e[1]))]):t._e()])})),0)])]):t._e()])]):t._e(),t._v(" "),t.project.description?r("div",{staticClass:"description text-sm text-gray-600 mt-6",domProps:{innerHTML:t._s(t.$md.render(t.project.description))}}):t._e(),t._v(" "),t.project.youTubeVideoId?r("a",{staticClass:"block aspect-w-16 aspect-h-9 relative mt-10 lg:mt-6 rounded overflow-hidden group video-block",attrs:{target:"_blank",href:"https://www.youtube.com/watch?v="+t.project.youTubeVideoId},on:{click:function(e){return e.preventDefault(),t.$gtagEvents.externalLinkClick("https://www.youtube.com/watch?v="+t.project.youTubeVideoId)}}},[r("img",{staticClass:"w-100 h-100 absolute left-0 top-0 object-cover opacity-80 group-hover:opacity-100 transition-opacity",attrs:{src:"https://img.youtube.com/vi/"+t.project.youTubeVideoId+"/hqdefault.jpg",alt:t.project.name+" Intro Video",loading:"lazy"}}),t._v(" "),r("svg",{staticClass:"w-16 h-16 absolute left-0 top-0 right-0 bottom-0 m-auto",attrs:{viewBox:"0 0 59 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"youtube-icon-bg transition-all",attrs:{d:"M57.7646 6.276C57.4306 5.06483 56.7799 3.9683 55.8817 3.10297C54.9582 2.21103 53.8264 1.57301 52.5929 1.24912C47.9768 0.0123892 29.4828 0.0123895 29.4828 0.0123895C21.7729 -0.0767735 14.0648 0.315388 6.40216 1.18666C5.16871 1.53448 4.03894 2.18676 3.11335 3.08548C2.20389 3.97493 1.54514 5.07175 1.20102 6.2735C0.374379 10.8001 -0.0272612 15.3962 0.00151704 20C-0.027979 24.5996 0.372675 29.1943 1.20102 33.7265C1.53777 34.9232 2.19406 36.0151 3.10597 36.897C4.01789 37.779 5.15349 38.4161 6.40216 38.7533C11.0797 39.9876 29.4828 39.9876 29.4828 39.9876C37.2026 40.0769 44.9204 39.6847 52.5929 38.8133C53.8264 38.4894 54.9582 37.8514 55.8817 36.9595C56.7912 36.0775 57.4377 34.9807 57.7621 33.7864C58.6103 29.2616 59.0228 24.6636 58.9936 20.0575C59.0574 15.4318 58.6455 10.8121 57.7646 6.2735V6.276ZM23.6033 28.5547V11.4478L38.9904 20.0025L23.6033 28.5547Z"}}),t._v(" "),r("path",{attrs:{d:"M23.603 28.5546V11.4478L38.9901 20.0024L23.603 28.5546Z",fill:"white",stroke:"white"}})])]):t._e(),t._v(" "),r("div",{staticClass:"flex items-center flex-wrap mt-10 lg:mt-8"},[r("AppButton",{attrs:{tag:"a",href:t.project.link,target:"_blank",theme:"black"},on:{click:function(e){return e.preventDefault(),t.$gtagEvents.externalLinkClick(t.project.link)}}},[t._v("\n      "+t._s(t.project.buttonText)+"\n    ")])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"lg:block pr-7 text-sm text-gray-500 flex-shrink-0 whitespace-nowrap align-top"},[r("span",{staticClass:"block pt-1 lg:pt-0 lg:pb-2"},[t._v("Works well with:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"lg:block pr-7 text-sm text-gray-500 flex-shrink-0 whitespace-nowrap align-top"},[r("span",{staticClass:"block pt-1 lg:pt-0 lg:pb-2"},[t._v("Competes with:")])])}],!1,null,"6b22ad38",null);e.default=component.exports;installComponents(component,{Icon:r(345).default,AppButton:r(351).default})}}]);