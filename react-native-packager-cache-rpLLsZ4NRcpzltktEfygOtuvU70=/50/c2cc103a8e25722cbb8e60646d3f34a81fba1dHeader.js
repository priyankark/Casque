Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var Header = function (_Component) {
    babelHelpers.inherits(Header, _Component);

    function Header() {
        babelHelpers.classCallCheck(this, Header);
        return babelHelpers.possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    babelHelpers.createClass(Header, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                image = _props.image,
                height = _props.height,
                backgroundColor = _props.backgroundColor,
                children = _props.children;


            if (image) {
                return _react2.default.cloneElement(image, {
                    style: [styles.header, { height: height }]
                }, children);
            }

            return _react2.default.createElement(
                _reactNative.View,
                { style: [styles.header, { height: height, backgroundColor: backgroundColor }] },
                children
            );
        }
    }]);
    return Header;
}(_react.Component);

Header.propTypes = {
    image: _react.PropTypes.shape({ type: _react.PropTypes.oneOf([_reactNative.Image]) }),
    backgroundColor: _react.PropTypes.string,
    height: _react.PropTypes.number,
    children: _react.PropTypes.node
};
Header.defaultProps = {
    height: 150,
    backgroundColor: '#333333'
};
exports.default = Header;


var styles = {
    header: {
        paddingHorizontal: 16,
        marginBottom: 8
    }
};