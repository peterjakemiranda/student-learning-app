"use strict";(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[911],{1911:(e,t,s)=>{s.r(t),s.d(t,{default:()=>D});var a=s(3673),i=s(2323),l=s(8880);const r={class:"q-pa-md q-gutter-md"},n=(0,a._)("div",{class:"text-h5 q-mb-md",style:{"padding-top":"48px"}}," Users ",-1),c={class:"q-pt-sm"},o={key:0,class:"text-center"},u={class:"q-gutter-xs"},d=(0,a.Uk)(" Edit "),p=(0,a.Uk)(" Delete "),h={class:"q-pt-none q-pa-lg flex flex-center"};function m(e,t,s,m,g,f){const w=(0,a.up)("q-breadcrumbs-el"),y=(0,a.up)("q-breadcrumbs"),q=(0,a.up)("q-page-sticky"),Q=(0,a.up)("q-btn"),x=(0,a.up)("q-icon"),_=(0,a.up)("q-input"),k=(0,a.up)("q-spinner-hourglass"),b=(0,a.up)("q-item-label"),U=(0,a.up)("q-item-section"),W=(0,a.up)("q-tooltip"),Z=(0,a.up)("q-item"),v=(0,a.up)("q-list"),I=(0,a.up)("q-pagination"),C=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(q,{expand:"",position:"top-left",class:"full-width",style:{"z-index":"1"}},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{class:"text-grey bg-white full-width q-px-lg q-py-sm text-body1"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{to:"/users",icon:"keyboard_arrow_left",label:"All Users"})])),_:1})])),_:1}),n,(0,a.Wm)(Q,{to:"/users/create",color:"primary",icon:"add",label:"Create User"}),(0,a._)("div",c,[(0,a.Wm)(_,{"bottom-slots":"",filled:"",debounce:"800",modelValue:e.searchText,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchText=t),ref:"searchInput",dense:""},{append:(0,a.w5)((()=>[""!==e.searchText?((0,a.wg)(),(0,a.j4)(x,{key:0,name:"close",onClick:e.clearSearch,class:"cursor-pointer"},null,8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(x,{name:"search"})])),_:1},8,["modelValue"]),e.loading?((0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(k,{color:"primary",size:"2em"})])):(0,a.kq)("",!0)]),(0,a.Wm)(v,{class:"q-pa-none"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.users.data,(t=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(Z,{key:t.id},{default:(0,a.w5)((()=>[(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.fullname),1)])),_:2},1024),(0,a.Wm)(b,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.email),1)])),_:2},1024),(0,a.Wm)(b,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Role: "+(0,i.zw)(t.role),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(U,{side:""},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(Q,{flat:"",round:"",size:"12px",icon:"edit",to:`/users/${t.id}/edit`},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{anchor:"top middle",self:"bottom middle"},{default:(0,a.w5)((()=>[d])),_:1})])),_:2},1032,["to"]),(0,a.Wm)(Q,{flat:"",round:"",size:"12px",icon:"delete",onClick:(0,l.iM)((s=>e.remove(t)),["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{anchor:"top middle",self:"bottom middle"},{default:(0,a.w5)((()=>[p])),_:1})])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1536)),[[C]]))),128))])),_:1}),(0,a._)("div",h,[(0,a.Wm)(I,{modelValue:e.page,"onUpdate:modelValue":t[1]||(t[1]=t=>e.page=t),max:e.lastpage,input:"",onInput:e.fetchUsers},null,8,["modelValue","max","onInput"])])])}var g=s(7874),f=s(5779),w=s(1173);const y=(0,a.aZ)({name:"UserIndex",data(){return{loading:!1,title:"",page:1,limit:10,lastpage:1,searchText:""}},computed:{...(0,g.Se)({users:"users",searchQuery:"userQuery"})},mounted(){const e={page:this.page,limit:this.limit,search:this.searchQuery.search};w["default"].dispatch("setUserQuery",e),this.fetchUsers(),this.searchQuery.search&&(this.searchText=this.searchQuery.search)},methods:{fetchUsers(){f.Z.items({page:this.searchQuery.page,limit:this.searchQuery.limit,search:this.searchQuery.search}).then((e=>{this.loading=!1})).catch((e=>{this.loading=!1}))},remove(e){this.$q.dialog({title:"Confirm",message:"Are you sure to delete this user?",cancel:!0,persistent:!0}).onOk((()=>{f.Z.destroy(e.id).then((e=>{this.loading=!1})).catch((e=>{this.loading=!1}))}))},clearSearch(){this.searchText="",this.$refs.searchInput.focus()}},watch:{page(e){const t={page:e,limit:this.limit,search:this.searchQuery.search};w["default"].dispatch("setUserQuery",t),this.fetchUsers()},users(e){e.pagination&&(this.lastpage=e.pagination.last_page)},searchText(e){const t={page:this.page,limit:this.limit,search:e};w["default"].dispatch("setUserQuery",t),this.fetchUsers()}}});var q=s(1007),Q=s(1481),x=s(5926),_=s(2165),k=s(4689),b=s(4554),U=s(3282),W=s(7011),Z=s(3414),v=s(2035),I=s(2350),C=s(8870),T=s(7300),z=s(6489),S=s(7518),V=s.n(S);y.render=m;const D=y;V()(y,"components",{QPageSticky:q.Z,QBreadcrumbs:Q.Z,QBreadcrumbsEl:x.Z,QBtn:_.Z,QInput:k.Z,QIcon:b.Z,QSpinnerHourglass:U.Z,QList:W.Z,QItem:Z.Z,QItemSection:v.Z,QItemLabel:I.Z,QTooltip:C.Z,QPagination:T.Z}),V()(y,"directives",{Ripple:z.Z})}}]);