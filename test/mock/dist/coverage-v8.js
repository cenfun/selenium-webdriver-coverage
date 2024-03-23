(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("coverage-v8", [], factory);
	else if(typeof exports === 'object')
		exports["coverage-v8"] = factory();
	else
		root["coverage-v8"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./test/mock/src/async.js":
/*!********************************!*\
  !*** ./test/mock/src/async.js ***!
  \********************************/
/***/ (() => {

const f = false;
const t = true;
console.info('i am a line of code');
function apple(awesome) {
  if (f || t) {
    console.info('what');
  }
  if (t || f) {
    console.log('hey');
  }
}
function missed() {}
function missed2() {}
apple();
apple();
apple();

/***/ }),

/***/ "./test/mock/src/branch/assignment.js":
/*!********************************************!*\
  !*** ./test/mock/src/branch/assignment.js ***!
  \********************************************/
/***/ ((module) => {

// AssignmentPattern
// no v8 coverage data for default arguments, count as covered always

function param(name, url = 'url', port = 8090) {
  if (name) {
    return null;
  }
  if (url) {
    return `${url}:${port}`;
  }
}
const AssignmentPattern_0 = (a = 1, b = 2) => {
  console.log(a, b);
};
const AssignmentPattern = (a, b = 2) => {
  console.log(a, b);
};
function uncoveredAssignmentPattern(a, b = 2, c = 3) {
  console.log(a, b, c);
}
module.exports = () => {
  AssignmentPattern_0(0, 0);
  AssignmentPattern(0, 0);
  AssignmentPattern();
  param('path');
  param('p');
};

/***/ }),

/***/ "./test/mock/src/branch/branch.js":
/*!****************************************!*\
  !*** ./test/mock/src/branch/branch.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* branches test cases */

const AssignmentPattern = __webpack_require__(/*! ./assignment.js */ "./test/mock/src/branch/assignment.js");
const ConditionalExpression = __webpack_require__(/*! ./conditional.js */ "./test/mock/src/branch/conditional.js");
const IfStatement = __webpack_require__(/*! ./if.js */ "./test/mock/src/branch/if.js");
const LogicalExpression = __webpack_require__(/*! ./logical.js */ "./test/mock/src/branch/logical.js");
const SwitchStatement = __webpack_require__(/*! ./switch.js */ "./test/mock/src/branch/switch.js");
const uncoveredFunction = a => {
  const list = [1, 2, 3, 4, 5];
  list.forEach(v => {
    console.log(v);
  });
  if (a) {
    // both if and else path are uncovered
    console.log(a);
  }
};
const logicalReturn = function (a) {
  if (a < 5 || a > 8) {
    console.log(a);
  }

  // same branch start
  const defaultArg = arguments.length > 1 && typeof arguments[1] !== 'undefined' ? arguments[1] : true;
  console.log(defaultArg);

  // test return count
  if (a < 3) {
    return;
  }

  // count will be left 10 - 2 = 8
  if (a < 5 || a > 8) {
    console.log(a);
  }
};
const listForEach = function (a) {
  const list = [1, 2, 3, 4, 5];
  list.forEach(v => {
    if (v > 2) {
      console.log(v);
      return;
    }
    console.log(v);
  });
  if (!a) {
    // else path should be uncovered
    console.log(a);
  }
  for (const item of list) {
    if (item > 3) {
      console.log(item);
      break;
    }
    console.log(item);
  }
};
function coveredFunction(a) {
  // branch count should be 10:0 not 1:0
  const testCountWithFunName = a || 0;
  logicalReturn(a);

  // branches in a block statement
  for (let i = 0, j = 1; i < 5; i++) {
    if (i > 2) {
      console.log(i);
    } else if (i > 100) {
      uncoveredFunction();
    }
  }
  listForEach(a);
  const l = 5;
  let i = 0;
  while (i < l) {
    if (i < 3) {
      console.log(i);
    } else {
      console.log(i);
    }
    i++;
  }
}
class MyCLass {
  static propTypes = 1;
  #privateField = 42;
  static #privateKey = 2;
  constructor(a) {
    // branch count should be 10:0 not 1:0
    const testCountWithFunName = a || 0;
    this.myMethod(a);
  }
  myMethod(a) {}
}
function functionNeverMind(a) {
  if (a) {
    console.log(a);
    // not covered
  }
}
const branch = a => {
  let i = 0;
  while (i < 10) {
    coveredFunction(i + 1);
    new MyCLass(i + 1);
    i++;
  }
  if (a) {
    // else path should be covered
    functionNeverMind(a);
  }

  // multiple lines and operator after
  /* eslint-disable operator-linebreak */
  if (i || a || a + i) {
    console.log('known issue: second line should be uncovered not partial');
  }
  AssignmentPattern();
  ConditionalExpression();
  IfStatement();
  LogicalExpression();
  SwitchStatement();
};
module.exports = {
  branch
};

/***/ }),

