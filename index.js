import { getData } from "./fetch.mjs";

window.onload = async () => {
   console.log(await getData());
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-36P2KNEGTR');