Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _helpers = require("./helpers");

var IconToggle = function (_Component) {
    babelHelpers.inherits(IconToggle, _Component);

    function IconToggle(props) {
        babelHelpers.classCallCheck(this, IconToggle);

        var _this = babelHelpers.possibleConstructorReturn(this, (IconToggle.__proto__ || Object.getPrototypeOf(IconToggle)).call(this, props));

        _this.setSize = function (event) {
            var _event$nativeEvent$la = event.nativeEvent.layout,
                width = _event$nativeEvent$la.width,
                height = _event$nativeEvent$la.height;


            _this.setState({
                size: width > height ? width : height
            });
        };

        _this._highlight = function () {
            if (!_this.props.disabled) {
                _reactNative.Animated.timing(_this.state.scaleValue, {
                    toValue: 1,
                    duration: 150
                }).start();
                _reactNative.Animated.timing(_this.state.opacityValue, {
                    toValue: _this.state.maxOpacity,
                    duration: 100
                }).start();
            }
        };

        _this._unHighlight = function () {
            if (!_this.props.disabled) {
                _reactNative.Animated.timing(_this.state.scaleValue, {
                    toValue: 0.01,
                    duration: 1500
                }).start();
                _reactNative.Animated.timing(_this.state.opacityValue, {
                    toValue: 0
                }).start();
            }
        };

        _this._animateBadgeCounter = function () {
            if (_this.badgeAnim && _this.props.badge && _this.props.badge.animate !== false) {
                _reactNative.Animated.spring(_this.badgeAnim, {
                    toValue: 0,
                    velocity: 8,
                    tension: -5,
                    friction: 1,
                    duration: 300
                }).start();
            }
        };

        _this._handleResponderEnd = function () {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onPress = _this$props.onPress;


            if (!disabled) {
                _this._unHighlight();
                onPress && onPress();
            }
        };

        _this.state = {
            scaleValue: new _reactNative.Animated.Value(0.01),
            opacityValue: new _reactNative.Animated.Value(0.1),
            maxOpacity: props.opacity,
            size: null
        };
        _this._responder = {
            onStartShouldSetResponder: function onStartShouldSetResponder(e) {
                return true;
            },
            onResponderGrant: _this._highlight,
            onResponderRelease: _this._handleResponderEnd,
            onResponderTerminate: _this._unHighlight
        };
        return _this;
    }

    babelHelpers.createClass(IconToggle, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (this.props && this.props.badge) {
                if (prevProps.badge && this.props.badge.value !== prevProps.badge.value) {
                    this._animateBadgeCounter();
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                scaleValue = _state.scaleValue,
                opacityValue = _state.opacityValue,
                size = _state.size;
            var _props = this.props,
                color = _props.color,
                children = _props.children;
            var badge = this.props.badge;
            var percent = this.props.percent;


            if (percent < 0) {
                percent = 0;
            }
            if (percent > 100) {
                percent = 100;
            }

            percent = percent / 100;

            if (badge && typeof badge.value === 'number') {
                badge = babelHelpers.extends({}, { value: badge.value }, badge.backgroundColor ? { backgroundColor: badge.backgroundColor } : { backgroundColor: 'paperRed' }, badge.textColor ? { textColor: badge.textColor } : { textColor: '#ffffff' });
            }

            this.badgeAnim = this.badgeAnim || new _reactNative.Animated.Value(0);

            return _react2.default.createElement(
                _reactNative.View,
                this._responder,
                _react2.default.createElement(
                    _reactNative.View,
                    null,
                    size && _react2.default.createElement(_reactNative.Animated.View, {
                        style: [{
                            position: 'absolute',
                            left: (1 - percent) * size / 2,
                            top: (1 - percent) * size / 2,
                            width: percent * size,
                            height: percent * size,
                            borderRadius: percent * size / 2,
                            transform: [{ scale: scaleValue }],
                            opacity: opacityValue,
                            backgroundColor: (0, _helpers.getColor)(color)
                        }]
                    }),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: { backgroundColor: 'transparent' }, onLayout: function onLayout(event) {
                                _this2.setSize(event);
                            } },
                        children
                    ),
                    size && badge && typeof badge.value === 'number' && _react2.default.createElement(
                        _reactNative.Animated.View,
                        { style: [styles.badgeContainer, {
                                backgroundColor: (0, _helpers.getColor)(badge.backgroundColor),
                                top: size / 10,
                                right: size / 10,
                                transform: [{ scale: this.badgeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 1.25]
                                    }) }, { translateX: this.badgeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, -6]
                                    }) }, { translateY: this.badgeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 5]
                                    }) }, { rotate: this.badgeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '45deg']
                                    }) }] }]
                        },
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: { flex: 1, justifyContent: 'center' } },
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: [styles.badgeText, { color: (0, _helpers.getColor)(badge.textColor) }, badge.value > 99 ? { fontSize: 8 } : { fontSize: 10 }] },
                                badge.value
                            )
                        )
                    )
                )
            );
        }
    }]);
    return IconToggle;
}(_react.Component);

IconToggle.propTypes = {
    color: _react.PropTypes.string.isRequired,
    opacity: _react.PropTypes.number,
    disabled: _react.PropTypes.bool,
    onPress: _react.PropTypes.func,
    percent: _react.PropTypes.number,
    children: _react.PropTypes.element.isRequired,
    badge: _react.PropTypes.shape({
        value: _react.PropTypes.number,
        animate: _react.PropTypes.bool,
        backgroundColor: _react.PropTypes.string,
        textColor: _react.PropTypes.string
    })
};
IconToggle.defaultProps = {
    opacity: .1,
    disabled: false,
    percent: 90
};
exports.default = IconToggle;


var styles = {
    badgeContainer: {
        position: 'absolute',
        borderRadius: 7.5,
        width: 15,
        height: 15
    },
    badgeText: {
        textAlign: 'center'
    }
};