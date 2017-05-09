Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _config = require("./config");

var _helpers = require("./helpers");

var Subheader = function (_Component) {
    babelHelpers.inherits(Subheader, _Component);

    function Subheader() {
        babelHelpers.classCallCheck(this, Subheader);
        return babelHelpers.possibleConstructorReturn(this, (Subheader.__proto__ || Object.getPrototypeOf(Subheader)).apply(this, arguments));
    }

    babelHelpers.createClass(Subheader, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                text = _props.text,
                color = _props.color,
                inset = _props.inset,
                lines = _props.lines;


            return _react2.default.createElement(
                _reactNative.View,
                {
                    style: [styles.container, {
                        paddingLeft: inset ? 72 : 16
                    }]
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        numberOfLines: lines,
                        style: [styles.text, {
                            color: (0, _helpers.getColor)(color),
                            fontWeight: '500'
                        }]
                    },
                    text
                )
            );
        }
    }]);
    return Subheader;
}(_react.Component);

Subheader.propTypes = {
    text: _react.PropTypes.string.isRequired,
    color: _react.PropTypes.string,
    inset: _react.PropTypes.bool,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    lines: _react.PropTypes.number
};
Subheader.defaultProps = {
    color: 'rgba(0,0,0,.54)',
    inset: false,
    theme: 'light',
    lines: 1
};
exports.default = Subheader;


var styles = _reactNative.StyleSheet.create({
    container: {
        padding: 16
    },
    text: _config.TYPO.paperFontBody1
});