export async function getData() {
    const request = await fetch('https://dns.heartbank.exchange:666/');
    return request.json();
}