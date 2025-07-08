const bundleReferences = {"buildInfo":"07/02/2025 23:24:42 UTC","bundles":[{"name":"master-bundle","url":"/resources/scripts/react/master-bundle_f01232abba1.js"},{"name":"cross-reference-tool","url":"/resources/scripts/react/cross-refernce-tool-bundle_f01232abba1.js"},{"name":"design-advisor","url":"/resources/scripts/react/design-advisor-bundle_f01232abba1.js"},{"name":"my-nxp","url":"/resources/scripts/react/my-nxp-bundle_f01232abba1.js"},{"name":"search-landing-page","url":"/resources/scripts/react/search-landing-page-bundle_f01232abba1.js"},{"name":"product-advisor-spa","url":"/resources/scripts/react/product-advisor-bundle_f01232abba1.js"},{"name":"product-selector-spa","url":"/resources/scripts/react/product-selector-bundle_f01232abba1.js"},{"name":"quick-search","url":"/resources/scripts/react/quick-search-bundle_f01232abba1.js"},{"name":"website-feedback","url":"/resources/scripts/react/website-feedback-bundle_f01232abba1.js"},{"name":"blogs","url":"/resources/scripts/react/blogs-bundle_f01232abba1.js"},{"name":"documentation-library","url":"/resources/scripts/react/documentation-library-bundle_f01232abba1.js"},{"name":"hardware-dev-tools","url":"/resources/scripts/react/hardware-dev-tools-bundle_f01232abba1.js"},{"name":"news-spa","url":"/resources/scripts/react/news-spa-bundle_f01232abba1.js"},{"name":"online-training","url":"/resources/scripts/react/training-bundle_f01232abba1.js"},{"name":"partner-marketplace","url":"/resources/scripts/react/partner-marketplace-bundle_f01232abba1.js"},{"name":"reference-designs","url":"/resources/scripts/react/reference-designs-bundle_f01232abba1.js"},{"name":"video-vault","url":"/resources/scripts/react/video-vault-bundle_f01232abba1.js"},{"name":"crosscheck-quick-pricing","url":"/resources/scripts/react/crosscheck-quick-pricing-bundle_f01232abba1.js"},{"name":"partner-profile","url":"/resources/scripts/react/partner-profile-bundle_f01232abba1.js"},{"name":"product-selector-v2","url":"/resources/scripts/react/product-selector-v2-bundle_f01232abba1.js"},{"name":"react-dynamic-form","url":"/resources/scripts/react/react-dynamic-form-bundle_f01232abba1.js"},{"name":"social-media","url":"/resources/scripts/react/social-media-bundle_f01232abba1.js"},{"name":"software-library","url":"/resources/scripts/react/software-library-bundle_f01232abba1.js"},{"name":"software-manager-tool","url":"/resources/scripts/react/software-management-bundle_f01232abba1.js"},{"name":"cross-reference-tool-2.0","url":"/resources/scripts/react/cross-reference-tool-2.0-bundle_f01232abba1.js"},{"name":"store","url":"/resources/scripts/react/store-bundle_f01232abba1.js"},{"name":"shopping-cart","url":"/resources/scripts/react/shopping-cart-bundle_f01232abba1.js"},{"name":"development-boards-and-designs","url":"/resources/scripts/react/development-boards-and-designs-bundle_f01232abba1.js"}]};/*global bundleReferences*/
window.NXP = {
  isLoggedIn: function () {
    var retVal = false;
    var sessId = this.getCookie('SessID');
    if (sessId && sessId !== '') {
      retVal = true;
    }
    return retVal;
  },
  getCookie: function getCookie(name) {
    if (!name) {
      return null;
    }
    function escape(s) {
      return s.replace(/([.*+?^${}()|[\]/\\])/g, '\\$1');
    }
    var match = document.cookie.match(
      RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)')
    );
    return match ? match[1] : null;
  },
};
function nxpBundleLoader(bundleData) {
  try {
    let id = [];
    switch (bundleData.name) {
      case 'blogs':
        id.push('blogs-app');
        break;
      case 'cross-reference-tool-2.0':
        id.push('cross-reference-tool-app-2.0');
        break;
      case 'crosscheck-quick-pricing':
        id.push('container-quick-pricing');
        break;
      case 'design-advisor':
        id.push('design-advisor');
        break;
      case 'documentation-library':
        id.push('documentation-app');
        break;
      case 'my-nxp':
        id.push('my-nxp');
        break;
      case 'news-spa':
        id.push('newsroom-spa');
        break;
      case 'online-training':
        id.push('training-app');
        break;
      case 'partner-marketplace':
        id.push('partner-marketplace-app');
        id.push('partner-directory-app');
        break;
      case 'partner-profile':
        id.push('partnerProfileRedesign');
        break;
      case 'product-advisor-spa':
        id.push('product-advisor-app');
        break;
      case 'product-selector-spa':
        id.push('product-selector-component');
        id.push('product-selector-app');
        id.push('part-details-app');
        break;
      case 'product-selector-v2':
        id.push('product-selector-v2-component');
        id.push('product-selector-v2-app');
        id.push('part-details-app-v2');
        break;
      case 'quick-search':
        id.push('quick-search-app');
        break;
      case 'react-dynamic-form':
        id.push('react-dynamic-form');
        break;
      case 'search-landing-page':
        id.push('search-landing-page-app');
        break;
      case 'social-media':
        id.push('social-media-app');
        id.push('social-media-app-twitter');
        id.push('social-media-app-facebook');
        id.push('social-media-app-linkedin');
        break;
      case 'software-center-redux':
        id.push('software-center-app');
        break;
      case 'software-library':
        id.push('software-library-app');
        break;
      case 'software-manager-tool':
        id.push('software-manager-tool');
        break;
      case 'video-vault':
        id.push('Video-Vault-app');
        break;
      case 'website-feedback':
        id.push('website-feedback-app');
        break;
      case 'development-boards-and-designs':
        id.push('development-boards-and-designs-app');
        break;
      case 'store':
        id.push('store-app');
        break;
      case 'shopping-cart':
        id.push('shopping-cart-app');
        break;
      default:
        break;
    }
    const bundlesToLoad = [];
    for (const bundleId of id) {
      if (document.getElementById(bundleId)) {
        bundlesToLoad.push(bundleData.url);
      }
    }
    const uniqueBundlesToLoad = [...new Set(bundlesToLoad)];
    for (const url of uniqueBundlesToLoad) {
      const script = document.createElement('script');
      script.setAttribute('src', url);
      script.setAttribute('type', 'text/javascript');
      document.getElementsByTagName('body')[0].append(script);
    }
  } catch (error) {
    console.error('nxpBundleLoader: ', error);
  }
}

function nxpBundleReferences() {
  try {
    for (const bundle of bundleReferences.bundles) {
      if (bundle.name !== 'master-bundle') {
        nxpBundleLoader(bundle);
      }
    }
  } catch (error) {
    console.error('nxpGlobalLoader: ', error);
  }
}

function nxpPullSPA() {
  let maxTries = 10;
  const delay = 300;
  const initInterval = setInterval(() => {
    if (window.NXP && window.NXP.globalState && window.NXP.globalState.labels) {
      nxpBundleReferences();
      clearInterval(initInterval);
    } else if (maxTries === 0 || (window.NXP && window.NXP.locale === 'en')) {
      nxpBundleReferences();
      clearInterval(initInterval);
    }
    maxTries--;
  }, delay);
}

function nxpGlobalLoader() {
  try {
    const urlHostname =
      window.location.hostname === 'etpu.nxp.com' ? 'https://www.nxp.com' : '';
    const script = document.createElement('script');
    script.setAttribute('src', urlHostname + bundleReferences.bundles[0].url);
    script.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('body')[0].append(script);
    nxpPullSPA();
  } catch (error) {
    console.error('nxpGlobalLoader: ', error);
  }
}

nxpGlobalLoader();