/***/ "./test/mock/src/branch/conditional.js":
/*!*********************************************!*\
  !*** ./test/mock/src/branch/conditional.js ***!
  \*********************************************/
/***/ ((module) => {

// 5 x 4 = 20
const ConditionalExpression = (tf1, tf2) => {
  const a = tf1 ? 'true' : 'false';
  console.log(a);
  const b = tf2 ? 'true' : 'false';
  console.log(b);
};
const ConditionalExpression_11 = (tf1, tf2) => {
  const a = tf1 ? 'true' : 'false';
  console.log(a);
  const b = tf2 ? 'true' : 'false';
  console.log(b);
  ConditionalExpression(tf1, tf2);
};
const ConditionalExpression_10 = (tf1, tf2) => {
  const a = tf1 ? 'true' : 'false';
  console.log(a);
  const b = tf2 ? 'true' : 'false';
  console.log(b);
  ConditionalExpression(tf1, tf2);
};
const ConditionalExpression_01 = (tf1, tf2) => {
  const a = tf1 ? 'true' : 'false';
  console.log(a);
  const b = tf2 ? 'true' : 'false';
  console.log(b);
  ConditionalExpression(tf1, tf2);
};
const ConditionalExpression_00 = (tf1, tf2) => {
  const a = tf1 ? 'true' : 'false';
  console.log(a);
  const b = tf2 ? 'true' : 'false';
  console.log(b);
  ConditionalExpression(tf1, tf2);
};
module.exports = () => {
  ConditionalExpression_11(true, true);
  ConditionalExpression_10(true, false);
  ConditionalExpression_01(false, true);
  ConditionalExpression_00(false, false);
};

/***/ }),

/***/ "./test/mock/src/branch/if.js":
/*!************************************!*\
  !*** ./test/mock/src/branch/if.js ***!
  \************************************/
/***/ ((module) => {

// 5 x 10 = 50 ( (count if) x 2 )
const IfStatement = (tf1, tf2) => {
  if (tf1) {
    console.log('if1');
  }
  if (tf1) {
    console.log('if2');
  } else if (tf2) {
    console.log('ifelse2');
  }
  if (tf1) {
    console.log('if3');
  } else if (tf2) {
    console.log('ifelse3');
  } else {
    console.log('else3');
  }
};
const IfStatement_11 = (tf1, tf2) => {
  if (tf1) {
    console.log('if1');
  } else {
    console.log('else1');
  }
  if (tf1) {
    console.log('if2');
  } else if (tf2) {
    console.log('ifelse2');
  }
  if (tf1) {
    console.log('if3');
  } else if (tf2) {
    console.log('ifelse3');
  } else {
    console.log('else3');
  }
  IfStatement(tf1, tf2);
};
const IfStatement_10 = (tf1, tf2) => {
  if (tf1) {
    console.log('if1');
  }
  if (tf1) {
    console.log('if2');
  } else if (tf2) {
    console.log('ifelse2');
  }
  if (tf1) {
    console.log('if3');
  } else if (tf2) {
    console.log('ifelse3');
  } else {
    console.log('else3');
  }
  IfStatement(tf1, tf2);
};
const IfStatement_01 = (tf1, tf2) => {
  if (tf1) {
    console.log('if1');
  }
  if (tf1) {
    console.log('if2');
  } else if (tf2) {
    console.log('ifelse2');
  }
  if (tf1) {
    console.log('if3');
  } else if (tf2) {
    console.log('ifelse3');
  } else {
    console.log('else3');
  }
  IfStatement(tf1, tf2);
};
const IfStatement_00 = (tf1, tf2) => {
  if (tf1) {
    console.log('if1');
  }
  if (tf1) {
    console.log('if2');
  } else if (tf2) {
    console.log('ifelse2');
  }
  if (tf1) {
    console.log('if3');
  } else if (tf2) {
    console.log('ifelse3');
  } else {
    console.log('else3');
  }
  IfStatement(tf1, tf2);
};
module.exports = () => {
  IfStatement_11(true, true);
  IfStatement_10(true, false);
  IfStatement_01(false, true);
  IfStatement_00(false, false);
};

/***/ }),

