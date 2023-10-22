goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37170 = arguments.length;
var i__5770__auto___37171 = (0);
while(true){
if((i__5770__auto___37171 < len__5769__auto___37170)){
args__5775__auto__.push((arguments[i__5770__auto___37171]));

var G__37172 = (i__5770__auto___37171 + (1));
i__5770__auto___37171 = G__37172;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36892){
var G__36893 = cljs.core.first(seq36892);
var seq36892__$1 = cljs.core.next(seq36892);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36893,seq36892__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36894 = cljs.core.seq(sources);
var chunk__36895 = null;
var count__36896 = (0);
var i__36897 = (0);
while(true){
if((i__36897 < count__36896)){
var map__36902 = chunk__36895.cljs$core$IIndexed$_nth$arity$2(null,i__36897);
var map__36902__$1 = cljs.core.__destructure_map(map__36902);
var src = map__36902__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36902__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36902__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36902__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36902__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36903){var e_37173 = e36903;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37173);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37173.message)].join('')));
}

var G__37174 = seq__36894;
var G__37175 = chunk__36895;
var G__37176 = count__36896;
var G__37177 = (i__36897 + (1));
seq__36894 = G__37174;
chunk__36895 = G__37175;
count__36896 = G__37176;
i__36897 = G__37177;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36894);
if(temp__5804__auto__){
var seq__36894__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36894__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36894__$1);
var G__37178 = cljs.core.chunk_rest(seq__36894__$1);
var G__37179 = c__5568__auto__;
var G__37180 = cljs.core.count(c__5568__auto__);
var G__37181 = (0);
seq__36894 = G__37178;
chunk__36895 = G__37179;
count__36896 = G__37180;
i__36897 = G__37181;
continue;
} else {
var map__36904 = cljs.core.first(seq__36894__$1);
var map__36904__$1 = cljs.core.__destructure_map(map__36904);
var src = map__36904__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36904__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36904__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36904__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36905){var e_37182 = e36905;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37182);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37182.message)].join('')));
}

var G__37183 = cljs.core.next(seq__36894__$1);
var G__37184 = null;
var G__37185 = (0);
var G__37186 = (0);
seq__36894 = G__37183;
chunk__36895 = G__37184;
count__36896 = G__37185;
i__36897 = G__37186;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36906 = cljs.core.seq(js_requires);
var chunk__36907 = null;
var count__36908 = (0);
var i__36909 = (0);
while(true){
if((i__36909 < count__36908)){
var js_ns = chunk__36907.cljs$core$IIndexed$_nth$arity$2(null,i__36909);
var require_str_37187 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37187);


var G__37188 = seq__36906;
var G__37189 = chunk__36907;
var G__37190 = count__36908;
var G__37191 = (i__36909 + (1));
seq__36906 = G__37188;
chunk__36907 = G__37189;
count__36908 = G__37190;
i__36909 = G__37191;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36906);
if(temp__5804__auto__){
var seq__36906__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36906__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36906__$1);
var G__37192 = cljs.core.chunk_rest(seq__36906__$1);
var G__37193 = c__5568__auto__;
var G__37194 = cljs.core.count(c__5568__auto__);
var G__37195 = (0);
seq__36906 = G__37192;
chunk__36907 = G__37193;
count__36908 = G__37194;
i__36909 = G__37195;
continue;
} else {
var js_ns = cljs.core.first(seq__36906__$1);
var require_str_37196 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37196);


