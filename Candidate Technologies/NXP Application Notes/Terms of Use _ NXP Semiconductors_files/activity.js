var waitTime = 3000

var excludeURL
var eventLocalStorage = 'eventActivity'
var searchLocalStorage = 'searchActivity'
var summaryPageLocalStorage = 'summaryPageActivity'

var PAGE_VIEW = 'PAGE_VIEW'
var DOWNLOAD = 'DOC_DOWNLOAD'
var SEARCH = 'K_SEARCH'
var extension = ['zip', 'bin', 'exe', 'htm', 'html', 'pdf', 'txt', 'text']
var iconData = new Map()
var loginIndex = 0
//b25319 added for testing
var appName = ''
var recommendTitle = ''
var APP_ACTIVITY = 'APP_ACTIVITY'
var AUTH_CKE_NAME = 'AuthCookie'
var USE_PER_AUTH = 'UsePerAuth'
iconData.set('Devices', 'icon-part')
iconData.set('Software', 'icon-tools')
iconData.set('RDSP', 'icon-tools')
iconData.set('Tools', 'icon-tools')
iconData.set('Designs', 'icon-tools')
iconData.set('TSP', 'icon-tools')

iconData.set('Data Sheet', 'icon-datasheet')
iconData.set('Selector Guide', 'icon-file222')
iconData.set('Quick Reference Guide', 'icon-file222')
iconData.set('Fact Sheet', 'icon-datasheet')
iconData.set('Trainings', 'icon-graduation')
iconData.set('Application Note', 'icon-tree3')
iconData.set('Videos', 'icon-play')

iconData.set('PAGE_VIEW', 'icon-globe')
iconData.set('K_SEARCH', 'icon-search')
iconData.set('DOC_DOWNLOAD', 'icon-datasheet')

var wa_all_domains = [
  'uat.nxp.jp',
  'www.nxp.jp',
  'uat.nxp.co.kr',
  'www.nxp.co.kr',
  'uat.freescale.com',
  'uat.nxp.com',
  'www.nxp.com',
  'uat.nxp.com.cn',
  'www.nxp.com.cn',
  'store-uat.nxp.com',
  'store.nxp.com'
]

function checkAllDomains (currentDomain) {
  var len = wa_all_domains.length
  for (i = 0; i < len; i++) {
    if (currentDomain == wa_all_domains[i]) {
      return true
    }
  }
  return false
}

function trackSoftwareDownloadUserActivity () {
  $(document).on('click', '.btn-download,.downloadBtn', function (event) {
    setTimeout(function () {
      if (typeof getDocDownloadType == 'function') {
        downloadURL = digitalData.eventInfo.targetURL
        var downloadType = getDocDownloadType(downloadURL)
        if (downloadType != 'Not Applicable') {
          var marketLeveraged = isMarketLeveraged_UA(downloadURL)
          if (
            downloadType == 'Non-Secured' ||
            downloadType == 'Moderated' ||
            downloadType == 'Registered' ||
            marketLeveraged
          ) {
            var assetId = fetchColCodeFromURL(downloadURL)
            var language = fetchDocLang(downloadURL)
            var map = fetchDownloadMetaData()
            downloadURL = new URL(downloadURL).pathname
            map.set('Title', '')
            map.set('url', '')
            map.set(
              'Asset Id',
              downloadType == 'Non-Secured' ? downloadURL : assetId
            )
            map.set('language', language)
            var eventActivityJson = formJsonObj(map, '')

            trackDocumentAndSummaryPages(eventActivityJson)
          }
        } else {
          if (location.href.includes('app-distynet')) {
            var assetId = fetchColCodeFromURL(downloadURL)
            var language = fetchDocLang(downloadURL)
            var map = fetchDownloadMetaData()
            map.set('Title', '')
            map.set('url', '')
            map.set('Asset Id', assetId)
            map.set('language', language)
            map.set('Application', 'distynet')
            trackSecureDocDownloadUserActivity(map)
          }
          console.log('Secured Doc')
        }
      }
    }, 2000)
  })
}

function eventClick (event, func) {
  if (typeof window[func] == 'function' && document.body) {
    if (document.body.addEventListener) {
      document.body.addEventListener(event, window[func], true)
    } else if (document.body.attachEvent) {
      document.body.attachEvent('on' + event, window[func])
    }
  }
}

//This function executes onRightClick of Anchor Tag
//it checks whether download has been clicked or not by left clicking of mouse
function trackDownloadLeftClick (evt) {
  var $anchor_link
  evt = evt || window.event || ''
  if (evt && (typeof evt.which != 'number' || evt.which == 1)) {
    var e = anchorEvt_UA(evt, 'A')
    if (
      typeof e.href == 'undefined' ||
      !e.href ||
      !e.hostname ||
      typeof e.hostname == 'undefined'
    )
      return
    var href_url = e.href
    if (typeof getDocDownloadType == 'function') {
      var downloadType = getDocDownloadType(href_url)
      if (downloadType != 'Not Applicable') {
        var marketLeveraged = false
        if (typeof jQuery != 'undefined') {
          $anchor_link = $(e)
          marketLeveraged = isMarketLeveraged_UA($anchor_link)
        }
        //var pth=e.pathname?((e.pathname.indexOf("/")!=0)?"/"+e.pathname:e.pathname):"/";
        if (downloadType == 'Non-Secured' && !marketLeveraged) {
          trackDocumentWithLinkURL(e)
        } else if (
          downloadType == 'Moderated' ||
          downloadType == 'Registered' ||
          marketLeveraged
        ) {
          trackPublicOrMarketingLeverageDownloadActivity(e, marketLeveraged)
        } else {
          console.log('Secured Doc')
        }
      } else if (
   /*   typeof s != 'undefined' &&
        s.linkInternalFilters &&
        !s.linkInternalFilters.includes(e.hostname)*/
		typeof wa_internalDomainList != 'undefined' && !wa_internalDomainList.includes(e.hostname)
      ) {
        // For Captuing exit links
        trackExitLinkActivity(e)
      }
    }
  }
}

