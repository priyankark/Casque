Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (elevation) {
	if (_reactNative.Platform.OS == 'ios') {
		if (elevation !== 0) {
			return {
				shadowColor: "black",
				shadowOpacity: 0.3,
				shadowRadius: elevation,
				shadowOffset: {
					height: 2,
					width: 0
				}
			};
		} else {
			return {};
		}
	} else {
		return {
			elevation: elevation
		};
	}
};

var _reactNative = require('react-native');