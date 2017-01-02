class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setPlaceholder()
    this.setInput()
    return self
  }

  setPlaceholder() {
    let placeholder = this.getAttribute('placeholder')
    let id = this.getAttribute('id')

    if (placeholder) {
      let label = document.createElement('label')
      label.textContent = this.getAttribute('disabled')
        ? `${placeholder} disabled`
        : placeholder

      if (id) {
        label.setAttribute('for', id)
      }

      this.insertBefore(label, this.firstChild)
    }
  }

  setInput() {
    let attributeSpecs = [
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
      {
        name: 'autocapitalize',
      },
      {
        name: 'id',
        remove: true,
      },
    ]

    let input = document.createElement('input')

    let attributes = Array
      .from(this.attributes)
      .map(getNameAndValue)

    let defaultAttibutes = attributeSpecs
      .filter(defaults)
      .filter(notImplemented)

    attributes = attributes.concat(defaultAttibutes)

    attributes.forEach(setAttribute)

    attributeSpecs
      .filter(attr => attr.remove)
      .forEach(attr => {
        this.removeAttribute(attr.name)
      })

    this.insertBefore(input, this.firstChild)

    function getNameAndValue(attr) {
      let name = attr.name
      let value = attr.value
      return {name, value}
    }

    function defaults(attribute) {
      return attribute.hasOwnProperty('default')
    }

    function notImplemented(defaultAttr) {
      return !attributes.some(attribute => attribute.name === defaultAttr.name)
    }

    function setAttribute(attribute) {
      let attributeSpec = attributeSpecs.filter(spec => spec.name === attribute.name)[0]
      if (!attributeSpec) {
        return false
      }
      let isDefaultAttribute = attributeSpec.hasOwnProperty('default')
      let attributeValue = attribute.value

      if (isDefaultAttribute) {
        let isValidValue = attributeSpec.hasOwnProperty('values')
          && attributeSpec.values.indexOf(attributeValue) >= 0

        let value = isValidValue
          ? attributeValue
          : attributeSpec.default

        input.setAttribute(attribute.name, value)
      } else if (attributeValue) {
        input.setAttribute(attribute.name, attributeValue)
      }
    }
  }

  set value(value) {
    const input = this.querySelector('input')
    input.value = value
  }

  get value() {
    const input = this.querySelector('input')
    return input.value
  }
}

window.customElements.define('mn-input', MnInput)
