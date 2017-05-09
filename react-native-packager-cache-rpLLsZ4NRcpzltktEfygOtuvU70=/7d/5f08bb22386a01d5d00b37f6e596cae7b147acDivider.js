Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _config = require("./config");

var Divider = function (_Component) {
    babelHelpers.inherits(Divider, _Component);

    function Divider() {
        babelHelpers.classCallCheck(this, Divider);
        return babelHelpers.possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).apply(this, arguments));
    }

    babelHelpers.createClass(Divider, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                inset = _props.inset,
                theme = _props.theme,
                style = _props.style;


            return _react2.default.createElement(_reactNative.View, {
                style: [styles.divider, inset && { marginLeft: 72 }, {
                    backgroundColor: theme === 'light' ? 'rgba(0,0,0,.12)' : 'rgba(255,255,255,.12)'
                }, style]
            });
        }
    }]);
    return Divider;
}(_react.Component);

Divider.propTypes = {
    inset: _react.PropTypes.bool,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    style: _reactNative.View.propTypes.style
};
Divider.defaultProps = {
    inset: false,
    theme: 'light'
};
exports.default = Divider;


var styles = {
    divider: {
        height: 1
    }
};