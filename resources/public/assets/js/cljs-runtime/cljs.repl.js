goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35425){
var map__35426 = p__35425;
var map__35426__$1 = cljs.core.__destructure_map(map__35426);
var m = map__35426__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35426__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35426__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35433_35649 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35434_35650 = null;
var count__35435_35651 = (0);
var i__35436_35652 = (0);
while(true){
if((i__35436_35652 < count__35435_35651)){
var f_35653 = chunk__35434_35650.cljs$core$IIndexed$_nth$arity$2(null,i__35436_35652);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35653], 0));


var G__35654 = seq__35433_35649;
var G__35655 = chunk__35434_35650;
var G__35656 = count__35435_35651;
var G__35657 = (i__35436_35652 + (1));
seq__35433_35649 = G__35654;
chunk__35434_35650 = G__35655;
count__35435_35651 = G__35656;
i__35436_35652 = G__35657;
continue;
} else {
var temp__5804__auto___35658 = cljs.core.seq(seq__35433_35649);
if(temp__5804__auto___35658){
var seq__35433_35659__$1 = temp__5804__auto___35658;
if(cljs.core.chunked_seq_QMARK_(seq__35433_35659__$1)){
var c__5568__auto___35660 = cljs.core.chunk_first(seq__35433_35659__$1);
var G__35661 = cljs.core.chunk_rest(seq__35433_35659__$1);
var G__35662 = c__5568__auto___35660;
var G__35663 = cljs.core.count(c__5568__auto___35660);
var G__35664 = (0);
seq__35433_35649 = G__35661;
chunk__35434_35650 = G__35662;
count__35435_35651 = G__35663;
i__35436_35652 = G__35664;
continue;
} else {
var f_35665 = cljs.core.first(seq__35433_35659__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35665], 0));


var G__35666 = cljs.core.next(seq__35433_35659__$1);
var G__35667 = null;
var G__35668 = (0);
var G__35669 = (0);
seq__35433_35649 = G__35666;
chunk__35434_35650 = G__35667;
count__35435_35651 = G__35668;
i__35436_35652 = G__35669;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35670 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35670], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35670)))?cljs.core.second(arglists_35670):arglists_35670)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35487_35671 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35488_35672 = null;
var count__35489_35673 = (0);
var i__35490_35674 = (0);
while(true){
if((i__35490_35674 < count__35489_35673)){
var vec__35507_35675 = chunk__35488_35672.cljs$core$IIndexed$_nth$arity$2(null,i__35490_35674);
var name_35676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35507_35675,(0),null);
var map__35510_35677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35507_35675,(1),null);
var map__35510_35678__$1 = cljs.core.__destructure_map(map__35510_35677);
var doc_35679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35510_35678__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35510_35678__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35676], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35680], 0));

if(cljs.core.truth_(doc_35679)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35679], 0));
} else {
}


var G__35681 = seq__35487_35671;
var G__35682 = chunk__35488_35672;
var G__35683 = count__35489_35673;
var G__35684 = (i__35490_35674 + (1));
seq__35487_35671 = G__35681;
chunk__35488_35672 = G__35682;
count__35489_35673 = G__35683;
i__35490_35674 = G__35684;
continue;
} else {
var temp__5804__auto___35685 = cljs.core.seq(seq__35487_35671);
if(temp__5804__auto___35685){
var seq__35487_35686__$1 = temp__5804__auto___35685;
if(cljs.core.chunked_seq_QMARK_(seq__35487_35686__$1)){
var c__5568__auto___35688 = cljs.core.chunk_first(seq__35487_35686__$1);
var G__35689 = cljs.core.chunk_rest(seq__35487_35686__$1);
var G__35690 = c__5568__auto___35688;
var G__35691 = cljs.core.count(c__5568__auto___35688);
var G__35692 = (0);
seq__35487_35671 = G__35689;
chunk__35488_35672 = G__35690;
count__35489_35673 = G__35691;
i__35490_35674 = G__35692;
continue;
} else {
var vec__35525_35697 = cljs.core.first(seq__35487_35686__$1);
var name_35698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35525_35697,(0),null);
var map__35528_35699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35525_35697,(1),null);
var map__35528_35700__$1 = cljs.core.__destructure_map(map__35528_35699);
var doc_35701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528_35700__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528_35700__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35698], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35702], 0));

if(cljs.core.truth_(doc_35701)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35701], 0));
} else {
}


var G__35703 = cljs.core.next(seq__35487_35686__$1);
var G__35704 = null;
var G__35705 = (0);
var G__35706 = (0);
seq__35487_35671 = G__35703;
chunk__35488_35672 = G__35704;
count__35489_35673 = G__35705;
i__35490_35674 = G__35706;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35538 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35539 = null;
var count__35540 = (0);
var i__35541 = (0);
while(true){
if((i__35541 < count__35540)){
var role = chunk__35539.cljs$core$IIndexed$_nth$arity$2(null,i__35541);
var temp__5804__auto___35707__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35707__$1)){
var spec_35708 = temp__5804__auto___35707__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35708)], 0));
} else {
}


