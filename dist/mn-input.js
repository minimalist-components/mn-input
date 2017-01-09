"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnInput=function(_HTMLElement){function MnInput(self){function getNameAndValue(attr){var name=attr.name,value=attr.value;return{name:name,value:value}}function defaults(attribute){return attribute.hasOwnProperty("default")}function notImplemented(defaultAttr){return!attributes.some(function(attribute){return attribute.name===defaultAttr.name})}function setAttribute(attribute){var attributeSpec=attributeSpecs.filter(function(spec){return spec.name===attribute.name})[0];if(!attributeSpec)return!1;var isDefaultAttribute=attributeSpec.hasOwnProperty("default"),attributeValue=attribute.value;if(isDefaultAttribute){var isValidValue=attributeSpec.hasOwnProperty("values")&&attributeSpec.values.indexOf(attributeValue)>=0,value=isValidValue?attributeValue:attributeSpec.default;input.setAttribute(attribute.name,value)}else attributeValue&&input.setAttribute(attribute.name,attributeValue)}var _this,_ret;_classCallCheck(this,MnInput),self=_this=_possibleConstructorReturn(this,(MnInput.__proto__||Object.getPrototypeOf(MnInput)).call(this,self)),_this.classList.add("mn-input"),_this.getAttribute("value")?_this.classList.add("has-value"):_this.classList.remove("has-value");var attributeSpecs=[{name:"value"},{name:"name"},{name:"autocomplete",default:"off"},{name:"autofocus"},{name:"maxlength"},{name:"pattern"},{name:"readonly"},{name:"required"},{name:"disabled"},{name:"autocapitalize"}],input=document.createElement("input");input.addEventListener("focus",function(){return _this.classList.add("focused")}),input.addEventListener("keyup",function(){_this.closest("form.submitted")&&_this.validate()}),input.addEventListener("blur",function(){return _this.classList.remove("focused")}),input.addEventListener("change",function(){return _this.value=input.value});var attributes=Array.from(_this.attributes).map(getNameAndValue),defaultAttibutes=attributeSpecs.filter(defaults).filter(notImplemented);return attributes=attributes.concat(defaultAttibutes),attributes.forEach(setAttribute),attributeSpecs.filter(function(attr){return attr.remove}).forEach(function(attr){_this.removeAttribute(attr.name)}),_this.insertBefore(input,_this.firstChild),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnInput,_HTMLElement),_createClass(MnInput,[{key:"focus",value:function(){this.querySelector("input").focus(),this.classList.add("focused")}},{key:"blur",value:function(){this.querySelector("input").blur(),this.classList.remove("focused")}},{key:"validate",value:function(){function objectValues(obj){var array=[];for(var key in obj)array.push(obj[key]);return array}var input=this.querySelector("input"),patternMismatch=!RegExp(this.getAttribute("pattern")||"").test(input.value),errors={pattern:input.value?input.validity.patternMismatch:patternMismatch,required:input.validity.valueMissing};Object.values=Object.values?Object.values:objectValues,errors.invalid=Object.values(errors).some(function(value){return value});for(var key in errors){var cssClass=key,invalid=errors[key];invalid?this.classList.add(cssClass):this.classList.remove(cssClass)}}},{key:"value",set:function(value){var input=this.querySelector("input");value?(input.value!==value&&(input.value=value),this.classList.add("has-value")):(input.value="",this.classList.remove("has-value")),input.value!==value&&this.closest("form.submitted")&&this.validate()},get:function(){var input=this.querySelector("input");return input.value}}]),MnInput}(HTMLElement);window.customElements.define("mn-input",MnInput);
//# sourceMappingURL=mn-input.js.map
