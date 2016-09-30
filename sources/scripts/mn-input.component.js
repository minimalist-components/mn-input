'use strict';

class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self);
    this.setPlaceholder();
    this.setInput();
    return self;
  }

  setPlaceholder() {
    let placeholder = this.getAttribute('placeholder');

    if (placeholder) {
      let label = document.createElement('label');
      label.textContent = this.getAttribute('disabled')
        ? `${placeholder} disabled`
        : placeholder;

      this.insertBefore(label, this.firstChild);
    }
  }

  setInput() {
    let attributes = [
      {
        name: 'type',
        default: 'text',
        values: [
          'text',
          'password',
          'email',
        ],
      },
      {
        name: 'placeholder',
        default: 'undefined',
      },
      {
        name: 'value',
      },
      {
        name: 'name',
      },
      {
        name: 'autocomplete',
        default: 'off',
      },
      {
        name: 'autofocus',
      },
      {
        name: 'maxlength',
      },
      {
        name: 'pattern',
      },
      {
        name: 'readonly',
      },
      {
        name: 'required',
      },
      {
        name: 'disabled',
      },
    ];

    let input = document.createElement('input');
    let component = this;
    attributes.map(setInputAttribute);
    this.insertBefore(input, this.firstChild);

    function setInputAttribute(attribute) {
      let isDefaultAttribute = attribute.hasOwnProperty('default');
      let attributeValue = component.getAttribute(attribute.name);

      if (isDefaultAttribute) {
        let isValidValue = attribute.hasOwnProperty('values')
          && attribute.values.indexOf(attributeValue) >= 0;

        let value = isValidValue
          ? attributeValue
          : attribute.default;

        input.setAttribute(attribute.name, value);
      } else if (attributeValue) {
        input.setAttribute(attribute.name, attributeValue);
      }
    }
  }
}

customElements.define('mn-input', MnInput);
