var row = document.querySelector('#row'),
    create = document.getElementById('create'),
    inputDay = document.getElementById('input_day_number');
    inputTime = document.getElementById('input_time');
    inputSet = document.getElementById('input_set'),
    create = document.getElementById('create'),
    clear = document.querySelector('.btn-clear'),

    // checks if localStorage already holds some data
    cardsArray = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [];

    localStorage.setItem('cards', JSON.stringify(cardsArray));
    var data = JSON.parse(localStorage.getItem('cards'));

// Create a new set when the "create" button is clicked
/*create.addEventListener('click', function () {

    var card = document.createElement('div'),
        cardContent = document.createElement('div'),
        editContent = document.createElement('label'),
        dayNumber = document.createElement('p'),
        time = document.createElement('p'),
        set = document.createElement('p'),
        inputDayValue = inputDay.value,
        inputTimeValue = inputTime.value,
        inputSetValue = inputSet.value;

    card.classList.add('col-xs-3', 'card');
    cardContent.classList.add('card-content');
    editContent.classList.add('edit-content');
    editContent.textContent = 'x';
    editContent.setAttribute('for', 'toggle-modal_edit');
    row.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(editContent);

    // add day
    cardContent.appendChild(dayNumber);
    dayNumber.classList.add('card-content_day');

    // add time
    cardContent.appendChild(time);
    time.classList.add('card-content_time');

    // add set
    cardContent.appendChild(set);
    set.classList.add('card-content_set');

    dayNumber.textContent = 'Day ' + inputDayValue;
    time.textContent = inputTimeValue;
    set.textContent = inputSetValue;

    inputDay.value = '';
    inputTime.value = '';
    inputSet.value = '';

    localStorage.setItem('dayValue', JSON.stringify(inputDayValue));

});*/

var createCard = function(allValues){

    var card = document.createElement('div'),
        cardContent = document.createElement('div'),
        dayNumber = document.createElement('p'), 
        time = document.createElement('p'),
        set = document.createElement('p');

    // add card
    row.appendChild(card);
    card.classList.add('card', 'col-xs-3');

    // add card content block
    card.appendChild(cardContent);
    cardContent.classList.add('card-content');

    // add day
    cardContent.appendChild(dayNumber);
    dayNumber.classList.add('card-content_day');
    dayNumber.textContent = 'Day ' + inputDay.value;    

    // add time
    cardContent.appendChild(time);
    time.classList.add('card-content_time');
    time.textContent = inputTime.value;    

    // add set
    cardContent.appendChild(set);
    set.classList.add('card-content_set');
    set.textContent = inputSet.value;
    
    inputDay.value = '';
    inputTime.value = '';
    inputSet.value = '';

    cardsArray.push(allValues);
    localStorage.setItem('cards', JSON.stringify(cardsArray));

}

create.addEventListener('click', function(){

    createCard(allValues);

    var allValues = [
        inputDay.value,
        inputTime.value,
        inputSet.value
    ]

    inputDay.value = '';
    inputTime.value = '';
    inputSet.value = '';

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