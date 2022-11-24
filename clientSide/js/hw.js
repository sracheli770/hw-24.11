const itemInput = document.getElementById('input-item');
const saveBtn = document.getElementById('save-btn');
const itemsUL = document.getElementById('item-list');
const url = 'http://localhost:4000/items'

saveBtn.addEventListener('click', () => {
    const name = itemInput.value;
    const item = { name }

    fetch(url, {
        method: "POST",
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(json => {
            itemsUL.innerHTML = ''
            fetchItems()
        })
        .catch(e => alert(e))

    itemInput.value = ''
})

const fetchItems = () => {
    fetch(url, { method: "GET" })
        .then(res => res.json())
        .then(items => {
            items.forEach(i => {
                const li = document.createElement('li')
                li.classList.add('list-group-item')
                li.innerText = i.name
                itemsUL.appendChild(li)
            });
        })
        .catch(e => alert(`Error: ${e}`))
}

fetchItems()