/***/ "./test/mock/src/branch/logical.js":
/*!*****************************************!*\
  !*** ./test/mock/src/branch/logical.js ***!
  \*****************************************/
/***/ ((module) => {

/* eslint-disable complexity,no-mixed-operators */

const LogicalExpression = (tf1, tf2) => {
  for (let i = 0; i < 2; i++) {
    const a = tf1 || tf2;
    const b = tf2 || tf1 || a;
    console.log(b);
  }
  if (tf1) {
    const c = tf2 || 2;
    console.log(c);
  }
  const c = tf1 && tf2;
  const d = tf2 && tf1 && c;
  console.log(d);
};
const LogicalExpression_11 = (tf1, tf2) => {
  const a = tf1 || tf2;
  const b = tf2 || tf1 || a;
  console.log(b);
  const c = tf1 && tf2;
  const d = tf2 && tf1 && c;
  console.log(d);
  LogicalExpression(tf1, tf2);
};
const LogicalExpression_10 = (tf1, tf2) => {
  const a = tf1 || tf2;
  const b = tf2 || tf1 || a;
  console.log(b);
  const c = tf1 && tf2;
  const d = tf2 && tf1 && c;
  console.log(d);
  LogicalExpression(tf1, tf2);
};
const LogicalExpression_01 = (tf1, tf2) => {
  const a = tf1 || tf2;
  const b = tf2 || tf1 || a;
  console.log(b);
  const c = tf1 && tf2;
  const d = tf2 && tf1 && c;
  console.log(d);
  LogicalExpression(tf1, tf2);
};
const LogicalExpression_00 = (tf1, tf2) => {
  const a = tf1 || tf2;
  const b = tf2 || tf1 || a;
  console.log(b);
  const c = tf1 && tf2;
  const d = tf2 && tf1 && c;
  console.log(d);
  LogicalExpression(tf1, tf2);
};
module.exports = () => {
  LogicalExpression_11(true, true);
  LogicalExpression_10(true, false);
  LogicalExpression_01(false, true);
  LogicalExpression_00(false, false);
};

/***/ }),

/***/ "./test/mock/src/branch/switch.js":
/*!****************************************!*\
  !*** ./test/mock/src/branch/switch.js ***!
  \****************************************/
/***/ ((module) => {

/* eslint-disable default-case */

// 4 + 3 + 4 + 4 + 4 + 3 = 22
const SwitchStatement = n => {
  switch (n) {
    case 1:
      console.log(1);
      break;
    case 2:
    case 3:
      console.log(2);
      break;
    default:
      console.log('default');
  }
};
const SwitchStatement_1 = n => {
  switch (n) {
    case 1:
      console.log(1);
      break;
    case 2:
    case 3:
      console.log(2);
  }
  SwitchStatement(n);
};
const SwitchStatement_2 = n => {
  switch (n) {
    case 1:
      console.log(1);
      break;
    case 2:
    case 3:
      console.log(2);
      break;
    default:
      console.log('default');
  }
  SwitchStatement(n);
};
const SwitchStatement_3 = n => {
  switch (n) {
    case 1:
      console.log(1);
      break;
    case 2:
    case 3:
      console.log(2);
      break;
    default:
      console.log('default');
  }
  SwitchStatement(n);
};
const SwitchStatement_4 = n => {
  switch (n) {
    case 1:
      console.log(1);
      break;
    case 2:
    case 3:
      console.log(2);
      break;
    default:
      console.log('default');
  }
  SwitchStatement(n);
};
const SwitchStatement_5 = n => {
  switch (n) {
    case 1:
      console.log(1);
      break;
    case 2:
    case 3:
      console.log(2);
      break;
  }
  SwitchStatement(n);
};
module.exports = () => {
  SwitchStatement_1(1);
  SwitchStatement_2(2);
  SwitchStatement_3(3);
  SwitchStatement_4(4);
  SwitchStatement_5(5);
};

/***/ }),

