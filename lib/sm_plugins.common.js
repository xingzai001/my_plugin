module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5e40":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7524":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "f85c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_sm_scroll_vue_vue_type_style_index_0_id_407f2133_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e40");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_sm_scroll_vue_vue_type_style_index_0_id_407f2133_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_sm_scroll_vue_vue_type_style_index_0_id_407f2133_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f8cc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_sm_scroll_y_vue_vue_type_style_index_0_id_bed3d0ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7524");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_sm_scroll_y_vue_vue_type_style_index_0_id_bed3d0ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_sm_scroll_y_vue_vue_type_style_index_0_id_bed3d0ee_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugin/scroll/sm_scroll.vue?vue&type=template&id=407f2133


const _hoisted_1 = { style: {"height":"100%"} }
const _hoisted_2 = { id: "first" }
const _hoisted_3 = {
  class: "scroll_div",
  id: "scroll_div"
}
const _hoisted_4 = {
  key: 0,
  class: "main"
}
const _hoisted_5 = { id: "ul" }
const _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("li", { class: "draw_up" }, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", { class: "box" }, [
    /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("加载中 "),
    /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", { class: "loader-03" })
  ])
], -1)
const _hoisted_7 = {
  key: 0,
  class: "empty"
}
const _hoisted_8 = { style: {"margin-top":"10px"} }
const _hoisted_9 = {
  key: 1,
  class: "draw_down"
}
const _hoisted_10 = {
  key: 0,
  class: "box"
}
const _hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("加载中 ")
const _hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", { class: "loader-03" }, null, -1)
const _hoisted_13 = {
  key: 1,
  id: "onscroll",
  class: "onscroll"
}
const _hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("li", { class: "draw_up" }, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", { class: "box" }, [
    /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("加载中 "),
    /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", { class: "loader-03" })
  ])
], -1)
const _hoisted_15 = {
  key: 0,
  class: "empty"
}
const _hoisted_16 = { style: {"margin-top":"10px"} }
const _hoisted_17 = {
  key: 1,
  class: "draw_down"
}
const _hoisted_18 = {
  key: 0,
  class: "box"
}
const _hoisted_19 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("加载中 ")
const _hoisted_20 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", { class: "loader-03" }, null, -1)
const _hoisted_21 = { id: "floor" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "first")
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_3, [
      (!$data.pc)
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("aside", _hoisted_4, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
              class: "draw",
              id: "draw",
              style: {background:$props.background}
            }, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("ul", _hoisted_5, [
                _hoisted_6,
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "content"),
                ($data.isEmpty&&$props.empty_open)
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_7, [
                      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("img", {
                        src: $props.empty_img,
                        class: "empty_img"
                      }, null, 8, ["src"]),
                      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.empty_title), 1)
                    ]))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
                (!$props.empty_open||!$data.isEmpty)
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("li", _hoisted_9, [
                      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.hint==='加载中'?'':$data.hint) + " ", 1),
                      ($data.hint==='加载中')
                        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_10, [
                            _hoisted_11,
                            _hoisted_12
                          ]))
                        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
                    ]))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
              ])
            ], 4)
          ]))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
      ($data.pc)
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_13, [
            _hoisted_14,
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "content"),
            ($data.isEmpty&&$props.empty_open)
              ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_15, [
                  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("img", {
                    src: $props.empty_img,
                    class: "empty_img"
                  }, null, 8, ["src"]),
                  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.empty_title), 1)
                ]))
              : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
            (!$props.empty_open||!$data.isEmpty)
              ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("li", _hoisted_17, [
                  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.hint==='加载中'?'':$data.hint) + " ", 1),
                  ($data.hint==='加载中')
                    ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_18, [
                        _hoisted_19,
                        _hoisted_20
                      ]))
                    : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
                ]))
              : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
          ]))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_21, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "floor")
    ])
  ]))
}
// CONCATENATED MODULE: ./plugin/scroll/sm_scroll.vue?vue&type=template&id=407f2133

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugin/scroll/sm_scroll.vue?vue&type=script&lang=js


