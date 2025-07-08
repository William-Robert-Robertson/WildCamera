var wa_all_domains_list = [
    "uat.nxp.jp",
    "www.nxp.jp",
    "uat.nxp.co.kr",
    "www.nxp.co.kr",
    "uat.freescale.com",
    "uat.nxp.com",
    "www.nxp.com",
    "uat.nxp.com.cn",
    "www.nxp.com.cn",
    "store-uat.nxp.com",
    "store.nxp.com",
];

function checkAllDomainsList(currentDomain) {
    len = wa_all_domains_list.length;
    for (i = 0; i < len; i++) {
        if (currentDomain == wa_all_domains_list[i]) {
            return true;
        }
    }
    return false;
}

function gdprBannerDomain(url) {
    len = wa_all_domains_list.length;
    for (i = 0; i < len; i++) {
        if (url.indexOf(wa_all_domains_list[i]) > -1) {
            return true;
        }
    }
    return false;
}

/*START :- Added this to Test the Recent Activity*/
var recentActivityJS = document.createElement("script");
var d = new Date();
recentActivityJS.src = checkAllDomainsList(document.domain) ? "/resources/scripts/analytics/activity.js" : "//www.nxp.com//resources/scripts/analytics/activity.js";
document.head.appendChild(recentActivityJS);

/*START :- Added this to Test the One Trust GDPR Banner*/
(function() {
    if (gdprBannerDomain(document.URL)) {
        var hostName = window.location.hostname
        var jsFile = "//" + hostName + "/resources/scripts/nxp-cms/loadOneTrustInHead.js";
        var otScript = document.createElement("script");
        otScript.setAttribute("async", "false");
        otScript.setAttribute("src", jsFile);
        var head = document.head;
        head.insertBefore(otScript, head.firstChild);
    }
})();