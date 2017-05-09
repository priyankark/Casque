Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _RadioButton = require("./RadioButton");

var _RadioButton2 = babelHelpers.interopRequireDefault(_RadioButton);

var _config = require("./config");

var RadioButtonGroup = function (_Component) {
    babelHelpers.inherits(RadioButtonGroup, _Component);

    function RadioButtonGroup(props) {
        babelHelpers.classCallCheck(this, RadioButtonGroup);

        var _this = babelHelpers.possibleConstructorReturn(this, (RadioButtonGroup.__proto__ || Object.getPrototypeOf(RadioButtonGroup)).call(this, props));

        _this.componentDidMount = function () {
            var selected = _this.state.selected;


            if (selected) {
                _this.value = selected;
            }
        };

        _this.onSelect = function (value) {
            var onSelect = _this.props.onSelect;


            _this.setState({
                selected: value
            });

            onSelect && onSelect(value);
        };

        _this.state = {
            selected: props.selected || null
        };
        return _this;
    }

    babelHelpers.createClass(RadioButtonGroup, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                items = _props.items,
                theme = _props.theme,
                primary = _props.primary;

            return _react2.default.createElement(
                _reactNative.View,
                null,
                items && items.length && items.map(function (item) {
                    var value = item.value;

                    return _react2.default.createElement(_RadioButton2.default, babelHelpers.extends({
                        ref: value,
                        key: "RadioButton" + value,
                        value: "" + value.toString(),
                        theme: theme,
                        primary: primary,
                        onSelect: _this2.onSelect,
                        checked: _this2.state.selected && _this2.state.selected === value
                    }, item));
                })
            );
        }
    }, {
        key: "value",
        get: function get() {
            return this.state.selected;
        },
        set: function set(value) {
            this.onSelect(value);
        }
    }]);
    return RadioButtonGroup;
}(_react.Component);

RadioButtonGroup.propTypes = {
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    onSelect: _react.PropTypes.func,
    selected: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
        label: _react.PropTypes.string,
        disabled: _react.PropTypes.bool
    }))
};
RadioButtonGroup.defaultProps = {
    theme: 'light',
    primary: _config.PRIMARY
};
exports.default = RadioButtonGroup;