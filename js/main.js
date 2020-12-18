import render from './filter/filterView.js';
import arr from './data.js';
import * as storage from './storage.js';

let index = 0;
render(arr[0], arr.length, index);
const a = document.getElementsByClassName('radio-block__real');
const buttonNext = document.getElementsByClassName('button--next');
buttonNext.disabled = 'true';

const data = [];

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
const app = document.getElementById('app');

app.addEventListener('click', function (event) {
   
    let target = event.target;
   
    if (target.closest('label')) {
        buttonNext.disabled = 'false';
    }
    if (target.hasAttribute("data-next") ) {
    
        //собрать данные с предыдущего ответа 
        
        gettingInputData([...a], app);
    }
})

function gettingInputData(array, page) {
    array.forEach(item => {
        if (item.checked) {
            // item.style.backgroundColor = "blue";
            // console.log(item);
            let b = getInput(index, item.value);
            data.push(b);

            localStorage.setItem('TestJS', JSON.stringify(data));
            // addItem({b});
            if (index < (arr.length - 1)) {
                page.innerHTML = '';
                index = index + 1;
                render(arr[index], arr.length, index);
            } else {
                page.innerHTML = 'Спасибо!<br><br>';

                array.forEach(item => {
                    item = new Answer(item.id, item.answer);
                    answersArr.push(item);
                })
                data.forEach(item => {
                    item = new Answer(item.id, +(item.answer));
                    answersData.push(item);
                })

                for (var i = 0; i < answersArr.length; i++) {
                    if (answersArr[i].answer != answersData[i].answer) {
                        page.insertAdjacentHTML('beforeend', `Ответ ${(answersData[i].id + 1)}  - неправильный<br>`);
                        //при клике рендерится текст вопроса, на который дан неправильный ответ
                    }
                }
            }
        }
    });
}