/***/ "./test/mock/src/comments.js":
/*!***********************************!*\
  !*** ./test/mock/src/comments.js ***!
  \***********************************/
/***/ (() => {

/* eslint-disable no-trailing-spaces,line-comment-position,no-inline-comments,indent,no-multi-spaces,no-multiple-empty-lines */
// LineComment

console.log('some"//"\\\'thing\\'); // comment /*  

// comment /* ---
console.log('some//thing/*'); /*  
                              ddd
                              */
console.log('some/*/thing');
//
console.log(`
        '/*
            "//"
        */'
     `);

/**
    * BlockComment
    
 *
       
        */
console.log('some/*/thing');
console.log('some//thing'); // end of line

/*
    connected
*/
console.log('some*//thing'); /*
                             cross line
                             */

console.log('some*//thing'); /*
                             cross line
                             */

console.log('some*//thing'); /* inline */
console.log('some*//thing');

/*
 multiple line
//

 */

/**/
console.log('some*//thing'); /*
                             console.log('some//*thing')
                             */

/***/ }),

/***/ "./test/mock/src/component.js":
/*!************************************!*\
  !*** ./test/mock/src/component.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ts = __webpack_require__(/*! ./typescript.ts */ "./test/mock/src/typescript.ts");
const method = v => {};
module.exports = v => {
  console.log('this is component');
  ts();
  if (v === 1) {
    method(v);
  }
  if (v === 2) {
    method(v);
  }
  if (v === 3) {
    method(v);
  }
};

/***/ }),

/***/ "./test/mock/src/ignore/ignore.js":
/*!****************************************!*\
  !*** ./test/mock/src/ignore/ignore.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./v8-ignore-next.js */ "./test/mock/src/ignore/v8-ignore-next.js");
__webpack_require__(/*! ./v8-ignore-return.js */ "./test/mock/src/ignore/v8-ignore-return.js");
__webpack_require__(/*! ./v8-ignore-start-stop.js */ "./test/mock/src/ignore/v8-ignore-start-stop.js");
const platform = 'wind32';

/* v8 ignore next */
if (platform === 'darwin') {
  console.log('hello darwin');
  // v8 ignore next
}

/* v8 ignore next 3 */
if (platform === 'linux') {
  console.log('hello linux');
}
const os = platform === 'wind32' ? 'Windows' /* v8 ignore next */ : 'Other';

/* v8 ignore start */
function uncovered(v) {
  console.log(os);
} /* v8 ignore stop */

const neverMind = /* v8 ignore start */() => {
  uncovered();
};

/* v8 ignore stop */

const ignore = v => {
  if (v) {
    neverMind();
  }
};
module.exports = {
  ignore,
  neverMind,
  uncovered,
  os,
  platform
};

/***/ }),

/***/ "./test/mock/src/ignore/v8-ignore-next.js":
/*!************************************************!*\
  !*** ./test/mock/src/ignore/v8-ignore-next.js ***!
  \************************************************/
/***/ (() => {

const a = 99;
const b =  true ? 1 /* v8 ignore next */ : 0;
if (a + b) {
  console.log('covered');
  /* v8 ignore next 3 */
} else {
  console.log('uncovered');
}

/* v8 ignore next */
if (a < b) console.log('uncovered');

/* v8 ignore next 3 */
function notExecuted() {}
if (a + b) {
  console.log('covered');
} else {
  /* c8 ignore next */
  console.log('uncovered');
}

/***/ }),

/***/ "./test/mock/src/ignore/v8-ignore-return.js":
/*!**************************************************!*\
  !*** ./test/mock/src/ignore/v8-ignore-return.js ***!
  \**************************************************/
/***/ (() => {

function fn() {
  return true;
  /* v8 ignore next */
  console.log('never runs');
}
fn();

/***/ }),

/***/ "./test/mock/src/ignore/v8-ignore-start-stop.js":
/*!******************************************************!*\
  !*** ./test/mock/src/ignore/v8-ignore-start-stop.js ***!
  \******************************************************/
