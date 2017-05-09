Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _Icon = require("../Icon");

var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

var _Ripple = require("../polyfill/Ripple");

var _Ripple2 = babelHelpers.interopRequireDefault(_Ripple);

var _config = require("../config");

var _helpers = require("../helpers");

var Section = function (_Component) {
    babelHelpers.inherits(Section, _Component);

    function Section() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Section);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Section.__proto__ || Object.getPrototypeOf(Section)).call.apply(_ref, [this].concat(args))), _this), _this.renderRow = function (item, index, color) {
            return _react2.default.createElement(
                _reactNative.View,
                {
                    key: index,
                    style: styles.item
                },
                item.icon && _react2.default.createElement(_Icon2.default, {
                    name: item.icon,
                    color: color,
                    size: 22,
                    style: styles.icon
                }),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.value },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: [_config.TYPO.paperFontBody2, { color: color }] },
                        item.value
                    )
                ),
                item.label && _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.label },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: [_config.TYPO.paperFontBody2, { color: color }] },
                        item.label
                    )
                )
            );
        }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Section, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                theme = _props.theme,
                title = _props.title,
                items = _props.items;


            var textStyleMap = {
                light: {
                    'default': 'rgba(0,0,0,.87)',
                    disabled: 'rgba(0,0,0,.38)'
                },
                dark: {
                    'default': '#ffffff',
                    disabled: 'rgba(255,255,255,.30)'
                }
            };

            var subheaderStyleMap = {
                light: 'rgba(0,0,0,.54)',
                dark: 'rgba(255,255,255,.70)'
            };

            var activeStyleMap = {
                light: '#f5f5f5',
                dark: '#212121'
            };

            var TEXT_COLOR = textStyleMap[theme]['default'];
            var SUB_TEXT_COLOR = subheaderStyleMap[theme];
            var ACTIVE_COLOR = activeStyleMap[theme];

            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.section },
                title && _react2.default.createElement(
                    _reactNative.View,
                    { style: [styles.subheader, styles.item] },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: [_config.TYPO.paperFontBody2, { color: SUB_TEXT_COLOR }] },
                        title
                    )
                ),
                items && items.map(function (item, i) {
                    if (item.disabled) {
                        return _this2.renderRow(item, i, textStyleMap[theme]['disabled']);
                    }

                    if (!(0, _helpers.isCompatible)('TouchableNativeFeedback')) {
                        return _react2.default.createElement(
                            _Ripple2.default,
                            {
                                key: i,
                                rippleColor: "rgba(153,153,153,.4)",
                                onPress: item.onPress,
                                onLongPress: item.onLongPress,
                                style: {
                                    flex: 1,
                                    flexDirection: 'row',
                                    backgroundColor: item.active ? ACTIVE_COLOR : null
                                }
                            },
                            _this2.renderRow(item, i, TEXT_COLOR)
                        );
                    }

                    return _react2.default.createElement(
                        _reactNative.TouchableNativeFeedback,
                        {
                            key: i,
                            background: _reactNative.TouchableNativeFeedback.Ripple('rgba(153,153,153,.4)'),
                            onPress: item.onPress,
                            onLongPress: item.onLongPress
                        },
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: item.active ? { backgroundColor: ACTIVE_COLOR } : {} },
                            _this2.renderRow(item, i, TEXT_COLOR)
                        )
                    );
                })
            );
        }
    }]);
    return Section;
}(_react.Component);

Section.propTypes = {
    title: _react.PropTypes.string,
    items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        icon: _react.PropTypes.string,
        value: _react.PropTypes.string.isRequired,
        label: _react.PropTypes.string,
        onPress: _react.PropTypes.func,
        onLongPress: _react.PropTypes.func,
        active: _react.PropTypes.bool,
        disabled: _react.PropTypes.bool
    }))
};
exports.default = Section;


var styles = {
    section: {
        flex: 1,
        marginTop: 8
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingLeft: 16
    },
    subheader: {
        flex: 1
    },
    icon: {
        position: 'absolute',
        top: 13
    },
    value: {
        flex: 1,
        paddingLeft: 56,
        top: 2
    },
    label: {
        paddingRight: 16,
        top: 2
    }
};