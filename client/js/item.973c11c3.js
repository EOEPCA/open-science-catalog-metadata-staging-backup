(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["item"],{"0481":function(t,e,i){"use strict";var n=i("23e7"),a=i("a2bf"),s=i("7b0b"),r=i("07fa"),o=i("5926"),l=i("65f0");n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=s(this),i=r(e),n=l(e,0);return n.length=a(n,e,e,i,0,void 0===t?1:o(t)),n}})},"0b4b":function(t,e,i){},1148:function(t,e,i){"use strict";var n=i("5926"),a=i("577e"),s=i("1d80"),r=RangeError;t.exports=function(t){var e=a(s(this)),i="",o=n(t);if(o<0||o==1/0)throw r("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(i+=e);return i}},"1db0":function(t,e,i){},4069:function(t,e,i){var n=i("44d2");n("flat")},"4fad":function(t,e,i){var n=i("23e7"),a=i("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return a(t)}})},"5e7d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.errored?i("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t._entity.message))]):t.loaded?i("b-container",{class:t.loaded&&"loaded"},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("header",[i("div",[i("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1)])])],1),i("b-row",[i("b-col",{attrs:{md:"8"}},[i("h1",{staticClass:"scroll"},[t._v(t._s(t.title))]),i("p",{staticClass:"scroll"},[i("small",[i("a",{attrs:{href:t.url,target:"_blank"}},[i("code",[t._v(t._s(t.url))])])])]),i("b-tabs",{attrs:{value:t.tabIndex},on:{input:t.selectTab,"activate-tab":t.activateTab}},[this.cogs.length?i("b-tab",{attrs:{title:"Preview"}},[i("div",{attrs:{id:"map-container"}},[i("div",{attrs:{id:"map"}})]),t.cogs.length>1?i("MultiSelect",{attrs:{options:t.cogs,placeholder:"Select an image","track-by":"href",label:"title","open-direction":"bottom"},model:{value:t.selectedImage,callback:function(e){t.selectedImage=e},expression:"selectedImage"}}):t._e(),t.features.length>0?i("MultiSelect",{attrs:{options:t.features,placeholder:"Select a set of features","track-by":"href",label:"title","open-direction":"bottom"},model:{value:t.selectedFeatures,callback:function(e){t.selectedFeatures=e},expression:"selectedFeatures"}}):t._e()],1):t._e(),this.thumbnail?i("b-tab",{attrs:{title:"Thumbnail"}},[i("a",{attrs:{href:t.thumbnail}},[i("img",{attrs:{id:"thumbnail",align:"center",src:t.thumbnail}})])]):t._e(),this.assets.length?i("b-tab",{key:"assets",attrs:{title:"Assets"}},[i("AssetTab",{attrs:{assets:t.assets,bands:t.bands,"has-bands":t.hasBands}})],1):t._e(),this.shownLinks.length?i("b-tab",{key:"links",attrs:{title:"Links"}},[i("LinkTab",{attrs:{links:t.shownLinks}})],1):t._e(),this.bands.length>0?i("b-tab",{attrs:{title:"Bands"}},[i("b-table",{attrs:{items:t.bands,fields:t.bandFields,responsive:"",small:"",striped:""}})],1):t._e()],1)],1),i("b-col",{attrs:{md:"4"}},[i("b-card",{attrs:{"bg-variant":"light"}},[i("div",{attrs:{id:"locator-map"}}),i("MetadataSidebar",{attrs:{properties:t.properties,keywords:t.keywords,collection:t.collection,"collection-link":t.collectionLink,providers:t.providers,slugify:t.slugify}})],1)],1)],1)],1):i("b-spinner",{attrs:{label:"Loading..."}}),i("footer",{staticClass:"footer"},[i("b-container",[i("span",{staticClass:"poweredby text-muted"},[t._v(" Powered by "),i("a",{attrs:{href:"https://github.com/radiantearth/stac-browser"}},[t._v("STAC Browser")]),t._v(" v"+t._s(t.browserVersion)+" ")])])],1)],1)},a=[],s=i("c7eb"),r=i("1da1"),o=i("3835"),l=i("5530"),c=(i("d3b7"),i("3ca3"),i("ddb0"),i("d9e2"),i("fb6a"),i("e9c4"),i("4de4"),i("a4d3"),i("e01a"),i("a15b"),i("d81d"),i("99af"),i("4e82"),i("caad"),i("2532"),i("b0c0"),i("4fad"),i("0481"),i("4069"),i("7db0"),i("b680"),i("ac1f"),i("5319"),i("0b16")),u=i.n(c),h=function(t){var e=t.length/6|0,i=new Array(e),n=0;while(n<e)i[n]="#"+t.slice(6*n,6*++n);return i},d=h("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),p=i("5da1"),f=i.n(p),b=i("e11e"),m=i.n(b),y=(i("983d"),i("2f62")),v=i("791e"),g=i("e0eb"),L=i("7f1d"),_=i.n(L),C=i("199e"),O=i("720b"),w=["image/vnd.stac.geotiff; cloud-optimized=true","image/x.geotiff","image/tiff; application=geotiff; profile=cloud-optimized"],k=["application/geo+json"],x=Object(l["a"])(Object(l["a"])({},v["a"]),{},{name:"ItemDetail",components:{LinkTab:C["a"],AssetTab:O["a"],MetadataSidebar:function(){return i.e("metadata-sidebar").then(i.bind(null,"5b84"))},MultiSelect:function(){return i.e("multiselect").then(i.t.bind(null,"8e5f",7))}},props:{ancestors:{type:Array,required:!0},center:{type:Array,default:null},path:{type:String,required:!0},resolve:{type:Function,required:!0},slugify:{type:Function,required:!0},url:{type:String,required:!0}},data:function(){return{stacVersion:null,fullscreen:!1,locatorMap:null,map:null,featuresLayer:null,tileLayer:null,overlayLayer:null,locatorOverlayLayer:null,geojsonOptions:{style:function(){return{weight:2,color:"#333",opacity:1,fillOpacity:0}}},selectedFeatures:null,selectedImage:null,tabIndex:0,tabsChanged:!1}},computed:Object(l["a"])(Object(l["a"])(Object(l["a"])({},v["a"].computed),Object(y["c"])(["getEntity"])),{},{_entity:function(){var t=this.getEntity(this.url);if(t instanceof Error)return t;if("FeatureCollection"===t.type){var e=u.a.parse(this.url),i=e.hash,n=i.slice(1);t=t.features[n]}this.stacVersion=t.stac_version;var a=JSON.parse(JSON.stringify(t));return _.a.item(a)},_collectionLinks:function(){return this.links.filter((function(t){return"collection"===t.rel}))},_description:function(){return this.properties.description},keywords:function(){return this.collection&&Array.isArray(this.collection.keywords)?this.collection.keywords:v["a"].computed.keywords.apply(this)},_license:function(){return this.properties.license||this.collection&&this.collection.license||this.rootCatalog&&this.rootCatalog.license},providers:function(){return this.properties.providers||this.collection&&this.collection.providers||v["a"].computed.providers.apply(this)},_temporalCoverage:function(){return null!=this.properties.start_datetime?[this.properties.start_datetime,this.properties.end_datetime].map((function(t){return t||".."})).join("/"):this.properties.datetime},_title:function(){return this.properties.title},attribution:function(){return null!=this.license||null!=this.licensor?"Imagery ".concat(this.license||""," ").concat(this.licensor||""):null},bands:function(){return this.properties["eo:bands"]||this.collection&&this.collection.properties&&this.collection.properties["eo:bands"]||[]},cog:function(){return this.cogs.slice().sort((function(t,e){return e.key.indexOf("visual")-t.key.indexOf("visual")})).shift()},cogs:function(){return this.assets.filter((function(t){return w.includes(t.type)})).map((function(t){return Object(l["a"])(Object(l["a"])({},t),{},{title:t.bandNames.length>0?"".concat(t.title," (").concat(t.bandNames,")"):t.title})})).map((function(t){return Object(l["a"])(Object(l["a"])({},t),{},{title:"Image: ".concat(t.title)})}))},collection:function(){return null!=this.collectionLink?(this.load(this.collectionLink.href),this.getEntity(this.collectionLink.href)):null},collectionLink:function(){var t=this;return this._collectionLinks.map((function(e){return Object(l["a"])(Object(l["a"])({},e),{},{href:t.resolve(e.href,t.url),slug:t.slugify(t.resolve(e.href,t.url))})})).pop()},entity:function(){return this.item},features:function(){return this.assets.filter((function(t){return k.includes(t.type)})).map((function(t){return Object(l["a"])(Object(l["a"])({},t),{},{title:"Features: ".concat(t.title)})}))},featuresSource:function(){return null==this.selectedFeatures?"":this.selectedFeatures.href},item:function(){return this._entity},jsonLD:function(){var t={"@context":"https://schema.org/","@type":"Dataset",name:this.title,description:this.description||"".concat(this.title," STAC Item"),citation:this.properties["sci:citation"],identifier:this.properties["sci:doi"]||this.item.id,keywords:this.keywords,license:this.licenseUrl,isBasedOn:this.url,url:this.path,workExample:(this.properties["sci:publications"]||[]).map((function(t){return{identifier:t.doi,citation:t.citation}})),includedInDataCatalog:[this.collectionLink,this.parentLink].filter((function(t){return!!t})).map((function(t){return{isBasedOn:t.href,url:t.slug}})),spatialCoverage:{"@type":"Place",geo:{"@type":"GeoShape",box:(this.item.bbox||[]).join(" ")}},temporalCoverage:this._temporalCoverage,distribution:this.assets.map((function(t){return{contentUrl:t.href,fileFormat:t.type,name:t.title}})),image:this.thumbnail};return t},licensor:function(){return this.providers.filter((function(t){return(t.roles||[]).includes("licensor")})).map((function(t){return null!=t.url?"<a href=".concat(t.url,">").concat(t.name,"</a>"):t.name})).pop()},parentLink:function(){var t=this;return this.links.filter((function(t){return"parent"===t.rel})).map((function(e){return Object(l["a"])(Object(l["a"])({},e),{},{href:t.resolve(e.href,t.url),slug:t.slugify(t.resolve(e.href,t.url))})})).pop()},properties:function(){return this.entity.properties||{}},tileSource:function(){return null==this.selectedImage?"":Object(g["c"])(this.selectedImage.href)}}),watch:Object(l["a"])(Object(l["a"])({},v["a"].watch),{},{featuresSource:function(t,e){t!==e&&null!=this.map&&this.initializeFeaturesLayer()},fullscreen:function(t,e){t!==e&&(null!=this.map&&(t?this.map.getContainer().classList.add("leaflet-pseudo-fullscreen"):this.map.getContainer().classList.remove("leaflet-pseudo-fullscreen")),this.updateState({fullscreen:t}),null!=this.map&&this.map.invalidateSize())},selectedFeatures:function(t,e){if(!f()(t,e)){var i=this.features.indexOf(t);i>=0?this.updateState({sf:i}):this.updateState({sf:null})}},selectedImage:function(t,e){if(!f()(t,e)){var i=this.cogs.indexOf(t);i>=0?this.updateState({si:i}):this.updateState({si:null})}},tileSource:function(t,e){t!==e&&null!=this.map&&(null!=this.tileLayer&&this.tileLayer.removeFrom(this.map),this.tileLayer=m.a.tileLayer(t,{attribution:this.attribution}).addTo(this.map))}}),methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},v["a"].methods),Object(y["b"])(["load"])),{},{initialize:function(){var t=this;this.syncWithQueryState(),this.$nextTick((function(){null!=t.cog&&(t.selectedImage=t.selectedImage||t.cog,t.initializePreviewMap()),t.initializeLocatorMap()}))},initializeFeaturesLayer:function(){var t=this;null!=this.featuresLayer&&this.featuresLayer.removeFrom(this.map),this.featuresLayer=m.a.geoJSON(null,{onEachFeature:function(e,i){return i.bindPopup((function(){var i=document.createElement("table"),n=t.properties["label:properties"]||[];return i.innerHTML=Object.entries(e.properties).filter((function(t){var e=Object(o["a"])(t,1),i=e[0];return!(n.length>0)||n.includes(i)})).map((function(t){var e=Object(o["a"])(t,2),i=e[0],n=e[1];return"<tr><td><strong>".concat(i,"</strong></td><td><code>").concat(n,"</code></td></tr>")})).join(""),i}))},style:function(e){var i=t.properties["label:classes"],n=(i||[]).map((function(t){return t.classes.map((function(e){return"".concat(t.name,"-").concat(e)}))})).flat(),a=(i.map((function(t){return[t.name,e.properties[t.name]]})).find((function(t){return null!=t[1]}))||[]).join("-"),s=d[n.indexOf(a)%d.length]||"#fc0";return{color:s,weight:1,opacity:1,fillOpacity:.25}}}).addTo(this.map),this.$nextTick(Object(r["a"])(Object(s["a"])().mark((function e(){var i,n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.featuresSource);case 3:return i=e.sent,e.next=6,i.json();case 6:n=e.sent,t.featuresLayer.addData(n),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.warn(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))))},initializeLocatorMap:function(){null==this.locatorMap?(this.locatorMap=m.a.map("locator-map",{attributionControl:!1,zoomControl:!1,boxZoom:!1,doubleClickZoom:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1}),m.a.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png",{attribution:'Map data <a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(this.locatorMap),m.a.tileLayer("https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}@2x.png",{opacity:.6,zIndex:1e3}).addTo(this.locatorMap)):this.locatorOverlayLayer.removeFrom(this.locatorMap),this.locatorOverlayLayer=m.a.geoJSON(this.item,{pane:"tilePane",style:{weight:1,color:"#ffd65d",opacity:1,fillOpacity:1}}).addTo(this.locatorMap),this.locatorMap.fitBounds(this.locatorOverlayLayer.getBounds(),{padding:[95,95]})},initializePreviewMap:function(){var t=this;if(null==this.map?(this.map=m.a.map("map",{scrollWheelZoom:!1}),this.map.on("moveend",this.updateHash),this.map.on("zoomend",this.updateHash),this.map.attributionControl.setPrefix(""),this.button=m.a.easyButton("fas fa-expand fa-2x",(function(){return t.fullscreen=!t.fullscreen}),{position:"topright"}).addTo(this.map),this.fullscreen&&this.map.getContainer().classList.add("leaflet-pseudo-fullscreen"),m.a.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png",{attribution:'Map data <a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(this.map),m.a.tileLayer("https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}@2x.png",{zIndex:1e3}).addTo(this.map)):(null!=this.tileLayer&&this.tileLayer.removeFrom(this.map),null!=this.featuresLayer&&this.featuresLayer.removeFrom(this.map),this.overlayLayer.removeFrom(this.map)),this.tileSource&&(this.tileLayer=m.a.tileLayer(this.tileSource,{attribution:this.attribution,maxZoom:22}).addTo(this.map)),this.featuresSource&&this.initializeFeaturesLayer(),this.overlayLayer=m.a.geoJSON(this.item,Object(l["a"])(Object(l["a"])({},this.geojsonOptions),{},{pane:"tilePane"})).addTo(this.map),null!=this.center){var e=Object(o["a"])(this.center,3),i=e[0],n=e[1],a=e[2];this.map.setView([n,a],i)}else this.map.fitBounds(this.overlayLayer.getBounds())},selectTab:function(t){var e=this;"number"!==typeof t&&(t=parseInt(t,10),isNaN(t))||(this.tabsChanged&&this.tabIndex!==t&&(this.updateState({t:t}),0===t&&this.map&&this.map.invalidateSize()),this.$nextTick((function(){e.tabIndex=t})))},activateTab:function(){this.tabsChanged=!0},syncWithQueryState:function(){this.selectTab(this.$route.query.t),null!=this.$route.query.si?this.selectedImage=this.cogs[this.$route.query.si]:this.selectedImage=this.cog,null!=this.$route.query.sf&&(this.selectedFeatures=this.features[this.$route.query.sf]),this.fullscreen=[!0,"true"].includes(this.$route.query.fullscreen)},updateHash:function(){var t=this;return Object(r["a"])(Object(s["a"])().mark((function e(){var i,n,a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.map.getCenter(),n=t.map.getZoom(),a="".concat(n,"/").concat(i.lat.toFixed(6),"/").concat(i.lng.toFixed(6)),!f()(t.$route.hash,"#".concat(a))){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,t.$router.replace(Object(l["a"])(Object(l["a"])({},t.$route),{},{hash:a}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](5),console.warn(e.t0);case 13:case"end":return e.stop()}}),e,null,[[5,10]])})))()}})}),S=x,j=(i("60bc"),i("e76f"),i("92d9"),i("2877")),D=Object(j["a"])(S,n,a,!1,null,"52e4f431",null);e["default"]=D.exports},"60bc":function(t,e,i){"use strict";i("0b4b")},"6f53":function(t,e,i){var n=i("83ab"),a=i("e330"),s=i("df75"),r=i("fc6a"),o=i("d1e7").f,l=a(o),c=a([].push),u=function(t){return function(e){var i,a=r(e),o=s(a),u=o.length,h=0,d=[];while(u>h)i=o[h++],n&&!l(a,i)||c(d,t?[i,a[i]]:a[i]);return d}};t.exports={entries:u(!0),values:u(!1)}},"92d9":function(t,e,i){"use strict";i("c9ac")},"983d":function(t,e){(function(){function t(t,i){this.title=t.title,this.stateName=t.stateName?t.stateName:"unnamed-state",this.icon=L.DomUtil.create("span",""),L.DomUtil.addClass(this.icon,"button-state state-"+this.stateName.replace(/(^\s*|\s*$)/g,"")),this.icon.innerHTML=e(t.icon),this.onClick=L.Util.bind(t.onClick?t.onClick:function(){},i)}function e(t){var e;return t.match(/[&;=<>"']/)?e=t:(t=t.replace(/(^\s*|\s*$)/g,""),e=L.DomUtil.create("span",""),0===t.indexOf("fa-")?L.DomUtil.addClass(e,"fa "+t):0===t.indexOf("glyphicon-")?L.DomUtil.addClass(e,"glyphicon "+t):L.DomUtil.addClass(e,t),e=e.outerHTML),e}L.Control.EasyBar=L.Control.extend({options:{position:"topleft",id:null,leafletClasses:!0},initialize:function(t,e){e&&L.Util.setOptions(this,e),this._buildContainer(),this._buttons=[];for(var i=0;i<t.length;i++)t[i]._bar=this,t[i]._container=t[i].button,this._buttons.push(t[i]),this.container.appendChild(t[i].button)},_buildContainer:function(){this._container=this.container=L.DomUtil.create("div",""),this.options.leafletClasses&&L.DomUtil.addClass(this.container,"leaflet-bar easy-button-container leaflet-control"),this.options.id&&(this.container.id=this.options.id)},enable:function(){return L.DomUtil.addClass(this.container,"enabled"),L.DomUtil.removeClass(this.container,"disabled"),this.container.setAttribute("aria-hidden","false"),this},disable:function(){return L.DomUtil.addClass(this.container,"disabled"),L.DomUtil.removeClass(this.container,"enabled"),this.container.setAttribute("aria-hidden","true"),this},onAdd:function(){return this.container},addTo:function(t){this._map=t;for(var e=0;e<this._buttons.length;e++)this._buttons[e]._map=t;var i=this._container=this.onAdd(t),n=this.getPosition(),a=t._controlCorners[n];return L.DomUtil.addClass(i,"leaflet-control"),-1!==n.indexOf("bottom")?a.insertBefore(i,a.firstChild):a.appendChild(i),this}}),L.easyBar=function(){for(var t=[L.Control.EasyBar],e=0;e<arguments.length;e++)t.push(arguments[e]);return new(Function.prototype.bind.apply(L.Control.EasyBar,t))},L.Control.EasyButton=L.Control.extend({options:{position:"topleft",id:null,type:"replace",states:[],leafletClasses:!0,tagName:"button"},initialize:function(e,i,n,a){this.options.states=[],null!=a&&(this.options.id=a),this.storage={},"object"===typeof arguments[arguments.length-1]&&L.Util.setOptions(this,arguments[arguments.length-1]),0===this.options.states.length&&"string"===typeof e&&"function"===typeof i&&this.options.states.push({icon:e,onClick:i,title:"string"===typeof n?n:""}),this._states=[];for(var s=0;s<this.options.states.length;s++)this._states.push(new t(this.options.states[s],this));this._buildButton(),this._activateState(this._states[0])},_buildButton:function(){if(this.button=L.DomUtil.create(this.options.tagName,""),"button"===this.options.tagName&&this.button.setAttribute("type","button"),this.options.id&&(this.button.id=this.options.id),this.options.leafletClasses&&L.DomUtil.addClass(this.button,"easy-button-button leaflet-bar-part leaflet-interactive"),L.DomEvent.addListener(this.button,"dblclick",L.DomEvent.stop),L.DomEvent.addListener(this.button,"mousedown",L.DomEvent.stop),L.DomEvent.addListener(this.button,"mouseup",L.DomEvent.stop),L.DomEvent.addListener(this.button,"click",(function(t){L.DomEvent.stop(t),this._currentState.onClick(this,this._map?this._map:null),this._map&&this._map.getContainer().focus()}),this),"replace"==this.options.type)this.button.appendChild(this._currentState.icon);else for(var t=0;t<this._states.length;t++)this.button.appendChild(this._states[t].icon)},_currentState:{stateName:"unnamed",icon:function(){return document.createElement("span")}()},_states:null,state:function(t){return 0===arguments.length?this._currentState.stateName:("string"==typeof t?this._activateStateNamed(t):"number"==typeof t&&this._activateState(this._states[t]),this)},_activateStateNamed:function(t){for(var e=0;e<this._states.length;e++)this._states[e].stateName==t&&this._activateState(this._states[e])},_activateState:function(t){if(t!==this._currentState){"replace"==this.options.type&&(this.button.appendChild(t.icon),this.button.removeChild(this._currentState.icon)),t.title?this.button.title=t.title:this.button.removeAttribute("title");for(var e=0;e<this._states.length;e++)L.DomUtil.removeClass(this._states[e].icon,this._currentState.stateName+"-active"),L.DomUtil.addClass(this._states[e].icon,t.stateName+"-active");L.DomUtil.removeClass(this.button,this._currentState.stateName+"-active"),L.DomUtil.addClass(this.button,t.stateName+"-active"),this._currentState=t}},enable:function(){return L.DomUtil.addClass(this.button,"enabled"),L.DomUtil.removeClass(this.button,"disabled"),this.button.setAttribute("aria-hidden","false"),this},disable:function(){return L.DomUtil.addClass(this.button,"disabled"),L.DomUtil.removeClass(this.button,"enabled"),this.button.setAttribute("aria-hidden","true"),this},onAdd:function(t){var e=L.easyBar([this],{position:this.options.position,leafletClasses:this.options.leafletClasses});return this._anonymousBar=e,this._container=e.container,this._anonymousBar.container},removeFrom:function(t){return this._map===t&&this.remove(),this}}),L.easyButton=function(){var t=Array.prototype.concat.apply([L.Control.EasyButton],arguments);return new(Function.prototype.bind.apply(L.Control.EasyButton,t))}})()},a2bf:function(t,e,i){"use strict";var n=i("e8b5"),a=i("07fa"),s=i("3511"),r=i("0366"),o=function(t,e,i,l,c,u,h,d){var p,f,b=c,m=0,y=!!h&&r(h,d);while(m<l)m in i&&(p=y?y(i[m],m,e):i[m],u>0&&n(p)?(f=a(p),b=o(t,e,p,f,b,u-1)-1):(s(b+1),t[b]=p),b++),m++;return b};t.exports=o},b680:function(t,e,i){"use strict";var n=i("23e7"),a=i("e330"),s=i("5926"),r=i("408a"),o=i("1148"),l=i("d039"),c=RangeError,u=String,h=Math.floor,d=a(o),p=a("".slice),f=a(1..toFixed),b=function(t,e,i){return 0===e?i:e%2===1?b(t,e-1,i*t):b(t*t,e/2,i)},m=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},y=function(t,e,i){var n=-1,a=i;while(++n<6)a+=e*t[n],t[n]=a%1e7,a=h(a/1e7)},v=function(t,e){var i=6,n=0;while(--i>=0)n+=t[i],t[i]=h(n/e),n=n%e*1e7},g=function(t){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==t[e]){var n=u(t[e]);i=""===i?n:i+d("0",7-n.length)+n}return i},L=l((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!l((function(){f({})}));n({target:"Number",proto:!0,forced:L},{toFixed:function(t){var e,i,n,a,o=r(this),l=s(t),h=[0,0,0,0,0,0],f="",L="0";if(l<0||l>20)throw c("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return u(o);if(o<0&&(f="-",o=-o),o>1e-21)if(e=m(o*b(2,69,1))-69,i=e<0?o*b(2,-e,1):o/b(2,e,1),i*=4503599627370496,e=52-e,e>0){y(h,0,i),n=l;while(n>=7)y(h,1e7,0),n-=7;y(h,b(10,n,1),0),n=e-1;while(n>=23)v(h,1<<23),n-=23;v(h,1<<n),y(h,1,1),v(h,2),L=g(h)}else y(h,0,i),y(h,1<<-e,0),L=g(h)+d("0",l);return l>0?(a=L.length,L=f+(a<=l?"0."+d("0",l-a)+L:p(L,0,a-l)+"."+p(L,a-l))):L=f+L,L}})},c9ac:function(t,e,i){},e76f:function(t,e,i){"use strict";i("1db0")}}]);
//# sourceMappingURL=item.973c11c3.js.map