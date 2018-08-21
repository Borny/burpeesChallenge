// Defining the main variables
var row = document.querySelector('#row'),
    create = document.getElementById('create'),
    inputDay = document.getElementById('input_day_number'),
    inputTime = document.getElementById('input_time'),
    inputSet = document.getElementById('input_set'),
    create = document.getElementById('create'),
    edit = document.getElementById('edit'),
    editCancel = document.getElementById('edit-cancel'),
    modalEditOverlay = document.getElementById('modal-overlay'),
    clear = document.querySelector('.btn-clear'),
    modal = document.querySelector('.modal'),
    errorMessage = document.querySelector('.error'),

    // checks if localStorage already holds some data
    //if it does then we store it in an array,
    //if not then we create an empty array that will be filled later
    cardsArray = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : {};

    // Sets the localStorage with the data held in the cardsArray if any
    localStorage.setItem('cards', JSON.stringify(cardsArray));

    //Allows us to reuse the data in localStorage by creating an array
    var data = JSON.parse(localStorage.getItem('cards'));

// Create a new set/card
var createCard = function(dayValue,timeValue,setValue){

    // Creating the elements needed to make a card
    var makeCard = document.createElement('div'),
        cardContent = document.createElement('div'),
        dayText = document.createElement('p'),
        dayNumber = document.createElement('span'),
        time = document.createElement('p'),
        set = document.createElement('p');

    // add card
    row.appendChild(makeCard);
    makeCard.classList.add('card', 'col-xs-3');
    makeCard.id = 'day' + dayValue;

    // add card content block
    makeCard.appendChild(cardContent);
    cardContent.classList.add('card-content');

    // add day
    cardContent.appendChild(dayText);
    dayText.textContent = 'Day ';
    dayText.appendChild(dayNumber);
    dayNumber.classList.add('card-content_day');
    dayNumber.textContent = dayValue;

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
    var cardsContentArray = [inputDay.value,inputTime.value,inputSet.value],
    keyID = 'day' + inputDay.value;

    // Updates the cardsArray array
    cardsArray[keyID] = cardsContentArray;

    // Updating the localStorage
    localStorage.setItem('cards', JSON.stringify(cardsArray));

    // Calling the createCard function when the button "create" is clicked
    if(inputDay.value === ''){
        errorMessage.classList.add('show');
    } else{
        createCard(inputDay.value,inputTime.value,inputSet.value);
        document.location.reload(true);
    };

    // Resetting the input values to empty once the set has been created
    inputDay.value = '';
    inputTime.value = '';
    inputSet.value = '';

    // Reloading the page each time a card is created so the edit function can work on the newly created cards

})

var reload = function(){
    for (var key in data){
        createCard(data[key][0],data[key][1],data[key][2]);
    }
}
reload();

// Open the edit modal
var card = document.querySelectorAll('.card');

card.forEach(function(item){

    item.addEventListener('click', function(){

        // Getting the data inside the cards
        var cardContentDay = this.querySelector('.card-content_day').textContent,
            cardContentTime = this.querySelector('.card-content_time').textContent,
            cardContentSet = this.querySelector('.card-content_set').textContent,
            cardEdited = this,
            cardID = this.id,

            // Defining the values of the modal inputs
            inputEditDay = document.querySelector('#input_day_edit'),
            inputEditTime = document.querySelector('#input_time_edit'),
            inputEditSet = document.querySelector('#input_set_edit');

        // Displays the modal by adding a class
        modal.classList.add('modal-display');

        // Defines the value of the edit modal inputs as the card's data
        inputEditDay.value = cardContentDay;
        inputEditTime.value = cardContentTime;
        inputEditSet.value = cardContentSet;

        // Edits the card when clicking on the edit button
        edit.addEventListener('click',function(){

            // Defining the input values
            inputEditDayValue = document.querySelector('#input_day_edit').value;
            inputEditTimeValue = document.querySelector('#input_time_edit').value;
            inputEditSetValue = document.querySelector('#input_set_edit').value;

            // Editing the card with the values entered in the modal
            cardEdited.querySelector('.card-content_day').textContent = inputEditDayValue;
            cardEdited.querySelector('.card-content_time').textContent = inputEditTimeValue;
            cardEdited.querySelector('.card-content_set').textContent = inputEditSetValue;

            // Stocking the values entered in an array
            var cardsContentArray = [inputEditDay.value,inputEditTime.value,inputEditSet.value];

            // Updates the cardsArray array
            cardsArray[cardID] = cardsContentArray;

            // // Updating the localStorage
            localStorage.setItem('cards', JSON.stringify(cardsArray));

            // Closing the modals when the edit button is clicked
            var modal = document.querySelector('.modal');
            modal.classList.remove('modal-display');

        })

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

// Clears the data stored in the localStorage
clear.addEventListener('click', function(){
    localStorage.clear();

    // && removes all cards
    while(row.firstChild){
        row.removeChild(row.firstChild);
    }

    // Reloading the page
    document.location.reload(true);

})
