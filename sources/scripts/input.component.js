let prototype = Object.create(HTMLElement.prototype);
prototype.createdCallback = MNInput;
document.registerElement('mn-input', {prototype});

function MNInput() {
  let types = [
    'text',
    'password',
  ]
  let supportedType = types.indexOf(this.getAttribute('type')) >= 0 || this.getAttribute('type') === null;
  if (!supportedType) {
    let error = new Error('Unsupported type - only text and password is supported');
    throw error;
    return error;
  }
  let shadowDom = this.createShadowRoot();

  let input = document.createElement('input');
  input.setAttribute('placeholder', this.getAttribute('placeholder') || 'undefined');
  shadowDom.appendChild(input);

  let type = this.getAttribute('type') || 'text';
  input.setAttribute('type', type);

  let value = this.getAttribute('value') || '';
  input.setAttribute('value', value);

  let name = this.getAttribute('name') || '';
  input.setAttribute('name', name);

  let disabled = this.getAttribute('disabled');
  if (disabled) {
    input.setAttribute('disabled', disabled);
  }

  let placeholder = this.getAttribute('placeholder');
  if(placeholder) {
    let label = document.createElement('label');
    label.textContent = placeholder;
    shadowDom.appendChild(label);
  }
}
