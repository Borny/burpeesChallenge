var row = document.querySelector('.row'),
    create = document.getElementById('create'),
    inputDay = document.getElementById('input_day_number');
    inputTime = document.getElementById('input_time');
    inputSet = document.getElementById('input_set');

console.log(row);
console.log(create);

create.addEventListener('click', function () {

    var card = document.createElement('div'),
        cardContent = document.createElement('div'),
        dayNumber = document.createElement('p'),
        time = document.createElement('p'),
        set = document.createElement('p'),
        inputDayValue = inputDay.value,
        inputTimeValue = inputTime.value,
        inputSetValue = inputSet.value;

    card.classList.add('col-xs-4', 'card');
    cardContent.classList.add('card-content');

    row.appendChild(card);
    card.appendChild(cardContent);
    cardContent.appendChild(dayNumber);
    cardContent.appendChild(time);
    cardContent.appendChild(set);
    dayNumber.innerText = 'Day ' + inputDayValue;
    time.innerText = inputTimeValue;
    set.innerText = inputSetValue;

    inputDay.value = '';
    inputTime.value = '';
    inputSet.value = '';

    console.log(inputDay.value);

    // Closing the modal when creating a new set
    modalTriggerInput.checked === false;

});