//This function executes onRightClick of Anchor Tag
//it checks whether download has been clicked or not by right clicking of mouse
function trackDownloadRightClick (evt) {
  var $anchor_link
  evt = evt || window.event || ''
  if (evt) {
    var btn = evt.which || evt.button
    if (btn != 1 || navigator.userAgent.indexOf('Safari') != -1) {
      e = anchorEvt_UA(evt, 'A')
      if (
        typeof e.href == 'undefined' ||
        !e.href ||
        typeof e.protocol == 'undefined' ||
        !e.protocol ||
        e.protocol.indexOf('http') == -1 ||
        !e.hostname ||
        typeof e.hostname == 'undefined'
      )
        return
      var href_url = e.href
      if (typeof getDocDownloadType == 'function') {
        var downloadType = getDocDownloadType(href_url)
        if (downloadType != 'Not Applicable') {
          var marketLeveraged = false
          if (typeof jQuery != 'undefined') {
            $anchor_link = $(e)
            marketLeveraged = isMarketLeveraged_UA($anchor_link)
          }
          //var pth=e.pathname?((e.pathname.indexOf("/")!=0)?"/"+e.pathname:e.pathname):"/";
          if (downloadType == 'Non-Secured' && !marketLeveraged) {
            trackDocumentWithLinkURL(e)
          } else if (
            downloadType == 'Moderated' ||
            downloadType == 'Registered' ||
            marketLeveraged
          ) {
            trackPublicOrMarketingLeverageDownloadActivity(e, marketLeveraged)
          } else {
            console.log('Secured Doc')
          }
        } else if (
       /* typeof s != 'undefined' &&
          s.linkInternalFilters &&
          !s.linkInternalFilters.includes(e.hostname)*/
		  typeof wa_internalDomainList != 'undefined' && !wa_internalDomainList.includes(e.hostname)
        ) {
          // For Captuing exit links
          trackExitLinkActivity(e)
        }
      }
    }
  }
}

//Function called for trackuserActivity
function trackUserActivity (eventActivityJson) {
  handlingLocalStorage(eventActivityJson, true)
}

//To track the user activity, logic differs for logged in and non-logged-in user based on Cookie
function trackPageViewUserActivity () {
  if (isExcludeURL()) {
    var eventActivityJson = formJsonObj(fetchPageViewMetaData(), '')
    if (!document.title.includes('(404)')) {
      if (
        $("meta[name='Asset_Type']").attr('content') != undefined &&
        $("meta[name='Asset Id']").attr('content') != undefined
      ) {
        trackDocumentAndSummaryPages(eventActivityJson)
      } else {
        trackUserActivity(eventActivityJson)
      }
    }
  }
}

//To track recommendations in Product Advisor and DistyNet //b25319
function trackPageResultUserActivity (application, title) {
  recommendTitle = title
  appName = application
  var eventActivityJson = formJsonObj(fetchMetaData(APP_ACTIVITY), '')
  handlingLocalStorage(eventActivityJson, true)
}

//To track the Secured Doc Download activity.
function trackSecureDocDownloadUserActivity (map) {
  if (satTrackFlag) {
    var eventActivityJson = formJsonObj(map, '')
    trackDocumentAndSummaryPages(eventActivityJson)
  }
}

function fetchPageViewMetaData () {
  return fetchMetaData(PAGE_VIEW)
}

function fetchDocLang (url) {
  if (
    url.includes('/zh/') ||
    url.includes('/cn/') ||
    url.includes('/zh-Hans/') ||
    url.includes('lang_cd=zh') ||
    url.includes('lang_cd=cn') ||
    url.includes('lang_cd=zh-Hans') ||
    url.includes('docLang=zh') ||
    url.includes('docLang=cn') ||
    url.includes('docLang=zh-Hans')
  ) {
    return 'zh'
  } else if (
    url.includes('/ja/') ||
    url.includes('/jp/') ||
    url.includes('lang_cd=ja') ||
    url.includes('lang_cd=jp') ||
    url.includes('docLang=jp') ||
    url.includes('docLang=ja')
  ) {
    return 'ja'
  } else if (
    url.includes('/kr/') ||
    url.includes('/ko/') ||
    url.includes('lang_cd=kr') ||
    url.includes('lang_cd=ko') ||
    url.includes('docLang=kr') ||
    url.includes('docLang=ko')
  ) {
    return 'ko'
  } else {
    return 'en'
  }
}

function fetchColCodeFromURL (url) {
  var colCode = ''
  if (extension.includes(url.split('.').pop())) {
    colCode = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'))
  } else if (
    url.includes('/webapp/Download') ||
    url.includes('/mod_download.jsp') ||
    url.includes('/multiDownload.sp')
  ) {
    colCode = getUrlVars(url)['colCode']
  }
  return colCode != undefined ? colCode : ''
}

//To track the Public or Marketing leverage document download activity.
function trackPublicOrMarketingLeverageDownloadActivity (
  a,
  marketingLeveraged
) {
  var title, url, version, language, type, assetId
  url = a.href
  title = a.innerText
  //version = a.nextSibling.innerText==undefined?"":a.nextSibling.innerText;
  if (marketingLeveraged) {
    assetId = a.attributes['data-collateral-code'].value
  } else {
    assetId = fetchColCodeFromURL(url)
  }
  language = fetchDocLang(url)

  if (assetId != undefined && assetId.length > 0) {
    var map = fetchDownloadMetaData()
    map.set('Title', '')
    map.set('url', '')
    map.set('Asset Id', assetId)
    map.set('language', language)

    var eventActivityJson = formJsonObj(map, '')
    trackDocumentAndSummaryPages(eventActivityJson)
  } else if (
/*  typeof s != 'undefined' &&
    s.linkInternalFilters &&
    !s.linkInternalFilters.includes(a.hostname)*/
	typeof wa_internalDomainList != 'undefined' && !wa_internalDomainList.includes(e.hostname)
  ) {
    // For External documents eg: doc-store
    trackExitLinkActivity(a)
  }
}

