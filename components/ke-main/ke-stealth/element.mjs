import template from './template.mjs';

class KeStealth extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(origin) {
        const a = this.shadowRoot.querySelector('a');
        a.href = origin ? "https://" + origin : "https://me.thonly.net/#kiitos";
        a.firstElementChild.innerHTML = origin || "<b>Follow</b> for real-time updates!";
        this.style.display = 'block';
    }
}

customElements.define("ke-stealth", KeStealth);