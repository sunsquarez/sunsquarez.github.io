(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{218:function(e,t,n){e.exports=n.p+"img/TOL.f3ca065.png"},219:function(e,t,n){e.exports=n.p+"img/TOL_bg.3751032.jpg"},220:function(e,t,n){e.exports=n.p+"img/M800.1e02e01.png"},221:function(e,t,n){e.exports=n.p+"img/M800_bg.362dada.jpg"},222:function(e,t,n){e.exports=n.p+"img/Digisalad.d9288f4.png"},223:function(e,t,n){e.exports=n.p+"img/Digisalad_bg.fc20aba.jpg"},224:function(e,t,n){e.exports=n.p+"img/Innopage.2662f39.png"},225:function(e,t,n){e.exports=n.p+"img/Innopage_bg.3ea5fd1.jpg"},239:function(e,t,n){"use strict";n.r(t);n(3),n(2),n(1),n(4),n(5);var r=n(0),o=n(48),c=(n(50),n(44),n(13),n(45),n(218)),d=n.n(c),l=n(219),v=n.n(l),m=n(220),f=n.n(m),_=n(221),y=n.n(_),h=n(222),O=n.n(h),j=n(223),w=n.n(j),C=n(224),E=n.n(C),S=n(225),D=n.n(S),x="working",H="education",L={2021:{events:[{description:"Started new job at The Other Leaf",detail:"Co-founder & Software Engineer",type:x,isDefaultOpened:!0,image1:d.a,image2:v.a},{description:"Left job at M800",type:x}]},2019:{events:[{description:"Started new job at M800",detail:"<div>Software Engineer</div><div>Product Development - Web</div>",type:x,isDefaultOpened:!0,image1:f.a,image2:y.a},{description:"Left job at DigiSalad",type:x}]},2018:{events:[{description:"Started new job at DigiSalad",detail:"Full Stack Developer",type:x,isDefaultOpened:!0,image1:O.a,image2:w.a},{description:"Left job at Innopage",type:x}]},2017:{events:[{description:"Started new job at Innopage",detail:"Web Developer",type:x,isDefaultOpened:!0,image1:E.a,image2:D.a},{description:"Graduated from CUHK",type:H}]},2014:{events:[{description:"Started studying at CUHK",detail:"Bsc. in Computer Science",type:H},{description:"Graduated from IVE (Tsing Yi)",type:H}]},2012:{events:[{description:"Started studying at IVE (Tsing Yi)",detail:"HD in Software Engineering",type:H}]}},P={name:"Timeline",mounted:function(){this.initDistortionEffect()},methods:{initDistortionEffect:function(){Array.from(document.querySelectorAll(".distortion__item-img")).forEach((function(e){var t=Array.from(e.querySelectorAll("img"));new hoverEffect({parent:e,intensity:e.dataset.intensity||void 0,speedIn:e.dataset.speedin||void 0,speedOut:e.dataset.speedout||void 0,easing:e.dataset.easing||void 0,hover:e.dataset.hover||void 0,image1:t[0].getAttribute("src"),image2:t[1].getAttribute("src"),displacementImage:e.dataset.displacement})}))},getYears:function(){return Object.keys(L).reverse()},getEventsByYear:function(e){return L[e].events}}},I=n(18);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var T={name:"Experience",head:function(){return{title:"Hanson Wu | Experience"}},components:{timeline:Object(I.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline",attrs:{"data-aos":"fade-up","data-aos-duration":"1200","data-aos-delay":"1000"}},[e._m(0),e._v(" "),e._l(e.getYears(),(function(t){return n("div",{key:t,staticClass:"timeline__section"},[n("div",{staticClass:"section__year"},[e._v("\n      "+e._s(t)+"\n    ")]),e._v(" "),n("div",{staticClass:"section__event"},e._l(e.getEventsByYear(t),(function(r,o){return n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"event-"+t+"-"+o,expression:"`event-${year}-${index}`"}],key:"event-"+t+"-"+o},[n("div",[n("span",{staticClass:"section__event-description"},[e._v("\n            "+e._s(r.description)+"\n          ")]),e._v(" "),r.detail?n("span",{staticClass:"section__event-more"},[n("span",{staticClass:"event-more__horizontal"}),e._v(" "),n("span",{staticClass:"event-more__vertical"})]):e._e()]),e._v(" "),r.detail?n("b-collapse",{staticClass:"pb-2",attrs:{id:"event-"+t+"-"+o,visible:r.isDefaultOpened}},[n("b-card",[r.image1&&r.image2?n("div",{staticClass:"distortion"},[n("div",{staticClass:"distortion__item"},[n("div",{staticClass:"distortion__item-img",attrs:{"data-displacement":"/images/displacement/8.jpg","data-intensity":"-0.65","data-speedIn":"1.2","data-speedOut":"1.2"}},[n("img",{attrs:{src:r.image1,alt:r.description}}),e._v(" "),n("img",{attrs:{src:r.image2,alt:r.description}})])])]):e._e(),e._v(" "),n("div",{domProps:{innerHTML:e._s(r.detail)}})])],1):e._e()],1)})),1)])}))],2)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline__label"},[n("div",{staticClass:"label__year"},[e._v("\n      Year\n    ")]),e._v(" "),n("div",{staticClass:"label__event"},[e._v("\n      Event\n    ")])])}],!1,null,null,null).exports},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({isLoading:function(e){return e.isLoading}})),mounted:function(){this.setContainerHeight(),window.addEventListener("resize",this.setContainerHeight)},destroyed:function(){window.removeEventListener("resize",this.setContainerHeight)},methods:{setContainerHeight:function(){var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t=document.querySelector(".header-bar").clientHeight,n=document.querySelector(".footer-bar").clientHeight;document.querySelector(".container").style.minHeight=e-t-n+"px"}}},Y=Object(I.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("h1",{staticClass:"d-none"},[e._v("Hanson Wu | Experience")]),e._v(" "),e._m(0),e._v(" "),e.isLoading?e._e():n("timeline")],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"title"},[n("span",{staticClass:"hashtag"}),e._v("experience")])}],!1,null,null,null);t.default=Y.exports}}]);