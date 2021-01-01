import render from './filter/filterView.js';
import arr from './data.js';
import * as storage from './storage.js';

const app = document.getElementById('app');
const a = document.getElementsByClassName('radio-block__real');
const buttonNext = document.getElementsByClassName('button--next');


let index = 0;
render(arr[0], arr.length, index);

//Массив с ответами пользователя
let answersData = [];

buttonNext.disabled = 'true';

const data = [];
localStorage.setItem('TestJS', JSON.stringify(data));


app.addEventListener('click', function (event) {   
    let target = event.target;
   
    if (target.closest('label')) {
        buttonNext.disabled = 'false';
    }

    if (target.hasAttribute("data-next") ) {
        //собрать данные с предыдущего ответа
        gettingInputData([...a], app);
    }
    if (target.hasAttribute("data-prev")) {
        //index надо брать из номера вопроса, например
    //     app.innerHTML = '';
        let itemId = document.querySelector('#hidden').innerText;
            console.log(itemId);
    //     render(arr[index - 1], arr.length, (index - 1));
    //     index = index - 1;
    //     //перезаписать локал сторидж
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
            let b = getInput(index, item.value);
            data.push(b);

            localStorage.setItem('TestJS', JSON.stringify(data));

            if (index < (arr.length - 1)) {
                page.innerHTML = '';
                index = index + 1;
                render(arr[index], arr.length, index);
            } else {
                page.innerHTML = 'Спасибо!<br><br>';

                //Получить данные из LS и сравнить массив из LS с массивом arr ( из data)
                answersData = JSON.parse(localStorage.getItem('TestJS'));

               //Рендерится текст вопроса, на который дан неправильный ответ 
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].answer != answersData[i].answer) {
                        let j = (arr[i].answers).findIndex(item => item.id === arr[i].answer);
                        page.insertAdjacentHTML('beforeend', `<b>Ответ ${(answersData[i].id + 1)}  - неправильный</b><br><br><i>Вопрос: </i>${arr[i].question}<br><br><i>Правильный ответ: </i>${arr[i].answers[j].text}<br><br>`);
                    }
                } 
            }
        }
    });
}



