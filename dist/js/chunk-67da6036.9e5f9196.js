(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67da6036"],{"2fdb":function(e,t,r){"use strict";var n=r("5ca1"),i=r("d2c8"),a="includes";n(n.P+n.F*r("5147")(a),"String",{includes:function(e){return!!~i(this,e,a).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,r){var n=r("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(i){}}return!0}},"5b7e":function(e,t,r){},6762:function(e,t,r){"use strict";var n=r("5ca1"),i=r("c366")(!0);n(n.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"689a":function(e,t,r){"use strict";var n=r("5b7e"),i=r.n(n);i.a},"68c7":function(e,t,r){"use strict";r("96cf");var n=r("3b8d");t["a"]={data:function(){return{pageLoading:!0,pageFirstInited:!1}},methods:{checkValidate:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$refs||!this.$refs[t]){e.next=5;break}return e.next=3,this.$refs[t].validate();case 3:return r=e.sent,e.abrupt("return",r);case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),resetValidate:function(e){this.$refs&&this.$refs[e]&&this.$refs[e].resetFields()},loadaction:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this[r]=!0,e.next=3,t();case 3:return n=e.sent,this[r]=!1,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()}}},"6c47":function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d"),r("96cf");var n=r("3b8d"),i=r("bd86"),a=r("2f62");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]={computed:o({},Object(a["c"])("libraryManager",["libraryInfo","libraryMember","libraryId"])),data:function(){return{libraryManagerLoading:!1}},created:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof this.moduleInitialize){e.next=5;break}return this.pageLoading=!0,e.next=4,this.moduleInitialize();case 4:this.pageLoading=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},"7b98":function(e,t,r){"use strict";var n=r("b102"),i=r.n(n);i.a},a584:function(e,t,r){"use strict";r.r(t);var n,i,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.pageLoading,expression:"pageLoading"}],staticClass:"page-library-members",attrs:{"element-loading-text":"处理中"}},[r("div",{staticClass:"member-actions"},[r("el-tag",{staticClass:"member-invite",attrs:{size:"medium"},on:{click:e.onMemberInviteBefore}},[r("i",{staticClass:"el-icon-s-custom"}),r("span",[e._v("邀请用户")])]),r("el-tag",{attrs:{size:"medium"}},[e._v("已有成员："+e._s(e.libraryMemberCount)+"人 ")])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.libraryMemberCollection,"empty-text":"暂无成员",stripe:""}},[r("el-table-column",{attrs:{label:"成员",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-avatar",{attrs:{size:"small",icon:"el-icon-user-solid",src:n.user_info.avatar_url}}),r("span",{staticClass:"text-overflow",staticStyle:{width:"130px",position:"absolute",left:"39px",top:"9px"}},[e._v(e._s(n.user_info.nickname))])]}}])}),r("el-table-column",{attrs:{prop:"address",label:"角色",filters:e.memberRoleFilterCollection,"filter-method":e.handleMemberRoleFilter},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-dropdown",{attrs:{trigger:"click",placement:"bottom-start"},on:{command:e.onModifyRole}},[r("span",{staticClass:"el-dropdown-link"},[r("el-tag",{attrs:{size:"mini",type:e._f("parseMemberRoleStyle")(n.urole),effect:"plain"}},[e._v("\n                            "+e._s(e._f("parseMemberRole")(n.urole))+"\n                            "),n.allowManager?r("i",{staticClass:"el-icon-arrow-down el-icon--right"}):e._e()])],1),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n.allowManager?r("div",e._l(e.libraryMemberRoleCollection,(function(t){return r("el-dropdown-item",{key:t.name,attrs:{divided:!0,command:{roleId:t.id,uid:n.uid}}},[r("span",{staticStyle:{"font-size":"12px"}},[e._v(e._s(t.name))]),r("br"),r("span",{staticStyle:{"font-size":"12px",color:"#a8a8a8"}},[e._v(e._s(t.desc))])])})),1):e._e()])],1)]}}])}),r("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-switch",{attrs:{size:"small",value:1===n.status},on:{change:function(t){return e.onMemberStatusChange(n)}}})]}}])}),r("el-table-column",{attrs:{label:"加入时间",width:"180","sort-method":e.handleMemberSort,sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(e._f("dateFormat")(n.create_time)))])]}}])}),r("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(t){var n=t.row;return[r("el-input",{attrs:{size:"mini","prefix-icon":"el-icon-search",placeholder:"输入成员名称搜索",title:n,clearable:""},model:{value:e.searchMembersKey,callback:function(t){e.searchMembersKey=t},expression:"searchMembersKey"}})]}},{key:"default",fn:function(t){var n=t.row;return[r("el-popconfirm",{attrs:{icon:"el-icon-warning",title:"是否确认移除该成员"},on:{onConfirm:function(t){return e.onUninviteMemberBefore(n)}}},[r("el-button",{attrs:{slot:"reference",type:"text",icon:"el-icon-delete"},slot:"reference"},[e._v(" 移除成员\n                    ")])],1)]}}])})],1),r("c-library-manager-member-invite-modal",{attrs:{visible:e.memberInviteModal.visible,"library-id":e.libraryId,"library-members":e.libraryMembers},on:{"update:visible":function(t){return e.$set(e.memberInviteModal,"visible",t)},"invite-success":e.onInviteMemberSuccess}})],1)},s=[],o=(r("96cf"),r("3b8d")),c=(r("6762"),r("2fdb"),r("7f7f"),r("68c7")),u=r("6c47"),l=r("bd86"),b={CREATOR:1,MANAGER:2,MEMBER:3,GUEST:4},m={NORMAL:0,MEMBER:1,DISABLED:2},d=(n={},Object(l["a"])(n,b.CREATOR,{name:"创建人",desc:"佣有所有权限（仅一个）",id:b.CREATOR,style:"danger"}),Object(l["a"])(n,b.MANAGER,{name:"管理员",desc:"佣有成员、文档、文档库管理权限",id:b.MANAGER,style:"warning"}),Object(l["a"])(n,b.MEMBER,{name:"普通成员",desc:"佣有文档的基本操作权限",id:b.MEMBER,style:"success"}),Object(l["a"])(n,b.GUEST,{name:"只读成员",desc:"仅查看文档的权限",id:b.GUEST,style:"info"}),n),f=(i={},Object(l["a"])(i,m.NORMAL,{name:"审核中",desc:"",id:m.NORMAL}),Object(l["a"])(i,m.MEMBER,{name:"正式成员",desc:"",id:m.MEMBER}),Object(l["a"])(i,m.DISABLED,{name:"已禁用",desc:"",id:m.DISABLED}),{name:"page-library-members",mixins:[c["a"],u["a"]],components:{"c-library-manager-member-invite-modal":function(){return r.e("chunk-494fb682").then(r.bind(null,"1783"))}},computed:{memberRoleFilterCollection:function(){var e=[];return this.$utils.ForEach(d,(function(t,r){e.push({text:t.name,value:r})})),e},libraryMemberCount:function(){return this.libraryMembers.length},libraryMemberCollection:function(){var e=this;return this.libraryMembers.filter((function(t){return!e.searchMembersKey.trim()||t.user_info.nickname.toLowerCase().includes(e.searchMembersKey.trim().toLowerCase())})).map((function(t){return t.allowManager=e.libraryMember.urole<t.urole,t}))},libraryMemberRoleCollection:function(){var e=this,t=[];return this.$utils.ForEach(this.$utils.CloneDeep(d),(function(r){r.id!==b.CREATOR&&e.libraryMember.urole<r.id&&t.push(r)})),t}},filters:{parseMemberRole:function(e){return d[e]?d[e].name:"未知"},parseMemberRoleStyle:function(e){return d[e]?d[e].style:"info"}},data:function(){return{libraryMembers:[],searchMembersKey:"",memberInviteModal:{visible:!1}}},methods:{moduleInitialize:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.initLibraryMembers();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),initLibraryMembers:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,this.$api.v1.LibraryMemberCollection({library_id:this.libraryId}).then((function(e){var r=e.resData;t=r}));case 3:this.libraryMembers=t;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),uninviteMember:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.v1.LibraryMemberUninvite({library_id:this.libraryId,member_id:t},{loading:function(e){r.pageLoading=e}}).then((function(){r.$tip.success("移除成功"),r.initLibraryMembers()}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),memberModifyRole:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.v1.LibraryMemberRoleModify({library_id:this.libraryId,member_id:t,library_role_id:r},{loading:function(e){n.pageLoading=e}}).then((function(){n.$tip.success("调整成功"),n.initLibraryMembers()}));case 2:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),memberModifyStatus:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.v1.LibraryMemberStatusModify({library_id:this.libraryId,member_id:t,status:r},{loading:function(e){n.pageLoading=e}}).then((function(){n.$tip.success("调整成功"),n.initLibraryMembers()}));case 2:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),handleMemberRoleFilter:function(e,t){return parseInt(t.urole)===parseInt(e)},handleMemberSort:function(e,t){return e.create_time-t.create_time},onModifyRole:function(e){var t=e.roleId,r=e.uid;this.memberModifyRole(r,t)},onMemberStatusChange:function(e){this.memberModifyStatus(e.uid,1===e.status?2:1)},onMemberInviteBefore:function(){this.memberInviteModal.visible=!0},onInviteMemberSuccess:function(){this.initLibraryMembers()},onUninviteMemberBefore:function(e){this.uninviteMember(e.uid)}}}),p=f,h=(r("689a"),r("7b98"),r("2877")),y=Object(h["a"])(p,a,s,!1,null,"9c21678e",null);t["default"]=y.exports},b102:function(e,t,r){},d2c8:function(e,t,r){var n=r("aae3"),i=r("be13");e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}}}]);