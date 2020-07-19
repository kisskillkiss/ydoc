(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b57bbf2"],{"18dc":function(r,e,t){},"2f73":function(r,e,t){"use strict";t.r(e);var i=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:r.pageLoading,expression:"pageLoading"}],staticClass:"page-library-info"},[t("div",{staticClass:"form-body"},[t("el-form",{ref:"library",attrs:{"label-position":"top",model:r.library,"show-message":!1}},[t("el-form-item",{attrs:{label:"文档库名称",prop:"name",required:""}},[t("el-input",{attrs:{placeholder:"请输入文档库名称，3~32个字符",maxlength:"32","show-word-limit":""},model:{value:r.library.name,callback:function(e){r.$set(r.library,"name",e)},expression:"library.name"}})],1),t("el-form-item",{attrs:{label:"文档库简介",prop:"desc"}},[t("el-input",{attrs:{type:"textarea",resize:"none",rows:"4",maxlength:"255",placeholder:"文档库简介，用于介绍文档库的基本信息，字数在255个字符之内","show-word-limit":""},model:{value:r.library.desc,callback:function(e){r.$set(r.library,"desc",e)},expression:"library.desc"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check",loading:r.modifyLibraryLoading},on:{click:r.onLibraryModify}},[r._v("保存信息\n                ")])],1),t("div",{staticClass:"library-cover"},[t("span",{staticClass:"library-cover__lable"},[r._v("文档库封面")]),t("el-upload",{staticClass:"library-cover__upload",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"http-request":r.handlerLibraryCoverUpload}},[t("el-image",{staticClass:"avatar",attrs:{src:r.library.cover}},[t("div",{staticClass:"image-slot__error",attrs:{slot:"error"},slot:"error"},[r._v("\n                            ydoc\n                        ")])])],1),t("div",{staticClass:"library-cover__operate"},[t("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-refresh",loading:r.libraryCoverLoading,plain:""},on:{click:r.onRandomImage}},[r._v("随机生成封面\n                    ")])],1)],1)],1),t("el-divider"),t("el-form",{ref:"library",attrs:{"label-position":"top"}},[t("el-form-item",{attrs:{label:"文档库分组",prop:"group"}},[t("span",{staticClass:"form-title-tip"},[r._v("该设置仅对自已有效，不会影响组内成员的设置")]),t("el-select",{attrs:{placeholder:"请选择文档库分组",clearable:""},model:{value:r.libraryGroup,callback:function(e){r.libraryGroup=e},expression:"libraryGroup"}},r._l(r.libraryGroups,(function(r){return t("el-option",{key:r.id,attrs:{label:r.name,value:r.id}})})),1)],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-refresh",type:"primary",loading:r.modifyLibraryGroupLoading},on:{click:r.onLibraryMemberLibrarySort}},[r._v("更新分组\n                ")])],1)],1)],1)])},a=[],n=(t("8e6e"),t("ac6a"),t("456d"),t("7f7f"),t("bd86")),o=(t("96cf"),t("3b8d")),s=t("68c7"),c=t("6c47");function l(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,i)}return t}function u(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){Object(n["a"])(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var p={name:"page-library-info",mixins:[s["a"],c["a"]],data:function(){return{library:{name:"",desc:"",cover:""},libraryGroup:0,libraryGroups:[],modifyLibraryLoading:!1,modifyLibraryGroupLoading:!1,libraryCoverLoading:!1}},watch:{libraryInfo:{handler:function(r){this.library=this.$utils.CloneDeep(r)},immediate:!0,deep:!0},libraryMember:{handler:function(r){this.libraryGroup=r.group_id||""},immediate:!0,deep:!0}},methods:{moduleInitialize:function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,this.initLibraryGroups();case 2:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),initLibraryGroups:function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e=[],r.next=3,this.$api.v1.LibraryGroupCollection().then((function(r){var t=r.resData;e=t}));case 3:this.libraryGroups=e,t=e.map((function(r){return r.id})),(!this.libraryGroup||t.indexOf(this.libraryGroup)<0)&&(this.libraryGroup="");case 6:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),handlerLibraryCoverUpload:function(r){var e=this,t=r.file,i=new FormData;i.append("file",t),this.$api.v1.ToolsImageUpload(i,{loading:function(r){e.libraryCoverLoading=r},report:!0}).then((function(r){var t=r.resData;e.library.cover=t.url})).catch((function(r){var t=r.resMsg;e.$utils.tip("上传失败："+t)}))},onLibraryModify:function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(){var e,t=this;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e=u({library_id:this.library.id},this.library),r.next=3,this.$api.v1.LibraryModify(e,{loading:function(r){t.modifyLibraryLoading=r}}).then((function(){t.$tip.success("修改成功")}));case 3:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),onLibraryMemberLibrarySort:function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(){var e=this;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,this.$api.v1.LibraryMemberLibrarySort({library_id:this.library.id,library_group_id:this.libraryGroup},{loading:function(r){e.modifyLibraryGroupLoading=r}}).then((function(){e.$tip.success("更新成功")}));case 2:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),onRandomImage:function(){var r=this;this.$api.v1.ToolsImageRandomTmp({key:this.library.name},{loading:function(e){r.libraryCoverLoading=e}}).then((function(e){var t=e.resData;r.library.cover=t.url}))}}},b=p,f=(t("9bfd"),t("fa5a"),t("2877")),d=Object(f["a"])(b,i,a,!1,null,"379aa08d",null);e["default"]=d.exports},"334a":function(r,e,t){},"68c7":function(r,e,t){"use strict";t("96cf");var i=t("3b8d");e["a"]={data:function(){return{pageLoading:!0,pageFirstInited:!1}},methods:{checkValidate:function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(e){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.$refs||!this.$refs[e]){r.next=5;break}return r.next=3,this.$refs[e].validate();case 3:return t=r.sent,r.abrupt("return",t);case 5:return r.abrupt("return",!1);case 6:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),resetValidate:function(r){this.$refs&&this.$refs[r]&&this.$refs[r].resetFields()},loadaction:function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(e,t){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this[t]=!0,r.next=3,e();case 3:return i=r.sent,this[t]=!1,r.abrupt("return",i);case 6:case"end":return r.stop()}}),r,this)})));function e(e,t){return r.apply(this,arguments)}return e}()}}},"6c47":function(r,e,t){"use strict";t("8e6e"),t("ac6a"),t("456d"),t("96cf");var i=t("3b8d"),a=t("bd86"),n=t("2f62");function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,i)}return t}function s(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){Object(a["a"])(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}e["a"]={computed:s({},Object(n["c"])("libraryManager",["libraryInfo","libraryMember","libraryId"])),data:function(){return{libraryManagerLoading:!1}},created:function(){var r=Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("function"!==typeof this.moduleInitialize){r.next=5;break}return this.pageLoading=!0,r.next=4,this.moduleInitialize();case 4:this.pageLoading=!1;case 5:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}()}},"9bfd":function(r,e,t){"use strict";var i=t("18dc"),a=t.n(i);a.a},fa5a:function(r,e,t){"use strict";var i=t("334a"),a=t.n(i);a.a}}]);