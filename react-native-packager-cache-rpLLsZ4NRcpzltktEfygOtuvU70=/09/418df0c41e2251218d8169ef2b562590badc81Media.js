Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var Media = function (_Component) {
    babelHelpers.inherits(Media, _Component);

    function Media() {
        babelHelpers.classCallCheck(this, Media);
        return babelHelpers.possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).apply(this, arguments));
    }

    babelHelpers.createClass(Media, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                image = _props.image,
                height = _props.height,
                overlay = _props.overlay,
                children = _props.children;


            return _react2.default.createElement(
                _reactNative.View,
                { style: { height: height } },
                _react2.default.cloneElement(image, {
                    style: [styles.media, { height: height }]
                }),
                children && _react2.default.createElement(
                    _reactNative.View,
                    { style: [styles.content, overlay && { backgroundColor: 'rgba(0,0,0,.35)' }] },
                    children
                )
            );
        }
    }]);
    return Media;
}(_react.Component);

Media.propTypes = {
    image: _react.PropTypes.shape({ type: _react.PropTypes.oneOf([_reactNative.Image]) }).isRequired,
    height: _react.PropTypes.number,
    overlay: _react.PropTypes.bool,
    children: _react.PropTypes.node
};
Media.defaultProps = {
    height: 150,
    overlay: false
};
exports.default = Media;


var styles = _reactNative.StyleSheet.create({
    media: {
        position: 'absolute',
        left: -16,
        right: -16
    },
    content: {
        position: 'absolute',
        left: -16,
        right: -16,
        bottom: 0,
        paddingTop: 24,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16
    }
});