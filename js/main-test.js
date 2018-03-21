function assert(message, expr){
    if(!expr){
        output(false, message);
        throw new Error(message);
    }
    output(true, message);
}

function output(result, message){
    var p = document.createElement('p');
    message += result ? ' : SUCCESS' : ' : FAILURE';
    p.style.color = result ? '#0c0' : '#c00';
    p.innerHTML = message;
    document.body.appendChild(p);
}

assert('1€ should return 1.3€', euroToDollar(1) === 1.3);
assert('2€ should return 2.6€', euroToDollar(2) === 2.6);