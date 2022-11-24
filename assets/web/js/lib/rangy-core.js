/**
 * Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Copyright 2014, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.0-alpha.20140921
 * Build date: 21 September 2014
 */
!(function (e, t) {
  'function' == typeof define && define.amd
    ? define(e)
    : 'undefined' != typeof module && 'object' == typeof exports
    ? (module.exports = e())
    : (t.rangy = e())
})(function () {
  function e(e, t) {
    var n = typeof e[t]
    return n == v || !(n != R || !e[t]) || 'unknown' == n
  }
  function t(e, t) {
    return !(typeof e[t] != R || !e[t])
  }
  function n(e, t) {
    return typeof e[t] != C
  }
  function r(e) {
    return function (t, n) {
      for (var r = n.length; r--; ) if (!e(t, n[r])) return !1
      return !0
    }
  }
  function o(e) {
    return e && w(e, y) && T(e, S)
  }
  function i(e) {
    return t(e, 'body') ? e.body : e.getElementsByTagName('body')[0]
  }
  function a(t) {
    typeof console != C && e(console, 'log') && console.log(t)
  }
  function s(e, t) {
    D && t ? alert(e) : a(e)
  }
  function c(e) {
    ;(A.initialized = !0),
      (A.supported = !1),
      s(
        'Rangy is not supported in this environment. Reason: ' + e,
        A.config.alertOnFail
      )
  }
  function d(e) {
    s('Rangy warning: ' + e, A.config.alertOnWarn)
  }
  function f(e) {
    return e.message || e.description || String(e)
  }
  function u() {
    if (D && !A.initialized) {
      var t,
        n = !1,
        r = !1
      e(document, 'createRange') &&
        ((t = document.createRange()), w(t, E) && T(t, N) && (n = !0))
      var s = i(document)
      if (!s || 'body' != s.nodeName.toLowerCase())
        return void c('No body element found')
      if (
        (s &&
          e(s, 'createTextRange') &&
          ((t = s.createTextRange()), o(t) && (r = !0)),
        !n && !r)
      )
        return void c('Neither Range nor TextRange are available')
      ;(A.initialized = !0),
        (A.features = { implementsDomRange: n, implementsTextRange: r })
      var d, u
      for (var l in _) (d = _[l]) instanceof h && d.init(d, A)
      for (var g = 0, p = I.length; p > g; ++g)
        try {
          I[g](A)
        } catch (m) {
          ;(u =
            'Rangy init listener threw an exception. Continuing. Detail: ' +
            f(m)),
            a(u)
        }
    }
  }
  function l(e) {
    ;(e = e || window), u()
    for (var t = 0, n = B.length; n > t; ++t) B[t](e)
  }
  function h(e, t, n) {
    ;(this.name = e),
      (this.dependencies = t),
      (this.initialized = !1),
      (this.supported = !1),
      (this.initializer = n)
  }
  function g(e, t, n) {
    var r = new h(e, t, function (t) {
      if (!t.initialized) {
        t.initialized = !0
        try {
          n(A, t), (t.supported = !0)
        } catch (r) {
          var o = "Module '" + e + "' failed to load: " + f(r)
          a(o), r.stack && a(r.stack)
        }
      }
    })
    return (_[e] = r), r
  }
  function p() {}
  function m() {}
  var R = 'object',
    v = 'function',
    C = 'undefined',
    N = [
      'startContainer',
      'startOffset',
      'endContainer',
      'endOffset',
      'collapsed',
      'commonAncestorContainer',
    ],
    E = [
      'setStart',
      'setStartBefore',
      'setStartAfter',
      'setEnd',
      'setEndBefore',
      'setEndAfter',
      'collapse',
      'selectNode',
      'selectNodeContents',
      'compareBoundaryPoints',
      'deleteContents',
      'extractContents',
      'cloneContents',
      'insertNode',
      'surroundContents',
      'cloneRange',
      'toString',
      'detach',
    ],
    S = [
      'boundingHeight',
      'boundingLeft',
      'boundingTop',
      'boundingWidth',
      'htmlText',
      'text',
    ],
    y = [
      'collapse',
      'compareEndPoints',
      'duplicate',
      'moveToElementText',
      'parentElement',
      'select',
      'setEndPoint',
      'getBoundingClientRect',
    ],
    w = r(e),
    O = r(t),
    T = r(n),
    _ = {},
    D = typeof window != C && typeof document != C,
    x = {
      isHostMethod: e,
      isHostObject: t,
      isHostProperty: n,
      areHostMethods: w,
      areHostObjects: O,
      areHostProperties: T,
      isTextRange: o,
      getBody: i,
    },
    A = {
      version: '1.3.0-alpha.20140921',
      initialized: !1,
      isBrowser: D,
      supported: !0,
      util: x,
      features: {},
      modules: _,
      config: {
        alertOnFail: !0,
        alertOnWarn: !1,
        preferTextRange: !1,
        autoInitialize:
          typeof rangyAutoInitialize == C ? !0 : rangyAutoInitialize,
      },
    }
  ;(A.fail = c), (A.warn = d)
  var b
  ;({}.hasOwnProperty
    ? ((x.extend = b =
        function (e, t, n) {
          var r, o
          for (var i in t)
            t.hasOwnProperty(i) &&
              ((r = e[i]),
              (o = t[i]),
              n &&
                null !== r &&
                'object' == typeof r &&
                null !== o &&
                'object' == typeof o &&
                b(r, o, !0),
              (e[i] = o))
          return t.hasOwnProperty('toString') && (e.toString = t.toString), e
        }),
      (x.createOptions = function (e, t) {
        var n = {}
        return b(n, t), e && b(n, e), n
      }))
    : c('hasOwnProperty not supported'),
    D || c('Rangy can only run in a browser'),
    (function () {
      var e
      if (D) {
        var t = document.createElement('div')
        t.appendChild(document.createElement('span'))
        var n = [].slice
        try {
          1 == n.call(t.childNodes, 0)[0].nodeType &&
            (e = function (e) {
              return n.call(e, 0)
            })
        } catch (r) {}
      }
      e ||
        (e = function (e) {
          for (var t = [], n = 0, r = e.length; r > n; ++n) t[n] = e[n]
          return t
        }),
        (x.toArray = e)
    })())
  var P
  D &&
    (e(document, 'addEventListener')
      ? (P = function (e, t, n) {
          e.addEventListener(t, n, !1)
        })
      : e(document, 'attachEvent')
      ? (P = function (e, t, n) {
          e.attachEvent('on' + t, n)
        })
      : c(
          'Document does not have required addEventListener or attachEvent method'
        ),
    (x.addListener = P))
  var I = []
  ;(A.init = u),
    (A.addInitListener = function (e) {
      A.initialized ? e(A) : I.push(e)
    })
  var B = []
  ;(A.addShimListener = function (e) {
    B.push(e)
  }),
    D && (A.shim = A.createMissingNativeApi = l),
    (h.prototype = {
      init: function () {
        for (
          var e, t, n = this.dependencies || [], r = 0, o = n.length;
          o > r;
          ++r
        ) {
          if (((t = n[r]), (e = _[t]), !(e && e instanceof h)))
            throw new Error("required module '" + t + "' not found")
          if ((e.init(), !e.supported))
            throw new Error("required module '" + t + "' not supported")
        }
        this.initializer(this)
      },
      fail: function (e) {
        throw (
          ((this.initialized = !0),
          (this.supported = !1),
          new Error("Module '" + this.name + "' failed to load: " + e))
        )
      },
      warn: function (e) {
        A.warn('Module ' + this.name + ': ' + e)
      },
      deprecationNotice: function (e, t) {
        A.warn(
          'DEPRECATED: ' +
            e +
            ' in module ' +
            this.name +
            'is deprecated. Please use ' +
            t +
            ' instead'
        )
      },
      createError: function (e) {
        return new Error('Error in Rangy ' + this.name + ' module: ' + e)
      },
    }),
    (A.createModule = function (e) {
      var t, n
      2 == arguments.length
        ? ((t = arguments[1]), (n = []))
        : ((t = arguments[2]), (n = arguments[1]))
      var r = g(e, n, t)
      A.initialized && A.supported && r.init()
    }),
    (A.createCoreModule = function (e, t, n) {
      g(e, t, n)
    }),
    (A.RangePrototype = p),
    (A.rangePrototype = new p()),
    (A.selectionPrototype = new m()),
    A.createCoreModule('DomUtil', [], function (e, t) {
      function n(e) {
        var t
        return (
          typeof e.namespaceURI == x ||
          null === (t = e.namespaceURI) ||
          'http://www.w3.org/1999/xhtml' == t
        )
      }
      function r(e) {
        var t = e.parentNode
        return 1 == t.nodeType ? t : null
      }
      function o(e) {
        for (var t = 0; (e = e.previousSibling); ) ++t
        return t
      }
      function i(e) {
        switch (e.nodeType) {
          case 7:
          case 10:
            return 0
          case 3:
          case 8:
            return e.length
          default:
            return e.childNodes.length
        }
      }
      function a(e, t) {
        var n,
          r = []
        for (n = e; n; n = n.parentNode) r.push(n)
        for (n = t; n; n = n.parentNode) if (I(r, n)) return n
        return null
      }
      function s(e, t, n) {
        for (var r = n ? t : t.parentNode; r; ) {
          if (r === e) return !0
          r = r.parentNode
        }
        return !1
      }
      function c(e, t) {
        return s(e, t, !0)
      }
      function d(e, t, n) {
        for (var r, o = n ? e : e.parentNode; o; ) {
          if (((r = o.parentNode), r === t)) return o
          o = r
        }
        return null
      }
      function f(e) {
        var t = e.nodeType
        return 3 == t || 4 == t || 8 == t
      }
      function u(e) {
        if (!e) return !1
        var t = e.nodeType
        return 3 == t || 8 == t
      }
      function l(e, t) {
        var n = t.nextSibling,
          r = t.parentNode
        return n ? r.insertBefore(e, n) : r.appendChild(e), e
      }
      function h(e, t, n) {
        var r = e.cloneNode(!1)
        if ((r.deleteData(0, t), e.deleteData(t, e.length - t), l(r, e), n))
          for (var i, a = 0; (i = n[a++]); )
            i.node == e && i.offset > t
              ? ((i.node = r), (i.offset -= t))
              : i.node == e.parentNode && i.offset > o(e) && ++i.offset
        return r
      }
      function g(e) {
        if (9 == e.nodeType) return e
        if (typeof e.ownerDocument != x) return e.ownerDocument
        if (typeof e.document != x) return e.document
        if (e.parentNode) return g(e.parentNode)
        throw t.createError('getDocument: no document found for node')
      }
      function p(e) {
        var n = g(e)
        if (typeof n.defaultView != x) return n.defaultView
        if (typeof n.parentWindow != x) return n.parentWindow
        throw t.createError('Cannot get a window object for node')
      }
      function m(e) {
        if (typeof e.contentDocument != x) return e.contentDocument
        if (typeof e.contentWindow != x) return e.contentWindow.document
        throw t.createError(
          'getIframeDocument: No Document object found for iframe element'
        )
      }
      function R(e) {
        if (typeof e.contentWindow != x) return e.contentWindow
        if (typeof e.contentDocument != x) return e.contentDocument.defaultView
        throw t.createError(
          'getIframeWindow: No Window object found for iframe element'
        )
      }
      function v(e) {
        return (
          e && A.isHostMethod(e, 'setTimeout') && A.isHostObject(e, 'document')
        )
      }
      function C(e, t, n) {
        var r
        if (
          (e
            ? A.isHostProperty(e, 'nodeType')
              ? (r =
                  1 == e.nodeType && 'iframe' == e.tagName.toLowerCase()
                    ? m(e)
                    : g(e))
              : v(e) && (r = e.document)
            : (r = document),
          !r)
        )
          throw t.createError(
            n + '(): Parameter must be a Window object or DOM node'
          )
        return r
      }
      function N(e) {
        for (var t; (t = e.parentNode); ) e = t
        return e
      }
      function E(e, n, r, i) {
        var s, c, f, u, l
        if (e == r) return n === i ? 0 : i > n ? -1 : 1
        if ((s = d(r, e, !0))) return n <= o(s) ? -1 : 1
        if ((s = d(e, r, !0))) return o(s) < i ? -1 : 1
        if (((c = a(e, r)), !c))
          throw new Error('comparePoints error: nodes have no common ancestor')
        if (
          ((f = e === c ? c : d(e, c, !0)),
          (u = r === c ? c : d(r, c, !0)),
          f === u)
        )
          throw t.createError(
            'comparePoints got to case 4 and childA and childB are the same!'
          )
        for (l = c.firstChild; l; ) {
          if (l === f) return -1
          if (l === u) return 1
          l = l.nextSibling
        }
      }
      function S(e) {
        var t
        try {
          return (t = e.parentNode), !1
        } catch (n) {
          return !0
        }
      }
      function y(e) {
        if (!e) return '[No node]'
        if (B && S(e)) return '[Broken node]'
        if (f(e)) return '"' + e.data + '"'
        if (1 == e.nodeType) {
          var t = e.id ? ' id="' + e.id + '"' : ''
          return (
            '<' +
            e.nodeName +
            t +
            '>[index:' +
            o(e) +
            ',length:' +
            e.childNodes.length +
            '][' +
            (e.innerHTML || '[innerHTML not supported]').slice(0, 25) +
            ']'
          )
        }
        return e.nodeName
      }
      function w(e) {
        for (var t, n = g(e).createDocumentFragment(); (t = e.firstChild); )
          n.appendChild(t)
        return n
      }
      function O(e) {
        ;(this.root = e), (this._next = e)
      }
      function T(e) {
        return new O(e)
      }
      function _(e, t) {
        ;(this.node = e), (this.offset = t)
      }
      function D(e) {
        ;(this.code = this[e]),
          (this.codeName = e),
          (this.message = 'DOMException: ' + this.codeName)
      }
      var x = 'undefined',
        A = e.util
      A.areHostMethods(document, [
        'createDocumentFragment',
        'createElement',
        'createTextNode',
      ]) || t.fail('document missing a Node creation method'),
        A.isHostMethod(document, 'getElementsByTagName') ||
          t.fail('document missing getElementsByTagName method')
      var b = document.createElement('div')
      A.areHostMethods(
        b,
        ['insertBefore', 'appendChild', 'cloneNode'] ||
          !A.areHostObjects(b, [
            'previousSibling',
            'nextSibling',
            'childNodes',
            'parentNode',
          ])
      ) || t.fail('Incomplete Element implementation'),
        A.isHostProperty(b, 'innerHTML') ||
          t.fail('Element is missing innerHTML property')
      var P = document.createTextNode('test')
      A.areHostMethods(
        P,
        ['splitText', 'deleteData', 'insertData', 'appendData', 'cloneNode'] ||
          !A.areHostObjects(b, [
            'previousSibling',
            'nextSibling',
            'childNodes',
            'parentNode',
          ]) ||
          !A.areHostProperties(P, ['data'])
      ) || t.fail('Incomplete Text Node implementation')
      var I = function (e, t) {
          for (var n = e.length; n--; ) if (e[n] === t) return !0
          return !1
        },
        B = !1
      !(function () {
        var t = document.createElement('b')
        t.innerHTML = '1'
        var n = t.firstChild
        ;(t.innerHTML = '<br />'), (B = S(n)), (e.features.crashyTextNodes = B)
      })()
      var H
      typeof window.getComputedStyle != x
        ? (H = function (e, t) {
            return p(e).getComputedStyle(e, null)[t]
          })
        : typeof document.documentElement.currentStyle != x
        ? (H = function (e, t) {
            return e.currentStyle[t]
          })
        : t.fail('No means of obtaining computed style properties found'),
        (O.prototype = {
          _current: null,
          hasNext: function () {
            return !!this._next
          },
          next: function () {
            var e,
              t,
              n = (this._current = this._next)
            if (this._current)
              if ((e = n.firstChild)) this._next = e
              else {
                for (t = null; n !== this.root && !(t = n.nextSibling); )
                  n = n.parentNode
                this._next = t
              }
            return this._current
          },
          detach: function () {
            this._current = this._next = this.root = null
          },
        }),
        (_.prototype = {
          equals: function (e) {
            return !!e && this.node === e.node && this.offset == e.offset
          },
          inspect: function () {
            return '[DomPosition(' + y(this.node) + ':' + this.offset + ')]'
          },
          toString: function () {
            return this.inspect()
          },
        }),
        (D.prototype = {
          INDEX_SIZE_ERR: 1,
          HIERARCHY_REQUEST_ERR: 3,
          WRONG_DOCUMENT_ERR: 4,
          NO_MODIFICATION_ALLOWED_ERR: 7,
          NOT_FOUND_ERR: 8,
          NOT_SUPPORTED_ERR: 9,
          INVALID_STATE_ERR: 11,
          INVALID_NODE_TYPE_ERR: 24,
        }),
        (D.prototype.toString = function () {
          return this.message
        }),
        (e.dom = {
          arrayContains: I,
          isHtmlNamespace: n,
          parentElement: r,
          getNodeIndex: o,
          getNodeLength: i,
          getCommonAncestor: a,
          isAncestorOf: s,
          isOrIsAncestorOf: c,
          getClosestAncestorIn: d,
          isCharacterDataNode: f,
          isTextOrCommentNode: u,
          insertAfter: l,
          splitDataNode: h,
          getDocument: g,
          getWindow: p,
          getIframeWindow: R,
          getIframeDocument: m,
          getBody: A.getBody,
          isWindow: v,
          getContentDocument: C,
          getRootContainer: N,
          comparePoints: E,
          isBrokenNode: S,
          inspectNode: y,
          getComputedStyleProperty: H,
          fragmentFromNodeChildren: w,
          createIterator: T,
          DomPosition: _,
        }),
        (e.DOMException = D)
    }),
    A.createCoreModule('DomRange', ['DomUtil'], function (e) {
      function t(e, t) {
        return (
          3 != e.nodeType && (F(e, t.startContainer) || F(e, t.endContainer))
        )
      }
      function n(e) {
        return e.document || j(e.startContainer)
      }
      function r(e) {
        return new M(e.parentNode, k(e))
      }
      function o(e) {
        return new M(e.parentNode, k(e) + 1)
      }
      function i(e, t, n) {
        var r = 11 == e.nodeType ? e.firstChild : e
        return (
          W(t)
            ? n == t.length
              ? B.insertAfter(e, t)
              : t.parentNode.insertBefore(e, 0 == n ? t : U(t, n))
            : n >= t.childNodes.length
            ? t.appendChild(e)
            : t.insertBefore(e, t.childNodes[n]),
          r
        )
      }
      function a(e, t, r) {
        if ((w(e), w(t), n(t) != n(e))) throw new L('WRONG_DOCUMENT_ERR')
        var o = z(e.startContainer, e.startOffset, t.endContainer, t.endOffset),
          i = z(e.endContainer, e.endOffset, t.startContainer, t.startOffset)
        return r ? 0 >= o && i >= 0 : 0 > o && i > 0
      }
      function s(e) {
        for (
          var t, r, o, i = n(e.range).createDocumentFragment();
          (r = e.next());

        ) {
          if (
            ((t = e.isPartiallySelectedSubtree()),
            (r = r.cloneNode(!t)),
            t &&
              ((o = e.getSubtreeIterator()), r.appendChild(s(o)), o.detach()),
            10 == r.nodeType)
          )
            throw new L('HIERARCHY_REQUEST_ERR')
          i.appendChild(r)
        }
        return i
      }
      function c(e, t, n) {
        var r, o
        n = n || { stop: !1 }
        for (var i, a; (i = e.next()); )
          if (e.isPartiallySelectedSubtree()) {
            if (t(i) === !1) return void (n.stop = !0)
            if (((a = e.getSubtreeIterator()), c(a, t, n), a.detach(), n.stop))
              return
          } else
            for (r = B.createIterator(i); (o = r.next()); )
              if (t(o) === !1) return void (n.stop = !0)
      }
      function d(e) {
        for (var t; e.next(); )
          e.isPartiallySelectedSubtree()
            ? ((t = e.getSubtreeIterator()), d(t), t.detach())
            : e.remove()
      }
      function f(e) {
        for (
          var t, r, o = n(e.range).createDocumentFragment();
          (t = e.next());

        ) {
          if (
            (e.isPartiallySelectedSubtree()
              ? ((t = t.cloneNode(!1)),
                (r = e.getSubtreeIterator()),
                t.appendChild(f(r)),
                r.detach())
              : e.remove(),
            10 == t.nodeType)
          )
            throw new L('HIERARCHY_REQUEST_ERR')
          o.appendChild(t)
        }
        return o
      }
      function u(e, t, n) {
        var r,
          o = !(!t || !t.length),
          i = !!n
        o && (r = new RegExp('^(' + t.join('|') + ')$'))
        var a = []
        return (
          c(new h(e, !1), function (t) {
            if (!((o && !r.test(t.nodeType)) || (i && !n(t)))) {
              var s = e.startContainer
              if (t != s || !W(s) || e.startOffset != s.length) {
                var c = e.endContainer
                ;(t == c && W(c) && 0 == e.endOffset) || a.push(t)
              }
            }
          }),
          a
        )
      }
      function l(e) {
        var t = 'undefined' == typeof e.getName ? 'Range' : e.getName()
        return (
          '[' +
          t +
          '(' +
          B.inspectNode(e.startContainer) +
          ':' +
          e.startOffset +
          ', ' +
          B.inspectNode(e.endContainer) +
          ':' +
          e.endOffset +
          ')]'
        )
      }
      function h(e, t) {
        if (
          ((this.range = e),
          (this.clonePartiallySelectedTextNodes = t),
          !e.collapsed)
        ) {
          ;(this.sc = e.startContainer),
            (this.so = e.startOffset),
            (this.ec = e.endContainer),
            (this.eo = e.endOffset)
          var n = e.commonAncestorContainer
          this.sc === this.ec && W(this.sc)
            ? ((this.isSingleCharacterDataNode = !0),
              (this._first = this._last = this._next = this.sc))
            : ((this._first = this._next =
                this.sc !== n || W(this.sc)
                  ? V(this.sc, n, !0)
                  : this.sc.childNodes[this.so]),
              (this._last =
                this.ec !== n || W(this.ec)
                  ? V(this.ec, n, !0)
                  : this.ec.childNodes[this.eo - 1]))
        }
      }
      function g(e) {
        return function (t, n) {
          for (var r, o = n ? t : t.parentNode; o; ) {
            if (((r = o.nodeType), Y(e, r))) return o
            o = o.parentNode
          }
          return null
        }
      }
      function p(e, t) {
        if (nt(e, t)) throw new L('INVALID_NODE_TYPE_ERR')
      }
      function m(e, t) {
        if (!Y(t, e.nodeType)) throw new L('INVALID_NODE_TYPE_ERR')
      }
      function R(e, t) {
        if (0 > t || t > (W(e) ? e.length : e.childNodes.length))
          throw new L('INDEX_SIZE_ERR')
      }
      function v(e, t) {
        if (et(e, !0) !== et(t, !0)) throw new L('WRONG_DOCUMENT_ERR')
      }
      function C(e) {
        if (tt(e, !0)) throw new L('NO_MODIFICATION_ALLOWED_ERR')
      }
      function N(e, t) {
        if (!e) throw new L(t)
      }
      function E(e) {
        return (G && B.isBrokenNode(e)) || (!Y(Z, e.nodeType) && !et(e, !0))
      }
      function S(e, t) {
        return t <= (W(e) ? e.length : e.childNodes.length)
      }
      function y(e) {
        return (
          !!e.startContainer &&
          !!e.endContainer &&
          !E(e.startContainer) &&
          !E(e.endContainer) &&
          S(e.startContainer, e.startOffset) &&
          S(e.endContainer, e.endOffset)
        )
      }
      function w(e) {
        if (!y(e))
          throw new Error(
            'Range error: Range is no longer valid after DOM mutation (' +
              e.inspect() +
              ')'
          )
      }
      function O(e, t) {
        w(e)
        var n = e.startContainer,
          r = e.startOffset,
          o = e.endContainer,
          i = e.endOffset,
          a = n === o
        W(o) && i > 0 && i < o.length && U(o, i, t),
          W(n) &&
            r > 0 &&
            r < n.length &&
            ((n = U(n, r, t)),
            a ? ((i -= r), (o = n)) : o == n.parentNode && i >= k(n) && i++,
            (r = 0)),
          e.setStartAndEnd(n, r, o, i)
      }
      function T(e) {
        w(e)
        var t = e.commonAncestorContainer.parentNode.cloneNode(!1)
        return t.appendChild(e.cloneContents()), t.innerHTML
      }
      function _(e) {
        ;(e.START_TO_START = ct),
          (e.START_TO_END = dt),
          (e.END_TO_END = ft),
          (e.END_TO_START = ut),
          (e.NODE_BEFORE = lt),
          (e.NODE_AFTER = ht),
          (e.NODE_BEFORE_AND_AFTER = gt),
          (e.NODE_INSIDE = pt)
      }
      function D(e) {
        _(e), _(e.prototype)
      }
      function x(e, t) {
        return function () {
          w(this)
          var n,
            r,
            i = this.startContainer,
            a = this.startOffset,
            s = this.commonAncestorContainer,
            d = new h(this, !0)
          i !== s &&
            ((n = V(i, s, !0)), (r = o(n)), (i = r.node), (a = r.offset)),
            c(d, C),
            d.reset()
          var f = e(d)
          return d.detach(), t(this, i, a, i, a), f
        }
      }
      function A(n, i) {
        function a(e, t) {
          return function (n) {
            m(n, X), m(Q(n), Z)
            var i = (e ? r : o)(n)
            ;(t ? s : c)(this, i.node, i.offset)
          }
        }
        function s(e, t, n) {
          var r = e.endContainer,
            o = e.endOffset
          ;(t !== e.startContainer || n !== e.startOffset) &&
            ((Q(t) != Q(r) || 1 == z(t, n, r, o)) && ((r = t), (o = n)),
            i(e, t, n, r, o))
        }
        function c(e, t, n) {
          var r = e.startContainer,
            o = e.startOffset
          ;(t !== e.endContainer || n !== e.endOffset) &&
            ((Q(t) != Q(r) || -1 == z(t, n, r, o)) && ((r = t), (o = n)),
            i(e, r, o, t, n))
        }
        var u = function () {}
        ;(u.prototype = e.rangePrototype),
          (n.prototype = new u()),
          H.extend(n.prototype, {
            setStart: function (e, t) {
              p(e, !0), R(e, t), s(this, e, t)
            },
            setEnd: function (e, t) {
              p(e, !0), R(e, t), c(this, e, t)
            },
            setStartAndEnd: function () {
              var e = arguments,
                t = e[0],
                n = e[1],
                r = t,
                o = n
              switch (e.length) {
                case 3:
                  o = e[2]
                  break
                case 4:
                  ;(r = e[2]), (o = e[3])
              }
              i(this, t, n, r, o)
            },
            setBoundary: function (e, t, n) {
              this['set' + (n ? 'Start' : 'End')](e, t)
            },
            setStartBefore: a(!0, !0),
            setStartAfter: a(!1, !0),
            setEndBefore: a(!0, !1),
            setEndAfter: a(!1, !1),
            collapse: function (e) {
              w(this),
                e
                  ? i(
                      this,
                      this.startContainer,
                      this.startOffset,
                      this.startContainer,
                      this.startOffset
                    )
                  : i(
                      this,
                      this.endContainer,
                      this.endOffset,
                      this.endContainer,
                      this.endOffset
                    )
            },
            selectNodeContents: function (e) {
              p(e, !0), i(this, e, 0, e, q(e))
            },
            selectNode: function (e) {
              p(e, !1), m(e, X)
              var t = r(e),
                n = o(e)
              i(this, t.node, t.offset, n.node, n.offset)
            },
            extractContents: x(f, i),
            deleteContents: x(d, i),
            canSurroundContents: function () {
              w(this), C(this.startContainer), C(this.endContainer)
              var e = new h(this, !0),
                n =
                  (e._first && t(e._first, this)) ||
                  (e._last && t(e._last, this))
              return e.detach(), !n
            },
            splitBoundaries: function () {
              O(this)
            },
            splitBoundariesPreservingPositions: function (e) {
              O(this, e)
            },
            normalizeBoundaries: function () {
              w(this)
              var e = this.startContainer,
                t = this.startOffset,
                n = this.endContainer,
                r = this.endOffset,
                o = function (e) {
                  var t = e.nextSibling
                  t &&
                    t.nodeType == e.nodeType &&
                    ((n = e),
                    (r = e.length),
                    e.appendData(t.data),
                    t.parentNode.removeChild(t))
                },
                a = function (o) {
                  var i = o.previousSibling
                  if (i && i.nodeType == o.nodeType) {
                    e = o
                    var a = o.length
                    if (
                      ((t = i.length),
                      o.insertData(0, i.data),
                      i.parentNode.removeChild(i),
                      e == n)
                    )
                      (r += t), (n = e)
                    else if (n == o.parentNode) {
                      var s = k(o)
                      r == s ? ((n = o), (r = a)) : r > s && r--
                    }
                  }
                },
                s = !0
              if (W(n)) n.length == r && o(n)
              else {
                if (r > 0) {
                  var c = n.childNodes[r - 1]
                  c && W(c) && o(c)
                }
                s = !this.collapsed
              }
              if (s) {
                if (W(e)) 0 == t && a(e)
                else if (t < e.childNodes.length) {
                  var d = e.childNodes[t]
                  d && W(d) && a(d)
                }
              } else (e = n), (t = r)
              i(this, e, t, n, r)
            },
            collapseToPoint: function (e, t) {
              p(e, !0), R(e, t), this.setStartAndEnd(e, t)
            },
          }),
          D(n)
      }
      function b(e) {
        ;(e.collapsed =
          e.startContainer === e.endContainer && e.startOffset === e.endOffset),
          (e.commonAncestorContainer = e.collapsed
            ? e.startContainer
            : B.getCommonAncestor(e.startContainer, e.endContainer))
      }
      function P(e, t, n, r, o) {
        ;(e.startContainer = t),
          (e.startOffset = n),
          (e.endContainer = r),
          (e.endOffset = o),
          (e.document = B.getDocument(t)),
          b(e)
      }
      function I(e) {
        ;(this.startContainer = e),
          (this.startOffset = 0),
          (this.endContainer = e),
          (this.endOffset = 0),
          (this.document = e),
          b(this)
      }
      var B = e.dom,
        H = e.util,
        M = B.DomPosition,
        L = e.DOMException,
        W = B.isCharacterDataNode,
        k = B.getNodeIndex,
        F = B.isOrIsAncestorOf,
        j = B.getDocument,
        z = B.comparePoints,
        U = B.splitDataNode,
        V = B.getClosestAncestorIn,
        q = B.getNodeLength,
        Y = B.arrayContains,
        Q = B.getRootContainer,
        G = e.features.crashyTextNodes
      h.prototype = {
        _current: null,
        _next: null,
        _first: null,
        _last: null,
        isSingleCharacterDataNode: !1,
        reset: function () {
          ;(this._current = null), (this._next = this._first)
        },
        hasNext: function () {
          return !!this._next
        },
        next: function () {
          var e = (this._current = this._next)
          return (
            e &&
              ((this._next = e !== this._last ? e.nextSibling : null),
              W(e) &&
                this.clonePartiallySelectedTextNodes &&
                (e === this.ec &&
                  (e = e.cloneNode(!0)).deleteData(this.eo, e.length - this.eo),
                this._current === this.sc &&
                  (e = e.cloneNode(!0)).deleteData(0, this.so))),
            e
          )
        },
        remove: function () {
          var e,
            t,
            n = this._current
          !W(n) || (n !== this.sc && n !== this.ec)
            ? n.parentNode && n.parentNode.removeChild(n)
            : ((e = n === this.sc ? this.so : 0),
              (t = n === this.ec ? this.eo : n.length),
              e != t && n.deleteData(e, t - e))
        },
        isPartiallySelectedSubtree: function () {
          var e = this._current
          return t(e, this.range)
        },
        getSubtreeIterator: function () {
          var e
          if (this.isSingleCharacterDataNode)
            (e = this.range.cloneRange()), e.collapse(!1)
          else {
            e = new I(n(this.range))
            var t = this._current,
              r = t,
              o = 0,
              i = t,
              a = q(t)
            F(t, this.sc) && ((r = this.sc), (o = this.so)),
              F(t, this.ec) && ((i = this.ec), (a = this.eo)),
              P(e, r, o, i, a)
          }
          return new h(e, this.clonePartiallySelectedTextNodes)
        },
        detach: function () {
          this.range =
            this._current =
            this._next =
            this._first =
            this._last =
            this.sc =
            this.so =
            this.ec =
            this.eo =
              null
        },
      }
      var X = [1, 3, 4, 5, 7, 8, 10],
        Z = [2, 9, 11],
        $ = [5, 6, 10, 12],
        J = [1, 3, 4, 5, 7, 8, 10, 11],
        K = [1, 3, 4, 5, 7, 8],
        et = g([9, 11]),
        tt = g($),
        nt = g([6, 10, 12]),
        rt = document.createElement('style'),
        ot = !1
      try {
        ;(rt.innerHTML = '<b>x</b>'), (ot = 3 == rt.firstChild.nodeType)
      } catch (it) {}
      e.features.htmlParsingConforms = ot
      var at = ot
          ? function (e) {
              var t = this.startContainer,
                n = j(t)
              if (!t) throw new L('INVALID_STATE_ERR')
              var r = null
              return (
                1 == t.nodeType ? (r = t) : W(t) && (r = B.parentElement(t)),
                (r =
                  null === r ||
                  ('HTML' == r.nodeName &&
                    B.isHtmlNamespace(j(r).documentElement) &&
                    B.isHtmlNamespace(r))
                    ? n.createElement('body')
                    : r.cloneNode(!1)),
                (r.innerHTML = e),
                B.fragmentFromNodeChildren(r)
              )
            }
          : function (e) {
              var t = n(this),
                r = t.createElement('body')
              return (r.innerHTML = e), B.fragmentFromNodeChildren(r)
            },
        st = [
          'startContainer',
          'startOffset',
          'endContainer',
          'endOffset',
          'collapsed',
          'commonAncestorContainer',
        ],
        ct = 0,
        dt = 1,
        ft = 2,
        ut = 3,
        lt = 0,
        ht = 1,
        gt = 2,
        pt = 3
      H.extend(e.rangePrototype, {
        compareBoundaryPoints: function (e, t) {
          w(this), v(this.startContainer, t.startContainer)
          var n,
            r,
            o,
            i,
            a = e == ut || e == ct ? 'start' : 'end',
            s = e == dt || e == ct ? 'start' : 'end'
          return (
            (n = this[a + 'Container']),
            (r = this[a + 'Offset']),
            (o = t[s + 'Container']),
            (i = t[s + 'Offset']),
            z(n, r, o, i)
          )
        },
        insertNode: function (e) {
          if (
            (w(this),
            m(e, J),
            C(this.startContainer),
            F(e, this.startContainer))
          )
            throw new L('HIERARCHY_REQUEST_ERR')
          var t = i(e, this.startContainer, this.startOffset)
          this.setStartBefore(t)
        },
        cloneContents: function () {
          w(this)
          var e, t
          if (this.collapsed) return n(this).createDocumentFragment()
          if (
            this.startContainer === this.endContainer &&
            W(this.startContainer)
          )
            return (
              (e = this.startContainer.cloneNode(!0)),
              (e.data = e.data.slice(this.startOffset, this.endOffset)),
              (t = n(this).createDocumentFragment()),
              t.appendChild(e),
              t
            )
          var r = new h(this, !0)
          return (e = s(r)), r.detach(), e
        },
        canSurroundContents: function () {
          w(this), C(this.startContainer), C(this.endContainer)
          var e = new h(this, !0),
            n = (e._first && t(e._first, this)) || (e._last && t(e._last, this))
          return e.detach(), !n
        },
        surroundContents: function (e) {
          if ((m(e, K), !this.canSurroundContents()))
            throw new L('INVALID_STATE_ERR')
          var t = this.extractContents()
          if (e.hasChildNodes())
            for (; e.lastChild; ) e.removeChild(e.lastChild)
          i(e, this.startContainer, this.startOffset),
            e.appendChild(t),
            this.selectNode(e)
        },
        cloneRange: function () {
          w(this)
          for (var e, t = new I(n(this)), r = st.length; r--; )
            (e = st[r]), (t[e] = this[e])
          return t
        },
        toString: function () {
          w(this)
          var e = this.startContainer
          if (e === this.endContainer && W(e))
            return 3 == e.nodeType || 4 == e.nodeType
              ? e.data.slice(this.startOffset, this.endOffset)
              : ''
          var t = [],
            n = new h(this, !0)
          return (
            c(n, function (e) {
              ;(3 == e.nodeType || 4 == e.nodeType) && t.push(e.data)
            }),
            n.detach(),
            t.join('')
          )
        },
        compareNode: function (e) {
          w(this)
          var t = e.parentNode,
            n = k(e)
          if (!t) throw new L('NOT_FOUND_ERR')
          var r = this.comparePoint(t, n),
            o = this.comparePoint(t, n + 1)
          return 0 > r ? (o > 0 ? gt : lt) : o > 0 ? ht : pt
        },
        comparePoint: function (e, t) {
          return (
            w(this),
            N(e, 'HIERARCHY_REQUEST_ERR'),
            v(e, this.startContainer),
            z(e, t, this.startContainer, this.startOffset) < 0
              ? -1
              : z(e, t, this.endContainer, this.endOffset) > 0
              ? 1
              : 0
          )
        },
        createContextualFragment: at,
        toHtml: function () {
          return T(this)
        },
        intersectsNode: function (e, t) {
          if ((w(this), N(e, 'NOT_FOUND_ERR'), j(e) !== n(this))) return !1
          var r = e.parentNode,
            o = k(e)
          N(r, 'NOT_FOUND_ERR')
          var i = z(r, o, this.endContainer, this.endOffset),
            a = z(r, o + 1, this.startContainer, this.startOffset)
          return t ? 0 >= i && a >= 0 : 0 > i && a > 0
        },
        isPointInRange: function (e, t) {
          return (
            w(this),
            N(e, 'HIERARCHY_REQUEST_ERR'),
            v(e, this.startContainer),
            z(e, t, this.startContainer, this.startOffset) >= 0 &&
              z(e, t, this.endContainer, this.endOffset) <= 0
          )
        },
        intersectsRange: function (e) {
          return a(this, e, !1)
        },
        intersectsOrTouchesRange: function (e) {
          return a(this, e, !0)
        },
        intersection: function (e) {
          if (this.intersectsRange(e)) {
            var t = z(
                this.startContainer,
                this.startOffset,
                e.startContainer,
                e.startOffset
              ),
              n = z(
                this.endContainer,
                this.endOffset,
                e.endContainer,
                e.endOffset
              ),
              r = this.cloneRange()
            return (
              -1 == t && r.setStart(e.startContainer, e.startOffset),
              1 == n && r.setEnd(e.endContainer, e.endOffset),
              r
            )
          }
          return null
        },
        union: function (e) {
          if (this.intersectsOrTouchesRange(e)) {
            var t = this.cloneRange()
            return (
              -1 ==
                z(
                  e.startContainer,
                  e.startOffset,
                  this.startContainer,
                  this.startOffset
                ) && t.setStart(e.startContainer, e.startOffset),
              1 ==
                z(
                  e.endContainer,
                  e.endOffset,
                  this.endContainer,
                  this.endOffset
                ) && t.setEnd(e.endContainer, e.endOffset),
              t
            )
          }
          throw new L('Ranges do not intersect')
        },
        containsNode: function (e, t) {
          return t ? this.intersectsNode(e, !1) : this.compareNode(e) == pt
        },
        containsNodeContents: function (e) {
          return this.comparePoint(e, 0) >= 0 && this.comparePoint(e, q(e)) <= 0
        },
        containsRange: function (e) {
          var t = this.intersection(e)
          return null !== t && e.equals(t)
        },
        containsNodeText: function (e) {
          var t = this.cloneRange()
          t.selectNode(e)
          var n = t.getNodes([3])
          if (n.length > 0) {
            t.setStart(n[0], 0)
            var r = n.pop()
            return t.setEnd(r, r.length), this.containsRange(t)
          }
          return this.containsNodeContents(e)
        },
        getNodes: function (e, t) {
          return w(this), u(this, e, t)
        },
        getDocument: function () {
          return n(this)
        },
        collapseBefore: function (e) {
          this.setEndBefore(e), this.collapse(!1)
        },
        collapseAfter: function (e) {
          this.setStartAfter(e), this.collapse(!0)
        },
        getBookmark: function (t) {
          var r = n(this),
            o = e.createRange(r)
          ;(t = t || B.getBody(r)), o.selectNodeContents(t)
          var i = this.intersection(o),
            a = 0,
            s = 0
          return (
            i &&
              (o.setEnd(i.startContainer, i.startOffset),
              (a = o.toString().length),
              (s = a + i.toString().length)),
            { start: a, end: s, containerNode: t }
          )
        },
        moveToBookmark: function (e) {
          var t = e.containerNode,
            n = 0
          this.setStart(t, 0), this.collapse(!0)
          for (var r, o, i, a, s = [t], c = !1, d = !1; !d && (r = s.pop()); )
            if (3 == r.nodeType)
              (o = n + r.length),
                !c &&
                  e.start >= n &&
                  e.start <= o &&
                  (this.setStart(r, e.start - n), (c = !0)),
                c &&
                  e.end >= n &&
                  e.end <= o &&
                  (this.setEnd(r, e.end - n), (d = !0)),
                (n = o)
            else for (a = r.childNodes, i = a.length; i--; ) s.push(a[i])
        },
        getName: function () {
          return 'DomRange'
        },
        equals: function (e) {
          return I.rangesEqual(this, e)
        },
        isValid: function () {
          return y(this)
        },
        inspect: function () {
          return l(this)
        },
        detach: function () {},
      }),
        A(I, P),
        H.extend(I, {
          rangeProperties: st,
          RangeIterator: h,
          copyComparisonConstants: D,
          createPrototypeRange: A,
          inspect: l,
          toHtml: T,
          getRangeDocument: n,
          rangesEqual: function (e, t) {
            return (
              e.startContainer === t.startContainer &&
              e.startOffset === t.startOffset &&
              e.endContainer === t.endContainer &&
              e.endOffset === t.endOffset
            )
          },
        }),
        (e.DomRange = I)
    }),
    A.createCoreModule('WrappedRange', ['DomRange'], function (e, t) {
      var n,
        r,
        o = e.dom,
        i = e.util,
        a = o.DomPosition,
        s = e.DomRange,
        c = o.getBody,
        d = o.getContentDocument,
        f = o.isCharacterDataNode
      if (
        (e.features.implementsDomRange &&
          !(function () {
            function r(e) {
              for (var t, n = l.length; n--; )
                (t = l[n]), (e[t] = e.nativeRange[t])
              e.collapsed =
                e.startContainer === e.endContainer &&
                e.startOffset === e.endOffset
            }
            function a(e, t, n, r, o) {
              var i = e.startContainer !== t || e.startOffset != n,
                a = e.endContainer !== r || e.endOffset != o,
                s = !e.equals(e.nativeRange)
              ;(i || a || s) && (e.setEnd(r, o), e.setStart(t, n))
            }
            var f,
              u,
              l = s.rangeProperties
            ;(n = function (e) {
              if (!e)
                throw t.createError('WrappedRange: Range must be specified')
              ;(this.nativeRange = e), r(this)
            }),
              s.createPrototypeRange(n, a),
              (f = n.prototype),
              (f.selectNode = function (e) {
                this.nativeRange.selectNode(e), r(this)
              }),
              (f.cloneContents = function () {
                return this.nativeRange.cloneContents()
              }),
              (f.surroundContents = function (e) {
                this.nativeRange.surroundContents(e), r(this)
              }),
              (f.collapse = function (e) {
                this.nativeRange.collapse(e), r(this)
              }),
              (f.cloneRange = function () {
                return new n(this.nativeRange.cloneRange())
              }),
              (f.refresh = function () {
                r(this)
              }),
              (f.toString = function () {
                return this.nativeRange.toString()
              })
            var h = document.createTextNode('test')
            c(document).appendChild(h)
            var g = document.createRange()
            g.setStart(h, 0), g.setEnd(h, 0)
            try {
              g.setStart(h, 1),
                (f.setStart = function (e, t) {
                  this.nativeRange.setStart(e, t), r(this)
                }),
                (f.setEnd = function (e, t) {
                  this.nativeRange.setEnd(e, t), r(this)
                }),
                (u = function (e) {
                  return function (t) {
                    this.nativeRange[e](t), r(this)
                  }
                })
            } catch (p) {
              ;(f.setStart = function (e, t) {
                try {
                  this.nativeRange.setStart(e, t)
                } catch (n) {
                  this.nativeRange.setEnd(e, t), this.nativeRange.setStart(e, t)
                }
                r(this)
              }),
                (f.setEnd = function (e, t) {
                  try {
                    this.nativeRange.setEnd(e, t)
                  } catch (n) {
                    this.nativeRange.setStart(e, t),
                      this.nativeRange.setEnd(e, t)
                  }
                  r(this)
                }),
                (u = function (e, t) {
                  return function (n) {
                    try {
                      this.nativeRange[e](n)
                    } catch (o) {
                      this.nativeRange[t](n), this.nativeRange[e](n)
                    }
                    r(this)
                  }
                })
            }
            ;(f.setStartBefore = u('setStartBefore', 'setEndBefore')),
              (f.setStartAfter = u('setStartAfter', 'setEndAfter')),
              (f.setEndBefore = u('setEndBefore', 'setStartBefore')),
              (f.setEndAfter = u('setEndAfter', 'setStartAfter')),
              (f.selectNodeContents = function (e) {
                this.setStartAndEnd(e, 0, o.getNodeLength(e))
              }),
              g.selectNodeContents(h),
              g.setEnd(h, 3)
            var m = document.createRange()
            m.selectNodeContents(h),
              m.setEnd(h, 4),
              m.setStart(h, 2),
              (f.compareBoundaryPoints =
                -1 == g.compareBoundaryPoints(g.START_TO_END, m) &&
                1 == g.compareBoundaryPoints(g.END_TO_START, m)
                  ? function (e, t) {
                      return (
                        (t = t.nativeRange || t),
                        e == t.START_TO_END
                          ? (e = t.END_TO_START)
                          : e == t.END_TO_START && (e = t.START_TO_END),
                        this.nativeRange.compareBoundaryPoints(e, t)
                      )
                    }
                  : function (e, t) {
                      return this.nativeRange.compareBoundaryPoints(
                        e,
                        t.nativeRange || t
                      )
                    })
            var R = document.createElement('div')
            R.innerHTML = '123'
            var v = R.firstChild,
              C = c(document)
            C.appendChild(R),
              g.setStart(v, 1),
              g.setEnd(v, 2),
              g.deleteContents(),
              '13' == v.data &&
                ((f.deleteContents = function () {
                  this.nativeRange.deleteContents(), r(this)
                }),
                (f.extractContents = function () {
                  var e = this.nativeRange.extractContents()
                  return r(this), e
                })),
              C.removeChild(R),
              (C = null),
              i.isHostMethod(g, 'createContextualFragment') &&
                (f.createContextualFragment = function (e) {
                  return this.nativeRange.createContextualFragment(e)
                }),
              c(document).removeChild(h),
              (f.getName = function () {
                return 'WrappedRange'
              }),
              (e.WrappedRange = n),
              (e.createNativeRange = function (e) {
                return (e = d(e, t, 'createNativeRange')), e.createRange()
              })
          })(),
        e.features.implementsTextRange)
      ) {
        var u = function (e) {
            var t = e.parentElement(),
              n = e.duplicate()
            n.collapse(!0)
            var r = n.parentElement()
            ;(n = e.duplicate()), n.collapse(!1)
            var i = n.parentElement(),
              a = r == i ? r : o.getCommonAncestor(r, i)
            return a == t ? a : o.getCommonAncestor(t, a)
          },
          l = function (e) {
            return 0 == e.compareEndPoints('StartToEnd', e)
          },
          h = function (e, t, n, r, i) {
            var s = e.duplicate()
            s.collapse(n)
            var c = s.parentElement()
            if ((o.isOrIsAncestorOf(t, c) || (c = t), !c.canHaveHTML)) {
              var d = new a(c.parentNode, o.getNodeIndex(c))
              return {
                boundaryPosition: d,
                nodeInfo: { nodeIndex: d.offset, containerElement: d.node },
              }
            }
            var u = o.getDocument(c).createElement('span')
            u.parentNode && u.parentNode.removeChild(u)
            for (
              var l,
                h,
                g,
                p,
                m,
                R = n ? 'StartToStart' : 'StartToEnd',
                v = i && i.containerElement == c ? i.nodeIndex : 0,
                C = c.childNodes.length,
                N = C,
                E = N;
              ;

            ) {
              if (
                (E == C ? c.appendChild(u) : c.insertBefore(u, c.childNodes[E]),
                s.moveToElementText(u),
                (l = s.compareEndPoints(R, e)),
                0 == l || v == N)
              )
                break
              if (-1 == l) {
                if (N == v + 1) break
                v = E
              } else N = N == v + 1 ? v : E
              ;(E = Math.floor((v + N) / 2)), c.removeChild(u)
            }
            if (((m = u.nextSibling), -1 == l && m && f(m))) {
              s.setEndPoint(n ? 'EndToStart' : 'EndToEnd', e)
              var S
              if (/[\r\n]/.test(m.data)) {
                var y = s.duplicate(),
                  w = y.text.replace(/\r\n/g, '\r').length
                for (
                  S = y.moveStart('character', w);
                  -1 == (l = y.compareEndPoints('StartToEnd', y));

                )
                  S++, y.moveStart('character', 1)
              } else S = s.text.length
              p = new a(m, S)
            } else
              (h = (r || !n) && u.previousSibling),
                (g = (r || n) && u.nextSibling),
                (p =
                  g && f(g)
                    ? new a(g, 0)
                    : h && f(h)
                    ? new a(h, h.data.length)
                    : new a(c, o.getNodeIndex(u)))
            return (
              u.parentNode.removeChild(u),
              {
                boundaryPosition: p,
                nodeInfo: { nodeIndex: E, containerElement: c },
              }
            )
          },
          g = function (e, t) {
            var n,
              r,
              i,
              a,
              s = e.offset,
              d = o.getDocument(e.node),
              u = c(d).createTextRange(),
              l = f(e.node)
            return (
              l
                ? ((n = e.node), (r = n.parentNode))
                : ((a = e.node.childNodes),
                  (n = s < a.length ? a[s] : null),
                  (r = e.node)),
              (i = d.createElement('span')),
              (i.innerHTML = '&#feff;'),
              n ? r.insertBefore(i, n) : r.appendChild(i),
              u.moveToElementText(i),
              u.collapse(!t),
              r.removeChild(i),
              l && u[t ? 'moveStart' : 'moveEnd']('character', s),
              u
            )
          }
        ;(r = function (e) {
          ;(this.textRange = e), this.refresh()
        }),
          (r.prototype = new s(document)),
          (r.prototype.refresh = function () {
            var e,
              t,
              n,
              r = u(this.textRange)
            l(this.textRange)
              ? (t = e = h(this.textRange, r, !0, !0).boundaryPosition)
              : ((n = h(this.textRange, r, !0, !1)),
                (e = n.boundaryPosition),
                (t = h(
                  this.textRange,
                  r,
                  !1,
                  !1,
                  n.nodeInfo
                ).boundaryPosition)),
              this.setStart(e.node, e.offset),
              this.setEnd(t.node, t.offset)
          }),
          (r.prototype.getName = function () {
            return 'WrappedTextRange'
          }),
          s.copyComparisonConstants(r)
        var p = function (e) {
          if (e.collapsed) return g(new a(e.startContainer, e.startOffset), !0)
          var t = g(new a(e.startContainer, e.startOffset), !0),
            n = g(new a(e.endContainer, e.endOffset), !1),
            r = c(s.getRangeDocument(e)).createTextRange()
          return (
            r.setEndPoint('StartToStart', t), r.setEndPoint('EndToEnd', n), r
          )
        }
        if (
          ((r.rangeToTextRange = p),
          (r.prototype.toTextRange = function () {
            return p(this)
          }),
          (e.WrappedTextRange = r),
          !e.features.implementsDomRange || e.config.preferTextRange)
        ) {
          var m = (function (e) {
            return e('return this;')()
          })(Function)
          'undefined' == typeof m.Range && (m.Range = r),
            (e.createNativeRange = function (e) {
              return (e = d(e, t, 'createNativeRange')), c(e).createTextRange()
            }),
            (e.WrappedRange = r)
        }
      }
      ;(e.createRange = function (n) {
        return (
          (n = d(n, t, 'createRange')),
          new e.WrappedRange(e.createNativeRange(n))
        )
      }),
        (e.createRangyRange = function (e) {
          return (e = d(e, t, 'createRangyRange')), new s(e)
        }),
        (e.createIframeRange = function (n) {
          return (
            t.deprecationNotice('createIframeRange()', 'createRange(iframeEl)'),
            e.createRange(n)
          )
        }),
        (e.createIframeRangyRange = function (n) {
          return (
            t.deprecationNotice(
              'createIframeRangyRange()',
              'createRangyRange(iframeEl)'
            ),
            e.createRangyRange(n)
          )
        }),
        e.addShimListener(function (t) {
          var n = t.document
          'undefined' == typeof n.createRange &&
            (n.createRange = function () {
              return e.createRange(n)
            }),
            (n = t = null)
        })
    }),
    A.createCoreModule(
      'WrappedSelection',
      ['DomRange', 'WrappedRange'],
      function (e, t) {
        function n(e) {
          return 'string' == typeof e ? /^backward(s)?$/i.test(e) : !!e
        }
        function r(e, n) {
          if (e) {
            if (D.isWindow(e)) return e
            if (e instanceof R) return e.win
            var r = D.getContentDocument(e, t, n)
            return D.getWindow(r)
          }
          return window
        }
        function o(e) {
          return r(e, 'getWinSelection').getSelection()
        }
        function i(e) {
          return r(e, 'getDocSelection').document.selection
        }
        function a(e) {
          var t = !1
          return (
            e.anchorNode &&
              (t =
                1 ==
                D.comparePoints(
                  e.anchorNode,
                  e.anchorOffset,
                  e.focusNode,
                  e.focusOffset
                )),
            t
          )
        }
        function s(e, t, n) {
          var r = n ? 'end' : 'start',
            o = n ? 'start' : 'end'
          ;(e.anchorNode = t[r + 'Container']),
            (e.anchorOffset = t[r + 'Offset']),
            (e.focusNode = t[o + 'Container']),
            (e.focusOffset = t[o + 'Offset'])
        }
        function c(e) {
          var t = e.nativeSelection
          ;(e.anchorNode = t.anchorNode),
            (e.anchorOffset = t.anchorOffset),
            (e.focusNode = t.focusNode),
            (e.focusOffset = t.focusOffset)
        }
        function d(e) {
          ;(e.anchorNode = e.focusNode = null),
            (e.anchorOffset = e.focusOffset = 0),
            (e.rangeCount = 0),
            (e.isCollapsed = !0),
            (e._ranges.length = 0)
        }
        function f(t) {
          var n
          return (
            t instanceof b
              ? ((n = e.createNativeRange(t.getDocument())),
                n.setEnd(t.endContainer, t.endOffset),
                n.setStart(t.startContainer, t.startOffset))
              : t instanceof P
              ? (n = t.nativeRange)
              : H.implementsDomRange &&
                t instanceof D.getWindow(t.startContainer).Range &&
                (n = t),
            n
          )
        }
        function u(e) {
          if (!e.length || 1 != e[0].nodeType) return !1
          for (var t = 1, n = e.length; n > t; ++t)
            if (!D.isAncestorOf(e[0], e[t])) return !1
          return !0
        }
        function l(e) {
          var n = e.getNodes()
          if (!u(n))
            throw t.createError(
              'getSingleElementFromRange: range ' +
                e.inspect() +
                ' did not consist of a single element'
            )
          return n[0]
        }
        function h(e) {
          return !!e && 'undefined' != typeof e.text
        }
        function g(e, t) {
          var n = new P(t)
          ;(e._ranges = [n]),
            s(e, n, !1),
            (e.rangeCount = 1),
            (e.isCollapsed = n.collapsed)
        }
        function p(t) {
          if (((t._ranges.length = 0), 'None' == t.docSelection.type)) d(t)
          else {
            var n = t.docSelection.createRange()
            if (h(n)) g(t, n)
            else {
              t.rangeCount = n.length
              for (var r, o = L(n.item(0)), i = 0; i < t.rangeCount; ++i)
                (r = e.createRange(o)),
                  r.selectNode(n.item(i)),
                  t._ranges.push(r)
              ;(t.isCollapsed = 1 == t.rangeCount && t._ranges[0].collapsed),
                s(t, t._ranges[t.rangeCount - 1], !1)
            }
          }
        }
        function m(e, n) {
          for (
            var r = e.docSelection.createRange(),
              o = l(n),
              i = L(r.item(0)),
              a = W(i).createControlRange(),
              s = 0,
              c = r.length;
            c > s;
            ++s
          )
            a.add(r.item(s))
          try {
            a.add(o)
          } catch (d) {
            throw t.createError(
              'addRange(): Element within the specified Range could not be added to control selection (does it have layout?)'
            )
          }
          a.select(), p(e)
        }
        function R(e, t, n) {
          ;(this.nativeSelection = e),
            (this.docSelection = t),
            (this._ranges = []),
            (this.win = n),
            this.refresh()
        }
        function v(e) {
          ;(e.win = e.anchorNode = e.focusNode = e._ranges = null),
            (e.rangeCount = e.anchorOffset = e.focusOffset = 0),
            (e.detached = !0)
        }
        function C(e, t) {
          for (var n, r, o = tt.length; o--; )
            if (((n = tt[o]), (r = n.selection), 'deleteAll' == t)) v(r)
            else if (n.win == e)
              return 'delete' == t ? (tt.splice(o, 1), !0) : r
          return 'deleteAll' == t && (tt.length = 0), null
        }
        function N(e, n) {
          for (
            var r,
              o = L(n[0].startContainer),
              i = W(o).createControlRange(),
              a = 0,
              s = n.length;
            s > a;
            ++a
          ) {
            r = l(n[a])
            try {
              i.add(r)
            } catch (c) {
              throw t.createError(
                'setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)'
              )
            }
          }
          i.select(), p(e)
        }
        function E(e, t) {
          if (e.win.document != L(t)) throw new I('WRONG_DOCUMENT_ERR')
        }
        function S(t) {
          return function (n, r) {
            var o
            this.rangeCount
              ? ((o = this.getRangeAt(0)),
                o['set' + (t ? 'Start' : 'End')](n, r))
              : ((o = e.createRange(this.win.document)),
                o.setStartAndEnd(n, r)),
              this.setSingleRange(o, this.isBackward())
          }
        }
        function y(e) {
          var t = [],
            n = new B(e.anchorNode, e.anchorOffset),
            r = new B(e.focusNode, e.focusOffset),
            o = 'function' == typeof e.getName ? e.getName() : 'Selection'
          if ('undefined' != typeof e.rangeCount)
            for (var i = 0, a = e.rangeCount; a > i; ++i)
              t[i] = b.inspect(e.getRangeAt(i))
          return (
            '[' +
            o +
            '(Ranges: ' +
            t.join(', ') +
            ')(anchor: ' +
            n.inspect() +
            ', focus: ' +
            r.inspect() +
            ']'
          )
        }
        e.config.checkSelectionRanges = !0
        var w,
          O,
          T = 'boolean',
          _ = 'number',
          D = e.dom,
          x = e.util,
          A = x.isHostMethod,
          b = e.DomRange,
          P = e.WrappedRange,
          I = e.DOMException,
          B = D.DomPosition,
          H = e.features,
          M = 'Control',
          L = D.getDocument,
          W = D.getBody,
          k = b.rangesEqual,
          F = A(window, 'getSelection'),
          j = x.isHostObject(document, 'selection')
        ;(H.implementsWinGetSelection = F), (H.implementsDocSelection = j)
        var z = j && (!F || e.config.preferTextRange)
        z
          ? ((w = i),
            (e.isSelectionValid = function (e) {
              var t = r(e, 'isSelectionValid').document,
                n = t.selection
              return 'None' != n.type || L(n.createRange().parentElement()) == t
            }))
          : F
          ? ((w = o),
            (e.isSelectionValid = function () {
              return !0
            }))
          : t.fail(
              'Neither document.selection or window.getSelection() detected.'
            ),
          (e.getNativeSelection = w)
        var U = w(),
          V = e.createNativeRange(document),
          q = W(document),
          Y = x.areHostProperties(U, [
            'anchorNode',
            'focusNode',
            'anchorOffset',
            'focusOffset',
          ])
        H.selectionHasAnchorAndFocus = Y
        var Q = A(U, 'extend')
        H.selectionHasExtend = Q
        var G = typeof U.rangeCount == _
        H.selectionHasRangeCount = G
        var X = !1,
          Z = !0,
          $ = Q
            ? function (t, n) {
                var r = b.getRangeDocument(n),
                  o = e.createRange(r)
                o.collapseToPoint(n.endContainer, n.endOffset),
                  t.addRange(f(o)),
                  t.extend(n.startContainer, n.startOffset)
              }
            : null
        ;(H.selectionSupportsMultipleRanges = X),
          (H.collapsedNonEditableSelectionsSupported = Z)
        var J,
          K = !1
        q &&
          A(q, 'createControlRange') &&
          ((J = q.createControlRange()),
          x.areHostProperties(J, ['item', 'add']) && (K = !0)),
          (H.implementsControlRange = K),
          (O = Y
            ? function (e) {
                return (
                  e.anchorNode === e.focusNode &&
                  e.anchorOffset === e.focusOffset
                )
              }
            : function (e) {
                return e.rangeCount
                  ? e.getRangeAt(e.rangeCount - 1).collapsed
                  : !1
              })
        var et
        A(U, 'getRangeAt')
          ? (et = function (e, t) {
              try {
                return e.getRangeAt(t)
              } catch (n) {
                return null
              }
            })
          : Y &&
            (et = function (t) {
              var n = L(t.anchorNode),
                r = e.createRange(n)
              return (
                r.setStartAndEnd(
                  t.anchorNode,
                  t.anchorOffset,
                  t.focusNode,
                  t.focusOffset
                ),
                r.collapsed !== this.isCollapsed &&
                  r.setStartAndEnd(
                    t.focusNode,
                    t.focusOffset,
                    t.anchorNode,
                    t.anchorOffset
                  ),
                r
              )
            }),
          (R.prototype = e.selectionPrototype)
        var tt = [],
          nt = function (e) {
            if (e && e instanceof R) return e.refresh(), e
            e = r(e, 'getNativeSelection')
            var t = C(e),
              n = w(e),
              o = j ? i(e) : null
            return (
              t
                ? ((t.nativeSelection = n), (t.docSelection = o), t.refresh())
                : ((t = new R(n, o, e)), tt.push({ win: e, selection: t })),
              t
            )
          }
        ;(e.getSelection = nt),
          (e.getIframeSelection = function (n) {
            return (
              t.deprecationNotice(
                'getIframeSelection()',
                'getSelection(iframeEl)'
              ),
              e.getSelection(D.getIframeWindow(n))
            )
          })
        var rt = R.prototype
        if (!z && Y && x.areHostMethods(U, ['removeAllRanges', 'addRange'])) {
          rt.removeAllRanges = function () {
            this.nativeSelection.removeAllRanges(), d(this)
          }
          var ot = function (e, t) {
            $(e.nativeSelection, t), e.refresh()
          }
          ;(rt.addRange = G
            ? function (t, r) {
                if (K && j && this.docSelection.type == M) m(this, t)
                else if (n(r) && Q) ot(this, t)
                else {
                  var o
                  X ? (o = this.rangeCount) : (this.removeAllRanges(), (o = 0))
                  var i = f(t).cloneRange()
                  try {
                    this.nativeSelection.addRange(i)
                  } catch (a) {}
                  if (
                    ((this.rangeCount = this.nativeSelection.rangeCount),
                    this.rangeCount == o + 1)
                  ) {
                    if (e.config.checkSelectionRanges) {
                      var c = et(this.nativeSelection, this.rangeCount - 1)
                      c && !k(c, t) && (t = new P(c))
                    }
                    ;(this._ranges[this.rangeCount - 1] = t),
                      s(this, t, st(this.nativeSelection)),
                      (this.isCollapsed = O(this))
                  } else this.refresh()
                }
              }
            : function (e, t) {
                n(t) && Q
                  ? ot(this, e)
                  : (this.nativeSelection.addRange(f(e)), this.refresh())
              }),
            (rt.setRanges = function (e) {
              if (K && j && e.length > 1) N(this, e)
              else {
                this.removeAllRanges()
                for (var t = 0, n = e.length; n > t; ++t) this.addRange(e[t])
              }
            })
        } else {
          if (!(A(U, 'empty') && A(V, 'select') && K && z))
            return (
              t.fail('No means of selecting a Range or TextRange was found'), !1
            )
          ;(rt.removeAllRanges = function () {
            try {
              if (
                (this.docSelection.empty(), 'None' != this.docSelection.type)
              ) {
                var e
                if (this.anchorNode) e = L(this.anchorNode)
                else if (this.docSelection.type == M) {
                  var t = this.docSelection.createRange()
                  t.length && (e = L(t.item(0)))
                }
                if (e) {
                  var n = W(e).createTextRange()
                  n.select(), this.docSelection.empty()
                }
              }
            } catch (r) {}
            d(this)
          }),
            (rt.addRange = function (t) {
              this.docSelection.type == M
                ? m(this, t)
                : (e.WrappedTextRange.rangeToTextRange(t).select(),
                  (this._ranges[0] = t),
                  (this.rangeCount = 1),
                  (this.isCollapsed = this._ranges[0].collapsed),
                  s(this, t, !1))
            }),
            (rt.setRanges = function (e) {
              this.removeAllRanges()
              var t = e.length
              t > 1 ? N(this, e) : t && this.addRange(e[0])
            })
        }
        rt.getRangeAt = function (e) {
          if (0 > e || e >= this.rangeCount) throw new I('INDEX_SIZE_ERR')
          return this._ranges[e].cloneRange()
        }
        var it
        if (z)
          it = function (t) {
            var n
            e.isSelectionValid(t.win)
              ? (n = t.docSelection.createRange())
              : ((n = W(t.win.document).createTextRange()), n.collapse(!0)),
              t.docSelection.type == M ? p(t) : h(n) ? g(t, n) : d(t)
          }
        else if (A(U, 'getRangeAt') && typeof U.rangeCount == _)
          it = function (t) {
            if (K && j && t.docSelection.type == M) p(t)
            else if (
              ((t._ranges.length = t.rangeCount = t.nativeSelection.rangeCount),
              t.rangeCount)
            ) {
              for (var n = 0, r = t.rangeCount; r > n; ++n)
                t._ranges[n] = new e.WrappedRange(
                  t.nativeSelection.getRangeAt(n)
                )
              s(t, t._ranges[t.rangeCount - 1], st(t.nativeSelection)),
                (t.isCollapsed = O(t))
            } else d(t)
          }
        else {
          if (
            !Y ||
            typeof U.isCollapsed != T ||
            typeof V.collapsed != T ||
            !H.implementsDomRange
          )
            return (
              t.fail(
                "No means of obtaining a Range or TextRange from the user's selection was found"
              ),
              !1
            )
          it = function (e) {
            var t,
              n = e.nativeSelection
            n.anchorNode
              ? ((t = et(n, 0)),
                (e._ranges = [t]),
                (e.rangeCount = 1),
                c(e),
                (e.isCollapsed = O(e)))
              : d(e)
          }
        }
        rt.refresh = function (e) {
          var t = e ? this._ranges.slice(0) : null,
            n = this.anchorNode,
            r = this.anchorOffset
          if ((it(this), e)) {
            var o = t.length
            if (o != this._ranges.length) return !0
            if (this.anchorNode != n || this.anchorOffset != r) return !0
            for (; o--; ) if (!k(t[o], this._ranges[o])) return !0
            return !1
          }
        }
        var at = function (e, t) {
          var n = e.getAllRanges()
          e.removeAllRanges()
          for (var r = 0, o = n.length; o > r; ++r)
            k(t, n[r]) || e.addRange(n[r])
          e.rangeCount || d(e)
        }
        rt.removeRange =
          K && j
            ? function (e) {
                if (this.docSelection.type == M) {
                  for (
                    var t,
                      n = this.docSelection.createRange(),
                      r = l(e),
                      o = L(n.item(0)),
                      i = W(o).createControlRange(),
                      a = !1,
                      s = 0,
                      c = n.length;
                    c > s;
                    ++s
                  )
                    (t = n.item(s)), t !== r || a ? i.add(n.item(s)) : (a = !0)
                  i.select(), p(this)
                } else at(this, e)
              }
            : function (e) {
                at(this, e)
              }
        var st
        !z && Y && H.implementsDomRange
          ? ((st = a),
            (rt.isBackward = function () {
              return st(this)
            }))
          : (st = rt.isBackward =
              function () {
                return !1
              }),
          (rt.isBackwards = rt.isBackward),
          (rt.toString = function () {
            for (var e = [], t = 0, n = this.rangeCount; n > t; ++t)
              e[t] = '' + this._ranges[t]
            return e.join('')
          }),
          (rt.collapse = function (t, n) {
            E(this, t)
            var r = e.createRange(t)
            r.collapseToPoint(t, n),
              this.setSingleRange(r),
              (this.isCollapsed = !0)
          }),
          (rt.collapseToStart = function () {
            if (!this.rangeCount) throw new I('INVALID_STATE_ERR')
            var e = this._ranges[0]
            this.collapse(e.startContainer, e.startOffset)
          }),
          (rt.collapseToEnd = function () {
            if (!this.rangeCount) throw new I('INVALID_STATE_ERR')
            var e = this._ranges[this.rangeCount - 1]
            this.collapse(e.endContainer, e.endOffset)
          }),
          (rt.selectAllChildren = function (t) {
            E(this, t)
            var n = e.createRange(t)
            n.selectNodeContents(t), this.setSingleRange(n)
          }),
          (rt.deleteFromDocument = function () {
            if (K && j && this.docSelection.type == M) {
              for (var e, t = this.docSelection.createRange(); t.length; )
                (e = t.item(0)), t.remove(e), e.parentNode.removeChild(e)
              this.refresh()
            } else if (this.rangeCount) {
              var n = this.getAllRanges()
              if (n.length) {
                this.removeAllRanges()
                for (var r = 0, o = n.length; o > r; ++r) n[r].deleteContents()
                this.addRange(n[o - 1])
              }
            }
          }),
          (rt.eachRange = function (e, t) {
            for (var n = 0, r = this._ranges.length; r > n; ++n)
              if (e(this.getRangeAt(n))) return t
          }),
          (rt.getAllRanges = function () {
            var e = []
            return (
              this.eachRange(function (t) {
                e.push(t)
              }),
              e
            )
          }),
          (rt.setSingleRange = function (e, t) {
            this.removeAllRanges(), this.addRange(e, t)
          }),
          (rt.callMethodOnEachRange = function (e, t) {
            var n = []
            return (
              this.eachRange(function (r) {
                n.push(r[e].apply(r, t))
              }),
              n
            )
          }),
          (rt.setStart = S(!0)),
          (rt.setEnd = S(!1)),
          (e.rangePrototype.select = function (e) {
            nt(this.getDocument()).setSingleRange(this, e)
          }),
          (rt.changeEachRange = function (e) {
            var t = [],
              n = this.isBackward()
            this.eachRange(function (n) {
              e(n), t.push(n)
            }),
              this.removeAllRanges(),
              n && 1 == t.length
                ? this.addRange(t[0], 'backward')
                : this.setRanges(t)
          }),
          (rt.containsNode = function (e, t) {
            return (
              this.eachRange(function (n) {
                return n.containsNode(e, t)
              }, !0) || !1
            )
          }),
          (rt.getBookmark = function (e) {
            return {
              backward: this.isBackward(),
              rangeBookmarks: this.callMethodOnEachRange('getBookmark', [e]),
            }
          }),
          (rt.moveToBookmark = function (t) {
            for (var n, r, o = [], i = 0; (n = t.rangeBookmarks[i++]); )
              (r = e.createRange(this.win)), r.moveToBookmark(n), o.push(r)
            t.backward
              ? this.setSingleRange(o[0], 'backward')
              : this.setRanges(o)
          }),
          (rt.toHtml = function () {
            var e = []
            return (
              this.eachRange(function (t) {
                e.push(b.toHtml(t))
              }),
              e.join('')
            )
          }),
          H.implementsTextRange &&
            (rt.getNativeTextRange = function () {
              var n
              if ((n = this.docSelection)) {
                var r = n.createRange()
                if (h(r)) return r
                throw t.createError(
                  'getNativeTextRange: selection is a control selection'
                )
              }
              if (this.rangeCount > 0)
                return e.WrappedTextRange.rangeToTextRange(this.getRangeAt(0))
              throw t.createError(
                'getNativeTextRange: selection contains no range'
              )
            }),
          (rt.getName = function () {
            return 'WrappedSelection'
          }),
          (rt.inspect = function () {
            return y(this)
          }),
          (rt.detach = function () {
            C(this.win, 'delete'), v(this)
          }),
          (R.detachAll = function () {
            C(null, 'deleteAll')
          }),
          (R.inspect = y),
          (R.isDirectionBackward = n),
          (e.Selection = R),
          (e.selectionPrototype = rt),
          e.addShimListener(function (e) {
            'undefined' == typeof e.getSelection &&
              (e.getSelection = function () {
                return nt(e)
              }),
              (e = null)
          })
      }
    )
  var H = !1,
    M = function () {
      H || ((H = !0), !A.initialized && A.config.autoInitialize && u())
    }
  return (
    D &&
      ('complete' == document.readyState
        ? M()
        : (e(document, 'addEventListener') &&
            document.addEventListener('DOMContentLoaded', M, !1),
          P(window, 'load', M))),
    A
  )
}, this)
