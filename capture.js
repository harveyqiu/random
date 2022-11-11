var list = Array.from(document.querySelectorAll('.subject-item'))
var items = list.map((item) => {
    return {
        url: item.querySelector('h2').children[0].getAttribute('href'),
        title: item.querySelector('h2').children[0].textContent.replaceAll('\n', '').replace(/\s/g, '')
    }
})
console.log(JSON.stringify(items, null, 4))