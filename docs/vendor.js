/*!

Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(window, polyfill){'use strict';

  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
  // THIS FILE IS JUST WRAPPED UP RESULTING IN
  // build/document-register-element.js
  // and its .max.js counter part

  var
    document = window.document,
    Object = window.Object
  ;

  var htmlClass = (function (info) {
    // (C) Andrea Giammarchi - @WebReflection - MIT Style
    var
      catchClass = /^[A-Z]+[a-z]/,
      filterBy = function (re) {
        var arr = [], tag;
        for (tag in register) {
          if (re.test(tag)) arr.push(tag);
        }
        return arr;
      },
      add = function (Class, tag) {
        tag = tag.toLowerCase();
        if (!(tag in register)) {
          register[Class] = (register[Class] || []).concat(tag);
          register[tag] = (register[tag.toUpperCase()] = Class);
        }
      },
      register = (Object.create || Object)(null),
      htmlClass = {},
      i, section, tags, Class
    ;
    for (section in info) {
      for (Class in info[section]) {
        tags = info[section][Class];
        register[Class] = tags;
        for (i = 0; i < tags.length; i++) {
          register[tags[i].toLowerCase()] =
          register[tags[i].toUpperCase()] = Class;
        }
      }
    }
    htmlClass.get = function get(tagOrClass) {
      return typeof tagOrClass === 'string' ?
        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
        filterBy(tagOrClass);
    };
    htmlClass.set = function set(tag, Class) {
      return (catchClass.test(tag) ?
        add(tag, Class) :
        add(Class, tag)
      ), htmlClass;
    };
    return htmlClass;
  }({
    "collections": {
      "HTMLAllCollection": [
        "all"
      ],
      "HTMLCollection": [
        "forms"
      ],
      "HTMLFormControlsCollection": [
        "elements"
      ],
      "HTMLOptionsCollection": [
        "options"
      ]
    },
    "elements": {
      "Element": [
        "element"
      ],
      "HTMLAnchorElement": [
        "a"
      ],
      "HTMLAppletElement": [
        "applet"
      ],
      "HTMLAreaElement": [
        "area"
      ],
      "HTMLAttachmentElement": [
        "attachment"
      ],
      "HTMLAudioElement": [
        "audio"
      ],
      "HTMLBRElement": [
        "br"
      ],
      "HTMLBaseElement": [
        "base"
      ],
      "HTMLBodyElement": [
        "body"
      ],
      "HTMLButtonElement": [
        "button"
      ],
      "HTMLCanvasElement": [
        "canvas"
      ],
      "HTMLContentElement": [
        "content"
      ],
      "HTMLDListElement": [
        "dl"
      ],
      "HTMLDataElement": [
        "data"
      ],
      "HTMLDataListElement": [
        "datalist"
      ],
      "HTMLDetailsElement": [
        "details"
      ],
      "HTMLDialogElement": [
        "dialog"
      ],
      "HTMLDirectoryElement": [
        "dir"
      ],
      "HTMLDivElement": [
        "div"
      ],
      "HTMLDocument": [
        "document"
      ],
      "HTMLElement": [
        "element",
        "abbr",
        "address",
        "article",
        "aside",
        "b",
        "bdi",
        "bdo",
        "cite",
        "code",
        "command",
        "dd",
        "dfn",
        "dt",
        "em",
        "figcaption",
        "figure",
        "footer",
        "header",
        "i",
        "kbd",
        "mark",
        "nav",
        "noscript",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "small",
        "strong",
        "sub",
        "summary",
        "sup",
        "u",
        "var",
        "wbr"
      ],
      "HTMLEmbedElement": [
        "embed"
      ],
      "HTMLFieldSetElement": [
        "fieldset"
      ],
      "HTMLFontElement": [
        "font"
      ],
      "HTMLFormElement": [
        "form"
      ],
      "HTMLFrameElement": [
        "frame"
      ],
      "HTMLFrameSetElement": [
        "frameset"
      ],
      "HTMLHRElement": [
        "hr"
      ],
      "HTMLHeadElement": [
        "head"
      ],
      "HTMLHeadingElement": [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ],
      "HTMLHtmlElement": [
        "html"
      ],
      "HTMLIFrameElement": [
        "iframe"
      ],
      "HTMLImageElement": [
        "img"
      ],
      "HTMLInputElement": [
        "input"
      ],
      "HTMLKeygenElement": [
        "keygen"
      ],
      "HTMLLIElement": [
        "li"
      ],
      "HTMLLabelElement": [
        "label"
      ],
      "HTMLLegendElement": [
        "legend"
      ],
      "HTMLLinkElement": [
        "link"
      ],
      "HTMLMapElement": [
        "map"
      ],
      "HTMLMarqueeElement": [
        "marquee"
      ],
      "HTMLMediaElement": [
        "media"
      ],
      "HTMLMenuElement": [
        "menu"
      ],
      "HTMLMenuItemElement": [
        "menuitem"
      ],
      "HTMLMetaElement": [
        "meta"
      ],
      "HTMLMeterElement": [
        "meter"
      ],
      "HTMLModElement": [
        "del",
        "ins"
      ],
      "HTMLOListElement": [
        "ol"
      ],
      "HTMLObjectElement": [
        "object"
      ],
      "HTMLOptGroupElement": [
        "optgroup"
      ],
      "HTMLOptionElement": [
        "option"
      ],
      "HTMLOutputElement": [
        "output"
      ],
      "HTMLParagraphElement": [
        "p"
      ],
      "HTMLParamElement": [
        "param"
      ],
      "HTMLPictureElement": [
        "picture"
      ],
      "HTMLPreElement": [
        "pre"
      ],
      "HTMLProgressElement": [
        "progress"
      ],
      "HTMLQuoteElement": [
        "blockquote",
        "q",
        "quote"
      ],
      "HTMLScriptElement": [
        "script"
      ],
      "HTMLSelectElement": [
        "select"
      ],
      "HTMLShadowElement": [
        "shadow"
      ],
      "HTMLSlotElement": [
        "slot"
      ],
      "HTMLSourceElement": [
        "source"
      ],
      "HTMLSpanElement": [
        "span"
      ],
      "HTMLStyleElement": [
        "style"
      ],
      "HTMLTableCaptionElement": [
        "caption"
      ],
      "HTMLTableCellElement": [
        "td",
        "th"
      ],
      "HTMLTableColElement": [
        "col",
        "colgroup"
      ],
      "HTMLTableElement": [
        "table"
      ],
      "HTMLTableRowElement": [
        "tr"
      ],
      "HTMLTableSectionElement": [
        "thead",
        "tbody",
        "tfoot"
      ],
      "HTMLTemplateElement": [
        "template"
      ],
      "HTMLTextAreaElement": [
        "textarea"
      ],
      "HTMLTimeElement": [
        "time"
      ],
      "HTMLTitleElement": [
        "title"
      ],
      "HTMLTrackElement": [
        "track"
      ],
      "HTMLUListElement": [
        "ul"
      ],
      "HTMLUnknownElement": [
        "unknown",
        "vhgroupv",
        "vkeygen"
      ],
      "HTMLVideoElement": [
        "video"
      ]
    },
    "nodes": {
      "Attr": [
        "node"
      ],
      "Audio": [
        "audio"
      ],
      "CDATASection": [
        "node"
      ],
      "CharacterData": [
        "node"
      ],
      "Comment": [
        "#comment"
      ],
      "Document": [
        "#document"
      ],
      "DocumentFragment": [
        "#document-fragment"
      ],
      "DocumentType": [
        "node"
      ],
      "HTMLDocument": [
        "#document"
      ],
      "Image": [
        "img"
      ],
      "Option": [
        "option"
      ],
      "ProcessingInstruction": [
        "node"
      ],
      "ShadowRoot": [
        "#shadow-root"
      ],
      "Text": [
        "#text"
      ],
      "XMLDocument": [
        "xml"
      ]
    }
  }));
  
  
    
  // passed at runtime, configurable
  // via nodejs module
  if (!polyfill) polyfill = 'auto';
  
  var
    // V0 polyfill entry
    REGISTER_ELEMENT = 'registerElement',
  
    // IE < 11 only + old WebKit for attributes + feature detection
    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
  
    // shortcuts and costants
    ADD_EVENT_LISTENER = 'addEventListener',
    ATTACHED = 'attached',
    CALLBACK = 'Callback',
    DETACHED = 'detached',
    EXTENDS = 'extends',
  
    ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
    ATTACHED_CALLBACK = ATTACHED + CALLBACK,
    CONNECTED_CALLBACK = 'connected' + CALLBACK,
    DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
    CREATED_CALLBACK = 'created' + CALLBACK,
    DETACHED_CALLBACK = DETACHED + CALLBACK,
  
    ADDITION = 'ADDITION',
    MODIFICATION = 'MODIFICATION',
    REMOVAL = 'REMOVAL',
  
    DOM_ATTR_MODIFIED = 'DOMAttrModified',
    DOM_CONTENT_LOADED = 'DOMContentLoaded',
    DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
  
    PREFIX_TAG = '<',
    PREFIX_IS = '=',
  
    // valid and invalid node names
    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
    invalidNames = [
      'ANNOTATION-XML',
      'COLOR-PROFILE',
      'FONT-FACE',
      'FONT-FACE-SRC',
      'FONT-FACE-URI',
      'FONT-FACE-FORMAT',
      'FONT-FACE-NAME',
      'MISSING-GLYPH'
    ],
  
    // registered types and their prototypes
    types = [],
    protos = [],
  
    // to query subnodes
    query = '',
  
    // html shortcut used to feature detect
    documentElement = document.documentElement,
  
    // ES5 inline helpers || basic patches
    indexOf = types.indexOf || function (v) {
      for(var i = this.length; i-- && this[i] !== v;){}
      return i;
    },
  
    // other helpers / shortcuts
    OP = Object.prototype,
    hOP = OP.hasOwnProperty,
    iPO = OP.isPrototypeOf,
  
    defineProperty = Object.defineProperty,
    empty = [],
    gOPD = Object.getOwnPropertyDescriptor,
    gOPN = Object.getOwnPropertyNames,
    gPO = Object.getPrototypeOf,
    sPO = Object.setPrototypeOf,
  
    // jshint proto: true
    hasProto = !!Object.__proto__,
  
    // V1 helpers
    fixGetClass = false,
    DRECEV1 = '__dreCEv1',
    customElements = window.customElements,
    usableCustomElements = polyfill !== 'force' && !!(
      customElements &&
      customElements.define &&
      customElements.get &&
      customElements.whenDefined
    ),
    Dict = Object.create || Object,
    Map = window.Map || function Map() {
      var K = [], V = [], i;
      return {
        get: function (k) {
          return V[indexOf.call(K, k)];
        },
        set: function (k, v) {
          i = indexOf.call(K, k);
          if (i < 0) V[K.push(k) - 1] = v;
          else V[i] = v;
        }
      };
    },
    Promise = window.Promise || function (fn) {
      var
        notify = [],
        done = false,
        p = {
          'catch': function () {
            return p;
          },
          'then': function (cb) {
            notify.push(cb);
            if (done) setTimeout(resolve, 1);
            return p;
          }
        }
      ;
      function resolve(value) {
        done = true;
        while (notify.length) notify.shift()(value);
      }
      fn(resolve);
      return p;
    },
    justCreated = false,
    constructors = Dict(null),
    waitingList = Dict(null),
    nodeNames = new Map(),
    secondArgument = String,
  
    // used to create unique instances
    create = Object.create || function Bridge(proto) {
      // silly broken polyfill probably ever used but short enough to work
      return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
    },
  
    // will set the prototype if possible
    // or copy over all properties
    setPrototype = sPO || (
      hasProto ?
        function (o, p) {
          o.__proto__ = p;
          return o;
        } : (
      (gOPN && gOPD) ?
        (function(){
          function setProperties(o, p) {
            for (var
              key,
              names = gOPN(p),
              i = 0, length = names.length;
              i < length; i++
            ) {
              key = names[i];
              if (!hOP.call(o, key)) {
                defineProperty(o, key, gOPD(p, key));
              }
            }
          }
          return function (o, p) {
            do {
              setProperties(o, p);
            } while ((p = gPO(p)) && !iPO.call(p, o));
            return o;
          };
        }()) :
        function (o, p) {
          for (var key in p) {
            o[key] = p[key];
          }
          return o;
        }
    )),
  
    // DOM shortcuts and helpers, if any
  
    MutationObserver = window.MutationObserver ||
                       window.WebKitMutationObserver,
  
    HTMLElementPrototype = (
      window.HTMLElement ||
      window.Element ||
      window.Node
    ).prototype,
  
    IE8 = !iPO.call(HTMLElementPrototype, documentElement),
  
    safeProperty = IE8 ? function (o, k, d) {
      o[k] = d.value;
      return o;
    } : defineProperty,
  
    isValidNode = IE8 ?
      function (node) {
        return node.nodeType === 1;
      } :
      function (node) {
        return iPO.call(HTMLElementPrototype, node);
      },
  
    targets = IE8 && [],
  
    attachShadow = HTMLElementPrototype.attachShadow,
    cloneNode = HTMLElementPrototype.cloneNode,
    dispatchEvent = HTMLElementPrototype.dispatchEvent,
    getAttribute = HTMLElementPrototype.getAttribute,
    hasAttribute = HTMLElementPrototype.hasAttribute,
    removeAttribute = HTMLElementPrototype.removeAttribute,
    setAttribute = HTMLElementPrototype.setAttribute,
  
    // replaced later on
    createElement = document.createElement,
    patchedCreateElement = createElement,
  
    // shared observer for all attributes
    attributesObserver = MutationObserver && {
      attributes: true,
      characterData: true,
      attributeOldValue: true
    },
  
    // useful to detect only if there's no MutationObserver
    DOMAttrModified = MutationObserver || function(e) {
      doesNotSupportDOMAttrModified = false;
      documentElement.removeEventListener(
        DOM_ATTR_MODIFIED,
        DOMAttrModified
      );
    },
  
    // will both be used to make DOMNodeInserted asynchronous
    asapQueue,
    asapTimer = 0,
  
    // internal flags
    setListener = false,
    doesNotSupportDOMAttrModified = true,
    dropDomContentLoaded = true,
  
    // needed for the innerHTML helper
    notFromInnerHTMLHelper = true,
  
    // optionally defined later on
    onSubtreeModified,
    callDOMAttrModified,
    getAttributesMirror,
    observer,
    observe,
  
    // based on setting prototype capability
    // will check proto or the expando attribute
    // in order to setup the node once
    patchIfNotAlready,
    patch
  ;
  
  // only if needed
  if (!(REGISTER_ELEMENT in document)) {
  
    if (sPO || hasProto) {
        patchIfNotAlready = function (node, proto) {
          if (!iPO.call(proto, node)) {
            setupNode(node, proto);
          }
        };
        patch = setupNode;
    } else {
        patchIfNotAlready = function (node, proto) {
          if (!node[EXPANDO_UID]) {
            node[EXPANDO_UID] = Object(true);
            setupNode(node, proto);
          }
        };
        patch = patchIfNotAlready;
    }
  
    if (IE8) {
      doesNotSupportDOMAttrModified = false;
      (function (){
        var
          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
          addEventListener = descriptor.value,
          patchedRemoveAttribute = function (name) {
            var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
            e.attrName = name;
            e.prevValue = getAttribute.call(this, name);
            e.newValue = null;
            e[REMOVAL] = e.attrChange = 2;
            removeAttribute.call(this, name);
            dispatchEvent.call(this, e);
          },
          patchedSetAttribute = function (name, value) {
            var
              had = hasAttribute.call(this, name),
              old = had && getAttribute.call(this, name),
              e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
            ;
            setAttribute.call(this, name, value);
            e.attrName = name;
            e.prevValue = had ? old : null;
            e.newValue = value;
            if (had) {
              e[MODIFICATION] = e.attrChange = 1;
            } else {
              e[ADDITION] = e.attrChange = 0;
            }
            dispatchEvent.call(this, e);
          },
          onPropertyChange = function (e) {
            // jshint eqnull:true
            var
              node = e.currentTarget,
              superSecret = node[EXPANDO_UID],
              propertyName = e.propertyName,
              event
            ;
            if (superSecret.hasOwnProperty(propertyName)) {
              superSecret = superSecret[propertyName];
              event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
              event.attrName = superSecret.name;
              event.prevValue = superSecret.value || null;
              event.newValue = (superSecret.value = node[propertyName] || null);
              if (event.prevValue == null) {
                event[ADDITION] = event.attrChange = 0;
              } else {
                event[MODIFICATION] = event.attrChange = 1;
              }
              dispatchEvent.call(node, event);
            }
          }
        ;
        descriptor.value = function (type, handler, capture) {
          if (
            type === DOM_ATTR_MODIFIED &&
            this[ATTRIBUTE_CHANGED_CALLBACK] &&
            this.setAttribute !== patchedSetAttribute
          ) {
            this[EXPANDO_UID] = {
              className: {
                name: 'class',
                value: this.className
              }
            };
            this.setAttribute = patchedSetAttribute;
            this.removeAttribute = patchedRemoveAttribute;
            addEventListener.call(this, 'propertychange', onPropertyChange);
          }
          addEventListener.call(this, type, handler, capture);
        };
        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
      }());
    } else if (!MutationObserver) {
      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
      documentElement.setAttribute(EXPANDO_UID, 1);
      documentElement.removeAttribute(EXPANDO_UID);
      if (doesNotSupportDOMAttrModified) {
        onSubtreeModified = function (e) {
          var
            node = this,
            oldAttributes,
            newAttributes,
            key
          ;
          if (node === e.target) {
            oldAttributes = node[EXPANDO_UID];
            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
            for (key in newAttributes) {
              if (!(key in oldAttributes)) {
                // attribute was added
                return callDOMAttrModified(
                  0,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  ADDITION
                );
              } else if (newAttributes[key] !== oldAttributes[key]) {
                // attribute was changed
                return callDOMAttrModified(
                  1,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  MODIFICATION
                );
              }
            }
            // checking if it has been removed
            for (key in oldAttributes) {
              if (!(key in newAttributes)) {
                // attribute removed
                return callDOMAttrModified(
                  2,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  REMOVAL
                );
              }
            }
          }
        };
        callDOMAttrModified = function (
          attrChange,
          currentTarget,
          attrName,
          prevValue,
          newValue,
          action
        ) {
          var e = {
            attrChange: attrChange,
            currentTarget: currentTarget,
            attrName: attrName,
            prevValue: prevValue,
            newValue: newValue
          };
          e[action] = attrChange;
          onDOMAttrModified(e);
        };
        getAttributesMirror = function (node) {
          for (var
            attr, name,
            result = {},
            attributes = node.attributes,
            i = 0, length = attributes.length;
            i < length; i++
          ) {
            attr = attributes[i];
            name = attr.name;
            if (name !== 'setAttribute') {
              result[name] = attr.value;
            }
          }
          return result;
        };
      }
    }
  
    // set as enumerable, writable and configurable
    document[REGISTER_ELEMENT] = function registerElement(type, options) {
      upperType = type.toUpperCase();
      if (!setListener) {
        // only first time document.registerElement is used
        // we need to set this listener
        // setting it by default might slow down for no reason
        setListener = true;
        if (MutationObserver) {
          observer = (function(attached, detached){
            function checkEmAll(list, callback) {
              for (var i = 0, length = list.length; i < length; callback(list[i++])){}
            }
            return new MutationObserver(function (records) {
              for (var
                current, node, newValue,
                i = 0, length = records.length; i < length; i++
              ) {
                current = records[i];
                if (current.type === 'childList') {
                  checkEmAll(current.addedNodes, attached);
                  checkEmAll(current.removedNodes, detached);
                } else {
                  node = current.target;
                  if (notFromInnerHTMLHelper &&
                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
                      current.attributeName !== 'style') {
                    newValue = getAttribute.call(node, current.attributeName);
                    if (newValue !== current.oldValue) {
                      node[ATTRIBUTE_CHANGED_CALLBACK](
                        current.attributeName,
                        current.oldValue,
                        newValue
                      );
                    }
                  }
                }
              }
            });
          }(executeAction(ATTACHED), executeAction(DETACHED)));
          observe = function (node) {
            observer.observe(
              node,
              {
                childList: true,
                subtree: true
              }
            );
            return node;
          };
          observe(document);
          if (attachShadow) {
            HTMLElementPrototype.attachShadow = function () {
              return observe(attachShadow.apply(this, arguments));
            };
          }
        } else {
          asapQueue = [];
          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
        }
  
        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
  
        HTMLElementPrototype.cloneNode = function (deep) {
          var
            node = cloneNode.call(this, !!deep),
            i = getTypeIndex(node)
          ;
          if (-1 < i) patch(node, protos[i]);
          if (deep) loopAndSetup(node.querySelectorAll(query));
          return node;
        };
      }
  
      if (-2 < (
        indexOf.call(types, PREFIX_IS + upperType) +
        indexOf.call(types, PREFIX_TAG + upperType)
      )) {
        throwTypeError(type);
      }
  
      if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
        throw new Error('The type ' + type + ' is invalid');
      }
  
      var
        constructor = function () {
          return extending ?
            document.createElement(nodeName, upperType) :
            document.createElement(nodeName);
        },
        opt = options || OP,
        extending = hOP.call(opt, EXTENDS),
        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
        upperType,
        i
      ;
  
      if (extending && -1 < (
        indexOf.call(types, PREFIX_TAG + nodeName)
      )) {
        throwTypeError(nodeName);
      }
  
      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
  
      query = query.concat(
        query.length ? ',' : '',
        extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
      );
  
      constructor.prototype = (
        protos[i] = hOP.call(opt, 'prototype') ?
          opt.prototype :
          create(HTMLElementPrototype)
      );
  
      loopAndVerify(
        document.querySelectorAll(query),
        ATTACHED
      );
  
      return constructor;
    };
  
    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
      var
        is = getIs(typeExtension),
        node = is ?
          createElement.call(document, localName, secondArgument(is)) :
          createElement.call(document, localName),
        name = '' + localName,
        i = indexOf.call(
          types,
          (is ? PREFIX_IS : PREFIX_TAG) +
          (is || name).toUpperCase()
        ),
        setup = -1 < i
      ;
      if (is) {
        node.setAttribute('is', is = is.toLowerCase());
        if (setup) {
          setup = isInQSA(name.toUpperCase(), is);
        }
      }
      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
      if (setup) patch(node, protos[i]);
      return node;
    });
  
  }
  
  function ASAP() {
    var queue = asapQueue.splice(0, asapQueue.length);
    asapTimer = 0;
    while (queue.length) {
      queue.shift().call(
        null, queue.shift()
      );
    }
  }
  
  function loopAndVerify(list, action) {
    for (var i = 0, length = list.length; i < length; i++) {
      verifyAndSetupAndAction(list[i], action);
    }
  }
  
  function loopAndSetup(list) {
    for (var i = 0, length = list.length, node; i < length; i++) {
      node = list[i];
      patch(node, protos[getTypeIndex(node)]);
    }
  }
  
  function executeAction(action) {
    return function (node) {
      if (isValidNode(node)) {
        verifyAndSetupAndAction(node, action);
        loopAndVerify(
          node.querySelectorAll(query),
          action
        );
      }
    };
  }
  
  function getTypeIndex(target) {
    var
      is = getAttribute.call(target, 'is'),
      nodeName = target.nodeName.toUpperCase(),
      i = indexOf.call(
        types,
        is ?
            PREFIX_IS + is.toUpperCase() :
            PREFIX_TAG + nodeName
      )
    ;
    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
  }
  
  function isInQSA(name, type) {
    return -1 < query.indexOf(name + '[is="' + type + '"]');
  }
  
  function onDOMAttrModified(e) {
    var
      node = e.currentTarget,
      attrChange = e.attrChange,
      attrName = e.attrName,
      target = e.target,
      addition = e[ADDITION] || 2,
      removal = e[REMOVAL] || 3
    ;
    if (notFromInnerHTMLHelper &&
        (!target || target === node) &&
        node[ATTRIBUTE_CHANGED_CALLBACK] &&
        attrName !== 'style' && (
          e.prevValue !== e.newValue ||
          // IE9, IE10, and Opera 12 gotcha
          e.newValue === '' && (
            attrChange === addition ||
            attrChange === removal
          )
    )) {
      node[ATTRIBUTE_CHANGED_CALLBACK](
        attrName,
        attrChange === addition ? null : e.prevValue,
        attrChange === removal ? null : e.newValue
      );
    }
  }
  
  function onDOMNode(action) {
    var executor = executeAction(action);
    return function (e) {
      asapQueue.push(executor, e.target);
      if (asapTimer) clearTimeout(asapTimer);
      asapTimer = setTimeout(ASAP, 1);
    };
  }
  
  function onReadyStateChange(e) {
    if (dropDomContentLoaded) {
      dropDomContentLoaded = false;
      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
    }
    loopAndVerify(
      (e.target || document).querySelectorAll(query),
      e.detail === DETACHED ? DETACHED : ATTACHED
    );
    if (IE8) purge();
  }
  
  function patchedSetAttribute(name, value) {
    // jshint validthis:true
    var self = this;
    setAttribute.call(self, name, value);
    onSubtreeModified.call(self, {target: self});
  }
  
  function setupNode(node, proto) {
    setPrototype(node, proto);
    if (observer) {
      observer.observe(node, attributesObserver);
    } else {
      if (doesNotSupportDOMAttrModified) {
        node.setAttribute = patchedSetAttribute;
        node[EXPANDO_UID] = getAttributesMirror(node);
        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
      }
      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
    }
    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
      node.created = true;
      node[CREATED_CALLBACK]();
      node.created = false;
    }
  }
  
  function purge() {
    for (var
      node,
      i = 0,
      length = targets.length;
      i < length; i++
    ) {
      node = targets[i];
      if (!documentElement.contains(node)) {
        length--;
        targets.splice(i--, 1);
        verifyAndSetupAndAction(node, DETACHED);
      }
    }
  }
  
  function throwTypeError(type) {
    throw new Error('A ' + type + ' type is already registered');
  }
  
  function verifyAndSetupAndAction(node, action) {
    var
      fn,
      i = getTypeIndex(node)
    ;
    if (-1 < i) {
      patchIfNotAlready(node, protos[i]);
      i = 0;
      if (action === ATTACHED && !node[ATTACHED]) {
        node[DETACHED] = false;
        node[ATTACHED] = true;
        i = 1;
        if (IE8 && indexOf.call(targets, node) < 0) {
          targets.push(node);
        }
      } else if (action === DETACHED && !node[DETACHED]) {
        node[ATTACHED] = false;
        node[DETACHED] = true;
        i = 1;
      }
      if (i && (fn = node[action + CALLBACK])) fn.call(node);
    }
  }
  
  
  
  // V1 in da House!
  function CustomElementRegistry() {}
  
  CustomElementRegistry.prototype = {
    constructor: CustomElementRegistry,
    // a workaround for the stubborn WebKit
    define: usableCustomElements ?
      function (name, Class, options) {
        if (options) {
          CERDefine(name, Class, options);
        } else {
          var NAME = name.toUpperCase();
          constructors[NAME] = {
            constructor: Class,
            create: [NAME]
          };
          nodeNames.set(Class, NAME);
          customElements.define(name, Class);
        }
      } :
      CERDefine,
    get: usableCustomElements ?
      function (name) {
        return customElements.get(name) || get(name);
      } :
      get,
    whenDefined: usableCustomElements ?
      function (name) {
        return Promise.race([
          customElements.whenDefined(name),
          whenDefined(name)
        ]);
      } :
      whenDefined
  };
  
  function CERDefine(name, Class, options) {
    var
      is = options && options[EXTENDS] || '',
      CProto = Class.prototype,
      proto = create(CProto),
      attributes = Class.observedAttributes || empty,
      definition = {prototype: proto}
    ;
    // TODO: is this needed at all since it's inherited?
    // defineProperty(proto, 'constructor', {value: Class});
    safeProperty(proto, CREATED_CALLBACK, {
        value: function () {
          if (justCreated) justCreated = false;
          else if (!this[DRECEV1]) {
            this[DRECEV1] = true;
            new Class(this);
            if (CProto[CREATED_CALLBACK])
              CProto[CREATED_CALLBACK].call(this);
            var info = constructors[nodeNames.get(Class)];
            if (!usableCustomElements || info.create.length > 1) {
              notifyAttributes(this);
            }
          }
      }
    });
    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
      value: function (name) {
        if (-1 < indexOf.call(attributes, name))
          CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
      }
    });
    if (CProto[CONNECTED_CALLBACK]) {
      safeProperty(proto, ATTACHED_CALLBACK, {
        value: CProto[CONNECTED_CALLBACK]
      });
    }
    if (CProto[DISCONNECTED_CALLBACK]) {
      safeProperty(proto, DETACHED_CALLBACK, {
        value: CProto[DISCONNECTED_CALLBACK]
      });
    }
    if (is) definition[EXTENDS] = is;
    name = name.toUpperCase();
    constructors[name] = {
      constructor: Class,
      create: is ? [is, secondArgument(name)] : [name]
    };
    nodeNames.set(Class, name);
    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
    whenDefined(name);
    waitingList[name].r();
  }
  
  function get(name) {
    var info = constructors[name.toUpperCase()];
    return info && info.constructor;
  }
  
  function getIs(options) {
    return typeof options === 'string' ?
        options : (options && options.is || '');
  }
  
  function notifyAttributes(self) {
    var
      callback = self[ATTRIBUTE_CHANGED_CALLBACK],
      attributes = callback ? self.attributes : empty,
      i = attributes.length,
      attribute
    ;
    while (i--) {
      attribute =  attributes[i]; // || attributes.item(i);
      callback.call(
        self,
        attribute.name || attribute.nodeName,
        null,
        attribute.value || attribute.nodeValue
      );
    }
  }
  
  function whenDefined(name) {
    name = name.toUpperCase();
    if (!(name in waitingList)) {
      waitingList[name] = {};
      waitingList[name].p = new Promise(function (resolve) {
        waitingList[name].r = resolve;
      });
    }
    return waitingList[name].p;
  }
  
  function polyfillV1() {
    if (customElements) delete window.customElements;
    defineProperty(window, 'customElements', {
      configurable: true,
      value: new CustomElementRegistry()
    });
    defineProperty(window, 'CustomElementRegistry', {
      configurable: true,
      value: CustomElementRegistry
    });
    for (var
      patchClass = function (name) {
        var Class = window[name];
        if (Class) {
          window[name] = function CustomElementsV1(self) {
            var info, isNative;
            if (!self) self = this;
            if (!self[DRECEV1]) {
              justCreated = true;
              info = constructors[nodeNames.get(self.constructor)];
              isNative = usableCustomElements && info.create.length === 1;
              self = isNative ?
                Reflect.construct(Class, empty, info.constructor) :
                document.createElement.apply(document, info.create);
              self[DRECEV1] = true;
              justCreated = false;
              if (!isNative) notifyAttributes(self);
            }
            return self;
          };
          window[name].prototype = Class.prototype;
          try {
            Class.prototype.constructor = window[name];
          } catch(WebKit) {
            fixGetClass = true;
            defineProperty(Class, DRECEV1, {value: window[name]});
          }
        }
      },
      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
      i = Classes.length;
      i--;
      patchClass(Classes[i])
    ) {}
    (document.createElement = function (name, options) {
      var is = getIs(options);
      return is ?
        patchedCreateElement.call(this, name, secondArgument(is)) :
        patchedCreateElement.call(this, name);
    });
  }
  
  // if customElements is not there at all
  if (!customElements || polyfill === 'force') polyfillV1();
  else {
    // if available test extends work as expected
    try {
      (function (DRE, options, name) {
        options[EXTENDS] = 'a';
        DRE.prototype = create(HTMLAnchorElement.prototype);
        DRE.prototype.constructor = DRE;
        window.customElements.define(name, DRE, options);
        if (
          getAttribute.call(document.createElement('a', {is: name}), 'is') !== name ||
          (usableCustomElements && getAttribute.call(new DRE(), 'is') !== name)
        ) {
          throw options;
        }
      }(
        function DRE() {
          return Reflect.construct(HTMLAnchorElement, [], DRE);
        },
        {},
        'document-register-element-a'
      ));
    } catch(o_O) {
      // or force the polyfill if not
      // and keep internal original reference
      polyfillV1();
    }
  }
  
  try {
    createElement.call(document, 'a', 'a');
  } catch(FireFox) {
    secondArgument = function (is) {
      return {is: is};
    };
  }
  
}(window));

/*
 *
 *  𝗖 𝗢 𝗟 𝗢 𝗥
 *  v 1.4.0
 *
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

:root {

/*  General
 *  ─────────────────────────────────── */

  --oc-white: #ffffff;
  --oc-black: #000000;


