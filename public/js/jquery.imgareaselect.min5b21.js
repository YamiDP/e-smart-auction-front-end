!function(we){var Se=Math.abs,ze=Math.max,ke=Math.min,Ce=Math.round;function Ae(){return we("<div/>")}we.imgAreaSelect=function(o,n){var T,L,r,c,d,a,t,j,D,R,X,i,Y,$,q,B,s,Q,u,l,h,f,F,m,p,y,g,G,v=we(o),b=Ae(),x=Ae(),w=Ae().add(Ae()).add(Ae()).add(Ae()),S=Ae().add(Ae()).add(Ae()).add(Ae()),z=we([]),k={left:0,top:0},C={left:0,top:0},A=0,J="absolute",W={x1:0,y1:0,x2:0,y2:0,width:0,height:0},U=document.documentElement,V=navigator.userAgent;function I(e){return e+k.left-C.left}function K(e){return e+k.top-C.top}function P(e){return e-k.left+C.left}function N(e){return e-k.top+C.top}function Z(e){return ze(e.pageX||0,ee(e).x)-C.left}function _(e){return ze(e.pageY||0,ee(e).y)-C.top}function ee(e){e=e.originalEvent||{};return e.touches&&e.touches.length?{x:e.touches[0].pageX,y:e.touches[0].pageY}:{x:0,y:0}}function H(e){var t=e||R,e=e||X;return{x1:Ce(W.x1*t),y1:Ce(W.y1*e),x2:Ce(W.x2*t),y2:Ce(W.y2*e),width:Ce(W.x2*t)-Ce(W.x1*t),height:Ce(W.y2*e)-Ce(W.y1*e)}}function te(e,t,o,i,s){var n=s||R,s=s||X;(W={x1:Ce(e/n||0),y1:Ce(t/s||0),x2:Ce(o/n||0),y2:Ce(i/s||0)}).width=W.x2-W.x1,W.height=W.y2-W.y1}function M(){T&&v.width()&&(k={left:Ce(v.offset().left),top:Ce(v.offset().top)},d=v.innerWidth(),a=v.innerHeight(),k.top+=v.outerHeight()-a>>1,k.left+=v.outerWidth()-d>>1,Y=Ce(n.minWidth/R)||0,$=Ce(n.minHeight/X)||0,q=Ce(ke(n.maxWidth/R||1<<24,d)),B=Ce(ke(n.maxHeight/X||1<<24,a)),"1.3.2"!=we().jquery||"fixed"!=J||U.getBoundingClientRect||(k.top+=ze(document.body.scrollTop,U.scrollTop),k.left+=ze(document.body.scrollLeft,U.scrollLeft)),C=/absolute|relative/.test(t.css("position"))?{left:Ce(t.offset().left)-t.scrollLeft(),top:Ce(t.offset().top)-t.scrollTop()}:"fixed"==J?{left:we(document).scrollLeft(),top:we(document).scrollTop()}:{left:0,top:0},r=I(0),c=K(0),(W.x2>d||W.y2>a)&&de())}function oe(e){if(Q){switch(b.css({left:I(W.x1),top:K(W.y1)}).add(x).width(y=W.width).height(g=W.height),x.add(w).add(z).css({left:0,top:0}),w.width(ze(y-w.outerWidth()+w.innerWidth(),0)).height(ze(g-w.outerHeight()+w.innerHeight(),0)),we(S[0]).css({left:r,top:c,width:W.x1,height:a}),we(S[1]).css({left:r+W.x1,top:c,width:y,height:W.y1}),we(S[2]).css({left:r+W.x2,top:c,width:d-W.x2,height:a}),we(S[3]).css({left:r+W.x1,top:c+W.y2,width:y,height:a-W.y2}),y-=z.outerWidth(),g-=z.outerHeight(),z.length){case 8:we(z[4]).css({left:y>>1}),we(z[5]).css({left:y,top:g>>1}),we(z[6]).css({left:y>>1,top:g}),we(z[7]).css({top:g>>1});case 4:z.slice(1,3).css({left:y}),z.slice(2,4).css({top:g})}!1!==e&&(we.imgAreaSelect.onKeyPress!=ge&&we(document).off(we.imgAreaSelect.keyPress,we.imgAreaSelect.onKeyPress),n.keys&&we(document).on(we.imgAreaSelect.keyPress,function(){we.imgAreaSelect.onKeyPress=ge})),O&&w.outerWidth()-w.innerWidth()==2&&(w.css("margin",0),setTimeout(function(){w.css("margin","auto")},0))}}function ie(e){M(),oe(e),u=I(W.x1),l=K(W.y1),h=I(W.x2),f=K(W.y2)}function se(e,t){n.fadeSpeed?e.fadeOut(n.fadeSpeed,t):e.hide()}function E(e){var t=P(Z(e))-W.x1,e=N(_(e))-W.y1;G||(M(),G=!0,b.one("mouseout",function(){G=!1})),i="",n.resizable&&(e<=n.resizeMargin?i="n":e>=W.height-n.resizeMargin&&(i="s"),t<=n.resizeMargin?i+="w":t>=W.width-n.resizeMargin&&(i+="e")),b.css("cursor",i?i+"-resize":n.movable?"move":""),L&&L.toggle()}function ne(e){we("body").css("cursor",""),!n.autoHide&&W.width*W.height!=0||se(b.add(S),function(){we(this).hide()}),we(document).off("mousemove touchmove",ae),b.on("mousemove touchmove",E),n.onSelectEnd(o,H())}function re(e){return"mousedown"==e.type&&1!=e.which||(E(e),M(),i?(we("body").css("cursor",i+"-resize"),u=I(W[/w/.test(i)?"x2":"x1"]),l=K(W[/n/.test(i)?"y2":"y1"]),we(document).on("mousemove touchmove",ae).one("mouseup touchend",ne),b.off("mousemove touchmove",E)):n.movable?(j=r+W.x1-Z(e),D=c+W.y1-_(e),b.off("mousemove touchmove",E),we(document).on("mousemove touchmove",le).one("mouseup touchend",function(){n.onSelectEnd(o,H()),we(document).off("mousemove touchmove",le),b.on("mousemove touchmove",E)})):v.mousedown(e)),!1}function ce(e){s&&(e?(h=ze(r,ke(r+d,u+Se(f-l)*s*(u<h||-1))),f=Ce(ze(c,ke(c+a,l+Se(h-u)/s*(l<f||-1)))),h=Ce(h)):(f=ze(c,ke(c+a,l+Se(h-u)/s*(l<f||-1))),h=Ce(ze(r,ke(r+d,u+Se(f-l)*s*(u<h||-1)))),f=Ce(f)))}function de(){u=ke(u,r+d),l=ke(l,c+a),Se(h-u)<Y&&((h=u-Y*(h<u||-1))<r?u=r+Y:r+d<h&&(u=r+d-Y)),Se(f-l)<$&&((f=l-$*(f<l||-1))<c?l=c+$:c+a<f&&(l=c+a-$)),h=ze(r,ke(h,r+d)),f=ze(c,ke(f,c+a)),ce(Se(h-u)<Se(f-l)*s),Se(h-u)>q&&(h=u-q*(h<u||-1),ce()),Se(f-l)>B&&(f=l-B*(f<l||-1),ce(!0)),W={x1:P(ke(u,h)),x2:P(ze(u,h)),y1:N(ke(l,f)),y2:N(ze(l,f)),width:Se(h-u),height:Se(f-l)},oe(),n.onSelectChange(o,H())}function ae(e){return h=/w|e|^$/.test(i)||s?Z(e):I(W.x2),f=/n|s|^$/.test(i)||s?_(e):K(W.y2),de(),!1}function ue(e,t){h=(u=e)+W.width,f=(l=t)+W.height,we.extend(W,{x1:P(u),y1:N(l),x2:P(h),y2:N(f)}),oe(),n.onSelectChange(o,H())}function le(e){return u=ze(r,ke(j+Z(e),r+d-W.width)),l=ze(c,ke(D+_(e),c+a-W.height)),ue(u,l),e.preventDefault(),!1}function he(){we(document).off("mousemove touchmove",he),M(),h=u,f=l,de(),i="",S.is(":visible")||b.add(S).hide().fadeIn(n.fadeSpeed||0),Q=!0,we(document).off("mouseup touchend",fe).on("mousemove touchmove",ae).one("mouseup touchend",ne),b.off("mousemove touchmove",E),n.onSelectStart(o,H())}function fe(){we(document).off("mousemove touchmove",he).off("mouseup touchend",fe),se(b.add(S)),te(P(u),N(l),P(u),N(l)),this instanceof we.imgAreaSelect||(n.onSelectChange(o,H()),n.onSelectEnd(o,H()))}function me(e){return 1<e.which||S.is(":animated")||(M(),j=u=Z(e),D=l=_(e),we(document).on({"mousemove touchmove":he,"mouseup touchend":fe})),!1}function pe(){ie(!1)}function ye(){T=!0,be(n=we.extend({classPrefix:"imgareaselect",movable:!0,parent:"body",resizable:!0,resizeMargin:10,onInit:function(){},onSelectStart:function(){},onSelectChange:function(){},onSelectEnd:function(){}},n)),b.add(S).css({visibility:""}),n.show&&(Q=!0,M(),oe(),b.add(S).hide().fadeIn(n.fadeSpeed||0)),setTimeout(function(){n.onInit(o,H())},0)}var ge=function(e){var t,o=n.keys,i=e.keyCode,s=isNaN(o.alt)||!e.altKey&&!e.originalEvent.altKey?!isNaN(o.ctrl)&&e.ctrlKey?o.ctrl:!isNaN(o.shift)&&e.shiftKey?o.shift:isNaN(o.arrows)?10:o.arrows:o.alt;if("resize"==o.arrows||"resize"==o.shift&&e.shiftKey||"resize"==o.ctrl&&e.ctrlKey||"resize"==o.alt&&(e.altKey||e.originalEvent.altKey)){switch(i){case 37:s=-s;case 39:t=ze(u,h),u=ke(u,h),h=ze(t+s,u),ce();break;case 38:s=-s;case 40:t=ze(l,f),l=ke(l,f),f=ze(t+s,l),ce(!0);break;default:return}de()}else switch(u=ke(u,h),l=ke(l,f),i){case 37:ue(ze(u-s,r),l);break;case 38:ue(u,ze(l-s,c));break;case 39:ue(u+ke(s,d-P(h)),l);break;case 40:ue(u,l+ke(s,a-N(f)));break;default:return}return!1};function ve(e,t){for(var o in t)void 0!==n[o]&&e.css(t[o],n[o])}function be(e){if(e.parent&&(t=we(e.parent)).append(b.add(S)),we.extend(n,e),M(),null!=e.handles){for(z.remove(),z=we([]),m=e.handles?"corners"==e.handles?4:8:0;m--;)z=z.add(Ae());z.addClass(n.classPrefix+"-handle").css({position:"absolute",fontSize:"0",zIndex:A+1||1}),0<=!parseInt(z.css("width"))&&z.width(5).height(5),(p=n.borderWidth)&&z.css({borderWidth:p,borderStyle:"solid"}),ve(z,{borderColor1:"border-color",borderColor2:"background-color",borderOpacity:"opacity"})}for(R=n.imageWidth/d||1,X=n.imageHeight/a||1,null!=e.x1&&(te(e.x1,e.y1,e.x2,e.y2),e.show=!e.hide),e.keys&&(n.keys=we.extend({shift:1,ctrl:"resize"},e.keys)),S.addClass(n.classPrefix+"-outer"),x.addClass(n.classPrefix+"-selection"),m=0;m++<4;)we(w[m-1]).addClass(n.classPrefix+"-border"+m);ve(x,{selectionColor:"background-color",selectionOpacity:"opacity"}),ve(w,{borderOpacity:"opacity",borderWidth:"border-width"}),ve(S,{outerColor:"background-color",outerOpacity:"opacity"}),(p=n.borderColor1)&&we(w[0]).css({borderStyle:"solid",borderColor:p}),(p=n.borderColor2)&&we(w[1]).css({borderStyle:"dashed",borderColor:p}),b.append(x.add(w).add(L)).append(z),O&&((p=(S.css("filter")||"").match(/opacity=(\d+)/))&&S.css("opacity",p[1]/100),(p=(w.css("filter")||"").match(/opacity=(\d+)/))&&w.css("opacity",p[1]/100)),e.hide?se(b.add(S)):e.show&&T&&(Q=!0,b.add(S).fadeIn(n.fadeSpeed||0),ie()),s=(F=(n.aspectRatio||"").split(/:/))[0]/F[1],v.add(S).off("mousedown",me),n.disable||!1===n.enable?(b.off({"mousemove touchmove":E,"mousedown touchstart":re}),we(window).off("resize",pe)):(!n.enable&&!1!==n.disable||((n.resizable||n.movable)&&b.on({"mousemove touchmove":E,"mousedown touchstart":re}),we(window).on("resize",pe)),n.persistent||v.add(S).on("mousedown touchstart",me)),n.enable=n.disable=void 0}this.remove=function(){be({disable:!0}),b.add(S).remove()},this.getOptions=function(){return n},this.setOptions=be,this.getSelection=H,this.setSelection=te,this.cancelSelection=fe,this.update=ie;for(var O=(/msie ([\w.]+)/i.exec(V)||[])[1],xe=/opera/i.test(V),V=/webkit/i.test(V)&&!/chrome/i.test(V),e=v;e.length;)A=ze(A,isNaN(e.css("z-index"))?A:e.css("z-index")),"fixed"==e.css("position")&&(J="fixed"),e=e.parent(":not(body)");A=n.zIndex||A,O&&v.attr("unselectable","on"),we.imgAreaSelect.keyPress=O||V?"keydown":"keypress",xe&&(L=Ae().css({width:"100%",height:"100%",position:"absolute",zIndex:A+2||2})),b.add(S).css({visibility:"hidden",position:J,overflow:"hidden",zIndex:A||"0"}),b.css({zIndex:A+2||2}),x.add(w).css({position:"absolute",fontSize:"0"}),o.complete||"complete"==o.readyState||!v.is("img")?ye():v.one("load",ye),!T&&O&&7<=O&&(o.src=o.src)},we.fn.imgAreaSelect=function(e){return e=e||{},this.each(function(){we(this).data("imgAreaSelect")?e.remove?(we(this).data("imgAreaSelect").remove(),we(this).removeData("imgAreaSelect")):we(this).data("imgAreaSelect").setOptions(e):e.remove||(void 0===e.enable&&void 0===e.disable&&(e.enable=!0),we(this).data("imgAreaSelect",new we.imgAreaSelect(this,e)))}),e.instance?we(this).data("imgAreaSelect"):this}}(jQuery);