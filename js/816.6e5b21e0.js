"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[816],{4426:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",[r("b-form",{on:{submit:t.go}},[r("b-form-group",{attrs:{id:"select",label:"Please specify a STAC Catalog or API...","label-for":"url","invalid-feedback":t.error,state:t.valid}},[r("b-form-input",{attrs:{id:"url",type:"url",value:t.url,placeholder:"https://..."},on:{input:t.setUrl}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Load")])],1),r("hr"),t.stacIndex.length>0?r("b-form-group",{attrs:{id:"stacIndex",label:"... or select one from STAC Index"}},[r("b-list-group",{staticClass:"stacIndex"},[t._l(t.stacIndex,(function(e){return[t.show(e)?r("b-list-group-item",{key:e.id,staticClass:"flex-column align-items-start",attrs:{button:"",active:t.url===e.url},on:{click:function(r){return t.open(e.url)}}},[r("div",{staticClass:"d-flex w-100 justify-content-between"},[r("strong",{staticClass:"mb-1"},[t._v(t._s(e.title))]),r("small",[e.isApi?r("b-badge",{attrs:{variant:"dark",pill:""}},[t._v("API")]):r("b-badge",{attrs:{variant:"light",pill:""}},[t._v("Catalog")])],1)]),r("p",{staticClass:"mb-1"},[r("Description",{attrs:{description:e.summary,compact:!0}})],1)]):t._e()]}))],2)],1):t._e()],1)],1)},i=[],n=r(4909),o=r(6449),s=r(7353),l=r(322),u=r(8367),c=r(629),p=r(7610),d=r(8661),b={name:"SelectDataSource",components:{BForm:n.e,BFormGroup:o.x,BFormInput:s.e,BListGroup:l.N,BListGroupItem:u.f,Description:p.Z},data(){return{url:""}},computed:{...(0,c.rn)(["stacIndex"]),...(0,c.Se)(["toBrowserPath"]),valid(){return!this.error},error(){if(!this.url)return null;try{let t=new URL(this.url);return t.protocol?t.host?null:"The URL is missing a host.":"The URL is missing a protocol."}catch(t){return"The URL is invalid."}}},created(){this.$store.dispatch("loadStacIndex"),this.$store.commit("resetPage")},methods:{show(t){return"private"!==t.access&&(!this.url||d.ZP.search(this.url,[t.title,t.url]))},setUrl(t){this.url=t},open(t){this.url=t,this.go()},go(){this.$store.commit("resetCatalog"),this.$router.push(this.toBrowserPath(this.url))}}},f=b,h=r(1001),v=(0,h.Z)(f,a,i,!1,null,null,null),m=v.exports},4909:function(t,e,r){r.d(e,{e:function(){return u}});var a=r(144),i=r(9558),n=r(4689),o=r(2299),s=r(451),l=(0,s.y2)({id:(0,s.pi)(o.N0),inline:(0,s.pi)(o.U5,!1),novalidate:(0,s.pi)(o.U5,!1),validated:(0,s.pi)(o.U5,!1)},n.eh),u=a.Z.extend({name:n.eh,functional:!0,props:l,render:function(t,e){var r=e.props,a=e.data,n=e.children;return t("form",(0,i.b)(a,{class:{"form-inline":r.inline,"was-validated":r.validated},attrs:{id:r.id,novalidate:r.novalidate}}),n)}})},8367:function(t,e,r){r.d(e,{f:function(){return y}});var a=r(144),i=r(9558),n=r(4689),o=r(2299),s=r(1572),l=r(1440),u=r(7040),c=r(451),p=r(488),d=r(7347);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=["a","router-link","button","b-link"],m=(0,u.CE)(d.NQ,["event","routerTag"]);delete m.href.default,delete m.to.default;var g=(0,c.y2)((0,u.GE)(f(f({},m),{},{action:(0,c.pi)(o.U5,!1),button:(0,c.pi)(o.U5,!1),tag:(0,c.pi)(o.N0,"div"),variant:(0,c.pi)(o.N0)})),n.KT),y=a.Z.extend({name:n.KT,functional:!0,props:g,render:function(t,e){var r,a=e.props,n=e.data,o=e.children,u=a.button,b=a.variant,f=a.active,g=a.disabled,y=(0,p.u$)(a),w=u?"button":y?d.we:a.tag,O=!!(a.action||y||u||(0,s.kI)(v,a.tag)),P={},_={};return(0,l.YR)(w,"button")?(n.attrs&&n.attrs.type||(P.type="button"),a.disabled&&(P.disabled=!0)):_=(0,c.uj)(m,a),t(w,(0,i.b)(n,{attrs:P,props:_,staticClass:"list-group-item",class:(r={},h(r,"list-group-item-".concat(b),b),h(r,"list-group-item-action",O),h(r,"active",f),h(r,"disabled",g),r)}),o)}})},322:function(t,e,r){r.d(e,{N:function(){return p}});var a=r(144),i=r(9558),n=r(4689),o=r(2299),s=r(3284),l=r(451);function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=(0,l.y2)({flush:(0,l.pi)(o.U5,!1),horizontal:(0,l.pi)(o.gL,!1),tag:(0,l.pi)(o.N0,"div")},n.DX),p=a.Z.extend({name:n.DX,functional:!0,props:c,render:function(t,e){var r=e.props,a=e.data,n=e.children,o=""===r.horizontal||r.horizontal;o=!r.flush&&o;var l={staticClass:"list-group",class:u({"list-group-flush":r.flush,"list-group-horizontal":!0===o},"list-group-horizontal-".concat(o),(0,s.HD)(o))};return t(r.tag,(0,i.b)(a,l),n)}})}}]);
//# sourceMappingURL=816.6e5b21e0.js.map