/*  Gray
 *  ─────────────────────────────────── */

  --oc-gray-0: #f8f9fa;
  --oc-gray-1: #f1f3f5;
  --oc-gray-2: #e9ecef;
  --oc-gray-3: #dee2e6;
  --oc-gray-4: #ced4da;
  --oc-gray-5: #adb5bd;
  --oc-gray-6: #868e96;
  --oc-gray-7: #495057;
  --oc-gray-8: #343a40;
  --oc-gray-9: #212529;


/*  Red
 *  ─────────────────────────────────── */

  --oc-red-0: #fff5f5;
  --oc-red-1: #ffe3e3;
  --oc-red-2: #ffc9c9;
  --oc-red-3: #ffa8a8;
  --oc-red-4: #ff8787;
  --oc-red-5: #ff6b6b;
  --oc-red-6: #fa5252;
  --oc-red-7: #f03e3e;
  --oc-red-8: #e03131;
  --oc-red-9: #c92a2a;


/*  Pink
 *  ─────────────────────────────────── */

  --oc-pink-0: #fff0f6;
  --oc-pink-1: #ffdeeb;
  --oc-pink-2: #fcc2d7;
  --oc-pink-3: #faa2c1;
  --oc-pink-4: #f783ac;
  --oc-pink-5: #f06595;
  --oc-pink-6: #e64980;
  --oc-pink-7: #d6336c;
  --oc-pink-8: #c2255c;
  --oc-pink-9: #a61e4d;


