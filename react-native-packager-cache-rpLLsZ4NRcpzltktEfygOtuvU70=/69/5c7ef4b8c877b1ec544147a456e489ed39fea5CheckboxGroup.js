Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _Checkbox = require("./Checkbox");

var _Checkbox2 = babelHelpers.interopRequireDefault(_Checkbox);

var _config = require("./config");

var CheckboxGroup = function (_Component) {
    babelHelpers.inherits(CheckboxGroup, _Component);

    function CheckboxGroup(props) {
        babelHelpers.classCallCheck(this, CheckboxGroup);

        var _this = babelHelpers.possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

        _this.componentWillMount = function () {
            var checked = _this.props.checked;


            if (checked && checked.length) {
                _this.value = checked;
            }
        };

        _this._onChange = function (checked, value) {
            var selected = _this.state.selected;


            var newSelected;
            if (checked) {
                newSelected = [].concat(babelHelpers.toConsumableArray(selected), [value]);
            } else {
                var index = selected.indexOf(value);
                newSelected = [].concat(babelHelpers.toConsumableArray(selected.slice(0, index)), babelHelpers.toConsumableArray(selected.slice(index + 1)));
            }

            _this.setState({
                selected: newSelected
            });

            var onSelect = _this.props.onSelect;

            onSelect && onSelect(newSelected);
        };

        _this.state = {
            selected: []
        };
        return _this;
    }

    babelHelpers.createClass(CheckboxGroup, [{
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

                    return _react2.default.createElement(_Checkbox2.default, babelHelpers.extends({
                        ref: value,
                        key: "Checkbox" + value,
                        value: value,
                        theme: theme,
                        primary: primary,
                        onCheck: _this2._onChange,
                        checked: _this2.state.selected && _this2.state.selected.indexOf(value) !== -1
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
            this.setState({
                selected: value
            });

            var onSelect = this.props.onSelect;

            onSelect && onSelect(value);
        }
    }]);
    return CheckboxGroup;
}(_react.Component);

CheckboxGroup.propTypes = {
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    onSelect: _react.PropTypes.func,
    checked: _react.PropTypes.array,
    items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
        label: _react.PropTypes.string,
        disabled: _react.PropTypes.bool
    }))
};
CheckboxGroup.defaultProps = {
    theme: 'light',
    primary: _config.PRIMARY
};
exports.default = CheckboxGroup;