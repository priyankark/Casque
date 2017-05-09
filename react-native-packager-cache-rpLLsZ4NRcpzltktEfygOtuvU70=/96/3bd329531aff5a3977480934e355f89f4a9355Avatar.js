Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _Icon = require("./Icon");

var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

var _helpers = require("./helpers");

var Avatar = function (_Component) {
    babelHelpers.inherits(Avatar, _Component);

    function Avatar() {
        babelHelpers.classCallCheck(this, Avatar);
        return babelHelpers.possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
    }

    babelHelpers.createClass(Avatar, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                image = _props.image,
                icon = _props.icon,
                size = _props.size,
                color = _props.color,
                backgroundColor = _props.backgroundColor,
                text = _props.text,
                borderRadius = _props.borderRadius,
                borderColor = _props.borderColor,
                borderWidth = _props.borderWidth;


            if (image) {
                return _react2.default.cloneElement(image, {
                    style: {
                        width: size,
                        height: size,
                        borderRadius: borderRadius,
                        borderColor: borderColor,
                        borderWidth: borderWidth
                    }
                });
            }

            if (icon) {
                return _react2.default.createElement(
                    _reactNative.View,
                    { style: { flex: 1 } },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: { width: size, height: size, borderRadius: borderRadius, backgroundColor: (0, _helpers.getColor)(backgroundColor), alignItems: 'center', justifyContent: 'center' } },
                        _react2.default.createElement(_Icon2.default, {
                            name: icon,
                            color: (0, _helpers.getColor)(color),
                            size: 0.6 * size
                        })
                    )
                );
            }

            if (text) {
                return _react2.default.createElement(
                    _reactNative.View,
                    { style: { flex: 1 } },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: { width: size, height: size, borderRadius: borderRadius, backgroundColor: (0, _helpers.getColor)(backgroundColor), alignItems: 'center', justifyContent: 'center' } },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: { color: (0, _helpers.getColor)(color) } },
                            text
                        )
                    )
                );
            }

            return null;
        }
    }]);
    return Avatar;
}(_react.Component);

Avatar.propTypes = {
    image: _react.PropTypes.shape({ type: _react.PropTypes.oneOf([_reactNative.Image]) }),
    icon: _react.PropTypes.string,
    size: _react.PropTypes.number,
    color: _react.PropTypes.string,
    backgroundColor: _react.PropTypes.string,
    text: _react.PropTypes.string,
    borderRadius: _react.PropTypes.number,
    borderColor: _react.PropTypes.string,
    borderWidth: _react.PropTypes.number
};
Avatar.defaultProps = {
    size: 40,
    color: '#ffffff',
    backgroundColor: (0, _helpers.getColor)('paperGrey500'),
    borderRadius: 40 / 2,
    borderColor: 'rgba(0,0,0,.1)',
    borderWidth: 1
};
exports.default = Avatar;