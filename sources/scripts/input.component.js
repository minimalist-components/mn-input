let prototype = Object.create(HTMLElement.prototype);
prototype.createdCallback = MNInput;
document.registerElement('mn-input', {prototype});

function MNInput() {
  let validTypes = [
    'text',
    'password',
    'email',
  ];

  let dom = this.createShadowRoot();

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
  if (this.getAttribute('autofocus') === 'autofocus') {
    input.setAttribute('autofocus', 'autofocus');
  }

  // disabled attribute
  let disabled = this.getAttribute('disabled');
  if (disabled) {
    input.setAttribute('disabled', disabled);
  }
  dom.appendChild(input);

  // placeholder element
  let placeholder = this.getAttribute('placeholder');
  if(placeholder) {
    let label = document.createElement('label');
    label.textContent = disabled
      ? `${placeholder} disabled`
      : placeholder;
    dom.appendChild(label);
  }
}
