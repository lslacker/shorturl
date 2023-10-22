goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30223 = (function (f,blockable,meta30224){
this.f = f;
this.blockable = blockable;
this.meta30224 = meta30224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30225,meta30224__$1){
var self__ = this;
var _30225__$1 = this;
return (new cljs.core.async.t_cljs$core$async30223(self__.f,self__.blockable,meta30224__$1));
}));

(cljs.core.async.t_cljs$core$async30223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30225){
var self__ = this;
var _30225__$1 = this;
return self__.meta30224;
}));

(cljs.core.async.t_cljs$core$async30223.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30223.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30224","meta30224",-1425011589,null)], null);
}));

(cljs.core.async.t_cljs$core$async30223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30223");

(cljs.core.async.t_cljs$core$async30223.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30223.
 */
cljs.core.async.__GT_t_cljs$core$async30223 = (function cljs$core$async$__GT_t_cljs$core$async30223(f,blockable,meta30224){
return (new cljs.core.async.t_cljs$core$async30223(f,blockable,meta30224));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30220 = arguments.length;
switch (G__30220) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async30223(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30238 = arguments.length;
switch (G__30238) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30242 = arguments.length;
switch (G__30242) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30244 = arguments.length;
switch (G__30244) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33030 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33030) : fn1.call(null,val_33030));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33030) : fn1.call(null,val_33030));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30251 = arguments.length;
switch (G__30251) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___33038 = n;
var x_33039 = (0);
while(true){
if((x_33039 < n__5636__auto___33038)){
(a[x_33039] = x_33039);

var G__33040 = (x_33039 + (1));
x_33039 = G__33040;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30253 = (function (flag,meta30254){
this.flag = flag;
this.meta30254 = meta30254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30255,meta30254__$1){
var self__ = this;
var _30255__$1 = this;
return (new cljs.core.async.t_cljs$core$async30253(self__.flag,meta30254__$1));
}));

(cljs.core.async.t_cljs$core$async30253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30255){
var self__ = this;
var _30255__$1 = this;
return self__.meta30254;
}));

(cljs.core.async.t_cljs$core$async30253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30254","meta30254",881504943,null)], null);
}));

(cljs.core.async.t_cljs$core$async30253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30253");

(cljs.core.async.t_cljs$core$async30253.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30253.
 */
cljs.core.async.__GT_t_cljs$core$async30253 = (function cljs$core$async$__GT_t_cljs$core$async30253(flag,meta30254){
return (new cljs.core.async.t_cljs$core$async30253(flag,meta30254));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async30253(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30269 = (function (flag,cb,meta30270){
this.flag = flag;
this.cb = cb;
this.meta30270 = meta30270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30271,meta30270__$1){
var self__ = this;
var _30271__$1 = this;
return (new cljs.core.async.t_cljs$core$async30269(self__.flag,self__.cb,meta30270__$1));
}));

(cljs.core.async.t_cljs$core$async30269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30271){
var self__ = this;
var _30271__$1 = this;
return self__.meta30270;
}));

(cljs.core.async.t_cljs$core$async30269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30270","meta30270",973299043,null)], null);
}));

