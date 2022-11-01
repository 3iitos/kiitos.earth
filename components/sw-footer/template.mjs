const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <h5>Donors</h5>
                <ul class="donors">
                    <li><a href="https://github.com/thonly"><img src="https://github.com/thonly.png?size=100"></a></li>
                    <li><a href="https://github.com/panhiathao"><img src="https://github.com/panhiathao.png?size=100"></a></li>
                    <li><a href="https://github.com/chengsieuly"><img src="https://github.com/chengsieuly.png?size=100"></a></li>
                    <li><a href="https://github.com/lykimche"><img src="https://github.com/lykimche.png?size=100"></a></li>
                </ul>
                <h5>Sponsors</h5>
                <ul class="donors">
                    <li><a href="https://github.com/heartbank"><img src="https://github.com/heartbank.png?size=100"></a></li>
                    <li><a href="https://github.com/siliconwat"><img src="https://github.com/siliconwat.png?size=100"></a></li>
                    <li><a href="https://github.com/thonlymetaverse"><img src="https://github.com/thonlymetaverse.png?size=100"></a></li>
                    <li><a href="https://github.com/nhiakou"><img src="https://github.com/nhiakou.png?size=100"></a></li>
                </ul>
            </section>
            <section>
                <h5>Donate</h5>
                <ul>
                    <li><a href="https://heartbank.fund">HeartBank</a></li>
                    <li><a href="https://github.com/sponsors/3iitos">GitHub</a></li>
                </ul>
                <h5>Contact</h5>
                <ul>
                    <li><a href="mailto:love@kiitos.earth">love@kiitos.earth</a></li>
                </ul>
            </section>
            <section>
                <h5>Connect</h5>
                <ul>
                    <li><a href="https://talk.siliconwat.org">Silicon Wat</a></li>
                    <li><a href="https://youtube.com/@3iitos">YouTube</a></li>
                    <li><a href="https://twitter.com/3iitos">Twitter</a></li>
                    <li><a href="https://medium.com/@kiitos">Medium</a></li>
                </ul>
            </section>
        </main>
        <footer>
            <small><a href="https://github.com/3iitos">Kiitos</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;