export default class Rendering {
  constructor() {
    this.container = null;
    this.button = null;
    this.popover = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Container is not HTMLElement');
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('Container not bind to DOM');
    }
  }

  draw() {
    this.checkBinding();

    const containerBtn = document.createElement('div');
    containerBtn.classList.add('container-button');
    this.container.appendChild(containerBtn);

    const button = document.createElement('button');
    button.textContent = 'Click to toggle popover';
    button.classList.add('button');
    button.type = 'button';
    containerBtn.appendChild(button);
    this.button = button;

    const popover = document.createElement('div');
    popover.classList.add('popover');
    containerBtn.appendChild(popover);
    this.popover = popover;

    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    popover.appendChild(arrow);

    const title = document.createElement('span');
    title.textContent = 'Popover title';
    title.classList.add('title');
    popover.appendChild(title);

    const text = document.createElement('span');
    text.textContent = 'And here\'s some amazing content. It\'s very engaging. Right?';
    text.classList.add('text');
    popover.appendChild(text);
  }
}
