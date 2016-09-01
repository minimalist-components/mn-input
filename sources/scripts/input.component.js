let prototype = Object.create(HTMLElement.prototype);
prototype.createdCallback = MNInput;
document.registerElement('mn-input', {prototype});

function MNInput() {
  let validTypes = [
    'text',
    'password',
    'email',
  ];

  let input = document.createElement('input');
  input.setAttribute('placeholder', this.getAttribute('placeholder') || 'undefined');

  // type attribute
  let attributeType = this.getAttribute('type');
  let isValidType = validTypes.indexOf(attributeType) >= 0;
  attributeType = isValidType
    ? attributeType
    : validTypes[0];

  input.setAttribute('type', attributeType);

  // value attribute
  let value = this.getAttribute('value') || '';
  input.setAttribute('value', value);

  // name attribute
  let name = this.getAttribute('name') || '';
  input.setAttribute('name', name);

  // autocomplete attribute
  input.setAttribute('autocomplete', 'off');

  // autofocus attribute
  if (this.getAttribute('autofocus')) {
    input.setAttribute('autofocus', 'autofocus');
  }

  // maxlength attribute
  if (this.getAttribute('maxlength')) {
    input.setAttribute('maxlength', this.getAttribute('maxlength'));
  }

  // pattern attribute
  if (this.getAttribute('pattern')) {
    input.setAttribute('pattern', this.getAttribute('pattern'));
  }

  // pattern attribute
  if (this.getAttribute('readonly')) {
    input.setAttribute('readonly', 'readonly');
  }

  // pattern attribute
  if (this.getAttribute('required')) {
    input.setAttribute('required', 'required');
  }

  // disabled attribute
  let disabled = this.getAttribute('disabled');
  if (disabled) {
    input.setAttribute('disabled', disabled);
  }
  this.appendChild(input);

  // placeholder element
  let placeholder = this.getAttribute('placeholder');
  if(placeholder) {
    let label = document.createElement('label');
    label.textContent = disabled
      ? `${placeholder} disabled`
      : placeholder;
    this.appendChild(label);
  }
}
