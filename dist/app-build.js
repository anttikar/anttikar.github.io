"bundle";!function(){var a=System.amdDefine;a("app.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><require from="nav-bar.html"></require><require from="components/loading-layer"></require><require from="bootstrap/css/bootstrap.css"></require><!-- Show loading layer when Aurelia is navigating --><loading-layer show.bind="router.isNavigating" messagekey="login.pleaseWait" view-model.ref="loadingLayerReference"></loading-layer><!-- Navbar --><nav-bar router.bind="router"></nav-bar><div class="page-host"><!-- Main view for router to show views --><router-view></router-view></div></template>'})}(),System.register("blur-image.js",["aurelia-framework"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b,c,d,f,g){if(!(isNaN(g)||g<1)){g|=0;var h,i=a.getContext("2d");try{h=i.getImageData(b,c,d,f)}catch(a){throw new Error("unable to access image data: "+a)}var j,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J=h.data,K=g+g+1,L=d-1,M=f-1,N=g+1,O=N*(N+1)/2,P=new e,Q=P;for(n=1;n<K;n++)if(Q=Q.next=new e,n==N)var R=Q;Q.next=P;var S=null,T=null;r=q=0;var U=k[g],V=l[g];for(m=0;m<f;m++){for(A=B=C=D=s=t=u=v=0,w=N*(E=J[q]),x=N*(F=J[q+1]),y=N*(G=J[q+2]),z=N*(H=J[q+3]),s+=O*E,t+=O*F,u+=O*G,v+=O*H,Q=P,n=0;n<N;n++)Q.r=E,Q.g=F,Q.b=G,Q.a=H,Q=Q.next;for(n=1;n<N;n++)o=q+((L<n?L:n)<<2),s+=(Q.r=E=J[o])*(I=N-n),t+=(Q.g=F=J[o+1])*I,u+=(Q.b=G=J[o+2])*I,v+=(Q.a=H=J[o+3])*I,A+=E,B+=F,C+=G,D+=H,Q=Q.next;for(S=P,T=R,j=0;j<d;j++)J[q+3]=H=v*U>>V,0!=H?(H=255/H,J[q]=(s*U>>V)*H,J[q+1]=(t*U>>V)*H,J[q+2]=(u*U>>V)*H):J[q]=J[q+1]=J[q+2]=0,s-=w,t-=x,u-=y,v-=z,w-=S.r,x-=S.g,y-=S.b,z-=S.a,o=r+((o=j+g+1)<L?o:L)<<2,A+=S.r=J[o],B+=S.g=J[o+1],C+=S.b=J[o+2],D+=S.a=J[o+3],s+=A,t+=B,u+=C,v+=D,S=S.next,w+=E=T.r,x+=F=T.g,y+=G=T.b,z+=H=T.a,A-=E,B-=F,C-=G,D-=H,T=T.next,q+=4;r+=d}for(j=0;j<d;j++){for(B=C=D=A=t=u=v=s=0,q=j<<2,w=N*(E=J[q]),x=N*(F=J[q+1]),y=N*(G=J[q+2]),z=N*(H=J[q+3]),s+=O*E,t+=O*F,u+=O*G,v+=O*H,Q=P,n=0;n<N;n++)Q.r=E,Q.g=F,Q.b=G,Q.a=H,Q=Q.next;for(p=d,n=1;n<=g;n++)q=p+j<<2,s+=(Q.r=E=J[q])*(I=N-n),t+=(Q.g=F=J[q+1])*I,u+=(Q.b=G=J[q+2])*I,v+=(Q.a=H=J[q+3])*I,A+=E,B+=F,C+=G,D+=H,Q=Q.next,n<M&&(p+=d);for(q=j,S=P,T=R,m=0;m<f;m++)o=q<<2,J[o+3]=H=v*U>>V,H>0?(H=255/H,J[o]=(s*U>>V)*H,J[o+1]=(t*U>>V)*H,J[o+2]=(u*U>>V)*H):J[o]=J[o+1]=J[o+2]=0,s-=w,t-=x,u-=y,v-=z,w-=S.r,x-=S.g,y-=S.b,z-=S.a,o=j+((o=m+N)<M?o:M)*d<<2,s+=A+=S.r=J[o],t+=B+=S.g=J[o+1],u+=C+=S.b=J[o+2],v+=D+=S.a=J[o+3],S=S.next,w+=E=T.r,x+=F=T.g,y+=G=T.b,z+=H=T.a,A-=E,B-=F,C-=G,D-=H,T=T.next,q+=d}i.putImageData(h,b,c)}}function e(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function f(a,b){var c=a.width,e=a.height,f=a.getContext("2d");f.drawImage(b,0,0,c,e),d(a,0,0,c,e,m)}var g,h,i,j,k,l,m;return{setters:[function(a){g=a.inject}],execute:function(){a("BlurImageCustomAttribute",(h=g(Element),j=h(i=function(){function a(b){c(this,a),this.element=b}return a.prototype.valueChanged=function(a){var b=this;a.complete?f(this.element,a):a.onload=function(){return f(b.element,a)}},a}())||i)),a("BlurImageCustomAttribute",j),k=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],l=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24],m=40}}}),function(){var a=System.amdDefine;a("components/loading-layer.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><div class="loading-layer"><div class="row splash"><div class="message"><span>${pleaseWaitMessage}</span></div><span class="fa fa-spinner fa-spin fa-4x"></span></div></div></template>'})}(),System.register("components/loading-layer.js",["aurelia-framework"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h;return{setters:[function(a){d=a.bindable,e=a.customElement}],execute:function(){a("LoadingLayer",(f=e("loading-layer"),h=f(g=function a(){c(this,a),this.pleaseWaitMessage="Please wait"})||g)),a("LoadingLayer",h)}}}),System.register("main.js",["bootstrap"],function(a,b){"use strict";function c(a){a.use.standardConfiguration().developmentLogging(),a.start().then(function(){return a.setRoot()})}return a("configure",c),{setters:[function(a){}],execute:function(){}}}),function(){var a=System.amdDefine;a("nav-bar.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template bindable="router"><nav class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><a class="navbar-brand" href="#"><i class="fa fa-home"></i> <span>${router.title}</span></a></div></nav></template>'})}(),function(){var a=System.amdDefine;a("photo-browser.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><section><div id="photoGrid" class="row"><div class="col-sm-6 col-md-3" repeat.for="photo of photos"><div class="thumbnail-photo-row"><a route-href="route: photo; params.bind: {id: photo.id}"><img src.bind="photo.thumbnailUrl" class="thumbnail-image"></a></div></div></div><div id="infiniteScrollDiv"><div class="row text-center" show.bind="loadingMoreImages"><span class="fa fa-spinner fa-spin fa-2x"></span></div></div></section></template>'})}(),System.register("app.js",[],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("App",d=function(){function a(){c(this,a),this.photoBrowserData={photos:[],pageIndex:1,scrollPosition:void 0}}return a.prototype.configureRouter=function(a,b){a.title="PhotoBrowser",a.map([{route:["","photos"],name:"photo-browser",moduleId:"photo-browser",title:"Photo Browser"},{route:["photo/:id"],name:"photo",moduleId:"photo-viewer",title:"Photo Viewer"}]),this.router=b},a}()),a("App",d)}}}),System.register("photo-browser.js",["aurelia-framework","app","./services/RestService"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i,j;return{setters:[function(a){d=a.inject,e=a.Container},function(a){f=a.App},function(a){g=a.default}],execute:function(){a("PhotoBrowser",(h=d(g),j=h(i=function(){function a(b){c(this,a),this.restApi=b,this.app=e.instance.get(f),this.photos=[],this.pageIndex=1,this.pageLimit=20,this.loadingMoreImages=!1}return a.prototype.created=function(){if(this.photos=this.app.photoBrowserData.photos,this.pageIndex=this.app.photoBrowserData.pageIndex,0===this.photos.length)return this.fetchImages()},a.prototype.attached=function(){this.addScrollEventListener()},a.prototype.bind=function(){var a=this;void 0!==this.app.photoBrowserData.scrollPosition&&setTimeout(function(){$(".page-host").scrollTop(a.app.photoBrowserData.scrollPosition)},200)},a.prototype.canDeactivate=function(){this.app.photoBrowserData.scrollPosition=$(".page-host").scrollTop()},a.prototype.unbind=function(){$(".page-host").unbind("scroll")},a.prototype.addScrollEventListener=function(){var a=this,b=null;$(".page-host").scroll(function(){b&&clearTimeout(b),b=setTimeout(function(){$("#infiniteScrollDiv").offset().top<window.innerHeight&&a.loadMoreImages()},200)})},a.prototype.loadMoreImages=function(){this.loadingMoreImages=!0,this.pageIndex+=1,this.app.photoBrowserData.pageIndex=this.pageIndex,this.fetchImages()},a.prototype.fetchImages=function(){var a=this,b="photos?";return b+="_page="+this.pageIndex,b+="&_limit="+this.pageLimit,this.restApi.get(b).then(function(a){return a.json()}).then(function(b){a.photos.push.apply(a.photos,b),a.loadingMoreImages=!1}).catch(function(b){console.log(b),a.loadingMoreImages=!1})},a}())||i)),a("PhotoBrowser",j)}}}),function(){var a=System.amdDefine;a("photo-viewer.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><section><div class="row"><a href="#"><button class="fa fa-times-circle-o fa-3x pull-right close-button"></button></a></div><div class="row text-center"><h2>${photo.title}</h2><div class="row"><img src.bind="photo.url"></div></div></section></template>'})}(),System.register("services/RestService.js",["aurelia-framework","aurelia-fetch-client","fetch"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i,j,k,l;return{setters:[function(a){d=a.Aurelia,e=a.inject,f=a.singleton,g=a.noView},function(a){h=a.HttpClient},function(a){}],execute:function(){a("default",(i=e(d,h),j=g(),l=i(k=j(k=function(){function a(b,d){c(this,a),this.http=d,this.http.configure(function(a){a.useStandardConfiguration().withBaseUrl("https://jsonplaceholder.typicode.com/").withInterceptor({response:function(a){return a},responseError:function(a){throw a}})})}return a.prototype.get=function(a){var b={method:"GET"};return this.fetchData(a,b)},a.prototype.fetchData=function(a,b){var c=this;if(a){var d=this.http.fetch(a,b),e=this.getFetchTimeout();return Promise.race([e,d]).then(function(a){return c.checkResponseStatus(a)})}return Promise.reject("url")},a.prototype.getFetchTimeout=function(){return new Promise(function(a){setTimeout(a,6e4)})},a.prototype.checkResponseStatus=function(a){return a instanceof Response?a.status>=200&&a.status<400?Promise.resolve(a):a.json().then(function(a){return Promise.reject(a)}):Promise.reject("timeout")},a}())||k)||k)),a("default",l)}}}),System.register("photo-viewer.js",["aurelia-framework","./services/RestService"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h;return{setters:[function(a){d=a.inject},function(a){e=a.default}],execute:function(){a("PhotoViewer",(f=d(e),h=f(g=function(){function a(b){c(this,a),this.restApi=b,this.heading="View photo"}return a.prototype.activate=function(a){var b=this,c=a.id;return this.restApi.get("photos/"+c).then(function(a){return a.json()}).then(function(a){b.photo=a})},a}())||g)),a("PhotoViewer",h)}}});