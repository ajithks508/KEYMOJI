module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client-config.js":
/*!**************************!*\
  !*** ./client-config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const clientConfig = {
  siteUrl: 'http://localhost:3000',
  graphqlUrl: 'localhost/wordpress/graphql'
};
/* harmony default export */ __webpack_exports__["default"] = (clientConfig);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sticky_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sticky-footer */ "react-sticky-footer");
/* harmony import */ var react_sticky_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sticky_footer__WEBPACK_IMPORTED_MODULE_1__);




const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_sticky_footer__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bottomThreshold: 50,
    normalStyles: {
      backgroundColor: "#d0d3d4",
      padding: "2rem"
    },
    stickyStyles: {
      backgroundColor: "rgba(255,255,255,.8)",
      padding: "2rem",
      width: "100%"
    },
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("nav", {
      className: "navbar navbar-expand-lg navbar-light bg-light",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "col",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "ti ti-layout-grid2"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            children: "Shop"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "col",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "ti ti-heart"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            children: "Wishlist"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "col",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "ti ti-shopping-cart"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            children: "Cart"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "col",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "ti ti-user"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            children: "Account"
          })]
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footerdata.js":
/*!**********************************!*\
  !*** ./components/Footerdata.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Footerdata = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "footer-area",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "row section_gap",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "col-lg-3 col-md-6 col-sm-6",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "single-footer-widget tp_widgets",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
              className: "footer_title large_title",
              children: "Importent Links"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
              className: "list",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Disclaimer"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Privacy Policy"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Shipping Policy"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Terms and Conditions"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Return and Refund Policy"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Contact"
                })
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "offset-lg-1 col-lg-2 col-md-6 col-sm-6",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "single-footer-widget tp_widgets",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
              className: "footer_title large_title",
              children: "UseFullLinks"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
              className: "list",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "FAQ"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Careers"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Contact Us"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Sitemap"
                })
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "col-lg-2 col-md-6 col-sm-6",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "single-footer-widget instafeed",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "ship",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("i", {
                  className: "ti ti-truck",
                  children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                    children: "FREE SHIPPING"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                className: "smtxt",
                children: "All Over India"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "ship",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("i", {
                  className: "ti ti-headphone-alt",
                  children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                    children: "24/7 SUPPORT"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                className: "smtxt",
                children: "Get in touch 24/7"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "ship",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("i", {
                  className: "ti ti-share-alt",
                  children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                    children: "RETURN POLICY"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                className: "smtxt",
                children: "14 days easy return"
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "offset-lg-1 col-lg-3 col-md-6 col-sm-6",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "single-footer-widget tp_widgets",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
              className: "footer_title",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "ti ti-home"
              }), "Contact Us"]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "ml-40",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                className: true,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                  className: "ti ti-location-pin"
                }), "Orbiz Arcade,Calicut Road,NH-17,Kakkad,Malappuram,Kerala-676306"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                  className: "ti ti-location-pin"
                }), "Kazhi Street,OPP Vijaya College,Basavanagudi,Bangalore-560004"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                className: "sm-head",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "ti ti-mobile"
                }), "Phone Number"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "(+91)9567555656 (+91)7012717083"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                className: "sm-head",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "ti ti-email"
                }), "Email"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "connect@orbiz.in"
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footerdata);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading */ "./components/Heading.js");
/* harmony import */ var _Navdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navdata */ "./components/Navdata.js");





const Header = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Navdata__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Heading__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Heading.js":
/*!*******************************!*\
  !*** ./components/Heading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Product */ "./components/Product.js");



const Heading = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    className: "blog-banner-area",
    id: "category",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "container h-100",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "blog-banner",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
            className: "h"
          })
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Style.css */ "./styles/Style.css");
/* harmony import */ var _styles_Style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Footerdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footerdata */ "./components/Footerdata.js");
/* harmony import */ var _Navdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navdata */ "./components/Navdata.js");



const {
  default: Header
} = __webpack_require__(/*! ./Header */ "./components/Header.js");

const {
  default: Product
} = __webpack_require__(/*! ./Product */ "./components/Product.js");






const Layout = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
      children: "Product List"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/@icon/themify-icons/themify-icons.css"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Header, {}), props.children, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Footerdata__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navdata.js":
/*!*******************************!*\
  !*** ./components/Navdata.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ "react-bootstrap/NavDropdown");
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/FormControl */ "react-bootstrap/FormControl");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);











