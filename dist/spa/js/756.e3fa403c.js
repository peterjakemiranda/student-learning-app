"use strict";(self["webpackChunkhandbook_app"]=self["webpackChunkhandbook_app"]||[]).push([[756],{2577:(t,e,a)=>{a.d(e,{Z:()=>v});var i=a(5474);const s=(t,{data:e})=>{t(e)},o=(t,e)=>{e(t)},n=t=>new Promise(((e,a)=>{i.axios.request({url:"/api/courses",data:t,method:"post"}).then((t=>{s(e,t)})).catch((t=>{o(t.response.data,a)}))})),l=(t,e)=>{e(t)},r=(t,e)=>{e(t)},c=(t,e)=>new Promise(((a,s)=>{i.axios.request({url:`/api/courses/${t}`,data:e,method:"put"}).then((t=>{l(t.data,a)})).catch((t=>{r(t.response.data,s)}))}));var d=a(8938),p=a(5314),u=a(3305);const h=({data:t},e,a)=>{const i=t,s=p.Z.fetch(t.pagination);d["default"].dispatch("fetchCourses",{courses:i,pagination:s}),a({courses:i,pagination:s})},m=(t,e)=>e(t),f=(t={})=>new Promise(((e,a)=>{i.axios.get(u.Z.buildUrl("/api/courses",t)).then((a=>{h(a,t,e)})).catch((t=>{m(t,a)}))})),g=({data:t},e)=>{d["default"].dispatch("fetchAllCourses",t),e(t)},w=(t,e)=>e(t),_=(t=null)=>new Promise(((e,a)=>{i.axios.get(null===t?"/api/courses":`/api/courses?search=${t}`).then((t=>{g(t,e)})).catch((t=>{w(t,a)}))})),b=(t,e)=>{e(t)},k=(t,e)=>{e(t)},Z=t=>new Promise(((e,a)=>{i.axios.get(`/api/courses/${t}`).then((t=>{b(t.data,e)})).catch((t=>{k(t.response.data,a)}))})),C=(t,e)=>{_(),e(t)},q=(t,e)=>{e(t)},x=t=>new Promise(((e,a)=>{i.axios["delete"](`/api/courses/${t}`).then((t=>{C(t.data,e)})).catch((t=>{q(t.response.data,a)}))})),v={store:n,update:c,items:f,all:_,show:Z,destroy:x}},5314:(t,e,a)=>{a.d(e,{Z:()=>s});class i{static fetchCollection(t){return t.map((t=>this.fetch(t)))}static sendCollection(t){return t.map((t=>this.send(t)))}}class s extends i{static fetch(t){return{currentPage:t.current_page,lastPage:t.last_page,limit:t.limit,totalCount:t.total_count,counters:t.counters}}static send(t){return{current_page:t.currentPage,last_page:t.lastPage,limit:t.limit,total_count:t.totalCount}}}},3305:(t,e,a)=>{a.d(e,{Z:()=>i});const i={buildUrl(t,e){let a="?";const i=Object.keys(e).filter((t=>e[t]));return i.forEach(((t,s)=>{a+=`${t}=${e[t]}`,s<i.length-1&&(a+="&")})),`${t}${a}`},debounce(t,e){var a=null;return function(){clearTimeout(a);var i=arguments,s=this;a=setTimeout((function(){t.apply(s,i)}),e)}}}},7756:(t,e,a)=>{a.r(e),a.d(e,{default:()=>x});a(246);var i=a(3673),s=a(2323);const o={class:"q-pa-md q-gutter-md"},n=(0,i._)("h4",{class:"text-h4 q-mb-xs"},"Courses",-1),l={class:"q-gutter-sm"},r=(0,i.Uk)(" Manage Sections "),c=(0,i.Uk)(" Edit "),d=(0,i.Uk)(" Delete ");function p(t,e,a,p,u,h){const m=(0,i.up)("q-btn"),f=(0,i.up)("q-item-label"),g=(0,i.up)("q-item-section"),w=(0,i.up)("q-tooltip"),_=(0,i.up)("q-item"),b=(0,i.up)("q-list"),k=(0,i.Q2)("ripple");return(0,i.wg)(),(0,i.iD)("div",o,[n,(0,i.Wm)(m,{to:"/admin/courses/create",color:"primary",icon:"add",label:"Create Course"}),(0,i.Wm)(b,{padding:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.courses,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(_,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{lines:"1"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.title),1)])),_:2},1024),(0,i.Wm)(f,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.description),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(g,{side:""},{default:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i.Wm)(m,{flat:"",round:"",size:"12px",color:"primary",icon:"list",to:`/admin/courses/${e.id}/sections`},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{anchor:"top middle",self:"bottom middle"},{default:(0,i.w5)((()=>[r])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(m,{flat:"",round:"",size:"12px",icon:"edit",to:`/admin/courses/${e.id}/edit`},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{anchor:"top middle",self:"bottom middle"},{default:(0,i.w5)((()=>[c])),_:1})])),_:2},1032,["to"]),(0,i.Wm)(m,{flat:"",round:"",size:"12px",icon:"delete",onClick:a=>t.remove(e)},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{anchor:"top middle",self:"bottom middle"},{default:(0,i.w5)((()=>[d])),_:1})])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1536)),[[k]]))),128))])),_:1})])}var u=a(7874),h=a(2577);const m=(0,i.aZ)({name:"AdminCourseIndex",data(){return{title:"",description:""}},computed:{...(0,u.Se)({courses:"allCourses"})},mounted(){h.Z.all().then((t=>{this.loading=!1})).catch((t=>{this.loading=!1}))},methods:{onReset(){},remove(t){this.$q.dialog({title:"Confirm",message:"Are you sure to delete this course?",cancel:!0,persistent:!0}).onOk((()=>{h.Z.destroy(t.id).then((t=>{this.loading=!1})).catch((t=>{this.loading=!1}))}))}}});var f=a(2165),g=a(7011),w=a(3414),_=a(2035),b=a(2350),k=a(8870),Z=a(6489),C=a(7518),q=a.n(C);m.render=p;const x=m;q()(m,"components",{QBtn:f.Z,QList:g.Z,QItem:w.Z,QItemSection:_.Z,QItemLabel:b.Z,QTooltip:k.Z}),q()(m,"directives",{Ripple:Z.Z})}}]);