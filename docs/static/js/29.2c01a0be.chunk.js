webpackJsonp([29],{192:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"attributes",function(){return p});var l=t(0),c=t.n(l),s=t(52),m=t(213),i=t(226),u=(t.n(i),function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}()),p={},d=function(e){function n(e){a(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={},t}return r(n,e),u(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h1",null,"Checkboxes"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"Checkboxes allow the user to select multiple options from a set.")),c.a.createElement("ul",null,c.a.createElement("li",null,"Module ",c.a.createElement("strong",null,"@rmwc/checkbox")),c.a.createElement("li",null,"Import styles:",c.a.createElement("ul",null,c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/checkbox/dist/mdc.checkbox.css'"),";"),c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/form-field/dist/mdc.form-field.css'"),";"))),c.a.createElement("li",null,"MDC Docs: ",c.a.createElement("a",{href:"https://material.io/develop/web/components/input-controls/checkboxes/"},"https://material.io/develop/web/components/input-controls/checkboxes/"))),c.a.createElement("div",{className:"example render-with-code"},c.a.createElement("div",{className:"run"},c.a.createElement(s.a,{checked:this.state.cookiesChecked||!1,onChange:function(n){return e.setState({cookiesChecked:n.target.checked})}},"Cookies"),c.a.createElement(s.a,null,"Pizza"),c.a.createElement(s.a,{label:"Icecream"}),c.a.createElement(s.a,{indeterminate:!0},"Broccoli")),c.a.createElement("div",{className:"source"},c.a.createElement("pre",{className:"language-jsx"},c.a.createElement("code",{className:"language-jsx"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{")," Checkbox ",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@rmwc/checkbox'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Controlled with change handlers */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"checked"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),"state",c.a.createElement("span",{className:"token punctuation"},"."),"cookiesChecked ",c.a.createElement("span",{className:"token operator"},"||")," ",c.a.createElement("span",{className:"token boolean"},"false"),c.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"onChange"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),"evt ",c.a.createElement("span",{className:"token operator"},"="),c.a.createElement("span",{className:"token operator"},">")," ",c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"setState"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"{"),"cookiesChecked",c.a.createElement("span",{className:"token punctuation"},":")," evt",c.a.createElement("span",{className:"token punctuation"},"."),"target",c.a.createElement("span",{className:"token punctuation"},"."),"checked",c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},"}")),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  Cookies","\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Checkbox"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Standard Checkbox */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox"),c.a.createElement("span",{className:"token punctuation"},">")),"Pizza",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Checkbox"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Using the label prop */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",c.a.createElement("span",{className:"token attr-name"},"label"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"Icecream",c.a.createElement("span",{className:"token punctuation"},'"'))," ",c.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},'/* Making a "half" checked, indeterminate Checkbox */'),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",c.a.createElement("span",{className:"token attr-name"},"indeterminate"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token boolean"},"true"),c.a.createElement("span",{className:"token punctuation"},"}")),c.a.createElement("span",{className:"token punctuation"},">")),"Broccoli",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Checkbox"),c.a.createElement("span",{className:"token punctuation"},">")),"\n")))),c.a.createElement("div",{className:"example render-only"},c.a.createElement("div",{className:"run"},c.a.createElement(m.a,{docs:i,displayName:"Checkbox"}))))}}]),n}(c.a.Component);n.default=d},213:function(e,n,t){"use strict";function a(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function l(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}t.d(n,"a",function(){return i});var c=t(0),s=(t.n(c),function(){function e(e,n){var t=[],a=!0,o=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);a=!0);}catch(e){o=!0,r=e}finally{try{!a&&c.return&&c.return()}finally{if(o)throw r}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=function(e){function n(e){o(this,n);var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.flatDocs=Object.values(e.docs).reduce(function(e,n){return e.concat(n)},[]),t}return l(n,e),m(n,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(n){return n.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,n){return c.createElement(c.Fragment,{key:n},0!==n&&c.createElement("br",null),e.split("  ").map(function(e,n){return c.createElement(c.Fragment,{key:n},0!==n&&c.createElement(c.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var n=this;return e.map(function(e){return n.findDocDef(e)}).filter(Boolean).reduce(function(e,n){return Object.assign({},n,e,{props:n.props||e.props?Object.assign({},n.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,n=this.props,t=n.displayName,o=n.composes,r=void 0===o?[]:o,l=this.getComposedDefs([t].concat(a(r)));return c.createElement("div",{className:"document-component"},c.createElement("h2",null,t),l&&!!l.description&&c.createElement("p",null,l.description),l&&l.props&&c.createElement("div",null,c.createElement("h3",null,"Props"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Name"),c.createElement("th",null,"Type"),c.createElement("th",null,"Default"),c.createElement("th",null,"Description"))),c.createElement("tbody",null,Object.entries(l.props).map(function(n,t){var a=s(n,2),o=a[0],r=a[1];return c.createElement("tr",{key:t},c.createElement("td",{className:r.required?"required":""},c.createElement("code",null,o)),c.createElement("td",null,c.createElement("code",null,r.flowType&&e.renderRaw(r.flowType.raw||r.flowType.name||""))),c.createElement("td",null,r.defaultValue?c.createElement("code",null,r.defaultValue.value):c.createElement("code",null,"undefined")),c.createElement("td",null,r.description||""))})))))}}]),n}(c.Component)},226:function(e,n){e.exports=[{description:"",displayName:"CheckboxRoot",methods:[{name:"classNames",docblock:null,modifiers:[],params:[{name:"props",type:{name:"intersection",raw:"{\n  /** A DOM ID for the toggle. */\n  id?: string,\n  /** Disables the control. */\n  disabled?: boolean,\n  /** Toggle the control on and off. */\n  checked?: boolean | string,\n  /** The value of the control. */\n  value?: boolean | string | number,\n  /** Make the control indeterminate */\n  indeterminate?: boolean,\n  /** A label for the control. */\n  label?: string\n} & SimpleTagPropsT &\n  //$FlowFixMe\n  React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"signature",type:"object",raw:"{\n  /** A DOM ID for the toggle. */\n  id?: string,\n  /** Disables the control. */\n  disabled?: boolean,\n  /** Toggle the control on and off. */\n  checked?: boolean | string,\n  /** The value of the control. */\n  value?: boolean | string | number,\n  /** Make the control indeterminate */\n  indeterminate?: boolean,\n  /** A label for the control. */\n  label?: string\n}",signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1}},{key:"value",value:{name:"union",raw:"boolean | string | number",elements:[{name:"boolean"},{name:"string"},{name:"number"}],required:!1}},{key:"indeterminate",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}}]}},{name:"SimpleTagPropsT"},{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}],alias:"CheckboxPropsT"}}],returns:null}]},{description:"",displayName:"CheckboxNativeControl",methods:[],props:{type:{defaultValue:{value:"'checkbox'",computed:!1},required:!1}}},{description:"",displayName:"CheckboxBackground",methods:[]},{description:"",displayName:"CheckboxCheckmark",methods:[],props:{viewBox:{defaultValue:{value:"'0 0 24 24'",computed:!1},required:!1}}},{description:"",displayName:"CheckboxCheckmarkPath",methods:[],props:{fill:{defaultValue:{value:"'none'",computed:!1},required:!1},stroke:{defaultValue:{value:"'white'",computed:!1},required:!1},d:{defaultValue:{value:"'M1.73,12.91 8.1,19.28 22.79,4.59'",computed:!1},required:!1}}},{description:"",displayName:"CheckboxMixedmark",methods:[]},{description:"",displayName:"CheckboxLabel",methods:[]},{description:"A Checkbox component",displayName:"Checkbox",methods:[{name:"destroy",docblock:null,modifiers:[],params:[],returns:null},{name:"syncWithProps",docblock:null,modifiers:[],params:[{name:"nextProps",type:{name:"intersection",raw:"{\n  /** A DOM ID for the toggle. */\n  id?: string,\n  /** Disables the control. */\n  disabled?: boolean,\n  /** Toggle the control on and off. */\n  checked?: boolean | string,\n  /** The value of the control. */\n  value?: boolean | string | number,\n  /** Make the control indeterminate */\n  indeterminate?: boolean,\n  /** A label for the control. */\n  label?: string\n} & SimpleTagPropsT &\n  React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"signature",type:"object",raw:"{\n  /** A DOM ID for the toggle. */\n  id?: string,\n  /** Disables the control. */\n  disabled?: boolean,\n  /** Toggle the control on and off. */\n  checked?: boolean | string,\n  /** The value of the control. */\n  value?: boolean | string | number,\n  /** Make the control indeterminate */\n  indeterminate?: boolean,\n  /** A label for the control. */\n  label?: string\n}",signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1}},{key:"value",value:{name:"union",raw:"boolean | string | number",elements:[{name:"boolean"},{name:"string"},{name:"number"}],required:!1}},{key:"indeterminate",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}}]}},{name:"SimpleTagPropsT"},{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}],alias:"CheckboxPropsT"}}],returns:null}],props:{id:{flowType:{name:"string"},required:!1,description:"A DOM ID for the toggle."},disabled:{flowType:{name:"boolean"},required:!1,description:"Disables the control."},checked:{flowType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},required:!1,description:"Toggle the control on and off."},value:{flowType:{name:"union",raw:"boolean | string | number",elements:[{name:"boolean"},{name:"string"},{name:"number"}]},required:!1,description:"The value of the control."},indeterminate:{flowType:{name:"boolean"},required:!1,description:"Make the control indeterminate"},label:{flowType:{name:"string"},required:!1,description:"A label for the control."}}}]}});
//# sourceMappingURL=29.2c01a0be.chunk.js.map