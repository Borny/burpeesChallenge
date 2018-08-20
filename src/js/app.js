// Defining variables
const addItemBtn = document.getElementById('add-item-btn'), // add button
    addItemInput = document.getElementById('add-item-input'); // add input

// Data
const data = {
    itemList: []
}

// Add item with a click event
addItemBtn.addEventListener('click', () => {

    const addItemInputValue = addItemInput.value;
    if (addItemInputValue) {

        createItem(addItemInputValue);
        addItemInput.value = ''; // empties the input
        addItemInput.focus(); // focuses on the input again

        data.itemList.push(addItemInputValue);
    }

    updateData()

})

// Add item with the 'Enter' key
addItemInput.addEventListener('keydown', (e) => {
    const value = addItemInput.value;
    if (e.code === 'Enter' && value) {
        const addItemInputValue = addItemInput.value;
        createItem(addItemInputValue);
        addItemInput.value = ''; // empties the input

        data.itemList.push(addItemInputValue);

        updateData()
    }


})

 function updateData(){
 }

// Create item
const createItem = (text) => {

    // creating the elements
    const itemsContainer = document.getElementById('items-container'),
        item = document.createElement('div'),
        itemContent = document.createElement('div'),
        itemDay = document.createElement('p'),
        itemTime = document.createElement('p'),
        itemSet = document.createElement('p');

    // adding classes once the elements are created
    item.classList.add('item');
    itemContent.classList.add('item-content');
    itemDay.classList.add('item-day');
    itemTime.classList.add('item-time');
    itemSet.classList.add('item-set');

    // adding text to the day element
    itemDay.innerText = `Day ${text}`;

    // adding the element to the DOM
    itemsContainer.appendChild(item);
    item.appendChild(itemContent);
    itemContent.appendChild(itemDay);
    itemContent.appendChild(itemTime);
    itemContent.appendChild(itemSet);

    // remove item
    item.addEventListener('click', removeItem);

}

// Remove item functon
const removeItem = function () {
    const itemParent = this.parentNode;
    itemParent.removeChild(this);

    const value = this.innerText;
    data.itemList.splice(data.itemList.indexOf(value), 1);

    updateData()

}
