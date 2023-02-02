import "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.1/TweenMax.min.js";
import { THONLY } from 'https://thonly.org/global.mjs';
import kiitos from "./kiitos.mjs";
import template from './template.mjs';

class KeMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => this.#render(false));
    }

    async connectedCallback() {
        await import(`${THONLY}/components/tl-main/tl-kiitos/element.mjs`);
        await import(`${THONLY}/components/tl-main/tl-robot/element.mjs`);
        this.#render(true);
        this.#animate();
    }

    #render(refresh) {
        const page = window.location.hash.substring(1);
        this.shadowRoot.querySelectorAll('header, main, footer').forEach(element => element.style.display = 'none');
        
        if (page) {
            this.shadowRoot.querySelector('tl-kiitos').render(kiitos[page]);
            this.shadowRoot.querySelector('main').style.display = 'block';
        } else {
            const a = this.shadowRoot.querySelector('a');
            a.href = "https://me.thonly.net/#kiitos";
            a.firstElementChild.innerHTML = "<b>Follow</b> for real-time updates!";
            this.shadowRoot.querySelector('header').style.display = 'block';
            this.shadowRoot.querySelector('footer').style.display = 'block';
        }
        
        this.style.display = 'block';
        if (refresh) setTimeout(() => document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" }), 300)
        else document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
    }

    #animate() {
        const tmax_opts = {
            delay: 0,
            repeat: -1,
            repeatDelay: 0,
            yoyo: true
        };
        
        const tmax_tl = new TimelineMax(tmax_opts),
            polyland_shapes = this.shadowRoot.querySelectorAll('svg.landscape polygon'),
            polyland_stagger = 0.00475,
            polyland_duration = 1.5;
        
        CSSPlugin.useSVGTransformAttr = true;
        
        const polyland_staggerFrom = {
            scale: 0,
            opacity: 0,
            transformOrigin: 'center center',
            ease: Elastic.easeInOut,
            force3D: true
        };
        
        const polyland_staggerTo = {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeInOut,
            force3D: true
        };
        
        tmax_tl.staggerFromTo(polyland_shapes, polyland_duration, polyland_staggerFrom, polyland_staggerTo, polyland_stagger, 0);
    }
}

customElements.define("ke-main", KeMain);