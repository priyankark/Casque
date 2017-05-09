Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _config = require("./config");

var _Icon = require("./Icon");

var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

var _IconToggle = require("./IconToggle");

var _IconToggle2 = babelHelpers.interopRequireDefault(_IconToggle);

var typos = _reactNative.StyleSheet.create(_config.TYPO);

var Checkbox = function (_Component) {
    babelHelpers.inherits(Checkbox, _Component);

    function Checkbox() {
        babelHelpers.classCallCheck(this, Checkbox);
        return babelHelpers.possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    babelHelpers.createClass(Checkbox, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                theme = _props.theme,
                primary = _props.primary,
                checked = _props.checked,
                disabled = _props.disabled,
                value = _props.value,
                onCheck = _props.onCheck;


            var status = function () {
                if (disabled) {
                    return 'disabled';
                } else if (checked) {
                    return 'checked';
                } else {
                    return 'default';
                }
            }();

            var colorMap = {
                light: {
                    disabled: '#000000',
                    checked: _config.COLOR[primary + "500"].color,
                    default: '#000000'
                },
                dark: {
                    disabled: '#ffffff',
                    checked: _config.COLOR[primary + "500"].color,
                    default: '#ffffff'
                }
            };

            var opacityMap = {
                light: {
                    checked: 1,
                    default: 0.54,
                    disabled: 0.26
                },
                dark: {
                    checked: 1,
                    default: 0.7,
                    disabled: 0.3
                }
            };

            var underlayMap = {
                light: 'rgba(0,0,0,.12)',
                dark: 'rgba(255,255,255,.12)'
            };

            var labelColorMap = {
                light: '#000000',
                dark: '#ffffff'
            };

            var CURR_COLOR = colorMap[theme][status];
            var OPACITY = opacityMap[theme][status];
            var LABEL_COLOR = labelColorMap[theme];
            var UNDERLAY_COLOR = underlayMap[theme];

            return _react2.default.createElement(
                _reactNative.TouchableHighlight,
                {
                    onPress: function onPress() {
                        disabled ? null : onCheck(!checked, value);
                    },
                    underlayColor: disabled ? 'rgba(0,0,0,0)' : UNDERLAY_COLOR,
                    activeOpacity: 1
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.container },
                    _react2.default.createElement(
                        _IconToggle2.default,
                        {
                            disabled: disabled,
                            color: CURR_COLOR,
                            onPress: function onPress() {
                                disabled ? null : onCheck(!checked, value);
                            }
                        },
                        _react2.default.createElement(_Icon2.default, { name: checked ? 'check-box' : 'check-box-outline-blank',
                            size: 24,
                            color: CURR_COLOR,
                            key: value,
                            style: {
                                opacity: OPACITY,
                                margin: 16
                            }
                        })
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        {
                            style: styles.labelContainer,
                            onPress: function onPress() {
                                return onCheck(!checked, value);
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            {
                                style: [typos.paperFontBody1, styles.label, _config.COLOR[theme + "PrimaryOpacity"], disabled && _config.COLOR[theme + "DisabledOpacity"], {
                                    color: LABEL_COLOR
                                }]
                            },
                            this.props.label
                        )
                    )
                )
            );
        }
    }]);
    return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
    label: _react.PropTypes.string,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    checked: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    onCheck: _react.PropTypes.func
};
Checkbox.defaultProps = {
    theme: 'light',
    primary: _config.PRIMARY,
    disabled: false
};
exports.default = Checkbox;


var styles = _reactNative.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    label: {
        marginLeft: 16,
        opacity: _config.COLOR.darkPrimaryOpacity.opacity,
        flex: 1
    }
});