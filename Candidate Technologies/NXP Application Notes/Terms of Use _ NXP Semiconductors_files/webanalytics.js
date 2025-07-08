if (typeof digitalDataEvent == "undefined") {
	var digitalDataEvent = {};
}
var satTrackFlag = true;
var satIPTrackFlag = true;
var setGDPRCookieRun = false;
var isGDPRCountryUser = true;
var wa_lang_cd_list = ["cn", "zh-Hans", "ja", "jp", "ko", "kr"];
var wa_microsite_domains = ["uat.nxp.co.kr", "www.nxp.co.kr", ];
var wa_regional_site_domains = ["uat.freescale.com", "uat.nxp.com", "www.nxp.com", "uat.nxp.com.cn", "www.nxp.com.cn","uat.nxp.jp", "www.nxp.jp"];
var wa_ecom_domains = ["store-uat.nxp.com", "store.nxp.com"];
var wa_all_domains = ["uat.nxp.jp", "www.nxp.jp", "uat.nxp.co.kr", "www.nxp.co.kr", "uat.freescale.com", "uat.nxp.com", "www.nxp.com", "uat.nxp.com.cn", "www.nxp.com.cn", "store-uat.nxp.com", "store.nxp.com", ];
//var wa_cache_url_domains = ["cache-uat.freescale.com","cache.freescale.com", "cache.nxp.com","cache-uat.nxp.com"];
var wa_cache_url_domains = ["cache-uat.nxp.com.cn", "cache.nxp.com.cn", "cache-uat.nxp.com", "cache.nxp.com", ];
var _elqQ = [];
var elqCallList = []; //Regression Testing
var isAdobeTargetActive = true;
var referrerPageCategoryCookie = "referrerPageCategory";
var referrerPageCodeCookie = "referrerPageCode";
var referrerPageTypeCookie = "referrerPageType";
var contentfindingCookie = "contentfinding";
var pspName = "Psp";
var aspName = "Asp";
var tspName = "Tsp";
var rdspName = "Rdsp";
var sspName = "Ssp";
var dspName = "Dsp";
var userGuideName = "GUIDE SUMMARY";
var downloadServletURL = "webapp/Download";
var downloadLicenseJSPURL = "download/license.jsp";
var moderatedDownloadJSPURL = "download/mod_download.jsp";
var downloadFilesURL = "download/files/";
var downloadTrainingURL = "download/training/";
var downloadAssetsURL = "download/assets/";
var registeredDownloadType = "Registered";
var licensedDownloadType = "Licensed";
var moderatedDownloadType = "Moderated";
var marketingLeveragedDownloadType = "Marketing Leveraged";
var wa_securedDocumentURL = "/webapp/sd/collateral/";
var wa_securedDocumentType = "Secured Document";
var parametricSelectorURL = "/parametricSelector.sp";
var packageSearchURL = "/packages/search?";
var searchURL = "/search?";
var softwareCenterURL = "software-center/library.jsp";
var chemicalContentURL = "/chemical-content/";
var imdsURL = "/chemical-content/imds";
var chemicalContentSearchURL = "/chemical-content/search";
var keywordSearchPageName = "Keyword Search";
var softwareSearchPageName = "Software Search";
var packageSearchPageName = "Package Search";
var chemicalContentName = "Chemical Content";
var chemicalContentPageName = "Chemical Content Page";
var chemicalContentSearchPageName = "Chemical Content Search";
var downloadPageName = "Download";
var parametricSearchPageName = "Parametric Search";
var partFinderPageName = "Part Finder";
var crossCheckPartFinderPageName = "Cross Check: Part Finder";
var competitorXrefPageName = "Competitor Xref";
var crossCheckCompCrossRefPageName = "Cross Check: Competitor Cross Reference";
var quickPricingPageName = "Quick Pricing";
var crossCheckQuickPricingPageName = "Cross Check: Quick Pricing";
var partDetailsPageName = "Part Details";
var homepagePageName = "Homepage";
var overviewPageName = "Overview";
var taxonomyPageName = "Taxonomy";
var familyPageName = "Family";
var productFamilyPageName = "Product Family";
var generalPageName = "General";
var videoVaultPageName = "Video Vault";
var videoChannelPageName = "Video Channel";
var videoPageName = "Video";
var videoSummaryPageName = "Video Summary Page";
var pipPageName = "Pip";
var packageSummaryPageName = "Package Summary Page";
var solutionsPageName = "Solutions";
var trainingInfoPageName = "Training Information";
var docToolUpdatesPageName = "Documentation and Tool Updates";
var distyNetSearchPageName = "DistyNet Search";
var preDownloadPageName = "Predownload page";
var downloadEmailAlert = "Download Page - Email Alert";
var softwareSupportActivation = "Software & Support Activation";
var recentActivity = "My Account: Recent Activity";
var blogPageName = "Blog Post Page";
var salesnetPageName = "SalesNet";
var isDTMEnabledFlag = false;
var pcnURL = "/pcn/";
var pcnPageName = "Product Change Notification";
var ndaFaqs = 'NDA FAQs';
var mcuxpresso = 'MCUXpresso';
var applicationCodeHubSearch = 'Application Code Hub Search';
var expansionBoardHubSearch = 'Expansion Board Hub Search';
var expansionBoardHubProductCard = 'Expansion Board Hub Product Card';
var wa_setConsentDomain= ['events1.social27.com','showroom.nxp.com','beta.nxpshowroom.eimex-solutions.com','nxp.dev.ethinksites.com'];


// Wll use wa_regional_site_domains and replace this
var regionalDomain = ["uat.nxp.com", "www.nxp.com", "uat.nxp.com.cn", "www.nxp.com.cn", "uat.nxp.jp", "www.nxp.jp", "uat.nxp.co.kr", "www.nxp.co.kr", "store-uat.nxp.com", "store.nxp.com"];

var wa_internalDomainList = 'javascript:,javascript:void(0),www.freescale.com,freescale.com.cn,freescale.co.jp,contact.freescale.com,contact.nxp.com,cache.freescale.com,community.freescale.com,community.nxp.com,uat.freescale.com,cache-uat.freescale.com,community-uat.freescale.com,*.freescale.net,freescale.co.kr,getregisterednow.com,images.freescale.com,media.freescale.com,ir.freescale.com,investors.freescale.com,scdev-15.isys.intraware.com,freescaleuat.flexnetoperations.com,freescale.flexnetoperations.com,iottour.freescaleforms.com,iot.freescale.com,fslwpbt.de,blogs.freescale.com,vod.freescale.com,video.freescale.net,esdhttpuat.flexnetoperations.com,freescaleesdtest.flexnetoperations.com,freescaleesd.flexnetoperations.com,http.flexnetoperations.com,ftf.freescaleforms.com,preview-test.freescale.net,preview.freescale.net,ftf.freescale.com,az84ap80.am.freescale.net,fsls.co,m-uat.freescale.com,freescale.jiveon.com,ftf-test-brazil.freescale.net,az84ap47.am.freescale.net,az84ap80.am.freescale.net,az84ap89.am.freescale.net,localhost,www.nxp.com,cache.nxp.com,contact-freescale-com.p01.elqsandbox.com,nxpuat.flexnetoperations.com,iot-test-china.freescale.net,iot-cn.nxp.com,investors.nxp.com,az84wfm05c.am.freescale.net,events.nxp.com,training.nxp.com,nww.teamsite-test.nxp.com,nww.preview-test.nxp.com,nww.teamsite-dev.nxp.com,nww.preview-dev.nxp.com,az84ap84.am.freescale.net,blog.nxp.com,phx.corporate-ir.net,disti.nxp.com,full-nxpcommunity.,7sdev-nxpcommunity.,nxpcommunity.,staging.fuel.tech,iotedge.nxp.com,media.nxp.com,media.kr.nxp.com,nxp.com.cn,uat.nxp.com,uat.nxp.jp,www.nxp.jp,store-uat.nxp.com,store.nxp.com,uat.nxp.co.kr,www.nxp.co.kr,uat.nxp.com.cn,www.nxp.com.cn,elearning.nxp.com,www.hovergames.com,nxpcup.nxp.com,docs.nxp.com,nxp-staging.zoominsoftware.io,cache.nxp.com.cn,cache-uat.nxp.com.cn,nxp-dev.zoominsoftware.io,community-staging.nxp.com,pwmxy87654.lithium.com,experience.nxp.com,qa-nxp.vxp.live,events1.social27.com,showroom.nxp.com,beta.nxpshowroom.eimex-solutions.com,sso-staging.zoominsoftware.com,sso.zoominsoftware.com,mcuxpresso.nxp.com,kex-stage.nxp.com,nxp-theme-dev.zoominsoftware.io';

if (typeof digitalData == "undefined") {
	var digitalData = {};
	digitalData.userInfo = {};
	digitalData.siteInfo = {};
	digitalData.formInfo = {};
	digitalData.pageInfo = {};
	digitalData.eventInfo = {};
	digitalData.searchInfo = {};
	digitalData.dwnldInfo = {};
	digitalData.documentclick = {};
	digitalData.videoInfo = {};
	digitalData.blockdiagramInfo = {};
	digitalData.category = {};
	digitalData.cartInfo = {};
	digitalData.cartInfo.products = "";
	digitalData.pageInfo.pageLoadRule = "";
	digitalData.pageInfo.pageName = "";
	digitalData.pageInfo.pageType = "";
	digitalData.pageInfo.siteSection1 = "";
	digitalData.pageInfo.pageEventPathing = "";
	digitalData.pageInfo.localTitle = "";
	digitalData.ignorePageLoad = false;
	digitalData.pageInfo.summaryPageType = "";
	digitalData.pageInfo.pageEvents = "";
	digitalData.eventInfo.name = "";
	digitalData.eventInfo.pageAction = "";
	digitalData.eventInfo.pageSubaction = "";
	digitalData.eventInfo.targetURL = "";
	digitalData.eventInfo.subCFCookieFlag = "";
	digitalData.eventInfo.subContentFinding = "";
	digitalData.eventInfo.sourceType = "";
	digitalData.eventInfo.sourceId = "";
	digitalData.eventInfo.eventPathing = "";
	digitalData.eventInfo.contentFinding = "";
	digitalData.eventInfo.assetID = "";
	digitalData.eventInfo.ignoreCookie = "";
	digitalData.eventInfo.pageEventPathing = "";
	digitalData.eventInfo.formId = "";
	digitalData.eventInfo.eventOrderingCode = "";
	digitalData.pageInfo.prodView = getProdview();
	digitalData.item = [];
	digitalData.price = {};
	digitalData.profile = {};
	digitalData.profile.address = {};	
}

if(typeof digitalData != "undefined" && typeof digitalData.customEventInfo == 'undefined'){
	digitalData.customEventInfo = {};
	digitalData.customEventInfo.pageActionContentFinding = '';
	digitalData.customEventInfo.searchKeyword = '';
	digitalData.customEventInfo.searchResultCount = '';
	digitalData.customEventInfo.eventPathing = '';
	digitalData.customEventInfo.formName = '';
	digitalData.customEventInfo.uniquePageComponent = '';
	digitalData.customEventInfo.searchResultPageNumber = '';
	digitalData.customEventInfo.pageAction = '';
	digitalData.customEventInfo.pageSubaction = '';
	digitalData.customEventInfo.contentSubFinding = '';
	digitalData.customEventInfo.searchResultPosition = '';
	digitalData.customEventInfo.targetURL = '';
	digitalData.customEventInfo.events = {};
	digitalData.customEventInfo.searchFilterList = {};
	
	digitalData.customEventInfo.pageEventPathingdiv = '';
	digitalData.customEventInfo.pageActiondiv = '';
	digitalData.customEventInfo.pageSubactiondiv = '';
	digitalData.customEventInfo.targetURLdiv = '';
	digitalData.customEventInfo.searchResultPageNumberdiv = '';
	digitalData.customEventInfo.searchResultPositiondiv = '';
	digitalData.customEventInfo.assetIDdiv = '';
}

//Katalon Testing Variable - 8/16/2021 - MJC
var wa_analytics_call_list = [];
//End Katalon Testing Variable - 8/16/2021 - MJC
//Comment out - replaced by framework-loader.js DFCT0014970,DFCT0014969
/*
function gdprBannerDomain(url) {
		len = wa_all_domains.length;
		for (i = 0; i < len; i++) {
			if (url.indexOf(wa_all_domains[i]) > -1) {
				return true;
			}
		}
		return false;
	}
	(function() {
		if (gdprBannerDomain(document.URL)) {
			var jsFile = "//www.nxp.com/resources/scripts/nxp-cms/loadOneTrustInHead.js";
			var otScript = document.createElement('script');
			otScript.setAttribute("async", "false")
			otScript.setAttribute("src", jsFile);
			var head = document.head;
			head.insertBefore(otScript, head.firstChild);
		}
	})();;*/
if(wa_getCookie('CAAWJS_TEST') !='' || (typeof analyticsSiteType === 'function' && (analyticsSiteType(document.domain)=='regional' || analyticsSiteType(document.domain)=='microsite' || analyticsSiteType(document.domain)=='ecommerce'))){
  !function(e,a,n,t){var i=e.head;if(i){
  if (a) return;
  var o=e.createElement("style");
  o.id="alloy-prehiding",o.innerText=n,i.appendChild(o),setTimeout(function(){o.parentNode&&o.parentNode.removeChild(o)},t)}}
  (document, document.location.href.indexOf("adobe_authoring_enabled") !== -1, "body { opacity: 0 !important }", 3000);
  //console.log('Firing Web SDK Pre-hidding Snippet');
}/*else{
	(function(win, doc, style, timeout) {
		var STYLE_ID = 'at-body-style';

		function getParent() {
			return doc.getElementsByTagName('head')[0];
		}

		function addStyle(parent, id, def) {
			if (!parent) {
				return;
			}
			var style = doc.createElement('style');
			style.id = id;
			style.innerHTML = def;
			parent.appendChild(style);
		}

		function removeStyle(parent, id) {
			if (!parent) {
				return;
			}
			var style = doc.getElementById(id);
			if (!style) {
				return;
			}
			parent.removeChild(style);
		}
		addStyle(getParent(), STYLE_ID, style);
		setTimeout(function() {
			removeStyle(getParent(), STYLE_ID);
		}, timeout);
		//console.log("Pre hidding snipet");
	}(window, document, ".test-target1, #test-target2 {opacity: 0 !important}", 3000));
}*/
if(typeof wa_getWebGuid == 'function'){ 
  wa_getWebGuid(); 
}

function wa_getWebGuid(){
var isEcommDmn = false;
var len = wa_ecom_domains.length;
for (i = 0; i < len; i++) { 
	if(document.domain === wa_ecom_domains[i]){
	 isEcommDmn = true; 
	 break; 
	}
}
if(isEcommDmn && wa_getCookie('web_guid') === ''){	
		var dom_env = '';
		var reqDom = ''
			if(document.domain == 'store-uat.nxp.com')
			    dom_env = 'uat';
			else
				dom_env = 'prod';
			
		if(wa_getCookie('LANGUAGE_OPTION') == 'zh-Hans'){
			if(dom_env == 'uat')
				reqDom = '//uat.nxp.com.cn'
			else
				reqDom = '//www.nxp.com.cn'
		}else if(wa_getCookie('LANGUAGE_OPTION') == 'ja'){
			if(dom_env == 'uat')
				reqDom = '//uat.nxp.jp'
			else
				reqDom = '//www.nxp.jp'
		}else{
			if(dom_env == 'uat')
				reqDom = '//uat.nxp.com'
			else
				reqDom = '//www.nxp.com' 
        }
		
		//console.log("###5 before ajax call with dom :"+reqDom);	
        $.ajax({
            url: reqDom + '/secured-rest/secureapi/userattr/getWebGUID',
            dataType: "json",
			credentials: "include",
            crossDomain: true,			
            async: true,
            type: "get",
			xhrFields: {
				withCredentials: true
			},
            success: function(response) {
                if (response.guid !== "undefined" || response.guid !== "") {
				    setSessionCookie('web_guid',response.guid);
                }
            },
            error: function(e) {
                _satellite.logger.log(e);
            },
        });
 }//end isEcommDmn && getCookie()		
}//end wa_getwebGuid()
/*
if(typeof digitalData.referralInfo === "undefined") {
	digitalData.referralInfo={};
	setDigitalDataReferralInfoValues();
} else {
	setDigitalDataReferralInfoValues();
}
*/

function setDigitalDataReferralInfoValues() {
	if(typeof digitalData.referralInfo === "undefined") 
	digitalData.referralInfo = {};	
	digitalData.referralInfo.refCat ='';
	digitalData.referralInfo.refCode='';
	digitalData.referralInfo.refType='';
	digitalData.referralInfo.bdClick='';
}

//Start: Fetch wa_data object values from local storage/cookie on Page Load
var referralValues = {};
/*
if (document.readyState !== 'loading') {
	 if (typeof wa_setReferralValues != 'undefined') {
		wa_setReferralValues(getReferralValues("wa_data"));	
	 }	
} else if (typeof $ != "undefined") {
   // $(window).bind("load", function() {
	   if (typeof wa_setReferralValues != 'undefined') {
			wa_setReferralValues(getReferralValues("wa_data"));
	   }
   // });
}
*/

function wa_setReferralValues(referralValues) {
    if (referralValues === '' || referralValues === null) {
        return;
    }
    if (referralValues.hasOwnProperty('pageRef') && Object.keys(referralValues.pageRef).length > 0) {
        var refCat = referralValues.pageRef.refCat;
        var refCode = referralValues.pageRef.refCode;
        var refType = referralValues.pageRef.refType;

        digitalData.referralInfo.refCat = referralValues.pageRef.refCat;
        digitalData.referralInfo.refCode = referralValues.pageRef.refCode;
        digitalData.referralInfo.refType = referralValues.pageRef.refType;

        //referralValues.pageRef = {};
		delete referralValues.pageRef;
    }
	
	if (referralValues.hasOwnProperty('pageActionRef') && Object.keys(referralValues.pageActionRef).length > 0) {  
		//referralValues.pageActionRef = {};	
		digitalData.referralInfo.refContentfinding = referralValues.pageActionRef.contentfinding !=undefined ? referralValues.pageActionRef.contentfinding : '';
		digitalData.referralInfo.refsubContentFinding = referralValues.pageActionRef.subContentFinding !=undefined ? referralValues.pageActionRef.subContentFinding : '';
		digitalData.referralInfo.refSearchKeyword = referralValues.pageActionRef.searchKeyword !=undefined ? referralValues.pageActionRef.searchKeyword : '';
		digitalData.referralInfo.refSearchKeywordList = referralValues.pageActionRef.searchKeywordList !=undefined ? referralValues.pageActionRef.searchKeywordList : '';
		digitalData.referralInfo.refSearchResultPageNumber = referralValues.pageActionRef.searchResultPageNumber !=undefined ? referralValues.pageActionRef.searchResultPageNumber : '';
		digitalData.referralInfo.refSearchResultPosition = referralValues.pageActionRef.searchResultPosition !=undefined ? referralValues.pageActionRef.searchResultPosition : '';
		digitalData.referralInfo.refSearchFilter = referralValues.pageActionRef.searchFilter !=undefined ? referralValues.pageActionRef.searchFilter : '';
		digitalData.referralInfo.refAddToCartLocation = referralValues.pageActionRef.refAddToCartLocation !=undefined ? referralValues.pageActionRef.addToCartLocation : '';
		delete referralValues.pageActionRef;
	}
	
	if (referralValues.hasOwnProperty('gcmaRef') && Object.keys(referralValues.gcmaRef).length > 0) {	
		digitalData.referralInfo.bdClick = referralValues.gcmaRef.bdClick;
		referralValues.gcmaRef = {};
		delete referralValues.gcmaRef;
	}
	
	if (!referralValues.hasOwnProperty('pageRef')&& !referralValues.hasOwnProperty('pageActionRef') && !referralValues.hasOwnProperty('gcmaRef')) {		
		//clear local storage
		//clear cookie
		wa_removeLocalStorageItem('wa_data');
		wa_removeCookieItem('wa_data');
	} //else {
		//if(localStrage wa_data exists) take those json values and rebuild it
		//if(cookie wa_data exists) take those json values and rebuild it
	//}
}

function getReferralValues(key) {
    referralValuesData = wa_getLocalStorageItem(key);
    if (referralValuesData != '' && referralValuesData != null) {
        //wa_removeLocalStorageItem(key);
    } else {
        referralValuesData = wa_getJSONCookieItem(key);
        // wa_removeCookieItem(key);
    }
    return referralValuesData;
}


function wa_getLocalStorageItem(name) {
    if (typeof JSON == "object" && typeof localStorage == "object") {
        var obj = localStorage.getItem(name);
        jsonObject = obj != '' && obj != undefined ? JSON.parse(obj) : '';
        return jsonObject;
    }
}

function wa_getJSONCookieItem(name) {
    if (typeof JSON == "object") {
        var obj = wa_getCookie(name);
        jsonObject = obj != '' && obj != undefined ? JSON.parse(obj) : '';
        return jsonObject;
    }
}

function wa_removeLocalStorageItem(name) {
    localStorage.removeItem(name);
}

function wa_removeCookieItem(cname) {
    var expires = "expires=";
    var dom = document.domain;
    if (dom.indexOf("nxp.com.cn") > -1 || dom.indexOf(".nxp.jp") > -1 || dom.indexOf(".nxp.co.kr") > -1) {
        document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + "; domain=" + dom + "; path=/; secure";
    } else {
        document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + "; domain=" + getMajorDomain() + "; path=/";
    }
}

function wa_elqPageLoadCall() {
	var elqSetSiteID;
	var wa_queryString = '';
	if (setGDPRCookieRun == false) setGDPRCookie();
	if (getAdobeCookie("sat_track") == "true" && typeof digitalData != 'undefined' && typeof digitalData.pageInfo != 'undefined') {
		if (document.domain == "community.nxp.com") elqSetSiteID = '1764';
		else elqSetSiteID = '2716';
		var wa_title = encodeURIComponent(digitalData.pageInfo.pageName);
		var wa_activityType = 'view';
		var wa_contentType = encodeURIComponent(digitalData.pageInfo.pageType);
		var wa_username = '';
		if (typeof digitalData.userInfo != 'undefined' && typeof digitalData.userInfo.userName != 'undefined') wa_username = encodeURIComponent(digitalData.userInfo.userName);
		var wa_searchTerm = '';
		if (digitalData.pageInfo.pageType == 'Community: Search' && typeof digitalData.searchInfo.searchkeyword != 'undefined') {
			wa_searchTerm = encodeURIComponent(digitalData.searchInfo.searchkeyword);
			wa_activityType = 'Search';
		}
		var wa_siteSection1 = wa_siteSection2 = wa_siteSection3 = wa_siteSection4 = wa_siteSection5 = '';
		if (typeof digitalData.pageInfo.siteSection1 != 'undefined' && digitalData.pageInfo.siteSection1 != '') wa_siteSection1 = encodeURIComponent(digitalData.pageInfo.siteSection1);
		if (typeof digitalData.pageInfo.siteSection2 != 'undefined' && digitalData.pageInfo.siteSection2 != '') wa_siteSection2 = encodeURIComponent(digitalData.pageInfo.siteSection2);
		if (typeof digitalData.pageInfo.siteSection3 != 'undefined' && digitalData.pageInfo.siteSection3 != '') wa_siteSection3 = encodeURIComponent(digitalData.pageInfo.siteSection3);
		if (typeof digitalData.pageInfo.siteSection4 != 'undefined' && digitalData.pageInfo.siteSection4 != '') wa_siteSection4 = encodeURIComponent(digitalData.pageInfo.siteSection4);
		if (typeof digitalData.pageInfo.siteSection5 != 'undefined' && digitalData.pageInfo.siteSection5 != '') wa_siteSection5 = encodeURIComponent(digitalData.pageInfo.siteSection5);
		var wa_userid = '0';
		wa_queryString = 'Title=' + wa_title +
			//'&parentSpace='+wa_parentSpace+
			//'&tab='+wa_tab+
			//'&contentId='+wa_contentId+
			'&contentType=' + wa_contentType + '&siteSection1=' + wa_siteSection1 + '&siteSection2=' + wa_siteSection2 + '&siteSection3=' + wa_siteSection3 + '&siteSection4=' + wa_siteSection4 + '&siteSection5=' + wa_siteSection5 +
			//'&category='+wa_category+
			//'&tags='+wa_tags+
			'&activityType=' + wa_activityType + '&searchTerm=' + wa_searchTerm + '&userid=' + wa_userid + '&username=' + wa_username;
		_elqQ.push(['elqSetSiteId', elqSetSiteID]);
		_elqQ.push(['elqTrackPageView', 'http://' + document.domain + '?' + wa_queryString, document.referrer]);
	}
}
if (document.domain.indexOf('community-staging.nxp.com') > -1 || document.domain.indexOf('pwmxy87654.lithium.com') > -1 || document.domain.indexOf('community.nxp.com') > -1) wa_elqPageLoadCall();
else if (typeof wa_isthirdPartyScript == "undefined") document.addEventListener("DOMContentLoaded", eloquaAsyncCall);

function checkAllDomains(currentDomain) {
	len = wa_all_domains.length;
	for (i = 0; i < len; i++) {
		if (currentDomain == (wa_all_domains[i])) {
			return true;
		}
	}
	return false;
}

