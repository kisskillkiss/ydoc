(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5395"],{9426:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"c-library-edtior"},[e(t.layout,{ref:"editor",tag:"div",staticClass:"layout-editor",attrs:{"init-content":t.initContent},on:{input:t.onInput}})],1)},o=[],r={name:"c-library-edtior",components:{"c-library-editor-markdown":function(){return e.e("chunk-2d0c55a7").then(e.bind(null,"3f75"))}},props:{initContent:{type:String,default:""}},data:function(){return{layout:"c-library-editor-markdown"}},methods:{fetchContent:function(){return this.$refs.editor.fetchContent()},setContent:function(t){this.$refs.editor.setContent(t)},onInput:function(){this.$emit("input")}}},a=r,u=e("2877"),c=Object(u["a"])(a,i,o,!1,null,"f7336992",null);n["default"]=c.exports}}]);