Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var Body = function (_Component) {
    babelHelpers.inherits(Body, _Component);

    function Body() {
        babelHelpers.classCallCheck(this, Body);
        return babelHelpers.possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    babelHelpers.createClass(Body, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                theme = _props.theme,
                children = _props.children;


            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.container },
                children
            );
        }
    }]);
    return Body;
}(_react.Component);

Body.propTypes = {
    children: _react.PropTypes.node.isRequired
};
exports.default = Body;


var styles = _reactNative.StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingBottom: 16
    }
});