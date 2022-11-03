// import * as data from '../data.js';
export default function render(item, arrayLength, i, flag, userAnswer) {
    function renderAnswers(answers) {
        let answersArr = answers.map(function (answer) {
            return `<label class="radio-block">
                        <input
                            type="radio"
                            name = "answerText"
                            class="radio-block__real"
                            value = "${answer.id}"
                        />
                        <div class="radio-block__fake"></div>
                        <div class="radio-block__text">
                            ${answer.text}
                        </div>
                    </label>`
        });

        return answersArr.join("");
    };

    function renderCheckedAnswers(answers) {
        let answersArr = answers.map(function (answer) {
           
            return `<label class="radio-block">
                        <input
                            type="radio"
                            name = "answerText"
                            class="radio-block__real"
                            value = "${answer.id}"
                            ${answer.id == userAnswer ? 'checked' : ''}
                        />
                        <div class="radio-block__fake"></div>
                        <div class="radio-block__text">
                            ${answer.text}
                        </div>
                    </label>`
        });

        return answersArr.join("");
    };

    const markup = `
        <div class="plate" id="card" data-card="${i}">
            <div class="plate-header">
                <div class="plate-header__icon">
                    <img src="img/icons/list.png" alt="Icon" />
                </div>
                <div class="plate-header__title">
                    Ваш уровень знания JS // Вопрос: ${i + 1} из ${arrayLength}
                </div>
            </div>
            <div class="plate-content">
               
                <h2 class="title-main" data-question>${item.question}</h2>
                <div class="radio-group">${flag ? renderAnswers(item.answers) : renderCheckedAnswers(item.answers)}</div>
            </div>
            <div class="plate-footer">
                <div class="plate-footer__buttons">
                    
                    <button val="index" class="button button--next" data-next>Далее</button>
                    <div id="showAnswer">
                        <button val="index" class="button button--answer" data-showAnswer>Показать ответ</button>
                        <div class="cheat">Номер ответа: ${item.answer}</div>
                    </div>

                </div>
            </div>
        </div>
        `;
    // 
    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
    // <button class="button button--back" data-prev>Назад</button>
}