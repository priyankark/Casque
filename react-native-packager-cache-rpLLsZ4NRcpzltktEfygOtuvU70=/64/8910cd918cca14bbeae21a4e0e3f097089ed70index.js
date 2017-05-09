Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _config = require("../config");

var _helpers = require("../helpers");

var _Header = require("./Header");

var _Header2 = babelHelpers.interopRequireDefault(_Header);

var _Section = require("./Section");

var _Section2 = babelHelpers.interopRequireDefault(_Section);

var Drawer = function (_Component) {
    babelHelpers.inherits(Drawer, _Component);

    function Drawer() {
        babelHelpers.classCallCheck(this, Drawer);
        return babelHelpers.possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
    }

    babelHelpers.createClass(Drawer, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                theme = _props.theme,
                overrides = _props.overrides,
                children = _props.children;


            var backgroundColorMap = {
                light: '#ffffff',
                dark: '#333333'
            };

            var backgroundColor = function () {
                if (overrides && overrides.backgroundColor) {
                    return (0, _helpers.getColor)(overrides.backgroundColor);
                }
                return backgroundColorMap[theme];
            }();

            return _react2.default.createElement(
                _reactNative.ScrollView,
                { style: [styles.container, { backgroundColor: backgroundColor }] },
                _react2.default.Children.map(children, function (child) {
                    return _react2.default.cloneElement(child, {
                        theme: theme
                    });
                })
            );
        }
    }]);
    return Drawer;
}(_react.Component);

Drawer.propTypes = {
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    overrides: _react.PropTypes.shape({
        backgroundColor: _react.PropTypes.string
    }),
    children: _react.PropTypes.node.isRequired
};
Drawer.defaultProps = {
    theme: 'light',
    primary: 'paperGrey'
};
Drawer.Header = _Header2.default;
Drawer.Section = _Section2.default;
exports.default = Drawer;


var styles = {
    container: {
        flex: 1
    }
};