goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34415 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34415(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34419 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34419(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33286 = coll;
var G__33287 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33286,G__33287) : shadow.dom.lazy_native_coll_seq.call(null,G__33286,G__33287));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33341 = arguments.length;
switch (G__33341) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33349 = arguments.length;
switch (G__33349) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33366 = arguments.length;
switch (G__33366) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33377 = arguments.length;
switch (G__33377) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33386 = arguments.length;
switch (G__33386) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33434 = arguments.length;
switch (G__33434) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33449){if((e33449 instanceof Object)){
var e = e33449;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33449;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33463 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33464 = null;
var count__33465 = (0);
var i__33466 = (0);
while(true){
if((i__33466 < count__33465)){
var el = chunk__33464.cljs$core$IIndexed$_nth$arity$2(null,i__33466);
var handler_34447__$1 = ((function (seq__33463,chunk__33464,count__33465,i__33466,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33463,chunk__33464,count__33465,i__33466,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34447__$1);


var G__34502 = seq__33463;
var G__34503 = chunk__33464;
var G__34504 = count__33465;
var G__34505 = (i__33466 + (1));
seq__33463 = G__34502;
chunk__33464 = G__34503;
count__33465 = G__34504;
i__33466 = G__34505;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33463);
if(temp__5804__auto__){
var seq__33463__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33463__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33463__$1);
var G__34506 = cljs.core.chunk_rest(seq__33463__$1);
var G__34507 = c__5568__auto__;
var G__34508 = cljs.core.count(c__5568__auto__);
var G__34509 = (0);
seq__33463 = G__34506;
chunk__33464 = G__34507;
count__33465 = G__34508;
i__33466 = G__34509;
continue;
} else {
var el = cljs.core.first(seq__33463__$1);
var handler_34510__$1 = ((function (seq__33463,chunk__33464,count__33465,i__33466,el,seq__33463__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33463,chunk__33464,count__33465,i__33466,el,seq__33463__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34510__$1);


var G__34511 = cljs.core.next(seq__33463__$1);
var G__34512 = null;
var G__34513 = (0);
var G__34514 = (0);
seq__33463 = G__34511;
chunk__33464 = G__34512;
count__33465 = G__34513;
i__33466 = G__34514;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33479 = arguments.length;
switch (G__33479) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33492 = cljs.core.seq(events);
var chunk__33493 = null;
var count__33494 = (0);
var i__33495 = (0);
while(true){
if((i__33495 < count__33494)){
var vec__33511 = chunk__33493.cljs$core$IIndexed$_nth$arity$2(null,i__33495);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34520 = seq__33492;
var G__34521 = chunk__33493;
var G__34522 = count__33494;
var G__34523 = (i__33495 + (1));
seq__33492 = G__34520;
chunk__33493 = G__34521;
count__33494 = G__34522;
i__33495 = G__34523;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33492);
if(temp__5804__auto__){
var seq__33492__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33492__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33492__$1);
var G__34524 = cljs.core.chunk_rest(seq__33492__$1);
var G__34525 = c__5568__auto__;
var G__34526 = cljs.core.count(c__5568__auto__);
var G__34527 = (0);
seq__33492 = G__34524;
chunk__33493 = G__34525;
count__33494 = G__34526;
i__33495 = G__34527;
continue;
} else {
var vec__33525 = cljs.core.first(seq__33492__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33525,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34534 = cljs.core.next(seq__33492__$1);
var G__34535 = null;
var G__34536 = (0);
var G__34537 = (0);
seq__33492 = G__34534;
chunk__33493 = G__34535;
count__33494 = G__34536;
i__33495 = G__34537;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33561 = cljs.core.seq(styles);
var chunk__33562 = null;
var count__33563 = (0);
var i__33564 = (0);
while(true){
if((i__33564 < count__33563)){
var vec__33621 = chunk__33562.cljs$core$IIndexed$_nth$arity$2(null,i__33564);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34538 = seq__33561;
var G__34539 = chunk__33562;
var G__34540 = count__33563;
var G__34541 = (i__33564 + (1));
seq__33561 = G__34538;
chunk__33562 = G__34539;
count__33563 = G__34540;
i__33564 = G__34541;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33561);
if(temp__5804__auto__){
var seq__33561__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33561__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33561__$1);
var G__34542 = cljs.core.chunk_rest(seq__33561__$1);
var G__34543 = c__5568__auto__;
var G__34544 = cljs.core.count(c__5568__auto__);
var G__34545 = (0);
seq__33561 = G__34542;
chunk__33562 = G__34543;
count__33563 = G__34544;
i__33564 = G__34545;
continue;
} else {
var vec__33632 = cljs.core.first(seq__33561__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33632,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34552 = cljs.core.next(seq__33561__$1);
var G__34553 = null;
var G__34554 = (0);
var G__34555 = (0);
seq__33561 = G__34552;
chunk__33562 = G__34553;
count__33563 = G__34554;
i__33564 = G__34555;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33639_34558 = key;
var G__33639_34559__$1 = (((G__33639_34558 instanceof cljs.core.Keyword))?G__33639_34558.fqn:null);
switch (G__33639_34559__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34580 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_34580,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_34580,"aria-");
}
})())){
el.setAttribute(ks_34580,value);
} else {
(el[ks_34580] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33668){
var map__33670 = p__33668;
var map__33670__$1 = cljs.core.__destructure_map(map__33670);
var props = map__33670__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33670__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33671 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33671,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33671,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33671,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33676 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33676,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33676;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33679 = arguments.length;
switch (G__33679) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33699){
var vec__33701 = p__33699;
var seq__33702 = cljs.core.seq(vec__33701);
var first__33703 = cljs.core.first(seq__33702);
var seq__33702__$1 = cljs.core.next(seq__33702);
var nn = first__33703;
var first__33703__$1 = cljs.core.first(seq__33702__$1);
var seq__33702__$2 = cljs.core.next(seq__33702__$1);
var np = first__33703__$1;
var nc = seq__33702__$2;
var node = vec__33701;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33720 = nn;
var G__33721 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33720,G__33721) : create_fn.call(null,G__33720,G__33721));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33732 = nn;
var G__33733 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33732,G__33733) : create_fn.call(null,G__33732,G__33733));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33734 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33734,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33734,(1),null);
var seq__33737_34593 = cljs.core.seq(node_children);
var chunk__33738_34594 = null;
var count__33739_34595 = (0);
var i__33740_34596 = (0);
while(true){
if((i__33740_34596 < count__33739_34595)){
var child_struct_34597 = chunk__33738_34594.cljs$core$IIndexed$_nth$arity$2(null,i__33740_34596);
var children_34598 = shadow.dom.dom_node(child_struct_34597);
if(cljs.core.seq_QMARK_(children_34598)){
var seq__33776_34599 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34598));
var chunk__33778_34600 = null;
var count__33779_34601 = (0);
var i__33780_34602 = (0);
while(true){
if((i__33780_34602 < count__33779_34601)){
var child_34603 = chunk__33778_34600.cljs$core$IIndexed$_nth$arity$2(null,i__33780_34602);
if(cljs.core.truth_(child_34603)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34603);


var G__34604 = seq__33776_34599;
var G__34605 = chunk__33778_34600;
var G__34606 = count__33779_34601;
var G__34607 = (i__33780_34602 + (1));
seq__33776_34599 = G__34604;
chunk__33778_34600 = G__34605;
count__33779_34601 = G__34606;
i__33780_34602 = G__34607;
continue;
} else {
var G__34608 = seq__33776_34599;
var G__34609 = chunk__33778_34600;
var G__34610 = count__33779_34601;
var G__34611 = (i__33780_34602 + (1));
seq__33776_34599 = G__34608;
chunk__33778_34600 = G__34609;
count__33779_34601 = G__34610;
i__33780_34602 = G__34611;
continue;
}
} else {
var temp__5804__auto___34612 = cljs.core.seq(seq__33776_34599);
if(temp__5804__auto___34612){
var seq__33776_34613__$1 = temp__5804__auto___34612;
if(cljs.core.chunked_seq_QMARK_(seq__33776_34613__$1)){
var c__5568__auto___34614 = cljs.core.chunk_first(seq__33776_34613__$1);
var G__34615 = cljs.core.chunk_rest(seq__33776_34613__$1);
var G__34616 = c__5568__auto___34614;
var G__34617 = cljs.core.count(c__5568__auto___34614);
var G__34618 = (0);
seq__33776_34599 = G__34615;
chunk__33778_34600 = G__34616;
count__33779_34601 = G__34617;
i__33780_34602 = G__34618;
continue;
} else {
var child_34619 = cljs.core.first(seq__33776_34613__$1);
if(cljs.core.truth_(child_34619)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34619);


var G__34620 = cljs.core.next(seq__33776_34613__$1);
var G__34621 = null;
var G__34622 = (0);
var G__34623 = (0);
seq__33776_34599 = G__34620;
chunk__33778_34600 = G__34621;
count__33779_34601 = G__34622;
i__33780_34602 = G__34623;
continue;
} else {
var G__34624 = cljs.core.next(seq__33776_34613__$1);
var G__34625 = null;
var G__34626 = (0);
var G__34627 = (0);
seq__33776_34599 = G__34624;
chunk__33778_34600 = G__34625;
count__33779_34601 = G__34626;
i__33780_34602 = G__34627;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34598);
}


var G__34628 = seq__33737_34593;
var G__34629 = chunk__33738_34594;
var G__34630 = count__33739_34595;
var G__34631 = (i__33740_34596 + (1));
seq__33737_34593 = G__34628;
chunk__33738_34594 = G__34629;
count__33739_34595 = G__34630;
i__33740_34596 = G__34631;
continue;
} else {
var temp__5804__auto___34632 = cljs.core.seq(seq__33737_34593);
if(temp__5804__auto___34632){
var seq__33737_34633__$1 = temp__5804__auto___34632;
if(cljs.core.chunked_seq_QMARK_(seq__33737_34633__$1)){
var c__5568__auto___34634 = cljs.core.chunk_first(seq__33737_34633__$1);
var G__34635 = cljs.core.chunk_rest(seq__33737_34633__$1);
var G__34636 = c__5568__auto___34634;
var G__34637 = cljs.core.count(c__5568__auto___34634);
var G__34638 = (0);
seq__33737_34593 = G__34635;
chunk__33738_34594 = G__34636;
count__33739_34595 = G__34637;
i__33740_34596 = G__34638;
continue;
} else {
var child_struct_34639 = cljs.core.first(seq__33737_34633__$1);
var children_34640 = shadow.dom.dom_node(child_struct_34639);
if(cljs.core.seq_QMARK_(children_34640)){
var seq__33791_34641 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34640));
var chunk__33793_34642 = null;
var count__33794_34643 = (0);
var i__33795_34644 = (0);
while(true){
if((i__33795_34644 < count__33794_34643)){
var child_34645 = chunk__33793_34642.cljs$core$IIndexed$_nth$arity$2(null,i__33795_34644);
if(cljs.core.truth_(child_34645)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34645);


var G__34646 = seq__33791_34641;
var G__34647 = chunk__33793_34642;
var G__34648 = count__33794_34643;
var G__34649 = (i__33795_34644 + (1));
seq__33791_34641 = G__34646;
chunk__33793_34642 = G__34647;
count__33794_34643 = G__34648;
i__33795_34644 = G__34649;
continue;
} else {
var G__34650 = seq__33791_34641;
var G__34651 = chunk__33793_34642;
var G__34652 = count__33794_34643;
var G__34653 = (i__33795_34644 + (1));
seq__33791_34641 = G__34650;
chunk__33793_34642 = G__34651;
count__33794_34643 = G__34652;
i__33795_34644 = G__34653;
continue;
}
} else {
var temp__5804__auto___34654__$1 = cljs.core.seq(seq__33791_34641);
if(temp__5804__auto___34654__$1){
var seq__33791_34655__$1 = temp__5804__auto___34654__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33791_34655__$1)){
var c__5568__auto___34656 = cljs.core.chunk_first(seq__33791_34655__$1);
var G__34657 = cljs.core.chunk_rest(seq__33791_34655__$1);
var G__34658 = c__5568__auto___34656;
var G__34659 = cljs.core.count(c__5568__auto___34656);
var G__34660 = (0);
seq__33791_34641 = G__34657;
chunk__33793_34642 = G__34658;
count__33794_34643 = G__34659;
i__33795_34644 = G__34660;
continue;
} else {
var child_34661 = cljs.core.first(seq__33791_34655__$1);
if(cljs.core.truth_(child_34661)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34661);


var G__34662 = cljs.core.next(seq__33791_34655__$1);
var G__34663 = null;
var G__34664 = (0);
var G__34665 = (0);
seq__33791_34641 = G__34662;
chunk__33793_34642 = G__34663;
count__33794_34643 = G__34664;
i__33795_34644 = G__34665;
continue;
} else {
var G__34666 = cljs.core.next(seq__33791_34655__$1);
var G__34667 = null;
var G__34668 = (0);
var G__34669 = (0);
seq__33791_34641 = G__34666;
chunk__33793_34642 = G__34667;
count__33794_34643 = G__34668;
i__33795_34644 = G__34669;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34640);
}


var G__34670 = cljs.core.next(seq__33737_34633__$1);
var G__34671 = null;
var G__34672 = (0);
var G__34673 = (0);
seq__33737_34593 = G__34670;
chunk__33738_34594 = G__34671;
count__33739_34595 = G__34672;
i__33740_34596 = G__34673;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33823 = cljs.core.seq(node);
var chunk__33824 = null;
var count__33825 = (0);
var i__33826 = (0);
while(true){
if((i__33826 < count__33825)){
var n = chunk__33824.cljs$core$IIndexed$_nth$arity$2(null,i__33826);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34681 = seq__33823;
var G__34682 = chunk__33824;
var G__34683 = count__33825;
var G__34684 = (i__33826 + (1));
seq__33823 = G__34681;
chunk__33824 = G__34682;
count__33825 = G__34683;
i__33826 = G__34684;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33823);
if(temp__5804__auto__){
var seq__33823__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33823__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33823__$1);
var G__34688 = cljs.core.chunk_rest(seq__33823__$1);
var G__34689 = c__5568__auto__;
var G__34690 = cljs.core.count(c__5568__auto__);
var G__34691 = (0);
seq__33823 = G__34688;
chunk__33824 = G__34689;
count__33825 = G__34690;
i__33826 = G__34691;
continue;
} else {
var n = cljs.core.first(seq__33823__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34692 = cljs.core.next(seq__33823__$1);
var G__34693 = null;
var G__34694 = (0);
var G__34695 = (0);
seq__33823 = G__34692;
chunk__33824 = G__34693;
count__33825 = G__34694;
i__33826 = G__34695;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33841 = arguments.length;
switch (G__33841) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33847 = arguments.length;
switch (G__33847) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33869 = arguments.length;
switch (G__33869) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34705 = arguments.length;
var i__5770__auto___34706 = (0);
while(true){
if((i__5770__auto___34706 < len__5769__auto___34705)){
args__5775__auto__.push((arguments[i__5770__auto___34706]));

var G__34707 = (i__5770__auto___34706 + (1));
i__5770__auto___34706 = G__34707;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33896_34708 = cljs.core.seq(nodes);
var chunk__33897_34709 = null;
var count__33898_34710 = (0);
var i__33899_34711 = (0);
while(true){
if((i__33899_34711 < count__33898_34710)){
var node_34712 = chunk__33897_34709.cljs$core$IIndexed$_nth$arity$2(null,i__33899_34711);
fragment.appendChild(shadow.dom._to_dom(node_34712));


var G__34713 = seq__33896_34708;
var G__34714 = chunk__33897_34709;
var G__34715 = count__33898_34710;
var G__34716 = (i__33899_34711 + (1));
seq__33896_34708 = G__34713;
chunk__33897_34709 = G__34714;
count__33898_34710 = G__34715;
i__33899_34711 = G__34716;
continue;
} else {
var temp__5804__auto___34717 = cljs.core.seq(seq__33896_34708);
if(temp__5804__auto___34717){
var seq__33896_34718__$1 = temp__5804__auto___34717;
if(cljs.core.chunked_seq_QMARK_(seq__33896_34718__$1)){
var c__5568__auto___34719 = cljs.core.chunk_first(seq__33896_34718__$1);
var G__34720 = cljs.core.chunk_rest(seq__33896_34718__$1);
var G__34721 = c__5568__auto___34719;
var G__34722 = cljs.core.count(c__5568__auto___34719);
var G__34723 = (0);
seq__33896_34708 = G__34720;
chunk__33897_34709 = G__34721;
count__33898_34710 = G__34722;
i__33899_34711 = G__34723;
continue;
} else {
var node_34724 = cljs.core.first(seq__33896_34718__$1);
fragment.appendChild(shadow.dom._to_dom(node_34724));


var G__34725 = cljs.core.next(seq__33896_34718__$1);
var G__34726 = null;
var G__34727 = (0);
var G__34728 = (0);
seq__33896_34708 = G__34725;
chunk__33897_34709 = G__34726;
count__33898_34710 = G__34727;
i__33899_34711 = G__34728;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33885){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33885));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33915_34729 = cljs.core.seq(scripts);
var chunk__33916_34730 = null;
var count__33917_34731 = (0);
var i__33918_34732 = (0);
while(true){
if((i__33918_34732 < count__33917_34731)){
var vec__33933_34733 = chunk__33916_34730.cljs$core$IIndexed$_nth$arity$2(null,i__33918_34732);
var script_tag_34734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33933_34733,(0),null);
var script_body_34735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33933_34733,(1),null);
eval(script_body_34735);


var G__34736 = seq__33915_34729;
var G__34737 = chunk__33916_34730;
var G__34738 = count__33917_34731;
var G__34739 = (i__33918_34732 + (1));
seq__33915_34729 = G__34736;
chunk__33916_34730 = G__34737;
count__33917_34731 = G__34738;
i__33918_34732 = G__34739;
continue;
} else {
var temp__5804__auto___34740 = cljs.core.seq(seq__33915_34729);
if(temp__5804__auto___34740){
var seq__33915_34741__$1 = temp__5804__auto___34740;
if(cljs.core.chunked_seq_QMARK_(seq__33915_34741__$1)){
var c__5568__auto___34742 = cljs.core.chunk_first(seq__33915_34741__$1);
var G__34743 = cljs.core.chunk_rest(seq__33915_34741__$1);
var G__34744 = c__5568__auto___34742;
var G__34745 = cljs.core.count(c__5568__auto___34742);
var G__34746 = (0);
seq__33915_34729 = G__34743;
chunk__33916_34730 = G__34744;
count__33917_34731 = G__34745;
i__33918_34732 = G__34746;
continue;
} else {
var vec__33939_34747 = cljs.core.first(seq__33915_34741__$1);
var script_tag_34748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939_34747,(0),null);
var script_body_34749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939_34747,(1),null);
eval(script_body_34749);


var G__34750 = cljs.core.next(seq__33915_34741__$1);
var G__34751 = null;
var G__34752 = (0);
var G__34753 = (0);
seq__33915_34729 = G__34750;
chunk__33916_34730 = G__34751;
count__33917_34731 = G__34752;
i__33918_34732 = G__34753;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33944){
var vec__33945 = p__33944;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33945,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33945,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33957 = arguments.length;
switch (G__33957) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33994 = cljs.core.seq(style_keys);
var chunk__33995 = null;
var count__33996 = (0);
var i__33997 = (0);
while(true){
if((i__33997 < count__33996)){
var it = chunk__33995.cljs$core$IIndexed$_nth$arity$2(null,i__33997);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34755 = seq__33994;
var G__34756 = chunk__33995;
var G__34757 = count__33996;
var G__34758 = (i__33997 + (1));
seq__33994 = G__34755;
chunk__33995 = G__34756;
count__33996 = G__34757;
i__33997 = G__34758;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33994);
if(temp__5804__auto__){
var seq__33994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33994__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33994__$1);
var G__34762 = cljs.core.chunk_rest(seq__33994__$1);
var G__34763 = c__5568__auto__;
var G__34764 = cljs.core.count(c__5568__auto__);
var G__34765 = (0);
seq__33994 = G__34762;
chunk__33995 = G__34763;
count__33996 = G__34764;
i__33997 = G__34765;
continue;
} else {
var it = cljs.core.first(seq__33994__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34772 = cljs.core.next(seq__33994__$1);
var G__34773 = null;
var G__34774 = (0);
var G__34775 = (0);
seq__33994 = G__34772;
chunk__33995 = G__34773;
count__33996 = G__34774;
i__33997 = G__34775;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k33999,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34006 = k33999;
var G__34006__$1 = (((G__34006 instanceof cljs.core.Keyword))?G__34006.fqn:null);
switch (G__34006__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33999,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34056){
var vec__34057 = p__34056;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34057,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34057,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33998){
var self__ = this;
var G__33998__$1 = this;
return (new cljs.core.RecordIter((0),G__33998__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34000,other34001){
var self__ = this;
var this34000__$1 = this;
return (((!((other34001 == null)))) && ((((this34000__$1.constructor === other34001.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34000__$1.x,other34001.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34000__$1.y,other34001.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34000__$1.__extmap,other34001.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k33999){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34075 = k33999;
var G__34075__$1 = (((G__34075 instanceof cljs.core.Keyword))?G__34075.fqn:null);
switch (G__34075__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33999);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__33998){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34076 = cljs.core.keyword_identical_QMARK_;
var expr__34077 = k__5352__auto__;
if(cljs.core.truth_((pred__34076.cljs$core$IFn$_invoke$arity$2 ? pred__34076.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34077) : pred__34076.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34077)))){
return (new shadow.dom.Coordinate(G__33998,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34076.cljs$core$IFn$_invoke$arity$2 ? pred__34076.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34077) : pred__34076.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34077)))){
return (new shadow.dom.Coordinate(self__.x,G__33998,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__33998),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__33998){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33998,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34002){
var extmap__5385__auto__ = (function (){var G__34079 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34002,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34002)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34079);
} else {
return G__34079;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34002),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34002),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34081,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34112 = k34081;
var G__34112__$1 = (((G__34112 instanceof cljs.core.Keyword))?G__34112.fqn:null);
switch (G__34112__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34081,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34113){
var vec__34114 = p__34113;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34114,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34114,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34080){
var self__ = this;
var G__34080__$1 = this;
return (new cljs.core.RecordIter((0),G__34080__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34082,other34083){
var self__ = this;
var this34082__$1 = this;
return (((!((other34083 == null)))) && ((((this34082__$1.constructor === other34083.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34082__$1.w,other34083.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34082__$1.h,other34083.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34082__$1.__extmap,other34083.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34081){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34129 = k34081;
var G__34129__$1 = (((G__34129 instanceof cljs.core.Keyword))?G__34129.fqn:null);
switch (G__34129__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34081);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34080){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34139 = cljs.core.keyword_identical_QMARK_;
var expr__34140 = k__5352__auto__;
if(cljs.core.truth_((pred__34139.cljs$core$IFn$_invoke$arity$2 ? pred__34139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34140) : pred__34139.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34140)))){
return (new shadow.dom.Size(G__34080,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34139.cljs$core$IFn$_invoke$arity$2 ? pred__34139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34140) : pred__34139.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34140)))){
return (new shadow.dom.Size(self__.w,G__34080,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34080),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34080){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34080,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34084){
var extmap__5385__auto__ = (function (){var G__34144 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34084,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34084)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34144);
} else {
return G__34144;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34084),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34084),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__34789 = (i + (1));
var G__34790 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34789;
ret = G__34790;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34161){
var vec__34168 = p__34161;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34168,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34168,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34172 = arguments.length;
switch (G__34172) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34795 = ps;
var G__34796 = (i + (1));
el__$1 = G__34795;
i = G__34796;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34224 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34224,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34224,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34224,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34227_34802 = cljs.core.seq(props);
var chunk__34228_34803 = null;
var count__34229_34804 = (0);
var i__34230_34805 = (0);
while(true){
if((i__34230_34805 < count__34229_34804)){
var vec__34237_34810 = chunk__34228_34803.cljs$core$IIndexed$_nth$arity$2(null,i__34230_34805);
var k_34811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34237_34810,(0),null);
var v_34812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34237_34810,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_34811);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34811),v_34812);


var G__34813 = seq__34227_34802;
var G__34814 = chunk__34228_34803;
var G__34815 = count__34229_34804;
var G__34816 = (i__34230_34805 + (1));
seq__34227_34802 = G__34813;
chunk__34228_34803 = G__34814;
count__34229_34804 = G__34815;
i__34230_34805 = G__34816;
continue;
} else {
var temp__5804__auto___34817 = cljs.core.seq(seq__34227_34802);
if(temp__5804__auto___34817){
var seq__34227_34818__$1 = temp__5804__auto___34817;
if(cljs.core.chunked_seq_QMARK_(seq__34227_34818__$1)){
var c__5568__auto___34819 = cljs.core.chunk_first(seq__34227_34818__$1);
var G__34820 = cljs.core.chunk_rest(seq__34227_34818__$1);
var G__34821 = c__5568__auto___34819;
var G__34822 = cljs.core.count(c__5568__auto___34819);
var G__34823 = (0);
seq__34227_34802 = G__34820;
chunk__34228_34803 = G__34821;
count__34229_34804 = G__34822;
i__34230_34805 = G__34823;
continue;
} else {
var vec__34240_34824 = cljs.core.first(seq__34227_34818__$1);
var k_34825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34240_34824,(0),null);
var v_34826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34240_34824,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_34825);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34825),v_34826);


var G__34828 = cljs.core.next(seq__34227_34818__$1);
var G__34829 = null;
var G__34830 = (0);
var G__34831 = (0);
seq__34227_34802 = G__34828;
chunk__34228_34803 = G__34829;
count__34229_34804 = G__34830;
i__34230_34805 = G__34831;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34247 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34247,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34247,(1),null);
var seq__34250_34832 = cljs.core.seq(node_children);
var chunk__34252_34833 = null;
var count__34253_34834 = (0);
var i__34254_34835 = (0);
while(true){
if((i__34254_34835 < count__34253_34834)){
var child_struct_34836 = chunk__34252_34833.cljs$core$IIndexed$_nth$arity$2(null,i__34254_34835);
if((!((child_struct_34836 == null)))){
if(typeof child_struct_34836 === 'string'){
var text_34837 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34837),child_struct_34836].join(''));
} else {
var children_34839 = shadow.dom.svg_node(child_struct_34836);
if(cljs.core.seq_QMARK_(children_34839)){
var seq__34279_34840 = cljs.core.seq(children_34839);
var chunk__34281_34841 = null;
var count__34282_34842 = (0);
var i__34283_34843 = (0);
while(true){
if((i__34283_34843 < count__34282_34842)){
var child_34845 = chunk__34281_34841.cljs$core$IIndexed$_nth$arity$2(null,i__34283_34843);
if(cljs.core.truth_(child_34845)){
node.appendChild(child_34845);


var G__34846 = seq__34279_34840;
var G__34847 = chunk__34281_34841;
var G__34848 = count__34282_34842;
var G__34849 = (i__34283_34843 + (1));
seq__34279_34840 = G__34846;
chunk__34281_34841 = G__34847;
count__34282_34842 = G__34848;
i__34283_34843 = G__34849;
continue;
} else {
var G__34850 = seq__34279_34840;
var G__34851 = chunk__34281_34841;
var G__34852 = count__34282_34842;
var G__34853 = (i__34283_34843 + (1));
seq__34279_34840 = G__34850;
chunk__34281_34841 = G__34851;
count__34282_34842 = G__34852;
i__34283_34843 = G__34853;
continue;
}
} else {
var temp__5804__auto___34854 = cljs.core.seq(seq__34279_34840);
if(temp__5804__auto___34854){
var seq__34279_34855__$1 = temp__5804__auto___34854;
if(cljs.core.chunked_seq_QMARK_(seq__34279_34855__$1)){
var c__5568__auto___34856 = cljs.core.chunk_first(seq__34279_34855__$1);
var G__34857 = cljs.core.chunk_rest(seq__34279_34855__$1);
var G__34858 = c__5568__auto___34856;
var G__34859 = cljs.core.count(c__5568__auto___34856);
var G__34860 = (0);
seq__34279_34840 = G__34857;
chunk__34281_34841 = G__34858;
count__34282_34842 = G__34859;
i__34283_34843 = G__34860;
continue;
} else {
var child_34861 = cljs.core.first(seq__34279_34855__$1);
if(cljs.core.truth_(child_34861)){
node.appendChild(child_34861);


var G__34862 = cljs.core.next(seq__34279_34855__$1);
var G__34863 = null;
var G__34864 = (0);
var G__34865 = (0);
seq__34279_34840 = G__34862;
chunk__34281_34841 = G__34863;
count__34282_34842 = G__34864;
i__34283_34843 = G__34865;
continue;
} else {
var G__34866 = cljs.core.next(seq__34279_34855__$1);
var G__34867 = null;
var G__34868 = (0);
var G__34869 = (0);
seq__34279_34840 = G__34866;
chunk__34281_34841 = G__34867;
count__34282_34842 = G__34868;
i__34283_34843 = G__34869;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34839);
}
}


var G__34872 = seq__34250_34832;
var G__34873 = chunk__34252_34833;
var G__34874 = count__34253_34834;
var G__34875 = (i__34254_34835 + (1));
seq__34250_34832 = G__34872;
chunk__34252_34833 = G__34873;
count__34253_34834 = G__34874;
i__34254_34835 = G__34875;
continue;
} else {
var G__34876 = seq__34250_34832;
var G__34877 = chunk__34252_34833;
var G__34878 = count__34253_34834;
var G__34879 = (i__34254_34835 + (1));
seq__34250_34832 = G__34876;
chunk__34252_34833 = G__34877;
count__34253_34834 = G__34878;
i__34254_34835 = G__34879;
continue;
}
} else {
var temp__5804__auto___34880 = cljs.core.seq(seq__34250_34832);
if(temp__5804__auto___34880){
var seq__34250_34881__$1 = temp__5804__auto___34880;
if(cljs.core.chunked_seq_QMARK_(seq__34250_34881__$1)){
var c__5568__auto___34882 = cljs.core.chunk_first(seq__34250_34881__$1);
var G__34883 = cljs.core.chunk_rest(seq__34250_34881__$1);
var G__34884 = c__5568__auto___34882;
var G__34885 = cljs.core.count(c__5568__auto___34882);
var G__34887 = (0);
seq__34250_34832 = G__34883;
chunk__34252_34833 = G__34884;
count__34253_34834 = G__34885;
i__34254_34835 = G__34887;
continue;
} else {
var child_struct_34888 = cljs.core.first(seq__34250_34881__$1);
if((!((child_struct_34888 == null)))){
if(typeof child_struct_34888 === 'string'){
var text_34889 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34889),child_struct_34888].join(''));
} else {
var children_34890 = shadow.dom.svg_node(child_struct_34888);
if(cljs.core.seq_QMARK_(children_34890)){
var seq__34305_34891 = cljs.core.seq(children_34890);
var chunk__34307_34892 = null;
var count__34308_34893 = (0);
var i__34309_34894 = (0);
while(true){
if((i__34309_34894 < count__34308_34893)){
var child_34895 = chunk__34307_34892.cljs$core$IIndexed$_nth$arity$2(null,i__34309_34894);
if(cljs.core.truth_(child_34895)){
node.appendChild(child_34895);


var G__34896 = seq__34305_34891;
var G__34897 = chunk__34307_34892;
var G__34898 = count__34308_34893;
var G__34899 = (i__34309_34894 + (1));
seq__34305_34891 = G__34896;
chunk__34307_34892 = G__34897;
count__34308_34893 = G__34898;
i__34309_34894 = G__34899;
continue;
} else {
var G__34900 = seq__34305_34891;
var G__34901 = chunk__34307_34892;
var G__34902 = count__34308_34893;
var G__34903 = (i__34309_34894 + (1));
seq__34305_34891 = G__34900;
chunk__34307_34892 = G__34901;
count__34308_34893 = G__34902;
i__34309_34894 = G__34903;
continue;
}
} else {
var temp__5804__auto___34904__$1 = cljs.core.seq(seq__34305_34891);
if(temp__5804__auto___34904__$1){
var seq__34305_34905__$1 = temp__5804__auto___34904__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34305_34905__$1)){
var c__5568__auto___34906 = cljs.core.chunk_first(seq__34305_34905__$1);
var G__34907 = cljs.core.chunk_rest(seq__34305_34905__$1);
var G__34908 = c__5568__auto___34906;
var G__34909 = cljs.core.count(c__5568__auto___34906);
var G__34910 = (0);
seq__34305_34891 = G__34907;
chunk__34307_34892 = G__34908;
count__34308_34893 = G__34909;
i__34309_34894 = G__34910;
continue;
} else {
var child_34911 = cljs.core.first(seq__34305_34905__$1);
if(cljs.core.truth_(child_34911)){
node.appendChild(child_34911);


var G__34912 = cljs.core.next(seq__34305_34905__$1);
var G__34913 = null;
var G__34914 = (0);
var G__34915 = (0);
seq__34305_34891 = G__34912;
chunk__34307_34892 = G__34913;
count__34308_34893 = G__34914;
i__34309_34894 = G__34915;
continue;
} else {
var G__34917 = cljs.core.next(seq__34305_34905__$1);
var G__34918 = null;
var G__34919 = (0);
var G__34920 = (0);
seq__34305_34891 = G__34917;
chunk__34307_34892 = G__34918;
count__34308_34893 = G__34919;
i__34309_34894 = G__34920;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34890);
}
}


var G__34922 = cljs.core.next(seq__34250_34881__$1);
var G__34923 = null;
var G__34924 = (0);
var G__34925 = (0);
seq__34250_34832 = G__34922;
chunk__34252_34833 = G__34923;
count__34253_34834 = G__34924;
i__34254_34835 = G__34925;
continue;
} else {
var G__34926 = cljs.core.next(seq__34250_34881__$1);
var G__34927 = null;
var G__34928 = (0);
var G__34929 = (0);
seq__34250_34832 = G__34926;
chunk__34252_34833 = G__34927;
count__34253_34834 = G__34928;
i__34254_34835 = G__34929;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34933 = arguments.length;
var i__5770__auto___34934 = (0);
while(true){
if((i__5770__auto___34934 < len__5769__auto___34933)){
args__5775__auto__.push((arguments[i__5770__auto___34934]));

var G__34935 = (i__5770__auto___34934 + (1));
i__5770__auto___34934 = G__34935;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34350){
var G__34351 = cljs.core.first(seq34350);
var seq34350__$1 = cljs.core.next(seq34350);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34351,seq34350__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34355 = arguments.length;
switch (G__34355) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__30144__auto___34948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_34377){
var state_val_34378 = (state_34377[(1)]);
if((state_val_34378 === (1))){
var state_34377__$1 = state_34377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34377__$1,(2),once_or_cleanup);
} else {
if((state_val_34378 === (2))){
var inst_34374 = (state_34377[(2)]);
var inst_34375 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34377__$1 = (function (){var statearr_34383 = state_34377;
(statearr_34383[(7)] = inst_34374);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34377__$1,inst_34375);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29567__auto__ = null;
var shadow$dom$state_machine__29567__auto____0 = (function (){
var statearr_34391 = [null,null,null,null,null,null,null,null];
(statearr_34391[(0)] = shadow$dom$state_machine__29567__auto__);

(statearr_34391[(1)] = (1));

return statearr_34391;
});
var shadow$dom$state_machine__29567__auto____1 = (function (state_34377){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_34377);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e34392){var ex__29570__auto__ = e34392;
var statearr_34393_34953 = state_34377;
(statearr_34393_34953[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_34377[(4)]))){
var statearr_34395_34954 = state_34377;
(statearr_34395_34954[(1)] = cljs.core.first((state_34377[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34955 = state_34377;
state_34377 = G__34955;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
shadow$dom$state_machine__29567__auto__ = function(state_34377){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29567__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29567__auto____1.call(this,state_34377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29567__auto____0;
shadow$dom$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29567__auto____1;
return shadow$dom$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_34396 = f__30145__auto__();
(statearr_34396[(6)] = c__30144__auto___34948);

return statearr_34396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
