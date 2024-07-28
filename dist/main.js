/*! For license information please see main.js.LICENSE.txt */
(() => {
	"use strict";
	var t,
		r,
		e,
		n,
		o = {
			532: (t) => {
				t.exports = function (t) {
					var r = [];
					return (
						(r.toString = function () {
							return this.map(function (r) {
								var e = "",
									n = void 0 !== r[5];
								return (
									r[4] &&
										(e += "@supports (".concat(
											r[4],
											") {"
										)),
									r[2] && (e += "@media ".concat(r[2], " {")),
									n &&
										(e += "@layer".concat(
											r[5].length > 0
												? " ".concat(r[5])
												: "",
											" {"
										)),
									(e += t(r)),
									n && (e += "}"),
									r[2] && (e += "}"),
									r[4] && (e += "}"),
									e
								);
							}).join("");
						}),
						(r.i = function (t, e, n, o, a) {
							"string" == typeof t && (t = [[null, t, void 0]]);
							var i = {};
							if (n)
								for (var c = 0; c < this.length; c++) {
									var u = this[c][0];
									null != u && (i[u] = !0);
								}
							for (var l = 0; l < t.length; l++) {
								var s = [].concat(t[l]);
								(n && i[s[0]]) ||
									(void 0 !== a &&
										(void 0 === s[5] ||
											(s[1] = "@layer"
												.concat(
													s[5].length > 0
														? " ".concat(s[5])
														: "",
													" {"
												)
												.concat(s[1], "}")),
										(s[5] = a)),
									e &&
										(s[2]
											? ((s[1] = "@media "
													.concat(s[2], " {")
													.concat(s[1], "}")),
												(s[2] = e))
											: (s[2] = e)),
									o &&
										(s[4]
											? ((s[1] = "@supports ("
													.concat(s[4], ") {")
													.concat(s[1], "}")),
												(s[4] = o))
											: (s[4] = "".concat(o))),
									r.push(s));
							}
						}),
						r
					);
				};
			},
			547: (t) => {
				t.exports = function (t) {
					return t[1];
				};
			},
			196: (t, r, e) => {
				e.d(r, { F: () => u, w: () => s });
				var n = e(440),
					o = e(608);
				function a(t) {
					return (
						(a =
							"function" == typeof Symbol &&
							"symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
									}
								: function (t) {
										return t &&
											"function" == typeof Symbol &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
									}),
						a(t)
					);
				}
				function i() {
					i = function () {
						return r;
					};
					var t,
						r = {},
						e = Object.prototype,
						n = e.hasOwnProperty,
						o =
							Object.defineProperty ||
							function (t, r, e) {
								t[r] = e.value;
							},
						c = "function" == typeof Symbol ? Symbol : {},
						u = c.iterator || "@@iterator",
						l = c.asyncIterator || "@@asyncIterator",
						s = c.toStringTag || "@@toStringTag";
					function f(t, r, e) {
						return (
							Object.defineProperty(t, r, {
								value: e,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							}),
							t[r]
						);
					}
					try {
						f({}, "");
					} catch (t) {
						f = function (t, r, e) {
							return (t[r] = e);
						};
					}
					function p(t, r, e, n) {
						var a = r && r.prototype instanceof b ? r : b,
							i = Object.create(a.prototype),
							c = new C(n || []);
						return o(i, "_invoke", { value: O(t, e, c) }), i;
					}
					function h(t, r, e) {
						try {
							return { type: "normal", arg: t.call(r, e) };
						} catch (t) {
							return { type: "throw", arg: t };
						}
					}
					r.wrap = p;
					var v = "suspendedStart",
						d = "suspendedYield",
						y = "executing",
						m = "completed",
						g = {};
					function b() {}
					function w() {}
					function x() {}
					var k = {};
					f(k, u, function () {
						return this;
					});
					var E = Object.getPrototypeOf,
						L = E && E(E(N([])));
					L && L !== e && n.call(L, u) && (k = L);
					var S = (x.prototype = b.prototype = Object.create(k));
					function j(t) {
						["next", "throw", "return"].forEach(function (r) {
							f(t, r, function (t) {
								return this._invoke(r, t);
							});
						});
					}
					function _(t, r) {
						function e(o, i, c, u) {
							var l = h(t[o], t, i);
							if ("throw" !== l.type) {
								var s = l.arg,
									f = s.value;
								return f &&
									"object" == a(f) &&
									n.call(f, "__await")
									? r.resolve(f.__await).then(
											function (t) {
												e("next", t, c, u);
											},
											function (t) {
												e("throw", t, c, u);
											}
										)
									: r.resolve(f).then(
											function (t) {
												(s.value = t), c(s);
											},
											function (t) {
												return e("throw", t, c, u);
											}
										);
							}
							u(l.arg);
						}
						var i;
						o(this, "_invoke", {
							value: function (t, n) {
								function o() {
									return new r(function (r, o) {
										e(t, n, r, o);
									});
								}
								return (i = i ? i.then(o, o) : o());
							},
						});
					}
					function O(r, e, n) {
						var o = v;
						return function (a, i) {
							if (o === y)
								throw Error("Generator is already running");
							if (o === m) {
								if ("throw" === a) throw i;
								return { value: t, done: !0 };
							}
							for (n.method = a, n.arg = i; ; ) {
								var c = n.delegate;
								if (c) {
									var u = A(c, n);
									if (u) {
										if (u === g) continue;
										return u;
									}
								}
								if ("next" === n.method)
									n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if (o === v) throw ((o = m), n.arg);
									n.dispatchException(n.arg);
								} else
									"return" === n.method &&
										n.abrupt("return", n.arg);
								o = y;
								var l = h(r, e, n);
								if ("normal" === l.type) {
									if (((o = n.done ? m : d), l.arg === g))
										continue;
									return { value: l.arg, done: n.done };
								}
								"throw" === l.type &&
									((o = m),
									(n.method = "throw"),
									(n.arg = l.arg));
							}
						};
					}
					function A(r, e) {
						var n = e.method,
							o = r.iterator[n];
						if (o === t)
							return (
								(e.delegate = null),
								("throw" === n &&
									r.iterator.return &&
									((e.method = "return"),
									(e.arg = t),
									A(r, e),
									"throw" === e.method)) ||
									("return" !== n &&
										((e.method = "throw"),
										(e.arg = new TypeError(
											"The iterator does not provide a '" +
												n +
												"' method"
										)))),
								g
							);
						var a = h(o, r.iterator, e.arg);
						if ("throw" === a.type)
							return (
								(e.method = "throw"),
								(e.arg = a.arg),
								(e.delegate = null),
								g
							);
						var i = a.arg;
						return i
							? i.done
								? ((e[r.resultName] = i.value),
									(e.next = r.nextLoc),
									"return" !== e.method &&
										((e.method = "next"), (e.arg = t)),
									(e.delegate = null),
									g)
								: i
							: ((e.method = "throw"),
								(e.arg = new TypeError(
									"iterator result is not an object"
								)),
								(e.delegate = null),
								g);
					}
					function T(t) {
						var r = { tryLoc: t[0] };
						1 in t && (r.catchLoc = t[1]),
							2 in t &&
								((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
							this.tryEntries.push(r);
					}
					function I(t) {
						var r = t.completion || {};
						(r.type = "normal"), delete r.arg, (t.completion = r);
					}
					function C(t) {
						(this.tryEntries = [{ tryLoc: "root" }]),
							t.forEach(T, this),
							this.reset(!0);
					}
					function N(r) {
						if (r || "" === r) {
							var e = r[u];
							if (e) return e.call(r);
							if ("function" == typeof r.next) return r;
							if (!isNaN(r.length)) {
								var o = -1,
									i = function e() {
										for (; ++o < r.length; )
											if (n.call(r, o))
												return (
													(e.value = r[o]),
													(e.done = !1),
													e
												);
										return (e.value = t), (e.done = !0), e;
									};
								return (i.next = i);
							}
						}
						throw new TypeError(a(r) + " is not iterable");
					}
					return (
						(w.prototype = x),
						o(S, "constructor", { value: x, configurable: !0 }),
						o(x, "constructor", { value: w, configurable: !0 }),
						(w.displayName = f(x, s, "GeneratorFunction")),
						(r.isGeneratorFunction = function (t) {
							var r = "function" == typeof t && t.constructor;
							return (
								!!r &&
								(r === w ||
									"GeneratorFunction" ===
										(r.displayName || r.name))
							);
						}),
						(r.mark = function (t) {
							return (
								Object.setPrototypeOf
									? Object.setPrototypeOf(t, x)
									: ((t.__proto__ = x),
										f(t, s, "GeneratorFunction")),
								(t.prototype = Object.create(S)),
								t
							);
						}),
						(r.awrap = function (t) {
							return { __await: t };
						}),
						j(_.prototype),
						f(_.prototype, l, function () {
							return this;
						}),
						(r.AsyncIterator = _),
						(r.async = function (t, e, n, o, a) {
							void 0 === a && (a = Promise);
							var i = new _(p(t, e, n, o), a);
							return r.isGeneratorFunction(e)
								? i
								: i.next().then(function (t) {
										return t.done ? t.value : i.next();
									});
						}),
						j(S),
						f(S, s, "Generator"),
						f(S, u, function () {
							return this;
						}),
						f(S, "toString", function () {
							return "[object Generator]";
						}),
						(r.keys = function (t) {
							var r = Object(t),
								e = [];
							for (var n in r) e.push(n);
							return (
								e.reverse(),
								function t() {
									for (; e.length; ) {
										var n = e.pop();
										if (n in r)
											return (
												(t.value = n), (t.done = !1), t
											);
									}
									return (t.done = !0), t;
								}
							);
						}),
						(r.values = N),
						(C.prototype = {
							constructor: C,
							reset: function (r) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = t),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = t),
									this.tryEntries.forEach(I),
									!r)
								)
									for (var e in this)
										"t" === e.charAt(0) &&
											n.call(this, e) &&
											!isNaN(+e.slice(1)) &&
											(this[e] = t);
							},
							stop: function () {
								this.done = !0;
								var t = this.tryEntries[0].completion;
								if ("throw" === t.type) throw t.arg;
								return this.rval;
							},
							dispatchException: function (r) {
								if (this.done) throw r;
								var e = this;
								function o(n, o) {
									return (
										(c.type = "throw"),
										(c.arg = r),
										(e.next = n),
										o && ((e.method = "next"), (e.arg = t)),
										!!o
									);
								}
								for (
									var a = this.tryEntries.length - 1;
									a >= 0;
									--a
								) {
									var i = this.tryEntries[a],
										c = i.completion;
									if ("root" === i.tryLoc) return o("end");
									if (i.tryLoc <= this.prev) {
										var u = n.call(i, "catchLoc"),
											l = n.call(i, "finallyLoc");
										if (u && l) {
											if (this.prev < i.catchLoc)
												return o(i.catchLoc, !0);
											if (this.prev < i.finallyLoc)
												return o(i.finallyLoc);
										} else if (u) {
											if (this.prev < i.catchLoc)
												return o(i.catchLoc, !0);
										} else {
											if (!l)
												throw Error(
													"try statement without catch or finally"
												);
											if (this.prev < i.finallyLoc)
												return o(i.finallyLoc);
										}
									}
								}
							},
							abrupt: function (t, r) {
								for (
									var e = this.tryEntries.length - 1;
									e >= 0;
									--e
								) {
									var o = this.tryEntries[e];
									if (
										o.tryLoc <= this.prev &&
										n.call(o, "finallyLoc") &&
										this.prev < o.finallyLoc
									) {
										var a = o;
										break;
									}
								}
								a &&
									("break" === t || "continue" === t) &&
									a.tryLoc <= r &&
									r <= a.finallyLoc &&
									(a = null);
								var i = a ? a.completion : {};
								return (
									(i.type = t),
									(i.arg = r),
									a
										? ((this.method = "next"),
											(this.next = a.finallyLoc),
											g)
										: this.complete(i)
								);
							},
							complete: function (t, r) {
								if ("throw" === t.type) throw t.arg;
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
											? ((this.rval = this.arg = t.arg),
												(this.method = "return"),
												(this.next = "end"))
											: "normal" === t.type &&
												r &&
												(this.next = r),
									g
								);
							},
							finish: function (t) {
								for (
									var r = this.tryEntries.length - 1;
									r >= 0;
									--r
								) {
									var e = this.tryEntries[r];
									if (e.finallyLoc === t)
										return (
											this.complete(
												e.completion,
												e.afterLoc
											),
											I(e),
											g
										);
								}
							},
							catch: function (t) {
								for (
									var r = this.tryEntries.length - 1;
									r >= 0;
									--r
								) {
									var e = this.tryEntries[r];
									if (e.tryLoc === t) {
										var n = e.completion;
										if ("throw" === n.type) {
											var o = n.arg;
											I(e);
										}
										return o;
									}
								}
								throw Error("illegal catch attempt");
							},
							delegateYield: function (r, e, n) {
								return (
									(this.delegate = {
										iterator: N(r),
										resultName: e,
										nextLoc: n,
									}),
									"next" === this.method && (this.arg = t),
									g
								);
							},
						}),
						r
					);
				}
				function c(t, r, e, n, o, a, i) {
					try {
						var c = t[a](i),
							u = c.value;
					} catch (t) {
						return void e(t);
					}
					c.done ? r(u) : Promise.resolve(u).then(n, o);
				}
				function u(t, r, e, n, o) {
					return l.apply(this, arguments);
				}
				function l() {
					var t;
					return (
						(t = i().mark(function t(r, e, o, a, c) {
							var u, l, s;
							return i().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (
													(t.prev = 0),
													(u = ""),
													Object.keys(o).length > 0 &&
														(u = (0, n.yL)(o)),
													(l = ""
														.concat(r)
														.concat(e)
														.concat(u)),
													console.log(
														""
															.concat(
																a,
																" request at "
															)
															.concat(l)
													),
													(t.next = 7),
													fetch(l, {
														method: a,
														headers: c,
													})
												);
											case 7:
												if ((s = t.sent).ok) {
													t.next = 10;
													break;
												}
												throw new Error(
													"HTTP error ".concat(
														s.status
													)
												);
											case 10:
												return (t.next = 12), s.json();
											case 12:
												return t.abrupt(
													"return",
													t.sent
												);
											case 15:
												throw (
													((t.prev = 15),
													(t.t0 = t.catch(0)),
													console.error(
														"Error fetching data:",
														t.t0
													),
													t.t0)
												);
											case 19:
											case "end":
												return t.stop();
										}
								},
								t,
								null,
								[[0, 15]]
							);
						})),
						(l = function () {
							var r = this,
								e = arguments;
							return new Promise(function (n, o) {
								var a = t.apply(r, e);
								function i(t) {
									c(a, n, o, i, u, "next", t);
								}
								function u(t) {
									c(a, n, o, i, u, "throw", t);
								}
								i(void 0);
							});
						}),
						l.apply(this, arguments)
					);
				}
				function s(t) {
					if (t.value) return t.value;
					var r = (0, o.Gq)(t.prompt, t.placeholder);
					return (t.value = r), r;
				}
			},
			508: (t, r, e) => {
				function n(t, r, e) {
					document
						.querySelectorAll(".".concat(t))
						.forEach(function (t) {
							t.addEventListener("click", function () {
								var n = t.id,
									o = "".concat(r).concat(n).concat(e);
								open(o);
							});
						});
				}
				e.d(r, { n: () => n });
			},
			815: (t, r, e) => {
				function n(t) {
					var r = new Date(1 * t),
						e = (r.getUTCMonth() + 1).toString().padStart(2, "0"),
						n = r.getUTCDate().toString().padStart(2, "0");
					return r.getUTCFullYear() + "-" + e + "-" + n;
				}
				function o(t, r, e) {
					for (var n = 0; n < r.length; n++) if (r[n] == t) return e;
					return t;
				}
				e.d(r, { M: () => n, u: () => o });
			},
			608: (t, r, e) => {
				function n(t, r) {
					var e = document.createElement(t);
					return i(e, "id", r), e;
				}
				function o(t, r) {
					return r.appendChild(t), t;
				}
				function a(t) {
					return document.getElementById(t);
				}
				function i(t, r, e) {
					return t.setAttribute(r, e), t;
				}
				function c(t, r) {
					return (t.innerHTML = r), t;
				}
				function u(t, r) {
					var e = prompt(t, r);
					if ("" != e) return e;
					u(t, r);
				}
				e.d(r, {
					CI: () => n,
					Gq: () => u,
					IN: () => c,
					Nc: () => a,
					bs: () => i,
					je: () => o,
				});
			},
			856: (t, r, e) => {
				e.a(
					t,
					async (t, r) => {
						try {
							e(697);
							var n = e(587),
								o = e(166),
								a = e(815),
								i = e(196),
								c = e(440),
								u = e(608),
								l = e(508),
								s = [],
								f = performance.now(),
								p = (0, i.w)(n.E.clickup);
							o.v.click.header.Authorization = p;
							var h = await (0, i.F)(
									o.v.click.url.api,
									o.v.click.end.user,
									o.v.arr.empty,
									o.v.api.get,
									o.v.click.header
								),
								v = (0, c.Ug)(h, o.v.click.arr.user),
								d = v.id,
								y = (v.username, v.color),
								m = v.profilePicture,
								g = (0, a.M)(new Date()),
								b = (0, u.Nc)("profile");
							(0, u.bs)(b, "src", m),
								document
									.querySelector(":root")
									.style.setProperty("--accent", y);
							var w = await (0, i.F)(
									o.v.click.url.api,
									o.v.click.end.team,
									o.v.arr.empty,
									o.v.api.get,
									o.v.click.header
								),
								x = (0, c.Ug)(w, o.v.click.arr.team),
								k = (0, c.Xj)(x, o.v.click.key.id);
							await (0, c.wY)(
								k,
								s,
								o.v.click.url.api,
								o.v.click.end.team + "/",
								o.v.click.end.task,
								{ "assignees[]": d, subtasks: !0 },
								o.v.api.get,
								o.v.click.header
							),
								console.log(s);
							var E = (0, c.eC)(s, [o.v.loop.class, "id"]),
								L = (0, c.eC)(s, [o.v.loop.class, "name"]),
								S = (0, c.eC)(s, [o.v.loop.class, "due_date"]),
								j = (0, c.eC)(s, [
									o.v.loop.class,
									"status",
									"status",
								]);
							console.log(S);
							for (
								var _ = (0, u.Nc)("canvas"), O = 0;
								O < E.length;
								O++
							) {
								var A,
									T,
									I = E[O],
									C = L[O],
									N = j[O],
									P = (0, a.M)(S[O]),
									G =
										null !==
											(A =
												null ===
													(T =
														s[0].tasks[O]
															.priority) ||
												void 0 === T
													? void 0
													: T.id) && void 0 !== A
											? A
											: 0,
									F = (0, a.u)(P, ["1970-01-01"], ""),
									M = (0, u.CI)("li", I),
									U = (0, u.CI)(
										"div",
										"".concat(I, "-Status")
									),
									D = (0, u.CI)(
										"div",
										"".concat(I, "-Titel")
									),
									H = (0, u.CI)("div", "".concat(I, "-Date"));
								(0, u.IN)(U, N),
									(0, u.IN)(D, C),
									(0, u.IN)(H, F),
									(0, u.bs)(U, "class", "div-Status"),
									(0, u.bs)(D, "class", "div-Title"),
									(0, u.bs)(H, "class", "div-Date"),
									g === F
										? (0, u.bs)(
												M,
												"class",
												"task prio".concat(G, " due")
											)
										: g > F && "" !== F
											? (0, u.bs)(
													M,
													"class",
													"task prio".concat(
														G,
														" overdue"
													)
												)
											: (0, u.bs)(
													M,
													"class",
													"task prio".concat(G)
												),
									(0, u.je)(U, M),
									(0, u.je)(D, M),
									(0, u.je)(H, M),
									(0, u.je)(M, _);
							}
							(0, l.n)("task", o.v.click.url.task, "");
							var q = performance.now();
							console.log(
								"This took ".concat(f - q, " milleseconds")
							),
								r();
						} catch (t) {
							r(t);
						}
					},
					1
				);
			},
			587: (t, r, e) => {
				e.d(r, { E: () => n });
				var n = {
					clickup: {
						value: "ENTER_CLICKUP_API_KEY",
						prompt: e(166).v.prompt.keyClickup,
						placeholder: "",
					},
				};
			},
			440: (t, r, e) => {
				e.d(r, {
					Ug: () => p,
					Xj: () => f,
					eC: () => d,
					wY: () => h,
					yL: () => s,
				});
				var n = e(196);
				function o() {
					o = function () {
						return r;
					};
					var t,
						r = {},
						e = Object.prototype,
						n = e.hasOwnProperty,
						i =
							Object.defineProperty ||
							function (t, r, e) {
								t[r] = e.value;
							},
						c = "function" == typeof Symbol ? Symbol : {},
						u = c.iterator || "@@iterator",
						l = c.asyncIterator || "@@asyncIterator",
						s = c.toStringTag || "@@toStringTag";
					function f(t, r, e) {
						return (
							Object.defineProperty(t, r, {
								value: e,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							}),
							t[r]
						);
					}
					try {
						f({}, "");
					} catch (t) {
						f = function (t, r, e) {
							return (t[r] = e);
						};
					}
					function p(t, r, e, n) {
						var o = r && r.prototype instanceof b ? r : b,
							a = Object.create(o.prototype),
							c = new C(n || []);
						return i(a, "_invoke", { value: O(t, e, c) }), a;
					}
					function h(t, r, e) {
						try {
							return { type: "normal", arg: t.call(r, e) };
						} catch (t) {
							return { type: "throw", arg: t };
						}
					}
					r.wrap = p;
					var v = "suspendedStart",
						d = "suspendedYield",
						y = "executing",
						m = "completed",
						g = {};
					function b() {}
					function w() {}
					function x() {}
					var k = {};
					f(k, u, function () {
						return this;
					});
					var E = Object.getPrototypeOf,
						L = E && E(E(N([])));
					L && L !== e && n.call(L, u) && (k = L);
					var S = (x.prototype = b.prototype = Object.create(k));
					function j(t) {
						["next", "throw", "return"].forEach(function (r) {
							f(t, r, function (t) {
								return this._invoke(r, t);
							});
						});
					}
					function _(t, r) {
						function e(o, i, c, u) {
							var l = h(t[o], t, i);
							if ("throw" !== l.type) {
								var s = l.arg,
									f = s.value;
								return f &&
									"object" == a(f) &&
									n.call(f, "__await")
									? r.resolve(f.__await).then(
											function (t) {
												e("next", t, c, u);
											},
											function (t) {
												e("throw", t, c, u);
											}
										)
									: r.resolve(f).then(
											function (t) {
												(s.value = t), c(s);
											},
											function (t) {
												return e("throw", t, c, u);
											}
										);
							}
							u(l.arg);
						}
						var o;
						i(this, "_invoke", {
							value: function (t, n) {
								function a() {
									return new r(function (r, o) {
										e(t, n, r, o);
									});
								}
								return (o = o ? o.then(a, a) : a());
							},
						});
					}
					function O(r, e, n) {
						var o = v;
						return function (a, i) {
							if (o === y)
								throw Error("Generator is already running");
							if (o === m) {
								if ("throw" === a) throw i;
								return { value: t, done: !0 };
							}
							for (n.method = a, n.arg = i; ; ) {
								var c = n.delegate;
								if (c) {
									var u = A(c, n);
									if (u) {
										if (u === g) continue;
										return u;
									}
								}
								if ("next" === n.method)
									n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if (o === v) throw ((o = m), n.arg);
									n.dispatchException(n.arg);
								} else
									"return" === n.method &&
										n.abrupt("return", n.arg);
								o = y;
								var l = h(r, e, n);
								if ("normal" === l.type) {
									if (((o = n.done ? m : d), l.arg === g))
										continue;
									return { value: l.arg, done: n.done };
								}
								"throw" === l.type &&
									((o = m),
									(n.method = "throw"),
									(n.arg = l.arg));
							}
						};
					}
					function A(r, e) {
						var n = e.method,
							o = r.iterator[n];
						if (o === t)
							return (
								(e.delegate = null),
								("throw" === n &&
									r.iterator.return &&
									((e.method = "return"),
									(e.arg = t),
									A(r, e),
									"throw" === e.method)) ||
									("return" !== n &&
										((e.method = "throw"),
										(e.arg = new TypeError(
											"The iterator does not provide a '" +
												n +
												"' method"
										)))),
								g
							);
						var a = h(o, r.iterator, e.arg);
						if ("throw" === a.type)
							return (
								(e.method = "throw"),
								(e.arg = a.arg),
								(e.delegate = null),
								g
							);
						var i = a.arg;
						return i
							? i.done
								? ((e[r.resultName] = i.value),
									(e.next = r.nextLoc),
									"return" !== e.method &&
										((e.method = "next"), (e.arg = t)),
									(e.delegate = null),
									g)
								: i
							: ((e.method = "throw"),
								(e.arg = new TypeError(
									"iterator result is not an object"
								)),
								(e.delegate = null),
								g);
					}
					function T(t) {
						var r = { tryLoc: t[0] };
						1 in t && (r.catchLoc = t[1]),
							2 in t &&
								((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
							this.tryEntries.push(r);
					}
					function I(t) {
						var r = t.completion || {};
						(r.type = "normal"), delete r.arg, (t.completion = r);
					}
					function C(t) {
						(this.tryEntries = [{ tryLoc: "root" }]),
							t.forEach(T, this),
							this.reset(!0);
					}
					function N(r) {
						if (r || "" === r) {
							var e = r[u];
							if (e) return e.call(r);
							if ("function" == typeof r.next) return r;
							if (!isNaN(r.length)) {
								var o = -1,
									i = function e() {
										for (; ++o < r.length; )
											if (n.call(r, o))
												return (
													(e.value = r[o]),
													(e.done = !1),
													e
												);
										return (e.value = t), (e.done = !0), e;
									};
								return (i.next = i);
							}
						}
						throw new TypeError(a(r) + " is not iterable");
					}
					return (
						(w.prototype = x),
						i(S, "constructor", { value: x, configurable: !0 }),
						i(x, "constructor", { value: w, configurable: !0 }),
						(w.displayName = f(x, s, "GeneratorFunction")),
						(r.isGeneratorFunction = function (t) {
							var r = "function" == typeof t && t.constructor;
							return (
								!!r &&
								(r === w ||
									"GeneratorFunction" ===
										(r.displayName || r.name))
							);
						}),
						(r.mark = function (t) {
							return (
								Object.setPrototypeOf
									? Object.setPrototypeOf(t, x)
									: ((t.__proto__ = x),
										f(t, s, "GeneratorFunction")),
								(t.prototype = Object.create(S)),
								t
							);
						}),
						(r.awrap = function (t) {
							return { __await: t };
						}),
						j(_.prototype),
						f(_.prototype, l, function () {
							return this;
						}),
						(r.AsyncIterator = _),
						(r.async = function (t, e, n, o, a) {
							void 0 === a && (a = Promise);
							var i = new _(p(t, e, n, o), a);
							return r.isGeneratorFunction(e)
								? i
								: i.next().then(function (t) {
										return t.done ? t.value : i.next();
									});
						}),
						j(S),
						f(S, s, "Generator"),
						f(S, u, function () {
							return this;
						}),
						f(S, "toString", function () {
							return "[object Generator]";
						}),
						(r.keys = function (t) {
							var r = Object(t),
								e = [];
							for (var n in r) e.push(n);
							return (
								e.reverse(),
								function t() {
									for (; e.length; ) {
										var n = e.pop();
										if (n in r)
											return (
												(t.value = n), (t.done = !1), t
											);
									}
									return (t.done = !0), t;
								}
							);
						}),
						(r.values = N),
						(C.prototype = {
							constructor: C,
							reset: function (r) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = t),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = t),
									this.tryEntries.forEach(I),
									!r)
								)
									for (var e in this)
										"t" === e.charAt(0) &&
											n.call(this, e) &&
											!isNaN(+e.slice(1)) &&
											(this[e] = t);
							},
							stop: function () {
								this.done = !0;
								var t = this.tryEntries[0].completion;
								if ("throw" === t.type) throw t.arg;
								return this.rval;
							},
							dispatchException: function (r) {
								if (this.done) throw r;
								var e = this;
								function o(n, o) {
									return (
										(c.type = "throw"),
										(c.arg = r),
										(e.next = n),
										o && ((e.method = "next"), (e.arg = t)),
										!!o
									);
								}
								for (
									var a = this.tryEntries.length - 1;
									a >= 0;
									--a
								) {
									var i = this.tryEntries[a],
										c = i.completion;
									if ("root" === i.tryLoc) return o("end");
									if (i.tryLoc <= this.prev) {
										var u = n.call(i, "catchLoc"),
											l = n.call(i, "finallyLoc");
										if (u && l) {
											if (this.prev < i.catchLoc)
												return o(i.catchLoc, !0);
											if (this.prev < i.finallyLoc)
												return o(i.finallyLoc);
										} else if (u) {
											if (this.prev < i.catchLoc)
												return o(i.catchLoc, !0);
										} else {
											if (!l)
												throw Error(
													"try statement without catch or finally"
												);
											if (this.prev < i.finallyLoc)
												return o(i.finallyLoc);
										}
									}
								}
							},
							abrupt: function (t, r) {
								for (
									var e = this.tryEntries.length - 1;
									e >= 0;
									--e
								) {
									var o = this.tryEntries[e];
									if (
										o.tryLoc <= this.prev &&
										n.call(o, "finallyLoc") &&
										this.prev < o.finallyLoc
									) {
										var a = o;
										break;
									}
								}
								a &&
									("break" === t || "continue" === t) &&
									a.tryLoc <= r &&
									r <= a.finallyLoc &&
									(a = null);
								var i = a ? a.completion : {};
								return (
									(i.type = t),
									(i.arg = r),
									a
										? ((this.method = "next"),
											(this.next = a.finallyLoc),
											g)
										: this.complete(i)
								);
							},
							complete: function (t, r) {
								if ("throw" === t.type) throw t.arg;
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
											? ((this.rval = this.arg = t.arg),
												(this.method = "return"),
												(this.next = "end"))
											: "normal" === t.type &&
												r &&
												(this.next = r),
									g
								);
							},
							finish: function (t) {
								for (
									var r = this.tryEntries.length - 1;
									r >= 0;
									--r
								) {
									var e = this.tryEntries[r];
									if (e.finallyLoc === t)
										return (
											this.complete(
												e.completion,
												e.afterLoc
											),
											I(e),
											g
										);
								}
							},
							catch: function (t) {
								for (
									var r = this.tryEntries.length - 1;
									r >= 0;
									--r
								) {
									var e = this.tryEntries[r];
									if (e.tryLoc === t) {
										var n = e.completion;
										if ("throw" === n.type) {
											var o = n.arg;
											I(e);
										}
										return o;
									}
								}
								throw Error("illegal catch attempt");
							},
							delegateYield: function (r, e, n) {
								return (
									(this.delegate = {
										iterator: N(r),
										resultName: e,
										nextLoc: n,
									}),
									"next" === this.method && (this.arg = t),
									g
								);
							},
						}),
						r
					);
				}
				function a(t) {
					return (
						(a =
							"function" == typeof Symbol &&
							"symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
									}
								: function (t) {
										return t &&
											"function" == typeof Symbol &&
											t.constructor === Symbol &&
											t !== Symbol.prototype
											? "symbol"
											: typeof t;
									}),
						a(t)
					);
				}
				function i(t, r, e, n, o, a, i) {
					try {
						var c = t[a](i),
							u = c.value;
					} catch (t) {
						return void e(t);
					}
					c.done ? r(u) : Promise.resolve(u).then(n, o);
				}
				function c(t, r) {
					var e =
						("undefined" != typeof Symbol && t[Symbol.iterator]) ||
						t["@@iterator"];
					if (!e) {
						if (
							Array.isArray(t) ||
							(e = u(t)) ||
							(r && t && "number" == typeof t.length)
						) {
							e && (t = e);
							var n = 0,
								o = function () {};
							return {
								s: o,
								n: function () {
									return n >= t.length
										? { done: !0 }
										: { done: !1, value: t[n++] };
								},
								e: function (t) {
									throw t;
								},
								f: o,
							};
						}
						throw new TypeError(
							"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					}
					var a,
						i = !0,
						c = !1;
					return {
						s: function () {
							e = e.call(t);
						},
						n: function () {
							var t = e.next();
							return (i = t.done), t;
						},
						e: function (t) {
							(c = !0), (a = t);
						},
						f: function () {
							try {
								i || null == e.return || e.return();
							} finally {
								if (c) throw a;
							}
						},
					};
				}
				function u(t, r) {
					if (t) {
						if ("string" == typeof t) return l(t, r);
						var e = Object.prototype.toString.call(t).slice(8, -1);
						return (
							"Object" === e &&
								t.constructor &&
								(e = t.constructor.name),
							"Map" === e || "Set" === e
								? Array.from(t)
								: "Arguments" === e ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
											e
									  )
									? l(t, r)
									: void 0
						);
					}
				}
				function l(t, r) {
					(null == r || r > t.length) && (r = t.length);
					for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
					return n;
				}
				function s(t) {
					for (
						var r = "", e = 0, n = Object.entries(t);
						e < n.length;
						e++
					) {
						var o =
								((p = n[e]),
								(h = 2),
								(function (t) {
									if (Array.isArray(t)) return t;
								})(p) ||
									(function (t, r) {
										var e =
											null == t
												? null
												: ("undefined" !=
														typeof Symbol &&
														t[Symbol.iterator]) ||
													t["@@iterator"];
										if (null != e) {
											var n,
												o,
												a,
												i,
												c = [],
												u = !0,
												l = !1;
											try {
												if (
													((a = (e = e.call(t)).next),
													0 === r)
												) {
													if (Object(e) !== e) return;
													u = !1;
												} else
													for (
														;
														!(u = (n = a.call(e))
															.done) &&
														(c.push(n.value),
														c.length !== r);
														u = !0
													);
											} catch (t) {
												(l = !0), (o = t);
											} finally {
												try {
													if (
														!u &&
														null != e.return &&
														((i = e.return()),
														Object(i) !== i)
													)
														return;
												} finally {
													if (l) throw o;
												}
											}
											return c;
										}
									})(p, h) ||
									u(p, h) ||
									(function () {
										throw new TypeError(
											"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
										);
									})()),
							a = o[0],
							i = o[1];
						if (Array.isArray(i)) {
							var l,
								s = c(i);
							try {
								for (s.s(); !(l = s.n()).done; ) {
									var f = l.value;
									r += ""
										.concat(r ? "&" : "?")
										.concat(a, "=")
										.concat(encodeURIComponent(f));
								}
							} catch (t) {
								s.e(t);
							} finally {
								s.f();
							}
						} else
							r += ""
								.concat(r ? "&" : "?")
								.concat(a, "=")
								.concat(encodeURIComponent(i));
					}
					var p, h;
					return r;
				}
				function f(t, r) {
					for (var e = [], n = 0; n < t.length; n++) {
						var o = p(t[n], r);
						e.push(o);
					}
					return e;
				}
				function p(t, r) {
					for (var e = t, n = 0; n < r.length; n++) e = e[r[n]];
					return e;
				}
				function h(t, r, e, n, o, a, i, c) {
					return v.apply(this, arguments);
				}
				function v() {
					var t;
					return (
						(t = o().mark(function t(r, e, a, i, c, u, l, s) {
							var f, p, h;
							return o().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											f = 0;
										case 1:
											if (!(f < r.length)) {
												t.next = 10;
												break;
											}
											return (
												(p = r[f]),
												(t.next = 5),
												(0, n.F)(a, i + p + c, u, l, s)
											);
										case 5:
											(h = t.sent), e.push(h);
										case 7:
											f++, (t.next = 1);
											break;
										case 10:
										case "end":
											return t.stop();
									}
							}, t);
						})),
						(v = function () {
							var r = this,
								e = arguments;
							return new Promise(function (n, o) {
								var a = t.apply(r, e);
								function c(t) {
									i(a, n, o, c, u, "next", t);
								}
								function u(t) {
									i(a, n, o, c, u, "throw", t);
								}
								c(void 0);
							});
						}),
						v.apply(this, arguments)
					);
				}
				function d(t, r) {
					var e = [];
					return (
						(function t(r, n) {
							if (Array.isArray(r)) {
								var o,
									i = c(r);
								try {
									for (i.s(); !(o = i.n()).done; )
										t(o.value, n);
								} catch (t) {
									i.e(t);
								} finally {
									i.f();
								}
							} else if ("object" === a(r) && null !== r) {
								var u,
									l = c(n);
								try {
									for (l.s(); !(u = l.n()).done; ) {
										var s = u.value;
										void 0 !== r[s] && t(r[s], n.slice(1));
									}
								} catch (t) {
									l.e(t);
								} finally {
									l.f();
								}
							} else e.push(r);
						})(t, r),
						e
					);
				}
			},
			166: (t, r, e) => {
				e.d(r, { v: () => n }), e(587);
				var n = {
					arr: { empty: [] },
					api: {
						get: "GET",
						acceptAll: "*/*",
						agent: "Glatt-Task DEV",
					},
					click: {
						url: {
							api: "https://api.clickup.com/api/v2",
							task: "https://app.clickup.com/t/",
						},
						end: {
							user: "/user",
							team: "/team",
							space: "/space",
							folder: "/folder",
							task: "/task",
						},
						header: {
							Accept: { $ref: "#/api/acceptAll" },
							"User-Agent": { $ref: "#/api/agent" },
						},
						arr: {
							user: ["user"],
							team: ["teams"],
							space: ["spaces"],
							task: ["tasks"],
						},
						param: { space: { archived: "false" } },
						key: { id: ["id"] },
					},
					prompt: {
						keyClickup: "Please enter your Clickup API Key below",
					},
					loop: { class: "tasks" },
				};
			},
			16: (t, r, e) => {
				e.d(r, { A: () => c });
				var n = e(547),
					o = e.n(n),
					a = e(532),
					i = e.n(a)()(o());
				i.push([
					t.id,
					"/* VARIABLES */\n\n/* DEFINITION */\nbody {\n\t--border: 3px;\n\t--dark: #000000;\n\t--light: #ffffff;\n\t--canvasLight: #eeeeee;\n\t--prioUltra: #dc2626;\n\t--prioHigh: #ea580c;\n\t--prioMedium: #fbbf24;\n\t--prioLow: #65a30d;\n\t--padding: 5px;\n\t--menu: 100px;\n\t--effect: 380ms;\n\tbox-sizing: border-box;\n\tfont-family: sans-serif;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nul {\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n/* CLASSES */\n\n.canvas {\n\tbackground-color: var(--canvasLight);\n\tcolor: var(--dark);\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: calc(100vh - var(--menu));\n\twidth: calc(100% - var(--menu));\n}\n\n.circle {\n\tdisplay: inline-block;\n\tposition: relative;\n\tbackground: var(--accent);\n\tbox-sizing: border-box;\n\tclip-path: circle(50%);\n}\n\n.circle img {\n\ttransform: scale(0.9);\n\tclip-path: circle(50%);\n}\n\n.div-Date,\n.div-Status {\n\tmin-width: 100px;\n\twidth: 15%;\n}\n\n.div-Date {\n\ttext-align: end;\n}\n\n.div-Status {\n\ttext-align: start;\n}\n\n.div-Title {\n\ttext-align: center;\n\twidth: 70%;\n}\n\n.due,\n.overdue {\n\tborder-right: var(--border) solid;\n}\n\n.due {\n\tborder-right-color: var(--prioHigh);\n}\n\n.menu {\n\tbackground-color: var(--dark);\n\tcolor: var(--light);\n\tposition: sticky;\n}\n\n.overdue {\n\tborder-right-color: var(--prioUltra);\n}\n\n.profile {\n\talign-content: center;\n\tbackground-color: var(--dark);\n\tdisplay: flex;\n\tjustify-content: center;\n\theight: var(--menu);\n\twidth: calc(var(--menu) - calc(var(--padding * 2)));\n}\n\n.profile img {\n\twidth: var(--menu);\n\tz-index: 1;\n}\n\n.profile:hover {\n\tbackground-color: var(--accent);\n\tmargin: 0px;\n\ttransition: var(--effect);\n}\n\n.prio0,\n.prio1,\n.prio2,\n.prio3,\n.prio4 {\n\tborder-left: var(--border) solid;\n}\n\n.prio0 {\n\tborder-left-color: var(--light);\n}\n\n.prio1 {\n\tborder-left-color: var(--prioUltra);\n}\n\n.prio2 {\n\tborder-left-color: var(--prioHigh);\n}\n\n.prio3 {\n\tborder-left-color: var(--prioMedium);\n}\n\n.prio4 {\n\tborder-left-color: var(--prioLow);\n}\n\n.row {\n\tdisplay: flex;\n}\n\n.scroll {\n\theight: 100%;\n\toverflow-y: scroll;\n\tscrollbar-width: none;\n\twidth: 100%;\n}\n\n.scroll::-webkit-scrollbar {\n\tdisplay: none;\n}\n\n.side {\n\theight: calc(100vh - var(--menu));\n\twidth: var(--menu);\n}\n\n.task {\n\talign-items: center;\n\tbackground-color: var(--light);\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tmargin: var(--padding);\n\tpadding: calc(var(--padding) * 2);\n\ttransition: calc(var(--effect) / 2);\n\twidth: auto;\n}\n\n.task:hover {\n\tborder-bottom: var(--border) solid var(--accent);\n}\n\n.top {\n\theight: var(--menu);\n\twidth: calc(100% - var(--menu));\n}\n\n.z10  {\n\tz-index: 10;\n}\n",
					"",
				]);
				const c = i;
			},
			697: (t, r, e) => {
				var n = e(478),
					o = e.n(n),
					a = e(135),
					i = e.n(a),
					c = e(301),
					u = e.n(c),
					l = e(222),
					s = e.n(l),
					f = e(626),
					p = e.n(f),
					h = e(279),
					v = e.n(h),
					d = e(16),
					y = {};
				(y.styleTagTransform = v()),
					(y.setAttributes = s()),
					(y.insert = u().bind(null, "head")),
					(y.domAPI = i()),
					(y.insertStyleElement = p()),
					o()(d.A, y),
					d.A && d.A.locals && d.A.locals;
			},
			478: (t) => {
				var r = [];
				function e(t) {
					for (var e = -1, n = 0; n < r.length; n++)
						if (r[n].identifier === t) {
							e = n;
							break;
						}
					return e;
				}
				function n(t, n) {
					for (var a = {}, i = [], c = 0; c < t.length; c++) {
						var u = t[c],
							l = n.base ? u[0] + n.base : u[0],
							s = a[l] || 0,
							f = "".concat(l, " ").concat(s);
						a[l] = s + 1;
						var p = e(f),
							h = {
								css: u[1],
								media: u[2],
								sourceMap: u[3],
								supports: u[4],
								layer: u[5],
							};
						if (-1 !== p) r[p].references++, r[p].updater(h);
						else {
							var v = o(h, n);
							(n.byIndex = c),
								r.splice(c, 0, {
									identifier: f,
									updater: v,
									references: 1,
								});
						}
						i.push(f);
					}
					return i;
				}
				function o(t, r) {
					var e = r.domAPI(r);
					return (
						e.update(t),
						function (r) {
							if (r) {
								if (
									r.css === t.css &&
									r.media === t.media &&
									r.sourceMap === t.sourceMap &&
									r.supports === t.supports &&
									r.layer === t.layer
								)
									return;
								e.update((t = r));
							} else e.remove();
						}
					);
				}
				t.exports = function (t, o) {
					var a = n((t = t || []), (o = o || {}));
					return function (t) {
						t = t || [];
						for (var i = 0; i < a.length; i++) {
							var c = e(a[i]);
							r[c].references--;
						}
						for (var u = n(t, o), l = 0; l < a.length; l++) {
							var s = e(a[l]);
							0 === r[s].references &&
								(r[s].updater(), r.splice(s, 1));
						}
						a = u;
					};
				};
			},
			301: (t) => {
				var r = {};
				t.exports = function (t, e) {
					var n = (function (t) {
						if (void 0 === r[t]) {
							var e = document.querySelector(t);
							if (
								window.HTMLIFrameElement &&
								e instanceof window.HTMLIFrameElement
							)
								try {
									e = e.contentDocument.head;
								} catch (t) {
									e = null;
								}
							r[t] = e;
						}
						return r[t];
					})(t);
					if (!n)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						);
					n.appendChild(e);
				};
			},
			626: (t) => {
				t.exports = function (t) {
					var r = document.createElement("style");
					return (
						t.setAttributes(r, t.attributes),
						t.insert(r, t.options),
						r
					);
				};
			},
			222: (t, r, e) => {
				t.exports = function (t) {
					var r = e.nc;
					r && t.setAttribute("nonce", r);
				};
			},
			135: (t) => {
				t.exports = function (t) {
					if ("undefined" == typeof document)
						return {
							update: function () {},
							remove: function () {},
						};
					var r = t.insertStyleElement(t);
					return {
						update: function (e) {
							!(function (t, r, e) {
								var n = "";
								e.supports &&
									(n += "@supports (".concat(
										e.supports,
										") {"
									)),
									e.media &&
										(n += "@media ".concat(e.media, " {"));
								var o = void 0 !== e.layer;
								o &&
									(n += "@layer".concat(
										e.layer.length > 0
											? " ".concat(e.layer)
											: "",
										" {"
									)),
									(n += e.css),
									o && (n += "}"),
									e.media && (n += "}"),
									e.supports && (n += "}");
								var a = e.sourceMap;
								a &&
									"undefined" != typeof btoa &&
									(n +=
										"\n/*# sourceMappingURL=data:application/json;base64,".concat(
											btoa(
												unescape(
													encodeURIComponent(
														JSON.stringify(a)
													)
												)
											),
											" */"
										)),
									r.styleTagTransform(n, t, r.options);
							})(r, t, e);
						},
						remove: function () {
							!(function (t) {
								if (null === t.parentNode) return !1;
								t.parentNode.removeChild(t);
							})(r);
						},
					};
				};
			},
			279: (t) => {
				t.exports = function (t, r) {
					if (r.styleSheet) r.styleSheet.cssText = t;
					else {
						for (; r.firstChild; ) r.removeChild(r.firstChild);
						r.appendChild(document.createTextNode(t));
					}
				};
			},
		},
		a = {};
	function i(t) {
		var r = a[t];
		if (void 0 !== r) return r.exports;
		var e = (a[t] = { id: t, exports: {} });
		return o[t](e, e.exports, i), e.exports;
	}
	(t =
		"function" == typeof Symbol
			? Symbol("webpack queues")
			: "__webpack_queues__"),
		(r =
			"function" == typeof Symbol
				? Symbol("webpack exports")
				: "__webpack_exports__"),
		(e =
			"function" == typeof Symbol
				? Symbol("webpack error")
				: "__webpack_error__"),
		(n = (t) => {
			t &&
				t.d < 1 &&
				((t.d = 1),
				t.forEach((t) => t.r--),
				t.forEach((t) => (t.r-- ? t.r++ : t())));
		}),
		(i.a = (o, a, i) => {
			var c;
			i && ((c = []).d = -1);
			var u,
				l,
				s,
				f = new Set(),
				p = o.exports,
				h = new Promise((t, r) => {
					(s = r), (l = t);
				});
			(h[r] = p),
				(h[t] = (t) => (c && t(c), f.forEach(t), h.catch((t) => {}))),
				(o.exports = h),
				a(
					(o) => {
						var a;
						u = ((o) =>
							o.map((o) => {
								if (null !== o && "object" == typeof o) {
									if (o[t]) return o;
									if (o.then) {
										var a = [];
										(a.d = 0),
											o.then(
												(t) => {
													(i[r] = t), n(a);
												},
												(t) => {
													(i[e] = t), n(a);
												}
											);
										var i = {};
										return (i[t] = (t) => t(a)), i;
									}
								}
								var c = {};
								return (c[t] = (t) => {}), (c[r] = o), c;
							}))(o);
						var i = () =>
								u.map((t) => {
									if (t[e]) throw t[e];
									return t[r];
								}),
							l = new Promise((r) => {
								(a = () => r(i)).r = 0;
								var e = (t) =>
									t !== c &&
									!f.has(t) &&
									(f.add(t), t && !t.d && (a.r++, t.push(a)));
								u.map((r) => r[t](e));
							});
						return a.r ? l : i();
					},
					(t) => (t ? s((h[e] = t)) : l(p), n(c))
				),
				c && c.d < 0 && (c.d = 0);
		}),
		(i.n = (t) => {
			var r = t && t.__esModule ? () => t.default : () => t;
			return i.d(r, { a: r }), r;
		}),
		(i.d = (t, r) => {
			for (var e in r)
				i.o(r, e) &&
					!i.o(t, e) &&
					Object.defineProperty(t, e, { enumerable: !0, get: r[e] });
		}),
		(i.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
		(i.nc = void 0),
		i(856);
})();
