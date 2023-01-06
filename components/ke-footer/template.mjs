import "./ke-donors/element.mjs";
import "./ke-sponsors/element.mjs";
import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/ke-footer/shadow.css">
    <nav>
        <main>
            <section>
                <ke-donors></ke-donors>
                <ke-sponsors></ke-sponsors>
            </section>
            <section>
                <div>
                    <h5>Donate</h5>
                    <ul>
                        <li><a href="https://heartbank.fund/#kiitos">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/3iitos">GitHub</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Sponsor</h5>
                    <ul>
                        <li><a href="https://kitty.kiitos.earth/#kiitos">Kiitos</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Follow</h5>
                    <ul>
                        <li><a href="https://me.thonly.net/#kiitos">THonly</a></li>
                        <!--<li><a href="https://youtube.com/@3iitos">YouTube</a></li>
                        <li><a href="https://twitter.com/3iitos">Twitter</a></li>-->
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto:love@kiitos.earth">love@kiitos.earth</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <small><a href="https://github.com/3iitos">Kiitos</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;