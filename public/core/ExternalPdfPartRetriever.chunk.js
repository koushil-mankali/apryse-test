/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[5],{486:function(ya,ua,n){n.r(ua);var pa=n(0);ya=n(48);var na=n(187),ma=n(417),ka=n(233),ja=window;n=function(){function ha(aa,y){this.O_=function(r){r=r.split(".");return r[r.length-1].match(/(jpg|jpeg|png|gif)$/i)};y=y||{};this.url=aa;this.filename=y.filename||aa;this.Lf=y.customHeaders;this.Mwa=!!y.useDownloader;this.withCredentials=!!y.withCredentials}ha.prototype.yH=function(aa){this.Lf=aa};ha.prototype.getCustomHeaders=function(){return this.Lf};
ha.prototype.getFileData=function(aa){var y=this,r=this,f=new XMLHttpRequest,a=0===this.url.indexOf("blob:")?"blob":"arraybuffer";f.open("GET",this.url,!0);f.withCredentials=this.withCredentials;f.responseType=a;this.Lf&&Object.keys(this.Lf).forEach(function(h){f.setRequestHeader(h,y.Lf[h])});var b=/^https?:/i.test(this.url);f.addEventListener("load",function(h){return Object(pa.b)(this,void 0,void 0,function(){var e,w,x,z,ca,ba;return Object(pa.d)(this,function(fa){switch(fa.label){case 0:if(200!==
this.status&&(b||0!==this.status))return[3,10];r.trigger(ha.Events.DOCUMENT_LOADING_PROGRESS,[h.loaded,h.loaded]);if("blob"!==this.responseType)return[3,4];e=this.response;return r.O_(r.filename)?[4,Object(ka.b)(e)]:[3,2];case 1:return w=fa.ba(),r.fileSize=w.byteLength,aa(new Uint8Array(w)),[3,3];case 2:x=new FileReader,x.onload=function(ea){ea=new Uint8Array(ea.target.result);r.fileSize=ea.length;aa(ea)},x.readAsArrayBuffer(e),fa.label=3;case 3:return[3,9];case 4:fa.Ke.push([4,8,,9]);z=new Uint8Array(this.response);
if(!r.O_(r.filename))return[3,6];e=new Blob([z.buffer]);return[4,Object(ka.b)(e)];case 5:return w=fa.ba(),r.fileSize=w.byteLength,aa(new Uint8Array(w)),[3,7];case 6:r.fileSize=z.length,aa(z),fa.label=7;case 7:return[3,9];case 8:return fa.ba(),r.trigger(ha.Events.ERROR,["pdfLoad","Out of memory"]),[3,9];case 9:return[3,11];case 10:ca=h.currentTarget,ba=Object(na.b)(ca),r.trigger(ha.Events.ERROR,["pdfLoad",this.status+" "+ca.statusText,ba]),fa.label=11;case 11:return r.zB=null,[2]}})})},!1);f.onprogress=
function(h){r.trigger(ha.Events.DOCUMENT_LOADING_PROGRESS,[h.loaded,0<h.total?h.total:0])};f.addEventListener("error",function(){r.trigger(ha.Events.ERROR,["pdfLoad","Network failure"]);r.zB=null},!1);f.send();this.zB=f};ha.prototype.getFile=function(){var aa=this;return new Promise(function(y){ja.da.isJSWorker&&y(aa.url);if(aa.Mwa){var r=Object(pa.a)({url:aa.url},aa.Lf?{customHeaders:aa.Lf}:{});y(r)}y(null)})};ha.prototype.abort=function(){this.zB&&(this.zB.abort(),this.zB=null)};ha.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress",
ERROR:"error"};return ha}();Object(ya.a)(n);Object(ma.a)(n);Object(ma.b)(n);ua["default"]=n}}]);}).call(this || window)