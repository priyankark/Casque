Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _Elevation = require("./Elevation");

var _Elevation2 = babelHelpers.interopRequireDefault(_Elevation);

var Ripple = function (_Component) {
    babelHelpers.inherits(Ripple, _Component);

    function Ripple(props) {
        babelHelpers.classCallCheck(this, Ripple);

        var _this = babelHelpers.possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call(this, props));

        _this._highlight = function (e) {
            var elevation = _this.props.elevation;


            if (elevation) {
                _this.setState({
                    elevation: elevation[1]
                });
            }

            var _e$nativeEvent = e.nativeEvent,
                pageX = _e$nativeEvent.pageX,
                pageY = _e$nativeEvent.pageY;


            _this.setState({
                rippling: true,
                pageX: pageX,
                pageY: pageY
            });

            _this._getContainerDimensions(function () {
                var duration = _this.state.size / 100 * 110;

                _reactNative.Animated.timing(_this.state.scaleValue, {
                    toValue: 1,
                    duration: duration < 500 || duration >= 1500 ? 500 : duration
                }).start();

                _reactNative.Animated.timing(_this.state.fadeValue, {
                    toValue: .2,
                    duration: 200
                }).start();
            });
        };

        _this._unHighlight = function () {
            var elevation = _this.props.elevation;


            if (elevation) {
                _this.setState({
                    elevation: elevation[0]
                });
            }

            _this.setState({
                rippling: false
            });

            _reactNative.Animated.timing(_this.state.scaleValue, {
                toValue: 0.001,
                duration: 100
            }).start();

            _reactNative.Animated.timing(_this.state.fadeValue, {
                toValue: 0.001,
                duration: 100
            }).start();
        };

        _this._getContainerDimensions = function (next) {
            _this.refs.container.measure(function (x, y, width, height, pageX, pageY) {
                _this.setState({
                    size: 3 * (width > height ? width : height),
                    location: { pageX: pageX, pageY: pageY }
                }, next);
            });
        };

        _this.state = {
            scaleValue: new _reactNative.Animated.Value(0.001),
            fadeValue: new _reactNative.Animated.Value(0.001),
            pageX: null,
            pageY: null,
            rippling: false,
            size: null,
            location: null,
            longPress: false,
            elevation: props.elevation ? props.elevation[0] : null
        };
        return _this;
    }

    babelHelpers.createClass(Ripple, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                rippleColor = _props.rippleColor,
                onPress = _props.onPress,
                onLongPress = _props.onLongPress,
                children = _props.children,
                style = _props.style;
            var _state = this.state,
                fadeValue = _state.fadeValue,
                size = _state.size,
                pageX = _state.pageX,
                pageY = _state.pageY,
                rippling = _state.rippling,
                scaleValue = _state.scaleValue,
                location = _state.location,
                elevation = _state.elevation;

            var outerStyle = {},
                innerStyle = style;

            if (_reactNative.Platform.OS == 'ios') {
                var _reduce = (style instanceof Array ? style : [style]).reduce(function (obj, styles) {
                    if (styles instanceof Object) {
                        Object.entries(styles).forEach(function (_ref) {
                            var _ref2 = babelHelpers.slicedToArray(_ref, 2),
                                name = _ref2[0],
                                value = _ref2[1];

                            return ['marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'marginHorizontal', 'marginVertical', 'margin', 'borderRadius', 'backgroundColor'].indexOf(name) !== -1 ? obj.outerStyle[name] = value : obj.innerStyle[name] = value;
                        });
                    }
                    return obj;
                }, { outerStyle: {}, innerStyle: {} });

                outerStyle = _reduce.outerStyle;
                innerStyle = _reduce.innerStyle;
            }

            return _react2.default.createElement(
                _reactNative.TouchableOpacity,
                {
                    activeOpacity: 1,
                    onPress: onPress,
                    onLongPress: onLongPress,
                    onPressIn: this._highlight,
                    onPressOut: this._unHighlight
                },
                _react2.default.createElement(
                    _reactNative.View,
                    {
                        style: [(0, _Elevation2.default)(elevation ? elevation : 0), outerStyle]
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { ref: "container", style: [styles.container, innerStyle] },
                        children,
                        _react2.default.createElement(_reactNative.Animated.View, { style: [styles.background, {
                                backgroundColor: rippling ? rippleColor : 'transparent',
                                opacity: fadeValue
                            }] }),
                        _react2.default.createElement(_reactNative.Animated.View, { style: [styles.ripple, location && {
                                backgroundColor: rippleColor,
                                width: size,
                                height: size,
                                top: pageY - location.pageY - size / 2,
                                left: pageX - location.pageX - size / 2,
                                borderRadius: size / 2
                            }, {
                                transform: [{ scale: scaleValue }]
                            }]
                        })
                    )
                )
            );
        }
    }]);
    return Ripple;
}(_react.Component);

Ripple.propTypes = {
    rippleColor: _react.PropTypes.string,
    elevation: _react.PropTypes.array,
    onPress: _react.PropTypes.func,
    onLongPress: _react.PropTypes.func,
    style: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]),
    children: _react.PropTypes.element.isRequired
};
Ripple.defaultProps = {
    rippleColor: 'rgba(0,0,0,.2)',
    elevation: null
};
exports.default = Ripple;


var styles = {
    container: {
        overflow: 'hidden'
    },
    background: {
        flex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    ripple: {
        position: 'absolute'
    }
};