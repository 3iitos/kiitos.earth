import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/ke-header/shadow.css">
    <header>
        <section>
            <a href="#"><figure>🌏</figure></a>
            <h1>Kiitos</h1>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Dear Kiitos</h3>
                <nav>
                    <a href="https://dear.kiitos.earth"><button>Dear.Kiitos.earth</button></a>
                    <h4>Thanks</h4>
                    <menu>
                        <li><a href="#equation">Zero Hero Equation</a></li>
                    </menu>
                    <h4>Coins</h4>
                    <menu>
                        <li><a href="#blockchain">Non Zero-Sum Blockchain</a></li>
                    </menu>
                </nav>
            </li>
            <li>
                <h3>Kitty Kiitos</h3>
                <nav>
                    <a href="https://kitty.kiitos.earth"><button>Kitty.Kiitos.earth</button></a>
                    <h4>Prizes</h4>
                    <menu>
                        <li><a href="#coin">Coins</a></li>
                        <li><a href="#nft">NFTs</a></li>
                    </menu>
                    <h4>Charities</h4>
                    <menu>
                        <li><a href="#housing">Housing</a></li>
                        <li><a href="#farming">Farming</a></li>
                        <li><a href="#healthcare">Healthcare</a></li>
                    </menu>
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;