//To track the document using LINK URL
function trackDocumentWithLinkURL (a) {
  var title, url, version, language, type, assetId
  url = a.href
  title = a.innerText
  language = fetchDocLang(url)

  var map = fetchDownloadMetaData()
  map.set('Title', '')
  map.set('url', a.pathname)
  map.set('Asset Id', a.pathname)
  map.set('language', language)

  var eventActivityJson = formJsonObj(map, '')
  trackDocumentAndSummaryPages(eventActivityJson)
}

function trackExitLinkActivity (a) {
  var title, url, version, language, type, assetId
  url = a.href
  title = a.innerText
  language = fetchDocLang(url)

  var map = fetchDownloadMetaData()
  map.set('Title', '')
  map.set('url', url)
  map.set('Asset Id', url)
  map.set('language', language)

  var eventActivityJson = formJsonObj(map, '')
  trackDocumentAndSummaryPages(eventActivityJson)
}

//function to fetch download Meta Data
function fetchDownloadMetaData () {
  return fetchMetaData(DOWNLOAD)
}

//function to fetch the data from Meta Tags
function fetchMetaData (activityType) {
  var map = new Map()
  const securedApps = ['app-distynet']
  var isSecure = false

  securedApps.forEach(item => {
    if (window.location.href.includes(item)) {
      isSecure = true
    }
  })
  map.set('activityType', activityType)
  if (
    $("meta[name='Asset_Type']").attr('content') == undefined ||
    $("meta[name='Asset Id']").attr('content') == undefined
  ) {
    var title = $(document).attr('title')
    if(title=='' || title== null){
      var title = $('ul.docstore').find('h2').text()
      map.set('Title', title)
      }
    map.set('Title', title)
    if (window.location.search.includes('partnerId') || window.location.href.includes('/sd/collateral/')) {
      map.set('url', window.location.pathname + window.location.search)
	  if (window.location.search.includes('offeringId')){
			const urlParams = new URLSearchParams(window.location.search);
			
			var offeringId  = decodeURIComponent(urlParams.get('offeringId'));
			var partnerId  = decodeURIComponent(urlParams.get('partnerId'));
			const parentTag = $("li[offeringid= " + offeringId + "]").parent();
			var offeringType = $(parentTag).attr("offeringtype");
			map.set('partnerId', partnerId);
			map.set('offeringId', offeringId);
			const ele = $("li[offeringid= " + offeringId + "]");
			var type = $(ele).find(".item-signpost").text();
			var offeringTitle = $(ele).find(".item-title").text();
			var offeringDesc = $(ele).find(".item-content-description").text();
			var partnerImg = $("#partner-image").attr('src');
			var partnerTier = $("#partner-tier").text();
			var partnerName = $("#hero-title").text();
			map.set('offeringType', offeringType);
			map.set('offeringDesc', offeringDesc);
			map.set('offeringTitle', offeringTitle);
			map.set('partnerImg', partnerImg);
			map.set('partnerTier', partnerTier);
			map.set('partnerName', partnerName);
			map.set('Asset_Type',type);
			
			
	  }
    } else {
      map.set(
        'url',
        window.location.pathname + window.location.hash == '/'
          ? window.location.href
          : window.location.pathname + window.location.hash
      )
    }

    map.set('Asset Id', 'NA')
  } else {
    if (activityType == SEARCH) {
      map.set('Asset Id', 'NA')
    } else if (isSecure) {
      var code = window.location.href.split('/').pop()
      map.set('Asset Id', code)
      map.set('Application', 'distynet')

      if (code.length < 1) {
        code = window.location.href.substring(
          window.location.href.lastIndexOf(':') + 1,
          window.location.href.lastIndexOf('#')
        )
        map.set('Asset Id', code)
      }
    } else {
      map.set('Asset Id', $("meta[name='Asset Id']").attr('content'))
    }
    if (activityType == APP_ACTIVITY) {
      //b25319
      map.set('Title', recommendTitle)
      var urlPath = window.location.hash
      if (
        urlPath == null ||
        typeof urlPath == undefined ||
        urlPath.length == 0
      ) {
        urlPath = window.location.search
      }
      map.set('url', window.location.pathname + urlPath)
      map.set('Application', appName)
    }
    if (activityType == PAGE_VIEW) {
      map.set('Asset_Type', $("meta[name='Asset_Type']").attr('content'))
    }
  }
  var language = digitalData.siteInfo.lang
  if (typeof language == 'undefined' || language == '') {
    if (typeof lang == 'undefined' || lang == '') {
      language =
        typeof $('meta[name="DCSext.language_option"]').attr('content') ==
        'undefined'
          ? 'en'
          : $('meta[name="DCSext.language_option"]').attr('content')
    } else {
      language = lang
    }
  }
  map.set('lang', language)
  return map
}

function filterJSONObject (eventVar) {
  ;(function filter (obj) {
    $.each(obj, function (key, value) {
      if (value === '' || value === null || value === undefined) {
        delete obj[key]
      } else if (Object.prototype.toString.call(value) === '[object Object]') {
        filter(value)
      } else if ($.isArray(value)) {
        $.each(value, function (k, v) {
          filter(v)
        })
      }
    })
  })(eventVar)
  console.log(eventVar)
}

//function to form the JSON in the requested format
function formJsonObj (map, activityType) {
  var tmLoc = new Date()
  //The offset is in minutes -- convert it to ms  searchKeyword
  var dateTime = tmLoc.getTime()
  var assetVar = {
    id: map.get('Asset Id'),
    type: map.get('Asset_Type'),
    lang: map.get('language') == null ? '' : map.get('language'),
    title: map.get('Title'),
    url: map.get('url'),
	offeringId:  map.get('offeringId'),
	offeringType:  map.get('offeringType'),
	offeringTitle:  map.get('offeringTitle'),
	offeringDesc:  map.get('offeringDesc'),
	partnerImg:  map.get('partnerImg'),
	partnerName:  map.get('partnerName'),
	partnerTier:  map.get('partnerTier'),
	partnerId:  map.get('partnerId')
	
  }
  if (activityType == SEARCH) {
    assetVar = {}
  }
  var searchVar = {
    keyword: map.get('searchKeyword') == null ? '' : map.get('searchKeyword')
  }
  var eventVar = {
    dbFlag: 'false',
    a_type: map.get('activityType'),
    domain: $(location).attr('hostname'),
    lang: map.get('lang') == null ? '' : map.get('lang'),
    ts: dateTime,
    application: map.get('Application') == null ? '' : map.get('Application'),
    asset: assetVar,
    search: searchVar
  }
  filterJSONObject(eventVar)
  return eventVar
}

