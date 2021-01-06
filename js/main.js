import render from './filter/filterView.js';
import arr from './data.js';

const app = document.getElementById('app');
const a = document.getElementsByClassName('radio-block__real');
const buttonNext = document.getElementsByClassName('button--next');
const wrongAnswers = [];
let index = 0;
//Массив с ответами пользователя
let answersData = [];

//cущности из реального мира соотносятся с сущностями из кода 

render(arr[0], arr.length, index);
buttonNext.disabled = 'true';
// buttonNext.setAttribute("style", "background-color: blue");
// buttonNext.setAttribute("style", "background: blue");
// debugger
buttonNext[0].style.background = 'rgb(239, 239, 239)';

app.addEventListener('click', function (event) {   
    let target = event.target;
   
    if (target.closest('label')) {
        buttonNext.disabled = 'false';
        // buttonNext.setAttribute("style", "background-color: blue");
        // buttonNext.setAttribute("style", "background: blue");
        buttonNext[0].style.background = '#09ac0c';
    }

    if (target.hasAttribute("data-next") ) {
        //собрать данные с предыдущего ответа
        gettingInputData([...a], app);
    }

    // let itemId = document.querySelector('#hidden').innerText;
    let itemId = document.querySelector('#card').getAttribute('data-card');
  
    if (target.hasAttribute("data-prev") && itemId != 0) {
        //index надо брать из номера вопроса, например
    //     app.innerHTML = '';

            console.log(itemId);
    //     render(arr[index - 1], arr.length, (index - 1));
    //     index = index - 1;
    //     //перезаписать массив ответов пользователя
    // как сюда подставить чекнутый чекбокс ?
    // filter(){  }
console.log([...a]);
    // const result = [...a].filter(item => item.value == );

    // console.log(result);
    // пройтись по массиву инпутов и тому, кто с value = item.value из testJS проставить property checked true
    }
});

//собрать данные с предыдущего ответа 
function getInput(index, answer) {
    return {
        id: index,
        answer: answer
    }
};

function gettingInputData(array, page) {
    array.forEach(item => {
        if (item.checked) {
            let newAnswer = getInput(index, item.value);
            answersData.push(newAnswer);
            page.innerHTML = '';
            if (index < (arr.length - 1)) {
                index = index + 1;
                render(arr[index], arr.length, index);
            } else {
               //Рендерится текст вопроса, на который дан неправильный ответ 
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].answer != answersData[i].answer) {
                        let j = (arr[i].answers).findIndex(item => item.id === arr[i].answer);
                        wrongAnswers.push(j);
                        page.insertAdjacentHTML('beforeend', `<b>Ответ ${(answersData[i].id + 1)}  - неправильный</b><br><i>Вопрос: </i>${arr[i].question}<br><i>Правильный ответ: </i>${arr[i].answers[j].text}<br><br>`);
                    }
                }

                if (!wrongAnswers.length) {
                    page.innerHTML = 'Поздравляем! Вы правильно ответили на все вопросы.<br><br>';
                } 
            }
        }
    });
}

//1. поставить CY
//2. написать такой текст, чтобы кликал на верное/неверное поле





