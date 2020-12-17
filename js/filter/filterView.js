// import * as data from '../data.js';

export default function render(item, arrayLength, i) {
    function renderAnswers(answers) {
        let answersArr = answers.map(function (answer) {
            return `<label class="radio-block">
                        <input
                            type="radio"
                            name = "answerText"
                            class="radio-block__real"
                            value="${answer.id}"
                        />
                        <div class="radio-block__fake"></div>
                        <div class="radio-block__text">
                            ${answer.text}
                        </div>
                    </label>`
        });
        return answersArr;  
    };
    const markup = `
        <div class="plate" data-card="2">
            <div class="plate-header">
                <div class="plate-header__icon">
                    <img src="img/icons/list.png" alt="Icon" />
                </div>
                <div class="plate-header__title">
                    Ваш уровень знания JS // Вопрос: ${i + 1} из ${arrayLength}
                </div>
            </div>
            <div class="plate-content">
                <div class="hidden">${item.id}</div>
                <h2 class="title-main" data-question>${item.question}</h2>
                <div class="radio-group">${renderAnswers(item.answers)}</div>
            </div>
            <div class="plate-footer">
                <div class="plate-footer__buttons">
                    <button class="button button--back" data-nav="prev">Назад</button>
                    <button val="index" class="button button--next" data-next>Далее</button>

                </div>
            </div>
        </div>
        `;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}