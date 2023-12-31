goog.provide('app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

app.core.app = (function (){var G__30563 = (function app$core$app_render(props__27969__auto__,maybe_ref__27970__auto__){
var vec__30564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27969__auto__),maybe_ref__27970__auto__], null);

var vec__30567 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30567,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30567,(1),null);
var fetch_slug = (function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___30182__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch("/api/redirect",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(({"url": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state)}))], null)))),(function (_response){
return promesa.protocols._mcat(promesa.protocols._promise(_response.json()),(function (response){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))),(function (data){
return promesa.protocols._promise((function (){var G__30570 = cljs.core.assoc;
var G__30571 = new cljs.core.Keyword(null,"slug","slug",2029314850);
var G__30572 = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(data);
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__30570,G__30571,G__30572) : set_state.call(null,G__30570,G__30571,G__30572));
})());
}));
}));
}));
}));
});
var redirect_link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.origin),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(state)),"/"].join('');
return helix.core.get_react().createElement("div",(function (){var obj30574 = ({"className":"bg-pink-100 grid place-items-center h-screen"});
return obj30574;
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(state))?helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("a",(function (){var obj30576 = ({"href":redirect_link});
return obj30576;
})(),redirect_link)):helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("input",(function (){var obj30578 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046))),"onChange":(function (p1__30561_SHARP_){
var G__30579 = cljs.core.assoc;
var G__30580 = new cljs.core.Keyword(null,"url","url",276297046);
var G__30581 = p1__30561_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__30579,G__30580,G__30581) : set_state.call(null,G__30579,G__30580,G__30581));
}),"className":"form-control border border-solid border-gray-600","placeholder":"Enter a url"});
return obj30578;
})()),helix.core.get_react().createElement("button",(function (){var obj30583 = ({"onClick":(function (){
return fetch_slug();
}),"className":"border-2 rounded uppercase"});
return obj30583;
})(),"Shorten Url"))));
});
if(goog.DEBUG === true){
var G__30584 = G__30563;
(G__30584.displayName = "app.core/app");

return G__30584;
} else {
return G__30563;
}
})();



app.core.init = (function app$core$init(){
var root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
return root.render(helix.core.get_react().createElement(app.core.app,null));
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