const Navdata = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bg: "light",
    expand: "lg",
    className: "header_area",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Brand, {
      href: "#home",
      className: "navbar-brand logo_h",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "imglogo",
        src: "http://localhost/wordpress/wp-content/uploads/2020/11/cropped-logo.png"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
      "aria-controls": "basic-navbar-nav"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
      id: "basic-navbar-nav",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "mr-auto",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#home",
          className: "nav-item",
          children: "HOME"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#link",
          className: "nav-item",
          children: "SHOP"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#link",
          className: "nav-item",
          children: "GALLERY"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#link",
          className: "nav-item",
          children: "ABOUT US"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#link",
          className: "nav-item",
          children: "CART"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#link",
          className: "nav-item",
          children: "WISHLIST"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#link",
          className: "nav-item",
          children: "MY ACCOUNT"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#link",
          className: "nav-item",
          children: "LOGOUT"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a, {
        inline: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "text",
          placeholder: "Search",
          className: "form-control"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
          variant: "secondary",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "ti ti-search"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Navdata);

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Product = props => {
  const {
    product
  } = props;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "card text-center card-product",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "card-product__img",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          className: "card-img",
          src: product.images[0].src,
          alt: "product image"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "favorit-items",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "ti ti-heart"
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
          className: "card-product__title",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: "#",
            children: product.name
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          className: "card-product__price",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "cross",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("del", {
              children: product.regular_price
            })
          }), "\xA0\xA0", product.sale_price]
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client-config */ "./client-config.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Product */ "./components/Product.js");






const Index = props => {
  console.warn(props);
  const {
    products
  } = props;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "product-container",
      children: products.length ? products.map(product => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Product__WEBPACK_IMPORTED_MODULE_4__["default"], {
        product: product
      })) : ''
    })
  });
};