//Function to handle search localStorage
function handlingEventActivityLS (eventActivityJson) {
  var eventLS = localStorage.getItem(eventLocalStorage)
  if (eventLS != null) {
    var arr = JSON.parse(eventLS)
    if (eventActivityJson != '') {
      if (
        typeof eventActivityJson.asset.isRestricted != 'undefined' &&
        eventActivityJson.asset.isRestricted == 'true'
      ) {
        delete eventActivityJson.asset.title
        delete eventActivityJson.asset.url
      }
      arr.push(eventActivityJson)

      localStorage.setItem(eventLocalStorage, JSON.stringify(arr))
    }
    return arr
  } else {
    var arr = []
    if (eventActivityJson != '') {
      arr.push(eventActivityJson)
      localStorage.setItem(eventLocalStorage, JSON.stringify(arr))
    }
    return arr
  }
}


//Function to handle SummaryPageActivity localStorage
function handlingSummaryPageActivityLS (eventActivityJson) {
  var summaryPageLS = localStorage.getItem(summaryPageLocalStorage)
  if (summaryPageLS != null) {
    var arr = JSON.parse(summaryPageLS)
    if (eventActivityJson != '') {
      if (  typeof eventActivityJson.asset.isRestricted != 'undefined' &&
        eventActivityJson.asset.isRestricted == 'true'
      ) {
         delete eventActivityJson.asset.title
         delete eventActivityJson.asset.url
      }
      arr.push(eventActivityJson)

      localStorage.setItem(summaryPageLocalStorage, JSON.stringify(arr))
    }
    return arr
  } else {
    var arr = []
    if (eventActivityJson != '') {
      arr.push(eventActivityJson)
      localStorage.setItem(summaryPageLocalStorage, JSON.stringify(arr))
    }
    return arr
  }
}



//Function to handle search localStorage
function handlingSearchActivityLS (eventActivityJson) {
  var searchLS = localStorage.getItem(searchLocalStorage)
  if (searchLS != null) {
    var arr = JSON.parse(searchLS)
    if (eventActivityJson != '') {
      arr.push(eventActivityJson)
      localStorage.setItem(searchLocalStorage, JSON.stringify(arr))
    }
    return arr
  } else {
    var arr = []
    if (eventActivityJson != '') {
      arr.push(eventActivityJson)
      localStorage.setItem(searchLocalStorage, JSON.stringify(arr))
    }
    return arr
  }
}

//Function to fetch event and search localStorage value.
function fetchLocalStorage () {
  var searchLS = localStorage.getItem(searchLocalStorage)
  var eventLS = localStorage.getItem(eventLocalStorage)
  var summaryPageLS = localStorage.getItem(summaryPageLocalStorage)
  var searchArr = []
  var eventArr = []
  var summaryPageArr
  if (searchLS != null) searchArr = JSON.parse(searchLS)
  if (eventLS != null) eventArr = JSON.parse(eventLS)
   if (summaryPageLS != null) summaryPageArr = JSON.parse(summaryPageLS)		 
   return $.merge(eventArr, searchArr, summaryPageArr)
 
}

//Function to handle local Storage for user Activity
function handlingLocalStorage (eventActivityJson, syncFlag) {
  if (checkSession() || checkPersistentCookie()) {
    var arr = []
    if (eventActivityJson != '') {
      var activityType = eventActivityJson.a_type
      if (activityType == SEARCH) {
        arr = handlingSearchActivityLS(eventActivityJson)
      } else {
        arr = handlingEventActivityLS(eventActivityJson)
		//add the condition
		var assetType = eventActivityJson.asset.type
		if(assetType == 'Designs' || assetType == 'RDSP' || assetType == 'Tools' ||
		   assetType == 'Devices' ||  assetType == 'TSP')
		 {
				handlingSummaryPageActivityLS(eventActivityJson)
		 }
      }
    } else {
      arr = fetchLocalStorage()
    }
    activitiesPostCall(arr, syncFlag)
  } else {
    updateLSForNonLoginUser(eventActivityJson)
  }
}

//Update LocalStorage for Non Login User
function updateLSForNonLoginUser (eventActivityJson) {
  var arr = []
  if (eventActivityJson != '') {
    var activityType = eventActivityJson.a_type
    if (activityType == SEARCH) {
      if (localStorage.getItem(searchLocalStorage) != null) {
        arr = JSON.parse(localStorage.getItem(searchLocalStorage))
        if (arr.length > 50) {
          arr = []
        }
      }
      arr.push(eventActivityJson)
      if (arr.length > 0) mergeOrUpdateLS(arr)
      //localStorage.setItem(searchLocalStorage,  JSON.stringify(arr));
    } else {
      if (localStorage.getItem(eventLocalStorage) != null) {
        arr = JSON.parse(localStorage.getItem(eventLocalStorage))
        if (arr.length > 50) {
          arr = []
        }
      }
      arr.push(eventActivityJson)
      if (arr.length > 0) mergeOrUpdateLS(arr)
      //localStorage.setItem(eventLocalStorage,  JSON.stringify(arr));
    }
  }
}

