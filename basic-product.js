class BasicProduct extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h2>${this.getAttribute('name')}</h2>`
  }
}

window.customElements.define('basic-product', BasicProduct)
