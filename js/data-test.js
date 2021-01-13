export default [{
        'question': 'Что выведут следующие строки?<br>console.log(false && 1 && []); // console.log(\" \" && true && 5);',
        'answers': [{
            'id': 1,
            'text': 'false // 5'
        }, {
            'id': 2,
            'text': 'false 1 [] // \" \" true 5'
        }],
        'answer': 1
        // returns the first falsy expression or the last expression
    }, {
        'question': 'Что выведут следующие строки?<br>console.log(null == undefined); // console.log(null === undefined);',
        'answers': [{
            'id': 1,
            'text': 'true // true'
        }, {
            'id': 2,
            'text': 'true // false'
        }],
        'answer': 2
    },
    {
        'question': 'Что выведет строка console.log(null || 1 || undefined); ?',
        'answers': [{
            'id': 1,
            'text': '1'
        }, {
            'id': 2,
            'text': 'undefined'
        }, {
            'id': 3,
            'text': 'null'
        }],
        'answer': 1
    }
]