//Update LocalStorage dbFlag to true means it is activity captured
function mergeOrUpdateLS (arr) {
  var pageViewDownloadArr = []
  var searchKeywordArr = []
  var summaryPageArr = []
  // Remove duplicates based on asset.id and asset.code
  function removeDuplicates(array) {
	  const seen = new Set();
	  return array.filter(item => {
           const key = item.asset?.id + '_' + item.asset?.code;
           if (seen.has(key)) {
               return false;
           }
           seen.add(key);
           return true;
       });
    }
	// Deduplicate incoming array
	const dedupedArr = removeDuplicates(arr);
  sortLSValueAsPerTimeStamp(dedupedArr).forEach(function (item) {
    if (checkSession() || checkPersistentCookie()) {
      item.dbFlag = 'true'
    }
    if (
      item.a_type == PAGE_VIEW ||
      item.a_type == DOWNLOAD ||
      item.a_type == APP_ACTIVITY
    ) {
      if (pageViewDownloadArr.length < 20) pageViewDownloadArr.push(item)
    }
	  if( item.a_type == PAGE_VIEW && (item.asset.type == 'Designs' || item.asset.type == 'RDSP' || 
	  item.asset.type == 'Tools' || item.asset.type == 'Devices' || 
	  item.asset.type == 'TSP')  ){
		  if (summaryPageArr.length < 4) summaryPageArr.push(item) 
	  }
    if (item.a_type == SEARCH) {
      if (searchKeywordArr.length < 10) searchKeywordArr.push(item)
    }
  })
  if (pageViewDownloadArr.length > 0)
    localStorage.setItem(eventLocalStorage, JSON.stringify(pageViewDownloadArr))
  if (summaryPageArr.length > 0)
    localStorage.setItem(summaryPageLocalStorage, JSON.stringify(summaryPageArr))
  if (searchKeywordArr.length > 0)
    localStorage.setItem(searchLocalStorage, JSON.stringify(searchKeywordArr))
}

function sortLSValueAsPerTimeStamp (arr) {
  return arr.sort(function (a, b) {
    var c = new Date(a.ts)
    var d = new Date(b.ts)
    return d - c
  })
}

//function to post the json object which contains user data to the controller
function activitiesPostCall (userActivity, syncFlag) {
  if (userActivity.length > 0) {
    var postActivity = userActivity.filter(function (obj) {
      return obj.dbFlag === 'false'
    })
    postActivity.forEach(function (item) {
      if (
        (item.a_type === DOWNLOAD || item.a_type === PAGE_VIEW) &&
        item.asset.id != 'NA'
      ) {
        item.asset.title = ''
        item.asset.url = ''
        item.asset.type = ''
        //Comment or remove the below line to save the version to DB.
        item.asset.version = ''
        if (item.asset.code != undefined) delete item.asset.code
        if (item.asset.isMarketingLevaraged != undefined)
          delete item.asset.isMarketingLevaraged
      }
    })
	
	var urlPersistent = '';
	if(checkSession())
	{
		urlPersistent = '/secured-rest/secureapi/activities';
	}
	else if(checkPersistentCookie()){
		urlPersistent =  '/secured-rest/persistent/secureapi/activities';
	}
    $.ajax({
      url: NXP.megaMenuUrl + urlPersistent,
      type: 'POST',
      async: syncFlag,
      xhrFields: {
        withCredentials: true
      },
      data: JSON.stringify(postActivity),
      cache: false,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      success: function (response) {
        if (response == 'SUCCESS') {
          mergeOrUpdateLS(fetchLocalStorage())
        }
        if (localStorage.getItem('loginFlow') != null) {
          localStorage.removeItem(eventLocalStorage)
          localStorage.removeItem(searchLocalStorage)
          localStorage.removeItem('loginFlow')
        }
      },
      error: function (e) {
        console.log('failure' + e)
      }
    })
  }
}
function fetchUserRecentActivities () {
if (checkSession() || checkPersistentCookie()) {
    if (
      localStorage.getItem(eventLocalStorage) == null ||
      localStorage.getItem(searchLocalStorage) == null
    ) {
      activitiesGetCall()
    } else if (!validateActivityDataToSession()) {
      localStorage.removeItem(eventLocalStorage)
      localStorage.removeItem(searchLocalStorage)
      activitiesGetCall()
    }
  }
}

//function to fetch the user activities from the DB
function activitiesGetCall () {
  var fetchUrl = '/webapp/activities/recent/fetch?fetchType=partial&offset=0';
  if(!checkSession() && checkPersistentCookie())
  {
	fetchUrl = '/webapp/persistent/activities/recent/fetch?fetchType=partial&offset=0';	
  }
  $.ajax({
    url:
      NXP.megaMenuUrl + fetchUrl,
    type: 'GET',
    async: false,
    xhrFields: {
      withCredentials: true
    },
    dataType: 'json',
    cache: false,
    success: function (response) {
      if (response.status == 'SUCCESS') {
        var eventActivity = response.eventActivity
        var searchActivity = response.searchActivity
		var summaryPageActivity = response.summaryPageActivity
		
        var eventArr = JSON.parse(localStorage.getItem(eventLocalStorage))
        if (eventArr != null) {
          eventArr = eventArr.filter(function (item) {
            return item.dbFlag !== 'true'
          })
          mergeOrUpdateLS($.merge(eventArr, response.eventActivity))
        } else {
          localStorage.setItem(
            eventLocalStorage,
            JSON.stringify(response.eventActivity)
          )
        }
        var searchArr = JSON.parse(localStorage.getItem(searchLocalStorage))
        if (searchArr != null) {
          searchArr = searchArr.filter(function (item) {
            return item.dbFlag !== 'true'
          })
          mergeOrUpdateLS($.merge(searchArr, response.searchActivity))
        } else {
          localStorage.setItem(
            searchLocalStorage,
            JSON.stringify(response.searchActivity)
          )
        }
		var summaryPageArr = JSON.parse(localStorage.getItem(summaryPageLocalStorage))
        if (summaryPageArr != null) {
          summaryPageArr = summaryPageArr.filter(function (item) {
            return item.dbFlag !== 'true'
          })
          mergeOrUpdateLS($.merge(summaryPageArr, response.summaryPageActivity))
        } else {
          localStorage.setItem(
            summaryPageLocalStorage,
            JSON.stringify(response.summaryPageActivity)
          )
        }
		
        mapActivitesToSession();
		mapActivitesToPersistentSession();
      } else {
      }
    },
    error: function (e) {
      console.log('failure' + e)
    }
  })
}

