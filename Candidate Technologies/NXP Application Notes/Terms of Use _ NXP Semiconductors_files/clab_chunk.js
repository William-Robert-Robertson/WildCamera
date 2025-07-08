(window.webpackJsonpclab_tracker = window.webpackJsonpclab_tracker || []).push([
    [1], {
        7: function (e, t, i) { // 不同版本修改这里的id
            var n, r, a, o;
            var fingerprint;
            var cookieName = 'device_uuid';
            function uuid() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                    const r = (Math.random() * 16) | 0;
                    const v = c == 'x' ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                });
            }

            function getBrowserInfo() {
                var agent = navigator.userAgent.toLowerCase();

                var regStr_ie = /msie [\d.]+;/gi;
                var regStr_ff = /firefox\/[\d.]+/gi;
                var regStr_chrome = /chrome\/[\d.]+/gi;
                var regStr_saf = /safari\/[\d.]+/gi;

                var regStr_opera = /opera\/[\d.]+/gi;
                var regStr_qqbrowser = /qqbrowser\/[\d.]+/gi;

                //IE
                if (agent.indexOf('msie') > 0) {
                    return agent.match(regStr_ie);
                }

                //firefox
                if (agent.indexOf('firefox') > 0) {
                    return agent.match(regStr_ff);
                }

                //Chrome
                if (agent.indexOf('chrome') > 0) {
                    return agent.match(regStr_chrome);
                }

                //Safari
                if (agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0) {
                    return agent.match(regStr_saf);
                }

                //Opera
                if (agent.indexOf('opera') > 0) {
                    return agent.match(regStr_opera);
                }

                //qqbrowser
                if (agent.indexOf('qqbrowser') > 0) {
                    return agent.match(regStr_qqbrowser);
                }
            }
            var browserInfo = getBrowserInfo() || [''];

            var infoList = browserInfo[0].split('/');

            var browserName = '';
            var browserVersion = '';
            if (infoList.lenght === 2) {
                browserName = infoList[0];
                browserVersion = [1];
            }

            n = window, (o = function () {
                var reg = new RegExp(cookieName+'=([^;]*)?(;|$)');
                var device = document.cookie.match(reg);
                if (device && device[1]) {
                    fingerprint = device[1];
                } else {
                    this.setDevice();
                }
                return r = (new(window.UAParser || t.UAParser)).getResult(), this
            }).prototype = {
                setDevice: function () {
                    fingerprint = uuid();
                    const expires =
                        '; expires=' +
                        new Date(
                            new Date().getTime() + 800 * 24 * 60 * 60 * 1000,
                        ).toUTCString();
                    document.cookie = cookieName + '=' + fingerprint + '; expires=' + expires;
                },
                getFingerprint: function () {
                    return fingerprint
                },
                getBrowser: function () {
                    return browserName
                },
                getBrowserVersion: function () {
                    return browserVersion
                },

                getOS: function () {
                    return r.os.name
                },
                getOSVersion: function () {
                    return r.os.version
                }
            }, e.exports = o, n.ClientJS = o;


            ! function (i, n) {
                var r = {
                        extend: function (e, t) {
                            for (var i in t) - 1 !== "browser cpu device engine os".indexOf(i) && 0 == t[i].length % 2 && (e[i] = t[i].concat(e[i]));
                            return e
                        },
                        has: function (e, t) {
                            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function (e) {
                            return e.toLowerCase()
                        },
                        major: function (e) {
                            return "string" == typeof e ? e.split(".")[0] : n
                        }
                    },
                    a = function () {
                        for (var e, t, i, r, a, o, s, l = 0, u = arguments; l < u.length && !o;) {
                            var c = u[l],
                                d = u[l + 1];
                            if (void 0 === e)
                                for (r in e = {}, d) d.hasOwnProperty(r) && ("object" == typeof (a = d[r]) ? e[a[0]] = n : e[a] = n);
                            for (t = i = 0; t < c.length && !o;)
                                if (o = c[t++].exec(this.getUA()))
                                    for (r = 0; r < d.length; r++) s = o[++i], "object" == typeof (a = d[r]) && 0 < a.length ? 2 == a.length ? e[a[0]] = "function" == typeof a[1] ? a[1].call(this, s) : a[1] : 3 == a.length ? e[a[0]] = "function" != typeof a[1] || a[1].exec && a[1].test ? s ? s.replace(a[1], a[2]) : n : s ? a[1].call(this, s, a[2]) : n : 4 == a.length && (e[a[0]] = s ? a[3].call(this, s.replace(a[1], a[2])) : n) : e[a] = s || n;
                            l += 2
                        }
                        return e
                    },
                    o = function (e, t) {
                        for (var i in t)
                            if ("object" == typeof t[i] && 0 < t[i].length) {
                                for (var a = 0; a < t[i].length; a++)
                                    if (r.has(t[i][a], e)) return "?" === i ? n : i
                            } else if (r.has(t[i], e)) return "?" === i ? n : i;
                        return e
                    },
                    s = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    l = {

                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            ["name", "version"],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            ["name", ["version", o, s]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                ["name", "Windows"],
                                ["version", o, s]
                            ],
                            [/\((bb)(10);/i],
                            [
                                ["name", "BlackBerry"], "version"
                            ],
                            [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                            ["name", "version"],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                            [
                                ["name", "Symbian"], "version"
                            ],
                            [/\((series40);/i],
                            ["name"],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                ["name", "Firefox OS"], "version"
                            ],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                            ["name", "version"],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                ["name", "Chromium OS"], "version"
                            ],
                            [/(sunos)\s?([\w\.]+\d)*/i],
                            [
                                ["name", "Solaris"], "version"
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                            ["name", "version"],
                            [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                            [
                                ["name", "iOS"],
                                ["version", /_/g, "."]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                ["name", "Mac OS"],
                                ["version", /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                            ["name", "version"]
                        ]
                    },
                    u = function (e, t) {
                        if (!(this instanceof u)) return new u(e, t).getResult();
                        var n = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                            o = t ? r.extend(l, t) : l;
                        return this.getOS = function () {
                            return a.apply(this, o.os)
                        }, this.getResult = function () {
                            return {
                                os: this.getOS(),
                            }
                        }, this.getUA = function () {
                            return n
                        }, this.setUA = function (e) {
                            return n = e, this
                        }, this.setUA(n), this
                    };
                e.exports && (t = e.exports = u), t.UAParser = u;
                var c = i.jQuery || i.Zepto;
                if (void 0 !== c) {
                    var d = new u;
                    c.ua = d.getResult(), c.ua.get = function () {
                        return d.getUA()
                    }, c.ua.set = function (e) {
                        for (var t in d.setUA(e), e = d.getResult()) c.ua[t] = e[t]
                    }
                }
            }("object" == typeof window ? window : this)
        }
    }
]);