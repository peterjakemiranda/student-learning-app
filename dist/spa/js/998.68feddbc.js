"use strict";(self["webpackChunklearning_app"]=self["webpackChunklearning_app"]||[]).push([[998],{1998:(t,e,i)=>{i.r(e),i.d(e,{default:()=>v});var a=i(3673),s=i(2323);const n={class:"q-pa-md q-gutter-md"},o=(0,a._)("div",{class:"text-h5 q-mb-md"}," Notifications ",-1),c={key:1,caption:""},l={class:"q-pt-none q-pa-lg flex flex-center"};function u(t,e,i,u,r,d){var h;const p=(0,a.up)("q-item-label"),g=(0,a.up)("q-item-section"),m=(0,a.up)("q-badge"),f=(0,a.up)("q-item"),w=(0,a.up)("q-list"),y=(0,a.up)("q-pagination"),k=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.iD)("div",n,[o,null!==(h=t.notifications)&&void 0!==h&&h.length?((0,a.wg)(),(0,a.j4)(w,{key:0,class:"q-pa-none full-height"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.notifications,(e=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(f,{clickable:"",key:e.id,onClick:i=>t.goToPage(e)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.title),1)])),_:2},1024),(0,a.Wm)(p,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.body),1)])),_:2},1024)])),_:2},1024),e.read?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(g,{key:0,side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:"red",rounded:"",class:"q-mr-sm"})])),_:1}))])),_:2},1032,["onClick"])),[[k]]))),128))])),_:1})):((0,a.wg)(),(0,a.iD)("div",c,"You have no notification.")),(0,a._)("div",l,[(0,a.Wm)(y,{modelValue:t.page,"onUpdate:modelValue":e[0]||(e[0]=e=>t.page=e),max:t.lastpage,input:"",onInput:t.fetchNotifications},null,8,["modelValue","max","onInput"])])])}var r=i(7874),d=i(5690),h=i(1173);const p=(0,a.aZ)({name:"NotificationIndex",data(){return{loading:!1,title:"",page:1,limit:10,lastpage:1,searchText:""}},computed:{...(0,r.Se)({notifications:"notifications",pagination:"notificationPagination",searchQuery:"notificationQuery"})},mounted(){const t={page:this.page,limit:this.limit,search:this.searchQuery.search};h["default"].dispatch("setNotificationQuery",t),this.fetchNotifications()},methods:{fetchNotifications(){d.Z.items({page:this.searchQuery.page,limit:this.searchQuery.limit,search:this.searchQuery.search}).then((t=>{this.loading=!1})).catch((t=>{this.loading=!1}))},clearSearch(){this.searchText="",this.$refs.searchInput.focus()},goToPage(t){switch(d.Z.read(t.id),t.type){case"quiz":this.$router.push(`/courses/${t.data.course_id}/quizzes/${t.data.quiz_id}`);break;case"activity":this.$router.push(`/courses/${t.data.course_id}/activities/${t.data.activity_id}`);break;case"announcement":this.$router.push(`/courses/${t.data.course_id}/announcements/${t.data.announcement_id}`);break}}},watch:{page(t){const e={page:t,limit:this.limit,search:this.searchQuery.search};h["default"].dispatch("setNotificationQuery",e),this.fetchNotifications()},pagination(t){t&&(this.lastpage=t.lastPage)}}});var g=i(7011),m=i(3414),f=i(2035),w=i(2350),y=i(9721),k=i(7300),q=i(6489),Q=i(7518),_=i.n(Q);p.render=u;const v=p;_()(p,"components",{QList:g.Z,QItem:m.Z,QItemSection:f.Z,QItemLabel:w.Z,QBadge:y.Z,QPagination:k.Z}),_()(p,"directives",{Ripple:q.Z})}}]);