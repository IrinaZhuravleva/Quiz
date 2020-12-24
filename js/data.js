export default [
    { 
        'id': 0,
        'question': 'Что выведут следующие строки?<br>console.log(false && 1 && []); // console.log(\" \" && true && 5);',
        'answers': [{'id': 1, 'text': 'false // 5'}, {'id': 2, 'text':'false 1 [] // \" \" true 5'}],
        'answer': 1
    },{
        'id': 1,
        'question': 'Что выведут следующие строки?<br>console.log(null == undefined); // console.log(null === undefined);',
        'answers': [{'id': 1, 'text': 'true // true'}, {'id': 2, 'text': 'true // false'}],
        'answer': 2
    // },
    // {
    //     'id': 2,
    //     'question': 'Что выведет строка console.log(null || 1 || undefined); ?',
    //     'answers': [{'id': 1, 'text': '1'}, {'id': 2, 'text': 'undefined'}, {'id': 3, 'text': 'null'}],
    //     'answer': 1
    // },
    // {
    //     'id': 3,
    //     'question': 'Is using the + or unary plus operator the fastest way in converting a string to a number?',
    //     'answers': [{ 'id': 1, 'text': 'no' }, { 'id': 2, 'text': 'yes'}],
    //     'answer': 2
    // },
    // {
    //     'id': 4,
    //     'question': 'What is the DOM?',
    //     'answers': [{ 'id': 1, 'text': 'Document Object Model is API for HTML and XML documents.' }, { 'id': 2, 'text': 'Document Origin Mode'}],
    //     'answer': 1
    // },
    // {
    //     'id': 5,    
    //     'question': 'How many phases does Event Propagation have?',
    //     'answers': [{ 'id': 1, 'text': '1'}, { 'id': 2, 'text': '2'}, { 'id': 3, 'text': '3'}],
    //     'answer': 3
        
    // }, {
    //     'id': 6,  
    //     'question': 'On which element will be event.target if button clicked?<br>AddEventListener is on green box.<div class="div-1" onclick="clickFunc(event)"><div class="div-2"><button class="btn-example">Button</button></div></div>',
    //     'answers': [{ 'id': 1, 'text': 'green box'}, {'id': 2, 'text': 'yellow box'}, {'id': 3, 'text': 'button'}],
    //     'answer': 3
    // }, {
    //     'id': 7,  
    //     'question': 'On which element will be event.currentTarget if button clicked?<br>AddEventListener is on green box.<div class="div-1" onclick="clickFunc(event)><div class="div-2"><button class="btn-example">Button</button></div></div>',
    //     'answers': [{ 'id': 1, 'text': 'green box'}, {'id': 2, 'text': 'yellow box'}, {'id': 3, 'text': 'button'}],
    //     'answer': 1
    // }, {
    //     'id': 8,  
    //     'question': 'let x = undefined;<br>let y = null;<br>console.log(x == y);',
    //     'answers': [{ 'id': 1, 'text': 'true'}, { 'id': 2, 'text': 'false'}],
    //     'answer': 1
    // }, {
    //     'id': 9,  
    //     'question': 'let a = { a: 1 };<br>let b = { a: 1 };<br>let c = a;<br><br>console.log(a === b);<br>console.log(a === c);',
    //     'answers': [{ 'id': 1, 'text': 'true // true'}, { 'id': 2, 'text': 'false // true'}],
    //     'answer': 2
    // }, {
    //     'id': 10,  
    //     'question': 'console.log(!!0);<br>console.log(!!1);<br>console.log(!![].length);',
    //     'answers': [{ 'id': 1, 'text': 'true // true // false' }, { 'id': 2, 'text': 'false // true // false' }, { 'id': 3, 'text': 'true // true // true'}],
    //     'answer': 2

    // }
    // , { 
    //     'id': 11,
    //     'question': 'Чему равен х?<br>let x = 5;<br>x = (x++ , x = addFive(x), x *= 2, x -= 5, x += 10);<br>function addFive(num) {<br>return num + 5;<br>}',
    //     'answers': [{'id': 1, 'text': '-5'}, {'id': 2, 'text': '22'}, {'id': 3, 'text': '27'}],
    //     'answer': 3
    // }, {
    //     'id': 12,
    //     'question': 'Что выведет консоль?<br>console.log(y);<br>y = 1;<br>console.log(y);<br>console.log(greet("Mark"));<br><br>function greet(name){<br>return \'Hello \' + name + \'!\';<br>}<br><br>var y;',
    //     'answers': [{ 'id': 1, 'text': 'undefined, 1, Hello Mark!'}, { 'id': 2, 'text': 'Hello Mark!, undefined, 1'}, { 'id': 3, 'text': '1, undefined, Hello Mark!'}],
    //     'answer': 1
    // }, {
    //     'id': 13,
    //     'question': 'Cколько фаз имеет Execution Context у Hoisting?',
    //     'answers': [{ 'id': 1, 'text': '1'}, { 'id': 2, 'text': '2'}, { 'id': 3, 'text': '3'}],
    //     'answer': 2
    //     // compilation and execution.????
    //             //сверила ответы до этого пункта
    // }, {
    //     'id': 14,
    //     'question': 'function myFavoriteFunc(a) {<br />if (true) {<br />var b = "Hello " + a;<br />}<br />return b;<br />}<br />myFavoriteFunc("World");<br />console.log(a); <br />console.log(b); ',
    //     'answers': [{ 'id': 1, 'text': 'a is not defined'}, { 'id': 2, 'text': 'Hello World'}],
    //     'answer': 1




    // // }, {
    // //     'id': 15,
    // //     'question': '',
    // //     'answers': [{ 'id': 1, 'text': ''}, { 'id': 2, 'text': ''}],
    // //     'answer': 0
    // // }, {
    // //     'id': 15,
    // //     'question': '',
    // //     'answers': [{ 'id': 1, 'text': ''}, { 'id': 2, 'text': ''}],
    // //     'answer': 0
    // // }, {
    // //     'id': 15,
    // //     'question': '',
    // //     'answers': [{ 'id': 1, 'text': ''}, { 'id': 2, 'text': ''}],
    // //     'answer': 0
    // // }, {
    // //     'id': 15,
    // //     'question': '',
    // //     'answers': [{ 'id': 1, 'text': ''}, { 'id': 2, 'text': ''}],
    // //     'answer': 0
    }
]