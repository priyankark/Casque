Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeMaterialDesign = require('react-native-material-design');

var _reactNativeCommunications = require('react-native-communications');

var _reactNativeCommunications2 = babelHelpers.interopRequireDefault(_reactNativeCommunications);

var SelectContacts = require('react-native-select-contact-android');
var ContactPicker = require('react-native-android-contactpicker');

var Contacts = function (_Component) {
  babelHelpers.inherits(Contacts, _Component);

  function Contacts() {
    babelHelpers.classCallCheck(this, Contacts);
    return babelHelpers.possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).apply(this, arguments));
  }

  babelHelpers.createClass(Contacts, [{
    key: 'selectC',
    value: function selectC() {
      _reactNativeCommunications2.default.text('9945864011', "hey");
      ContactPicker.open({
        theme: ContactPicker.Themes.LIGHT,
        limit: 20,
        onlyWithPhone: true
      }).then(function (contacts) {
        _reactNative.Alert.alert(contacts[0].phoneNumbers[0].number);
      }).catch(function (err) {
        _reactNative.Alert.alert(err.code, err.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactNativeMaterialDesign.Button, { value: 'NORMAL FLAT', onPress: function onPress() {
          return _this2.selectC();
        }, text: 'Contacts' });
    }
  }]);
  return Contacts;
}(_react.Component);

exports.default = Contacts;