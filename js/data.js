export default [
    // 'id': 0,
    //         'question': 'console.log(false && 1 && []);<br>console.log(\" \" && true && 5);',
    //         'answers': [{'id': 1, 'text': 'logs false<br>logs 5'}, {'id': 2, 'text':'logs false 1 []<br>logs \" \" true 5'}],
    //         'answer': 1


    { 
        'id': 0,
        'question': 'Что выведут следующие строки?<br>console.log(false && 1 && []); // console.log(\" \" && true && 5);',
        'answers': [{'id': 1, 'text': 'logs false // logs 5'}, {'id': 2, 'text':'logs false 1 [] // logs \" \" true 5'}],
        'answer': 1
    },{
        'id': 1,
        'question': 'Что выведут следующие строки?<br>console.log(null == undefined); // console.log(null === undefined);',
        'answers': [{'id': 1, 'text': 'logs true // logs true'}, {'id': 2, 'text': 'logs true // logs false'}],
        'answer': 1
    },
    {
        'id': 2,
        'question': 'Что выведет строка console.log(null || 1 || undefined); ?',
        'answers': [{'id': 1, 'text': 'logs 1'}, {'id': 2, 'text': 'logs undefined'}, {'id': 3, 'text': 'logs null'}],
        'answer': 0
    },
    {
        'id': 3,
        'question': 'Is using the + or unary plus operator the fastest way in converting a string to a number?',
        'answers': [{ 'id': 1, 'text': 'no' }, { 'id': 2, 'text': 'yes'}],
        'answer': 1
    },
    {
        'id': 4,
        'question': 'What is the DOM?',
        'answers': [{ 'id': 1, 'text': 'Document Object Model is an interface (API) for HTML and XML documents.' }, { 'id': 2, 'text': 'Document Origin Mode'}],
        'answer': 0
    },
    {
        'id': 5,    
        'question': 'How many phases does Event Propagation have?',
        'answers': [{ 'id': 1, 'text': '3'}, { 'id': 2, 'text': '1'}, { 'id': 3, 'text': '2'}],
        'answer': 0
    }, {
        'id': 6,  
        'question': 'On which element will be event.target if button clicked?<br><div class="div-1" onclick="clickFunc(event)" style="text-align: center;margin:15px;<br><div class = "div-2"><br><button>Button</button></div><br></div>',
        'answers': [{ 'id': 1, 'text': 'div-1'}, {'id': 2, 'text': 'div-2'}, {'id': 3, 'text': 'button'}],
        'answer': 2
    }, {
        'id': 7,  
        'question': 'On which element will be event.currentTarget if button clicked?<br><div class="div-1" onclick="clickFunc(event) style="text-align: center; margin: 5px; border: 1px solid red;"<br><div class = "div-2" style="margin: 5px; border:1px solid royalblue;"><br><button style="margin:10px">Button</button></div><br></div>',
        'answers': [{ 'id': 1, 'text': 'div-1' }, { 'id': 2, 'text': 'div-2' }, { 'id': 3, 'text': 'button' }],
        'answer': 0
    }, {
        'id': 8,  
        'question': 'let x = undefined;<br>let y = null;<br>console.log(x == y);',
        'answers': [{ 'id': 1, 'text': 'true'}, { 'id': 2, 'text': 'false'}],
        'answer': 0
    }, {
        'id': 9,  
        'question': 'let a = { a: 1 };<br>let b = { a: 1 };<br>let c = a;<br><br>console.log(a === b);<br>console.log(a === c);',
        'answers': [{ 'id': 1, 'text': 'logs true // logs true'}, { 'id': 2, 'text': 'logs false // logs true'}],
        'answer': 1
    }, {
        'id': 10,  
        'question': 'console.log(!!0);<br>console.log(!!1);<br>console.log(!![].length);',
        'answers': [{ 'id': 1, 'text': 'logs true // logs true // logs false' }, { 'id': 2, 'text': 'logs false // logs true // logs false' }, { 'id': 3, 'text': 'logs true // logs true // logs true'}],
        'answer': 1
    }
    , { 
        'id': 11,
        'question': 'Чему равен х?<br>let x = 5;<br>x = (x++ , x = addFive(x), x *= 2, x -= 5, x += 10);<br>function addFive(num) {<br>return num + 5;<br>}',
        'answers': [{'id': 1, 'text': '-5'}, {'id': 1, 'text': '22'}, {'id': 1, 'text': '27'}],
        'answer': 2
    }, {
        'id': 12,
        'question': 'Что выведет консоль?<br>console.log(y);<br>y = 1;<br>console.log(y);<br>console.log(greet("Mark"));<br><br>function greet(name){<br>return \'Hello \' + name + \'!\';<br>}<br><br>var y;',
        'answers': [{ 'id': 1, 'text': 'undefined, 1, Hello Mark!'}, { 'id': 2, 'text': 'Hello Mark!, undefined, 1'}, { 'id': 3, 'text': '1, undefined, Hello Mark!'}],
        'answer': 0
    }, {
        'id': 13,
        'question': 'Execution Context у Hoisting сколько фаз имеет?',
        'answers': [{ 'id': 1, 'text': '1'}, { 'id': 2, 'text': '2'}, { 'id': 3, 'text': '3'}],
        'answer': 1
        // compilation and execution.
    // }, {
    //     'id': 14,
    //     'question': '',
    //     'answers': [{ 'id': 1, 'text': ''}, { 'id': 2, 'text': ''}],
    //     'answer': 0
    // }, {
    //     'id': 15,
    //     'question': '',
    //     'answers': [{ 'id': 1, 'text': ''}, { 'id': 2, 'text': ''}],
    //     'answer': 0
    // }, {
    //     'id': 15,
    //     'question': '',
    //     'answers': [{ 'id': 1, 'text': ''}, { 'id': 2, 'text': ''}],
    //     'answer': 0
    // }, {
    //     'id': 15,
    //     'question': '',
    //     'answers': [{ 'id': 1, 'text': ''}, { 'id': 2, 'text': ''}],
    //     'answer': 0
    // }, {
    //     'id': 15,
    //     'question': '',
    //     'answers': [{ 'id': 1, 'text': ''}, { 'id': 2, 'text': ''}],
    //     'answer': 0
    }
]