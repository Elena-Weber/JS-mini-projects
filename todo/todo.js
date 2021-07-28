const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const planner = document.querySelector('.planner')

const anotherInputField = document.querySelector('.another-inputField');
const anotherBtn = document.querySelector('.another-btn');
const shoppingList = document.querySelector('.shopping-list')

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('addedItem')
    planner.appendChild(item);
    inputField.value = '';

    item.addEventListener('click', function()  {
        item.classList.add('strikethrough')
    })

    item.addEventListener('dblclick', function() {
        planner.removeChild(item)
    })
})

anotherBtn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = anotherInputField.value;
    item.classList.add('another-addedItem')
    shoppingList.appendChild(item);
    anotherInputField.value = '';

    item.addEventListener('click', function()  {
        item.classList.add('another-strikethrough')
    })

    item.addEventListener('dblclick', function() {
        shoppingList.removeChild(item)
    })
})