function fetchKeywordSearchMetaData () {
  var map = fetchMetaData(SEARCH)
  map.set('searchKeyword', $('#parts').val())
  return map
}

function checkRecentKeywordSearch (partsVal) {
  var arr = JSON.parse(localStorage.getItem(searchLocalStorage))
  var flag = true
  var index = []
  if (arr != null) {
    jQuery.each(arr, function (i, val) {
      var t = (new Date().getTime() - val.ts) / 86400000
      if (val.search.keyword === partsVal && t < 1) {
        // delete index
        console.log(i)
        index.push(i)
      }
    })
    index.forEach(function (j) {
      arr.splice(j, 1)
    })
    localStorage.setItem(searchLocalStorage, JSON.stringify(arr))
  }
}

function trackSearchKeyWordUserActivity () {
  $(document).on('click', '#suggestion-list', function (event) {
    stepsToTrackSearchKeyWord()
    console.log('keywordSearch')
  })
}

function stepsToTrackSearchKeyWord () {
  fetchUserRecentActivities()
  var partsVal = $('#parts').val()
  if (partsVal != '') {
    checkRecentKeywordSearch(partsVal)
    var eventActivityJson = formJsonObj(fetchKeywordSearchMetaData(), SEARCH)
    trackUserActivity(eventActivityJson)
  }
}

function fetchUserActivityFromMyHeader () {
  /*$('.secondary-nav-link').click(function(e, from){
		if(from==undefined){
			loginIndex=0;
		}
		if(loginIndex==0){
	 		fetchUserRecentActivities();
			loginIndex=1;
		}
	 });*/
  $('.secondary-nav-link').click(function () {
    setTimeout(function () {
      NXP.loginBlock()
    }, 300)
  })
}

function getActivityIconDuplicate (assetType, activityType) {
  var icon = ''
  var iconName =
    assetType != '' && assetType != undefined
      ? iconData.get(assetType)
      : getIconVal(activityType)
  icon = '<span class=' + iconName + " style='font-size: 14px'></span> &nbsp;"
  return icon
}

function getIconVal (activityType) {
  var iconType = ''
  if (activityType === 'PAGE_VIEW') {
    iconType = iconData.get('PAGE_VIEW')
  } else if (activityType === 'K_SEARCH') {
    iconType = iconData.get('K_SEARCH')
  } else if (activityType === 'DOC_DOWNLOAD') {
    iconType = iconData.get('DOC_DOWNLOAD')
  } else {
    iconType = iconData.get('')
  }
  return iconType
}

//Read JSON From URL exclusion
function readJsonForUrlExClusion () {
  var json = (function () {
    var json = null
    $.ajax({
      async: false,
      type: 'GET',
      global: false,
      url: '/resources/scripts/analytics/exclusionList.json',
      dataType: 'json',
      success: function (data) {
        excludeUrl = data
      }
    })
    return json
  })()
}

//to compare the json list with the current URL
function isExcludeURL () {
  var flag = true
  readJsonForUrlExClusion()
  $.map(excludeUrl, function (elem, index) {
    if (window.location.pathname.includes(elem.url)) flag = false
  })

  // Do not track on Tab change on summary pages
  if (flag) {
    var currentUrl = [
      location.protocol,
      '//',
      location.host,
      location.pathname
    ].join('')

    flag = !(
      typeof assetType != 'undefined' &&
      window.location.search.includes('tab') &&
      document.referrer.includes(currentUrl)
    )
  }

  //check for Ecommerce
  if (
    flag &&
    document.location.hostname.includes('store') &&
    !(
      document.location.pathname.includes(
        '/webapp/ecommerce.add_item.framework'
      ) ||
      document.location.pathname.includes(
        'webapp/ecommerce.show_cart.framework'
      )
    )
  ) {
    flag = false
  }

  return flag
}

function anchorEvt_UA (evt, tag) {
  var e = evt.target || evt.srcElement
  while (e.tagName && e.tagName != tag) {
    e = e.parentElement || e.parentNode
  }
  return e
}

function getDocDownloadType (url) {
  var searchQuery = getUrlVars(url)

  var href = remProtocolFrmUrl_UA(url)
  href_path = href.split('/')
  var baseHref = href.split('?')[0]
  baseHref = href.split('#')[0]

  // Check based on the query param
  if (searchQuery != undefined && searchQuery.appType != undefined) {
    if (searchQuery.appType.toLocaleLowerCase().includes('license')) {
      return 'Licensed'
    } else {
      return 'Registered'
    }
  }

  // Check based on URL
  if (baseHref.indexOf('/download/mod_download.jsp') > -1) {
    return 'Registered'
  } else if (baseHref.indexOf('/webapp/Download') > -1) {
    return 'Registered'
  } else if (baseHref.indexOf('/download/license.jsp') > -1) {
    return 'Licensed'
  } else if (
    baseHref.indexOf('/secured/assets/documents/') > -1 ||
    baseHref.indexOf('/secured/assets/downloads/') > -1
  ) {
    return 'Secured Type'
  }

  if (href_path[1] == 'docs' || href_path[1] == 'downloads') {
    return 'Non-Secured'
  }

  return 'Not Applicable'
}

function isMarketLeveraged_UA ($anchorlink) {
  if (typeof $anchorlink != 'undefined') {
    if (typeof $anchorlink.hasClass == 'function')
      if ($anchorlink.hasClass('progressiveProfiling')) return true
  }
  return false
}

function remProtocolFrmUrl_UA (strUrl) {
  var str1 = strUrl
  var patt = /[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU|cn)/
  var res = patt.test(str1)
  if (res == true) {
    var wotprotocol = /^((https?|ftp):\/\/|\/\/|\/)/
    var res = str1.replace(wotprotocol, '')
    return res
  } else {
    var host = window.location.host + str1
    return host
  }
}

function trackDocumentAndSummaryPages (eventActivityJson) {
  fetchTaxoData(JSON.stringify(eventActivityJson))
}

