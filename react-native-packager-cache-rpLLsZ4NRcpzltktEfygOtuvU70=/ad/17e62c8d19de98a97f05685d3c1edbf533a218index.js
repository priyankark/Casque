Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _Ripple = require("../polyfill/Ripple");

var _Ripple2 = babelHelpers.interopRequireDefault(_Ripple);

var _helpers = require("../helpers");

var _Media = require("./Media");

var _Media2 = babelHelpers.interopRequireDefault(_Media);

var _Body = require("./Body");

var _Body2 = babelHelpers.interopRequireDefault(_Body);

var _Actions = require("./Actions");

var _Actions2 = babelHelpers.interopRequireDefault(_Actions);

var _config = require("../config");

var Card = function (_Component) {
    babelHelpers.inherits(Card, _Component);

    function Card() {
        babelHelpers.classCallCheck(this, Card);
        return babelHelpers.possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    babelHelpers.createClass(Card, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                theme = _props.theme,
                overrides = _props.overrides,
                elevation = _props.elevation,
                disabled = _props.disabled,
                onPress = _props.onPress,
                children = _props.children,
                style = _props.style;


            var cardStyle = function () {
                return [styles.container, {
                    elevation: elevation
                }, !(0, _helpers.isCompatible)('elevation') && {
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,.12)'
                }, theme && {
                    backgroundColor: _config.COLOR[theme].color
                }, overrides && overrides.backgroundColor && {
                    backgroundColor: overrides.backgroundColor
                }, style];
            }();

            if (onPress == null || disabled) {
                return _react2.default.createElement(
                    _reactNative.View,
                    { style: cardStyle },
                    children
                );
            }

            var defaultRippleColor = 'rgba(153,153,153,.4)';
            var rippleColor = function () {
                if (disabled || !(overrides && overrides.rippleColor)) {
                    return defaultRippleColor;
                }

                return (0, _helpers.getColor)(overrides.rippleColor);
            }();

            if (!(0, _helpers.isCompatible)('TouchableNativeFeedback')) {
                return _react2.default.createElement(
                    _Ripple2.default,
                    {
                        rippleColor: rippleColor,
                        onPress: onPress
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: cardStyle },
                        children
                    )
                );
            }

            return _react2.default.createElement(
                _reactNative.TouchableNativeFeedback,
                {
                    background: _reactNative.TouchableNativeFeedback.Ripple(rippleColor),
                    onPress: onPress
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: cardStyle },
                    children
                )
            );
        }
    }]);
    return Card;
}(_react.Component);

Card.propTypes = {
    theme: _react.PropTypes.string,
    overrides: _react.PropTypes.shape({
        backgroundColor: _react.PropTypes.string,
        rippleColor: _react.PropTypes.string
    }),
    elevation: _react.PropTypes.number,
    disabled: _react.PropTypes.bool,
    onPress: _react.PropTypes.func,
    children: _react.PropTypes.node.isRequired,
    style: _reactNative.View.propTypes.style
};
Card.defaultProps = {
    elevation: 2,
    disabled: false
};
Card.Media = _Media2.default;
Card.Body = _Body2.default;
Card.Actions = _Actions2.default;
exports.default = Card;


var styles = {
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 2,
        margin: 8,
        paddingLeft: 16,
        paddingRight: 16
    }
};