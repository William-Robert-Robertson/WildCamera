"use strict";
(function () {
  function checkURL(urlStr) {
    return window.location.hostname == urlStr;
  }
  function hasScriptLoaded(jsFile) {
    return document.querySelector(`script[src="${jsFile}"]`);
  }
  function appendScript(hasAutoBlock, jsFile, isTest) {
    const test = isTest ? "-test" : "";
    const head = document.head;
    let otScript = document.createElement("script");
    if (hasAutoBlock) {
      const abUrl = `https://cdn.cookielaw.org/consent/91cc4c7b-323c-4c7e-8374-340c1fe62aa2/OtAutoBlock.js`;
      let abScript = document.createElement("script");
      abScript.setAttribute("type", "text/javascript");
      abScript.setAttribute("src", abUrl);
      head.insertBefore(abScript, head.firstChild);
    }

    otScript.setAttribute("type", "text/javascript");
    otScript.setAttribute("src", jsFile);
    otScript.setAttribute("charset", "UTF-8");
    otScript.setAttribute(
      "data-domain-script",
      `91cc4c7b-323c-4c7e-8374-340c1fe62aa2${test}`
    );
    head.insertBefore(otScript, head.children[1]);
  }

  let jsFile = null;
  let hasAutoBlock = false;
  let isTest = false;
  switch (true) {
    case checkURL("uat.nxp.com.cn"):
      jsFile =
        "https://uat.nxp.com.cn/shared/oneTrust/oneTrust_test/scripttemplates/otSDKStub.js";
      isTest = true;
      break;
    case checkURL("www.nxp.com.cn"):
      jsFile =
        "https://www.nxp.com.cn/shared/oneTrust/oneTrust_production/scripttemplates/otSDKStub.js";
      break;
	case checkURL("store-uat.nxp.com"):
		jsFile =
		"https://store-uat.nxp.com/shared/oneTrust/oneTrust_test/scripttemplates/otSDKStub.js";
		isTest=true;
		  break;
	case checkURL("store.nxp.com"):
		jsFile =
		"https://store.nxp.com/shared/oneTrust/oneTrust_production/scripttemplates/otSDKStub.js";
		 break;
    case checkURL("uat.nxp.com"):
      // hasAutoBlock = true
      jsFile =
        "https://uat.nxp.com/shared/oneTrust/oneTrust_test/scripttemplates/otSDKStub.js";
      isTest = true;
      break;
    case checkURL("www.nxp.com"):
      jsFile =
        "https://www.nxp.com/shared/oneTrust/oneTrust_production/scripttemplates/otSDKStub.js";
      break;

     case checkURL("uat.nxp.jp"):
      jsFile =
        "https://uat.nxp.jp/shared/oneTrust/oneTrust_test/scripttemplates/otSDKStub.js";
	   isTest=true;
      break;
     case checkURL("www.nxp.jp"):
      jsFile =
        "https://www.nxp.jp/shared/oneTrust/oneTrust_production/scripttemplates/otSDKStub.js";
      break;
	case checkURL("uat.nxp.co.kr"):
      jsFile =
        "https://uat.nxp.co.kr/shared/oneTrust/oneTrust_test/scripttemplates/otSDKStub.js"
		isTest=true;
      break;
     case checkURL("www.nxp.co.kr"):
      jsFile =
        "https://www.nxp.co.kr/shared/oneTrust/oneTrust_production/scripttemplates/otSDKStub.js";
		break;
    default:
      jsFile =
        "https://www.nxp.com/shared/oneTrust/oneTrust_production/scripttemplates/otSDKStub.js";
  }
  if (!hasScriptLoaded(jsFile)) {
    appendScript(hasAutoBlock, jsFile, isTest);
  }
})();