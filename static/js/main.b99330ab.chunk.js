(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,_,t){},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_user_Desktop_assign4_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),C_Users_user_Desktop_assign4_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),C_Users_user_Desktop_assign4_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),C_Users_user_Desktop_assign4_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),C_Users_user_Desktop_assign4_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_calc_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_calc_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_calc_css__WEBPACK_IMPORTED_MODULE_6__),_ResultComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),_KeypadComponent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14),App=function(_Component){function App(){var _this;return Object(C_Users_user_Desktop_assign4_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(C_Users_user_Desktop_assign4_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_user_Desktop_assign4_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this)),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():"^"===e?_this.setState({result:_this.state.result+e,result2:_this.state.result2+"**"}):"\u03c0"===e?_this.setState({result:_this.state.result+e,result2:_this.state.result2+"3.14159"}):"e"===e?_this.setState({result:_this.state.result+e,result2:_this.state.result2+"2.71828"}):_this.setState({result:_this.state.result+e,result2:_this.state.result2+e})},_this.calculate=function(){try{_this.setState({result:eval(_this.state.result2),result2:eval(_this.state.result2)})}catch(e){_this.setState({result:"error",result2:"error"})}},_this.reset=function(){_this.setState({result:"",result2:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1),result2:_this.state.result.slice(0,-1)})},_this.state={result:"",result2:""},_this}return Object(C_Users_user_Desktop_assign4_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(C_Users_user_Desktop_assign4_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",{className:"head1"},"My Calculator"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator-body2"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ResultComponent__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_KeypadComponent__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:this.onClick}))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},function(e,_,t){"use strict";var a=t(3),n=t(4),r=t(6),s=t(5),l=t(7),c=t(0),o=t.n(c),u=(t(8),function(e){function _(){return Object(a.a)(this,_),Object(r.a)(this,Object(s.a)(_).apply(this,arguments))}return Object(l.a)(_,e),Object(n.a)(_,[{key:"render",value:function(){var e=this.props.result;return o.a.createElement("center",null," ",o.a.createElement("div",{className:"result"},o.a.createElement("div",{className:"res"},e),o.a.createElement("br",null)))}}]),_}(c.Component));_.a=u},function(e,_,t){"use strict";var a=t(3),n=t(4),r=t(6),s=t(5),l=t(7),c=t(0),o=t.n(c),u=(t(8),t(2)),i=function(e){function _(){return Object(a.a)(this,_),Object(r.a)(this,Object(s.a)(_).apply(this,arguments))}return Object(l.a)(_,e),Object(n.a)(_,[{key:"render",value:function(){var e=this;return o.a.createElement("center",null,o.a.createElement("div",{className:"Button"},o.a.createElement(u.a,{name:"(",onClick:function(_){return e.props.onClick(_.target.name)}},"("),o.a.createElement(u.a,{name:"CE",onClick:function(_){return e.props.onClick(_.target.name)}},"CE"),o.a.createElement(u.a,{name:")",onClick:function(_){return e.props.onClick(_.target.name)}},")"),o.a.createElement(u.a,{name:"C",onClick:function(_){return e.props.onClick(_.target.name)}},"C"),o.a.createElement(u.a,{name:"1",className:"num",onClick:function(_){return e.props.onClick(_.target.name)}},"1"),o.a.createElement(u.a,{name:"2",className:"num",onClick:function(_){return e.props.onClick(_.target.name)}},"2"),o.a.createElement(u.a,{name:"3",className:"num",onClick:function(_){return e.props.onClick(_.target.name)}},"3"),o.a.createElement(u.a,{name:"+",onClick:function(_){return e.props.onClick(_.target.name)}},"+"),o.a.createElement(u.a,{name:"4",className:"num",onClick:function(_){return e.props.onClick(_.target.name)}},"4"),o.a.createElement(u.a,{name:"5",className:"num",onClick:function(_){return e.props.onClick(_.target.name)}},"5"),o.a.createElement(u.a,{name:"6",className:"num",onClick:function(_){return e.props.onClick(_.target.name)}},"6"),o.a.createElement(u.a,{name:"-",onClick:function(_){return e.props.onClick(_.target.name)}},"-"),o.a.createElement(u.a,{name:"7",className:"num",onClick:function(_){return e.props.onClick(_.target.name)}},"7"),o.a.createElement(u.a,{name:"8",className:"num",onClick:function(_){return e.props.onClick(_.target.name)}},"8"),o.a.createElement(u.a,{name:"9",className:"num",onClick:function(_){return e.props.onClick(_.target.name)}},"9"),o.a.createElement(u.a,{name:"*",onClick:function(_){return e.props.onClick(_.target.name)}},"x"),o.a.createElement(u.a,{name:".",onClick:function(_){return e.props.onClick(_.target.name)}},"."),o.a.createElement(u.a,{name:"0",className:"num",onClick:function(_){return e.props.onClick(_.target.name)}},"0"),o.a.createElement(u.a,{name:"=",onClick:function(_){return e.props.onClick(_.target.name)}},"="),o.a.createElement(u.a,{name:"/",onClick:function(_){return e.props.onClick(_.target.name)}},"/"),o.a.createElement(u.a,{name:"%",onClick:function(_){return e.props.onClick(_.target.name)}},"%"),o.a.createElement(u.a,{name:"\u03c0",onClick:function(_){return e.props.onClick(_.target.name)}},"\u03c0"),o.a.createElement(u.a,{name:"^",onClick:function(_){return e.props.onClick(_.target.name)}},"^"),o.a.createElement(u.a,{name:"e",onClick:function(_){return e.props.onClick(_.target.name)}},"e")))}}]),_}(c.Component);_.a=i},,,function(e,_,t){e.exports=t(18)},function(e,_,t){"use strict";t.r(_);var a=t(0),n=t.n(a),r=t(11),s=t.n(r),l=t(12);s.a.render(n.a.createElement(l.a,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.b99330ab.chunk.js.map