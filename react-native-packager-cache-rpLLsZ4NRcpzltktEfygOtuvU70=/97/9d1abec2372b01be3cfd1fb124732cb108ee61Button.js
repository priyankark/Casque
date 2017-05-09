Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _Ripple = require("./polyfill/Ripple");

var _Ripple2 = babelHelpers.interopRequireDefault(_Ripple);

var _config = require("./config");

var _helpers = require("./helpers");

var Button = function (_Component) {
    babelHelpers.inherits(Button, _Component);

    function Button(props) {
        babelHelpers.classCallCheck(this, Button);

        var _this = babelHelpers.possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.setElevation = function () {
            _this.setState({
                elevation: 4
            });
        };

        _this.removeElevation = function () {
            _this.setState({
                elevation: 2
            });
        };

        _this.state = {
            elevation: 2
        };
        return _this;
    }

    babelHelpers.createClass(Button, [{
        key: "render",
        value: function render() {
            var elevation = this.state.elevation;
            var _props = this.props,
                text = _props.text,
                value = _props.value,
                theme = _props.theme,
                primary = _props.primary,
                overrides = _props.overrides,
                disabled = _props.disabled,
                raised = _props.raised,
                onPress = _props.onPress,
                onLongPress = _props.onLongPress;


            var textStyleMap = {
                flat: {
                    light: {
                        normal: {
                            color: (0, _helpers.getColor)(primary)
                        },
                        disabled: {
                            color: 'rgba(0,0,0,.26)'
                        }
                    },
                    dark: {
                        normal: {
                            color: (0, _helpers.getColor)(primary)
                        },
                        disabled: {
                            color: 'rgba(255,255,255,.3)'
                        }
                    }
                },
                raised: {
                    light: {
                        normal: {
                            color: (0, _helpers.getColor)(primary)
                        },
                        disabled: {
                            color: 'rgba(0,0,0,.26)'
                        }
                    },
                    dark: {
                        normal: {
                            color: '#fff'
                        },
                        disabled: {
                            color: 'rgba(255,255,255,.3)'
                        }
                    }
                }
            };

            var buttonStyleMap = {
                raised: {
                    light: {
                        normal: {
                            backgroundColor: '#fff',
                            borderColor: 'rgba(0,0,0,.12)'
                        },
                        disabled: {
                            backgroundColor: 'rgba(0,0,0,.12)',
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,.12)'
                        }
                    },
                    dark: {
                        normal: {
                            backgroundColor: (0, _helpers.getColor)(primary),
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,.12)'
                        },
                        disabled: {
                            backgroundColor: 'rgba(255,255,255,.12)',
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,.12)'
                        }
                    }
                }
            };

            var rippleColorMap = {
                flat: {
                    light: {
                        normal: 'rgba(153,153,153,.4)',
                        disabled: 'rgba(0,0,0,0.06)'
                    },
                    dark: {
                        normal: 'rgba(204,204,204,.25)',
                        disabled: 'rgba(255,255,255,0.06)'
                    }
                },
                raised: {
                    light: {
                        normal: 'rgba(153,153,153,.4)',
                        disabled: 'rgba(0,0,0,.06)'
                    },
                    dark: {
                        normal: (0, _helpers.getColor)(primary + "700"),
                        disabled: 'rgba(255,255,255,.06)'
                    }
                }
            };

            var type = disabled ? 'disabled' : 'normal';
            var shape = raised ? 'raised' : 'flat';

            var textStyle = function () {
                if (disabled || !(overrides && overrides.textColor)) {
                    return textStyleMap[shape][theme][type];
                }

                return { color: (0, _helpers.getColor)(overrides.textColor) };
            }();

            var buttonStyle = function () {
                if (raised) {
                    if (disabled || !(overrides && overrides.backgroundColor)) {
                        return buttonStyleMap[shape][theme][type];
                    }

                    return babelHelpers.extends(buttonStyleMap[shape][theme][type], { backgroundColor: (0, _helpers.getColor)(overrides.backgroundColor) });
                }

                return null;
            }();

            var rippleColor = function () {
                if (disabled || !(overrides && overrides.rippleColor)) {
                    return rippleColorMap[shape][theme][type];
                }

                return (0, _helpers.getColor)(overrides.rippleColor);
            }();

            if (disabled) {
                return _react2.default.createElement(
                    _reactNative.View,
                    {
                        style: [styles.button, buttonStyle, {
                            backgroundColor: buttonStyle && buttonStyle.backgroundColor
                        }]
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: [_config.TYPO.paperFontButton, textStyle, styles.text] },
                        text || value
                    )
                );
            }

            if (!(0, _helpers.isCompatible)('TouchableNativeFeedback')) {
                return _react2.default.createElement(
                    _Ripple2.default,
                    {
                        elevation: raised ? [2, 4] : null,
                        rippleColor: rippleColor,
                        onPress: !disabled ? onPress : null,
                        onLongPress: !disabled ? onLongPress : null,
                        style: [styles.button, buttonStyle, {
                            backgroundColor: buttonStyle && buttonStyle.backgroundColor
                        }, raised && !(0, _helpers.isCompatible)('elevation') && _reactNative.Platform.OS !== 'ios' && {
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,.12)'
                        }]
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: [_config.TYPO.paperFontButton, textStyle, styles.text] },
                        text || value
                    )
                );
            }

            return _react2.default.createElement(
                _reactNative.TouchableNativeFeedback,
                {
                    background: _reactNative.TouchableNativeFeedback.Ripple(rippleColor),
                    onPress: !disabled ? onPress : null,
                    onLongPress: !disabled ? onLongPress : null,
                    onPressIn: raised ? this.setElevation : null,
                    onPressOut: raised ? this.removeElevation : null
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [styles.button, buttonStyle, {
                            backgroundColor: buttonStyle && buttonStyle.backgroundColor,
                            elevation: raised ? elevation : 0
                        }]
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: [_config.TYPO.paperFontButton, textStyle, styles.text] },
                        text || value
                    )
                )
            );
        }
    }]);
    return Button;
}(_react.Component);

Button.propTypes = {
    text: _react.PropTypes.string.isRequired,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    overrides: _react.PropTypes.shape({
        textColor: _react.PropTypes.string,
        backgroundColor: _react.PropTypes.string,
        rippleColor: _react.PropTypes.string
    }),
    disabled: _react.PropTypes.bool,
    raised: _react.PropTypes.bool,
    onPress: _react.PropTypes.func,
    onLongPress: _react.PropTypes.func
};
Button.defaultProps = {
    theme: 'light',
    primary: _config.PRIMARY,
    disabled: false,
    raised: false
};
exports.default = Button;


var styles = {
    button: {
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        margin: 6,
        borderRadius: 2
    },
    text: {
        position: 'relative',
        top: _reactNative.Platform.OS === 'android' ? 2 : -4
    }
};