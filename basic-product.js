const template = document.createElement('template');
template.innerHTML = `
<style>
  .basic-product {
    display: flex;
    border: 1px gray solid;
    max-width: 600px;
    border-radius: 2px;
    margin-bottom: 1rem;
    font-family: Arial;
  }

  .product-info {
    padding-left: 1rem;
  }

  .product-info span {
    margin-top: 1rem;
  }

  ::slotted(div) {
    color: grey;
  }
</style>
<div class="basic-product">

  <div class="product-info">
    <h2> </h2>
    <slot name="description"></slot>
    <span data-id="price"></span>
  </div>
</div>
`;

class BasicProduct extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name')

    if(this.getAttribute('image')) {
      const img = document.createElement('img')
      img.setAttribute('src', this.getAttribute('image'))
      this.shadowRoot.querySelector('.basic-product').prepend(img)
    }

    if(this.getAttribute('price')) {
      const price = `Price: ${this.getAttribute('price')}`
      this.shadowRoot.querySelector('.product-info span[data-id=price]').style.display = 'none'
      this.shadowRoot.querySelector('.product-info span[data-id=price]').innerText = price
      const button = document.createElement('button')
      button.innerText = 'Show Price'
      this.shadowRoot.querySelector('.product-info').appendChild(button)
    }

    this.showPrice = false
  }

  togglePrice() {
    this.showPrice = !this.showPrice
    if(this.showPrice) {
      this.shadowRoot.querySelector('.product-info span[data-id=price]').style.display = 'block'
      this.shadowRoot.querySelector('button').innerText = 'Hide Price'
    } else {
      this.shadowRoot.querySelector('.product-info span[data-id=price]').style.display = 'none'
      this.shadowRoot.querySelector('button').innerText = 'Show Price'
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', () => this.togglePrice())
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('button').removeEventListener('click', () => this.togglePrice())
  }
}

window.customElements.define('basic-product', BasicProduct)
