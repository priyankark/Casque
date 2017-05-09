Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _Icon = require("./Icon");

var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

var _IconToggle = require("./IconToggle");

var _IconToggle2 = babelHelpers.interopRequireDefault(_IconToggle);

var _config = require("./config");

var typos = _reactNative.StyleSheet.create(_config.TYPO);

var RadioButton = function (_Component) {
    babelHelpers.inherits(RadioButton, _Component);

    function RadioButton() {
        babelHelpers.classCallCheck(this, RadioButton);
        return babelHelpers.possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
    }

    babelHelpers.createClass(RadioButton, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                theme = _props.theme,
                primary = _props.primary,
                value = _props.value,
                checked = _props.checked,
                disabled = _props.disabled,
                onSelect = _props.onSelect;

            var primaryColor = _config.COLOR[primary + "500"].color;

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
                    disabled: '#000',
                    checked: primaryColor,
                    default: '#000'
                },
                dark: {
                    disabled: '#fff',
                    checked: primaryColor,
                    default: '#fff'
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
                light: '#000',
                dark: '#fff'
            };

            var CURR_COLOR = colorMap[theme][status];
            var OPACITY = opacityMap[theme][status];
            var LABEL_COLOR = labelColorMap[theme];
            var UNDERLAY_COLOR = underlayMap[theme];

            return _react2.default.createElement(
                _reactNative.TouchableHighlight,
                {
                    onPress: function onPress() {
                        disabled && !checked ? null : onSelect(value);
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
                                disabled && !checked ? null : onSelect(value);
                            }
                        },
                        _react2.default.createElement(_Icon2.default, { name: checked ? 'radio-button-checked' : 'radio-button-unchecked',
                            size: 24,
                            color: CURR_COLOR,
                            style: {
                                opacity: OPACITY,
                                margin: 16
                            }
                        })
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.labelContainer },
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
    return RadioButton;
}(_react.Component);

RadioButton.propTypes = {
    label: _react.PropTypes.string,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    checked: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func
};
RadioButton.defaultProps = {
    theme: 'light',
    primary: _config.PRIMARY,
    disabled: false
};
exports.default = RadioButton;


var styles = _reactNative.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    labelContainer: {
        flex: 1
    },
    label: {
        marginLeft: 16,
        opacity: _config.COLOR.darkPrimaryOpacity.opacity
    }
});