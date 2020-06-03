calc.one.addEventListener('click', function() {
    calc.result.value += '1';
}, false)

calc.two.addEventListener('click', function() {
    calc.result.value += '2';
}, false)

calc.plus.addEventListener('click', function() {
    calc.result.value += '+';
}, false)

calc.equal.addEventListener('click', function() {
    calc.result.value = eval(calc.result.value);
}, false)