var G__37197 = cljs.core.next(seq__36906__$1);
var G__37198 = null;
var G__37199 = (0);
var G__37200 = (0);
seq__36906 = G__37197;
chunk__36907 = G__37198;
count__36908 = G__37199;
i__36909 = G__37200;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36911){
var map__36912 = p__36911;
var map__36912__$1 = cljs.core.__destructure_map(map__36912);
var msg = map__36912__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36912__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36912__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36913(s__36914){
return (new cljs.core.LazySeq(null,(function (){
var s__36914__$1 = s__36914;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36914__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__36919 = cljs.core.first(xs__6360__auto__);
var map__36919__$1 = cljs.core.__destructure_map(map__36919);
var src = map__36919__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36919__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36919__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__36914__$1,map__36919,map__36919__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36912,map__36912__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36913_$_iter__36915(s__36916){
return (new cljs.core.LazySeq(null,((function (s__36914__$1,map__36919,map__36919__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36912,map__36912__$1,msg,info,reload_info){
return (function (){
var s__36916__$1 = s__36916;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__36916__$1);
if(temp__5804__auto____$1){
var s__36916__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36916__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36916__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36918 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36917 = (0);
while(true){
if((i__36917 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__36917);
cljs.core.chunk_append(b__36918,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37201 = (i__36917 + (1));
i__36917 = G__37201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36918),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36913_$_iter__36915(cljs.core.chunk_rest(s__36916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36918),null);
}
} else {
var warning = cljs.core.first(s__36916__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36913_$_iter__36915(cljs.core.rest(s__36916__$2)));
}
} else {
return null;
}
break;
}
});})(s__36914__$1,map__36919,map__36919__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36912,map__36912__$1,msg,info,reload_info))
,null,null));
});})(s__36914__$1,map__36919,map__36919__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36912,map__36912__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36913(cljs.core.rest(s__36914__$1)));
} else {
var G__37202 = cljs.core.rest(s__36914__$1);
s__36914__$1 = G__37202;
continue;
}
} else {
var G__37203 = cljs.core.rest(s__36914__$1);
s__36914__$1 = G__37203;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36920_37204 = cljs.core.seq(warnings);
var chunk__36921_37205 = null;
var count__36922_37206 = (0);
var i__36923_37207 = (0);
while(true){
if((i__36923_37207 < count__36922_37206)){
var map__36926_37208 = chunk__36921_37205.cljs$core$IIndexed$_nth$arity$2(null,i__36923_37207);
var map__36926_37209__$1 = cljs.core.__destructure_map(map__36926_37208);
var w_37210 = map__36926_37209__$1;
var msg_37211__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926_37209__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926_37209__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926_37209__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926_37209__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37214)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37212),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37213),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37211__$1)].join(''));


var G__37215 = seq__36920_37204;
var G__37216 = chunk__36921_37205;
var G__37217 = count__36922_37206;
var G__37218 = (i__36923_37207 + (1));
seq__36920_37204 = G__37215;
chunk__36921_37205 = G__37216;
count__36922_37206 = G__37217;
i__36923_37207 = G__37218;
continue;
} else {
var temp__5804__auto___37219 = cljs.core.seq(seq__36920_37204);
if(temp__5804__auto___37219){
var seq__36920_37220__$1 = temp__5804__auto___37219;
if(cljs.core.chunked_seq_QMARK_(seq__36920_37220__$1)){
var c__5568__auto___37221 = cljs.core.chunk_first(seq__36920_37220__$1);
var G__37222 = cljs.core.chunk_rest(seq__36920_37220__$1);
var G__37223 = c__5568__auto___37221;
var G__37224 = cljs.core.count(c__5568__auto___37221);
var G__37225 = (0);
seq__36920_37204 = G__37222;
chunk__36921_37205 = G__37223;
count__36922_37206 = G__37224;
i__36923_37207 = G__37225;
continue;
} else {
var map__36927_37226 = cljs.core.first(seq__36920_37220__$1);
var map__36927_37227__$1 = cljs.core.__destructure_map(map__36927_37226);
var w_37228 = map__36927_37227__$1;
var msg_37229__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36927_37227__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36927_37227__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36927_37227__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36927_37227__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37232)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37230),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37231),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37229__$1)].join(''));


