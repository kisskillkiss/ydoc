(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21865c30"],{"2cd4":function(t,r,e){"use strict";var n=e("5e9d"),i=e.n(n);i.a},"2f21":function(t,r,e){"use strict";var n=e("79e5");t.exports=function(t,r){return!!t&&n((function(){r?t.call(null,(function(){}),1):t.call(null)}))}},"55dd":function(t,r,e){"use strict";var n=e("5ca1"),i=e("d8e8"),o=e("4bf8"),a=e("79e5"),c=[].sort,s=[1,2,3];n(n.P+n.F*(a((function(){s.sort(void 0)}))||!a((function(){s.sort(null)}))||!e("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},"5e9d":function(t,r,e){},"8e4c":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"c-library-entity-tree"},[e("el-scrollbar",{staticClass:"contains"},[e("el-tree",{ref:"tree",attrs:{data:t.entityCollection,"node-key":"key","allow-drop":t.handleAllowDrop,"filter-node-method":t.handleFilterEntity,"empty-text":t.treeEmptyTips,draggable:"","default-expand-all":""},on:{"node-click":t.onEntityClick,"node-drop":t.onEntityDrop},scopedSlots:t._u([{key:"default",fn:function(r){r.node;var n=r.data;return e("div",{staticClass:"directory-tree-item",class:{stick:n.isStick}},[n.type===t.LIBRARY_GROUP_KEY?e("i",{staticClass:"tree-node-group-icon icon y-icon-folder-close"}):e("i",{staticClass:"tree-node-library-icon el-icon-document"}),e("span",{staticClass:"tree-node-label"},[t._v(t._s(n.label))]),n.type===t.LIBRARY_GROUP_KEY?e("el-dropdown",{staticClass:"group-item-actions",attrs:{trigger:"click"},on:{command:t.onGroupAction}},[e("span",{staticClass:"el-dropdown-link",on:{click:function(t){t.stopPropagation()}}},[e("i",{staticClass:"el-icon-more item-more-action"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"modifyGroup|"+n.id}},[e("i",{staticClass:"el-icon-edit"}),t._v("编辑分组\n                        ")]),e("el-dropdown-item",{attrs:{command:"removeGroup|"+n.id}},[e("i",{staticClass:"el-icon-delete"}),t._v("删除\n                        ")])],1)],1):t._e()],1)}}])})],1)],1)},i=[],o=(e("28a5"),e("55dd"),e("96cf"),e("3b8d")),a=e("c51c"),c=e("75fc"),s=(e("7f7f"),e("ac6a"),e("bceb")),u=function(t,r){var e=[],n=Object(s["a"])(t),i=Object(s["a"])(r),o={};return i.forEach((function(t){o[t.group_id]||(o[t.group_id]=[]),o[t.group_id].push({id:t.library_info.id,label:t.library_info.name,group_id:t.group_id,children:[],sort:t.library_info.sort,type:a["b"],key:"".concat(a["b"],"-").concat(t.library_info.id)})})),n.forEach((function(t){var r=o[t.id]||[];r.sort((function(t,r){return t.sort-r.sort})),e.push({id:t.id,label:t.name,children:r,sort:t.sort,type:a["a"],key:"".concat(a["a"],"-").concat(t.id)}),delete o[t.id]})),e.sort((function(t,r){return t.sort-r.sort})),Object(s["b"])(o,(function(t){t.map((function(t){return t.group_id=0,t})),e.unshift.apply(e,Object(c["a"])(t))})),e},l=function(t,r,e,n){if(e.type===a["b"]&&r.type===a["a"]&&"inner"!==r)return{sort:0,groupId:0};if(e.type===a["b"]&&r.type===a["b"]&&0===r.group_id)return{sort:0,groupId:0};var i=t,o=0,c=0;o="inner"===r?n.id:n.type===a["a"]?0:n.group_id;var s=d(i,o);switch(null===s&&(s={children:i}),r){case"inner":c=s.children.length>1?s.children.slice(-2,-1)[0].sort+1e4:1e4;break;case"before":s.children.forEach((function(t,r,e){if(t.id===n.id){var i=r<=1?0:e[r-2].sort;c=(t.sort+i)/2}}));break;case"after":s.children.forEach((function(t,r,e){if(t.id===n.id){var i=r===e.length-2?t.sort+2e4:e[r+2].sort;c=(t.sort+i)/2}}));break}return{sort:c,groupId:o}},d=function t(r,e){if(0===e)return{children:r};var n=null;return r.forEach((function(r){r.type===a["a"]&&r.id===e&&(n=r),!n&&Array.isArray(r.children)&&r.children.length>0&&(n=t(r.children,e))})),n},f={name:"c-library-entity-tree",props:{libraryGroups:{type:Array,required:!0,default:function(){return[]}},librarys:{type:Array,required:!0,default:function(){return[]}},filterEntityKey:{type:String,default:""},filterEntityMode:{type:String,default:"search"}},watch:{libraryGroups:function(){this.inited=!0},filterEntityKey:function(t){"search"===this.filterEntityMode&&this.$refs.tree.filter(t)},filterEntityMode:function(t){"search"===t?this.$refs.tree.filter(this.filterEntityKey):this.$refs.tree.filter("")}},computed:{treeEmptyTips:function(){return this.inited?"暂无分组，赶快添加一个吧":"加载中"},entityCollection:function(){var t=this,r=u(this.libraryGroups,this.librarys);return this.$utils.ForEach(r,(function(r){r.isStick=t.checkEntityStickStatus(r),r.children&&r.children.length>0&&t.$utils.ForEach(r.children,(function(r){r.isStick=t.checkEntityStickStatus(r)}))})),r}},data:function(){return{LIBRARY_GROUP_KEY:a["a"],LIBRARY_KEY:a["b"],filterText:"",inited:!1}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initialize();case 2:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),methods:{initialize:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function r(){return t.apply(this,arguments)}return r}(),libraryGroupRemove:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=!1,t.next=3,this.$api.v1.LibraryGroupRemove({library_group_id:r},{report:!0}).then((function(t){var r=t.resMsg;e=!0,n.$tip.success(r)})).catch((function(t){var r=t.resMsg;n.$tip.error(r)}));case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)})));function r(r){return t.apply(this,arguments)}return r}(),libraryGroupSort:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r,e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.v1.LibraryGroupSort({library_group_id:r,sort:e});case 2:case"end":return t.stop()}}),t,this)})));function r(r,e){return t.apply(this,arguments)}return r}(),librarySort:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r,e){var n,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:0,t.next=3,this.$api.v1.LibraryMemberLibrarySort({library_id:r,sort:e,library_group_id:n});case 3:case"end":return t.stop()}}),t,this)})));function r(r,e){return t.apply(this,arguments)}return r}(),handleAllowDrop:function(t,r,e){var n=t.data.type,i=r.data.type,o=n===i&&"inner"!==e,c=n===a["b"]&&i===a["a"]&&("inner"===e||i===a["a"]&&"prev"===e);return o||c},handleFilterEntity:function(t,r){return!t||-1!==r.label.indexOf(t)},checkEntityStickStatus:function(t){return"stick"===this.filterEntityMode&&this.filterEntityKey&&t.label.indexOf(this.filterEntityKey)>=0},onEntityDrop:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r,e,n,i){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=l(this.entityCollection,n,r.data,e.data),r.data.type!==a["a"]){t.next=6;break}return t.next=4,this.libraryGroupSort(r.data.id,o.sort);case 4:t.next=8;break;case 6:return t.next=8,this.librarySort(r.data.id,o.sort,o.groupId);case 8:this.$emit("entity-sort-success");case 9:case"end":return t.stop()}}),t,this)})));function r(r,e,n,i){return t.apply(this,arguments)}return r}(),onEntityClick:function(t){this.$emit("entity-click",t.type,t)},onGroupAction:function(t){var r=t.split("|"),e=r[0],n=r[1];switch(e){case"modifyGroup":this.onLibraryGroupModifyReady(n);break;case"removeGroup":this.onLibraryGroupRemoveReady(n);break;default:break}},onLibraryGroupModifyReady:function(t){this.$emit("group-modify-ready",t)},onLibraryGroupRemoveReady:function(t){var r=this;this.$msgbox({title:"删除分组",message:"此操作将永久删除该分组, 是否继续?",showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n,i,o){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("confirm"!==n){e.next=11;break}return i.confirmButtonLoading=!0,i.confirmButtonText="删除中...",e.next=5,r.libraryGroupRemove(t);case 5:a=e.sent,i.confirmButtonText="确定",a&&(r.$emit("group-remove-success",t),o()),i.confirmButtonLoading=!1,e.next=12;break;case 11:o();case 12:case"end":return e.stop()}}),e)})));function n(t,r,n){return e.apply(this,arguments)}return n}()})}}},p=f,y=(e("9fa5"),e("2cd4"),e("2877")),h=Object(y["a"])(p,n,i,!1,null,"231e06d2",null);r["default"]=h.exports},"9fa5":function(t,r,e){"use strict";var n=e("a245"),i=e.n(n);i.a},a245:function(t,r,e){}}]);