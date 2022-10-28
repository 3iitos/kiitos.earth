const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><figure>🌏</figure></a>
            <a href="/"><h1>Kiitos</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <nav>
            <ul>
                <li>
                    <h3>Dear Kiitos</h3>
                    <div>
                        <a href="#Dear.Kiitos.earth"><button>Dear.Kiitos.earth</button></a>
                        <h4>Thanks</h4>
                        <menu>
                            <li><a>Zero Hero Equation</a></li>
                        </menu>
                        <h4>Coins</h4>
                        <menu>
                            <li><a>Non Zero-Sum Blockchain</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Charity Kitty</h3>
                    <div>
                        <a href="#Kitty.Kiitos.earth"><button>Kitty.Kiitos.earth</button></a>
                        <h4>Prizes</h4>
                        <menu>
                            <li><a>Coins</a></li>
                            <li><a>NFTs</a></li>
                        </menu>
                        <h4>Charities</h4>
                        <menu>
                            <li><a>Farming</a></li>
                            <li><a>Housing</a></li>
                            <li><a>Healthcare</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;