/* harmony default export */ var sm_scrollvue_type_script_lang_js = ({
  name: "sm_scroll",
  props:{
    h_up:{//下拉多少触发加载
      type:Number,
      default:200,
    },
    h_down:{//上拉多少触发加载
      type:Number,
      default:-100,
    },
    p_down:{//上拉多少触发加载
      type:Number,
      default:20,
    },
    //是否首次加载
    first_load:{
      type:Boolean,
      default:true,
    },
    //背景颜色
    background:{
      type:String,
      default:"#f8f8f8",
    },
    //开启空数据展示空间
    empty_open:{
      type:Boolean,
      default:true,
    },
    //空图片地址
    empty_img:{
      type:String,
      default: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fart_water_pic%2F19%2F09%2F11%2F8039fc783e83cda40353e097aa302713.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627092290&t=91cfb51dce397dc62ccb27edec266510",
    },
    //空数据提示
    empty_title:{
      type:String,
      default: "暂无数据",
    }
  },
  data() {
    return {
      //h5
      ul: {},
      startY: 0, // 刚触碰到屏幕的时的手指信息
      centerY: 0, // 用来记录每次触摸时上一次的偏移距离
      oldCenterY: 0, // 用来记录上次触摸时上一次的偏移距离
      startTime: 0,//开始时间
      endTime: 0,//结束时间
      //pc
      pc: false,

      hint:'',//提示
      bool: true,//请求方法是否执行完成，
      title1:"上拉加载更多",
      draw_up:{},
      draw_down:{},
      isEmpty:false,

    }
  },

  created() {
    this.pc = this.isPC();
  },
  mounted() {
    if (this.pc) {
      this.onscroll();
    } else {
      let draw = document.querySelector('#draw');
      this.ul = draw.children[0];
      this.ul.addEventListener('touchstart', this.touchstart, {passive: true});
      this.ul.addEventListener('touchmove', this.touchmove, {passive: true});
      this.ul.addEventListener('touchend', this.touchend);
    }

    //动态计算高度
    this.$nextTick(() => {
      this.draw_up=document.getElementsByClassName("draw_up")[0];
      this.draw_down=document.getElementsByClassName("draw_down")[0];

      let first=document.getElementById("first").offsetHeight;
      let floor=document.getElementById("floor").offsetHeight;
      document.querySelector('#scroll_div').style.height="calc(100% - "+(first+floor)+"px)";
       if(!this.pc) {
         document.querySelector('#draw').style.height = "calc(100% - " + (first + floor) + "px)";
       }

      this.firstLoad();
    })
  },

  methods: {

    /**
     * 重新加载数据
     */
    reLoad(){

        let _this=this;
        _this.ul.style.transform = 'translateY(0px)';
        _this.ul.style.transition = 'transform .1s';
        _this.centerY=0;
        _this.isEmpty=false;
        _this.draw_down.style.display = "none";
        _this.draw_up.style.display = "block";
        _this.hint="加载中"
      if (this.bool) {//一次只发送一个请求
        this.bool = false;
        _this.$emit("draw_up", (bool, hint, isEmpty) => {
          _this.bool =true;
          _this.hint = bool ? _this.title1 : hint;
          _this.isEmpty = bool ? false : isEmpty;
          _this.draw_down.style.display = "block";
          _this.draw_up.style.display = "none";
        });
      }
    },

    /**
     *上拉加载
     **/
    drawDownLoad(){
      let _this=this;
      _this.draw_down.style.display = "block";
      this.hint ='加载中';
      if (this.bool) {//一次只发送一个请求
        this.bool = false;
        this.$emit("draw_down", (val, hint,isEmpty) => {
          _this.bool = true;
          _this.hint =val? _this.title1 :hint;
          _this.isEmpty=val?false:isEmpty;
        });
      }
    },

    /**
     * 是否首次加载数据
     */
    firstLoad(){
      if(this.first_load){
        this.reLoad();
        }
    },

    //pc端
    //滚动条
    onscroll() {
      let _this = this;
      let obj = document.getElementById("onscroll");
      //this.hint = '加载中';
      obj.onscroll = function (e) {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        let scrollTop = obj.scrollTop;
        //变量windowHeight是可视区的高度
        let windowHeight = obj.clientHeight;
        //变量scrollHeight是滚动条的总高度
        let scrollHeight = obj.scrollHeight;
        //滚动条到底部的条件
        if (scrollTop + windowHeight >= scrollHeight - _this.p_down) {
          //到了这个就可以进行业务逻辑加载后台数据了
          _this.drawDownLoad();

        }
      }
    },


    //移动端
    touchstart(e) {
      this.startY = e.changedTouches[0].clientY;
      this.oldCenterY = this.centerY;
      this.startTime = new Date().getTime();
    },
    touchmove(e) {
      // 清除过渡
      this.ul.style.transition = 'none';
      // 获取差值
      let tempY = e.changedTouches[0].clientY - this.startY + this.centerY;
      if (tempY > this.h_up) {
        tempY = this.h_up;
      }
      this.ul.style.transform = 'translateY( ' + (tempY) + 'px)';

    },
    touchend(e) {
      this.centerY = e.changedTouches[0].clientY - this.startY + this.centerY;
      let _this = this;
      this.endTime = new Date().getTime();
      let s1 = (_this.endTime - _this.startTime);
      let s2 = 0;
      let jl = e.changedTouches[0].clientY - this.startY;
      if (jl > 50 || jl < -50) {//移动距离小于50不进行惯性计算
        //时间和惯性（可调）
        if (50 < s1 && s1 <= 90) {
          s2 = 1500;
        } else if (80 < s1 && s1 <= 100) {
          s2 = 1100
        } else if (100 < s1 && s1 <= 140) {
          s2 = 600
        } else if (140 < s1 && s1 <= 160) {
          s2 = 300;
        } else if (160 < s1 && s1 <= 170) {
          s2 = 100;
        } else {
          s2 = 30;
        }
      }
      this.centerY = this.oldCenterY > this.centerY ? this.centerY - s2 : this.centerY + s2;
      _this.ul.style.transition = 'transform .50s';
      _this.ul.style.transform = 'translateY(' + (this.centerY) + 'px)';
      _this.rebound();
    },
    rebound() {

      let _this = this;
      // 获取差值
      //移动距离>0=向上回弹到0
      if (this.centerY > 0) {
        if (this.centerY > this.h_up / 2) {
          this.reLoad();

        }
        this.centerY = 0;
        // 添加过渡
        this.ul.style.transition = 'transform .7s';
        this.ul.style.transform = 'translateY(' + (this.centerY) + 'px)';
      } else {
        //计算ul-div宽度=回弹距离
        let u_clientHeight = 0;
        let d_clientHeight = 0;
        let centerY = 0;
        u_clientHeight = document.querySelector('#ul').clientHeight;
        d_clientHeight = document.querySelector('#draw').clientHeight;
        centerY = d_clientHeight - u_clientHeight;
        //移动距离<回弹距离=不操作
        if (this.centerY < centerY) {
          if (centerY > 0) {
            this.centerY = 0;
            this.ul.style.transform = 'translateY(' + this.centerY + 'px)';
            return;
          }
          //移动距离<回弹距离=重新计算回弹距离
          if (this.centerY < centerY + this.h_down) {
            _this.drawDownLoad();
            u_clientHeight = document.querySelector('#ul').clientHeight;
            d_clientHeight = document.querySelector('#draw').clientHeight;
            centerY = d_clientHeight - u_clientHeight;
          }
        }
        if (this.centerY < centerY) {
          this.centerY = centerY;
          // 添加过渡
          this.ul.style.transition = 'transform .7s';
          this.ul.style.transform = 'translateY(' + (_this.centerY) + 'px)';
        }
      }
    },

    //是否是pc端
    isPC() {
      return (!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
    },

  },


});

// CONCATENATED MODULE: ./plugin/scroll/sm_scroll.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./plugin/scroll/sm_scroll.vue?vue&type=style&index=0&id=407f2133&lang=css
var sm_scrollvue_type_style_index_0_id_407f2133_lang_css = __webpack_require__("f85c");

// CONCATENATED MODULE: ./plugin/scroll/sm_scroll.vue





sm_scrollvue_type_script_lang_js.render = render

/* harmony default export */ var sm_scroll = (sm_scrollvue_type_script_lang_js);
// CONCATENATED MODULE: ./plugin/scroll/index.js


/* harmony default export */ var plugin_scroll = (sm_scroll);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugin/scrollY/sm_scroll_y.vue?vue&type=template&id=bed3d0ee&scoped=true

const _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-bed3d0ee")

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-bed3d0ee")
const sm_scroll_yvue_type_template_id_bed3d0ee_scoped_true_hoisted_1 = { class: "scroll_y_div" }
const sm_scroll_yvue_type_template_id_bed3d0ee_scoped_true_hoisted_2 = {
  class: "lateral-sliding",
  id: "abc"
}
Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])()