(cljs.core.async.t_cljs$core$async30269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30269");

(cljs.core.async.t_cljs$core$async30269.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30269.
 */
cljs.core.async.__GT_t_cljs$core$async30269 = (function cljs$core$async$__GT_t_cljs$core$async30269(flag,cb,meta30270){
return (new cljs.core.async.t_cljs$core$async30269(flag,cb,meta30270));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30269(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30275_SHARP_){
var G__30283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30275_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30283) : fret.call(null,G__30283));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30276_SHARP_){
var G__30284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30276_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30284) : fret.call(null,G__30284));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33041 = (i + (1));
i = G__33041;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33042 = arguments.length;
var i__5770__auto___33043 = (0);
while(true){
if((i__5770__auto___33043 < len__5769__auto___33042)){
args__5775__auto__.push((arguments[i__5770__auto___33043]));

var G__33044 = (i__5770__auto___33043 + (1));
i__5770__auto___33043 = G__33044;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30289){
var map__30290 = p__30289;
var map__30290__$1 = cljs.core.__destructure_map(map__30290);
var opts = map__30290__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30287){
var G__30288 = cljs.core.first(seq30287);
var seq30287__$1 = cljs.core.next(seq30287);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30288,seq30287__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30297 = arguments.length;
switch (G__30297) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30144__auto___33046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_30330){
var state_val_30337 = (state_30330[(1)]);
if((state_val_30337 === (7))){
var inst_30323 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30355_33047 = state_30330__$1;
(statearr_30355_33047[(2)] = inst_30323);

(statearr_30355_33047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (1))){
var state_30330__$1 = state_30330;
var statearr_30356_33048 = state_30330__$1;
(statearr_30356_33048[(2)] = null);

(statearr_30356_33048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (4))){
var inst_30306 = (state_30330[(7)]);
var inst_30306__$1 = (state_30330[(2)]);
var inst_30307 = (inst_30306__$1 == null);
var state_30330__$1 = (function (){var statearr_30357 = state_30330;
(statearr_30357[(7)] = inst_30306__$1);

return statearr_30357;
})();
if(cljs.core.truth_(inst_30307)){
var statearr_30358_33053 = state_30330__$1;
(statearr_30358_33053[(1)] = (5));

} else {
var statearr_30359_33054 = state_30330__$1;
(statearr_30359_33054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (13))){
var state_30330__$1 = state_30330;
var statearr_30360_33055 = state_30330__$1;
(statearr_30360_33055[(2)] = null);

(statearr_30360_33055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (6))){
var inst_30306 = (state_30330[(7)]);
var state_30330__$1 = state_30330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30330__$1,(11),to,inst_30306);
} else {
if((state_val_30337 === (3))){
var inst_30326 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30330__$1,inst_30326);
} else {
if((state_val_30337 === (12))){
var state_30330__$1 = state_30330;
var statearr_30364_33056 = state_30330__$1;
(statearr_30364_33056[(2)] = null);

(statearr_30364_33056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (2))){
var state_30330__$1 = state_30330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30330__$1,(4),from);
} else {
if((state_val_30337 === (11))){
var inst_30316 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
if(cljs.core.truth_(inst_30316)){
var statearr_30365_33057 = state_30330__$1;
(statearr_30365_33057[(1)] = (12));

} else {
var statearr_30366_33058 = state_30330__$1;
(statearr_30366_33058[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (9))){
var state_30330__$1 = state_30330;
var statearr_30370_33059 = state_30330__$1;
(statearr_30370_33059[(2)] = null);

(statearr_30370_33059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (5))){
var state_30330__$1 = state_30330;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30371_33060 = state_30330__$1;
(statearr_30371_33060[(1)] = (8));

} else {
var statearr_30372_33061 = state_30330__$1;
(statearr_30372_33061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (14))){
var inst_30321 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30373_33062 = state_30330__$1;
(statearr_30373_33062[(2)] = inst_30321);

(statearr_30373_33062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (10))){
var inst_30313 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30374_33063 = state_30330__$1;
(statearr_30374_33063[(2)] = inst_30313);

(statearr_30374_33063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30337 === (8))){
var inst_30310 = cljs.core.async.close_BANG_(to);
var state_30330__$1 = state_30330;
var statearr_30375_33064 = state_30330__$1;
(statearr_30375_33064[(2)] = inst_30310);

(statearr_30375_33064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_30376 = [null,null,null,null,null,null,null,null];
(statearr_30376[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_30376[(1)] = (1));

return statearr_30376;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_30330){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_30330);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e30377){var ex__29570__auto__ = e30377;
var statearr_30378_33065 = state_30330;
(statearr_30378_33065[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_30330[(4)]))){
var statearr_30379_33066 = state_30330;
(statearr_30379_33066[(1)] = cljs.core.first((state_30330[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33067 = state_30330;
state_30330 = G__33067;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_30330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_30330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_30382 = f__30145__auto__();
(statearr_30382[(6)] = c__30144__auto___33046);

return statearr_30382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__30388){
var vec__30389 = p__30388;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30389,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30389,(1),null);
var job = vec__30389;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30144__auto___33070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_30398){
var state_val_30399 = (state_30398[(1)]);
if((state_val_30399 === (1))){
var state_30398__$1 = state_30398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30398__$1,(2),res,v);
} else {
if((state_val_30399 === (2))){
var inst_30395 = (state_30398[(2)]);
var inst_30396 = cljs.core.async.close_BANG_(res);
var state_30398__$1 = (function (){var statearr_30401 = state_30398;
(statearr_30401[(7)] = inst_30395);

return statearr_30401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30398__$1,inst_30396);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0 = (function (){
var statearr_30402 = [null,null,null,null,null,null,null,null];
(statearr_30402[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__);

(statearr_30402[(1)] = (1));

return statearr_30402;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1 = (function (state_30398){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_30398);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e30403){var ex__29570__auto__ = e30403;
var statearr_30404_33075 = state_30398;
(statearr_30404_33075[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_30398[(4)]))){
var statearr_30405_33076 = state_30398;
(statearr_30405_33076[(1)] = cljs.core.first((state_30398[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33077 = state_30398;
state_30398 = G__33077;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__ = function(state_30398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1.call(this,state_30398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_30406 = f__30145__auto__();
(statearr_30406[(6)] = c__30144__auto___33070);

return statearr_30406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30407){
var vec__30408 = p__30407;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30408,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30408,(1),null);
var job = vec__30408;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___33083 = n;
var __33084 = (0);
while(true){
if((__33084 < n__5636__auto___33083)){
var G__30411_33085 = type;
var G__30411_33086__$1 = (((G__30411_33085 instanceof cljs.core.Keyword))?G__30411_33085.fqn:null);
switch (G__30411_33086__$1) {
case "compute":
var c__30144__auto___33088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33084,c__30144__auto___33088,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async){
return (function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = ((function (__33084,c__30144__auto___33088,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async){
return (function (state_30425){
var state_val_30426 = (state_30425[(1)]);
if((state_val_30426 === (1))){
var state_30425__$1 = state_30425;
var statearr_30428_33089 = state_30425__$1;
(statearr_30428_33089[(2)] = null);

(statearr_30428_33089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (2))){
var state_30425__$1 = state_30425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30425__$1,(4),jobs);
} else {
if((state_val_30426 === (3))){
var inst_30423 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30425__$1,inst_30423);
} else {
if((state_val_30426 === (4))){
var inst_30415 = (state_30425[(2)]);
var inst_30416 = process__$1(inst_30415);
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30416)){
var statearr_30431_33090 = state_30425__$1;
(statearr_30431_33090[(1)] = (5));

} else {
var statearr_30432_33094 = state_30425__$1;
(statearr_30432_33094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (5))){
var state_30425__$1 = state_30425;
var statearr_30433_33099 = state_30425__$1;
(statearr_30433_33099[(2)] = null);

(statearr_30433_33099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (6))){
var state_30425__$1 = state_30425;
var statearr_30434_33103 = state_30425__$1;
(statearr_30434_33103[(2)] = null);

(statearr_30434_33103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (7))){
var inst_30421 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30435_33105 = state_30425__$1;
(statearr_30435_33105[(2)] = inst_30421);

(statearr_30435_33105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33084,c__30144__auto___33088,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async))
;
return ((function (__33084,switch__29566__auto__,c__30144__auto___33088,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0 = (function (){
var statearr_30436 = [null,null,null,null,null,null,null];
(statearr_30436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__);

(statearr_30436[(1)] = (1));

return statearr_30436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1 = (function (state_30425){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_30425);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e30437){var ex__29570__auto__ = e30437;
var statearr_30438_33106 = state_30425;
(statearr_30438_33106[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_30425[(4)]))){
var statearr_30439_33107 = state_30425;
(statearr_30439_33107[(1)] = cljs.core.first((state_30425[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33111 = state_30425;
state_30425 = G__33111;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__ = function(state_30425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1.call(this,state_30425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__;
})()
;})(__33084,switch__29566__auto__,c__30144__auto___33088,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async))
})();
var state__30146__auto__ = (function (){var statearr_30440 = f__30145__auto__();
(statearr_30440[(6)] = c__30144__auto___33088);

return statearr_30440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
});})(__33084,c__30144__auto___33088,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async))
);


break;
case "async":
var c__30144__auto___33116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33084,c__30144__auto___33116,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async){
return (function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = ((function (__33084,c__30144__auto___33116,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async){
return (function (state_30453){
var state_val_30454 = (state_30453[(1)]);
if((state_val_30454 === (1))){
var state_30453__$1 = state_30453;
var statearr_30455_33117 = state_30453__$1;
(statearr_30455_33117[(2)] = null);

(statearr_30455_33117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (2))){
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30453__$1,(4),jobs);
} else {
if((state_val_30454 === (3))){
var inst_30451 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30453__$1,inst_30451);
} else {
if((state_val_30454 === (4))){
var inst_30443 = (state_30453[(2)]);
var inst_30444 = async(inst_30443);
var state_30453__$1 = state_30453;
if(cljs.core.truth_(inst_30444)){
var statearr_30456_33122 = state_30453__$1;
(statearr_30456_33122[(1)] = (5));

} else {
var statearr_30457_33123 = state_30453__$1;
(statearr_30457_33123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (5))){
var state_30453__$1 = state_30453;
var statearr_30458_33124 = state_30453__$1;
(statearr_30458_33124[(2)] = null);

(statearr_30458_33124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (6))){
var state_30453__$1 = state_30453;
var statearr_30459_33125 = state_30453__$1;
(statearr_30459_33125[(2)] = null);

(statearr_30459_33125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (7))){
var inst_30449 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30460_33126 = state_30453__$1;
(statearr_30460_33126[(2)] = inst_30449);

(statearr_30460_33126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33084,c__30144__auto___33116,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async))
;
return ((function (__33084,switch__29566__auto__,c__30144__auto___33116,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0 = (function (){
var statearr_30465 = [null,null,null,null,null,null,null];
(statearr_30465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__);

(statearr_30465[(1)] = (1));

return statearr_30465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1 = (function (state_30453){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_30453);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e30472){var ex__29570__auto__ = e30472;
var statearr_30474_33131 = state_30453;
(statearr_30474_33131[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_30453[(4)]))){
var statearr_30481_33132 = state_30453;
(statearr_30481_33132[(1)] = cljs.core.first((state_30453[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33133 = state_30453;
state_30453 = G__33133;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__ = function(state_30453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1.call(this,state_30453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__;
})()
;})(__33084,switch__29566__auto__,c__30144__auto___33116,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async))
})();
var state__30146__auto__ = (function (){var statearr_30488 = f__30145__auto__();
(statearr_30488[(6)] = c__30144__auto___33116);

return statearr_30488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
});})(__33084,c__30144__auto___33116,G__30411_33085,G__30411_33086__$1,n__5636__auto___33083,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30411_33086__$1)].join('')));

}

var G__33134 = (__33084 + (1));
__33084 = G__33134;
continue;
} else {
}
break;
}

var c__30144__auto___33135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_30525){
var state_val_30526 = (state_30525[(1)]);
if((state_val_30526 === (7))){
var inst_30521 = (state_30525[(2)]);
var state_30525__$1 = state_30525;
var statearr_30532_33137 = state_30525__$1;
(statearr_30532_33137[(2)] = inst_30521);

(statearr_30532_33137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (1))){
var state_30525__$1 = state_30525;
var statearr_30535_33138 = state_30525__$1;
(statearr_30535_33138[(2)] = null);

(statearr_30535_33138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (4))){
var inst_30503 = (state_30525[(7)]);
var inst_30503__$1 = (state_30525[(2)]);
var inst_30504 = (inst_30503__$1 == null);
var state_30525__$1 = (function (){var statearr_30536 = state_30525;
(statearr_30536[(7)] = inst_30503__$1);

return statearr_30536;
})();
if(cljs.core.truth_(inst_30504)){
var statearr_30541_33139 = state_30525__$1;
(statearr_30541_33139[(1)] = (5));

} else {
var statearr_30543_33140 = state_30525__$1;
(statearr_30543_33140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (6))){
var inst_30503 = (state_30525[(7)]);
var inst_30508 = (state_30525[(8)]);
var inst_30508__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30513 = [inst_30503,inst_30508__$1];
var inst_30514 = (new cljs.core.PersistentVector(null,2,(5),inst_30512,inst_30513,null));
var state_30525__$1 = (function (){var statearr_30560 = state_30525;
(statearr_30560[(8)] = inst_30508__$1);

return statearr_30560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30525__$1,(8),jobs,inst_30514);
} else {
if((state_val_30526 === (3))){
var inst_30523 = (state_30525[(2)]);
var state_30525__$1 = state_30525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30525__$1,inst_30523);
} else {
if((state_val_30526 === (2))){
var state_30525__$1 = state_30525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30525__$1,(4),from);
} else {
if((state_val_30526 === (9))){
var inst_30518 = (state_30525[(2)]);
var state_30525__$1 = (function (){var statearr_30607 = state_30525;
(statearr_30607[(9)] = inst_30518);

return statearr_30607;
})();
var statearr_30608_33148 = state_30525__$1;
(statearr_30608_33148[(2)] = null);

(statearr_30608_33148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (5))){
var inst_30506 = cljs.core.async.close_BANG_(jobs);
var state_30525__$1 = state_30525;
var statearr_30612_33150 = state_30525__$1;
(statearr_30612_33150[(2)] = inst_30506);

(statearr_30612_33150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30526 === (8))){
var inst_30508 = (state_30525[(8)]);
var inst_30516 = (state_30525[(2)]);
var state_30525__$1 = (function (){var statearr_30613 = state_30525;
(statearr_30613[(10)] = inst_30516);

return statearr_30613;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30525__$1,(9),results,inst_30508);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0 = (function (){
var statearr_30614 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__);

(statearr_30614[(1)] = (1));

return statearr_30614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1 = (function (state_30525){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_30525);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e30616){var ex__29570__auto__ = e30616;
var statearr_30617_33151 = state_30525;
(statearr_30617_33151[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_30525[(4)]))){
var statearr_30618_33155 = state_30525;
(statearr_30618_33155[(1)] = cljs.core.first((state_30525[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_30525;
state_30525 = G__33157;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__ = function(state_30525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1.call(this,state_30525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_30620 = f__30145__auto__();
(statearr_30620[(6)] = c__30144__auto___33135);

return statearr_30620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


var c__30144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_30660){
var state_val_30661 = (state_30660[(1)]);
if((state_val_30661 === (7))){
var inst_30655 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
var statearr_30680_33158 = state_30660__$1;
(statearr_30680_33158[(2)] = inst_30655);

(statearr_30680_33158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (20))){
var state_30660__$1 = state_30660;
var statearr_30681_33162 = state_30660__$1;
(statearr_30681_33162[(2)] = null);

(statearr_30681_33162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (1))){
var state_30660__$1 = state_30660;
var statearr_30684_33164 = state_30660__$1;
(statearr_30684_33164[(2)] = null);

(statearr_30684_33164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (4))){
var inst_30623 = (state_30660[(7)]);
var inst_30623__$1 = (state_30660[(2)]);
var inst_30624 = (inst_30623__$1 == null);
var state_30660__$1 = (function (){var statearr_30685 = state_30660;
(statearr_30685[(7)] = inst_30623__$1);

return statearr_30685;
})();
if(cljs.core.truth_(inst_30624)){
var statearr_30689_33165 = state_30660__$1;
(statearr_30689_33165[(1)] = (5));

} else {
var statearr_30690_33166 = state_30660__$1;
(statearr_30690_33166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (15))){
var inst_30637 = (state_30660[(8)]);
var state_30660__$1 = state_30660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30660__$1,(18),to,inst_30637);
} else {
if((state_val_30661 === (21))){
var inst_30650 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
var statearr_30692_33167 = state_30660__$1;
(statearr_30692_33167[(2)] = inst_30650);

(statearr_30692_33167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (13))){
var inst_30652 = (state_30660[(2)]);
var state_30660__$1 = (function (){var statearr_30695 = state_30660;
(statearr_30695[(9)] = inst_30652);

return statearr_30695;
})();
var statearr_30696_33168 = state_30660__$1;
(statearr_30696_33168[(2)] = null);

(statearr_30696_33168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (6))){
var inst_30623 = (state_30660[(7)]);
var state_30660__$1 = state_30660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30660__$1,(11),inst_30623);
} else {
if((state_val_30661 === (17))){
var inst_30645 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
if(cljs.core.truth_(inst_30645)){
var statearr_30699_33169 = state_30660__$1;
(statearr_30699_33169[(1)] = (19));

} else {
var statearr_30701_33170 = state_30660__$1;
(statearr_30701_33170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (3))){
var inst_30657 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30660__$1,inst_30657);
} else {
if((state_val_30661 === (12))){
var inst_30634 = (state_30660[(10)]);
var state_30660__$1 = state_30660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30660__$1,(14),inst_30634);
} else {
if((state_val_30661 === (2))){
var state_30660__$1 = state_30660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30660__$1,(4),results);
} else {
if((state_val_30661 === (19))){
var state_30660__$1 = state_30660;
var statearr_30709_33171 = state_30660__$1;
(statearr_30709_33171[(2)] = null);

(statearr_30709_33171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (11))){
var inst_30634 = (state_30660[(2)]);
var state_30660__$1 = (function (){var statearr_30710 = state_30660;
(statearr_30710[(10)] = inst_30634);

return statearr_30710;
})();
var statearr_30711_33172 = state_30660__$1;
(statearr_30711_33172[(2)] = null);

(statearr_30711_33172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (9))){
var state_30660__$1 = state_30660;
var statearr_30712_33173 = state_30660__$1;
(statearr_30712_33173[(2)] = null);

(statearr_30712_33173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (5))){
var state_30660__$1 = state_30660;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30713_33174 = state_30660__$1;
(statearr_30713_33174[(1)] = (8));

} else {
var statearr_30714_33175 = state_30660__$1;
(statearr_30714_33175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (14))){
var inst_30637 = (state_30660[(8)]);
var inst_30639 = (state_30660[(11)]);
var inst_30637__$1 = (state_30660[(2)]);
var inst_30638 = (inst_30637__$1 == null);
var inst_30639__$1 = cljs.core.not(inst_30638);
var state_30660__$1 = (function (){var statearr_30715 = state_30660;
(statearr_30715[(8)] = inst_30637__$1);

(statearr_30715[(11)] = inst_30639__$1);

return statearr_30715;
})();
if(inst_30639__$1){
var statearr_30718_33176 = state_30660__$1;
(statearr_30718_33176[(1)] = (15));

} else {
var statearr_30719_33177 = state_30660__$1;
(statearr_30719_33177[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (16))){
var inst_30639 = (state_30660[(11)]);
var state_30660__$1 = state_30660;
var statearr_30720_33181 = state_30660__$1;
(statearr_30720_33181[(2)] = inst_30639);

(statearr_30720_33181[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (10))){
var inst_30631 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
var statearr_30721_33182 = state_30660__$1;
(statearr_30721_33182[(2)] = inst_30631);

(statearr_30721_33182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (18))){
var inst_30642 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
var statearr_30722_33184 = state_30660__$1;
(statearr_30722_33184[(2)] = inst_30642);

(statearr_30722_33184[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (8))){
var inst_30627 = cljs.core.async.close_BANG_(to);
var state_30660__$1 = state_30660;
var statearr_30723_33185 = state_30660__$1;
(statearr_30723_33185[(2)] = inst_30627);

(statearr_30723_33185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0 = (function (){
var statearr_30726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__);

(statearr_30726[(1)] = (1));

return statearr_30726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1 = (function (state_30660){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_30660);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e30727){var ex__29570__auto__ = e30727;
var statearr_30728_33187 = state_30660;
(statearr_30728_33187[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_30660[(4)]))){
var statearr_30729_33251 = state_30660;
(statearr_30729_33251[(1)] = cljs.core.first((state_30660[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33252 = state_30660;
state_30660 = G__33252;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__ = function(state_30660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1.call(this,state_30660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29567__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_30732 = f__30145__auto__();
(statearr_30732[(6)] = c__30144__auto__);

return statearr_30732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));

return c__30144__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30735 = arguments.length;
switch (G__30735) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30740 = arguments.length;
switch (G__30740) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30748 = arguments.length;
switch (G__30748) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30144__auto___33261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_30780){
var state_val_30781 = (state_30780[(1)]);
if((state_val_30781 === (7))){
var inst_30776 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
var statearr_30782_33262 = state_30780__$1;
(statearr_30782_33262[(2)] = inst_30776);

(statearr_30782_33262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (1))){
var state_30780__$1 = state_30780;
var statearr_30783_33263 = state_30780__$1;
(statearr_30783_33263[(2)] = null);

(statearr_30783_33263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (4))){
var inst_30757 = (state_30780[(7)]);
var inst_30757__$1 = (state_30780[(2)]);
var inst_30758 = (inst_30757__$1 == null);
var state_30780__$1 = (function (){var statearr_30784 = state_30780;
(statearr_30784[(7)] = inst_30757__$1);

return statearr_30784;
})();
if(cljs.core.truth_(inst_30758)){
var statearr_30785_33264 = state_30780__$1;
(statearr_30785_33264[(1)] = (5));

} else {
var statearr_30786_33265 = state_30780__$1;
(statearr_30786_33265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (13))){
var state_30780__$1 = state_30780;
var statearr_30787_33266 = state_30780__$1;
(statearr_30787_33266[(2)] = null);

(statearr_30787_33266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (6))){
var inst_30757 = (state_30780[(7)]);
var inst_30763 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30757) : p.call(null,inst_30757));
var state_30780__$1 = state_30780;
if(cljs.core.truth_(inst_30763)){
var statearr_30788_33267 = state_30780__$1;
(statearr_30788_33267[(1)] = (9));

} else {
var statearr_30789_33268 = state_30780__$1;
(statearr_30789_33268[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (3))){
var inst_30778 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30780__$1,inst_30778);
} else {
if((state_val_30781 === (12))){
var state_30780__$1 = state_30780;
var statearr_30790_33269 = state_30780__$1;
(statearr_30790_33269[(2)] = null);

(statearr_30790_33269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (2))){
var state_30780__$1 = state_30780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30780__$1,(4),ch);
} else {
if((state_val_30781 === (11))){
var inst_30757 = (state_30780[(7)]);
var inst_30767 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30780__$1,(8),inst_30767,inst_30757);
} else {
if((state_val_30781 === (9))){
var state_30780__$1 = state_30780;
var statearr_30797_33270 = state_30780__$1;
(statearr_30797_33270[(2)] = tc);

(statearr_30797_33270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (5))){
var inst_30760 = cljs.core.async.close_BANG_(tc);
var inst_30761 = cljs.core.async.close_BANG_(fc);
var state_30780__$1 = (function (){var statearr_30798 = state_30780;
(statearr_30798[(8)] = inst_30760);

return statearr_30798;
})();
var statearr_30799_33271 = state_30780__$1;
(statearr_30799_33271[(2)] = inst_30761);

(statearr_30799_33271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (14))){
var inst_30774 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
var statearr_30800_33273 = state_30780__$1;
(statearr_30800_33273[(2)] = inst_30774);

(statearr_30800_33273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (10))){
var state_30780__$1 = state_30780;
var statearr_30801_33275 = state_30780__$1;
(statearr_30801_33275[(2)] = fc);

(statearr_30801_33275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (8))){
var inst_30769 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
if(cljs.core.truth_(inst_30769)){
var statearr_30802_33276 = state_30780__$1;
(statearr_30802_33276[(1)] = (12));

} else {
var statearr_30803_33277 = state_30780__$1;
(statearr_30803_33277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_30804 = [null,null,null,null,null,null,null,null,null];
(statearr_30804[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_30804[(1)] = (1));

return statearr_30804;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_30780){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_30780);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e30805){var ex__29570__auto__ = e30805;
var statearr_30806_33278 = state_30780;
(statearr_30806_33278[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_30780[(4)]))){
var statearr_30809_33279 = state_30780;
(statearr_30809_33279[(1)] = cljs.core.first((state_30780[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33280 = state_30780;
state_30780 = G__33280;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_30780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_30780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_30812 = f__30145__auto__();
(statearr_30812[(6)] = c__30144__auto___33261);

return statearr_30812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_30837){
var state_val_30838 = (state_30837[(1)]);
if((state_val_30838 === (7))){
var inst_30832 = (state_30837[(2)]);
var state_30837__$1 = state_30837;
var statearr_30839_33281 = state_30837__$1;
(statearr_30839_33281[(2)] = inst_30832);

(statearr_30839_33281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (1))){
var inst_30815 = init;
var inst_30816 = inst_30815;
var state_30837__$1 = (function (){var statearr_30840 = state_30837;
(statearr_30840[(7)] = inst_30816);

return statearr_30840;
})();
var statearr_30841_33282 = state_30837__$1;
(statearr_30841_33282[(2)] = null);

(statearr_30841_33282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (4))){
var inst_30819 = (state_30837[(8)]);
var inst_30819__$1 = (state_30837[(2)]);
var inst_30820 = (inst_30819__$1 == null);
var state_30837__$1 = (function (){var statearr_30842 = state_30837;
(statearr_30842[(8)] = inst_30819__$1);

return statearr_30842;
})();
if(cljs.core.truth_(inst_30820)){
var statearr_30843_33284 = state_30837__$1;
(statearr_30843_33284[(1)] = (5));

} else {
var statearr_30844_33285 = state_30837__$1;
(statearr_30844_33285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (6))){
var inst_30823 = (state_30837[(9)]);
var inst_30816 = (state_30837[(7)]);
var inst_30819 = (state_30837[(8)]);
var inst_30823__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30816,inst_30819) : f.call(null,inst_30816,inst_30819));
var inst_30824 = cljs.core.reduced_QMARK_(inst_30823__$1);
var state_30837__$1 = (function (){var statearr_30845 = state_30837;
(statearr_30845[(9)] = inst_30823__$1);

return statearr_30845;
})();
if(inst_30824){
var statearr_30846_33288 = state_30837__$1;
(statearr_30846_33288[(1)] = (8));

} else {
var statearr_30848_33289 = state_30837__$1;
(statearr_30848_33289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (3))){
var inst_30835 = (state_30837[(2)]);
var state_30837__$1 = state_30837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30837__$1,inst_30835);
} else {
if((state_val_30838 === (2))){
var state_30837__$1 = state_30837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30837__$1,(4),ch);
} else {
if((state_val_30838 === (9))){
var inst_30823 = (state_30837[(9)]);
var inst_30816 = inst_30823;
var state_30837__$1 = (function (){var statearr_30851 = state_30837;
(statearr_30851[(7)] = inst_30816);

return statearr_30851;
})();
var statearr_30852_33290 = state_30837__$1;
(statearr_30852_33290[(2)] = null);

(statearr_30852_33290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (5))){
var inst_30816 = (state_30837[(7)]);
var state_30837__$1 = state_30837;
var statearr_30853_33291 = state_30837__$1;
(statearr_30853_33291[(2)] = inst_30816);

(statearr_30853_33291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (10))){
var inst_30830 = (state_30837[(2)]);
var state_30837__$1 = state_30837;
var statearr_30854_33292 = state_30837__$1;
(statearr_30854_33292[(2)] = inst_30830);

(statearr_30854_33292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (8))){
var inst_30823 = (state_30837[(9)]);
var inst_30826 = cljs.core.deref(inst_30823);
var state_30837__$1 = state_30837;
var statearr_30857_33294 = state_30837__$1;
(statearr_30857_33294[(2)] = inst_30826);

(statearr_30857_33294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29567__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29567__auto____0 = (function (){
var statearr_30860 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30860[(0)] = cljs$core$async$reduce_$_state_machine__29567__auto__);

(statearr_30860[(1)] = (1));

return statearr_30860;
});
var cljs$core$async$reduce_$_state_machine__29567__auto____1 = (function (state_30837){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_30837);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e30862){var ex__29570__auto__ = e30862;
var statearr_30864_33295 = state_30837;
(statearr_30864_33295[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_30837[(4)]))){
var statearr_30865_33296 = state_30837;
(statearr_30865_33296[(1)] = cljs.core.first((state_30837[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33297 = state_30837;
state_30837 = G__33297;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29567__auto__ = function(state_30837){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29567__auto____1.call(this,state_30837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29567__auto____0;
cljs$core$async$reduce_$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29567__auto____1;
return cljs$core$async$reduce_$_state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_30866 = f__30145__auto__();
(statearr_30866[(6)] = c__30144__auto__);

return statearr_30866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));

return c__30144__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_30874){
var state_val_30875 = (state_30874[(1)]);
if((state_val_30875 === (1))){
var inst_30869 = cljs.core.async.reduce(f__$1,init,ch);
var state_30874__$1 = state_30874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30874__$1,(2),inst_30869);
} else {
if((state_val_30875 === (2))){
var inst_30871 = (state_30874[(2)]);
var inst_30872 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30871) : f__$1.call(null,inst_30871));
var state_30874__$1 = state_30874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30874__$1,inst_30872);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29567__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29567__auto____0 = (function (){
var statearr_30878 = [null,null,null,null,null,null,null];
(statearr_30878[(0)] = cljs$core$async$transduce_$_state_machine__29567__auto__);

(statearr_30878[(1)] = (1));

return statearr_30878;
});
var cljs$core$async$transduce_$_state_machine__29567__auto____1 = (function (state_30874){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_30874);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e30880){var ex__29570__auto__ = e30880;
var statearr_30884_33298 = state_30874;
(statearr_30884_33298[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_30874[(4)]))){
var statearr_30885_33299 = state_30874;
(statearr_30885_33299[(1)] = cljs.core.first((state_30874[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33300 = state_30874;
state_30874 = G__33300;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29567__auto__ = function(state_30874){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29567__auto____1.call(this,state_30874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29567__auto____0;
cljs$core$async$transduce_$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29567__auto____1;
return cljs$core$async$transduce_$_state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_30889 = f__30145__auto__();
(statearr_30889[(6)] = c__30144__auto__);

return statearr_30889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));

return c__30144__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30902 = arguments.length;
switch (G__30902) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_30935){
var state_val_30936 = (state_30935[(1)]);
if((state_val_30936 === (7))){
var inst_30910 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
var statearr_30943_33302 = state_30935__$1;
(statearr_30943_33302[(2)] = inst_30910);

(statearr_30943_33302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (1))){
var inst_30903 = cljs.core.seq(coll);
var inst_30904 = inst_30903;
var state_30935__$1 = (function (){var statearr_30952 = state_30935;
(statearr_30952[(7)] = inst_30904);

return statearr_30952;
})();
var statearr_30953_33303 = state_30935__$1;
(statearr_30953_33303[(2)] = null);

(statearr_30953_33303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (4))){
var inst_30904 = (state_30935[(7)]);
var inst_30908 = cljs.core.first(inst_30904);
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30935__$1,(7),ch,inst_30908);
} else {
if((state_val_30936 === (13))){
var inst_30928 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
var statearr_30958_33307 = state_30935__$1;
(statearr_30958_33307[(2)] = inst_30928);

(statearr_30958_33307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (6))){
var inst_30913 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
if(cljs.core.truth_(inst_30913)){
var statearr_30961_33308 = state_30935__$1;
(statearr_30961_33308[(1)] = (8));

} else {
var statearr_30962_33309 = state_30935__$1;
(statearr_30962_33309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (3))){
var inst_30932 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30935__$1,inst_30932);
} else {
if((state_val_30936 === (12))){
var state_30935__$1 = state_30935;
var statearr_30968_33310 = state_30935__$1;
(statearr_30968_33310[(2)] = null);

(statearr_30968_33310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (2))){
var inst_30904 = (state_30935[(7)]);
var state_30935__$1 = state_30935;
if(cljs.core.truth_(inst_30904)){
var statearr_30969_33311 = state_30935__$1;
(statearr_30969_33311[(1)] = (4));

} else {
var statearr_30970_33312 = state_30935__$1;
(statearr_30970_33312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (11))){
var inst_30924 = cljs.core.async.close_BANG_(ch);
var state_30935__$1 = state_30935;
var statearr_30971_33313 = state_30935__$1;
(statearr_30971_33313[(2)] = inst_30924);

(statearr_30971_33313[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (9))){
var state_30935__$1 = state_30935;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30972_33314 = state_30935__$1;
(statearr_30972_33314[(1)] = (11));

} else {
var statearr_30973_33317 = state_30935__$1;
(statearr_30973_33317[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (5))){
var inst_30904 = (state_30935[(7)]);
var state_30935__$1 = state_30935;
var statearr_30978_33342 = state_30935__$1;
(statearr_30978_33342[(2)] = inst_30904);

(statearr_30978_33342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (10))){
var inst_30930 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
var statearr_30980_33343 = state_30935__$1;
(statearr_30980_33343[(2)] = inst_30930);

(statearr_30980_33343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (8))){
var inst_30904 = (state_30935[(7)]);
var inst_30915 = cljs.core.next(inst_30904);
var inst_30904__$1 = inst_30915;
var state_30935__$1 = (function (){var statearr_30981 = state_30935;
(statearr_30981[(7)] = inst_30904__$1);

return statearr_30981;
})();
var statearr_30982_33344 = state_30935__$1;
(statearr_30982_33344[(2)] = null);

(statearr_30982_33344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_30983 = [null,null,null,null,null,null,null,null];
(statearr_30983[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_30983[(1)] = (1));

return statearr_30983;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_30935){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_30935);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e30984){var ex__29570__auto__ = e30984;
var statearr_30985_33345 = state_30935;
(statearr_30985_33345[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_30935[(4)]))){
var statearr_30986_33346 = state_30935;
(statearr_30986_33346[(1)] = cljs.core.first((state_30935[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33347 = state_30935;
state_30935 = G__33347;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_30935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_30935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_30992 = f__30145__auto__();
(statearr_30992[(6)] = c__30144__auto__);

return statearr_30992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));

return c__30144__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31004 = arguments.length;
switch (G__31004) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33355 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33355(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33357 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33357(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33361 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33361(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33362 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33362(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31022 = (function (ch,cs,meta31023){
this.ch = ch;
this.cs = cs;
this.meta31023 = meta31023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31024,meta31023__$1){
var self__ = this;
var _31024__$1 = this;
return (new cljs.core.async.t_cljs$core$async31022(self__.ch,self__.cs,meta31023__$1));
}));

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31024){
var self__ = this;
var _31024__$1 = this;
return self__.meta31023;
}));

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31023","meta31023",-1707964722,null)], null);
}));

(cljs.core.async.t_cljs$core$async31022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31022");

(cljs.core.async.t_cljs$core$async31022.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31022.
 */
cljs.core.async.__GT_t_cljs$core$async31022 = (function cljs$core$async$__GT_t_cljs$core$async31022(ch,cs,meta31023){
return (new cljs.core.async.t_cljs$core$async31022(ch,cs,meta31023));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async31022(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30144__auto___33367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_31188){
var state_val_31189 = (state_31188[(1)]);
if((state_val_31189 === (7))){
var inst_31184 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31190_33368 = state_31188__$1;
(statearr_31190_33368[(2)] = inst_31184);

(statearr_31190_33368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (20))){
var inst_31088 = (state_31188[(7)]);
var inst_31100 = cljs.core.first(inst_31088);
var inst_31101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31100,(0),null);
var inst_31102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31100,(1),null);
var state_31188__$1 = (function (){var statearr_31191 = state_31188;
(statearr_31191[(8)] = inst_31101);

return statearr_31191;
})();
if(cljs.core.truth_(inst_31102)){
var statearr_31192_33370 = state_31188__$1;
(statearr_31192_33370[(1)] = (22));

} else {
var statearr_31193_33372 = state_31188__$1;
(statearr_31193_33372[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (27))){
var inst_31137 = (state_31188[(9)]);
var inst_31130 = (state_31188[(10)]);
var inst_31036 = (state_31188[(11)]);
var inst_31132 = (state_31188[(12)]);
var inst_31137__$1 = cljs.core._nth(inst_31130,inst_31132);
var inst_31138 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31137__$1,inst_31036,done);
var state_31188__$1 = (function (){var statearr_31194 = state_31188;
(statearr_31194[(9)] = inst_31137__$1);

return statearr_31194;
})();
if(cljs.core.truth_(inst_31138)){
var statearr_31195_33373 = state_31188__$1;
(statearr_31195_33373[(1)] = (30));

} else {
var statearr_31196_33374 = state_31188__$1;
(statearr_31196_33374[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (1))){
var state_31188__$1 = state_31188;
var statearr_31197_33375 = state_31188__$1;
(statearr_31197_33375[(2)] = null);

(statearr_31197_33375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (24))){
var inst_31088 = (state_31188[(7)]);
var inst_31107 = (state_31188[(2)]);
var inst_31108 = cljs.core.next(inst_31088);
var inst_31053 = inst_31108;
var inst_31054 = null;
var inst_31055 = (0);
var inst_31056 = (0);
var state_31188__$1 = (function (){var statearr_31198 = state_31188;
(statearr_31198[(13)] = inst_31107);

(statearr_31198[(14)] = inst_31053);

(statearr_31198[(15)] = inst_31056);

(statearr_31198[(16)] = inst_31055);

(statearr_31198[(17)] = inst_31054);

return statearr_31198;
})();
var statearr_31199_33378 = state_31188__$1;
(statearr_31199_33378[(2)] = null);

(statearr_31199_33378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (39))){
var state_31188__$1 = state_31188;
var statearr_31203_33379 = state_31188__$1;
(statearr_31203_33379[(2)] = null);

(statearr_31203_33379[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (4))){
var inst_31036 = (state_31188[(11)]);
var inst_31036__$1 = (state_31188[(2)]);
var inst_31041 = (inst_31036__$1 == null);
var state_31188__$1 = (function (){var statearr_31204 = state_31188;
(statearr_31204[(11)] = inst_31036__$1);

return statearr_31204;
})();
if(cljs.core.truth_(inst_31041)){
var statearr_31205_33380 = state_31188__$1;
(statearr_31205_33380[(1)] = (5));

} else {
var statearr_31206_33381 = state_31188__$1;
(statearr_31206_33381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (15))){
var inst_31053 = (state_31188[(14)]);
var inst_31056 = (state_31188[(15)]);
var inst_31055 = (state_31188[(16)]);
var inst_31054 = (state_31188[(17)]);
var inst_31083 = (state_31188[(2)]);
var inst_31084 = (inst_31056 + (1));
var tmp31200 = inst_31053;
var tmp31201 = inst_31055;
var tmp31202 = inst_31054;
var inst_31053__$1 = tmp31200;
var inst_31054__$1 = tmp31202;
var inst_31055__$1 = tmp31201;
var inst_31056__$1 = inst_31084;
var state_31188__$1 = (function (){var statearr_31207 = state_31188;
(statearr_31207[(18)] = inst_31083);

(statearr_31207[(14)] = inst_31053__$1);

(statearr_31207[(15)] = inst_31056__$1);

(statearr_31207[(16)] = inst_31055__$1);

(statearr_31207[(17)] = inst_31054__$1);

return statearr_31207;
})();
var statearr_31208_33382 = state_31188__$1;
(statearr_31208_33382[(2)] = null);

(statearr_31208_33382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (21))){
var inst_31111 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31240_33383 = state_31188__$1;
(statearr_31240_33383[(2)] = inst_31111);

(statearr_31240_33383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (31))){
var inst_31137 = (state_31188[(9)]);
var inst_31141 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31137);
var state_31188__$1 = state_31188;
var statearr_31245_33384 = state_31188__$1;
(statearr_31245_33384[(2)] = inst_31141);

(statearr_31245_33384[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (32))){
var inst_31129 = (state_31188[(19)]);
var inst_31130 = (state_31188[(10)]);
var inst_31132 = (state_31188[(12)]);
var inst_31131 = (state_31188[(20)]);
var inst_31143 = (state_31188[(2)]);
var inst_31144 = (inst_31132 + (1));
var tmp31209 = inst_31129;
var tmp31210 = inst_31130;
var tmp31211 = inst_31131;
var inst_31129__$1 = tmp31209;
var inst_31130__$1 = tmp31210;
var inst_31131__$1 = tmp31211;
var inst_31132__$1 = inst_31144;
var state_31188__$1 = (function (){var statearr_31246 = state_31188;
(statearr_31246[(19)] = inst_31129__$1);

(statearr_31246[(21)] = inst_31143);

(statearr_31246[(10)] = inst_31130__$1);

(statearr_31246[(12)] = inst_31132__$1);

(statearr_31246[(20)] = inst_31131__$1);

return statearr_31246;
})();
var statearr_31247_33387 = state_31188__$1;
(statearr_31247_33387[(2)] = null);

(statearr_31247_33387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (40))){
var inst_31156 = (state_31188[(22)]);
var inst_31160 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31156);
var state_31188__$1 = state_31188;
var statearr_31248_33388 = state_31188__$1;
(statearr_31248_33388[(2)] = inst_31160);

(statearr_31248_33388[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (33))){
var inst_31147 = (state_31188[(23)]);
var inst_31149 = cljs.core.chunked_seq_QMARK_(inst_31147);
var state_31188__$1 = state_31188;
if(inst_31149){
var statearr_31249_33389 = state_31188__$1;
(statearr_31249_33389[(1)] = (36));

} else {
var statearr_31250_33390 = state_31188__$1;
(statearr_31250_33390[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (13))){
var inst_31073 = (state_31188[(24)]);
var inst_31080 = cljs.core.async.close_BANG_(inst_31073);
var state_31188__$1 = state_31188;
var statearr_31251_33391 = state_31188__$1;
(statearr_31251_33391[(2)] = inst_31080);

(statearr_31251_33391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (22))){
var inst_31101 = (state_31188[(8)]);
var inst_31104 = cljs.core.async.close_BANG_(inst_31101);
var state_31188__$1 = state_31188;
var statearr_31254_33392 = state_31188__$1;
(statearr_31254_33392[(2)] = inst_31104);

(statearr_31254_33392[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (36))){
var inst_31147 = (state_31188[(23)]);
var inst_31151 = cljs.core.chunk_first(inst_31147);
var inst_31152 = cljs.core.chunk_rest(inst_31147);
var inst_31153 = cljs.core.count(inst_31151);
var inst_31129 = inst_31152;
var inst_31130 = inst_31151;
var inst_31131 = inst_31153;
var inst_31132 = (0);
var state_31188__$1 = (function (){var statearr_31255 = state_31188;
(statearr_31255[(19)] = inst_31129);

(statearr_31255[(10)] = inst_31130);

(statearr_31255[(12)] = inst_31132);

(statearr_31255[(20)] = inst_31131);

return statearr_31255;
})();
var statearr_31256_33395 = state_31188__$1;
(statearr_31256_33395[(2)] = null);

(statearr_31256_33395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (41))){
var inst_31147 = (state_31188[(23)]);
var inst_31162 = (state_31188[(2)]);
var inst_31163 = cljs.core.next(inst_31147);
var inst_31129 = inst_31163;
var inst_31130 = null;
var inst_31131 = (0);
var inst_31132 = (0);
var state_31188__$1 = (function (){var statearr_31257 = state_31188;
(statearr_31257[(25)] = inst_31162);

(statearr_31257[(19)] = inst_31129);

(statearr_31257[(10)] = inst_31130);

(statearr_31257[(12)] = inst_31132);

(statearr_31257[(20)] = inst_31131);

return statearr_31257;
})();
var statearr_31258_33396 = state_31188__$1;
(statearr_31258_33396[(2)] = null);

(statearr_31258_33396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (43))){
var state_31188__$1 = state_31188;
var statearr_31259_33397 = state_31188__$1;
(statearr_31259_33397[(2)] = null);

(statearr_31259_33397[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (29))){
var inst_31171 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31260_33398 = state_31188__$1;
(statearr_31260_33398[(2)] = inst_31171);

(statearr_31260_33398[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (44))){
var inst_31181 = (state_31188[(2)]);
var state_31188__$1 = (function (){var statearr_31261 = state_31188;
(statearr_31261[(26)] = inst_31181);

return statearr_31261;
})();
var statearr_31262_33399 = state_31188__$1;
(statearr_31262_33399[(2)] = null);

(statearr_31262_33399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (6))){
var inst_31121 = (state_31188[(27)]);
var inst_31120 = cljs.core.deref(cs);
var inst_31121__$1 = cljs.core.keys(inst_31120);
var inst_31122 = cljs.core.count(inst_31121__$1);
var inst_31123 = cljs.core.reset_BANG_(dctr,inst_31122);
var inst_31128 = cljs.core.seq(inst_31121__$1);
var inst_31129 = inst_31128;
var inst_31130 = null;
var inst_31131 = (0);
var inst_31132 = (0);
var state_31188__$1 = (function (){var statearr_31263 = state_31188;
(statearr_31263[(19)] = inst_31129);

(statearr_31263[(28)] = inst_31123);

(statearr_31263[(10)] = inst_31130);

(statearr_31263[(12)] = inst_31132);

(statearr_31263[(27)] = inst_31121__$1);

(statearr_31263[(20)] = inst_31131);

return statearr_31263;
})();
var statearr_31264_33400 = state_31188__$1;
(statearr_31264_33400[(2)] = null);

(statearr_31264_33400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (28))){
var inst_31129 = (state_31188[(19)]);
var inst_31147 = (state_31188[(23)]);
var inst_31147__$1 = cljs.core.seq(inst_31129);
var state_31188__$1 = (function (){var statearr_31265 = state_31188;
(statearr_31265[(23)] = inst_31147__$1);

return statearr_31265;
})();
if(inst_31147__$1){
var statearr_31266_33401 = state_31188__$1;
(statearr_31266_33401[(1)] = (33));

} else {
var statearr_31267_33402 = state_31188__$1;
(statearr_31267_33402[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (25))){
var inst_31132 = (state_31188[(12)]);
var inst_31131 = (state_31188[(20)]);
var inst_31134 = (inst_31132 < inst_31131);
var inst_31135 = inst_31134;
var state_31188__$1 = state_31188;
if(cljs.core.truth_(inst_31135)){
var statearr_31268_33403 = state_31188__$1;
(statearr_31268_33403[(1)] = (27));

} else {
var statearr_31269_33404 = state_31188__$1;
(statearr_31269_33404[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (34))){
var state_31188__$1 = state_31188;
var statearr_31272_33405 = state_31188__$1;
(statearr_31272_33405[(2)] = null);

(statearr_31272_33405[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (17))){
var state_31188__$1 = state_31188;
var statearr_31274_33406 = state_31188__$1;
(statearr_31274_33406[(2)] = null);

(statearr_31274_33406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (3))){
var inst_31186 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31188__$1,inst_31186);
} else {
if((state_val_31189 === (12))){
var inst_31116 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31283_33409 = state_31188__$1;
(statearr_31283_33409[(2)] = inst_31116);

(statearr_31283_33409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (2))){
var state_31188__$1 = state_31188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31188__$1,(4),ch);
} else {
if((state_val_31189 === (23))){
var state_31188__$1 = state_31188;
var statearr_31289_33414 = state_31188__$1;
(statearr_31289_33414[(2)] = null);

(statearr_31289_33414[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (35))){
var inst_31169 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31290_33415 = state_31188__$1;
(statearr_31290_33415[(2)] = inst_31169);

(statearr_31290_33415[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (19))){
var inst_31088 = (state_31188[(7)]);
var inst_31092 = cljs.core.chunk_first(inst_31088);
var inst_31093 = cljs.core.chunk_rest(inst_31088);
var inst_31094 = cljs.core.count(inst_31092);
var inst_31053 = inst_31093;
var inst_31054 = inst_31092;
var inst_31055 = inst_31094;
var inst_31056 = (0);
var state_31188__$1 = (function (){var statearr_31294 = state_31188;
(statearr_31294[(14)] = inst_31053);

(statearr_31294[(15)] = inst_31056);

(statearr_31294[(16)] = inst_31055);

(statearr_31294[(17)] = inst_31054);

return statearr_31294;
})();
var statearr_31295_33416 = state_31188__$1;
(statearr_31295_33416[(2)] = null);

(statearr_31295_33416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (11))){
var inst_31053 = (state_31188[(14)]);
var inst_31088 = (state_31188[(7)]);
var inst_31088__$1 = cljs.core.seq(inst_31053);
var state_31188__$1 = (function (){var statearr_31296 = state_31188;
(statearr_31296[(7)] = inst_31088__$1);

return statearr_31296;
})();
if(inst_31088__$1){
var statearr_31297_33417 = state_31188__$1;
(statearr_31297_33417[(1)] = (16));

} else {
var statearr_31300_33418 = state_31188__$1;
(statearr_31300_33418[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (9))){
var inst_31118 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31302_33419 = state_31188__$1;
(statearr_31302_33419[(2)] = inst_31118);

(statearr_31302_33419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (5))){
var inst_31051 = cljs.core.deref(cs);
var inst_31052 = cljs.core.seq(inst_31051);
var inst_31053 = inst_31052;
var inst_31054 = null;
var inst_31055 = (0);
var inst_31056 = (0);
var state_31188__$1 = (function (){var statearr_31304 = state_31188;
(statearr_31304[(14)] = inst_31053);

(statearr_31304[(15)] = inst_31056);

(statearr_31304[(16)] = inst_31055);

(statearr_31304[(17)] = inst_31054);

return statearr_31304;
})();
var statearr_31305_33420 = state_31188__$1;
(statearr_31305_33420[(2)] = null);

(statearr_31305_33420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (14))){
var state_31188__$1 = state_31188;
var statearr_31308_33421 = state_31188__$1;
(statearr_31308_33421[(2)] = null);

(statearr_31308_33421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (45))){
var inst_31178 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31309_33422 = state_31188__$1;
(statearr_31309_33422[(2)] = inst_31178);

(statearr_31309_33422[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (26))){
var inst_31121 = (state_31188[(27)]);
var inst_31173 = (state_31188[(2)]);
var inst_31175 = cljs.core.seq(inst_31121);
var state_31188__$1 = (function (){var statearr_31311 = state_31188;
(statearr_31311[(29)] = inst_31173);

return statearr_31311;
})();
if(inst_31175){
var statearr_31312_33424 = state_31188__$1;
(statearr_31312_33424[(1)] = (42));

} else {
var statearr_31313_33425 = state_31188__$1;
(statearr_31313_33425[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (16))){
var inst_31088 = (state_31188[(7)]);
var inst_31090 = cljs.core.chunked_seq_QMARK_(inst_31088);
var state_31188__$1 = state_31188;
if(inst_31090){
var statearr_31314_33426 = state_31188__$1;
(statearr_31314_33426[(1)] = (19));

} else {
var statearr_31315_33427 = state_31188__$1;
(statearr_31315_33427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (38))){
var inst_31166 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31316_33432 = state_31188__$1;
(statearr_31316_33432[(2)] = inst_31166);

(statearr_31316_33432[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (30))){
var state_31188__$1 = state_31188;
var statearr_31317_33433 = state_31188__$1;
(statearr_31317_33433[(2)] = null);

(statearr_31317_33433[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (10))){
var inst_31056 = (state_31188[(15)]);
var inst_31054 = (state_31188[(17)]);
var inst_31069 = cljs.core._nth(inst_31054,inst_31056);
var inst_31073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31069,(0),null);
var inst_31078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31069,(1),null);
var state_31188__$1 = (function (){var statearr_31320 = state_31188;
(statearr_31320[(24)] = inst_31073);

return statearr_31320;
})();
if(cljs.core.truth_(inst_31078)){
var statearr_31321_33435 = state_31188__$1;
(statearr_31321_33435[(1)] = (13));

} else {
var statearr_31322_33436 = state_31188__$1;
(statearr_31322_33436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (18))){
var inst_31114 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31323_33437 = state_31188__$1;
(statearr_31323_33437[(2)] = inst_31114);

(statearr_31323_33437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (42))){
var state_31188__$1 = state_31188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31188__$1,(45),dchan);
} else {
if((state_val_31189 === (37))){
var inst_31147 = (state_31188[(23)]);
var inst_31036 = (state_31188[(11)]);
var inst_31156 = (state_31188[(22)]);
var inst_31156__$1 = cljs.core.first(inst_31147);
var inst_31157 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31156__$1,inst_31036,done);
var state_31188__$1 = (function (){var statearr_31324 = state_31188;
(statearr_31324[(22)] = inst_31156__$1);

return statearr_31324;
})();
if(cljs.core.truth_(inst_31157)){
var statearr_31325_33438 = state_31188__$1;
(statearr_31325_33438[(1)] = (39));

} else {
var statearr_31326_33439 = state_31188__$1;
(statearr_31326_33439[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (8))){
var inst_31056 = (state_31188[(15)]);
var inst_31055 = (state_31188[(16)]);
var inst_31062 = (inst_31056 < inst_31055);
var inst_31063 = inst_31062;
var state_31188__$1 = state_31188;
if(cljs.core.truth_(inst_31063)){
var statearr_31327_33440 = state_31188__$1;
(statearr_31327_33440[(1)] = (10));

} else {
var statearr_31328_33441 = state_31188__$1;
(statearr_31328_33441[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29567__auto__ = null;
var cljs$core$async$mult_$_state_machine__29567__auto____0 = (function (){
var statearr_31332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31332[(0)] = cljs$core$async$mult_$_state_machine__29567__auto__);

(statearr_31332[(1)] = (1));

return statearr_31332;
});
var cljs$core$async$mult_$_state_machine__29567__auto____1 = (function (state_31188){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_31188);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e31333){var ex__29570__auto__ = e31333;
var statearr_31334_33442 = state_31188;
(statearr_31334_33442[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_31188[(4)]))){
var statearr_31335_33443 = state_31188;
(statearr_31335_33443[(1)] = cljs.core.first((state_31188[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33444 = state_31188;
state_31188 = G__33444;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29567__auto__ = function(state_31188){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29567__auto____1.call(this,state_31188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29567__auto____0;
cljs$core$async$mult_$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29567__auto____1;
return cljs$core$async$mult_$_state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_31336 = f__30145__auto__();
(statearr_31336[(6)] = c__30144__auto___33367);

return statearr_31336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31340 = arguments.length;
switch (G__31340) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33450 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33450(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33451 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33451(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33452 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33452(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33454 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33454(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33455 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33455(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33460 = arguments.length;
var i__5770__auto___33461 = (0);
while(true){
if((i__5770__auto___33461 < len__5769__auto___33460)){
args__5775__auto__.push((arguments[i__5770__auto___33461]));

var G__33462 = (i__5770__auto___33461 + (1));
i__5770__auto___33461 = G__33462;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31354){
var map__31355 = p__31354;
var map__31355__$1 = cljs.core.__destructure_map(map__31355);
var opts = map__31355__$1;
var statearr_31357_33468 = state;
(statearr_31357_33468[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31358_33470 = state;
(statearr_31358_33470[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_31359_33471 = state;
(statearr_31359_33471[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31348){
var G__31349 = cljs.core.first(seq31348);
var seq31348__$1 = cljs.core.next(seq31348);
var G__31350 = cljs.core.first(seq31348__$1);
var seq31348__$2 = cljs.core.next(seq31348__$1);
var G__31351 = cljs.core.first(seq31348__$2);
var seq31348__$3 = cljs.core.next(seq31348__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31349,G__31350,G__31351,seq31348__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31369 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31370){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31370 = meta31370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31371,meta31370__$1){
var self__ = this;
var _31371__$1 = this;
return (new cljs.core.async.t_cljs$core$async31369(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31370__$1));
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31371){
var self__ = this;
var _31371__$1 = this;
return self__.meta31370;
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31370","meta31370",1271185802,null)], null);
}));

(cljs.core.async.t_cljs$core$async31369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31369");

(cljs.core.async.t_cljs$core$async31369.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31369.
 */
cljs.core.async.__GT_t_cljs$core$async31369 = (function cljs$core$async$__GT_t_cljs$core$async31369(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31370){
return (new cljs.core.async.t_cljs$core$async31369(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31370));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async31369(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30144__auto___33482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_31494){
var state_val_31495 = (state_31494[(1)]);
if((state_val_31495 === (7))){
var inst_31443 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31443)){
var statearr_31504_33483 = state_31494__$1;
(statearr_31504_33483[(1)] = (8));

} else {
var statearr_31505_33484 = state_31494__$1;
(statearr_31505_33484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (20))){
var inst_31430 = (state_31494[(7)]);
var state_31494__$1 = state_31494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31494__$1,(23),out,inst_31430);
} else {
if((state_val_31495 === (1))){
var inst_31401 = calc_state();
var inst_31406 = cljs.core.__destructure_map(inst_31401);
var inst_31407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31406,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31406,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31406,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31412 = inst_31401;
var state_31494__$1 = (function (){var statearr_31510 = state_31494;
(statearr_31510[(8)] = inst_31410);

(statearr_31510[(9)] = inst_31407);

(statearr_31510[(10)] = inst_31412);

(statearr_31510[(11)] = inst_31411);

return statearr_31510;
})();
var statearr_31513_33485 = state_31494__$1;
(statearr_31513_33485[(2)] = null);

(statearr_31513_33485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (24))){
var inst_31417 = (state_31494[(12)]);
var inst_31412 = inst_31417;
var state_31494__$1 = (function (){var statearr_31516 = state_31494;
(statearr_31516[(10)] = inst_31412);

return statearr_31516;
})();
var statearr_31517_33489 = state_31494__$1;
(statearr_31517_33489[(2)] = null);

(statearr_31517_33489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (4))){
var inst_31430 = (state_31494[(7)]);
var inst_31436 = (state_31494[(13)]);
var inst_31427 = (state_31494[(2)]);
var inst_31430__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31427,(0),null);
var inst_31431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31427,(1),null);
var inst_31436__$1 = (inst_31430__$1 == null);
var state_31494__$1 = (function (){var statearr_31521 = state_31494;
(statearr_31521[(14)] = inst_31431);

(statearr_31521[(7)] = inst_31430__$1);

(statearr_31521[(13)] = inst_31436__$1);

return statearr_31521;
})();
if(cljs.core.truth_(inst_31436__$1)){
var statearr_31523_33490 = state_31494__$1;
(statearr_31523_33490[(1)] = (5));

} else {
var statearr_31524_33491 = state_31494__$1;
(statearr_31524_33491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (15))){
var inst_31419 = (state_31494[(15)]);
var inst_31457 = (state_31494[(16)]);
var inst_31457__$1 = cljs.core.empty_QMARK_(inst_31419);
var state_31494__$1 = (function (){var statearr_31527 = state_31494;
(statearr_31527[(16)] = inst_31457__$1);

return statearr_31527;
})();
if(inst_31457__$1){
var statearr_31528_33496 = state_31494__$1;
(statearr_31528_33496[(1)] = (17));

} else {
var statearr_31529_33497 = state_31494__$1;
(statearr_31529_33497[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (21))){
var inst_31417 = (state_31494[(12)]);
var inst_31412 = inst_31417;
var state_31494__$1 = (function (){var statearr_31530 = state_31494;
(statearr_31530[(10)] = inst_31412);

return statearr_31530;
})();
var statearr_31531_33498 = state_31494__$1;
(statearr_31531_33498[(2)] = null);

(statearr_31531_33498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (13))){
var inst_31450 = (state_31494[(2)]);
var inst_31451 = calc_state();
var inst_31412 = inst_31451;
var state_31494__$1 = (function (){var statearr_31532 = state_31494;
(statearr_31532[(17)] = inst_31450);

(statearr_31532[(10)] = inst_31412);

return statearr_31532;
})();
var statearr_31533_33502 = state_31494__$1;
(statearr_31533_33502[(2)] = null);

(statearr_31533_33502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (22))){
var inst_31483 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31534_33503 = state_31494__$1;
(statearr_31534_33503[(2)] = inst_31483);

(statearr_31534_33503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (6))){
var inst_31431 = (state_31494[(14)]);
var inst_31440 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31431,change);
var state_31494__$1 = state_31494;
var statearr_31538_33504 = state_31494__$1;
(statearr_31538_33504[(2)] = inst_31440);

(statearr_31538_33504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (25))){
var state_31494__$1 = state_31494;
var statearr_31539_33505 = state_31494__$1;
(statearr_31539_33505[(2)] = null);

(statearr_31539_33505[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (17))){
var inst_31420 = (state_31494[(18)]);
var inst_31431 = (state_31494[(14)]);
var inst_31460 = (inst_31420.cljs$core$IFn$_invoke$arity$1 ? inst_31420.cljs$core$IFn$_invoke$arity$1(inst_31431) : inst_31420.call(null,inst_31431));
var inst_31461 = cljs.core.not(inst_31460);
var state_31494__$1 = state_31494;
var statearr_31544_33506 = state_31494__$1;
(statearr_31544_33506[(2)] = inst_31461);

(statearr_31544_33506[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (3))){
var inst_31487 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31494__$1,inst_31487);
} else {
if((state_val_31495 === (12))){
var state_31494__$1 = state_31494;
var statearr_31551_33510 = state_31494__$1;
(statearr_31551_33510[(2)] = null);

(statearr_31551_33510[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (2))){
var inst_31417 = (state_31494[(12)]);
var inst_31412 = (state_31494[(10)]);
var inst_31417__$1 = cljs.core.__destructure_map(inst_31412);
var inst_31419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31417__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31417__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31417__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31494__$1 = (function (){var statearr_31555 = state_31494;
(statearr_31555[(15)] = inst_31419);

(statearr_31555[(12)] = inst_31417__$1);

(statearr_31555[(18)] = inst_31420);

return statearr_31555;
})();
return cljs.core.async.ioc_alts_BANG_(state_31494__$1,(4),inst_31421);
} else {
if((state_val_31495 === (23))){
var inst_31472 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31472)){
var statearr_31561_33514 = state_31494__$1;
(statearr_31561_33514[(1)] = (24));

} else {
var statearr_31564_33516 = state_31494__$1;
(statearr_31564_33516[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (19))){
var inst_31464 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31566_33517 = state_31494__$1;
(statearr_31566_33517[(2)] = inst_31464);

(statearr_31566_33517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (11))){
var inst_31431 = (state_31494[(14)]);
var inst_31447 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31431);
var state_31494__$1 = state_31494;
var statearr_31568_33518 = state_31494__$1;
(statearr_31568_33518[(2)] = inst_31447);

(statearr_31568_33518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (9))){
var inst_31419 = (state_31494[(15)]);
var inst_31431 = (state_31494[(14)]);
var inst_31454 = (state_31494[(19)]);
var inst_31454__$1 = (inst_31419.cljs$core$IFn$_invoke$arity$1 ? inst_31419.cljs$core$IFn$_invoke$arity$1(inst_31431) : inst_31419.call(null,inst_31431));
var state_31494__$1 = (function (){var statearr_31570 = state_31494;
(statearr_31570[(19)] = inst_31454__$1);

return statearr_31570;
})();
if(cljs.core.truth_(inst_31454__$1)){
var statearr_31571_33522 = state_31494__$1;
(statearr_31571_33522[(1)] = (14));

} else {
var statearr_31572_33523 = state_31494__$1;
(statearr_31572_33523[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (5))){
var inst_31436 = (state_31494[(13)]);
var state_31494__$1 = state_31494;
var statearr_31577_33524 = state_31494__$1;
(statearr_31577_33524[(2)] = inst_31436);

(statearr_31577_33524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (14))){
var inst_31454 = (state_31494[(19)]);
var state_31494__$1 = state_31494;
var statearr_31579_33528 = state_31494__$1;
(statearr_31579_33528[(2)] = inst_31454);

(statearr_31579_33528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (26))){
var inst_31479 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31589_33529 = state_31494__$1;
(statearr_31589_33529[(2)] = inst_31479);

(statearr_31589_33529[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (16))){
var inst_31466 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31466)){
var statearr_31590_33530 = state_31494__$1;
(statearr_31590_33530[(1)] = (20));

} else {
var statearr_31591_33531 = state_31494__$1;
(statearr_31591_33531[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (10))){
var inst_31485 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31593_33532 = state_31494__$1;
(statearr_31593_33532[(2)] = inst_31485);

(statearr_31593_33532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (18))){
var inst_31457 = (state_31494[(16)]);
var state_31494__$1 = state_31494;
var statearr_31594_33533 = state_31494__$1;
(statearr_31594_33533[(2)] = inst_31457);

(statearr_31594_33533[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (8))){
var inst_31430 = (state_31494[(7)]);
var inst_31445 = (inst_31430 == null);
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31445)){
var statearr_31599_33534 = state_31494__$1;
(statearr_31599_33534[(1)] = (11));

} else {
var statearr_31602_33535 = state_31494__$1;
(statearr_31602_33535[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29567__auto__ = null;
var cljs$core$async$mix_$_state_machine__29567__auto____0 = (function (){
var statearr_31612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31612[(0)] = cljs$core$async$mix_$_state_machine__29567__auto__);

(statearr_31612[(1)] = (1));

return statearr_31612;
});
var cljs$core$async$mix_$_state_machine__29567__auto____1 = (function (state_31494){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_31494);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e31615){var ex__29570__auto__ = e31615;
var statearr_31617_33549 = state_31494;
(statearr_31617_33549[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_31494[(4)]))){
var statearr_31620_33550 = state_31494;
(statearr_31620_33550[(1)] = cljs.core.first((state_31494[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33551 = state_31494;
state_31494 = G__33551;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29567__auto__ = function(state_31494){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29567__auto____1.call(this,state_31494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29567__auto____0;
cljs$core$async$mix_$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29567__auto____1;
return cljs$core$async$mix_$_state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_31625 = f__30145__auto__();
(statearr_31625[(6)] = c__30144__auto___33482);

return statearr_31625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33558 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33558(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33560 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33560(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33565 = (function() {
var G__33566 = null;
var G__33566__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33566__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33566 = function(p,v){
switch(arguments.length){
case 1:
return G__33566__1.call(this,p);
case 2:
return G__33566__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33566.cljs$core$IFn$_invoke$arity$1 = G__33566__1;
G__33566.cljs$core$IFn$_invoke$arity$2 = G__33566__2;
return G__33566;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31686 = arguments.length;
switch (G__31686) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33565(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33565(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31757 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31758){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31758 = meta31758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31759,meta31758__$1){
var self__ = this;
var _31759__$1 = this;
return (new cljs.core.async.t_cljs$core$async31757(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31758__$1));
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31759){
var self__ = this;
var _31759__$1 = this;
return self__.meta31758;
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31758","meta31758",-1030476480,null)], null);
}));

(cljs.core.async.t_cljs$core$async31757.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31757");

(cljs.core.async.t_cljs$core$async31757.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31757");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31757.
 */
cljs.core.async.__GT_t_cljs$core$async31757 = (function cljs$core$async$__GT_t_cljs$core$async31757(ch,topic_fn,buf_fn,mults,ensure_mult,meta31758){
return (new cljs.core.async.t_cljs$core$async31757(ch,topic_fn,buf_fn,mults,ensure_mult,meta31758));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31735 = arguments.length;
switch (G__31735) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31717_SHARP_){
if(cljs.core.truth_((p1__31717_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31717_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31717_SHARP_.call(null,topic)))){
return p1__31717_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31717_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async31757(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30144__auto___33590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_31871){
var state_val_31872 = (state_31871[(1)]);
if((state_val_31872 === (7))){
var inst_31863 = (state_31871[(2)]);
var state_31871__$1 = state_31871;
var statearr_31875_33591 = state_31871__$1;
(statearr_31875_33591[(2)] = inst_31863);

(statearr_31875_33591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (20))){
var state_31871__$1 = state_31871;
var statearr_31876_33592 = state_31871__$1;
(statearr_31876_33592[(2)] = null);

(statearr_31876_33592[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (1))){
var state_31871__$1 = state_31871;
var statearr_31879_33593 = state_31871__$1;
(statearr_31879_33593[(2)] = null);

(statearr_31879_33593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (24))){
var inst_31844 = (state_31871[(7)]);
var inst_31855 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31844);
var state_31871__$1 = state_31871;
var statearr_31883_33594 = state_31871__$1;
(statearr_31883_33594[(2)] = inst_31855);

(statearr_31883_33594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (4))){
var inst_31790 = (state_31871[(8)]);
var inst_31790__$1 = (state_31871[(2)]);
var inst_31792 = (inst_31790__$1 == null);
var state_31871__$1 = (function (){var statearr_31884 = state_31871;
(statearr_31884[(8)] = inst_31790__$1);

return statearr_31884;
})();
if(cljs.core.truth_(inst_31792)){
var statearr_31885_33595 = state_31871__$1;
(statearr_31885_33595[(1)] = (5));

} else {
var statearr_31886_33596 = state_31871__$1;
(statearr_31886_33596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (15))){
var inst_31838 = (state_31871[(2)]);
var state_31871__$1 = state_31871;
var statearr_31888_33597 = state_31871__$1;
(statearr_31888_33597[(2)] = inst_31838);

(statearr_31888_33597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (21))){
var inst_31860 = (state_31871[(2)]);
var state_31871__$1 = (function (){var statearr_31891 = state_31871;
(statearr_31891[(9)] = inst_31860);

return statearr_31891;
})();
var statearr_31894_33602 = state_31871__$1;
(statearr_31894_33602[(2)] = null);

(statearr_31894_33602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (13))){
var inst_31818 = (state_31871[(10)]);
var inst_31821 = cljs.core.chunked_seq_QMARK_(inst_31818);
var state_31871__$1 = state_31871;
if(inst_31821){
var statearr_31897_33610 = state_31871__$1;
(statearr_31897_33610[(1)] = (16));

} else {
var statearr_31902_33611 = state_31871__$1;
(statearr_31902_33611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (22))){
var inst_31852 = (state_31871[(2)]);
var state_31871__$1 = state_31871;
if(cljs.core.truth_(inst_31852)){
var statearr_31903_33613 = state_31871__$1;
(statearr_31903_33613[(1)] = (23));

} else {
var statearr_31905_33614 = state_31871__$1;
(statearr_31905_33614[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (6))){
var inst_31846 = (state_31871[(11)]);
var inst_31844 = (state_31871[(7)]);
var inst_31790 = (state_31871[(8)]);
var inst_31844__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31790) : topic_fn.call(null,inst_31790));
var inst_31845 = cljs.core.deref(mults);
var inst_31846__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31845,inst_31844__$1);
var state_31871__$1 = (function (){var statearr_31906 = state_31871;
(statearr_31906[(11)] = inst_31846__$1);

(statearr_31906[(7)] = inst_31844__$1);

return statearr_31906;
})();
if(cljs.core.truth_(inst_31846__$1)){
var statearr_31907_33615 = state_31871__$1;
(statearr_31907_33615[(1)] = (19));

} else {
var statearr_31909_33616 = state_31871__$1;
(statearr_31909_33616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (25))){
var inst_31857 = (state_31871[(2)]);
var state_31871__$1 = state_31871;
var statearr_31910_33617 = state_31871__$1;
(statearr_31910_33617[(2)] = inst_31857);

(statearr_31910_33617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (17))){
var inst_31818 = (state_31871[(10)]);
var inst_31828 = cljs.core.first(inst_31818);
var inst_31829 = cljs.core.async.muxch_STAR_(inst_31828);
var inst_31830 = cljs.core.async.close_BANG_(inst_31829);
var inst_31832 = cljs.core.next(inst_31818);
var inst_31801 = inst_31832;
var inst_31802 = null;
var inst_31803 = (0);
var inst_31804 = (0);
var state_31871__$1 = (function (){var statearr_31911 = state_31871;
(statearr_31911[(12)] = inst_31802);

(statearr_31911[(13)] = inst_31801);

(statearr_31911[(14)] = inst_31803);

(statearr_31911[(15)] = inst_31804);

(statearr_31911[(16)] = inst_31830);

return statearr_31911;
})();
var statearr_31912_33618 = state_31871__$1;
(statearr_31912_33618[(2)] = null);

(statearr_31912_33618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (3))){
var inst_31867 = (state_31871[(2)]);
var state_31871__$1 = state_31871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31871__$1,inst_31867);
} else {
if((state_val_31872 === (12))){
var inst_31840 = (state_31871[(2)]);
var state_31871__$1 = state_31871;
var statearr_31913_33620 = state_31871__$1;
(statearr_31913_33620[(2)] = inst_31840);

(statearr_31913_33620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (2))){
var state_31871__$1 = state_31871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31871__$1,(4),ch);
} else {
if((state_val_31872 === (23))){
var state_31871__$1 = state_31871;
var statearr_31923_33624 = state_31871__$1;
(statearr_31923_33624[(2)] = null);

(statearr_31923_33624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (19))){
var inst_31846 = (state_31871[(11)]);
var inst_31790 = (state_31871[(8)]);
var inst_31850 = cljs.core.async.muxch_STAR_(inst_31846);
var state_31871__$1 = state_31871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31871__$1,(22),inst_31850,inst_31790);
} else {
if((state_val_31872 === (11))){
var inst_31801 = (state_31871[(13)]);
var inst_31818 = (state_31871[(10)]);
var inst_31818__$1 = cljs.core.seq(inst_31801);
var state_31871__$1 = (function (){var statearr_31929 = state_31871;
(statearr_31929[(10)] = inst_31818__$1);

return statearr_31929;
})();
if(inst_31818__$1){
var statearr_31930_33625 = state_31871__$1;
(statearr_31930_33625[(1)] = (13));

} else {
var statearr_31931_33626 = state_31871__$1;
(statearr_31931_33626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (9))){
var inst_31842 = (state_31871[(2)]);
var state_31871__$1 = state_31871;
var statearr_31933_33631 = state_31871__$1;
(statearr_31933_33631[(2)] = inst_31842);

(statearr_31933_33631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (5))){
var inst_31798 = cljs.core.deref(mults);
var inst_31799 = cljs.core.vals(inst_31798);
var inst_31800 = cljs.core.seq(inst_31799);
var inst_31801 = inst_31800;
var inst_31802 = null;
var inst_31803 = (0);
var inst_31804 = (0);
var state_31871__$1 = (function (){var statearr_31945 = state_31871;
(statearr_31945[(12)] = inst_31802);

(statearr_31945[(13)] = inst_31801);

(statearr_31945[(14)] = inst_31803);

(statearr_31945[(15)] = inst_31804);

return statearr_31945;
})();
var statearr_31950_33635 = state_31871__$1;
(statearr_31950_33635[(2)] = null);

(statearr_31950_33635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (14))){
var state_31871__$1 = state_31871;
var statearr_31954_33636 = state_31871__$1;
(statearr_31954_33636[(2)] = null);

(statearr_31954_33636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (16))){
var inst_31818 = (state_31871[(10)]);
var inst_31823 = cljs.core.chunk_first(inst_31818);
var inst_31824 = cljs.core.chunk_rest(inst_31818);
var inst_31825 = cljs.core.count(inst_31823);
var inst_31801 = inst_31824;
var inst_31802 = inst_31823;
var inst_31803 = inst_31825;
var inst_31804 = (0);
var state_31871__$1 = (function (){var statearr_31955 = state_31871;
(statearr_31955[(12)] = inst_31802);

(statearr_31955[(13)] = inst_31801);

(statearr_31955[(14)] = inst_31803);

(statearr_31955[(15)] = inst_31804);

return statearr_31955;
})();
var statearr_31959_33637 = state_31871__$1;
(statearr_31959_33637[(2)] = null);

(statearr_31959_33637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (10))){
var inst_31802 = (state_31871[(12)]);
var inst_31801 = (state_31871[(13)]);
var inst_31803 = (state_31871[(14)]);
var inst_31804 = (state_31871[(15)]);
var inst_31810 = cljs.core._nth(inst_31802,inst_31804);
var inst_31812 = cljs.core.async.muxch_STAR_(inst_31810);
var inst_31813 = cljs.core.async.close_BANG_(inst_31812);
var inst_31814 = (inst_31804 + (1));
var tmp31951 = inst_31802;
var tmp31952 = inst_31801;
var tmp31953 = inst_31803;
var inst_31801__$1 = tmp31952;
var inst_31802__$1 = tmp31951;
var inst_31803__$1 = tmp31953;
var inst_31804__$1 = inst_31814;
var state_31871__$1 = (function (){var statearr_31964 = state_31871;
(statearr_31964[(17)] = inst_31813);

(statearr_31964[(12)] = inst_31802__$1);

(statearr_31964[(13)] = inst_31801__$1);

(statearr_31964[(14)] = inst_31803__$1);

(statearr_31964[(15)] = inst_31804__$1);

return statearr_31964;
})();
var statearr_31965_33643 = state_31871__$1;
(statearr_31965_33643[(2)] = null);

(statearr_31965_33643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (18))){
var inst_31835 = (state_31871[(2)]);
var state_31871__$1 = state_31871;
var statearr_31966_33644 = state_31871__$1;
(statearr_31966_33644[(2)] = inst_31835);

(statearr_31966_33644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31872 === (8))){
var inst_31803 = (state_31871[(14)]);
var inst_31804 = (state_31871[(15)]);
var inst_31807 = (inst_31804 < inst_31803);
var inst_31808 = inst_31807;
var state_31871__$1 = state_31871;
if(cljs.core.truth_(inst_31808)){
var statearr_31968_33645 = state_31871__$1;
(statearr_31968_33645[(1)] = (10));

} else {
var statearr_31969_33646 = state_31871__$1;
(statearr_31969_33646[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_31970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31970[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_31970[(1)] = (1));

return statearr_31970;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_31871){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_31871);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e31974){var ex__29570__auto__ = e31974;
var statearr_31975_33647 = state_31871;
(statearr_31975_33647[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_31871[(4)]))){
var statearr_31977_33648 = state_31871;
(statearr_31977_33648[(1)] = cljs.core.first((state_31871[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33651 = state_31871;
state_31871 = G__33651;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_31871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_31871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_31978 = f__30145__auto__();
(statearr_31978[(6)] = c__30144__auto___33590);

return statearr_31978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31992 = arguments.length;
switch (G__31992) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32002 = arguments.length;
switch (G__32002) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32017 = arguments.length;
switch (G__32017) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30144__auto___33657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_32086){
var state_val_32087 = (state_32086[(1)]);
if((state_val_32087 === (7))){
var state_32086__$1 = state_32086;
var statearr_32089_33658 = state_32086__$1;
(statearr_32089_33658[(2)] = null);

(statearr_32089_33658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (1))){
var state_32086__$1 = state_32086;
var statearr_32090_33659 = state_32086__$1;
(statearr_32090_33659[(2)] = null);

(statearr_32090_33659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (4))){
var inst_32032 = (state_32086[(7)]);
var inst_32031 = (state_32086[(8)]);
var inst_32034 = (inst_32032 < inst_32031);
var state_32086__$1 = state_32086;
if(cljs.core.truth_(inst_32034)){
var statearr_32091_33660 = state_32086__$1;
(statearr_32091_33660[(1)] = (6));

} else {
var statearr_32092_33661 = state_32086__$1;
(statearr_32092_33661[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (15))){
var inst_32072 = (state_32086[(9)]);
var inst_32077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32072);
var state_32086__$1 = state_32086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32086__$1,(17),out,inst_32077);
} else {
if((state_val_32087 === (13))){
var inst_32072 = (state_32086[(9)]);
var inst_32072__$1 = (state_32086[(2)]);
var inst_32073 = cljs.core.some(cljs.core.nil_QMARK_,inst_32072__$1);
var state_32086__$1 = (function (){var statearr_32093 = state_32086;
(statearr_32093[(9)] = inst_32072__$1);

return statearr_32093;
})();
if(cljs.core.truth_(inst_32073)){
var statearr_32094_33663 = state_32086__$1;
(statearr_32094_33663[(1)] = (14));

} else {
var statearr_32095_33664 = state_32086__$1;
(statearr_32095_33664[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (6))){
var state_32086__$1 = state_32086;
var statearr_32097_33669 = state_32086__$1;
(statearr_32097_33669[(2)] = null);

(statearr_32097_33669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (17))){
var inst_32079 = (state_32086[(2)]);
var state_32086__$1 = (function (){var statearr_32100 = state_32086;
(statearr_32100[(10)] = inst_32079);

return statearr_32100;
})();
var statearr_32101_33677 = state_32086__$1;
(statearr_32101_33677[(2)] = null);

(statearr_32101_33677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (3))){
var inst_32084 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32086__$1,inst_32084);
} else {
if((state_val_32087 === (12))){
var _ = (function (){var statearr_32102 = state_32086;
(statearr_32102[(4)] = cljs.core.rest((state_32086[(4)])));

return statearr_32102;
})();
var state_32086__$1 = state_32086;
var ex32099 = (state_32086__$1[(2)]);
var statearr_32103_33682 = state_32086__$1;
(statearr_32103_33682[(5)] = ex32099);


if((ex32099 instanceof Object)){
var statearr_32104_33683 = state_32086__$1;
(statearr_32104_33683[(1)] = (11));

(statearr_32104_33683[(5)] = null);

} else {
throw ex32099;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (2))){
var inst_32030 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32031 = cnt;
var inst_32032 = (0);
var state_32086__$1 = (function (){var statearr_32106 = state_32086;
(statearr_32106[(7)] = inst_32032);

(statearr_32106[(11)] = inst_32030);

(statearr_32106[(8)] = inst_32031);

return statearr_32106;
})();
var statearr_32107_33700 = state_32086__$1;
(statearr_32107_33700[(2)] = null);

(statearr_32107_33700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (11))){
var inst_32051 = (state_32086[(2)]);
var inst_32052 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32086__$1 = (function (){var statearr_32108 = state_32086;
(statearr_32108[(12)] = inst_32051);

return statearr_32108;
})();
var statearr_32109_33704 = state_32086__$1;
(statearr_32109_33704[(2)] = inst_32052);

(statearr_32109_33704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (9))){
var inst_32032 = (state_32086[(7)]);
var _ = (function (){var statearr_32110 = state_32086;
(statearr_32110[(4)] = cljs.core.cons((12),(state_32086[(4)])));

return statearr_32110;
})();
var inst_32058 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32032) : chs__$1.call(null,inst_32032));
var inst_32059 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32032) : done.call(null,inst_32032));
var inst_32060 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32058,inst_32059);
var ___$1 = (function (){var statearr_32112 = state_32086;
(statearr_32112[(4)] = cljs.core.rest((state_32086[(4)])));

return statearr_32112;
})();
var state_32086__$1 = state_32086;
var statearr_32113_33705 = state_32086__$1;
(statearr_32113_33705[(2)] = inst_32060);

(statearr_32113_33705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (5))){
var inst_32070 = (state_32086[(2)]);
var state_32086__$1 = (function (){var statearr_32114 = state_32086;
(statearr_32114[(13)] = inst_32070);

return statearr_32114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32086__$1,(13),dchan);
} else {
if((state_val_32087 === (14))){
var inst_32075 = cljs.core.async.close_BANG_(out);
var state_32086__$1 = state_32086;
var statearr_32116_33709 = state_32086__$1;
(statearr_32116_33709[(2)] = inst_32075);

(statearr_32116_33709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (16))){
var inst_32082 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
var statearr_32117_33710 = state_32086__$1;
(statearr_32117_33710[(2)] = inst_32082);

(statearr_32117_33710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (10))){
var inst_32032 = (state_32086[(7)]);
var inst_32063 = (state_32086[(2)]);
var inst_32064 = (inst_32032 + (1));
var inst_32032__$1 = inst_32064;
var state_32086__$1 = (function (){var statearr_32121 = state_32086;
(statearr_32121[(7)] = inst_32032__$1);

(statearr_32121[(14)] = inst_32063);

return statearr_32121;
})();
var statearr_32122_33711 = state_32086__$1;
(statearr_32122_33711[(2)] = null);

(statearr_32122_33711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (8))){
var inst_32068 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
var statearr_32124_33712 = state_32086__$1;
(statearr_32124_33712[(2)] = inst_32068);

(statearr_32124_33712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_32125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32125[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_32125[(1)] = (1));

return statearr_32125;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_32086){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_32086);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e32126){var ex__29570__auto__ = e32126;
var statearr_32127_33713 = state_32086;
(statearr_32127_33713[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_32086[(4)]))){
var statearr_32128_33714 = state_32086;
(statearr_32128_33714[(1)] = cljs.core.first((state_32086[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33715 = state_32086;
state_32086 = G__33715;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_32086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_32086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_32129 = f__30145__auto__();
(statearr_32129[(6)] = c__30144__auto___33657);

return statearr_32129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32133 = arguments.length;
switch (G__32133) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30144__auto___33717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_32171){
var state_val_32172 = (state_32171[(1)]);
if((state_val_32172 === (7))){
var inst_32149 = (state_32171[(7)]);
var inst_32150 = (state_32171[(8)]);
var inst_32149__$1 = (state_32171[(2)]);
var inst_32150__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32149__$1,(0),null);
var inst_32152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32149__$1,(1),null);
var inst_32153 = (inst_32150__$1 == null);
var state_32171__$1 = (function (){var statearr_32175 = state_32171;
(statearr_32175[(7)] = inst_32149__$1);

(statearr_32175[(9)] = inst_32152);

(statearr_32175[(8)] = inst_32150__$1);

return statearr_32175;
})();
if(cljs.core.truth_(inst_32153)){
var statearr_32176_33718 = state_32171__$1;
(statearr_32176_33718[(1)] = (8));

} else {
var statearr_32177_33719 = state_32171__$1;
(statearr_32177_33719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (1))){
var inst_32134 = cljs.core.vec(chs);
var inst_32135 = inst_32134;
var state_32171__$1 = (function (){var statearr_32178 = state_32171;
(statearr_32178[(10)] = inst_32135);

return statearr_32178;
})();
var statearr_32179_33722 = state_32171__$1;
(statearr_32179_33722[(2)] = null);

(statearr_32179_33722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (4))){
var inst_32135 = (state_32171[(10)]);
var state_32171__$1 = state_32171;
return cljs.core.async.ioc_alts_BANG_(state_32171__$1,(7),inst_32135);
} else {
if((state_val_32172 === (6))){
var inst_32167 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
var statearr_32181_33723 = state_32171__$1;
(statearr_32181_33723[(2)] = inst_32167);

(statearr_32181_33723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (3))){
var inst_32169 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32171__$1,inst_32169);
} else {
if((state_val_32172 === (2))){
var inst_32135 = (state_32171[(10)]);
var inst_32142 = cljs.core.count(inst_32135);
var inst_32143 = (inst_32142 > (0));
var state_32171__$1 = state_32171;
if(cljs.core.truth_(inst_32143)){
var statearr_32189_33747 = state_32171__$1;
(statearr_32189_33747[(1)] = (4));

} else {
var statearr_32191_33748 = state_32171__$1;
(statearr_32191_33748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (11))){
var inst_32135 = (state_32171[(10)]);
var inst_32160 = (state_32171[(2)]);
var tmp32183 = inst_32135;
var inst_32135__$1 = tmp32183;
var state_32171__$1 = (function (){var statearr_32192 = state_32171;
(statearr_32192[(11)] = inst_32160);

(statearr_32192[(10)] = inst_32135__$1);

return statearr_32192;
})();
var statearr_32194_33749 = state_32171__$1;
(statearr_32194_33749[(2)] = null);

(statearr_32194_33749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (9))){
var inst_32150 = (state_32171[(8)]);
var state_32171__$1 = state_32171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32171__$1,(11),out,inst_32150);
} else {
if((state_val_32172 === (5))){
var inst_32165 = cljs.core.async.close_BANG_(out);
var state_32171__$1 = state_32171;
var statearr_32199_33750 = state_32171__$1;
(statearr_32199_33750[(2)] = inst_32165);

(statearr_32199_33750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (10))){
var inst_32163 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
var statearr_32200_33751 = state_32171__$1;
(statearr_32200_33751[(2)] = inst_32163);

(statearr_32200_33751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (8))){
var inst_32149 = (state_32171[(7)]);
var inst_32135 = (state_32171[(10)]);
var inst_32152 = (state_32171[(9)]);
var inst_32150 = (state_32171[(8)]);
var inst_32155 = (function (){var cs = inst_32135;
var vec__32145 = inst_32149;
var v = inst_32150;
var c = inst_32152;
return (function (p1__32131_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32131_SHARP_);
});
})();
var inst_32156 = cljs.core.filterv(inst_32155,inst_32135);
var inst_32135__$1 = inst_32156;
var state_32171__$1 = (function (){var statearr_32206 = state_32171;
(statearr_32206[(10)] = inst_32135__$1);

return statearr_32206;
})();
var statearr_32207_33758 = state_32171__$1;
(statearr_32207_33758[(2)] = null);

(statearr_32207_33758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_32210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32210[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_32210[(1)] = (1));

return statearr_32210;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_32171){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_32171);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e32211){var ex__29570__auto__ = e32211;
var statearr_32212_33760 = state_32171;
(statearr_32212_33760[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_32171[(4)]))){
var statearr_32213_33761 = state_32171;
(statearr_32213_33761[(1)] = cljs.core.first((state_32171[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33762 = state_32171;
state_32171 = G__33762;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_32171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_32171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_32215 = f__30145__auto__();
(statearr_32215[(6)] = c__30144__auto___33717);

return statearr_32215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32218 = arguments.length;
switch (G__32218) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30144__auto___33765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_32246){
var state_val_32247 = (state_32246[(1)]);
if((state_val_32247 === (7))){
var inst_32228 = (state_32246[(7)]);
var inst_32228__$1 = (state_32246[(2)]);
var inst_32229 = (inst_32228__$1 == null);
var inst_32230 = cljs.core.not(inst_32229);
var state_32246__$1 = (function (){var statearr_32249 = state_32246;
(statearr_32249[(7)] = inst_32228__$1);

return statearr_32249;
})();
if(inst_32230){
var statearr_32250_33766 = state_32246__$1;
(statearr_32250_33766[(1)] = (8));

} else {
var statearr_32251_33767 = state_32246__$1;
(statearr_32251_33767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (1))){
var inst_32222 = (0);
var state_32246__$1 = (function (){var statearr_32254 = state_32246;
(statearr_32254[(8)] = inst_32222);

return statearr_32254;
})();
var statearr_32258_33768 = state_32246__$1;
(statearr_32258_33768[(2)] = null);

(statearr_32258_33768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (4))){
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32246__$1,(7),ch);
} else {
if((state_val_32247 === (6))){
var inst_32241 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32260_33769 = state_32246__$1;
(statearr_32260_33769[(2)] = inst_32241);

(statearr_32260_33769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (3))){
var inst_32243 = (state_32246[(2)]);
var inst_32244 = cljs.core.async.close_BANG_(out);
var state_32246__$1 = (function (){var statearr_32263 = state_32246;
(statearr_32263[(9)] = inst_32243);

return statearr_32263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32246__$1,inst_32244);
} else {
if((state_val_32247 === (2))){
var inst_32222 = (state_32246[(8)]);
var inst_32224 = (inst_32222 < n);
var state_32246__$1 = state_32246;
if(cljs.core.truth_(inst_32224)){
var statearr_32265_33770 = state_32246__$1;
(statearr_32265_33770[(1)] = (4));

} else {
var statearr_32266_33771 = state_32246__$1;
(statearr_32266_33771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (11))){
var inst_32222 = (state_32246[(8)]);
var inst_32233 = (state_32246[(2)]);
var inst_32234 = (inst_32222 + (1));
var inst_32222__$1 = inst_32234;
var state_32246__$1 = (function (){var statearr_32267 = state_32246;
(statearr_32267[(10)] = inst_32233);

(statearr_32267[(8)] = inst_32222__$1);

return statearr_32267;
})();
var statearr_32268_33772 = state_32246__$1;
(statearr_32268_33772[(2)] = null);

(statearr_32268_33772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (9))){
var state_32246__$1 = state_32246;
var statearr_32269_33773 = state_32246__$1;
(statearr_32269_33773[(2)] = null);

(statearr_32269_33773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (5))){
var state_32246__$1 = state_32246;
var statearr_32272_33774 = state_32246__$1;
(statearr_32272_33774[(2)] = null);

(statearr_32272_33774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (10))){
var inst_32238 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32273_33775 = state_32246__$1;
(statearr_32273_33775[(2)] = inst_32238);

(statearr_32273_33775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (8))){
var inst_32228 = (state_32246[(7)]);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32246__$1,(11),out,inst_32228);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_32275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32275[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_32275[(1)] = (1));

return statearr_32275;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_32246){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_32246);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e32276){var ex__29570__auto__ = e32276;
var statearr_32278_33782 = state_32246;
(statearr_32278_33782[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_32246[(4)]))){
var statearr_32279_33784 = state_32246;
(statearr_32279_33784[(1)] = cljs.core.first((state_32246[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33785 = state_32246;
state_32246 = G__33785;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_32246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_32246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_32282 = f__30145__auto__();
(statearr_32282[(6)] = c__30144__auto___33765);

return statearr_32282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32315 = (function (f,ch,meta32288,_,fn1,meta32316){
this.f = f;
this.ch = ch;
this.meta32288 = meta32288;
this._ = _;
this.fn1 = fn1;
this.meta32316 = meta32316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32317,meta32316__$1){
var self__ = this;
var _32317__$1 = this;
return (new cljs.core.async.t_cljs$core$async32315(self__.f,self__.ch,self__.meta32288,self__._,self__.fn1,meta32316__$1));
}));

(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32317){
var self__ = this;
var _32317__$1 = this;
return self__.meta32316;
}));

(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32283_SHARP_){
var G__32351 = (((p1__32283_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32283_SHARP_) : self__.f.call(null,p1__32283_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32351) : f1.call(null,G__32351));
});
}));

(cljs.core.async.t_cljs$core$async32315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32288","meta32288",1948576753,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32287","cljs.core.async/t_cljs$core$async32287",1330143793,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32316","meta32316",-1593979183,null)], null);
}));

(cljs.core.async.t_cljs$core$async32315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32315");

(cljs.core.async.t_cljs$core$async32315.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32315.
 */
cljs.core.async.__GT_t_cljs$core$async32315 = (function cljs$core$async$__GT_t_cljs$core$async32315(f,ch,meta32288,_,fn1,meta32316){
return (new cljs.core.async.t_cljs$core$async32315(f,ch,meta32288,_,fn1,meta32316));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32287 = (function (f,ch,meta32288){
this.f = f;
this.ch = ch;
this.meta32288 = meta32288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32289,meta32288__$1){
var self__ = this;
var _32289__$1 = this;
return (new cljs.core.async.t_cljs$core$async32287(self__.f,self__.ch,meta32288__$1));
}));

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32289){
var self__ = this;
var _32289__$1 = this;
return self__.meta32288;
}));

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async32315(self__.f,self__.ch,self__.meta32288,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32358 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32358) : self__.f.call(null,G__32358));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32288","meta32288",1948576753,null)], null);
}));

(cljs.core.async.t_cljs$core$async32287.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32287");

(cljs.core.async.t_cljs$core$async32287.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32287");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32287.
 */
cljs.core.async.__GT_t_cljs$core$async32287 = (function cljs$core$async$__GT_t_cljs$core$async32287(f,ch,meta32288){
return (new cljs.core.async.t_cljs$core$async32287(f,ch,meta32288));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32287(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32360 = (function (f,ch,meta32361){
this.f = f;
this.ch = ch;
this.meta32361 = meta32361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32362,meta32361__$1){
var self__ = this;
var _32362__$1 = this;
return (new cljs.core.async.t_cljs$core$async32360(self__.f,self__.ch,meta32361__$1));
}));

(cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32362){
var self__ = this;
var _32362__$1 = this;
return self__.meta32361;
}));

(cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32361","meta32361",-39758409,null)], null);
}));

(cljs.core.async.t_cljs$core$async32360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32360");

(cljs.core.async.t_cljs$core$async32360.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32360.
 */
cljs.core.async.__GT_t_cljs$core$async32360 = (function cljs$core$async$__GT_t_cljs$core$async32360(f,ch,meta32361){
return (new cljs.core.async.t_cljs$core$async32360(f,ch,meta32361));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32360(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32380 = (function (p,ch,meta32381){
this.p = p;
this.ch = ch;
this.meta32381 = meta32381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32382,meta32381__$1){
var self__ = this;
var _32382__$1 = this;
return (new cljs.core.async.t_cljs$core$async32380(self__.p,self__.ch,meta32381__$1));
}));

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32382){
var self__ = this;
var _32382__$1 = this;
return self__.meta32381;
}));

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32381","meta32381",601996610,null)], null);
}));

(cljs.core.async.t_cljs$core$async32380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32380");

(cljs.core.async.t_cljs$core$async32380.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32380.
 */
cljs.core.async.__GT_t_cljs$core$async32380 = (function cljs$core$async$__GT_t_cljs$core$async32380(p,ch,meta32381){
return (new cljs.core.async.t_cljs$core$async32380(p,ch,meta32381));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async32380(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32397 = arguments.length;
switch (G__32397) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30144__auto___33800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_32425){
var state_val_32426 = (state_32425[(1)]);
if((state_val_32426 === (7))){
var inst_32421 = (state_32425[(2)]);
var state_32425__$1 = state_32425;
var statearr_32428_33804 = state_32425__$1;
(statearr_32428_33804[(2)] = inst_32421);

(statearr_32428_33804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (1))){
var state_32425__$1 = state_32425;
var statearr_32430_33805 = state_32425__$1;
(statearr_32430_33805[(2)] = null);

(statearr_32430_33805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (4))){
var inst_32403 = (state_32425[(7)]);
var inst_32403__$1 = (state_32425[(2)]);
var inst_32404 = (inst_32403__$1 == null);
var state_32425__$1 = (function (){var statearr_32431 = state_32425;
(statearr_32431[(7)] = inst_32403__$1);

return statearr_32431;
})();
if(cljs.core.truth_(inst_32404)){
var statearr_32432_33806 = state_32425__$1;
(statearr_32432_33806[(1)] = (5));

} else {
var statearr_32434_33807 = state_32425__$1;
(statearr_32434_33807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (6))){
var inst_32403 = (state_32425[(7)]);
var inst_32409 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32403) : p.call(null,inst_32403));
var state_32425__$1 = state_32425;
if(cljs.core.truth_(inst_32409)){
var statearr_32435_33808 = state_32425__$1;
(statearr_32435_33808[(1)] = (8));

} else {
var statearr_32436_33809 = state_32425__$1;
(statearr_32436_33809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (3))){
var inst_32423 = (state_32425[(2)]);
var state_32425__$1 = state_32425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32425__$1,inst_32423);
} else {
if((state_val_32426 === (2))){
var state_32425__$1 = state_32425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32425__$1,(4),ch);
} else {
if((state_val_32426 === (11))){
var inst_32412 = (state_32425[(2)]);
var state_32425__$1 = state_32425;
var statearr_32437_33810 = state_32425__$1;
(statearr_32437_33810[(2)] = inst_32412);

(statearr_32437_33810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (9))){
var state_32425__$1 = state_32425;
var statearr_32438_33811 = state_32425__$1;
(statearr_32438_33811[(2)] = null);

(statearr_32438_33811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (5))){
var inst_32406 = cljs.core.async.close_BANG_(out);
var state_32425__$1 = state_32425;
var statearr_32439_33812 = state_32425__$1;
(statearr_32439_33812[(2)] = inst_32406);

(statearr_32439_33812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (10))){
var inst_32418 = (state_32425[(2)]);
var state_32425__$1 = (function (){var statearr_32440 = state_32425;
(statearr_32440[(8)] = inst_32418);

return statearr_32440;
})();
var statearr_32441_33813 = state_32425__$1;
(statearr_32441_33813[(2)] = null);

(statearr_32441_33813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32426 === (8))){
var inst_32403 = (state_32425[(7)]);
var state_32425__$1 = state_32425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32425__$1,(11),out,inst_32403);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_32442 = [null,null,null,null,null,null,null,null,null];
(statearr_32442[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_32442[(1)] = (1));

return statearr_32442;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_32425){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_32425);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e32443){var ex__29570__auto__ = e32443;
var statearr_32444_33814 = state_32425;
(statearr_32444_33814[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_32425[(4)]))){
var statearr_32445_33815 = state_32425;
(statearr_32445_33815[(1)] = cljs.core.first((state_32425[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33816 = state_32425;
state_32425 = G__33816;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_32425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_32425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_32449 = f__30145__auto__();
(statearr_32449[(6)] = c__30144__auto___33800);

return statearr_32449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32453 = arguments.length;
switch (G__32453) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_32532){
var state_val_32533 = (state_32532[(1)]);
if((state_val_32533 === (7))){
var inst_32526 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32538_33818 = state_32532__$1;
(statearr_32538_33818[(2)] = inst_32526);

(statearr_32538_33818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (20))){
var inst_32491 = (state_32532[(7)]);
var inst_32506 = (state_32532[(2)]);
var inst_32507 = cljs.core.next(inst_32491);
var inst_32476 = inst_32507;
var inst_32477 = null;
var inst_32478 = (0);
var inst_32479 = (0);
var state_32532__$1 = (function (){var statearr_32545 = state_32532;
(statearr_32545[(8)] = inst_32478);

(statearr_32545[(9)] = inst_32479);

(statearr_32545[(10)] = inst_32506);

(statearr_32545[(11)] = inst_32477);

(statearr_32545[(12)] = inst_32476);

return statearr_32545;
})();
var statearr_32547_33819 = state_32532__$1;
(statearr_32547_33819[(2)] = null);

(statearr_32547_33819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (1))){
var state_32532__$1 = state_32532;
var statearr_32550_33820 = state_32532__$1;
(statearr_32550_33820[(2)] = null);

(statearr_32550_33820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (4))){
var inst_32465 = (state_32532[(13)]);
var inst_32465__$1 = (state_32532[(2)]);
var inst_32466 = (inst_32465__$1 == null);
var state_32532__$1 = (function (){var statearr_32551 = state_32532;
(statearr_32551[(13)] = inst_32465__$1);

return statearr_32551;
})();
if(cljs.core.truth_(inst_32466)){
var statearr_32553_33821 = state_32532__$1;
(statearr_32553_33821[(1)] = (5));

} else {
var statearr_32555_33831 = state_32532__$1;
(statearr_32555_33831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (15))){
var state_32532__$1 = state_32532;
var statearr_32560_33832 = state_32532__$1;
(statearr_32560_33832[(2)] = null);

(statearr_32560_33832[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (21))){
var state_32532__$1 = state_32532;
var statearr_32562_33833 = state_32532__$1;
(statearr_32562_33833[(2)] = null);

(statearr_32562_33833[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (13))){
var inst_32478 = (state_32532[(8)]);
var inst_32479 = (state_32532[(9)]);
var inst_32477 = (state_32532[(11)]);
var inst_32476 = (state_32532[(12)]);
var inst_32487 = (state_32532[(2)]);
var inst_32488 = (inst_32479 + (1));
var tmp32557 = inst_32478;
var tmp32558 = inst_32477;
var tmp32559 = inst_32476;
var inst_32476__$1 = tmp32559;
var inst_32477__$1 = tmp32558;
var inst_32478__$1 = tmp32557;
var inst_32479__$1 = inst_32488;
var state_32532__$1 = (function (){var statearr_32567 = state_32532;
(statearr_32567[(8)] = inst_32478__$1);

(statearr_32567[(14)] = inst_32487);

(statearr_32567[(9)] = inst_32479__$1);

(statearr_32567[(11)] = inst_32477__$1);

(statearr_32567[(12)] = inst_32476__$1);

return statearr_32567;
})();
var statearr_32568_33838 = state_32532__$1;
(statearr_32568_33838[(2)] = null);

(statearr_32568_33838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (22))){
var state_32532__$1 = state_32532;
var statearr_32575_33839 = state_32532__$1;
(statearr_32575_33839[(2)] = null);

(statearr_32575_33839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (6))){
var inst_32465 = (state_32532[(13)]);
var inst_32474 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32465) : f.call(null,inst_32465));
var inst_32475 = cljs.core.seq(inst_32474);
var inst_32476 = inst_32475;
var inst_32477 = null;
var inst_32478 = (0);
var inst_32479 = (0);
var state_32532__$1 = (function (){var statearr_32579 = state_32532;
(statearr_32579[(8)] = inst_32478);

(statearr_32579[(9)] = inst_32479);

(statearr_32579[(11)] = inst_32477);

(statearr_32579[(12)] = inst_32476);

return statearr_32579;
})();
var statearr_32580_33842 = state_32532__$1;
(statearr_32580_33842[(2)] = null);

(statearr_32580_33842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (17))){
var inst_32491 = (state_32532[(7)]);
var inst_32497 = cljs.core.chunk_first(inst_32491);
var inst_32500 = cljs.core.chunk_rest(inst_32491);
var inst_32501 = cljs.core.count(inst_32497);
var inst_32476 = inst_32500;
var inst_32477 = inst_32497;
var inst_32478 = inst_32501;
var inst_32479 = (0);
var state_32532__$1 = (function (){var statearr_32583 = state_32532;
(statearr_32583[(8)] = inst_32478);

(statearr_32583[(9)] = inst_32479);

(statearr_32583[(11)] = inst_32477);

(statearr_32583[(12)] = inst_32476);

return statearr_32583;
})();
var statearr_32584_33843 = state_32532__$1;
(statearr_32584_33843[(2)] = null);

(statearr_32584_33843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (3))){
var inst_32528 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32532__$1,inst_32528);
} else {
if((state_val_32533 === (12))){
var inst_32516 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32589_33844 = state_32532__$1;
(statearr_32589_33844[(2)] = inst_32516);

(statearr_32589_33844[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (2))){
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32532__$1,(4),in$);
} else {
if((state_val_32533 === (23))){
var inst_32524 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32592_33846 = state_32532__$1;
(statearr_32592_33846[(2)] = inst_32524);

(statearr_32592_33846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (19))){
var inst_32510 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32595_33848 = state_32532__$1;
(statearr_32595_33848[(2)] = inst_32510);

(statearr_32595_33848[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (11))){
var inst_32491 = (state_32532[(7)]);
var inst_32476 = (state_32532[(12)]);
var inst_32491__$1 = cljs.core.seq(inst_32476);
var state_32532__$1 = (function (){var statearr_32598 = state_32532;
(statearr_32598[(7)] = inst_32491__$1);

return statearr_32598;
})();
if(inst_32491__$1){
var statearr_32599_33849 = state_32532__$1;
(statearr_32599_33849[(1)] = (14));

} else {
var statearr_32600_33850 = state_32532__$1;
(statearr_32600_33850[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (9))){
var inst_32518 = (state_32532[(2)]);
var inst_32519 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32532__$1 = (function (){var statearr_32603 = state_32532;
(statearr_32603[(15)] = inst_32518);

return statearr_32603;
})();
if(cljs.core.truth_(inst_32519)){
var statearr_32605_33851 = state_32532__$1;
(statearr_32605_33851[(1)] = (21));

} else {
var statearr_32606_33852 = state_32532__$1;
(statearr_32606_33852[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (5))){
var inst_32468 = cljs.core.async.close_BANG_(out);
var state_32532__$1 = state_32532;
var statearr_32608_33853 = state_32532__$1;
(statearr_32608_33853[(2)] = inst_32468);

(statearr_32608_33853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (14))){
var inst_32491 = (state_32532[(7)]);
var inst_32494 = cljs.core.chunked_seq_QMARK_(inst_32491);
var state_32532__$1 = state_32532;
if(inst_32494){
var statearr_32610_33854 = state_32532__$1;
(statearr_32610_33854[(1)] = (17));

} else {
var statearr_32611_33855 = state_32532__$1;
(statearr_32611_33855[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (16))){
var inst_32513 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32615_33856 = state_32532__$1;
(statearr_32615_33856[(2)] = inst_32513);

(statearr_32615_33856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (10))){
var inst_32479 = (state_32532[(9)]);
var inst_32477 = (state_32532[(11)]);
var inst_32484 = cljs.core._nth(inst_32477,inst_32479);
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32532__$1,(13),out,inst_32484);
} else {
if((state_val_32533 === (18))){
var inst_32491 = (state_32532[(7)]);
var inst_32504 = cljs.core.first(inst_32491);
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32532__$1,(20),out,inst_32504);
} else {
if((state_val_32533 === (8))){
var inst_32478 = (state_32532[(8)]);
var inst_32479 = (state_32532[(9)]);
var inst_32481 = (inst_32479 < inst_32478);
var inst_32482 = inst_32481;
var state_32532__$1 = state_32532;
if(cljs.core.truth_(inst_32482)){
var statearr_32621_33860 = state_32532__$1;
(statearr_32621_33860[(1)] = (10));

} else {
var statearr_32622_33861 = state_32532__$1;
(statearr_32622_33861[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29567__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29567__auto____0 = (function (){
var statearr_32629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32629[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29567__auto__);

(statearr_32629[(1)] = (1));

return statearr_32629;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29567__auto____1 = (function (state_32532){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_32532);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e32630){var ex__29570__auto__ = e32630;
var statearr_32632_33863 = state_32532;
(statearr_32632_33863[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_32532[(4)]))){
var statearr_32635_33865 = state_32532;
(statearr_32635_33865[(1)] = cljs.core.first((state_32532[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33866 = state_32532;
state_32532 = G__33866;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29567__auto__ = function(state_32532){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29567__auto____1.call(this,state_32532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29567__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29567__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_32638 = f__30145__auto__();
(statearr_32638[(6)] = c__30144__auto__);

return statearr_32638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));

return c__30144__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32644 = arguments.length;
switch (G__32644) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32652 = arguments.length;
switch (G__32652) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32662 = arguments.length;
switch (G__32662) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30144__auto___33875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_32692){
var state_val_32693 = (state_32692[(1)]);
if((state_val_32693 === (7))){
var inst_32686 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32699_33876 = state_32692__$1;
(statearr_32699_33876[(2)] = inst_32686);

(statearr_32699_33876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (1))){
var inst_32667 = null;
var state_32692__$1 = (function (){var statearr_32702 = state_32692;
(statearr_32702[(7)] = inst_32667);

return statearr_32702;
})();
var statearr_32704_33877 = state_32692__$1;
(statearr_32704_33877[(2)] = null);

(statearr_32704_33877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (4))){
var inst_32671 = (state_32692[(8)]);
var inst_32671__$1 = (state_32692[(2)]);
var inst_32672 = (inst_32671__$1 == null);
var inst_32673 = cljs.core.not(inst_32672);
var state_32692__$1 = (function (){var statearr_32709 = state_32692;
(statearr_32709[(8)] = inst_32671__$1);

return statearr_32709;
})();
if(inst_32673){
var statearr_32711_33878 = state_32692__$1;
(statearr_32711_33878[(1)] = (5));

} else {
var statearr_32712_33879 = state_32692__$1;
(statearr_32712_33879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (6))){
var state_32692__$1 = state_32692;
var statearr_32713_33880 = state_32692__$1;
(statearr_32713_33880[(2)] = null);

(statearr_32713_33880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (3))){
var inst_32688 = (state_32692[(2)]);
var inst_32689 = cljs.core.async.close_BANG_(out);
var state_32692__$1 = (function (){var statearr_32716 = state_32692;
(statearr_32716[(9)] = inst_32688);

return statearr_32716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32692__$1,inst_32689);
} else {
if((state_val_32693 === (2))){
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32692__$1,(4),ch);
} else {
if((state_val_32693 === (11))){
var inst_32671 = (state_32692[(8)]);
var inst_32680 = (state_32692[(2)]);
var inst_32667 = inst_32671;
var state_32692__$1 = (function (){var statearr_32718 = state_32692;
(statearr_32718[(7)] = inst_32667);

(statearr_32718[(10)] = inst_32680);

return statearr_32718;
})();
var statearr_32719_33881 = state_32692__$1;
(statearr_32719_33881[(2)] = null);

(statearr_32719_33881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (9))){
var inst_32671 = (state_32692[(8)]);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32692__$1,(11),out,inst_32671);
} else {
if((state_val_32693 === (5))){
var inst_32667 = (state_32692[(7)]);
var inst_32671 = (state_32692[(8)]);
var inst_32675 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32671,inst_32667);
var state_32692__$1 = state_32692;
if(inst_32675){
var statearr_32722_33882 = state_32692__$1;
(statearr_32722_33882[(1)] = (8));

} else {
var statearr_32725_33883 = state_32692__$1;
(statearr_32725_33883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (10))){
var inst_32683 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32727_33884 = state_32692__$1;
(statearr_32727_33884[(2)] = inst_32683);

(statearr_32727_33884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (8))){
var inst_32667 = (state_32692[(7)]);
var tmp32721 = inst_32667;
var inst_32667__$1 = tmp32721;
var state_32692__$1 = (function (){var statearr_32728 = state_32692;
(statearr_32728[(7)] = inst_32667__$1);

return statearr_32728;
})();
var statearr_32729_33886 = state_32692__$1;
(statearr_32729_33886[(2)] = null);

(statearr_32729_33886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_32734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32734[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_32734[(1)] = (1));

return statearr_32734;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_32692){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_32692);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e32735){var ex__29570__auto__ = e32735;
var statearr_32736_33887 = state_32692;
(statearr_32736_33887[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_32692[(4)]))){
var statearr_32738_33888 = state_32692;
(statearr_32738_33888[(1)] = cljs.core.first((state_32692[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33889 = state_32692;
state_32692 = G__33889;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_32692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_32692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_32741 = f__30145__auto__();
(statearr_32741[(6)] = c__30144__auto___33875);

return statearr_32741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32745 = arguments.length;
switch (G__32745) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30144__auto___33891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_32808){
var state_val_32809 = (state_32808[(1)]);
if((state_val_32809 === (7))){
var inst_32804 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
var statearr_32810_33895 = state_32808__$1;
(statearr_32810_33895[(2)] = inst_32804);

(statearr_32810_33895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (1))){
var inst_32752 = (new Array(n));
var inst_32754 = inst_32752;
var inst_32755 = (0);
var state_32808__$1 = (function (){var statearr_32811 = state_32808;
(statearr_32811[(7)] = inst_32755);

(statearr_32811[(8)] = inst_32754);

return statearr_32811;
})();
var statearr_32812_33900 = state_32808__$1;
(statearr_32812_33900[(2)] = null);

(statearr_32812_33900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (4))){
var inst_32758 = (state_32808[(9)]);
var inst_32758__$1 = (state_32808[(2)]);
var inst_32759 = (inst_32758__$1 == null);
var inst_32760 = cljs.core.not(inst_32759);
var state_32808__$1 = (function (){var statearr_32813 = state_32808;
(statearr_32813[(9)] = inst_32758__$1);

return statearr_32813;
})();
if(inst_32760){
var statearr_32817_33901 = state_32808__$1;
(statearr_32817_33901[(1)] = (5));

} else {
var statearr_32818_33902 = state_32808__$1;
(statearr_32818_33902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (15))){
var inst_32781 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
var statearr_32821_33903 = state_32808__$1;
(statearr_32821_33903[(2)] = inst_32781);

(statearr_32821_33903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (13))){
var state_32808__$1 = state_32808;
var statearr_32823_33904 = state_32808__$1;
(statearr_32823_33904[(2)] = null);

(statearr_32823_33904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (6))){
var inst_32755 = (state_32808[(7)]);
var inst_32777 = (inst_32755 > (0));
var state_32808__$1 = state_32808;
if(cljs.core.truth_(inst_32777)){
var statearr_32825_33905 = state_32808__$1;
(statearr_32825_33905[(1)] = (12));

} else {
var statearr_32826_33906 = state_32808__$1;
(statearr_32826_33906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (3))){
var inst_32806 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32808__$1,inst_32806);
} else {
if((state_val_32809 === (12))){
var inst_32754 = (state_32808[(8)]);
var inst_32779 = cljs.core.vec(inst_32754);
var state_32808__$1 = state_32808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32808__$1,(15),out,inst_32779);
} else {
if((state_val_32809 === (2))){
var state_32808__$1 = state_32808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32808__$1,(4),ch);
} else {
if((state_val_32809 === (11))){
var inst_32771 = (state_32808[(2)]);
var inst_32772 = (new Array(n));
var inst_32754 = inst_32772;
var inst_32755 = (0);
var state_32808__$1 = (function (){var statearr_32830 = state_32808;
(statearr_32830[(7)] = inst_32755);

(statearr_32830[(10)] = inst_32771);

(statearr_32830[(8)] = inst_32754);

return statearr_32830;
})();
var statearr_32832_33907 = state_32808__$1;
(statearr_32832_33907[(2)] = null);

(statearr_32832_33907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (9))){
var inst_32754 = (state_32808[(8)]);
var inst_32769 = cljs.core.vec(inst_32754);
var state_32808__$1 = state_32808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32808__$1,(11),out,inst_32769);
} else {
if((state_val_32809 === (5))){
var inst_32755 = (state_32808[(7)]);
var inst_32763 = (state_32808[(11)]);
var inst_32754 = (state_32808[(8)]);
var inst_32758 = (state_32808[(9)]);
var inst_32762 = (inst_32754[inst_32755] = inst_32758);
var inst_32763__$1 = (inst_32755 + (1));
var inst_32764 = (inst_32763__$1 < n);
var state_32808__$1 = (function (){var statearr_32837 = state_32808;
(statearr_32837[(11)] = inst_32763__$1);

(statearr_32837[(12)] = inst_32762);

return statearr_32837;
})();
if(cljs.core.truth_(inst_32764)){
var statearr_32838_33908 = state_32808__$1;
(statearr_32838_33908[(1)] = (8));

} else {
var statearr_32839_33909 = state_32808__$1;
(statearr_32839_33909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (14))){
var inst_32784 = (state_32808[(2)]);
var inst_32802 = cljs.core.async.close_BANG_(out);
var state_32808__$1 = (function (){var statearr_32844 = state_32808;
(statearr_32844[(13)] = inst_32784);

return statearr_32844;
})();
var statearr_32845_33910 = state_32808__$1;
(statearr_32845_33910[(2)] = inst_32802);

(statearr_32845_33910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (10))){
var inst_32775 = (state_32808[(2)]);
var state_32808__$1 = state_32808;
var statearr_32848_33911 = state_32808__$1;
(statearr_32848_33911[(2)] = inst_32775);

(statearr_32848_33911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32809 === (8))){
var inst_32763 = (state_32808[(11)]);
var inst_32754 = (state_32808[(8)]);
var tmp32841 = inst_32754;
var inst_32754__$1 = tmp32841;
var inst_32755 = inst_32763;
var state_32808__$1 = (function (){var statearr_32851 = state_32808;
(statearr_32851[(7)] = inst_32755);

(statearr_32851[(8)] = inst_32754__$1);

return statearr_32851;
})();
var statearr_32853_33912 = state_32808__$1;
(statearr_32853_33912[(2)] = null);

(statearr_32853_33912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_32855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32855[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_32855[(1)] = (1));

return statearr_32855;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_32808){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_32808);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e32858){var ex__29570__auto__ = e32858;
var statearr_32860_33913 = state_32808;
(statearr_32860_33913[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_32808[(4)]))){
var statearr_32861_33914 = state_32808;
(statearr_32861_33914[(1)] = cljs.core.first((state_32808[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33919 = state_32808;
state_32808 = G__33919;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_32808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_32808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_32863 = f__30145__auto__();
(statearr_32863[(6)] = c__30144__auto___33891);

return statearr_32863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32875 = arguments.length;
switch (G__32875) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30144__auto___33924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30145__auto__ = (function (){var switch__29566__auto__ = (function (state_32933){
var state_val_32934 = (state_32933[(1)]);
if((state_val_32934 === (7))){
var inst_32928 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
var statearr_32940_33925 = state_32933__$1;
(statearr_32940_33925[(2)] = inst_32928);

(statearr_32940_33925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (1))){
var inst_32881 = [];
var inst_32883 = inst_32881;
var inst_32884 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32933__$1 = (function (){var statearr_32943 = state_32933;
(statearr_32943[(7)] = inst_32883);

(statearr_32943[(8)] = inst_32884);

return statearr_32943;
})();
var statearr_32945_33926 = state_32933__$1;
(statearr_32945_33926[(2)] = null);

(statearr_32945_33926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (4))){
var inst_32889 = (state_32933[(9)]);
var inst_32889__$1 = (state_32933[(2)]);
var inst_32890 = (inst_32889__$1 == null);
var inst_32891 = cljs.core.not(inst_32890);
var state_32933__$1 = (function (){var statearr_32949 = state_32933;
(statearr_32949[(9)] = inst_32889__$1);

return statearr_32949;
})();
if(inst_32891){
var statearr_32953_33936 = state_32933__$1;
(statearr_32953_33936[(1)] = (5));

} else {
var statearr_32954_33937 = state_32933__$1;
(statearr_32954_33937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (15))){
var inst_32883 = (state_32933[(7)]);
var inst_32920 = cljs.core.vec(inst_32883);
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32933__$1,(18),out,inst_32920);
} else {
if((state_val_32934 === (13))){
var inst_32915 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
var statearr_32955_33938 = state_32933__$1;
(statearr_32955_33938[(2)] = inst_32915);

(statearr_32955_33938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (6))){
var inst_32883 = (state_32933[(7)]);
var inst_32917 = inst_32883.length;
var inst_32918 = (inst_32917 > (0));
var state_32933__$1 = state_32933;
if(cljs.core.truth_(inst_32918)){
var statearr_32956_33942 = state_32933__$1;
(statearr_32956_33942[(1)] = (15));

} else {
var statearr_32957_33943 = state_32933__$1;
(statearr_32957_33943[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (17))){
var inst_32925 = (state_32933[(2)]);
var inst_32926 = cljs.core.async.close_BANG_(out);
var state_32933__$1 = (function (){var statearr_32958 = state_32933;
(statearr_32958[(10)] = inst_32925);

return statearr_32958;
})();
var statearr_32960_33952 = state_32933__$1;
(statearr_32960_33952[(2)] = inst_32926);

(statearr_32960_33952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (3))){
var inst_32930 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32933__$1,inst_32930);
} else {
if((state_val_32934 === (12))){
var inst_32883 = (state_32933[(7)]);
var inst_32905 = cljs.core.vec(inst_32883);
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32933__$1,(14),out,inst_32905);
} else {
if((state_val_32934 === (2))){
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32933__$1,(4),ch);
} else {
if((state_val_32934 === (11))){
var inst_32893 = (state_32933[(11)]);
var inst_32889 = (state_32933[(9)]);
var inst_32883 = (state_32933[(7)]);
var inst_32902 = inst_32883.push(inst_32889);
var tmp32961 = inst_32883;
var inst_32883__$1 = tmp32961;
var inst_32884 = inst_32893;
var state_32933__$1 = (function (){var statearr_32962 = state_32933;
(statearr_32962[(12)] = inst_32902);

(statearr_32962[(7)] = inst_32883__$1);

(statearr_32962[(8)] = inst_32884);

return statearr_32962;
})();
var statearr_32963_33962 = state_32933__$1;
(statearr_32963_33962[(2)] = null);

(statearr_32963_33962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (9))){
var inst_32884 = (state_32933[(8)]);
var inst_32898 = cljs.core.keyword_identical_QMARK_(inst_32884,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32933__$1 = state_32933;
var statearr_32970_33966 = state_32933__$1;
(statearr_32970_33966[(2)] = inst_32898);

(statearr_32970_33966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (5))){
var inst_32893 = (state_32933[(11)]);
var inst_32894 = (state_32933[(13)]);
var inst_32889 = (state_32933[(9)]);
var inst_32884 = (state_32933[(8)]);
var inst_32893__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32889) : f.call(null,inst_32889));
var inst_32894__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32893__$1,inst_32884);
var state_32933__$1 = (function (){var statearr_32975 = state_32933;
(statearr_32975[(11)] = inst_32893__$1);

(statearr_32975[(13)] = inst_32894__$1);

return statearr_32975;
})();
if(inst_32894__$1){
var statearr_32976_33967 = state_32933__$1;
(statearr_32976_33967[(1)] = (8));

} else {
var statearr_32977_33968 = state_32933__$1;
(statearr_32977_33968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (14))){
var inst_32893 = (state_32933[(11)]);
var inst_32889 = (state_32933[(9)]);
var inst_32907 = (state_32933[(2)]);
var inst_32910 = [];
var inst_32911 = inst_32910.push(inst_32889);
var inst_32883 = inst_32910;
var inst_32884 = inst_32893;
var state_32933__$1 = (function (){var statearr_32980 = state_32933;
(statearr_32980[(14)] = inst_32911);

(statearr_32980[(7)] = inst_32883);

(statearr_32980[(8)] = inst_32884);

(statearr_32980[(15)] = inst_32907);

return statearr_32980;
})();
var statearr_32981_33972 = state_32933__$1;
(statearr_32981_33972[(2)] = null);

(statearr_32981_33972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (16))){
var state_32933__$1 = state_32933;
var statearr_32982_33976 = state_32933__$1;
(statearr_32982_33976[(2)] = null);

(statearr_32982_33976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (10))){
var inst_32900 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
if(cljs.core.truth_(inst_32900)){
var statearr_32984_33977 = state_32933__$1;
(statearr_32984_33977[(1)] = (11));

} else {
var statearr_32989_33978 = state_32933__$1;
(statearr_32989_33978[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (18))){
var inst_32922 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
var statearr_32994_33979 = state_32933__$1;
(statearr_32994_33979[(2)] = inst_32922);

(statearr_32994_33979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (8))){
var inst_32894 = (state_32933[(13)]);
var state_32933__$1 = state_32933;
var statearr_33000_33980 = state_32933__$1;
(statearr_33000_33980[(2)] = inst_32894);

(statearr_33000_33980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29567__auto__ = null;
var cljs$core$async$state_machine__29567__auto____0 = (function (){
var statearr_33001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33001[(0)] = cljs$core$async$state_machine__29567__auto__);

(statearr_33001[(1)] = (1));

return statearr_33001;
});
var cljs$core$async$state_machine__29567__auto____1 = (function (state_32933){
while(true){
var ret_value__29568__auto__ = (function (){try{while(true){
var result__29569__auto__ = switch__29566__auto__(state_32933);
if(cljs.core.keyword_identical_QMARK_(result__29569__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29569__auto__;
}
break;
}
}catch (e33002){var ex__29570__auto__ = e33002;
var statearr_33003_33981 = state_32933;
(statearr_33003_33981[(2)] = ex__29570__auto__);


if(cljs.core.seq((state_32933[(4)]))){
var statearr_33004_33982 = state_32933;
(statearr_33004_33982[(1)] = cljs.core.first((state_32933[(4)])));

} else {
throw ex__29570__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29568__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33983 = state_32933;
state_32933 = G__33983;
continue;
} else {
return ret_value__29568__auto__;
}
break;
}
});
cljs$core$async$state_machine__29567__auto__ = function(state_32933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29567__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29567__auto____1.call(this,state_32933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29567__auto____0;
cljs$core$async$state_machine__29567__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29567__auto____1;
return cljs$core$async$state_machine__29567__auto__;
})()
})();
var state__30146__auto__ = (function (){var statearr_33005 = f__30145__auto__();
(statearr_33005[(6)] = c__30144__auto___33924);

return statearr_33005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30146__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
