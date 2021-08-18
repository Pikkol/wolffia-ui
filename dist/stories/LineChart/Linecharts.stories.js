"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("../../charts/LineChart/index"));

var _luxon = require("luxon");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Storybook
var stories = (0, _react2.storiesOf)("LineCharts", module);

var randBetween = function randBetween(x, y) {
  return x + Math.random() * (y - x);
};

var data = [{
  id: 1,
  value: 1311,
  reading: 1500
}, {
  id: 2,
  reading: 1912
}, {
  id: 3,
  value: 1000
}, {
  id: 4,
  value: 1513
}, {
  id: 5,
  value: 1351,
  reading: 1000
}, {
  id: 6,
  value: 1451,
  reading: 1200
}];
stories.add("Getting started", function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, "Line charts are useful for showing linear trends in data. The x & y variables in a line chart need to be numerical (x-axis variable can be a timestamp as well for time series data).", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "new-line",
    data: data,
    x: {
      key: "id"
    },
    y: [{
      key: "value"
    }, {
      key: "reading"
    }]
  })));
});
stories.add("add classNames to series", function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, "Series can be formatted by adding tailwind classNames to them.", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "new-line",
    data: data,
    className: "rounded text-gray-500 dark:text-white",
    x: {
      key: "id"
    },
    y: [{
      key: "value",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      className: "stroke-current text-green-500"
    }]
  }), "For more customized styling, feel free to add your own custom classNames and styles.", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "custom-styling-line",
    data: data,
    className: "rounded text-gray-500 dark:text-white",
    x: {
      key: "id"
    },
    y: [{
      key: "value",
      className: "custom-series-1"
    }, {
      key: "reading",
      className: "custom-series-2 running"
    }]
  })));
});
stories.add("Styling the chart", function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, "Tailwind classes to the entire chart", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "chart-styling-demo",
    data: data,
    className: "rounded bg-red-50 hover:bg-red-100 dark:bg-red-900 ",
    x: {
      key: "id"
    },
    y: [{
      key: "value",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      className: "stroke-current text-green-500"
    }]
  }), "W-, H- classes won't work though. Specify width & height as prop. This is because d3 computations are based on this", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "chart-styling-width-demo",
    data: data,
    width: 320,
    height: 120,
    className: "rounded bg-red-50 hover:bg-red-100 dark:bg-red-900",
    x: {
      key: "id"
    },
    y: [{
      key: "value",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      className: "stroke-current text-green-500"
    }]
  }), "Add Padding to a chart. Padding is the space between the drawn axis and the chart area", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "chart-styling-padding-demo",
    data: data,
    width: 320,
    height: 120,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    className: "rounded bg-red-50 hover:bg-red-100 dark:bg-red-900",
    x: {
      key: "id"
    },
    y: [{
      key: "value",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      className: "stroke-current text-green-500"
    }]
  })));
});
stories.add("x-axis customization", function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, "Axis at the top", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "x-axis-top-demo",
    data: data,
    className: "rounded text-gray-500 dark:text-white",
    x: {
      key: "id",
      axis: "top"
    },
    y: [{
      key: "value",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      className: "stroke-current text-green-500"
    }]
  }), "Custom Axis ticks", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "x-axis-ticks-demo",
    data: data,
    className: "rounded text-gray-500 dark:text-white",
    x: {
      key: "id",
      axisTicks: 3
    },
    y: [{
      key: "value",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      className: "stroke-current text-green-500"
    }]
  }), "Axis Label", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "x-axis-label-demo",
    data: data,
    className: "rounded text-gray-500 dark:text-white",
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      className: "stroke-current text-green-500"
    }]
  }), "Custom axis start and end", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "x-axis-custom-demo",
    data: data,
    className: "rounded text-gray-500 dark:text-white",
    x: {
      key: "id",
      axisLabel: "Position",
      start: 0,
      end: 7
    },
    y: [{
      key: "value",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      className: "stroke-current text-green-500"
    }]
  })));
});
stories.add("y-axis customization", function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, "Left and right axis demo", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "multi-axis-demo-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "right",
      className: "stroke-current text-green-500"
    }]
  }), "Custom start & end point on y-axis scales", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "multi-axis-custom-start-end-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      start: 0,
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "right",
      end: 3000,
      className: "stroke-current text-green-500"
    }]
  }), "Custom ticks", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "multi-axis-custom-ticks-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      start: 0,
      ticks: 3,
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "right",
      end: 3000,
      ticks: 3,
      className: "stroke-current text-green-500"
    }]
  }), "Customize symbol (shape and size)", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "multi-axis-custom-symbol-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      start: 0,
      ticks: 3,
      symbol: "diamond",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "right",
      symbol: "triangle",
      size: 25,
      end: 3000,
      ticks: 3,
      className: "stroke-current text-green-500"
    }]
  }), "Customize what to do if series value is Undefined or unknown", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "multi-axis-custom-unknown-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      ticks: 3,
      symbol: "diamond",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "right",
      symbol: "triangle",
      size: 25,
      start: 0,
      unknown: "zero",
      ticks: 3,
      className: "stroke-current stroke-2 text-green-500"
    }]
  }), "Y axis - custom label", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "multi-axis-custom-label-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      ticks: 3,
      symbol: "diamond",
      axisLabel: "Value",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "right",
      symbol: "triangle",
      axisLabel: "Reading",
      size: 25,
      start: 0,
      unknown: "zero",
      ticks: 3,
      className: "stroke-current stroke-2 text-green-500"
    }]
  }), "Customized curve", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "multi-axis-custom-curve-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      ticks: 3,
      symbol: "diamond",
      curve: "step",
      axisLabel: "Value",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "left",
      symbol: "triangle",
      axisLabel: "Reading",
      size: 25,
      curve: "rounded",
      ticks: 3,
      className: "stroke-current  text-green-500"
    }]
  }), "Custom Curve"));
});
stories.add("Tooltip", function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, "Simplest Tooltip - hover over the chart", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "tooltip-demo-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "right",
      className: "stroke-current text-green-500"
    }],
    tooltip: {
      keys: ["id", "value", "reading"]
    }
  }), "Show Guide-lines", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "guidelines-demo-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "right",
      className: "stroke-current text-green-500"
    }],
    showGuidelines: true,
    tooltip: {}
  }), "Custom style tooltip (with tailwind classes)", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "tooltip-className-demo-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "right",
      className: "stroke-current text-green-500"
    }],
    tooltip: {
      keys: ["id", "value", "reading"],
      className: "bg-white rounded ring-2 p-2"
    },
    showGuidelines: true
  })));
});
stories.add("Reference Lines", function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, "Vertical Reference Lines", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "tooltip-demo-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      start: 0,
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      className: "stroke-current text-green-500"
    }],
    referenceLines: [{
      x: 4,
      className: "stroke-current text-blue-200 stroke-2"
    }]
  }), "Horizontal Reference Lines (add equation)", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "horiz-refer-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      start: 0,
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      className: "stroke-current text-green-500"
    }] // tooltip={{ keys: ["id", "value", "reading"] }}
    ,
    referenceLines: [{
      yLeft: 1200,
      className: "text-blue-200 stroke-2",
      showText: true
    }]
  })));
});
stories.add("Zoom", function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, "Zoom over a region of the chart by dragging. Undo the zoom by double clicking anywhere on the chart", /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "horiz-refer-chart",
    data: data,
    x: {
      key: "id",
      axisLabel: "Position"
    },
    y: [{
      key: "value",
      axis: "left",
      start: 0,
      className: "stroke-current text-red-500"
    }, {
      key: "reading",
      axis: "right",
      className: "stroke-current text-green-500"
    }],
    paddingLeft: 15 // tooltip={{ keys: ["id", "value", "reading"] }}
    ,
    zooming: true
  })));
});
stories.add("Time series", function () {
  var arrayLength = 200;
  var newData = new Array(arrayLength).fill("").map(function (_, index) {
    return {
      date: _luxon.DateTime.now().startOf("day").minus({
        days: arrayLength - index
      }).toFormat("yyyy-MM-dd hh:mm:ss"),
      value: randBetween(1000, 1004) + randBetween(index - 10, index),
      reading: randBetween(1000, 996) - randBetween(index - 10, index)
    };
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "time-series",
    data: newData,
    width: 480,
    height: 180,
    showGuidelines: true,
    className: "rounded text-gray-500 dark:text-gray-100",
    x: {
      key: "date",
      scalingFunction: "time",
      format: "yyyy-MM-dd hh:mm:ss",
      axisLabel: "Date"
    },
    y: [{
      key: "value",
      axis: "left",
      start: 0,
      symbol: "none",
      className: "text-red-200 stroke-current",
      curve: "rounded",
      circleFill: true
    }, {
      key: "reading",
      axis: "left",
      symbol: "none"
    }],
    tooltip: {
      // keys: ["date", "value"],
      html: function html(row) {
        return "".concat(_luxon.DateTime.fromFormat(row.date, "yyyy-MM-dd hh:mm:ss").toFormat("dd MMM"), "'s <br/> value : <strong>").concat(row.value.toFixed(2), "</strong> <br/>\n            reading : <strong>").concat(row.reading.toFixed(2), "</strong>\n            ");
      },
      className: "bg-white rounded border-2 p-2 transition-opacity duration-500",
      onClick: function onClick(row) {
        console.log(row);
      }
    },
    paddingBottom: 10,
    zooming: {
      enable: true,
      min: 1,
      max: 10
    },
    referenceLines: [{
      x: _luxon.DateTime.now().minus({
        days: 10
      }).toFormat("yyyy-MM-dd hh:mm:ss"),
      className: "text-red-900"
    }, {
      x: _luxon.DateTime.now().minus({
        days: 30
      }).toFormat("yyyy-MM-dd hh:mm:ss"),
      className: "text-blue-500"
    }, {
      yLeft: 1000,
      className: "stroke-current text-green-500",
      showText: true
    }]
  }));
});