function eloquaAsyncCall() {
	if (typeof window.jQuery != 'undefined' && typeof $ == 'undefined') var $ = $ ? $ : jQuery;
	if (setGDPRCookieRun == false) {
		setGDPRCookie();
	}
	if (getAdobeCookie("sat_track") == "true" && typeof digitalData != 'undefined') {
		if (document.domain == "www.nxp.com" || document.domain == 'www.nxp.com.cn' || document.domain == 'www.nxp.co.kr' || document.domain == 'www.nxp.jp' || document.domain == 'store.nxp.com') {
			elqSetSiteID = '1764';
		}
		else {
			elqSetSiteID = '2716';
		}
		_elqQ.push(['elqSetSiteId', elqSetSiteID]);
		var ref = '';
		if (digitalData.pageInfo.siteSection1 == 'home') {
			ref = "http://" + document.domain;
			/* Removed for Regionalization Project
			if(digitalData.pageInfo.siteSection1 == 'home'){
				ref = "http://" + document.domain;
				/* Removed for Regionalization Project - No Longer Required
				if(typeof digitalData.siteInfo.lang != 'undefined'){
					if (digitalData.siteInfo.lang == "zh-Hans")
						ref = ref + "/cn/";
					else if (digitalData.siteInfo.lang == "ja")
						ref = ref + "/jp/";
					else if (digitalData.siteInfo.lang == "ko")
						ref = ref + "/kr/";
				}
				*/
			_elqQ.push(['elqTrackPageView', ref, document.referrer]);
		}
		else if (digitalData.pageInfo.pageLoadRule == "General") {
			var tab = '';
			var lang = 'en';
			var code = '';
			if (typeof digitalData != 'undefined' && typeof digitalData.pageInfo != 'undefined' && typeof digitalData.pageInfo.pageCodeID != 'undefined') {
			/*	if (digitalData.pageInfo.pageCodeID == "D=pageName") {
					code = encodeURIComponent(digitalData.pageInfo.pageName);
				}
				else {
					code = digitalData.pageInfo.pageCodeID;
				}*/
				code = encodeURIComponent(digitalData.pageInfo.pageCodeID);
			}
			if (typeof digitalData != 'undefined' && typeof digitalData.pageInfo != 'undefined' && typeof digitalData.pageInfo.pageTab != 'undefined') {
				tab = digitalData.pageInfo.pageTab;
			}
			/* Removed for Regionalization
			if(typeof digitalData !='undefined' && typeof digitalData.pageInfo !='undefined' && typeof digitalData.siteInfo.lang !='undefined'){
				lang = digitalData.siteInfo.lang;
			}
			*/
			if (code != '') {
				//Removed for Regionalization
				//ref= "http://" + document.domain + "/pages/:" + code + "?tab=" + encodeURIComponent(tab) + "&lang_cd=" + lang; 
				//if (code == 'JP-JAPAN') ref = document.domain;
				//else {
					//ref= "http://" + document.domain + "/pages/:" + code + "?tab=" + encodeURIComponent(tab) + "&lang_cd=" + lang; 
					ref = "http://" + document.domain + "/pages/:" + code + "?tab=" + encodeURIComponent(tab);
				//}
				_elqQ.push(['elqTrackPageView', ref, document.referrer]);
			}
		}
		/*
		else if (digitalData.pageInfo.pageLoadRule == "Index") {
			ref = "http://" + document.domain;
			if (digitalData.siteInfo.lang == "zh-Hans")
				ref = ref + "/cn/";
			else if (digitalData.siteInfo.lang == "ja")
				ref = ref + "/jp/";
			else if (digitalData.siteInfo.lang == "ko")
				ref = ref + "/kr/";
			_elqQ.push(['elqTrackPageView', ref, document.referrer]);
		}
		*/
		/* Reads the elqCID cookie.*/
		/*var elqCID = $.cookie("elqCID");*/
		/* If the elqCID cookie is not available it will call the setEloquaGUID function */
		/*if(elqCID==undefined || elqCID==''){
			invokeEloquaDataLookup();
			elqCID = $.cookie("elqCID");
		}
		else{
			console.log("Already cookie Available");
		}*/
		/* To Fetch Eloqua GUID Start*/
		_elqQ.push(["elqGetCustomerGUID"]);
		/* To Fetch Eloqua GUID End*/
		(function() {
			function async_load() {
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.async = true;
				//s.src = '/resources/scripts/analytics/elqCfg.min.js';
				s.src = checkAllDomains(document.domain) ? '/resources/scripts/analytics/elqCfg.min.js' : '//www.nxp.com/resources/scripts/analytics/elqCfg.min.js';
				var x = document.getElementsByTagName('script')[0];
				x.parentNode.insertBefore(s, x);
			}
			if (window.addEventListener) window.addEventListener('DOMContentLoaded', async_load, false);
			else if (window.attachEvent) window.attachEvent('onload', async_load);
		})();
		// Get Eloqua GUID
		if (document.readyState !== 'loading') {
			acquireElqCid();
		}
		else if (typeof $ != "undefined") {
			$(window).bind("load", function() {
				acquireElqCid();
			});
		}
	}
}

var authCookieName = "AuthCookie";
var elqContactIdCookieName = "elqCID";
/* Method to call the endpoint if elqCID value is empty. */
function acquireElqCid() {
    /* If the elqCID cookie is not available it will call the invokeEloquaDataLookup function */
    //if($.cookie!=undefined){
    var authCookieValue = wa_getCookie(authCookieName);
    if (authCookieValue != undefined && authCookieValue != null && authCookieValue != '') {
        var elqCID = getElqCid();
        if (elqCID == undefined || elqCID == '') {
            invokeEloquaDataLookup();
            elqCID = wa_getCookie(elqContactIdCookieName);
        }
        //}
    }
}
	/* Fetch elqCID value from cookie */
function getElqCid() {
		var elqCID = wa_getCookie(elqContactIdCookieName);
		if (elqCID == undefined || elqCID == '') {
			return "";
		}
		else {
			return stripeOffString(elqCID);
		}
	}
	/* Method to stripe Out String from eloqua contact id */
function stripeOffString(elqCID) {
		elqCID = elqCID.replace(/[^\d]/g, '');
		elqCID = elqCID.replace(/^0+/, '');
		return elqCID;
	}
	/* Reading Eloqua Cust ID Code - Start */
	/* Creates a Cookie for Eloqua GUID */
function createElqCIDCookie(value) {
		var currentDate = new Date;
		currentDate.setFullYear(currentDate.getFullYear() + 10);
		document.cookie = elqContactIdCookieName + "=" + value + "; expires=" + currentDate.toUTCString() + ";domain=" + document.domain;
		//$.cookie(elqContactIdCookieName, value, { domain: document.domain, path: '/' , expires:3650});
	}
	/* Fetches eloqua GUID as per Data Lookup */
function invokeEloquaDataLookup() {
		fetchAsyncEloquaContactId();
	}
	/*Check whether the Fuction Exist*/
function is_functionExist(func) {
		return typeof window[func] !== 'undefined' && $.isFunction(window[func]);
	}
/* Fetches Data Lookup to retrieve eloqua contact Id*/
function fetchAsyncEloquaContactId() {
    var tmpRequestDomain = '';
    //var tmpRequestDomain = (analyticsSiteType(document.domain) == 'regional') ? '' : '//www.nxp.com';
    //if (is_functionExist("GetElqCustomerGUID") && (analyticsSiteType(document.domain) == 'regional' || analyticsSiteType(document.domain) == 'ecommerce')) {
    if ((analyticsSiteType(document.domain) == 'regional' || analyticsSiteType(document.domain) == 'ecommerce')) {
        if (document.domain.indexOf('store-uat.nxp.com') > -1)
            tmpRequestDomain = '//uat.nxp.com';
        else if(document.domain.indexOf('store.nxp.com') > -1)
            tmpRequestDomain = '//www.nxp.com';
        $.ajax({
            //url : tmpRequestDomain+'/webapp-rest/identity/eloqua/getContactId?g='+GetElqCustomerGUID(),
            url: tmpRequestDomain + '/secured-rest/secureapi/eloqua/getContactId',
            dataType: "json",
			credentials: "include",
            crossDomain: true,			
            async: true,
            type: "get",
			xhrFields: {
				withCredentials: true
			},
            success: function(response) {
                if (response.flag == "true") {
                    createElqCIDCookie(response.eloquaContactId);
                }
            },
            error: function(e) {
                _satellite.logger.log(e);
            },
        });
    } 
}
	
	/* Fetches email Address Data Lookup*/
	/*function fetchEmailAddressDataLookup(){
		_elqQ.push(['elqDataLookup', escape('83c01a600f944e75a5249a38170e9c97'),'']);
		var emailAddress="";
		setTimeout(function () {
	         emailAddress=GetElqContentPersonalizationValue('V_Email_Address');
			 if(emailAddress.trim()!="")
				fetchEloquaContactId(emailAddress);
			else
				fetchEmailAddressDataLookup();
	    }, 1000);
		
	}*/
	/* Fetches Data Lookup to retrieve eloqua contact Id*/
	/*function fetchEloquaContactId(emailAddress){
		_elqQ.push(['elqDataLookup', escape('a3c5758b033a495ea4b3e7cc46a30490'),"<C_EmailAddress>"+emailAddress+"</C_EmailAddress>"]);
		var contactId="";
		setTimeout(function () {
	         contactId=GetElqContentPersonalizationValue('ContactIDExt');
			 if(contactId.trim()!="")
				createCookie(contactId);
			else
				fetchEloquaContactId();
	    }, 1000);
		
	}*/
	/* Reading Eloqua Cust ID Code - End*/
if (typeof getAdobeCookie == "function") {
	/*
	if (document.URL.indexOf("/quickPricing.sp") > -1 || document.domain.indexOf("events1.social27.com") > -1 || document.domain.indexOf("showroom.nxp.com") > -1 || document.domain.indexOf("beta.nxpshowroom.eimex-solutions.com") > -1 || wa_getCookie("wa_gdprconsent")!='') {
		setAdobeCookie("sat_track", "true");
	}
	*/
	if(wa_setConsentDomain.includes(document.domain) || document.URL.indexOf("/quickPricing.sp") > -1 || wa_getCookie("wa_gdprconsent")!=''){
		setAdobeCookie("sat_track", "true");
	}else {
		if (getAdobeCookie("sat_track") == "" || isThirdParty()) {
			isGDPRCountry();
			if (isGDPRCountryUser) {
				setAdobeCookie("sat_track", "false");
			}
			else {
				setAdobeCookie("sat_track", "true");
			}
		}
		setGDPRCookie();
	}
}
else {
	setAdobeCookie("sat_track", "false");
}

function isThirdParty() {
	if(wa_setConsentDomain.includes(document.domain) || document.URL.indexOf("/quickPricing.sp") > -1 || wa_getCookie("wa_gdprconsent")!='') {
		return true;
	}
	else {
		return false;
	}
}

function wa_setJquery(){
	if(typeof $ == 'undefined' && typeof  window.jQuery !== 'undefined'){
		window.$ = window.$ ? window.$ : window.jQuery;
	}
}

function isGDPRCountry() {
	var envDomain;
	var useJquery = true; //Bypass jquery ajax call for Zoomin analytics
	var devDomain = ['nxpb2cdev.b2clogin.com'];
	if (document.domain.indexOf("docs.nxp.com") > -1 || document.domain.indexOf("nxp-staging.zoominsoftware.io") > -1 || document.domain.indexOf("nxp-dev.zoominsoftware.io") > -1 || document.domain.indexOf("nxp-theme-dev.zoominsoftware.io") > -1) {
		useJquery = false;
	}
	if (document.domain.indexOf("uat.freescale.com") > -1 || document.domain.indexOf("uat.nxp.com") > -1 || document.domain.indexOf("www.nxp.com") > -1 || document.domain.indexOf(".nxp.co.kr") > -1 || document.domain.indexOf(".nxp.jp") > -1 || document.domain.indexOf("store.nxp.com") > -1 || document.domain.indexOf("store-uat.nxp.com") > -1) {
		envDomain = document.domain;
	}else if(devDomain.includes(document.domain)) {
		envDomain = "uat.nxp.com";
	}else {
		envDomain = "www.nxp.com";
	}
  	wa_setJquery();
	if (useJquery && typeof $ !== 'undefined') {
		$.ajax({
			url: "https://" + envDomain + "/webapp-signup/isGdprGeoCountry",
			success: function(data) {
				var obj = $.parseJSON(data);
				if (!(obj.msg == "GDPR_COUNTRY")) {
					isGDPRCountryUser = false;
				}
				else {
					isGDPRCountryUser = true;
				}
				return isGDPRCountryUser;
			},
			async: false,
		});
	}
	else {
		var request = new XMLHttpRequest();
		var url = "https://" + envDomain + "/webapp-signup/isGdprGeoCountry";
		request.open('GET', url, false);
		request.onload = function() {
			if (this.status >= 200 && this.status < 400) {
				// Success!
				var obj = JSON.parse(this.response);
				if (!(obj.msg == 'GDPR_COUNTRY')) {
					isGDPRCountryUser = false;
				}
				else {
					isGDPRCountryUser = true;
				}
				return isGDPRCountryUser;
			}
			//else {
				// We reached our target server, but it returned an error
			//}
		};
		request.onerror = function() {
			// There was a connection error of some sort
		};
		request.send();
	}
}

function isDTMEnabled() {
	var dtmEnabled = false;
	if (typeof _satellite != 'undefined') {
		dtmEnabled = true;
		if (!isThirdParty()) {
			isGDPRCountry();
			if (isGDPRCountryUser) {
				setAdobeCookie("sat_track", "false");
			}
			else {
				setAdobeCookie("sat_track", "true");
			}
			setGDPRCookie();
		}
	}
	//Showroom.nxp.com - Wait for Launch to finish loading
	
	/*
	if(typeof _satellite.getVar != 'function' && (document.domain.indexOf("showroom.nxp.com") > -1 || document.URL.indexOf('ANALYTICS_TESTWEBPAGE_3RDPARTY_SPA' > -1))){
		var wa_callCount = 1;
		var wa_callTotalCount = 10;
		var wa_callInterval = 500;
		var wa_keyValue = "launch-EN";
		var flag = wa_isJSLoaded(wa_keyValue,wa_callCount,wa_callTotalCount,wa_callInterval);
		for (var i = 0; i < wa_callTotalCount && !flag; i++) {
			flag = wa_isJSLoaded(wa_keyValue,wa_callCount,wa_callTotalCount,wa_callInterval);
			if(flag){
				break;
			}else{
				setTimeout(function () {
					 console.log('Launch Script Not Ready. Waiting for 1000ms. Attempt #' + wa_callCount)
				}, wa_callInterval);
			}
			wa_callCount++;
		}
		
		
		var repeater = setInterval(function() {
			if (wa_callCount < wa_callTotalCount) {
				if (flag) {     
					clearInterval(repeater);
				} else {
					wa_callCount += 1;
					flag = wa_isJSLoaded(wa_keyValue, wa_callCount,wa_callTotalCount,wa_callInterval);
				}
			} else {
				clearInterval(repeater);
			}
		}, wa_callInterval);
		
	}*/
	
	return dtmEnabled;
}

function wa_jsLoadChecker(wa_keyValue) {
	var capture_network_request = [];
	var capture_resource = performance.getEntriesByType("resource");
	for (var i = 0; i < capture_resource.length; i++) {
		if (capture_resource[i].name.indexOf(wa_keyValue) > -1 && capture_resource[i].encodedBodySize >0 && typeof _satellite.getVar == 'function') {
			capture_network_request.push(capture_resource[i].name);
		}
	}
	return capture_network_request.length > 0;
}


function wa_isJSLoaded(wa_keyValue,wa_callCount,wa_callTotalCount,wa_callInterval) {
    var flag = false;
    if (!wa_jsLoadChecker(wa_keyValue)) {
        _satellite.logger.log("Launch Script is not found in " + wa_callCount + " attempt: ", wa_keyValue);
    } else {
        _satellite.logger.log("Launch Script is found in " + wa_callCount + " attempt: ", wa_keyValue);
        flag = true;
    }
    return flag;
}


function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function wa_getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function OptanonWrapper() {
	setGDPRCookie();
	if ("function" == typeof clearUserActivityforGDPR && "undefined" != clearUserActivityforGDPR) {
		clearUserActivityforGDPR();
	}
}

function setGDPRCookie() {
	if (document.cookie != '' && !isThirdParty()) {
		var split = document.cookie.split(';');
		for (var i = 0; i < split.length; i++) {
			var name_value = split[i].split("=");
			if (name_value[0].trim() == "OptanonConsent") {
				if (split[i].indexOf("&groups=") != -1) {
					//Start - Set Dec 16,2021 for GDPR Cookie Change Revisit prior to release
					 if (split[i].indexOf("%2C2%3A1") > 0 || split[i].indexOf("%2CC0002%3A1")>0) {
						setAdobeCookie("sat_track", "true");
						satTrackFlag = true;
					  } else {
						setAdobeCookie("sat_track", "false");
						deleteUserCookies();
						satTrackFlag = false;
					  }
					
					//if (split[i].indexOf("%2C2%3A1") == -1) {
					//	setAdobeCookie("sat_track", "false");
					//	deleteUserCookies();
					//	satTrackFlag = false;
					//}
					//else {
					//	setAdobeCookie("sat_track", "true");
					//	satTrackFlag = true;
					//}
					//End - Set Dec 16,2021 for GDPR Cookie Change Revisit prior to release					

					
					satIPTrackFlag = false;
				}
				break;
			}
		}
		if (satIPTrackFlag) {
			isGDPRCountry();
			if (isGDPRCountryUser) {
				setAdobeCookie("sat_track", "false");
				satTrackFlag = false;
				satIPTrackFlag = false;
			}
		}
		setGDPRCookieRun = true;
	}
}

function deleteUserCookies() {
	var strictlyNecessaryCookies = ["PV", "liveagent_sid", "LANGUAGE_OPTION", "JSESSIONID", "CURRENCY_OPTION", "jive.security.context", "OptanonConsent", "SAMLoginCookie", "RegisterError", "freescale_visitor_id", "containerSecurityToken", "BIGipServerpool_vanity_freescale.jiveon.com", "liveagent_vc", "X-JCAPI-Token", "liveagent_oref", "remember_me", "jive.login.ts", "OptanonAlertBoxClosed", "AuthCookie", "sat_track", "SessID", "liveagent_ptid", "AWSALB", "AWSALBCORS", "__sdx_page", "_tweetriver_session", "campaignTab", "csrf_token", "JSESSIONID", "LiSESSIONID", "PHPSESSID", "lithium.anonymous.", "LithiumCookiesAccepted", "LithiumNotifications", "LithiumUserInfo", "LithiumUserSecure", "LithiumVisitor", "mr_inst_token", "mr_pauth_t", "PLAY_LANG", "PLAY_SESSION", "poll-user-id", "PushyAuthToken", "redirectToOldModeration", "sfauth-login.spredfast.com", "sfcsrf-login.spredfast.com", "sfjwt-login.spredfast.com", "sfsig-login.spredfast.com", "sf-ui.login.spredfast.com", "SIP|ws", "TOCOMA-CID", "ValueSurveyParticipation", "ValueSurveyVisitorCount", "VISITOR_BEACON", "VISITORID", "XSessionID", "X-TOKEN-ID"];
	if (document.cookie != '') {
		var cookiesList = document.cookie.split(';');
		for (var i = 0; i < cookiesList.length; i++) {
			var cookie = cookiesList[i].split("=");
			var cookieName = cookie[0].trim();
			if (strictlyNecessaryCookies.indexOf(cookieName) == -1) {
				document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + "; domain=" + getMajorDomain() + "; path=/";
			}
		}
	}
}

function setAdobeCookie(name, value) {
	if (typeof days == "undefined") days = 1;
	var d = new Date();
	//d.setTime(d.getTime() + (days*24*60*60*1000));
	//var expires = "expires=" + d.toGMTString();
	var expires = "expires="
	var dom = document.domain;
	if (name != "sat_track" && name != "s_sess") name = "_sc_" + name;
	value = encodeURIComponent(value);
	if (dom.indexOf("nxp.com.cn") > -1 || dom.indexOf(".nxp.jp") > -1 || dom.indexOf(".nxp.co.kr") > -1) document.cookie = name + "=" + value + "; expires=" + expires + "; domain=" + dom + "; path=/";
	else document.cookie = name + "=" + value + "; expires=" + expires + "; domain=" + getMajorDomain() + "; path=/";
}

/*function getAdobeCookie(cname) {
	var cookieVal;
	if (cname != "sat_track" && cname != "s_sess" && cname != "CC" ) cookieVal = getCookie("_sc_" + cname);
	else cookieVal = getCookie(cname);
	if (cookieVal == null) cookieVal = "";
	return decodeURIComponent(cookieVal);
}*/

/*function removeAdobeCookie(name) {
	name = "_sc_" + name;
	var dom = document.domain;
	var value = "";
	var expires = "Thu, 01 Jan 1970 00:00:00 UTC";
	if (dom.indexOf("nxp.com.cn") > -1 || dom.indexOf("nxp.jp") > -1 || dom.indexOf("nxp.co.kr") > -1) document.cookie = name + "=" + value + "; expires=" + expires + "; domain=" + dom + "; path=/";
	else document.cookie = name + "=" + value + "; expires=" + expires + "; domain=" + getMajorDomain() + "; path=/";
}*/

function getMajorDomain() {
	return document.domain.substring(document.domain.indexOf("."));
}

function setParentNodeIdCookie() {
	if (isDTMEnabledFlag) {
		if (typeof digitalData != "undefined" && typeof digitalData.pageInfo != "undefined" && typeof digitalData.pageInfo.nodeID != "undefined" && digitalData.pageInfo.nodeID != "" && digitalData.pageInfo.nodeID != "undefined") {
			setAdobeCookie('sc_parentNodeId', digitalData.pageInfo.nodeID);
		}
	}
}

function getPageCategory() {
	if (typeof $ == 'function') {
		if (typeof $("meta[name='pageCategory']").attr('content') == 'string') return $("meta[name='pageCategory']").attr('content');
	}
	if (typeof digitalData == "undefined") return "";
	if (typeof digitalData.pageInfo == "undefined") return "";
	if (typeof digitalData.pageInfo.pageCategory == "undefined") return "";
	return digitalData.pageInfo.pageCategory;
}

function getPageCodeID() {
	if (typeof digitalData == "undefined") return "";
	if (typeof digitalData.pageInfo == "undefined") return "";
	if (typeof digitalData.pageInfo.pageCodeID == "undefined") return "";
	return digitalData.pageInfo.pageCodeID;
}

function getPageType() {
    if (typeof $ == 'function') {
        if (typeof $("meta[name='pageType']").attr('content') == 'string')
         return $("meta[name='pageType']").attr('content');
    }
    if (typeof digitalData == "undefined") return "";
    if (typeof digitalData.pageInfo == "undefined") return "";
    if (typeof digitalData.pageInfo.pageType == "undefined") return "";
    return digitalData.pageInfo.pageType;
}

function setReferrerCookies() {
	setAdobeCookie(referrerPageCategoryCookie, getPageCategory());
	setAdobeCookie(referrerPageCodeCookie, getPageCodeID());
	setAdobeCookie(referrerPageTypeCookie, getPageType());
}

function getContentFindingFromCurrentPage() {
	var pageCategory = getPageCategory();
	if (pageCategory == pspName.toUpperCase() || pageCategory == rdspName.toUpperCase() || pageCategory == tspName.toUpperCase() || pageCategory == sspName.toUpperCase()) return pspName.toUpperCase();
	if (pageCategory == aspName.toUpperCase()) return aspName.toUpperCase();
	if (pageCategory == softwareSearchPageName.toUpperCase()) return softwareSearchPageName;
	if (pageCategory == parametricSearchPageName.toUpperCase()) return parametricSearchPageName;
	if (pageCategory == partDetailsPageName.toUpperCase()) return partDetailsPageName;
	return "";
}

function trackExitLnkForAnalytics(thirdpartyurl, event) {
	if (!isDTMEnabledFlag) return;
	var subContentFinding = "";
	if (typeof event != "undefined" && event != null) {
		$element = $(event.target);
		subContentFinding = getSubContentFinding($element);
		if (typeof subContentFinding == "undefined" || subContentFinding == null) subContentFinding = "";
	}
	var track = {};
	track.form = {};
	track.search = {};
	track.call = "exit";
	track.eventAssetid = thirdpartyurl;
	track.eventPathing = "exit:" + thirdpartyurl;
	track.destinationContentFinding = getContentFinding(document.URL, "", true);
	track.destinationSubContentFinding = subContentFinding;
	track.eventValues = 'None';
	trackCustomObject(track);
}

function getAdobeCookie(name) {
		var pos = document.cookie.indexOf(name + "=");
		if (pos != -1) {
			var start = pos + name.length + 1;
			var end = document.cookie.indexOf(";", start);
			if (end == -1) {
				end = document.cookie.length;
			}
			return unescape(document.cookie.substring(start, end));
		}
		return null;
	}
	/*
	// 4/18/2019 - Beyond the Wall Regionalization Project Update 
	//Replaced by New Functions with same names
	function removeLangFromURL(url){
		if(typeof LANG_CD_LIST != 'undefined'){
			var langAnalytics = LANG_CD_LIST.split(",");
			var len = langAnalytics.length;
			for (i=0;i<len;i++){
				var lang = langAnalytics[i];
				url = url.replace("/"+lang+"/","/");
			}
		}
		return url;
	}


	function getCleanPageURL(){
		pageURL = document.URL;
		pageURL = pageURL.split("?")[0];
		pageURL = pageURL.split("#")[0];
		
		pageURL = removeLangFromURL(pageURL);

		return pageURL;
	} 

	function replaceCacheUrlDomain(url){
		if(typeof CACHE_URL_DOMAINS != 'undefined' && typeof URL_DOMAIN != 'undefined'){
			var len = CACHE_URL_DOMAINS.length;
			for (i=0;i<len;i++){
				var domain = CACHE_URL_DOMAINS[i];
				if(domain != '')
					url = url.replace(domain, URL_DOMAIN);
			}
		}
		return url;
	}


	*/
function getCleanPageURL() {
	pageURL = document.URL;
	pageURL = pageURL.split("?")[0];
	pageURL = pageURL.split("#")[0];
	pageURL = removeLangFromURL(pageURL);
	pageURL = replaceRegionalSiteDomain(pageURL);
	return pageURL;
}

function removeLangFromURL(url) {
	var len = wa_lang_cd_list.length;
	for (i = 0; i < len; i++) {
		var lang = wa_lang_cd_list[i];
		url = url.replace("/" + lang + "/", "/");
	}
	return url;
}

function replaceRegionalSiteDomain(url) {
	var dom_clean = '';
	if (document.domain == 'www.nxp.com' || document.domain == 'www.nxp.com.cn' || document.domain == 'www.nxp.jp') dom_clean = 'www.nxp.com';
	else if (document.domain == 'uat.nxp.com' || document.domain == 'uat.nxp.com.cn' || document.domain == 'uat.nxp.jp') dom_clean = 'uat.nxp.com';
	if (dom_clean != '') {
		var len = wa_regional_site_domains.length;
		for (i = 0; i < len; i++) {
			var dom = wa_regional_site_domains[i];
			url = url.replace(dom, dom_clean);
		}
	}
	return url;
}

function replaceCacheUrlDomain(url) {
	var dom_clean = '';
	if (document.domain == 'www.nxp.com' || document.domain == 'www.nxp.com.cn' || document.domain == 'www.nxp.co.kr' || document.domain == 'www.nxp.jp' || document.domain == 'store.nxp.com') dom_clean = 'www.nxp.com';
	else if (document.domain == 'uat.nxp.com' || document.domain == 'uat.nxp.com.cn' || document.domain == 'uat.nxp.co.kr' || document.domain == 'uat.nxp.jp' || document.domain == 'store-uat.nxp.com') dom_clean = 'uat.nxp.com';
	else if (document.domain == 'uat.freescale.com') dom_clean = 'uat.freescale.com'
	if (dom_clean != '') {
		var len = wa_cache_url_domains.length;
		for (i = 0; i < len; i++) {
			var domain = wa_cache_url_domains[i];
			url = url.replace(domain, dom_clean);
		}
	}
	return url;
}

function analyticsSiteType(url) {
	url = url.split("?")[0];
	url = url.split("#")[0];
	var len;
	len = wa_microsite_domains.length;
	for (i = 0; i < len; i++) {
		if (url.indexOf(wa_microsite_domains[i]) > -1) return 'microsite';
	}
	len = wa_regional_site_domains.length;
	for (i = 0; i < len; i++) {
		if (url.indexOf(wa_regional_site_domains[i]) > -1) return 'regional';
	}
	len = wa_ecom_domains.length;
	for (i = 0; i < len; i++) {
		if (url.indexOf(wa_ecom_domains[i]) > -1) return 'ecommerce';
	}
	return '';
}

function replaceDomainforDownload(url) {
	var dom_clean = '';
	var dom = '';
	var href = url;
	href = href.split("?")[0];
	href = href.split("#")[0];
	if (href.indexOf('www.nxp.com') > -1 || href.indexOf('www.nxp.jp') > -1 || href.indexOf('www.nxp.co.kr') > -1 || href.indexOf('store.nxp.com') > -1) dom_clean = 'www.nxp.com';
	else if (href.indexOf('uat.nxp.com') > -1 || href.indexOf('uat.nxp.jp') > -1 || href.indexOf('uat.nxp.co.kr') > -1 || href.indexOf('store-uat.nxp.com') > -1) dom_clean = 'uat.nxp.com';
	if (dom_clean != '') {
		var len = wa_regional_site_domains.length;
		for (i = 0; i < len; i++) {
			dom = wa_regional_site_domains[i];
			url = url.replace(dom, dom_clean);
		}
	}
	if (dom_clean != '') {
		var len = wa_microsite_domains.length;
		for (i = 0; i < len; i++) {
			dom = wa_microsite_domains[i];
			url = url.replace(dom, dom_clean);
		}
	}
	if (dom_clean != '') {
		var len = wa_ecom_domains.length;
		for (i = 0; i < len; i++) {
			dom = wa_ecom_domains[i];
			url = url.replace(dom, dom_clean);
		}
	}
	return url;
}