var G__35709 = seq__35538;
var G__35710 = chunk__35539;
var G__35711 = count__35540;
var G__35712 = (i__35541 + (1));
seq__35538 = G__35709;
chunk__35539 = G__35710;
count__35540 = G__35711;
i__35541 = G__35712;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__35538);
if(temp__5804__auto____$1){
var seq__35538__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35538__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35538__$1);
var G__35713 = cljs.core.chunk_rest(seq__35538__$1);
var G__35714 = c__5568__auto__;
var G__35715 = cljs.core.count(c__5568__auto__);
var G__35716 = (0);
seq__35538 = G__35713;
chunk__35539 = G__35714;
count__35540 = G__35715;
i__35541 = G__35716;
continue;
} else {
var role = cljs.core.first(seq__35538__$1);
var temp__5804__auto___35717__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35717__$2)){
var spec_35718 = temp__5804__auto___35717__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35718)], 0));
} else {
}


var G__35719 = cljs.core.next(seq__35538__$1);
var G__35720 = null;
var G__35721 = (0);
var G__35722 = (0);
seq__35538 = G__35719;
chunk__35539 = G__35720;
count__35540 = G__35721;
i__35541 = G__35722;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35729 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35730 = cljs.core.ex_cause(t);
via = G__35729;
t = G__35730;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35569 = datafied_throwable;
var map__35569__$1 = cljs.core.__destructure_map(map__35569);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35569__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35569__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35569__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35573 = cljs.core.last(via);
var map__35573__$1 = cljs.core.__destructure_map(map__35573);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35573__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35573__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35573__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35574 = data;
var map__35574__$1 = cljs.core.__destructure_map(map__35574);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35575 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35575__$1 = cljs.core.__destructure_map(map__35575);
var top_data = map__35575__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35576 = phase;
var G__35576__$1 = (((G__35576 instanceof cljs.core.Keyword))?G__35576.fqn:null);
switch (G__35576__$1) {
case "read-source":
var map__35577 = data;
var map__35577__$1 = cljs.core.__destructure_map(map__35577);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35577__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35577__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35578 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35578__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35578,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35578);
var G__35578__$2 = (cljs.core.truth_((function (){var fexpr__35579 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35579.cljs$core$IFn$_invoke$arity$1 ? fexpr__35579.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35579.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35578__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35578__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35578__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35578__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35580 = top_data;
var G__35580__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35580,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35580);
var G__35580__$2 = (cljs.core.truth_((function (){var fexpr__35581 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35581.cljs$core$IFn$_invoke$arity$1 ? fexpr__35581.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35581.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35580__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35580__$1);
var G__35580__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35580__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35580__$2);
var G__35580__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35580__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35580__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35580__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35580__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35582 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35582,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35582,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35582,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35582,(3),null);
var G__35585 = top_data;
var G__35585__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35585,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35585);
var G__35585__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35585__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35585__$1);
var G__35585__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35585__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35585__$2);
var G__35585__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35585__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35585__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35585__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35585__$4;
}

break;
case "execution":
var vec__35587 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35566_SHARP_){
var or__5045__auto__ = (p1__35566_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__35590 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35590.cljs$core$IFn$_invoke$arity$1 ? fexpr__35590.cljs$core$IFn$_invoke$arity$1(p1__35566_SHARP_) : fexpr__35590.call(null,p1__35566_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__35591 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35591__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35591,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35591);
var G__35591__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35591__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35591__$1);
var G__35591__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35591__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35591__$2);
var G__35591__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35591__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35591__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35591__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35591__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35576__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35595){
var map__35596 = p__35595;
var map__35596__$1 = cljs.core.__destructure_map(map__35596);
var triage_data = map__35596__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35598 = phase;
var G__35598__$1 = (((G__35598 instanceof cljs.core.Keyword))?G__35598.fqn:null);
switch (G__35598__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35599 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35600 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35601 = loc;
var G__35602 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35603_35772 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35604_35773 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35605_35774 = true;
var _STAR_print_fn_STAR__temp_val__35606_35775 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35605_35774);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35606_35775);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35593_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35593_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35604_35773);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35603_35772);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35599,G__35600,G__35601,G__35602) : format.call(null,G__35599,G__35600,G__35601,G__35602));

break;
case "macroexpansion":
var G__35613 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35614 = cause_type;
var G__35615 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35616 = loc;
var G__35617 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35613,G__35614,G__35615,G__35616,G__35617) : format.call(null,G__35613,G__35614,G__35615,G__35616,G__35617));

break;
case "compile-syntax-check":
var G__35619 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35620 = cause_type;
var G__35621 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35622 = loc;
var G__35623 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35619,G__35620,G__35621,G__35622,G__35623) : format.call(null,G__35619,G__35620,G__35621,G__35622,G__35623));

break;
case "compilation":
var G__35624 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35625 = cause_type;
var G__35626 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35627 = loc;
var G__35628 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35624,G__35625,G__35626,G__35627,G__35628) : format.call(null,G__35624,G__35625,G__35626,G__35627,G__35628));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35631 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35632 = symbol;
var G__35633 = loc;
var G__35634 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35635_35784 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35636_35785 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35637_35786 = true;
var _STAR_print_fn_STAR__temp_val__35638_35787 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35637_35786);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35638_35787);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35594_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35594_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35636_35785);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35635_35784);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35631,G__35632,G__35633,G__35634) : format.call(null,G__35631,G__35632,G__35633,G__35634));
} else {
var G__35640 = "Execution error%s at %s(%s).\n%s\n";
var G__35641 = cause_type;
var G__35642 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35643 = loc;
var G__35644 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35640,G__35641,G__35642,G__35643,G__35644) : format.call(null,G__35640,G__35641,G__35642,G__35643,G__35644));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35598__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
