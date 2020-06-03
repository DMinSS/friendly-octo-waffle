const test = "hello";

function add(a, b) {
    return a + b;
}

const hyperLoop = () => {
    for (var i = 0; i < 100; i++) {
        console.log(add(i, i));
    }
}

function doSomething() {
    $.get('http://localhost:3000/profile', function (data) {
        $('#hello').html(data.name);
    }, 'json').done(function () {
        alert('Great!');
    });
}

myBtn.onclick = () => {
    $.post('http://localhost:3000/comments', {
        "id": 4,
        "body": "some comment v4",
        "postId": 1
    }, data => {
        $('#hello').html(data.body);
    }, 'json')
}

btn.addEventListener('click', doSomething, false);
btn.addEventListener('click', () => {
    console.log('Goodbye!');
}, false);
// btn.removeEventListener('click', doSomething);

console.log(localStorage['myKey']);

function Person(age) {
    this.age = age;

    setInterval(() => {    // |this| properly refers to the person object
        this.age++;
    }, 1000);
}

class Person2 {
    constructor(age) {
        this.age = age;
    }
    interval() {
        setInterval(() => {    // |this| properly refers to the person object
            this.age++;
        }, 1000);
    }
}

var p = new Person(25);
const p1 = new Person2(25);
p1.interval();

const name = 'John';
const symb = 'br';
let str = `
<${symb}>
<em>${name}</em>,
hello!`

console.log(str);

$('#hello').html(str);

function random({ min = 1, max = 200 }) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random({}));
console.log(random({ min: 50 }));
console.log(random({ max: 500 }));
console.log(random({ min: 10, max: 200 }));

const myAsyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = random({ min: 10, max: 200 });
        if (result < 150) {
            resolve(result);
        } else {
            reject("Bad error");
        }
    }, 5000);
});

myAsyncOperation
    .then(res => {
        console.log(res);
        return res * 2;
    })
    .then(newRes => {
        $('#hello').html(newRes);
    })
    .catch(error => {
        console.log(error);
    });

const myOtherAsyncOperation = async () => {
    return random({ min: 10, max: 200 });
}

(async function() {
    console.log(`Async: ${await myOtherAsyncOperation()}`);
})();