/*  Grape
 *  ─────────────────────────────────── */

  --oc-grape-0: #f8f0fc;
  --oc-grape-1: #f3d9fa;
  --oc-grape-2: #eebefa;
  --oc-grape-3: #e599f7;
  --oc-grape-4: #da77f2;
  --oc-grape-5: #cc5de8;
  --oc-grape-6: #be4bdb;
  --oc-grape-7: #ae3ec9;
  --oc-grape-8: #9c36b5;
  --oc-grape-9: #862e9c;


/*  Violet
 *  ─────────────────────────────────── */

  --oc-violet-0: #f3f0ff;
  --oc-violet-1: #e5dbff;
  --oc-violet-2: #d0bfff;
  --oc-violet-3: #b197fc;
  --oc-violet-4: #9775fa;
  --oc-violet-5: #845ef7;
  --oc-violet-6: #7950f2;
  --oc-violet-7: #7048e8;
  --oc-violet-8: #6741d9;
  --oc-violet-9: #5f3dc4;


/*  Indigo
 *  ─────────────────────────────────── */

  --oc-indigo-0: #edf2ff;
  --oc-indigo-1: #dbe4ff;
  --oc-indigo-2: #bac8ff;
  --oc-indigo-3: #91a7ff;
  --oc-indigo-4: #748ffc;
  --oc-indigo-5: #5c7cfa;
  --oc-indigo-6: #4c6ef5;
  --oc-indigo-7: #4263eb;
  --oc-indigo-8: #3b5bdb;
  --oc-indigo-9: #364fc7;


