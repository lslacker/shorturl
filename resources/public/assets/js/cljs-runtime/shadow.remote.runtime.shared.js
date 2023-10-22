goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__30847){
var map__30849 = p__30847;
var map__30849__$1 = cljs.core.__destructure_map(map__30849);
var runtime = map__30849__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30849__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31025 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31025)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__30855 = runtime;
var G__30856 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31025);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__30855,G__30856) : shadow.remote.runtime.shared.process.call(null,G__30855,G__30856));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__30859,res){
var map__30861 = p__30859;
var map__30861__$1 = cljs.core.__destructure_map(map__30861);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30861__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30861__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__30863 = res;
var G__30863__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30863,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__30863);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30863__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__30863__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__30868 = arguments.length;
switch (G__30868) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__30876,msg,handlers,timeout_after_ms){
var map__30877 = p__30876;
var map__30877__$1 = cljs.core.__destructure_map(map__30877);
var runtime = map__30877__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30877__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31030 = arguments.length;
var i__5770__auto___31031 = (0);
while(true){
if((i__5770__auto___31031 < len__5769__auto___31030)){
args__5775__auto__.push((arguments[i__5770__auto___31031]));

var G__31032 = (i__5770__auto___31031 + (1));
i__5770__auto___31031 = G__31032;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30891,ev,args){
var map__30892 = p__30891;
var map__30892__$1 = cljs.core.__destructure_map(map__30892);
var runtime = map__30892__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30892__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__30893 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30896 = null;
var count__30897 = (0);
var i__30898 = (0);
while(true){
if((i__30898 < count__30897)){
var ext = chunk__30896.cljs$core$IIndexed$_nth$arity$2(null,i__30898);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31037 = seq__30893;
var G__31038 = chunk__30896;
var G__31039 = count__30897;
var G__31040 = (i__30898 + (1));
seq__30893 = G__31037;
chunk__30896 = G__31038;
count__30897 = G__31039;
i__30898 = G__31040;
continue;
} else {
var G__31047 = seq__30893;
var G__31048 = chunk__30896;
var G__31049 = count__30897;
var G__31050 = (i__30898 + (1));
seq__30893 = G__31047;
chunk__30896 = G__31048;
count__30897 = G__31049;
i__30898 = G__31050;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30893);
if(temp__5804__auto__){
var seq__30893__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30893__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30893__$1);
var G__31058 = cljs.core.chunk_rest(seq__30893__$1);
var G__31059 = c__5568__auto__;
var G__31060 = cljs.core.count(c__5568__auto__);
var G__31061 = (0);
seq__30893 = G__31058;
chunk__30896 = G__31059;
count__30897 = G__31060;
i__30898 = G__31061;
continue;
} else {
var ext = cljs.core.first(seq__30893__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31068 = cljs.core.next(seq__30893__$1);
var G__31070 = null;
var G__31071 = (0);
var G__31072 = (0);
seq__30893 = G__31068;
chunk__30896 = G__31070;
count__30897 = G__31071;
i__30898 = G__31072;
continue;
} else {
var G__31074 = cljs.core.next(seq__30893__$1);
var G__31075 = null;
var G__31076 = (0);
var G__31077 = (0);
seq__30893 = G__31074;
chunk__30896 = G__31075;
count__30897 = G__31076;
i__30898 = G__31077;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq30881){
var G__30882 = cljs.core.first(seq30881);
var seq30881__$1 = cljs.core.next(seq30881);
var G__30883 = cljs.core.first(seq30881__$1);
var seq30881__$2 = cljs.core.next(seq30881__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30882,G__30883,seq30881__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__30920,p__30921){
var map__30923 = p__30920;
var map__30923__$1 = cljs.core.__destructure_map(map__30923);
var runtime = map__30923__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30923__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30926 = p__30921;
var map__30926__$1 = cljs.core.__destructure_map(map__30926);
var msg = map__30926__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30926__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__30934 = cljs.core.deref(state_ref);
var map__30934__$1 = cljs.core.__destructure_map(map__30934);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30934__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30934__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__30937,msg){
var map__30938 = p__30937;
var map__30938__$1 = cljs.core.__destructure_map(map__30938);
var runtime = map__30938__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__30954,key,p__30955){
var map__30956 = p__30954;
var map__30956__$1 = cljs.core.__destructure_map(map__30956);
var state = map__30956__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30956__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__30957 = p__30955;
var map__30957__$1 = cljs.core.__destructure_map(map__30957);
var spec = map__30957__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30957__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__30959,key,spec){
var map__30960 = p__30959;
var map__30960__$1 = cljs.core.__destructure_map(map__30960);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30960__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__30963_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__30963_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__30964_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__30964_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__30965_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__30965_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__30966_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__30966_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__30967_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__30967_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__30976,key){
var map__30979 = p__30976;
var map__30979__$1 = cljs.core.__destructure_map(map__30979);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30979__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__30991,msg){
var map__30993 = p__30991;
var map__30993__$1 = cljs.core.__destructure_map(map__30993);
var runtime = map__30993__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30993__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__30996,p__30997){
var map__30998 = p__30996;
var map__30998__$1 = cljs.core.__destructure_map(map__30998);
var runtime = map__30998__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30998__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30999 = p__30997;
var map__30999__$1 = cljs.core.__destructure_map(map__30999);
var msg = map__30999__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30999__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30999__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31007 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31010 = null;
var count__31011 = (0);
var i__31012 = (0);
while(true){
if((i__31012 < count__31011)){
var map__31017 = chunk__31010.cljs$core$IIndexed$_nth$arity$2(null,i__31012);
var map__31017__$1 = cljs.core.__destructure_map(map__31017);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31017__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31212 = seq__31007;
var G__31213 = chunk__31010;
var G__31214 = count__31011;
var G__31215 = (i__31012 + (1));
seq__31007 = G__31212;
chunk__31010 = G__31213;
count__31011 = G__31214;
i__31012 = G__31215;
continue;
} else {
var G__31216 = seq__31007;
var G__31217 = chunk__31010;
var G__31218 = count__31011;
var G__31219 = (i__31012 + (1));
seq__31007 = G__31216;
chunk__31010 = G__31217;
count__31011 = G__31218;
i__31012 = G__31219;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31007);
if(temp__5804__auto__){
var seq__31007__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31007__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31007__$1);
var G__31220 = cljs.core.chunk_rest(seq__31007__$1);
var G__31221 = c__5568__auto__;
var G__31222 = cljs.core.count(c__5568__auto__);
var G__31223 = (0);
seq__31007 = G__31220;
chunk__31010 = G__31221;
count__31011 = G__31222;
i__31012 = G__31223;
continue;
} else {
var map__31018 = cljs.core.first(seq__31007__$1);
var map__31018__$1 = cljs.core.__destructure_map(map__31018);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31018__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31224 = cljs.core.next(seq__31007__$1);
var G__31225 = null;
var G__31226 = (0);
var G__31227 = (0);
seq__31007 = G__31224;
chunk__31010 = G__31225;
count__31011 = G__31226;
i__31012 = G__31227;
continue;
} else {
var G__31228 = cljs.core.next(seq__31007__$1);
var G__31229 = null;
var G__31230 = (0);
var G__31231 = (0);
seq__31007 = G__31228;
chunk__31010 = G__31229;
count__31011 = G__31230;
i__31012 = G__31231;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
