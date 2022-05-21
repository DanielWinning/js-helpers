"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Helper = _interopRequireDefault(require("./Helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helloWorld = function helloWorld() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var log = name === null ? "world" : name;
  console.log("Hello, ".concat(log, "!"));
};

var _default = {
  helloWorld: helloWorld,
  Helper: _Helper["default"]
};
exports["default"] = _default;