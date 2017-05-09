Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MaterialIcons = require('react-native-vector-icons/MaterialIcons');

var _MaterialIcons2 = babelHelpers.interopRequireDefault(_MaterialIcons);

var _iconComponent = _MaterialIcons2.default;

exports.default = {
  set: function set(component) {
    _iconComponent = component;
  },
  get: function get() {
    return _iconComponent;
  }
};