const sm_scroll_yvue_type_template_id_bed3d0ee_scoped_true_render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", sm_scroll_yvue_type_template_id_bed3d0ee_scoped_true_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", sm_scroll_yvue_type_template_id_bed3d0ee_scoped_true_hoisted_2, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.internalList, (data) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
          key: data.name,
          class: "lateral-sliding-item"
        }, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: data.name===$data.active.name?'cover_internalTitle ':'cover_internalTitle internalTitle ',
            style: {
              'width':data.width===undefined?'100px':data.width+'px',
              'color':data.name===$data.active.name?$props.activeColor:$props.color,
              'backgroundColor':data.name===$data.active.name?$props.activeBackgroundColor:$props.backgroundColor,
              'fontSize':$props.fontSize,
               'textAlign':$props.textAlign,
                'padding':$props.padding,
              },
            onClick: $event => ($options.internalClick(data))
          }, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "type", { data: data }, undefined, true)
          ], 14, ["onClick"])
        ]))
      }), 128))
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "content", {}, undefined, true)
  ]))
})
// CONCATENATED MODULE: ./plugin/scrollY/sm_scroll_y.vue?vue&type=template&id=bed3d0ee&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugin/scrollY/sm_scroll_y.vue?vue&type=script&lang=js

/* harmony default export */ var sm_scroll_yvue_type_script_lang_js = ({
  name: "sm_scroll_y",
  emits: ["internalClick"],
  props: {
    //列表
    internalList: {
      type: Array,
      default: () => []
    },
    //激活选中
    internalActive: {
      type: String,
      default: ''
    },
    //还原
    restore: {
      type: Boolean,
      default: true
    },
    //选中字体颜色
    activeColor:{
      type: String,
      default: 'red'
    },
    //未选中字体颜色
    color:{
      type: String,
      default: '#acabab'
    },
    //选中背景
    activeBackgroundColor:{
      type: String,
      default: '#dedede'
    },
    //未选中背景
    backgroundColor:{
      type: String,
      default: '#fffefe'
    },
    //字体大小
    fontSize:{
      type: String,
      default: '14px'
    },
    //字体居中
    textAlign:{
      type: String,
      default: 'center'
    },
    //字体
    padding:{
      type: String,
      default: '5px 0px 5px 0px'
    }
  },
  data() {
    return {
      scrollLeftY:0,
      active:{},

      scrollLeft: "scrollLeft",
      newInternalActiveName: "newInternalActive"
    }
  },
  created() {

    if(this.restore){
      sessionStorage.removeItem(this.scrollLeft)
      sessionStorage.removeItem(this.newInternalActiveName)
      for (let i = 0; i < this.internalList.length; i++) {
        if(this.internalActive.name===this.internalList[i].name){
          this.active=this.internalActive;
          break;
        }else{
          this.scrollLeftY+=this.internalList[i].width===undefined?100:this.internalList[i].width
        }
      }
    }else {
      let newInternalActive=sessionStorage.getItem(this.newInternalActiveName);
      this.active =newInternalActive===null||newInternalActive===undefined? this.internalActive:JSON.parse(newInternalActive);
    }
  },
  mounted() {
    this.scroll();
    //监听滚动调
    let page = document.getElementById('abc')
    page.addEventListener('scroll', this.handleScroll, true)

  },

  methods: {
    internalClick(value) {
      this.active = value
      this.$emit("internalClick", value);
      if(!this.restore){
        sessionStorage.setItem(this.newInternalActiveName, JSON.stringify(value))
        sessionStorage.setItem(this.scrollLeft, this.scrollLeftY)
      }

    },

    scroll() {

      //还原横向滚动位置
      this.$nextTick(() => {
        if (this.internalList.length !== 0) {
            let scrollY = sessionStorage.getItem(this.scrollLeft);
            if (scrollY !== undefined && scrollY !== null) {
              this.scrollLeftY = parseInt(scrollY);
            }
        }
        window.document.getElementById("abc").scrollLeft =  this.scrollLeftY;
        this.$emit("internalClick",this.active)
      })
    },
    handleScroll() {
      this.scrollLeftY = document.getElementById("abc").scrollLeft;
    }
  }
});

