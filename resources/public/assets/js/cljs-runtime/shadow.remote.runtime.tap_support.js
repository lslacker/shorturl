goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36407,p__36408){
var map__36409 = p__36407;
var map__36409__$1 = cljs.core.__destructure_map(map__36409);
var svc = map__36409__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36409__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36409__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36409__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36410 = p__36408;
var map__36410__$1 = cljs.core.__destructure_map(map__36410);
var msg = map__36410__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36410__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36411,p__36412){
var map__36413 = p__36411;
var map__36413__$1 = cljs.core.__destructure_map(map__36413);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36413__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36414 = p__36412;
var map__36414__$1 = cljs.core.__destructure_map(map__36414);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36414__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36416,p__36417){
var map__36418 = p__36416;
var map__36418__$1 = cljs.core.__destructure_map(map__36418);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36418__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36419 = p__36417;
var map__36419__$1 = cljs.core.__destructure_map(map__36419);
var msg = map__36419__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36419__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36421,tid){
var map__36422 = p__36421;
var map__36422__$1 = cljs.core.__destructure_map(map__36422);
var svc = map__36422__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36422__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36430 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36431 = null;
var count__36432 = (0);
var i__36433 = (0);
while(true){
if((i__36433 < count__36432)){
var vec__36442 = chunk__36431.cljs$core$IIndexed$_nth$arity$2(null,i__36433);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36442,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36442,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36469 = seq__36430;
var G__36470 = chunk__36431;
var G__36471 = count__36432;
var G__36472 = (i__36433 + (1));
seq__36430 = G__36469;
chunk__36431 = G__36470;
count__36432 = G__36471;
i__36433 = G__36472;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36430);
if(temp__5804__auto__){
var seq__36430__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36430__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36430__$1);
var G__36474 = cljs.core.chunk_rest(seq__36430__$1);
var G__36475 = c__5568__auto__;
var G__36476 = cljs.core.count(c__5568__auto__);
var G__36477 = (0);
seq__36430 = G__36474;
chunk__36431 = G__36475;
count__36432 = G__36476;
i__36433 = G__36477;
continue;
} else {
var vec__36446 = cljs.core.first(seq__36430__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36446,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36446,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36478 = cljs.core.next(seq__36430__$1);
var G__36479 = null;
var G__36480 = (0);
var G__36481 = (0);
seq__36430 = G__36478;
chunk__36431 = G__36479;
count__36432 = G__36480;
i__36433 = G__36481;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36425_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36425_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36426_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36426_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36427_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36427_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36428_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36428_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36455){
var map__36461 = p__36455;
var map__36461__$1 = cljs.core.__destructure_map(map__36461);
var svc = map__36461__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36461__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36461__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