/***/ (() => {

const a = 99;
const b =  true ? 1 : 0;
if (a + b) {
  console.log('covered');
  /* v8 ignore start */
} else {
  console.log('uncovered');
}
/* v8 ignore stop */

/* v8 ignore start */
'ignore me';
function notExecuted() {}
/* v8 ignore stop */

if (a + b) {
  console.log('covered');
} else {
  /* v8 ignore start */
  console.log('uncovered');
}
// have to stop if build in dist will ignore all others
/* v8 ignore stop */

/***/ }),

/***/ "./test/mock/src/index.js":
/*!********************************!*\
  !*** ./test/mock/src/index.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./comments.js */ "./test/mock/src/comments.js");
__webpack_require__(/*! ./async.js */ "./test/mock/src/async.js");
const {
  ignore
} = __webpack_require__(/*! ./ignore/ignore.js */ "./test/mock/src/ignore/ignore.js");
const {
  branch
} = __webpack_require__(/*! ./branch/branch.js */ "./test/mock/src/branch/branch.js");
const {
  statement
} = __webpack_require__(/*! ./statement.js */ "./test/mock/src/statement.js");
const typescript = __webpack_require__(/*! ./typescript.ts */ "./test/mock/src/typescript.ts");
const component = __webpack_require__(/*! ./component.js */ "./test/mock/src/component.js");
function foo(argument) {
  console.log('this is foo');
  if (argument) {
    console.log('covered foo argument');
  }
}
function bar(argument) {
  console.log('this is bar');
  if (argument) {
    console.log('covered bar argument');
  }
}
function start() {
  console.log('this is start');
  foo(true);
}
const out_fun = () => {
  const out_sub_fun = () => {};
  return out_sub_fun;
};
function privateFunction() {
  console.log('this is privateFunction');
  function sub_function() {
    console.log('this is sub function');
    out_fun();
  }
  sub_function();
  const af = () => {
    return [1, 2, 3];
  };
  af().forEach(function (it) {
    console.log(it);
  });
}
function init(stop) {
  console.log('this is init');
  start();
  if (stop) {
    console.log('stop in init');
    return;
  }
  const inline = a => {
    console.log('this is inline');
    if (a) {
      console.log('covered inline argument');
    }
  };
  const list = [inline];
  list.forEach(i => {
    i();
  });
  const f = false;
  if (f) {
    privateFunction();
  }
}
const onload = something => {
  console.log('this is onload');
  if (something) {
    console.log('stop with something');
    return;
  }
  console.log('on loaded');
  ignore();
  typescript();
  branch();
  statement();
  component(1);
  const number = something ? 1 : 2;
  return number;
};

// one line but two statements
init(window._my_stop_key);
onload(window._my_something);
module.exports = {
  foo,
  bar,
  start
};

/***/ }),

/***/ "./test/mock/src/statement.js":
/*!************************************!*\
  !*** ./test/mock/src/statement.js ***!
  \************************************/
/***/ ((module) => {

const statement = () => {
  let n = 0;
  for (; n < 3; n++) {
    console.log(n);
  }

  // istanbul: 'for init' count as two statements
  for (let i = 0, j = 1; i < 3; i++) {
    console.log(i + j);
  }
  const arr = [1, 2, 3];
  for (const item in arr) {
    console.log(item);
  }
  let it = 0;
  for (it of arr) {
    console.log(it);
  }
  let j = 0;
  while (j < 3) {
    console.log(j);
    j++;
  }
};
module.exports = {
  statement
};

/***/ }),

/***/ "./test/mock/src/typescript.ts":
/*!*************************************!*\
  !*** ./test/mock/src/typescript.ts ***!
  \*************************************/
/***/ ((module) => {

var fun = function (p, pointIn) {
    var str = "hello world";
    console.log(p, pointIn, str);
    return str;
};
var typescript = function (p, s) {
    /*
       typescript block comment
    */
    var pointIn = {
        x: 1,
        y: 2
    };
    // typescript line comment
    var v = fun(p, pointIn);
    console.log(p, s, v);
};
module.exports = typescript;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./test/mock/src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=coverage-v8.js.map