var G__37233 = cljs.core.next(seq__36920_37220__$1);
var G__37234 = null;
var G__37235 = (0);
var G__37236 = (0);
seq__36920_37204 = G__37233;
chunk__36921_37205 = G__37234;
count__36922_37206 = G__37235;
i__36923_37207 = G__37236;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36910_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36910_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36928){
var map__36929 = p__36928;
var map__36929__$1 = cljs.core.__destructure_map(map__36929);
var msg = map__36929__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36929__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36929__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36930 = cljs.core.seq(updates);
var chunk__36932 = null;
var count__36933 = (0);
var i__36934 = (0);
while(true){
if((i__36934 < count__36933)){
var path = chunk__36932.cljs$core$IIndexed$_nth$arity$2(null,i__36934);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37044_37237 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37048_37238 = null;
var count__37049_37239 = (0);
var i__37050_37240 = (0);
while(true){
if((i__37050_37240 < count__37049_37239)){
var node_37241 = chunk__37048_37238.cljs$core$IIndexed$_nth$arity$2(null,i__37050_37240);
if(cljs.core.not(node_37241.shadow$old)){
var path_match_37242 = shadow.cljs.devtools.client.browser.match_paths(node_37241.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37242)){
var new_link_37243 = (function (){var G__37076 = node_37241.cloneNode(true);
G__37076.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37242),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37076;
})();
(node_37241.shadow$old = true);

(new_link_37243.onload = ((function (seq__37044_37237,chunk__37048_37238,count__37049_37239,i__37050_37240,seq__36930,chunk__36932,count__36933,i__36934,new_link_37243,path_match_37242,node_37241,path,map__36929,map__36929__$1,msg,updates,reload_info){
return (function (e){
var seq__37077_37244 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37079_37245 = null;
var count__37080_37246 = (0);
var i__37081_37247 = (0);
while(true){
if((i__37081_37247 < count__37080_37246)){
var map__37085_37248 = chunk__37079_37245.cljs$core$IIndexed$_nth$arity$2(null,i__37081_37247);
var map__37085_37249__$1 = cljs.core.__destructure_map(map__37085_37248);
var task_37250 = map__37085_37249__$1;
var fn_str_37251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37085_37249__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37085_37249__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37253 = goog.getObjectByName(fn_str_37251,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37252)].join(''));

(fn_obj_37253.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37253.cljs$core$IFn$_invoke$arity$2(path,new_link_37243) : fn_obj_37253.call(null,path,new_link_37243));


var G__37254 = seq__37077_37244;
var G__37255 = chunk__37079_37245;
var G__37256 = count__37080_37246;
var G__37257 = (i__37081_37247 + (1));
seq__37077_37244 = G__37254;
chunk__37079_37245 = G__37255;
count__37080_37246 = G__37256;
i__37081_37247 = G__37257;
continue;
} else {
var temp__5804__auto___37258 = cljs.core.seq(seq__37077_37244);
if(temp__5804__auto___37258){
var seq__37077_37259__$1 = temp__5804__auto___37258;
if(cljs.core.chunked_seq_QMARK_(seq__37077_37259__$1)){
var c__5568__auto___37260 = cljs.core.chunk_first(seq__37077_37259__$1);
var G__37261 = cljs.core.chunk_rest(seq__37077_37259__$1);
var G__37262 = c__5568__auto___37260;
var G__37263 = cljs.core.count(c__5568__auto___37260);
var G__37264 = (0);
seq__37077_37244 = G__37261;
chunk__37079_37245 = G__37262;
count__37080_37246 = G__37263;
i__37081_37247 = G__37264;
continue;
} else {
var map__37086_37265 = cljs.core.first(seq__37077_37259__$1);
var map__37086_37266__$1 = cljs.core.__destructure_map(map__37086_37265);
var task_37267 = map__37086_37266__$1;
var fn_str_37268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37086_37266__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37086_37266__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37270 = goog.getObjectByName(fn_str_37268,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37269)].join(''));

(fn_obj_37270.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37270.cljs$core$IFn$_invoke$arity$2(path,new_link_37243) : fn_obj_37270.call(null,path,new_link_37243));


var G__37271 = cljs.core.next(seq__37077_37259__$1);
var G__37272 = null;
var G__37273 = (0);
var G__37274 = (0);
seq__37077_37244 = G__37271;
chunk__37079_37245 = G__37272;
count__37080_37246 = G__37273;
i__37081_37247 = G__37274;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37241);
});})(seq__37044_37237,chunk__37048_37238,count__37049_37239,i__37050_37240,seq__36930,chunk__36932,count__36933,i__36934,new_link_37243,path_match_37242,node_37241,path,map__36929,map__36929__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37242], 0));

goog.dom.insertSiblingAfter(new_link_37243,node_37241);


var G__37275 = seq__37044_37237;
var G__37276 = chunk__37048_37238;
var G__37277 = count__37049_37239;
var G__37278 = (i__37050_37240 + (1));
seq__37044_37237 = G__37275;
chunk__37048_37238 = G__37276;
count__37049_37239 = G__37277;
i__37050_37240 = G__37278;
continue;
} else {
var G__37279 = seq__37044_37237;
var G__37280 = chunk__37048_37238;
var G__37281 = count__37049_37239;
var G__37282 = (i__37050_37240 + (1));
seq__37044_37237 = G__37279;
chunk__37048_37238 = G__37280;
count__37049_37239 = G__37281;
i__37050_37240 = G__37282;
continue;
}
} else {
var G__37283 = seq__37044_37237;
var G__37284 = chunk__37048_37238;
var G__37285 = count__37049_37239;
var G__37286 = (i__37050_37240 + (1));
seq__37044_37237 = G__37283;
chunk__37048_37238 = G__37284;
count__37049_37239 = G__37285;
i__37050_37240 = G__37286;
continue;
}
} else {
var temp__5804__auto___37287 = cljs.core.seq(seq__37044_37237);
if(temp__5804__auto___37287){
var seq__37044_37288__$1 = temp__5804__auto___37287;
if(cljs.core.chunked_seq_QMARK_(seq__37044_37288__$1)){
var c__5568__auto___37289 = cljs.core.chunk_first(seq__37044_37288__$1);
var G__37290 = cljs.core.chunk_rest(seq__37044_37288__$1);
var G__37291 = c__5568__auto___37289;
var G__37292 = cljs.core.count(c__5568__auto___37289);
var G__37293 = (0);
seq__37044_37237 = G__37290;
chunk__37048_37238 = G__37291;
count__37049_37239 = G__37292;
i__37050_37240 = G__37293;
continue;
} else {
var node_37294 = cljs.core.first(seq__37044_37288__$1);
if(cljs.core.not(node_37294.shadow$old)){
var path_match_37295 = shadow.cljs.devtools.client.browser.match_paths(node_37294.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37295)){
var new_link_37296 = (function (){var G__37087 = node_37294.cloneNode(true);
G__37087.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37295),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37087;
})();
(node_37294.shadow$old = true);

(new_link_37296.onload = ((function (seq__37044_37237,chunk__37048_37238,count__37049_37239,i__37050_37240,seq__36930,chunk__36932,count__36933,i__36934,new_link_37296,path_match_37295,node_37294,seq__37044_37288__$1,temp__5804__auto___37287,path,map__36929,map__36929__$1,msg,updates,reload_info){
return (function (e){
var seq__37088_37297 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37090_37298 = null;
var count__37091_37299 = (0);
var i__37092_37300 = (0);
while(true){
if((i__37092_37300 < count__37091_37299)){
var map__37096_37301 = chunk__37090_37298.cljs$core$IIndexed$_nth$arity$2(null,i__37092_37300);
var map__37096_37302__$1 = cljs.core.__destructure_map(map__37096_37301);
var task_37303 = map__37096_37302__$1;
var fn_str_37304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37096_37302__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37096_37302__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37306 = goog.getObjectByName(fn_str_37304,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37305)].join(''));

(fn_obj_37306.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37306.cljs$core$IFn$_invoke$arity$2(path,new_link_37296) : fn_obj_37306.call(null,path,new_link_37296));


var G__37307 = seq__37088_37297;
var G__37308 = chunk__37090_37298;
var G__37309 = count__37091_37299;
var G__37310 = (i__37092_37300 + (1));
seq__37088_37297 = G__37307;
chunk__37090_37298 = G__37308;
count__37091_37299 = G__37309;
i__37092_37300 = G__37310;
continue;
} else {
var temp__5804__auto___37311__$1 = cljs.core.seq(seq__37088_37297);
if(temp__5804__auto___37311__$1){
var seq__37088_37312__$1 = temp__5804__auto___37311__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37088_37312__$1)){
var c__5568__auto___37313 = cljs.core.chunk_first(seq__37088_37312__$1);
var G__37314 = cljs.core.chunk_rest(seq__37088_37312__$1);
var G__37315 = c__5568__auto___37313;
var G__37316 = cljs.core.count(c__5568__auto___37313);
var G__37317 = (0);
seq__37088_37297 = G__37314;
chunk__37090_37298 = G__37315;
count__37091_37299 = G__37316;
i__37092_37300 = G__37317;
continue;
} else {
var map__37097_37318 = cljs.core.first(seq__37088_37312__$1);
var map__37097_37319__$1 = cljs.core.__destructure_map(map__37097_37318);
var task_37320 = map__37097_37319__$1;
var fn_str_37321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37097_37319__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37097_37319__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37323 = goog.getObjectByName(fn_str_37321,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37322)].join(''));

(fn_obj_37323.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37323.cljs$core$IFn$_invoke$arity$2(path,new_link_37296) : fn_obj_37323.call(null,path,new_link_37296));


var G__37324 = cljs.core.next(seq__37088_37312__$1);
var G__37325 = null;
var G__37326 = (0);
var G__37327 = (0);
seq__37088_37297 = G__37324;
chunk__37090_37298 = G__37325;
count__37091_37299 = G__37326;
i__37092_37300 = G__37327;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37294);
});})(seq__37044_37237,chunk__37048_37238,count__37049_37239,i__37050_37240,seq__36930,chunk__36932,count__36933,i__36934,new_link_37296,path_match_37295,node_37294,seq__37044_37288__$1,temp__5804__auto___37287,path,map__36929,map__36929__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37295], 0));

goog.dom.insertSiblingAfter(new_link_37296,node_37294);


var G__37328 = cljs.core.next(seq__37044_37288__$1);
var G__37329 = null;
var G__37330 = (0);
var G__37331 = (0);
seq__37044_37237 = G__37328;
chunk__37048_37238 = G__37329;
count__37049_37239 = G__37330;
i__37050_37240 = G__37331;
continue;
} else {
var G__37332 = cljs.core.next(seq__37044_37288__$1);
var G__37333 = null;
var G__37334 = (0);
var G__37335 = (0);
seq__37044_37237 = G__37332;
chunk__37048_37238 = G__37333;
count__37049_37239 = G__37334;
i__37050_37240 = G__37335;
continue;
}
} else {
var G__37336 = cljs.core.next(seq__37044_37288__$1);
var G__37337 = null;
var G__37338 = (0);
var G__37339 = (0);
seq__37044_37237 = G__37336;
chunk__37048_37238 = G__37337;
count__37049_37239 = G__37338;
i__37050_37240 = G__37339;
continue;
}
}
} else {
}
}
break;
}


