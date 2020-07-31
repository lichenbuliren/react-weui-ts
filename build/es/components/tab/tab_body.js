import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import classNames from '../../utils/classnames';

var TabBody = /*#__PURE__*/function (_React$Component) {
  _inherits(TabBody, _React$Component);

  var _super = _createSuper(TabBody);

  function TabBody() {
    _classCallCheck(this, TabBody);

    return _super.apply(this, arguments);
  }

  _createClass(TabBody, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          others = __rest(_a, ["children", "className"]);

      var cls = classNames({
        'weui-tab__panel': true
      }, className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), children);
    }
  }]);

  return TabBody;
}(React.Component);

export { TabBody as default };