(function (name, dependencies, definition) {
  if (typeof module != "undefined") module.exports = definition();
  else if (typeof define == "function" && typeof define.amd == "object")
    define(name, dependencies, definition);
  else this[name] = definition();
})("MindFusion.Common", [], function () {
  var a = [
    "updateCanvasElements",
    "Vector",
    "pivot",
    "href",
    "onreadystatechange",
    "registerNamespace",
    "_mf_autoId",
    "context",
    "drawPath",
    "#ffb6c1",
    "mflayer",
    "#f5fffa",
    "getPixel",
    "Cannot\x20find\x20key\x20",
    "setLineDash",
    "MiddleLeft",
    "buckets",
    "onerror",
    "Unknown\x20color\x20code:\x20",
    "rotateAt",
    "\x20rotate(",
    "#f5f5f5",
    "fill",
    "tm4",
    "MsAjax",
    "invisible",
    "string",
    "setBounds",
    "ButtonType",
    "#ffe4c4",
    "path",
    "#ffffff",
    "Pixel",
    "Geometry",
    "Point",
    "Image",
    "html",
    "MAX_VALUE",
    "getTime",
    "backBrush",
    "#f8f8ff",
    "bottom",
    "invert",
    "CancelEventArgs",
    "getCount",
    "Horizontal",
    "preparePostback",
    "create",
    "Base64",
    "draw",
    "setZoomFactorInternal",
    "addHandler",
    "magnifierEnabled",
    "svgPath",
    "#dcdcdc",
    "fromTwoPoints",
    "cachedText",
    "repaint",
    "objectIdCounter",
    "#c71585",
    "mouseup",
    "zoomFactor",
    "measureStyledText",
    "\x09this.instance[funcName](value);\x20",
    "textAlignment",
    "sub",
    "JSON\x20is\x20undefined.",
    "_mf_minVisibleFontSize",
    "setScroll",
    "#8fbc8f",
    "desiredWidth",
    "childNodes",
    "#90ee90",
    "#ffffe0",
    "all",
    "hitTestManipulators",
    "moveTo",
    "HTMLtoXHTML",
    "getContext",
    "offsetPointCollection",
    "rgba(0,0,0,1)",
    "diagram",
    "buffer",
    "clip",
    "#ffc0cb",
    "decorationPen",
    "getSize",
    "save",
    "sin",
    "strokeThickness",
    "clipPath",
    "#dda0dd",
    "#text",
    "activeColor",
    "setRequestHeader",
    "bottomLeft",
    "#9acd32",
    "gridOffsetY",
    "EventHandlerList",
    "MindFusion.Diagramming.Utils",
    "getRectPtPercent",
    "setParentComponent",
    "Fit",
    "onSliderMove",
    "position",
    "readAsDataURL",
    "rect",
    "innerScroller",
    "createCallback",
    "polarToCartesian",
    "scrollStep",
    "skyBlue",
    "#0000ff",
    "auto",
    "bold\x20",
    "collectSequences",
    "sans-serif",
    "name",
    "#fffaf0",
    "compareFunction",
    "updateScale",
    "degreeToRadian",
    "collectHyperlinks",
    "getScrollX",
    "Button",
    "MindFusion.Drawing.CardinalSpline",
    "{\x20value\x20=\x20new\x20MindFusion.Drawing.Font(name,\x20size);\x20}",
    "#0000cd",
    "radius1",
    "#fafad2",
    "Visible",
    "#00ff7f",
    "getRepaintBounds",
    "body",
    "setScrollY",
    "ZoomScale",
    "scale(",
    "responseType",
    "#f0e68c",
    "fromPoints",
    "content",
    "MindFusion.Drawing.Video",
    "DistanceToSegment",
    "MindFusion.Drawing.Component",
    "actualWidth",
    "round",
    "EventArgs",
    "textAlign",
    "mid",
    "#4b0082",
    "chrome",
    "ScrollLeft",
    "ShadowsStyle",
    "jquery",
    "#708090",
    "hotDecorationPen",
    "var\x20prop2Name\x20=\x20\x27",
    "#ba55d3",
    "getBackgroundImage",
    "mouseDownPoint",
    "clientY",
    "baseline",
    "pointInPolygon",
    "type",
    "toFixed",
    "splinePoints",
    "cachedZOrder",
    "Key\x20type\x20not\x20supported.",
    "Container",
    "tm2",
    "open",
    "bind",
    "fillText",
    "Diagramming",
    "scale",
    "substring",
    "Both",
    "boundingRect",
    "instance",
    "#3cb371",
    "Empty",
    "children",
    "wrapLine",
    "#b0c4de",
    "forEach",
    "#ee82ee",
    "getMinWidth",
    "createElementNS",
    "shape",
    "getScrollbarSize",
    "bezierTo",
    "black",
    "invalidParent",
    "#00bfff",
    "getBoundingClientRect",
    "table",
    "_mf_context",
    "postback",
    "clone",
    "updatePathDefinition",
    "addCubicBezierPoints",
    "anticlockwise",
    "gridStyle",
    "get_element",
    "getStyledLines",
    "parentComponent",
    "#fff8dc",
    "MindFusion.Controls.ZoomControl",
    "createElement",
    "eventHandlerList",
    "height",
    "getTopLevel",
    "video",
    "BottomRight",
    "parser",
    "equals",
    "undefined",
    "Canvas",
    "#8b008b",
    "#ffe4e1",
    "addQuadraticBezierPoints",
    "#228b22",
    "getGridPointSize",
    "getLeftVector",
    "applyFormat",
    "gridColor",
    "tm10",
    "#f0f8ff",
    "lineJoin",
    "getBezierPt",
    "radianToDegree",
    "#7fffd4",
    "toJson",
    "spacing",
    "TopRight",
    "_mf_scale",
    "join",
    "#d3d3d3",
    "clipBeforeTransform",
    "key",
    "onZoomChanged",
    "forEachKey",
    "timer",
    "rectPtFromPercent",
    "createSequence",
    "#9370d8",
    "startAngle",
    "<br\x20/>",
    "scrollWidth",
    "snapToZoomStep",
    "text",
    "shadowOffsetX",
    "transformRect",
    "line",
    "lines",
    "setEnabled",
    "object",
    "Visibility",
    "<color\x20value=",
    "invalidate",
    "#00ffff",
    "convert",
    "#b8860b",
    "detachControl",
    "center",
    "fromCenterAndSize",
    "currentManipulator",
    "fitInBounds",
    "BottomLeft",
    "prepare",
    "drawInteraction",
    "MindFusionControls",
    "Orientation",
    "indexInBucket",
    "minDim",
    "drawShadow",
    "dot",
    "MindFusion.Drawing",
    "italic",
    "shadowsStyle",
    "ignoreTransform",
    "src",
    "clipToBounds",
    "parse",
    "colors",
    "sizeChanged",
    "getCornerPoints",
    "checkIntersect",
    "nwse-resize",
    "loaded",
    "stringFormat",
    "MindFusion.Collections.Set",
    "hitTest",
    "#c0c0c0",
    "ItemEventArgs",
    "lineAlignment",
    "dispose",
    "createTextNode",
    "fitInLine",
    "http://www.w3.org/2000/svg",
    "#ff00ff",
    "GraphicsUnit",
    "borderTopWidth",
    "Content-Type",
    "if\x20(arguments.length\x20==\x203)\x20",
    "search",
    "#fff5ee",
    "enabled",
    "HashTable",
    "transformPoints",
    "radius2",
    "length",
    "#cd853f",
    "initialize",
    "hotBrush",
    "tagName",
    "_element",
    "more",
    "#000000",
    "strokeRect",
    "removeEventListener",
    "svg",
    "radians",
    "#fa8072",
    "transform",
    "splice",
    "tm6",
    "PriorityQueue",
    "bucket",
    "isGetSetter",
    "getViewport",
    "getBackgroundImageAlign",
    "#8b0000",
    "indexOf",
    "blue",
    "betweenOrEqualSorted",
    "minZoomFactor",
    "Shadow",
    "rgba({0},{1},{2},{3})",
    "^#{0,1}?[A-Fa-f0-9]{3,6}$",
    "updateLabelLayout",
    "MindFusion.Dom",
    "split",
    "scriptOffset",
    "#66cdaa",
    "Points",
    "pointEqualEpsilon",
    "Circle",
    "text-anchor",
    "maxY",
    "intersectsWith",
    "MindFusion.Geometry.Circle",
    "#f08080",
    "updateControls",
    "location",
    "move",
    "Inch",
    "rows",
    "scrollHeight",
    "getCursorPos",
    "getIntersectionPoint",
    "maxX",
    "Left",
    "clientX",
    "distToRectSelect",
    "arc",
    "Control",
    "lastPoint",
    "bounds",
    "rotationTransform",
    "ScrollRight",
    "getBrush",
    "coord1",
    "Rect",
    "#2f4f4f",
    "_PostData",
    "drawLines",
    "#ffefd5",
    "equalEpsilon",
    "#7b68ee",
    "none",
    "contains",
    "MindFusion.Controls",
    "getImageRect",
    "gridSizeY",
    "MindFusion.Drawing.Matrix",
    "offset",
    "unbind",
    "svgMatrix",
    "MouseCursors",
    "shapeImpl",
    "this[propName]\x20=\x20value;\x20",
    "translate(",
    "virtualScroll",
    "sort",
    "invalidRect",
    "MindFusion.Collections.HashTable",
    "pageYOffset",
    "#483d8b",
    "licenseLocation",
    "left",
    "#fffacd",
    "#daa520",
    "getHandler",
    "json",
    "Ellipse",
    "buttonSize",
    "font:\x20",
    "actualHeight",
    "escapeNewLine",
    "restore",
    "MindFusion.Dom.Control",
    "MIN_VALUE",
    "setAttribute",
    "fromThreePoints",
    "fromPositionAndSize",
    "formatString",
    "right",
    "unionRects",
    "orientation",
    "MindFusion.Drawing.Gradient",
    "white",
    "arcSegmentToBezier",
    "data",
    "getClientPos",
    "copy",
    "MindFusion.Collections.Dictionary",
    "knownColors",
    "MindFusion.Drawing.Container",
    "_utf8_encode",
    "tail",
    "updateCanvasSize",
    "columns",
    "match",
    "textBaseline",
    "updateContainersZOrder",
    "next",
    "#FFFFFF",
    "containsPoint",
    "rotate",
    "tm11",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    "addColorStop",
    "innerColor",
    "inheritsFrom",
    "nodeValue",
    "#ff7f50",
    "createDelegate",
    "distanceToLineSquared",
    "onMouseUp",
    "Drawing",
    "charAt",
    "beginPath",
    "MindFusion.Collections.PriorityQueue",
    "JavaScriptSerializer",
    "inflate",
    "wrapText",
    "Path",
    "appendChild",
    "showGrid",
    "approximateBezier",
    "SolidBrush",
    "constructor",
    "#ff69b4",
    "this[prop2Name]\x20=\x20true;\x20",
    "progress",
    "_item",
    ",\x200,\x20",
    "proxy",
    "get_item",
    "#ff0000",
    "addRange",
    "toLowerCase",
    "(jsdiagram|jspack)",
    "scrollTop",
    "GET",
    "drawImage",
    "MindFusion.Collections",
    "sup",
    "#ff4500",
    "drawBackground",
    "StandAlone",
    "miter",
    "stroke-width",
    "points",
    "mouseInputDispatcher",
    "addHandlers",
    "#d2691e",
    "getAttribute",
    "get",
    "strokeStyle",
    "__typeName",
    "#40e0d0",
    "bold",
    "MindFusion.Drawing.PathParser",
    "DistanceSq",
    "intersect",
    "GridStyle",
    "backColor",
    "minDistToRect",
    "status",
    "{\x20value\x20=\x20{type:\x27LinearGradientBrush\x27,\x20color1:color1,\x20color2:\x20color2,\x20angle:coord1};}",
    "#a0522d",
    "Border3D",
    "expandToInt",
    "readyState",
    "repaintId",
    "ZoomOut",
    "matrix",
    "postDataField",
    "MiddleRight",
    "tm5",
    "MindFusion.Collections.ItemEventArgs",
    "_utf8_decode",
    "isNumber",
    "drawDashLine",
    "Lines",
    "MindFusion.Geometry",
    "getChildrenByTagName",
    "image",
    "Vertical",
    "value",
    "angle",
    "Font",
    "resize",
    "#ffe4b5",
    "removedFromDiagram",
    "style",
    "getBounds",
    "MindFusion.CancelEventArgs",
    "AbstractionLayer",
    "#ffebcd",
    "null",
    "test",
    "#5f9ea0",
    "#7fff00",
    "rotatePointsAt",
    "minY",
    "tickPosition",
    "brush",
    "replace",
    "#d19275",
    "suppressPaint",
    "toPoint",
    "#6a5acd",
    "#ffa500",
    "desiredHeight",
    "\x27\x20+\x20\x27Assigned\x27;\x20",
    "cachedSequences",
    "Right",
    "paused",
    "getCenter",
    "Component",
    "#32cd32",
    "add",
    "#ffff00",
    "drawGrid",
    "#008080",
    "positionY",
    "Set",
    "pointer",
    "_mf_clipCounter",
    "#f5deb3",
    "createControls",
    "shadowColor",
    "rotationAngle",
    "drawUnderline",
    "distance",
    "{\x20value\x20=\x20{type:\x27RadialGradientBrush\x27,\x20color1:color1,\x20color2:\x20color2,\x20radius1:\x20coord1,\x20radius2:\x20coord2};}",
    "measureUnit",
    "#800080",
    "alpha",
    "backgroundColor",
    "normalize",
    "betweenOrEqual",
    "toString",
    "_mf_transform",
    "#bdb76b",
    "clearHandlers",
    "getApproximatingContext",
    "_mf_defsElement",
    "#f0fff0",
    "#ffa07a",
    "isTransparent",
    "getEvent",
    "#faebd7",
    "log",
    "distanceToSegmentSquared",
    "polylinesIntersect",
    "findControl",
    "width",
    "PathParser",
    "drawMagnifier",
    "POST",
    "offset1",
    "registerDisposableObject",
    "drawStyledText",
    "cartesianToPolar",
    "rgba(77,83,94,1)",
    "objectId",
    "drawForeground",
    "template",
    "WpfPoint",
    "CardinalSpline",
    "addToContext",
    "Near",
    "#00008b",
    "#b22222",
    "gridPointSize",
    "advance",
    "clientHeight",
    "distanceSq",
    "clientWidth",
    "scrollbarSize",
    "#87ceeb",
    "eventHandlers",
    "#87cefa",
    "Utilities",
    "setScrollX",
    "unshift",
    "pen",
    "#6b8e23",
    "MindFusion.Drawing.Vector",
    "_cancel",
    "LayoutAlignment",
    "drawChildren",
    "orange",
    "Assigned",
    "color1",
    "#ff8c00",
    "initializeBase",
    "__company_linkTypes",
    "application/json;\x20charset=utf-8",
    "Queue\x20is\x20empty.",
    "repaintArgs",
    "autoPostBack",
    "abs",
    "init",
    "#8470ff",
    "transformPoint",
    "newRect",
    "JQuery",
    "result",
    "font",
    "dequeue",
    "translate",
    "bottomRight",
    "scroller",
    "Dictionary",
    "addArcPoints",
    "adjusted",
    "MindFusion.Drawing.Point",
    "return\x20this;",
    "format",
    "push",
    "cornerRadius",
    "prototypeClass",
    "innerHTML",
    "set",
    "setClip",
    "close",
    "repaintDelegate",
    "offsetX",
    "userAgent",
    "ownerDocument",
    "Centimeter",
    "#00ced1",
    "#add8e6",
    "getBackgroundImageSize",
    "createSvgElement",
    "target",
    "MindFusion.Drawing.Border3D",
    "setTransform",
    "distToRectPoint",
    "decorationBrush",
    "ScrollDown",
    "TickPosition",
    "MindFusion",
    "hotDecorationBrush",
    "documentElement",
    "Far",
    "forEachValue",
    "padding",
    "getEffectiveShadowColor",
    "getElementById",
    "cachedGridPixelCanvas",
    "MindFusion.Collections.ObservableCollection",
    "builder",
    "MindFusion.Drawing.Canvas",
    "end",
    "fromVertex",
    "if\x20(this.instance\x20!=\x20null)\x20",
    "heap",
    "unescapeHtml",
    "Arc",
    "removeData",
    "Application",
    "ZoomControl",
    "shadowBlur",
    "#da70d6",
    "colorStops",
    "pop",
    "#ffdab9",
    "link",
    "maxDim",
    "MindFusion.Drawing.Shadow",
    "else\x20if\x20(arguments.length\x20==\x204)\x20",
    "#008000",
    "#778899",
    "tm3",
    "italic\x20",
    "hashString",
    "Dom",
    "endAngle",
    "bezierCurveTo",
    "angleBetween",
    "head",
    "LinearGradientBrush",
    "getZOrder",
    "RadialGradientBrush",
    "filter",
    "unitsPerInch",
    "fromCharCode",
    "label",
    "Thickness",
    "fromValues",
    "MindFusion.Drawing.Ellipse",
    "substr",
    "function",
    "coord2",
    "setRect",
    "req",
    "_mf_measureUnit",
    "count",
    "Controls",
    "ceil",
    "onButtonClick",
    "#deb887",
    "Value",
    "cachedGridPixelColor",
    "addToFormat",
    "targetId",
    "keys",
    "mediaLocation",
    "minX",
    "addRect",
    "createControl",
    "#7cfc00",
    "rotateRect",
    "#808080",
    "Tile",
    "#008b8b",
    "gray",
    "div",
    "currentController",
    "call",
    "isAssignment",
    "atan2",
    "darkGray",
    "MindFusionImpl",
    "clip-path",
    "MindFusion.Drawing.Line",
    "createShadow",
    "var\x20propName\x20=\x20\x27",
    "Line",
    "insert",
    "showLabel",
    "ended",
    "strokeDashStyle",
    "MindFusion.Diagramming",
    "Size",
    "roundRect",
    "ZoomSlider",
    "#000080",
    "quadraticCurveTo",
    "applyTo",
    "add_itemAdded",
    "divideScalar",
    "done",
    "middle",
    "getEffectiveBackBrush",
    "inherit",
    "#6495ed",
    "rotate(",
    "parseStyledText",
    "color",
    "positionX",
    "_mf_itemRef",
    "floor",
    "None",
    "scrollLeft",
    "fromLTRB",
    "remaining",
    "manipulators",
    "decorationSize",
    "union",
    "isInstanceOfType",
    "TopLeft",
    "radius",
    "\x27\x20+\x20\x27Value\x27;\x20",
    "measureText",
    "#9400d3",
    "MindFusion.Drawing.DistanceToSegment",
    "fromJson",
    "stringToRgb",
    "root",
    "degrees",
    "clipToOutline",
    "commands",
    "MindFusion.Drawing.Size",
    "findComponent",
    "zoomChanged",
    "crosshair",
    "play",
    "ScrollUp",
    "addEventListener",
    "#8a2be2",
    "fixUp",
    "getPageScroll",
    "url(#",
    "var\x20funcName\x20=\x20\x27set\x27\x20+\x20\x27",
    "Stretch",
    "unload",
    "topLeft",
    "#fff0f5",
    "size",
    "callBaseMethod",
    "rgba(91,91,91,1)",
    "enableStyledText",
    "serialize",
    "remove",
    "Display",
    "Text",
    "canvas",
    "MindFusion.Drawing.Thickness",
    "cos",
    "all-scroll",
    "css",
    "removeHandler",
    "Gradient",
    "responseText",
    "empty",
    "shadowOffsetY",
    "atan",
    "top",
    "stringify",
    "_mf_originalHeight",
    "#e9967a",
    "parent",
    "parentNode",
    "getSegmentIntersection",
    "Matrix",
    "charCodeAt",
    "shadow",
    "apply",
    "BottomCenter",
    "__baseType",
    "remove_itemAdded",
    "not-allowed",
    "visibility",
    "fillStyle",
    "Builder",
    "multiplyScalar",
    "arcTo",
    "number",
    "gridSizeX",
    "decoration",
    "symmetricPoint",
    "lineTo",
    "borderColor",
    "#cd5c5c",
    "#f0ffff",
    "MindFusion.Controls.Button",
    "#8b4513",
    "itemAdded",
    "onplaying",
    "borderLeftWidth",
    "max",
    "pow",
    "expandRect",
    "parseColor",
    "Crosses",
    "Utils",
    "textColor",
    "lineHeight",
    "polylineIntersectsRect",
    "controls",
    "_keyStr",
    "min",
    "default",
    "stroke",
    "slice",
    "#191970",
    "ccw",
    "fillRect",
    "toUpperCase",
    "find",
    "underline",
    "color2",
    "Serialization",
    "requestAnimationFrame",
    "cartesianToPolarDegrees",
    "escapeHtml",
    "ZoomIn",
    "response",
    "generate",
    "raiseEvent",
    "getFitTextStep",
    "http://www.w3.org/1999/xhtml",
    "MindFusion.Collections.Queue",
    "getType",
    "toDataUrl",
    "zIndex",
    "gridOffsetX",
    "getLines",
    "isFloat",
    "ImageAlign",
    "minVisibleFontSize",
    "addVector",
    "MindFusion.Drawing.Text",
    "getScrollY",
    "DashStyle",
    "Alignment",
    "hashCode",
    "isPlaying",
    "rotatePoint",
    "Bezier",
    "hotPen",
    "registerClass",
    "Center",
    "TopCenter",
    "strokeText",
    "red",
    "prototype",
    "#ffd700",
    "showLaneGrid",
    "closePath",
    "ensureStart",
    "help",
    "#ff6347",
    "fixDown",
    "elements",
    "normalizeRect",
    "mouseUpDelegate",
    "#fffafa",
    "#2e8b57",
    "addRoundRect",
    "item",
    "$break",
    "#800000",
    "text/\x20plain",
    "setAttributeNS",
    "#20b2aa",
    "\x27;\x20",
    "sqrt",
    "#1e90ff",
    "_mf_links",
    "send",
    "Video",
    "currentTime",
    "overrideMimeType",
    "ObservableCollection",
    "sign",
    "#98fb98",
    "zoomStep",
    "maxZoomFactor",
    "OneLevel",
    "drawCallback",
    "transparent",
    "measureString",
    "Collections",
    "clearRect",
    "lineWidth",
    "ArrayList",
    "imageAlign",
    "MindFusion.Builder",
    "#fdf5e6",
    "getEllipseIntr",
    "#d02090",
    "swap",
    "clear",
    "Millimeter",
  ];
  (function (c, d) {
    var e = function (f) {
      while (--f) {
        c["push"](c["shift"]());
      }
    };
    e(++d);
  })(a, 0x170);
  var b = function (c, d) {
    c = c - 0x0;
    var e = a[c];
    return e;
  };
  var MsAjaxImpl = {
    registerNamespace: function (c) {
      Type[b("0x26b")](c);
    },
    registerClass: function (e, f, g, h) {
      if (g == "Control") g = Sys["UI"][b("0x3d4")];
      if (Sys[b("0x107")] && Sys[b("0x107")][f]) Sys[b("0x107")][f] = ![];
      else if (window["__company_linkTypes"] && window[b("0x107")][f])
        window[b("0x107")][f] = ![];
      var i = [f];
      if (g !== undefined) {
        i["push"](g);
        if (h) {
          if (typeof h == "string") {
            try {
              h = eval(h);
              i[b("0x11e")](h);
            } catch (j) {}
          } else i[b("0x11e")](h);
        }
      }
      Type[b("0x235")][b("0x230")][b("0x1e6")](e, i);
    },
    registerDisposableObject: function (k) {
      Sys[b("0x148")][b("0xe3")](k);
    },
    initializeBase: function (l, m, n) {
      l["initializeBase"](m, n);
    },
    callBaseMethod: function (o, q, s, t) {
      return o[b("0x1ca")](q, s, t);
    },
    isInstanceOfType: function (u, v) {
      return u["isInstanceOfType"](v);
    },
    parseType: function (w) {
      return Type[b("0x381")](w);
    },
    inheritsFrom: function (z, A) {
      return z[b("0x4c")](A);
    },
    createControl: function (B, C, D, E, F) {
      return Sys["Component"][b("0x295")](B, C, D, E, F);
    },
    attachControl: function (G, H) {
      return G;
    },
    detachControl: function (I) {
      this[b("0xd2")](I["get_element"]());
    },
    findControl: function (J, K) {
      return Sys["Application"][b("0x1ba")](J, K);
    },
    addHandler: function (L, M, N) {
      L["eventHandlers"][b("0x299")](M, N);
    },
    getHandler: function (O, P) {
      return O[b("0xf7")][b("0x23")](P);
    },
    removeHandler: function (Q, R, S) {
      if (!Q) return;
      if (Q[b("0xf7")]) Q[b("0xf7")][b("0x1d6")](R, S);
      else if (Q["_events"]) $removeHandler(Q, R, S);
    },
    eventHandlerList: function () {
      return new Sys[b("0x2c8")]();
    },
    addHandlers: function (T, U, V, W) {
      $addHandlers(T, U);
    },
    clearHandlers: function (X) {
      $clearHandlers(X);
    },
    createDelegate: function (Y, Z) {
      return Function[b("0x4f")](Y, Z);
    },
    createCallback: function (a0, a1) {
      return Function[b("0x2d2")](a0, a1);
    },
    getBounds: function (a2) {
      var a3 = Sys["UI"]["DomElement"][b("0xa0")](a2);
      return new MindFusion[b("0x52")][b("0x5")](
        a3["x"],
        a3["y"],
        a3[b("0xde")],
        a3[b("0x338")]
      );
    },
    fromJson: function (a4) {
      return Sys[b("0x213")][b("0x56")]["deserialize"](a4);
    },
    toJson: function (a5) {
      return Sys[b("0x213")]["JavaScriptSerializer"][b("0x1cd")](a5);
    },
    ajaxRequest: function (a6, a7, a8, a9) {
      var aa = new XMLHttpRequest();
      var ab = a6;
      aa[b("0x26a")] = function () {
        if (aa["readyState"] == 0x4 && aa[b("0x84")] == 0xc8) {
          var ac = mflayer["fromJson"](
            mflayer[b("0x1b3")](aa[b("0x1d8")])["d"]
          );
          a9[b("0x1e6")](a6, [ac]);
        }
      };
      aa[b("0x310")](b("0xe1"), a7);
      aa[b("0x2c4")](b("0x395"), "application/json;\x20charset=utf-8");
      aa[b("0x24d")](a8);
    },
  };
  var JQueryImpl = {
    registerNamespace: function (ad) {
      var ae = window;
      var af = ad["split"](".");
      for (var ag = 0x0; ag < af["length"]; ag++) {
        var ah = af[ag];
        var ai = ae[ah];
        if (!ai) {
          ai = ae[ah] = {};
        }
        ae = ai;
      }
    },
    registerClass: function (aj, ak, al, am) {
      if (al == "Control") al = MindFusion["Dom"]["Control"];
      aj[b("0x235")]["constructor"] = aj;
      aj["__typeName"] = ak;
      if (al) {
        aj[b("0x1e8")] = al;
        for (var an in al[b("0x235")]) {
          var ao = al[b("0x235")][an];
          if (!aj[b("0x235")][an]) {
            aj[b("0x235")][an] = ao;
          }
        }
      }
    },
    registerDisposableObject: function (ap) {
      $(window)["on"](b("0x1c6"), function () {
        ap[b("0x38e")]();
      });
    },
    initializeBase: function (aq, ar, as) {
      var at = aq[b("0x1e8")];
      if (at) {
        if (!as) {
          at[b("0x1e6")](ar);
        } else {
          at["apply"](ar, as);
        }
      }
    },
    callBaseMethod: function (au, av, aw, ax) {
      var ay = au[b("0x1e8")];
      if (ay) {
        var az = ay["prototype"][aw];
        if (az) {
          if (!ax) {
            return az[b("0x1e6")](av);
          } else {
            return az[b("0x1e6")](av, ax);
          }
        }
      }
    },
    isInstanceOfType: function (aA, aB) {
      if (!aB) return ![];
      if (aB instanceof aA) return !![];
      var aC = aB[b("0x5e")][b("0x1e8")];
      while (aC) {
        if (aC === aA) {
          return !![];
        }
        aC = aC[b("0x1e8")];
      }
      return ![];
    },
    parseType: function (aD) {
      if (!aD) return null;
      var aE = eval(aD);
      if (typeof aE == "function") return aE;
    },
    inheritsFrom: function (aF, aG) {
      var aH = aF[b("0x1e8")];
      while (aH) {
        if (aH === aG) {
          return !![];
        }
        aH = aH[b("0x1e8")];
      }
      return ![];
    },
    createControl: function (aI, aJ, aK, aL, aM) {
      var aN = new aI(aM, aJ);
      aN[b("0x3a2")] = aM;
      this[b("0xe3")](aN);
      $(aM)[b("0x37")](b("0x135"), aN);
      aN[b("0x39f")]();
      return aN;
    },
    attachControl: function (aO, aP) {
      aO[b("0x3a2")] = aP;
      $(aP)[b("0x37")](b("0x135"), aO);
      aO[b("0x39f")]();
      return aO;
    },
    detachControl: function (aQ) {
      this["clearHandlers"](aQ["get_element"]());
      $(aQ["get_element"]())[b("0x147")](b("0x135"));
    },
    findControl: function (aR, aS) {
      var aT;
      if (aS) aT = $(aS)[b("0x31b")]("#" + aR);
      else aT = $("#" + aR);
      if (aT) return aT[b("0x37")](b("0x135"));
      return null;
    },
    getEvent: function (aU, aV, aW) {
      if (aU[b("0xf7")][aV] == undefined) {
        if (!aW) return null;
        aU[b("0xf7")][aV] = [];
      }
      return aU[b("0xf7")][aV];
    },
    addHandler: function (aX, aY, aZ) {
      if (!aX[b("0xf7")]) aX[b("0xf7")] = this[b("0x337")]();
      var b0 = this[b("0xd8")](aX, aY, !![]);
      b0["push"](aZ);
    },
    getHandler: function (b1, b2) {
      var b3 = this[b("0xd8")](b1, b2);
      if (!b3 || b3[b("0x39d")] === 0x0) return null;
      return function (b4, b5) {
        var b6 = b3[b("0x39d")];
        while (b6--) {
          b3[b6](b4, b5);
        }
      };
    },
    removeHandler: function (b7, b8, b9) {
      if (!b7) return;
      if (b7[b("0xf7")]) {
        var ba = this["getEvent"](b7, b8);
        if (!ba) return;
        var bb = ba["indexOf"](b9);
        if (bb > -0x1) {
          ba[b("0x3ab")](bb, 0x1);
        }
      } else $(b7)[b("0x13")](b8, b9);
    },
    eventHandlerList: function () {
      return new MindFusion[b("0x25a")]["Dictionary"]();
    },
    addHandlers: function (bc, bd, be, bf) {
      for (var bg in bd) {
        $(bc)[b("0x311")](bg, bd[bg]);
      }
    },
    clearHandlers: function (bh) {
      $(bh)["unbind"]();
    },
    createDelegate: function (bi, bj) {
      return $[b("0x64")](bj, bi);
    },
    createCallback: function (bk, bl) {
      return function () {
        var bm = arguments["length"];
        if (bm > 0x0) {
          var bn = [];
          for (var bo = 0x0; bo < bm; bo++) {
            bn[bo] = arguments[bo];
          }
          bn[bm] = bl;
          return $["proxy"](bk[b("0x1e6")](this, bn), bl);
        }
        return $[b("0x64")](bk, bl);
      };
    },
    getBounds: function (bp) {
      var bq = $(bp)[b("0x12")]();
      var br = $["fn"][b("0x2ff")];
      var bs = br[b("0x3bc")](".");
      if (bs[0x0] == 0x1 && bs[0x1] < 0x9) {
        var bt =
          parseFloat($[b("0x1d5")](document[b("0x2eb")], b("0x394"))) || 0x0;
        var bu = parseFloat($["css"](document[b("0x2eb")], b("0x1fc"))) || 0x0;
        bq["top"] += bt;
        bq[b("0x20")] += bu;
      }
      return new MindFusion[b("0x52")][b("0x5")](
        bq[b("0x20")],
        bq[b("0x1dc")],
        $(bp)[b("0xde")](),
        $(bp)[b("0x338")]()
      );
    },
    fromJson: function (bv) {
      if (JSON) {
        return JSON["parse"](bv);
      } else throw new Error(b("0x2a8"));
    },
    toJson: function (bw) {
      if (JSON) {
        return JSON[b("0x1dd")](bw);
      } else throw new Error("JSON\x20is\x20undefined.");
    },
    ajaxRequest: function (bx, by, bz, bA) {
      $["ajax"]({
        type: b("0xe1"),
        url: by,
        data: bz,
        contentType: "application/json;\x20charset=utf-8",
        dataType: b("0x24"),
        context: bx,
        success: function (bB) {
          var bC = mflayer["fromJson"](bB["d"]);
          bA[b("0x1e6")](this, [bC]);
        },
        error: function () {
          alert("Ajax\x20error");
        },
      });
    },
  };
  var StandAloneImpl = {
    registerNamespace: function (bD) {
      var bE = window;
      var bF = bD[b("0x3bc")](".");
      for (var bG = 0x0; bG < bF["length"]; bG++) {
        var bH = bF[bG];
        var bI = bE[bH];
        if (!bI) {
          bI = bE[bH] = {};
        }
        bE = bI;
      }
    },
    registerClass: function (bJ, bK, bL, bM) {
      if (bL == b("0x3d4")) bL = MindFusion[b("0x158")][b("0x3d4")];
      bJ["prototype"][b("0x5e")] = bJ;
      bJ[b("0x7b")] = bK;
      if (bL) {
        bJ[b("0x1e8")] = bL;
        for (var bN in bL[b("0x235")]) {
          var bO = bL[b("0x235")][bN];
          if (!bJ[b("0x235")][bN]) {
            bJ["prototype"][bN] = bO;
          }
        }
      }
    },
    registerDisposableObject: function (bP) {
      window[b("0x1bf")](b("0x1c6"), function () {
        bP[b("0x38e")]();
      });
    },
    initializeBase: function (bQ, bR, bS) {
      var bT = bQ[b("0x1e8")];
      if (bT) {
        if (!bS) {
          bT[b("0x1e6")](bR);
        } else {
          bT[b("0x1e6")](bR, bS);
        }
      }
    },
    callBaseMethod: function (bU, bV, bW, bX) {
      var bY = bU[b("0x1e8")];
      if (bY) {
        var bZ = bY["prototype"][bW];
        if (bZ) {
          if (!bX) {
            return bZ[b("0x1e6")](bV);
          } else {
            return bZ[b("0x1e6")](bV, bX);
          }
        }
      }
    },
    isInstanceOfType: function (c0, c1) {
      if (!c1) return ![];
      if (c1 instanceof c0) return !![];
      var c2 = c1[b("0x5e")][b("0x1e8")];
      while (c2) {
        if (c2 === c0) {
          return !![];
        }
        c2 = c2[b("0x1e8")];
      }
      return ![];
    },
    parseType: function (c3) {
      if (!c3) return null;
      var c4 = eval(c3);
      if (typeof c4 == b("0x168")) return c4;
    },
    inheritsFrom: function (c5, c6) {
      var c7 = c5[b("0x1e8")];
      while (c7) {
        if (c7 === c6) {
          return !![];
        }
        c7 = c7[b("0x1e8")];
      }
      return ![];
    },
    createControl: function (c8, c9, ca, cb, cc) {
      if (!this[b("0x375")])
        this[b("0x375")] = new MindFusion[b("0x25a")][b("0x118")]();
      var cd = new c8(cc, c9);
      cd[b("0x3a2")] = cc;
      this["registerDisposableObject"](cd);
      this[b("0x375")][b("0x122")](cc["id"], cd);
      cd["initialize"]();
      return cd;
    },
    attachControl: function (ce, cf) {
      if (!this["MindFusionControls"])
        this[b("0x375")] = new MindFusion["Collections"][b("0x118")]();
      ce[b("0x3a2")] = cf;
      this[b("0x375")]["set"](cf["id"], ce);
      ce[b("0x39f")]();
      return ce;
    },
    detachControl: function (cg) {
      this[b("0xd2")](cg[b("0x331")]());
      this[b("0x375")][b("0x1ce")](cg["get_element"]()["id"]);
    },
    findControl: function (ch, ci) {
      var cj = document[b("0x13c")](ch);
      if (cj) {
        try {
          var ck = this["MindFusionControls"]["get"](cj["id"]);
          return ck;
        } catch (cl) {
          return null;
        }
      }
      return null;
    },
    getEvent: function (cm, cn, co) {
      if (!cm[b("0xf7")][b("0xd")](cn)) {
        if (!co) return null;
        cm[b("0xf7")][b("0x122")](cn, []);
      }
      return cm[b("0xf7")][b("0x79")](cn);
    },
    addHandler: function (cp, cq, cr) {
      if (!cp[b("0xf7")]) cp["eventHandlers"] = this[b("0x337")]();
      var cs = this[b("0xd8")](cp, cq, !![]);
      cs[b("0x11e")](cr);
    },
    getHandler: function (ct, cu) {
      var cv = this[b("0xd8")](ct, cu);
      if (!cv || cv[b("0x39d")] === 0x0) return null;
      return function (cw, cx) {
        var cy = cv[b("0x39d")];
        while (cy--) {
          cv[cy](cw, cx);
        }
      };
    },
    removeHandler: function (cz, cA, cB) {
      if (!cz) return;
      if (cz[b("0xf7")]) {
        var cC = this[b("0xd8")](cz, cA);
        if (!cC) return;
        var cD = cC["indexOf"](cB);
        if (cD > -0x1) {
          cC[b("0x3ab")](cD, 0x1);
        }
      }
      if (cz instanceof Element || cz instanceof HTMLDocument)
        cz[b("0x3a6")](cA, cB);
    },
    eventHandlerList: function () {
      return new MindFusion[b("0x25a")][b("0x118")]();
    },
    addHandlers: function (cE, cF) {
      if (!cE) return;
      for (var cG in cF) {
        mflayer["addHandler"](cE, cG, cF[cG]);
        cE[b("0x1bf")](cG, cF[cG]);
      }
    },
    clearHandlers: function (cH) {
      if (!cH) return;
      if (cH[b("0xf7")]) {
        cH[b("0xf7")]["forEachKey"](function (cI) {
          var cJ = cH["eventHandlers"][b("0x79")](cI);
          var cK = cJ[b("0x39d")];
          while (cK--) {
            mflayer[b("0x1d6")](cH, cI, cJ[cK]);
          }
        }, this);
      }
    },
    createDelegate: function (cL, cM) {
      var cN = function () {
        return cM[b("0x1e6")](cL, arguments);
      };
      return cN;
    },
    createCallback: function (cO, cP) {
      var cQ = this;
      return function () {
        var cR = arguments["length"];
        if (cR > 0x0) {
          var cS = [];
          for (var cT = 0x0; cT < cR; cT++) {
            cS[cT] = arguments[cT];
          }
          cS[cR] = cP;
          return cQ[b("0x4f")](cP, cO[b("0x1e6")](this, cS));
        }
        return cQ[b("0x4f")](cP, cO);
      };
    },
    getBounds: function (cU) {
      var cV = cU[b("0x328")]();
      var cW = cU["ownerDocument"][b("0x137")];
      var cX = cU[b("0x128")]["body"];
      var cY =
        Math[b("0x2f7")](cV[b("0x20")]) + (cW[b("0x1a6")] || cX[b("0x1a6")]);
      var cZ =
        Math[b("0x2f7")](cV[b("0x1dc")]) + (cW["scrollTop"] || cX[b("0x6a")]);
      return new MindFusion[b("0x52")][b("0x5")](
        cY,
        cZ,
        cV[b("0xde")],
        cV["height"]
      );
    },
    fromJson: function (d0) {
      if (JSON) {
        return JSON[b("0x381")](d0);
      } else throw new Error(b("0x2a8"));
    },
    toJson: function (d1) {
      if (JSON) {
        return JSON[b("0x1dd")](d1);
      } else throw new Error(b("0x2a8"));
    },
    ajaxRequest: function (d2, d3, d4, d5) {
      var d6 = new XMLHttpRequest();
      var d7 = d2;
      d6["onreadystatechange"] = function () {
        if (d6[b("0x89")] == 0x4 && d6["status"] == 0xc8) {
          var d8 = mflayer[b("0x1b3")](
            mflayer[b("0x1b3")](d6[b("0x1d8")])["d"]
          );
          d5[b("0x1e6")](d2, [d8]);
        }
      };
      d6[b("0x310")]("POST", d3);
      d6[b("0x2c4")](b("0x395"), b("0x108"));
      d6[b("0x24d")](d4);
    },
  };
  if (typeof $break == "undefined") window[b("0x244")] = {};
  if (typeof MindFusionImpl == "undefined") window[b("0x187")] = b("0x71");
  var checkImplementation = function (d9) {
    for (var da in MsAjaxImpl) {
      if (MsAjaxImpl[da] instanceof Function) {
        if (d9[da] == undefined || !(d9[da] instanceof Function)) {
          throw new Error(
            "Abstract\x20layer\x20implementation\x20does\x20not\x20implement\x20interface\x20member\x20" +
              da
          );
        }
      }
    }
    return !![];
  };
  if (MindFusionImpl == b("0x27e")) window[b("0x270")] = MsAjaxImpl;
  else if (MindFusionImpl == b("0x111")) window[b("0x270")] = JQueryImpl;
  else if (MindFusionImpl == b("0x71")) window["mflayer"] = StandAloneImpl;
  else if (MindFusionImpl instanceof Object) {
    if (checkImplementation(MindFusionImpl))
      window[b("0x270")] = MindFusionImpl;
  } else if (typeof MindFusionImpl == b("0x280")) {
    var impl = eval(MindFusionImpl);
    if (checkImplementation(impl)) window[b("0x270")] = impl;
  }
  mflayer["registerNamespace"]("MindFusion");
  MindFusion["AbstractionLayer"] = mflayer;
  MindFusion["registerNamespace"] = function (db) {
    MindFusion[b("0xa2")][b("0x26b")](db);
  };
  MindFusion[b("0x230")] = function (dc, dd, de, df) {
    MindFusion[b("0xa2")][b("0x230")](dc, dd, de, df);
  };
  MindFusion["find"] = function (dg) {
    return MindFusion[b("0xa2")][b("0xdd")](dg);
  };
  MindFusion[b("0x26b")](b("0x3bb"));
  (function (dh) {
    var di = (dh["Control"] = function (dj) {
      this[b("0x3a2")] = dj;
    });
    di[b("0x235")] = {
      dispose: function () {
        mflayer[b("0x36d")](this);
      },
      get_element: function () {
        return this[b("0x3a2")];
      },
    };
    MindFusion[b("0x230")](di, b("0x2b"));
  })(MindFusion["Dom"]);
  if (!MindFusion[b("0x2f8")] || !MindFusion[b("0x2f8")]["__typeName"]) {
    MindFusion[b("0x2f8")] = function () {
      mflayer[b("0x106")](MindFusion[b("0x2f8")], this);
    };
    MindFusion[b("0x2f8")][b("0x235")] = {};
    MindFusion[b("0x230")](MindFusion[b("0x2f8")], "MindFusion.EventArgs");
    MindFusion[b("0x2f8")][b("0x31a")] = new MindFusion["EventArgs"]();
  }
  if (!MindFusion[b("0x291")] || !MindFusion[b("0x291")][b("0x7b")]) {
    MindFusion[b("0x291")] = function () {
      mflayer["initializeBase"](MindFusion["CancelEventArgs"], this);
    };
    MindFusion[b("0x291")][b("0x235")] = {
      get_cancel: function () {
        return this[b("0xff")];
      },
      set_cancel: function (dk) {
        this["_cancel"] = dk;
      },
    };
    MindFusion["registerClass"](
      MindFusion[b("0x291")],
      b("0xa1"),
      MindFusion["EventArgs"]
    );
  }
  if (!MindFusion["Builder"] || !MindFusion[b("0x1ed")][b("0x7b")]) {
    MindFusion["Builder"] = function (dl, dm, dn) {
      mflayer[b("0x106")](MindFusion["Builder"], this);
      this[b("0x120")] = dl;
      this[b("0x2b7")] = dm;
      this["instance"] = dn;
      this[b("0x219")]();
    };
    MindFusion["Builder"][b("0x235")] = {
      generate: function () {
        var dp = Object[b("0x176")](this[b("0x120")]);
        dp = dp["filter"](function (dv) {
          return MindFusion[b("0x1ed")][b("0x3af")](dp, dv);
        });
        var dq = {};
        for (var dr in dp) {
          var ds = dp[dr][b("0x3bc")]("get")[0x1];
          var dt = ds[b("0x53")](0x0)[b("0x68")]() + ds[b("0x20b")](0x1);
          var du =
            b("0x18b") +
            dt +
            b("0x1af") +
            "var\x20prop2Name\x20=\x20\x27" +
            dt +
            b("0xb3") +
            "var\x20funcName\x20=\x20\x27set\x27\x20+\x20\x27" +
            ds +
            b("0x249") +
            b("0x17") +
            b("0x60") +
            b("0x143") +
            b("0x2a5") +
            b("0x11c");
          this[dt] = new Function(b("0x99"), du);
          if (dt == b("0x113")) {
            du =
              b("0x18b") +
              dt +
              b("0x1af") +
              b("0x302") +
              dt +
              b("0xb3") +
              b("0x1c4") +
              ds +
              b("0x249") +
              "if\x20(arguments.length\x20==\x202)\x20" +
              b("0x2e4") +
              "else\x20value\x20=\x20arguments[0];\x20" +
              b("0x17") +
              b("0x60") +
              b("0x143") +
              "\x09this.instance[funcName](value);\x20" +
              b("0x11c");
            this[dt] = new Function(b("0x2db"), b("0x1c9"), du);
          }
          if (dt == "brush") {
            du =
              b("0x18b") +
              dt +
              b("0x1af") +
              b("0x302") +
              dt +
              "\x27\x20+\x20\x27Assigned\x27;\x20" +
              b("0x1c4") +
              ds +
              "\x27;\x20" +
              b("0x396") +
              b("0x85") +
              b("0x152") +
              b("0xc8") +
              "else\x20value\x20=\x20arguments[0];\x20" +
              b("0x17") +
              "this[prop2Name]\x20=\x20true;\x20" +
              b("0x143") +
              b("0x2a5") +
              b("0x11c");
            this[dt] = new Function(
              "color1",
              b("0x212"),
              b("0x4"),
              b("0x169"),
              du
            );
          }
        }
      },
      create: function () {
        var dw = this[b("0x120")][b("0x21e")]();
        var dz = mflayer["parseType"](dw);
        if (!dz) return null;
        var dA = new dz(this["diagram"]);
        var dB = Object[b("0x176")](this);
        dB = dB[b("0x160")](function (dG) {
          return MindFusion[b("0x1ed")][b("0x184")](dB, dG);
        });
        for (var dC in dB) {
          var dD = dB[dC][b("0x3bc")](b("0x103"))[0x0];
          var dE = this[dD + b("0x172")];
          var dF =
            b("0x122") + dD["charAt"](0x0)[b("0x20f")]() + dD[b("0x20b")](0x1);
          if (dA[dF]) dA[dF](dE);
        }
        return dA;
      },
      setInstance: function (dH) {
        this[b("0x318")] = dH;
        var dI = Object[b("0x176")](this);
        dI = dI[b("0x160")](function (dL) {
          return MindFusion["Builder"][b("0x184")](dI, dL);
        });
        for (var dJ in dI) {
          var dK = dI[dJ][b("0x3bc")](b("0x103"))[0x0];
          delete this[dI[dJ]];
          delete this[dK + b("0x172")];
        }
      },
    };
    MindFusion["Builder"][b("0x3af")] = function (dM, dN) {
      if (dN[b("0x3b3")]("get") !== 0x0) return ![];
      var dO = dN[b("0x3bc")](b("0x79"))[0x1];
      var dP = b("0x122") + dO;
      return dM[b("0x3b3")](dP) > -0x1;
    };
    MindFusion[b("0x1ed")][b("0x184")] = function (dQ, dR) {
      if (dR[b("0x3b3")]("Assigned") == -0x1) return ![];
      var dS = dR[b("0x3bc")]("Assigned")[0x0];
      var dT = dS + b("0x172");
      return dQ["indexOf"](dT) > -0x1;
    };
    MindFusion[b("0x230")](MindFusion[b("0x1ed")], b("0x25f"));
  }
  MindFusion[b("0x26b")](b("0x6d"));
  (function (dU) {
    var dV = (dU[b("0x25d")] = function () {
      var dW = new Array();
      var dX = dU["Utilities"];
      dW[b("0x3b3")] = dX["indexOf"];
      dW[b("0x1ce")] = dX["remove"];
      dW["contains"] = dX[b("0xd")];
      dW["any"] = dX["any"];
      dW["all"] = dX[b("0x2b0")];
      dW[b("0x31e")] = dX[b("0x31e")];
      dW["forReverse"] = dX["forReverse"];
      return dW;
    });
    dV[b("0x3b3")] = function (dY, dZ) {
      return dY[b("0x3b3")](dZ);
    };
    dV["add"] = function (e0, e1) {
      e0["push"](e1);
    };
    dV[b("0x18d")] = function (e2, e3, e4) {
      e2["splice"](e3, 0x0, e4);
    };
    dV[b("0x1ce")] = function (e5, e6) {
      var e7 = e5["indexOf"](e6);
      if (e7 > -0x1) {
        e5[b("0x3ab")](e7, 0x1);
        return !![];
      }
      return ![];
    };
    dV["removeAt"] = function (e8, e9) {
      if (e9 > -0x1) {
        e8["splice"](e9, 0x1);
        return !![];
      }
      return ![];
    };
    dV[b("0xd")] = function (ea, eb) {
      return ea[b("0x3b3")](eb) > -0x1;
    };
    dV["forEach"] = function (ec, ed, ee) {
      for (var ef = 0x0, eg = ec[b("0x39d")]; ef < eg; ef++) {
        var eh = ec[ef];
        if (typeof eh !== b("0x33e")) ed[b("0x183")](ee, eh, ef, ec);
      }
    };
    dV["clone"] = function (ei) {
      return ei[b("0x20b")](0x0);
    };
    dV[b("0x67")] = function (ej, ek) {
      for (var el = 0x0, em = ek[b("0x39d")]; el < em; el++) {
        ej[b("0x11e")](ek[el]);
      }
    };
  })(MindFusion[b("0x25a")]);
  (function (en) {
    var eo = (en["Dictionary"] = function () {
      this[b("0x329")] = new en[b("0x39a")]();
    });
    eo[b("0x235")][b("0x122")] = function (ep, eq) {
      var er = this["table"][b("0x79")](ep);
      if (er == null) er = this[b("0x329")][b("0xba")](ep);
      er[b("0x99")] = eq;
    };
    eo[b("0x235")][b("0x79")] = function (es) {
      var et = this["table"][b("0x79")](es);
      if (et != null) return et[b("0x99")];
      throw new Error(b("0x273") + es);
    };
    eo["prototype"][b("0xd")] = function (eu) {
      return this["table"][b("0xd")](eu);
    };
    eo["prototype"][b("0x1ce")] = function (ev) {
      return this["table"]["remove"](ev);
    };
    eo[b("0x235")][b("0x292")] = function () {
      return this["table"][b("0x16d")];
    };
    eo["prototype"][b("0x31e")] = function (ew, ex) {
      this[b("0x329")][b("0x31e")](function (ey) {
        ew["call"](ex, ey[b("0x355")], ey[b("0x99")]);
      });
    };
    eo["prototype"][b("0x139")] = function (ez, eA) {
      this["table"][b("0x31e")](function (eB) {
        ez["call"](eA, eB[b("0x99")]);
      });
    };
    eo[b("0x235")][b("0x357")] = function (eC, eD) {
      this[b("0x329")][b("0x31e")](function (eE) {
        eC["call"](eD, eE[b("0x355")]);
      });
    };
    eo[b("0x235")][b("0x176")] = function () {
      var eF = new Array();
      this[b("0x357")](function (eG) {
        eF["push"](eG);
      });
      return eF;
    };
    MindFusion["registerClass"](eo, b("0x3a"));
  })(MindFusion[b("0x25a")]);
  (function (eH) {
    var eI = (eH["Grid"] = function (eJ, eK) {
      this[b("0x264")]();
      if (eJ > 0x0 && eK > 0x0) this[b("0x9c")](eJ, eK);
    });
    eI[b("0x235")] = {
      clone: function () {
        var eL = new eI(this[b("0x40")], this[b("0x3cb")]);
        for (var eM = 0x0; eM < this["columns"]; eM++) {
          for (var eN = 0x0; eN < this[b("0x3cb")]; eN++) {
            var eO = this[b("0x79")](eM, eN);
            if (eO) {
              if (eO[b("0x32c")]) eL[b("0x122")](eM, eN, eO["clone"]());
              else eL[b("0x122")](eM, eN, eO);
            }
          }
        }
        return eL;
      },
      get: function (eP, eQ) {
        return this["data"][eP][eQ];
      },
      set: function (eR, eS, eT) {
        this[b("0x37")][eR][eS] = eT;
      },
      clear: function () {
        this["data"] = [];
        this[b("0x40")] = 0x0;
        this[b("0x3cb")] = 0x0;
      },
      resize: function (eU, eV) {
        this[b("0x40")] = eU;
        this["rows"] = eV;
        this[b("0x37")]["length"] = eU;
        for (var eW = 0x0; eW < eU; eW++) {
          if (!this[b("0x37")][eW]) this["data"][eW] = [];
          this[b("0x37")][eW]["length"] = eV;
        }
      },
      deleteColumn: function (eX) {
        this["data"][b("0x3ab")](eX, 0x1);
        this["columns"]--;
      },
      insertColumn: function (eY) {
        this[b("0x37")][b("0x3ab")](eY, 0x0, []);
        this["columns"]++;
        this[b("0x37")][eY][b("0x39d")] = this["rows"];
      },
      deleteRow: function (eZ) {
        for (var f0 = 0x0; f0 < this["columns"]; f0++)
          this[b("0x37")][f0][b("0x3ab")](eZ, 0x1);
        this[b("0x3cb")]--;
      },
      insertRow: function (f1) {
        for (var f2 = 0x0; f2 < this[b("0x40")]; f2++)
          this[b("0x37")][f2]["splice"](f1, 0x0, null);
        this[b("0x3cb")]++;
      },
    };
    MindFusion[b("0x230")](eI, "MindFusion.Collections.Grid");
  })(MindFusion[b("0x25a")]);
  (function (f3) {
    var f4 = (f3[b("0x39a")] = function () {
      this[b("0x276")] = new Array();
      this[b("0x1c9")] = 0x64;
      this[b("0x16d")] = 0x0;
    });
    f4["prototype"]["add"] = function (f5) {
      this["count"]++;
      var f6 = this["bucket"](f5);
      var f7 = { key: f5 };
      f6["push"](f7);
      return f7;
    };
    f4[b("0x235")][b("0x79")] = function (f8) {
      var f9 = this["bucket"](f8);
      var fa = this["indexInBucket"](f8, f9);
      if (fa == -0x1) return null;
      return f9[fa];
    };
    f4[b("0x235")]["contains"] = function (fb) {
      var fc = this[b("0x79")](fb);
      return fc != null;
    };
    f4[b("0x235")][b("0x1ce")] = function (fd) {
      var fe = this[b("0x3ae")](fd);
      var ff = this[b("0x377")](fd, fe);
      if (ff == -0x1) return null;
      this[b("0x16d")]--;
      var fg = fe[ff];
      fe[b("0x3ab")](ff, 0x1);
      return fg;
    };
    f4[b("0x235")][b("0x31e")] = function (fh) {
      for (var fi = 0x0; fi < this[b("0x276")][b("0x39d")]; ++fi) {
        var fj = this[b("0x276")][fi];
        if (fj == undefined) continue;
        for (var fk = 0x0; fk < fj[b("0x39d")]; ++fk) {
          fh(fj[fk]);
        }
      }
    };
    f4[b("0x235")][b("0x3ae")] = function (fl) {
      var fm = this[b("0x22b")](fl) % this["size"];
      var fo = this[b("0x276")][fm];
      if (fo === undefined) {
        fo = new Array();
        this["buckets"][fm] = fo;
      }
      return fo;
    };
    f4["prototype"]["indexInBucket"] = function (fp, fq) {
      for (var fr = 0x0; fr < fq[b("0x39d")]; ++fr) {
        var fs = fq[fr];
        if (fs[b("0x355")] === fp) return fr;
      }
      return -0x1;
    };
    f4[b("0x235")]["hashCode"] = function (ft) {
      if (typeof ft == b("0x1f0")) return ft & ft;
      if (typeof ft == b("0x280")) return this[b("0x157")](ft);
      if (typeof ft == b("0x366")) return this[b("0xe7")](ft);
      throw new Error(b("0x30d"));
    };
    f4[b("0x235")]["hashString"] = function (fu) {
      var fv = 0x0;
      if (fu["length"] == 0x0) return fv;
      for (var fw = 0x0; fw < fu["length"]; fw++) {
        var fx = fu["charCodeAt"](fw);
        fv = (fv << 0x5) - fv + fx;
        fv = fv & fv;
      }
      return Math[b("0x10c")](fv);
    };
    f4["prototype"][b("0xe7")] = function (fy) {
      var fz = fy[b("0x26c")];
      if (fz === undefined) {
        fz = f4["objectIdCounter"]++;
        fy[b("0x26c")] = fz;
      }
      return fz;
    };
    f4[b("0x2a0")] = 0x0;
    MindFusion[b("0x230")](f4, b("0x1c"));
  })(MindFusion["Collections"]);
  (function (fA) {
    var fB = (fA["ItemEventArgs"] = function (fC) {
      mflayer["initializeBase"](fB, this);
      this[b("0x62")] = fC;
    });
    fB[b("0x235")][b("0x65")] = function () {
      return this[b("0x62")];
    };
    MindFusion[b("0x230")](fB, b("0x90"), MindFusion[b("0x2f8")]);
  })(MindFusion[b("0x25a")]);
  (function (fD) {
    var fE = MindFusion["Collections"][b("0x25d")];
    var fF = (fD[b("0x251")] = function () {
      mflayer["initializeBase"](fF, this);
      this["eventHandlers"] = new mflayer[b("0x2c8")]();
    });
    fF[b("0x235")][b("0xba")] = function (fG) {
      fE["add"](this, fG);
      var fH = mflayer[b("0x23")](this, b("0x1fa"));
      var fI = new MindFusion["Collections"][b("0x38c")](fG);
      fH(this, fI);
    };
    fF[b("0x235")][b("0x198")] = function (fJ) {
      mflayer[b("0x299")](this, "itemAdded", fJ);
    };
    fF[b("0x235")][b("0x1e9")] = function (fK) {
      mflayer[b("0x1d6")](this, b("0x1fa"), fK);
    };
    MindFusion[b("0x230")](fF, b("0x13e"), Array);
  })(MindFusion[b("0x25a")]);
  (function (fL) {
    var fM = (fL[b("0x3ad")] = function (fN) {
      this[b("0x144")] = [null];
      this[b("0x1c9")] = 0x0;
      this["compareFunction"] = fN;
    });
    fM[b("0x235")] = {
      add: function (fO) {
        this[b("0x144")][b("0x11e")](null);
        this["heap"][++this["size"]] = fO;
        this[b("0x1c1")](this[b("0x1c9")]);
      },
      popMin: function () {
        this[b("0x263")](0x1, this[b("0x1c9")]);
        this[b("0x23c")](0x1, this[b("0x1c9")] - 0x1);
        return this[b("0x144")][this[b("0x1c9")]--];
      },
      changePriority: function (fP) {
        var fQ = this["heap"][b("0x3b3")](fP);
        this["fixUp"](fQ);
        this[b("0x23c")](fQ, this["size"]);
      },
      swap: function (fR, fS) {
        var fT = this[b("0x144")][fR];
        this[b("0x144")][fR] = this[b("0x144")][fS];
        this[b("0x144")][fS] = fT;
      },
      fixUp: function (fU) {
        while (fU > 0x1 && this[b("0x3a3")](Math["floor"](fU / 0x2), fU)) {
          this[b("0x263")](fU, Math[b("0x1a4")](fU / 0x2));
          fU = Math[b("0x1a4")](fU / 0x2);
        }
      },
      fixDown: function (fV, fW) {
        while (0x2 * fV <= fW) {
          var fX = 0x2 * fV;
          if (fX < fW && this[b("0x3a3")](fX, fX + 0x1)) fX++;
          if (!this[b("0x3a3")](fV, fX)) break;
          this[b("0x263")](fV, fX);
          fV = fX;
        }
      },
      empty: function () {
        return this[b("0x1c9")] == 0x0;
      },
      more: function (fY, fZ) {
        if (this["compareFunction"])
          return (
            this[b("0x2dd")](this[b("0x144")][fY], this[b("0x144")][fZ]) > 0x0
          );
        return this["heap"][fY] > this["heap"][fZ];
      },
    };
    MindFusion[b("0x230")](fM, b("0x55"));
  })(MindFusion["Collections"]);
  (function (g0) {
    var g1 = (g0["Queue"] = function () {
      this["head"] = null;
      this[b("0x3e")] = null;
      this[b("0x1c9")] = 0x0;
    });
    g1[b("0x235")]["enqueue"] = function (g2) {
      var g3 = { value: g2, next: null };
      if (this["head"] == null) {
        this["head"] = g3;
        this[b("0x3e")] = this["head"];
      } else {
        this[b("0x3e")][b("0x44")] = g3;
        this["tail"] = this[b("0x3e")][b("0x44")];
      }
      this["size"]++;
    };
    g1[b("0x235")][b("0x114")] = function () {
      if (this[b("0x1c9")] < 0x1) throw new Error(b("0x109"));
      var g4 = this[b("0x15c")][b("0x99")];
      this[b("0x15c")] = this[b("0x15c")][b("0x44")];
      this["size"]--;
      return g4;
    };
    g1[b("0x235")][b("0x2bc")] = function () {
      return this[b("0x1c9")];
    };
    MindFusion[b("0x230")](g1, b("0x21d"));
  })(MindFusion[b("0x25a")]);
  (function (g5) {
    var g6 = (g5[b("0xbf")] = function () {
      this[b("0x329")] = new g5[b("0x39a")]();
    });
    g6[b("0x235")]["add"] = function (g7) {
      var g8 = this[b("0x329")]["get"](g7);
      if (g8 == null) g8 = this["table"][b("0xba")](g7);
    };
    g6[b("0x235")][b("0xd")] = function (g9) {
      return this[b("0x329")]["contains"](g9);
    };
    g6[b("0x235")][b("0x1ce")] = function (ga) {
      var gb = this["table"]["remove"](ga);
      if (gb) return !![];
      return ![];
    };
    g6["prototype"][b("0x292")] = function () {
      return this[b("0x329")]["count"];
    };
    g6["prototype"][b("0x31e")] = function (gc, gd) {
      this[b("0x329")]["forEach"](function (ge) {
        gc["call"](gd, ge["key"]);
      });
    };
    MindFusion[b("0x230")](g6, b("0x389"));
  })(MindFusion[b("0x25a")]);
  MindFusion[b("0x25a")][b("0xf9")] = {
    indexOf: function (gf) {
      for (var gg = 0x0; gg < this[b("0x39d")]; ++gg) {
        if (this[gg] === gf) return gg;
      }
      return -0x1;
    },
    remove: function (gh) {
      var gi = this["indexOf"](gh);
      if (gi > -0x1) this[b("0x3ab")](gi, 0x1);
    },
    contains: function (gj) {
      return this[b("0x3b3")](gj) > -0x1;
    },
    any: function (gk, gl) {
      for (var gm = 0x0; gm < this[b("0x39d")]; ++gm) {
        if (gk[b("0x183")](gl, this[gm])) return this[gm];
      }
      return null;
    },
    all: function (gn, go) {
      var gp = [];
      for (var gq = 0x0; gq < this[b("0x39d")]; ++gq) {
        if (gn["call"](go, this[gq])) gp[b("0x11e")](this[gq]);
      }
      return gp;
    },
    forEach: function (gr, gs) {
      for (var gt = 0x0; gt < this[b("0x39d")]; ++gt) {
        if (gr[b("0x183")](gs, this[gt]) === $break) break;
      }
    },
    forReverse: function (gu, gv) {
      for (var gw = this["length"] - 0x1; gw >= 0x0; gw--) {
        if (gu[b("0x183")](gv, this[gw]) === $break) break;
      }
    },
    mapTo: function (gx, gy, gz) {
      for (var gA = 0x0, gB = gx["length"]; gA < gB; gA++) {
        gy[b("0x11e")](gz(gx[gA]));
      }
    },
  };
  MindFusion[b("0x26b")](b("0x95"));
  (function (gC) {
    gC[b("0xe5")] = function (gD, gE) {
      if (gD === gE) {
        return { a: 0x0, r: 0x0 };
      }
      var gF = gE["x"] - gD["x"];
      var gG = gE["y"] - gD["y"];
      var gH = gC[b("0xc7")](gD, gE);
      var gI = Math[b("0x1db")](-gG / gF);
      if (gF < 0x0) gI += Math["PI"];
      return { a: gI, r: gH };
    };
    gC["cartesianToPolarDegrees"] = function (gJ, gK) {
      var gL = gC["cartesianToPolar"](gJ, gK);
      gL["a"] = gC["radianToDegree"](gL["a"]);
      return gL;
    };
    gC[b("0x2d3")] = function (gM, gN) {
      if (gN["r"] == 0x0) return gM;
      return {
        x: gM["x"] + Math[b("0x1d3")](gN["a"]) * gN["r"],
        y: gM["y"] - Math[b("0x2be")](gN["a"]) * gN["r"],
      };
    };
    gC["polarToCartesianDegrees"] = function (gO, gP) {
      var gQ = { a: gC[b("0x2df")](gP["a"]), r: gP["r"] };
      return gC["polarToCartesian"](gO, gQ);
    };
    gC[b("0x22d")] = function (gR, gS, gT) {
      var gU = gC[b("0xe5")](gS, gR);
      gU["a"] += gT;
      return gC[b("0x2d3")](gS, gU);
    };
    gC[b("0xc7")] = function (gV, gW) {
      var gX = gV["x"] - gW["x"];
      var gY = gV["y"] - gW["y"];
      return Math[b("0x24a")](gX * gX + gY * gY);
    };
    gC[b("0x34c")] = function (gZ) {
      return (gZ * 0xb4) / Math["PI"];
    };
    gC[b("0x2df")] = function (h0) {
      return (h0 * Math["PI"]) / 0xb4;
    };
    gC[b("0x205")] = function (h1, h2) {
      var h3 = MindFusion["Drawing"][b("0x288")];
      for (var h5 = 0x0, h6 = h1[b("0x39d")]; h5 < h6; h5++) {
        if (h2[b("0x46")](h1[h5])) {
          return !![];
        }
      }
      var h7 = [];
      h7[b("0x11e")](new h3(h2["x"], h2["y"]));
      h7["push"](new h3(h2["right"](), h2["y"]));
      h7[b("0x11e")](new h3(h2[b("0x31")](), h2[b("0x28f")]()));
      h7[b("0x11e")](new h3(h2["x"], h2[b("0x28f")]()));
      for (var h5 = 0x0, h8 = h1[b("0x39d")] - 0x1; h5 < h8; ++h5) {
        for (var h9 = 0x0; h9 < 0x4; ++h9) {
          var ha = h1[h5];
          var hb = h1[h5 + 0x1];
          var hc = h7[h9];
          var hd = h7[(h9 + 0x1) % 0x4];
          if (MindFusion[b("0x313")][b("0x202")][b("0x80")](ha, hb, hc, hd))
            return !![];
        }
      }
      return ![];
    };
    gC[b("0xdc")] = function (he, hf) {
      for (var hg = 0x0; hg < he[b("0x39d")] - 0x1; hg++) {
        var hh = he[hg];
        var hi = he[hg + 0x1];
        for (var hj = 0x0; hj < hf[b("0x39d")] - 0x1; hj++) {
          var hk = hf[hj];
          var hl = hf[hj + 0x1];
          if (MindFusion[b("0x313")][b("0x202")][b("0x80")](hh, hi, hk, hl))
            return !![];
        }
      }
      return ![];
    };
    gC[b("0x261")] = function (hm, hn, ho) {
      var hp = ho[b("0x32c")]();
      var hq = MindFusion["Drawing"]["Rect"];
      var hr = hq[b("0x1a7")](hn["x"], hn["y"], ho["x"], ho["y"]);
      var hs = hn["x"];
      var ht = hn["y"];
      var hu = ho["x"];
      var hv = ho["y"];
      if (Math[b("0x10c")](hs - hu) > 0.0001) {
        var hx = (hm[b("0x20")]() + hm[b("0x31")]()) / 0x2;
        var hz = (hm[b("0x1dc")]() + hm[b("0x28f")]()) / 0x2;
        var hB = (hm["right"]() - hm[b("0x20")]()) / 0x2;
        var hD = (hm[b("0x28f")]() - hm["top"]()) / 0x2;
        var hE = (ht - hv) / (hs - hu);
        var hF = (hs * hv - hu * ht) / (hs - hu);
        var hG = hD * hD + hE * hE * hB * hB;
        var hH = 0x2 * hE * (hF - hz) * hB * hB - 0x2 * hx * hD * hD;
        var hI =
          hD * hD * hx * hx +
          hB * hB * (hF - hz) * (hF - hz) -
          hB * hB * hD * hD;
        var hJ, hK, hL, hN;
        var hP = Math[b("0x24a")](hH * hH - 0x4 * hG * hI);
        hJ = (-hH + hP) / (0x2 * hG);
        hK = (-hH - hP) / (0x2 * hG);
        hM = hE * hJ + hF;
        hO = hE * hK + hF;
        if (ht == hv) hM = hO = ht;
        hp["x"] = hJ;
        hp["y"] = hM;
        if (
          hp["x"] >= hr["left"]() &&
          hp["x"] <= hr[b("0x31")]() &&
          hp["y"] >= hr["top"]() &&
          hp["y"] <= hr[b("0x28f")]()
        )
          return hp;
        hp["x"] = hK;
        hp["y"] = hO;
        if (
          hp["x"] >= hr[b("0x20")]() &&
          hp["x"] <= hr[b("0x31")]() &&
          hp["y"] >= hr[b("0x1dc")]() &&
          hp["y"] <= hr[b("0x28f")]()
        )
          return hp;
      } else {
        var hx = (hm[b("0x20")]() + hm["right"]()) / 0x2;
        var hz = (hm[b("0x1dc")]() + hm["bottom"]()) / 0x2;
        var hB = (hm[b("0x31")]() - hm[b("0x20")]()) / 0x2;
        var hD = (hm[b("0x28f")]() - hm[b("0x1dc")]()) / 0x2;
        var hQ = hs;
        var hM =
          hz -
          Math[b("0x24a")](
            (0x1 - ((hQ - hx) * (hQ - hx)) / (hB * hB)) * hD * hD
          );
        var hO =
          hz +
          Math[b("0x24a")](
            (0x1 - ((hQ - hx) * (hQ - hx)) / (hB * hB)) * hD * hD
          );
        hp["x"] = hQ;
        hp["y"] = hM;
        if (
          hp["x"] >= hr[b("0x20")]() &&
          hp["x"] <= hr[b("0x31")]() &&
          hp["y"] >= hr[b("0x1dc")]() &&
          hp["y"] <= hr[b("0x28f")]()
        )
          return hp;
        hp["x"] = hQ;
        hp["y"] = hO;
        if (
          hp["x"] >= hr["left"]() &&
          hp["x"] <= hr[b("0x31")]() &&
          hp["y"] >= hr[b("0x1dc")]() &&
          hp["y"] <= hr[b("0x28f")]()
        )
          return hp;
      }
      return hp;
    };
    gC["calcAngle"] = function (hR, hS, hT, hU) {
      var hV = Math[b("0x185")](hR["y"] - hS["y"], hR["x"] - hS["x"]);
      var hW = Math[b("0x185")](hT["y"] - hU["y"], hT["x"] - hU["x"]);
      hV = (0xb4 * hV) / Math["PI"];
      hW = (0xb4 * hW) / Math["PI"];
      var hX = hV - hW;
      if (hX < -0xb4) hX = 0x168 + hX;
      if (hX > 0xb4) hX = hX - 0x168;
      return hX;
    };
  })(MindFusion[b("0x287")]);
  (function (hY) {
    var hZ = MindFusion[b("0x25a")][b("0x25d")];
    var i0 = (hY[b("0x3c1")] = function (i2, i3, i4) {
      this["x"] = i2;
      this["y"] = i3;
      this["r"] = i4;
    });
    i0[b("0x2f1")] = function (i5) {
      if (i5[b("0x39d")] == 0x2) return i0["fromTwoPoints"](i5[0x0], i5[0x1]);
      if (i5[b("0x39d")] == 0x3)
        return i0[b("0x2e")](i5[0x0], i5[0x1], i5[0x2]);
      var i6 = { x: 0x0, y: Number[b("0x28b")] };
      hZ[b("0x31e")](i5, function (ig) {
        if (ig["y"] < i6["y"]) i6 = ig;
      });
      var i7 = Number[b("0x28b")];
      var i8 = null;
      hZ[b("0x31e")](i5, function (ih) {
        if (i6 == ih) return;
        var ii = { x: ih["x"], y: i6["y"] };
        var ij = i1(i6, ih, ii);
        if (ij < i7) {
          i7 = ij;
          i8 = ih;
        }
      });
      var i9 = new MindFusion[b("0x25a")][b("0xbf")]();
      while (!![]) {
        i7 = Number[b("0x28b")];
        var ia = null;
        hZ[b("0x31e")](i5, function (ik) {
          if (i6 == ik || i8 == ik || i9[b("0xd")](ik)) return;
          var il = i1(ik, i6, i8);
          if (il < i7) {
            i7 = il;
            ia = ik;
          }
        });
        var ib = i7;
        var ic = i1(i6, i8, ia);
        var ie = Math["PI"] - ib - ic;
        if (
          ib < Math["PI"] / 0x2 &&
          ic < Math["PI"] / 0x2 &&
          ie < Math["PI"] / 0x2
        )
          return i0["fromThreePoints"](i6, i8, ia);
        if (ib >= Math["PI"] / 0x2) return i0[b("0x29d")](i6, i8);
        if (ic >= Math["PI"] / 0x2) {
          i9[b("0xba")](i6);
          i6 = ia;
        } else if (ie >= Math["PI"] / 0x2) {
          i9["add"](i8);
          i8 = ia;
        } else return null;
      }
    };
    i0["fromThreePoints"] = function (im, io, ip) {
      if (im["x"] == io["x"]) {
        var ir = ip;
        ip = io;
        io = ir;
      } else if (ip["x"] == io["x"]) {
        var ir = im;
        im = io;
        io = ir;
      }
      var is = im["x"];
      var it = im["y"];
      var iu = io["x"];
      var iv = io["y"];
      var iw = ip["x"];
      var ix = ip["y"];
      var iy = (iv - it) / (iu - is);
      var iz = (ix - iv) / (iw - iu);
      if (iz == iy) return null;
      var iA =
        (iy * iz * (it - ix) + iz * (is + iu) - iy * (iu + iw)) /
        (0x2 * (iz - iy));
      var iB =
        iy != 0x0
          ? -(iA - (is + iu) / 0x2) / iy + (it + iv) / 0x2
          : -(iA - (iu + iw) / 0x2) / iz + (iv + ix) / 0x2;
      var iC = iA - is;
      var iD = iB - it;
      var iE = Math["sqrt"](iC * iC + iD * iD);
      return new i0(iA, iB, iE);
    };
    i0["fromTwoPoints"] = function (iF, iG) {
      var iH = (iF["x"] + iG["x"]) / 0x2;
      var iI = (iF["y"] + iG["y"]) / 0x2;
      var iJ = iH - iF["x"];
      var iK = iI - iF["y"];
      var iL = Math[b("0x24a")](iJ * iJ + iK * iK);
      return new i0(iH, iI, iL);
    };
    function i1(iM, iN, iO) {
      if (iN["x"] == iO["x"] && iN["y"] == iO["y"]) return 0x0;
      var iP = hY[b("0xc7")](iM, iN);
      var iQ = hY[b("0xc7")](iM, iO);
      var iR = hY[b("0xc7")](iN, iO);
      return Math["acos"]((iP * iP + iQ * iQ - iR * iR) / (0x2 * iP * iQ));
    }
    hY[b("0xc7")] = function (iS, iT) {
      var iU = iS["x"] - iT["x"];
      var iV = iS["y"] - iT["y"];
      return Math[b("0x24a")](iU * iU + iV * iV);
    };
    MindFusion[b("0x230")](i0, b("0x3c5"));
  })(MindFusion["Geometry"]);
  MindFusion[b("0x26b")](b("0x37b"));
  (function (iW) {
    iW["Visibility"] = { Hidden: 0x0, Collapsed: 0x1, Visible: 0x2 };
    iW[b("0x100")] = { Near: 0x0, Center: 0x1, Far: 0x2, Stretch: 0x3 };
    iW["DashStyle"] = {
      Solid: 0x0,
      Dash: 0x1,
      Dot: 0x2,
      DashDot: 0x3,
      DashDotDot: 0x4,
      Custom: 0x5,
      apply: function (iX, iY) {
        if (!iX["setLineDash"]) return;
        var iZ = 0x2 / iX[b("0x351")];
        if (iY == 0x1) {
          iX[b("0x274")]([0x4 * iZ, iZ]);
        } else if (iY == 0x2) {
          iX["setLineDash"]([iZ, iZ]);
        } else if (iY == 0x3) {
          iX[b("0x274")]([0x4 * iZ, iZ, iZ, iZ]);
        } else if (iY == 0x4) {
          iX[b("0x274")]([0x4 * iZ, iZ, iZ, iZ, iZ, iZ]);
        } else {
          iX[b("0x274")]([]);
        }
      },
    };
    iW[b("0x224")] = {
      Center: 0x0,
      Fit: 0x1,
      Stretch: 0x2,
      Tile: 0x3,
      TopLeft: 0x4,
      BottomLeft: 0x5,
      TopRight: 0x6,
      BottomRight: 0x7,
      TopCenter: 0x8,
      BottomCenter: 0x9,
      MiddleLeft: 0xa,
      MiddleRight: 0xb,
    };
    iW["FontStyle"] = { Regular: 0x0, Bold: 0x1, Italic: 0x2, Underline: 0x4 };
  })(MindFusion["Drawing"]);
  (function (j0) {
    var j1 = (j0[b("0x164")] = function (j2, j3, j4, j5) {
      this[b("0x20")] = j2;
      this[b("0x1dc")] = j3;
      this[b("0x31")] = j4;
      this[b("0x28f")] = j5;
    });
    j1[b("0x235")] = {
      applyTo: function (j6) {
        var j7 = j6[b("0xde")] - this[b("0xde")]();
        if (j7 > 0x0) {
          j6["x"] += this[b("0x20")];
          j6[b("0xde")] = j7;
        }
        var j8 = j6[b("0x338")] - this[b("0x338")]();
        if (j8 > 0x0) {
          j6["y"] += this[b("0x1dc")];
          j6[b("0x338")] = j8;
        }
      },
      addToRect: function (j9) {
        j9["x"] -= this[b("0x20")];
        j9["y"] -= this[b("0x1dc")];
        j9[b("0xde")] += this[b("0xde")]();
        j9[b("0x338")] += this["height"]();
      },
      width: function () {
        return this[b("0x31")] + this[b("0x20")];
      },
      height: function () {
        return this["bottom"] + this[b("0x1dc")];
      },
    };
    j1["copy"] = function (ja) {
      return new j1(ja[b("0x20")], ja["top"], ja[b("0x31")], ja[b("0x28f")]);
    };
    MindFusion[b("0x230")](j1, b("0x1d2"));
  })(MindFusion[b("0x52")]);
  (function (jb) {
    var jc = (jb[b("0x192")] = function (jd, je) {
      this[b("0xde")] = jd;
      this[b("0x338")] = je;
    });
    jc["prototype"] = {
      empty: function () {
        return this[b("0xde")] === 0x0 && this[b("0x338")] === 0x0;
      },
    };
    jc[b("0x39")] = function (jf) {
      return new jc(jf[b("0xde")], jf[b("0x338")]);
    };
    MindFusion["registerClass"](jc, b("0x1b9"));
  })(MindFusion[b("0x52")]);
  (function (jg) {
    var jh = (jg[b("0x146")] = function (ji, jj, jk, jl, jm, jn) {
      this["x"] = ji;
      this["y"] = jj;
      this[b("0x1ae")] = jk;
      this[b("0x35c")] = jl;
      this["endAngle"] = jm;
      this[b("0x32f")] = jn;
      this["center"] = new jg[b("0x288")](ji, jj);
    });
    jh[b("0x235")] = {
      getType: function () {
        return this[b("0x5e")]["__typeName"];
      },
      draw: function (jo) {
        jo[b("0x7a")] = this[b("0xfc")];
        jo[b("0x25c")] =
          (this[b("0x2bf")] ? this[b("0x2bf")] : 0x1) / jo["_mf_scale"];
        jg[b("0x229")]["apply"](jo, this[b("0x190")]);
        jo[b("0x54")]();
        jo[b("0x3d3")](
          this["x"],
          this["y"],
          this[b("0x1ae")],
          this["startAngle"],
          this["endAngle"],
          this[b("0x32f")]
        );
        jo[b("0x20a")]();
      },
      containsPoint: function (jp) {
        var jq = jg[b("0x288")][b("0xc7")](jp, this[b("0x36e")]);
        return jq <= this[b("0x1ae")];
      },
      inflate: function (jr) {
        if (!jr) return this;
        var js = new jh(
          this["x"],
          this["y"],
          this[b("0x1ae")] + jr,
          this["startAngle"],
          this[b("0x159")],
          this[b("0x32f")]
        );
        return js;
      },
      createSvgElement: function (jt) {
        var ju = this[b("0x159")] - this[b("0x35c")] == 0x2 * Math["PI"];
        var jv = this[b("0x1ae")];
        var jw = this["x"] + jv * Math[b("0x1d3")](this[b("0x35c")]);
        var jx = this["y"] + jv * Math[b("0x2be")](this[b("0x35c")]);
        var jy = this["x"] + jv * Math[b("0x1d3")](this["endAngle"]);
        var jz = this["y"] + jv * Math[b("0x2be")](this[b("0x159")]);
        var jA = 0x0;
        var jB = 0x0;
        if (!ju) {
          if (
            this[b("0x32f")] &&
            this["endAngle"] - this["startAngle"] < Math["PI"]
          ) {
            jA = 0x1;
            jB = 0x0;
          }
          if (
            this["anticlockwise"] &&
            this["endAngle"] - this[b("0x35c")] >= Math["PI"]
          )
            jA = jB = 0x0;
          if (
            !this[b("0x32f")] &&
            this[b("0x159")] - this[b("0x35c")] < Math["PI"]
          ) {
            jA = 0x0;
            jB = 0x1;
          }
          if (
            !this[b("0x32f")] &&
            this[b("0x159")] - this["startAngle"] >= Math["PI"]
          )
            jA = jB = 0x1;
          var jD = jt["createElementNS"]("http://www.w3.org/2000/svg", "path");
          var jF =
            "A" +
            jv +
            ",\x20" +
            jv +
            b("0x63") +
            jA +
            ",\x20" +
            jB +
            ",\x20" +
            jy +
            ",\x20" +
            jz;
          jD["setAttribute"]("d", jF);
          return jD;
        } else {
          var jG = this["x"] + jv * Math["cos"](this[b("0x35c")] + Math["PI"]);
          var jH =
            this["y"] + jv * Math[b("0x2be")](this[b("0x35c")] + Math["PI"]);
          var jD = jt["createElementNS"](
            "http://www.w3.org/2000/svg",
            b("0x284")
          );
          jB = this[b("0x32f")] ? 0x0 : 0x1;
          var jF =
            "A" +
            jv +
            ",\x20" +
            jv +
            b("0x63") +
            jA +
            ",\x20" +
            jB +
            ",\x20" +
            jG +
            ",\x20" +
            jH +
            "\x20A" +
            jv +
            ",\x20" +
            jv +
            ",\x200,\x20" +
            jA +
            ",\x20" +
            jB +
            ",\x20" +
            jy +
            ",\x20" +
            jz;
          jD[b("0x2d")]("d", jF);
          return jD;
        }
      },
      getRepaintBounds: function (jI) {
        return new MindFusion["Drawing"]["Rect"](
          this["x"] - this[b("0x1ae")],
          this["y"] - this[b("0x1ae")],
          0x2 * this["radius"],
          0x2 * this[b("0x1ae")]
        );
      },
      pen: "black",
    };
    MindFusion[b("0x230")](jh, "MindFusion.Drawing.Arc");
  })(MindFusion["Drawing"]);
  (function (jJ) {
    var jK = (jJ[b("0x22e")] = function (jL, jM, jN, jO, jP, jQ, jR, jS) {
      this["x1"] = jL;
      this["y1"] = jM;
      this["x2"] = jN;
      this["y2"] = jO;
      this["x3"] = jP;
      this["y3"] = jQ;
      this["x4"] = jR;
      this["y4"] = jS;
    });
    jK["fromPoints"] = function (jT, jU) {
      return new jK(
        jT[jU + 0x0]["x"],
        jT[jU + 0x0]["y"],
        jT[jU + 0x1]["x"],
        jT[jU + 0x1]["y"],
        jT[jU + 0x2]["x"],
        jT[jU + 0x2]["y"],
        jT[jU + 0x3]["x"],
        jT[jU + 0x3]["y"]
      );
    };
    jK["prototype"] = {
      pen: "black",
      strokeThickness: 0x0,
      draw: function (jV, jW) {
        if (this["shadow"] && jW != ![]) {
          jV[b("0x2bd")]();
          this["shadow"][b("0x1e6")](jV);
        }
        jV[b("0x7a")] = this["pen"];
        jV[b("0x25c")] =
          (this[b("0x2bf")] ? this[b("0x2bf")] : 0x1) / jV["_mf_scale"];
        jJ[b("0x229")][b("0x1e6")](jV, this[b("0x190")]);
        jV[b("0x54")]();
        jV[b("0x2b2")](this["x1"], this["y1"]);
        jV[b("0x15a")](
          this["x2"],
          this["y2"],
          this["x3"],
          this["y3"],
          this["x4"],
          this["y4"]
        );
        jV[b("0x20a")]();
        if (this[b("0x1e5")] && jW != ![]) jV[b("0x2a")]();
      },
      drawShadow: function (jX) {
        if (this[b("0x1e5")]) {
          jX["save"]();
          this[b("0x1e5")][b("0x1e6")](jX);
          jX[b("0x25c")] =
            (this[b("0x2bf")] ? this[b("0x2bf")] : 0x1) / jX[b("0x351")];
          jX[b("0x54")]();
          jX["moveTo"](this["x1"], this["y1"]);
          jX[b("0x15a")](
            this["x2"],
            this["y2"],
            this["x3"],
            this["y3"],
            this["x4"],
            this["y4"]
          );
          jX[b("0x7a")] = this[b("0x1e5")]["color"];
          jX[b("0x20a")]();
          jX["restore"]();
        }
      },
      addToContext: function (jY) {
        jY[b("0x54")]();
        jY[b("0x2b2")](this["x1"], this["y1"]);
        jY[b("0x15a")](
          this["x2"],
          this["y2"],
          this["x3"],
          this["y3"],
          this["x4"],
          this["y4"]
        );
      },
      createSvgElement: function (jZ) {
        var k0 = jZ[b("0x321")](b("0x391"), b("0x284"));
        var k1 = "M" + this["x1"] + "," + this["y1"];
        k1 +=
          "\x20C" +
          this["x2"] +
          "," +
          this["y2"] +
          "," +
          this["x3"] +
          "," +
          this["y3"] +
          "," +
          this["x4"] +
          "," +
          this["y4"];
        k0[b("0x2d")]("d", k1);
        k0["setAttribute"](b("0x27c"), b("0xc"));
        k0[b("0x2d")](b("0x20a"), b("0x325"));
        k0[b("0x2d")](
          "stroke-width",
          this["strokeThickness"] ? this[b("0x2bf")] / 0x4 : 0x1 / 0x4
        );
        return k0;
      },
    };
    MindFusion[b("0x230")](jK, "MindFusion.Drawing.Bezier");
  })(MindFusion["Drawing"]);
  (function (k2) {
    var k3 = (k2[b("0x87")] = function (k4) {
      this[b("0x2d0")] = k4;
      this[b("0x3aa")] = new k2[b("0x1e3")]();
      this[b("0x309")] = this[b("0x5e")][b("0x7b")];
    });
    k3[b("0x235")] = {
      getType: function () {
        return this[b("0x309")];
      },
      draw: function (k5, k6) {
        function k7(kb, kc, kd, ke) {
          function kf(kg) {
            var kh = Math["round"](kg * k5["_mf_scale"]) / k5["_mf_scale"];
            return kh;
          }
          k5[b("0x54")]();
          k5["moveTo"](kf(kb), kf(kc));
          k5["lineTo"](kf(kd), kf(ke));
          k5[b("0x20a")]();
        }
        var k8 = this["rect"];
        var k9 = 0x1 / k5["_mf_scale"];
        var ka = k9 * 0x2;
        k5["save"]();
        k5[b("0x25c")] = k9;
        k5[b("0x7a")] = "gray";
        k7(
          k8[b("0x20")](),
          k8[b("0x1dc")](),
          k8[b("0x31")](),
          k8[b("0x1dc")]()
        );
        k7(
          k8[b("0x20")](),
          k8[b("0x1dc")](),
          k8[b("0x20")](),
          k8[b("0x28f")]()
        );
        k5["strokeStyle"] = b("0x186");
        k7(
          k8[b("0x20")]() + k9,
          k8["top"]() + k9,
          k8[b("0x31")]() - 0x2 * k9,
          k8[b("0x1dc")]() + k9
        );
        k7(
          k8[b("0x20")]() + k9,
          k8[b("0x1dc")]() + k9,
          k8[b("0x20")]() + k9,
          k8[b("0x28f")]() - 0x2 * k9
        );
        k5[b("0x7a")] = b("0x35");
        k7(
          k8[b("0x20")](),
          k8["bottom"]() - k9,
          k8[b("0x31")](),
          k8[b("0x28f")]() - k9
        );
        k7(
          k8[b("0x20")]() + k9,
          k8["bottom"]() - ka,
          k8[b("0x31")]() - k9,
          k8["bottom"]() - ka
        );
        k7(
          k8["right"]() - k9,
          k8[b("0x1dc")](),
          k8[b("0x31")]() - k9,
          k8["bottom"]()
        );
        k7(
          k8["right"]() - ka,
          k8["top"]() + k9,
          k8[b("0x31")]() - ka,
          k8[b("0x28f")]() - k9
        );
        k5[b("0x2a")]();
      },
      createSvgElement: function (ki) {
        return this[b("0x2d0")][b("0x12d")](ki);
      },
    };
    MindFusion[b("0x230")](k3, b("0x12f"));
  })(MindFusion[b("0x52")]);
  (function (kj) {
    var kk = MindFusion["Collections"][b("0x25d")];
    var kl = String[b("0x162")];
    var km = (kj[b("0x33f")] = function (kI) {
      if (!kp) kp = new Date()[b("0x28c")]();
      mflayer[b("0x106")](km, this, [kI]);
      this[b("0x1f")] = "";
      this[b("0x23d")] = [];
      this[b("0x113")] = new kj[b("0x9b")](b("0x2da"), 0x4);
      this[b("0xc9")] = kj["GraphicsUnit"][b("0x265")];
      this[b("0x2a3")] = 0x64;
      this[b("0x0")] = new kj[b("0x5")](0x0, 0x0, 0xd2, 0x129);
      this["invalidRect"] = null;
      this["scrollbarSize"] = 0x10;
      this[b("0x125")] = mflayer["createDelegate"](this, this[b("0x29f")]);
    });
    km[b("0x235")] = {
      initialize: function () {
        this["suppressPaint"] = !![];
        mflayer["callBaseMethod"](km, this, b("0x39f"));
        var kJ = this["get_element"]();
        if (typeof kJ[b("0x2b4")] !== b("0x33e"))
          this["context"] = kJ["getContext"]("2d");
        this[b("0x2de")]();
        this[b("0xae")] = ![];
      },
      dispose: function () {
        mflayer["callBaseMethod"](km, this, "dispose");
      },
      setBounds: function (kK) {
        this[b("0x0")] = kK;
        this[b("0x3f")]();
      },
      getBounds: function () {
        return this[b("0x0")];
      },
      setMeasureUnit: function (kL) {
        if (this[b("0xc9")] !== kL) {
          this[b("0xc9")] = kL;
          this[b("0x2de")]();
        }
      },
      getMeasureUnit: function () {
        return this["measureUnit"];
      },
      setZoomFactor: function (kM) {
        if (this["zoomFactor"] !== kM) {
          if (this[b("0x2e1")]) {
            var kN = this[b("0x2e1")]();
            var kO = this[b("0x228")]();
            this[b("0x2a3")] = kM;
            this[b("0x2de")]();
            this[b("0xfa")](kN);
            this["setScrollY"](kO);
            this[b("0x21a")](b("0x1bb"), null);
          } else {
            this["zoomFactor"] = kM;
            this[b("0x2de")]();
            this[b("0x21a")](b("0x1bb"), null);
          }
        }
      },
      setZoomFactorAndScroll: function (kP, kQ, kR) {
        this[b("0x2a3")] = kP;
        this[b("0x314")] =
          this[b("0x2a3")] / 0x64 / kj[b("0x393")][b("0x272")](this[b("0xc9")]);
        this[b("0xfa")](kQ);
        this[b("0x2ec")](kR);
        this[b("0x2de")]();
        this[b("0x21a")](b("0x1bb"), null);
      },
      getZoomFactor: function () {
        return this[b("0x2a3")];
      },
      getBackgroundImage: function () {
        return null;
      },
      getBackgroundImageSize: function () {
        return new MindFusion[b("0x52")][b("0x192")](0x0, 0x0);
      },
      getBackgroundImageAlign: function () {
        return MindFusion[b("0x52")]["ImageAlign"][b("0x231")];
      },
      getLicenseLocation: function () {
        return this[b("0x1f")];
      },
      setLicenseLocation: function (kS) {
        if (this[b("0x1f")] != kS) {
          this[b("0x1f")] = kS;
        }
      },
      repaint: function () {
        if (!this[b("0x26d")]) return;
        this["repainting"] = !![];
        this["repaintId"] = null;
        var kT = this[b("0x1b")];
        if (kT == kj["Rect"]["empty"]) kT = null;
        if (this[b("0x19")]) {
          if (kT == null) kT = this["getViewport"]();
          else kT = kT[b("0x80")](this[b("0x3b0")]());
        }
        if (this[b("0x3ba")]) {
          var kU = this[b("0x3ba")](this[b("0x0")]);
          if (kT != null && kU != null && kU != kj["Rect"][b("0x1d9")]) {
            kT = kT["union"](kU);
          }
        }
        var kV = new MindFusion[b("0x52")][b("0x1e3")]();
        if (this[b("0x117")]) {
          kV[b("0x115")](
            -this[b("0x117")]["scrollLeft"],
            -this["scroller"][b("0x6a")]
          );
        }
        kV["scale"](this[b("0x314")], this[b("0x314")]);
        kV[b("0x115")](-this[b("0x0")]["x"], -this["bounds"]["y"]);
        this[b("0x26d")]["_mf_transform"] = kV;
        this[b("0x26d")][b("0x351")] = this["scale"];
        this[b("0x26d")][b("0x2a9")] = this[b("0x225")];
        this[b("0x26d")][b("0x16c")] = this[b("0xc9")];
        if (this[b("0x2e0")]) this["context"]["_mf_links"] = [];
        this["context"][b("0x2bd")]();
        if (kT != null) {
          var kW = this["context"]["_mf_transform"][b("0x362")](kT);
          kW[b("0x88")]();
          kW[b("0x123")](this[b("0x26d")]);
        }
        this[b("0x26d")]["save"]();
        this[b("0x70")](kT);
        this[b("0x26d")][b("0x3aa")][b("0x1e6")](
          this[b("0x26d")],
          kV[b("0x8c")]()
        );
        if (kT && this["debugShowInvalidArea"]) {
          this["context"][b("0x7a")] = "red";
          this[b("0x26d")][b("0x3a5")](
            kT["x"],
            kT["y"],
            kT[b("0xde")],
            kT[b("0x338")]
          );
        }
        if (this[b("0x237")]) this["laneGrid"]["drawFirst"](this["context"]);
        this[b("0x26d")]["lineWidth"] = 0x1 / this[b("0x314")];
        if (this[b("0x5b")]) this[b("0xbc")](kT);
        var kX =
          this[b("0x37d")] == MindFusion[b("0x313")][b("0x2fe")]["ZOrder"];
        if (
          this["shadowsStyle"] == MindFusion[b("0x313")][b("0x2fe")][b("0x256")]
        )
          this["drawShadows"]();
        var kY = this["getZOrder"]();
        for (var kZ = 0x0; kZ < kY[b("0x39d")]; kZ++) {
          var l0 = kY[kZ];
          if (l0[b("0x27f")]) continue;
          var l1 = l0[b("0x243")];
          if (l1) {
            if (l1["getTopLevel"]() == ![]) continue;
            if (kT != null) {
              var l2 = l1[b("0x2ea")]();
              if (!l2[b("0x3c4")](kT)) continue;
            }
          }
          l0[b("0x297")](this[b("0x26d")], kX, ![]);
        }
        if (this["showLaneGrid"])
          this["laneGrid"]["drawLast"](this[b("0x26d")]);
        if (this[b("0xe8")]) this[b("0xe8")]();
        if (this["mouseInputDispatcher"] && this[b("0x75")][b("0x182")])
          this[b("0x75")][b("0x182")][b("0x374")](this["context"]);
        if (this[b("0x29a")] && this["drawMagnifier"]) this[b("0xe0")]();
        if (this["raiseEvent"]) {
          if (this[b("0x10a")] == null)
            this[b("0x10a")] = new MindFusion[b("0x2f8")]();
          this[b("0x10a")]["clipRect"] = kT;
          this[b("0x21a")](b("0x29f"), this[b("0x10a")]);
        }
        this["context"][b("0x2a")]();
        kr(this);
        this[b("0x26d")][b("0x2a")]();
        this[b("0x1b")] = kj[b("0x5")][b("0x1d9")];
        this["repainting"] = ![];
      },
      isTransparent: function (l3) {
        if (!l3) return ![];
        if (l3[b("0x68")] && l3[b("0x68")]() == "transparent") return !![];
        if (l3[b("0x3b3")] && l3[b("0x3bc")] && l3["indexOf"]("rgba") == 0x0) {
          var l4 = l3["split"](",");
          if (l4["length"] > 0x3 && l4[0x3] == "0)") return !![];
        }
        return ![];
      },
      drawBackground: function (l5) {
        var l6 = this[b("0x0")];
        var l7 = this["context"][b("0xd0")][b("0x362")](l6);
        var l8 = MindFusion["Diagramming"]["Utils"][b("0x3")](
          this[b("0x26d")],
          this[b("0x19c")] != null ? this[b("0x19c")]() : this[b("0x28d")],
          l7
        );
        this["context"][b("0x2bd")]();
        if (this[b("0xd7")](l8))
          this[b("0x26d")][b("0x25b")](
            l7["x"],
            l7["y"],
            l7[b("0xde")],
            l7[b("0x338")]
          );
        this[b("0x26d")][b("0x54")]();
        this["context"]["rect"](
          l7["x"],
          l7["y"],
          l7[b("0xde")],
          l7[b("0x338")]
        );
        this[b("0x26d")][b("0x1ec")] = l8;
        this[b("0x26d")]["fill"]();
        this[b("0x26d")]["restore"]();
        var l9 = this[b("0x304")]();
        var la = this[b("0x12c")]();
        var lb = this[b("0x3b1")]();
        if (l9 && l9[b("0x387")]) {
          var lc = MindFusion[b("0x52")][b("0x224")];
          switch (lb) {
            case lc[b("0x231")]:
              this[b("0x26d")][b("0x6c")](
                l9,
                (l7["right"]() + l7["x"] - la[b("0xde")]) / 0x2,
                (l7[b("0x28f")]() + l7["y"] - la[b("0x338")]) / 0x2,
                la[b("0xde")],
                la[b("0x338")]
              );
              break;
            case lc[b("0x2cc")]:
              var ld = l7[b("0xde")] / l7[b("0x338")];
              var le = la[b("0xde")] / la[b("0x338")];
              if (ld > le)
                this[b("0x26d")]["drawImage"](
                  l9,
                  (l7[b("0x31")]() + l7["x"] - la[b("0xde")] * le) / 0x2,
                  l7["y"],
                  le * la["height"],
                  l7[b("0x338")]
                );
              else
                this[b("0x26d")]["drawImage"](
                  l9,
                  l7["x"],
                  (l7[b("0x28f")]() + l7["y"] - la["width"] / le) / 0x2,
                  l7[b("0xde")],
                  le * la[b("0xde")]
                );
              break;
            case lc[b("0x1c5")]:
              this[b("0x26d")][b("0x6c")](
                l9,
                l7["x"],
                l7["y"],
                l7[b("0xde")],
                l7[b("0x338")]
              );
              break;
            case lc[b("0x17e")]:
              for (var lf = 0x0; lf < l7[b("0xde")]; lf += la["width"]) {
                for (var lg = 0x0; lg < l7[b("0x338")]; lg += la["height"]) {
                  this[b("0x26d")][b("0x6c")](
                    l9,
                    lf,
                    lg,
                    la[b("0xde")],
                    la["height"]
                  );
                }
              }
              break;
            case lc[b("0x1ad")]:
              this[b("0x26d")][b("0x6c")](
                l9,
                l7["x"],
                l7["y"],
                la[b("0xde")],
                la[b("0x338")]
              );
              break;
            case lc[b("0x372")]:
              this[b("0x26d")][b("0x6c")](
                l9,
                l7["x"],
                l7["bottom"]() - la[b("0x338")],
                la[b("0xde")],
                la[b("0x338")]
              );
              break;
            case lc["TopRight"]:
              this["context"][b("0x6c")](
                l9,
                l7["right"]() - la["width"],
                l7["y"],
                la[b("0xde")],
                la["height"]
              );
              break;
            case lc[b("0x33b")]:
              this["context"][b("0x6c")](
                l9,
                l7[b("0x31")]() - la[b("0xde")],
                l7[b("0x28f")]() - la["height"],
                la[b("0xde")],
                la["height"]
              );
              break;
            case lc["TopCenter"]:
              this[b("0x26d")]["drawImage"](
                l9,
                l7["x"] + l7[b("0xde")] / 0x2 - la[b("0xde")] / 0x2,
                l7["y"],
                la[b("0xde")],
                la[b("0x338")]
              );
              break;
            case lc[b("0x1e7")]:
              this[b("0x26d")]["drawImage"](
                l9,
                l7["x"] + l7[b("0xde")] / 0x2 - la[b("0xde")] / 0x2,
                l7[b("0x28f")]() - la[b("0x338")],
                la[b("0xde")],
                la[b("0x338")]
              );
              break;
            case lc["MiddleLeft"]:
              this[b("0x26d")][b("0x6c")](
                l9,
                l7["x"],
                l7["y"] + l7[b("0x338")] / 0x2 - la[b("0x338")] / 0x2,
                la[b("0xde")],
                la[b("0x338")]
              );
              break;
            case lc["MiddleRight"]:
              this[b("0x26d")][b("0x6c")](
                l9,
                l7[b("0x31")]() - la[b("0xde")],
                l7["y"] + l7[b("0x338")] / 0x2 - la["height"] / 0x2,
                la[b("0xde")],
                la[b("0x338")]
              );
              break;
          }
        }
      },
      drawShadows: function (lh) {
        var li = this[b("0x15e")]();
        for (var lj = 0x0; lj < li[b("0x39d")]; lj++) {
          var lk = li[lj];
          if (lk[b("0x27f")]) continue;
          var ll = lk[b("0x243")];
          if (ll) {
            if (ll[b("0x339")]() == ![]) continue;
            if (lh != null) {
              var lm = ll[b("0x2ea")]();
              if (!lm[b("0x3c4")](lh)) continue;
            }
          }
          lk[b("0x297")](this[b("0x26d")], !![], !![]);
        }
      },
      clientToDoc: function (ln) {
        var lo = ln["x"];
        var lp = ln["y"];
        if (this[b("0x117")]) {
          lo += this["scroller"]["scrollLeft"];
          lp += this["scroller"][b("0x6a")];
        }
        var lq = new kj[b("0x288")](lo / this[b("0x314")], lp / this["scale"]);
        return new kj[b("0x288")](
          lq["x"] + this[b("0x0")]["x"],
          lq["y"] + this[b("0x0")]["y"]
        );
      },
      clientToDocLength: function (lr) {
        return lr / this[b("0x314")];
      },
      clientToDocOverflow: function (ls) {
        var lt = new kj[b("0x288")](
          ls["x"] / this[b("0x314")],
          ls["y"] / this[b("0x314")]
        );
        return new kj[b("0x288")](
          lt["x"] + this["bounds"]["x"],
          lt["y"] + this[b("0x0")]["y"]
        );
      },
      docToClient: function (lu) {
        var lv = new kj[b("0x288")](
          lu["x"] - this[b("0x0")]["x"],
          lu["y"] - this[b("0x0")]["y"]
        );
        lv = new kj["Point"](lv["x"] * this["scale"], lv["y"] * this["scale"]);
        if (this[b("0x117")]) {
          lv["x"] -= this[b("0x117")][b("0x1a6")];
          lv["y"] -= this[b("0x117")][b("0x6a")];
        }
        return lv;
      },
      docToClientOverflow: function (lw) {
        var lx = new kj[b("0x288")](
          lw["x"] - this[b("0x0")]["x"],
          lw["y"] - this[b("0x0")]["y"]
        );
        return new kj[b("0x288")](
          lx["x"] * this["scale"],
          lx["y"] * this[b("0x314")]
        );
      },
      measureString: function (ly, lz, lA, lB) {
        if (!this["context"]) return new kj[b("0x5")](0x0, 0x0, 0x14, 0xa);
        if (!lA)
          lA = new kj[b("0x5")](
            0x0,
            0x0,
            Number[b("0x28b")],
            Number["MAX_VALUE"]
          );
        var lC = new kj[b("0x1d0")](ly, lA);
        lC[b("0x113")] = lz;
        lC["padding"] = new kj["Thickness"](0x0, 0x0, 0x0, 0x0);
        lC[b("0x1cc")] = lB;
        this[b("0x26d")][b("0x2bd")]();
        this[b("0x26d")][b("0x113")] = lz[b("0xcf")]();
        var lD;
        if (lB) {
          lD = lC[b("0x2a4")](this["context"], lA["width"]);
        } else {
          this[b("0x26d")][b("0x314")](this["scale"], this[b("0x314")]);
          var lE = lC["getLines"](this[b("0x26d")], lA);
          if (lA["width"] != Number["MAX_VALUE"]) {
            var lG = lA[b("0xde")];
          } else {
            var lG = this[b("0x26d")][b("0x1b0")](ly)[b("0xde")];
            if (lE["length"] > 0x1) {
              var lH = 0x0;
              for (var lI = 0x0; lI < lE[b("0x39d")]; lI++) {
                lH = Math[b("0x1fd")](
                  lH,
                  this[b("0x26d")][b("0x1b0")](lE[lI])[b("0xde")]
                );
              }
              lG = lH;
            }
          }
          var lJ = lC["font"][b("0x1c9")] * lE[b("0x39d")];
          lD = new kj[b("0x192")](lG, lJ);
        }
        this[b("0x26d")][b("0x2a")]();
        return lD;
      },
      measureTextLines: function (lK, lL) {
        if (!this[b("0x26d")] || !lK)
          return new kj[b("0x5")](0x0, 0x0, 0x14, 0xa);
        if (!lL)
          lL = new kj[b("0x5")](
            0x0,
            0x0,
            Number[b("0x28b")],
            Number["MAX_VALUE"]
          );
        this[b("0x26d")]["save"]();
        this[b("0x26d")][b("0x113")] = lK[b("0x113")][b("0xcf")]();
        this[b("0x26d")][b("0x314")](this[b("0x314")], this[b("0x314")]);
        var lM = lK[b("0x222")](this["context"], lL);
        var lN = 0x0;
        for (var lO = 0x0; lO < lM["length"]; lO++) {
          lN = Math["max"](lN, this[b("0x26d")][b("0x1b0")](lM[lO])[b("0xde")]);
        }
        this["context"][b("0x2a")]();
        return lN;
      },
      getRectIntersection: function (lP, lQ, lR, lS) {
        var lT = new kj[b("0x5")][b("0x1a7")](
          lQ["x"],
          lQ["y"],
          lR["x"],
          lR["y"]
        );
        lT = MindFusion[b("0x313")]["Utils"][b("0x23e")](lT);
        var lU = lQ["x"];
        var lV = lQ["y"];
        var lW = lR["x"];
        var lX = lR["y"];
        if (lU === lW) {
          lS["x"] = lU;
          lS["y"] = lP["y"];
          if (
            lS["x"] >= lP["x"] &&
            lS["x"] <= lP["right"]() &&
            lS["y"] >= lT["y"] &&
            lS["y"] <= lT[b("0x28f")]()
          )
            return;
          lS["y"] = lP["bottom"]();
          if (
            lS["x"] >= lP["x"] &&
            lS["x"] <= lP[b("0x31")]() &&
            lS["y"] >= lT["y"] &&
            lS["y"] <= lT[b("0x28f")]()
          )
            return;
        } else if (lV === lX) {
          lS["y"] = lV;
          lS["x"] = lP["x"];
          if (
            lS["y"] >= lP["y"] &&
            lS["y"] <= lP["bottom"]() &&
            lS["x"] >= lT["x"] &&
            lS["x"] <= lT[b("0x31")]()
          )
            return;
          lS["x"] = lP["right"]();
          if (
            lS["y"] >= lP["y"] &&
            lS["y"] <= lP[b("0x28f")]() &&
            lS["x"] >= lT["x"] &&
            lS["x"] <= lT[b("0x31")]()
          )
            return;
        } else {
          var lY = (lV - lX) / (lU - lW);
          var lZ = (lU * lX - lW * lV) / (lU - lW);
          lS["y"] = lP["y"];
          lS["x"] = (lS["y"] - lZ) / lY;
          if (
            lS["x"] >= lP["x"] &&
            lS["x"] <= lP[b("0x31")]() &&
            lS["y"] <= lP["bottom"]() &&
            lS["y"] >= lT["y"] &&
            lS["y"] <= lT["bottom"]()
          )
            return;
          lS["y"] = lP["bottom"]();
          lS["x"] = (lS["y"] - lZ) / lY;
          if (
            lS["x"] >= lP["x"] &&
            lS["x"] <= lP[b("0x31")]() &&
            lS["y"] >= lP["y"] &&
            lS["y"] >= lT["y"] &&
            lS["y"] <= lT[b("0x28f")]()
          )
            return;
          lS["x"] = lP["x"];
          lS["y"] = lY * lS["x"] + lZ;
          if (
            lS["y"] >= lP["y"] &&
            lS["y"] <= lP["bottom"]() &&
            lS["x"] <= lP[b("0x31")]() &&
            lS["x"] >= lT["x"] &&
            lS["x"] <= lT["right"]()
          )
            return;
          lS["x"] = lP[b("0x31")]();
          lS["y"] = lY * lS["x"] + lZ;
          if (
            lS["y"] >= lP["y"] &&
            lS["y"] <= lP[b("0x28f")]() &&
            lS["x"] >= lP["x"] &&
            lS["x"] >= lT["x"] &&
            lS["x"] <= lT[b("0x31")]()
          )
            return;
        }
      },
      addElement: function (m0) {
        this[b("0x23d")]["push"](m0);
        if (
          this[b("0x30c")] &&
          (m0["zIndex"] === Number[b("0x28b")] || m0["zIndex"] === undefined)
        )
          this[b("0x30c")][b("0x11e")](m0);
        else this[b("0x30c")] = null;
        if (m0[b("0x243")] && m0["item"]["invalidate"])
          m0[b("0x243")][b("0x369")](![]);
        else this["invalidate"](kn(m0, this[b("0x26d")]));
      },
      removeElement: function (m1) {
        kk["remove"](this[b("0x23d")], m1);
        if (this[b("0x30c")]) kk[b("0x1ce")](this[b("0x30c")], m1);
        this[b("0x369")](kn(m1, this[b("0x26d")]));
      },
      invalidate: function (m2, m3) {
        if (m2 == null) {
          this["invalidRect"] = null;
        } else if (this[b("0x1b")] != null) {
          if (this[b("0x1b")] == kj[b("0x5")][b("0x1d9")])
            this[b("0x1b")] = m2[b("0x32c")]();
          else this["invalidRect"] = m2[b("0x1ab")](this[b("0x1b")]);
        }
        if (this["repainting"] && !m3) return;
        if (!this["repaintId"] && window)
          this[b("0x8a")] = window[b("0x214")](this[b("0x125")]);
      },
      invalidateZOrder: function () {
        this[b("0x30c")] = null;
        this[b("0x369")]();
      },
      getZOrder: function () {
        if (!this[b("0x30c")]) {
          this[b("0x30c")] = kk["clone"](this["elements"]);
          this[b("0x30c")][b("0x1a")](ko);
        }
        if (this[b("0x43")]) this[b("0x43")]();
        return this[b("0x30c")];
      },
      updateScale: function () {
        this[b("0x314")] =
          this["zoomFactor"] /
          0x64 /
          kj[b("0x393")][b("0x272")](this[b("0xc9")]);
        if (this[b("0x26d")]) this[b("0x26d")][b("0x351")] = this["scale"];
        this[b("0x3f")]();
      },
      updateCanvasSize: function () {
        if (this["scroller"]) {
          var m4 = this[b("0x331")]()[b("0x1e1")];
          this[b("0x2d1")]["style"]["width"] =
            this["bounds"][b("0xde")] * this[b("0x314")] + "px";
          this["innerScroller"][b("0x9f")]["height"] =
            this[b("0x0")]["height"] * this[b("0x314")] + "px";
          var m5 = mflayer["getBounds"](m4);
          var m6 = m5[b("0x338")];
          if (m6 == 0x0) m6 = m4[b("0x1de")];
          if (m6 == 0x0) m6 = this[b("0x0")]["height"] * this[b("0x314")];
          this[b("0x331")]()[b("0xde")] = Math[b("0x208")](
            m5[b("0xde")] - this[b("0x323")](0x1),
            this[b("0x0")][b("0xde")] * this["scale"]
          );
          this[b("0x331")]()[b("0x338")] = Math[b("0x208")](
            m6 - this[b("0x323")](0x0),
            this[b("0x0")][b("0x338")] * this["scale"]
          );
        } else {
          this[b("0x331")]()[b("0xde")] =
            this[b("0x0")][b("0xde")] * this[b("0x314")];
          this[b("0x331")]()[b("0x338")] =
            this[b("0x0")][b("0x338")] * this["scale"];
        }
        this["invalidRect"] = null;
        this[b("0x29f")]();
        if (this[b("0x21a")])
          this[b("0x21a")](b("0x383"), MindFusion[b("0x2f8")]["Empty"]);
      },
      sizeElement: function () {
        return this[b("0x2d1")] ? this[b("0x2d1")] : this[b("0x331")]();
      },
      scrollElement: function () {
        return this[b("0x117")]
          ? this["scroller"]
          : this[b("0x331")]()["parentNode"];
      },
      getScrollbarSize: function (m7) {
        if (!this["scroller"]) return 0x0;
        if (
          m7 == 0x0 &&
          this[b("0x117")][b("0x35e")] > this["scroller"][b("0xf4")]
        )
          return this["scrollbarSize"];
        if (
          m7 == 0x1 &&
          this["scroller"][b("0x3cc")] > this[b("0x117")][b("0xf2")]
        )
          return this[b("0xf5")];
        return 0x0;
      },
      drawGrid: function (m8) {
        var m9 = this[b("0x344")]();
        if (!this[b("0x5b")]) return;
        if (this[b("0x173")] != this[b("0x347")] || this[b("0x13d")] == null) {
          var mb = (this["cachedGridPixelCanvas"] = document[b("0x336")](
            "canvas"
          ));
          mb[b("0xde")] = mb[b("0x338")] = 0x1;
          var mc = mb["getContext"]("2d");
          mc[b("0x1ec")] = this["gridColor"];
          mc[b("0x20e")](0x0, 0x0, 0x1, 0x1);
        } else {
          var mb = this[b("0x13d")];
        }
        var md = m8;
        if (md == null) {
          if (this[b("0x19")]) md = this[b("0x3b0")]();
          else md = this[b("0x0")];
        }
        var me = this[b("0x26d")][b("0x7a")];
        var mf = Math[b("0x16f")](md[b("0xde")] / this[b("0x1f1")]) + 0x3;
        var mg = Math[b("0x16f")](md["height"] / this[b("0x10")]) + 0x3;
        var mh = kj["GraphicsUnit"][b("0x272")](this[b("0xc9")]);
        var mi = this["gridSizeX"] / mh;
        var mj = this[b("0x10")] / mh;
        var mk = md[b("0x1c7")]();
        var ml = md[b("0x116")]();
        var mm =
          Math[b("0x1a4")]((mk["x"] - this[b("0x221")]) / this[b("0x1f1")]) -
          0x2;
        var mn =
          Math[b("0x1a4")]((mk["y"] - this["gridOffsetY"]) / this[b("0x10")]) -
          0x2;
        if (this[b("0x330")] == MindFusion[b("0x313")][b("0x81")][b("0x3bf")]) {
          for (var mq = 0x0; mq <= mg; ++mq) {
            var mt = (mq + mn) * this[b("0x10")] + this["gridOffsetY"];
            if (mt < mk["y"] - mh || mt > ml["y"] + mh) continue;
            for (var mw = 0x0; mw <= mf; ++mw) {
              var mz = (mw + mm) * this[b("0x1f1")] + this[b("0x221")];
              if (mz < mk["x"] - mh || mz > ml["x"] + mh) continue;
              this[b("0x26d")][b("0x6c")](mb, mz, mt, mh, mh);
            }
          }
        } else if (
          this[b("0x330")] == MindFusion[b("0x313")][b("0x81")][b("0x94")]
        ) {
          this[b("0x26d")][b("0x7a")] = this[b("0x347")];
          this[b("0x26d")][b("0x54")]();
          for (var mq = 0x1; mq <= mg; ++mq) {
            var mt = (mq + mn) * this[b("0x10")] + this[b("0x2c7")];
            if (mt > ml["y"]) break;
            this[b("0x93")](
              this[b("0x0")]["x"],
              mt,
              this[b("0x0")][b("0x31")](),
              mt
            );
          }
          for (var mw = 0x1; mw <= mf; ++mw) {
            var mz = (mw + mm) * this["gridSizeX"] + this["gridOffsetX"];
            if (mz > ml["x"]) break;
            this[b("0x93")](
              mz,
              this[b("0x0")]["y"],
              mz,
              this[b("0x0")][b("0x28f")]()
            );
          }
          this["context"]["stroke"]();
          this[b("0x26d")][b("0x7a")] = me;
        } else if (
          this["gridStyle"] == MindFusion[b("0x313")][b("0x81")][b("0x201")]
        ) {
          this[b("0x26d")][b("0x7a")] = this["gridColor"];
          this["context"][b("0x54")]();
          var mA = this[b("0xf0")] / 0x2;
          for (var mq = 0x0; mq <= mg; ++mq) {
            var mt = (mq + mn) * this["gridSizeY"] + this["gridOffsetY"];
            if (mt > ml["y"] + mA) break;
            for (var mw = 0x0; mw <= mf; ++mw) {
              var mz = (mw + mm) * this[b("0x1f1")] + this[b("0x221")];
              if (mz > ml["x"] + mA) break;
              this[b("0x93")](mz - mA, mt, mz + mA, mt);
              this["drawDashLine"](mz, mt - mA, mz, mt + mA);
            }
          }
          this[b("0x26d")][b("0x20a")]();
          this["context"]["strokeStyle"] = me;
        }
      },
      drawDashLine: function (mB, mC, mD, mE) {
        this[b("0x26d")][b("0x2b2")](mB, mC);
        this[b("0x26d")][b("0x1f4")](mD, mE);
      },
      onLoad: function () {
        ks = null;
      },
      setLicenseKey: function (mF) {
        kB = mF;
        this["invalidate"]();
      },
      setMinVisibleFontSize: function (mG) {
        this[b("0x225")] = mG;
      },
      getMinVisibleFontSize: function () {
        return this[b("0x225")];
      },
      minVisibleFontSize: 0x0,
    };
    function kn(mH, mI) {
      if (mI && mI[b("0x351")]) {
        var mK = (mH[b("0x2bf")] ? mH[b("0x2bf")] : 0x1) / mI[b("0x351")];
        mK += 0x1 / mI[b("0x351")];
      } else {
        var mK = 0x1;
      }
      if (mH["getRepaintBounds"])
        return mH[b("0x2ea")]()[b("0x11a")](-mK, -mK, mK, mK);
      else if (mH[b("0xa0")])
        return mH["getBounds"]()[b("0x11a")](-mK, -mK, mK, mK);
      else return null;
    }
    function ko(mL, mM) {
      var mN = mL[b("0x220")];
      if (mN === undefined) mN = Number["MAX_VALUE"];
      var mO = mM[b("0x220")];
      if (mO === undefined) mO = Number[b("0x28b")];
      if (mN < mO) return -0x1;
      if (mN > mO) return 0x1;
      return 0x0;
    }
    var kp, kq;
    function kr(mP) {
      if (!ks && new Date()[b("0x28c")]() - kp > 0x1f40) {
        ks = MindFusion["Diagramming"]["Diagram"];
      }
      if (!ks) return;
      if (mP["req"] != undefined) kG = mP[b("0x16b")];
      if (kG(mP)) return;
      kt = kl[b("0x1e6")](undefined, kj[b("0x1d7")]["tm"]);
      ku = kt == 0x0 ? "" : ks["ns"];
      var mQ = new kj["Rect"](0xa, 0xa, null, null);
      var mR = new kj[b("0x1d0")](ku + kt, mQ);
      mR[b("0xfc")] = "#FC1010";
      mR["font"] = new kj["Font"](b("0x2da"), 0xc);
      mR["ignoreTransform"] = !![];
      mR[b("0x297")](mP["context"]);
    }
    var ks = null,
      kt = null,
      ku;
    var kv = new Date(0x7e4, 0x8, 0x1);
    var kw,
      kx,
      ky = ![],
      kz = ![],
      kA = !![];
    var kB = null;
    var kC = function () {
      return String[b("0x162")][b("0x1e6")](undefined, [
        0x4d,
        0x69,
        0x6e,
        0x64,
        0x46,
        0x75,
        0x73,
        0x69,
        0x6f,
        0x6e,
        0x2e,
        0x44,
        0x69,
        0x61,
        0x67,
        0x72,
        0x61,
        0x6d,
        0x6d,
        0x69,
        0x6e,
        0x67,
        0x20,
        0x6c,
        0x69,
        0x63,
        0x65,
        0x6e,
        0x73,
        0x65,
        0x64,
        0x20,
        0x74,
        0x6f,
        0x20,
      ]);
    };
    var kD = function (mS) {
      return String[b("0x162")][b("0x1e6")](null, new Uint16Array(mS));
    };
    var kE = function (mT) {
      var mU = new ArrayBuffer(mT[b("0x39d")] * 0x2);
      var mV = new Uint16Array(mU);
      for (var mW = 0x0, mX = mT[b("0x39d")]; mW < mX; mW++) {
        mV[mW] = mT[b("0x1e4")](mW);
      }
      return mU;
    };
    var kF = function (mY) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/[
        b("0xa5")
      ](mY);
    };
    function kG(mZ) {
      var n0 = function () {
        var n5 = String["fromCharCode"][b("0x1e6")](undefined, [
          0x5a,
          0x6b,
          0x59,
          0x6c,
          0x4d,
          0x55,
          0x5a,
          0x57,
          0x57,
          0x45,
          0x51,
          0x6c,
          0x4d,
          0x55,
          0x59,
          0x6c,
          0x4d,
          0x44,
          0x63,
          0x6c,
          0x4d,
          0x55,
          0x5a,
          0x51,
          0x56,
          0x46,
          0x4e,
          0x5a,
          0x4a,
          0x54,
          0x56,
          0x43,
          0x53,
          0x45,
          0x35,
          0x55,
          0x55,
          0x6c,
          0x4d,
          0x6c,
          0x4d,
          0x54,
          0x4e,
          0x59,
          0x53,
          0x43,
          0x55,
          0x77,
          0x4e,
          0x6e,
          0x42,
          0x55,
          0x55,
          0x31,
          0x6b,
          0x6c,
          0x4e,
          0x30,
          0x4a,
          0x49,
          0x54,
          0x6c,
          0x52,
          0x53,
          0x55,
          0x79,
          0x55,
          0x78,
          0x52,
          0x69,
          0x55,
          0x78,
          0x4d,
          0x53,
          0x55,
          0x78,
          0x52,
          0x6b,
          0x73,
          0x6c,
          0x4e,
          0x55,
          0x4e,
          0x52,
          0x53,
          0x46,
          0x67,
          0x6c,
          0x4d,
          0x55,
          0x59,
          0x6c,
          0x4d,
          0x44,
          0x63,
          0x6c,
          0x4d,
          0x55,
          0x59,
          0x6c,
          0x4d,
          0x45,
          0x59,
          0x6c,
          0x4d,
          0x44,
          0x51,
          0x6c,
          0x4d,
          0x44,
          0x51,
          0x6c,
          0x4d,
          0x44,
          0x51,
          0x6c,
          0x4d,
          0x54,
          0x41,
          0x6c,
          0x4d,
          0x45,
          0x4d,
          0x6c,
          0x4d,
          0x45,
          0x59,
          0x6c,
          0x4d,
          0x54,
          0x41,
          0x6c,
          0x4d,
          0x45,
          0x55,
          0x6c,
          0x4d,
          0x45,
          0x4e,
          0x70,
          0x4a,
          0x54,
          0x42,
          0x47,
          0x4a,
          0x54,
          0x42,
          0x47,
          0x4a,
          0x54,
          0x41,
          0x33,
          0x4a,
          0x54,
          0x42,
          0x45,
          0x4a,
          0x54,
          0x42,
          0x45,
          0x4a,
          0x54,
          0x41,
          0x33,
          0x4a,
          0x54,
          0x42,
          0x45,
          0x4a,
          0x54,
          0x42,
          0x45,
          0x4a,
          0x54,
          0x45,
          0x7a,
          0x4a,
          0x54,
          0x42,
          0x45,
          0x4a,
          0x54,
          0x42,
          0x45,
          0x4a,
          0x54,
          0x42,
          0x45,
          0x5a,
          0x79,
          0x55,
          0x78,
          0x52,
          0x69,
          0x55,
          0x30,
          0x4d,
          0x43,
          0x55,
          0x78,
          0x4d,
          0x55,
          0x59,
          0x6c,
          0x4d,
          0x55,
          0x5a,
          0x57,
          0x57,
          0x45,
          0x51,
          0x6c,
          0x4d,
          0x55,
          0x59,
          0x6c,
          0x4d,
          0x44,
          0x63,
          0x6c,
          0x4d,
          0x55,
          0x5a,
          0x51,
          0x56,
          0x46,
          0x4e,
          0x5a,
          0x4a,
          0x54,
          0x56,
          0x43,
          0x53,
          0x45,
          0x35,
          0x55,
          0x55,
          0x6c,
          0x4d,
          0x6c,
          0x4d,
          0x54,
          0x4d,
          0x6c,
          0x4e,
          0x55,
          0x56,
          0x53,
          0x4a,
          0x54,
          0x41,
          0x32,
          0x63,
          0x46,
          0x52,
          0x54,
          0x57,
          0x53,
          0x55,
          0x33,
          0x51,
          0x6b,
          0x68,
          0x4f,
          0x56,
          0x46,
          0x4a,
          0x54,
          0x4a,
          0x54,
          0x46,
          0x47,
          0x4a,
          0x54,
          0x45,
          0x78,
          0x4a,
          0x54,
          0x46,
          0x47,
          0x53,
          0x79,
          0x55,
          0x31,
          0x51,
          0x31,
          0x46,
          0x49,
          0x57,
          0x43,
          0x55,
          0x78,
          0x52,
          0x69,
          0x55,
          0x77,
          0x4e,
          0x79,
          0x55,
          0x78,
          0x52,
          0x69,
          0x55,
          0x77,
          0x52,
          0x69,
          0x55,
          0x77,
          0x4e,
          0x43,
          0x55,
          0x77,
          0x4e,
          0x43,
          0x55,
          0x77,
          0x4e,
          0x43,
          0x55,
          0x78,
          0x4d,
          0x43,
          0x55,
          0x77,
          0x51,
          0x79,
          0x55,
          0x77,
          0x52,
          0x69,
          0x55,
          0x78,
          0x4d,
          0x43,
          0x55,
          0x77,
          0x52,
          0x53,
          0x55,
          0x77,
          0x51,
          0x32,
          0x6b,
          0x6c,
          0x4d,
          0x45,
          0x59,
          0x6c,
          0x4d,
          0x45,
          0x59,
          0x6c,
          0x4d,
          0x44,
          0x63,
          0x6c,
          0x4d,
          0x45,
          0x51,
          0x6c,
          0x4d,
          0x45,
          0x51,
          0x6c,
          0x4d,
          0x44,
          0x63,
          0x6c,
          0x4d,
          0x45,
          0x51,
          0x6c,
          0x4d,
          0x45,
          0x51,
          0x6c,
          0x4d,
          0x54,
          0x4d,
          0x6c,
          0x4d,
          0x45,
          0x51,
          0x6c,
          0x4d,
          0x45,
          0x51,
          0x6c,
          0x4d,
          0x45,
          0x52,
          0x6e,
          0x4a,
          0x54,
          0x46,
          0x47,
          0x4a,
          0x54,
          0x51,
          0x77,
          0x4a,
          0x54,
          0x45,
          0x78,
          0x52,
          0x69,
          0x55,
          0x78,
          0x52,
          0x6c,
          0x5a,
          0x59,
          0x52,
          0x43,
          0x55,
          0x78,
          0x52,
          0x69,
          0x55,
          0x77,
          0x4e,
          0x79,
          0x55,
          0x78,
          0x52,
          0x69,
          0x55,
          0x31,
          0x52,
          0x56,
          0x46,
          0x55,
          0x57,
          0x46,
          0x4e,
          0x4a,
          0x54,
          0x69,
          0x55,
          0x31,
          0x51,
          0x30,
          0x39,
          0x59,
          0x4a,
          0x54,
          0x56,
          0x44,
          0x4a,
          0x54,
          0x45,
          0x7a,
          0x57,
          0x45,
          0x67,
          0x6c,
          0x4d,
          0x44,
          0x5a,
          0x77,
          0x56,
          0x46,
          0x4e,
          0x5a,
          0x4a,
          0x54,
          0x64,
          0x43,
          0x53,
          0x45,
          0x35,
          0x55,
          0x55,
          0x6c,
          0x4d,
          0x6c,
          0x4d,
          0x55,
          0x59,
          0x6c,
          0x4d,
          0x54,
          0x45,
          0x6c,
          0x4d,
          0x55,
          0x5a,
          0x4c,
          0x4a,
          0x54,
          0x56,
          0x44,
          0x55,
          0x55,
          0x68,
          0x59,
          0x4a,
          0x54,
          0x46,
          0x47,
          0x4a,
          0x54,
          0x41,
          0x33,
          0x4a,
          0x54,
          0x46,
          0x47,
          0x4a,
          0x54,
          0x42,
          0x47,
          0x4a,
          0x54,
          0x41,
          0x30,
          0x4a,
          0x54,
          0x41,
          0x30,
          0x4a,
          0x54,
          0x41,
          0x30,
          0x4a,
          0x54,
          0x45,
          0x77,
          0x4a,
          0x54,
          0x42,
          0x44,
          0x4a,
          0x54,
          0x42,
          0x47,
          0x4a,
          0x54,
          0x45,
          0x77,
          0x4a,
          0x54,
          0x42,
          0x46,
          0x4a,
          0x54,
          0x42,
          0x44,
          0x61,
          0x53,
          0x55,
          0x77,
          0x52,
          0x69,
          0x55,
          0x77,
          0x52,
          0x69,
          0x55,
          0x77,
          0x4e,
          0x79,
          0x55,
          0x77,
          0x52,
          0x43,
          0x55,
          0x77,
          0x52,
          0x43,
          0x55,
          0x77,
          0x4e,
          0x79,
          0x55,
          0x77,
          0x52,
          0x43,
          0x55,
          0x77,
          0x52,
          0x43,
          0x55,
          0x78,
          0x4d,
          0x79,
          0x55,
          0x77,
          0x52,
          0x43,
          0x55,
          0x77,
          0x52,
          0x43,
          0x55,
          0x77,
          0x52,
          0x47,
          0x63,
          0x6c,
          0x4d,
          0x55,
          0x59,
          0x6c,
          0x4e,
          0x44,
          0x41,
          0x6c,
          0x4e,
          0x6a,
          0x41,
          0x3d,
        ]);
        if (!kF(n5)) return ![];
        var n6 = new Uint16Array(kE(decodeURIComponent(atob(n5)))),
          n7 = new Uint16Array(n6[b("0x39d")]);
        for (var n9 = 0x0; n9 < n6[b("0x39d")]; n9++) {
          var na = n6[n9];
          n7[n9] = ~(na ^ ~"37") ^ 0x18;
        }
        var nb = kD(n7[b("0x2b8")]);
        var nc = JSON[b("0x381")](nb);
        try {
          if (nc && nc[b("0x39d")]) {
            for (var n9 = 0x0; n9 < nc[b("0x39d")]; n9++) {
              var nd = nc[n9]["key"][b("0x3bc")](";");
              if (
                nd[0x0] == window[b("0x3c8")]["hostname"] &&
                kv["getTime"]() <= new Date(nc[n9][b("0x99")])[b("0x28c")]()
              ) {
                kw = !![];
                console["log"]("" + kC() + nd[0x1] + ".");
                setTimeout(function () {
                  mZ["invalidate"]();
                }, 0xc8);
                return !![];
              }
            }
          }
        } catch (ne) {
          return ![];
        }
        return ![];
      };
      var n1 = function (nf) {
        var ng = new Uint16Array(kE(decodeURIComponent(atob(nf)))),
          nh = new Uint16Array(ng[b("0x39d")]);
        for (var ni = 0x0; ni < ng[b("0x39d")]; ni++) {
          var nj = ng[ni];
          nh[ni] = ~(nj ^ ~"73") ^ 0x2a;
        }
        var nk = kD(nh[b("0x2b8")]);
        var nl = ![],
          nm = ![];
        var nn = "",
          no = "";
        for (var np = 0x0; np < nk[b("0x39d")]; np++) {
          if (!nl) {
            if (nk[np] == ".") {
              nl = !![];
              continue;
            }
            nn += nk[np];
            continue;
          }
          if (!nm) {
            if (nk[np] == ".") {
              nm = !![];
              continue;
            }
            no += nk[np];
            continue;
          }
          break;
        }
        var nq = "",
          nr = "";
        nk = nk[b("0x167")](nn[b("0x39d")] + no[b("0x39d")] + 0x2);
        nn = parseInt(nn);
        no = parseInt(no);
        for (var nu = 0x0; nu < nn; ++nu) {
          if (nu <= no) nq += nk[nu * 0x2];
          else nq += nk[no * 0x2 + (nu - no)];
        }
        for (var nu = 0x0; nu < no; ++nu) {
          if (nu < nn) nr += nk[0x1 + nu * 0x2];
          else nr += nk[nn * 0x2 + (nu - nn)];
        }
        var nv = [nq, nr];
        var nw =
          nv[0x0][b("0x167")](0x2, 0x4) +
          "-" +
          nv[0x0]["substr"](0x6, 0x2) +
          "-" +
          nv[0x0][b("0x167")](0x8, 0x2);
        kw =
          nv[0x0][b("0x167")](0x11)["match"](b("0x69")) &&
          kv[b("0x28c")]() <= new Date(nw)["getTime"]();
        if (kw) console[b("0xda")]("" + kC() + nv[0x1] + ".");
        setTimeout(function () {
          mZ[b("0x369")]();
        }, 0xc8);
      };
      if (!ky && !mZ["suppressPaint"]) {
        ky = !![];
        if (n0() === !![]) {
          kz = !![];
          return !![];
        }
        if (kB == null) {
          kq = new Date()[b("0x28c")]();
          var n2 = String[b("0x162")][b("0x1e6")](
            undefined,
            kj[b("0x1d7")]["tm10"]
          );
          if (typeof isPack !== "undefined" && isPack)
            n2 = String[b("0x162")][b("0x1e6")](
              undefined,
              kj["Gradient"][b("0x48")]
            );
          var n3 = new XMLHttpRequest();
          try {
            var n4 = encodeURI(
              mZ["licenseLocation"] != "" ? mZ[b("0x1f")] : n2
            );
            n3["open"](b("0x6b"), n4);
          } catch (nx) {
            return;
          }
          if (n3[b("0x250")]) n3[b("0x250")](b("0x246"));
          n3["onload"] = function (ny) {
            if (n3["status"] === 0xc8) {
              var nz = n3[b("0x1d8")];
              if (nz[b("0x39d")] == 0x0) return;
              try {
                if (kF(nz)) n1(nz);
              } catch (nA) {}
            } else {
            }
          };
          n3[b("0x277")] = function (nB) {};
          n3[b("0x24d")]();
        } else {
          kz = !![];
          try {
            if (kF(kB)) n1(kB);
          } catch (nC) {}
        }
      }
      if (kz || (!kx && new Date()[b("0x28c")]() - kq > 0x1f40)) kx = !![];
      if (!kx) return !![];
      if (kw) return !![];
      if (kA) {
        kA = ![];
        setTimeout(function () {
          mZ[b("0x369")]();
        }, 0xc8);
      }
      return ![];
    }
    var kH = 0x0;
    MindFusion[b("0x230")](km, b("0x140"), "Control");
  })(MindFusion[b("0x52")]);
  MindFusion[b("0x52")][b("0x33f")][b("0x295")] = function (nD) {
    return mflayer["createControl"](
      MindFusion[b("0x52")]["Canvas"],
      null,
      null,
      null,
      nD
    );
  };
  (function (nE) {
    var nF = (nE[b("0xeb")] = function (nG, nH, nI) {
      if (nH == null) nH = this["symmetricPoint"](nG[0x1], nG[0x0]);
      if (nI == null)
        nI = this[b("0x1f3")](nG[nG["length"] - 0x2], nG[nG[b("0x39d")] - 0x1]);
      this[b("0x30b")] = nG["slice"]();
      this[b("0x30b")][b("0xfb")](nH);
      this[b("0x30b")]["push"](nI);
      this[b("0x30b")] = this["CatmullRomToBezier"](this[b("0x30b")], 0.5);
    });
    nF["prototype"] = {
      pen: b("0x325"),
      strokeThickness: 0x0,
      symmetricPoint: function (nJ, nK) {
        var nL = new nE[b("0x288")](0x0, 0x0);
        var nM = nJ["x"] - nK["x"];
        var nN = nJ["y"] - nK["y"];
        nL["x"] = nK["x"] - nM;
        nL["y"] = nK["y"] - nN;
        return nL;
      },
      CatmullRomToBezier: function (nO, nP) {
        var nQ = nE[b("0x267")];
        var nR = [];
        var nS = 0.00001;
        var nT = 0x1;
        var nU = nO["length"] - 0x2;
        for (var nV = nT; nV < nU; ++nV) {
          var nW = (nV + 0x1) % nO["length"];
          var nX = (nW + 0x1) % nO[b("0x39d")];
          var nY = nV - 0x1 < 0x0 ? nO[b("0x39d")] - 0x1 : nV - 0x1;
          var nZ = nO[nY];
          var o0 = nO[nV];
          var o1 = nO[nW];
          var o2 = nO[nX];
          var o3 = nQ["sub"](o0, nZ)[b("0x39d")]();
          var o4 = nQ[b("0x2a7")](o1, o0)[b("0x39d")]();
          var o5 = nQ[b("0x2a7")](o2, o1)[b("0x39d")]();
          var o6, o7;
          if (Math["abs"](o3) < nS) {
            o6 = o0;
          } else {
            o6 = nQ[b("0x1ee")](o1, Math[b("0x1fe")](o3, 0x2 * nP));
            o6 = nQ[b("0x2a7")](
              o6,
              nQ[b("0x1ee")](nZ, Math[b("0x1fe")](o4, 0x2 * nP))
            );
            o6 = nQ[b("0xba")](
              o6,
              nQ["multiplyScalar"](
                o0,
                0x2 * Math[b("0x1fe")](o3, 0x2 * nP) +
                  0x3 * Math[b("0x1fe")](o3, nP) * Math["pow"](o4, nP) +
                  Math[b("0x1fe")](o4, 0x2 * nP)
              )
            );
            o6 = nQ[b("0x1ee")](
              o6,
              0x1 /
                (0x3 *
                  Math[b("0x1fe")](o3, nP) *
                  (Math["pow"](o3, nP) + Math[b("0x1fe")](o4, nP)))
            )["toPoint"]();
          }
          if (Math[b("0x10c")](o5) < nS) {
            o7 = o1;
          } else {
            o7 = nQ["multiplyScalar"](o0, Math["pow"](o5, 0x2 * nP));
            o7 = nQ[b("0x2a7")](
              o7,
              nQ[b("0x1ee")](o2, Math[b("0x1fe")](o4, 0x2 * nP))
            );
            o7 = nQ[b("0xba")](
              o7,
              nQ[b("0x1ee")](
                o1,
                0x2 * Math["pow"](o5, 0x2 * nP) +
                  0x3 * Math[b("0x1fe")](o5, nP) * Math[b("0x1fe")](o4, nP) +
                  Math[b("0x1fe")](o4, 0x2 * nP)
              )
            );
            o7 = nQ[b("0x1ee")](
              o7,
              0x1 /
                (0x3 *
                  Math[b("0x1fe")](o5, nP) *
                  (Math["pow"](o5, nP) + Math[b("0x1fe")](o4, nP)))
            )[b("0xaf")]();
          }
          if (nV == nT) nR[b("0x11e")](o0);
          nR[b("0x11e")](o6);
          nR["push"](o7);
          nR["push"](o1);
        }
        return nR;
      },
      draw: function (o8, o9) {
        if (this[b("0x1e5")] && o9 != ![]) {
          o8[b("0x2bd")]();
          this["shadow"][b("0x1e6")](o8);
        }
        o8["strokeStyle"] = this[b("0xfc")];
        o8["lineWidth"] =
          (this[b("0x2bf")] ? this[b("0x2bf")] : 0x1) / o8["_mf_scale"];
        nE[b("0x229")][b("0x1e6")](o8, this[b("0x190")]);
        o8[b("0x54")]();
        var oa = this[b("0x30b")];
        o8[b("0x2b2")](oa[0x0]["x"], oa[0x0]["y"]);
        for (var ob = 0x0; ob < oa[b("0x39d")] - 0x1; ob += 0x3) {
          o8[b("0x15a")](
            oa[ob + 0x1]["x"],
            oa[ob + 0x1]["y"],
            oa[ob + 0x2]["x"],
            oa[ob + 0x2]["y"],
            oa[ob + 0x3]["x"],
            oa[ob + 0x3]["y"]
          );
        }
        o8["stroke"]();
        if (this["shadow"] && o9 != ![]) o8["restore"]();
      },
      drawShadow: function (oc) {
        if (this["shadow"]) {
          oc[b("0x2bd")]();
          this["shadow"][b("0x1e6")](oc);
          oc[b("0x25c")] =
            (this[b("0x2bf")] ? this[b("0x2bf")] : 0x1) / oc[b("0x351")];
          oc[b("0x54")]();
          var od = this["splinePoints"];
          oc[b("0x2b2")](od[0x0]["x"], od[0x0]["y"]);
          for (var oe = 0x0; oe < od["length"] - 0x1; oe += 0x3) {
            oc[b("0x15a")](
              od[oe + 0x1]["x"],
              od[oe + 0x1]["y"],
              od[oe + 0x2]["x"],
              od[oe + 0x2]["y"],
              od[oe + 0x3]["x"],
              od[oe + 0x3]["y"]
            );
          }
          oc[b("0x7a")] = this[b("0x1e5")][b("0x1a1")];
          oc["stroke"]();
          oc[b("0x2a")]();
        }
      },
      addToContext: function (of) {
        of[b("0x54")]();
        var og = this["splinePoints"];
        of[b("0x2b2")](og[0x0]["x"], og[0x0]["y"]);
        for (var oh = 0x0; oh < og["length"] - 0x1; oh += 0x3) {
          of[b("0x15a")](
            og[oh + 0x1]["x"],
            og[oh + 0x1]["y"],
            og[oh + 0x2]["x"],
            og[oh + 0x2]["y"],
            og[oh + 0x3]["x"],
            og[oh + 0x3]["y"]
          );
        }
      },
      createSvgElement: function (oi) {
        var oj = oi[b("0x321")](b("0x391"), b("0x284"));
        var ok = this[b("0x30b")];
        var ol = "M" + ok[0x0]["x"] + "," + ok[0x0]["y"];
        for (var om = 0x0; om < ok[b("0x39d")] - 0x1; om += 0x3) {
          ol +=
            "\x20C" +
            ok[om + 0x1]["x"] +
            "," +
            ok[om + 0x1]["y"] +
            "," +
            ok[om + 0x2]["x"] +
            "," +
            ok[om + 0x2]["y"] +
            "," +
            ok[om + 0x3]["x"] +
            "," +
            ok[om + 0x3]["y"];
        }
        oj[b("0x2d")]("d", ol);
        oj[b("0x2d")](b("0x27c"), b("0xc"));
        oj[b("0x2d")]("stroke", "black");
        oj["setAttribute"](
          b("0x73"),
          this[b("0x2bf")] ? this[b("0x2bf")] / 0x4 : 0x1 / 0x4
        );
        return oj;
      },
    };
    MindFusion[b("0x230")](nF, b("0x2e3"));
  })(MindFusion["Drawing"]);
  (function (oo) {
    var op = (oo[b("0xb8")] = function () {});
    op["prototype"] = {
      arrange: function (oq, or, os, ot) {
        this["x"] = oq;
        this["y"] = or;
        this[b("0x2f6")] = os;
        this[b("0x28")] = ot;
      },
      effectiveMeasuredWidth: function () {
        return this[b("0xde")] != null ? this["width"] : this[b("0x2ac")];
      },
      effectiveMeasuredHeight: function () {
        return this["height"] != null ? this[b("0x338")] : this[b("0xb2")];
      },
      add: function (ou, ov) {
        if (ou == null) return ov;
        if (ov == null) return ou;
        return ou + ov;
      },
      max: function (ow, ox) {
        if (ow == null) return ox;
        if (ox == null) return ow;
        return Math["max"](ow, ox);
      },
      hitTest: function (oy) {
        if (
          oy["x"] < this["x"] ||
          oy["x"] > this["x"] + this[b("0x2f6")] ||
          oy["y"] < this["y"] ||
          oy["y"] > this["y"] + this[b("0x28")]
        ) {
          return null;
        }
        return this;
      },
      createSvgElement: function (oz) {
        return null;
      },
      visibility: oo[b("0x367")][b("0x2e8")],
    };
    MindFusion[b("0x230")](op, b("0x2f5"));
  })(MindFusion[b("0x52")]);
  (function (oA) {
    var oB = (oA[b("0x30e")] = function (oC, oD) {
      mflayer[b("0x106")](oB, this);
      this["x"] = oC;
      this["y"] = oD;
      this["content"] = [];
    });
    oB["prototype"] = {
      draw: function (oE, oF, oG) {
        var oH = oE[b("0x1a3")];
        if (this[b("0x243")]) {
          oE[b("0x1a3")] = this[b("0x243")];
          if (this["item"][b("0xe9")]) {
            this[b("0x243")]["updateCanvasElements"]();
          }
        }
        if (this[b("0x326")]) {
          this[b("0x326")][b("0x266")]();
          this[b("0x326")] = null;
        }
        if (this[b("0x354")]) {
          if (oF != ![]) {
            if (
              this[b("0x333")] &&
              this[b("0x333")][b("0x243")] &&
              this[b("0x333")][b("0x243")]["root"] &&
              this[b("0x333")][b("0x243")][b("0x1b5")][b("0x354")]
            ) {
              this[b("0x354")][b("0xab")] = this[b("0x333")]["item"][
                b("0x13b")
              ]();
              this[b("0x354")]["shadow"] = this[b("0x333")][b("0x243")][
                b("0x18a")
              ]();
              this[b("0x354")][b("0x379")](oE);
            }
          }
          oE[b("0x2bd")]();
          if (
            mflayer[b("0x1ac")](
              MindFusion[b("0x52")][b("0x5")],
              this[b("0x354")]
            )
          ) {
            oE[b("0x54")]();
            this[b("0x354")][b("0x26e")](oE);
            if (this[b("0x1b7")]) oE[b("0x2b9")]();
          } else if (
            mflayer[b("0x1ac")](
              MindFusion[b("0x52")][b("0x59")],
              this["clipBeforeTransform"]
            )
          ) {
            this["clipBeforeTransform"][b("0xec")](oE, ![]);
            if (this["clipToOutline"]) oE[b("0x2b9")]();
          }
        }
        if (this["x"] || this["y"] || this["clip"] || this[b("0xc5")]) {
          oE[b("0x2bd")]();
          var oI;
          if (this["x"] !== undefined) {
            oE[b("0x115")](this["x"], this["y"]);
            oI = oE[b("0xd0")]["clone"]();
            oE["_mf_transform"][b("0x115")](this["x"], this["y"]);
          }
          if (this[b("0xc5")]) {
            oE["save"]();
            oE["translate"](this[b("0x268")]["x"], this["pivot"]["y"]);
            oE[b("0x47")]((this[b("0xc5")] * Math["PI"]) / 0xb4);
            oE[b("0x115")](-this[b("0x268")]["x"], -this[b("0x268")]["y"]);
          }
          if (this[b("0x2b9")]) {
            if (
              mflayer["isInstanceOfType"](
                MindFusion["Drawing"]["Rect"],
                this["clip"]
              )
            ) {
              oE[b("0x54")]();
              this[b("0x2b9")][b("0x26e")](oE);
              oE["clip"]();
            } else if (
              mflayer[b("0x1ac")](
                MindFusion["Drawing"]["Path"],
                this[b("0x2b9")]
              )
            ) {
              this[b("0x2b9")][b("0xec")](oE, ![]);
              oE[b("0x2b9")]();
            }
          }
          this[b("0x101")](oE, oF, oG);
          if (this[b("0xc5")]) oE["restore"]();
          if (this[b("0x257")]) this[b("0x257")](oE, oF, oG);
          if (oI) oE[b("0xd0")] = oI;
          oE[b("0x2a")]();
        } else {
          this[b("0x101")](oE, oF, oG);
          if (this[b("0x257")]) this[b("0x257")](oE, oF, oG);
        }
        if (this[b("0x354")]) oE[b("0x2a")]();
        oE["_mf_itemRef"] = oH;
      },
      drawChildren: function (oJ, oK, oL) {
        for (var oM = 0x0; oM < this[b("0x2f2")][b("0x39d")]; oM++) {
          var oN = this[b("0x2f2")][oM];
          if (oN[b("0x2cb")]) oN[b("0x2cb")](this);
          var oO = oN[b("0x1eb")];
          if (typeof oO == b("0x33e")) oO = oA[b("0x367")][b("0x2e8")];
          if (oO == oA[b("0x367")]["Visible"]) {
            if (oL && oN[b("0x379")]) oN[b("0x379")](oJ);
            else oN[b("0x297")](oJ, oK);
          }
        }
      },
      removedFromDiagram: function () {
        for (var oP = 0x0; oP < this[b("0x2f2")]["length"]; oP++) {
          var oQ = this[b("0x2f2")][oP];
          if (oQ && oQ[b("0x9e")]) oQ["removedFromDiagram"]();
        }
      },
      createSvgElement: function (oR) {
        var oS = oR[b("0x321")](b("0x391"), "g");
        if (this["x"] || this["y"] || this[b("0xc5")]) {
          var oT = "";
          if (this["x"] || this["y"])
            oT = b("0x18") + this["x"] + "\x20" + this["y"] + ")";
          if (this[b("0xc5")])
            oT +=
              b("0x27a") +
              this[b("0xc5")] +
              "\x20" +
              this[b("0x268")]["x"] +
              "\x20" +
              this[b("0x268")]["y"] +
              ")";
          oS[b("0x2d")](b("0x3aa"), oT);
        }
        if (this[b("0x2b9")]) {
          var oU = b("0x2b9") + ++oR[b("0xc1")];
          var oV = oR[b("0x321")]("http://www.w3.org/2000/svg", b("0x2c0"));
          oV["setAttribute"]("id", oU);
          oR[b("0xd4")][b("0x5a")](oV);
          var oW = this[b("0x2b9")][b("0x12d")](oR);
          oV[b("0x5a")](oW);
          oS["setAttribute"](b("0x188"), b("0x1c3") + oU + ")");
        }
        var oX = !![];
        for (var oY = 0x0; oY < this[b("0x2f2")][b("0x39d")]; oY++) {
          if (this["content"][oY]["createSvgElement"]) {
            var oZ = this[b("0x2f2")][oY][b("0x12d")](oR);
            if (oZ != null) {
              oS["appendChild"](oZ);
              oX = ![];
            }
          }
        }
        if (oX) return null;
        return oS;
      },
      setParentComponent: function (p0) {
        this[b("0x333")] = p0;
      },
      invalidate: function (p1) {
        if (this[b("0x243")]) this[b("0x243")][b("0x369")](![], p1);
        if (this[b("0x333")] && this["parentComponent"][b("0x369")])
          this["parentComponent"][b("0x369")](p1);
      },
    };
    MindFusion[b("0x230")](oB, b("0x3c"), oA[b("0xb8")]);
  })(MindFusion[b("0x52")]);
  MindFusion["Drawing"][b("0x2f4")] = function (p2, p3, p4) {
    this["p"] = p2;
    this["a"] = p3;
    this["b"] = p4;
  };
  MindFusion[b("0x52")]["DistanceToSegment"]["prototype"] = {
    distanceToSegment: function () {
      return Math["sqrt"](this[b("0xdb")]());
    },
    distanceToSegmentSquared: function () {
      if (this["a"] === this["b"]) return this[b("0xf3")](this["p"], this["a"]);
      var p5 = this["b"]["x"] - this["a"]["x"];
      var p6 = this["b"]["y"] - this["a"]["y"];
      var p7 =
        (this["p"]["x"] - this["a"]["x"]) * p5 +
        (this["p"]["y"] - this["a"]["y"]) * p6;
      if (p7 < 0x0) return this[b("0xf3")](this["a"], this["p"]);
      p7 =
        (this["b"]["x"] - this["p"]["x"]) * p5 +
        (this["b"]["y"] - this["p"]["y"]) * p6;
      if (p7 < 0x0) return this[b("0xf3")](this["b"], this["p"]);
      return this[b("0x50")](this["p"], this["a"], this["b"]);
    },
    distanceSq: function (p8, p9) {
      return (
        (p8["x"] - p9["x"]) * (p8["x"] - p9["x"]) +
        (p8["y"] - p9["y"]) * (p8["y"] - p9["y"])
      );
    },
    distanceToLineSquared: function (pa, pb, pc) {
      if (pb === pc) return this[b("0xf3")](pa, pb);
      var pd = pc["x"] - pb["x"];
      var pe = pc["y"] - pb["y"];
      var pf = (pa["y"] - pb["y"]) * pd - (pa["x"] - pb["x"]) * pe;
      return (pf * pf) / (pd * pd + pe * pe);
    },
  };
  MindFusion["registerClass"](MindFusion[b("0x52")][b("0x2f4")], b("0x1b2"));
  (function (pg) {
    var ph = (pg[b("0x25")] = function (pi, pj, pk, pl) {
      if (arguments[b("0x39d")] == 0x1) {
        var pm = pi;
        pi = pm["x"];
        pj = pm["y"];
        pk = pm["width"];
        pl = pm[b("0x338")];
      }
      this["x"] = pi;
      this["y"] = pj;
      this[b("0xde")] = pk;
      this[b("0x338")] = pl;
      this["transform"] = new pg[b("0x1e3")]();
    });
    ph[b("0x235")] = {
      clone: function () {
        return new ph(this["x"], this["y"], this[b("0xde")], this["height"]);
      },
      draw: function (pn) {
        pn[b("0x2bd")]();
        pn[b("0x3aa")]["apply"](pn, this[b("0x3aa")][b("0x8c")]());
        pn["fillStyle"] = MindFusion[b("0x313")][b("0x202")][b("0x3")](
          pn,
          this[b("0xab")],
          this["getBounds"]()
        );
        pn[b("0x7a")] = this[b("0xfc")];
        pn[b("0x25c")] =
          (this[b("0x2bf")] ? this["strokeThickness"] : 0x1) / pn["_mf_scale"];
        pg[b("0x229")][b("0x1e6")](pn, this[b("0x190")]);
        var po = this["x"];
        var pp = this["y"];
        var pq = this[b("0xde")];
        var pr = this["height"];
        var ps = 0.5522848,
          pt = (pq / 0x2) * ps,
          pu = (pr / 0x2) * ps,
          pv = po + pq,
          pw = pp + pr,
          px = po + pq / 0x2,
          py = pp + pr / 0x2;
        pn[b("0x54")]();
        pn[b("0x2b2")](po, py);
        pn["bezierCurveTo"](po, py - pu, px - pt, pp, px, pp);
        pn[b("0x15a")](px + pt, pp, pv, py - pu, pv, py);
        pn["bezierCurveTo"](pv, py + pu, px + pt, pw, px, pw);
        pn[b("0x15a")](px - pt, pw, po, py + pu, po, py);
        pn["closePath"]();
        pn[b("0x27c")]();
        pn[b("0x20a")]();
        pn[b("0x2a")]();
      },
      getBounds: function (pz) {
        return new MindFusion[b("0x52")]["Rect"](
          this["x"],
          this["y"],
          this[b("0xde")],
          this["height"]
        );
      },
      toString: function () {
        return (
          this["x"] +
          ",\x20" +
          this["y"] +
          ",\x20" +
          this[b("0xde")] +
          ",\x20" +
          this[b("0x338")]
        );
      },
      createSvgElement: function (pA) {
        var pB = this["x"] + this[b("0xde")] / 0x2;
        var pC = this["y"] + this[b("0x338")] / 0x2;
        var pD = this["width"] / 0x2;
        var pE = this["height"] / 0x2;
        var pF = pA[b("0x321")](b("0x391"), "ellipse");
        if (this[b("0x3aa")])
          pF[b("0x2d")]("transform", this[b("0x3aa")]["svgMatrix"]());
        pF[b("0x2d")]("cx", pB);
        pF[b("0x2d")]("cy", pC);
        pF[b("0x2d")]("rx", pD);
        pF[b("0x2d")]("ry", pE);
        return pF;
      },
      transform: null,
      pen: "black",
      brush: b("0x258"),
    };
    MindFusion[b("0x230")](ph, b("0x166"));
  })(MindFusion[b("0x52")]);
  (function (pG) {
    var pH = (pG[b("0x9b")] = function (pI, pJ, pK, pL, pM) {
      this[b("0x2db")] = pI;
      this[b("0x1c9")] = pJ;
      this["bold"] = pK;
      this["italic"] = pL;
      this["underline"] = pM;
    });
    pH["prototype"][b("0xcf")] = function (pN) {
      var pO = this[b("0x1c9")];
      if (pN) pO *= pN;
      var pP = "";
      if (this[b("0x7d")]) pP += b("0x2d8");
      if (this[b("0x37c")]) pP += b("0x156");
      pP += pO + "px\x20" + this[b("0x2db")];
      return pP;
    };
    pH["copy"] = function (pQ) {
      return new pH(
        pQ[b("0x2db")],
        pQ[b("0x1c9")],
        pQ["bold"],
        pQ["italic"],
        pQ[b("0x211")]
      );
    };
    pH["defaultFont"] = new pH(b("0x2da"), 0x3);
    MindFusion[b("0x230")](pH, "MindFusion.Drawing.Font");
  })(MindFusion[b("0x52")]);
  MindFusion[b("0x52")]["Gradient"] = function (pR, pS, pT) {
    this[b("0x104")] = pR;
    this[b("0x212")] = pS;
    this[b("0x9a")] = pT;
  };
  MindFusion["Drawing"][b("0x1d7")]["tm"] = [
    0x20,
    0x66,
    0x6f,
    0x72,
    0x20,
    0x4a,
    0x61,
    0x76,
    0x61,
    0x53,
    0x63,
    0x72,
    0x69,
    0x70,
    0x74,
    0x2c,
    0x20,
    0x74,
    0x72,
    0x69,
    0x61,
    0x6c,
    0x20,
    0x76,
    0x65,
    0x72,
    0x73,
    0x69,
    0x6f,
    0x6e,
  ];
  MindFusion[b("0x52")][b("0x1d7")][b("0x30f")] = [
    0x20,
    0x66,
    0x6f,
    0x72,
    0x20,
    0x41,
    0x53,
    0x50,
    0x2e,
    0x4e,
    0x45,
    0x54,
    0x20,
    0x4d,
    0x56,
    0x43,
    0x2c,
    0x20,
    0x74,
    0x72,
    0x69,
    0x61,
    0x6c,
    0x20,
    0x76,
    0x65,
    0x72,
    0x73,
    0x69,
    0x6f,
    0x6e,
  ];
  MindFusion[b("0x52")][b("0x1d7")][b("0x155")] = [
    0x20,
    0x66,
    0x6f,
    0x72,
    0x20,
    0x41,
    0x53,
    0x50,
    0x2e,
    0x4e,
    0x45,
    0x54,
    0x2c,
    0x20,
    0x74,
    0x72,
    0x69,
    0x61,
    0x6c,
    0x20,
    0x76,
    0x65,
    0x72,
    0x73,
    0x69,
    0x6f,
    0x6e,
  ];
  MindFusion[b("0x52")][b("0x1d7")][b("0x27d")] = [
    0x20,
    0x66,
    0x6f,
    0x72,
    0x20,
    0x41,
    0x53,
    0x50,
    0x2e,
    0x4e,
    0x45,
    0x54,
    0x2c,
    0x20,
    0x76,
    0x35,
    0x2e,
    0x34,
    0x2e,
    0x31,
    0x20,
    0x62,
    0x65,
    0x74,
    0x61,
  ];
  MindFusion[b("0x52")][b("0x1d7")][b("0x8f")] = [
    0x20,
    0x66,
    0x6f,
    0x72,
    0x20,
    0x4a,
    0x61,
    0x76,
    0x61,
    0x53,
    0x63,
    0x72,
    0x69,
    0x70,
    0x74,
    0x2c,
    0x20,
    0x56,
    0x32,
    0x2e,
    0x33,
    0x2e,
    0x31,
    0x20,
    0x62,
    0x65,
    0x74,
    0x61,
  ];
  MindFusion[b("0x52")][b("0x1d7")][b("0x3ac")] = [
    0x20,
    0x66,
    0x6f,
    0x72,
    0x20,
    0x41,
    0x53,
    0x50,
    0x2e,
    0x4e,
    0x45,
    0x54,
    0x20,
    0x4d,
    0x56,
    0x43,
    0x2c,
    0x20,
    0x31,
    0x2e,
    0x37,
    0x20,
    0x62,
    0x65,
    0x74,
    0x61,
    0x20,
  ];
  MindFusion[b("0x52")][b("0x1d7")][b("0x348")] = [
    0x64,
    0x69,
    0x61,
    0x67,
    0x72,
    0x61,
    0x6d,
    0x5f,
    0x6c,
    0x69,
    0x63,
    0x2e,
    0x74,
    0x78,
    0x74,
  ];
  MindFusion[b("0x52")][b("0x1d7")][b("0x48")] = [
    0x70,
    0x61,
    0x63,
    0x6b,
    0x5f,
    0x6c,
    0x69,
    0x63,
    0x2e,
    0x74,
    0x78,
    0x74,
  ];
  MindFusion[b("0x230")](MindFusion[b("0x52")][b("0x1d7")], b("0x34"));
  MindFusion[b("0x52")][b("0x393")] = {
    World: 0x0,
    Display: 0x1,
    Pixel: 0x2,
    Point: 0x3,
    Inch: 0x4,
    Document: 0x5,
    Millimeter: 0x6,
    WpfPoint: 0x7,
    Percent: 0x8,
    Centimeter: 0x9,
    unitsPerInch: function (pU) {
      switch (pU) {
        case this[b("0x1cf")]:
          return 0x64;
        case this["Document"]:
          return 0x12c;
        case this[b("0x3ca")]:
          return 0x1;
        case this[b("0x265")]:
          return 25.4;
        case this[b("0x288")]:
          return 0x48;
        case this[b("0x286")]:
          return 0x60;
        case this[b("0xea")]:
          return 0x60;
        case this[b("0x129")]:
          return 2.54;
      }
      return 0x1;
    },
    convert: function (pV, pW, pX) {
      return (pV * this[b("0x161")](pX)) / this[b("0x161")](pW);
    },
    getPixel: function (pY) {
      return this[b("0x36b")](0x1, this["Pixel"], pY);
    },
    getMillimeter: function (pZ) {
      return this[b("0x36b")](0x1, this[b("0x265")], pZ);
    },
    getStandardDivisions: function (q0) {
      if (q0 == this[b("0x3ca")]) return 0x8;
      return 0xa;
    },
  };
  (function (q1) {
    q1[b("0x289")] = function (q2) {
      this[b("0x387")] = ![];
      this[b("0x97")] = new Image();
      this[b("0x0")] = q2;
      this[b("0x3aa")] = new q1[b("0x1e3")]();
      this[b("0x2c0")] = new q1[b("0x59")]();
      this["type"] = this[b("0x5e")][b("0x7b")];
      this[b("0x3a7")] = ![];
      this[b("0x25e")] = q1[b("0x224")][b("0x2cc")];
    };
    q1[b("0x289")]["prototype"] = {
      getType: function () {
        return this[b("0x309")];
      },
      setBounds: function (q3, q4) {
        this[b("0x0")] = q3;
        var q5 = new q1[b("0x1e3")]();
        if (q4 !== 0x0)
          q5[b("0x279")](
            q4,
            this[b("0x0")]["x"] + this["bounds"][b("0xde")] / 0x2,
            this[b("0x0")]["y"] + this[b("0x0")][b("0x338")] / 0x2
          );
        this["rotationAngle"] = q4;
        this[b("0x3aa")] = q5;
      },
      getBounds: function () {
        return this[b("0x0")];
      },
      draw: function (q6) {
        if (this[b("0x97")] == null) return;
        if (this[b("0x97")][b("0x37f")] !== "" && this["loaded"]) {
          if (!this[b("0x2c0")][b("0x1d9")]()) {
            q6["save"]();
            this[b("0x2c0")]["addToContext"](q6);
            q6[b("0x2a")]();
            q6[b("0x2bd")]();
            q6[b("0x2b9")]();
          }
          var q7 = q1["GraphicsUnit"][b("0x272")](q6[b("0x16c")]);
          var q8 = this["svg"]
            ? {
                x: this[b("0x0")][b("0xde")] * q7,
                y: this[b("0x0")]["height"] * q7,
              }
            : {
                x: this[b("0x97")][b("0xde")] * q7,
                y: this[b("0x97")][b("0x338")] * q7,
              };
          var q9 = this[b("0xf")](this[b("0x0")], q8);
          q6[b("0x2bd")]();
          if (this[b("0x3a7")]) {
            var qa = this["applyDiagramTransform"](q6, q9);
            q6[b("0x130")](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
            var qb = new q1[b("0x1e3")]();
            if (this["rotationAngle"] !== 0x0)
              qb[b("0x279")](
                this[b("0xc5")],
                qa["x"] + qa["width"] / 0x2,
                qa["y"] + qa[b("0x338")] / 0x2
              );
            q6[b("0x3aa")][b("0x1e6")](q6, qb[b("0x8c")]());
            q6["drawImage"](
              this[b("0x97")],
              qa["x"],
              qa["y"],
              qa[b("0xde")],
              qa[b("0x338")]
            );
          } else {
            q6["transform"][b("0x1e6")](q6, this[b("0x3aa")][b("0x8c")]());
            q6["drawImage"](
              this[b("0x97")],
              q9["x"],
              q9["y"],
              q9[b("0xde")],
              q9[b("0x338")]
            );
          }
          q6[b("0x2a")]();
          if (!this[b("0x2c0")][b("0x1d9")]()) q6[b("0x2a")]();
        }
      },
      applyDiagramTransform: function (qc, qd) {
        var qe = qd["clone"]();
        var qf = qc[b("0xd0")];
        var qg = qe[b("0x1c7")]();
        qf["transformPoint"](qg);
        qe["x"] = qg["x"];
        qe["y"] = qg["y"];
        qe[b("0xde")] *= qc[b("0x351")];
        qe["height"] *= qc[b("0x351")];
        return qe;
      },
      measure: function (qh, qi) {
        var qj = q1[b("0x393")];
        var qk = q1["Component"][b("0x26d")];
        this["desiredWidth"] = this[b("0x97")]["width"]
          ? qj[b("0x36b")](this[b("0x97")]["width"], qj["Pixel"], qk[b("0xc9")])
          : null;
        this[b("0xb2")] = this["image"][b("0x338")]
          ? qj[b("0x36b")](
              this[b("0x97")][b("0x338")],
              qj[b("0x286")],
              qk[b("0xc9")]
            )
          : null;
      },
      effectiveMeasuredWidth: function () {
        return this[b("0x2ac")];
      },
      effectiveMeasuredHeight: function () {
        return this[b("0xb2")];
      },
      getImageRect: function (ql, qm) {
        var qn = this[b("0x25e")];
        var qo = 0x0,
          qp = 0x0,
          qq = qm["x"],
          qr = qm["y"],
          qs = ql;
        switch (qn) {
          case q1[b("0x224")][b("0x1ad")]:
            {
              qo = qs[b("0x20")]();
              qp = qs[b("0x1dc")]();
            }
            break;
          case q1[b("0x224")][b("0x372")]:
            {
              qo = qs[b("0x20")]();
              qp = qs[b("0x28f")]() - qr;
            }
            break;
          case q1["ImageAlign"][b("0x350")]:
            {
              qo = qs[b("0x31")]() - qq;
              qp = qs[b("0x1dc")]();
            }
            break;
          case q1[b("0x224")]["BottomRight"]:
            {
              qo = qs[b("0x31")]() - qq;
              qp = qs[b("0x28f")]() - qr;
            }
            break;
          case q1["ImageAlign"][b("0x231")]:
            {
              qo = (qs["right"]() + qs["left"]() - qq) / 0x2;
              qp = (qs[b("0x28f")]() + qs[b("0x1dc")]() - qr) / 0x2;
            }
            break;
          case q1[b("0x224")][b("0x232")]:
            {
              qo = qs["x"] + qs[b("0xde")] / 0x2 - qq / 0x2;
              qp = qs["y"];
            }
            break;
          case q1[b("0x224")][b("0x1e7")]:
            {
              qo = qs["x"] + qs[b("0xde")] / 0x2 - qq / 0x2;
              qp = qs["bottom"]() - qr;
            }
            break;
          case q1["ImageAlign"][b("0x275")]:
            {
              qo = qs["x"];
              qp = qs["y"] + qs[b("0x338")] / 0x2 - qr / 0x2;
            }
            break;
          case q1["ImageAlign"][b("0x8e")]:
            {
              qo = qs[b("0x31")]() - qq;
              qp = qs["y"] + qs[b("0x338")] / 0x2 - qr / 0x2;
            }
            break;
          case q1[b("0x224")]["Fit"]:
            {
              var qt = qs["height"];
              var qu = qs[b("0xde")];
              if (qt == 0x0) break;
              var qv = qu / qt;
              var qw = qq / qr;
              if (qv > qw) {
                qr = qt;
                qq = qw * qr;
                qp = qs[b("0x1dc")]();
                qo = (qs["right"]() + qs[b("0x20")]() - qq) / 0x2;
              } else {
                qq = qu;
                if (qw == 0x0) break;
                qr = qq / qw;
                qo = qs[b("0x20")]();
                qp = (qs[b("0x28f")]() + qs[b("0x1dc")]() - qr) / 0x2;
              }
            }
            break;
          case q1["ImageAlign"][b("0x1c5")]:
            {
              qq = qs[b("0x31")]() - qs[b("0x20")]();
              qr = qs[b("0x28f")]() - qs[b("0x1dc")]();
              qo = qs["left"]();
              qp = qs["top"]();
            }
            break;
          case q1[b("0x224")][b("0x17e")]:
            {
              qo = qs[b("0x20")]();
              qp = qs["top"]();
            }
            break;
        }
        return new q1[b("0x5")](qo, qp, qq, qr);
      },
      getDefaultProperty: function () {
        return this[b("0x97")]["src"];
      },
      setDefaultProperty: function (qx) {
        this[b("0x97")][b("0x37f")] = qx;
      },
      getDefaultValue: function () {
        return "";
      },
      createSvgElement: function (qy) {
        var qz = qy[b("0x321")](b("0x391"), b("0x97"));
        qz[b("0x247")](
          "http://www.w3.org/1999/xlink",
          b("0x269"),
          this["image"]["src"]
        );
        var qA = { x: this["image"]["width"], y: this[b("0x97")]["height"] };
        var qB = this[b("0xf")](this[b("0x0")], qA);
        qz["setAttribute"]("x", qB["x"] + "px");
        qz[b("0x2d")]("y", qB["y"] + "px");
        qz["setAttribute"]("width", qB[b("0xde")] + "px");
        qz[b("0x2d")](b("0x338"), qB["height"] + "px");
        if (this[b("0x3aa")])
          qz["setAttribute"](b("0x3aa"), this[b("0x3aa")][b("0x14")]());
        return qz;
      },
      bounds: null,
      transform: null,
      image: null,
      horizontalAlignment: q1[b("0x100")][b("0x1c5")],
      verticalAlignment: q1[b("0x100")][b("0x1c5")],
    };
    MindFusion[b("0x230")](q1[b("0x289")], "MindFusion.Drawing.Image");
  })(MindFusion[b("0x52")]);
  (function (qC) {
    var qD = (qC[b("0x18c")] = function (qE, qF, qG, qH) {
      this["x1"] = qE;
      this["y1"] = qF;
      this["x2"] = qG;
      this["y2"] = qH;
      this["transform"] = new qC[b("0x1e3")]();
      this[b("0xfc")] = b("0x325");
      this["strokeThickness"] = 0x0;
    });
    qD["prototype"] = {
      draw: function (qI, qJ) {
        if (this[b("0x2c0")] && !this[b("0x2c0")][b("0x1d9")]()) {
          this[b("0x2c0")][b("0xec")](qI);
          qI[b("0x2bd")]();
          qI[b("0x2b9")]();
        }
        if (this[b("0x1e5")] && qJ != ![]) {
          qI[b("0x2bd")]();
          this[b("0x1e5")][b("0x1e6")](qI);
        }
        qI[b("0x7a")] = this["pen"];
        qI[b("0x25c")] =
          (this["strokeThickness"] ? this["strokeThickness"] : 0x1) /
          qI[b("0x351")];
        qC[b("0x229")][b("0x1e6")](qI, this[b("0x190")]);
        qI["beginPath"]();
        qI["moveTo"](this["x1"], this["y1"]);
        qI["lineTo"](this["x2"], this["y2"]);
        qI[b("0x20a")]();
        if (this[b("0x1e5")] && qJ != ![]) qI[b("0x2a")]();
        if (this[b("0x2c0")] && !this[b("0x2c0")][b("0x1d9")]())
          qI[b("0x2a")]();
      },
      drawShadow: function (qK) {
        if (this[b("0x1e5")]) {
          qK[b("0x2bd")]();
          this[b("0x1e5")][b("0x1e6")](qK);
          qK[b("0x25c")] =
            (this[b("0x2bf")] ? this["strokeThickness"] : 0x1) /
            qK["_mf_scale"];
          qK[b("0x54")]();
          qK[b("0x2b2")](this["x1"], this["y1"]);
          qK[b("0x1f4")](this["x2"], this["y2"]);
          qK["strokeStyle"] = this[b("0x1e5")][b("0x1a1")];
          qK[b("0x20a")]();
          qK[b("0x2a")]();
        }
      },
      setBounds: function (qL, qM) {
        this["x1"] = qL["x"];
        this["y1"] = qL["y"];
        this["x2"] = qM["x"];
        this["y2"] = qM["y"];
      },
      setPen: function (qN) {
        this["pen"] = qN;
      },
      createSvgElement: function (qO) {
        var qP = qO["createElementNS"](
          "http://www.w3.org/2000/svg",
          b("0x363")
        );
        if (this[b("0x3aa")])
          qP[b("0x2d")](b("0x3aa"), this["transform"][b("0x14")]());
        qP["setAttribute"]("x1", this["x1"]);
        qP[b("0x2d")]("x2", this["x2"]);
        qP[b("0x2d")]("y1", this["y1"]);
        qP[b("0x2d")]("y2", this["y2"]);
        if (this[b("0xfc")]) qP[b("0x2d")](b("0x20a"), this[b("0xfc")]);
        qP["setAttribute"](
          "stroke-width",
          this["strokeThickness"] ? this[b("0x2bf")] / 0x4 : 0x1 / 0x4
        );
        return qP;
      },
    };
    MindFusion["registerClass"](qD, b("0x189"));
  })(MindFusion["Drawing"]);
  MindFusion["Drawing"]["Matrix"] = function () {
    this[b("0x23d")] = [];
    this[b("0x23d")][0x0] = 0x1;
    this[b("0x23d")][0x1] = 0x0;
    this[b("0x23d")][0x2] = 0x0;
    this[b("0x23d")][0x3] = 0x1;
    this[b("0x23d")][0x4] = 0x0;
    this[b("0x23d")][0x5] = 0x0;
  };
  MindFusion[b("0x52")][b("0x1e3")][b("0x165")] = function (qQ) {
    var qR = new MindFusion[b("0x52")][b("0x1e3")]();
    qR[b("0x23d")] = qQ;
    return qR;
  };
  MindFusion[b("0x52")][b("0x1e3")]["prototype"] = {
    matrix: function () {
      return this[b("0x23d")];
    },
    isIdentity: function () {
      if (
        this[b("0x23d")][0x0] == 0x1 &&
        this["elements"][0x1] == 0x0 &&
        this[b("0x23d")][0x2] == 0x0 &&
        this[b("0x23d")][0x3] == 0x1 &&
        this[b("0x23d")][0x4] == 0x0 &&
        this[b("0x23d")][0x5] == 0x0
      )
        return !![];
      return ![];
    },
    clone: function () {
      var qS = new MindFusion[b("0x52")][b("0x1e3")]();
      qS[b("0x23d")] = this[b("0x23d")][b("0x20b")](0x0);
      return qS;
    },
    translate: function (qT, qU) {
      this["elements"][0x4] +=
        this[b("0x23d")][0x0] * qT + this[b("0x23d")][0x2] * qU;
      this["elements"][0x5] +=
        this[b("0x23d")][0x1] * qT + this[b("0x23d")][0x3] * qU;
    },
    scale: function (qV, qW) {
      this[b("0x23d")][0x0] *= qV;
      this[b("0x23d")][0x1] *= qV;
      this[b("0x23d")][0x2] *= qW;
      this[b("0x23d")][0x3] *= qW;
    },
    scaleAtCenter: function (qX, qY, qZ) {
      var r0 = qZ["x"] + qZ[b("0xde")] / 0x2;
      var r1 = qZ["y"] + qZ[b("0x338")] / 0x2;
      this[b("0x115")](r0, r1);
      this[b("0x314")](qX, qY);
      this[b("0x115")](-r0, -r1);
    },
    rotate: function (r2) {
      r2 = (r2 * Math["PI"]) / 0xb4;
      var r3 = Math[b("0x2be")](r2)[b("0x30a")](0x3);
      var r4 = Math[b("0x1d3")](r2)[b("0x30a")](0x3);
      var r5 = this[b("0x23d")][0x0];
      var r6 = this["elements"][0x1];
      var r7 = this[b("0x23d")][0x2];
      var r8 = this[b("0x23d")][0x3];
      this["elements"][0x0] = r5 * r4 - r6 * r3;
      this["elements"][0x1] = r5 * r3 + r6 * r4;
      this[b("0x23d")][0x2] = r7 * r4 - r8 * r3;
      this[b("0x23d")][0x3] = r7 * r3 + r8 * r4;
    },
    rotateAt: function (r9, ra, rb) {
      if (ra instanceof MindFusion[b("0x52")][b("0x288")]) {
        rb = ra["y"];
        ra = ra["x"];
      }
      r9 = (r9 * Math["PI"]) / 0xb4;
      this[b("0x115")](ra, rb);
      var rc = Math[b("0x2be")](r9)[b("0x30a")](0x3);
      var rd = Math[b("0x1d3")](r9)["toFixed"](0x3);
      var re = this[b("0x23d")][0x0];
      var rf = this[b("0x23d")][0x1];
      var rg = this["elements"][0x2];
      var rh = this["elements"][0x3];
      this[b("0x23d")][0x0] = re * rd - rf * rc;
      this[b("0x23d")][0x1] = re * rc + rf * rd;
      this[b("0x23d")][0x2] = rg * rd - rh * rc;
      this["elements"][0x3] = rg * rc + rh * rd;
      this["translate"](-ra, -rb);
    },
    invert: function () {
      var ri =
        this[b("0x23d")][0x0] *
          (this[b("0x23d")][0x3] * 0x1 - this[b("0x23d")][0x5] * 0x0) -
        this[b("0x23d")][0x1] *
          (this[b("0x23d")][0x2] * 0x1 - 0x0 * this["elements"][0x4]) +
        0x0 *
          (this[b("0x23d")][0x2] * this[b("0x23d")][0x5] -
            this[b("0x23d")][0x3] * this[b("0x23d")][0x4]);
      var rj = 0x1 / ri;
      var rk = new MindFusion[b("0x52")][b("0x1e3")]();
      rk["elements"][0x0] =
        (this["elements"][0x3] * 0x1 - this[b("0x23d")][0x5] * 0x0) * rj;
      rk[b("0x23d")][0x1] =
        (this[b("0x23d")][0x4] * this[b("0x23d")][0x5] -
          this[b("0x23d")][0x1] * 0x1) *
        rj;
      rk[b("0x23d")][0x2] =
        (0x0 * this[b("0x23d")][0x4] - this["elements"][0x2] * 0x1) * rj;
      rk[b("0x23d")][0x3] =
        (this[b("0x23d")][0x0] * 0x1 - 0x0 * this[b("0x23d")][0x4]) * rj;
      rk[b("0x23d")][0x4] =
        (this[b("0x23d")][0x2] * this[b("0x23d")][0x5] -
          this[b("0x23d")][0x4] * this[b("0x23d")][0x3]) *
        rj;
      rk[b("0x23d")][0x5] =
        (this["elements"][0x4] * this[b("0x23d")][0x1] -
          this[b("0x23d")][0x0] * this[b("0x23d")][0x5]) *
        rj;
      return rk;
    },
    transformPoint: function (rl) {
      var rm = rl["x"];
      var rn = rl["y"];
      rl["x"] =
        this[b("0x23d")][0x0] * rm +
        this[b("0x23d")][0x2] * rn +
        this["elements"][0x4];
      rl["y"] =
        this[b("0x23d")][0x1] * rm +
        this["elements"][0x3] * rn +
        this[b("0x23d")][0x5];
    },
    transformPoints: function (ro) {
      for (var rp = 0x0; rp < ro["length"]; rp++) {
        this[b("0x10f")](ro[rp]);
      }
    },
    transformRect: function (rq) {
      var rr = rq[b("0x384")]();
      this["transformPoints"](rr);
      return MindFusion[b("0x52")][b("0x5")]["boundingRect"](rr);
    },
    svgMatrix: function () {
      var rs = "matrix(";
      for (var rt = 0x0; rt < this["elements"][b("0x39d")]; rt++) {
        rs += this[b("0x23d")][rt];
        if (rt < this["elements"][b("0x39d")] - 0x1) rs += ",";
        else rs += ")";
      }
      return rs;
    },
  };
  MindFusion[b("0x230")](MindFusion[b("0x52")][b("0x1e3")], b("0x11"));
  (function (ru) {
    var rv = (ru[b("0x59")] = function (rw) {
      this[b("0x16")] = null;
      this[b("0x13f")] = null;
      this[b("0x284")] = null;
      this[b("0xab")] = null;
      this[b("0xfc")] = null;
      this[b("0x360")] = null;
      this[b("0x1a2")] = null;
      this[b("0xbe")] = null;
      this[b("0x178")] = Number["MAX_VALUE"];
      this[b("0xa9")] = Number[b("0x28b")];
      this[b("0x3cf")] = 0x0;
      this[b("0x3c3")] = 0x0;
      this[b("0x2bf")] = 0x0;
      this["lineJoin"] = b("0x72");
      this["transform"] = new ru[b("0x1e3")]();
      this[b("0x29b")] = rw;
      this[b("0x10d")]();
      if (rw != null) {
        var rx = ["M", "L", "B", "Q", "A", "Z", "C", "E", "R", "U"];
        var ry = 0x0;
        while (ry < rx["length"]) {
          var rz = rx[ry];
          rw = rw[b("0xac")](new RegExp(rz, "g"), ":" + rz);
          ry++;
        }
        var rA = rw[b("0x3bc")](":");
        this[b("0x1b8")] = rA["filter"](String);
        this[b("0x381")]();
        this[b("0x19a")]();
      }
    });
    rv[b("0x235")] = {
      setBounds: function (rB) {
        this[b("0x0")] = rB;
        this["updatePosition"]();
      },
      init: function () {
        this["builder"] = [];
      },
      clone: function () {
        var rC = new rv();
        rC["minX"] = this[b("0x178")];
        rC["minY"] = this["minY"];
        rC["maxX"] = this["maxX"];
        rC[b("0x3c3")] = this["maxY"];
        rC[b("0x13f")] = this[b("0x13f")];
        rC["pen"] = this[b("0xfc")];
        rC[b("0xab")] = this[b("0xab")];
        rC["transform"] = new ru[b("0x1e3")]();
        return rC;
      },
      getType: function () {
        return this[b("0x5e")][b("0x7b")];
      },
      empty: function () {
        if (this[b("0x13f")][b("0x39d")] === 0x0) return !![];
        return ![];
      },
      parse: function () {
        ru[b("0xdf")][b("0x381")](this["commands"], this);
      },
      addToContext: function (rD, rE) {
        if (rE == ![]) {
          rD[b("0x2bd")]();
        }
        if (this["transform"]) {
          rD[b("0x3aa")][b("0x1e6")](rD, this[b("0x3aa")][b("0x8c")]());
        }
        rD[b("0x54")]();
        var rF = this[b("0x13f")];
        var rG = rF[b("0x39d")];
        if (rG > 0x0) {
          var rH = 0x0;
          while (rH < rG) {
            switch (rF[rH]) {
              case "M": {
                rD[b("0x2b2")](rF[rH + 0x1], rF[rH + 0x3]);
                rH += 0x4;
                break;
              }
              case "L": {
                rD[b("0x1f4")](rF[rH + 0x1], rF[rH + 0x3]);
                rH += 0x4;
                break;
              }
              case "C": {
                rD["bezierCurveTo"](
                  rF[rH + 0x1],
                  rF[rH + 0x3],
                  rF[rH + 0x5],
                  rF[rH + 0x7],
                  rF[rH + 0x9],
                  rF[rH + 0xb]
                );
                rH += 0xc;
                break;
              }
              case "Q": {
                rD["quadraticCurveTo"](
                  rF[rH + 0x1],
                  rF[rH + 0x3],
                  rF[rH + 0x5],
                  rF[rH + 0x7]
                );
                rH += 0x8;
                break;
              }
              case "A": {
                rD[b("0x3d3")](
                  rF[rH + 0x1],
                  rF[rH + 0x3],
                  rF[rH + 0x5],
                  rF[rH + 0x7],
                  rF[rH + 0x9],
                  rF[rH + 0xb]
                );
                rH += 0xc;
                break;
              }
              case "R": {
                rD[b("0x2d0")](
                  rF[rH + 0x1],
                  rF[rH + 0x3],
                  rF[rH + 0x5],
                  rF[rH + 0x7]
                );
                rH += 0x8;
                break;
              }
              case "E": {
                rD["moveTo"](rF[rH + 0x1], rF[rH + 0x3] - rF[rH + 0x7] / 0x2);
                rD["bezierCurveTo"](
                  rF[rH + 0x1] + rF[rH + 0x5] / 0x2,
                  rF[rH + 0x3] - rF[rH + 0x7] / 0x2,
                  rF[rH + 0x1] + rF[rH + 0x5] / 0x2,
                  rF[rH + 0x3] + rF[rH + 0x7] / 0x2,
                  rF[rH + 0x1],
                  rF[rH + 0x3] + rF[rH + 0x7] / 0x2
                );
                rD[b("0x15a")](
                  rF[rH + 0x1] - rF[rH + 0x5] / 0x2,
                  rF[rH + 0x3] + rF[rH + 0x7] / 0x2,
                  rF[rH + 0x1] - rF[rH + 0x5] / 0x2,
                  rF[rH + 0x3] - rF[rH + 0x7] / 0x2,
                  rF[rH + 0x1],
                  rF[rH + 0x3] - rF[rH + 0x7] / 0x2
                );
                rH += 0x8;
                break;
              }
              case "U": {
                rD[b("0x193")](
                  rF[rH + 0x1],
                  rF[rH + 0x3],
                  rF[rH + 0x5],
                  rF[rH + 0x7],
                  rF[rH + 0x9]
                );
                rH += 0xa;
                break;
              }
              case "Z": {
                if (rD[b("0x238")]) {
                  rD[b("0x238")]();
                }
              }
              default:
                rH += 0x1;
            }
          }
        }
        if (rE == ![]) {
          rD["restore"]();
        }
      },
      draw: function (rI, rJ) {
        rI["save"]();
        this[b("0xec")](rI);
        if (this[b("0x1e5")] && rJ != ![]) this[b("0x1e5")][b("0x1e6")](rI);
        if (this[b("0xab")]) {
          rI[b("0x1ec")] = MindFusion[b("0x313")][b("0x202")][b("0x3")](
            rI,
            this[b("0xab")],
            this["getBounds"]()
          );
          rI["fill"]();
        }
        rI[b("0x2a")]();
        if (this[b("0xfc")]) {
          rI[b("0x7a")] = MindFusion["Diagramming"][b("0x202")][b("0x3")](
            rI,
            this[b("0xfc")],
            this[b("0xa0")](),
            !![]
          );
          rI[b("0x25c")] =
            (this[b("0x2bf")] ? this[b("0x2bf")] : 0x1) / rI[b("0x351")];
          ru[b("0x229")][b("0x1e6")](rI, this[b("0x190")]);
          rI[b("0x34a")] = this[b("0x34a")];
          rI[b("0x20a")]();
        }
      },
      drawShadow: function (rK) {
        if (this[b("0x1e5")]) {
          rK[b("0x2bd")]();
          this["addToContext"](rK);
          this[b("0x1e5")][b("0x1e6")](rK);
          if (this[b("0xab")]) {
            rK["fillStyle"] = this[b("0x1e5")][b("0x1a1")];
            rK[b("0x27c")]();
          } else if (this[b("0xfc")]) {
            rK[b("0x7a")] = this[b("0x1e5")][b("0x1a1")];
            rK[b("0x25c")] =
              (this[b("0x2bf")] ? this[b("0x2bf")] : 0x1) / rK[b("0x351")];
            rK["lineJoin"] = this["lineJoin"];
            rK[b("0x20a")]();
          }
          rK[b("0x2a")]();
        }
      },
      done: function () {
        if (this[b("0x13f")])
          this[b("0x284")] = this["builder"][b("0x352")]("");
        this[b("0x32d")]();
      },
      moveTo: function (rL, rM) {
        this[b("0x13f")][b("0x11e")]("M");
        this[b("0x13f")][b("0x11e")](rL);
        this[b("0x13f")][b("0x11e")](",");
        this["builder"][b("0x11e")](rM);
        this[b("0x1a2")] = rL;
        this["positionY"] = rM;
        this[b("0x1ff")](rL, rM);
      },
      lineTo: function (rN, rO) {
        this[b("0x13f")][b("0x11e")]("L");
        this[b("0x13f")][b("0x11e")](rN);
        this[b("0x13f")]["push"](",");
        this["builder"]["push"](rO);
        this[b("0x1a2")] = rN;
        this[b("0xbe")] = rO;
        this[b("0x1ff")](rN, rO);
      },
      bezierTo: function (rP, rQ, rR, rS, rT, rU) {
        this[b("0x13f")][b("0x11e")]("C");
        this[b("0x13f")][b("0x11e")](rP);
        this[b("0x13f")][b("0x11e")](",");
        this[b("0x13f")]["push"](rQ);
        this[b("0x13f")][b("0x11e")](",");
        this[b("0x13f")][b("0x11e")](rR);
        this[b("0x13f")][b("0x11e")](",");
        this[b("0x13f")][b("0x11e")](rS);
        this[b("0x13f")][b("0x11e")](",");
        this["builder"][b("0x11e")](rT);
        this[b("0x13f")]["push"](",");
        this["builder"][b("0x11e")](rU);
        this[b("0x1a2")] = rT;
        this[b("0xbe")] = rU;
        this["expandRect"](rP, rQ);
        this[b("0x1ff")](rR, rS);
        this[b("0x1ff")](rT, rU);
      },
      arcTo: function (rV, rW, rX, rY, rZ, s0) {
        this[b("0x13f")][b("0x11e")]("A");
        this[b("0x13f")][b("0x11e")](rV);
        this[b("0x13f")][b("0x11e")](",");
        this[b("0x13f")][b("0x11e")](rW);
        this[b("0x13f")]["push"](",");
        this[b("0x13f")][b("0x11e")](rX);
        this[b("0x13f")]["push"](",");
        this[b("0x13f")][b("0x11e")](rY);
        this["builder"][b("0x11e")](",");
        this[b("0x13f")][b("0x11e")](rZ);
        this[b("0x13f")][b("0x11e")](",");
        this["builder"][b("0x11e")](s0);
        this[b("0x1a2")] = rV;
        this[b("0xbe")] = rW;
        var s1 = +rX;
        this["expandRect"](+rV - s1, +rW - s1);
        this["expandRect"](+rV + s1, +rW + s1);
      },
      quadraticCurveTo: function (s2, s3, s4, s5) {
        this[b("0x13f")][b("0x11e")]("Q");
        this[b("0x13f")][b("0x11e")](s2);
        this[b("0x13f")]["push"](",");
        this[b("0x13f")][b("0x11e")](s3);
        this[b("0x13f")][b("0x11e")](",");
        this["builder"][b("0x11e")](s4);
        this["builder"][b("0x11e")](",");
        this[b("0x13f")][b("0x11e")](s5);
        this["positionX"] = s4;
        this[b("0xbe")] = s5;
        this[b("0x1ff")](s2, s3);
        this["expandRect"](s4, s5);
      },
      addRect: function (s6, s7, s8, s9) {
        this[b("0x13f")][b("0x11e")]("R");
        this[b("0x13f")][b("0x11e")](s6);
        this["builder"][b("0x11e")](",");
        this[b("0x13f")][b("0x11e")](s7);
        this["builder"][b("0x11e")](",");
        this[b("0x13f")]["push"](s8);
        this[b("0x13f")][b("0x11e")](",");
        this[b("0x13f")][b("0x11e")](s9);
        this[b("0x1a2")] = s6 + s8;
        this["positionY"] = s7 + s9;
        this[b("0x1ff")](s6, s7);
        this[b("0x1ff")](s6 + s8, s7 + s9);
      },
      addRoundRect: function (sa, sb) {
        this["moveTo"](sa["x"], sa["y"] + sb);
        this[b("0x1f4")](sa["x"], sa["y"] + sa[b("0x338")] - sb);
        this[b("0x196")](
          sa["x"],
          sa["y"] + sa[b("0x338")],
          sa["x"] + sb,
          sa["y"] + sa[b("0x338")]
        );
        this[b("0x1f4")](sa["x"] + sa["width"] - sb, sa["y"] + sa["height"]);
        this[b("0x196")](
          sa["x"] + sa["width"],
          sa["y"] + sa[b("0x338")],
          sa["x"] + sa[b("0xde")],
          sa["y"] + sa[b("0x338")] - sb
        );
        this["lineTo"](sa["x"] + sa[b("0xde")], sa["y"] + sb);
        this["quadraticCurveTo"](
          sa["x"] + sa[b("0xde")],
          sa["y"],
          sa["x"] + sa[b("0xde")] - sb,
          sa["y"]
        );
        this["lineTo"](sa["x"] + sb, sa["y"]);
        this[b("0x196")](sa["x"], sa["y"], sa["x"], sa["y"] + sb);
      },
      roundRect: function (sc, sd, se, sf, sg) {
        var sh = MindFusion[b("0x52")][b("0x5")]["fromPoints"](
          new MindFusion[b("0x52")][b("0x288")](sc, sd),
          new MindFusion["Drawing"][b("0x288")](se, sf)
        );
        this["addRoundRect"](sh, sg);
      },
      addEllipse: function (si, sj, sk, sl) {
        this["builder"][b("0x11e")]("E");
        this[b("0x13f")][b("0x11e")](si);
        this[b("0x13f")]["push"](",");
        this[b("0x13f")][b("0x11e")](sj);
        this[b("0x13f")][b("0x11e")](",");
        this[b("0x13f")][b("0x11e")](sk);
        this[b("0x13f")]["push"](",");
        this[b("0x13f")][b("0x11e")](sl);
        this[b("0x1a2")] = si;
        this["positionY"] = sj;
        this[b("0x1ff")](si - sk, sj - sl);
        this[b("0x1ff")](si + sk, sj + sl);
      },
      close: function () {
        this[b("0x13f")][b("0x11e")]("Z");
      },
      setBrush: function (sm) {
        this[b("0xab")] = sm;
        this[b("0x32d")]();
      },
      setPen: function (sn) {
        this["pen"] = sn;
        this[b("0x32d")]();
      },
      setText: function (so) {
        this["text"] = so;
        this[b("0x32d")]();
      },
      create: function (sp) {},
      getBounds: function () {
        return new ru["Rect"](
          this[b("0x178")],
          this["minY"],
          this[b("0x3cf")] - this["minX"],
          this[b("0x3c3")] - this[b("0xa9")]
        );
      },
      expandRect: function (sq, sr) {
        this[b("0x178")] = Math[b("0x208")](this["minX"], sq);
        this["minY"] = Math["min"](this[b("0xa9")], sr);
        this[b("0x3cf")] = Math[b("0x1fd")](this["maxX"], sq);
        this[b("0x3c3")] = Math[b("0x1fd")](this[b("0x3c3")], sr);
      },
      updatePosition: function () {},
      updatePathDefinition: function () {},
      createSvgElement: function (ss) {
        var st = ss[b("0x321")](b("0x391"), b("0x284"));
        if (this["transform"])
          st[b("0x2d")](b("0x3aa"), this[b("0x3aa")][b("0x14")]());
        if (this[b("0x29b")]) {
          st[b("0x2d")]("d", this[b("0x29b")] || this["path"]);
        } else {
          if (!this[b("0x284")]) this[b("0x19a")]();
          st[b("0x2d")]("d", this[b("0x284")]);
        }
        if (this[b("0xab")])
          st["setAttribute"](
            b("0x27c"),
            MindFusion["Diagramming"]["Utils"][b("0x3")](
              null,
              this[b("0xab")],
              this[b("0xa0")]()
            )
          );
        else st[b("0x2d")](b("0x27c"), "none");
        if (this["pen"]) st[b("0x2d")](b("0x20a"), this[b("0xfc")]);
        st[b("0x2d")](
          b("0x73"),
          this[b("0x2bf")] ? this[b("0x2bf")] / 0x4 : 0x1 / 0x4
        );
        return st;
      },
      transform: null,
    };
    rv[b("0x2f1")] = function (su) {
      var sv = new rv(null);
      for (var sw = 0x0; sw < su[b("0x39d")]; sw++) {
        sv[b("0x2b2")](su[sw]["x"], su[sw]["y"]);
      }
      return sv;
    };
    MindFusion[b("0x230")](rv, "MindFusion.Drawing.Path");
  })(MindFusion[b("0x52")]);
  (function (sx) {
    var sy = (sx[b("0xdf")] = function () {});
    sy[b("0x381")] = function (sz, sA) {
      var sB = 0x0;
      var sC = 0x0;
      for (var sD = 0x0; sD < sz[b("0x39d")]; sD++) {
        var sE = sz[sD];
        var sF = sz[sD][0x0];
        switch (sF) {
          case "M": {
            sE = sE[b("0x315")](0x1, sE[b("0x39d")]);
            var sJ = +sE[b("0x3bc")](",")[0x0];
            var sN = +sE[b("0x3bc")](",")[0x1];
            sA["moveTo"](sJ, sN);
            sB = sJ;
            sC = sN;
            break;
          }
          case "L": {
            sE = sE[b("0x315")](0x1, sE[b("0x39d")]);
            var sJ = +sE["split"](",")[0x0];
            var sN = +sE[b("0x3bc")](",")[0x1];
            sA["lineTo"](sJ, sN);
            sB = sJ;
            sC = sN;
            break;
          }
          case "B": {
            sE = sE[b("0x315")](0x1, sE[b("0x39d")]);
            var sR = +sE[b("0x3bc")](",")[0x0];
            var sV = +sE[b("0x3bc")](",")[0x1];
            var sY = +sE[b("0x3bc")](",")[0x2];
            var t1 = +sE[b("0x3bc")](",")[0x3];
            var t3 = +sE[b("0x3bc")](",")[0x4];
            var t5 = +sE["split"](",")[0x5];
            sA[b("0x324")](sY, t1, t3, t5, sR, sV);
            sB = sR;
            sC = sV;
            break;
          }
          case "C": {
            sE = sE[b("0x315")](0x1, sE[b("0x39d")]);
            var sR = +sE["split"](",")[0x0];
            var sV = +sE[b("0x3bc")](",")[0x1];
            var sY = +sE["split"](",")[0x2];
            var t1 = +sE["split"](",")[0x3];
            var t3 = +sE[b("0x3bc")](",")[0x4];
            var t5 = +sE[b("0x3bc")](",")[0x5];
            sA[b("0x324")](sR, sV, sY, t1, t3, t5);
            sB = t3;
            sC = t5;
            break;
          }
          case "Q": {
            sE = sE["substring"](0x1, sE[b("0x39d")]);
            var sR = +sE[b("0x3bc")](",")[0x0];
            var sV = +sE[b("0x3bc")](",")[0x1];
            var sJ = +sE[b("0x3bc")](",")[0x2];
            var sN = +sE[b("0x3bc")](",")[0x3];
            sA["quadraticCurveTo"](sR, sV, sJ, sN);
            sB = sJ;
            sC = sN;
            break;
          }
          case "A": {
            sE = sE[b("0x315")](0x1, sE[b("0x39d")]);
            var t6 = +sE["split"](",")[0x0];
            var t7 = +sE[b("0x3bc")](",")[0x1];
            var t8 = +sE[b("0x3bc")](",")[0x2];
            var t9 = +sE[b("0x3bc")](",")[0x3];
            var ta = +sE["split"](",")[0x4];
            ta = ta == 0x0 ? 0x1 : 0x0;
            var sJ = +sE[b("0x3bc")](",")[0x5];
            var sN = +sE[b("0x3bc")](",")[0x6];
            var tb = new MindFusion[b("0x52")][b("0x288")](sB, sC);
            var tc = new MindFusion["Drawing"]["Point"](sJ, sN);
            var td = new MindFusion[b("0x52")]["Matrix"]();
            td[b("0x47")](-t8);
            td[b("0x314")](t7 / t6, 0x1);
            td[b("0x10f")](tb);
            td["transformPoint"](tc);
            var te = new MindFusion[b("0x52")][b("0x288")](
              (tb["x"] + tc["x"]) / 0x2,
              (tb["y"] + tc["y"]) / 0x2
            );
            var tf = new MindFusion["Drawing"][b("0x267")](
              tc["x"] - tb["x"],
              tc["y"] - tb["y"]
            );
            var tg = tf[b("0x39d")]() / 0x2;
            var th;
            if (t9 == ta)
              th = new MindFusion[b("0x52")][b("0x267")](-tf["y"], tf["x"]);
            else th = new MindFusion["Drawing"]["Vector"](tf["y"], -tf["x"]);
            if (th["x"] != 0x0 || th["y"] != 0x0) th = th[b("0xcd")]();
            var ti = t7 * t7 - tg * tg;
            var tj = ti > 0x0 ? Math["sqrt"](ti) : 0x0;
            var tk = new MindFusion[b("0x52")][b("0x288")](
              te["x"] + tj * th["x"],
              te["y"] + tj * th["y"]
            );
            var tl = Math[b("0x185")](tb["y"] - tk["y"], tb["x"] - tk["x"]);
            var tn = Math[b("0x185")](tc["y"] - tk["y"], tc["x"] - tk["x"]);
            if (t9 == Math[b("0x10c")](tn - tl) < Math["PI"]) {
              if (tl < tn) tl += 0x2 * Math["PI"];
              else tn += 0x2 * Math["PI"];
            }
            var to = ((tl * 0xb4) / Math["PI"]) % 0x168;
            if (ta) {
              tl = tl < 0x0 ? 0x2 * Math["PI"] - Math[b("0x10c")](tl) : tl;
              tn = tn < 0x0 ? 0x2 * Math["PI"] - Math[b("0x10c")](tn) : tn;
            }
            var tp = ((tn * 0xb4) / Math["PI"]) % 0x168;
            var tq = (((tn - tl) * 0xb4) / Math["PI"]) % 0x168;
            to = to < 0x0 ? 0x168 - Math[b("0x10c")](to) : to;
            if (!ta) {
              tq = tq < 0x0 ? 0x168 - Math["abs"](tq) : tq;
            }
            td = td[b("0x290")]();
            td["transformPoint"](tk);
            to = (to * Math["PI"]) / 0xb4;
            tp = (tp * Math["PI"]) / 0xb4;
            if (to == tp) tp += 0x2 * Math["PI"];
            sA["arcTo"](tk["x"], tk["y"], t6, to, tp, ta);
            sB = sJ;
            sC = sN;
            break;
          }
          case "U": {
            sE = sE["substring"](0x1, sE[b("0x39d")]);
            var sR = +sE["split"](",")[0x0];
            var sV = +sE[b("0x3bc")](",")[0x1];
            var sY = +sE[b("0x3bc")](",")[0x2];
            var t1 = +sE[b("0x3bc")](",")[0x3];
            var tr = +sE[b("0x3bc")](",")[0x4];
            sA["roundRect"](sR, sV, sY, t1, tr);
            sB = sR;
            sC = sV;
            break;
          }
          case "Z": {
            sA["close"]();
            break;
          }
        }
      }
    };
    MindFusion[b("0x230")](sy, b("0x7e"));
  })(MindFusion["Drawing"]);
  MindFusion[b("0x52")][b("0x288")] = function (ts, tt) {
    this["x"] = ts;
    this["y"] = tt;
    this[b("0x309")] = this[b("0x5e")][b("0x7b")];
  };
  MindFusion["Drawing"]["Point"]["distance"] = function (tu, tv) {
    return Math[b("0x24a")](
      Math["pow"](tv["x"] - tu["x"], 0x2) +
        Math[b("0x1fe")](tv["y"] - tu["y"], 0x2)
    );
  };
  MindFusion[b("0x52")][b("0x288")][b("0x15b")] = function (tw, tx) {
    var ty = tx["y"] - tw["y"];
    var tz = tx["x"] - tw["x"];
    return (Math[b("0x185")](ty, tz) / Math["PI"]) * 0xb4;
  };
  MindFusion[b("0x52")][b("0x288")][b("0x226")] = function (tA, tB) {
    var tC = tA["clone"]();
    tC[b("0x226")](tB);
    return tC;
  };
  MindFusion["Drawing"][b("0x288")][b("0x235")] = {
    getType: function () {
      return this["type"];
    },
    empty: function () {
      return this["x"] === 0x0 && this["y"] === 0x0;
    },
    distance: function (tD) {
      return Math["sqrt"](
        Math[b("0x1fe")](this["x"] - tD["x"], 0x2) +
          Math[b("0x1fe")](this["y"] - tD["y"], 0x2)
      );
    },
    angleBetween: function (tE) {
      var tF = tE["y"] - this["y"];
      var tG = tE["x"] - this["x"];
      return (Math[b("0x185")](tF, tG) / Math["PI"]) * 0xb4;
    },
    addVector: function (tH) {
      this["x"] += tH["x"];
      this["y"] += tH["y"];
      return this;
    },
    newWithOffset: function (tI, tJ) {
      var tK = this[b("0x32c")]();
      tK["x"] += tI;
      tK["y"] += tJ;
      return tK;
    },
    equals: function (tL) {
      if (!tL) return ![];
      return this["x"] === tL["x"] && this["y"] === tL["y"];
    },
    clone: function () {
      var tM = new MindFusion[b("0x52")][b("0x288")](this["x"], this["y"]);
      return tM;
    },
  };
  MindFusion[b("0x230")](MindFusion[b("0x52")][b("0x288")], b("0x11b"));
  (function (tN) {
    var tO = MindFusion["Collections"][b("0x25d")];
    var tP = (tN[b("0x5")] = function (tQ, tR, tS, tT) {
      if (tR instanceof MindFusion[b("0x52")]["Size"]) {
        tS = tR[b("0xde")];
        tT = tR[b("0x338")];
      }
      if (tQ instanceof MindFusion[b("0x52")][b("0x288")]) {
        tR = tQ["y"];
        tQ = tQ["x"];
      }
      this["x"] = tQ;
      this["y"] = tR;
      this[b("0xde")] = tS;
      this[b("0x338")] = tT;
      this["transform"] = new tN[b("0x1e3")]();
      this[b("0x309")] = this["constructor"][b("0x7b")];
    });
    tP[b("0x1a7")] = function (tU, tV, tW, tX) {
      return new tP(
        Math[b("0x208")](tU, tW),
        Math[b("0x208")](tV, tX),
        Math[b("0x10c")](tW - tU),
        Math["abs"](tX - tV)
      );
    };
    tP["fromArgs"] = function (tY) {
      return new tP(tY[0x0], tY[0x1], tY[0x2], tY[0x3]);
    };
    tP[b("0x2f1")] = function (tZ, u0) {
      return tP["fromLTRB"](tZ["x"], tZ["y"], u0["x"], u0["y"]);
    };
    tP[b("0x36f")] = function (u1, u2) {
      var u3 = u2["width"];
      var u4 = u2[b("0x338")];
      return new tP(u1["x"] - u3 / 0x2, u1["y"] - u4 / 0x2, u3, u4);
    };
    tP[b("0x2f")] = function (u5, u6) {
      return new tP(u5["x"], u5["y"], u6[b("0xde")], u6["height"]);
    };
    tP[b("0x142")] = function (u7) {
      var u8 = u7[b("0xde")];
      var u9 = u7["height"];
      return new tP(u7["x"] - u8 / 0x2, u7["y"] - u9 / 0x2, u8, u9);
    };
    tP[b("0x317")] = function (ua) {
      var ub = Number[b("0x28b")];
      var uc = Number[b("0x28b")];
      var ud = Number[b("0x2c")];
      var ue = Number[b("0x2c")];
      tO[b("0x31e")](ua, function (uf) {
        ub = Math[b("0x208")](ub, uf["x"]);
        uc = Math["min"](uc, uf["y"]);
        ud = Math[b("0x1fd")](ud, uf["x"]);
        ue = Math[b("0x1fd")](ue, uf["y"]);
      });
      return tP[b("0x1a7")](ub, uc, ud, ue);
    };
    tP[b("0x235")] = {
      getType: function () {
        return this[b("0x309")];
      },
      isEmpty: function () {
        return this[b("0xde")] === 0x0 && this["height"] === 0x0;
      },
      right: function () {
        return Math["max"](this["x"], this["x"] + this[b("0xde")]);
      },
      left: function () {
        return Math[b("0x208")](this["x"], this["x"] + this[b("0xde")]);
      },
      bottom: function () {
        return Math["max"](this["y"], this["y"] + this[b("0x338")]);
      },
      top: function () {
        return Math[b("0x208")](this["y"], this["y"] + this["height"]);
      },
      center: function () {
        return new tN[b("0x288")](
          this[b("0x20")]() + this[b("0xde")] / 0x2,
          this["top"]() + this[b("0x338")] / 0x2
        );
      },
      centerX: function () {
        return this["left"]() + this[b("0xde")] / 0x2;
      },
      centerY: function () {
        return this[b("0x1dc")]() + this[b("0x338")] / 0x2;
      },
      topLeft: function () {
        return new tN[b("0x288")](this[b("0x20")](), this[b("0x1dc")]());
      },
      topRight: function () {
        return new tN["Point"](this[b("0x31")](), this[b("0x1dc")]());
      },
      topMiddle: function () {
        return new tN[b("0x288")](
          this["x"] + this["width"] / 0x2,
          this["top"]()
        );
      },
      bottomLeft: function () {
        return new tN[b("0x288")](this["left"](), this[b("0x28f")]());
      },
      bottomRight: function () {
        return new tN[b("0x288")](this[b("0x31")](), this[b("0x28f")]());
      },
      adjusted: function (ug, uh, ui, uj) {
        return tP[b("0x1a7")](
          this["left"]() + ug,
          this[b("0x1dc")]() + uh,
          this[b("0x31")]() + ui,
          this[b("0x28f")]() + uj
        );
      },
      intersectsWith: function (uk) {
        return !(this["intersect"](uk) === tP[b("0x1d9")]);
      },
      intersectsInc: function (ul) {
        if (this[b("0x28f")]() <= ul[b("0x1dc")]()) return ![];
        if (this[b("0x1dc")]() >= ul[b("0x28f")]()) return ![];
        if (this["left"]() >= ul[b("0x31")]()) return ![];
        if (this[b("0x31")]() <= ul[b("0x20")]()) return ![];
        return !![];
      },
      contains: function (um) {
        if (um) {
          if (um instanceof MindFusion["Drawing"][b("0x5")]) {
            if (
              this[b("0x46")](um[b("0x2c5")]()) &&
              this["containsPoint"](um["bottomRight"]()) &&
              this[b("0x46")](um[b("0x1c7")]()) &&
              this[b("0x46")](um["topRight"]())
            )
              return !![];
          } else if (um instanceof MindFusion[b("0x52")][b("0x288")]) {
            if (this[b("0x46")](um)) return !![];
          }
        }
        return ![];
      },
      containsPoint: function (un) {
        return (
          this[b("0x20")]() <= un["x"] &&
          this[b("0x31")]() >= un["x"] &&
          this[b("0x1dc")]() <= un["y"] &&
          this[b("0x28f")]() >= un["y"]
        );
      },
      union: function (uo) {
        if (!uo) return this;
        var up = Math[b("0x208")](this["left"](), uo[b("0x20")]());
        var uq = Math[b("0x1fd")](this[b("0x31")](), uo[b("0x31")]());
        var ur = Math[b("0x208")](this[b("0x1dc")](), uo["top"]());
        var us = Math["max"](this[b("0x28f")](), uo["bottom"]());
        return new tP(up, ur, uq - up, us - ur);
      },
      intersect: function (ut) {
        if (this[b("0x28f")]() < ut[b("0x1dc")]()) return tP[b("0x1d9")];
        if (this[b("0x1dc")]() > ut[b("0x28f")]()) return tP["empty"];
        if (this[b("0x20")]() > ut["right"]()) return tP["empty"];
        if (this[b("0x31")]() < ut[b("0x20")]()) return tP[b("0x1d9")];
        var uu = Math[b("0x1fd")](this["left"](), ut[b("0x20")]());
        var uv = Math[b("0x208")](this[b("0x31")](), ut[b("0x31")]());
        var uw = Math[b("0x208")](this[b("0x28f")](), ut[b("0x28f")]());
        var ux = Math[b("0x1fd")](this["top"](), ut[b("0x1dc")]());
        return new tP(uu, ux, uv - uu, uw - ux);
      },
      clone: function () {
        return new tP(this["x"], this["y"], this["width"], this["height"]);
      },
      draw: function (uy, uz) {
        uy[b("0x2bd")]();
        uy[b("0x3aa")][b("0x1e6")](uy, this[b("0x3aa")][b("0x8c")]());
        uy["beginPath"]();
        uy[b("0x2d0")](this["x"], this["y"], this[b("0xde")], this["height"]);
        uy[b("0x2bd")]();
        if (this[b("0x1e5")] && uz != ![]) this[b("0x1e5")][b("0x1e6")](uy);
        if (this[b("0xab")]) {
          uy[b("0x1ec")] = MindFusion["Diagramming"][b("0x202")][b("0x3")](
            uy,
            this["brush"],
            this[b("0xa0")]()
          );
          uy[b("0x27c")]();
        }
        uy[b("0x2a")]();
        if (this["pen"]) {
          uy["strokeStyle"] = this[b("0xfc")];
          uy[b("0x25c")] =
            (this[b("0x2bf")] ? this[b("0x2bf")] : 0x1) / uy[b("0x351")];
          tN["DashStyle"][b("0x1e6")](uy, this[b("0x190")]);
          uy["stroke"]();
        }
        uy[b("0x2a")]();
      },
      drawShadow: function (uA) {
        if (this[b("0x1e5")]) {
          uA[b("0x2bd")]();
          this[b("0x1e5")][b("0x1e6")](uA);
          uA[b("0x3aa")][b("0x1e6")](uA, this["transform"][b("0x8c")]());
          uA[b("0x54")]();
          uA[b("0x2d0")](
            this["x"],
            this["y"],
            this[b("0xde")],
            this[b("0x338")]
          );
          uA[b("0x1ec")] = this["shadow"]["color"];
          uA["fill"]();
          uA["restore"]();
        }
      },
      drawPath: function (uB) {
        uB[b("0x2d0")](this["x"], this["y"], this[b("0xde")], this[b("0x338")]);
      },
      setClip: function (uC) {
        uC[b("0x54")]();
        uC["rect"](this["x"], this["y"], this[b("0xde")], this["height"]);
        uC[b("0x2b9")]();
      },
      getBounds: function () {
        return new MindFusion[b("0x52")][b("0x5")](
          this["x"],
          this["y"],
          this["width"],
          this[b("0x338")]
        );
      },
      setBounds: function (uD) {
        this["x"] = uD["x"];
        this["y"] = uD["y"];
        this[b("0xde")] = uD[b("0xde")];
        this[b("0x338")] = uD[b("0x338")];
      },
      setLocation: function (uE) {
        this["x"] = uE["x"];
        this["y"] = uE["y"];
      },
      setCenter: function (uF) {
        this["x"] = uF["x"] - this["width"] / 0x2;
        this["y"] = uF["y"] - this[b("0x338")] / 0x2;
      },
      inflate: function (uG) {
        if (!uG) return this;
        var uH = tP[b("0x1a7")](
          this["x"] - uG,
          this["y"] - uG,
          this[b("0x31")]() + uG,
          this[b("0x28f")]() + uG
        );
        return uH;
      },
      offset: function (uI, uJ) {
        this["x"] += uI;
        this["y"] += uJ;
      },
      getCornerPoints: function () {
        return [
          this[b("0x1c7")](),
          this["topRight"](),
          this["bottomRight"](),
          this["bottomLeft"](),
        ];
      },
      getSizeRect: function () {
        return new tP(0x0, 0x0, this[b("0xde")], this[b("0x338")]);
      },
      equals: function (uK) {
        if (!uK) return ![];
        return (
          this["x"] === uK["x"] &&
          this["y"] === uK["y"] &&
          this[b("0xde")] === uK[b("0xde")] &&
          this[b("0x338")] === uK[b("0x338")]
        );
      },
      sameSize: function (uL) {
        return (
          this[b("0xde")] == uL[b("0xde")] && this[b("0x338")] == uL["height"]
        );
      },
      toString: function () {
        return (
          this["x"] +
          ",\x20" +
          this["y"] +
          ",\x20" +
          this["width"] +
          ",\x20" +
          this[b("0x338")]
        );
      },
      getSize: function () {
        return new tN[b("0x192")](this[b("0xde")], this[b("0x338")]);
      },
      createSvgElement: function (uM) {
        var uN = uM["createElementNS"](b("0x391"), b("0x2d0"));
        uN[b("0x2d")]("x", this["x"]);
        uN[b("0x2d")]("y", this["y"]);
        uN[b("0x2d")]("width", this[b("0xde")]);
        uN[b("0x2d")](b("0x338"), this[b("0x338")]);
        uN["setAttribute"]("rx", 0x0);
        uN[b("0x2d")]("ry", 0x0);
        var uO = this[b("0xab")];
        var uP = this["pen"];
        if (uO)
          uN["setAttribute"](
            "fill",
            MindFusion["Diagramming"]["Utils"][b("0x3")](
              null,
              uO,
              this[b("0xa0")]()
            )
          );
        else uN[b("0x2d")](b("0x27c"), b("0xc"));
        if (uP) uN[b("0x2d")](b("0x20a"), uP);
        uN[b("0x2d")](
          b("0x73"),
          this["strokeThickness"] ? this[b("0x2bf")] / 0x4 : 0x1 / 0x4
        );
        if (this[b("0x3aa")])
          uN["setAttribute"](b("0x3aa"), this["transform"]["svgMatrix"]());
        return uN;
      },
      expandToInt: function () {
        var uQ = Math[b("0x1a4")](this["left"]());
        var uR = Math[b("0x1a4")](this["top"]());
        var uS = Math[b("0x16f")](this[b("0x31")]());
        var uT = Math[b("0x16f")](this[b("0x28f")]());
        this["x"] = uQ;
        this["y"] = uR;
        this[b("0xde")] = uS - uQ;
        this[b("0x338")] = uT - uR;
      },
      transform: null,
      pen: "black",
      strokeThickness: 0x0,
      brush: b("0x258"),
    };
    MindFusion[b("0x230")](tP, "MindFusion.Drawing.Rect");
    tP[b("0x1d9")] = new tP(0x0, 0x0, 0x0, 0x0);
  })(MindFusion[b("0x52")]);
  (function (uU) {
    var uV = (uU[b("0x3b7")] = function (uW, uX, uY) {
      this[b("0x1a1")] = uW;
      this[b("0x126")] = uX;
      this["offsetY"] = uY;
    });
    uV[b("0x235")] = {
      apply: function (uZ) {
        uZ[b("0x361")] = this[b("0x126")];
        uZ["shadowOffsetY"] = this["offsetY"];
        uZ[b("0x14a")] = 0x4;
        uZ[b("0xc4")] = this["color"];
      },
      createSvgElement: function (v0) {
        return null;
      },
    };
    MindFusion[b("0x230")](uV, b("0x151"));
  })(MindFusion["Drawing"]);
  (function (v1) {
    var v2 = MindFusion[b("0x25a")][b("0x25d")];
    var v3 = {};
    var v4 = (v1["Text"] = function (v6, v7) {
      this["text"] = v6;
      if (typeof this[b("0x360")] == b("0x33e")) this[b("0x360")] = "";
      if (!v7) v7 = new v1["Rect"](0x0, 0x0, null, null);
      this[b("0x0")] = v7;
      this["x"] = v7["x"];
      this["y"] = v7["y"];
      this["width"] = v7["width"];
      this[b("0x338")] = v7[b("0x338")];
      this["clipPath"] = new v1[b("0x59")]();
      this[b("0x2a6")] = v5[b("0xed")];
      this["lineAlignment"] = v5[b("0xed")];
      this[b("0x307")] = b("0x19b");
      this[b("0x13a")] = new v1[b("0x164")](0x1, 0x1, 0x1, 0x1);
      this["type"] = this[b("0x5e")][b("0x7b")];
    });
    v4[b("0x235")] = {
      getType: function () {
        return this["type"];
      },
      clone: function () {
        var v8 = new v4(this[b("0x360")], this[b("0x0")]);
        v8[b("0xc5")] = this[b("0xc5")];
        v8[b("0x2c0")] = this["clipPath"][b("0x32c")]();
        v8["textAlignment"] = this[b("0x2a6")];
        v8[b("0x38d")] = this[b("0x38d")];
        v8[b("0x13a")] = this[b("0x13a")];
        v8[b("0x371")] = this[b("0x371")];
        v8[b("0x1cc")] = this[b("0x1cc")];
        if (this[b("0x20a")]) v8[b("0x20a")] = this[b("0x20a")];
        if (this["strokeThickness"]) v8[b("0x2bf")] = this["strokeThickness"];
        return v8;
      },
      getLines: function (v9, va) {
        this[b("0x364")] = v4[b("0x58")](v9, this[b("0x360")], va[b("0xde")]);
        return this[b("0x364")];
      },
      draw: function (vb, vc) {
        if (this["text"] === "") return;
        var vd = this["ignoreTransform"] ? 0x1 : vb[b("0x351")];
        if (
          vb[b("0x2a9")] != undefined &&
          this["font"][b("0x1c9")] * vd < vb[b("0x2a9")]
        )
          return;
        this["scale"] = vd;
        vb["save"]();
        if (!this[b("0x2c0")][b("0x1d9")]()) {
          this["clipPath"]["addToContext"](vb);
          vb[b("0x2b9")]();
        }
        vb[b("0x42")] = this[b("0x307")];
        vb["fillStyle"] = this[b("0xfc")];
        if (this[b("0x20a")]) {
          if (this[b("0x2bf")] !== undefined)
            vb[b("0x25c")] = this["strokeThickness"] * vd;
          vb[b("0x7a")] = MindFusion["Diagramming"][b("0x202")][b("0x3")](
            vb,
            this[b("0x20a")],
            this[b("0x0")],
            !![]
          );
        }
        this[b("0x204")] = this["font"][b("0x1c9")] * vd;
        var ve = this[b("0x0")][b("0x32c")]();
        this[b("0x13a")][b("0x197")](ve);
        if (!this[b("0x37e")]) {
          if (vb[b("0xd0")]) ve = vb[b("0xd0")][b("0x362")](ve);
          vb[b("0x130")](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
          vb["lineWidth"] = vb[b("0x25c")] * vd;
        }
        if (this[b("0xc5")])
          vb[b("0x3aa")][b("0x1e6")](vb, this[b("0x1")](ve)["matrix"]());
        if (this[b("0x1cc")]) {
          var vf = this["parseStyledText"](this["text"]);
          this[b("0xe4")](vb, vf, ve, this[b("0x2a6")], this[b("0x38d")]);
        } else {
          vb["font"] = this["font"][b("0xcf")](vd);
          if (this[b("0x371")]) {
            this[b("0x222")](vb, ve);
            this[b("0x8")](vb, ve);
          } else {
            if (this["textAlignment"] == v5[b("0xed")]) vb[b("0x2f9")] = "left";
            else if (this[b("0x2a6")] == v5[b("0x231")])
              vb[b("0x2f9")] = b("0x36e");
            else if (this["textAlignment"] == v5[b("0x138")])
              vb[b("0x2f9")] = b("0x31");
            if (this[b("0x20a")]) {
              if (this[b("0x2bf")] !== undefined)
                vb[b("0x25c")] = this[b("0x2bf")] * vd;
              vb["strokeText"](this[b("0x360")], ve["x"], ve["y"]);
            }
            vb[b("0x312")](this["text"], ve["x"], ve["y"]);
          }
        }
        this["layoutRect"] = ve;
        vb[b("0x2a")]();
      },
      drawLines: function (vg, vh) {
        if (this[b("0x364")][b("0x39d")] === 0x0) return;
        var vi = vh["height"] > 0x0 ? vh[b("0x338")] : this["lineHeight"];
        var vj = Math["floor"](vi / this[b("0x204")] + 0.00001);
        if (vj == 0x0 && vi > this[b("0x204")] * 0.9) vj = 0x1;
        vj = Math[b("0x208")](vj, this[b("0x364")][b("0x39d")]);
        var vk = vj * this[b("0x204")];
        var vl = vh["y"];
        switch (this[b("0x38d")]) {
          case v5["Center"]:
            vl += vh[b("0x338")] / 0x2 - vk / 0x2;
            break;
          case v5[b("0x138")]:
            vl += vh["height"] - vk;
            break;
        }
        var vm = vh["x"];
        switch (this[b("0x2a6")]) {
          case v5[b("0xed")]:
            vg[b("0x2f9")] = b("0x20");
            break;
          case v5["Center"]:
            vm += vh[b("0xde")] / 0x2;
            vg[b("0x2f9")] = b("0x36e");
            break;
          case v5["Far"]:
            vm += vh[b("0xde")];
            vg["textAlign"] = b("0x31");
            break;
        }
        if (vg[b("0x42")] == b("0x19b")) vl += this[b("0x204")] / 0x2;
        for (var vn = 0x0; vn < vj; vn++) {
          var vo = this[b("0x364")][vn];
          if (!vo) continue;
          var vp = vl + this[b("0x204")] * vn;
          if (this[b("0x20a")]) {
            if (this[b("0x2bf")] !== undefined)
              vg[b("0x25c")] = this[b("0x2bf")] * vg["_mf_scale"];
            vg[b("0x233")](vo, vm, vp);
          }
          vg["fillText"](vo, vm, vp);
          if (this[b("0x113")]["underline"]) {
            vp += this["lineHeight"] / 0x2;
            var vq = vg[b("0x1b0")](vo);
            switch (this[b("0x2a6")]) {
              case v5[b("0xed")]:
                this[b("0xc6")](vg, vm, vp, vq[b("0xde")]);
                break;
              case v5["Center"]:
                this[b("0xc6")](vg, vm - vq["width"] / 0x2, vp, vq[b("0xde")]);
                break;
              case v5["Far"]:
                this[b("0xc6")](vg, vm - vq[b("0xde")], vp, vq[b("0xde")]);
                break;
            }
          }
        }
      },
      getRotatedBounds: function () {
        var vr = new v1["Point"](this["x"], this["y"]);
        var vs = new v1[b("0x288")](
          this["x"] + this[b("0xde")],
          this["y"] + this[b("0x338")]
        );
        var vt = [vr, vs];
        var vu = this["rotationTransform"](this[b("0x0")]);
        vu[b("0x39b")](vt);
        return v1[b("0x5")][b("0x1a7")](
          vt[0x0]["x"],
          vt[0x0]["y"],
          vt[0x1]["x"],
          vt[0x1]["y"]
        );
      },
      setBounds: function (vv, vw) {
        this[b("0x0")] = vv;
        this["x"] = vv["x"];
        this["y"] = vv["y"];
        this["width"] = vv[b("0xde")];
        this[b("0x338")] = vv[b("0x338")];
        this[b("0xc5")] = vw || 0x0;
      },
      getBounds: function () {
        return this[b("0x0")];
      },
      getRotationAngle: function () {
        return this["rotationAngle"];
      },
      getFont: function () {
        return this["font"];
      },
      setFont: function (vx) {
        if (this[b("0x113")] == vx) return;
        this[b("0x113")] = vx;
      },
      getText: function () {
        return this[b("0x360")];
      },
      setText: function (vy) {
        if (this["text"] == vy) return;
        this[b("0x360")] = vy;
        if (typeof this[b("0x360")] == b("0x33e")) this[b("0x360")] = "";
      },
      rotationTransform: function (vz) {
        var vA = new v1[b("0x1e3")]();
        if (this["rotationAngle"] && this["rotationAngle"] !== 0x0)
          vA["rotateAt"](
            this[b("0xc5")],
            vz["x"] + vz[b("0xde")] / 0x2,
            vz["y"] + vz[b("0x338")] / 0x2
          );
        return vA;
      },
      drawStyledText: function (vB, vC, vD, vE, vF) {
        var vG = vD["x"];
        var vH = vD["y"];
        var vI = vD[b("0xde")];
        var vJ = vD[b("0x338")];
        var vK = this[b("0x332")](vB, vC, vI);
        var vL = null;
        var vM = this[b("0x204")];
        var vN = vM;
        if (vB["textBaseline"] == b("0x19b")) vN /= 0x2;
        if (vF == v5["Center"]) vN += vJ / 0x2 - (vM * vK[b("0x39d")]) / 0x2;
        if (vF == v5[b("0x138")]) vN += vJ - vM * vK[b("0x39d")];
        vN += vH;
        vB["textAlign"] = b("0x20");
        var vO = this[b("0x380")] && vK[b("0x39d")] > 0x1;
        if (vO) {
          vB[b("0x2bd")]();
          vB[b("0x54")]();
          vB[b("0x2d0")](vD["x"], vD["y"], vD[b("0xde")], vD["height"]);
          vB["clip"]();
        }
        for (var vP = 0x0; vP < vK["length"]; vP++) {
          var vQ = vK[vP];
          var vR = 0x0;
          if (vE == v5["Center"]) vR = vI / 0x2 - vQ[b("0xde")] / 0x2;
          if (vE == v5["Far"]) vR = vI - vQ[b("0xde")];
          for (var vS = 0x0; vS < vQ[b("0x39d")]; vS++) {
            var vT = null;
            var vU = vQ[vS];
            if (vU[b("0x11d")] != vL) {
              this[b("0x346")](vB, vU["format"]);
              vL = vU["format"];
              if (vB[b("0x24c")] && vU[b("0x11d")][b("0x14f")]) {
                vT = { link: vU[b("0x11d")][b("0x14f")], item: vB[b("0x1a3")] };
                vB[b("0x24c")][b("0x11e")](vT);
              }
            }
            var vV = vU[b("0x11d")]["scriptOffset"];
            var vW =
              vV === 0x0
                ? 0x0
                : (this[b("0x113")]["size"] *
                    vB["_mf_scale"] *
                    (vV > 0x0 ? -0x1 : 0x1)) /
                  0x3;
            for (var vX = 0x1; vX < Math[b("0x10c")](vV); vX++) {
              vW += vW / 0x3;
            }
            var vY = vN + vU["dy"] + vW;
            if (!vO && (vY < vH + vM / 0x4 || vY > vH + vJ - vM / 0x4))
              continue;
            var vZ = vG + vR + vU["dx"];
            if (this["stroke"]) {
              if (this["strokeThickness"] !== undefined)
                vB[b("0x25c")] = this[b("0x2bf")] * vB[b("0x351")];
              vB[b("0x233")](vU[b("0x360")], vZ, vY);
            }
            vB[b("0x312")](vU[b("0x360")], vZ, vY);
            if (vT) {
              var w0 = new v1[b("0x5")](vZ, vY, vU[b("0xf1")], vM);
              if (this["ignoreTransform"])
                w0 = vB["_mf_transform"][b("0x362")](w0);
              vT[b("0x2d0")] = w0;
            }
            if (vU["format"][b("0x211")])
              this["drawUnderline"](vB, vZ, vY + vM / 0x2, vU[b("0xf1")]);
          }
        }
        if (vO) vB[b("0x2a")]();
      },
      parseStyledText: function (w1) {
        if (this[b("0x29e")] == w1 && this[b("0xb4")]) return this[b("0xb4")];
        this[b("0x29e")] = w1;
        w1 = w1[b("0xac")](/\r\n/g, b("0x35d"))[b("0xac")](
          /[\r\n]/g,
          b("0x35d")
        );
        w1 = w1[b("0xac")](/<color=/g, b("0x368"));
        w1 = w1["replace"](/<a=/g, "<a\x20href=");
        if (!v4[b("0x33c")]) v4[b("0x33c")] = document[b("0x336")](b("0x181"));
        var w2 = v4["parser"];
        w2[b("0x121")] = w1;
        var w3 = [];
        this[b("0x2d9")](w2, w3, {});
        this[b("0xb4")] = w3;
        return w3;
      },
      collectSequences: function (w4, w5, w6) {
        var w7 = w4["nodeName"][b("0x68")]();
        if (w7 == b("0x2c2")) {
          var w8 = w4["nodeValue"];
          var w9 = this[b("0x35a")](w8, w6);
          w5[b("0x11e")](w9);
        } else if (w7 == "br") {
          w5[b("0x11e")](v3);
        } else {
          if (w7 == "color") w7 += "=" + w4[b("0x78")](b("0x99"));
          if (w7 == "a") w7 += "=" + w4["getAttribute"](b("0x269"));
          this[b("0x174")](w7, w6);
          for (var wa = 0x0; wa < w4[b("0x2ad")][b("0x39d")]; wa++) {
            var wb = w4["childNodes"][wa];
            this[b("0x2d9")](wb, w5, w6);
          }
          this["removeFromFormat"](w7, w6);
        }
      },
      createSequence: function (wc, wd) {
        return {
          text: wc,
          italic: wd["i"] > 0x0,
          bold: wd["b"] > 0x0,
          underline: wd["u"] > 0x0 || wd["a"],
          scriptOffset: wd[b("0x6e")]
            ? wd[b("0x6e")]
            : 0x0 - (wd[b("0x2a7")] ? wd["sub"] : 0x0),
          link: wd["a"] ? wd["a"] : null,
          color: wd["colors"]
            ? wd[b("0x382")][wd[b("0x382")][b("0x39d")] - 0x1]
            : null,
        };
      },
      addToFormat: function (we, wf) {
        if (we[b("0x3b3")](b("0x1a1")) == 0x0) {
          if (!wf[b("0x382")]) wf[b("0x382")] = [];
          var wg = we[b("0x3bc")]("=")[0x1];
          wf[b("0x382")][b("0x11e")](wg);
          return;
        }
        if (we[b("0x3b3")]("a=") == 0x0) {
          if (!wf[b("0x382")]) wf["colors"] = [];
          wf[b("0x382")][b("0x11e")](b("0x3b4"));
          var wh = we[b("0x3bc")]("=")[0x1];
          wf["a"] = wh;
          return;
        }
        var wi = wf[we];
        if (!wi) wi = 0x0;
        wi++;
        wf[we] = wi;
      },
      removeFromFormat: function (wj, wk) {
        if (wj["indexOf"](b("0x1a1")) == 0x0) {
          wk[b("0x382")][b("0x14d")]();
          return;
        }
        if (wj[b("0x3b3")]("a") == 0x0) {
          wk[b("0x382")]["pop"]();
          wk["a"] = null;
          return;
        }
        wk[wj]--;
      },
      drawUnderline: function (wl, wm, wn, wo) {
        if (!this["stroke"]) {
          if (this[b("0x2bf")] !== undefined)
            wl[b("0x25c")] = this[b("0x2bf")] * wl[b("0x351")];
          wl[b("0x7a")] = wl[b("0x1ec")];
        }
        if (wl[b("0x274")]) wl["setLineDash"]([]);
        wl["beginPath"]();
        wl[b("0x2b2")](wm, wn);
        wl[b("0x1f4")](wm + wo, wn);
        wl[b("0x20a")]();
      },
      getStyledLines: function (wp, wq, wr) {
        var ws = [];
        var wt = [];
        wt[b("0xde")] = 0x0;
        var wu = !![];
        var wv = 0x0;
        var ww = 0x0;
        var wx = this[b("0x204")];
        function wy() {
          ws["push"](wt);
          wt = [];
          wt["width"] = 0x0;
          ww += wx;
          wv = 0x0;
          wu = !![];
        }
        for (var wz = 0x0; wz < wq[b("0x39d")]; wz++) {
          var wA = wq[wz];
          if (wA === v3) {
            wy();
            continue;
          }
          this["applyFormat"](wp, wA);
          var wB = wA["text"];
          while (wB[b("0x39d")] > 0x0) {
            var wC = this[b("0x390")](wp, wB, wv, ww, wr, wu);
            wC[b("0x11d")] = wA;
            wt[b("0x11e")](wC);
            wt["width"] += wC[b("0xf1")];
            wB = wC[b("0x1a8")];
            if (wB[b("0x39d")] > 0x0) {
              wy();
            } else {
              wv += wC[b("0xf1")];
              wu = ![];
            }
          }
        }
        if (wt[b("0x39d")] > 0x0) ws[b("0x11e")](wt);
        return ws;
      },
      findWhitespace: function (wD, wE) {
        var wF = wD[b("0x315")](wE)[b("0x397")](/\s+/);
        return wF > -0x1 ? wF + wE : wD["length"];
      },
      fitInLine: function (wG, wH, wI, wJ, wK, wL) {
        if (wL) {
          while (wH["length"] > 0x0 && /\s/["test"](wH[b("0x53")](0x0))) {
            wH = wH[b("0x315")](0x1);
          }
        }
        var wM = wG["measureText"](wH);
        if (wI + wM[b("0xde")] > wK) {
          var wN = 0x0;
          var wO = 0x0;
          for (var wP = 0x0; wP <= wH["length"]; ) {
            var wQ = this["findWhitespace"](wH, wP);
            wM = wG["measureText"](wH["substring"](0x0, wQ));
            if (wI + wM["width"] > wK) {
              var wR = wH["substring"](0x0, wN);
              if (wR[b("0x39d")] == 0x0 && wL)
                return this["fitInLineWrapByChar"](wG, wH, wI, wJ, wK, wL);
              return {
                remaining: wH["substring"](wR["length"]),
                advance: wO,
                text: wR,
                dx: wI,
                dy: wJ,
              };
            }
            wN = wQ;
            wO = wM[b("0xde")];
            wP = wQ + 0x1;
          }
        }
        return {
          remaining: "",
          advance: wM["width"],
          text: wH,
          dx: wI,
          dy: wJ,
        };
      },
      fitInLineWrapByChar: function (wS, wT, wU, wV, wW, wX) {
        if (wX) {
          while (wT[b("0x39d")] > 0x0 && /\s/[b("0xa5")](wT["charAt"](0x0))) {
            wT = wT[b("0x315")](0x1);
          }
        }
        var wY = wS["measureText"](wT);
        if (wU + wY["width"] > wW) {
          var wZ = 0x0;
          for (var x0 = 0x1; x0 <= wT[b("0x39d")]; x0++) {
            wY = wS[b("0x1b0")](wT[b("0x315")](0x0, x0));
            if (wU + wY["width"] > wW) {
              var x5 = wT[b("0x315")](0x0, x0 - 0x1);
              if (x5[b("0x39d")] == 0x0 && wX) {
                x5 = wT[b("0x315")](0x0, 0x1);
                wZ = wY[b("0xde")];
              }
              return {
                remaining: wT[b("0x315")](x5[b("0x39d")]),
                advance: wZ,
                text: x5,
                dx: wU,
                dy: wV,
              };
            }
            wZ = wY[b("0xde")];
          }
        }
        return {
          remaining: "",
          advance: wY[b("0xde")],
          text: wT,
          dx: wU,
          dy: wV,
        };
      },
      applyFormat: function (x6, x7) {
        var x8 = "";
        var x9 = x6[b("0x351")];
        for (var xa = 0x0; xa < Math[b("0x10c")](x7[b("0x3bd")]); xa++) {
          x9 *= 0x42 / 0x64;
        }
        if (x7[b("0x7d")]) x8 = "bold\x20" + x8;
        if (x7["italic"]) x8 = b("0x156") + x8;
        x8 += this[b("0x113")][b("0xcf")](x9);
        x6["font"] = x8;
        if (x7[b("0x1a1")]) x6[b("0x1ec")] = x7["color"];
        else x6["fillStyle"] = this[b("0xfc")];
        x6["_mf_currentLink"] = x7[b("0x14f")];
      },
      measureStyledText: function (xb, xc) {
        var xd = this[b("0x13a")];
        if (this[b("0x360")] === "")
          return new v1[b("0x192")](
            xd["left"] + xd[b("0x31")],
            xd[b("0x1dc")] + xd[b("0x28f")]
          );
        var xe = this["ignoreTransform"] ? 0x1 : xb[b("0x351")];
        xb[b("0x2bd")]();
        this[b("0x204")] = this[b("0x113")]["size"] * xe;
        if (xc != Number[b("0x28b")]) xc *= xe;
        if (!this[b("0x37e")]) xb[b("0x130")](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
        var xf = this[b("0x1a0")](this[b("0x360")]);
        var xg = this["getStyledLines"](xb, xf, xc);
        xb[b("0x2a")]();
        var xh = this[b("0x204")] * xg[b("0x39d")];
        var xi = 0x0;
        for (var xj = 0x0; xj < xg[b("0x39d")]; xj++) {
          xi = Math[b("0x1fd")](xi, xg[xj][b("0xde")]);
        }
        if (!this[b("0x37e")]) xi += 0x1;
        return new v1["Size"](
          xi / xe + xd[b("0x20")] + xd["right"],
          xh / xe + xd[b("0x1dc")] + xd[b("0x28f")]
        );
      },
      getDefaultProperty: function () {
        return this[b("0x360")];
      },
      setDefaultProperty: function (xk) {
        this[b("0x360")] = xk;
      },
      getDefaultValue: function () {
        return "";
      },
      measure: function (xl, xm) {
        var xn = v1[b("0xb8")][b("0x26d")];
        if (!this["text"])
          return new v1[b("0x192")](
            this[b("0x13a")][b("0xde")](),
            this["padding"][b("0x338")]()
          );
        if (xl) xl -= this[b("0x13a")][b("0xde")]();
        var xo = xn[b("0x259")](
          this[b("0x360")],
          this[b("0x113")],
          null,
          this["enableStyledText"]
        );
        if (xl && xo[b("0xde")] > xl) {
          var xp = xl ? xl : Number[b("0x28b")];
          var xq = new v1[b("0x5")](0x0, 0x0, xp, Number[b("0x28b")]);
          xo = xn["measureString"](
            this[b("0x360")],
            this["font"],
            xq,
            this[b("0x1cc")]
          );
        }
        this[b("0x2ac")] = xo["width"] + this["padding"]["width"]();
        this[b("0xb2")] = xo[b("0x338")] + this[b("0x13a")][b("0x338")]();
      },
      effectiveMeasuredWidth: function () {
        return this["desiredWidth"];
      },
      effectiveMeasuredHeight: function () {
        return this[b("0xb2")];
      },
      createSvgElement: function (xr) {
        if (this["text"] == "") return null;
        var xs = xr[b("0x32a")];
        var xt = xs["fillText"];
        var xu = xs[b("0x351")];
        var xv = 0x8;
        var xw = 0x4;
        if (this[b("0x37e")] || this[b("0x1cc")]) {
          xv = 0x0;
          xw = -0x1;
          if (this[b("0x37e")]) xu = 0x1;
        }
        var xx = xr[b("0x321")](b("0x391"), "g");
        var xy = this[b("0x0")][b("0x36e")]();
        var xz = "";
        if (this["rotationAngle"])
          xz +=
            b("0x19f") +
            this[b("0xc5")] +
            "\x20" +
            xy["x"] +
            "\x20" +
            xy["y"] +
            ")";
        xz += b("0x2ee") + 0x1 / xu + ")";
        xx[b("0x2d")](b("0x3aa"), xz);
        try {
          xs[b("0x312")] = function (xA, xB, xC) {
            var xD = xr["createElementNS"](b("0x391"), b("0x360"));
            xD["textContent"] = xA;
            xD[b("0x2d")](b("0x20a"), b("0xc"));
            xD[b("0x2d")](b("0x27c"), xs["fillStyle"]);
            xD[b("0x2d")](b("0x9f"), b("0x27") + xs["font"]);
            xD[b("0x2d")]("x", xB - xv);
            xD[b("0x2d")]("y", xC - xw);
            switch (xs[b("0x2f9")]) {
              case "left":
                xD[b("0x2d")](b("0x3c2"), "start");
                break;
              case b("0x36e"):
                xD[b("0x2d")](b("0x3c2"), b("0x19b"));
                break;
              case "right":
                xD["setAttribute"]("text-anchor", b("0x141"));
                break;
            }
            xx[b("0x5a")](xD);
          };
          this[b("0x297")](xs, ![]);
        } catch (xE) {}
        xs[b("0x312")] = xt;
        return xx;
      },
      pen: b("0x325"),
      bounds: null,
      lines: null,
      font: new v1[b("0x9b")]("sans-serif", 0x4),
    };
    v4["wrapText"] = function (xF, xG, xH) {
      var xI = xG[b("0x3bc")]("\x0a");
      if (xH == Number[b("0x28b")]) return xI;
      var xJ = [];
      v2[b("0x31e")](xI, function (xK) {
        v4[b("0x31c")](xF, xK, xH, xJ);
      });
      return xJ;
    };
    v4[b("0x31c")] = function (xL, xM, xN, xO) {
      var xP = xM[b("0x3bc")]("\x20");
      var xQ = "";
      for (var xR = 0x0; xR < xP[b("0x39d")]; xR++) {
        var xS = xP[xR];
        var xT = xL[b("0x1b0")](xQ + xS)[b("0xde")];
        if (xT < xN) {
          if (xR == 0x0) xQ += xS;
          else xQ += "\x20" + xS;
        } else {
          if (xQ != "") xO[b("0x11e")](xQ);
          xQ = xS;
        }
        if (xR == xP[b("0x39d")] - 0x1) {
          xO[b("0x11e")](xQ);
          break;
        }
      }
    };
    v4[b("0x320")] = function (xU, xV, xW, xX) {
      xW[b("0x2bd")]();
      xW[b("0x314")](xX, xX);
      xW[b("0x113")] = xV;
      var xY = xU[b("0x3bc")](/\s{1,}/);
      var xZ = 0x0;
      var y0 = 0x0;
      for (var y5 = 0x0; y5 < xY[b("0x39d")]; y5++) {
        xZ = xW[b("0x1b0")](xY[y5])[b("0xde")];
        if (xZ > y0) {
          y0 = xZ;
        }
      }
      xW[b("0x2a")]();
      return y0;
    };
    MindFusion[b("0x230")](v4, b("0x227"));
    var v5 = { Near: 0x0, Center: 0x1, Far: 0x2 };
  })(MindFusion[b("0x52")]);
  MindFusion[b("0x52")][b("0x267")] = function (y6, y7) {
    this["x"] = y6;
    this["y"] = y7;
    this[b("0x309")] = this[b("0x5e")][b("0x7b")];
  };
  MindFusion[b("0x52")][b("0x267")][b("0x235")] = {
    getType: function () {
      return this[b("0x309")];
    },
    clone: function () {
      return new MindFusion[b("0x52")][b("0x267")](this["x"], this["y"]);
    },
    length: function () {
      return Math[b("0x24a")](
        MindFusion[b("0x52")]["Vector"][b("0x37a")](this, this)
      );
    },
    lengthSquared: function () {
      return MindFusion[b("0x52")]["Vector"][b("0x37a")](this, this);
    },
    negate: function () {
      return new MindFusion[b("0x52")][b("0x267")](-this["x"], -this["y"]);
    },
    normalize: function () {
      return new MindFusion[b("0x52")][b("0x267")](
        this["x"] / this[b("0x39d")](),
        this["y"] / this[b("0x39d")]()
      );
    },
    toPoint: function () {
      return new MindFusion[b("0x52")][b("0x288")](this["x"], this["y"]);
    },
  };
  MindFusion[b("0x52")][b("0x267")][b("0x2f1")] = function (y8, y9) {
    return new MindFusion[b("0x52")][b("0x267")](
      y9["x"] - y8["x"],
      y9["y"] - y8["y"]
    );
  };
  MindFusion[b("0x52")]["Vector"][b("0x37a")] = function (ya, yb) {
    return ya["x"] * yb["x"] + ya["y"] * yb["y"];
  };
  MindFusion[b("0x52")][b("0x267")][b("0x1ee")] = function (yc, yd) {
    return new MindFusion[b("0x52")][b("0x267")](yc["x"] * yd, yc["y"] * yd);
  };
  MindFusion["Drawing"][b("0x267")][b("0x199")] = function (ye, yf) {
    return new MindFusion["Drawing"][b("0x267")](
      ye["x"] * (0x1 / yf),
      ye["y"] * (0x1 / yf)
    );
  };
  MindFusion[b("0x52")][b("0x267")][b("0xba")] = function (yg, yh) {
    return new MindFusion[b("0x52")][b("0x267")](
      yg["x"] + yh["x"],
      yg["y"] + yh["y"]
    );
  };
  MindFusion[b("0x52")]["Vector"][b("0x2a7")] = function (yi, yj) {
    return new MindFusion["Drawing"][b("0x267")](
      yi["x"] - yj["x"],
      yi["y"] - yj["y"]
    );
  };
  MindFusion[b("0x230")](MindFusion["Drawing"][b("0x267")], b("0xfe"));
  (function (yk) {
    var yl = (yk[b("0x24e")] = function (ym) {
      this[b("0x387")] = ![];
      this[b("0x33a")] = document["createElement"](b("0x33a"));
      this["video"][b("0x206")] = !![];
      var yn = this;
      this["video"][b("0x1fb")] = function () {
        yn[b("0x369")]();
      };
      this["bounds"] = ym;
      this[b("0x33a")][b("0x2d")](b("0x206"), b("0x206"));
      this[b("0x3aa")] = new yk[b("0x1e3")]();
      this[b("0x309")] = this[b("0x5e")][b("0x7b")];
    });
    yk[b("0x24e")][b("0x235")] = {
      getType: function () {
        return this[b("0x309")];
      },
      clone: function () {
        return new yl(
          new yk[b("0x5")](
            this["bounds"]["x"],
            this["bounds"]["y"],
            this[b("0x0")][b("0xde")],
            this[b("0x0")][b("0x338")]
          )
        );
      },
      setBounds: function (yo) {
        this["bounds"] = yo;
      },
      getBounds: function () {
        return this[b("0x0")];
      },
      draw: function (yp) {
        if (this[b("0x33a")] == null) return;
        if (this[b("0x33a")][b("0x37f")] !== "") {
          yp["save"]();
          yp[b("0x3aa")][b("0x1e6")](yp, this[b("0x3aa")][b("0x8c")]());
          yp[b("0x6c")](
            this[b("0x33a")],
            this[b("0x0")]["x"],
            this["bounds"]["y"],
            this[b("0x0")]["width"],
            this[b("0x0")][b("0x338")]
          );
          if (this[b("0x22c")]()) {
            this[b("0x369")](!![]);
          }
          yp[b("0x2a")]();
        }
      },
      getMediaLocation: function () {
        return this[b("0x177")];
      },
      setMediaLocation: function (yq) {
        if (this["mediaLocation"] !== yq) {
          this[b("0x177")] = yq;
          this[b("0x33a")][b("0x37f")] = yq;
        }
      },
      play: function () {
        if (!this[b("0x22c")]()) {
          this[b("0x33a")][b("0x1bd")]();
          this[b("0x369")]();
          return !![];
        }
        return ![];
      },
      isPlaying: function () {
        var yr =
          !this[b("0x33a")][b("0xb6")] &&
          !this[b("0x33a")][b("0x18f")] &&
          this[b("0x33a")][b("0x89")] > 0x2;
        return yr;
      },
      pause: function () {
        return this[b("0x33a")]["pause"]();
      },
      getDefaultProperty: function () {
        return this[b("0x33a")][b("0x37f")];
      },
      setDefaultProperty: function (ys) {
        this[b("0x33a")][b("0x37f")] = ys;
      },
      getDefaultValue: function () {
        return "";
      },
      setParentComponent: function (yt) {
        this[b("0x333")] = yt;
      },
      invalidate: function (yu) {
        if (this[b("0x333")] && this[b("0x333")]["invalidate"]) {
          this[b("0x333")][b("0x369")](yu);
        }
      },
      removedFromDiagram: function () {
        this[b("0x33a")][b("0x24f")] = 0x0;
        this["pause"]();
      },
      mediaLocation: "",
      bounds: null,
      transform: null,
      video: null,
    };
    MindFusion[b("0x230")](yk[b("0x24e")], b("0x2f3"));
  })(MindFusion["Drawing"]);
  MindFusion[b("0x26b")](b("0x191"));
  (function (yv) {
    var yw = MindFusion[b("0x52")][b("0x5")];
    var yx = MindFusion["Drawing"][b("0x288")];
    var yy = (yv[b("0x202")] = function () {});
    yy[b("0x2ca")] = function (yz, yA) {
      var yB = new yx(0x32, 0x32);
      if (yA[b("0xde")] > 0x0 && yA[b("0x338")] > 0x0) {
        yB["x"] = ((yz["x"] - yA["x"]) * 0x64) / yA["width"];
        yB["y"] = ((yz["y"] - yA["y"]) * 0x64) / yA[b("0x338")];
      }
      return yB;
    };
    yy[b("0x32")] = function (yC, yD) {
      if (yC[b("0xde")] === 0x0 || yC[b("0x338")] === 0x0) {
        return yD;
      }
      return yC[b("0x1ab")](yD);
    };
    yy[b("0x23e")] = function (yE) {
      var yF = new yw(0x0, 0x0, 0x0, 0x0);
      yF["x"] = Math[b("0x208")](yE["x"], yE[b("0x31")]());
      yF[b("0xde")] = Math["abs"](yE[b("0xde")]);
      yF["y"] = Math[b("0x208")](yE["y"], yE[b("0x28f")]());
      yF[b("0x338")] = Math["abs"](yE[b("0x338")]);
      return yF;
    };
    yy[b("0x57")] = function (yG, yH, yI) {
      if (yG[b("0xde")] + 0x2 * yH < 0x0) {
        yH = -yG["width"] / 0x2;
      }
      if (yG[b("0x338")] + 0x2 * yI < 0x0) {
        yI = -yG[b("0x338")] / 0x2;
      }
      return new yw(
        yG["x"] - yH,
        yG["y"] - yI,
        yG["width"] + 0x2 * yH,
        yG[b("0x338")] + 0x2 * yI
      );
    };
    yy["distToPolyline"] = function (yJ, yK, yL, yM) {
      var yN = Number[b("0x28b")];
      if (yM) yM[b("0x99")] = 0x0;
      for (var yO = 0x0; yO < yL - 0x1; ++yO) {
        var yP = yK[yO];
        var yQ = yK[yO + 0x1];
        var yR = new MindFusion[b("0x52")]["DistanceToSegment"](yJ, yP, yQ);
        var yS = yR["distanceToSegmentSquared"]();
        if (yS < yN) {
          yN = yS;
          if (yM) yM[b("0x99")] = yO;
        }
      }
      return Math["sqrt"](yN);
    };
    yy[b("0x80")] = function (yT, yU, yV, yW) {
      return (
        this[b("0x20d")](yT, yU, yV) * this[b("0x20d")](yT, yU, yW) <= 0x0 &&
        this[b("0x20d")](yV, yW, yT) * this[b("0x20d")](yV, yW, yU) <= 0x0
      );
    };
    yy[b("0x20d")] = function (yX, yY, yZ) {
      var z0, z1;
      var z2, z3;
      z0 = yY["x"] - yX["x"];
      z1 = yZ["x"] - yX["x"];
      z2 = yY["y"] - yX["y"];
      z3 = yZ["y"] - yX["y"];
      return z0 * z3 > z2 * z1 ? 0x1 : -0x1;
    };
    yy[b("0x3ce")] = function (z4, z5, z6, z7) {
      if (z4["x"] == z5["x"] && z6["x"] == z7["x"]) return undefined;
      if (z4["x"] == z5["x"]) {
        var z9 = (z6["y"] - z7["y"]) / (z6["x"] - z7["x"]);
        var zb = (z6["x"] * z7["y"] - z7["x"] * z6["y"]) / (z6["x"] - z7["x"]);
        return new yx(z4["x"], z9 * z4["x"] + zb);
      }
      if (z6["x"] == z7["x"]) {
        if (z4["y"] == z5["y"]) return new yx(z6["x"], z4["y"]);
        var z9 = (z4["y"] - z5["y"]) / (z4["x"] - z5["x"]);
        var zb = (z4["x"] * z5["y"] - z5["x"] * z4["y"]) / (z4["x"] - z5["x"]);
        return new yx(z6["x"], z9 * z6["x"] + zb);
      }
      var zc = (z4["y"] - z5["y"]) / (z4["x"] - z5["x"]);
      var zd = (z4["x"] * z5["y"] - z5["x"] * z4["y"]) / (z4["x"] - z5["x"]);
      var ze = (z6["y"] - z7["y"]) / (z6["x"] - z7["x"]);
      var zf = (z6["x"] * z7["y"] - z7["x"] * z6["y"]) / (z6["x"] - z7["x"]);
      if (zc == ze) return undefined;
      var zg = new yx((zf - zd) / (zc - ze), (zc * (zf - zd)) / (zc - ze) + zd);
      if (z4["y"] == z5["y"]) zg["y"] = z4["y"];
      return zg;
    };
    yy[b("0x1e2")] = function (zh, zi, zj, zk) {
      var zl = yy[b("0x3ce")](zh, zi, zj, zk);
      if (!zl) return zl;
      var zm = (zl["x"] - zh["x"]) * (zl["x"] - zi["x"]);
      var zn = (zl["y"] - zh["y"]) * (zl["y"] - zi["y"]);
      if (zm > 0.0001 || zn > 0.0001) return undefined;
      var zo = (zl["x"] - zj["x"]) * (zl["x"] - zk["x"]);
      var zp = (zl["y"] - zj["y"]) * (zl["y"] - zk["y"]);
      if (zo > 0.0001 || zp > 0.0001) return undefined;
      return zl;
    };
    yy[b("0x308")] = function (zq, zr) {
      var zs = 0x0;
      zr = zr["slice"](0x0);
      for (var zu = 0x0; zu < zr[b("0x39d")]; ++zu) {
        zr[zu]["x"] -= zq["x"];
        zr[zu]["y"] -= zq["y"];
      }
      for (var zu = 0x0; zu < zr["length"]; ++zu) {
        var zv = (zu + 0x1) % zr[b("0x39d")];
        if (
          (zr[zu]["y"] > 0x0 && zr[zv]["y"] <= 0x0) ||
          (zr[zv]["y"] > 0x0 && zr[zu]["y"] <= 0x0)
        ) {
          var zw =
            (zr[zu]["x"] * zr[zv]["y"] - zr[zv]["x"] * zr[zu]["y"]) /
            (zr[zv]["y"] - zr[zu]["y"]);
          if (zw > 0x0) zs++;
        }
      }
      return zs % 0x2 == 0x1;
    };
    yy["getPolygonIntersection"] = function (zx, zy, zz, zA) {
      var zB,
        zC,
        zD = Number[b("0x28b")];
      for (var zE = 0x0; zE < zx["length"]; zE++) {
        zC = yy[b("0x1e2")](zx[zE], zx[(zE + 0x1) % zx["length"]], zy, zz);
        if (zC) {
          zB = yy[b("0x7f")](zC, zz);
          if (zB < zD) {
            zD = zB;
            zA["x"] = zC["x"];
            zA["y"] = zC["y"];
          }
        }
      }
      return zD < Number[b("0x28b")];
    };
    yy["getClosestSegmentPoint"] = function (zF, zG, zH) {
      if (zG[b("0x33d")](zH)) return zG;
      var zI = zH["x"] - zG["x"];
      var zJ = zH["y"] - zG["y"];
      var zK = (zF["x"] - zG["x"]) * zI + (zF["y"] - zG["y"]) * zJ;
      if (zK < 0x0) return zG;
      zK = (zH["x"] - zF["x"]) * zI + (zH["y"] - zF["y"]) * zJ;
      if (zK < 0x0) return zH;
      var zL = yy[b("0x345")]({ x: zG["x"] - zH["x"], y: zG["y"] - zH["y"] });
      var zM = new yx(zF["x"] + zL["x"], zF["y"] + zL["y"]);
      return yy[b("0x3ce")](zG, zH, zF, zM);
    };
    yy[b("0x345")] = function (zN) {
      return { x: zN["y"], y: -zN["x"] };
    };
    yy[b("0x1f3")] = function (zO, zP) {
      var zQ = new yx(zP["x"] - zO["x"], zP["y"] - zO["y"]);
      var zR = new yx(zQ["x"] + zP["x"], zQ["y"] + zP["y"]);
      return zR;
    };
    yy[b("0x385")] = function (zS, zT, zU) {
      var zV = zT["x"] - zS["x"];
      var zW = zT[b("0x31")]() - zS["x"];
      var zX = zT["y"] - zS["y"];
      var zY = zT[b("0x28f")]() - zS["y"];
      if (zW < 0x0) {
        if (zX > 0x0) {
          return zW * zW + zX * zX < zU * zU;
        } else if (zY < 0x0) {
          return zW * zW + zY * zY < zU * zU;
        } else {
          return Math[b("0x10c")](zW) < zU;
        }
      } else if (zV > 0x0) {
        if (zX > 0x0) {
          return zV * zV + zX * zX < zU * zU;
        } else if (zY < 0x0) {
          return zV * zV + zY * zY < zU * zU;
        } else {
          return Math[b("0x10c")](zV) < zU;
        }
      } else {
        if (zX > 0x0) {
          return Math[b("0x10c")](zX) < zU;
        } else if (zY < 0x0) {
          return Math[b("0x10c")](zY) < zU;
        } else {
          return !![];
        }
      }
    };
    yy[b("0x83")] = function (zZ, A0) {
      var A1 = yy[b("0x131")](zZ, A0);
      return yx[b("0xc7")](zZ, A1);
    };
    yy[b("0x131")] = function (A2, A3) {
      return new yx(
        yy[b("0x3d2")](A2["x"], A3["x"], A3["right"]()),
        yy[b("0x3d2")](A2["y"], A3["y"], A3[b("0x28f")]())
      );
    };
    yy[b("0x3d2")] = function (A4, A5, A6) {
      var A7, A8;
      var A9 = yy["closer"](A4, A5, A6, A7, A8);
      A7 = A9["a"];
      A8 = A9["b"];
      if (yy[b("0xce")](A4, A7, A8)) {
        return A4;
      } else {
        return A7;
      }
    };
    yy[b("0xa")] = function (Aa, Ab) {
      return Math[b("0x10c")](Aa - Ab) < 0.00001;
    };
    yy[b("0x3c0")] = function (Ac, Ad) {
      return yy[b("0xa")](Ac["x"], Ad["x"]) && yy[b("0xa")](Ac["y"], Ad["y"]);
    };
    yy[b("0x2fa")] = function (Ae, Af) {
      return new yx((Ae["x"] + Af["x"]) / 0x2, (Ae["y"] + Af["y"]) / 0x2);
    };
    yy["closer"] = function (Ag, Ah, Ai, Aj, Ak) {
      var Al = yy["sort"](Ah, Ai);
      Ah = Al["a"];
      Ai = Al["b"];
      var Am;
      if (Ag < Ah) {
        Am = !![];
      } else if (Ag > Ai) {
        Am = ![];
      } else {
        Am = Ag - Ah < Ai - Ag;
      }
      if (Am) {
        Aj = Ah;
        Ak = Ai;
      } else {
        Aj = Ai;
        Ak = Ah;
      }
      return { a: Aj, b: Ak };
    };
    yy[b("0x263")] = function (An, Ao) {
      var Ap = An;
      An = Ao;
      Ao = Ap;
      return { a: An, b: Ao };
    };
    yy["sort"] = function (Aq, Ar) {
      if (Ar < Aq) {
        var As = yy["swap"](Aq, Ar);
        Aq = As["a"];
        Ar = As["b"];
      }
      return { a: Aq, b: Ar };
    };
    yy[b("0xce")] = function (At, Au, Av) {
      var Aw = yy[b("0x1a")](Au, Av);
      Au = Aw["a"];
      Av = Aw["b"];
      return yy[b("0x3b5")](At, Au, Av);
    };
    yy[b("0x3b5")] = function (Ax, Ay, Az) {
      return Ay <= Ax && Ax <= Az;
    };
    yy["subtract"] = function (AA, AB) {
      return { x: AA["x"] - AB["x"], y: AA["y"] - AB["y"] };
    };
    yy[b("0x2b5")] = function (AC, AD, AE) {
      if (AC[b("0x39d")] !== AD[b("0x39d")]) {
        return;
      }
      for (var AF = 0x0; AF < AC[b("0x39d")]; ++AF) {
        var AG = AD[AF][b("0x32c")]();
        AC[AF] = AG["addVector"](AE);
      }
    };
    yy[b("0x359")] = function (AH, AI) {
      return new yx(
        AI["x"] + (AH["x"] / 0x64) * AI["width"],
        AI["y"] + (AH["y"] / 0x64) * AI[b("0x338")]
      );
    };
    yy[b("0x16a")] = function (AJ, AK) {
      AJ[b("0xde")] = AK["width"];
      AJ[b("0x338")] = AK[b("0x338")];
      AJ["setLocation"](AK[b("0x1c7")]());
    };
    yy[b("0x3b5")] = function (AL, AM, AN) {
      return AM <= AL && AL <= AN;
    };
    yy["getLineHitTest"] = function (AO) {
      return 0x5 * MindFusion[b("0x52")][b("0x393")]["getMillimeter"](AO);
    };
    yy[b("0x7f")] = function (AP, AQ) {
      return (
        (AP["x"] - AQ["x"]) * (AP["x"] - AQ["x"]) +
        (AP["y"] - AQ["y"]) * (AP["y"] - AQ["y"])
      );
    };
    yy[b("0x3a8")] = function (AR) {
      return (AR / 0xb4) * Math["PI"];
    };
    yy[b("0x1b6")] = function (AS) {
      return (AS / Math["PI"]) * 0xb4;
    };
    yy["rotatePointAt"] = function (AT, AU, AV) {
      var AW = new MindFusion[b("0x52")][b("0x1e3")]();
      AW[b("0x279")](AV, AU["x"], AU["y"]);
      AT = AT["clone"]();
      AW[b("0x10f")](AT);
      return AT;
    };
    yy[b("0xa8")] = function (AX, AY, AZ) {
      var B0 = new MindFusion[b("0x52")][b("0x1e3")]();
      B0[b("0x279")](AZ, AY["x"], AY["y"]);
      for (var B1 = 0x0, B2 = AX[b("0x39d")]; B1 < B2; ++B1) {
        B0["transformPoint"](AX[B1]);
      }
    };
    yy[b("0xb7")] = function (B3) {
      return new yx(
        B3["x"] + B3[b("0xde")] / 0x2,
        B3["y"] + B3[b("0x338")] / 0x2
      );
    };
    yy[b("0x17c")] = function (B4, B5, B6) {
      if (B6 == 0x0) return B4;
      var B7 = new MindFusion[b("0x52")]["Matrix"]();
      B7[b("0x279")](B6, B5["x"], B5["y"]);
      return B7["transformRect"](B4);
    };
    yy["getBounds"] = function (B8) {
      var B9 = yy[b("0x1c2")]();
      var Ba = mflayer[b("0xa0")](B8);
      if (navigator[b("0x127")][b("0x68")]()["indexOf"](b("0x2fc")) > -0x1) {
        if (B9[b("0x1a6")] != 0x0 || B9[b("0x6a")] != 0x0) {
          var Bb = B8[b("0x328")]();
          if (Ba["x"] - Bb[b("0x20")] < 0x1 && Ba["y"] - Bb[b("0x1dc")] < 0x1) {
            Ba["x"] += B9[b("0x1a6")];
            Ba["y"] += B9[b("0x6a")];
          }
        }
      }
      return Ba;
    };
    yy[b("0x281")] = function (Bc, Bd) {
      Bc[b("0x9f")][b("0x20")] = Bd["x"] + "px";
      Bc["style"][b("0x1dc")] = Bd["y"] + "px";
      Bc[b("0x9f")][b("0xde")] = Bd[b("0xde")] + "px";
      Bc[b("0x9f")][b("0x338")] = Bd[b("0x338")] + "px";
    };
    yy[b("0x1c2")] = function () {
      var Be = 0x0;
      var Bf = 0x0;
      if (window["pageXOffset"] != undefined) {
        Be = window["pageXOffset"];
      } else {
        if (document[b("0x2eb")][b("0x6a")] !== 0x0) {
          Be = document[b("0x2eb")][b("0x1a6")];
        } else {
          Be = document["documentElement"]["scrollLeft"];
        }
      }
      if (window[b("0x1d")] != undefined) {
        Bf = window[b("0x1d")];
      } else {
        if (document[b("0x2eb")][b("0x6a")] !== 0x0) {
          Bf = document[b("0x2eb")][b("0x6a")];
        } else {
          Bf = document[b("0x137")]["scrollTop"];
        }
      }
      return { scrollLeft: Be, scrollTop: Bf };
    };
    yy["getCursorPos"] = function (Bg, Bh) {
      var Bi = yy[b("0x1c2")]();
      var Bj = mflayer["getBounds"](Bh);
      var Bk = Bg[b("0x3d1")] - Bj["x"] + Bi[b("0x1a6")];
      var Bl = Bg[b("0x306")] - Bj["y"] + Bi[b("0x6a")];
      if (navigator[b("0x127")][b("0x68")]()[b("0x3b3")]("chrome") > -0x1) {
        if (Bi[b("0x1a6")] != 0x0 || Bi[b("0x6a")] != 0x0) {
          var Bm = Bh[b("0x328")]();
          if (Bj["x"] - Bm[b("0x20")] < 0x1 && Bj["y"] - Bm[b("0x1dc")] < 0x1) {
            Bk -= Bi[b("0x1a6")];
            Bl -= Bi["scrollTop"];
          }
        }
      }
      return new yx(Bk, Bl);
    };
    yy[b("0x38")] = function (Bn) {
      var Bo = yy[b("0x1c2")]();
      var Bp = Bn[b("0x3d1")] + Bo[b("0x1a6")];
      var Bq = Bn["clientY"] + Bo[b("0x6a")];
      return new yx(Bp, Bq);
    };
    yy[b("0x96")] = function (Br, Bs) {
      var Bt = [];
      if (Bs == undefined) Bs = document;
      if (Bs[b("0x3a1")]["toUpperCase"]() == Br[b("0x20f")]())
        Bt[b("0x11e")](Bs);
      var Bu = Bs["childNodes"];
      for (var Bv = 0x0; Bv < Bu[b("0x39d")]; Bv++) {
        if (Bu[Bv]["tagName"]) {
          if (Bu[Bv]["tagName"][b("0x20f")]() == Br[b("0x20f")]())
            Bt[b("0x11e")](Bu[Bv]);
        }
      }
      return Bt;
    };
    yy[b("0x3")] = function (Bw, Bx, By, Bz) {
      if (!Bx) return Bz ? "#000000" : b("0x45");
      if (Bx[b("0x309")] == b("0x5d")) {
        if (typeof Bx[b("0x1a1")] == b("0x280")) return Bx["color"];
        else if (Bx["color"][b("0x99")]) return Bx[b("0x1a1")][b("0x99")];
      } else if (Bx[b("0x309")] == b("0x15d")) {
        if (!Bw) return "#FFFFFF";
        var BB = Bx["x1"] ? Bx["x1"] : By["x"];
        var BD = Bx["y1"] ? Bx["y1"] : By["y"] + By[b("0x338")] / 0x2;
        var BF = Bx["x2"] ? Bx["x2"] : By["x"] + By[b("0xde")];
        var BH = Bx["y2"] ? Bx["y2"] : By["y"] + By[b("0x338")] / 0x2;
        if (Bx[b("0x9a")]) {
          if (Bx[b("0x9a")] === 0xb4) {
            BB = By["x"] + By["width"] / 0x2;
            BD = By["y"] + By[b("0x338")] / 0x2;
            BF = By["x"];
            BH = By["y"] + By["height"] / 0x2;
          } else if (Bx[b("0x9a")] === 0x5a) {
            BB = By["x"] + By["width"] / 0x2;
            BD = By["y"];
            BF = By["x"] + By["width"] / 0x2;
            BH = By["y"] + By["height"];
          } else if (Bx["angle"] === 0x10e) {
            BB = By["x"] + By["width"] / 0x2;
            BD = By["y"] + By[b("0x338")];
            BF = By["x"] + By[b("0xde")] / 0x2;
            BH = By["y"];
          } else {
            var BI = new yx(
              By["x"] + By["width"] / 0x2,
              By["y"] + By[b("0x338")] / 0x2
            );
            var BJ = Bx[b("0x9a")];
            var BK;
            BJ = ((BJ % 0x168) + 0x168) % 0x168;
            if (BJ >= 0x0 && BJ < 0x5a) {
              var BO = MindFusion["Geometry"]["cartesianToPolarDegrees"](
                BI,
                By["topRight"]()
              )["a"];
              BK = BJ - BO;
            } else if (BJ >= 0x5a && BJ < 0xb4) {
              var BO = MindFusion["Geometry"][b("0x215")](BI, By[b("0x1c7")]())[
                "a"
              ];
              BK = BJ - BO;
            } else if (BJ >= 0xb4 && BJ < 0x10e) {
              var BO = MindFusion[b("0x287")][b("0x215")](
                BI,
                By["bottomLeft"]()
              )["a"];
              BK = BJ - BO;
            } else {
              var BO = MindFusion[b("0x287")][b("0x215")](BI, By[b("0x116")]())[
                "a"
              ];
              BK = BJ - BO;
            }
            var BP = Math["sqrt"](
              (By[b("0xde")] * By["width"]) / 0x4 +
                (By[b("0x338")] * By[b("0x338")]) / 0x4
            );
            if (BK !== 0x0) {
              BP =
                BP *
                Math[b("0x2be")](
                  MindFusion[b("0x287")][b("0x2df")](
                    0x5a - Math[b("0x10c")](BK)
                  )
                );
            }
            var BQ = MindFusion["Geometry"]["polarToCartesianDegrees"](BI, {
              a: BJ,
              r: BP,
            });
            var BR = MindFusion["Geometry"]["polarToCartesianDegrees"](BI, {
              a: BJ - 0xb4,
              r: BP,
            });
            BB = BQ["x"];
            BD = BQ["y"];
            BF = BR["x"];
            BH = BR["y"];
          }
        }
        var BT = Bw["createLinearGradient"](BB, BD, BF, BH);
        if (Bx[b("0x14c")]) {
          for (var BV = 0x0, BX = Bx["colorStops"][b("0x39d")]; BV < BX; BV++) {
            BT[b("0x4a")](
              Bx[b("0x14c")][BV][b("0x2ce")],
              Bx[b("0x14c")][BV]["color"]
            );
          }
        } else {
          BT["addColorStop"](0x0, Bx[b("0x104")]);
          BT["addColorStop"](0x1, Bx[b("0x212")]);
        }
        return BT;
      } else if (Bx[b("0x309")] == b("0x15f")) {
        if (!Bw) return b("0x45");
        var BB = Bx["x1"] != undefined ? Bx["x1"] : By[b("0x36e")]()["x"];
        var BD = Bx["y1"] != undefined ? Bx["y1"] : By[b("0x36e")]()["y"];
        var BF = Bx["x2"] != undefined ? Bx["x2"] : By[b("0x36e")]()["x"];
        var BH = Bx["y2"] != undefined ? Bx["y2"] : By[b("0x36e")]()["y"];
        var BY = Bx[b("0x2e6")] != undefined ? Bx[b("0x2e6")] : 0x0;
        var BZ =
          Bx[b("0x39c")] != undefined
            ? Bx[b("0x39c")]
            : Math["max"](By[b("0xde")], By[b("0x338")]) / 0x2;
        var BT = Bw["createRadialGradient"](BB, BD, BY, BF, BH, BZ);
        if (Bx["colorStops"]) {
          for (var BV = 0x0, BX = Bx[b("0x14c")][b("0x39d")]; BV < BX; BV++) {
            BT[b("0x4a")](
              Bx[b("0x14c")][BV][b("0x2ce")],
              Bx["colorStops"][BV][b("0x1a1")]
            );
          }
        } else {
          BT["addColorStop"](0x0, Bx[b("0x104")]);
          BT[b("0x4a")](0x1, Bx["color2"]);
        }
        return BT;
      } else {
        return Bx;
      }
    };
    yy["getBrushColor"] = function (C0) {
      if (!C0) return b("0x45");
      if (C0[b("0x309")] == b("0x5d")) {
        if (typeof C0[b("0x1a1")] == "string") return C0[b("0x1a1")];
        else if (C0[b("0x1a1")]["value"]) return C0[b("0x1a1")][b("0x99")];
      } else if (C0[b("0x309")] == b("0x15d") || C0[b("0x309")] == b("0x15f")) {
        if (C0["colorStops"]) return C0[b("0x14c")][0x0][b("0x1a1")];
        else return C0["color1"];
      } else return C0;
    };
    yy[b("0x34b")] = function (C1, C2, C3) {
      var C4 = C1[C2 * 0x3 + 0x0]["x"];
      var C5 = C1[C2 * 0x3 + 0x0]["y"];
      var C6 = C1[C2 * 0x3 + 0x1]["x"];
      var C7 = C1[C2 * 0x3 + 0x1]["y"];
      var C8 = C1[C2 * 0x3 + 0x2]["x"];
      var C9 = C1[C2 * 0x3 + 0x2]["y"];
      var Ca = C1[C2 * 0x3 + 0x3]["x"];
      var Cb = C1[C2 * 0x3 + 0x3]["y"];
      var Cc = C3;
      var Cd = (0x1 - Cc) * (0x1 - Cc) * (0x1 - Cc);
      var Ce = 0x3 * Cc * (0x1 - Cc) * (0x1 - Cc);
      var Cf = 0x3 * Cc * Cc * (0x1 - Cc);
      var Cg = Cc * Cc * Cc;
      var Ch = Cd * C4 + Ce * C6 + Cf * C8 + Cg * Ca;
      var Ci = Cd * C5 + Ce * C7 + Cf * C9 + Cg * Cb;
      return new yx(Ch, Ci);
    };
    yy[b("0x5c")] = function (Cj, Ck, Cl) {
      if (Cl == undefined) {
        Cl = 0x0;
      }
      var Cm = [];
      for (var Cn = Cl; Cn < Cj[b("0x39d")] - 0x3; Cn += 0x3) {
        var Co = Cj[Cn];
        var Cp = Cj[Cn + 0x1];
        var Cq = Cj[Cn + 0x2];
        var Cr = Cj[Cn + 0x3];
        yy[b("0x32e")](
          Cm,
          Ck,
          Co["x"],
          Co["y"],
          Cp["x"],
          Cp["y"],
          Cq["x"],
          Cq["y"],
          Cr["x"],
          Cr["y"]
        );
      }
      return Cm;
    };
    yy["addCubicBezierPoints"] = function (
      Cs,
      Ct,
      Cu,
      Cv,
      Cw,
      Cx,
      Cy,
      Cz,
      CA,
      CB
    ) {
      var CC = 0x1 / Ct;
      for (var CD = 0x0; CD <= 0x1; CD += CC) {
        var CE = Math[b("0x1fe")](0x1 - CD, 0x3);
        var CF = 0x3 * Math[b("0x1fe")](0x1 - CD, 0x2) * CD;
        var CG = 0x3 * (0x1 - CD) * CD * CD;
        var CH = CD * CD * CD;
        var CI = CE * Cu + CF * Cw + CG * Cy + CH * CA;
        var CJ = CE * Cv + CF * Cx + CG * Cz + CH * CB;
        Cs[b("0x11e")](new yx(CI, CJ));
      }
    };
    yy["addQuadraticBezierPoints"] = function (CK, CL, CM, CN, CO, CP, CQ, CR) {
      var CS = 0x1 / CL;
      for (var CT = CS; CT <= 0x1; CT += CS) {
        var CU = (0x1 - CT) * (0x1 - CT);
        var CV = 0x2 * (0x1 - CT) * CT;
        var CW = CT * CT;
        var CX = CU * CM + CV * CO + CW * CQ;
        var CY = CU * CN + CV * CP + CW * CR;
        CK[b("0x11e")](new yx(CX, CY));
      }
    };
    yy[b("0x119")] = function (CZ, D0, D1, D2, D3, D4, D5, D6) {
      if (!D6) {
        while (D5 < D4) D5 += 0x2 * Math["PI"];
      } else {
        while (D5 > D4) D5 -= 0x2 * Math["PI"];
      }
      var D7 = (D5 - D4) / D0;
      var D8 = D4;
      for (var D9 = 0x0; D9 <= D0; D9++) {
        var Da = D1 + D3 * Math[b("0x1d3")](D8);
        var Db = D2 + D3 * Math["sin"](D8);
        CZ["push"](new yx(Da, Db));
        D8 += D7;
      }
    };
    yy[b("0xd3")] = function () {
      return {
        points: [],
        beginPath: function () {},
        moveTo: function (Dc, Dd) {
          this["points"][b("0x11e")](new yx(Dc, Dd));
        },
        lineTo: function (De, Df) {
          this[b("0x239")]();
          this[b("0x74")][b("0x11e")](new yx(De, Df));
        },
        bezierCurveTo: function (Dg, Dh, Di, Dj, Dk, Dl) {
          this[b("0x239")]();
          var Dm = this[b("0x3d5")]();
          yy[b("0x32e")](
            this[b("0x74")],
            0x14,
            Dm["x"],
            Dm["y"],
            Dg,
            Dh,
            Di,
            Dj,
            Dk,
            Dl
          );
        },
        quadraticCurveTo: function (Dn, Do, Dp, Dq) {
          this[b("0x239")]();
          var Dr = this[b("0x3d5")]();
          yy[b("0x342")](
            this[b("0x74")],
            0x14,
            Dr["x"],
            Dr["y"],
            Dn,
            Do,
            Dp,
            Dq
          );
        },
        arc: function (Ds, Dt, Du, Dv, Dw, Dx) {
          yy[b("0x119")](this["points"], 0x14, Ds, Dt, Du, Dv, Dw, Dx);
        },
        ensureStart: function () {
          if (this[b("0x74")]["length"] == 0x0)
            this[b("0x74")][b("0x11e")](new yx(0x0, 0x0));
        },
        lastPoint: function () {
          return this[b("0x74")][this["points"][b("0x39d")] - 0x1];
        },
        transform: {
          apply: function (Dy, Dz) {
            this["matrix"] = MindFusion[b("0x52")]["Matrix"][b("0x165")](Dz);
          },
        },
        transformAndGetPoints: function () {
          if (this[b("0x3aa")][b("0x8c")])
            this[b("0x3aa")][b("0x8c")][b("0x39b")](this[b("0x74")]);
          return this[b("0x74")];
        },
      };
    };
    yy["arcToBezierCurves"] = function (DA, DB, DC, DD, DE, DF) {
      var DG = [];
      var DH, DI, DJ;
      var DK = DF > 0x0;
      DJ = DE + DF;
      DE = this[b("0x3a8")](DE);
      DJ = this[b("0x3a8")](DJ);
      DI = DE;
      for (var DL = 0x0; DL < 0x4; DL++) {
        if (DK) {
          if (DI >= DJ) break;
          DH = Math[b("0x208")](DI + Math["PI"] / 0x2, DJ);
        } else {
          if (DI <= DJ) break;
          DH = Math[b("0x1fd")](DI - Math["PI"] / 0x2, DJ);
        }
        var DM = this[b("0x36")](DA, DB, DC, DD, DI, DH);
        for (var DN = 0x0; DN < DM[b("0x39d")]; DN++) DG[b("0x11e")](DM[DN]);
        DI += (Math["PI"] / 0x2) * (DK ? 0x1 : -0x1);
      }
      return DG;
    };
    yy["arcSegmentToBezier"] = function (DO, DP, DQ, DR, DS, DT) {
      var DU = DQ / 0x2,
        DV = DR / 0x2;
      var DW = DO + DU,
        DX = DP + DV;
      var DY = Math[b("0x1d3")](DS),
        DZ = Math[b("0x2be")](DS);
      var E0 = Math[b("0x1d3")](DT),
        E1 = Math["sin"](DT);
      var E2 =
        ((0x4 / 0x3) * (0x1 - Math[b("0x1d3")]((DT - DS) / 0x2))) /
        Math[b("0x2be")]((DT - DS) / 0x2);
      var E3 = [
        new yx(DY, DZ),
        new yx(DY - E2 * DZ, DZ + E2 * DY),
        new yx(E0 + E2 * E1, E1 - E2 * E0),
        new yx(E0, E1),
      ];
      for (var E4 = 0x0; E4 < E3[b("0x39d")]; E4++) {
        E3[E4]["x"] *= DU;
        E3[E4]["x"] += DW;
        E3[E4]["y"] *= DV;
        E3[E4]["y"] += DX;
      }
      return E3;
    };
    yy[b("0x110")] = function (E5, E6) {
      var E7 = E6 / 0x2;
      return new yw(E5["x"] - E7, E5["y"] - E7, E6, E6);
    };
    yy[b("0x388")] = function () {
      var E8 = typeof String == b("0x168") ? arguments[0x0] : this;
      for (var E9 = 0x0; E9 < arguments[b("0x39d")]; E9++) {
        var Ea = new RegExp("\x5c{" + E9 + "\x5c}", "gi");
        E8 = E8[b("0xac")](Ea, arguments[E9 + 0x1]);
      }
      return E8;
    };
    yy[b("0x29")] = function (Eb) {
      if (Eb != null && Eb != "") {
        return Eb["replace"](/\n/g, "\x5cn");
      } else {
        return Eb;
      }
    };
    yy[b("0xe2")] = function (Ec, Ed, Ee) {
      return new yw(Ec["x"] + Ed, Ec["y"] + Ee, Ec[b("0xde")], Ec[b("0x338")]);
    };
    yy["offset"] = function (Ef, Eg) {
      return yy[b("0xe2")](Ef, Eg["x"], Eg["y"]);
    };
    yy[b("0x92")] = function (Eh) {
      return !isNaN(Eh - 0x0);
    };
    yy[b("0x223")] = function (Ei) {
      return !/^-?\d+$/["test"](String(Ei));
    };
    yy[b("0x252")] = function (Ej) {
      if (+Ej === Ej) {
        return Ej === 0x0 ? Ej : Ej > 0x0 ? 0x1 : -0x1;
      }
      return NaN;
    };
    yy[b("0x21b")] = function (Ek) {
      return MindFusion[b("0x52")][b("0x393")]["convert"](
        0.4,
        Ek,
        MindFusion["Drawing"][b("0x393")][b("0x265")]
      );
    };
    yy[b("0x30")] = function () {
      var El = arguments[0x0];
      for (var Em = 0x1; Em < arguments[b("0x39d")]; Em++) {
        var En = new RegExp("\x5c{" + (Em - 0x1) + "\x5c}", "gi");
        El = El[b("0xac")](En, arguments[Em]);
      }
      return El;
    };
    yy["colorStringToHex"] = function (Eo) {
      var Ep = yy[b("0x200")](Eo);
      if (Ep) {
        var Eq = "FF";
        if (typeof Ep[b("0xcb")] !== b("0x33e"))
          Eq = ("00" + parseInt(Ep["alpha"] * 0x100)[b("0xcf")](0x10))[
            b("0x20b")
          ](-0x2);
        return (
          "#" +
          Eq +
          ("00" + Ep[b("0x234")][b("0xcf")](0x10))["slice"](-0x2) +
          ("00" + Ep["green"][b("0xcf")](0x10))[b("0x20b")](-0x2) +
          ("00" + Ep[b("0x3b4")][b("0xcf")](0x10))[b("0x20b")](-0x2)
        );
      }
      return "#FFFFFFFF";
    };
    yy[b("0x200")] = function (Er) {
      var Es = b("0x3b9");
      var Et = Er;
      var Eu = yy["checkKnownColor"](Et);
      if (Eu) Et = Eu;
      if (Et["match"](Es)) {
        var Ew = yy["hexToRgb"](Et);
        if (Ew) {
          return Ew;
        }
      } else {
        var Ex = document[b("0x336")]("div");
        Ex[b("0x9f")]["backgroundColor"] = Et;
        var Ey = Ex[b("0x9f")][b("0xcc")];
        var Ew = yy[b("0x1b4")](Ey);
        if (Ew) {
          return Ew;
        }
      }
      throw new Error(b("0x278") + Er);
    };
    yy["hexToRgb"] = function (Ez) {
      if (!Ez || Ez[b("0x39d")] < 0x3 || Ez[b("0x39d")] > 0x7) return;
      Ez = Ez[b("0xac")]("#", "");
      var EA, EB, EC;
      var ED = 0x2;
      if (Ez["length"] == 0x3) {
        Ez = Ez[0x0] + Ez[0x0] + Ez[0x1] + Ez[0x1] + Ez[0x2] + Ez[0x2];
      }
      var EE = Ez["substring"](Ez["length"] - ED);
      EC = parseInt(EE, 0x10);
      Ez = Ez[b("0x315")](0x0, Ez[b("0x39d")] - ED);
      ED = Ez[b("0x39d")] == 0x1 ? 0x1 : 0x2;
      EE = Ez["substring"](Ez[b("0x39d")] - ED);
      Ez = Ez[b("0x315")](0x0, Ez[b("0x39d")] - ED);
      EB = parseInt(EE, 0x10);
      if (Ez[b("0x39d")] == 0x0) EA = 0x0;
      else EA = parseInt(Ez, 0x10);
      return { red: EA, green: EB, blue: EC };
    };
    yy[b("0x1b4")] = function (EF) {
      if (EF[b("0x39d")] == 0x0) return null;
      if (EF == b("0x258"))
        return { red: 0xff, green: 0xff, blue: 0xff, alpha: 0x0 };
      if (EF["match"](/[0-9,\s]+/g) == null) return null;
      var EG = EF[b("0x41")](/(rgba?)|(\d+(\.\d+)?%?)|(\.\d+)/g);
      if (EG[b("0x39d")] != 0x4 && EG[b("0x39d")] != 0x5) return null;
      var EH = +EG[0x1];
      var EI = +EG[0x2];
      var EJ = +EG[0x3];
      var EK = EG[b("0x39d")] == 0x5 ? +EG[0x4] : 0x1;
      if (
        EH >= 0x0 &&
        EH <= 0xff &&
        EI >= 0x0 &&
        EI <= 0xff &&
        EJ >= 0x0 &&
        EJ <= 0xff &&
        EK >= 0x0 &&
        EK <= 0x1
      ) {
        return { red: EH, green: EI, blue: EJ, alpha: EK };
      }
      return null;
    };
    yy["rgbToString"] = function (EL, EM, EN, EO) {
      if (EL != undefined && EM != undefined && EN != undefined) {
        if (EO == undefined) {
          EO = 0x1;
        }
        return yy[b("0x30")](b("0x3b8"), EL, EM, EN, EO);
      }
      return b("0x2b6");
    };
    yy["checkKnownColor"] = function (EP) {
      var EQ = yy[b("0x3b")];
      var ER = EP["toLowerCase"]();
      for (var ES in EQ) {
        if (ER == ES) {
          return EQ[ES];
        }
      }
      return null;
    };
    yy[b("0x3b")] = {
      aliceblue: b("0x349"),
      antiquewhite: b("0xd9"),
      aqua: b("0x36a"),
      aquamarine: b("0x34d"),
      azure: b("0x1f7"),
      beige: "#f5f5dc",
      bisque: b("0x283"),
      black: "#000000",
      blanchedalmond: b("0xa3"),
      blue: b("0x2d6"),
      blueviolet: b("0x1c0"),
      brown: "#a52a2a",
      burlywood: b("0x171"),
      cadetblue: b("0xa6"),
      chartreuse: b("0xa7"),
      chocolate: b("0x77"),
      coral: b("0x4e"),
      cornflowerblue: b("0x19e"),
      cornsilk: b("0x334"),
      crimson: "#dc143c",
      cyan: b("0x36a"),
      darkblue: b("0xee"),
      darkcyan: b("0x17f"),
      darkgoldenrod: b("0x36c"),
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: b("0xd1"),
      darkmagenta: b("0x340"),
      darkolivegreen: "#556b2f",
      darkorange: b("0x105"),
      darkorchid: "#9932cc",
      darkred: b("0x3b2"),
      darksalmon: b("0x1df"),
      darkseagreen: b("0x2ab"),
      darkslateblue: b("0x1e"),
      darkslategray: b("0x6"),
      darkslategrey: b("0x6"),
      darkturquoise: b("0x12a"),
      darkviolet: b("0x1b1"),
      deeppink: "#ff1493",
      deepskyblue: b("0x327"),
      dimgray: "#696969",
      dodgerblue: b("0x24b"),
      feldspar: b("0xad"),
      firebrick: b("0xef"),
      floralwhite: b("0x2dc"),
      forestgreen: b("0x343"),
      fuchsia: b("0x392"),
      gainsboro: b("0x29c"),
      ghostwhite: b("0x28e"),
      gold: b("0x236"),
      goldenrod: b("0x22"),
      gray: b("0x17d"),
      grey: b("0x17d"),
      green: b("0x153"),
      greenyellow: "#adff2f",
      honeydew: b("0xd5"),
      hotpink: b("0x5f"),
      indianred: b("0x1f6"),
      indigo: b("0x2fb"),
      ivory: "#fffff0",
      khaki: b("0x2f0"),
      lavender: "#e6e6fa",
      lavenderblush: b("0x1c8"),
      lawngreen: b("0x17b"),
      lemonchiffon: b("0x21"),
      lightblue: b("0x12b"),
      lightcoral: b("0x3c6"),
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: b("0x2e7"),
      lightgray: "#d3d3d3",
      lightgrey: b("0x353"),
      lightgreen: b("0x2ae"),
      lightpink: b("0x26f"),
      lightsalmon: b("0xd6"),
      lightseagreen: b("0x248"),
      lightskyblue: b("0xf8"),
      lightslateblue: b("0x10e"),
      lightslategray: "#778899",
      lightslategrey: b("0x154"),
      lightsteelblue: b("0x31d"),
      lightyellow: b("0x2af"),
      lime: "#00ff00",
      limegreen: b("0xb9"),
      linen: "#faf0e6",
      magenta: b("0x392"),
      maroon: b("0x245"),
      mediumaquamarine: b("0x3be"),
      mediumblue: b("0x2e5"),
      mediumorchid: b("0x303"),
      mediumpurple: b("0x35b"),
      mediumseagreen: b("0x319"),
      mediumslateblue: b("0xb"),
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: b("0x2a1"),
      midnightblue: b("0x20c"),
      mintcream: b("0x271"),
      mistyrose: b("0x341"),
      moccasin: b("0x9d"),
      navajowhite: "#ffdead",
      navy: b("0x195"),
      oldlace: b("0x260"),
      olive: "#808000",
      olivedrab: b("0xfd"),
      orange: b("0xb1"),
      orangered: b("0x6f"),
      orchid: b("0x14b"),
      palegoldenrod: "#eee8aa",
      palegreen: b("0x253"),
      paleturquoise: "#afeeee",
      palevioletred: "#d87093",
      papayawhip: b("0x9"),
      peachpuff: b("0x14e"),
      peru: b("0x39e"),
      pink: b("0x2ba"),
      plum: b("0x2c1"),
      powderblue: "#b0e0e6",
      purple: b("0xca"),
      red: b("0x66"),
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: b("0x1f9"),
      salmon: b("0x3a9"),
      sandybrown: "#f4a460",
      seagreen: b("0x241"),
      seashell: b("0x398"),
      sienna: b("0x86"),
      silver: b("0x38b"),
      skyblue: b("0xf6"),
      slateblue: b("0xb0"),
      slategray: b("0x300"),
      snow: b("0x240"),
      springgreen: b("0x2e9"),
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: b("0xbd"),
      thistle: "#d8bfd8",
      tomato: b("0x23b"),
      turquoise: b("0x7c"),
      violet: b("0x31f"),
      violetred: b("0x262"),
      wheat: b("0xc2"),
      white: b("0x285"),
      whitesmoke: b("0x27b"),
      yellow: b("0xbb"),
      yellowgreen: b("0x2c6"),
    };
    yy["Base64"] = {
      _keyStr: b("0x49"),
      encode: function (ET) {
        var EU = "";
        var EV, EW, EX, EY, EZ, F0, F1;
        var F2 = 0x0;
        ET = yy[b("0x296")][b("0x3d")](ET);
        while (F2 < ET[b("0x39d")]) {
          EV = ET[b("0x1e4")](F2++);
          EW = ET[b("0x1e4")](F2++);
          EX = ET["charCodeAt"](F2++);
          EY = EV >> 0x2;
          EZ = ((EV & 0x3) << 0x4) | (EW >> 0x4);
          F0 = ((EW & 0xf) << 0x2) | (EX >> 0x6);
          F1 = EX & 0x3f;
          if (isNaN(EW)) {
            F0 = F1 = 0x40;
          } else if (isNaN(EX)) {
            F1 = 0x40;
          }
          EU =
            EU +
            yy[b("0x296")]["_keyStr"][b("0x53")](EY) +
            yy[b("0x296")][b("0x207")]["charAt"](EZ) +
            yy[b("0x296")][b("0x207")][b("0x53")](F0) +
            yy["Base64"][b("0x207")][b("0x53")](F1);
        }
        return EU;
      },
      decode: function (F3) {
        var F4 = "";
        var F5, F6, F7;
        var F8, F9, Fa, Fb;
        var Fc = 0x0;
        F3 = F3[b("0xac")](/[^A-Za-z0-9\+\/\=]/g, "");
        while (Fc < F3["length"]) {
          F8 = yy["Base64"][b("0x207")]["indexOf"](F3[b("0x53")](Fc++));
          F9 = yy[b("0x296")][b("0x207")][b("0x3b3")](F3[b("0x53")](Fc++));
          Fa = yy[b("0x296")]["_keyStr"]["indexOf"](F3[b("0x53")](Fc++));
          Fb = yy[b("0x296")][b("0x207")][b("0x3b3")](F3[b("0x53")](Fc++));
          F5 = (F8 << 0x2) | (F9 >> 0x4);
          F6 = ((F9 & 0xf) << 0x4) | (Fa >> 0x2);
          F7 = ((Fa & 0x3) << 0x6) | Fb;
          F4 = F4 + String[b("0x162")](F5);
          if (Fa != 0x40) {
            F4 = F4 + String["fromCharCode"](F6);
          }
          if (Fb != 0x40) {
            F4 = F4 + String[b("0x162")](F7);
          }
        }
        F4 = yy[b("0x296")][b("0x91")](F4);
        return F4;
      },
      _utf8_encode: function (Fd) {
        Fd = Fd[b("0xac")](/\r\n/g, "\x0a");
        var Fe = "";
        for (var Ff = 0x0; Ff < Fd["length"]; Ff++) {
          var Fg = Fd[b("0x1e4")](Ff);
          if (Fg < 0x80) {
            Fe += String["fromCharCode"](Fg);
          } else if (Fg > 0x7f && Fg < 0x800) {
            Fe += String[b("0x162")]((Fg >> 0x6) | 0xc0);
            Fe += String[b("0x162")]((Fg & 0x3f) | 0x80);
          } else {
            Fe += String[b("0x162")]((Fg >> 0xc) | 0xe0);
            Fe += String[b("0x162")](((Fg >> 0x6) & 0x3f) | 0x80);
            Fe += String[b("0x162")]((Fg & 0x3f) | 0x80);
          }
        }
        return Fe;
      },
      _utf8_decode: function (Fh) {
        var Fi = "";
        var Fj = 0x0;
        var Fk = 0x0,
          Fl = 0x0,
          Fm = 0x0,
          Fn = 0x0;
        while (Fj < Fh[b("0x39d")]) {
          Fk = Fh[b("0x1e4")](Fj);
          if (Fk < 0x80) {
            Fi += String["fromCharCode"](Fk);
            Fj++;
          } else if (Fk > 0xbf && Fk < 0xe0) {
            Fm = Fh["charCodeAt"](Fj + 0x1);
            Fi += String[b("0x162")](((Fk & 0x1f) << 0x6) | (Fm & 0x3f));
            Fj += 0x2;
          } else {
            Fm = Fh[b("0x1e4")](Fj + 0x1);
            Fn = Fh["charCodeAt"](Fj + 0x2);
            Fi += String["fromCharCode"](
              ((Fk & 0xf) << 0xc) | ((Fm & 0x3f) << 0x6) | (Fn & 0x3f)
            );
            Fj += 0x3;
          }
        }
        return Fi;
      },
    };
    yy[b("0x216")] = function (Fo) {
      var Fp = document["createElement"](b("0x181"));
      Fp["appendChild"](document[b("0x38f")](Fo));
      return Fp[b("0x121")];
    };
    yy[b("0x145")] = function (Fq) {
      var Fr = document[b("0x336")](b("0x181"));
      Fr[b("0x121")] = Fq;
      var Fs = Fr[b("0x2ad")][0x0];
      return Fs ? Fs[b("0x4d")] : "";
    };
    yy[b("0x2b3")] = function (Ft) {
      var Fu = document[b("0x336")]("div");
      Fu[b("0x121")] = Ft;
      var Fv = b("0x21c");
      var Fw = document["implementation"]["createDocument"](Fv, b("0x28a"));
      Fw[b("0x137")][b("0x5a")](Fu);
      return Fu[b("0x121")];
    };
    yy["loadImageList"] = function (Fx) {
      return new Promise(function (Fy, Fz) {
        var FA = [];
        var FB = Fx["length"];
        for (var FC = 0x0; FC < FB; FC++) {
          var FD = Fx[FC];
          yy[b("0x21f")](FD, function (FE, FF) {
            FA[Fx["indexOf"](FF)] = FE;
            if (
              FA[b("0x160")](function (FG) {
                return FG != undefined;
              })[b("0x39d")] === FB
            ) {
              Fy(FA);
            }
          });
        }
      });
    };
    yy[b("0x21f")] = function (FH, FI) {
      var FJ = new XMLHttpRequest();
      FJ["onload"] = function () {
        var FK = new FileReader();
        FK["onloadend"] = function () {
          FI(FK[b("0x112")], FH);
        };
        FK[b("0x2cf")](FJ[b("0x218")]);
      };
      FJ[b("0x310")]("GET", FH);
      FJ[b("0x2ef")] = "blob";
      FJ["send"]();
    };
    MindFusion["registerClass"](yy, b("0x2c9"));
  })(MindFusion[b("0x313")]);
  MindFusion[b("0x26b")](b("0xe"));
  MindFusion[b("0x16e")][b("0x15")] = {
    Auto: b("0x2d7"),
    Crosshair: b("0x1bc"),
    Default: b("0x209"),
    Pointer: b("0xc0"),
    Move: b("0x3c9"),
    HorizontalResize: "ew-resize",
    CounterDiagonalResize: "nesw-resize",
    DiagonalResize: b("0x386"),
    VerticalResize: "ns-resize",
    Text: b("0x360"),
    Wait: "wait",
    Help: b("0x23a"),
    Progress: b("0x61"),
    Inherit: b("0x19d"),
    Rotate: b("0x1d4"),
    Nothing: b("0xa4"),
    NotAllowed: b("0x1ea"),
    Pan: b("0x1d4"),
  };
  MindFusion[b("0x16e")][b("0x282")] = {
    ScrollLeft: 0x0,
    ScrollUp: 0x1,
    ScrollRight: 0x2,
    ScrollDown: 0x3,
    ZoomIn: 0x4,
    ZoomOut: 0x5,
    ZoomScale: 0x6,
    ZoomSlider: 0x7,
  };
  MindFusion["Controls"]["Orientation"] = { Horizontal: 0x0, Vertical: 0x1 };
  MindFusion["Controls"]["TickPosition"] = {
    None: 0x0,
    Left: 0x1,
    Right: 0x2,
    Both: 0x3,
  };
  MindFusion[b("0x16e")]["Alignment"] = { Near: 0x0, Center: 0x1, Far: 0x2 };
  (function (FL) {
    var FM = MindFusion["Diagramming"][b("0x202")];
    var FN = (FL["Button"] = function (FO, FP) {
      this["parent"] = FO;
      this[b("0x309")] = FP;
      this["pen"] = "#000000";
      this["brush"] = b("0x258");
      this[b("0x2bb")] = b("0x3a4");
      this[b("0x132")] = "transparent";
      this["hotPen"] = b("0x3a4");
      this["hotBrush"] = b("0x102");
      this[b("0x301")] = b("0x3a4");
      this[b("0x136")] = b("0x258");
    });
    FN[b("0x235")] = {
      draw: function (FQ) {
        FQ["save"]();
        var FR = this == this[b("0x1e0")]["currentManipulator"];
        if (this[b("0x322")]) {
          this[b("0x322")]["pen"] = FR ? this[b("0x22f")] : this[b("0xfc")];
          this["shape"][b("0xab")] = FM[b("0x3")](
            FQ,
            FR ? this[b("0x3a0")] : this[b("0xab")],
            this[b("0x322")][b("0xa0")]()
          );
          FQ[b("0x2bd")]();
          FQ[b("0x361")] = 0x1;
          FQ[b("0x1da")] = 0x1;
          FQ["shadowBlur"] = 0x2;
          FQ[b("0xc4")] = this[b("0x1e0")]["shadowColor"];
          this[b("0x322")][b("0x297")](FQ);
          FQ["closePath"]();
          FQ[b("0x2a")]();
        }
        if (this[b("0x1f2")]) {
          this["decoration"][b("0xfc")] = FR
            ? this["hotDecorationPen"]
            : this[b("0x2bb")];
          this[b("0x1f2")][b("0xab")] = FM["getBrush"](
            FQ,
            FR ? this["hotDecorationBrush"] : this["decorationBrush"],
            this[b("0x1f2")]["getBounds"]()
          );
          this["decoration"]["draw"](FQ);
        }
        FQ["restore"]();
      },
      hitTest: function (FS) {
        if (this[b("0x0")][b("0x46")](FS)) {
          return this;
        }
        return null;
      },
      setBounds: function (FT) {
        if (this[b("0x0")] != FT) {
          this[b("0x0")] = FT;
        }
      },
      setShape: function (FU) {
        if (this[b("0x322")] != FU) {
          this[b("0x322")] = FU;
        }
      },
      setDecoration: function (FV) {
        if (this[b("0x1f2")] != FV) {
          this[b("0x1f2")] = FV;
        }
      },
    };
    MindFusion[b("0x230")](FN, b("0x1f8"));
  })(MindFusion[b("0x16e")]);
  (function (FW) {
    var FX = MindFusion["Drawing"][b("0x5")];
    var FY = MindFusion[b("0x52")][b("0x59")];
    var FZ = MindFusion[b("0x52")][b("0x1d0")];
    var G0 = MindFusion[b("0x313")]["Utils"];
    var G1 = MindFusion["Controls"][b("0x22a")];
    var G2 = (FW["ZoomControl"] = function (G3) {
      mflayer[b("0x106")](G2, this, [G3]);
      this[b("0x206")] = {};
      this[b("0x1a9")] = [];
      this[b("0x13a")] = 0x5;
      this[b("0x3b6")] = 0x0;
      this["maxZoomFactor"] = 0xc8;
      this[b("0x254")] = 0xa;
      this[b("0x35f")] = !![];
      this[b("0x2a3")] = 0x64;
      this[b("0x2d4")] = 0xa;
      this[b("0x18e")] = !![];
      this[b("0x11f")] = 0x4;
      this["padding"] = 0x2;
      this[b("0xaa")] = FW[b("0x134")][b("0x3d0")];
      this[b("0x11f")] = 0x2;
      this[b("0x27c")] = "#FFFFFF";
      this[b("0x82")] = b("0x45");
      this["activeColor"] = b("0x2d5");
      this["borderColor"] = b("0xe6");
      this[b("0x4b")] = b("0x1cb");
      this[b("0xc4")] = b("0x180");
      this[b("0x203")] = b("0xe6");
      this[b("0x399")] = !![];
    });
    G2[b("0x235")] = {
      initialize: function () {
        mflayer[b("0x1ca")](G2, this, "initialize");
        this[b("0x8d")] = document[b("0x13c")](
          this[b("0x331")]()["id"] + b("0x7")
        );
        var G4 = G0[b("0x96")](b("0x1d1"), this[b("0x331")]())[0x0];
        if (typeof G4[b("0x2b4")] !== "undefined") {
          this[b("0x1d1")] = G4;
          this[b("0x26d")] = G4[b("0x2b4")]("2d");
        }
        mflayer[b("0x76")](this[b("0x3a2")], {
          mousedown: mflayer[b("0x4f")](this, this["onMouseDown"]),
        });
        mflayer[b("0x76")](this[b("0x3a2")], {
          mousemove: mflayer[b("0x4f")](this, this["onMouseMove"]),
        });
        this[b("0x23f")] = mflayer[b("0x4f")](this, this[b("0x51")]);
        mflayer[b("0x76")](document, { mouseup: this[b("0x23f")] });
        this["init"]();
      },
      dispose: function () {
        mflayer[b("0x1d6")](document, b("0x2a2"), this[b("0x23f")]);
        mflayer[b("0x1ca")](G2, this, "dispose");
      },
      registerForSubmit: function (G5) {
        var G6 = document[b("0x13c")](G5);
        if (G6) {
          var G7 = G6["form"];
          if (G7) {
            G7["addEventListener"](
              "submit",
              mflayer[b("0x4f")](
                this,
                mflayer[b("0x2d2")](this["preparePostback"], { id: G5 })
              )
            );
          }
        }
      },
      preparePostback: function (G8, G9) {
        var Ga = document[b("0x13c")](G9["id"]);
        if (Ga) Ga[b("0x99")] = this[b("0x34e")]();
      },
      postback: function () {
        if (this[b("0x331")]()) {
          window["__doPostBack"](this["get_element"]()["id"], this[b("0x8d")]);
        }
      },
      init: function () {
        var Gb = mflayer[b("0xa0")](this[b("0x331")]());
        var Gc = Gb[b("0xde")];
        var Gd = Gb["height"];
        this[b("0x0")] = new FX(0x0, 0x0, Gc, Gd);
        this["orientation"] =
          Gc > Gd
            ? FW["Orientation"][b("0x293")]
            : FW["Orientation"][b("0x98")];
        this["minDim"] =
          this["orientation"] == FW[b("0x376")]["Vertical"]
            ? this["bounds"][b("0xde")]
            : this[b("0x0")][b("0x338")];
        this[b("0x150")] =
          this[b("0x33")] == FW[b("0x376")]["Vertical"]
            ? this[b("0x0")]["height"]
            : this[b("0x0")][b("0xde")];
        this[b("0x1ae")] = (this[b("0x378")] - 0x2 * this[b("0x13a")]) / 0x2;
        this[b("0x36e")] = this[b("0x378")] / 0x2;
        this[b("0x34f")] = this[b("0x26")] = this[b("0x378")] / 0x5;
        this[b("0x1aa")] = this[b("0x378")] / 0xa;
      },
      createControls: function () {
        var Ge = new FW[b("0x2e2")](this, FW[b("0x282")][b("0x1a5")]);
        var Gf = new FY();
        Gf[b("0x1ef")](
          this[b("0x378")] / 0x2,
          this[b("0x378")] / 0x2,
          (this[b("0x378")] - this[b("0x13a")] * 0x2) / 0x2,
          0x0,
          0x2 * Math["PI"],
          ![]
        );
        Ge[b("0x322")] = Gf;
        Ge[b("0xfc")] = this[b("0x1f5")];
        Ge[b("0xab")] = this[b("0x27c")];
        var Gg = new FW["Button"](this, FW["ButtonType"]["ScrollUp"]);
        Gg["bounds"] = new FX(
          this["center"] - this[b("0x1ae")] / 0x4,
          this[b("0x36e")] - this[b("0x1ae")],
          this[b("0x1ae")] / 0x2,
          this[b("0x1ae")]
        );
        Gf = new FY();
        Gf[b("0x1ef")](
          this[b("0x378")] / 0x2,
          this["minDim"] / 0x2,
          (this[b("0x378")] - this[b("0x13a")] * 0x2) / 0x2,
          (0x5 * Math["PI"]) / 0x4,
          (0x7 * Math["PI"]) / 0x4,
          ![]
        );
        Gf[b("0x1f4")](this[b("0x36e")], this["minDim"] / 0x2);
        Gf[b("0x124")]();
        Gg[b("0x322")] = Gf;
        Gf = new FY();
        Gf["moveTo"](
          this[b("0x36e")] - this[b("0x1aa")],
          this[b("0x1aa")] * 0x3
        );
        Gf[b("0x1f4")](this["center"], this[b("0x1aa")] * 0x2);
        Gf[b("0x1f4")](
          this["center"] + this[b("0x1aa")],
          this[b("0x1aa")] * 0x3
        );
        Gg[b("0x1f2")] = Gf;
        var Gh = new FW[b("0x2e2")](this, FW[b("0x282")][b("0x2fd")]);
        Gh[b("0x0")] = new FX(
          this["center"] - this[b("0x1ae")],
          this[b("0x36e")] - this[b("0x1ae")] / 0x4,
          this["radius"],
          this["radius"] / 0x2
        );
        Gf = new FY();
        Gf[b("0x1ef")](
          this["minDim"] / 0x2,
          this[b("0x378")] / 0x2,
          (this["minDim"] - this["padding"] * 0x2) / 0x2,
          (0x3 * Math["PI"]) / 0x4,
          (0x5 * Math["PI"]) / 0x4,
          ![]
        );
        Gf[b("0x1f4")](this["center"], this[b("0x378")] / 0x2);
        Gf[b("0x124")]();
        Gh["shape"] = Gf;
        Gf = new FY();
        Gf[b("0x2b2")](
          this["decorationSize"] * 0x3,
          this["center"] - this["decorationSize"]
        );
        Gf[b("0x1f4")](this["decorationSize"] * 0x2, this[b("0x36e")]);
        Gf[b("0x1f4")](
          this["decorationSize"] * 0x3,
          this[b("0x36e")] + this[b("0x1aa")]
        );
        Gh[b("0x1f2")] = Gf;
        var Gi = new FW[b("0x2e2")](this, FW[b("0x282")][b("0x133")]);
        Gi[b("0x0")] = new FX(
          this[b("0x36e")] - this[b("0x1ae")] / 0x4,
          this["center"],
          this["radius"] / 0x2,
          this[b("0x1ae")]
        );
        Gf = new FY();
        Gf[b("0x1ef")](
          this[b("0x378")] / 0x2,
          this[b("0x378")] / 0x2,
          (this[b("0x378")] - this[b("0x13a")] * 0x2) / 0x2,
          Math["PI"] / 0x4,
          (0x3 * Math["PI"]) / 0x4,
          ![]
        );
        Gf[b("0x1f4")](this[b("0x36e")], this["minDim"] / 0x2);
        Gf[b("0x124")]();
        Gf["quadraticCurveTo"](
          this[b("0x36e")],
          this["minDim"],
          this[b("0x34f")],
          this["minDim"] - this[b("0x34f")]
        );
        Gi[b("0x322")] = Gf;
        Gf = new FY();
        Gf[b("0x2b2")](
          this[b("0x36e")] - this[b("0x1aa")],
          this[b("0x378")] - this[b("0x1aa")] * 0x3
        );
        Gf[b("0x1f4")](
          this[b("0x36e")],
          this[b("0x378")] - this[b("0x1aa")] * 0x2
        );
        Gf[b("0x1f4")](
          this[b("0x36e")] + this["decorationSize"],
          this[b("0x378")] - this[b("0x1aa")] * 0x3
        );
        Gi["decoration"] = Gf;
        var Gj = new FW["Button"](this, FW[b("0x282")][b("0x2")]);
        Gj[b("0x0")] = new FX(
          this[b("0x36e")],
          this[b("0x36e")] - this[b("0x1ae")] / 0x4,
          this[b("0x1ae")],
          this[b("0x1ae")] / 0x2
        );
        Gf = new FY();
        Gf[b("0x1ef")](
          this[b("0x378")] / 0x2,
          this[b("0x378")] / 0x2,
          (this[b("0x378")] - this[b("0x13a")] * 0x2) / 0x2,
          (0x7 * Math["PI"]) / 0x4,
          Math["PI"] / 0x4,
          ![]
        );
        Gf[b("0x1f4")](this[b("0x36e")], this["minDim"] / 0x2);
        Gf[b("0x124")]();
        Gj["shape"] = Gf;
        Gf = new FY();
        Gf["moveTo"](
          this[b("0x378")] - this[b("0x1aa")] * 0x3,
          this["center"] - this[b("0x1aa")]
        );
        Gf[b("0x1f4")](
          this[b("0x378")] - this["decorationSize"] * 0x2,
          this["center"]
        );
        Gf[b("0x1f4")](
          this[b("0x378")] - this[b("0x1aa")] * 0x3,
          this["center"] + this[b("0x1aa")]
        );
        Gj[b("0x1f2")] = Gf;
        Gg["pen"] = Gg[b("0x22f")] = Gi[b("0xfc")] = Gi[b("0x22f")] = Gh[
          b("0xfc")
        ] = Gh[b("0x22f")] = Gj[b("0xfc")] = Gj[b("0x22f")] = "transparent";
        Gg[b("0x3a0")] = {
          type: b("0x15d"),
          color1: this[b("0x2c3")],
          color2: "white",
          angle: 0x10e,
        };
        Gj[b("0x3a0")] = {
          type: b("0x15d"),
          color1: this["activeColor"],
          color2: "white",
          angle: 0x0,
        };
        Gh[b("0x3a0")] = {
          type: "LinearGradientBrush",
          color1: this[b("0x2c3")],
          color2: b("0x35"),
          angle: 0xb4,
        };
        Gi[b("0x3a0")] = {
          type: "LinearGradientBrush",
          color1: this[b("0x2c3")],
          color2: b("0x35"),
          angle: 0x5a,
        };
        Gg[b("0x132")] = Gg[b("0x136")] = Gh[b("0x132")] = Gh[b("0x136")] = Gi[
          "decorationBrush"
        ] = Gi[b("0x136")] = Gj[b("0x132")] = Gj[b("0x136")] = b("0x258");
        Gg["decorationPen"] = Gg["hotDecorationPen"] = Gh[b("0x2bb")] = Gh[
          "hotDecorationPen"
        ] = Gi[b("0x2bb")] = Gi[b("0x301")] = Gj[b("0x2bb")] = Gj[
          "hotDecorationPen"
        ] = this[b("0x4b")];
        var Gk = new FW[b("0x2e2")](this, FW[b("0x282")][b("0x217")]);
        var Gm = new FX(
          this[b("0x150")] - this[b("0x378")] - this["spacing"],
          this[b("0x36e")] - this[b("0x34f")],
          this[b("0x34f")] * 0x2,
          this["spacing"] * 0x2
        );
        if (this[b("0x33")] == FW[b("0x376")][b("0x98")])
          Gm = new FX(
            this[b("0x36e")] - this[b("0x34f")],
            this[b("0x378")] + this[b("0x34f")],
            this[b("0x34f")] * 0x2,
            this["spacing"] * 0x2
          );
        Gk[b("0x0")] = Gm;
        Gf = new FY();
        Gf[b("0x242")](Gm, this[b("0x11f")]);
        Gk["shape"] = Gf;
        Gf = new FY();
        if (this[b("0x33")] == FW["Orientation"][b("0x98")]) {
          Gf[b("0x2b2")](
            this[b("0x36e")] - this[b("0x26")] / 0x2,
            this[b("0x378")] + this[b("0x26")] * 0x2
          );
          Gf["lineTo"](
            this["center"] + this[b("0x26")] / 0x2,
            this[b("0x378")] + this["buttonSize"] * 0x2
          );
          Gf[b("0x2b2")](
            this[b("0x36e")],
            this["minDim"] + this[b("0x26")] * 0x2 - this[b("0x26")] / 0x2
          );
          Gf[b("0x1f4")](
            this[b("0x36e")],
            this["minDim"] + this["buttonSize"] * 0x2 + this["buttonSize"] / 0x2
          );
        } else {
          Gf[b("0x2b2")](
            this["maxDim"] - this["minDim"],
            this[b("0x36e")] + this[b("0x26")] / 0x2
          );
          Gf[b("0x1f4")](
            this[b("0x150")] - this[b("0x378")],
            this[b("0x36e")] - this[b("0x26")] / 0x2
          );
          Gf[b("0x2b2")](
            this[b("0x150")] - this[b("0x378")] - this["buttonSize"] / 0x2,
            this["center"]
          );
          Gf["lineTo"](
            this["maxDim"] - this[b("0x378")] + this[b("0x26")] / 0x2,
            this[b("0x36e")]
          );
        }
        Gk[b("0x1f2")] = Gf;
        Gk[b("0xfc")] = Gk[b("0x22f")] = this[b("0x1f5")];
        Gk[b("0xab")] = this["fill"];
        Gk[b("0x2bb")] = Gk["hotDecorationPen"] = this["innerColor"];
        Gk[b("0x3a0")] = {
          type: "LinearGradientBrush",
          color1: this["activeColor"],
          color2: b("0x35"),
          angle: 0x1e,
        };
        var Gn = new FW["Button"](this, FW[b("0x282")][b("0x8b")]);
        Gm = new FX(
          this[b("0x378")] + this[b("0x34f")],
          this[b("0x36e")] - this["spacing"],
          this[b("0x34f")] * 0x2,
          this[b("0x34f")] * 0x2
        );
        if (this[b("0x33")] == FW["Orientation"][b("0x98")])
          Gm = new FX(
            this[b("0x36e")] - this[b("0x34f")],
            this[b("0x150")] - this["minDim"] - this[b("0x34f")],
            this[b("0x34f")] * 0x2,
            this[b("0x34f")] * 0x2
          );
        Gn[b("0x0")] = Gm;
        Gf = new FY();
        Gf["addRoundRect"](Gm, this["cornerRadius"]);
        Gn[b("0x322")] = Gf;
        Gf = new FY();
        if (this[b("0x33")] == FW[b("0x376")]["Vertical"]) {
          Gf[b("0x2b2")](
            this[b("0x36e")] - this[b("0x26")] / 0x2,
            this[b("0x150")] - this["minDim"]
          );
          Gf["lineTo"](
            this["center"] + this[b("0x26")] / 0x2,
            this[b("0x150")] - this[b("0x378")]
          );
        } else {
          Gf[b("0x2b2")](
            this[b("0x378")] + this[b("0x26")] * 0x2 - this["buttonSize"] / 0x2,
            this["center"]
          );
          Gf["lineTo"](
            this[b("0x378")] + this[b("0x26")] * 0x2 + this[b("0x26")] / 0x2,
            this[b("0x36e")]
          );
        }
        Gn[b("0x1f2")] = Gf;
        Gn[b("0xfc")] = Gn[b("0x22f")] = this["borderColor"];
        Gn["brush"] = this[b("0x27c")];
        Gn["decorationPen"] = Gn[b("0x301")] = this[b("0x4b")];
        Gn[b("0x3a0")] = {
          type: b("0x15d"),
          color1: this[b("0x2c3")],
          color2: b("0x35"),
          angle: 0x1e,
        };
        var Go = new FW[b("0x2e2")](this, FW[b("0x282")][b("0x2ed")]);
        var Gp =
          Math[b("0x2f7")](
            (this[b("0x255")] - this[b("0x3b6")]) / this[b("0x254")]
          ) + 0x2;
        var Gq =
          this[b("0x150")] - this[b("0x378")] * 0x2 - this[b("0x34f")] * 0x4;
        var Gr = (Gq - this[b("0x34f")]) / (Gp - 0x2);
        Gm = new FX(
          this[b("0x378")] + this[b("0x34f")] * 0x3,
          this["center"] - this[b("0x34f")],
          Gq,
          this["spacing"] * 0x2
        );
        if (this[b("0x33")] == FW[b("0x376")][b("0x98")])
          Gm = new FX(
            this["center"] - this[b("0x34f")],
            this[b("0x378")] + this[b("0x34f")] * 0x3,
            this[b("0x34f")] * 0x2,
            Gq
          );
        Go["bounds"] = Gm;
        Gf = new FY();
        if (this[b("0x33")] == FW[b("0x376")]["Vertical"]) {
          Gf[b("0x179")](
            this[b("0x36e")] - this["spacing"] / 0x4,
            this[b("0x378")] + this[b("0x34f")] * 0x3,
            this[b("0x34f")] / 0x2,
            Gq
          );
          if (
            this[b("0xaa")] == FW["TickPosition"][b("0x3d0")] ||
            this[b("0xaa")] == FW[b("0x134")][b("0x316")]
          ) {
            for (var Gv = 0x0; Gv < Gp - 0x1; Gv++) {
              Gf[b("0x2b2")](
                this[b("0x36e")] - this[b("0x34f")] / 0x2,
                this[b("0x378")] +
                  this[b("0x34f")] * 0x3 +
                  this[b("0x34f")] / 0x2 +
                  Gr * Gv
              );
              Gf[b("0x1f4")](
                this["center"] - this["spacing"],
                this[b("0x378")] +
                  this[b("0x34f")] * 0x3 +
                  this[b("0x34f")] / 0x2 +
                  Gr * Gv
              );
            }
          }
          if (
            this[b("0xaa")] == FW[b("0x134")][b("0xb5")] ||
            this[b("0xaa")] == FW["TickPosition"][b("0x316")]
          ) {
            for (var Gv = 0x0; Gv < Gp - 0x1; Gv++) {
              Gf[b("0x2b2")](
                this[b("0x36e")] + this[b("0x34f")] / 0x2,
                this[b("0x378")] +
                  this["spacing"] * 0x3 +
                  this[b("0x34f")] / 0x2 +
                  Gr * Gv
              );
              Gf[b("0x1f4")](
                this[b("0x36e")] + this["spacing"],
                this[b("0x378")] +
                  this[b("0x34f")] * 0x3 +
                  this[b("0x34f")] / 0x2 +
                  Gr * Gv
              );
            }
          }
        } else {
          Gf[b("0x179")](
            this["minDim"] + this[b("0x34f")] * 0x3,
            this[b("0x36e")] - this[b("0x34f")] / 0x4,
            Gq,
            this["spacing"] / 0x2
          );
          if (
            this[b("0xaa")] == FW["TickPosition"][b("0x3d0")] ||
            this["tickPosition"] == FW[b("0x134")][b("0x316")]
          ) {
            for (var Gv = 0x0; Gv < Gp - 0x1; Gv++) {
              Gf[b("0x2b2")](
                this[b("0x378")] +
                  this[b("0x34f")] * 0x3 +
                  this[b("0x34f")] / 0x2 +
                  Gr * Gv,
                this["center"] - this[b("0x34f")] / 0x2
              );
              Gf[b("0x1f4")](
                this[b("0x378")] +
                  this[b("0x34f")] * 0x3 +
                  this[b("0x34f")] / 0x2 +
                  Gr * Gv,
                this[b("0x36e")] - this[b("0x34f")]
              );
            }
          }
          if (
            this["tickPosition"] == FW["TickPosition"][b("0xb5")] ||
            this["tickPosition"] == FW[b("0x134")][b("0x316")]
          ) {
            for (var Gv = 0x0; Gv < Gp - 0x1; Gv++) {
              Gf[b("0x2b2")](
                this["minDim"] +
                  this[b("0x34f")] * 0x3 +
                  this[b("0x34f")] / 0x2 +
                  Gr * Gv,
                this[b("0x36e")] + this[b("0x34f")] / 0x2
              );
              Gf[b("0x1f4")](
                this[b("0x378")] +
                  this[b("0x34f")] * 0x3 +
                  this[b("0x34f")] / 0x2 +
                  Gr * Gv,
                this[b("0x36e")] + this[b("0x34f")]
              );
            }
          }
        }
        Go[b("0x1f2")] = Gf;
        Go[b("0xfc")] = Go[b("0x22f")] = Go[b("0x3a0")] = b("0x258");
        Go[b("0x132")] = Go[b("0x136")] = this["fill"];
        Go[b("0x2bb")] = Go[b("0x301")] = this[b("0x4b")];
        var Gw = new FW["Button"](this, FW[b("0x282")][b("0x194")]);
        Gw[b("0xfc")] = Gw[b("0x22f")] = this[b("0x1f5")];
        Gw["brush"] = this["fill"];
        Gw[b("0x3a0")] = {
          type: "LinearGradientBrush",
          color1: this[b("0x2c3")],
          color2: b("0x35"),
          angle: 0x1e,
        };
        var Gx;
        if (this[b("0x18e")]) {
          var Gm = new FX(
            this["maxDim"] - this[b("0x378")] / 0x2 + this["spacing"] / 0x2,
            this[b("0x36e")],
            this[b("0x378")],
            this[b("0x378")]
          );
          if (this["orientation"] == FW[b("0x376")][b("0x98")])
            Gm = new FX(
              this["center"],
              this[b("0x150")] -
                this[b("0x378")] / 0x2 +
                this[b("0x34f")] / 0x2,
              this[b("0x378")],
              this[b("0x378")]
            );
          Gx = new FZ(this[b("0x2a3")] + "%", Gm);
          Gx[b("0x113")] = new MindFusion[b("0x52")][b("0x9b")](
            b("0x2da"),
            0xa
          );
          Gx[b("0x2a6")] = G1[b("0x231")];
          Gx["lineAlignment"] = G1[b("0x231")];
          Gx["pen"] = this[b("0x203")];
        }
        this[b("0x206")] = {
          scroller: Ge,
          upButton: Gg,
          leftButton: Gh,
          downButton: Gi,
          rightButton: Gj,
          zoomInButton: Gk,
          zoomOutButton: Gn,
          scale: Go,
          slider: Gw,
        };
        if (this[b("0x18e")]) this[b("0x206")][b("0x163")] = Gx;
        this["manipulators"] = [Gg, Gh, Gi, Gj, Gk, Gn, Gw, Go];
      },
      repaint: function () {
        if (!this[b("0x26d")]) return;
        this[b("0x1d1")]["width"] = this[b("0x1d1")][b("0xde")];
        this[b("0x26d")][b("0x2d0")](
          this[b("0x0")]["x"],
          this[b("0x0")]["y"],
          this["bounds"]["width"],
          this[b("0x0")]["height"]
        );
        this[b("0x26d")]["fillStyle"] = this[b("0x82")];
        this["context"][b("0x27c")]();
        for (var Gy in this["controls"]) {
          if (this[b("0x206")][Gy][b("0x297")])
            this[b("0x206")][Gy][b("0x297")](this["context"]);
        }
      },
      fromJson: function (Gz) {
        if (Gz > "") {
          var GA = mflayer["fromJson"](Gz);
          this[b("0x175")] = GA["targetId"];
          this[b("0x13a")] = GA[b("0x13a")];
          this[b("0x3b6")] = GA[b("0x3b6")];
          this[b("0x255")] = GA["maxZoomFactor"];
          this[b("0x254")] = GA["zoomStep"];
          this[b("0x2d4")] = GA[b("0x2d4")];
          this[b("0x35f")] = GA["snapToZoomStep"];
          this[b("0x18e")] = GA[b("0x18e")];
          this[b("0xaa")] = GA[b("0xaa")];
          this[b("0x11f")] = GA[b("0x11f")];
          this[b("0x27c")] = GA["fill"];
          this[b("0x82")] = GA[b("0x82")];
          this[b("0x2c3")] = GA[b("0x2c3")];
          this[b("0x1f5")] = GA[b("0x1f5")];
          this[b("0x4b")] = GA[b("0x4b")];
          this[b("0xc4")] = GA[b("0xc4")];
          this[b("0x203")] = GA["textColor"];
          this[b("0xc3")]();
          this["setZoomFactorInternal"](GA[b("0x2a3")], !![], ![]);
          this[b("0x365")](GA["enabled"]);
          this["setAutoPostBack"](GA[b("0x10b")]);
          var GB = this;
          setTimeout(function () {
            return GB[b("0x373")]();
          }, 0x64);
        }
      },
      prepare: function () {
        var GC = mflayer[b("0xdd")](this[b("0x175")]);
        if (GC) {
          this[b("0x12e")] = GC;
          if (GC[b("0x1bf")])
            GC[b("0x1bf")](
              "zoomChanged",
              mflayer["createDelegate"](this, this[b("0x356")])
            );
          this["repaint"]();
        }
      },
      toJson: function () {
        var GD = {
          id: this[b("0x331")]()["id"],
          targetId: this[b("0x175")],
          padding: this[b("0x13a")],
          minZoomFactor: this[b("0x3b6")],
          maxZoomFactor: this[b("0x255")],
          zoomFactor: this[b("0x2a3")],
          zoomStep: this[b("0x254")],
          scrollStep: this[b("0x2d4")],
          snapToZoomStep: this["snapToZoomStep"],
          showLabel: this["showLabel"],
          tickPosition: this[b("0xaa")],
          cornerRadius: this["cornerRadius"],
          fill: this[b("0x27c")],
          backColor: this["backColor"],
          activeColor: this[b("0x2c3")],
          borderColor: this[b("0x1f5")],
          innerColor: this[b("0x4b")],
          shadowColor: this[b("0xc4")],
          textColor: this[b("0x203")],
          enabled: this["enabled"],
          autoPostBack: this["autoPostBack"],
        };
        return mflayer[b("0x34e")](GD);
      },
      setTarget: function (GE) {
        this["createControls"]();
        this[b("0x298")](this[b("0x2a3")], !![], ![]);
        this[b("0x12e")] = GE;
        if (GE) {
          GE[b("0x1bf")](
            b("0x1bb"),
            mflayer["createDelegate"](this, this[b("0x356")])
          );
        }
        this[b("0x29f")]();
      },
      onZoomChanged: function () {
        this[b("0x298")](this[b("0x12e")][b("0x2a3")], !![], ![]);
      },
      onMouseDown: function (GF) {
        if (!this[b("0x399")]) return;
        this["mouseDownPoint"] = G0[b("0x3cd")](GF, this[b("0x331")]());
        var GG = this[b("0x2b1")](this[b("0x305")]);
        if (GG) {
          this["onButtonMouseDown"](GF, GG);
        }
        this[b("0x370")] = GG;
        this[b("0x29f")]();
      },
      onMouseMove: function (GH) {
        if (!this[b("0x399")]) return;
        if (this["mouseDownPoint"]) {
          if (this[b("0x370")]) {
            if (
              this["currentManipulator"][b("0x309")] ==
              FW["ButtonType"][b("0x194")]
            ) {
              this[b("0x2cd")](GH);
            }
          }
        }
      },
      onMouseUp: function (GI) {
        if (!this[b("0x399")]) return;
        var GJ = G0[b("0x3cd")](GI, this[b("0x331")]());
        clearInterval(this[b("0x358")]);
        if (this["mouseDownPoint"] != null) {
          if (GJ["distance"](this[b("0x305")]) < 0x2) {
            var GK = this[b("0x2b1")](this[b("0x305")]);
            if (GK) {
              this[b("0x170")](GI, GK);
            }
          }
        }
        this[b("0x305")] = null;
        this[b("0x370")] = null;
        this[b("0x29f")]();
      },
      onSliderMove: function (GL) {
        var GM = G0["getCursorPos"](GL, this["get_element"]());
        var GN = this[b("0x378")] + this[b("0x34f")] * 0x3;
        var GO =
          this[b("0x150")] - this[b("0x378")] * 0x2 - this[b("0x34f")] * 0x5;
        var GP = GM;
        GP["x"] -= this[b("0x34f")] / 0x2;
        GP["y"] -= this["spacing"] / 0x2;
        if (this["orientation"] == FW[b("0x376")][b("0x98")]) {
          var GR = Math[b("0x208")](GO, Math[b("0x1fd")](GP["y"] - GN, 0x0));
          var GT = GR / GO;
          var GV = Math[b("0x2f7")](
            this[b("0x255")] -
              this[b("0x3b6")] -
              (this[b("0x255")] - this[b("0x3b6")]) * GT
          );
        } else {
          var GR = Math["min"](GO, Math[b("0x1fd")](GP["x"] - GN, 0x0));
          var GT = GR / GO;
          var GV = Math[b("0x2f7")](
            (this[b("0x255")] - this["minZoomFactor"]) * GT
          );
        }
        this["setZoomFactorInternal"](this[b("0x3b6")] + GV, !![]);
      },
      hitTestManipulators: function (GW) {
        if (!this[b("0x1a9")]) return ![];
        for (var GX = 0x0; GX < this[b("0x1a9")][b("0x39d")]; GX++) {
          var GY = this["manipulators"][GX];
          if (GY[b("0x38a")](GW)) return GY;
        }
        return null;
      },
      setZoomFactorInternal: function (GZ, H0, H1) {
        if (!H0) this[b("0x2a3")] = GZ;
        else if (
          this["snapToZoomStep"] &&
          GZ > this[b("0x3b6")] &&
          GZ < this[b("0x255")]
        ) {
          var H2 =
            this[b("0x3b6")] +
            Math["round"]((GZ - this["minZoomFactor"]) / this[b("0x254")]) *
              this["zoomStep"];
          this[b("0x2a3")] = Math[b("0x208")](
            this[b("0x255")],
            Math["max"](this[b("0x3b6")], H2)
          );
        } else {
          this[b("0x2a3")] = Math[b("0x208")](
            this["maxZoomFactor"],
            Math[b("0x1fd")](this[b("0x3b6")], GZ)
          );
        }
        this[b("0x3c7")]();
        this[b("0x29f")]();
        if (H1 != ![]) {
          if (this[b("0x12e")] != null) {
            this[b("0x12e")]["setZoomLevel"](this[b("0x2a3")]);
          }
        }
      },
      updateControls: function () {
        var H3 =
          this["maxDim"] - this[b("0x378")] * 0x2 - this["spacing"] * 0x5;
        var H4 =
          (this[b("0x2a3")] - this["minZoomFactor"]) /
          (this["maxZoomFactor"] - this[b("0x3b6")]);
        var H5 = H3 * H4 + this[b("0x34f")] / 0x2;
        var H6 = new FX(
          this[b("0x378")] +
            this[b("0x34f")] * 0x2 +
            this[b("0x34f")] / 0x2 +
            H5,
          this[b("0x36e")] - this[b("0x34f")],
          this[b("0x34f")],
          this[b("0x34f")] * 0x2
        );
        if (this[b("0x33")] == FW[b("0x376")][b("0x98")]) {
          H5 = H3 - H3 * H4 + this[b("0x34f")] / 0x2;
          H6 = new FX(
            this[b("0x36e")] - this[b("0x34f")],
            this["minDim"] +
              this[b("0x34f")] * 0x2 +
              this[b("0x34f")] / 0x2 +
              H5,
            this[b("0x34f")] * 0x2,
            this["spacing"]
          );
        }
        this[b("0x206")]["slider"][b("0x281")](H6);
        var H7 = new FY();
        H7[b("0x242")](H6, this["cornerRadius"]);
        this[b("0x206")]["slider"][b("0x322")] = H7;
        if (this["showLabel"])
          this["controls"]["label"]["text"] = this["zoomFactor"] + "%";
        this[b("0x29f")]();
      },
      onButtonMouseDown: function (H8, H9) {
        if (!this["target"]) return;
        var Ha = this;
        switch (H9[b("0x309")]) {
          case FW[b("0x282")]["ScrollLeft"]:
            this[b("0x358")] = setInterval(function () {
              Ha[b("0x12e")]["setScroll"](
                Ha[b("0x12e")][b("0x2e1")]() - Ha[b("0x2d4")],
                Ha["target"][b("0x228")]()
              );
            }, 0x64);
            break;
          case FW["ButtonType"]["ScrollUp"]:
            this[b("0x358")] = setInterval(function () {
              Ha[b("0x12e")][b("0x2aa")](
                Ha["target"][b("0x2e1")](),
                Ha["target"]["getScrollY"]() - Ha["scrollStep"]
              );
            }, 0x64);
            break;
          case FW[b("0x282")]["ScrollRight"]:
            this[b("0x358")] = setInterval(function () {
              Ha[b("0x12e")][b("0x2aa")](
                Ha[b("0x12e")][b("0x2e1")]() + Ha["scrollStep"],
                Ha["target"][b("0x228")]()
              );
            }, 0x64);
            break;
          case FW[b("0x282")][b("0x133")]:
            this[b("0x358")] = setInterval(function () {
              Ha[b("0x12e")][b("0x2aa")](
                Ha[b("0x12e")]["getScrollX"](),
                Ha["target"]["getScrollY"]() + Ha[b("0x2d4")]
              );
            }, 0x64);
            break;
        }
      },
      onButtonClick: function (Hb, Hc) {
        switch (Hc[b("0x309")]) {
          case FW[b("0x282")]["ZoomIn"]:
            this[b("0x298")](this[b("0x2a3")] + this[b("0x254")], !![]);
            break;
          case FW[b("0x282")]["ZoomOut"]:
            this[b("0x298")](this[b("0x2a3")] - this[b("0x254")], !![]);
            break;
          case FW[b("0x282")][b("0x2ed")]:
            this[b("0x2cd")](Hb);
            break;
          case FW[b("0x282")][b("0x2fd")]:
            if (this[b("0x12e")])
              this["target"][b("0x2aa")](
                this[b("0x12e")][b("0x2e1")]() - this[b("0x2d4")],
                this[b("0x12e")][b("0x228")]()
              );
            break;
          case FW[b("0x282")][b("0x1be")]:
            if (this["target"])
              this[b("0x12e")][b("0x2aa")](
                this[b("0x12e")][b("0x2e1")](),
                this["target"][b("0x228")]() - this[b("0x2d4")]
              );
            break;
          case FW[b("0x282")][b("0x2")]:
            if (this[b("0x12e")])
              this[b("0x12e")][b("0x2aa")](
                this[b("0x12e")][b("0x2e1")]() + this[b("0x2d4")],
                this[b("0x12e")]["getScrollY"]()
              );
            break;
          case FW[b("0x282")][b("0x133")]:
            if (this["target"])
              this[b("0x12e")][b("0x2aa")](
                this["target"][b("0x2e1")](),
                this[b("0x12e")][b("0x228")]() + this[b("0x2d4")]
              );
            break;
        }
        if (this[b("0x8d")]) {
          this[b("0x294")](this, this[b("0x8d")]["id"]);
          if (this[b("0x10b")]) {
            this[b("0x32b")]();
          }
        }
      },
      setEnabled: function (Hd) {
        this["enabled"] = Hd;
      },
      getEnabled: function () {
        return this[b("0x399")];
      },
      getAutoPostBack: function () {
        return this[b("0x10b")];
      },
      setAutoPostBack: function (He) {
        this[b("0x10b")] = He;
      },
      setZoomFactor: function (Hf) {
        if (this[b("0x2a3")] !== Hf) {
          this[b("0x298")](Hf);
        }
      },
      getZoomFactor: function () {
        return this["zoomFactor"];
      },
      setMinZoomFactor: function (Hg) {
        if (this[b("0x3b6")] !== Hg) {
          this["minZoomFactor"] = Hg;
          this["createControls"]();
          this[b("0x3c7")]();
          this[b("0x29f")]();
        }
      },
      getMinZoomFactor: function () {
        return this[b("0x3b6")];
      },
      setMaxZoomFactor: function (Hh) {
        if (this[b("0x255")] !== Hh) {
          this["maxZoomFactor"] = Hh;
          this[b("0xc3")]();
          this[b("0x3c7")]();
          this[b("0x29f")]();
        }
      },
      getMaxZoomFactor: function () {
        return this[b("0x255")];
      },
      setZoomStep: function (Hi) {
        if (this[b("0x254")] !== Hi) {
          this["zoomStep"] = Hi;
          this[b("0xc3")]();
          this[b("0x3c7")]();
          this["repaint"]();
        }
      },
      getZoomStep: function () {
        return this[b("0x254")];
      },
      setScrollStep: function (Hj) {
        if (this[b("0x2d4")] !== Hj) {
          this[b("0x2d4")] = Hj;
          this[b("0xc3")]();
          this[b("0x3c7")]();
          this[b("0x29f")]();
        }
      },
      getScrollStep: function () {
        return this[b("0x2d4")];
      },
      setBackColor: function (Hk) {
        if (this["backColor"] !== Hk) {
          this[b("0x82")] = Hk;
          this["repaint"]();
        }
      },
      getBackColor: function () {
        return this["backColor"];
      },
      setFill: function (Hl) {
        if (this[b("0x27c")] !== Hl) {
          this["fill"] = Hl;
          this[b("0xc3")]();
          this[b("0x3c7")]();
          this[b("0x29f")]();
        }
      },
      getFill: function () {
        return this[b("0x27c")];
      },
      setActiveColor: function (Hm) {
        if (this[b("0x2c3")] !== Hm) {
          this[b("0x2c3")] = Hm;
          this[b("0xc3")]();
          this[b("0x3c7")]();
          this[b("0x29f")]();
        }
      },
      getActiveColor: function () {
        return this["activeColor"];
      },
      setBorderColor: function (Hn) {
        if (this[b("0x1f5")] !== Hn) {
          this[b("0x1f5")] = Hn;
          this["createControls"]();
          this["updateControls"]();
          this[b("0x29f")]();
        }
      },
      getBorderColor: function () {
        return this["borderColor"];
      },
      setInnerColor: function (Ho) {
        if (this[b("0x4b")] !== Ho) {
          this[b("0x4b")] = Ho;
          this[b("0xc3")]();
          this[b("0x3c7")]();
          this[b("0x29f")]();
        }
      },
      getInnerColor: function () {
        return this[b("0x4b")];
      },
      setShadowColor: function (Hp) {
        if (this[b("0xc4")] !== Hp) {
          this[b("0xc4")] = Hp;
          this[b("0xc3")]();
          this[b("0x3c7")]();
          this[b("0x29f")]();
        }
      },
      getShadowColor: function () {
        return this[b("0xc4")];
      },
      setTextColor: function (Hq) {
        if (this[b("0x203")] !== Hq) {
          this["textColor"] = Hq;
          this[b("0xc3")]();
          this["updateControls"]();
          this[b("0x29f")]();
        }
      },
      getTextColor: function () {
        return this[b("0x203")];
      },
      setShowLabel: function (Hr) {
        if (this["showLabel"] !== Hr) {
          this[b("0x18e")] = Hr;
          this[b("0xc3")]();
          this["updateControls"]();
          this[b("0x29f")]();
        }
      },
      getShowLabel: function () {
        return this[b("0x18e")];
      },
      setTickPosition: function (Hs) {
        if (this["tickPosition"] !== Hs) {
          this[b("0xaa")] = Hs;
          this["createControls"]();
          this["updateControls"]();
          this[b("0x29f")]();
        }
      },
      getTickPosition: function () {
        return this["tickPosition"];
      },
      setSnapToZoomStep: function (Ht) {
        if (this["snapToZoomStep"] !== Ht) {
          this[b("0x35f")] = Ht;
          this[b("0xc3")]();
          this["updateControls"]();
          this[b("0x29f")]();
        }
      },
      getSnapToZoomStep: function () {
        return this[b("0x35f")];
      },
      setPadding: function (Hu) {
        if (this[b("0x13a")] !== Hu) {
          this["padding"] = Hu;
          this[b("0xc3")]();
          this["updateControls"]();
          this["repaint"]();
        }
      },
      getPadding: function () {
        return this[b("0x13a")];
      },
      setCornerRadius: function (Hv) {
        if (this["cornerRadius"] !== Hv) {
          this[b("0x11f")] = Hv;
          this[b("0xc3")]();
          this[b("0x3c7")]();
          this[b("0x29f")]();
        }
      },
      getCornerRadius: function () {
        return this["cornerRadius"];
      },
    };
    MindFusion["Controls"][b("0x149")][b("0x295")] = function (Hw) {
      return mflayer[b("0x17a")](
        MindFusion["Controls"][b("0x149")],
        null,
        null,
        null,
        Hw
      );
    };
    MindFusion["Controls"][b("0x149")][b("0x210")] = function (Hx, Hy) {
      return mflayer["findControl"](Hx, Hy);
    };
    MindFusion["registerClass"](G2, b("0x335"), b("0x3d4"));
  })(MindFusion[b("0x16e")]);
  var ex = MindFusion;
  ex.Dictionary = MindFusion.Collections.Dictionary;
  return ex;
});
