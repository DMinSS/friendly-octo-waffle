var test = "hello";

function add(a, b) {
    return a + b;
}

var hyperLoop = function() {
    for (var i = 0; i < 100; i++) {
        console.log(add(i, i));
        
    }
}

function doSomething(event) {
    console.log(event);
    event.preventDefault();
}

myBtn.onclick = function () {
    console.log('Goodbye!');
}

btn.addEventListener('click', doSomething, false);
btn.addEventListener('click', function () {
    console.log('Goodbye!');
}, false);
// btn.removeEventListener('click', doSomething);