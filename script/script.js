'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modal = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const [firstBurgerImage, firstNameBurger] = ['./image/burger.png"', 'Стандарт']
    const [secondBurgerImage, secondNameBurger] = ['./image/burgerBlack.png', 'Черный']

    btnOpenModal.addEventListener('click', () => {
        modal.classList.add('d-block');
        playTest();
    })

    closeModal.addEventListener('click', () => {
        modal.classList.remove('d-block');
    })

    const playTest = () => {
        const renderQuestions = () => {
            questionTitle.textContent = 'Какого цвета бургер вы хотите?';
            formAnswers.innerHTML = `
            <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${firstBurgerImage}" alt="burger">
                  <span>${firstNameBurger}</span>
                </label>
              </div>
              <div class="answers-item d-flex justify-content-center">
                <input type="radio" id="answerItem2" name="answer" class="d-none">
                <label for="answerItem2" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${secondBurgerImage}" alt="burger">
                  <span>${secondNameBurger}</span>
                </label>
              </div>
              `;

        }
        renderQuestions()
    }

})

