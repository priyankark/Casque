Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeMaps = require('react-native-maps');

var _reactNativeMaps2 = babelHelpers.interopRequireDefault(_reactNativeMaps);

var _Header = require('./src/components/Header');

var _Header2 = babelHelpers.interopRequireDefault(_Header);

var _ShowMap = require('./src/components/ShowMap');

var _ShowMap2 = babelHelpers.interopRequireDefault(_ShowMap);

var _Contacts = require('./src/components/Contacts');

var _Contacts2 = babelHelpers.interopRequireDefault(_Contacts);

var styles = _reactNative.StyleSheet.create({
  container: babelHelpers.extends({}, _reactNative.StyleSheet.absoluteFillObject, {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }),
  map: babelHelpers.extends({}, _reactNative.StyleSheet.absoluteFillObject)
});

var Casque = function (_Component) {
  babelHelpers.inherits(Casque, _Component);

  function Casque() {
    babelHelpers.classCallCheck(this, Casque);
    return babelHelpers.possibleConstructorReturn(this, (Casque.__proto__ || Object.getPrototypeOf(Casque)).apply(this, arguments));
  }

  babelHelpers.createClass(Casque, [{
    key: 'render',
    value: function render() {
      var region = this.props.region;

      console.log(region);

      return _react2.default.createElement(
        _reactNative.ScrollView,
        null,
        _react2.default.createElement(
          _reactNative.View,
          { style: { flexDirection: 'column', flex: 1 } },
          _react2.default.createElement(
            _reactNative.View,
            null,
            _react2.default.createElement(_Header2.default, { headerText: 'Casque' })
          ),
          _react2.default.createElement(
            _reactNative.View,
            null,
            _react2.default.createElement(_ShowMap2.default, null)
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginTop: 410 } },
            _react2.default.createElement(_Contacts2.default, null)
          )
        )
      );
    }
  }]);
  return Casque;
}(_react.Component);

exports.default = Casque;


_reactNative.AppRegistry.registerComponent('Casque', function () {
  return Casque;
});