function trackAnalyticsFormStart(formname) {
	/*
		if(isDTMEnabledFlag){
			digitalData.formInfo = {};
			digitalData.formInfo.formName = formname;
			_satellite.track("trackAnalyticsFormStart");
		}	
	*/
	if (!isDTMEnabledFlag) return;
	var track = {};
	track.form = {};
	track.search = {};
	track.form.formName = formname;
	track.eventPathing = 'formstart:' + formname;
	track.name = "form start";
	trackCustomObject(track);
}

function trackAnalyticsFormCompletion(formname) {
	//if(isDTMEnabledFlag){
	//	digitalData.formInfo = {};
	//	digitalData.formInfo.formName = formname;
	//	_satellite.track("trackAnalyticsFormCompletion");
	//}
	if (!isDTMEnabledFlag) return;
	var track = {};
	track.form = {};
	track.search = {};
	track.form.formName = formname;
	track.eventPathing = 'formcomplete:' + formname;
	if (formname == 'Eloqua Subscription Form') track.eventValues = 'event14';
	track.name = "form complete";
	trackCustomObject(track);
}

function trackAnalyticsCustomFormCompletion(formname) {
	//if(isDTMEnabledFlag){ 
	//	digitalData.formInfo = {};
	//	digitalData.formInfo.formName = formname;
	//	_satellite.track("trackAnalyticsCustomFormCompletion");
	//}
	if (!isDTMEnabledFlag) return;
	var track = {};
	track.form = {};
	track.search = {};
	track.form.formName = formname;
	track.eventPathing = 'formcomplete:' + formname;
	track.name = 'forminitiationcomplete';
	trackCustomObject(track);
}

function trackAnalyticsRegistrationCompletion() {
	if (typeof digitalData != 'undefined' && typeof digitalData.formInfo != 'undefined' && typeof digitalData.formInfo.formName != 'undefined') {
		if (digitalData.formInfo.formName.indexOf("Progressive Profile Form") < 0) {
			trackAnalyticsFormCompletion(digitalData.formInfo.formName);
		}
	}
}
/*
function trackAnalyticsBlockDiagram(blockDiagUrl, blockDiagTitle) {
	if(isDTMEnabledFlag){
		var pageNameArr = digitalData.pageInfo.pageName.split(":");
		var currPageName = pageNameArr.length > 1 ? pageNameArr[1]:pageNameArr[0]; 
		currPageName = (currPageName == null || currPageName == '') ? blockDiagTitle:currPageName;  
		
		digitalData.blockDiagramInfo = {};
		digitalData.blockDiagramInfo.pageName = 'Block Diagram:' + currPageName;
		digitalData.blockDiagramInfo.localTitle = 'Block Diagram:' + digitalData.pageInfo.localTitle;
		
		if(blockDiagUrl !=  null && blockDiagUrl != '')
			digitalData.blockDiagramInfo.assetID = blockDiagUrl;
		else if(digitalData.pageInfo.pageURLClean !='undefined')
			digitalData.blockDiagramInfo.assetID = digitalData.pageInfo.pageURLClean;
		else
			digitalData.blockDiagramInfo.assetID = document.URL;
		
		digitalData.blockDiagramInfo.pageType = "Block Diagram";
		digitalData.blockDiagramInfo.pageEventPathing = "D=pageName";			  
		_satellite.track("trackAnalyticsBlockDiagram");
		s.pageName = digitalData.pageInfo.pageName;
		s.prop1 = digitalData.pageInfo.pageType;
		s.prop16 = digitalData.pageInfo.pageEventPathing;
		s.eVar16 = digitalData.pageInfo.assetID;
		s.eVar19 = digitalData.pageInfo.localTitle;
	}
	if (!isDTMEnabledFlag) return;
	var pageNameArr = digitalData.pageInfo.pageName.split(":");
	var currPageName = pageNameArr.length > 1 ? pageNameArr[1] : pageNameArr[0];
	currPageName = (currPageName == null || currPageName == '') ? blockDiagTitle : currPageName;
	digitalData.blockDiagramInfo = {};
	var track = {};
	track.call = 'page';
	track.eventPageName = 'Block Diagram:' + currPageName;
	track.eventlocalTitle = 'Block Diagram:' + _satellite.getVar("localTitle");
	if (blockDiagUrl != null && blockDiagUrl != '') track.eventAssetid = blockDiagUrl;
	else if (typeof _satellite.getVar("pageURLClean") != 'undefined') track.eventAssetid = _satellite.getVar("pageURLClean");
	else track.eventAssetid = document.URL;
	track.eventPageType = 'Block Diagram';
	track.eventPathing = "D=pageName";
	track.pageActionContentFinding = 'browse';
	track.eventValues = 'None';
	trackCustomObject(track);
	trackOptions.eventPageName = 'Rich Media Component:'+ mediaName + " | " +mediaCode;
	trackOptions.eventlocalTitle = 'Rich Media Component:' + digitalData.pageInfo.localTitle;
	if(digitalData.pageInfo.pageURLClean !='undefined')
		trackOptions.eventAssetid = digitalData.pageInfo.pageURLClean;
	else
	trackOptions.eventAssetid = document.URL;
	trackOptions.eventPageType = "Rich Media Component";
	trackOptions.eventPathing = "D=pageName";
	digitalData.blockDiagramInfo.childCode = mediaAssetCode;
	trackOptions.pageActionContentFinding = 'browse';
	trackOptions.eventValues = 'None';
	trackCustomObject(trackOptions);
	s.pageName = digitalData.pageInfo.pageName;
	s.prop1 = digitalData.pageInfo.pageType;
	s.prop16 = digitalData.pageInfo.pageEventPathing;
	s.eVar16 = digitalData.pageInfo.assetID;
	s.eVar19 = digitalData.pageInfo.localTitle;
}*/

function trackOrderSamplesSearch(srchKeyword, resultcount) {
	/*
		digitalData.searchInfo={};
		digitalData.eventInfo={};
		srchKeyword=trimForAnalytics(srchKeyword);
		digitalData.searchInfo.searchkeyword=srchKeyword;
		digitalData.searchInfo.resultCount=resultcount;
		if(digitalData.searchInfo.resultCount =='' || digitalData.searchInfo.resultCount=='0'){
			digitalData.searchInfo.resultCount='zero';
		}
		if(srchKeyword != '') {
			digitalData.eventInfo.pageEventPathing = "Order Samples Search: Results of "+srchKeyword;
		} else {
			digitalData.eventInfo.pageEventPathing = "Order Samples Search: No Keyword";
		}		
		digitalData.eventInfo.name="search";
		_satellite.track("trackOrderSamplesSearch");

		digitalData.pageInfo.contentFinding="";
	*/
	srchKeyword = trimForAnalytics(srchKeyword);
	if (resultcount == '' || resultcount == '0') resultcount = 'zero';
	var track = {};
	track.search = {};
	track.form = {};
	track.videoOptions = {};
	track.search.searchkeyword = srchKeyword;
	track.search.resultCount = resultcount;
	if (srchKeyword != '') track.eventPathing = "Order Samples Search: Results of " + srchKeyword;
	else track.eventPathing = "Order Samples Search: No Keyword";
	track.name = 'GeneralSearch';
	track.call = 'page';
	trackCustomObject(track);
}

function getDownloadTypeForAnalytics(downloadUrl) {
	var download_type = '';
	downloadUrl = downloadUrl.split("?")[0];
	if (downloadUrl.indexOf(downloadServletURL) != -1) {
		download_type = registeredDownloadType;
	}
	else if (downloadUrl.indexOf(downloadLicenseJSPURL) != -1) {
		download_type = licensedDownloadType;
	}
	else if (downloadUrl.indexOf(moderatedDownloadJSPURL) != -1) {
		download_type = moderatedDownloadType;
	}
	else if (downloadUrl.indexOf(wa_securedDocumentURL) != -1) {
		download_type = wa_securedDocumentType;
	}
	else if (downloadUrl.indexOf(downloadFilesURL) != -1 || downloadUrl.indexOf(downloadTrainingURL) != -1 || downloadUrl.indexOf(downloadAssetsURL) != -1) {
		download_type = marketingLeveragedDownloadType;
	}
	return download_type;
}

function trackSecDwnldCompleteAnalytics(downloadUrl, assetCode, sitePlatform, langCode, assetName, assetVersion, contentfinding, subcontentfinding) {
	//if (!isDTMEnabledFlag) return;
	if (!isDTMEnabledFlag) {
		isDTMEnabledFlag = isDTMEnabled();
		if (!isDTMEnabledFlag) return;
	}
	digitalData.dwnldInfo.downloadType = getDownloadTypeForAnalytics(downloadUrl);
	if (digitalData.dwnldInfo.downloadType == "Secured Document") {
		digitalData.dwnldInfo.downloadAssetID = getFullUrl(downloadUrl);
		downloadUrl = "Secure File Download: " + assetCode + " | " + assetVersion + " | " + assetName;
	}
	else {
		digitalData.dwnldInfo.downloadAssetID = getFullUrl(downloadUrl);
		downloadUrl = getCleanUrlFromUrl(downloadUrl);
		//downloadUrl = replaceDomainforAnalytics(downloadUrl); Regionalization Project replace
		downloadUrl = replaceCacheUrlDomain(downloadUrl);
		downloadUrl = replaceDomainforDownload(downloadUrl);
	}
	if (typeof contentfinding != 'undefined') digitalData.dwnldInfo.destinationContentFinding = contentfinding;
	else digitalData.dwnldInfo.destinationContentFinding = 'browse';
	if (typeof subcontentfinding != 'undefined') digitalData.dwnldInfo.destinationSubContentFinding = subcontentfinding;
	if (digitalData.dwnldInfo.downloadType == "Non-Secured" || digitalData.dwnldInfo.downloadType == "Registered" || digitalData.dwnldInfo.downloadType == "Licensed" || digitalData.dwnldInfo.downloadType == "Secured Document") digitalData.pageInfo.pageEventPathing = "dwnld:" + downloadUrl;
	else digitalData.pageInfo.pageEventPathing = "dwnld start:" + downloadUrl;
	digitalData.dwnldInfo.downloadURLClean = downloadUrl;
	digitalData.userInfo.fslVisitorID = getAdobeCookie("freescale_visitor_id");
	if (sitePlatform == "normal") {
		sitePlatform = "full";
	}
	digitalData.siteInfo.sitePlatform = sitePlatform;
	digitalData.siteInfo.lang = langCode;
	_satellite.track("trackSecDownloadComplete",_satellite.getVar("XDM-trackSecDownloadComplete"));
}

function getBrowseCall(wa_referringUrl) {
		var sTemp;
		sTemp = 'www.freescale.com,freescale.com.cn,freescale.co.jp,contact.freescale.com,contact.nxp.com,cache.freescale.com,community.freescale.com,community.nxp.com,uat.freescale.com,cache-uat.freescale.com,community-uat.freescale.com,*.freescale.net,freescale.co.kr,getregisterednow.com,images.freescale.com,media.freescale.com,ir.freescale.com,investors.freescale.com,scdev-15.isys.intraware.com,freescaleuat.flexnetoperations.com,freescale.flexnetoperations.com,iottour.freescaleforms.com,iot.freescale.com,fslwpbt.de,blogs.freescale.com,vod.freescale.com,video.freescale.net,esdhttpuat.flexnetoperations.com,freescaleesdtest.flexnetoperations.com,freescaleesd.flexnetoperations.com,http.flexnetoperations.com,ftf.freescaleforms.com,preview-test.freescale.net,preview.freescale.net,ftf.freescale.com,az84ap80.am.freescale.net,fsls.co,m-uat.freescale.com,freescale.jiveon.com,ftf-test-brazil.freescale.net,az84ap47.am.freescale.net,az84ap80.am.freescale.net,az84ap89.am.freescale.net,localhost,www.nxp.com,cache.nxp.com,contact-freescale-com.p01.elqsandbox.com,nxpuat.flexnetoperations.com,iot-test-china.freescale.net,iot-cn.nxp.com,investors.nxp.com,az84wfm05c.am.freescale.net,events.nxp.com,training.nxp.com,nww.teamsite-test.nxp.com,nww.preview-test.nxp.com,nww.teamsite-dev.nxp.com,nww.preview-dev.nxp.com,az84ap84.am.freescale.net,blog.nxp.com,phx.corporate-ir.net,disti.nxp.com,full-nxpcommunity.,7sdev-nxpcommunity.,nxpcommunity.,staging.fuel.tech,iotedge.nxp.com,media.nxp.com,media.kr.nxp.com,nxp.com.cn,uat.nxp.com,www.nxp.jp,uat.nxp.jp,branding.nxp.com,nxp.flexnetoperations.com,nxpuat.flexnetoperations.com,uat.nxp.com.cn,www.nxp.com.cn,uat.nxp.co.kr,www.nxp.co.kr,store-uat.nxp.com,store.nxp.com,www.hovergames.com,nxpcup.nxp.com,cache.nxp.com.cn,cache-uat.nxp.com.cn,docs.nxp.com,nxp-dev.zoominsoftware.io,community-staging.nxp.com,pwmxy87654.lithium.com,events1.social27.com,showroom.nxp.com,beta.nxpshowroom.eimex-solutions.com,sso-staging.zoominsoftware.com,sso.zoominsoftware.com,mcuxpresso.nxp.com,kex-stage.nxp.com,nxp-theme-dev.zoominsoftware.io,nxpb2cdev.b2clogin.com,login.nxp.com';
		var internalFlag = false;
		if (wa_referringUrl) {
			var filters = sTemp.split(",");
			var docRef = wa_referringUrl.split("/");
			docRef = docRef[2];
			for (var f in filters) {
				if (docRef.indexOf(filters[f]) > -1) internalFlag = true;
			}
		}
		//Regression Testing
		if (wa_referringUrl.indexOf(':HLP-ANALYTICS-TEST-EXTERNAL-REFERRAL') > -1) internalFlag = false;
		if (!internalFlag && wa_referringUrl) return "external natural referral";
		else return "";
	}
	/*
	function getBrowseCall(){
		var sTemp;
		sTemp = 'www.freescale.com,freescale.com.cn,freescale.co.jp,contact.freescale.com,contact.nxp.com,cache.freescale.com,community.freescale.com,community.nxp.com,uat.freescale.com,cache-uat.freescale.com,community-uat.freescale.com,*.freescale.net,freescale.co.kr,getregisterednow.com,images.freescale.com,media.freescale.com,ir.freescale.com,investors.freescale.com,scdev-15.isys.intraware.com,freescaleuat.flexnetoperations.com,freescale.flexnetoperations.com,iottour.freescaleforms.com,iot.freescale.com,fslwpbt.de,blogs.freescale.com,vod.freescale.com,video.freescale.net,esdhttpuat.flexnetoperations.com,freescaleesdtest.flexnetoperations.com,freescaleesd.flexnetoperations.com,http.flexnetoperations.com,ftf.freescaleforms.com,preview-test.freescale.net,preview.freescale.net,ftf.freescale.com,az84ap80.am.freescale.net,fsls.co,m-uat.freescale.com,freescale.jiveon.com,ftf-test-brazil.freescale.net,az84ap47.am.freescale.net,az84ap80.am.freescale.net,az84ap89.am.freescale.net,localhost,www.nxp.com,cache.nxp.com,contact-freescale-com.p01.elqsandbox.com,nxpuat.flexnetoperations.com,iot-test-china.freescale.net,iot-cn.nxp.com,investors.nxp.com,az84wfm05c.am.freescale.net,events.nxp.com,training.nxp.com,nww.teamsite-test.nxp.com,nww.preview-test.nxp.com,nww.teamsite-dev.nxp.com,nww.preview-dev.nxp.com,az84ap84.am.freescale.net,blog.nxp.com,phx.corporate-ir.net,disti.nxp.com,full-nxpcommunity.,7sdev-nxpcommunity.,nxpcommunity.,staging.fuel.tech,iotedge.nxp.com,media.nxp.com,media.kr.nxp.com,nxp.com.cn,uat.nxp.com,www.nxp.jp,uat.nxp.jp,branding.nxp.com,nxp.flexnetoperations.com,nxpuat.flexnetoperations.com,uat.nxp.com.cn,www.nxp.com.cn,uat.nxp.co.kr,www.nxp.co.kr,store-uat.nxp.com,store.nxp.com,www.hovergames.com,nxpcup.nxp.com,cache.nxp.com.cn,cache-uat.nxp.com.cn,docs.nxp.com,nxp-staging.zoominsoftware.io,nxp-dev.zoominsoftware.io,community-staging.nxp.com,pwmxy87654.lithium.com,events1.social27.com';
		var internalFlag = false;
	    if (document.referrer) {
	        var filters = sTemp.split(",");
	        var docRef = document.referrer.split("/");
	        docRef = docRef[2];
	        for (var f in filters) {
	            if (docRef.indexOf(filters[f]) > -1)
	                internalFlag = true;
			}
	            
	    }
		//Regression Testing
		if (document.referrer.indexOf(':HLP-ANALYTICS-TEST-EXTERNAL-REFERRAL') > -1)
			internalFlag = false;
		
		if(!internalFlag&&document.referrer)
			return "external natural referral";
		else
			return "";
	   
	}*/
function getContentFinding(referringUrl, currentUrl, isDownload) {
	if (typeof isDownload == 'undefined'){ 
		isDownload = false;
		setDigitalDataReferralInfoValues();
		wa_setReferralValues(getReferralValues("wa_data"));		
	}
	var contentFinding = "";
	contentFinding = getBrowseCall(referringUrl); //getBrowseCall();
	if (contentFinding != "") return contentFinding;
	if(typeof digitalData.referralInfo !='undefined' && typeof digitalData.referralInfo.refContentfinding !='undefined') contentFinding = digitalData.referralInfo.refContentfinding;
	if (contentFinding != "") return contentFinding;
	//Remove getAdobeCookieHelper check post Web SDK in Phase 2
	contentFinding = getAdobeCookie(contentfindingCookie);
	if (contentFinding != "") return contentFinding;
	contentFinding = readAnalyticsCrossDomainCookies("cf");
	if (contentFinding != "") return contentFinding;
	contentFinding = getContentFindingFromParam(currentUrl, referringUrl);
	if (contentFinding != "") return contentFinding;
	contentFinding = getContentFindingFromReferrer(referringUrl, isDownload);
	if (contentFinding != "") return contentFinding;
	contentFinding = getContentFindingFromTid(currentUrl);
	return contentFinding;
}

