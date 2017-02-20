class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)

    // set style
    this.classList.add('mn-input')
    const value = this.getAttribute('value')
    const hasValue = value !== null
      &&  value !== undefined
      && value !== ''

    hasValue
      ? this.classList.add('has-value')
      : this.classList.remove('has-value')

    // // empty element
    // this.innerHTML = ''

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
    input.addEventListener('focus', () => this.classList.add('focused'))
    input.addEventListener('keyup', () => {
      if (this.closest('form.submitted')) {
        this.validate()
      }
    })
    input.addEventListener('blur', () => this.classList.remove('focused'))
    input.addEventListener('change', () => this.value = input.value)

    let attributes = Array
      .from(this.attributes)
      .map(attr => {
        const name = attr.name
        const value = attr.value
        return {name, value}
      })

    let defaultAttibutes = attributeSpecs
      .filter(attr => attr.hasOwnProperty('default'))
      .filter(notImplemented)

    attributes = attributes.concat(defaultAttibutes)

    attributes.forEach(setAttribute)

    attributeSpecs
      .filter(attr => attr.remove)
      .forEach(attr => {
        this.removeAttribute(attr.name)
      })

    this.insertBefore(input, this.firstChild)

    return self

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
    const hasValue = value !== null &&  value !== undefined && value !== ''
    if (hasValue) {
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
    this.classList.add('focused')
  }

  blur() {
    this.querySelector('input').blur()
    this.classList.remove('focused')
  }

  validate() {
    const input = this.querySelector('input')

    if (input) {
      const patternMismatch = !RegExp(this.getAttribute('pattern') || '').test(input.value)
      const hasValue = this.value !== ''
      const rangeOverflow = this.getAttribute('max')
        ? hasValue && this.value > Number(this.getAttribute('max'))
        : false

      const rangeUnderflow = this.getAttribute('min')
        ? hasValue && this.value < Number(this.getAttribute('min'))
        : false

      // const stepMismatch = this.getAttribute('step')
      //   ? hasValue && (this.value % Number(this.getAttribute('step'))) !== 0
      //   : false

      const errors = {
        required: input.validity.valueMissing,
        pattern: patternMismatch,
        rangeOverflow,
        rangeUnderflow,
        // stepMismatch,
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
}

window.customElements.define('mn-input', MnInput)
window.MnInput = MnInput
