var row = document.querySelector('.row'),
    create = document.getElementById('create'),
    inputDay = document.getElementById('input_day_number');
    inputTime = document.getElementById('input_time');
    inputSet = document.getElementById('input_set');

// Create a new set when the "create" button is clicked
create.addEventListener('click', function () {

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
    editContent.innerHTML = 'x';
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

    dayNumber.innerText = 'Day ' + inputDayValue;
    time.innerText = inputTimeValue;
    set.innerText = inputSetValue;

    inputDay.value = '';
    inputTime.value = '';
    inputSet.value = '';

});

// Edit the item
edit.addEventListener('click', function(){

    var editButton = document.querySelector('#edit'),
        inputDayEdit = document.getElementById('input_day_edit'),
        inputTimeEdit = document.getElementById('input_time_edit'),
        inputSetEdit = document.getElementById('input_set_edit'),
        inputDayEditValue = this.inputDayEdit.value;

})