/*  Blue
 *  ─────────────────────────────────── */

  --oc-blue-0: #e8f7ff;
  --oc-blue-1: #ccedff;
  --oc-blue-2: #a3daff;
  --oc-blue-3: #72c3fc;
  --oc-blue-4: #4dadf7;
  --oc-blue-5: #329af0;
  --oc-blue-6: #228ae6;
  --oc-blue-7: #1c7cd6;
  --oc-blue-8: #1b6ec2;
  --oc-blue-9: #1862ab;


/*  Cyan
 *  ─────────────────────────────────── */

  --oc-cyan-0: #e3fafc;
  --oc-cyan-1: #c5f6fa;
  --oc-cyan-2: #99e9f2;
  --oc-cyan-3: #66d9e8;
  --oc-cyan-4: #3bc9db;
  --oc-cyan-5: #22b8cf;
  --oc-cyan-6: #15aabf;
  --oc-cyan-7: #1098ad;
  --oc-cyan-8: #0c8599;
  --oc-cyan-9: #0b7285;


/*  Teal
 *  ─────────────────────────────────── */

  --oc-teal-0: #e6fcf5;
  --oc-teal-1: #c3fae8;
  --oc-teal-2: #96f2d7;
  --oc-teal-3: #63e6be;
  --oc-teal-4: #38d9a9;
  --oc-teal-5: #20c997;
  --oc-teal-6: #12b886;
  --oc-teal-7: #0ca678;
  --oc-teal-8: #099268;
  --oc-teal-9: #087f5b;


