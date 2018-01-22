// BODY overflow hidden
var body = document.querySelector('body'),
    modalTriggerInput = document.getElementById('toggle-modal');

// Adds overflow hidden to the body tag when then nav and modal are open
modalTriggerInput.addEventListener('click', function () {
    if (this.checked === true) {
        body.classList.add('modal-open');
    } else {
        body.classList.remove('modal-open');
    }
});
