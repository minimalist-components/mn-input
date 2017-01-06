class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)

    // set style
    this.classList.add('mn-input')
    this.getAttribute('value')
      ? this.classList.add('has-value')
      : this.classList.remove('has-value')

    // set input
    const attributeSpecs = [
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
    input.addEventListener('focus', () => this.classList.add('focus'))
    input.addEventListener('keyup', () => {
      if (this.closest('form.submitted')) {
        this.validate()
      }
    })
    input.addEventListener('blur', () => this.classList.remove('focus'))
    input.addEventListener('change', () => this.value = input.value)

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

    return self
  }

  set value(value) {
    const input = this.querySelector('input')

    if (value) {
      if (input.value !== value) {
        input.value = value
      }
      this.classList.add('has-value')
    } else {
      input.value = ''
      this.classList.remove('has-value')
    }

    if (input.value !== value && this.closest('form.submitted')) {
      this.validate()
    }
  }

  get value() {
    const input = this.querySelector('input')
    return input.value
  }

  focus() {
    this.querySelector('input').focus()
  }

  blur() {
    this.querySelector('input').blur()
  }

  validate() {
    const input = this.querySelector('input')
    const patternMismatch = !RegExp(this.getAttribute('pattern') || '').test(input.value)
    const errors = {
      pattern: input.value
        ? input.validity.patternMismatch
        : patternMismatch,
      required: input.validity.valueMissing,
    }

    Object.values = Object.values
      ? Object.values
      : objectValues

    function objectValues(obj) {
      const array = []
      for (const key in obj) {
        array.push(obj[key])
      }
      return array
    }

    errors.invalid = Object.values(errors).some(value => value)

    for (const key in errors) {
      const cssClass = key
      const invalid = errors[key]

      invalid
        ? this.classList.add(cssClass)
        : this.classList.remove(cssClass)
    }
  }
}

window.customElements.define('mn-input', MnInput)
