Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getColor = getColor;
exports.isCompatible = isCompatible;

var _reactNative = require('react-native');

var _config = require('./config');

function getColor(string) {
    if (string) {
        if (string.indexOf('#') > -1 || string.indexOf('rgba') > -1) {
            return string;
        }

        if (_config.COLOR[string]) {
            return _config.COLOR[string].color;
        }

        if (_config.COLOR[string + '500']) {
            return _config.COLOR[string + '500'].color;
        }
    }

    return _config.COLOR[_config.PRIMARY + '500'].color;
}

function isCompatible(feature) {
    var version = _reactNative.Platform.Version;

    switch (feature) {
        case 'TouchableNativeFeedback':
            return version >= 21;
            break;
        case 'elevation':
            return version >= 21;
            break;
        default:
            return true;
            break;
    }
}