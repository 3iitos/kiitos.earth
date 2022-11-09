import "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.1/TweenMax.min.js";
import template from './template.mjs';

class SwMain extends HTMLElement {
    #hash = "SW-STEALTH";

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => window.location.reload());
    }

    connectedCallback() {
        this.style.display = 'block';
        this.#animate();
        this.#render();
    }

    #render() {
        this.shadowRoot.querySelector("slot").assignedElements().forEach(element => element.style.display = 'none');
        this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === this.#hash).render(window.location.hash.substring(1));
    }

    #animate() {
        var tmax_opts = {
            delay: 0.5,
            repeat: -1,
            repeatDelay: 0.5,
            yoyo: true
        };
        
        var tmax_tl           = new TimelineMax(tmax_opts),
            polyland_shapes   = this.shadowRoot.querySelectorAll('svg.landscape polygon'),
            polyland_stagger  = 0.00475,
            polyland_duration = 1.5;
        
        CSSPlugin.useSVGTransformAttr = true;
        
        var polyland_staggerFrom = {
            scale: 0,
            opacity: 0,
            transformOrigin: 'center center',
            ease: Elastic.easeInOut,
            force3D: true
        };
        
        var polyland_staggerTo = {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeInOut,
            force3D: true
        };
        
        tmax_tl.staggerFromTo(polyland_shapes, polyland_duration, polyland_staggerFrom, polyland_staggerTo, polyland_stagger, 0);
    }
}

customElements.define("sw-main", SwMain);