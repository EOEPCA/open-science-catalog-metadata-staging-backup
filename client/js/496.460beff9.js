"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[496],{4496:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-alert",{attrs:{variant:e.variant,show:""}},[s("strong",[e._v(e._s(e.title))]),e._v("  "),e.isDeprecated?s("small",[e._v(" Please note that this "+e._s(e.type)+" is deprecated with the potential to be removed in any of the next versions. It should be transitioned out of usage as soon as possible. Refrain from using it in new projects. ")]):s("small",[e._v("This "+e._s(e.type)+" is "),s("em",[e._v("not")]),e._v(" deprecated, but there are other versions available:")]),e.latestLink||e.successorLink||e.predecessorLink?s("ul",[e.latestLink?s("li",[s("small",[s("StacLink",{attrs:{data:e.latestLink,fallbackTitle:"Go to latest version",tooltip:"Go to latest version"}})],1)]):e._e(),e.successorLink?s("li",[s("small",[s("StacLink",{attrs:{data:e.successorLink,fallbackTitle:"Go to newer version",tooltip:"Go to newer version"}})],1)]):e._e(),e.predecessorLink?s("li",[s("small",[s("StacLink",{attrs:{data:e.predecessorLink,fallbackTitle:"Go to previous version",tooltip:"Go to previous version"}})],1)]):e._e()]):e._e()])},r=[],a=s(8661),n={name:"DeprecationNotice",components:{StacLink:()=>Promise.resolve().then(s.bind(s,7179))},props:{data:{type:Object,default:null}},computed:{latestLink(){return this.getLink("latest-version")},successorLink(){return this.getLink("successor-version")},predecessorLink(){return!this.isDeprecated&&this.getLink("predecessor-version")},variant(){return this.isDeprecated?"warning":"info"},isDeprecated(){return Boolean(this.data.isItem()?this.data.properties.deprecated:this.data.deprecated)},title(){return this.isDeprecated?"Deprecated":this.latestLink||this.successorLink?"Outdated":"Other Versions"},type(){return this.data.isItem()?"Item":this.data.type}},methods:{getLink(e){let t=this.data.getLinksWithRels(e).filter((e=>a.ZP.isStacMediaType(e.type,!0)));return t.length>0?t[0]:null}}},o=n,l=s(1001),c=(0,l.Z)(o,i,r,!1,null,"c225bc56",null),d=c.exports}}]);
//# sourceMappingURL=496.460beff9.js.map