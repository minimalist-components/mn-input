let prototype = Object.create(HTMLElement.prototype);
prototype.createdCallback = createdCallback;
document.registerElement('mn-input', {prototype});

function createdCallback() {
  let shadowDom = this.createShadowRoot();

  let input = document.createElement('input');
  input.setAttribute('placeholder', 'lero');
  shadowDom.appendChild(input);

  let type = this.getAttribute('type') || 'text';
  input.setAttribute('type', type);

  let value = this.getAttribute('value') || '';
  input.setAttribute('value', value);

  let name = this.getAttribute('name') || '';
  input.setAttribute('name', name);

  let placeholder = this.getAttribute('placeholder');
  if(placeholder) {
    let label = document.createElement('label');
    label.textContent = placeholder;
    shadowDom.appendChild(label);
  }
}
