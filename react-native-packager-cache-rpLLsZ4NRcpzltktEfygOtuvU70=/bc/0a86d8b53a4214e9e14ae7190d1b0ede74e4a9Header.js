Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Header = function Header(props) {
    var textStyle = Styles.textStyle,
        viewStyle = Styles.viewStyle;

    return _react2.default.createElement(
        _reactNative.View,
        { style: viewStyle },
        _react2.default.createElement(
            _reactNative.Text,
            { style: textStyle },
            props.headerText
        )
    );
};

var Styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20
    }
};

exports.default = Header;