export default class Actions {
  constructor(elements) {
    this.elements = elements;
  }

  init() {
    this.elements.button.addEventListener('click', () => {
      this.elements.popover.classList.toggle('popover-show');

      this.elements.popover.style.left = `${this.elements.button.offsetLeft + this.elements.button.offsetWidth / 2 - this.elements.popover.offsetWidth / 2}px`;
      this.elements.popover.style.top = `${this.elements.button.offsetTop - this.elements.popover.offsetHeight - 10}px`;
    });
  }
}
