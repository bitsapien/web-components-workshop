class BasicProduct extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
    const child = document.createElement('h2')
    child.innerText = this.getAttribute('name')
    this.shadowRoot.appendChild(child)
  }
}

window.customElements.define('basic-product', BasicProduct)