/*  Green
 *  ─────────────────────────────────── */

  --oc-green-0: #ebfbee;
  --oc-green-1: #d3f9d8;
  --oc-green-2: #b2f2bb;
  --oc-green-3: #8ce99a;
  --oc-green-4: #69db7c;
  --oc-green-5: #51cf66;
  --oc-green-6: #40c057;
  --oc-green-7: #37b24d;
  --oc-green-8: #2f9e44;
  --oc-green-9: #2b8a3e;


/*  Lime
 *  ─────────────────────────────────── */

  --oc-lime-0: #f4fce3;
  --oc-lime-1: #e9fac8;
  --oc-lime-2: #d8f5a2;
  --oc-lime-3: #c0eb75;
  --oc-lime-4: #a9e34b;
  --oc-lime-5: #94d82d;
  --oc-lime-6: #82c91e;
  --oc-lime-7: #74b816;
  --oc-lime-8: #66a80f;
  --oc-lime-9: #5c940d;


/*  Yellow
 *  ─────────────────────────────────── */

  --oc-yellow-0: #fff9db;
  --oc-yellow-1: #fff3bf;
  --oc-yellow-2: #ffec99;
  --oc-yellow-3: #ffe066;
  --oc-yellow-4: #ffd43b;
  --oc-yellow-5: #fcc419;
  --oc-yellow-6: #fab005;
  --oc-yellow-7: #f59f00;
  --oc-yellow-8: #f08c00;
  --oc-yellow-9: #e67700;


