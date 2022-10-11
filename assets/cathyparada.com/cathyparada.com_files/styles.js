(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nhtml {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizelegibility;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-size: 16px; }\n\nhtml,\nbody,\n.main {\n  min-height: 100%;\n  min-width: 100%;\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  margin: 0px; }\n\nbody {\n  transition: background-image 1000ms linear;\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-perspective: 1800px;\n          perspective: 1800px; }\n\ntextarea {\n  pointer-events: none;\n  opacity: 0; }\n\n.card-holster {\n  transition: -webkit-transform 600ms ease;\n  transition: transform 600ms ease;\n  transition: transform 600ms ease, -webkit-transform 600ms ease;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-perspective: 1800px;\n          perspective: 1800px;\n  height: 430px;\n  width: 230px;\n  position: relative;\n  flex: 1;\n  margin-right: 48px; }\n\n.card-holster:last-child {\n    margin-right: 0; }\n\n.card-holster:hover {\n    opacity: 1; }\n\n.card-holster .front,\n  .card-holster .back {\n    transition-property: box-shadow, -webkit-transform;\n    transition-property: transform, box-shadow;\n    transition-property: transform, box-shadow, -webkit-transform;\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1); }\n\n.card-holster\n.card-holster:hover .front,\n.card-holster:hover .back {\n  transition-delay: 0ms !important;\n  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.05); }\n\n.card-holster:hover .front .shine,\n.card-holster:hover .back .shine {\n  -webkit-transform: translateX(-150px) rotateZ(-30deg) !important;\n          transform: translateX(-150px) rotateZ(-30deg) !important; }\n\n.card-holster .outer-wrapper {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  transition-delay: 0ms;\n  -webkit-transform: translateZ(0px);\n          transform: translateZ(0px);\n  transition: -webkit-transform 150ms ease; }\n\n.card-holster .outer-wrapper:hover {\n  -webkit-transform: translateZ(40px);\n          transform: translateZ(40px); }\n\n.card-holster.flipped .front {\n  -webkit-transform: translate3d(-50%, -50%, 0px) rotateY(180deg) !important;\n          transform: translate3d(-50%, -50%, 0px) rotateY(180deg) !important; }\n\n.card-holster.flipped .back {\n  -webkit-transform: translate3d(-50%, -50%, 0px) rotateY(0deg) !important;\n          transform: translate3d(-50%, -50%, 0px) rotateY(0deg) !important; }\n\n.card-holster .card {\n  transition: -webkit-transform 500ms ease, box-shadow 150ms ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  text-align: center;\n  border-radius: 5px;\n  background: #fff;\n  overflow: hidden;\n  z-index: 2;\n  height: 420px;\n  width: 250px; }\n\n.card-holster .card.back {\n  z-index: 1;\n  -webkit-transform: translate3d(-50%, -50%, 0px) rotateY(-180deg);\n          transform: translate3d(-50%, -50%, 0px) rotateY(-180deg); }\n\n.card-holster .card .color-wrapper {\n  border-radius: 5px 5px 10px 10px;\n  height: 100%; }\n\n.card-holster:nth-child(1) .color-wrapper {\n  background-color: #0166c0; }\n\n.card-holster:nth-child(2) .color-wrapper {\n  background-color: #00203f; }\n\n.card-holster:nth-child(3) .color-wrapper {\n  background-color: #0376c1; }\n\n.card-holster:nth-child(4) .color-wrapper {\n  background-color: #5ca3da; }\n\n.card-holster:nth-child(5) .color-wrapper {\n  background-color: #a86e40; }\n\n.card-holster:nth-child(6) .color-wrapper {\n  background-color: #f1e9dd; }\n\n.card-holster .card .top-half {\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n  -webkit-transform: translateY(0px);\n          transform: translateY(0px);\n  position: absolute;\n  cursor: pointer;\n  height: 395px;\n  width: 100%;\n  left: 0px;\n  top: 0px; }\n\n.card-holster .card .top-half .shine {\n  box-shadow: 0px 0px 90px 10px rgba(255, 255, 255, 0.3);\n  transition: -webkit-transform 150ms ease;\n  transition: transform 150ms ease;\n  transition: transform 150ms ease, -webkit-transform 150ms ease;\n  position: absolute;\n  width: 260px;\n  height: 0px;\n  left: -90px;\n  top: 38px; }\n\n.card-holster .card .top-half:hover .font-container {\n  opacity: 0; }\n\n.card-holster .card .top-half:hover .hex-container {\n  opacity: 1; }\n\n.card-holster .card .top-half .font-container {\n  transition: opacity 200ms linear;\n  position: absolute;\n  height: 150px;\n  width: 100%;\n  top: 90px; }\n\n.card-holster .card .top-half .font-container .sample-container {\n  text-decoration: none;\n  position: absolute;\n  line-height: 100%;\n  color: #fff;\n  width: 100%; }\n\n.card-holster .card .top-half .font-container .sample-container.large {\n  bottom: 60px; }\n\n.card-holster .card .top-half .font-container .sample-container.large .sample {\n  font-size: 80px; }\n\n.card-holster .card .top-half .font-container .sample-container.small {\n  bottom: 0px; }\n\n.card-holster .card .top-half .font-container .sample-container.small .sample {\n  font-size: 32px; }\n\n.card-holster .card .top-half .hex-container {\n  transition: opacity 200ms linear;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  opacity: 0;\n  left: 0px;\n  top: 0px; }\n\n.card-holster .card .top-half .hex-container .hex-centerer {\n  position: absolute;\n  width: 100%;\n  top: 155px; }\n\n.card-holster .card .top-half .hex-container .hex-value {\n  text-transform: lowercase;\n  letter-spacing: 0.5px;\n  font-weight: bold;\n  font-size: 25px; }\n\n.card-holster .card .top-half .copy-text {\n  transition: opacity 300ms, -webkit-transform 300ms;\n  transition: transform 300ms, opacity 300ms;\n  transition: transform 300ms, opacity 300ms, -webkit-transform 300ms;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  letter-spacing: 1px;\n  position: absolute;\n  font-weight: bold;\n  font-size: 12px;\n  bottom: 10px;\n  color: #fff;\n  width: 100%;\n  -webkit-transform: translateY(-50px);\n          transform: translateY(-50px);\n  opacity: 0; }\n\n.card-holster .card .top-half .success-box {\n  -webkit-transform: translateX(-50%) translateY(100px);\n          transform: translateX(-50%) translateY(100px);\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);\n  position: absolute;\n  border-radius: 5px;\n  margin-top: 100px;\n  padding-top: 50px;\n  background: #fff;\n  height: 180px;\n  width: 150px;\n  opacity: 0;\n  left: 50%; }\n\n.card-holster .card .top-half .success-box.active {\n  transition: all 200ms ease-out;\n  -webkit-transform: translateX(-50%) translateY(0px);\n          transform: translateX(-50%) translateY(0px);\n  opacity: 1; }\n\n.card-holster .card .top-half .success-box.out {\n  transition: all 150ms ease-out;\n  -webkit-transform: translateX(-50%) translateY(0px);\n          transform: translateX(-50%) translateY(0px);\n  opacity: 0; }\n\n.card-holster .card .top-half .success-box img {\n  margin-right: -10px; }\n\n.card-holster .card .top-half .success-box span {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  letter-spacing: 1px;\n  font-weight: normal;\n  text-align: center;\n  margin-top: 15px;\n  font-size: 11px;\n  display: block;\n  color: black;\n  width: 100%; }\n\n.card-holster .card .bottom-half {\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n  -webkit-transform: translateY(75px);\n          transform: translateY(75px);\n  position: absolute;\n  text-decoration: none;\n  width: 100%;\n  bottom: 0px;\n  left: 0; }\n\n.card-holster .card .bottom-half .sexy-tricky-to-code-dip {\n  margin-bottom: -1px;\n  overflow: hidden;\n  height: 10px; }\n\n.card-holster .card .bottom-half .sexy-tricky-to-code-dip .left-part,\n.card-holster .card .bottom-half .sexy-tricky-to-code-dip .right-part {\n  width: 50%;\n  height: 100%;\n  background: #fff; }\n\n.card-holster .card .bottom-half .sexy-tricky-to-code-dip .left-part {\n  margin-left: -15px;\n  float: left; }\n\n.card-holster .card .bottom-half .sexy-tricky-to-code-dip .right-part {\n  margin-right: -15px;\n  float: right; }\n\n.card-holster .card .bottom-half .sexy-tricky-to-code-dip svg {\n  height: 10px;\n  width: 30px;\n  float: left;\n  fill: #fff; }\n\n.card-holster .card .bottom-half .bottom-bottom-container {\n  background: #fff;\n  height: 90px; }\n\n.card-holster .card .bottom-half .bottom-bottom-container .font-details {\n  transition: opacity 300ms ease;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  padding-top: 20px;\n  font-weight: bold; }\n\n.card-holster .card .bottom-half .bottom-bottom-container .font-details .name {\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 15px;\n  color: #000; }\n\n.card-holster\n.card\n.bottom-half\n.bottom-bottom-container\n.font-details\n.creator {\n  letter-spacing: 0.4px;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #cccccc; }\n\n.card-holster .card .bottom-half .eye-container {\n  background: #fff;\n  height: 70px; }\n\n.card-holster .card .bottom-half .eye-container .eye {\n  transition: all 300ms ease;\n  opacity: 0; }\n\n.card-holster .mouse-over-top .bottom-half {\n  -webkit-transform: translateY(135px);\n          transform: translateY(135px); }\n\n.card-holster .mouse-over-top .bottom-half .font-details {\n  opacity: 0; }\n\n.card-holster .mouse-over-top .copy-text {\n  -webkit-transform: translateY(0px) !important;\n          transform: translateY(0px) !important;\n  opacity: 1 !important; }\n\n.card-holster .mouse-over-bottom .top-half {\n  -webkit-transform: translateY(-40px);\n          transform: translateY(-40px); }\n\n.card-holster .mouse-over-bottom .bottom-half {\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px); }\n\n.card-holster .mouse-over-bottom .eye {\n  opacity: 1 !important; }\n\n.palette-info {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  text-decoration: none;\n  position: absolute;\n  text-align: center;\n  bottom: 80px;\n  left: 50%;\n  opacity: 0; }\n\n.palette-info .colorset {\n  transition: -webkit-transform 100ms ease-out;\n  transition: transform 100ms ease-out;\n  transition: transform 100ms ease-out, -webkit-transform 100ms ease-out;\n  margin: auto;\n  width: 160px;\n  height: 5px; }\n\n.palette-info .colorset .sweet-color {\n  width: 33px;\n  margin-left: -1px;\n  height: 5px;\n  float: left; }\n\n.palette-info:hover .colorset {\n  -webkit-transform: scaleX(1.3);\n          transform: scaleX(1.3); }\n\n.palette-info .name {\n  text-decoration: none;\n  text-transform: capitalize;\n  font-weight: bold;\n  padding-top: 14px;\n  font-size: 25px;\n  color: #000; }\n\n.palette-info .creator {\n  text-decoration: none;\n  letter-spacing: 0.8px;\n  font-weight: bold;\n  padding-top: 4px;\n  font-size: 13px;\n  color: #ccc; }\n\n.the-i {\n  position: absolute;\n  margin-left: -3px;\n  z-index: 0;\n  bottom: 20px;\n  left: 50%; }\n\nfooter {\n  -webkit-filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));\n          filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  position: fixed;\n  height: 70px;\n  width: 100%;\n  bottom: 0px;\n  z-index: 50; }\n\nfooter:hover .footer-item {\n  -webkit-transform: translateY(0px);\n          transform: translateY(0px); }\n\nfooter .footer-item {\n  transition: -webkit-transform 200ms ease-out;\n  -webkit-transform: translateY(50px);\n          transform: translateY(50px);\n  border-radius: 5px 5px 0px 0px;\n  text-align: center;\n  margin-right: 60px;\n  margin-left: 60px;\n  overflow: hidden;\n  height: 100%;\n  z-index: 0; }\n\nfooter .footer-item .footer-bottom {\n  padding-right: 30px;\n  padding-left: 30px;\n  background: #fff;\n  height: 70px; }\n\nfooter .footer-item .footer-bottom .logo {\n  letter-spacing: 0.8px;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 20px;\n  color: #000;\n  float: left;\n  margin-top: 9px;\n  display: block; }\n\nfooter .footer-item .footer-bottom .logo span {\n  font-weight: normal;\n  color: #b2d4dc; }\n\nfooter .footer-item .footer-bottom .about {\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  letter-spacing: 0.5px;\n  position: absolute;\n  padding-top: 16px;\n  font-size: 12px;\n  left: 50%; }\n\nfooter .footer-item .footer-bottom .about a {\n  text-decoration: none;\n  color: #bb84a6; }\n\nfooter .footer-item .footer-bottom .about a:hover {\n  text-decoration: underline; }\n\nfooter .top-dip-thingo {\n  height: 15px; }\n\nfooter .the-rest {\n  background: #fff;\n  height: 100%; }\n\nfooter .left-part,\nfooter .right-part {\n  width: 50%;\n  height: 15px;\n  background: #fff; }\n\nfooter .left-part {\n  margin-left: -23px;\n  float: left; }\n\nfooter .right-part {\n  margin-right: -23px;\n  float: right; }\n\nfooter svg {\n  float: left;\n  fill: #fff; }\n\nfooter .share {\n  margin-top: 7px;\n  float: right; }\n\nfooter .share .facebook,\nfooter .share .twitter {\n  cursor: pointer; }\n\nfooter .share .facebook {\n  margin-left: 6px; }\n\n.expander {\n  box-shadow: 0px 0px 1px 0px;\n  border-radius: 100%;\n  position: absolute;\n  margin-left: -1px;\n  margin-top: -1px;\n  height: 2px;\n  width: 2px; }\n\n.expander.active {\n  -webkit-animation: expand 500ms;\n          animation: expand 500ms; }\n\n@-webkit-keyframes expand {\n  0% {\n    box-shadow: 0px 0px 1px 0px; }\n  100% {\n    box-shadow: 0px 0px 100px 500px;\n    opacity: 0; } }\n\n@keyframes expand {\n  0% {\n    box-shadow: 0px 0px 1px 0px; }\n  100% {\n    box-shadow: 0px 0px 100px 500px;\n    opacity: 0; } }\n\n@media only screen and (max-width: 1300px) {\n  .card-holster .card {\n    height: 390px;\n    width: 230px; }\n  .card-holster .card .top-half .font-container {\n    top: 70px; } }\n\n@media only screen and (max-width: 1200px) {\n  .card-holster .card {\n    height: 320px;\n    width: 200px; }\n  .card-holster .card .top-half .font-container {\n    top: 20px; }\n  .card-holster .card .top-half .font-container .sample-container.large {\n    bottom: 50px; }\n  .card-holster\n.card\n.top-half\n.font-container\n.sample-container.large\n.sample {\n    font-size: 65px; }\n  .card-holster .card .top-half .font-container .sample-container.small {\n    bottom: 5px; }\n  .card-holster\n.card\n.top-half\n.font-container\n.sample-container.small\n.sample {\n    font-size: 26px; }\n  .card-holster .card .top-half .hex-container .hex-centerer {\n    top: 110px; } }\n\n@media only screen and (max-width: 1129px) {\n  .footer-item .about {\n    padding-top: 10px !important; } }\n\n.comp-music {\n  width: 72px;\n  height: 86px;\n  position: fixed;\n  top: 206px;\n  left: 32px;\n  opacity: 0.8; }\n\n.comp-content {\n  height: 100%;\n  width: 100%; }\n\n.comp-content::before {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: '';\n    background: url('shutterstock_793987759.jpg') no-repeat center center fixed;\n    background-size: cover;\n    -webkit-filter: blur(3px);\n            filter: blur(3px); }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andredavcev/Files/Cathy/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map