function fetchTaxoData (map) {
  var arr = JSON.parse(map)
  var inputData = {
    a_type: arr.a_type,
    lang:
      typeof arr.asset.lang == 'undefined'
        ? typeof arr.lang == 'undefined'
          ? 'en'
          : arr.lang
        : arr.asset.lang,
    assetId: arr.asset.id,
    fetchType: 'taxoData'
  }

  $.ajax({
    url: NXP.megaMenuUrl + '/webapp/taxonomy/getAssets',
    type: 'POST',
    async: true,
    dataType: 'json',
    data: JSON.stringify(inputData),
    contentType: 'application/json; charset=utf-8',
    success: function (response) {
      var colBeanList = response.colBeanList
      var assetList = response.assetBeanList
      if (arr.a_type == DOWNLOAD) {
        if (colBeanList.length > 0) {
          arr.asset.title = unescape(colBeanList[0].assetName)
          arr.asset.type = colBeanList[0].docType
          arr.asset.url = colBeanList[0].url
          arr.asset.version = colBeanList[0].revisedCount
          arr.asset.id =
            colBeanList[0].collateralID != undefined &&
            colBeanList[0].collateralID.length > 0
              ? colBeanList[0].collateralID
              : arr.asset.id
          var marketingLeveraged = colBeanList[0].marketingLeveraged
          if (marketingLeveraged != null && marketingLeveraged == 'Y') {
            arr.asset.id = colBeanList[0].collateralID
            arr.asset.code = colBeanList[0].productCode
            arr.asset.isMarketingLevaraged = marketingLeveraged
          }
          var restrictedCollateral = colBeanList[0].isRestricted
          if (restrictedCollateral != null && restrictedCollateral == 'true') {
            arr.asset.isRestricted = restrictedCollateral
          }
          trackUserActivity(arr)
        } else console.log('No Collateral Data For Download')
      } else if (arr.a_type == PAGE_VIEW) {
        if (assetList.length > 0) {
          if (assetList[0].restricted === true) {
            arr.asset.id = assetList[0].assetId
          }
           // arr.asset.title = unescape(assetList[0].assetTitle)
		 
		 if(assetList[0].assetTitle == null || assetList[0].assetTitle =="" || assetList[0].assetTitle=='undefined'){
			  title=document.title;
			  console.log("title::"+title);
			
			  arr.asset.title = title;
		 }else{
			 arr.asset.title = unescape(assetList[0].assetTitle);

		 }
         
		 arr.asset.openGraphImage = assetList[0].openGraphImage
		 arr.asset.code = assetList[0].assetCode
		 arr.asset.type = assetList[0].assetType
         
		 // arr.asset.url = assetList[0].assetUrl
		 
		 if(assetList[0].assetUrl==null || assetList[0].assetUrl=="" || assetList[0].assetUrl!=='undefined'){
				url=window.location.href;
				console.log("url::"+url);
				arr.asset.url = url;
		 }else{
				arr.asset.url = assetList[0].assetUrl;

		 }
		 
          trackUserActivity(arr)
        } else console.log('No Collateral Data For PAGE_VIEW')
      }
    },
    error: function (status, error) {
      console.log('error')
    }
  })
}

function handleLocalStorageAfterLogin () {
  if ((checkSession() || checkPersistentCookie()) && ( !validateActivityDataToPersistentSession()||!validateActivityDataToSession())) {
    //$('#mynxpMm').addClass('close');
    setTimeout(function () {
      handlingLocalStorage('', false)
      fetchUserRecentActivities()
    }, 0)
    //setTimeout(function(){$(".secondary-nav-link" ).trigger("click",true);$('#mynxpMm').removeClass('close');}, waitTime);
  }
}

function getUrlVars (url) {
  var vars = {}
  var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value
  })
  return vars
}

function checkSession () {
  if ($.cookie != undefined) {
    return $.cookie('SessID') != undefined && $.cookie('SessID') != ''
  }
}

function mapActivitesToSession () {
  localStorage.setItem('activities_sess', $.cookie('SessID'))
}

function mapActivitesToPersistentSession () {
  if(checkPersistentCookie() && !checkSession()){
	  localStorage.setItem('activities_sess', $.cookie(USE_PER_AUTH))
  }
}

function validateActivityDataToSession () {
  return (
    $.cookie('SessID') ==
    localStorage.getItem('activities_sess', $.cookie('SessID'))
  )
}

function validateActivityDataToPersistentSession () {
  return (
    !checkSession() && $.cookie(USE_PER_AUTH) ==
    localStorage.getItem('activities_sess', $.cookie(USE_PER_AUTH))
  )
}

function trackUserActivityLoginFlow () {
  console.log('login flow triggered')
  //localStorage.setItem("loginFlow",true);
}

function clearUserActivityforGDPR () {
  if (!satTrackFlag) {
    // Clear local storage
    localStorage.removeItem(eventLocalStorage)
    localStorage.removeItem(searchLocalStorage)

    //Clear activity in DB for logged-in users
    remDbActivities()
  }
}

function remDbActivities () {
  var clearUrl = '/secured-rest/secureapi/clearActivities';
  if( !checkSession() && checkPersistentCookie())
  {
	  clearUrl = '/secured-rest/persistent/secureapi/clearActivities';
  }
  $.ajax({
    url:
      clearUrl +
      '?' +
      $.param({ clearCount: 0 }),
    type: 'post',
    cache: false,
    dataType: 'json',
    success: function (response) {
      // No Action
    },
    error: function (e) {
      console.log('failure' + e)
    }
  })
}

function logSearchActivity (kw) {
  console.log('GOT THE KEY WORD : ' + kw)

  stepsToTrackSearchKeyWord()
}

