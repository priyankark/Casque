Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var Actions = function (_Component) {
    babelHelpers.inherits(Actions, _Component);

    function Actions() {
        babelHelpers.classCallCheck(this, Actions);
        return babelHelpers.possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
    }

    babelHelpers.createClass(Actions, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                position = _props.position,
                children = _props.children;


            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.container },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [styles.actions, { alignSelf: position === 'left' ? 'flex-start' : 'flex-end' }] },
                    children
                )
            );
        }
    }]);
    return Actions;
}(_react.Component);

Actions.propTypes = {
    position: _react.PropTypes.oneOf(['left', 'right']),
    children: _react.PropTypes.node.isRequired
};
Actions.defaultProps = {
    position: 'left'
};
exports.default = Actions;


var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: -16,
        paddingLeft: -16
    },
    actions: {
        flexDirection: 'row'
    }
});