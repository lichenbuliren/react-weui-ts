import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import deprecationWarning from '../../utils/deprecationWarning';

var Panel = /*#__PURE__*/function (_React$Component) {
  _inherits(Panel, _React$Component);

  var _super = _createSuper(Panel);

  function Panel() {
    _classCallCheck(this, Panel);

    return _super.apply(this, arguments);
  }

  _createClass(Panel, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          access = _a.access,
          others = __rest(_a, ["children", "className", "access"]);

      if (access) {
        deprecationWarning('panel access', 'cell access', 'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#panel');
      }

      var cls = classNames(_defineProperty({
        'weui-panel': true
      }, className, className));
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), children);
    }
  }]);

  return Panel;
}(React.Component);

export { Panel as default };
Panel.propTypes = {
  /**
   * deprecated property from 0.4.x
   *
   */
  access: PropTypes.bool
};
Panel.defaultProps = {
  access: false
};
;