function getContentFindingFromParam(currentUrl, referringUrl) {
	//var reffererPageCategory = digitalData.referralInfo.refCat !== '' ? digitalData.referralInfo.refCat : getAdobeCookie(referrerPageCategoryCookie);
	//var pageCategory = getPageCategory();
	//var reffererPageCode = digitalData.referralInfo.refCode !== '' ? digitalData.referralInfo.refCode : getAdobeCookie(referrerPageCodeCookie);
	//var pageCode = getPageCodeID();
	var qry_param = "";
	var url_parts = currentUrl.split("?");
	if ((currentUrl.indexOf("www.hovergames.com") == -1) && (referringUrl.indexOf("www.hovergames.com") != -1)) {
		return "HOVERGAMES";
	}
	if ((currentUrl.indexOf("nxpcup.nxp.com") == -1) && (referringUrl.indexOf("nxpcup.nxp.com") != -1)) {
		return "NXP CUP";
	}
	if (currentUrl.indexOf("experience.nxp.com") == -1 && referringUrl.indexOf("experience.nxp.com") != -1) {
		return "Events Platform";
	}
  	if (currentUrl.indexOf("mcuxpresso.nxp.com/eb-hub") == -1 && referringUrl.indexOf("mcuxpresso.nxp.com/eb-hub") != -1) { 
		return "Expansion Board Hub"; 
	} 
	if (currentUrl.indexOf("mcuxpresso.nxp.com/appcodehub") == -1 && referringUrl.indexOf("mcuxpresso.nxp.com/appcodehub") != -1) { 
		return "Application Board Hub"; 
	} 
	if (currentUrl.indexOf("mcuxpresso.nxp.com") == -1 && referringUrl.indexOf("mcuxpresso.nxp.com") != -1) { 
		return "MCUXpresso"; 
	}
	if (url_parts.length > 1) qry_param = url_parts[1];
	else return "";
	if (qry_param.indexOf("site_preference=normal") != -1) return "Footer - Select Fullsite";
	if (qry_param.indexOf("tid=FSHBNR") != -1 && referringUrl != null && referringUrl != "") {
		var refererrPathName = referringUrl.replace(/^[^:]+:\/\/[^/]+/, '').replace(/#.*/, '');
		var fileName = refererrPathName.substring(refererrPathName.lastIndexOf("/") + 1);
		if (fileName.length < 2 || fileName.indexOf("index") != -1 || (fileName.indexOf(".") < 0 && fileName.indexOf("login") < 0)) {
			return "Homepage banner";
		}
		else return "";
	}
	//if(qry_param.indexOf("fr=p") != -1 && referringUrl != "") return "Personal Recommendations";
	/*if(qry_param.indexOf("fsrch=1") != -1 && referringUrl != "")
			return "Keyword Search";
	
	if(qry_param.indexOf("fpsp=1") != -1 && referringUrl != "" && referringUrl.indexOf("/products/") != -1){
		if(reffererPageCategory == "PSP" || reffererPageCategory == "TSP" || reffererPageCategory == "SSP" || reffererPageCategory == "RDSP"){
			var samePage = (reffererPageCategory == pageCategory && reffererPageCode == pageCode);
			if(!samePage) 
				return "PSP";
		}
	} 
	if(qry_param.indexOf("fasp=1") != -1 && referringUrl != "" && referringUrl.indexOf("/applications/") != -1){
		var samePage = (reffererPageCategory == pageCategory && reffererPageCode == pageCode);
		if(!samePage) 
			return "ASP";
	}*/
	if (qry_param.indexOf("hdr=1") != -1) return "Header";
	//if(qry_param.indexOf("hdr=sl") != -1) return "Header - Select Language";
	//if(qry_param.indexOf("ftr=sm") != -1) return "Footer - Select Mobile";
	if (qry_param.indexOf("ftr=1") != -1) return "Footer";
	return "";
}

function isKeywordSearchReferrer(url) {
	var searchUrl;
	var len = wa_regional_site_domains.length;
	url = url.split("?")[0] + '?';
	for (i = 0; i < len; i++) {
		searchUrl = wa_regional_site_domains[i] + searchURL;
		if (url.indexOf(searchUrl) > -1) return true;
	}
	return false;
}

function getContentFindingFromReferrer(referringUrl, isDownload) {
	var reffererPageCategory = typeof digitalData.referralInfo != 'undefined' && digitalData.referralInfo.refCat !== '' ? digitalData.referralInfo.refCat : getAdobeCookie(referrerPageCategoryCookie);
	var reffererPageCode = typeof digitalData.referralInfo != 'undefined' && digitalData.referralInfo.refCode !== '' ? digitalData.referralInfo.refCode : getAdobeCookie(referrerPageCodeCookie);
	var reffererPageType = typeof digitalData.referralInfo != 'undefined' && digitalData.referralInfo.refType !== '' ? digitalData.referralInfo.refType : getAdobeCookie(referrerPageTypeCookie);
	var pageCategory = getPageCategory();
	var pageCode = getPageCodeID();
	var pageType = getPageType();
	if (typeof referringUrl == 'undefined') referringUrl = "";
	if (referringUrl.split("?")[0].indexOf(parametricSelectorURL) != -1 && (pageCategory != parametricSearchPageName.toUpperCase() || isDownload)) {
		if (pageCategory != keywordSearchPageName.toUpperCase() && pageCategory != softwareSearchPageName.toUpperCase()) return parametricSearchPageName;
	}
	if (referringUrl.indexOf(packageSearchURL) != -1 && (pageCategory != packageSearchPageName.toUpperCase() || isDownload)) {
		return packageSearchPageName;
	}
	//Remove as part of regionalization project
	/*
	var searchUrl = searchURL;
	if(typeof URL_DOMAIN != 'undefined')
		searchUrl = URL_DOMAIN + searchUrl;
	
	if(referringUrl.indexOf(searchUrl) != -1 && referringUrl.indexOf(packageSearchURL) == -1 && (pageCategory != keywordSearchPageName.toUpperCase() || isDownload)){
	*/
	if (isKeywordSearchReferrer(referringUrl) && referringUrl.indexOf(packageSearchURL) == -1 && (pageCategory != keywordSearchPageName.toUpperCase() || isDownload)) {
		if (pageCategory != parametricSearchPageName.toUpperCase() && pageCategory != softwareSearchPageName.toUpperCase() && pageCategory != chemicalContentSearchPageName.toUpperCase()) return keywordSearchPageName;
	}
	if (referringUrl.split("?")[0].indexOf(softwareCenterURL) != -1 && (pageCategory != softwareSearchPageName.toUpperCase() || isDownload)) {
		if (pageCategory != parametricSearchPageName.toUpperCase() && pageCategory != keywordSearchPageName.toUpperCase()) return softwareSearchPageName;
	}
	var chemicalContentURL = "/chemical-content/";
	var chemicalContentIMDSURL = "/chemical-content/imds";
	var chemicalContentSearchURL = "/chemical-content/search";
	if (referringUrl.indexOf(chemicalContentURL) != -1 && referringUrl.indexOf(chemicalContentIMDSURL) == -1 && referringUrl.indexOf(chemicalContentSearchURL) == -1) return chemicalContentPageName;
	if (referringUrl.split("?")[0].indexOf(chemicalContentSearchURL) != -1 && (pageCategory != chemicalContentSearchPageName.toUpperCase() || isDownload)) {
		if (pageCategory != parametricSearchPageName.toUpperCase() && pageCategory != keywordSearchPageName.toUpperCase()) return chemicalContentSearchPageName;
	}
	if (isDownload) {
		reffererPageCategory = pageCategory;
		reffererPageCode = pageCode;
		reffererPageType = pageType;
		pageCategory = pageCode = pageType = downloadPageName.toUpperCase();
	}
	if (reffererPageCategory == parametricSearchPageName.toUpperCase() && pageCategory != parametricSearchPageName.toUpperCase()) return parametricSearchPageName;
	if (reffererPageCategory == keywordSearchPageName.toUpperCase() && pageCategory != keywordSearchPageName.toUpperCase()) return keywordSearchPageName;
	if (reffererPageCategory == softwareSearchPageName.toUpperCase() && pageCategory != softwareSearchPageName.toUpperCase()) return softwareSearchPageName;
	if (reffererPageCategory == packageSearchPageName.toUpperCase() && pageCategory != packageSearchPageName.toUpperCase()) return packageSearchPageName;
	if (reffererPageCategory == partFinderPageName.toUpperCase() && pageCategory != partFinderPageName.toUpperCase()) return crossCheckPartFinderPageName;
	if (reffererPageCategory == competitorXrefPageName.toUpperCase() && pageCategory != competitorXrefPageName.toUpperCase()) return crossCheckCompCrossRefPageName;
	if (reffererPageCategory == quickPricingPageName.toUpperCase() && pageCategory != quickPricingPageName.toUpperCase()) return crossCheckQuickPricingPageName;
	if (reffererPageCategory == partDetailsPageName.toUpperCase() && reffererPageCode != pageCode) return partDetailsPageName;
	if (reffererPageCategory == dspName.toUpperCase() && reffererPageCode != pageCode) return dspName.toUpperCase();
	if (reffererPageCategory == tspName.toUpperCase() && reffererPageCode != pageCode) return tspName.toUpperCase();
	if (reffererPageCategory == userGuideName.toUpperCase() && reffererPageCode != pageCode) return userGuideName.toUpperCase();
	if (reffererPageCategory == pspName.toUpperCase() || reffererPageCategory == tspName.toUpperCase() || reffererPageCategory == rdspName.toUpperCase() || reffererPageCategory == sspName.toUpperCase()) {
		if (reffererPageCode != pageCode) return pspName.toUpperCase();
	}
 	if (reffererPageType == ndaFaqs && reffererPageCode != pageCode)
     return ndaFaqs;
		
	if (reffererPageCategory == homepagePageName.toUpperCase() || reffererPageCategory == overviewPageName.toUpperCase() || reffererPageCategory == taxonomyPageName.toUpperCase()) {
		if (reffererPageCode != pageCode && (reffererPageType == familyPageName || pageCategory == downloadPageName.toUpperCase() && pageType == familyPageName)) {
			return productFamilyPageName;
		}
		else if (reffererPageCode != pageCode && (reffererPageType == generalPageName || pageCategory == downloadPageName.toUpperCase() && pageType == generalPageName)) {
			return generalPageName;
		}
	}
	if (reffererPageCategory == aspName.toUpperCase() && reffererPageCode != pageCode) return aspName.toUpperCase();
	if (reffererPageCategory == videoVaultPageName.toUpperCase() && pageCategory != videoVaultPageName.toUpperCase()) return videoVaultPageName;
	if (reffererPageCategory == videoChannelPageName.toUpperCase() && pageCategory != videoChannelPageName.toUpperCase()) return videoChannelPageName;
	if (reffererPageCategory == videoPageName.toUpperCase() && reffererPageCode != pageCode) return videoSummaryPageName;
	if (reffererPageCategory == pipPageName.toUpperCase())
		if (reffererPageCode != pageCode) return packageSummaryPageName;
	if (reffererPageCategory == partDetailsPageName.toUpperCase()) return partDetailsPageName;
	if (reffererPageCategory == chemicalContentName.toUpperCase()) return chemicalContentPageName;
	if (reffererPageCategory == chemicalContentSearchPageName.toUpperCase() && pageCategory != chemicalContentSearchPageName.toUpperCase()) return chemicalContentSearchPageName;
	if (reffererPageCategory == solutionsPageName && reffererPageCode != pageCode) return solutionsPageName;
	if (reffererPageCategory == quickPricingPageName.toUpperCase() && pageCategory != quickPricingPageName.toUpperCase()) return crossCheckQuickPricingPageName;
	if (reffererPageCategory == generalPageName && reffererPageCode != pageCode) return generalPageName;
	if (reffererPageCategory == trainingInfoPageName && reffererPageCode != pageCode) return trainingInfoPageName;
	if (reffererPageCategory == docToolUpdatesPageName && pageCategory != docToolUpdatesPageName) return docToolUpdatesPageName;
	if (reffererPageCategory == distyNetSearchPageName && pageCategory != distyNetSearchPageName) return distyNetSearchPageName;
	if (reffererPageCategory == dspName.toUpperCase() && reffererPageCode != pageCode) return dspName.toUpperCase();
	if (reffererPageCategory == dspName.toUpperCase() && reffererPageCode != pageCode) return dspName.toUpperCase();
	if (reffererPageCategory == preDownloadPageName) return preDownloadPageName;
	if (reffererPageCategory == downloadEmailAlert && pageCategory != downloadEmailAlert) return downloadEmailAlert;
	if (reffererPageCategory == softwareSupportActivation && pageCategory != softwareSupportActivation) return softwareSupportActivation;
	if (reffererPageCategory == recentActivity) return recentActivity;
	if (reffererPageCategory == softwareSupportActivation) return softwareSupportActivation;
	if (reffererPageCategory == pcnPageName) return pcnPageName;
	if (reffererPageCategory == salesnetPageName) return salesnetPageName;
	if (reffererPageCategory == blogPageName && reffererPageCode != pageCode) return blogPageName;
	 if (reffererPageType == applicationCodeHubSearch && pageType != applicationCodeHubSearch) 
		return applicationCodeHubSearch;
	 if (reffererPageType == expansionBoardHubSearch && pageType != expansionBoardHubSearch) 
		return expansionBoardHubSearch;
	 if (reffererPageType == expansionBoardHubProductCard && pageType != expansionBoardHubProductCard) 
		return expansionBoardHubProductCard;	
	 if (reffererPageType == mcuxpresso && pageType != mcuxpresso) 
		return mcuxpresso;	
	return "";
}

function getContentFindingFromTid(currentUrl) {
	var tid = getQryParamForAnalytics(currentUrl, 'tid');
	if (tid == "") return "";
	if (tid == 'van') return "Vanities";
	//if(tid == 'persHis') return "Personal History/Favorites";
	return "tid: " + tid;
}

function getQryParamForAnalytics(url, name) {
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var tmpURL = url;
	var results = regex.exec(tmpURL);
	if (results == null) return "";
	else return decodeURIComponent(results[1]);
}

function getQryFilterParamForAnalytics(url, name) {
	var params_url = url.split("?");
	var filterResultData;
	var results;
	var params = params_url[params_url.length - 1].split("&");
	for (i = 0; i < params.length; i++) {
		var data = params[i];
		if (data.indexOf(name + "=") > -1) {
			var filterArray = data.split(name + "=");
			filterResultData = filterArray[filterArray.length - 1];
			if (results == null) {
				results = filterResultData;
			}
			else {
				results = results + "+" + filterResultData;
			}
		}
	}
	if (results == null) return "";
	else return decodeURIComponent(results);
}

function trackDownloadAnalyticsCommon(downloadUrl, analyticsFrmOnClick, destinationSubCF, keyword, filterlist, pageNumber, searchResultPosition) {
	if (!isDTMEnabledFlag) return;
	var urlProtocol = downloadUrl.substring(0, 6);
	if (urlProtocol.indexOf("http") < 0) {
		downloadUrl = "http://" + location.hostname + downloadUrl;
	}
	var is_unsecure_download = analyticsCheckDownload(downloadUrl);
	var contentFinder = getContentFinding(document.URL, downloadUrl, true);
	var analyticsDwnldURL = downloadUrl.split("#")[0];
	var download_type_index = getDownloadTypeForAnalytics(downloadUrl);
	digitalData.dwnldInfo = {};
	digitalData.eventInfo = {};
	//Start B04889 - Software Center Single Page App Redesign Update - 5/8/2018	
	digitalData.searchInfo = {};
	if (typeof keyword != 'undefined') {
		digitalData.searchInfo.searchkeyword = keyword; // Used to set prop4
	}
	if (typeof pageNumber != 'undefined') {
		digitalData.searchInfo.searchResultPageNumber = pageNumber; // Used to set prop4
	}
	if (typeof searchResultPosition != 'undefined') {
		digitalData.searchInfo.searchResultPosition = searchResultPosition; // Used to set prop4
	}
	if (typeof filterlist != 'undefined') {
		digitalData.searchInfo.searchFilterList = filterlist; // Used to set prop4
	}
	//End B04889 - Software Center Single Page App Redesign Update - 5/8/2018	
	digitalData.eventInfo.assetID = downloadUrl;
	if (contentFinder != null && contentFinder != '') {
		digitalData.eventInfo.contentFinding = contentFinder;
	}
	//Start B04889 - Software Center Single Page App Redesign Update - 5/8/2018
	if (typeof destinationSubCF != 'undefined') {
		digitalData.eventInfo.subContentFinding = destinationSubCF;
	}
	//End B04889 - Software Center Single Page App Redesign Update - 5/8/2018
	var hrefUrl = downloadUrl.split("#")[0];
	hrefUrl = replaceCacheUrlDomain(hrefUrl);
	hrefUrl = replaceDomainforDownload(hrefUrl);
	if (is_unsecure_download) {
		hrefUrl = hrefUrl.split("?")[0];
		if (download_type_index == '') {
			download_type_index = "Non-Secured";
			digitalData.eventInfo.eventPathing = 'dwnld:' + hrefUrl; // Event Pathing
		}
		else {
			digitalData.eventInfo.eventPathing = 'dwnld start:' + hrefUrl; // Event Pathing														
		}
		digitalData.dwnldInfo.downloadType = download_type_index;
		digitalData.dwnldInfo.downloadURLClean = remProtocolFrmUrl(hrefUrl);
		if (analyticsFrmOnClick) {
			_satellite.track("trackDownloadAnalytics",_satellite.getVar("XDM-trackDownloadAnalytics"));
		}
		else {
			digitalData.anchorObj = newAnchorTagForAnalytics();
			digitalData.nextAction = function() {
				window.location.href = analyticsDwnldURL;
			};
			_satellite.track("trackDownloadAnalytics",_satellite.getVar("XDM-trackDownloadAnalytics"));
		}
	}
	else {
		if (download_type_index != '') {
			var uri = hrefUrl.split("?")[0];
			if (hrefUrl.indexOf('?') != -1) {
				hrefUrl = uri + '?colCode=' + getQryParamForAnalytics(hrefUrl, 'colCode');
			}
			digitalData.dwnldInfo.downloadType = download_type_index;
			digitalData.eventInfo.eventPathing = 'dwnld start:' + hrefUrl; // Event Pathing
			digitalData.dwnldInfo.downloadURLClean = remProtocolFrmUrl(hrefUrl);
			if (analyticsFrmOnClick) {
				_satellite.track("trackSecDownloadInitiate",_satellite.getVar("XDM-trackSecDownloadInitiate"));
			}
			else {
				digitalData.anchorObj = newAnchorTagForAnalytics();
				digitalData.nextAction = function() {
					window.location.href = analyticsDwnldURL;
				};
				_satellite.track("trackSecDownloadInitiate",_satellite.getVar("XDM-trackSecDownloadInitiate"));
			}
		}
	}
	digitalData.eventInfo.contentFinding = digitalData.dwnldInfo.downloadType = digitalData.eventInfo.assetID = digitalData.eventInfo.eventPathing = digitalData.dwnldInfo.downloadURLClean = digitalData.eventInfo.subContentFinding = digitalData.searchInfo.searchkeyword = digitalData.searchInfo.searchResultPageNumber = digitalData.searchInfo.searchResultPosition = "";
	if (typeof eloqua_tracking == "function") {
		eloqua_tracking(downloadUrl);
	}
}

function analyticsCheckDownload(pth) {
	pth = pth.split("?")[0];
	if (pth.toUpperCase().indexOf("FILES") != -1 || pth.toUpperCase().indexOf("/MCDS/") != -1) {
		return true;
	}
	// Added for Marketing Leveraged document download
	if (pth.toUpperCase().indexOf("DOWNLOAD") != -1 && (pth.toUpperCase().indexOf("FILES") != -1 || pth.toUpperCase().indexOf("ASSETS") != -1)) {
		return true;
	}
	// End of Marketing Leveraged document download
	if (pth.indexOf(".pdf") != -1 || pth.indexOf(".doc") != -1 || pth.indexOf(".zip") != -1 || pth.indexOf(".ppt") != -1 || pth.indexOf(".txt") != -1) {
		return true;
	}
	return false;
}

function trackExitLinkForDistributors(fiveCodeLocation, partNumber, fiveCode, distyName, countryName) {
	/*
	//Replaced by function trackExitLnkForAnalytics, any call to this module will not set the correct values. Only outdated cached pages will use this function. 
	//leaving active for now
		digitalData.partInfo = {}; 
		digitalData.partInfo.partNumber = partNumber; 

		digitalData.distyInfo = {}; 
		digitalData.distyInfo.fiveCodeLocation = fiveCodeLocation; 			
		digitalData.distyInfo.countryName = countryName;			
		digitalData.distyInfo.distributorName = distyName; 
		
		_satellite.track("trackExitLinkForDistributors"); 
	*/
}

function getRefinementData(dnavs_param) {
		var linkVal = "";
		var s_qry_param = decodeURIComponent(dnavs_param);
		s_qry_param = decodeURI(s_qry_param);
		s_qry_param = decodeURIComponent(s_qry_param);
		s_qry_param = s_qry_param.replace(/prodTypeCategory/g, "Device Type");
		s_qry_param = s_qry_param.replace(/apppTypeCategory/g, "Application");
		s_qry_param = s_qry_param.replace(/TrainingLaunchLanguage/g, "Language");
		s_qry_param = s_qry_param.replace(/typeHirarchy/g, "Services");
		s_qry_param = s_qry_param.replace(/OperatingSystems/g, "OperatingSystems");
		s_qry_param = s_qry_param.replace(/cores/g, "Cores");
		if (s_qry_param.indexOf("Asset_Type=Trainings") != -1) {
			s_qry_param = s_qry_param.replace(/type/g, "TrainingType");
		}
		else if (s_qry_param.indexOf("Asset_Type=SoftwareTools") != -1) {
			s_qry_param = s_qry_param.replace(/type/g, "Software &amp; Tools Type");
		}
		else if (s_qry_param.indexOf("Asset_Type=Documents") != -1) {
			s_qry_param = s_qry_param.replace(/type/g, "Document Type");
		}
		else if (s_qry_param.indexOf("Asset_Type=Partners") != -1) {
			s_qry_param = s_qry_param.replace(/Vendor/g, "Partner Tier");
		}
		var qryParamArr = s_qry_param.split("+inmeta:");
		for (i = 0; i < qryParamArr.length; i++) {
			if (i == 0) {
				linkVal = qryParamArr[i].replace("inmeta:Asset_Type=", "Asset Type~");
			}
			else {
				var resultArr = qryParamArr[i].split("=");
				if (resultArr.length >= 2) {
					var resValArr = resultArr[1].split("_");
					linkVal = linkVal + "$" + resultArr[0] + "~" + resValArr[resValArr.length - 1];
				}
			}
		}
		return linkVal;
	}
	// Added for CR-59281 Start
function getRefinementData1(display_name1, display_name_value1, dnavs_param1) {
	var linkVal1 = "";
	var s_qry_param1 = decodeURIComponent(dnavs_param1);
	s_qry_param1 = decodeURI(s_qry_param1);
	s_qry_param1 = decodeURIComponent(s_qry_param1);
	var qryParamArr1;
	var collectionName = "category";
	if (s_qry_param1.indexOf("+") > -1) qryParamArr1 = s_qry_param1.split("+");
	else qryParamArr1 = s_qry_param1;
	var arrPartNumber = new Array();
	var arritemType = new Array();
	arrPartNumber = display_name1.split("|");
	arritemType = display_name_value1.split("|");
	if (qryParamArr1 instanceof Array) {
		for (i = 0; i < qryParamArr1.length; i++) {
			if (i == 0) {
				linkVal1 = collectionName.concat("=").concat(qryParamArr1[i]);
			}
			else {
				if (qryParamArr1[i].indexOf(">>") > -1) {
					var resultArr1 = qryParamArr1[i].split(">>");
					if (resultArr1.length >= 2) {
						if (resultArr1[resultArr1.length - 1].indexOf("_") > -1) {
							var resValArr1 = resultArr1[resultArr1.length - 1].split("_");
							for (j = 0; j < resValArr1.length; j++) {
								var resValArr2 = resValArr1[j];
								if (arrPartNumber.indexOf(resValArr2) != -1) {
									var z = arrPartNumber.indexOf(resValArr2);
									linkVal1 = linkVal1 + "$" + resultArr1[0] + "=" + arritemType[z];
								}
								else {
									linkVal1 = linkVal1 + "$" + resultArr1[0] + "=" + resValArr2;
								}
							}
						}
						else {
							var filterVal = resultArr1[resultArr1.length - 1];
							if (arrPartNumber.indexOf(filterVal) != -1) {
								var z = arrPartNumber.indexOf(filterVal);
								linkVal1 = linkVal1 + "$" + resultArr1[0] + "=" + arritemType[z];
							}
							else {
								linkVal1 = linkVal1 + "$" + resultArr1[0] + "=" + filterVal;
							}
						}
					}
				}
			}
		}
	}
	else {
		linkVal1 = collectionName.concat("=").concat(qryParamArr1);
	}
	return linkVal1;
}

function trackSearchAnalytics(displayname, displaynamevalue) {
	if (!isDTMEnabledFlag) return;
	var display_name = displayname;
	var display_name_value = displaynamevalue;
	var keywordsearch_category = getQryParamForAnalytics(document.URL, 'category');
	var keywordsearch_filter = getQryFilterParamForAnalytics(document.URL, 'filter');
	var search_filter_param1 = "";
	if (keywordsearch_category != null && keywordsearch_category != "") {
		if (keywordsearch_filter != null && keywordsearch_filter != "") {
			search_filter_param1 = keywordsearch_category.concat("+").concat(keywordsearch_filter);
		}
		else {
			search_filter_param1 = keywordsearch_category;
		}
	}
	var refine_data1 = "";
	if (search_filter_param1 == "") {
		digitalData.searchInfo.searchFilterList = "";
	}
	else {
		refine_data1 = getRefinementData1(display_name, display_name_value, search_filter_param1);
		digitalData.searchInfo.searchFilterList = refine_data1;
	}
}

/*function trackLoginComplete() {
	if (typeof s_account != 'undefined') {
		var s = s_gi(s_account);
		var anchorTagObj = newAnchorTagForAnalytics();
		s.eVar1 = "";
		s.linkTrackVars = 'channel,prop1,prop2,prop3,prop6,prop8,prop9,prop10,prop11,prop13,prop14,prop16,prop18,prop21,prop23,prop72,eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar15,eVar16,eVar17,eVar18,eVar19,eVar20,eVar21,eVar34,eVar35,eVar38,eVar39,eVar48,eVar51,eVar52,eVar53,events';
		s.linkTrackEvents = 'event7';
		s.prop72 = 'trackLoginComplete webanlaytics method fired';
		s.events = 'event7';
		var actionInterval = setInterval(function() {
			s.tl(anchorTagObj, 'o', 'Login Attempt');
			s.eVar1 = s.events = "";
			clearInterval(actionInterval);
		}, 0);
	}
}*/

function trackLogin(name) {
	//Changed on Jan 13 2022 Release
	//if (!isDTMEnabledFlag) return;
	if (!isDTMEnabledFlag) {
		isDTMEnabledFlag = isDTMEnabled();
		if (!isDTMEnabledFlag) return;
	}
	var track = {};
	track.form = {};
	track.search = {};
	track.videoOptions = {};
	track.bypassclear = true;
	if (name == 'Login: Login Attempted') {
		track.eventPathing = 'Login: Login Attempted';
		track.name = 'Login Attempted';
		track.pageAction='Login: Login Attempted';
		track.eventValues = 'event34,event7,event13';
		track.destinationContentFinding = "Login";
		track.pageSubaction = "Sign In";
        track.destinationSubContentFinding = "Login: Login Attempted";
		track.targetURL =document.URL;
		track.form.formName = 'Login Form';				
	}
	else if (name == 'Login: Login Successful') {
		track.eventPathing = 'Login: Login Successful';
		track.name = 'Login Success with Form Complete';
	}
	else if (name == 'Login: Login Failed') {
		track.eventPathing = 'Login: Login Failed';
		track.name = 'Login Failed';
		track.pageAction='Login: Login Failed';
		track.form.formName = 'Login Form';		 
	}
	else if (name == 'Login Pop-up') {
		track.pageAction = 'Login Pop-Up';
		track.eventPathing = 'Login Pop-Up';
		track.pageActionContentFinding = 'Header';
		track.pageActionSubContentFinding = 'Header: Sign-in Link';
		track.form.formName = 'Login Form Pop-up';
		//track.name='Page Action';
	}
	else if (name == "Login Required To Access Video") {
    track.eventPathing = "Login Required To Access Video";
    track.pageAction = "Login Required To Access Video";
    track.form.formName = "Login Form Pop-up Inline";
    }
	else if (name == 'Login Pop-up: Login Attempted') {
		track.eventPathing = 'Login Pop-up: Login Attempted';
		track.name = 'Login Attempted';
		track.form.formName = 'Login Form Pop-up';
	}
	else if (name == 'Login Pop-up: Login Successful') {
		track.eventPathing = 'Login Pop-up: Login Successful';
		track.name = 'Login Success with Form Complete';
		track.form.formName = 'Login Form Pop-up';
	}
	else if (name == 'Login Pop-up: Login Failed') {
		track.eventPathing = 'Login Pop-up: Login Failed';
		track.name = 'Login Failed';
		track.form.formName = 'Login Form Pop-up';
	}
	else if (name == 'Login Pop-up Inline') {
		track.pageAction = 'Login Pop-Up Inline';
		track.eventPathing = 'Login Pop-Up Inline';
		track.form.formName = 'Login Form Pop-up Inline';		
		if (document.URL.indexOf("PRODUCT-ADVISOR") > -1) {
			track.pageAction = "Device Advisor: Recent NXP Recommendations";
			track.eventPathing = "Device Advisor: Recent NXP Recommendations";
			track.pageSubaction = "Sign In";			
		}
		else if (document.URL.indexOf(":CROSS-REFERENCE") > -1) {
			track.pageAction = "Cross Reference Search: Recent Searches Section Link Click";
			track.eventPathing = "Cross Reference Search: Recent Searches Section Link Click";
			track.pageSubaction = "Sign In";
			track.form.formName = '';
			track.targetURL = '/security/login';
			track.destinationContentFinding = "Cross Reference Search";
			track.destinationSubContentFinding = "Cross Reference Search: Recent Searches Section Link Click";
		//Start May-15-2022 - Update for Design Advisor Login
		}else if(document.URL.indexOf(":DESIGN-ADVISOR") > -1) {
		track.pageAction = "Design Advisor: Recent NXP Recommendations";
		track.eventPathing = "Design Advisor: Recent NXP Recommendations";	
		track.pageSubaction = "Sign In";		
		}
		//End May-15-2022 - Update for Design Advisor Login
	}
	else if (name == 'Login Pop-up Inline: Login Failed') {
		track.eventPathing = 'Login Pop-up Inline: Login Failed';
		track.name = 'Login Failed';
		track.form.formName = 'Login Form Pop-up Inline';
	}
	else if (name == 'Login Pop-up Inline: Login Attempted') {
		track.eventPathing = 'Login Pop-up Inline: Login Attempted';
		track.name = 'Login Attempted';
		track.form.formName = 'Login Form Pop-up Inline';
	}
	else if (name == 'Login Pop-up Inline: Login Successful') {
		track.eventPathing = 'Login Pop-up Inline: Login Successful';
		track.name = 'Login Success with Form Complete';
		track.form.formName = 'Login Form Pop-up Inline';
	}
	else if (name == 'Login Pop-up: Close Window') {
		track.eventPathing = 'Login Pop-up: Close Window';
		track.pageAction = 'Login Pop-up: Close Window';
		track.form.formName = 'Login Form Pop-up';
		//track.name='Page Action';
	}
	else if (name == 'Login Pop-up Inline: Close Window') {
		track.eventPathing = 'Login Pop-up Inline: Close Window';
		track.pageAction = 'Login Pop-up Inline: Close Window';
		track.form.formName = 'Login Form Pop-up Inline';
		//track.name='Page Action';
	} else if (name == 'Secure Files:myDocument Sign-in Click') {
		track.pageAction = "Documentation Section - Results Link Click";
		track.eventPathing = "Documentation Section - Results Link Click";
		track.pageSubaction = "Secure Files Sign In";
	} else if (name == 'Secure Files:myDesign Sign-in Click') {
		track.pageAction = "Design Resources Section - Design Files - Categories Link Click";
		track.eventPathing = "Design Resources Section - Design Files - Categories Link Click";
		track.pageSubaction = "Secure Files Sign In";
	} else if (name == 'Secure Files:mySoftware Sign-in Click') {
		track.pageAction = "Design Resources Section - Software - Categories Link Click";
		track.eventPathing = "Design Resources Section - Software - Categories Link Click";
		track.pageSubaction = "Secure Files Sign In";
	}else if (name == 'Secure Files:myDownload Sign-in Click') {
		track.pageAction = "Design Resources Section - Download - Categories Link Click";
		track.eventPathing = "Design Resources Section - Download - Categories Link Click";
		track.pageSubaction = "Secure Files Sign In";
	}
	else if (name == 'Secure Files:myDocument Reenter Your Password') {
			track.eventPathing = 'Documentation Section - Results Link Click';
			track.pageAction='Documentation Section - Results Link Click';
			track.pageSubaction = "Secure Files Reenter Your Password";
		}
		else if (name == 'Secure Files:myDownload Reenter Your Password') {
			track.eventPathing = 'Download Section - Results Link Click';
			track.pageAction='Download Section - Results Link Click';
			track.pageSubaction = "Secure Files Reenter Your Password";
		}
		else if (name == 'Secure Files:myDesign Reenter Your Password') {
			track.eventPathing = 'Design Resources Section - Design Files - Results Link Click';
			track.pageAction='Design Resources Section - Design Files - Results Link Click';
			track.pageSubaction = "Secure Files Reenter Your Password";
		}
		else if (name == 'Secure Files:mySoftware Reenter Your Password') {
			track.eventPathing = 'Design Resources Section - Software - Categories Link Click';
			track.pageAction='Design Resources Section - Software - Categories Link Click';
			track.pageSubaction = "Secure Files Reenter Your Password";
		}
	trackCustomObject(track);
}

function trackProgressiveRegistration(name, questionNumber, fieldName) {
	/*if(isDTMEnabledFlag){           
        digitalData.eventInfo = {}; 
        digitalData.eventInfo.contentFinding='browse';
		digitalData.formInfo = {};
        if(name=='Progressive Profile Form: Initiation'){
                                            digitalData.eventInfo.eventPathing='Progressive Profile Form: Initiation';
                                            digitalData.eventInfo.name='Page Action with Form Initation'; 
                                            digitalData.formInfo.formName='Progressive Profile Form - Question #' + questionNumber + ' - ' + fieldName;
        }else if(name=='Progressive Profile Form: Submission'){
                                            digitalData.eventInfo.eventPathing='Progressive Profile Form: Submission';
                                            digitalData.eventInfo.name='Form Submission';                                 
                                            digitalData.formInfo.formName='Progressive Profile Form - Question #' + questionNumber  + ' - ' + fieldName;
        }else if(name=='Progressive Profile Form: Cancel'){
                                            digitalData.eventInfo.eventPathing='Progressive Profile Form: Cancel';
                                            digitalData.eventInfo.name='Page Action';                            
                                            digitalData.formInfo.formName='Progressive Profile Form - Question #' + questionNumber  + ' - ' + fieldName;
        }            
        _satellite.track("trackLogin");
		digitalData.eventInfo.contentFinding=digitalData.eventInfo.subContentFinding='';
	}
*/
	if (!isDTMEnabledFlag) return;
	var track = {};
	track.form = {};
	track.search = {};
	track.videoOptions = {};
	if (name == 'Progressive Profile Form: Initiation') {
		track.eventPathing = track.pageAction = 'Progressive Profile Form: Initiation';
		track.name = 'page action form initiation';
		track.form.formName = 'Progressive Profile Form - Question #' + questionNumber + ' - ' + fieldName;
	}
	else if (name == 'Progressive Profile Form: Submission') {
		track.eventPathing = 'Progressive Profile Form: Submission';
		track.name = 'form complete';
		track.form.formName = 'Progressive Profile Form - Question #' + questionNumber + ' - ' + fieldName;
	}
	else if (name == 'Progressive Profile Form: Cancel') {
		track.eventPathing = track.pageAction = 'Progressive Profile Form: Cancel';
		//track.name='Page Action';                            
		track.form.formName = 'Progressive Profile Form - Question #' + questionNumber + ' - ' + fieldName;
	}
	trackCustomObject(track);
}

function trackMobileLoginComplete(frmObj) {
	var frmId = frmObj.id;
	if (isDTMEnabledFlag) {
		digitalData.eventInfo = {};
		digitalData.eventInfo.eventPathing = 'Login: Login Attempted';
		digitalData.eventInfo.name = 'Login Attempted';
		digitalData.eventInfo.formId = frmId;
		digitalData.anchorObj = newAnchorTagForAnalytics();
		digitalData.nextAction = function() {
			loginNextAction(frmId);
		};
		_satellite.track("trackLoginCompleteMobile");
	}
	else if (typeof s_account != 'undefined') {
		var s = s_gi(s_account);
		var anchorTagObj = newAnchorTagForAnalytics();
		s.eVar1 = "";
		s.linkTrackVars = 'channel,prop1,prop2,prop3,prop6,prop8,prop9,prop10,prop11,prop13,prop14,prop16,prop18,prop21,prop23,eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar15,eVar16,eVar17,eVar18,eVar19,eVar20,eVar21,eVar34,eVar35,eVar38,eVar39,eVar48,eVar51,eVar52,eVar53,events';
		s.linkTrackEvents = 'event7';
		s.events = 'event7';
		s.forcedLinkTrackingTimeout = 5000;
		s.tl(anchorTagObj, 'o', 'Login Attempt', null, function() {
			loginNextAction(frmId);
		});
	}
	else {
		loginNextAction(frmId);
	}
}

function loginNextAction(loginFrmId) {
	isLoginComplete = true;
	$("#" + loginFrmId).submit();
}

function trackAddItem(addItemInfoObj) {
	if (!isDTMEnabledFlag) return;
	var currentUrl = getCleanPageURL();
	var sitePlatFrm = addItemInfoObj.sitePlatform;
	var isCartEmpty = addItemInfoObj.scIsBasketEmpty;
	digitalData.item = [];
	if (sitePlatFrm == "normal") {
		sitePlatFrm = "full";
	}
	var langCd = addItemInfoObj.langCd;
	if (langCd == '') {
		langCd = 'en';
	}
	var arrPartNumber = addItemInfoObj.scPartNumLst.split(",");
	var arritemType = addItemInfoObj.scItemTypeLst.split(",");
	var arrAllPartNumber = addItemInfoObj.scAllPartNumLst.split(",");
	var arrAllitemType = addItemInfoObj.scAllItemTypeList.split(",");
	var removeEvt = addItemInfoObj.scRemoveEvent;
	var itemCount = addItemInfoObj.scItemCount;
	var isItemExist = false;
	var isEvtExist = false;
	if (itemCount > 0) {
		isItemExist = true;
	}
	digitalData.eventInfo.contentFinding = "";
	digitalData.cartInfo.products = "";
	digitalData.userInfo.fslVisitorID = getAdobeCookie("freescale_visitor_id");
	digitalData.siteInfo.sitePlatform = sitePlatFrm;
	digitalData.siteInfo.lang = langCd.toLowerCase();
	digitalData.pageInfo.localTitle = addItemInfoObj.scTitle;
	digitalData.pageInfo.pageName = addItemInfoObj.scPageName;
	digitalData.pageInfo.siteSection1 = addItemInfoObj.scChannel;
	digitalData.pageInfo.pageType = addItemInfoObj.scPageName;
	//digitalData.pageInfo.pageEventPathing = "D=pageName";
	digitalData.pageInfo.pageEventPathing = addItemInfoObj.scPageName;
	digitalData.pageInfo.pageURLClean = currentUrl;
	if (isItemExist) {
		if (isCartEmpty == "true") {
			digitalData.eventInfo.name = 'cart open';
			digitalData.category.primaryCategory = 'Shopping Cart';
			digitalData.category.subcategory1 = 'Shopping Cart Open';
			isEvtExist = true;
		}
		else {
			if (removeEvt != 'REMOVE_EVENT') {
				var urlArr = document.URL.split("?");
				if (urlArr[0].indexOf('add_item') != -1) {
					digitalData.eventInfo.name = 'cart add';
					digitalData.category.primaryCategory = 'Shopping Cart';
					digitalData.category.subcategory1 = 'Shopping Cart Add';
					isEvtExist = true;
				}
			}
		}
		if (isEvtExist) {
			for (i = 0; i < arrPartNumber.length - 1; i++) {
				var item = {};
				item.sku = arrPartNumber[i];
				item.productType = arritemType[i];
				item.quantity = '';
				item.price = '';
				digitalData.item.push(item);
				digitalData.cartInfo.products = digitalData.cartInfo.products + ';' + arrPartNumber[i] + ';;;;eVar41=' + arritemType[i];
				if (i < arrPartNumber.length - 2) {
					digitalData.cartInfo.products = digitalData.cartInfo.products + ",";
				}
			}
			_satellite.track("cartPageLoad");
		}
		else {
			isItemExist = false;
		}
	}
	digitalData.eventInfo.name = 'cart view';
	digitalData.category.primaryCategory = 'Shopping Cart';
	digitalData.category.subcategory1 = 'Shopping Cart View';
	digitalData.cartInfo.products = "";
	for (i = 0; i < arrAllPartNumber.length - 1; i++) {
		var item = {};
		item.sku = arrAllPartNumber[i];
		item.productType = arrAllitemType[i];
		item.quantity = '';
		item.price = '';
		digitalData.item.push(item);
		digitalData.cartInfo.products = digitalData.cartInfo.products + ';' + arrAllPartNumber[i] + ';;;;eVar41=' + arrAllitemType[i];
		if (i < arrAllPartNumber.length - 2) {
			digitalData.cartInfo.products = digitalData.cartInfo.products + ",";
		}
	}
	if (!isItemExist) {
		_satellite.track("cartPageLoad");
	}
	else {
		_satellite.track("cartPageEvent");
	}
}

function trackCheckoutProcess(checkout, couponId, allItemList) {
	if (checkout == 'CHECKOUT') {
		if (!isDTMEnabledFlag) return;
		var track = {};
		track.name = "shoppingcartcheckout";
	//	track.eventPathing = "D=pageName";
		track.eventPathing ="Shopping Cart:Cart";
		track.cartInfo = {};
		//Require the full products list of items in concatenated list. 
		track.cartInfo.products = allItemList;
		trackCustomObject(track);
	}
}

function trackMobileCheckoutProcess() {
	if (!isDTMEnabledFlag) {
		shoppingCartNextAction();
		return;
	}
	digitalData.item = [];
	digitalData.category.primaryCategory = 'Shopping Cart';
	digitalData.category.subcategory1 = 'Shopping Remove';
	digitalData.eventInfo.contentFinding = "";
	digitalData.eventInfo.name = 'cart checkout';
	digitalData.anchorObj = newAnchorTagForAnalytics();
	digitalData.nextAction = function() {
		shoppingCartNextAction();
	};
	_satellite.track("cartCheckout");
}

/*function trackMobileRemovableProduct(removepartNumber, removeitemType) {
	if (!isDTMEnabledFlag) {
		shoppingCartNextAction();
		return;
	}
	digitalData.item = [];
	digitalData.eventInfo.contentFinding = "";
	digitalData.eventInfo.name = 'cart remove';
	s.forcedLinkTrackingTimeout = 5000;
	digitalData.cartInfo.products = "";
	var arrPartNumber = new Array();
	var arritemType = new Array();
	arrPartNumber = removepartNumber;
	arritemType = removeitemType;
	digitalData.category.primaryCategory = 'Shopping Cart';
	digitalData.category.subcategory1 = 'Shopping Cart Remove';
	for (i = 0; i < arrPartNumber.length; i++) {
		var item = {};
		item.sku = arrPartNumber[i];
		item.productType = arritemType[i];
		item.quantity = '';
		item.price = '';
		digitalData.item.push(item);
		digitalData.cartInfo.products = digitalData.cartInfo.products + ';' + arrPartNumber[i] + ';;;;eVar41=' + arritemType[i];
		if (i < arrPartNumber.length - 1) {
			digitalData.cartInfo.products = digitalData.cartInfo.products + ",";
		}
	}
	digitalData.anchorObj = newAnchorTagForAnalytics();
	digitalData.nextAction = function() {
		shoppingCartNextAction();
	};
	_satellite.track("cartRemoval");
}*/

function shoppingCartNextAction() {
	document.shopping.submit();
}

function trackSCPaymentSummary(paymentSummaryInfoObj) {
	if (!isDTMEnabledFlag) return;
	var sitePlatFrm = paymentSummaryInfoObj.sitePlatform;
	if (sitePlatFrm == "normal") {
		sitePlatFrm = "full";
	}
	var langCd = paymentSummaryInfoObj.langCd;
	if (langCd == '') {
		langCd = 'en';
	}
	var currentUrl = getCleanPageURL();
	digitalData.eventInfo.contentFinding = "";
	digitalData.userInfo.fslVisitorID = getAdobeCookie("freescale_visitor_id");
	digitalData.siteInfo.sitePlatform = sitePlatFrm;
	digitalData.siteInfo.lang = langCd.toLowerCase();
	digitalData.pageInfo.localTitle = paymentSummaryInfoObj.scTitle;
	digitalData.pageInfo.pageName = paymentSummaryInfoObj.scPageName;
	digitalData.pageInfo.siteSection1 = paymentSummaryInfoObj.scChannel;
	digitalData.pageInfo.pageType = paymentSummaryInfoObj.scPageName;
	digitalData.eventInfo.name = 'Cart Payment Page';
	if (paymentSummaryInfoObj.scCouponId.length != 0) {
		digitalData.couponCode = 'Coupon#' + paymentSummaryInfoObj.scCouponId;
	}
	//digitalData.pageInfo.pageEventPathing = "D=pageName";
	digitalData.pageInfo.pageEventPathing = paymentSummaryInfoObj.scPageName;
	digitalData.pageInfo.pageURLClean = currentUrl;
	_satellite.track("cartPageLoad");
	digitalData.eventInfo.contentFinding = "";
}

function trackSCOrderConfirmation(orderConfirmInfoObj) {
	if (!isDTMEnabledFlag) return;
	var sitePlatFrm = orderConfirmInfoObj.sitePlatform;
	if (sitePlatFrm == "normal") {
		sitePlatFrm = "full";
	}
	var langCd = orderConfirmInfoObj.langCd;
	if (langCd == '') {
		langCd = 'en';
	}
	var currentUrl = getCleanPageURL();
	var arrPartNumber = orderConfirmInfoObj.scPartNumLst.split(",");
	var arrQty = orderConfirmInfoObj.scQty.split(",");
	var arrTotal = orderConfirmInfoObj.scTotalPrice.split(",");
	digitalData.price = {};
	digitalData.profile = {};
	digitalData.profile.address = {};
	digitalData.item = [];
	digitalData.eventInfo.contentFinding = "";
	digitalData.userInfo.fslVisitorID = getAdobeCookie("freescale_visitor_id");
	digitalData.siteInfo.sitePlatform = sitePlatFrm;
	digitalData.siteInfo.lang = langCd.toLowerCase();
	digitalData.pageInfo.localTitle = orderConfirmInfoObj.scTitle;
	digitalData.pageInfo.pageName = orderConfirmInfoObj.scPageName;
	digitalData.pageInfo.siteSection1 = orderConfirmInfoObj.scChannel;
	digitalData.pageInfo.pageType = orderConfirmInfoObj.scPageName;
	if (orderConfirmInfoObj.scCouponId.length != 0) {
		digitalData.couponCode = 'Coupon#' + orderConfirmInfoObj.scCouponId;
	}
	digitalData.cartInfo.products = "";
	for (i = 0; i < arrPartNumber.length - 1; i++) {
		var item = {};
		item.price = {};
		item.productInfo = {};
		item.price.basePrice = arrTotal[i];
		item.productInfo.sku = arrPartNumber[i];
		item.quantity = arrQty[i];
		digitalData.item.push(item);
		digitalData.cartInfo.products = digitalData.cartInfo.products + ';' + arrPartNumber[i] + ';' + arrQty[i] + ';' + arrTotal[i];
		if (i < arrPartNumber.length - 2) {
			digitalData.cartInfo.products = digitalData.cartInfo.products + ",";
		}
	}
	digitalData.transactionID = orderConfirmInfoObj.scOrderNumber;
	digitalData.price.shippingMethod = orderConfirmInfoObj.scPaymentMethod;
	digitalData.price.shippingMode = orderConfirmInfoObj.scShippingMode;
	digitalData.profile.address.postalCode = orderConfirmInfoObj.scZip;
	digitalData.profile.address.stateProvince = orderConfirmInfoObj.scState;
	digitalData.profile.address.country = orderConfirmInfoObj.scBillingCountryAddr;
	digitalData.eventInfo.name = 'Purchase';
	//digitalData.pageInfo.pageEventPathing = "D=pageName";
	digitalData.pageInfo.pageEventPathing = orderConfirmInfoObj.scPageName;
	digitalData.pageInfo.pageURLClean = currentUrl;
	_satellite.track("cartPageLoad");
	digitalData.eventInfo.contentFinding = "";
}

function trackRemovableProduct(removepartNumber, removeitemType) {
	if (!isDTMEnabledFlag) return;
	var track = {};
	track.name = "shoppingcartremove";
	//track.eventPathing = "D=pageName";
	track.eventPathing = "Shopping Cart:Cart";
	track.cartInfo = {};
	track.cartInfo.products = "";
	var arrPartNumber = new Array();
	var arritemType = new Array();
	arrPartNumber = removepartNumber;
	arritemType = removeitemType;
	for (i = 0; i < arrPartNumber.length; i++) {
		track.cartInfo.products = track.cartInfo.products + ';' + arrPartNumber[i] + ';;;;eVar41=' + arritemType[i];
		if (i < arrPartNumber.length - 1) {
			track.cartInfo.products = digitalData.cartInfo.products + ",";
		}
	}
	digitalData.anchorObj = newAnchorTagForAnalytics();
	digitalData.nextAction = function() {
		shoppingCartNextAction();
	};
	trackCustomObject(track);
}

function trackAnalyticsEvaluationBtn(url) {
	trackDownloadAnalyticsCommon(url, true);
}

function setAddCartLocAnalyticsCookie() {
	if (isDTMEnabledFlag) {
		setSessionCookie('_sc_addToCartLocation', digitalData.pageInfo.pageName, true);
	}
}

function trackKeywordSrchExitLink(thirdpartyurl) {
	if (typeof s_account != 'undefined') {
		var s1 = s_gi(s_account);
		s1.eVar1 = "";
		s1.linkTrackVars = 'channel,prop1,prop2,prop3,prop6,prop8,prop9,prop10,prop11,prop13,prop14,prop16,prop18,prop21,eVar1,eVar2,eVar3,eVar4,eVar5,eVar6,eVar15,eVar16,eVar17,eVar18,eVar19,eVar20,eVar21,eVar34,eVar35,eVar38,eVar39,eVar48,eVar51,eVar52,eVar53';
		s1.prop16 = "exit:" + thirdpartyurl;
		s1.eVar1 = "Keyword Search";
		s1.eVar16 = thirdpartyurl;
		s1.tl(this, 'e', thirdpartyurl);
		s1.eVar1 = s1.prop16 = s1.eVar16 = "";
	}
}

function trimForAnalytics(strVal) {
	strVal = strVal.replace(/^\s+|\s+$/g, '');
	return strVal;
}

function remProtocolFrmUrl(strUrl) {
	var str1 = strUrl
	var patt = /[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|cn|io|html|live|COM|ORG|NET|MIL|EDU|CN|IO|HTML)/;
	var res = patt.test(str1);
	if (res == true) {
		var wotprotocol = /^((https?|ftp):\/\/|\/\/|\/)/;
		var res = str1.replace(wotprotocol, '');
		return res;
	}
	else {
		var host = window.location.host + str1;
		return host;
	}
}

function newAnchorTagForAnalytics() {
	var anchorTag = document.createElement('a');
	anchorTag.setAttribute('href', "/anchordummylink/");
	return anchorTag;
}

function getPageURLForAnalytics(pageURL, cleanUpURL) {
	var staticPageURL = "";
	if (pageURL != null && pageURL != '') {
		staticPageURL = pageURL;
	}
	else {
		if (cleanUpURL) {
			staticPageURL = document.URL.split("?")[0];
			staticPageURL = removeLangFromURL(staticPageURL);
		}
		else {
			staticPageURL = document.URL;
		}
	}
	return staticPageURL;
}

function getCleanURL(href) {
	var cleanURL = href;
	var code = getQryParamForAnalytics(cleanURL, 'code');
	var colCode = getQryParamForAnalytics(cleanURL, 'colCode');
	var partNum = getQryParamForAnalytics(cleanURL, 'PART_NUMBER');
	var partNum1 = getQryParamForAnalytics(cleanURL, 'partnumber');
	var partnerId = getQryParamForAnalytics(cleanURL, 'partnerId');
	var searchLabel = getQryParamForAnalytics(cleanURL, 'searchLabel');
	var packageId = getQryParamForAnalytics(cleanURL, 'packageId');
	var cleanURL = cleanURL.split("?")[0];
	cleanURL = cleanURL.replace("http://", "");
	cleanURL = cleanURL.replace("https://", "");
	var wa_siteType = analyticsSiteType(cleanURL);
	if (wa_siteType != '') {
		cleanURL = removeLangFromURL(cleanURL);
		cleanURL = replaceCacheUrlDomain(cleanURL);
		if (wa_siteType == 'regional') cleanURL = replaceRegionalSiteDomain(cleanURL);
		if (code != null && code != "") cleanURL = cleanURL + '?code=' + code;
		if (colCode != null && colCode != "") cleanURL = cleanURL + '?colCode=' + colCode;
		if (partNum != null && partNum != "") cleanURL = cleanURL + '?PART_NUMBER=' + partNum;
		if (partNum1 != null && partNum1 != "") cleanURL = cleanURL + '?partnumber=' + partNum1;
		if (partnerId != null && partnerId != "") cleanURL = cleanURL + '?partnerId=' + partnerId;
		if (searchLabel != null && searchLabel != "") cleanURL = cleanURL + '?searchLabel=' + code;
		if (packageId != null && packageId != "") cleanURL = cleanURL + '?packageId=' + code;
	}
	else {
		//Do not clean 3rd Party URL
		cleanURL = href;
	}
	return cleanURL;
}

function getUrlFromElement($element) {
	var href = "";
	if (typeof $element.attr('data-url') != 'undefined' && $element.attr('data-url') != '') href = $element.attr('data-url');
	else if (typeof $element.attr('href') != 'undefined' && $element.attr('href') != '#' && $element.attr('href') != '') href = $element.attr('href');
	else if (typeof $element.attr('data-title') != 'undefined' && $element.attr('data-title') != '#' && $element.attr('data-title') != '') href = $element.attr('data-title');
	return href;
}

function getCleanUrlFromElement($element) {
	var href = getUrlFromElement($element);
	href = getFullUrl(href);
	href = getCleanURL(href);
	return href;
}

function getCleanUrlFromUrl(url) {
	var href = getFullUrl(url);
	href = getCleanURL(href);
	return href;
}

function getFullUrl(href) {
	hrefTemp = href.trim();
	if (hrefTemp.indexOf("http://") != 0 && hrefTemp.indexOf("https://") != 0) { //no protocol
		if (hrefTemp.indexOf("//") != 0) {
			if (hrefTemp.indexOf(window.location.host) != 0) { //no protocol & no host
				if (href.indexOf("/") != 0) //no protocol & no host & no absolute path
					href = window.location.href + "/" + hrefTemp;
				else //no protocol & no host & absolute path
					href = window.location.protocol + "//" + window.location.host + hrefTemp;
			}
			else //no protocol but host is present
				href = window.location.protocol + "//" + hrefTemp;
		}
		else href = window.location.protocol + hrefTemp;
	}
	else { //the url is already full url
		href = hrefTemp;
	}
	return href;
}

function updateStandardVariablesForURL() {
	var thisURL = document.URL;
	thisURL = thisURL.split("?")[0];
	if (thisURL.indexOf("contact.freescale.com") > -1) {
		sa_pageNamePrefix = 'Eloqua HS: ';
		sa_pageType = 'Eloqua Hypersites';
		sa_pageChannel = 'Eloqua Hypersites';
	}
}

function trackSoftwareCenterAnalytics(var57, var58) {
	digitalData.eventInfo = {};
	digitalData.eventInfo.name = 'event';
	digitalData.pageInfo.pageLoadRule = 'Software Search';
	digitalData.eventInfo.pageAction = var57;
	digitalData.eventInfo.pageSubaction = var58;
}

function trackInLineSearchAnalytics(keyword, count) {
	keyword = $.trim(keyword);
	var keywordRemoved = false;
	var tab = '';
	if (typeof trackOptions == 'undefined') trackOptions = {};
	trackOptions.search = {};
	trackOptions.search.resultCount = count;
	if (typeof digitalData.pageInfo.pageTab != 'undefined') {
		tab = getFriendlyTabName(digitalData.pageInfo.pageTab) + ' tab: ';
	}
	if (keyword != "") {
		trackOptions.search.searchkeyword = trackOptions.pageSubaction = keyword;
		trackOptions.eventPathing = trackOptions.pageAction = tab + "Filter search applied";
		trackOptions.name = 'searchEvent';
	}
	else {
		trackOptions.eventPathing = trackOptions.pageAction = tab + "Filter search removed";
		keywordRemoved = true;
		trackOptions.name = 'searchEvent';
	}
	trackCustomObject(trackOptions);
//	if (keywordRemoved) s.prop4 = s.eVar50 = "";
}

function trackCommunitySearch(keyword) {
	digitalData.eventInfo = {};
	if (typeof digitalData.searchInfo == "undefined") digitalData.searchInfo = {};
	digitalData.eventInfo.name = "Communities Search";
	digitalData.searchInfo.searchkeyword = keyword;
	_satellite.track("trackCommunitySearch");
	digitalData.eventInfo.searchInfo = "";
}

function trackdistyPopup(evnt, opn, orderingcode, action, subAction, url, distributor, region) {
	if (!isDTMEnabledFlag) {
		isDTMEnabledFlag = isDTMEnabled();
		if (!isDTMEnabledFlag) return;
	}
	var track = {};
	
	
	if (evnt == 'page') {
		track.eventPageName = track.eventAssetid = track.eventlocalTitle = track.eventPathing = 'Shopping Cart:Distributors | ' + opn;
		track.eventSiteSection1 = "Shopping Cart";
		track.eventPageType = "Shopping Cart:Distributors";
		track.eventOrderingCode = orderingcode;
		track.eventCategory = "DISTRIBUTOR POPUP";
		track.call = 'page';
		track.pageActionContentFinding = getContentFindingFromCurrentPage();
		track.eventValues = 'None';
		if (typeof _satellite.getVar("pageCategory") != 'undefined')
			if (_satellite.getVar("pageCategory") == 'PART DETAILS') track.pageActionSubContentFinding = 'Part Details : Buy Options Section';
	}
	else {
		track.pageAction = track.eventPathing = action;
		track.pageSubaction = subAction;
        track.targetOPN=opn;
		track.targetURL = url; 
		track.distyRegionName = region; 
		track.distributorName = distributor;
		
		if (evnt == 'orderButton') 
		track.name = 'OrderButtonClick';
		track.modalName = 'Order From Distributors';
        track.call = "exit";
		track.eventPathing = "exit:" + url; 
		track.destinationContentFinding = getContentFinding(document.URL, url, true); 
		track.destinationSubContentFinding = action; 
		track.eventAssetid = url; 
		trackCustomObject(track); 
		track.call = "event";
		track.eventPathing = action;
		track.eventAssetid='';
		
	}
	trackCustomObject(track);
}

function getSubContentFinding($element) {
	if (typeof $element == 'undefined' || $element == null) return "";
	var subContentFinding = "";
	var $parentDiv = null;
	var tabName = "";
	if (typeof digitalData != 'undefined' && typeof digitalData.pageInfo != 'undefined' && typeof digitalData.pageInfo.pageTab != 'undefined') tabName = getFriendlyTabName(digitalData.pageInfo.pageTab);
	if ($element.hasClass("dtmAssetClick")) return tabName + " tab";
	$parentDiv = getParentDiv($element, "div.dtmGenAbstract");
	if ($parentDiv != null) return "Sectional Navigation Abstract";
	$parentDiv = getParentDiv($element, "div.dtmSection, div.dtmCommonSection, div.dtmCommonSectionTabs, section.dtmCommonSectionTabs, ul.dtmGroupSection, td.dtmTableData, div.dtmOrderButton, div.dtmButton, div.dtmGenDiv, p.dtmGenDiv, div.dtmGenGroup, p.dtmGenGroup,table.dtmTable,div.dtmonebox,li.dtmGenDiv,td.dtmOrderSampleClick,p.dtmSearchResult,ul.distynet-items");
	if ($parentDiv != null) {
		if ($parentDiv.hasClass("dtmCommonSectionTabs")) {
			var section = $parentDiv.attr("data-dtmsectionname");
			if (typeof section != "undefined" && section == "Recommended Documentation") return tabName + " tab: Featured Section";
			else return tabName + " tab";
		}
		else if ($parentDiv.hasClass("dtmTable")) {
			var section = $parentDiv.attr("data-dtmtablename");
			if (typeof section != "undefined" && section == "Recommended Documentation") return tabName + " tab: Featured Section";
			else return tabName + " tab";
		}
		else if ($parentDiv.hasClass("dtmCommonSection")) {
			if (tabName != null && tabName != "") return tabName + " tab: " + $parentDiv.attr("data-dtmName");
			else return digitalData.pageInfo.pageType + ": " + $parentDiv.attr("data-dtmName");
		}
		else if ($parentDiv.hasClass("dtmTableData")) {
			if (tabName != "" && getPageCategory() != "TAXONOMY") return tabName + " tab";
			else {
				var $parentTable = $parentDiv.parents("table.dtmTable").first();
				var tableName = $parentTable.attr("data-dtmtablename");
				if (typeof tableName != 'undefined' && tableName != null && tableName != "") return tableName + " Table";
				else {
					tableName = $parentDiv.attr("data-dtmname");
					if (typeof tableName != 'undefined' && tableName != null && tableName != "") return tableName + " Table";
				}
			}
		}
		else if ($parentDiv.hasClass("dtmOrderButton")) {
			var $parentTable = $parentDiv.parents("table.dtmTable").first();
			if ($parentTable != null) {
				var tableName = $parentTable.attr("data-dtmtablename");
				if (typeof tableName != 'undefined' && tableName != null && tableName != "") return tableName + " Table";
			}
		}
		else if ($parentDiv.hasClass("dtmButton")) {
			var $buttonDiv = $element.parents("div").first();
			if ($buttonDiv != null) {
				var buttonName = $buttonDiv.attr("data-dtmname");
				if (typeof buttonName != 'undefined' && buttonName != null && buttonName != "") return buttonName;
			}
		}
		else if ($parentDiv.hasClass("dtmGenDiv")) {
			var $genDiv = $element.parents("div").first();
			if ($genDiv != null) {
				var genDivName = $genDiv.attr("data-dtmsection");
				if (typeof genDivName != 'undefined' && genDivName != null && genDivName != "") {
					return genDivName;
				}
				else {
					$genDiv = $element.parents("p").first();
					if ($genDiv != null) {
						var genDivName = $genDiv.attr("data-dtmsection");
						if (typeof genDivName != 'undefined' && genDivName != null && genDivName != "") return genDivName + " Click";
						else {
							$genDiv = $element.parents("li").first();
							var genDivName = $genDiv.attr("data-dtmsection");
							if (typeof genDivName != 'undefined' && genDivName != null && genDivName != "") return genDivName + " Click";
						}
					}
				}
			}
		}
		else if ($parentDiv.hasClass("dtmGenGroup")) {
			if ($parentDiv.attr("data-dtmlocation") == "Right Column") {
				digitalData.searchInfo.searchResultPosition = "0";
			}
			else {
				digitalData.searchInfo.searchResultPosition = "1";
			}
			return "Rich Media Snippet";
		}
		else if ($parentDiv.hasClass("dtmonebox")) {
			return "One Box";
		}
		else if ($parentDiv.hasClass("dtmOrderSampleClick")) {
			var sampleClick = $parentDiv.attr("data-dtmsection");
			return sampleClick + ' click';
		}
		else if ($parentDiv.hasClass("dtmSearchResult")) {
			var ClickValue = $parentDiv.attr("data-dtmsection");
			return ClickValue + ' click';
		}
		else if ($parentDiv.hasClass("distynet-items")) {
			if (typeof $parentDiv.attr("data-content-subfinding") != 'undefined') {
				return $parentDiv.attr("data-content-subfinding");
			}
			else {
				return "";
			}
		}
		else return $parentDiv.attr("data-dtmName");
	}
	if ($element.hasClass("dtmAnchor") || $element.hasClass("dtmGenLink")) {
		var subconf = $element.attr("data-dtmsubfinding");
		if (typeof subconf != 'undefined') return subconf;
		else return "";
	}
	else if ($element.hasClass("dataSheet")) {
		if (tabName = 'Buy_Parametric_Tab') {
			return 'Parametric Search - View Datasheet(s)';
		}
		else if (typeof digitalData.pageInfo != 'undefined' && typeof digitalData.pageInfo.pageTab != 'undefined' && (digitalData.pageInfo.pageCategory == 'Taxonomy' || digitalData.pageInfo.pageCategory == 'PARAMETRIC SEARCH')) {
			return 'Parametric Search - View Datasheet(s)';
		}
		else {
			return "";
		}
	}
	else if ($element.hasClass("dtmcustomrulelink") || $element.parents(".dtmcustomrulelink").first().hasClass("dtmcustomrulelink")) {
		$parentDiv = $element.parents(".dtmcustomrulelink").first();
		if (typeof $element.attr("data-content-subfinding") != 'undefined') {
			return $element.attr("data-content-subfinding");
		}
		else if (typeof $parentDiv.attr("data-content-subfinding") != 'undefined') {
			return $parentDiv.attr("data-content-subfinding");
		}
		else if (typeof $element.attr("data-dtmpathing") != 'undefined') {
			return $element.attr("data-dtmpathing");
		}
		else if (typeof $parentDiv.attr("data-dtmpathing") != 'undefined') {
			return $parentDiv.attr("data-dtmpathing");
		}
		else if (typeof $element.attr("data-dtmaction") != 'undefined') {
			return $element.attr("data-dtmaction");
		}
		else if (typeof $parentDiv.attr("data-dtmaction") != 'undefined') {
			return $parentDiv.attr("data-dtmaction");
		}
		else {
			return "";
		}
	}
	return subContentFinding;
}

function getParentDiv($element, parentClass) {
	var $parentDiv = $element.parents(parentClass).first();
	if ($parentDiv.length == 0) return null;
	return $parentDiv;
}

function getFriendlyTabName(tabName) {
	switch (tabName) {
		case "Documentation_Tab":
			return "Documentation";
		case "Training_Support_Tab":
			return "Training & Support";
		case "Design_Support_Tab":
			return "Training & Support";
		case "Design_Tools_Tab":
			return "Software & Tools";
		case "Hardware_Tab":
			return "Hardware & Tools";
		case "Package_Quality_Tab":
			return "Package and Quality";
		case "In-Depth_Tab":
			return "In-Depth";
		default:
			return tabName;
	}
}

function setCookiesForDownload(isShortUrl) {
	if (isShortUrl) {
		setSessionCookie('_sc_parent_sc_eVar16', digitalData.eventInfo.assetID);
		setSessionCookie('_sc_parent_sc_eVar17', digitalData.siteInfo.sitePlatform);
		setSessionCookie('_sc_parent_sc_eVar18', digitalData.siteInfo.lang);
		setSessionCookie('_sc_parent_sc_prop18', digitalData.pageInfo.nodeID);
		setSessionCookie('_sc_parent_sc_pageURL', digitalData.pageInfo.pageURLClean);
//		setAdobeCookie('parent_sc_pageReferrer', s.referrer);
		setSessionCookie('_sc_parent_sc_pageReferrer', document.referrer);
	}
	setSessionCookie('_sc_doc_nodeid', digitalData.pageInfo.nodeID);
	setSessionCookie('_sc_parent_sc_channel', digitalData.pageInfo.siteSection1);
	setSessionCookie('_sc_parent_sc_prop1', digitalData.pageInfo.pageType);
	setSessionCookie('_sc_parent_sc_prop2', digitalData.pageInfo.siteSection2);
	setSessionCookie('_sc_parent_sc_prop3', digitalData.pageInfo.siteSection3);
//	setAdobeCookie('parent_sc_prop6', s.prop6);
	setSessionCookie('_sc_parent_sc_prop6', digitalData.pageInfo.previousPageName);
	setSessionCookie('_sc_parent_sc_prop8', digitalData.pageInfo.siteSection4);
	setSessionCookie('_sc_parent_sc_prop9', digitalData.pageInfo.siteSection5);
	setSessionCookie('_sc_parent_sc_prop10', digitalData.pageInfo.siteSection6);
	setSessionCookie('_sc_parent_sc_prop11', digitalData.pageInfo.siteSection7);
	setSessionCookie('_sc_parent_sc_prop21', digitalData.pageInfo.pageName);
	setSessionCookie('_sc_parent_sc_prop23', digitalData.pageInfo.pageTemplate);
	setSessionCookie('_sc_parent_sc_eVar1', digitalData.eventInfo.contentFinding);
	setSessionCookie('_sc_parent_subContentFinding', digitalData.eventInfo.subContentFinding);
//	setAdobeCookie('parent_sc_eVar2', s.eVar2);
	if(typeof _satellite.getVar == 'function' && typeof _satellite.getVar('searchkeywordPurchaseEvent') == 'string')
	setSessionCookie('_sc_parent_sc_eVar2', _satellite.getVar('searchkeywordPurchaseEvent'));
//	setAdobeCookie('parent_sc_eVar3', s.eVar3);
	if(typeof _satellite.getVar == 'function' && typeof _satellite.getVar('internalCampaign') == 'string')
	setSessionCookie('_sc_parent_sc_eVar3', _satellite.getVar('internalCampaign'));
	setSessionCookie('_sc_parent_sc_eVar19', digitalData.pageInfo.localTitle);
	setSessionCookie('_sc_parent_sc_eVar21', digitalData.pageInfo.pageCodeID);
//	setAdobeCookie('parent_sc_eVar34', s.eVar34);
	setSessionCookie('_sc_parent_sc_eVar34', document.URL);
//	setAdobeCookie('parent_sc_eVar35', s.eVar35);
	setSessionCookie('_sc_parent_sc_eVar35', document.referrer);
	setSessionCookie('_sc_parent_sc_eVar48', digitalData.pageInfo.pageName);
	setSessionCookie('_sc_parent_sc_pageName', digitalData.pageInfo.pageName);
//	setAdobeCookie('parent_sc_sourceID', s.eVar68);
//	setAdobeCookie('parent_sc_sourceType', s.prop26);
}

function isCrossDomain(s_hrefUrl) {
	var s_domain = document.domain;
	s_domain = s_domain.replace(/^[^.]+\./g, "");
	s_hrefUrl = getFullUrl(s_hrefUrl);
	var s_hrefUrl_arr = s_hrefUrl.replace('http://', '').replace('https://', '').replace(/^[^.]+\./g, "").split(/[/?#]/);
	if (s_domain == s_hrefUrl_arr[0]) {
		return false;
	}
	return true;
}

function getURLFullDomain(s_hrefUrl) {
	s_hrefUrl = getFullUrl(s_hrefUrl);
	s_hrefUrl_arr = s_hrefUrl.replace('http://', '').replace('https://', '').split(/[/?#]/);
	return s_hrefUrl_arr[0];
}

function isFullDomainMatch(s_hrefUrl) {
	var s_domain = document.domain;
	var url = getURLFullDomain(s_hrefUrl);
	if (s_domain == url) return true;
	else return false;
}

function isgatedContentEligible(s_hrefUrl) {
	s_hrefUrl = getFullUrl(s_hrefUrl);
	if (analyticsSiteType(s_hrefUrl) == 'regional' && isFullDomainMatch(s_hrefUrl)) return true;
	else return false;
}

function wa_writeToLocalStorage(name, object) {
	if (typeof JSON == "object" && typeof localStorage == "object") window.localStorage.setItem(name, JSON.stringify(object));
}

function wa_getLocalStorage(name) {
	if (typeof JSON == "object" && typeof localStorage == "object") {
		var obj = localStorage.getItem(name);
		jsonObject = JSON.parse(obj);
		return jsonObject;
	}
}

function removeQueryParam(url, parameter) {
	var urlValues = url.split('?');
	if (urlValues.length >= 2) {
		var baseUrl = urlValues.shift();
		var queryString = urlValues.join("?");
		var prefix = encodeURIComponent(parameter) + '=';
		var parseVal = queryString.split(/[&;]/g);
		for (var i = parseVal.length; i-- > 0;) {
			if (parseVal[i].lastIndexOf(prefix, 0) !== -1) {
				parseVal.splice(i, 1);
			}
		}
		url = baseUrl + '?' + parseVal.join('&');
	}
	return url;
}

function trackRichMediaPageView(mediaName, mediaCode, mediaAssetCode) {
	if (!isDTMEnabledFlag) return;
	digitalData.blockDiagramInfo = {};
	if (typeof trackOptions == 'undefined') trackOptions = {};
	trackOptions.call = 'page';
	trackOptions.eventPageName = 'Rich Media Component:' + mediaName + " | " + mediaCode;
	trackOptions.eventlocalTitle = 'Rich Media Component:' + digitalData.pageInfo.localTitle;
	if (digitalData.pageInfo.pageURLClean != 'undefined') trackOptions.eventAssetid = digitalData.pageInfo.pageURLClean;
	else trackOptions.eventAssetid = document.URL;
	trackOptions.eventPageType = "Rich Media Component";
	//trackOptions.eventPathing = "D=pageName";
	trackOptions.eventPathing = 'Rich Media Component:' + mediaName + " | " + mediaCode;
	digitalData.blockDiagramInfo.childCode = mediaAssetCode;
	trackOptions.pageActionContentFinding = 'browse';
	trackOptions.eventValues = 'None';
	trackCustomObject(trackOptions);
/*	s.pageName = digitalData.pageInfo.pageName;
	s.prop1 = digitalData.pageInfo.pageType;
	s.prop16 = digitalData.pageInfo.pageEventPathing;
	s.eVar16 = digitalData.pageInfo.assetID;
	s.eVar19 = digitalData.pageInfo.localTitle;*/
}

function setContentFindingForHdrSearch(searchFilter) {
	var s_extraQryParam = "";
	if (searchFilter == "") searchFilter = "All";
	searchFilter = "Search Filter: " + searchFilter;
	if (!isCrossDomain(URL_DOMAIN)) {
		setSessionCookie('_sc_contentfinding', 'Header');
		setSessionCookie('_sc_subContentFinding', searchFilter);
	}
	else {
		s_extraQryParam = "hdr=1&subcf=" + searchFilter;
	}
	return s_extraQryParam;
}

function trackGenericPageAction(action, subAction, pathing, contentFinding, subContentFinding, subcf_flg) {
	if (!isDTMEnabledFlag) return;
	var track = {};
	track.eventPathing = pathing;
	track.pageAction = action;
	track.pageSubaction = subAction;
	track.pageActionContentFinding = contentFinding;
	if (subcf_flg == 'Y') {
		track.destinationSubContentFinding = subContentFinding;
	}
	trackCustomObject(track);
}

function trackCustomAction(analyticsCallType, eventType, eventPathing, pageAction, pageSubaction, targetURL, destinationCF, destinationSubCF, pageActionCF, pageActionSubCF, keyword, resultcount, filterlist, pageNumber, searchResultPosition, formName, clearVarBefore) {
	//if (!isDTMEnabledFlag) return;
	if (!isDTMEnabledFlag) {
		isDTMEnabledFlag = isDTMEnabled();
		if (!isDTMEnabledFlag) return;
	}
	digitalData.searchInfo = {};
	digitalData.eventInfo = {};
	digitalData.formInfo = {};
	//Clear Variables prior to call
	if (typeof clearVarBefore == 'undefined') {
		clearVarBefore = false;
	}
	else if (clearVarBefore == '') {
		clearVarBefore = false;
	}
	digitalData.eventInfo.name = eventType; //Determines events and variables to set. 
	digitalData.eventInfo.eventPathing = eventPathing; //Used to Set Prop16
	digitalData.eventInfo.pageAction = pageAction; //Used to set eVar57
	digitalData.eventInfo.pageSubaction = pageSubaction; //Used  to set eVar58
	digitalData.eventInfo.targetURL = targetURL; //Used to set eVar71
	digitalData.eventInfo.pageActionContentFinding = pageActionCF; //Used to set eVar1 Page Action Content Finding, Default value is browse
	digitalData.eventInfo.pageActionSubContentFinding = pageActionSubCF; //Used to eVar63 Page Action Subcontentfinding, default value is blank
	digitalData.eventInfo.destinationContentFinding = destinationCF; //Used to set eVar1(Destination Page)
	digitalData.eventInfo.destinationSubContentFinding = destinationSubCF; //Used to set eVar63 (Destination Page) Subcontentfinding, default value is blank	
	digitalData.searchInfo.searchkeyword = keyword; // Used to set prop4
	if (resultcount == 0 && resultcount != "") {
		digitalData.searchInfo.resultCount = 'zero'; // Used to set prop5
	}
	else {
		digitalData.searchInfo.resultCount = resultcount; // Used to set prop5		
	}
	if (typeof formName != 'undefined') {
		digitalData.formInfo.formName = formName;
	}
	digitalData.searchInfo.searchFilterList = filterlist; // Used to set list1
	digitalData.searchInfo.searchResultPageNumber = pageNumber; //Used to set prop42
	digitalData.searchInfo.searchResultPosition = searchResultPosition; //Used  to set eVar70
	digitalData.eventInfo.eventSitePlatform = _satellite.getVar("sitePlatform"); //set eVar17
	digitalData.eventInfo.eventLang = _satellite.getVar("siteLanguage"); //set eVar18	
	digitalData.eventInfo.eventSiteSection1 = _satellite.getVar("siteSection1");
	digitalData.eventInfo.eventSiteSection2 = _satellite.getVar("siteSection2");
	digitalData.eventInfo.eventSiteSection3 = _satellite.getVar("siteSection3");
	digitalData.eventInfo.eventSiteSection4 = _satellite.getVar("siteSection4");
	digitalData.eventInfo.eventSiteSection5 = _satellite.getVar("siteSection5");
	digitalData.eventInfo.eventSiteSection6 = _satellite.getVar("siteSection6");
	digitalData.eventInfo.eventSiteSection7 = _satellite.getVar("siteSection7");
	digitalData.eventInfo.eventPageTemplateType = _satellite.getVar("pageTemplate");
	/*if (analyticsCallType == "page") {
		_satellite.track("trackCustomPage")
	}
	else {
		_satellite.track("trackCustomPageAction")
	}*/
	if (analyticsCallType == "page") {
		_satellite.track("trackCustomPage", _satellite.getVar("XDM-trackCustomPage"));
	} else {
		_satellite.track("trackCustomPageAction", _satellite.getVar("XDM-trackCustomPageAction"));
	}
	if (!clearVarBefore) {
		//		digitalData.eventInfo.name = digitalData.eventInfo.eventPathing = digitalData.eventInfo.pageAction = digitalData.eventInfo.pageSubaction = digitalData.eventInfo.eventTargetURL = digitalData.eventInfo.pageActionContentFinding = digitalData.eventInfo.pageActionSubContentFinding = digitalData.eventInfo.destinationContentFinding = digitalData.eventInfo.destinationSubContentFinding = digitalData.searchInfo.searchkeyword = digitalData.searchInfo.resultCount = digitalData.searchInfo.resultCount = digitalData.searchInfo.searchResultPageNumber = digitalData.searchInfo.searchResultPosition = digitalData.formInfo.formName = "";
	}
}

function trackCustomObject(trackOptions) {
	try {
		//if (!isDTMEnabledFlag) return;    
		if (!isDTMEnabledFlag) {
			isDTMEnabledFlag = isDTMEnabled();
			if (!isDTMEnabledFlag) return;
		}
		if (typeof trackOptions.search == 'undefined') trackOptions.search = {};
		if (typeof trackOptions.videoOptions == 'undefined') trackOptions.videoOptions = {};
		if (typeof trackOptions.form == 'undefined') trackOptions.form = {};
		if (typeof trackOptions.adobeEmbedAPI == 'undefined') trackOptions.adobeEmbedAPI = {};
		if (typeof trackOptions.cartInfo == 'undefined') {
			trackOptions.cartInfo = {};
		}
		if (typeof trackOptions.bypassclear == 'undefined') {
			trackOptions.bypassclear = false;
		}
		if (typeof trackOptions.ignorePageAction == 'undefined') trackOptions.ignorePageAction = false;
		//Check for Download Clicks
		if ((typeof trackOptions.targetURL != 'undefined' || typeof trackOptions.downloadURLClean != 'undefined') && trackOptions.enableDwnldTracking != 'undefined') {
			if (trackOptions.enableDwnldTracking) {
				var downloadType;
				var shortURL;
				if (typeof trackOptions.dwnldType != 'undefined') downloadType = trackOptions.dwnldType;
				else downloadType = getAnalyticsDownloadType(trackOptions.targetURL);
				if (typeof trackOptions.downloadURLClean != 'undefined') shortURL = isShortURL(trackOptions.downloadURLClean)
				else shortURL = isShortURL(trackOptions.targetURL);
				var marketLeveraged = false;
				if (downloadType != 'Not Applicable' || shortURL || marketLeveraged) {
					if (typeof trackOptions.dwnldOptions == 'undefined') trackOptions.dwnldOptions = {};
					trackOptions.dwnldOptions.downloadType = downloadType;
					trackOptions.dwnldOptions.marketLeveraged = marketLeveraged;
					if (typeof trackOptions.dwnldAssetID != 'undefined') trackOptions.dwnldOptions.downloadAssetID = trackOptions.dwnldAssetID
					else trackOptions.dwnldOptions.downloadAssetID = getFullUrl(trackOptions.targetURL);
					trackOptions.dwnldOptions.shortURL = shortURL;
					if (typeof trackOptions.dwnldAccessedDirectly != 'undefined') trackOptions.dwnldOptions.dwnldAccessedDirectly = true;
					else trackOptions.dwnldOptions.dwnldAccessedDirectly = false;
					if (typeof trackOptions.destinationContentFinding == 'undefined') {
						trackOptions.destinationContentFinding = getContentFinding(document.URL, "", true);
					}
					else if (trackOptions.destinationContentFinding == '') {
						trackOptions.destinationContentFinding = getContentFinding(document.URL, "", true);
					}
					if (typeof trackOptions.dwnldEvents != 'undefined') trackOptions.dwnldOptions.dwnldEvents = trackOptions.dwnldEvents;
					else trackOptions.dwnldOptions.dwnldEvents = '';
					if (typeof trackOptions.dwnldPathing != 'undefined') {
						trackOptions.dwnldOptions.dwnldPathing = trackOptions.dwnldPathing;
					}
					else {
						trackOptions.dwnldOptions.dwnldPathing = '';
					}
					if (typeof trackOptions.downloadURLClean != 'undefined') {
						trackOptions.dwnldOptions.downloadURLClean = trackOptions.downloadURLClean;
					}
					else {
						trackOptions.dwnldOptions.downloadURLClean = '';
					}
					trackAnalyticsDownload(trackOptions);
					trackOptions.dwnldOptions = {};
				}
			}
		}
		//End of Check for Download Clicks
		digitalData.eventInfo = {};
		digitalData.searchInfo = {};
		digitalData.formInfo = {};
		digitalData.videoInfo = {};
		digitalData.cartInfo = {};
		digitalData.videoEventInfo = {};
		digitalData.adobeEmbedAPI = {};
      
		var eventOptions = ['name', 'eventPathing', 'pageAction', 'pageSubaction', 'targetURL', 'pageActionContentFinding', 'pageActionSubContentFinding', 'destinationContentFinding', 'destinationSubContentFinding', 'modalName', 'distyRegionName', 'eventValues', 'eventPageTemplateType', 'eventAssetid', 'eventPageName', 'eventlocalTitle', 'eventPageType', 'eventSiteSection1', 'eventOrderingCode', 'eventCategory', 'eventTabName', 'eventSitePlatform', 'eventLang', 'eventDownloadUrl', 'eventDownloadType', 'eventPageURLClean', 'eventPageURLFull', 'pageEventValues', 'eventPageAssetID', 'eventPageActionURLFull', 'eventSiteSection2', 'eventSummaryPageType', 'eventSiteSection3', 'eventSiteSection4', 'eventSiteSection5', 'eventSiteSection6', 'eventSiteSection7', 'eventUniquePageComponent', 'exitEventPathing', 'distributorName', 'targetOPN','componentExist','eventAssetType','eventConfidentialityLevel','eventSecureAppList'];
		//Added searchResultTitle as part Analytics Refresh Project 6/27/2025
		var searchOptions = ['searchFilterList', 'searchResultPageNumber', 'searchResultPosition', 'searchkeyword', 'searchKeywordList','searchResultTitle'];
		//----------------WEBA-2657-------------------
        //var cartOptions = ['products'];
        var cartOptions = ['products','scView','scAdd','scRemove','scCheckout','scPurchase'];
        if (typeof trackOptions.cartInfo.productsArray != "undefined") {
          digitalData.cartInfo.cartInfoProductsArray = trackOptions.cartInfo.productsArray;
        }
        //----------------WEBA-2657-------------------
		var adobeEmbedAPIOptions =['adobeEmbedAPISearchTerm','adobeEmbedAPIAction','adobeEmbedAPIPageNum','adobeEmbedAPIFilename'];
		//Remove in Web SDK Phase 2 after SPA Update
		if(typeof trackOptions.eventPathing !=='undefined' && typeof trackOptions.eventPathing ==='object')
			trackOptions.eventPathing = trackOptions.eventPathing[0]
		if(typeof trackOptions.pageAction !=='undefined' && typeof trackOptions.pageAction ==='object')
			trackOptions.pageAction = trackOptions.pageAction[0];
		if(typeof trackOptions.pageSubaction !=='undefined' && typeof trackOptions.pageSubaction ==='object')
			trackOptions.pageSubaction = trackOptions.pageSubaction[0];
		//Remove in Web SDK Phase 2 after SPA Update
		//Event Info Check
		for (var i = 0; i < eventOptions.length; i++) {
			digitalData.eventInfo[eventOptions[i]] = trackOptions[eventOptions[i]] ? trackOptions[eventOptions[i]] : '';
		}
		if (digitalData.eventInfo.eventPageName == '') digitalData.eventInfo.eventPageName = _satellite.getVar("pageName");
		if (digitalData.eventInfo.eventPageURLClean == "") digitalData.eventInfo.eventPageURLClean = _satellite.getVar("pageURLClean");
		if (digitalData.eventInfo.eventPageActionURLFull == "") digitalData.eventInfo.eventPageActionURLFull = _satellite.getVar("pageURLFull");
		if (digitalData.eventInfo.eventPageURLFull == "") digitalData.eventInfo.eventPageURLFull = _satellite.getVar("pageURLFull");
		if (digitalData.eventInfo.eventlocalTitle == '') digitalData.eventInfo.eventlocalTitle = _satellite.getVar("localTitle");
		if (digitalData.eventInfo.eventPageType == '') digitalData.eventInfo.eventPageType = _satellite.getVar("pageType");
		if (digitalData.eventInfo.eventSiteSection1 == '') digitalData.eventInfo.eventSiteSection1 = _satellite.getVar("siteSection1");
		if (digitalData.eventInfo.eventSiteSection2 == '') digitalData.eventInfo.eventSiteSection2 = _satellite.getVar("siteSection2");
		if (digitalData.eventInfo.eventSiteSection3 == '') digitalData.eventInfo.eventSiteSection3 = _satellite.getVar("siteSection3");
		if (digitalData.eventInfo.eventSiteSection4 == '') digitalData.eventInfo.eventSiteSection4 = _satellite.getVar("siteSection4");
		if (digitalData.eventInfo.eventSiteSection5 == '') digitalData.eventInfo.eventSiteSection5 = _satellite.getVar("siteSection5");
		if (digitalData.eventInfo.eventSiteSection6 == '') digitalData.eventInfo.eventSiteSection6 = _satellite.getVar("siteSection6");
		if (digitalData.eventInfo.eventSiteSection7 == '') digitalData.eventInfo.eventSiteSection7 = _satellite.getVar("siteSection7");
		if (digitalData.eventInfo.eventPageTemplateType == '') digitalData.eventInfo.eventPageTemplateType = _satellite.getVar("pageTemplate");
		if (digitalData.eventInfo.eventSummaryPageType == '') digitalData.eventInfo.eventSummaryPageType = _satellite.getVar("summaryPageType");
		if (digitalData.eventInfo.eventCategory == '') digitalData.eventInfo.eventCategory = _satellite.getVar("summaryPageType");
		if (digitalData.eventInfo.eventPageAssetID == "") {
			if (digitalData.eventInfo.eventAssetid != "") digitalData.eventInfo.eventPageAssetID = digitalData.eventInfo.eventAssetid;
			else digitalData.eventInfo.eventPageAssetID = _satellite.getVar("assetID");
		}
		if (digitalData.eventInfo.eventAssetid == '') digitalData.eventInfo.eventAssetid = _satellite.getVar("assetID");
		if (digitalData.eventInfo.eventSitePlatform == "") digitalData.eventInfo.eventSitePlatform = _satellite.getVar("sitePlatform");
		if (digitalData.eventInfo.eventLang == "") digitalData.eventInfo.eventLang = _satellite.getVar("siteLanguage");
		//Search Info Check
		var resultCount = trackOptions.search.resultCount ? trackOptions.search.resultCount : '';
		for (var c = 0; c < searchOptions.length; c++) {
			digitalData.searchInfo[searchOptions[c]] = trackOptions.search[searchOptions[c]] ? trackOptions.search[searchOptions[c]] : '';
		}
		//adobeEmbedAPI Check
		for (var c = 0; c < adobeEmbedAPIOptions.length; c++) {
			digitalData.adobeEmbedAPI[adobeEmbedAPIOptions[c]] = trackOptions.adobeEmbedAPI[adobeEmbedAPIOptions[c]] ? trackOptions.adobeEmbedAPI[adobeEmbedAPIOptions[c]] : '';
		}
		if (digitalData.searchInfo.searchFilterList == '' && digitalData.searchInfo.searchkeyword == '' && digitalData.searchInfo.searchKeywordList == '') digitalData.searchInfo.resultCount = '';
		else digitalData.searchInfo.resultCount = (resultCount == 0) ? 'zero' : resultCount;
		//Form Info Check
		if (typeof trackOptions.form.formName != 'undefined') digitalData.formInfo.formName = trackOptions.form.formName;
		//Video Info Check	
		if (typeof trackOptions.videoOptions.videoPlaybackError != 'undefined') {
			digitalData.videoInfo.videoPlaybackError = trackOptions.videoOptions.videoPlaybackError;
		}
		if (typeof trackOptions.videoOptions.videoEventName != "undefined") {
			digitalData.videoEventInfo.videoName = trackOptions.videoOptions.videoEventName;
		}
		//Cart Info Check
		/*for (var c = 0; c < cartOptions.length; c++) {
			digitalData.cartInfo[cartOptions[c]] = trackOptions.cartInfo[cartOptions[c]] ? trackOptions.cartInfo[cartOptions[c]] : '';
		}*/
      	for (var c = 0; c < cartOptions.length; c++) {
          var option = cartOptions[c];	
          if (option !== "products") {
            digitalData.cartInfo[option] = (trackOptions.cartInfo[option] !== undefined) ? trackOptions.cartInfo[option].toString() : '';
          } else {
            digitalData.cartInfo[option] = trackOptions.cartInfo[option] ? trackOptions.cartInfo[option] : '';
          }
        }
		//Send Call
		if (trackOptions.call == "page") _satellite.track("trackCustomPage",_satellite.getVar("XDM-trackCustomPage"));
		else if (trackOptions.call == "exit") _satellite.track("trackCustomExit",_satellite.getVar("XDM-trackCustomExit"));
		else if( digitalData.eventInfo.eventValues == 'event46' && (digitalData.eventInfo.pageAction == 'Product Selector: Results Table View' || digitalData.eventInfo.pageAction == 'Product Selector: Results Table View - Filters Applied' || digitalData.eventInfo.pageAction == 'Product Selector: Results Table View - Direct Access') && digitalData.eventInfo.eventPageType === 'Product Summary') return; 
		else if (trackOptions.ignorePageAction == false) _satellite.track("trackCustomPageAction",_satellite.getVar("XDM-trackCustomPageAction"));
	}
	catch (error) {
		console.error(error);
	}
}

/*function getAdobeCookieHelper(cookieName) {
	return getAdobeCookie(cookieName);
}*/

function getProdview() {
	var pageCategory = getPageCategory();
	if ((pageCategory == 'PSP' || pageCategory == 'TSP' || pageCategory == 'RDSP' || pageCategory == 'SSP') && (getAdobeCookie(referrerPageCodeCookie) != getPageCodeID() && pageCategory != getAdobeCookie(referrerPageCategoryCookie))) {
		return true;
	}
	else {
		return false;
	}
}

function getAnalyticsDownloadType(href) {
	if (typeof digitalData != 'undefined' && typeof digitalData.pageInfo != 'undefined' && typeof digitalData.pageInfo.downloadType != 'undefined') {
		if (digitalData.pageInfo.downloadType != '') return digitalData.pageInfo.downloadType;
	}
	else {
		href = remProtocolFrmUrl(href);
		href_path = href.split('/');
		var baseHref = href.split("?")[0];
		baseHref = href.split("#")[0];
		var types = '.xls,.doc,.ppt,.tgz,.rar,.tar,.pdf,.txt,.csv,.zip,.exe,/External.File';
		//Check start deny list
		var deniedList = 'community.nxp.com/external-link.jspa';
		var deniedList_array = deniedList.split(',');
		var deniedList_len = deniedList_array.length;
		for (i = 0; i < deniedList_len; i++) {
			if (baseHref.indexOf(deniedList_array[i]) > -1) return 'Not Applicable';
		}
		//Check end deny list
		if (baseHref.indexOf("/webapp/Download") > -1 || (baseHref.indexOf("/webapp/secure/multiDownload") > -1)) {
			if (baseHref.indexOf("&appType=moderated") > -1) return 'Moderated';
			//else if(baseHref.indexOf("&isHTMLorPDF=HTML") > -1){
			//	return 'Restricted Document';
			//}
			else return 'Registered';
		}
		else if (baseHref.indexOf("/download/mod_download.jsp") > -1) {
			return 'Moderated';
		}
		else if (baseHref.indexOf("/download/license.jsp") > -1) {
			return 'Licensed';
		}
		else if (baseHref.indexOf("/secured/assets/documents/") > -1 || baseHref.indexOf("/secured/assets/downloads/") > -1) {
			return 'Secured Type';
		}
		else if (baseHref.indexOf("/webapp/sd/collateral/") > -1 && document.URL.indexOf("/webapp/sd/collateral/") > -1) {
			return 'Secured Document'
		}
		if (typeof href_path[1] != 'undefined') {
			if (href_path[1] == "downloads" || (href_path[1] == 'pwmxy87654' && href_path[2] == 'attachments' && (href_path[0] != 'community.nxp.com' || href_path[0] != 'community-staging.nxp.com')) ||
				//href_path[1] == "docs" && href_path[0] != "community.nxp.com") ||
				//(href_path[1] == 'docs' && (  href_path[0] != 'community.nxp.com' || href_path[0] != 'community-staging.nxp.com')) || 
				href_path[1] == 'lgfiles' || href_path[1] == 'mcds'
				// || href_path[0] == 'docs.nxp.com' 
				// || href_path[0] == 'nxp-staging.zoominsoftware.io'
				// || href_path[0] == "nxp-dev.zoominsoftware.io"
			) return 'Non-Secured';
			else if (href_path[1] == "restricted_documents") return 'Restricted Document';
			if (typeof href_path[2] != 'undefined') {
				if (href_path[1] == "assets" && (href_path[2] == 'downloads' || href_path[2] == 'documents')) return 'Non-Secured';
			}
		}
		var types_list = types.split(',');
		var len = types_list.length;
		for (i = 0; i < len; i++) {
			if (baseHref.indexOf(types_list[i]) > -1) return 'Non-Secured';
		}
		return 'Not Applicable';
	}
}

function isMarketLeveraged($anchorlink) {
	if (typeof $anchorlink != 'undefined') {
		if (typeof $anchorlink.hasClass == 'function')
			if ($anchorlink.hasClass("progressiveProfiling")) return true;
	}
	return false;
}

function isShortURL(href) {
		if (href.indexOf("fsls.co/") > -1 || href.indexOf("m-uat.freescale.com/") > -1) return true;
		else return false;
	}
	/*
	function replaceDomainforAnalytics(href){
		var DOMAIN_LIST = ['cache-uat.freescale.com','cache.nxp.com','www.freescale.com','cache.freescale.com'];
		var URL_DOMAIN_REPLACEMENT;
		if(document.domain=='uat.freescale.com')
			URL_DOMAIN_REPLACEMENT = 'uat.freescale.com';
		else
			URL_DOMAIN_REPLACEMENT = 'www.nxp.com';
		
		var len = DOMAIN_LIST.length;
		for (i=0;i<len;i++){
			var domain = DOMAIN_LIST[i];
			href = href.replace(domain, URL_DOMAIN_REPLACEMENT);
		}
		return href;
	}
	*/
function getSearchContentFinding(evt) {
	var pageCodeID = '';
	var pageCategory = '';
	if (typeof trackOptions == 'undefined') var trackOptions = {};
	if (typeof trackOptions.search == 'undefined') {
		trackOptions.search = {}
	}
	trackOptions.search.searchResultPosition = '';
	trackOptions.search.searchResultPageNumber = '';
	if (digitalData.pageInfo.pageCodeID != 'undefined') pageCodeID = digitalData.pageInfo.pageCodeID;
	if (digitalData.pageInfo.pageCategory != 'undefined') pageCategory = digitalData.pageInfo.pageCategory;
	if (pageCodeID == "ORDER_SAMPLES") {
		var $eventTarget = $(evt.target);
		trackOptions.search.searchResultPosition = $($eventTarget.closest("td.dtmOrderSampleClick")).attr("data-dtmposition");
	}
	if (pageCategory == 'KEYWORD SEARCH') {
		var $anchor_link = $(anchorEvt(evt, "A"));
		//if(typeof $anchor_link.parents('.dtmonebox').attr('data-dtmsection')=='string'){
		//	if($anchor_link.parents('.dtmonebox').attr('data-dtmsection')=='Keyword Search One Box'){
		if (typeof $anchor_link.attr('data-content-subfinding') == 'string') {
			if ($anchor_link.attr('data-content-subfinding') == "One Box") {
				trackOptions.search.searchResultPosition = '0';
				trackOptions.search.searchResultPageNumber = '1';
			}
		}
		if (typeof digitalData.searchInfo.searchkeyword != 'undefined') trackOptions.search.searchkeyword = digitalData.searchInfo.searchkeyword;
		if (typeof digitalData.searchInfo.searchFilterList != 'undefined') trackOptions.search.searchFilterList = digitalData.searchInfo.searchFilterList;
	}
	return trackOptions.search;	
}

function trackAnalyticsDownload(trackOptions) {
	//if (!isDTMEnabledFlag) return;
	if (!isDTMEnabledFlag) {
		isDTMEnabledFlag = isDTMEnabled();
		if (!isDTMEnabledFlag) return;
	}
	digitalData.dwnldInfo = {};
	digitalData.eventInfo = {};
	digitalData.searchInfo = {};
	digitalData.documentClick = true;
	if (typeof trackOptions.search == 'undefined') trackOptions.search = {};
	if (typeof trackOptions.dwnldOptions == 'undefined') trackOptions.dwnldOptions = {};
	var eventOptions = ['destinationContentFinding', 'destinationSubContentFinding', 'targetURL','eventConfidentialityLevel'];
	var searchOptions = ['searchFilterList', 'searchResultPageNumber', 'searchResultPosition', 'searchkeyword'];
	var dwnldOptions = ['downloadType', 'downloadAssetID', 'marketLeveraged', 'shortURL', 'dwnldAccessedDirectly', 'dwnldEvents', 'dwnldPathing', 'downloadURLClean'];
	for (var i = 0; i < dwnldOptions.length; i++) {
		digitalData.dwnldInfo[dwnldOptions[i]] = trackOptions.dwnldOptions[dwnldOptions[i]] ? trackOptions.dwnldOptions[dwnldOptions[i]] : '';
	}
	for (var i = 0; i < eventOptions.length; i++) {
		digitalData.eventInfo[eventOptions[i]] = trackOptions[eventOptions[i]] ? trackOptions[eventOptions[i]] : '';
	}
	for (var c = 0; c < searchOptions.length; c++) {
		digitalData.dwnldInfo["download" + searchOptions[c]] = trackOptions.search[searchOptions[c]] ? trackOptions.search[searchOptions[c]] : '';
	}
	if (digitalData.dwnldInfo.downloadsearchkeyword == '') {
		if (typeof digitalData.searchInfo.searchkeyword != 'undefined') digitalData.dwnldInfo.downloadsearchkeyword = digitalData.searchInfo.searchkeyword;
	}
	if (digitalData.dwnldInfo.downloadsearchFilterList == "") {
		if (typeof digitalData.searchInfo.searchFilterList != "undefined") digitalData.dwnldInfo.searchFilterList = digitalData.searchInfo.searchFilterList;
	}
	if (digitalData.dwnldInfo.downloadsearchResultPosition == '') {
		if (typeof digitalData.searchInfo.searchResultPosition != 'undefined') digitalData.dwnldInfo.downloadsearchResultPosition = digitalData.searchInfo.searchResultPosition;
	}
	if (digitalData.dwnldInfo.downloadsearchResultPageNumber == '') {
		if (typeof digitalData.searchInfo.searchResultPageNumber != 'undefined') digitalData.dwnldInfo.downloadsearchResultPageNumber = digitalData.searchInfo.searchResultPageNumber;
	}
	var hrefUrl;
	if (digitalData.dwnldInfo.downloadURLClean != '') hrefUrl = digitalData.dwnldInfo.downloadURLClean;
	else {
		hrefUrl = getFullUrl(digitalData.eventInfo.targetURL);
		hrefUrl = replaceCacheUrlDomain(hrefUrl);
		hrefUrl = replaceDomainforDownload(hrefUrl);
		hrefUrl = remProtocolFrmUrl(hrefUrl);
		hrefUrl = hrefUrl.split("#")[0];
	}
	if (digitalData.dwnldInfo.dwnldPathing != '') digitalData.eventInfo.eventPathing = digitalData.dwnldInfo.dwnldPathing;
	else if (digitalData.dwnldInfo.downloadType == 'Non-Secured' || digitalData.dwnldInfo.dwnldAccessedDirectly || digitalData.dwnldInfo.downloadType == "Registered" || digitalData.dwnldInfo.downloadType == "Licensed") digitalData.eventInfo.eventPathing = 'dwnld:' + hrefUrl;
	else digitalData.eventInfo.eventPathing = 'dwnld start:' + hrefUrl;
	if (digitalData.dwnldInfo.downloadType == 'Non-Secured' || (digitalData.dwnldInfo.downloadType == 'Restricted Document' && hrefUrl.indexOf('?colCode=') == -1)) {
		hrefUrl = hrefUrl.split("?")[0];
	}
	else {
		if (hrefUrl.indexOf('?') != -1) var uri = hrefUrl.split("?")[0];
		if (hrefUrl.indexOf('?') != -1) hrefUrl = uri + '?colCode=' + getQryParamForAnalytics(hrefUrl, 'colCode');
	}
	if (digitalData.dwnldInfo.downloadURLClean == '') digitalData.dwnldInfo.downloadURLClean = hrefUrl;
	if (typeof digitalData.dwnldInfo.shortURL != 'undefined') {
		if (digitalData.dwnldInfo.shortURL) {
			setCookiesForDownload(true);
			return;
		}
	}
	if (digitalData.dwnldInfo.marketLeveraged) {
		digitalData.dwnldInfo.downloadType = 'Marketing Leveraged';
	}
	if (digitalData.dwnldInfo.downloadType == 'Non-Secured' || digitalData.dwnldInfo.downloadType == 'Restricted Document' || digitalData.dwnldInfo.downloadType == 'Marketing Leveraged' || digitalData.dwnldInfo.downloadType == 'Moderated' || digitalData.dwnldInfo.dwnldAccessedDirectly || digitalData.eventInfo.destinationSubContentFinding == 'Predownload Page - Download Button Link Click') {
		_satellite.track("trackDownloadAnalytics",_satellite.getVar("XDM-trackDownloadAnalytics"));
	}
	else if (digitalData.dwnldInfo.downloadType == 'Registered' || digitalData.dwnldInfo.downloadType == 'Licensed') {
		_satellite.track("trackSecDownloadInitiate",_satellite.getVar("XDM-trackSecDownloadInitiate"));
	}
	if (typeof _elq == "object") {
		_elq.trackEvent(digitalData.dwnldInfo.downloadAssetID, '', document.referrer);
	}
	//digitalData.eventInfo = digitalData.dwnldInfo = {};
/*	if (typeof digitalData.pageInfo.assetID != 'undefined') s.eVar16 = digitalData.pageInfo.assetID;
	else s.eVar16 = '';*/
}

function setContentFindingBasicHeaderSearch() {
	var s_extraQryParam = "";
	if (typeof URL_DOMAIN == 'undefined') return;
	if (!isCrossDomain(URL_DOMAIN)) {
		setSessionCookie('_sc_contentfinding', 'Header');
		setSessionCookie('_sc_subContentFinding', 'Header: Search');
	}
	else {
		s_extraQryParam = "hdr=1&subcf=" + 'Header: Search';
	}
	return s_extraQryParam;
}

function setAnalyticsCrossDomainCookies(target_url, obj) {
	var siteType = analyticsSiteType(document.domain)
	if (siteType == '') return; //Not Valid Site
	target_url = getFullUrl(target_url);
	target_url = target_url.split("?")[0];
	target_url = target_url.split("#")[0];
	var dom = '';
	var dom_clean = '';
	var len;
	var cookie_url;
	var wa_tracked_domain = ["uat.freescale.com", "uat.nxp.com.cn", "www.nxp.com.cn", "uat.nxp.com", ".nxp.com"]
		//check for microsite domains
	len = wa_microsite_domains.length;
	for (i = 0; i < len; i++) {
		dom = wa_microsite_domains[i];
		if (target_url.indexOf(dom) > -1) dom_clean = dom;
	}
	if (dom_clean == '') {
		len = wa_tracked_domain.length;
		for (i = 0; i < len; i++) {
			dom = wa_tracked_domain[i];
			if (target_url.indexOf(dom) > -1) {
				dom_clean = dom;
				if (dom_clean == ".nxp.com") dom_clean = "www.nxp.com";
				break;
			}
		}
	}
	/*
	//Check for tracked domain
	len = wa_ecom_domains.length;
	for (i=0;i<len;i++){
		dom = wa_ecom_domains[i];
		if(target_url.indexOf(dom) >-1){
			dom_clean=dom;
			if(dom_clean=='store-uat.nxp.com')
				dom_clean=dom_clean.replace('store-uat','uat');
			else if(dom_clean='store.nxp.com')
				dom_clean=dom_clean.replace('store','www');
		}
	}
	//check for regionalization domain
	if(dom_clean ==''){
		len = wa_regional_site_domains.length;
		for (i=0;i<len;i++){
			dom = wa_regional_site_domains[i];
			if(target_url.indexOf(dom) >-1)
				dom_clean= dom;
		}
	}	
	//check for microsite domains
	if(dom_clean == ''){
		len = wa_microsite_domains.length;
		for (i=0;i<len;i++){
			dom = wa_microsite_domains[i];
			if(target_url.indexOf(dom) >-1)
				dom_clean= dom;
		}
	}
	*/
	if (dom_clean != '' && typeof obj == 'object') {
		if (dom_clean != 'uat.nxp.co.kr' && dom_clean != 'uat.freescale.com') {
			cookie_url = "https://" + dom_clean + '/webapp/common/WAUtil.sp?';
			//console.log("Set cookies in " + "https://" + dom_clean + '/webapp/common/WAUtil.sp?');
			if (typeof obj.cf != 'undefined') cookie_url = cookie_url + '&cf=' + encodeURIComponent(obj.cf);
			if (typeof obj.subcf != 'undefined') cookie_url = cookie_url + '&subcf=' + encodeURIComponent(obj.subcf);
			if (typeof obj.srchkywd != 'undefined') cookie_url = cookie_url + '&srchkywd=' + encodeURIComponent(obj.srchkywd);
			if (typeof obj.srchpos != 'undefined') cookie_url = cookie_url + '&srchpos=' + encodeURIComponent(obj.srchpos);
			if (typeof obj.srchfilter != 'undefined') cookie_url = cookie_url + '&srchfilter=' + encodeURIComponent(obj.srchfilter);
			if (typeof obj.sclocation != 'undefined') cookie_url = cookie_url + '&sclocation=' + encodeURIComponent(obj.sclocation);
			//console.log("cookie_url value is" + cookie_url);
			$.ajax({
				url: cookie_url,
				crossDomain: true,
				xhrFields: {
					withCredentials: true
				},
				success: function(data) {
					//	console.log("Ajax call fired"+data);
				},
				async: false
			});
		}
	}
	else return false;
	return true;
}

function readAnalyticsCrossDomainCookies(cookie_val) {
	var next_action = getAdobeCookie("WA_NEXT_ACTION");
	//console.log("next_action: " + next_action);
	if (next_action == "" || typeof cookie_val == 'undefined') return "";
	var next_action_array = next_action.split('||');
	var len = next_action_array.length;
	var val = "";
	cookie_val = cookie_val + '::';
	//console.log("cookie_val: " + cookie_val);	
	for (i = 0; i < len; i++) {
		if (next_action_array[i].indexOf(cookie_val) == '0') {
			//console.log("next_action_array is: " + next_action_array[i]);
			//console.log("return value: " + next_action_array[i].replace(cookie_val,""));
			val = decodeURIComponent(next_action_array[i].replace(cookie_val, ""));
			val = val.replace(new RegExp(/\+/, 'g'), ' ');
			return val;
		}
	}
	return "";
}

function trackChatWindow() {
	var track = {};
	track.eventValues = "event58";
	track.eventPathing = "Live Agent Chat Module Present";
	trackCustomObject(track);
}

function trackAnalyticsforLogo(url) {
		if (!isDTMEnabledFlag) return;
		var track = {};
		track.form = {};
		track.search = {};
		track.eventPathing = track.pageAction = "Header: Logo Click";
		track.destinationContentFinding = "Header";
		track.destinationSubContentFinding = "Header: Logo";
		track.targetURL = url;
		trackCustomObject(track);
	}
//Comment out - replaced by framework-loader.js DFCT0014970,DFCT0014969	
	/*START :- Added this to Test the Recent Activity*/
//var recentActivityJS = document.createElement('script');
//var d = new Date();
//recentActivityJS.src = '/resources/scripts/analytics/activity.js';
//recentActivityJS.src = checkAllDomains(document.domain) ? '/resources/scripts/analytics/activity.js' : '//www.nxp.com//resources/scripts/analytics/activity.js';
//document.head.appendChild(recentActivityJS);
/*END :- Added this to Test the Recent Activity*/

//Tracking Custom Object for Quick Pricing 
function trackCustomObject_QP(trackOptions) {
	try {
		//if (!isDTMEnabledFlag) return;    
		if (!isDTMEnabledFlag) {
			isDTMEnabledFlag = isDTMEnabled();
			if (!isDTMEnabledFlag) return;
		}
		if (typeof trackOptions.search == 'undefined') trackOptions.search = {};
		if (typeof trackOptions.bypassclear == 'undefined') {
			trackOptions.bypassclear = false;
		}
		if (typeof trackOptions.ignorePageAction == 'undefined') trackOptions.ignorePageAction = false;
		//Check for Download Clicks
		/*
		if ((typeof trackOptions.targetURL != 'undefined' || typeof trackOptions.downloadURLClean != 'undefined') && trackOptions.enableDwnldTracking != 'undefined') {
			if (trackOptions.enableDwnldTracking) {
				var downloadType;
				var shortURL;
				if (typeof trackOptions.dwnldType != 'undefined') downloadType = trackOptions.dwnldType;
				else downloadType = getAnalyticsDownloadType(trackOptions.targetURL);
				if (typeof trackOptions.downloadURLClean != 'undefined') shortURL = isShortURL(trackOptions.downloadURLClean)
				else shortURL = isShortURL(trackOptions.targetURL);
				var marketLeveraged = false;
				if (downloadType != 'Not Applicable' || shortURL || marketLeveraged) {
					if (typeof trackOptions.dwnldOptions == 'undefined') trackOptions.dwnldOptions = {};
					trackOptions.dwnldOptions.downloadType = downloadType;
					trackOptions.dwnldOptions.marketLeveraged = marketLeveraged;
					if (typeof trackOptions.dwnldAssetID != 'undefined') trackOptions.dwnldOptions.downloadAssetID = trackOptions.dwnldAssetID
					else trackOptions.dwnldOptions.downloadAssetID = getFullUrl(trackOptions.targetURL);
					trackOptions.dwnldOptions.shortURL = shortURL;
					if (typeof trackOptions.dwnldAccessedDirectly != 'undefined') trackOptions.dwnldOptions.dwnldAccessedDirectly = true;
					else trackOptions.dwnldOptions.dwnldAccessedDirectly = false;
					if (typeof trackOptions.destinationContentFinding == 'undefined') {
						trackOptions.destinationContentFinding = getContentFinding(document.URL, "", true);
					}
					else if (trackOptions.destinationContentFinding == '') {
						trackOptions.destinationContentFinding = getContentFinding(document.URL, "", true);
					}
					if (typeof trackOptions.dwnldEvents != 'undefined') trackOptions.dwnldOptions.dwnldEvents = trackOptions.dwnldEvents;
					else trackOptions.dwnldOptions.dwnldEvents = '';
					if (typeof trackOptions.dwnldPathing != 'undefined') {
						trackOptions.dwnldOptions.dwnldPathing = trackOptions.dwnldPathing;
					}
					else {
						trackOptions.dwnldOptions.dwnldPathing = '';
					}
					if (typeof trackOptions.downloadURLClean != 'undefined') {
						trackOptions.dwnldOptions.downloadURLClean = trackOptions.downloadURLClean;
					}
					else {
						trackOptions.dwnldOptions.downloadURLClean = '';
					}
					trackAnalyticsDownload(trackOptions);
					trackOptions.dwnldOptions = {};
				}
			}
		}
		//End of Check for Download Clicks
		*/
		digitalData.eventInfo = {};
		digitalData.searchInfo = {};
		var eventOptions = ['name', 'eventPathing', 'pageAction', 'pageSubaction', 'targetURL', 'pageActionContentFinding', 'pageActionSubContentFinding', 'destinationContentFinding', 'destinationSubContentFinding','eventValues', 'eventPageName', 'eventlocalTitle', 'eventPageType', 'eventSiteSection1', 'eventSitePlatform', 'eventLang', 'eventDownloadUrl', 'eventDownloadType', 'eventPageURLClean', 'eventPageURLFull', 'pageEventValues', 'eventPageActionURLFull', 'eventSiteSection2', 'eventSiteSection3', 'eventSiteSection4', 'eventSiteSection5','eventPartNumber'];
		var searchOptions = ['searchResultPageNumber', 'searchResultPosition', 'searchkeyword', 'searchType', 'searchRegion', 'searchQuantity', 'searchChannel'];
		//Event Info Check
		for (var i = 0; i < eventOptions.length; i++) {
			digitalData.eventInfo[eventOptions[i]] = trackOptions[eventOptions[i]] ? trackOptions[eventOptions[i]] : '';
		}
		if (digitalData.eventInfo.eventPageName == '') digitalData.eventInfo.eventPageName = _satellite.getVar("pageName");
		if (digitalData.eventInfo.eventPageURLClean == "") digitalData.eventInfo.eventPageURLClean = _satellite.getVar("pageURLClean");
		if (digitalData.eventInfo.eventPageActionURLFull == "") digitalData.eventInfo.eventPageActionURLFull = _satellite.getVar("pageURLFull");
		if (digitalData.eventInfo.eventPageURLFull == "") digitalData.eventInfo.eventPageURLFull = _satellite.getVar("pageURLFull");
		if (digitalData.eventInfo.eventlocalTitle == '') digitalData.eventInfo.eventlocalTitle = _satellite.getVar("localTitle");
		if (digitalData.eventInfo.eventPageType == '') digitalData.eventInfo.eventPageType = _satellite.getVar("pageType");
		if (digitalData.eventInfo.eventSiteSection1 == '') digitalData.eventInfo.eventSiteSection1 = _satellite.getVar("siteSection1");
		if (digitalData.eventInfo.eventSiteSection2 == '') digitalData.eventInfo.eventSiteSection2 = _satellite.getVar("siteSection2");
		if (digitalData.eventInfo.eventSiteSection3 == '') digitalData.eventInfo.eventSiteSection3 = _satellite.getVar("siteSection3");
		if (digitalData.eventInfo.eventSiteSection4 == '') digitalData.eventInfo.eventSiteSection4 = _satellite.getVar("siteSection4");
		if (digitalData.eventInfo.eventSiteSection5 == '') digitalData.eventInfo.eventSiteSection5 = _satellite.getVar("siteSection5");		
		if (digitalData.eventInfo.eventSitePlatform == "") digitalData.eventInfo.eventSitePlatform = _satellite.getVar("sitePlatform");
		if (digitalData.eventInfo.eventLang == "") digitalData.eventInfo.eventLang = _satellite.getVar("siteLanguage");
		//Search Info Check
		var resultCount = trackOptions.search.resultCount ? trackOptions.search.resultCount : '';
		for (var c = 0; c < searchOptions.length; c++) {
			digitalData.searchInfo[searchOptions[c]] = trackOptions.search[searchOptions[c]] ? trackOptions.search[searchOptions[c]] : '';
		}
		if (digitalData.searchInfo.searchFilterList == '' && digitalData.searchInfo.searchkeyword == '') digitalData.searchInfo.resultCount = '';
		else digitalData.searchInfo.resultCount = (resultCount == 0) ? 'zero' : resultCount;
		//Send Call
		if (trackOptions.call == "page") _satellite.track("trackCustomPage");
		else if (trackOptions.call == "exit") _satellite.track("trackCustomExit");
		else if (trackOptions.ignorePageAction == false) _satellite.track("trackCustomPageAction");
	}
	catch (error) {
		console.error(error);
	}
}

function wa_cookieValueExists(inputCookieArray, cookieKey, cookieValue) {
	for (i = 0; i < inputCookieArray.length; i++) {
		var inputcookieKey = inputCookieArray[i].split('=')[0];
		var inputCookieValue = inputCookieArray[i].split('=')[1];
		if (inputcookieKey === cookieKey) {
			return inputCookieValue === cookieValue ? true : false;
		}
	}
	return false;
}

function wa_addorModifyCookieValue(inputCookieArray, cookieKey, cookieValue) {
	var flag = false;
	for (i = 0; i < inputCookieArray.length; i++) {
		var inputcookieKey = inputCookieArray[i].split('=')[0];
		var inputCookieValue = inputCookieArray[i].split('=')[1];
		if (inputcookieKey === cookieKey) {
			inputCookieArray[i] = cookieKey + '=' + cookieValue;
			flag = true;
		}
	}
	if (!flag) {
		inputCookieArray.push(cookieKey + '=' + cookieValue);
	}
	return inputCookieArray;
}

//POC for acquiring previous page  pagename for setting prop6 value
var wa_sessionCookieName = 'wa_sess';
var wa_persistantCookieName = 'wa_pers';
var currentPageName = '';
var currentLocalPageTitle = '';
var currentUserStatus = '';

function initiateWACookie() {
    if (typeof digitalData != 'undefined') {
		if(analyticsSiteType(document.URL)==='regional' && wa_getCookie('wa_sess') ==='' && wa_getCookie('UsePerAuth')!=='' && wa_getCookie('AuthCookie')===''){
			wa_PerLoginIncrement();
		}
        if (typeof digitalData.userInfo != 'undefined') {
            //Setting eVar10
            digitalData.userInfo.newRepeat = getUserStatusValue();
        }
        if (typeof digitalData.pageInfo != 'undefined') {
            //Setting prop6
            digitalData.pageInfo.previousPageName = getPreviousPageNameValue();
            //Setting eVar19
            digitalData.pageInfo.previousPageLocalTitle = getPreviousLocalPageTitleValue();
			digitalData.pageInfo.pageReferrerType = isInternalDomainListRefferer(document.referrer);
        }
        if (typeof digitalData.siteInfo != 'undefined') {
            //Setting eVar0
            digitalData.siteInfo.campaign = setValuesForCampaignCookie();
            //console.log("Campaign Variable(eVar0) = " + digitalData.siteInfo.campaign);
            uatLogger("Campaign Variable(eVar0)", digitalData.siteInfo.campaign);
        }
    }
}

function wa_PerLoginIncrement() {
    var wa_obj = {};
    var wa_persLogin = wa_getLocalStorageItem('wa_persLogin');
    var wa_userPerAuthCookie = wa_getCookie('UsePerAuth');
        if (wa_persLogin != '' && wa_persLogin.perlogin_dte === wa_userPerAuthCookie) {
  		    wa_persLogin.persess_no;
            wa_obj.perlogin_dte = wa_userPerAuthCookie;
            wa_obj.persess_no = (Number(wa_persLogin.persess_no) + 1).toString();           
			wa_writeToLocalStorage('wa_persLogin', wa_obj);  
        } else {
            wa_obj.perlogin_dte = wa_userPerAuthCookie;
            wa_obj.persess_no = '1';
            wa_writeToLocalStorage('wa_persLogin', wa_obj); 
		}
}

function getUserStatusValue() {
    return acquireUserStatus();
}

function getPreviousPageNameValue() {
    var currentPageNameValue = '';
    if (typeof $ == 'function') {
        if (typeof $("meta[name='waPageName']").attr('content') == 'string') {
            currentPageNameValue = $("meta[name='waPageName']").attr('content');
        } else {
            currentPageNameValue = digitalData.pageInfo.pageName;
        }
        /*var currentPageName = (currentPageNameValue != undefined && currentPageNameValue != null && currentPageNameValue != '') ? currentPageNameValue.replace(/<sup>/g, "").replace(/<\/sup>/, "").replace(/\(/g, "").replace(/\)/g, "") : '';	*/
        var formattedCurrentPageName = removeSuperScriptsFromValue(currentPageNameValue);
        var currentPageName = removeSuperScriptsFromValue(formattedCurrentPageName).replace(/\(/g, "").replace(/\)/g, "");
        return acquirePreviousPageName(currentPageName);
    }
}

function getPreviousLocalPageTitleValue() {
    var currentLocalPageTitleValue = '';
    if (typeof digitalData != 'undefined' && typeof digitalData.pageInfo != 'undefined' && (typeof digitalData.pageInfo.localTitle != 'undefined' || digitalData.pageInfo.pageName != 'undefined')) {
        if (digitalData.pageInfo.localTitle != '') {
            currentLocalPageTitleValue = digitalData.pageInfo.localTitle;
        } else {
            currentLocalPageTitleValue = digitalData.pageInfo.pageName;
        }
    } else {
        currentLocalPageTitleValue = document.title;
    }
    /*var currentLocalPageTitle = (currentLocalPageTitleValue != undefined && currentLocalPageTitleValue != null && currentLocalPageTitleValue != '') ? currentLocalPageTitleValue.replace(/<sup>/g, "").replace(/<\/sup>/g, "") : '';*/
    var currentLocalPageTitle = removeSuperScriptsFromValue(currentLocalPageTitleValue);
    return acquirePreviousLocalPageTitle(currentLocalPageTitle);
}

function acquireUserStatus() {
    var previousUserStatusPersistantCookieValue = '';
    var previousUserStatusSessionCookieValue = '';
    var previousUserStatusPersistantCookieKey = 'nr';
    var previousUserStatusSessonCookieKey = 'nr';
    var currentUserStatus = 'New';

    var currentValueFromPersistantCookie = wa_getCookie(wa_persistantCookieName);
    var decodedCurrentValueFromPersistantCookie = decodeURIComponent(currentValueFromPersistantCookie);
    previousUserStatusPersistantCookieValue = getCookieValueByKey(decodedCurrentValueFromPersistantCookie, previousUserStatusPersistantCookieKey);

   // if (!isCommuntyDomainURL()) {
        var currentValueFromSessionCookie = wa_getCookie(wa_sessionCookieName);
        var decodedCurrentValueFromSessionCookie = decodeURIComponent(currentValueFromSessionCookie);
        previousUserStatusSessionCookieValue = getCookieValueByKey(decodedCurrentValueFromSessionCookie, previousUserStatusSessonCookieKey);
        if (decodeURIComponent(previousUserStatusPersistantCookieValue) === '') {
            currentUserStatus = 'New';
            setCookiesForWASession(decodedCurrentValueFromPersistantCookie, wa_persistantCookieName, currentUserStatus, previousUserStatusPersistantCookieKey);
            setCookiesForWASession(decodedCurrentValueFromSessionCookie, wa_sessionCookieName, currentUserStatus, previousUserStatusSessonCookieKey);
            previousUserStatusPersistantCookieValue = currentUserStatus;
        } else if (decodeURIComponent(previousUserStatusPersistantCookieValue) === 'New') {
            if (decodeURIComponent(previousUserStatusSessionCookieValue) === '' || decodeURIComponent(previousUserStatusSessionCookieValue) === 'Repeat') {
                currentUserStatus = 'Repeat';
                setCookiesForWASession(decodedCurrentValueFromPersistantCookie, wa_persistantCookieName, currentUserStatus, previousUserStatusPersistantCookieKey);
                setCookiesForWASession(decodedCurrentValueFromSessionCookie, wa_sessionCookieName, currentUserStatus, previousUserStatusSessonCookieKey);
                previousUserStatusPersistantCookieValue = currentUserStatus;
            } else if (decodeURIComponent(previousUserStatusSessionCookieValue) === 'New') {
                currentUserStatus = 'New';
                setCookiesForWASession(decodedCurrentValueFromPersistantCookie, wa_persistantCookieName, currentUserStatus, previousUserStatusPersistantCookieKey);
                setCookiesForWASession(decodedCurrentValueFromSessionCookie, wa_sessionCookieName, currentUserStatus, previousUserStatusSessonCookieKey);
                previousUserStatusPersistantCookieValue = currentUserStatus;
            }
        } else if (decodeURIComponent(previousUserStatusPersistantCookieValue) === 'Repeat') {
            currentUserStatus = 'Repeat';
            setCookiesForWASession(decodedCurrentValueFromPersistantCookie, wa_persistantCookieName, currentUserStatus, previousUserStatusPersistantCookieKey);
            setCookiesForWASession(decodedCurrentValueFromSessionCookie, wa_sessionCookieName, currentUserStatus, previousUserStatusSessonCookieKey);
            previousUserStatusPersistantCookieValue = currentUserStatus;
        }
   // }

    //console.log("previousUserStatusPersistantCookieValue(eVar10)  = " + decodeURIComponent(previousUserStatusPersistantCookieValue));
    uatLogger("previousUserStatusPersistantCookieValue(eVar10)", decodeURIComponent(previousUserStatusPersistantCookieValue));
    return decodeURIComponent(previousUserStatusPersistantCookieValue);
}

function acquirePreviousLocalPageTitle(currentLocalPageTitle) {
    var previousLocalPageTitleCookieValue = '';
    var previousLocalPageTitleCookieKey = 'gplv';
    var currentValueFromCookie = wa_getCookie(wa_sessionCookieName);
    var decodedCurrentValueFromCookie = decodeURIComponent(currentValueFromCookie);
    previousLocalPageTitleCookieValue = getCookieValueByKey(decodedCurrentValueFromCookie, previousLocalPageTitleCookieKey);
    //if (!isCommuntyDomainURL()) {
        setCookiesForWASession(decodedCurrentValueFromCookie, wa_sessionCookieName, currentLocalPageTitle, previousLocalPageTitleCookieKey);
    //}
    //console.log("previousLocalPageTitleCookieValue(eVar19)  = " + decodeURIComponent(previousLocalPageTitleCookieValue));
    uatLogger("previousLocalPageTitleCookieValue(eVar19)", decodeURIComponent(previousLocalPageTitleCookieValue));
    return decodeURIComponent(previousLocalPageTitleCookieValue);
}

function acquirePreviousPageName(currentPageName) {
    var previousPageCookieValue = '';
    var previousPageCookieKey = 'gpv';
    var currentValueFromCookie = wa_getCookie(wa_sessionCookieName);
    var decodedCurrentValueFromCookie = decodeURIComponent(currentValueFromCookie);
    previousPageCookieValue = getCookieValueByKey(decodedCurrentValueFromCookie, previousPageCookieKey);
    //if (!isCommuntyDomainURL()) {
        setCookiesForWASession(decodedCurrentValueFromCookie, wa_sessionCookieName, currentPageName, previousPageCookieKey);
   // }
    //console.log("previousPageCookieValue(prop6)  = " + decodeURIComponent(previousPageCookieValue));
    uatLogger("previousPageCookieValue(prop6)", decodeURIComponent(previousPageCookieValue));
    return decodeURIComponent(previousPageCookieValue);
}

/*function getQueryStringValuesForCampaignCookie() {
    var actualUrlParams = new URLSearchParams(window.location.search.replace(/#/g, "/").replace(/#/g, "/"))
    var cidValue = actualUrlParams.has('cid') ? actualUrlParams.get('cid') : '';
    var elq_midValue = actualUrlParams.has('elq_mid') ? actualUrlParams.get('elq_mid') : '';
    var xidValue = actualUrlParams.has('xid') ? actualUrlParams.get('xid') : '';
    if (typeof digitalData.siteInfo != 'undefined') {
        //Setting eVar54
        digitalData.siteInfo.subCampaign = setSubCampaignVariable(cidValue, xidValue);
        //console.log("SubCampaign Variable(eVar54) = " + digitalData.siteInfo.subCampaign);
        uatLogger("SubCampaign Variable(eVar54)", digitalData.siteInfo.subCampaign);
    }
    if (cidValue != '') {
        return cidValue;
    } else if (elq_midValue != '') {
        return "eml_elq_" + elq_midValue;
    } else {
        return '';
    }
}*/
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
} 

function getQueryStringValuesForCampaignCookie() {    
    var cidValue = getParameterByName('cid')!=null && getParameterByName('cid')!=undefined ? getParameterByName('cid') : '';
    var elq_midValue = getParameterByName('elq_mid') && getParameterByName('elq_mid')!=undefined  ? getParameterByName('elq_mid') : '';
    var xidValue = getParameterByName('xid') && getParameterByName('xid')!=undefined ? getParameterByName('xid') : '';
    if (typeof digitalData.siteInfo != 'undefined') {
        //Setting eVar54
        digitalData.siteInfo.subCampaign = setSubCampaignVariable(cidValue, xidValue);
        //console.log("SubCampaign Variable(eVar54) = " + digitalData.siteInfo.subCampaign);
        uatLogger("SubCampaign Variable(eVar54)", digitalData.siteInfo.subCampaign);
    }
    if (cidValue != '') {
        return cidValue;
    } else if (elq_midValue != '') {
        return "eml_elq_" + elq_midValue;
    } else {
        return '';
    }
}

function setSubCampaignVariable(cid, xid) {
    if (cid != '' && xid != '') {
        return xid;
    } else if (cid != '') {
        return 'None';
    } else {
        return '';
    }
}

function setValuesForCampaignCookie() {
    var cookieValue = getQueryStringValuesForCampaignCookie();
    return setCampaignCookieValue(cookieValue);
}

function setCampaignCookieValue(cookieValue) {
    var previousCampaignCookieValue = '';
    var campaignSessonCookieKey = 'wa_cmpgn';
    var currentValueFromSessionCookie = wa_getCookie(wa_sessionCookieName);
    var decodedCurrentValueFromSessionCookie = decodeURIComponent(currentValueFromSessionCookie);
    previousCampaignCookieValue = getCookieValueByKey(decodedCurrentValueFromSessionCookie, campaignSessonCookieKey);
    if (previousCampaignCookieValue != cookieValue) {
        setCookiesForWASession(decodedCurrentValueFromSessionCookie, wa_sessionCookieName, cookieValue, campaignSessonCookieKey);
        return cookieValue;
    }
    return '';
}

function getCookieValueByKey(decodedCurrentValueFromCookie, cookieKey) {
    if (decodedCurrentValueFromCookie.indexOf(cookieKey) != -1) {
        var strPrevPage = decodedCurrentValueFromCookie.substring(decodedCurrentValueFromCookie.indexOf(cookieKey)).split(";")[0];
        return decodeURIComponent(strPrevPage.substring(strPrevPage.indexOf(cookieKey + "=")).split("=")[1]);
    } else {
        return '';
    }
}

function setCookiesForWASession(decodedCurrentValueFromCookie, wa_sessionCookieName, cookieValue, cookieKey) {
    if (cookieValue != undefined && cookieValue != null && cookieValue != '') {
        var finalPreStoredCookieValue = addorModifyCookieValue(decodedCurrentValueFromCookie, cookieKey, cookieValue);
        var finalCookieValue = finalPreStoredCookieValue.join(";");
        if (wa_sessionCookieName === 'wa_sess') {
            setSessionCookie(wa_sessionCookieName, finalCookieValue);
        } else if (wa_sessionCookieName === 'wa_pers') {
            setPersistantCookie(wa_sessionCookieName, finalCookieValue);
        }
    }
}

function addorModifyCookieValue(decodedCurrentValueFromCookie, cookieKey, cookieValue) {
    var inputCookieArray = decodedCurrentValueFromCookie.split(";");
    var modifiedCookieArray = [];
    var flag = false;
    for (var i = 0; i < inputCookieArray.length; i++) {
        var inputCookieKey = inputCookieArray[i].split('=')[0].trim();
        var inputCookieValue = inputCookieArray[i].split('=')[1];
        if (inputCookieKey != '') {
            if (inputCookieKey === cookieKey) {
                var modifiedCookieKeyValue = cookieKey + '=' + encodeURIComponent(cookieValue);
                modifiedCookieArray.push(modifiedCookieKeyValue);
                flag = true;
            } else {
                modifiedCookieArray.push(inputCookieKey + '=' + inputCookieValue);
            }
        }
    }
    if (!flag) {
        var modifiedCookieKeyValue = cookieKey + '=' + encodeURIComponent(encodeURIComponent(cookieValue));
        modifiedCookieArray.push(modifiedCookieKeyValue);
    }
    return modifiedCookieArray;
}

function setSessionCookie(cname, cvalue) {
    var expires = "expires=";
    var dom = document.domain;
    if (dom.indexOf("nxp.com.cn") > -1 || dom.indexOf(".nxp.jp") > -1 || dom.indexOf(".nxp.co.kr") > -1) {
        document.cookie = cname + "=" + encodeURIComponent(cvalue) + "; expires=" + expires + "; domain=" + dom + "; path=/; secure";
    } else {
        document.cookie = cname + "=" + encodeURIComponent(cvalue) + "; expires=" + expires + "; domain=" + getMajorDomain() + "; path=/; secure";
    }
}

function setPersistantCookie(cname, cvalue) {
    var dom = document.domain;
    var expiration_date = new Date();
    expiration_date.setFullYear(expiration_date.getFullYear() + 1);
    if (dom.indexOf("nxp.com.cn") > -1 || dom.indexOf(".nxp.jp") > -1 || dom.indexOf(".nxp.co.kr") > -1) {
        document.cookie = cname + "=" + encodeURIComponent(cvalue) + "; expires=" + expiration_date.toUTCString() + "; domain=" + dom + "; path=/";
    } else {
        document.cookie = cname + "=" + encodeURIComponent(cvalue) + "; expires=" + expiration_date.toUTCString() + "; domain=" + getMajorDomain() + "; path=/";
    }
}

function isCommuntyDomainURL() {
    var communityDomains = ['community-staging.nxp.com', 'community.nxp.com'];
    if (communityDomains.indexOf(document.domain) > -1) {
        return true;
    } else {
        return false;
    }
}

function removeSuperScriptsFromValue(value) {
    return (value != undefined && value != null && value != '') ? value.replace(/<sup>/g, "").replace(/<\/sup>/g, "") : '';
}

function removeParenthesisFromValue(value) {
    return (value != undefined && value != null && value != '') ? value.replace(/<sup>/g, "").replace(/<\/sup>/g, "") : '';
}

function uatLogger(key, value) {
    if (isUATEnv()) {
        _satellite.logger.log(key + " = " + value);
    }
}

function isUATEnv() {
    var uatBaseDomains = ['uat.nxp.com'];
    var flexeraDomains = ['nxpuat.flexnetoperations.com'];
    var zoominDomains = ['nxp-staging.zoominsoftware.io'];
    var ecomDomains = ['store-uat.nxp.com'];
    var communityDomains = ['community-staging.nxp.com'];

    var debugCookieStatus = wa_getCookie('wa_debug');
    if (debugCookieStatus != '' && debugCookieStatus === '1') {
        return (uatBaseDomains.indexOf(document.domain) > -1 || ecomDomains.indexOf(document.domain) > -1 || flexeraDomains.indexOf(document.domain) > -1 || zoominDomains.indexOf(document.domain) > -1 || communityDomains.indexOf(document.domain) > -1) ? true : false;
    } else {
        return false;
    }
}

function isInternalDomainListRefferer(url) {
	var internalFlag = false;
	url = getFullUrl(url);
	if (url) {
		var filters = wa_internalDomainList.split(',');
		var docRef = url.split('/');
		docRef = docRef[2];
		for (var f in filters) {
			if (docRef.indexOf(filters[f]) > -1) {
				internalFlag = true;
			}
		}
	}
	return internalFlag;
}

function setWASessionCookieWithKeyAndValue(cookieKey, cookieValue) {
    var currentCookieValue = '';
    var currentValueFromCookie = wa_getCookie(wa_sessionCookieName);
    var decodedCurrentValueFromCookie = decodeURIComponent(currentValueFromCookie);
    currentCookieValue = getCookieValueByKey(decodedCurrentValueFromCookie, cookieKey);
    setCookiesForWASession(decodedCurrentValueFromCookie, wa_sessionCookieName, cookieValue, cookieKey);
    return decodeURIComponent(currentCookieValue);
}


//Start : Inserting the wa_data object value either in localstorage or cookie
function setReferrerVariable(key, referrerDataObject, destinationURL) {
    if (typeof isFullDomainMatch != 'undefined' && destinationURL != '') {
        if (isFullDomainMatch(destinationURL)) {
            setLocalStorageForWASession(key, referrerDataObject);
        } else {
            setJSONSessionCookie(key, referrerDataObject);
        }
    }
}


function setLocalStorageForWASession(key, value) {
    if (value != undefined && value != null && value != '') {
        var currentReferralValues = getReferralValues("wa_data");
        if (currentReferralValues != '') {
            var output = {};
            output = jsonConcat(output, currentReferralValues);
            output = jsonConcat(output, value);
            wa_writeToLocalStorage(key, output);
        } else {
            wa_writeToLocalStorage(key, value);
        }
    }
}


function jsonConcat(o1, o2) {
    for (var key in o2) {
        o1[key] = o2[key];
    }
    return o1;
}


function setJSONSessionCookie(cname, cvalue) {
	var currentContentFindingValues = getReferralValues("wa_data");
	var expires = "expires=";
	var dom = document.domain;
	if (currentContentFindingValues != '') {
		var output = {};
		output = jsonConcat(output, currentContentFindingValues);
		output = jsonConcat(output, cvalue);
		if (dom.indexOf("nxp.com.cn") > -1 || dom.indexOf(".nxp.jp") > -1 || dom.indexOf(".nxp.co.kr") > -1) {
			document.cookie = cname + "=" + JSON.stringify(output) + "; expires=" + expires + "; domain=" + dom + "; path=/; secure";
		} else {
			document.cookie = cname + "=" + JSON.stringify(output) + "; expires=" + expires + "; domain=" + getMajorDomain() + "; path=/; secure";
		}
	} else {
		if (dom.indexOf("nxp.com.cn") > -1 || dom.indexOf(".nxp.jp") > -1 || dom.indexOf(".nxp.co.kr") > -1) {
			document.cookie = cname + "=" + JSON.stringify(cvalue) + "; expires=" + expires + "; domain=" + dom + "; path=/; secure";
		} else {
			document.cookie = cname + "=" + JSON.stringify(cvalue) + "; expires=" + expires + "; domain=" + getMajorDomain() + "; path=/; secure";
		}
	}
}
//End : Inserting the wa_data object value either in localstorage or cookie


//Check isFlexera
function isFlexeraCheck(href) {
	return (href.indexOf("/swlicensing/sso/") > -1);	
}

//Check isExit
function isExitCheck(href) {
	var isExit = false;
	if (typeof isInternalDomainListRefferer != 'undefined' && href != '') {
		if (isInternalDomainListRefferer(href)) {
			isExit = false;
		} else {
			isExit = true;
		}
	}
	return isExit;
}

//Check isCrossDomainValue
function isCrossDomainCheck(href) {
	var isCrossDomainValue = false;
	if (typeof isCrossDomain != 'undefined' && href != '') {
		if (isCrossDomain(href)) {
			isCrossDomainValue = true;
		} else {
			isCrossDomainValue = false;
		}
	}
	return isCrossDomainValue;
}

//Check AnalyticsDownloadType
function isAnalyticsDownloadCheck(href) {
var isDownloadURL = false;
	if (typeof getAnalyticsDownloadType != 'undefined' && href != '') {
		if (getAnalyticsDownloadType(href) != 'Not Applicable') {
			isDownloadURL = true;
		} else {
			isDownloadURL = false;
		}
	}
	return isDownloadURL;
}

function isContentFindingSatisfied(href) {
    if (href != '') {
        var isDownloadURL = isAnalyticsDownloadCheck(href);
        var isCrossDomainValue = isCrossDomainCheck(href);
        var isFlexera = isFlexeraCheck(href);
        var isExit = isExitCheck(href);
        if (typeof digitalData != "undefined") {
			if(typeof digitalData.referralInfo === "undefined") {
				digitalData.referralInfo = {};
			}
            _satellite.logger.log("ReferralValues : Setting Digital Data Object");
            digitalData.referralInfo.isDownloadURL = isDownloadURL;
            digitalData.referralInfo.isCrossDomain = isCrossDomainValue;
            digitalData.referralInfo.isFlexera = isFlexera;
            digitalData.referralInfo.isExit = isExit;
            digitalData.referralInfo.destinationURL = href;
            return !isDownloadURL && !isCrossDomainValue && !isFlexera && !isExit;
        }
    }
    return false;
}

//=========================

function getAdobeCookie(cookieName) {
	return decodeURIComponent(wa_getCookie(cookieName));
}

function removeAdobeCookie(name) {
    var dom = document.domain;
    var value = "";
    var expires = "Thu, 01 Jan 1970 00:00:00 UTC";
    if (dom.indexOf("nxp.com.cn") > -1 || dom.indexOf("nxp.jp") > -1 || dom.indexOf("nxp.co.kr") > -1) {
        document.cookie = name + "=" + value + "; expires=" + expires + "; domain=" + dom + "; path=/";
    } else {
        document.cookie = name + "=" + value + "; expires=" + expires + "; domain=" + getMajorDomain() + "; path=/";
    }
}

//=========================
//Set Session Storage Item
function wa_writeToSessionStorage(name, object) {
    if (typeof JSON == "object" && typeof sessionStorage == "object") 
      window.sessionStorage.setItem(name, JSON.stringify(object));
}

//Get Session Storage Item
function wa_getSessionStorageItem(name) {
    if (typeof JSON == "object" && typeof sessionStorage == "object") {
        var obj = sessionStorage.getItem(name);
        jsonObject = obj != '' && obj != undefined ? JSON.parse(obj) : '';
        return jsonObject;
    }
}

//Remove Session Storage Item
function wa_removeSessionStorageItem(name) {
    sessionStorage.removeItem(name);
}

function wa_getSiteLanguagefromDomain(){
	var siteDomain = '';
	var global_site = ["uat.nxp.com","www.nxp.com"];
	var china_regional = ["uat.nxp.com.cn","www.nxp.com.cn"];
	var japan_regional = ["uat.nxp.jp","www.nxp.jp"];
	if(global_site.includes(document.domain)){
		siteDomain = 'en'
	}else if(china_regional.includes(document.domain)){
		siteDomain = 'zh-Hans'
	}else if(japan_regional.includes(document.domain)){
		siteDomain = 'ja'
	}
	
	return siteDomain;
}