var G__37340 = seq__36930;
var G__37341 = chunk__36932;
var G__37342 = count__36933;
var G__37343 = (i__36934 + (1));
seq__36930 = G__37340;
chunk__36932 = G__37341;
count__36933 = G__37342;
i__36934 = G__37343;
continue;
} else {
var G__37344 = seq__36930;
var G__37345 = chunk__36932;
var G__37346 = count__36933;
var G__37347 = (i__36934 + (1));
seq__36930 = G__37344;
chunk__36932 = G__37345;
count__36933 = G__37346;
i__36934 = G__37347;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36930);
if(temp__5804__auto__){
var seq__36930__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36930__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36930__$1);
var G__37348 = cljs.core.chunk_rest(seq__36930__$1);
var G__37349 = c__5568__auto__;
var G__37350 = cljs.core.count(c__5568__auto__);
var G__37351 = (0);
seq__36930 = G__37348;
chunk__36932 = G__37349;
count__36933 = G__37350;
i__36934 = G__37351;
continue;
} else {
var path = cljs.core.first(seq__36930__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37098_37352 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37102_37353 = null;
var count__37103_37354 = (0);
var i__37104_37355 = (0);
while(true){
if((i__37104_37355 < count__37103_37354)){
var node_37356 = chunk__37102_37353.cljs$core$IIndexed$_nth$arity$2(null,i__37104_37355);
if(cljs.core.not(node_37356.shadow$old)){
var path_match_37357 = shadow.cljs.devtools.client.browser.match_paths(node_37356.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37357)){
var new_link_37358 = (function (){var G__37130 = node_37356.cloneNode(true);
G__37130.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37357),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37130;
})();
(node_37356.shadow$old = true);

(new_link_37358.onload = ((function (seq__37098_37352,chunk__37102_37353,count__37103_37354,i__37104_37355,seq__36930,chunk__36932,count__36933,i__36934,new_link_37358,path_match_37357,node_37356,path,seq__36930__$1,temp__5804__auto__,map__36929,map__36929__$1,msg,updates,reload_info){
return (function (e){
var seq__37131_37359 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37133_37360 = null;
var count__37134_37361 = (0);
var i__37135_37362 = (0);
while(true){
if((i__37135_37362 < count__37134_37361)){
var map__37139_37363 = chunk__37133_37360.cljs$core$IIndexed$_nth$arity$2(null,i__37135_37362);
var map__37139_37364__$1 = cljs.core.__destructure_map(map__37139_37363);
var task_37365 = map__37139_37364__$1;
var fn_str_37366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37139_37364__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37139_37364__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37368 = goog.getObjectByName(fn_str_37366,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37367)].join(''));

(fn_obj_37368.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37368.cljs$core$IFn$_invoke$arity$2(path,new_link_37358) : fn_obj_37368.call(null,path,new_link_37358));


var G__37369 = seq__37131_37359;
var G__37370 = chunk__37133_37360;
var G__37371 = count__37134_37361;
var G__37372 = (i__37135_37362 + (1));
seq__37131_37359 = G__37369;
chunk__37133_37360 = G__37370;
count__37134_37361 = G__37371;
i__37135_37362 = G__37372;
continue;
} else {
var temp__5804__auto___37373__$1 = cljs.core.seq(seq__37131_37359);
if(temp__5804__auto___37373__$1){
var seq__37131_37374__$1 = temp__5804__auto___37373__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37131_37374__$1)){
var c__5568__auto___37375 = cljs.core.chunk_first(seq__37131_37374__$1);
var G__37376 = cljs.core.chunk_rest(seq__37131_37374__$1);
var G__37377 = c__5568__auto___37375;
var G__37378 = cljs.core.count(c__5568__auto___37375);
var G__37379 = (0);
seq__37131_37359 = G__37376;
chunk__37133_37360 = G__37377;
count__37134_37361 = G__37378;
i__37135_37362 = G__37379;
continue;
} else {
var map__37140_37380 = cljs.core.first(seq__37131_37374__$1);
var map__37140_37381__$1 = cljs.core.__destructure_map(map__37140_37380);
var task_37382 = map__37140_37381__$1;
var fn_str_37383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37140_37381__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37140_37381__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37385 = goog.getObjectByName(fn_str_37383,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37384)].join(''));

(fn_obj_37385.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37385.cljs$core$IFn$_invoke$arity$2(path,new_link_37358) : fn_obj_37385.call(null,path,new_link_37358));


var G__37386 = cljs.core.next(seq__37131_37374__$1);
var G__37387 = null;
var G__37388 = (0);
var G__37389 = (0);
seq__37131_37359 = G__37386;
chunk__37133_37360 = G__37387;
count__37134_37361 = G__37388;
i__37135_37362 = G__37389;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37356);
});})(seq__37098_37352,chunk__37102_37353,count__37103_37354,i__37104_37355,seq__36930,chunk__36932,count__36933,i__36934,new_link_37358,path_match_37357,node_37356,path,seq__36930__$1,temp__5804__auto__,map__36929,map__36929__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37357], 0));

goog.dom.insertSiblingAfter(new_link_37358,node_37356);


var G__37390 = seq__37098_37352;
var G__37391 = chunk__37102_37353;
var G__37392 = count__37103_37354;
var G__37393 = (i__37104_37355 + (1));
seq__37098_37352 = G__37390;
chunk__37102_37353 = G__37391;
count__37103_37354 = G__37392;
i__37104_37355 = G__37393;
continue;
} else {
var G__37394 = seq__37098_37352;
var G__37395 = chunk__37102_37353;
var G__37396 = count__37103_37354;
var G__37397 = (i__37104_37355 + (1));
seq__37098_37352 = G__37394;
chunk__37102_37353 = G__37395;
count__37103_37354 = G__37396;
i__37104_37355 = G__37397;
continue;
}
} else {
var G__37398 = seq__37098_37352;
var G__37399 = chunk__37102_37353;
var G__37400 = count__37103_37354;
var G__37401 = (i__37104_37355 + (1));
seq__37098_37352 = G__37398;
chunk__37102_37353 = G__37399;
count__37103_37354 = G__37400;
i__37104_37355 = G__37401;
continue;
}
} else {
var temp__5804__auto___37402__$1 = cljs.core.seq(seq__37098_37352);
if(temp__5804__auto___37402__$1){
var seq__37098_37403__$1 = temp__5804__auto___37402__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37098_37403__$1)){
var c__5568__auto___37404 = cljs.core.chunk_first(seq__37098_37403__$1);
var G__37405 = cljs.core.chunk_rest(seq__37098_37403__$1);
var G__37406 = c__5568__auto___37404;
var G__37407 = cljs.core.count(c__5568__auto___37404);
var G__37408 = (0);
seq__37098_37352 = G__37405;
chunk__37102_37353 = G__37406;
count__37103_37354 = G__37407;
i__37104_37355 = G__37408;
continue;
} else {
var node_37409 = cljs.core.first(seq__37098_37403__$1);
if(cljs.core.not(node_37409.shadow$old)){
var path_match_37410 = shadow.cljs.devtools.client.browser.match_paths(node_37409.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37410)){
var new_link_37411 = (function (){var G__37141 = node_37409.cloneNode(true);
G__37141.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37410),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37141;
})();
(node_37409.shadow$old = true);

(new_link_37411.onload = ((function (seq__37098_37352,chunk__37102_37353,count__37103_37354,i__37104_37355,seq__36930,chunk__36932,count__36933,i__36934,new_link_37411,path_match_37410,node_37409,seq__37098_37403__$1,temp__5804__auto___37402__$1,path,seq__36930__$1,temp__5804__auto__,map__36929,map__36929__$1,msg,updates,reload_info){
return (function (e){
var seq__37142_37412 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37144_37413 = null;
var count__37145_37414 = (0);
var i__37146_37415 = (0);
while(true){
if((i__37146_37415 < count__37145_37414)){
var map__37150_37416 = chunk__37144_37413.cljs$core$IIndexed$_nth$arity$2(null,i__37146_37415);
var map__37150_37417__$1 = cljs.core.__destructure_map(map__37150_37416);
var task_37418 = map__37150_37417__$1;
var fn_str_37419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37150_37417__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37150_37417__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37421 = goog.getObjectByName(fn_str_37419,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37420)].join(''));

(fn_obj_37421.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37421.cljs$core$IFn$_invoke$arity$2(path,new_link_37411) : fn_obj_37421.call(null,path,new_link_37411));


var G__37422 = seq__37142_37412;
var G__37423 = chunk__37144_37413;
var G__37424 = count__37145_37414;
var G__37425 = (i__37146_37415 + (1));
seq__37142_37412 = G__37422;
chunk__37144_37413 = G__37423;
count__37145_37414 = G__37424;
i__37146_37415 = G__37425;
continue;
} else {
var temp__5804__auto___37426__$2 = cljs.core.seq(seq__37142_37412);
if(temp__5804__auto___37426__$2){
var seq__37142_37427__$1 = temp__5804__auto___37426__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37142_37427__$1)){
var c__5568__auto___37428 = cljs.core.chunk_first(seq__37142_37427__$1);
var G__37429 = cljs.core.chunk_rest(seq__37142_37427__$1);
var G__37430 = c__5568__auto___37428;
var G__37431 = cljs.core.count(c__5568__auto___37428);
var G__37432 = (0);
seq__37142_37412 = G__37429;
chunk__37144_37413 = G__37430;
count__37145_37414 = G__37431;
i__37146_37415 = G__37432;
continue;
} else {
var map__37151_37433 = cljs.core.first(seq__37142_37427__$1);
var map__37151_37434__$1 = cljs.core.__destructure_map(map__37151_37433);
var task_37435 = map__37151_37434__$1;
var fn_str_37436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37151_37434__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37151_37434__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37438 = goog.getObjectByName(fn_str_37436,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37437)].join(''));

(fn_obj_37438.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37438.cljs$core$IFn$_invoke$arity$2(path,new_link_37411) : fn_obj_37438.call(null,path,new_link_37411));


var G__37439 = cljs.core.next(seq__37142_37427__$1);
var G__37440 = null;
var G__37441 = (0);
var G__37442 = (0);
seq__37142_37412 = G__37439;
chunk__37144_37413 = G__37440;
count__37145_37414 = G__37441;
i__37146_37415 = G__37442;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37409);
});})(seq__37098_37352,chunk__37102_37353,count__37103_37354,i__37104_37355,seq__36930,chunk__36932,count__36933,i__36934,new_link_37411,path_match_37410,node_37409,seq__37098_37403__$1,temp__5804__auto___37402__$1,path,seq__36930__$1,temp__5804__auto__,map__36929,map__36929__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37410], 0));

