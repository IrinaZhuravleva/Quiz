export default [
    { 
        'id': 0,
        'question': 'Что выведут следующие строки?<br>console.log(false && 1 && []); // console.log(\" \" && true && 5);',
        'answers': [{'id': 1, 'text': 'false // 5'}, {'id': 2, 'text':'false 1 [] // \" \" true 5'}],
        'answer': 1
        // returns the first falsy expression or the last expression
    },{
        'id': 1,
        'question': 'Что выведут следующие строки?<br>console.log(null == undefined); // console.log(null === undefined);',
        'answers': [{'id': 1, 'text': 'true // true'}, {'id': 2, 'text': 'true // false'}],
        'answer': 2
    },
    {
        'id': 2,
        'question': 'Что выведет строка console.log(null || 1 || undefined); ?',
        'answers': [{'id': 1, 'text': '1'}, {'id': 2, 'text': 'undefined'}, {'id': 3, 'text': 'null'}],
        'answer': 1
    },
    {
        'id': 3,
        'question': 'Is using the + or unary plus operator the fastest way in converting a string to a number?',
        'answers': [{ 'id': 1, 'text': 'no' }, { 'id': 2, 'text': 'yes'}],
        'answer': 2
    },
    {
        'id': 4,
        'question': 'What is the DOM?',
        'answers': [{ 'id': 1, 'text': 'Document Object Model is API for HTML and XML documents.' }, { 'id': 2, 'text': 'Document Origin Mode'}],
        'answer': 1
    },
    {
        'id': 5,    
        'question': 'How many phases does Event Propagation have?',
        'answers': [{ 'id': 1, 'text': '1'}, { 'id': 2, 'text': '2'}, { 'id': 3, 'text': '3'}],
        'answer': 3
        // Capturing Phase , Target Phase, Bubbling Phase
    }, {
        'id': 6,  
        'question': 'On which element will be event.target if button clicked?<br>AddEventListener is on green box.<div class="div-1" onclick="clickFunc(event)"><div class="div-2"><button class="btn-example">Button</button></div></div>',
        'answers': [{ 'id': 1, 'text': 'green box'}, {'id': 2, 'text': 'yellow box'}, {'id': 3, 'text': 'button'}],
        'answer': 3
    }, {
        'id': 7,  
        'question': 'On which element will be event.currentTarget if button clicked?<br>AddEventListener is on green box.<div class="div-1" onclick="clickFunc(event)"><div class="div-2"><button class="btn-example">Button</button></div></div>',
        'answers': [{ 'id': 1, 'text': 'green box'}, {'id': 2, 'text': 'yellow box'}, {'id': 3, 'text': 'button'}],
        'answer': 1
    }, {
        'id': 8,  
        'question': 'let x = undefined;<br>let y = null;<br>console.log(x == y);',
        'answers': [{ 'id': 1, 'text': 'true'}, { 'id': 2, 'text': 'false'}],
        'answer': 1
    }, {
        'id': 9,  
        'question': 'let a = { a: 1 };<br>let b = { a: 1 };<br>let c = a;<br><br>console.log(a === b);<br>console.log(a === c);',
        'answers': [{ 'id': 1, 'text': 'true // true'}, { 'id': 2, 'text': 'false // true'}],
        'answer': 2
            // == (abstract equality) and === (strict equality) 
    }, {
        'id': 10,  
        'question': 'console.log(!!0);<br>console.log(!!1);<br>console.log(!![].length);',
        'answers': [{ 'id': 1, 'text': 'true // true // false' }, { 'id': 2, 'text': 'false // true // false' }, { 'id': 3, 'text': 'true // true // true'}],
        'answer': 2
    }, { 
        'id': 11,
        'question': 'Чему равен х?<br>let x = 5;<br>x = (x++ , x = addFive(x), x *= 2, x -= 5, x += 10);<br>function addFive(num) {<br>return num + 5;<br>}',
        'answers': [{'id': 1, 'text': '-5'}, {'id': 2, 'text': '22'}, {'id': 3, 'text': '27'}],
        'answer': 3
    }, {
        'id': 12,
        'question': 'Что выведет консоль?<br>console.log(y);<br>y = 1;<br>console.log(y);<br>console.log(greet("Mark"));<br><br>function greet(name){<br>return \'Hello \' + name + \'!\';<br>}<br><br>var y;',
        'answers': [{ 'id': 1, 'text': 'undefined, 1, Hello Mark!'}, { 'id': 2, 'text': 'Hello Mark!, undefined, 1'}, { 'id': 3, 'text': '1, undefined, Hello Mark!'}],
        'answer': 1
    }, {
        'id': 13,
        'question': 'Cколько фаз имеет Execution Context у Hoisting?',
        'answers': [{ 'id': 1, 'text': '1 (compilation)' }, { 'id': 2, 'text': '2 (compilation and execution)'}, { 'id': 3, 'text': '3 (capture, compilation and execution)'}],
        'answer': 2
        //сверила ответы до этого пункта
    }, {
        'id': 14,
        'question': 'function myFavoriteFunc(a) {<br />if (true) {<br />var b = "Hello " + a;<br />}<br />return b;<br />}<br />myFavoriteFunc("World");<br />console.log(a); <br />console.log(b); ',
        'answers': [{ 'id': 1, 'text': 'a is not defined'}, { 'id': 2, 'text': 'Hello World'}],
        'answer': 1
    }, {
        'id': 15,
        'question': 'What are the falsy values in JavaScript?',
        'answers': [{ 'id': 1, 'text': '[\'\', 0, null, undefined, NaN, false];'}, { 'id': 2, 'text': '[undefined, NaN, false];'}],
        'answer': 1
    }, {
        'id': 16,
        'question': '  "\"use strict\";<br />function showMeThis(){<br />return this;<br />}<br />showMeThis();',
        'answers': [{ 'id': 1, 'text': 'Консоль выведет объект Windows' }, { 'id': 2, 'text': 'Консоль выведет undefined'}],
        'answer': 2
    }, {
        'id': 17,
        'question': 'Можно ли продублировать имя переменной? <br />function someFunc(a, b, b, c){<br />}',
        'answers': [{ 'id': 1, 'text': 'нет'}, { 'id': 2, 'text': 'да'}],
        'answer': 2
        // yes with "use strict";
    }, {
        'id': 18,
        'question': 'function logName(name) {<br />var n = name || "Mark";<br />console.log(n);<br />}<br />logName(); ',
        'answers': [{ 'id': 1, 'text': 'name'}, { 'id': 2, 'text': 'Mark'}],
        'answer': 2
    }, {
        'id': 19,
        'question': `const carDetails = {<br />
        name: "Ford Mustang",<br />
        getName(){<br />return this.name;<br />
        } };<br />
        var name = "Ford Ranger";<br />
        var getCarName = carDetails.getName;<br /><br />
        console.log(getCarName());<br />
        console.log(getCarName.apply(carDetails));`,
        'answers': [{ 'id': 1, 'text': 'Ford Mustang//Ford Mustang'}, { 'id': 2, 'text': 'Ford Ranger//Ford Mustang'}],
        'answer': 2
    }, {
        'id': 20,
        'question': 'const o = {};<br />console.log(o.toString === Object.prototype.toString);',
        'answers': [{ 'id': 1, 'text': 'true'}, { 'id': 2, 'text': 'false'}],
        'answer': 1
            // The end of the Prototype Chain is the Object.prototype.
        // A prototype in simplest terms is a blueprint of an object.It is used as a fallback for properties 
        // and methods if it does exist in the current object.
    }, {
        'id': 21,
        'question': 'const details = {<br />message: \'Hello World!\'<br />};<br />function getMessage(){<br />return this.message;<br />}<br />getMessage.apply(details);',
        'answers': [{ 'id': 1, 'text': 'Hello World!'}, { 'id': 2, 'text': 'undefined'}],
        'answer': 1
        //  The apply invokes a function specifying 
        //  the 'this' or the "owner" object of that function on that time of invocation.
    }, {
        'id': 22,
        'question': 'Что сделает данная функция?<br />function one() {<br />return Array.prototype.slice.call(arguments);<br />}',
        'answers': [{ 'id': 1, 'text': 'converts the arguments object into an array' }, { 'id': 2, 'text': 'converts the arguments object into a string'}],
        'answer': 1
        //question 37 
        
    }, {
        'id': 23,
        'question': 'Какая из функций вернет объект с аргументами?<br /><br />function one() {<br />return arguments;<br />}<br /><br />const two = () => arguments;',
        'answers': [{ 'id': 1, 'text': 'обе'}, { 'id': 2, 'text': 'первая'}, { 'id': 3, 'text': 'вторая'}],
        'answer': 2
    }, {
        'id': 24,
        'question': 'Вернет ли стрелочная функция объект с аргументами?<br />const four = (...args) => args;',
        'answers': [{ 'id': 1, 'text': 'да' }, { 'id': 2, 'text': 'нет' }],
        'answer': 1
    }, {
        'id': 25,
        'question': '   const o1 = {};<br />console.log(o1.toString()); <br /><br />const o2 = Object.create(null);<br />console.log(o2.toString());',
        'answers': [{ 'id': 1, 'text': '[object Object]//error' }, { 'id': 2, 'text': '[object Object]//[object Object]' }],
        'answer': 1
        // We can create an object without a prototype using the Object.create method.
    }, {
        'id': 26,
        'question': 'Как читается код? Справа налево или слева направо?<br /> function myFunc() {<br />let a = b = 0;<br />}<br /><br />myFunc();',
        'answers': [{ 'id': 1, 'text': 'Справа налево' }, { 'id': 2, 'text': 'Слева направо' }],
        'answer': 1
        // The reason for this is that assignment operator or = has right- to - left associativity or evaluation.
        // The JS Engine makes a global variable b outside this function after that 
        // the return value of the expression b = 0 would be 0 and 
        // it's assigned to the new local variable a with a let keyword.
    }, {
        'id': 27,
        'question': `function giveMeX(showX) {<br />if (showX) {<br />
            var x = 5;<br />}<br />return x;<br /}<br /><br />
            console.log(giveMeX(false));<br />
            console.log(giveMeX(true));`,
        'answers': [{ 'id': 1, 'text': 'undefined//5' }, { 'id': 2, 'text': 'ReferenceError' }],
        'answer': 1
        // Variables declared with var keyword are function scoped.
        // If you are wondering why it logs undefined in the first console.log statement remember variables declared without an initial value has a default value of undefined.
    }, {
        'id': 28,
        'question': `function giveMeX(showX) {<br />if (showX) {<br />
            let x = 5;<br />}<br />return x;<br /}<br /><br />
            console.log(giveMeX(false));<br />
            console.log(giveMeX(true));`,
        'answers': [{ 'id': 1, 'text': 'undefined//5' }, { 'id': 2, 'text': 'ReferenceError' }],
        'answer': 2
        // Variables declared with let and const keyword are block scoped.
    }, {
        'id': 29,
        'question': `Как это называется?<br />
        let { firstName, lastName, position, yearHired } = employee;`,
        'answers': [{ 'id': 1, 'text': ' object structuring' }, { 'id': 2, 'text': ' object destructuring' }, , { 'id': 3, 'text': 'так нельзя записать' }],
        'answer': 2
    }, {
        'id': 30,
        'question': `Как называется функция clickClick?<br />const btnAdd = document.getElementById('btnAdd');<br />btnAdd.addEventListener('click', function clickClick(e) {<br />});`,
        'answers': [{ 'id': 1, 'text': 'Rubbish function' }, { 'id': 2, 'text': 'Callback function' }],
        'answer': 2
    }, {
        'id': 31,
        'question': 'Сколько состояний у промиса?',
        'answers': [{ 'id': 1, 'text': '1' }, { 'id': 2, 'text': '2' }, { 'id': 3, 'text': '3' }],
        'answer': 3
//      Pending - The initial state of a promise.The promise's outcome has not yet been known because the operation has not been completed yet.
//      Fulfilled - The async operation is completed and successful with the resulting value.
//      Rejected - The async operation has failed and has a reason on why it failed.
//      Settled - If the promise has been either Fulfilled or Rejected.
    }, {
        'id': 32,
        'question': 'Сколько параметров у промиса?',
        'answers': [{ 'id': 1, 'text': '1' }, { 'id': 2, 'text': '2' }, { 'id': 3, 'text': '3' }],
        'answer': 2
        // The Promise constructor has two parameters which are functions resolve and reject respectively.
    }, {
        'id': 33,
        'question': `Spread operator<br />function add(...rest) {<br />
                return rest.reduce((total,current) => total + current);<br />
                };<br /><br />
                console.log(add(1, 2));<br />
                console.log(add(1, 2, 3, 4, 5));`,
        'answers': [{ 'id': 1, 'text': 'undefined' }, { 'id': 2, 'text': '3//15' }],
        'answer': 2
    }, {
        'id': 34,
        'question': `Rest operator<br />const [first, ...others] = [1, 2, 3, 4, 5];<br />
            console.log(others);`,
        'answers': [{ 'id': 1, 'text': '1, 2, 3, 4, 5' }, { 'id': 2, 'text': 'undefined' }, { 'id': 3, 'text': '2, 3, 4, 5' }],
        'answer': 3
    }, {
        'id': 33,
        'question': `function getFirst([first, ...rest] = [0, 1]) {<br />
                        return first;<br />
                    }<br /><br />

                    getFirst();<br />
                    getFirst([10,20,30]);`,
        'answers': [{ 'id': 1, 'text': 'undefined' }, { 'id': 2, 'text': '0 // 10' }],
        'answer': 2
    }, {
        'id': 34,
        'question': `function getArr({ nums } = { nums: [1, 2, 3, 4] }){<br />
            return nums;<br />
        }<br /><br />

        getArr({nums:[5,4,3,2,1]});`,
        'answers': [{ 'id': 1, 'text': '1, 2, 3, 4' }, { 'id': 2, 'text': '5,4,3,2,1' }, { 'id': 3, 'text': 'undefined' }],
        'answer': 2
    }, {
        'id': 35,
        'question': `console.log(1 + '6');<br />
                        console.log(false + true);<br />
                        console.log(6 * '2');`,
        'answers': [{ 'id': 1, 'text': '16 // 1 // 12' }, { 'id': 2, 'text': '7 // undefined // 12' }, { 'id': 2, 'text': '7 // 0 // undefined' }],
        'answer': 1
    }, {
        'id': 36,
        'question': `const o = { <br />
            "prop" : "bwahahah",<br />
            "prop2" : "hweasa"<br />
            };<br /><br />

            console.log("prop" in o); <br />
            console.log("prop1" in o);`,
        'answers': [{ 'id': 1, 'text': 'undefined' }, { 'id': 2, 'text': 'true/false' }],
        'answer': 2
    }, {
        'id': 37,
        'question': `const o = { <br />
                    "prop": "bwahahah",<br />
                    "prop2": "hweasa"<br />
                };<br /><br />
                console.log("toString" in o);<br />
                console.log(o.hasOwnProperty("toString"));`,
        'answers': [{ 'id': 1, 'text': 'true // false' }, { 'id': 2, 'text': 'true // true' }],
        'answer': 1
     }, {
        'id': 38,
        'question': `What are the ways to deal with Asynchronous Code in JavasScript?`,
        'answers': [{ 'id': 1, 'text': 'Promises, async/await, Libraries like async.js, bluebird' }, { 'id': 2, 'text': 'Callbacks, Promises, async/await, Libraries like async.js, bluebird' }],
        'answer': 2
     }, {
        'id': 39,
        'question': `functionExpression();<br />
            functionDeclaration();<br /><br />

            function functionExpression(){<br />
            console.log("I am a function expression");<br />
            }<br /><br />

            let functionDeclaration = function(){<br />
            console.log("I am a function declaration");
}`,
        'answers': [{ 'id': 1, 'text': 'I am a function expression // error' }, { 'id': 2, 'text': 'I am a function expression // I am a function declaration' }],
        'answer': 1
        //I am a function declaration не всплывает I wont be hoisted
     // }, {
    //     'id': ,
    //     'question': ``,
    //     'answers': [{ 'id': 1, 'text': '' }, { 'id': 2, 'text': '' }],
    //     'answer': 1
    }
]