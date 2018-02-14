// Defining the main variables
var row = document.querySelector('#row'),
    create = document.getElementById('create'),
    inputDay = document.getElementById('input_day_number');
    inputTime = document.getElementById('input_time');
    inputSet = document.getElementById('input_set'),
    create = document.getElementById('create'),
    edit = document.getElementById('edit'),
    editCancel = document.getElementById('edit-cancel'),
    modalEditOverlay = document.getElementById('modal-overlay'),
    clear = document.querySelector('.btn-clear'),

    // checks if localStorage already holds some data
    //if it does then we store in an array,
    //if not then we create an empty array that will be filled later
    cardsArray = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [];

    // Sets the localStorage with the data held in the cardsArray if any
    localStorage.setItem('cards', JSON.stringify(cardsArray));

    //Allows us to reuse the data in localStorage by creating an array
    var data = JSON.parse(localStorage.getItem('cards'));

// Create a new set/card
var createCard = function(dayValue,timeValue,setValue){

    // Creating the elements needed to make a card
    var makeCard = document.createElement('div'),
        cardContent = document.createElement('div'),
        dayNumber = document.createElement('p'),
        time = document.createElement('p'),
        set = document.createElement('p');

    // add card
    row.appendChild(makeCard);
    makeCard.classList.add('card', 'col-xs-3');
    makeCard.id = 'day_' + dayValue;

    // add card content block
    makeCard.appendChild(cardContent);
    cardContent.classList.add('card-content');

    // add day
    cardContent.appendChild(dayNumber);
    dayNumber.classList.add('card-content_day');
    dayNumber.textContent = 'Day ' + dayValue;

    // add time
    cardContent.appendChild(time);
    time.classList.add('card-content_time');
    time.textContent = timeValue;

    // add set
    cardContent.appendChild(set);
    set.classList.add('card-content_set');
    set.textContent = setValue;

}

// Displays the card/set when the button "create" is clicked
create.addEventListener('click', function(){

    // Stocking the values entered in an array
    var cardsContentArray = [inputDay.value,inputTime.value,inputSet.value];

    // Updates the cardsArray array
    cardsArray.push(cardsContentArray);

    // Updating the localStorage
    localStorage.setItem('cards', JSON.stringify(cardsArray));

    // Calling the createCard function when the button "create" is clicked
    createCard(inputDay.value,inputTime.value,inputSet.value);

    /* // Displays an error message if one of the input is left empty
    if(inputDay.value === '' || inputTime.value === '' || inputSet.value === ''){

    } */


    // Resetting the input values to empty once the set has been created
    inputDay.value = '';
    inputTime.value = '';
    inputSet.value = '';

    document.location.reload(true);

})

// Displays the data held in the localStorage when reloading
/*
// Use of the forEach loop
data.forEach(function(item){
        createCard(item[0],item[1]);
})
*/

// Use of the map method (functional programming)
var reload = data.map(function(item){
    createCard(item[0],item[1],item[2])
})

// Open the edit modal
var card = document.querySelectorAll('.card');

card.forEach(function(item){

    item.addEventListener('click', function(){
        var modal = document.querySelector('.modal'),
        
        // Getting the data inside the cards
        cardContentDay = this.querySelector('.card-content_day').textContent,
        cardContentTime = this.querySelector('.card-content_time').textContent,
        cardContentSet = this.querySelector('.card-content_set').textContent,
        
        // Defining the values of the modal inputs
        inputEditDay = document.querySelector('#input_day_edit'),
        inputEditTime = document.querySelector('#input_time_edit'),
        inputEditSet = document.querySelector('#input_set_edit');
        
        inputEditDay.value = cardContentDay;
        inputEditTime.value = cardContentTime;
        inputEditSet.value = cardContentSet;
        
        modal.classList.add('modal-display');
        
    });
})

// Closes the edit modal when the cancel button is clicked
editCancel.addEventListener('click', function(){
    var modal = document.querySelector('.modal');
    modal.classList.remove('modal-display');
});

// Closes the edit modal a click occurs outside the modal
modalEditOverlay.addEventListener('click', function(){
    var modal = document.querySelector('.modal');
    modal.classList.remove('modal-display');
});

// Edit the card info
var editCard = function(dayValue,timeValue,setValue){

    // Creating the elements needed to make a card
    var card = document.createElement('div'),
        cardContent = document.createElement('div'),
        dayNumber = document.createElement('p'),
        time = document.createElement('p'),
        set = document.createElement('p');

    // add card
    row.appendChild(card);
    card.classList.add('card', 'col-xs-3');
    card.id = 'day_' + dayValue;

    // add card content block
    card.appendChild(cardContent);
    cardContent.classList.add('card-content');

    // add day
    cardContent.appendChild(dayNumber);
    dayNumber.classList.add('card-content_day');
    dayNumber.textContent = 'Day ' + dayValue;

    // add time
    cardContent.appendChild(time);
    time.classList.add('card-content_time');
    time.textContent = timeValue;

    // add set
    cardContent.appendChild(set);
    set.classList.add('card-content_set');
    set.textContent = setValue;

}

// Clears the data stored in the localStorage
clear.addEventListener('click', function(){
    localStorage.clear();

    // && removes all cards
    while(row.firstChild){
        row.removeChild(row.firstChild);
    }

})

console.log(localStorage);
console.log(data);