function fetchAppSpecificActivity (appName) {
  var eventData = JSON.parse(localStorage.getItem('eventActivity'))
  var arr = []
  if (eventData !== null && eventData !== undefined && eventData !== '') {
    eventData.map(function (item) {
      if (item.a_type == 'APP_ACTIVITY' && item.application == appName) {
        arr.push(item)
      }
    })
  }
  return arr
}
function populateActivity (jsonData) {
  $.ajax({
    url: '/secured-rest/secureapi/SAMRecentActivity',
    type: 'post',
    dataType: 'text',
    contentType: 'application/json',
    data: jsonData,
    success: function (data) {
      processJSONData(data)
      clearData()
    },
    error: function (error) {
      clearData()
    }
  })
}
function processJSONData (data) {
  const activities = JSON.parse(data)
  var idPrefix = 'act_'
  if (typeof activities != 'undefined') {
    Object.keys(activities).forEach(function (key) {
      var activitiesData = activities[key]
      var metaId = key
      const activitiesDataString = JSON.stringify(activitiesData)
      const activitiesDataJson = JSON.parse(activitiesDataString)
      var tagId = idPrefix.concat(metaId)
      if ($('#'.concat(tagId)).length > 0) {
        var title = activitiesDataJson['title']
        var url = activitiesDataJson['url']
        var rev = activitiesDataJson['rev']
        if (
          rev != '' &&
          typeof rev != 'undefined' &&
          rev != null &&
          title != '' &&
          typeof title != 'undefined' &&
          title != null
        ) {
          title = title + '<sup>' + 'Rev(' + rev + ')</sup>'
        }
        var anchorid = $('[id^=' + tagId + ']')
        if (anchorid.length > 0) {
          for (i = 0; i < anchorid.length; i++) {
            var application = anchorid[i].getAttribute('application')
            if (
              application == 'distynet' &&
              title != '' &&
              typeof title != 'undefined' &&
              title != null
            ) {
              var newTitle = ''
              newTitle = title + ' | DistyNet'
            }
            anchorid[i].setAttribute('class', 'dtmcustomrulelink')
            anchorid[i].setAttribute(
              'data-dtmaction',
              'Header: My NXP - Recent Activity - Link Click'
            )
            anchorid[i].setAttribute('data-dtmsubaction', title)
            anchorid[i].innerHTML = newTitle
            anchorid[i].href = url
          }
        }
      }
    })
  }
}
function clearData () {
  var countTitle = $("[id^='act_']")
  for (j = 0; j < countTitle.length; j++) {
    if (
      countTitle[j].innerHTML == '' ||
      countTitle[j].innerHTML == 'undefined'
    ) {
      countTitle[j].remove()
      //$('[id='+metaId+']').remove();
    }
  }
}

/* Sends localStorage activity to DB after login: async-friendly */
async function activitiesPostLogInAsync () {
  var userActivity = fetchLocalStorage()
  if ((checkSession() || checkPersistentCookie()) && userActivity && ( !validateActivityDataToPersistentSession()||!validateActivityDataToSession())) {
    var postActivity = userActivity.filter(function (obj) {
      return obj.dbFlag === 'false'
    })
    if (postActivity && postActivity.length > 0) {
      postActivity.forEach(function (item) {
        if (
          (item.a_type === DOWNLOAD || item.a_type === PAGE_VIEW) &&
          item.asset.id !== 'NA'
        ) {
          item.asset.title = ''
          item.asset.url = ''
          item.asset.type = ''
          //Comment or remove the below line to save the version to DB.
          item.asset.version = ''
          if (item.asset.code !== undefined) {
            delete item.asset.code
          }
          if (item.asset.isMarketingLevaraged !== undefined) {
            delete item.asset.isMarketingLevaraged
          }
        }
      })
     var dataReady = JSON.stringify(postActivity)
     var urlPersistent = '';
	if(checkSession())
	{
		urlPersistent = '/secured-rest/secureapi/activities?test=true';
	}
	else if(checkPersistentCookie()){
		urlPersistent =  '/secured-rest/persistent/secureapi/activities?test=true';
	}
      try {
        var response = await fetch(
          NXP.megaMenuUrl + urlPersistent,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            cache: 'no-cache',
            body: dataReady
          }
        )
        if (response == 'SUCCESS') {
          mergeOrUpdateLS(fetchLocalStorage())
        }
        if (localStorage.getItem('loginFlow') !== null) {
          localStorage.removeItem(eventLocalStorage)
          localStorage.removeItem(searchLocalStorage)
          localStorage.removeItem('loginFlow')
        }
        return true
      } catch (e) {
        console.error('Failure async activities', e)
        return false
      }
    }
    return ''
  }
  return ''
}

//#it adds as part PERSISTENT RECENT-ACTIVITIES
function checkPersistentCookie () {
  if ($.cookie != undefined) {
    return $.cookie(USE_PER_AUTH) != null && $.cookie(USE_PER_AUTH) != undefined && $.cookie(USE_PER_AUTH) != ''
  }
}
//# sourceURL=activity.js

function activityHandler () {
  setTimeout(function () {
    if (checkAllDomains(document.domain)) {
      // dirty fix (blocking : login.DefaultController) to resolve registration to login issue, this will be worked on for a proper and clean fix
      if (
        satTrackFlag &&
        window.location.pathname.indexOf(
          'security/public/login.DefaultController.sp'
        ) == -1
      ) {
        if (window.location.pathname.indexOf('/app-distynet/') == -1 && window.location.pathname.indexOf('/app-salesnet/') == -1) {
          setTimeout(function () {
            trackPageViewUserActivity()
          }, waitTime)
        }
        if (!window.location.pathname.includes('/mynxp/activity')) {
          var downloadClick =
            navigator.appVersion.indexOf('MSIE') != -1 ? 'click' : 'mousedown'
          eventClick(downloadClick, 'trackDownloadLeftClick')
          eventClick('contextmenu', 'trackDownloadRightClick')
        }
        fetchUserActivityFromMyHeader()
        trackSearchKeyWordUserActivity()
        trackSoftwareDownloadUserActivity()
        handleLocalStorageAfterLogin()
      } else {
        clearUserActivityforGDPR()
      }
    }
  }, waitTime)
}

if (document.readyState !== 'loading') {
  activityHandler()
} else {
  document.addEventListener('DOMContentLoaded', activityHandler)
}
