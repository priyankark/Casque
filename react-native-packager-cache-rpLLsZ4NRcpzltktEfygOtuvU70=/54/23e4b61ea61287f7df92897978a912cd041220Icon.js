Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _helpers = require("./helpers");

var _VectorIconComponent = require("./VectorIconComponent");

var _VectorIconComponent2 = babelHelpers.interopRequireDefault(_VectorIconComponent);

var Icon = function (_Component) {
    babelHelpers.inherits(Icon, _Component);

    function Icon() {
        babelHelpers.classCallCheck(this, Icon);
        return babelHelpers.possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    babelHelpers.createClass(Icon, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                name = _props.name,
                style = _props.style,
                size = _props.size,
                color = _props.color,
                allowFontScaling = _props.allowFontScaling;

            var VectorIcon = _VectorIconComponent2.default.get();

            return _react2.default.createElement(VectorIcon, {
                name: name,
                size: size,
                color: (0, _helpers.getColor)(color),
                style: style,
                allowFontScaling: allowFontScaling
            });
        }
    }]);
    return Icon;
}(_react.Component);

Icon.propTypes = {
    name: _react.PropTypes.string.isRequired,
    style: _reactNative.View.propTypes.style,
    size: _react.PropTypes.number,
    color: _react.PropTypes.string,
    allowFontScaling: _react.PropTypes.bool
};
Icon.defaultProps = {
    size: 30,
    color: '#757575',
    allowFontScaling: true
};
exports.default = Icon;