Index.getInitialProps = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`${_client_config__WEBPACK_IMPORTED_MODULE_3__["default"].siteUrl}/getProducts`);
  const productsData = await res.json();
  return {
    products: productsData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/Style.css":
/*!**************************!*\
  !*** ./styles/Style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/FormControl":
/*!**********************************************!*\
  !*** external "react-bootstrap/FormControl" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Image");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/NavDropdown":
/*!**********************************************!*\
  !*** external "react-bootstrap/NavDropdown" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/NavDropdown");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-sticky-footer":
/*!**************************************!*\
  !*** external "react-sticky-footer" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sticky-footer");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3RlcmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2ZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreS1mb290ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIl0sIm5hbWVzIjpbImNsaWVudENvbmZpZyIsInNpdGVVcmwiLCJncmFwaHFsVXJsIiwiRm9vdGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsIndpZHRoIiwiRm9vdGVyZGF0YSIsIkhlYWRlciIsIkhlYWRpbmciLCJkZWZhdWx0IiwicmVxdWlyZSIsIlByb2R1Y3QiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiTmF2ZGF0YSIsInByb2R1Y3QiLCJpbWFnZXMiLCJzcmMiLCJuYW1lIiwicmVndWxhcl9wcmljZSIsInNhbGVfcHJpY2UiLCJJbmRleCIsImNvbnNvbGUiLCJ3YXJuIiwicHJvZHVjdHMiLCJsZW5ndGgiLCJtYXAiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJmZXRjaCIsInByb2R1Y3RzRGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQSxN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RDs7QUFvQmVWLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVyxLQUFLLEdBQUtULEtBQUYsSUFBYTtBQUMxQlUsU0FBTyxDQUFDQyxJQUFSLENBQWNYLEtBQWQ7QUFDQSxRQUFNO0FBQUVZO0FBQUYsTUFBZVosS0FBckI7QUFDQSxzQkFDQyw4REFBQywwREFBRDtBQUFBLDJCQUNVO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsZ0JBQ05ZLFFBQVEsQ0FBQ0MsTUFBVCxHQUNERCxRQUFRLENBQUNFLEdBQVQsQ0FBY1gsT0FBTyxpQkFBSSw4REFBQywyREFBRDtBQUFTLGVBQU8sRUFBR0E7QUFBbkIsUUFBekIsQ0FEQyxHQUVFO0FBSEk7QUFEVixJQUREO0FBU0MsQ0FaRjs7QUFhQU0sS0FBSyxDQUFDTSxlQUFOLEdBQXdCLFlBQVk7QUFDbkMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLHlEQUFLLENBQUcsR0FBRS9CLHNEQUFZLENBQUNDLE9BQVEsY0FBMUIsQ0FBdkI7QUFDQSxRQUFNK0IsWUFBWSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUEzQjtBQUVELFNBQU87QUFDTlAsWUFBUSxFQUFFTTtBQURKLEdBQVA7QUFHQyxDQVBEOztBQVFlVCxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGNsaWVudENvbmZpZyA9IHtcclxuXHRzaXRlVXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuXHRncmFwaHFsVXJsOiAnbG9jYWxob3N0L3dvcmRwcmVzcy9ncmFwaHFsJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudENvbmZpZzsiLCJpbXBvcnQgU3RpY2t5Rm9vdGVyIGZyb20gJ3JlYWN0LXN0aWNreS1mb290ZXInO1xyXG5jb25zdCBGb290ZXIgPSAoKSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8U3RpY2t5Rm9vdGVyIGJvdHRvbVRocmVzaG9sZD17NTB9IG5vcm1hbFN0eWxlcz17e2JhY2tncm91bmRDb2xvcjogXCIjZDBkM2Q0XCIscGFkZGluZzogXCIycmVtXCJ9fVxyXG4gICAgICAgIHN0aWNreVN0eWxlcz17e2JhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LC44KVwiLHBhZGRpbmc6IFwiMnJlbVwiLHdpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpIHRpLWxheW91dC1ncmlkMlwiPjwvaT48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2hvcDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGkgdGktaGVhcnRcIj48L2k+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldpc2hsaXN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aSB0aS1zaG9wcGluZy1jYXJ0XCI+PC9pPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DYXJ0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aSB0aS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWNjb3VudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9TdGlja3lGb290ZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJjb25zdCBGb290ZXJkYXRhID0gKCkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYXJlYVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzZWN0aW9uX2dhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldCB0cF93aWRnZXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvb3Rlcl90aXRsZSBsYXJnZV90aXRsZVwiPkltcG9ydGVudCBMaW5rczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhICBjbGFzc05hbWU9XCJsbmtcIiBocmVmPVwiI1wiPkRpc2NsYWltZXI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImxua1wiIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImxua1wiIGhyZWY9XCIjXCI+U2hpcHBpbmcgUG9saWN5PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJsbmtcIiBocmVmPVwiI1wiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJsbmtcIiBocmVmPVwiI1wiPlJldHVybiBhbmQgUmVmdW5kIFBvbGljeTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibG5rXCIgaHJlZj1cIiNcIj5Db250YWN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZnNldC1sZy0xIGNvbC1sZy0yIGNvbC1tZC02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0IHRwX3dpZGdldHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9vdGVyX3RpdGxlIGxhcmdlX3RpdGxlXCI+VXNlRnVsbExpbmtzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJsbmtcIiBocmVmPVwiI1wiPkZBUTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJsbmtcIiBocmVmPVwiI1wiPkNhcmVlcnM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibG5rXCIgaHJlZj1cIiNcIj5Db250YWN0IFVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImxua1wiIGhyZWY9XCIjXCI+U2l0ZW1hcDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMiBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldCBpbnN0YWZlZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lPVwidGkgdGktdHJ1Y2tcIj4gPGxhYmVsPkZSRUUgU0hJUFBJTkc8L2xhYmVsPjwvaT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbXR4dFwiPkFsbCBPdmVyIEluZGlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lPVwidGkgdGktaGVhZHBob25lLWFsdFwiPiA8bGFiZWw+MjQvNyBTVVBQT1JUPC9sYWJlbD48L2k+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic210eHRcIj5HZXQgaW4gdG91Y2ggMjQvNzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cInRpIHRpLXNoYXJlLWFsdFwiPiA8bGFiZWw+UkVUVVJOIFBPTElDWTwvbGFiZWw+PC9pPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNtdHh0XCI+MTQgZGF5cyBlYXN5IHJldHVybjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZzZXQtbGctMSBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldCB0cF93aWRnZXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvb3Rlcl90aXRsZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRpIHRpLWhvbWVcIj48L3NwYW4+Q29udGFjdCBVczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT48aSBjbGFzc05hbWU9XCJ0aSB0aS1sb2NhdGlvbi1waW5cIj48L2k+T3JiaXogQXJjYWRlLENhbGljdXQgUm9hZCxOSC0xNyxLYWtrYWQsTWFsYXBwdXJhbSxLZXJhbGEtNjc2MzA2PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cInRpIHRpLWxvY2F0aW9uLXBpblwiPjwvaT5LYXpoaSBTdHJlZXQsT1BQIFZpamF5YSBDb2xsZWdlLEJhc2F2YW5hZ3VkaSxCYW5nYWxvcmUtNTYwMDA0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNtLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGkgdGktbW9iaWxlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQaG9uZSBOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgrOTEpOTU2NzU1NTY1NlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKzkxKTcwMTI3MTcwODNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+ICBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpIHRpLWVtYWlsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdEBvcmJpei5pblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyZGF0YTsiLCJpbXBvcnQgSGVhZGluZyBmcm9tIFwiLi9IZWFkaW5nXCI7XHJcbmltcG9ydCBOYXZkYXRhIGZyb20gXCIuL05hdmRhdGFcIjtcclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8TmF2ZGF0YS8+XHJcblx0XHRcdDxIZWFkaW5nLz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdFwiO1xyXG5jb25zdCBIZWFkaW5nID0gKCkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvZy1iYW5uZXItYXJlYVwiIGlkPVwiY2F0ZWdvcnlcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGgtMTAwXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1iYW5uZXJcIj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhcIj48L2gxPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7IiwiY29uc3QgeyBkZWZhdWx0OiBIZWFkZXIgfSA9IHJlcXVpcmUoXCIuL0hlYWRlclwiKVxyXG5jb25zdCB7IGRlZmF1bHQ6IFByb2R1Y3QgfSA9IHJlcXVpcmUoXCIuL1Byb2R1Y3RcIilcclxuaW1wb3J0ICcuLi9zdHlsZXMvU3R5bGUuY3NzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcbmltcG9ydCBGb290ZXJkYXRhIGZyb20gJy4vRm9vdGVyZGF0YSc7XHJcbmltcG9ydCBOYXZkYXRhIGZyb20gJy4vTmF2ZGF0YSc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGl0bGU+UHJvZHVjdCBMaXN0PC90aXRsZT5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9AaWNvbi90aGVtaWZ5LWljb25zL3RoZW1pZnktaWNvbnMuY3NzXCIvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNS4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8Rm9vdGVyZGF0YS8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZEcm9wZG93bic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTmF2ZGF0YSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwiaGVhZGVyX2FyZWFcIj5cclxuICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjaG9tZVwiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBsb2dvX2hcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpbWdsb2dvXCIgc3JjPVwiaHR0cDovL2xvY2FsaG9zdC93b3JkcHJlc3Mvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTEvY3JvcHBlZC1sb2dvLnBuZ1wiPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkhPTUU8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlNIT1A8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkdBTExFUlk8L05hdi5MaW5rPlxyXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkFCT1VUIFVTPC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNsaW5rXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5DQVJUPC9OYXYuTGluaz5cclxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNsaW5rXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5XSVNITElTVDwvTmF2Lkxpbms+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+TVkgQUNDT1VOVDwvTmF2Lkxpbms+XHJcbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+TE9HT1VUPC9OYXYuTGluaz5cclxuICAgICAgPC9OYXY+XHJcbiAgICAgIDxGb3JtIGlubGluZT5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+PGkgY2xhc3NOYW1lPVwidGkgdGktc2VhcmNoXCI+PC9pPjwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICA8L05hdmJhcj5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZkYXRhOyIsImNvbnN0IFByb2R1Y3QgPSAocHJvcHMpID0+e1xyXG4gICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wcztcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tNiBjb2wtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC1jZW50ZXIgY2FyZC1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcHJvZHVjdF9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZ1wiIHNyYz17IHByb2R1Y3QuaW1hZ2VzWzBdLnNyYyB9IGFsdD1cInByb2R1Y3QgaW1hZ2VcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZvcml0LWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpIHRpLWhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXByb2R1Y3RfX3RpdGxlXCI+PGEgaHJlZj1cIiNcIj57cHJvZHVjdC5uYW1lfTwvYT48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtcHJvZHVjdF9fcHJpY2VcIj48c3BhbiBjbGFzc05hbWU9XCJjcm9zc1wiPjxkZWw+e3Byb2R1Y3QucmVndWxhcl9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2RlbD48L3NwYW4+Jm5ic3A7Jm5ic3A7e3Byb2R1Y3Quc2FsZV9wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7IiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IGNsaWVudENvbmZpZyBmcm9tICcuLi9jbGllbnQtY29uZmlnJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoIHByb3BzICkgPT4ge1xyXG5cdGNvbnNvbGUud2FybiggcHJvcHMgKTtcclxuXHRjb25zdCB7IHByb2R1Y3RzIH0gPSBwcm9wcztcclxuXHRyZXR1cm4oIFxyXG5cdFx0PExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdHsgcHJvZHVjdHMubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0cHJvZHVjdHMubWFwKCBwcm9kdWN0ID0+IDxQcm9kdWN0IHByb2R1Y3Q9eyBwcm9kdWN0IH0gLz4pXHJcblx0XHRcdFx0KSA6ICcnfVxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuXHRcdClcclxuXHR9O1xyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goIGAke2NsaWVudENvbmZpZy5zaXRlVXJsfS9nZXRQcm9kdWN0c2AgKTtcclxuXHRjb25zdCBwcm9kdWN0c0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxucmV0dXJuIHtcclxuXHRwcm9kdWN0czogcHJvZHVjdHNEYXRhXHJcbn1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZEcm9wZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreS1mb290ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==