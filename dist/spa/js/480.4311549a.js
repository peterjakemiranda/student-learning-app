"use strict";(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[480],{6952:(t,e,a)=>{a.d(e,{Z:()=>m});var s=a(5474);const o=(t,e)=>{e(t)},i=(t,e)=>{e(t)},n=(t,e)=>new Promise(((a,n)=>{s.axios.post(`/api/bookmarks/${t}`,{bookmark:e}).then((t=>{o(t.data,a)})).catch((t=>{i(t.response.data,n)}))}));var c=a(8938);const l=({data:t},e)=>{c["default"].dispatch("fetchAllBookmarks",t),e(t)},r=(t,e)=>e(t),d=()=>new Promise(((t,e)=>{s.axios.get("/api/bookmarks").then((e=>{l(e,t)})).catch((t=>{r(t,e)}))})),h=(t,e)=>{d(),e(t)},p=(t,e)=>{e(t)},u=t=>new Promise(((e,a)=>{s.axios["delete"](`/api/bookmarks/${t}`).then((t=>{h(t.data,e)})).catch((t=>{p(t.response.data,a)}))})),m={all:d,bookmark:n,destroy:u}},2577:(t,e,a)=>{a.d(e,{Z:()=>$});var s=a(5474);const o=(t,{data:e})=>{t(e)},i=(t,e)=>{e(t)},n=t=>new Promise(((e,a)=>{s.axios.request({url:"/api/courses",data:t,method:"post"}).then((t=>{o(e,t)})).catch((t=>{i(t.response.data,a)}))})),c=(t,e)=>{e(t)},l=(t,e)=>{e(t)},r=(t,e)=>new Promise(((a,o)=>{s.axios.request({url:`/api/courses/${t}`,data:e,method:"put"}).then((t=>{c(t.data,a)})).catch((t=>{l(t.response.data,o)}))}));var d=a(8938),h=a(5314),p=a(3305);const u=({data:t},e,a)=>{const s=t,o=h.Z.fetch(t.pagination);d["default"].dispatch("fetchCourses",{courses:s,pagination:o}),a({courses:s,pagination:o})},m=(t,e)=>e(t),g=(t={})=>new Promise(((e,a)=>{s.axios.get(p.Z.buildUrl("/api/courses",t)).then((a=>{u(a,t,e)})).catch((t=>{m(t,a)}))})),k=({data:t},e)=>{d["default"].dispatch("fetchAllCourses",t),e(t)},w=(t,e)=>e(t),f=(t=null)=>new Promise(((e,a)=>{s.axios.get(null===t?"/api/courses":`/api/courses?search=${t}`).then((t=>{k(t,e)})).catch((t=>{w(t,a)}))})),b=(t,e)=>{e(t)},y=(t,e)=>{e(t)},x=t=>new Promise(((e,a)=>{s.axios.get(`/api/courses/${t}`).then((t=>{b(t.data,e)})).catch((t=>{y(t.response.data,a)}))})),q=(t,e)=>{f(),e(t)},C=(t,e)=>{e(t)},Z=t=>new Promise(((e,a)=>{s.axios["delete"](`/api/courses/${t}`).then((t=>{q(t.data,e)})).catch((t=>{C(t.response.data,a)}))})),$={store:n,update:r,items:g,all:f,show:x,destroy:Z}},6523:(t,e,a)=>{a.d(e,{Z:()=>v});var s=a(5474);const o=(t,{data:e})=>{t(e)},i=(t,e)=>{e(t)},n=t=>new Promise(((e,a)=>{s.axios.request({url:"/api/sections",data:t,method:"post"}).then((t=>{o(e,t)})).catch((t=>{i(t.response.data,a)}))})),c=(t,e)=>{e(t)},l=(t,e)=>{e(t)},r=(t,e)=>new Promise(((a,o)=>{s.axios.request({url:`/api/sections/${t}`,data:e,method:"put"}).then((t=>{c(t.data,a)})).catch((t=>{l(t.response.data,o)}))}));var d=a(8938),h=a(5314),p=a(3305);const u=({data:t},e,a)=>{const s=t,o=h.Z.fetch(t.pagination);d["default"].dispatch("fetchSections",{sections:s,pagination:o}),a({sections:s,pagination:o})},m=(t,e)=>e(t),g=(t={})=>new Promise(((e,a)=>{s.axios.get(p.Z.buildUrl("/api/sections",t)).then((a=>{u(a,t,e)})).catch((t=>{m(t,a)}))})),k=({data:t},e)=>{d["default"].dispatch("fetchAllSections",t),e(t)},w=(t,e)=>e(t),f=(t=null)=>new Promise(((e,a)=>{s.axios.get(null===t?"/api/sections":`/api/sections?course_id=${t}`).then((t=>{k(t,e)})).catch((t=>{w(t,a)}))})),b=(t,e)=>{e(t)},y=(t,e)=>{e(t)},x=t=>new Promise(((e,a)=>{s.axios.get(`/api/sections/${t}`).then((t=>{b(t.data,e)})).catch((t=>{y(t.response.data,a)}))})),q=({data:t},e)=>{d["default"].dispatch("fetchSearchResults",t),e(t)},C=(t,e)=>e(t),Z=(t="")=>new Promise(((e,a)=>{s.axios.get(`/api/sections?search=${t}`).then((t=>{q(t,e)})).catch((t=>{C(t,a)}))})),$=(t,e,a)=>{f(a),e(t)},_=(t,e)=>{e(t)},P=(t,e)=>new Promise(((a,o)=>{s.axios["delete"](`/api/sections/${t}`).then((t=>{$(t.data,a,e)})).catch((t=>{_(t.response.data,o)}))})),v={store:n,update:r,items:g,all:f,show:x,search:Z,destroy:P}},5314:(t,e,a)=>{a.d(e,{Z:()=>o});class s{static fetchCollection(t){return t.map((t=>this.fetch(t)))}static sendCollection(t){return t.map((t=>this.send(t)))}}class o extends s{static fetch(t){return{currentPage:t.current_page,lastPage:t.last_page,limit:t.limit,totalCount:t.total_count,counters:t.counters}}static send(t){return{current_page:t.currentPage,last_page:t.lastPage,limit:t.limit,total_count:t.totalCount}}}},3305:(t,e,a)=>{a.d(e,{Z:()=>s});const s={buildUrl(t,e){let a="?";const s=Object.keys(e).filter((t=>e[t]));return s.forEach(((t,o)=>{a+=`${t}=${e[t]}`,o<s.length-1&&(a+="&")})),`${t}${a}`},debounce(t,e){var a=null;return function(){clearTimeout(a);var s=arguments,o=this;a=setTimeout((function(){t.apply(o,s)}),e)}}}},6480:(t,e,a)=>{a.r(e),a.d(e,{default:()=>B});var s=a(3673),o=a(2323);const i={class:"q-pa-lg"},n={key:0,class:"text-h5 text-bold q-my-md q-pt-lg"},c={key:1,class:"text-center"},l={key:2},r=["id"],d=["id"],h=["innerHTML"],p=(0,s._)("div",{class:"text-h6 q-pa-md"},"Sections",-1);function u(t,e,a,u,m,g){const k=(0,s.up)("q-breadcrumbs-el"),w=(0,s.up)("q-breadcrumbs"),f=(0,s.up)("q-page-sticky"),b=(0,s.up)("q-spinner-bars"),y=(0,s.up)("q-icon"),x=(0,s.up)("q-btn"),q=(0,s.up)("q-item-section"),C=(0,s.up)("q-item"),Z=(0,s.up)("q-list"),$=(0,s.up)("q-card-section"),_=(0,s.up)("q-card"),P=(0,s.up)("q-dialog"),v=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(f,{expand:"",position:"top-left",class:"full-width",style:{"z-index":"1"}},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{class:"text-grey bg-white full-width q-px-lg q-py-sm text-body1"},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{to:"/",icon:"menu_book",label:"My Learning"}),(0,s.Wm)(k,{icon:"local_library",label:"Search"})])),_:1})])),_:1}),t.course?((0,s.wg)(),(0,s.iD)("h5",n,(0,o.zw)(t.course.title),1)):(0,s.kq)("",!0),t.loading?((0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(b,{color:"primary",size:"2em"})])):((0,s.wg)(),(0,s.iD)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.sections,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id},[e.title?((0,s.wg)(),(0,s.iD)("h6",{key:0,id:`section-${e.id}`,class:"text-h6 q-my-md",style:{"line-height":"1.6rem"}},[(0,s.Wm)(y,{name:e.bookmarked?"star":"star_outline",color:e.bookmarked?"yellow-9":"primary",clickable:"",onClick:a=>t.bookmark(e)},null,8,["name","color","onClick"]),(0,s.Uk)(" "+(0,o.zw)(t.titleCase(e.title)),1)],8,r)):((0,s.wg)(),(0,s.iD)("span",{key:1,id:`section-${e.id}`},null,8,d)),(0,s._)("div",{innerHTML:e.content,class:"text-body1"},null,8,h)])))),128))])),(0,s.Wm)(f,{position:"bottom-right",offset:[18,18]},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{fab:"",icon:"list",color:"primary",onClick:e[0]||(e[0]=e=>t.tableOfContents=!0)})])),_:1}),(0,s.Wm)(P,{modelValue:t.tableOfContents,"onUpdate:modelValue":e[1]||(e[1]=e=>t.tableOfContents=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{class:"full-width"},{default:(0,s.w5)((()=>[(0,s.Wm)($,{class:"q-pa-sm"},{default:(0,s.w5)((()=>[p,(0,s.Wm)(Z,{separator:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.sections,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(C,{key:e.id,clickable:!!e.id,onClick:a=>t.gotoSection(e)},{default:(0,s.w5)((()=>[(0,s.Wm)(q,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.title?t.titleCase(e.title):"Introduction"),1)])),_:2},1024)])),_:2},1032,["clickable","onClick"])),[[v,!!e.id]]))),128))])),_:1})])),_:1}),(0,s.Wm)($,{class:"row items-center justify-end"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(x,{flat:"",label:"Close",color:"primary"},null,512),[[v]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var m=a(7874),g=a(6523),k=a(2577),w=a(6952),f=a(8938);const b=(0,s.aZ)({name:"ViewSection",data(){return{loading:!1,course:null,floatAction:!1,tableOfContents:!1}},computed:{...(0,m.Se)({courses:"allCourses",sections:"allSections"})},mounted(){this.course=this.courses.find((t=>+t.id===+this.$route.params.id)),this.loading=!0,this.course||k.Z.show(this.$route.params.id).then((t=>{this.course=t})).catch((t=>{})),g.Z.all(this.$route.params.id).then((t=>{this.loading=!1})).catch((t=>{this.loading=!1}))},methods:{titleCase(t){return t.split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})).join(" ")},bookmark(t){const e=!t.bookmarked,a=Object.assign({},t);a.bookmarked=e,f["default"].dispatch("updateSection",a),this.$q.dialog({title:e?"Bookmark Added!":"Bookmark Removed!",message:`${this.titleCase(t.title)}`}),w.Z.bookmark(t.id,e).then((t=>{this.loading=!1})).catch((t=>{this.loading=!1}))},gotoSection(t){this.goToHash(`#section-${t.id}`)},goToHash(t){const e=this,a=t||e.$route.hash;setTimeout((function(){e.$nextTick((()=>{if(a){const t=document.querySelector(a)?document.querySelector(a).offsetTop-160:0;window.scroll({top:t,behavior:"smooth"})}}))}),500)}},watch:{loading(t){t||this.goToHash()}}});var y=a(1007),x=a(1481),q=a(5926),C=a(4752),Z=a(4554),$=a(2165),_=a(6778),P=a(151),v=a(5589),S=a(7011),W=a(3414),Q=a(2035),D=a(677),T=a(7518),H=a.n(T);b.render=u;const B=b;H()(b,"components",{QPageSticky:y.Z,QBreadcrumbs:x.Z,QBreadcrumbsEl:q.Z,QSpinnerBars:C.Z,QIcon:Z.Z,QBtn:$.Z,QDialog:_.Z,QCard:P.Z,QCardSection:v.Z,QList:S.Z,QItem:W.Z,QItemSection:Q.Z}),H()(b,"directives",{ClosePopup:D.Z})}}]);