// Defining the main variables
var row = document.querySelector('#row'),
    create = document.getElementById('create'),
    inputDay = document.getElementById('input_day_number');
    inputTime = document.getElementById('input_time');
    inputSet = document.getElementById('input_set'),
    create = document.getElementById('create'),
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
