/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(e,d){function b(f,c){var g=f.nodeName.toLowerCase();if("area"===g){c=f.parentNode;g=c.name;if(!f.href||!g||c.nodeName.toLowerCase()!=="map"){return false}f=e("img[usemap=#"+g+"]")[0];return !!f&&a(f)}return(/input|select|textarea|button|object/.test(g)?!f.disabled:"a"==g?f.href||c:c)&&a(f)}function a(c){return !e(c).parents().andSelf().filter(function(){return e.curCSS(this,"visibility")==="hidden"||e.expr.filters.hidden(this)}).length}e.ui=e.ui||{};if(!e.ui.version){e.extend(e.ui,{version:"1.8.16",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});e.fn.extend({propAttr:e.fn.prop||e.fn.attr,_focus:e.fn.focus,focus:function(f,c){return typeof f==="number"?this.each(function(){var g=this;setTimeout(function(){e(g).focus();c&&c.call(g)},f)}):this._focus.apply(this,arguments)},scrollParent:function(){var c;c=e.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.curCSS(this,"position",1))&&/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!c.length?e(document):c},zIndex:function(f){if(f!==d){return this.css("zIndex",f)}if(this.length){f=e(this[0]);for(var c;f.length&&f[0]!==document;){c=f.css("position");if(c==="absolute"||c==="relative"||c==="fixed"){c=parseInt(f.css("zIndex"),10);if(!isNaN(c)&&c!==0){return c}}f=f.parent()}}return 0},disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(c){c.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});e.each(["Width","Height"],function(f,c){function l(o,i,h,p){e.each(k,function(){i-=parseFloat(e.curCSS(o,"padding"+this,true))||0;if(h){i-=parseFloat(e.curCSS(o,"border"+this+"Width",true))||0}if(p){i-=parseFloat(e.curCSS(o,"margin"+this,true))||0}});return i}var k=c==="Width"?["Left","Right"]:["Top","Bottom"],j=c.toLowerCase(),g={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+c]=function(h){if(h===d){return g["inner"+c].call(this)}return this.each(function(){e(this).css(j,l(this,h)+"px")})};e.fn["outer"+c]=function(i,h){if(typeof i!=="number"){return g["outer"+c].call(this,i)}return this.each(function(){e(this).css(j,l(this,i,true,h)+"px")})}});e.extend(e.expr[":"],{data:function(f,c,g){return !!e.data(f,g[3])},focusable:function(c){return b(c,!isNaN(e.attr(c,"tabindex")))},tabbable:function(f){var c=e.attr(f,"tabindex"),g=isNaN(c);return(g||c>=0)&&b(f,!g)}});e(function(){var f=document.body,c=f.appendChild(c=document.createElement("div"));e.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});e.support.minHeight=c.offsetHeight===100;e.support.selectstart="onselectstart" in c;f.removeChild(c).style.display="none"});e.extend(e.ui,{plugin:{add:function(f,c,h){f=e.ui[f].prototype;for(var g in h){f.plugins[g]=f.plugins[g]||[];f.plugins[g].push([c,h[g]])}},call:function(f,c,h){if((c=f.plugins[c])&&f.element[0].parentNode){for(var g=0;g<c.length;g++){f.options[c[g][0]]&&c[g][1].apply(f.element,h)}}}},contains:function(f,c){return document.compareDocumentPosition?f.compareDocumentPosition(c)&16:f!==c&&f.contains(c)},hasScroll:function(f,c){if(e(f).css("overflow")==="hidden"){return false}c=c&&c==="left"?"scrollLeft":"scrollTop";var g=false;if(f[c]>0){return true}f[c]=1;g=f[c]>0;f[c]=0;return g},isOverAxis:function(f,c,g){return f>c&&f<c+g},isOver:function(f,c,l,k,j,g){return e.ui.isOverAxis(f,l,j)&&e.ui.isOverAxis(c,k,g)}})}})(jQuery);
/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(a,e){if(a.cleanData){var d=a.cleanData;a.cleanData=function(b){for(var h=0,g;(g=b[h])!=null;h++){try{a(g).triggerHandler("remove")}catch(f){}}d(b)}}else{var c=a.fn.remove;a.fn.remove=function(b,f){return this.each(function(){if(!f){if(!b||a.filter(b,[this]).length){a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(g){}})}}return c.call(a(this),b,f)})}}a.widget=function(b,j,i){var h=b.split(".")[0],g;b=b.split(".")[1];g=h+"-"+b;if(!i){i=j;j=a.Widget}a.expr[":"][g]=function(f){return !!a.data(f,b)};a[h]=a[h]||{};a[h][b]=function(f,k){arguments.length&&this._createWidget(f,k)};j=new j;j.options=a.extend(true,{},j.options);a[h][b].prototype=a.extend(true,j,{namespace:h,widgetName:b,widgetEventPrefix:a[h][b].prototype.widgetEventPrefix||b,widgetBaseClass:g},i);a.widget.bridge(b,a[h][b])};a.widget.bridge=function(b,f){a.fn[b]=function(k){var j=typeof k==="string",i=Array.prototype.slice.call(arguments,1),g=this;k=!j&&i.length?a.extend.apply(null,[true,k].concat(i)):k;if(j&&k.charAt(0)==="_"){return g}j?this.each(function(){var l=a.data(this,b),h=l&&a.isFunction(l[k])?l[k].apply(l,i):l;if(h!==l&&h!==e){g=h;return false}}):this.each(function(){var h=a.data(this,b);h?h.option(k||{})._init():a.data(this,b,new f(k,this))});return g}};a.Widget=function(b,f){arguments.length&&this._createWidget(b,f)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(b,g){a.data(g,this.widgetName,this);this.element=a(g);this.options=a.extend(true,{},this.options,this._getCreateOptions(),b);var f=this;this.element.bind("remove."+this.widgetName,function(){f.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(b,g){var f=b;if(arguments.length===0){return a.extend({},this.options)}if(typeof b==="string"){if(g===e){return this.options[b]}f={};f[b]=g}this._setOptions(f);return this},_setOptions:function(b){var f=this;a.each(b,function(h,g){f._setOption(h,g)});return this},_setOption:function(b,f){this.options[b]=f;if(b==="disabled"){this.widget()[f?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",f)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(b,j,i){var h=this.options[b];j=a.Event(j);j.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase();i=i||{};if(j.originalEvent){b=a.event.props.length;for(var g;b;){g=a.event.props[--b];j[g]=j.originalEvent[g]}}this.element.trigger(j,i);return !(a.isFunction(h)&&h.call(this.element[0],j,i)===false||j.isDefaultPrevented())}}})(jQuery);
/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(a){var c=false;a(document).mouseup(function(){c=false});a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(d){return b._mouseDown(d)}).bind("click."+this.widgetName,function(d){if(true===a.data(d.target,b.widgetName+".preventClickEvent")){a.removeData(d.target,b.widgetName+".preventClickEvent");d.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b);this._mouseDownEvent=b;var h=this,e=b.which==1,d=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:false;if(!e||d||!this._mouseCapture(b)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){h.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==false;if(!this._mouseStarted){b.preventDefault();return true}}true===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(f){return h._mouseMove(f)};this._mouseUpDelegate=function(f){return h._mouseUp(f)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);b.preventDefault();return c=true}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button){return this._mouseUp(b)}if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==false)?this._mouseDrag(b):this._mouseUp(b)}return !this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",true);this._mouseStop(b)}return false},_mouseDistanceMet:function(b){return Math.max(Math.abs(this._mouseDownEvent.pageX-b.pageX),Math.abs(this._mouseDownEvent.pageY-b.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);(function(a){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative"}this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(d){var c=this.options;if(this.helper||c.disabled||a(d.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(d);if(!this.handle){return false}if(c.iframeFix){a(c.iframeFix===true?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")})}return true},_mouseStart:function(d){var c=this.options;this.helper=this._createHelper(d);this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);c.containment&&this._setContainment();if(this._trigger("start",d)===false){this._clear();return false}this._cacheHelperProportions();a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,d);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(d,true);a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,d);return true},_mouseDrag:function(d,c){this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!c){c=this._uiHash();if(this._trigger("drag",d,c)===false){this._mouseUp({});return false}this.position=c.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}a.ui.ddmanager&&a.ui.ddmanager.drag(this,d);return false},_mouseStop:function(e){var d=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,e)}if(this.dropped){d=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original"){return false}if(this.options.revert=="invalid"&&!d||this.options.revert=="valid"&&d||this.options.revert===true||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",e)!==false&&f._clear()})}else{this._trigger("stop",e)!==false&&this._clear()}return false},_mouseUp:function(b){this.options.iframeFix===true&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b);return a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(d){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==d.target){c=true}});return c},_createHelper:function(d){var c=this.options;d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo);d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(b){if(typeof b=="string"){b=b.split(" ")}if(a.isArray(b)){b={left:+b[0],top:+b[1]||0}}if("left" in b){this.offset.click.left=b.left+this.margins.left}if("right" in b){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if("top" in b){this.offset.click.top=b.top+this.margins.top}if("bottom" in b){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[e.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(e.containment=="document"?0:a(window).scrollLeft())+a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e.containment=="document"?0:a(window).scrollTop())+(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!/^(document|window|parent)$/.test(e.containment)&&e.containment.constructor!=Array){e=a(e.containment);var d=e[0];if(d){e.offset();var f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=e}}else{if(e.containment.constructor==Array){this.containment=e.containment}}},_convertPositionTo:function(e,d){if(!d){d=this.position}e=e=="absolute"?1:-1;var h=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(h[0].tagName);return{top:d.top+this.offset.relative.top*e+this.offset.parent.top*e-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:h.scrollTop())*e),left:d.left+this.offset.relative.left*e+this.offset.parent.left*e-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:h.scrollLeft())*e)}},_generatePosition:function(i){var d=this.options,n=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=/(html|body)/i.test(n[0].tagName),m=i.pageX,j=i.pageY;if(this.originalPosition){var k;if(this.containment){if(this.relative_container){k=this.relative_container.offset();k=[this.containment[0]+k.left,this.containment[1]+k.top,this.containment[2]+k.left,this.containment[3]+k.top]}else{k=this.containment}if(i.pageX-this.offset.click.left<k[0]){m=k[0]+this.offset.click.left}if(i.pageY-this.offset.click.top<k[1]){j=k[1]+this.offset.click.top}if(i.pageX-this.offset.click.left>k[2]){m=k[2]+this.offset.click.left}if(i.pageY-this.offset.click.top>k[3]){j=k[3]+this.offset.click.top}}if(d.grid){j=d.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/d.grid[1])*d.grid[1]:this.originalPageY;j=k?!(j-this.offset.click.top<k[1]||j-this.offset.click.top>k[3])?j:!(j-this.offset.click.top<k[1])?j-d.grid[1]:j+d.grid[1]:j;m=d.grid[0]?this.originalPageX+Math.round((m-this.originalPageX)/d.grid[0])*d.grid[0]:this.originalPageX;m=k?!(m-this.offset.click.left<k[0]||m-this.offset.click.left>k[2])?m:!(m-this.offset.click.left<k[0])?m-d.grid[0]:m+d.grid[0]:m}}return{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():l?0:n.scrollTop()),left:m-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():l?0:n.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(e,d,f){f=f||this._uiHash();a.ui.plugin.call(this,e,[d,f]);if(e=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.Widget.prototype._trigger.call(this,e,d,f)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});a.extend(a.ui.draggable,{version:"1.8.16"});a.ui.plugin.add("draggable","connectToSortable",{start:function(g,d){var j=a(this).data("draggable"),h=j.options,i=a.extend({},d,{item:j.element});j.sortables=[];a(h.connectToSortable).each(function(){var b=a.data(this,"sortable");if(b&&!b.options.disabled){j.sortables.push({instance:b,shouldRevert:b.options.revert});b.refreshPositions();b._trigger("activate",g,i)}})},stop:function(e,d){var h=a(this).data("draggable"),g=a.extend({},d,{item:h.element});a.each(h.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;h.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(e);this.instance.options.helper=this.instance.options._helper;h.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",e,g)}})},drag:function(e,d){var h=a(this).data("draggable"),g=this;a.each(h.sortables,function(){this.instance.positionAbs=h.positionAbs;this.instance.helperProportions=h.helperProportions;this.instance.offset.click=h.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(g).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return d.helper[0]};e.target=this.instance.currentItem[0];this.instance._mouseCapture(e,true);this.instance._mouseStart(e,true,true);this.instance.offset.click.top=h.offset.click.top;this.instance.offset.click.left=h.offset.click.left;this.instance.offset.parent.left-=h.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=h.offset.parent.top-this.instance.offset.parent.top;h._trigger("toSortable",e);h.dropped=this.instance.element;h.currentItem=h.element;this.instance.fromOutside=h}this.instance.currentItem&&this.instance._mouseDrag(e)}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",e,this.instance._uiHash(this.instance));this.instance._mouseStop(e,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();h._trigger("fromSortable",e);h.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(){var d=a("body"),c=a(this).data("draggable").options;if(d.css("cursor")){c._cursor=d.css("cursor")}d.css("cursor",c.cursor)},stop:function(){var b=a(this).data("draggable").options;b._cursor&&a("body").css("cursor",b._cursor)}});a.ui.plugin.add("draggable","opacity",{start:function(d,c){d=a(c.helper);c=a(this).data("draggable").options;if(d.css("opacity")){c._opacity=d.css("opacity")}d.css("opacity",c.opacity)},stop:function(d,c){d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}});a.ui.plugin.add("draggable","scroll",{start:function(){var b=a(this).data("draggable");if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()}},drag:function(e){var d=a(this).data("draggable"),h=d.options,g=false;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!h.axis||h.axis!="x"){if(d.overflowOffset.top+d.scrollParent[0].offsetHeight-e.pageY<h.scrollSensitivity){d.scrollParent[0].scrollTop=g=d.scrollParent[0].scrollTop+h.scrollSpeed}else{if(e.pageY-d.overflowOffset.top<h.scrollSensitivity){d.scrollParent[0].scrollTop=g=d.scrollParent[0].scrollTop-h.scrollSpeed}}}if(!h.axis||h.axis!="y"){if(d.overflowOffset.left+d.scrollParent[0].offsetWidth-e.pageX<h.scrollSensitivity){d.scrollParent[0].scrollLeft=g=d.scrollParent[0].scrollLeft+h.scrollSpeed}else{if(e.pageX-d.overflowOffset.left<h.scrollSensitivity){d.scrollParent[0].scrollLeft=g=d.scrollParent[0].scrollLeft-h.scrollSpeed}}}}else{if(!h.axis||h.axis!="x"){if(e.pageY-a(document).scrollTop()<h.scrollSensitivity){g=a(document).scrollTop(a(document).scrollTop()-h.scrollSpeed)}else{if(a(window).height()-(e.pageY-a(document).scrollTop())<h.scrollSensitivity){g=a(document).scrollTop(a(document).scrollTop()+h.scrollSpeed)}}}if(!h.axis||h.axis!="y"){if(e.pageX-a(document).scrollLeft()<h.scrollSensitivity){g=a(document).scrollLeft(a(document).scrollLeft()-h.scrollSpeed)}else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<h.scrollSensitivity){g=a(document).scrollLeft(a(document).scrollLeft()+h.scrollSpeed)}}}}g!==false&&a.ui.ddmanager&&!h.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,e)}});a.ui.plugin.add("draggable","snap",{start:function(){var d=a(this).data("draggable"),c=d.options;d.snapElements=[];a(c.snap.constructor!=String?c.snap.items||":data(draggable)":c.snap).each(function(){var e=a(this),b=e.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:b.top,left:b.left})})},drag:function(L,K){for(var J=a(this).data("draggable"),H=J.options,I=H.snapTolerance,F=K.offset.left,G=F+J.helperProportions.width,z=K.offset.top,y=z+J.helperProportions.height,E=J.snapElements.length-1;E>=0;E--){var D=J.snapElements[E].left,B=D+J.snapElements[E].width,C=J.snapElements[E].top,A=C+J.snapElements[E].height;if(D-I<F&&F<B+I&&C-I<z&&z<A+I||D-I<F&&F<B+I&&C-I<y&&y<A+I||D-I<G&&G<B+I&&C-I<z&&z<A+I||D-I<G&&G<B+I&&C-I<y&&y<A+I){if(H.snapMode!="inner"){var x=Math.abs(C-y)<=I,w=Math.abs(A-z)<=I,v=Math.abs(D-G)<=I,u=Math.abs(B-F)<=I;if(x){K.position.top=J._convertPositionTo("relative",{top:C-J.helperProportions.height,left:0}).top-J.margins.top}if(w){K.position.top=J._convertPositionTo("relative",{top:A,left:0}).top-J.margins.top}if(v){K.position.left=J._convertPositionTo("relative",{top:0,left:D-J.helperProportions.width}).left-J.margins.left}if(u){K.position.left=J._convertPositionTo("relative",{top:0,left:B}).left-J.margins.left}}var d=x||w||v||u;if(H.snapMode!="outer"){x=Math.abs(C-z)<=I;w=Math.abs(A-y)<=I;v=Math.abs(D-F)<=I;u=Math.abs(B-G)<=I;if(x){K.position.top=J._convertPositionTo("relative",{top:C,left:0}).top-J.margins.top}if(w){K.position.top=J._convertPositionTo("relative",{top:A-J.helperProportions.height,left:0}).top-J.margins.top}if(v){K.position.left=J._convertPositionTo("relative",{top:0,left:D}).left-J.margins.left}if(u){K.position.left=J._convertPositionTo("relative",{top:0,left:B-J.helperProportions.width}).left-J.margins.left}}if(!J.snapElements[E].snapping&&(x||w||v||u||d)){J.options.snap.snap&&J.options.snap.snap.call(J.element,L,a.extend(J._uiHash(),{snapItem:J.snapElements[E].item}))}J.snapElements[E].snapping=x||w||v||u||d}else{J.snapElements[E].snapping&&J.options.snap.release&&J.options.snap.release.call(J.element,L,a.extend(J._uiHash(),{snapItem:J.snapElements[E].item}));J.snapElements[E].snapping=false}}}});a.ui.plugin.add("draggable","stack",{start:function(){var d=a(this).data("draggable").options;d=a.makeArray(a(d.stack)).sort(function(e,b){return(parseInt(a(e).css("zIndex"),10)||0)-(parseInt(a(b).css("zIndex"),10)||0)});if(d.length){var c=parseInt(d[0].style.zIndex)||0;a(d).each(function(b){this.style.zIndex=c+b});this[0].style.zIndex=c+d.length}}});a.ui.plugin.add("draggable","zIndex",{start:function(d,c){d=a(c.helper);c=a(this).data("draggable").options;if(d.css("zIndex")){c._zIndex=d.css("zIndex")}d.css("zIndex",c.zIndex)},stop:function(d,c){d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(d){var b=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks){for(var a=b.length;a;){d.event.fixHooks[b[--a]]=d.event.mouseHooks}}d.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=b.length;e;){this.addEventListener(b[--e],c,false)}}else{this.onmousewheel=c}},teardown:function(){if(this.removeEventListener){for(var e=b.length;e;){this.removeEventListener(b[--e],c,false)}}else{this.onmousewheel=null}}};d.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}});function c(j){var h=j||window.event,g=[].slice.call(arguments,1),k=0,i=true,f=0,e=0;j=d.event.fix(h);j.type="mousewheel";if(h.wheelDelta){k=h.wheelDelta/120}if(h.detail){k=-h.detail/3}e=k;if(h.axis!==undefined&&h.axis===h.HORIZONTAL_AXIS){e=0;f=-1*k}if(h.wheelDeltaY!==undefined){e=h.wheelDeltaY/120}if(h.wheelDeltaX!==undefined){f=-1*h.wheelDeltaX/120}g.unshift(j,k,f,e);return(d.event.dispatch||d.event.handle).apply(this,g)}})(jQuery);var loadHighresThumbnail=function(a){a=$(a);if(a.width()>250){var b=a.prop("src");if(b.match(/-150\./)){a.prop("src",b.replace(/-150\./,"-1024."))}}};var loadHighresThumbnailListener=function(a){loadHighresThumbnail(a.target)};jQuery(function(d){var b=d(".draggrid");var c=b.find("li");var a=b.find("img");a.mouseenter(loadHighresThumbnailListener);a.mousewheel(loadHighresThumbnailListener);var h=Math.round(b.width()/c.first().width());var f=Math.round(c.length/h);var g=d(document.createElement("div"));g.css({width:"100%",height:"100%",overflow:"hidden",position:"absolute","z-index":10});g.addClass("gridbox");b.wrap(g);var e=((d(window).width()-b.width())/2);b.css({margin:0,position:"relative",left:e+"px",top:e+"px"});b.draggable();a.each(function(i,j){loadHighresThumbnail(j)});if(!b.hasClass("nozoom")){b.mousewheel(function(j,s,n,l){var p=b.width();var m=c.first().height()*f;var o=p*(l>0?1.05:0.95);var i=m*(l>0?1.05:0.95);var t=o-p;var k=i-m;var q=b.position();var r=(j.pageX-q.left)/p;var u=(j.pageY-q.top)/m;b.css({width:o,left:q.left-t*r,top:q.top-k*u})})}});