import render from './filter/filterView.js';
import arr from './data.js';
// import arr from './data-test.js';

const app = document.getElementById('app');
const a = document.getElementsByClassName('radio-block__real');
const buttonNext = document.getElementsByClassName('button--next');

const wrongAnswers = [];
let index = 0;
//Массив с ответами пользователя
let answersData = [];

render(arr[0], arr.length, 0, true);
buttonNext.disabled = 'true';
buttonNext[0].style.background = 'rgb(239, 239, 239)';

app.addEventListener('change', function (event) {
    console.log('ok');
    let input = event.target;
    let newAnswer = getInput(index, input.value);
    answersData = answersData.filter(item => item.id != newAnswer.id);
    // отфильтрует массив - вернет массив с items которые не равны этому id
    // newAnswer должен заменить такой же id в answersData

    answersData.push(newAnswer);
    // console.log(newAnswer.id);
    console.log(answersData);
    // console.log(result);
})

app.addEventListener('click', function (event) {
    let target = event.target;

    if (target.closest('label')) {
        buttonNext.disabled = 'false';
        buttonNext[0].style.background = '#09ac0c';
    }

    if (target.hasAttribute("data-next")) {
        //собрать данные с предыдущего ответа
        gettingInputData([...a], app);

    }

    // let itemId = document.querySelector('#hidden').innerText;
    let itemId = document.getElementById('card').getAttribute('data-card');

    if (target.hasAttribute("data-prev") && itemId != 0) {
        app.innerHTML = '';
        let prevItemId = itemId - 1;
        let prevItemAnswer = answersData[prevItemId].answer;
        index = prevItemId;
        render(arr[prevItemId], arr.length, prevItemId, false, prevItemAnswer);
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
            console.log(answersData);
            page.innerHTML = '';
            if (index < (arr.length - 1)) {
                index = index + 1;
                render(arr[index], arr.length, index, true);
            } else {
                page.insertAdjacentHTML('beforeend', `<p>Спасибо!</p>`);

                //Рендерится текст вопроса, на который дан неправильный ответ 
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].answer != answersData[i].answer) {
                        let j = (arr[i].answers).findIndex(item => item.id === arr[i].answer);
                        wrongAnswers.push(j);
                        page.insertAdjacentHTML('beforeend', `<b>Ответ ${(answersData[i].id + 1)}  - неправильный</b><br><i>Вопрос: </i>${arr[i].question}<br><i>Правильный ответ: </i>${arr[i].answers[j].text}<br><br>`);
                    }
                }

                if (!wrongAnswers.length) {
                    page.innerHTML = '<p>Спасибо!</p>Поздравляем! Вы правильно ответили на все вопросы.<br><br>';
                }
            }
        }
    });
}
