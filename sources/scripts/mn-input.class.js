class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)
    // set placeholder
    const placeholder = document.createElement('label')
    if (this.id) {
      placeholder.setAttribute('for', this.id)
    }
    this.insertBefore(placeholder, this.firstChild)
    if (this.getAttribute('placeholder')) {
      this.placeholder = this.getAttribute('placeholder')
    }

    this.setInput()
    return self
  }

  setInput() {
    const attributeSpecs = [
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
    ]

    const input = document.createElement('input')

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

  set placeholder(value) {
    const isDisabled = this.getAttribute('disabled')
    const label = this.querySelector('label')
    label.textContent = isDisabled
      ? `${value} disabled`
      : value
    this.setAttribute('placeholder', value)
  }

  get placeholder() {
    return this.getAttribute('placeholder')
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
