'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modal = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const [firstBurgerImage, firstNameBurger] = ['./image/burger.png"', 'Стандарт'];
    const [secondBurgerImage, secondNameBurger] = ['./image/burgerBlack.png', 'Черный'];
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');

    const questions = [
      {
          question: "Какого цвета бургер?",
          answers: [
              {
                  title: 'Стандарт',
                  url: './image/burger.png'
              },
              {
                  title: 'Черный',
                  url: './image/burgerBlack.png'
              }
          ],
          type: 'radio'
      },
      {
          question: "Из какого мяса котлета?",
          answers: [
              {
                  title: 'Курица',
                  url: './image/chickenMeat.png'
              },
              {
                  title: 'Говядина',
                  url: './image/beefMeat.png'
              },
              {
                  title: 'Свинина',
                  url: './image/porkMeat.png'
              }
          ],
          type: 'radio'
      },
      {
          question: "Дополнительные ингредиенты?",
          answers: [
              {
                  title: 'Помидор',
                  url: './image/tomato.png'
              },
              {
                  title: 'Огурец',
                  url: './image/cucumber.png'
              },
              {
                  title: 'Салат',
                  url: './image/salad.png'
              },
              {
                  title: 'Лук',
                  url: './image/onion.png'
              }
          ],
          type: 'checkbox'
      },
      {
          question: "Добавить соус?",
          answers: [
              {
                  title: 'Чесночный',
                  url: './image/sauce1.png'
              },
              {
                  title: 'Томатный',
                  url: './image/sauce2.png'
              },
              {
                  title: 'Горчичный',
                  url: './image/sauce3.png'
              }
          ],
          type: 'radio'
      }
  ];
  
    btnOpenModal.addEventListener('click', () => {
        modal.classList.add('d-block');
        playTest();
    })

    closeModal.addEventListener('click', () => {
        modal.classList.remove('d-block');
    })

   

    const playTest = () => {

    let numberQuestion = 0;

        const renderAnswers = (answer) => {
          questions[answer].answers.forEach((answer, item) => {
            const answerItem = document.createElement('div');
                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
                answerItem.innerHTML = `
                <input type="${questions[item].type}" id="${answer.title}" name="answer" class="d-none">
                <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${answer.url}" alt="burger">
                  <span>${answer.title}</span>
                </label>
                `;
                formAnswers.appendChild(answerItem);

                numberQuestion === 0 ? prevButton.classList.add('d-none') :  prevButton.classList.remove('d-none');
                
                numberQuestion === questions.length - 1 ? nextButton.classList.add('d-none') : nextButton.classList.remove('d-none');
          })
        }

        const renderQuestions = (indexQuestion) => {
            formAnswers.innerHTML = '';
            questionTitle.textContent = `${questions[indexQuestion].question}`;

            renderAnswers(indexQuestion);
        }

        renderQuestions(numberQuestion); 

      

        nextButton.onclick = () => {
          numberQuestion === 0 ? prevButton.classList.add('d-none') :  prevButton.classList.remove('d-none');
          numberQuestion++;
          renderQuestions(numberQuestion);
        }
    
        prevButton.onclick = () => {
          numberQuestion--;
          renderQuestions(numberQuestion);
        }
    }
})

