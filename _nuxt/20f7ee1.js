(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{209:function(e,t,n){e.exports=n.p+"img/M800.c9a86d6.png"},210:function(e,t,n){e.exports=n.p+"img/M800_bg.9df828b.jpg"},211:function(e,t,n){e.exports=n.p+"img/Digisalad.7acf34b.png"},212:function(e,t,n){e.exports=n.p+"img/Digisalad_bg.7704e00.jpg"},213:function(e,t,n){e.exports=n.p+"img/Innopage.8cfed5c.png"},214:function(e,t,n){e.exports=n.p+"img/Innopage_bg.be45108.jpg"},231:function(e,t,n){"use strict";n.r(t);n(5),n(3),n(2),n(1),n(4);var r=n(0),o=n(43),c=(n(45),n(54),n(209)),d=n.n(c),l=n(210),v=n.n(l),m=n(211),f=n.n(m),_=n(212),h=n.n(_),y=n(213),C=n.n(y),O=n(214),w=n.n(O),j="working",E="education",D={2019:{events:[{description:"Started new job at M800",detail:"<div>Software Engineer</div><div>Product Development - Web</div>",type:j,isDefaultOpened:!0,image1:d.a,image2:v.a},{description:"Left job at DigiSalad",type:j}]},2018:{events:[{description:"Started new job at DigiSalad",detail:"Full Stack Developer",type:j,isDefaultOpened:!0,image1:f.a,image2:h.a},{description:"Left job at Innopage",type:j}]},2017:{events:[{description:"Started new job at Innopage",detail:"Web Developer",type:j,isDefaultOpened:!0,image1:C.a,image2:w.a},{description:"Graduated from CUHK",type:E}]},2016:{events:[{description:"Completed internship at BusiCat",type:j}]},2015:{events:[{description:"Completed internship at HKT",type:j}]},2014:{events:[{description:"Started studying at CUHK",detail:"Bsc. in Computer Science",type:E},{description:"Graduated from IVE (Tsing Yi)",type:E}]},2012:{events:[{description:"Started studying at IVE (Tsing Yi)",detail:"HD in Software Engineering",type:E}]}},S={name:"Timeline",mounted:function(){this.initDistortionEffect()},methods:{initDistortionEffect:function(){Array.from(document.querySelectorAll(".distortion__item-img")).forEach((function(e){var t=Array.from(e.querySelectorAll("img"));new hoverEffect({parent:e,intensity:e.dataset.intensity||void 0,speedIn:e.dataset.speedin||void 0,speedOut:e.dataset.speedout||void 0,easing:e.dataset.easing||void 0,hover:e.dataset.hover||void 0,image1:t[0].getAttribute("src"),image2:t[1].getAttribute("src"),displacementImage:e.dataset.displacement})}))},getYears:function(){return Object.keys(D).reverse()},getEventsByYear:function(e){return D[e].events}}},H=n(16);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var P={name:"Experience",head:function(){return{title:"Hanson Wu | Experience"}},transition:{name:"intro",duration:600},components:{timeline:Object(H.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline",attrs:{"data-aos":"fade-up","data-aos-duration":"1200","data-aos-delay":"1000"}},[e._m(0),e._v(" "),e._l(e.getYears(),(function(t){return n("div",{key:t,staticClass:"timeline__section"},[n("div",{staticClass:"section__year"},[e._v("\n      "+e._s(t)+"\n    ")]),e._v(" "),n("div",{staticClass:"section__event"},e._l(e.getEventsByYear(t),(function(r,o){return n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"event-"+t+"-"+o,expression:"`event-${year}-${index}`"}],key:"event-"+t+"-"+o},[n("div",[n("span",{staticClass:"section__event-description"},[e._v("\n            "+e._s(r.description)+"\n          ")]),e._v(" "),r.detail?n("span",{staticClass:"section__event-more"},[n("span",{staticClass:"event-more__horizontal"}),e._v(" "),n("span",{staticClass:"event-more__vertical"})]):e._e()]),e._v(" "),r.detail?n("b-collapse",{attrs:{id:"event-"+t+"-"+o,visible:r.isDefaultOpened}},[n("b-card",[r.image1&&r.image2?n("div",{staticClass:"distortion"},[n("div",{staticClass:"distortion__item"},[n("div",{staticClass:"distortion__item-img",attrs:{"data-displacement":"/images/displacement/8.jpg","data-intensity":"-0.65","data-speedIn":"1.2","data-speedOut":"1.2"}},[n("img",{attrs:{src:r.image1,alt:r.description}}),e._v(" "),n("img",{attrs:{src:r.image2,alt:r.description}})])])]):e._e(),e._v(" "),n("div",{domProps:{innerHTML:e._s(r.detail)}})])],1):e._e()],1)})),1)])}))],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"timeline__label"},[t("div",{staticClass:"label__year"},[this._v("\n      Year\n    ")]),this._v(" "),t("div",{staticClass:"label__event"},[this._v("\n      Event\n    ")])])}],!1,null,null,null).exports},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({isLoading:function(e){return e.isLoading}})),mounted:function(){this.setContainerHeight(),window.addEventListener("resize",this.setContainerHeight)},destroyed:function(){window.removeEventListener("resize",this.setContainerHeight)},methods:{setContainerHeight:function(){var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t=document.querySelector(".header-bar").clientHeight,n=document.querySelector(".footer-bar").clientHeight;document.querySelector(".container").style.minHeight=e-t-n+"px"}}},I=Object(H.a)(P,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"container"},[t("h1",{staticClass:"d-none"},[this._v("Hanson Wu | Experience")]),this._v(" "),this._m(0),this._v(" "),this.isLoading?this._e():t("timeline")],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"title"},[t("span",{staticClass:"hashtag"}),this._v("experience")])}],!1,null,null,null);t.default=I.exports}}]);