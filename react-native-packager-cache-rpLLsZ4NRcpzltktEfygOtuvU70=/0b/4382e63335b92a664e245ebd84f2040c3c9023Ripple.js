Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _Ripple = require("./polyfill/Ripple");

var _Ripple2 = babelHelpers.interopRequireDefault(_Ripple);

var _helpers = require("./helpers");

var Ripple = function (_Component) {
    babelHelpers.inherits(Ripple, _Component);

    function Ripple() {
        babelHelpers.classCallCheck(this, Ripple);
        return babelHelpers.possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).apply(this, arguments));
    }

    babelHelpers.createClass(Ripple, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                color = _props.color,
                onPress = _props.onPress,
                onLongPress = _props.onLongPress,
                children = _props.children,
                other = babelHelpers.objectWithoutProperties(_props, ["color", "onPress", "onLongPress", "children"]);


            if (!(0, _helpers.isCompatible)('TouchableNativeFeedback')) {
                return _react2.default.createElement(
                    _Ripple2.default,
                    babelHelpers.extends({
                        rippleColor: color,
                        onPress: onPress,
                        onLongPress: onLongPress
                    }, other),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: { marginHorizontal: .2 } },
                        children
                    )
                );
            }

            return _react2.default.createElement(
                _reactNative.TouchableNativeFeedback,
                {
                    background: _reactNative.TouchableNativeFeedback.Ripple(color),
                    onPress: onPress,
                    onLongPress: onLongPress
                },
                _react2.default.createElement(
                    _reactNative.View,
                    other,
                    children
                )
            );
        }
    }]);
    return Ripple;
}(_react.Component);

Ripple.propTypes = {
    color: _react.PropTypes.string,
    onPress: _react.PropTypes.func,
    onLongPress: _react.PropTypes.func,
    children: _react.PropTypes.node.isRequired
};
Ripple.defaultProps = {
    color: 'rgba(0,0,0,.2)'
};
exports.default = Ripple;