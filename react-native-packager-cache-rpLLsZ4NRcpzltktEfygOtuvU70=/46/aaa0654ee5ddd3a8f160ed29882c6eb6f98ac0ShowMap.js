Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeMaterialDesign = require('react-native-material-design');

var _reactNativeMaps = require('react-native-maps');

var _reactNativeMaps2 = babelHelpers.interopRequireDefault(_reactNativeMaps);

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var LATITUDE_DELTA = 0.0922;
var ASPECT_RATIO = width / height;
var LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

var styles = _reactNative.StyleSheet.create({
  container: babelHelpers.extends({}, _reactNative.StyleSheet.absoluteFillObject, {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }),
  map: babelHelpers.extends({}, _reactNative.StyleSheet.absoluteFillObject)
});

var ShowMap = function (_Component) {
  babelHelpers.inherits(ShowMap, _Component);

  function ShowMap() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, ShowMap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = ShowMap.__proto__ || Object.getPrototypeOf(ShowMap)).call.apply(_ref, [this].concat(args))), _this), _this.state = {

      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
      text: '',
      coords: []
    }, _this.watchID = null, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(ShowMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);

        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA

        };

        _this2.setState({ initialPosition: initialRegion, markerPosition: initialRegion });
      }, function (error) {
        return alert(JSON.stringify(error));
      }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });

      this.watchID = navigator.geolocation.watchPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        var lastRegion = {
          latitude: lat,
          longitude: long,
          longitudeDelta: LONGITUDE_DELTA,
          latitudeDelta: LATITUDE_DELTA
        };

        _this2.setState({ initialPosition: lastRegion, markerPosition: lastRegion });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
    }
  }, {
    key: 'decode',
    value: function decode(t, e) {
      for (var n, o, u = 0, l = 0, r = 0, d = [], h = 0, i = 0, a = null, c = Math.pow(10, e || 5); u < t.length;) {
        a = null, h = 0, i = 0;do {
          a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5;
        } while (a >= 32);n = 1 & i ? ~(i >> 1) : i >> 1, h = i = 0;do {
          a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5;
        } while (a >= 32);o = 1 & i ? ~(i >> 1) : i >> 1, l += n, r += o, d.push([l / c, r / c]);
      }return d = d.map(function (t) {
        return { latitude: t[0], longitude: t[1] };
      });
    }
  }, {
    key: 'fetchData',
    value: function fetchData(obj, text) {
      var _this3 = this;

      var API_KEY = 'AIzaSyDpf8iGh9BovrZtiN3YB8M5yNi0Z2APPaQ';
      var url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + obj.latitude + ',' + obj.longitude + '&destination=' + text + '&key=' + API_KEY;
      fetch(url, { method: 'GET' }).then(function (response) {
        return response.json();
      }).catch(function (error) {
        return alert("There was an error. ");
      }).then(function (responseData) {
        var cordinates = [];

        if (responseData.routes.length) {
          _this3.setState({
            coords: _this3.decode(responseData.routes[0].overview_polyline.points) });
        }

        alert(JSON.stringify(responseData));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var region = this.props.region;

      console.log(region);

      return _react2.default.createElement(
        _reactNative.View,
        { style: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between' } },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container },
          _react2.default.createElement(
            _reactNativeMaps2.default,
            {
              style: styles.map,
              region: this.state.initialPosition
            },
            _react2.default.createElement(_reactNativeMaps2.default.Polyline, {
              coordinates: [].concat(babelHelpers.toConsumableArray(this.state.coords)),
              strokeWidth: 4
            })
          )
        ),
        _react2.default.createElement(
          _reactNative.View,
          { style: { padding: 10 } },
          _react2.default.createElement(_reactNative.TextInput, {
            style: { height: 40, borderColor: 'gray', borderWidth: 1 },
            onChangeText: function onChangeText(text) {
              return _this4.setState({ text: text });
            },
            value: this.state.text }),
          _react2.default.createElement(
            _reactNative.View,
            { style: { padding: 20 } },
            _react2.default.createElement(_reactNativeMaterialDesign.Button, { value: 'NORMAL FLAT', onPress: function onPress() {
                return _this4.fetchData(_this4.state.initialPosition, _this4.state.text);
              }, text: 'Submit' })
          )
        )
      );
    }
  }]);
  return ShowMap;
}(_react.Component);

exports.default = ShowMap;