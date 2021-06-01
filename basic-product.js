const template = document.createElement('template');
template.innerHTML = `
<style>
  h2 {
    color: magenta;
  }
</style>
<div class="basic-product">
  <h2> </h2>
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
      this.shadowRoot.appendChild(img)
    }
  }
}

window.customElements.define('basic-product', BasicProduct)
