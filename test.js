async function fetchData() {
    const res = await fetch('../db/search_spider.json');
    const data = await res.json();
    return data;
}
fetchData()
    .then(data => {
        console.log(data)
    })