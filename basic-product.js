class BasicProduct extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h2> Mechanical Keyboard </h2>`
  }
}

window.customElements.define('basic-product', BasicProduct)
