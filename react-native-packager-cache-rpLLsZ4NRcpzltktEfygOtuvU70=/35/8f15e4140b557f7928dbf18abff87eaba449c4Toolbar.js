Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _config = require("./config");

var _helpers = require("./helpers");

var _Icon = require("./Icon");

var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

var _IconToggle = require("./IconToggle");

var _IconToggle2 = babelHelpers.interopRequireDefault(_IconToggle);

var Toolbar = function (_Component) {
    babelHelpers.inherits(Toolbar, _Component);

    function Toolbar() {
        babelHelpers.classCallCheck(this, Toolbar);
        return babelHelpers.possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
    }

    babelHelpers.createClass(Toolbar, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                theme = _props.theme,
                primary = _props.primary,
                style = _props.style,
                leftIconStyle = _props.leftIconStyle,
                rightIconStyle = _props.rightIconStyle,
                elevation = _props.elevation,
                overrides = _props.overrides,
                icon = _props.icon,
                onIconPress = _props.onIconPress,
                actions = _props.actions;


            var themeMap = {
                light: {
                    backgroundColor: '#ffffff',
                    color: 'rgba(0,0,0,.87)',
                    leftIconColor: 'rgba(0,0,0,.54)',
                    rightIconColor: 'rgba(0,0,0,.54)'
                },
                dark: {
                    backgroundColor: (0, _helpers.getColor)(primary),
                    color: 'rgba(255,255,255,.87)',
                    leftIconColor: 'rgba(255,255,255,.87)',
                    rightIconColor: 'rgba(255,255,255,.87)'
                }
            };

            var opacityMap = {
                light: .38,
                dark: .30
            };

            var styleMap = {
                backgroundColor: overrides && overrides.backgroundColor ? (0, _helpers.getColor)(overrides.backgroundColor) : themeMap[theme].backgroundColor,
                color: overrides && overrides.color ? (0, _helpers.getColor)(overrides.color) : themeMap[theme].color,
                leftIconColor: overrides && overrides.leftIconColor ? (0, _helpers.getColor)(overrides.leftIconColor) : themeMap[theme].leftIconColor,
                rightIconColor: overrides && overrides.rightIconColor ? (0, _helpers.getColor)(overrides.rightIconColor) : themeMap[theme].rightIconColor
            };

            return _react2.default.createElement(
                _reactNative.View,
                { style: [styles.toolbar, { backgroundColor: styleMap.backgroundColor, elevation: elevation }, style] },
                icon && _react2.default.createElement(
                    _IconToggle2.default,
                    {
                        color: styleMap.leftIconColor,
                        onPress: onIconPress
                    },
                    _react2.default.createElement(_Icon2.default, { name: icon || 'menu',
                        size: 24,
                        color: styleMap.leftIconColor,
                        style: [styles.leftIcon, leftIconStyle]
                    })
                ),
                !title ? this.props.children : _react2.default.createElement(
                    _reactNative.Text,
                    {
                        numberOfLines: 1,
                        style: [styles.title, _config.TYPO.paperFontTitle, {
                            color: styleMap.color,
                            marginLeft: icon ? styles.title.marginLeft : 16
                        }]
                    },
                    title
                ),
                actions && actions.map(function (action, i) {
                    return _react2.default.createElement(
                        _IconToggle2.default,
                        {
                            key: i,
                            color: styleMap.rightIconColor,
                            badge: action.badge,
                            onPress: action.onPress,
                            disabled: action.disabled
                        },
                        _react2.default.createElement(_Icon2.default, { name: action.icon,
                            size: 24,
                            color: styleMap.rightIconColor,
                            style: [styles.rightIcon, rightIconStyle, action.disabled ? { opacity: opacityMap[theme] } : null]
                        })
                    );
                })
            );
        }
    }]);
    return Toolbar;
}(_react.Component);

Toolbar.propTypes = {
    title: _react.PropTypes.string,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    style: _reactNative.View.propTypes.style,
    leftIconStyle: _react.PropTypes.object,
    rightIconStyle: _react.PropTypes.object,
    elevation: _react.PropTypes.number,
    overrides: _react.PropTypes.shape({
        backgroundColor: _react.PropTypes.string,
        titleColor: _react.PropTypes.string,
        leftIconColor: _react.PropTypes.string,
        rightIconColor: _react.PropTypes.string
    }),
    icon: _react.PropTypes.string,
    onIconPress: _react.PropTypes.func,
    actions: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        icon: _react.PropTypes.string.isRequired,
        onPress: _react.PropTypes.func,
        counter: _react.PropTypes.shape()
    }))
};
Toolbar.defaultProps = {
    theme: 'dark',
    primary: _config.PRIMARY,
    elevation: 4
};
exports.default = Toolbar;


var styles = {
    toolbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        marginLeft: 16
    },
    leftIcon: {
        margin: 16
    },
    rightIcon: {
        margin: 16
    }
};