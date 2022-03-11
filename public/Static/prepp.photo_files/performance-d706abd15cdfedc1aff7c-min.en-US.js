;(function () {
  var r = {
    11877: function (t) {
      function e(t, e, n) {
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true,
            })
          : (t[e] = n)
        return t
      }
      t.exports = e
    },
    310514: function (t) {
      function e(t) {
        return t && t.__esModule ? t : { default: t }
      }
      t.exports = e
    },
    942559: function (t, e, n) {
      'use strict'
      n.d(e, {
        StaticPraetorClient: function () {
          return c
        },
      })
      var r = 'true'
      var i = 'default'
      var a
      ;(function (t) {
        t['FEATURE_TOGGLE'] = 'FEATURE_TOGGLE'
        t['AB_TEST'] = 'AB_TEST'
      })((a = a || {}))
      var o = (function () {
        function t(t) {
          var e = this
          this.experiments = {}
          this.isConfigurationLoaded = Boolean(t.isConfigurationLoaded)
          Array.isArray(t.experimentContextList) &&
            t.experimentContextList.forEach(function (t) {
              null !== t &&
                'object' === typeof t &&
                t.hasOwnProperty('name') &&
                (e.experiments[t.name] = t)
            })
        }
        t.prototype.isValid = function () {
          return this.isConfigurationLoaded
        }
        t.prototype.getContext = function (t) {
          return this.experiments[t]
        }
        return t
      })()
      var u = (function () {
        function t(t) {
          this.configuration = new o(t)
        }
        t.prototype.getFeatureToggle = function (t, e) {
          var n = this.getContextValidity(t, a.FEATURE_TOGGLE),
            r = n.context,
            o = n.error
          if (o || null === r) return { enabled: e, error: o }
          if (r.containsError)
            return {
              enabled: this.isFeatureToggleEnabled(r),
              error: 'The specified feature has an invalid server-side definition',
            }
          return { enabled: this.isFeatureToggleEnabled(r) }
        }
        t.prototype.getABTestVariant = function (t, e) {
          var n = this.getContextValidity(t, a.AB_TEST),
            r = n.context,
            o = n.error
          if (o || null === r) return { error: o, segment: i, variant: e }
          if (r.containsError)
            return {
              error: 'The specified feature has an invalid server-side definition',
              segment: r.segmentName,
              variant: r.variant,
            }
          return { segment: r.segmentName, variant: r.variant }
        }
        t.prototype.getAllExperiments = function () {
          return this.configuration
        }
        t.prototype.getContextValidity = function (t, e) {
          if (!this.configuration.isValid())
            return { context: null, error: 'The underlying Praetor configuration is not loaded' }
          var n = this.configuration.getContext(t)
          if (void 0 === n) return { context: null, error: 'The specified feature does not exist' }
          if (n.experimentType !== e)
            return { context: null, error: 'The specified feature is not a ' + e }
          return { context: n }
        }
        t.prototype.isFeatureToggleEnabled = function (t) {
          return t.variant === r
        }
        return t
      })()
      var c = u
    },
    965630: function (t, e, n) {
      'use strict'
      n.d(e, {
        hF: function () {
          return i
        },
        _R: function () {
          return a
        },
        ge: function () {
          return u
        },
        r2: function () {
          return c
        },
        LS: function () {
          return s
        },
        kQ: function () {
          return w
        },
        zh: function () {
          return _
        },
        k$: function () {
          return g
        },
        Gp: function () {
          return h
        },
        Mu: function () {
          return E
        },
        d3: function () {
          return b
        },
        HS: function () {
          return S
        },
        vv: function () {
          return T
        },
        zy: function () {
          return C
        },
        lv: function () {
          return O
        },
        iU: function () {
          return P
        },
        XF: function () {
          return L
        },
        Gf: function () {
          return x
        },
        B3: function () {
          return R
        },
        Uv: function () {
          return I
        },
      })
      var r = n(93493)
      var o = n.n(r)
      var i = '/api/1/performance'
      var a = '/records'
      var u = '/settings'
      var c = '4.0.7'
      var s = function (t) {
        return {
          app: 'a',
          data: { __encoding_config__: t, __encoding_key__: 'd' },
          event: 'e',
          pageLoadId: 'pl',
          ts: 't',
        }
      }
      var f = { downlink: 'do', effectiveType: 'ef', rtt: 'rtt', saveData: 'sd' }
      var d = {
        devicePixelRatio: 'dpr',
        screenHeight: 'sh',
        screenWidth: 'sw',
        viewportHeight: 'vh',
        viewportWidth: 'vw',
      }
      var v = { deviceMemory: 'dm', hardwareConcurrency: 'hc' }
      var l = {
        cumulativeLayoutShift: 'cl',
        decodedBodySize: 'db',
        domainLookup: 'dml',
        domContentLoadedEventEnd: 'de',
        domContentLoadedEventStart: 'ds',
        encodedBodySize: 'eb',
        firstContentfulPaint: 'fcp',
        firstInputDelay: 'fid',
        largestContentfulPaint: 'lcp',
        loadEventEnd: 'le',
        loadEventStart: 'l',
        tcpConnection: 'tcp',
        tlsConnection: 'tls',
        timeToInteractive: 'tti',
      }
      var p = {
        analyticsId: 'aid',
        connection: { __encoding_config__: f, __encoding_key__: 'con' },
        deliveryType: 'dt',
        display: { __encoding_config__: d, __encoding_key__: 'disp' },
        hardware: { __encoding_config__: v, __encoding_key__: 'hdw' },
        hash: 'h',
        hostname: 'hn',
        marketingId: 'mid',
        memberId: 'mem',
        pathname: 'p',
        version: 'v',
      }
      var m = {
        accountId: 'accountId',
        ampEnabled: 'ampEnabled',
        authenticUrl: 'authenticUrl',
        cloneable: 'cloneable',
        collectionType: 'collectionType',
        createdOn: 'createdOn',
        developerMode: 'developerMode',
        impersonatedSession: 'impersonatedSession',
        inFrame: 'inFrame',
        isHstsEnabled: 'isHstsEnabled',
        isInternal: 'isInternal',
        language: 'language',
        memberId: 'memberId',
        pageType: 'pageType',
        platform: 'platform',
        templateId: 'templateId',
        timeZone: 'timeZone',
        websiteId: 'websiteId',
        websiteType: 'websiteType',
      }
      var w = (0, r.__assign)(
        (0, r.__assign)(
          {
            context: { __encoding_config__: m, __encoding_key__: 'ctx' },
            supportLevel: 'sl',
            visibilityStateOnDCL: 'vs',
          },
          p
        ),
        l
      )
      var _ = {
        duration: 'd',
        endMarkDetail: 'e',
        measureDetail: 'm',
        name: 'n',
        startMarkDetail: 's',
        startTime: 'st',
      }
      var g = Object.keys(w)
      var y = null
      var h = 'mark'
      var E = 'measure'
      var b = 'DOMContentLoaded'
      var S = 'load'
      var T = 'beforeunload'
      var C = 'pagehide'
      var O = 'rum-'
      var P = 'SS_MID'
      var L = 'SS_ANALYTICS_ID'
      var x = 3e4
      var R = 3e4
      var I = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i
    },
    259126: function (t, e, n) {
      'use strict'
      n.d(e, {
        k: function () {
          return a
        },
      })
      var o = n(93493)
      var r = n.n(o)
      var i = n(193740)
      function a() {
        return (0, o.__awaiter)(this, void 0, void 0, function () {
          var e, n, r
          return (0, o.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                e = Object.values(i).map(function (t) {
                  return t()
                })
                t.label = 1
              case 1:
                t.trys.push([1, 3, , 4])
                return [4, Promise.all(e)]
              case 2:
                n = t.sent().reduce(function (t, e) {
                  t = (0, o.__assign)((0, o.__assign)({}, t), e)
                  return t
                }, {})
                return [2, n]
              case 3:
                r = t.sent()
                return [2, {}]
              case 4:
                return [2]
            }
          })
        })
      }
    },
    100775: function (t, e, n) {
      'use strict'
      n.r(e)
      n.d(e, {
        default: function () {
          return r.S
        },
        getPerformanceData: function () {
          return o.fk
        },
        getPerformanceMetrics: function () {
          return i.k
        },
        mark: function () {
          return a.B
        },
        measure: function () {
          return a.L
        },
        getCumulativeLayoutShift: function () {
          return u.getCumulativeLayoutShift
        },
        getDecodedBodySize: function () {
          return u.getDecodedBodySize
        },
        getDomContentLoadedEventEnd: function () {
          return u.getDomContentLoadedEventEnd
        },
        getDomContentLoadedEventStart: function () {
          return u.getDomContentLoadedEventStart
        },
        getDomainLookup: function () {
          return u.getDomainLookup
        },
        getEncodedBodySize: function () {
          return u.getEncodedBodySize
        },
        getFirstContentfulPaint: function () {
          return u.getFirstContentfulPaint
        },
        getFirstInputDelay: function () {
          return u.getFirstInputDelay
        },
        getLargestContentfulPaint: function () {
          return u.getLargestContentfulPaint
        },
        getLoadEventEnd: function () {
          return u.getLoadEventEnd
        },
        getLoadEventStart: function () {
          return u.getLoadEventStart
        },
        getResponseStart: function () {
          return u.getResponseStart
        },
        getTCPConnection: function () {
          return u.getTCPConnection
        },
        getTLSNegotiation: function () {
          return u.getTLSNegotiation
        },
        getTimeToInteractive: function () {
          return u.getTimeToInteractive
        },
        trackLoadPerformance: function () {
          return c.l
        },
        trackEventsV2Factory: function () {
          return c.$
        },
      })
      var r = n(55113)
      var o = n(632651)
      var i = n(259126)
      var a = n(216621)
      var u = n(193740)
      var c = n(289474)
    },
    55113: function (t, e, n) {
      'use strict'
      n.d(e, {
        S: function () {
          return k
        },
      })
      var s = n(93493)
      var f = n(942559)
      var i = n(965630)
      function p(d, v) {
        var l = {}
        Object.keys(v).forEach(function (t) {
          var e = v[t]
          var n
          var r
          var o = d[t] || d
          var i = typeof o
          var a = 'string' === i
          var u = 'object' === i || 'undefined' === o
          if (!a && !u) return
          if (a) {
            n = o
            r = m(e)
          } else {
            var c = o.__encoding_skip__
            var s = o.__encoding_config__
            var f = o.__encoding_fn__
            if (!c && !s && !d) throw new Error('Invalid encoding map')
            n = c ? t : o.__encoding_key__
            r = s ? p(s, e) : f ? f(e) : e
          }
          n && (l['' + n] = r)
        })
        return l
      }
      function m(t) {
        if ('boolean' === typeof t) return t ? 1 : 0
        if (r(t)) return t.toString(36)
        return t
      }
      function r(t) {
        return ('number' === typeof t || t instanceof Number) && isFinite(t)
      }
      var o = n(435789)
      var a
      var u = []
      var c = function (t) {
        u.push(t)
      }
      function d(t, e) {
        if ((0, o.Kv)() && navigator.sendBeacon(t, e)) return
        var n = new XMLHttpRequest()
        n.open('POST', t, true)
        n.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8')
        n.send(e)
      }
      function v() {
        if (u.length) {
          var t = JSON.stringify(u)
          d(i.hF + i._R, t)
          u = []
        }
      }
      function l() {
        window.addEventListener(i.HS, function () {
          a = window.setTimeout(v, i.B3)
        })
        window.addEventListener(i.zy, v)
        window.addEventListener(i.vv, function () {
          window.clearTimeout(a)
          v()
        })
      }
      function w(t, e) {
        var n = p(t, e)
        if (!n) throw new Error('Data is empty')
        c(n)
      }
      var _ = n(632651)
      var g = function (o) {
        return function (t, e) {
          void 0 === e && (e = false)
          var n = o.getABTestVariant(t + '-rollout', e.toString()).variant
          var r = 'true' === n
          return r
        }
      }
      var y = function (o, i) {
        return function (t, e, n) {
          var r = (0, _.bh)(o, e, i, t)
          w(n, r)
        }
      }
      var h = function () {
        return new Promise(function (t, e) {
          var n = new XMLHttpRequest()
          n.onreadystatechange = function () {
            if (n.readyState === XMLHttpRequest.DONE)
              if (200 === n.status)
                try {
                  t(JSON.parse(n.response))
                } catch (t) {
                  e(t)
                }
              else
                0 !== n.status &&
                  e(new Error('XHR request DONE with unexpected status: ' + n.status))
          }
          n.ontimeout = function () {
            e(new Error('Metric settings request timeout'))
          }
          n.open('GET', i.hF + i.ge, true)
          n.timeout = i.Gf
          n.send()
        })
      }
      var E = function (n) {
        return function (t, e) {
          n && n(t, e)
        }
      }
      var b = function (t) {
        var e = {
          appName: t.appName || '',
          context: t.context || {},
          enabled: 'boolean' !== typeof t.enabled || t.enabled,
        }
        e.captureException = E(t.captureException)
        return e
      }
      var S = n(259126)
      function T(t) {
        var e = new RegExp('(^| )' + t + '=([^;]+)')
        var n = document.cookie.match(e)
        if (n) return n[2]
        return ''
      }
      var C
      ;(function (t) {
        t['Beacon'] = 'beacon'
        t['XHR'] = 'xhr'
      })((C = C || {}))
      function O() {
        var t = P()
        var e = L()
        var n = R()
        return {
          analyticsId: T(i.XF),
          connection: t,
          deliveryType: (0, o.Kv)() ? C.Beacon : C.XHR,
          display: e,
          hardware: n,
          hash: window.location.hash || '',
          hostname: window.location.hostname || '',
          marketingId: T(i.iU),
          memberId: x(),
          pathname: window.location.pathname || '/',
          version: i.r2,
        }
      }
      function P() {
        var t = {}
        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection
        if (e) {
          var n = (1e3 * e.downlink).toString()
          t = {
            downlink: parseInt(n, 10),
            effectiveType: e.effectiveType,
            rtt: e.rtt,
            saveData: e.saveData,
          }
        }
        return t
      }
      function L() {
        var t = window.devicePixelRatio
        var e = window.screen,
          n = e.width,
          r = e.height
        var o = document.documentElement,
          i = o.clientHeight,
          a = o.clientWidth
        var u = {
          devicePixelRatio: t,
          screenHeight: r,
          screenWidth: n,
          viewportHeight: i,
          viewportWidth: a,
        }
        return u
      }
      function x() {
        try {
          return window.Static.SQUARESPACE_CONTEXT.authenticatedAccount.id
        } catch (t) {
          return ''
        }
      }
      function R() {
        return {
          deviceMemory: navigator.deviceMemory,
          hardwareConcurrency: navigator.hardwareConcurrency,
        }
      }
      var I = function (o) {
        return (0, s.__awaiter)(void 0, void 0, void 0, function () {
          var n, e, r
          return (0, s.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                n = (0, s.__assign)({ context: o }, O())
                window.addEventListener(i.d3, function () {
                  return (n.visibilityStateOnDCL = document.visibilityState || '')
                })
                return [4, (0, S.k)()]
              case 1:
                e = t.sent()
                n = (0, s.__assign)((0, s.__assign)({}, n), e)
                r = i.k$.reduce(function (t, e) {
                  n.hasOwnProperty(e) && (t[e] = n[e])
                  return t
                }, {})
                return [2, r]
            }
          })
        })
      }
      var N = function (n, r) {
        return (0, s.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, s.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, I(r)]
              case 1:
                e = t.sent()
                n(e, 'page_speed', (0, i.LS)(i.kQ))
                return [2]
            }
          })
        })
      }
      var A = n(288902)
      function M(t) {
        return 'string' === typeof t && t.substring(0, 4) === i.lv
      }
      var D = new Set()
      var j = function (n) {
        if (!(0, o._J)()) return
        var e = function (t) {
          var e = t.map(A.Z)
          e.forEach(function (t) {
            if (!M(t.name)) return
            var e = t.name + '|' + t.duration
            if (!D.has(e)) {
              n(t, 'user', (0, i.LS)(i.zh))
              D.add(e)
            }
          })
        }
        e(window.performance.getEntriesByType(i.Mu))
        if ((0, o.C_)()) {
          var t = new window.PerformanceObserver(function (t) {
            return e(t.getEntries())
          })
          t.observe({ type: i.Mu })
        } else
          window.addEventListener(i.vv, function () {
            e(window.performance.getEntriesByType(i.Mu))
          })
      }
      function k(c) {
        return (0, s.__awaiter)(this, void 0, void 0, function () {
          var e, n, r, o, i, a, u
          return (0, s.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                e = b(c)
                if (!e.enabled) return [2]
                n = ''
                t.label = 1
              case 1:
                t.trys.push([1, 3, , 4])
                return [4, h()]
              case 2:
                r = t.sent()
                n = r.pageLoadId
                if (!n) throw new Error('Unable to resolve pageLoadId')
                o = new f.StaticPraetorClient(r)
                i = g(o)
                if (
                  ['rum', e.appName + '-app'].some(function (t) {
                    return !i(t)
                  })
                )
                  return [2]
                a = y(e.appName, n)
                i('track-page-speed') && N(a, e.context)
                i('track-user-timing') && j(a)
                l()
                return [3, 4]
              case 3:
                u = t.sent()
                e.captureException(u, { pageLoadId: n, parsedOptions: e })
                return [3, 4]
              case 4:
                return [2]
            }
          })
        })
      }
    },
    193740: function (t, e, n) {
      'use strict'
      n.r(e)
      n.d(e, {
        getCumulativeLayoutShift: function () {
          return V
        },
        getDecodedBodySize: function () {
          return X
        },
        getDomContentLoadedEventEnd: function () {
          return Q
        },
        getDomContentLoadedEventStart: function () {
          return W
        },
        getDomainLookup: function () {
          return l
        },
        getEncodedBodySize: function () {
          return Y
        },
        getFirstContentfulPaint: function () {
          return J
        },
        getFirstInputDelay: function () {
          return Z
        },
        getLargestContentfulPaint: function () {
          return K
        },
        getLoadEventEnd: function () {
          return $
        },
        getLoadEventStart: function () {
          return tt
        },
        getResponseStart: function () {
          return et
        },
        getTCPConnection: function () {
          return p
        },
        getTLSNegotiation: function () {
          return nt
        },
        getTimeToInteractive: function () {
          return ot
        },
      })
      var i = n(93493)
      var r = n(435789)
      var o = n(288902)
      var a = function (t) {
        var n = t.type,
          e = t.buffered,
          r = void 0 === e || e,
          o = t.isReadyFn,
          i =
            void 0 === o
              ? function () {
                  return true
                }
              : o
        return new Promise(function (e) {
          var t = new PerformanceObserver(function (t) {
            i(t) && e(t)
          })
          t.observe({ type: n, buffered: r })
        })
      }
      function u() {
        var t = {}
        if (window.performance) {
          if (isNavigationLevelTwoSupported()) {
            t = toJSON(window.performance.getEntriesByType('navigation')[0])
            t.supportLevel = 2
          } else if (isNavigationLevelOneSupported()) {
            t = toJSON(window.performance.timing)
            t.supportLevel = 1
          }
          if (performance.navigation) {
            t.navigationType = window.performance.navigation.type
            t.redirectCount = window.performance.navigation.redirectCount
          }
        }
        return t
      }
      var c = null
      var s = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                if (!!c) return [3, 4]
                if (!((0, r.Ju)() && (0, r.C_)())) return [3, 2]
                return [4, d()]
              case 1:
                c = t.sent()
                return [3, 4]
              case 2:
                if (!(0, r.I4)()) return [3, 4]
                return [4, v()]
              case 3:
                c = t.sent()
                t.label = 4
              case 4:
                return [2, c]
            }
          })
        })
      }
      var f = function (n) {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, s()]
              case 1:
                e = t.sent()
                if (!e || 'number' !== typeof e[n]) return [2, null]
                return [2, Math.round(e[n])]
            }
          })
        })
      }
      function d() {
        return (0, i.__awaiter)(this, void 0, void 0, function () {
          var e, n, r
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                t.trys.push([0, 2, , 3])
                return [
                  4,
                  a({
                    type: 'navigation',
                    isReadyFn: function (t) {
                      var e = t.getEntries()[0]
                      return !!(e.duration && e.duration > 0)
                    },
                  }),
                ]
              case 1:
                e = t.sent()
                n = e.getEntries()[0]
                return [2, (0, o.Z)(n)]
              case 2:
                r = t.sent()
                return [2, null]
              case 3:
                return [2]
            }
          })
        })
      }
      function v() {
        var e = function () {
          var t = (0, o.Z)(window.performance.timing)
          var e = t.navigationStart
          delete t.navigationStart
          for (var n in t) t[n] > 0 && (t[n] = t[n] - e)
          return t
        }
        return new Promise(function (t) {
          'complete' !== document.readyState
            ? window.addEventListener('load', function () {
                setTimeout(function () {
                  t(e())
                })
              })
            : t(e())
        })
      }
      var l = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e, n, r, o
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Promise.all([f('domainLookupEnd'), f('domainLookupStart')])]
              case 1:
                ;(e = t.sent()), (n = e[0]), (r = e[1])
                if (!(n && r)) return [2, null]
                o = n - r
                return [2, { domainLookup: o }]
            }
          })
        })
      }
      var p = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e, n, r, o
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Promise.all([f('connectEnd'), f('connectStart')])]
              case 1:
                ;(e = t.sent()), (n = e[0]), (r = e[1])
                if (!(n && r)) return [2, null]
                o = n - r
                return [2, { tcpConnection: o }]
            }
          })
        })
      }
      var m,
        w,
        _,
        g,
        y = function (t, e) {
          return {
            name: t,
            value: void 0 === e ? -1 : e,
            delta: 0,
            entries: [],
            id: 'v1-'
              .concat(Date.now(), '-')
              .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
          }
        },
        h = function (t, e) {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
              if ('first-input' === t && !('PerformanceEventTiming' in self)) return
              var n = new PerformanceObserver(function (t) {
                return t.getEntries().map(e)
              })
              return n.observe({ type: t, buffered: !0 }), n
            }
          } catch (t) {}
        },
        E = function (n, r) {
          var t = function t(e) {
            ;('pagehide' !== e.type && 'hidden' !== document.visibilityState) ||
              (n(e),
              r &&
                (removeEventListener('visibilitychange', t, !0),
                removeEventListener('pagehide', t, !0)))
          }
          addEventListener('visibilitychange', t, !0), addEventListener('pagehide', t, !0)
        },
        b = function (e) {
          addEventListener(
            'pageshow',
            function (t) {
              t.persisted && e(t)
            },
            !0
          )
        },
        S = 'function' == typeof WeakSet ? new WeakSet() : new Set(),
        T = function (t, e, n) {
          var r
          return function () {
            e.value >= 0 &&
              (n || S.has(e) || 'hidden' === document.visibilityState) &&
              ((e.delta = e.value - (r || 0)), (e.delta || void 0 === r) && ((r = e.value), t(e)))
          }
        },
        C = function (t, e) {
          var n,
            r = y('CLS', 0),
            o = function (t) {
              t.hadRecentInput || ((r.value += t.value), r.entries.push(t), n())
            },
            i = h('layout-shift', o)
          i &&
            ((n = T(t, r, e)),
            E(function () {
              i.takeRecords().map(o), n()
            }),
            b(function () {
              ;(r = y('CLS', 0)), (n = T(t, r, e))
            }))
        },
        O = -1,
        P = function () {
          return 'hidden' === document.visibilityState ? 0 : 1 / 0
        },
        L = function () {
          E(function (t) {
            var e = t.timeStamp
            O = e
          }, !0)
        },
        x = function () {
          return (
            O < 0 &&
              ((O = P()),
              L(),
              b(function () {
                setTimeout(function () {
                  ;(O = P()), L()
                }, 0)
              })),
            {
              get timeStamp() {
                return O
              },
            }
          )
        },
        R = function (e, n) {
          var r,
            o = x(),
            i = y('FCP'),
            t = function (t) {
              'first-contentful-paint' === t.name &&
                (u && u.disconnect(),
                t.startTime < o.timeStamp &&
                  ((i.value = t.startTime), i.entries.push(t), S.add(i), r()))
            },
            a = performance.getEntriesByName('first-contentful-paint')[0],
            u = a ? null : h('paint', t)
          ;(a || u) &&
            ((r = T(e, i, n)),
            a && t(a),
            b(function (t) {
              ;(i = y('FCP')),
                (r = T(e, i, n)),
                requestAnimationFrame(function () {
                  requestAnimationFrame(function () {
                    ;(i.value = performance.now() - t.timeStamp), S.add(i), r()
                  })
                })
            }))
        },
        I = { passive: !0, capture: !0 },
        N = new Date(),
        A = function (t, e) {
          m || ((m = e), (w = t), (_ = new Date()), j(removeEventListener), M())
        },
        M = function () {
          if (w >= 0 && w < _ - N) {
            var e = {
              entryType: 'first-input',
              name: m.type,
              target: m.target,
              cancelable: m.cancelable,
              startTime: m.timeStamp,
              processingStart: m.timeStamp + w,
            }
            g.forEach(function (t) {
              t(e)
            }),
              (g = [])
          }
        },
        D = function (t) {
          if (t.cancelable) {
            var e = (t.timeStamp > 1e12 ? new Date() : performance.now()) - t.timeStamp
            'pointerdown' == t.type
              ? (function (t, e) {
                  var n = function () {
                      A(t, e), o()
                    },
                    r = function () {
                      o()
                    },
                    o = function () {
                      removeEventListener('pointerup', n, I),
                        removeEventListener('pointercancel', r, I)
                    }
                  addEventListener('pointerup', n, I), addEventListener('pointercancel', r, I)
                })(e, t)
              : A(e, t)
          }
        },
        j = function (e) {
          ;['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function (t) {
            return e(t, D, I)
          })
        },
        k = function (e, n) {
          var r,
            o = x(),
            i = y('FID'),
            a = function (t) {
              t.startTime < o.timeStamp &&
                ((i.value = t.processingStart - t.startTime), i.entries.push(t), S.add(i), r())
            },
            t = h('first-input', a)
          ;(r = T(e, i, n)),
            t &&
              E(function () {
                t.takeRecords().map(a), t.disconnect()
              }, !0),
            t &&
              b(function () {
                var t
                ;(i = y('FID')),
                  (r = T(e, i, n)),
                  (g = []),
                  (w = -1),
                  (m = null),
                  j(addEventListener),
                  (t = a),
                  g.push(t),
                  M()
              })
        },
        F = function (e, n) {
          var r,
            o = x(),
            i = y('LCP'),
            t = function (t) {
              var e = t.startTime
              e < o.timeStamp && ((i.value = e), i.entries.push(t)), r()
            },
            a = h('largest-contentful-paint', t)
          if (a) {
            r = T(e, i, n)
            var u = function () {
              S.has(i) || (a.takeRecords().map(t), a.disconnect(), S.add(i), r())
            }
            ;['keydown', 'click'].forEach(function (t) {
              addEventListener(t, u, { once: !0, capture: !0 })
            }),
              E(u, !0),
              b(function (t) {
                ;(i = y('LCP')),
                  (r = T(e, i, n)),
                  requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                      ;(i.value = performance.now() - t.timeStamp), S.add(i), r()
                    })
                  })
              })
          }
        },
        B = function (e) {
          var t,
            n = y('TTFB')
          ;(t = function () {
            try {
              var t =
                performance.getEntriesByType('navigation')[0] ||
                (function () {
                  var t = performance.timing,
                    e = { entryType: 'navigation', startTime: 0 }
                  for (var n in t)
                    'navigationStart' !== n &&
                      'toJSON' !== n &&
                      (e[n] = Math.max(t[n] - t.navigationStart, 0))
                  return e
                })()
              if (((n.value = n.delta = t.responseStart), n.value < 0)) return
              ;(n.entries = [t]), e(n)
            } catch (t) {}
          }),
            'complete' === document.readyState ? setTimeout(t, 0) : addEventListener('pageshow', t)
        }
      var U = function (t) {
        return new Promise(function (e, n) {
          try {
            t(function (t) {
              e(t)
            })
          } catch (t) {
            n(t)
          }
        })
      }
      var G = function (e, n) {
        void 0 === n && (n = null)
        return new Promise(function (t) {
          setTimeout(function () {
            return t(n)
          }, e)
        })
      }
      var q = 6e4
      var H = function (e) {
        return function () {
          return (0, i.__awaiter)(void 0, void 0, void 0, function () {
            return (0, i.__generator)(this, function (t) {
              return [2, Promise.race([U(e), G(q)])]
            })
          })
        }
      }
      var z = { getCLS: H(C), getFCP: H(R), getLCP: H(F), getTTFB: H(B), getFID: H(k) }
      var V = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, z.getCLS()]
              case 1:
                e = t.sent()
                return [2, e ? { cumulativeLayoutShift: e.value } : null]
            }
          })
        })
      }
      var X = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, f('decodedBodySize')]
              case 1:
                e = t.sent()
                return [2, e ? { decodedBodySize: e } : null]
            }
          })
        })
      }
      var Q = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, f('domContentLoadedEventEnd')]
              case 1:
                e = t.sent()
                return [2, e ? { domContentLoadedEventEnd: e } : null]
            }
          })
        })
      }
      var W = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, f('domContentLoadedEventStart')]
              case 1:
                e = t.sent()
                return [2, e ? { domContentLoadedEventStart: e } : null]
            }
          })
        })
      }
      var Y = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, f('encodedBodySize')]
              case 1:
                e = t.sent()
                return [2, e ? { encodedBodySize: e } : null]
            }
          })
        })
      }
      var J = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, z.getFCP()]
              case 1:
                e = t.sent()
                return [2, e ? { firstContentfulPaint: Math.round(e.value) } : null]
            }
          })
        })
      }
      var Z = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, z.getFID()]
              case 1:
                e = t.sent()
                return [2, e ? { firstInputDelay: Math.round(e.value) } : null]
            }
          })
        })
      }
      var K = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, z.getLCP()]
              case 1:
                e = t.sent()
                return [2, e ? { largestContentfulPaint: Math.round(e.value) } : null]
            }
          })
        })
      }
      var $ = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, f('loadEventEnd')]
              case 1:
                e = t.sent()
                return [2, e ? { loadEventEnd: e } : null]
            }
          })
        })
      }
      var tt = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, f('loadEventStart')]
              case 1:
                e = t.sent()
                return [2, e ? { loadEventStart: e } : null]
            }
          })
        })
      }
      var et = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, z.getTTFB()]
              case 1:
                e = t.sent()
                return [2, e ? { responseStart: Math.round(e.value) } : null]
            }
          })
        })
      }
      var nt = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e, n, r, o
          return (0, i.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, Promise.all([f('connectEnd'), f('secureConnectionStart')])]
              case 1:
                ;(e = t.sent()), (n = e[0]), (r = e[1])
                if (!(n && r)) return [2, null]
                o = n - r
                return [2, { tlsNegotiation: o }]
            }
          })
        })
      }
      var rt = n(872183)
      var ot = function () {
        return (0, i.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, i.__generator)(this, function (t) {
            if (!((0, r.N9)() && (0, r.C_)())) return [2, null]
            e = false
            window.__tti = { e: [] }
            a({
              type: 'longtask',
              buffered: false,
              isReadyFn: function (t) {
                window.__tti.e = window.__tti.e.concat(t.getEntries())
                return e
              },
            })
            return [
              2,
              (0, rt.getFirstConsistentlyInteractive)().then(function (t) {
                e = true
                return { timeToInteractive: Math.round(t) }
              }),
            ]
          })
        })
      }
    },
    216621: function (t, e, n) {
      'use strict'
      n.d(e, {
        B: function () {
          return o
        },
        L: function () {
          return i
        },
      })
      var a = n(93493)
      var r = n.n(a)
      var u = n(965630)
      var c = n(779775)
      var s = function (t) {
        var e
        'function' ===
        typeof (null ===
          (e = null === window || void 0 === window ? void 0 : window.SQUARESPACE_SENTRY) ||
        void 0 === e
          ? void 0
          : e.captureException)
          ? window.SQUARESPACE_SENTRY.captureException(t)
          : console.warn('RUM timing error: ' + t)
      }
      function o(t, e) {
        void 0 === e && (e = {})
        try {
          if (!d()) return
          var n = u.lv + t
          window.performance.mark(n, { detail: e.detail, startTime: e.startTime })
          if (void 0 !== e.tracer) {
            var r = window.performance.getEntriesByName(n, u.Gp).slice(-1)[0]
            ;(0, c.G)({
              spanName: t,
              tracer: e.tracer,
              startTime: r.startTime,
              spanAttributes: e.spanAttributes,
            })
          }
        } catch (t) {
          s(t)
        }
      }
      function i(t, e) {
        void 0 === e && (e = { requireStart: false })
        try {
          if (!(d() && f())) return
          var n = u.lv + t
          var r = { detail: e.detail, duration: e.duration }
          void 0 === e.start
            ? (r.start = n)
            : 'string' === typeof e.start
            ? (r.start = u.lv + e.start)
            : (r.start = e.start)
          r.end = 'string' === typeof e.end ? u.lv + e.end : e.end
          if (
            e.requireStart &&
            ('number' === typeof r.start ||
              0 === window.performance.getEntriesByName(r.start, u.Gp).length)
          )
            return
          if (void 0 !== e.tracer) {
            var o = (0, a.__assign)({ measureName: n }, e.spanAttributes)
            if ('number' === typeof r.start) {
              ;(0, c.G)({ spanName: n, tracer: e.tracer, startTime: r.start })
              ;(0, c.n)({ spanName: n, spanAttributes: o })
            } else {
              0 === window.performance.getEntriesByName(r.start, u.Gp).length &&
                (0, c.G)({ spanName: r.start, tracer: e.tracer, startTime: 0 })
              ;(0, c.n)({ spanName: r.start, spanAttributes: o })
            }
          }
          l(n, r)
          var i = v(n)
          return i
        } catch (t) {
          s(t)
        }
      }
      function f() {
        return (
          'performance' in window &&
          'getEntries' in window.performance &&
          'getEntriesByType' in window.performance &&
          'getEntriesByName' in window.performance
        )
      }
      function d() {
        return u.Gp in window.performance && u.Mu in window.performance
      }
      function v(t) {
        var e = window.performance.getEntriesByName(t, u.Mu)
        return e[e.length - 1]
      }
      function l(e, n) {
        try {
          window.performance.measure(e, n)
        } catch (t) {
          var r = 'string' === typeof n.start ? n.start : e
          var o = 'string' === typeof n.end ? n.end : void 0
          try {
            window.performance.measure(e, r, o)
          } catch (t) {
            if (!(t instanceof DOMException)) throw t
            try {
              window.performance.measure(e, 'navigationStart')
            } catch (t) {
              if (!(t instanceof DOMException)) throw t
              window.performance.measure(e)
            }
          }
        }
      }
    },
    289474: function (t, e, n) {
      'use strict'
      n.d(e, {
        $: function () {
          return c
        },
        l: function () {
          return s
        },
      })
      var r = n(93493)
      var o = n.n(r)
      var i = n(259126)
      var a = {
        action: 'load',
        actor: 'user',
        event_owner_team: 'web_performance',
        event_source: 'web',
        object_type: 'website',
      }
      var u = function () {
        var t = /^qa\d+.sqsp.net/g
        var e = /^stage.sqsp.net/g
        var n = /(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g
        var r = window.location.hostname.substr(window.location.hostname.indexOf('.') + 1)
        if (e.test(r) || t.test(r)) return 'staging'
        if (n.test(r)) return 'dev'
        return 'prod'
      }
      var c = function (t, e) {
        void 0 === e && (e = u())
        return new t({ customSchemaName: 'Performance', sourceEnvironment: e }, a)
      }
      var s = function (n) {
        return (0, r.__awaiter)(void 0, void 0, void 0, function () {
          var e
          return (0, r.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, (0, i.k)()]
              case 1:
                e = t.sent()
                n({
                  cumulative_layout_shift: e.cumulativeLayoutShift,
                  decoded_body_size_bytes: e.decodedBodySize,
                  dom_content_loaded_event_end_ms: e.domContentLoadedEventEnd,
                  dom_content_loaded_event_start_ms: e.domContentLoadedEventStart,
                  domain_lookup_ms: e.domainLookup,
                  encoded_body_size_bytes: e.encodedBodySize,
                  first_contentful_paint_ms: e.firstContentfulPaint,
                  first_input_delay_ms: e.firstInputDelay,
                  largest_contentful_paint_ms: e.largestContentfulPaint,
                  load_event_end_ms: e.loadEventEnd,
                  load_event_start_ms: e.loadEventStart,
                  response_start_ms: e.responseStart,
                  tcp_connection_ms: e.tcpConnection,
                  time_to_interactive_ms: e.timeToInteractive,
                  tls_negotiation_ms: e.tlsNegotiation,
                })
                return [2]
            }
          })
        })
      }
    },
    632651: function (t, e, n) {
      'use strict'
      n.d(e, {
        fk: function () {
          return o
        },
        bh: function () {
          return a
        },
      })
      var r = []
      function o() {
        return r
      }
      function i(t) {
        r.push(t)
      }
      function a(t, e, n, r) {
        var o = Object.freeze({ app: t, data: r, event: e, pageLoadId: n, ts: Date.now() })
        i(o)
        return o
      }
    },
    435789: function (t, e, n) {
      'use strict'
      n.d(e, {
        _J: function () {
          return i
        },
        C_: function () {
          return a
        },
        Ju: function () {
          return u
        },
        I4: function () {
          return c
        },
        Kv: function () {
          return s
        },
        N9: function () {
          return v
        },
      })
      var r = n(965630)
      function o() {
        return !!(window.performance && window.performance.now && window.addEventListener)
      }
      function i() {
        return !!(
          window.PerformanceMeasure &&
          window.PerformanceMark &&
          window.performance &&
          window.performance.mark &&
          window.performance.measure
        )
      }
      function a() {
        if (!window.hasOwnProperty('PerformanceObserver')) return false
        try {
          var t = new window.PerformanceObserver(function () {
            return null
          })
          t.observe({ type: 'mark' })
          t.disconnect()
        } catch (t) {
          return false
        }
        return true
      }
      function u() {
        return !!(
          window.performance &&
          window.performance.getEntriesByType &&
          window.PerformanceNavigationTiming
        )
      }
      function c() {
        return !!(window.performance && window.performance.timing && window.PerformanceTiming)
      }
      function s() {
        return (
          'function' === typeof window.navigator.sendBeacon &&
          !r.Uv.test(window.navigator.userAgent)
        )
      }
      function f() {
        return !!window.PerformancePaintTiming
      }
      function d() {
        return !!window.LargestContentfulPaint
      }
      function v() {
        return !!window.PerformanceLongTaskTiming
      }
    },
    779775: function (t, e, n) {
      'use strict'
      n.d(e, {
        G: function () {
          return r
        },
        n: function () {
          return o
        },
      })
      var u
      var r = function (t) {
        var e = t.spanName,
          n = t.tracer,
          r = t.startTime,
          o = t.spanAttributes,
          i = void 0 === o ? {} : o
        void 0 === u && (u = new Map())
        var a = n.startSpan(e, { startTime: r })
        a.setAttributes(i)
        u.set(e, a)
      }
      var o = function (t) {
        var e = t.spanName,
          n = t.spanAttributes,
          r = void 0 === n ? {} : n
        if (void 0 === u || !u.has(e)) return
        var o = u.get(e)
        o.setAttributes(r)
        o.end()
        u.delete(e)
      }
    },
    288902: function (t, e, n) {
      'use strict'
      n.d(e, {
        Z: function () {
          return r
        },
      })
      function r(t) {
        var e = {}
        for (var n in t) 'function' !== typeof t[n] && (e[n] = t[n])
        return e
      }
    },
    93493: function (t, r, i) {
      var a, u
      var e
      var n
      var c
      var s
      var f
      var d
      var v
      var l
      var p
      var m
      var w
      var _
      var g
      var y
      var h
      var E
      var b
      var S
      var T
      var C
      var O
      var P
      var L
      var x
      ;(function (e) {
        var o =
          'object' === typeof i.g
            ? i.g
            : 'object' === typeof self
            ? self
            : 'object' === typeof this
            ? this
            : {}
        true
        !((a = [r]),
        (u = function (t) {
          e(n(o, n(t)))
        }.apply(r, a)),
        void 0 !== u && (t.exports = u))
        function n(n, r) {
          n !== o &&
            ('function' === typeof Object.create
              ? Object.defineProperty(n, '__esModule', { value: true })
              : (n.__esModule = true))
          return function (t, e) {
            return (n[t] = r ? r(t, e) : e)
          }
        }
      })(function (t) {
        var r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e
            }) ||
          function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
          }
        e = function (t, e) {
          if ('function' !== typeof e && null !== e)
            throw new TypeError(
              'Class extends value ' + String(e) + ' is not a constructor or null'
            )
          r(t, e)
          function n() {
            this.constructor = t
          }
          t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n())
        }
        n =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) {
              e = arguments[n]
              for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            }
            return t
          }
        c = function (t, e) {
          var n = {}
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r])
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols)
            for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (n[r[o]] = t[r[o]])
          return n
        }
        s = function (t, e, n, r) {
          var o = arguments.length,
            i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r,
            a
          if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate)
            i = Reflect.decorate(t, e, n, r)
          else
            for (var u = t.length - 1; u >= 0; u--)
              (a = t[u]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, n, i) : a(e, n)) || i)
          return o > 3 && i && Object.defineProperty(e, n, i), i
        }
        f = function (n, r) {
          return function (t, e) {
            r(t, e, n)
          }
        }
        d = function (t, e) {
          if ('object' === typeof Reflect && 'function' === typeof Reflect.metadata)
            return Reflect.metadata(t, e)
        }
        v = function (t, a, n, u) {
          function c(e) {
            return e instanceof n
              ? e
              : new n(function (t) {
                  t(e)
                })
          }
          return new (n = n || Promise)(function (e, n) {
            function r(t) {
              try {
                i(u.next(t))
              } catch (t) {
                n(t)
              }
            }
            function o(t) {
              try {
                i(u['throw'](t))
              } catch (t) {
                n(t)
              }
            }
            function i(t) {
              t.done ? e(t.value) : c(t.value).then(r, o)
            }
            i((u = u.apply(t, a || [])).next())
          })
        }
        l = function (t, n) {
          var r = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1]
                return a[1]
              },
              trys: [],
              ops: [],
            },
            o,
            i,
            a,
            e
          return (
            (e = { next: u(0), throw: u(1), return: u(2) }),
            'function' === typeof Symbol &&
              (e[Symbol.iterator] = function () {
                return this
              }),
            e
          )
          function u(e) {
            return function (t) {
              return c([e, t])
            }
          }
          function c(e) {
            if (o) throw new TypeError('Generator is already executing.')
            while (r)
              try {
                if (
                  ((o = 1),
                  i &&
                    (a =
                      2 & e[0]
                        ? i['return']
                        : e[0]
                        ? i['throw'] || ((a = i['return']) && a.call(i), 0)
                        : i.next) &&
                    !(a = a.call(i, e[1])).done)
                )
                  return a
                ;((i = 0), a) && (e = [2 & e[0], a.value])
                switch (e[0]) {
                  case 0:
                  case 1:
                    a = e
                    break
                  case 4:
                    r.label++
                    return { value: e[1], done: false }
                  case 5:
                    r.label++
                    i = e[1]
                    e = [0]
                    continue
                  case 7:
                    e = r.ops.pop()
                    r.trys.pop()
                    continue
                  default:
                    if (
                      !((a = r.trys), (a = a.length > 0 && a[a.length - 1])) &&
                      (6 === e[0] || 2 === e[0])
                    ) {
                      r = 0
                      continue
                    }
                    if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                      r.label = e[1]
                      break
                    }
                    if (6 === e[0] && r.label < a[1]) {
                      r.label = a[1]
                      a = e
                      break
                    }
                    if (a && r.label < a[2]) {
                      r.label = a[2]
                      r.ops.push(e)
                      break
                    }
                    a[2] && r.ops.pop()
                    r.trys.pop()
                    continue
                }
                e = n.call(t, r)
              } catch (t) {
                e = [6, t]
                i = 0
              } finally {
                o = a = 0
              }
            if (5 & e[0]) throw e[1]
            return { value: e[0] ? e[1] : void 0, done: true }
          }
        }
        p = function (t, e) {
          for (var n in t)
            'default' === n || Object.prototype.hasOwnProperty.call(e, n) || x(e, t, n)
        }
        x = Object.create
          ? function (t, e, n, r) {
              void 0 === r && (r = n)
              Object.defineProperty(t, r, {
                enumerable: true,
                get: function () {
                  return e[n]
                },
              })
            }
          : function (t, e, n, r) {
              void 0 === r && (r = n)
              t[r] = e[n]
            }
        m = function (t) {
          var e = 'function' === typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0
          if (n) return n.call(t)
          if (t && 'number' === typeof t.length)
            return {
              next: function () {
                t && r >= t.length && (t = void 0)
                return { value: t && t[r++], done: !t }
              },
            }
          throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
        }
        w = function (t, e) {
          var n = 'function' === typeof Symbol && t[Symbol.iterator]
          if (!n) return t
          var r = n.call(t),
            o,
            i = [],
            a
          try {
            while ((void 0 === e || e-- > 0) && !(o = r.next()).done) i.push(o.value)
          } catch (t) {
            a = { error: t }
          } finally {
            try {
              o && !o.done && (n = r['return']) && n.call(r)
            } finally {
              if (a) throw a.error
            }
          }
          return i
        }
        _ = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(w(arguments[e]))
          return t
        }
        g = function () {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length
          for (var r = Array(t), o = 0, e = 0; e < n; e++)
            for (var i = arguments[e], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a]
          return r
        }
        y = function (t, e, n) {
          if (n || 2 === arguments.length)
            for (var r = 0, o = e.length, i; r < o; r++)
              if (i || !(r in e)) {
                i = i || Array.prototype.slice.call(e, 0, r)
                i[r] = e[r]
              }
          return t.concat(i || Array.prototype.slice.call(e))
        }
        h = function (t) {
          return this instanceof h ? ((this.v = t), this) : new h(t)
        }
        E = function (t, e, n) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
          var o = n.apply(t, e || []),
            i,
            a = []
          return (
            (i = {}),
            r('next'),
            r('throw'),
            r('return'),
            (i[Symbol.asyncIterator] = function () {
              return this
            }),
            i
          )
          function r(r) {
            o[r] &&
              (i[r] = function (n) {
                return new Promise(function (t, e) {
                  a.push([r, n, t, e]) > 1 || u(r, n)
                })
              })
          }
          function u(t, e) {
            try {
              c(o[t](e))
            } catch (t) {
              d(a[0][3], t)
            }
          }
          function c(t) {
            t.value instanceof h ? Promise.resolve(t.value.v).then(s, f) : d(a[0][2], t)
          }
          function s(t) {
            u('next', t)
          }
          function f(t) {
            u('throw', t)
          }
          function d(t, e) {
            ;(t(e), a.shift(), a.length) && u(a[0][0], a[0][1])
          }
        }
        b = function (r) {
          var t, o
          return (
            (t = {}),
            e('next'),
            e('throw', function (t) {
              throw t
            }),
            e('return'),
            (t[Symbol.iterator] = function () {
              return this
            }),
            t
          )
          function e(e, n) {
            t[e] = r[e]
              ? function (t) {
                  return (o = !o) ? { value: h(r[e](t)), done: 'return' === e } : n ? n(t) : t
                }
              : n
          }
        }
        S = function (o) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
          var t = o[Symbol.asyncIterator],
            e
          return t
            ? t.call(o)
            : ((o = 'function' === typeof m ? m(o) : o[Symbol.iterator]()),
              (e = {}),
              n('next'),
              n('throw'),
              n('return'),
              (e[Symbol.asyncIterator] = function () {
                return this
              }),
              e)
          function n(r) {
            e[r] =
              o[r] &&
              function (n) {
                return new Promise(function (t, e) {
                  ;(n = o[r](n)), i(t, e, n.done, n.value)
                })
              }
          }
          function i(e, t, n, r) {
            Promise.resolve(r).then(function (t) {
              e({ value: t, done: n })
            }, t)
          }
        }
        T = function (t, e) {
          Object.defineProperty ? Object.defineProperty(t, 'raw', { value: e }) : (t.raw = e)
          return t
        }
        var o = Object.create
          ? function (t, e) {
              Object.defineProperty(t, 'default', { enumerable: true, value: e })
            }
          : function (t, e) {
              t['default'] = e
            }
        C = function (t) {
          if (t && t.__esModule) return t
          var e = {}
          if (null != t)
            for (var n in t)
              'default' !== n && Object.prototype.hasOwnProperty.call(t, n) && x(e, t, n)
          o(e, t)
          return e
        }
        O = function (t) {
          return t && t.__esModule ? t : { default: t }
        }
        P = function (t, e, n, r) {
          if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter')
          if ('function' === typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it'
            )
          return 'm' === n ? r : 'a' === n ? r.call(t) : r ? r.value : e.get(t)
        }
        L = function (t, e, n, r, o) {
          if ('m' === r) throw new TypeError('Private method is not writable')
          if ('a' === r && !o) throw new TypeError('Private accessor was defined without a setter')
          if ('function' === typeof e ? t !== e || !o : !e.has(t))
            throw new TypeError(
              'Cannot write private member to an object whose class did not declare it'
            )
          return 'a' === r ? o.call(t, n) : o ? (o.value = n) : e.set(t, n), n
        }
        t('__extends', e)
        t('__assign', n)
        t('__rest', c)
        t('__decorate', s)
        t('__param', f)
        t('__metadata', d)
        t('__awaiter', v)
        t('__generator', l)
        t('__exportStar', p)
        t('__createBinding', x)
        t('__values', m)
        t('__read', w)
        t('__spread', _)
        t('__spreadArrays', g)
        t('__spreadArray', y)
        t('__await', h)
        t('__asyncGenerator', E)
        t('__asyncDelegator', b)
        t('__asyncValues', S)
        t('__makeTemplateObject', T)
        t('__importStar', C)
        t('__importDefault', O)
        t('__classPrivateFieldGet', P)
        t('__classPrivateFieldSet', L)
      })
    },
    872183: function (b, S, T) {
      var C, O
      ;(function () {
        var e =
            'undefined' != typeof window && window === this
              ? this
              : 'undefined' != typeof T.g && null != T.g
              ? T.g
              : this,
          n =
            'function' == typeof Object.defineProperties
              ? Object.defineProperty
              : function (t, e, n) {
                  t != Array.prototype && t != Object.prototype && (t[e] = n.value)
                }
        function r() {
          r = function () {}
          e.Symbol || (e.Symbol = t)
        }
        var o = 0
        function t(t) {
          return 'jscomp_symbol_' + (t || '') + o++
        }
        function i() {
          r()
          var t = e.Symbol.iterator
          t = t || (e.Symbol.iterator = e.Symbol('iterator'))
          'function' != typeof Array.prototype[t] &&
            n(Array.prototype, t, {
              configurable: !0,
              writable: !0,
              value: function () {
                return a(this)
              },
            })
          i = function () {}
        }
        function a(t) {
          var e = 0
          return u(function () {
            return e < t.length ? { done: !1, value: t[e++] } : { done: !0 }
          })
        }
        function u(t) {
          i()
          t = { next: t }
          t[e.Symbol.iterator] = function () {
            return this
          }
          return t
        }
        function c(t) {
          i()
          var e = t[Symbol.iterator]
          return e ? e.call(t) : a(t)
        }
        function s(t) {
          if (!(t instanceof Array)) {
            t = c(t)
            for (var e, n = []; !(e = t.next()).done; ) n.push(e.value)
            t = n
          }
          return t
        }
        var f = 0
        function d(o, i) {
          var a = XMLHttpRequest.prototype.send,
            u = f++
          XMLHttpRequest.prototype.send = function (t) {
            for (var e = [], n = 0; n < arguments.length; ++n) e[n - 0] = arguments[n]
            var r = this
            o(u)
            this.addEventListener('readystatechange', function () {
              4 === r.readyState && i(u)
            })
            return a.apply(this, e)
          }
        }
        function v(i, a) {
          var u = fetch
          fetch = function (t) {
            for (var o = [], e = 0; e < arguments.length; ++e) o[e - 0] = arguments[e]
            return new Promise(function (e, n) {
              var r = f++
              i(r)
              u.apply(null, [].concat(s(o))).then(
                function (t) {
                  a(r)
                  e(t)
                },
                function (t) {
                  a(t)
                  n(t)
                }
              )
            })
          }
        }
        var l = 'img script iframe link audio video source'.split(' ')
        function p(t, e) {
          t = c(t)
          for (var n = t.next(); !n.done; n = t.next())
            if (((n = n.value), e.includes(n.nodeName.toLowerCase()) || p(n.children, e))) return !0
          return !1
        }
        function m(n) {
          var t = new MutationObserver(function (t) {
            t = c(t)
            for (var e = t.next(); !e.done; e = t.next())
              (e = e.value),
                'childList' == e.type && p(e.addedNodes, l)
                  ? n(e)
                  : 'attributes' == e.type && l.includes(e.target.tagName.toLowerCase()) && n(e)
          })
          t.observe(document, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ['href', 'src'],
          })
          return t
        }
        function w(t, e) {
          if (2 < t.length) return performance.now()
          var n = []
          e = c(e)
          for (var r = e.next(); !r.done; r = e.next())
            (r = r.value),
              n.push({ timestamp: r.start, type: 'requestStart' }),
              n.push({ timestamp: r.end, type: 'requestEnd' })
          e = c(t)
          for (r = e.next(); !r.done; r = e.next())
            n.push({ timestamp: r.value, type: 'requestStart' })
          n.sort(function (t, e) {
            return t.timestamp - e.timestamp
          })
          t = t.length
          for (e = n.length - 1; 0 <= e; e--)
            switch (((r = n[e]), r.type)) {
              case 'requestStart':
                t--
                break
              case 'requestEnd':
                t++
                if (2 < t) return r.timestamp
                break
              default:
                throw Error('Internal Error: This should never happen')
            }
          return 0
        }
        function _(t) {
          t = t || {}
          this.w = !!t.useMutationObserver
          this.u = t.minValue || null
          t = window.__tti && window.__tti.e
          var e = window.__tti && window.__tti.o
          this.a = t
            ? t.map(function (t) {
                return { start: t.startTime, end: t.startTime + t.duration }
              })
            : []
          e && e.disconnect()
          this.b = []
          this.f = new Map()
          this.j = null
          this.v = -1 / 0
          this.i = !1
          this.h = this.c = this.s = null
          d(this.m.bind(this), this.l.bind(this))
          v(this.m.bind(this), this.l.bind(this))
          h(this)
          this.w && (this.h = m(this.B.bind(this)))
        }
        _.prototype.getFirstConsistentlyInteractive = function () {
          var e = this
          return new Promise(function (t) {
            e.s = t
            'complete' == document.readyState
              ? g(e)
              : window.addEventListener('load', function () {
                  g(e)
                })
          })
        }
        function g(t) {
          t.i = !0
          var e = 0 < t.a.length ? t.a[t.a.length - 1].end : 0,
            n = w(t.g, t.b)
          y(t, Math.max(n + 5e3, e))
        }
        function y(i, t) {
          !i.i ||
            i.v > t ||
            (clearTimeout(i.j),
            (i.j = setTimeout(function () {
              var t = performance.timing.navigationStart,
                e = w(i.g, i.b),
                t =
                  (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) ||
                  performance.timing.domContentLoadedEventEnd - t
              if (i.u) var n = i.u
              else
                n = performance.timing.domContentLoadedEventEnd
                  ? ((n = performance.timing), n.domContentLoadedEventEnd - n.navigationStart)
                  : null
              var r = performance.now()
              null === n && y(i, Math.max(e + 5e3, r + 1e3))
              var o = i.a
              e =
                5e3 > r - e
                  ? null
                  : ((e = o.length ? o[o.length - 1].end : t), 5e3 > r - e ? null : Math.max(e, n))
              e &&
                (i.s(e),
                clearTimeout(i.j),
                (i.i = !1),
                i.c && i.c.disconnect(),
                i.h && i.h.disconnect())
              y(i, performance.now() + 1e3)
            }, t - performance.now())),
            (i.v = t))
        }
        function h(r) {
          r.c = new PerformanceObserver(function (t) {
            t = c(t.getEntries())
            for (var e = t.next(); !e.done; e = t.next())
              if (
                ((e = e.value),
                'resource' === e.entryType &&
                  (r.b.push({ start: e.fetchStart, end: e.responseEnd }), y(r, w(r.g, r.b) + 5e3)),
                'longtask' === e.entryType)
              ) {
                var n = e.startTime + e.duration
                r.a.push({ start: e.startTime, end: n })
                y(r, n + 5e3)
              }
          })
          r.c.observe({ entryTypes: ['longtask', 'resource'] })
        }
        _.prototype.m = function (t) {
          this.f.set(t, performance.now())
        }
        _.prototype.l = function (t) {
          this.f.delete(t)
        }
        _.prototype.B = function () {
          y(this, performance.now() + 5e3)
        }
        e.Object.defineProperties(_.prototype, {
          g: {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return [].concat(s(this.f.values()))
            },
          },
        })
        var E = {
          getFirstConsistentlyInteractive: function (t) {
            t = t || {}
            return 'PerformanceLongTaskTiming' in window
              ? new _(t).getFirstConsistentlyInteractive()
              : Promise.resolve(null)
          },
        }
        true,
          b.exports
            ? (b.exports = E)
            : (true,
              !((C = []),
              (O = function () {
                return E
              }.apply(S, C)),
              void 0 !== O && (b.exports = O)))
      })()
    },
    792260: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.isSentryConnected =
        e.withScope =
        e.configureScope =
        e.captureEvent =
        e.captureException =
        e.captureMessage =
          void 0
      var n, r, o, i, a
      e.withScope = a
      e.configureScope = i
      e.captureEvent = o
      e.captureException = r
      e.captureMessage = n
      var u = function t(e) {
        var n
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          o[i - 1] = arguments[i]
        ;(n = console).log.apply(n, ['[Sentry] '.concat(e)].concat(o))
        return 'some-error-identifier'
      }
      var c = false
      e.isSentryConnected = c
      if (window.SQUARESPACE_SENTRY) {
        e.isSentryConnected = c = true
        e.captureMessage = n = window.SQUARESPACE_SENTRY.captureMessage
        e.captureException = r = window.SQUARESPACE_SENTRY.captureException
        e.captureEvent = o = window.SQUARESPACE_SENTRY.captureEvent
        e.configureScope = i = window.SQUARESPACE_SENTRY.configureScope
        e.withScope = a = window.SQUARESPACE_SENTRY.withScope
      } else {
        console.warn('SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.')
        e.captureMessage = n = u
        e.captureException = r = u
        e.captureEvent = o = u
        e.configureScope = i = function t() {}
        e.withScope = a = function t() {}
      }
    },
    391998: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e['default'] = void 0
      var n
      ;(function (t) {
        t['MAIN_CONTENT'] = 1
        t['CONTENT_COLLECTION'] = 1
        t['PAGE'] = 2
        t['SPLASH_PAGE'] = 3
        t['CONTENT_ITEM'] = 50
        t['NOT_FOUND'] = 100
        t['ERROR'] = 101
        t['SEARCH'] = 102
        t['LOCK_SCREEN'] = 103
        t['POPUP_OVERLAY'] = 104
        t['PROTECTED_CONTENT'] = 105
        t['MEMBER_AREA_ACCESS_DENIED'] = 106
        t['SHOW_CART'] = 200
        t['CHECKOUT'] = 201
        t['ORDER_CONFIRMED'] = 202
        t['DONATE'] = 203
        t['CONTRIBUTION_CONFIRMED'] = 204
        t['COMMERCE_CART_V2'] = 205
        t['SUBSCRIPTION_CONFIRMED'] = 206
        t['ORDER_RECEIVED'] = 207
        t['MEMBERSHIP_CONFIRMED'] = 208
        t['REVIEWS_REQUEST'] = 209
        t['NEWSLETTER_UNSUBSCRIBE'] = 300
        t['COMMERCE_EMAIL_PREVIEW'] = 301
      })((n = n || {}))
      var r = n
      e['default'] = r
      t.exports = e.default
    },
    523357: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e['default'] = void 0
      var n
      ;(function (t) {
        t['EXPIRED'] = 1
        t['PASTDUE'] = 2
        t['TRIAL'] = 3
        t['BETA'] = 4
        t['REMOVED'] = 5
        t['INTERNAL'] = 6
        t['COMPED'] = 7
        t['PAID'] = 8
        t['V5_LINKED'] = 11
        t['ACTIVE_PARKING_PAGE'] = 12
        t['RESOLD'] = 13
        t['RESOLD_GRACE_PERIOD'] = 14
        t['ENTERPRISE'] = 15
      })((n = n || {}))
      var r = n
      e['default'] = r
      t.exports = e.default
    },
  }
  var o = {}
  function h(t) {
    var e = o[t]
    if (void 0 !== e) return e.exports
    var n = (o[t] = { exports: {} })
    r[t](n, n.exports, h)
    return n.exports
  }
  !(function () {
    h.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default']
            }
          : function () {
              return t
            }
      h.d(e, { a: e })
      return e
    }
  })()
  !(function () {
    h.d = function (t, e) {
      for (var n in e)
        h.o(e, n) && !h.o(t, n) && Object.defineProperty(t, n, { enumerable: true, get: e[n] })
    }
  })()
  !(function () {
    h.g = (function () {
      if ('object' === typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (t) {
        if ('object' === typeof window) return window
      }
    })()
  })()
  !(function () {
    h.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }
  })()
  !(function () {
    h.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' })
      Object.defineProperty(t, '__esModule', { value: true })
    }
  })()
  var t = {}
  !(function () {
    'use strict'
    var t = h(310514)
    var r = t(h(11877))
    var n = t(h(100775))
    var c = t(h(523357))
    var e = t(h(391998))
    var s = h(792260)
    function o(e, t) {
      var n = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e)
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))
        n.push.apply(n, r)
      }
      return n
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? o(Object(n), true).forEach(function (t) {
              ;(0, r.default)(e, t, n[t])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
      }
      return e
    }
    var d = window.Static && window.Static.SQUARESPACE_CONTEXT
    var i = window.top !== window
    var v = Object.freeze((0, r.default)({}, e.default.COMMERCE_CART_V2, 'commerce-cart'))
    function l() {
      var t = (window.location && window.location.pathname) || ''
      return !i && /^\/config(\/.*)?$/.test(t)
    }
    function p() {
      return {
        inFrame: i,
        templateId: d.templateId || '',
        impersonatedSession: !!d.impersonatedSession,
        pageType: 'number' === typeof d.pageType ? d.pageType : -1,
      }
    }
    function m() {
      var t = d.website,
        e = void 0 === t ? {} : t
      return {
        authenticUrl: e.authenticUrl || '',
        cloneable: !!e.cloneable,
        developerMode: !!e.developerMode,
        isHstsEnabled: !!e.isHstsEnabled,
        language: e.language || '',
        timeZone: e.timeZone || '',
        websiteId: e.id || '',
        websiteType: e.websiteType || -1,
      }
    }
    function w() {
      var t = d.websiteSettings,
        e = void 0 === t ? {} : t
      return { ampEnabled: !!e.ampEnabled }
    }
    function _() {
      var t = d.collection,
        e = void 0 === t ? {} : t
      return { collectionType: e.type || -1 }
    }
    function a() {
      return window.Squarespace && 'SECTION_CONTEXT' in window.Squarespace
    }
    function u() {
      if (d.hasOwnProperty('templateVersion')) return d.templateVersion.replace('.', '_')
      if (a()) return '8'
      return null
    }
    function g(t) {
      var e = l()
      var n = v[d.pageType]
      var r = {
        appName: n || 'v'.concat(t, '-').concat(e ? 'config' : 'user-sites'),
        context: f({}, p(), {}, m(), {}, w(), {}, _()),
        captureException: function t(e, n) {
          ;(0, s.withScope)(function (t) {
            t.setTag('project', 'rum-collector')
            void 0 !== n && t.setExtra('extras', n)
            ;(0, s.captureException)(e)
          })
        },
      }
      if (e) {
        var o = d.website.siteStatus.value === c.default.INTERNAL
        var i = d.authenticatedAccount,
          a = i.createdOn,
          u = i.id
        r.context.isInternal = o
        r.context.createdOn = a
        r.context.memberId = u
      }
      return r
    }
    function y() {
      if ((true, d)) {
        var t = u()
        if (null === t) return
        var e = g(t)
        ;(0, n.default)(e)
      }
    }
    y()
  })()
})()
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-e5c10ded29af323f1ec37-min.en-US.js.map
