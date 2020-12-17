import render from './filter/filterView.js';
import arr from './data.js';
import * as storage from './storage.js';

let index = 0;
render(arr[0], arr.length, index);

// expressionNumber.innerText = `Слово: ${currentQuestionIndex + 1} из ${data.length}`;

//проверить! что она должна быть пустая??
let data = [];

localStorage.setItem('TestJS', JSON.stringify(data));
// storage.set('jsQuestions', data);


// const Question = function ( id, answer ) {

//     this.id = id;
//     // this.question = question;
//     this.answer = answer;
// }

// function addItem({answer}) {
//     let newItem = new Question(answer);
//     data.push(newItem);
//     // storage.set('data', data);
//     localStorage.setItem('TestJS', JSON.stringify(data));
// }



function addItem({item}) {
//     let newItem = new Question(answer);
// debugger
    data.push(item);
//     // storage.set('data', data);
    localStorage.setItem('TestJS', JSON.stringify(data));
}

//собрать данные с предыдущего ответа 
const Answer = function (id, answer) {
    this.id = id;
    // this.question = question;
    this.answer = answer;
};

function getInput(index, answer) {
    return {
        id: index,
        answer: answer
    }
}

//сравнить два массива
let answersArr = [];
let answersData = [];

document.getElementById('app').addEventListener('click', function (event) {
    let target = event.target;
    if (target.hasAttribute("data-next") ) {

        //собрать данные с предыдущего ответа 
        let a = document.getElementsByClassName('radio-block__real');
        
        [...a].forEach(item => {
            if (item.checked) {
                console.log(item);
                let b = getInput(index, item.value);
                // console.log(index);
  
                data.push(b);
 
                localStorage.setItem('TestJS', JSON.stringify(data));
                // addItem({b});
            }
        });
        
        if (index < (arr.length - 1)) {
            this.innerHTML = '';
            index = index + 1;
            render(arr[index], arr.length, index);
        } else {
            this.innerHTML = 'Спасибо!<br><br>';

            arr.forEach(item => {
                item = new Answer(item.id, item.answer);
                // newItem;
                answersArr.push(item);
            })
            data.forEach(item => {
                item = new Answer(item.id, +(item.answer));
                answersData.push(item);
            })

            for (var i = 0; i < answersArr.length; i++) {
                if (answersArr[i].answer != answersData[i].answer) {
                    console.log(`Ответ ${(answersData[i].id + 1)}  - неправильный`);
                    this.insertAdjacentHTML('beforeend', `Ответ ${(answersData[i].id + 1)}  - неправильный<br>`);
                    //при клике рендерится текст вопроса, на который дан неправильный ответ
                }
            }
        }
    }
})