// CONCATENATED MODULE: ./plugin/scrollY/sm_scroll_y.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./plugin/scrollY/sm_scroll_y.vue?vue&type=style&index=0&id=bed3d0ee&scoped=true&lang=css
var sm_scroll_yvue_type_style_index_0_id_bed3d0ee_scoped_true_lang_css = __webpack_require__("f8cc");

// CONCATENATED MODULE: ./plugin/scrollY/sm_scroll_y.vue





sm_scroll_yvue_type_script_lang_js.render = sm_scroll_yvue_type_template_id_bed3d0ee_scoped_true_render
sm_scroll_yvue_type_script_lang_js.__scopeId = "data-v-bed3d0ee"

/* harmony default export */ var sm_scroll_y = (sm_scroll_yvue_type_script_lang_js);
// CONCATENATED MODULE: ./plugin/scrollY/index.js

/* harmony default export */ var scrollY = (sm_scroll_y);

// CONCATENATED MODULE: ./plugin/index.js
// 导入组件，组件必须声明 name



// 以数组的结构保存组件，便于遍历
const components = [
  plugin_scroll,
  scrollY
]

/* harmony default export */ var plugin_0 = (components);


// CONCATENATED MODULE: ./index.js

// 定义 install 方法
const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  plugin_0.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 默认导出组件
/* harmony default export */ var index = ({
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...plugin_0

});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (index);



/***/ })

/******/ });
//# sourceMappingURL=sm_plugins.common.js.map