goog.dom.insertSiblingAfter(new_link_37411,node_37409);


var G__37443 = cljs.core.next(seq__37098_37403__$1);
var G__37444 = null;
var G__37445 = (0);
var G__37446 = (0);
seq__37098_37352 = G__37443;
chunk__37102_37353 = G__37444;
count__37103_37354 = G__37445;
i__37104_37355 = G__37446;
continue;
} else {
var G__37447 = cljs.core.next(seq__37098_37403__$1);
var G__37448 = null;
var G__37449 = (0);
var G__37450 = (0);
seq__37098_37352 = G__37447;
chunk__37102_37353 = G__37448;
count__37103_37354 = G__37449;
i__37104_37355 = G__37450;
continue;
}
} else {
var G__37451 = cljs.core.next(seq__37098_37403__$1);
var G__37452 = null;
var G__37453 = (0);
var G__37454 = (0);
seq__37098_37352 = G__37451;
chunk__37102_37353 = G__37452;
count__37103_37354 = G__37453;
i__37104_37355 = G__37454;
continue;
}
}
} else {
}
}
break;
}


var G__37455 = cljs.core.next(seq__36930__$1);
var G__37456 = null;
var G__37457 = (0);
var G__37458 = (0);
seq__36930 = G__37455;
chunk__36932 = G__37456;
count__36933 = G__37457;
i__36934 = G__37458;
continue;
} else {
var G__37459 = cljs.core.next(seq__36930__$1);
var G__37460 = null;
var G__37461 = (0);
var G__37462 = (0);
seq__36930 = G__37459;
chunk__36932 = G__37460;
count__36933 = G__37461;
i__36934 = G__37462;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__37152){
var map__37153 = p__37152;
var map__37153__$1 = cljs.core.__destructure_map(map__37153);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37153__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37154,done,error){
var map__37155 = p__37154;
var map__37155__$1 = cljs.core.__destructure_map(map__37155);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37155__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37156,done,error){
var map__37157 = p__37156;
var map__37157__$1 = cljs.core.__destructure_map(map__37157);
var msg = map__37157__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37158){
var map__37159 = p__37158;
var map__37159__$1 = cljs.core.__destructure_map(map__37159);
var src = map__37159__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37160 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37160) : done.call(null,G__37160));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37161){
var map__37162 = p__37161;
var map__37162__$1 = cljs.core.__destructure_map(map__37162);
var msg__$1 = map__37162__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37162__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37163){var ex = e37163;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37164){
var map__37165 = p__37164;
var map__37165__$1 = cljs.core.__destructure_map(map__37165);
var env = map__37165__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37165__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37166){
var map__37167 = p__37166;
var map__37167__$1 = cljs.core.__destructure_map(map__37167);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37167__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37167__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37168){
var map__37169 = p__37168;
var map__37169__$1 = cljs.core.__destructure_map(map__37169);
var svc = map__37169__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37169__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