/*  Orange
 *  ─────────────────────────────────── */

  --oc-orange-0: #fff4e6;
  --oc-orange-1: #ffe8cc;
  --oc-orange-2: #ffd8a8;
  --oc-orange-3: #ffc078;
  --oc-orange-4: #ffa94d;
  --oc-orange-5: #ff922b;
  --oc-orange-6: #fd7e14;
  --oc-orange-7: #f76707;
  --oc-orange-8: #e8590c;
  --oc-orange-9: #d9480f;

}

.layout-column,.layout-row,.layout-centered,.layout-sm-row,.layout-md-row,.layout-lg-row,.layout-xs-column,.layout-sm-column,.layout-md-column,.layout-lg-column{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:stretch;align-content:stretch}.layout-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.layout-column,.layout-centered{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media (min-width: 600px){.layout-sm-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.layout-sm-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}@media (min-width: 960px){.layout-md-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.layout-md-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}@media (min-width: 1280px){.layout-lg-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.layout-lg-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}@media (min-width: 1920px){.layout-xl-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.layout-xl-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.layout-centered{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.layout-centered>*{padding:0 1rem}.align-end{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.align-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.align-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.layout-fullscreen{min-height:100vh;-webkit-transform:translateZ(0);transform:translateZ(0);overflow:auto;box-sizing:border-box}.layout-fullscreen>*{padding:0 1rem;-webkit-transform:translateZ(0);transform:translateZ(0);box-sizing:border-box}.layout-container{margin-right:auto;margin-left:auto;padding:3.8rem 10px;width:100%;box-sizing:border-box}@media (min-width: 768px){.layout-container{width:calc(100% - 100px)}}@media (min-width: 992px){.layout-container{width:calc(100% - 100px)}}@media (min-width: 1200px){.layout-container{width:1070px}}.flex,.flex-5 .flex-10 .flex-15 .flex-20 .flex-25 .flex-30 .flex-35 .flex-40 .flex-45 .flex-50 .flex-60 .flex-65 .flex-70 .flex-75 .flex-80 .flex-85 .flex-90 .flex-95 .flex-100{overflow:auto}.flex{-webkit-box-flex:1;-ms-flex:1;flex:1}.flex-5{-webkit-box-flex:0;-ms-flex:0 0 5%;flex:0 0 5%}.flex-10{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%}.flex-15{-webkit-box-flex:0;-ms-flex:0 0 15%;flex:0 0 15%}.flex-20{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%}.flex-25{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%}.flex-30{-webkit-box-flex:0;-ms-flex:0 0 30%;flex:0 0 30%}.flex-33{-webkit-box-flex:0;-ms-flex:0 0 33%;flex:0 0 33%}.flex-35{-webkit-box-flex:0;-ms-flex:0 0 35%;flex:0 0 35%}.flex-40{-webkit-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%}.flex-45{-webkit-box-flex:0;-ms-flex:0 0 45%;flex:0 0 45%}.flex-50{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%}.flex-60{-webkit-box-flex:0;-ms-flex:0 0 60%;flex:0 0 60%}.flex-66{-webkit-box-flex:0;-ms-flex:0 0 66%;flex:0 0 66%}.flex-65{-webkit-box-flex:0;-ms-flex:0 0 65%;flex:0 0 65%}.flex-70{-webkit-box-flex:0;-ms-flex:0 0 70%;flex:0 0 70%}.flex-75{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%}.flex-80{-webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%}.flex-85{-webkit-box-flex:0;-ms-flex:0 0 85%;flex:0 0 85%}.flex-90{-webkit-box-flex:0;-ms-flex:0 0 90%;flex:0 0 90%}.flex-95{-webkit-box-flex:0;-ms-flex:0 0 95%;flex:0 0 95%}.flex-100{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%}@media (min-width: 600px){.flex-sm{-webkit-box-flex:1;-ms-flex:1;flex:1}.flex-sm-5{-webkit-box-flex:0;-ms-flex:0 0 5%;flex:0 0 5%}.flex-sm-10{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%}.flex-sm-15{-webkit-box-flex:0;-ms-flex:0 0 15%;flex:0 0 15%}.flex-sm-20{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%}.flex-sm-25{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%}.flex-sm-30{-webkit-box-flex:0;-ms-flex:0 0 30%;flex:0 0 30%}.flex-sm-33{-webkit-box-flex:0;-ms-flex:0 0 33%;flex:0 0 33%}.flex-sm-35{-webkit-box-flex:0;-ms-flex:0 0 35%;flex:0 0 35%}.flex-sm-40{-webkit-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%}.flex-sm-45{-webkit-box-flex:0;-ms-flex:0 0 45%;flex:0 0 45%}.flex-sm-50{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%}.flex-sm-60{-webkit-box-flex:0;-ms-flex:0 0 60%;flex:0 0 60%}.flex-sm-66{-webkit-box-flex:0;-ms-flex:0 0 66%;flex:0 0 66%}.flex-sm-65{-webkit-box-flex:0;-ms-flex:0 0 65%;flex:0 0 65%}.flex-sm-70{-webkit-box-flex:0;-ms-flex:0 0 70%;flex:0 0 70%}.flex-sm-75{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%}.flex-sm-80{-webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%}.flex-sm-85{-webkit-box-flex:0;-ms-flex:0 0 85%;flex:0 0 85%}.flex-sm-90{-webkit-box-flex:0;-ms-flex:0 0 90%;flex:0 0 90%}.flex-sm-95{-webkit-box-flex:0;-ms-flex:0 0 95%;flex:0 0 95%}.flex-sm-100{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%}}@media (min-width: 960px){.flex-md{-webkit-box-flex:1;-ms-flex:1;flex:1}.flex-md-5{-webkit-box-flex:0;-ms-flex:0 0 5%;flex:0 0 5%}.flex-md-10{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%}.flex-md-15{-webkit-box-flex:0;-ms-flex:0 0 15%;flex:0 0 15%}.flex-md-20{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%}.flex-md-25{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%}.flex-md-30{-webkit-box-flex:0;-ms-flex:0 0 30%;flex:0 0 30%}.flex-md-33{-webkit-box-flex:0;-ms-flex:0 0 33%;flex:0 0 33%}.flex-md-35{-webkit-box-flex:0;-ms-flex:0 0 35%;flex:0 0 35%}.flex-md-40{-webkit-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%}.flex-md-45{-webkit-box-flex:0;-ms-flex:0 0 45%;flex:0 0 45%}.flex-md-50{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%}.flex-md-60{-webkit-box-flex:0;-ms-flex:0 0 60%;flex:0 0 60%}.flex-md-66{-webkit-box-flex:0;-ms-flex:0 0 66%;flex:0 0 66%}.flex-md-65{-webkit-box-flex:0;-ms-flex:0 0 65%;flex:0 0 65%}.flex-md-70{-webkit-box-flex:0;-ms-flex:0 0 70%;flex:0 0 70%}.flex-md-75{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%}.flex-md-80{-webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%}.flex-md-85{-webkit-box-flex:0;-ms-flex:0 0 85%;flex:0 0 85%}.flex-md-90{-webkit-box-flex:0;-ms-flex:0 0 90%;flex:0 0 90%}.flex-md-95{-webkit-box-flex:0;-ms-flex:0 0 95%;flex:0 0 95%}.flex-md-100{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%}}@media (min-width: 1280px){.flex-lg{-webkit-box-flex:1;-ms-flex:1;flex:1}.flex-lg-5{-webkit-box-flex:0;-ms-flex:0 0 5%;flex:0 0 5%}.flex-lg-10{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%}.flex-lg-15{-webkit-box-flex:0;-ms-flex:0 0 15%;flex:0 0 15%}.flex-lg-20{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%}.flex-lg-25{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%}.flex-lg-30{-webkit-box-flex:0;-ms-flex:0 0 30%;flex:0 0 30%}.flex-lg-33{-webkit-box-flex:0;-ms-flex:0 0 33%;flex:0 0 33%}.flex-lg-35{-webkit-box-flex:0;-ms-flex:0 0 35%;flex:0 0 35%}.flex-lg-40{-webkit-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%}.flex-lg-45{-webkit-box-flex:0;-ms-flex:0 0 45%;flex:0 0 45%}.flex-lg-50{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%}.flex-lg-60{-webkit-box-flex:0;-ms-flex:0 0 60%;flex:0 0 60%}.flex-lg-66{-webkit-box-flex:0;-ms-flex:0 0 66%;flex:0 0 66%}.flex-lg-65{-webkit-box-flex:0;-ms-flex:0 0 65%;flex:0 0 65%}.flex-lg-70{-webkit-box-flex:0;-ms-flex:0 0 70%;flex:0 0 70%}.flex-lg-75{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%}.flex-lg-80{-webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%}.flex-lg-85{-webkit-box-flex:0;-ms-flex:0 0 85%;flex:0 0 85%}.flex-lg-90{-webkit-box-flex:0;-ms-flex:0 0 90%;flex:0 0 90%}.flex-lg-95{-webkit-box-flex:0;-ms-flex:0 0 95%;flex:0 0 95%}.flex-lg-100{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%}}@media (min-width: 1920px){.flex-xl{-webkit-box-flex:1;-ms-flex:1;flex:1}.flex-xl-5{-webkit-box-flex:0;-ms-flex:0 0 5%;flex:0 0 5%}.flex-xl-10{-webkit-box-flex:0;-ms-flex:0 0 10%;flex:0 0 10%}.flex-xl-15{-webkit-box-flex:0;-ms-flex:0 0 15%;flex:0 0 15%}.flex-xl-20{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%}.flex-xl-25{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%}.flex-xl-30{-webkit-box-flex:0;-ms-flex:0 0 30%;flex:0 0 30%}.flex-xl-33{-webkit-box-flex:0;-ms-flex:0 0 33%;flex:0 0 33%}.flex-xl-35{-webkit-box-flex:0;-ms-flex:0 0 35%;flex:0 0 35%}.flex-xl-40{-webkit-box-flex:0;-ms-flex:0 0 40%;flex:0 0 40%}.flex-xl-45{-webkit-box-flex:0;-ms-flex:0 0 45%;flex:0 0 45%}.flex-xl-50{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%}.flex-xl-60{-webkit-box-flex:0;-ms-flex:0 0 60%;flex:0 0 60%}.flex-xl-66{-webkit-box-flex:0;-ms-flex:0 0 66%;flex:0 0 66%}.flex-xl-65{-webkit-box-flex:0;-ms-flex:0 0 65%;flex:0 0 65%}.flex-xl-70{-webkit-box-flex:0;-ms-flex:0 0 70%;flex:0 0 70%}.flex-xl-75{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%}.flex-xl-80{-webkit-box-flex:0;-ms-flex:0 0 80%;flex:0 0 80%}.flex-xl-85{-webkit-box-flex:0;-ms-flex:0 0 85%;flex:0 0 85%}.flex-xl-90{-webkit-box-flex:0;-ms-flex:0 0 90%;flex:0 0 90%}.flex-xl-95{-webkit-box-flex:0;-ms-flex:0 0 95%;flex:0 0 95%}.flex-xl-100{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%}}.first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.last{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}

/*# sourceMappingURL=mn-layout.css.map */

/*
 * highlightjs-material-dark-theme
 * Material Dark theme for Highlight.js
 * Based off of https://github.com/equinusocio/material-theme 
 * For use with Highlight.js, https://github.com/isagalaev/highlight.js
 */ 
@import url(https://fonts.googleapis.com/css?family=Fira+Mono);

.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em;
  background: #2B2B2D;
  color: #CDD3D8;
  font-family: "Fira Mono", monospace;
  font-size: 1em;
}
.hljs > *::selection {
  background-color: #3e4451;
}

.hljs-comment {
  color: #656565;
  font-style: italic;
}

.hljs-selector-tag {
  color: #C792EA;
}

.hljs-string,
.hljs-subst {
  color: #C3E88D;
}

.hljs-number,
.hljs-regexp,
.hljs-variable,
.hljs-template-variable {
  color: #F77669;
}

.hljs-keyword {
  color: #C792EA;
}
.hljs-function > .hljs-title {
  color: #75A5FF;
}
.hljs-tag {
  color: #abb2bf;
}
.hljs-name {
  color: #e06c75;
}
.hljs-type {
  color: #da4939;
}

.hljs-attribute {
  color: #80CBBF;
}

.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-builtin-name,
.hljs-link {
  color: #C792EA;
}

.hljs-params {
  color: #EEFFF7;
}


.hljs-meta {
  color: #75A5FF;
}

.hljs-title {
  color: #75A5FF;
}

.hljs-section {
  color: #ffc66d;
}

.hljs-addition {
  background-color: #144212;
  color: #e6e1dc;
  display: inline-block;
  width: 100%;
}

.hljs-deletion {
  background-color: #600;
  color: #e6e1dc;
  display: inline-block;
  width: 100%;
}

.hljs-selector-class {
  color: #FFCB68;
}

.hljs-selector-id {
  color: #F77669;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}

@media (orientation: landscape) and (max-device-width: 599px){mn-code{font-size:.5em}}mn-code code{-webkit-overflow-scrolling:touch}

/*# sourceMappingURL=mn-code.css.map */

html{background-color:#f1f3f5}body{-webkit-font-smoothing:antialiased;font-family:'Open Sans', sans-serif;color:rgba(0,0,0,0.87);margin:0}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;src:local("Open Sans"),local("OpenSans"),url(https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3ZBw1xU1rKptJj_0jans920.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000}h2{font-weight:normal;position:absolute;top:0;left:8px}.github-corner{position:absolute;top:0;right:0;zoom:1.25;z-index:1;outline:0 !important}.github-corner path:not([class]){-webkit-transition:fill .3s ease;transition:fill .3s ease}.github-corner:focus path:not([class]){fill:#343a40}.github-corner path{fill:#868e96}.github-corner .octo-body,.github-corner .octo-arm{fill:#f1f3f5}.github-corner:hover .octo-arm,.github-corner:focus .octo-arm{-webkit-animation:octocat-wave 560ms .1s ease-in-out;animation:octocat-wave 560ms .1s ease-in-out}@media (max-width: 500px){.github-corner:hover .octo-arm{-webkit-animation:none;animation:none}.github-corner .octo-arm{-webkit-animation:octocat-wave 560ms ease-in-out;animation:octocat-wave 560ms ease-in-out}}@-webkit-keyframes octocat-wave{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}20%,60%{-webkit-transform:rotate(-25deg);transform:rotate(-25deg)}40%,80%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}}@keyframes octocat-wave{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}20%,60%{-webkit-transform:rotate(-25deg);transform:rotate(-25deg)}40%,80%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}}.docs{margin-top:-160px}@media (min-width: 600px){.docs{margin-top:-90px}}.docs h3{margin-top:100px}

/*# sourceMappingURL=mn-gh-page.css.map */
