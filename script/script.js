'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const btnOpenModal = document.querySelector('#btnOpenModal');
  const modal = document.querySelector('#modalBlock');
  const closeModal = document.querySelector('#closeModal');
  const questionTitle = document.querySelector('#question');
  const formAnswers = document.querySelector('#formAnswers');
  const sendButton = document.querySelector('#send');
  const answerEnd = document.querySelector('.modal-title');
  const [firstBurgerImage, firstNameBurger] = [
    './image/burger.png"',
    'Стандарт',
  ];
  const [secondBurgerImage, secondNameBurger] = [
    './image/burgerBlack.png',
    'Черный',
  ];
  const nextButton = document.querySelector('#next');
  const prevButton = document.querySelector('#prev');

  const questions = [
    {
      question: 'Какого цвета бургер?',
      answers: [
        {
          title: 'Стандарт',
          url: './image/burger.png',
        },
        {
          title: 'Черный',
          url: './image/burgerBlack.png',
        },
      ],
      type: 'radio',
    },
    {
      question: 'Из какого мяса котлета?',
      answers: [
        {
          title: 'Курица',
          url: './image/chickenMeat.png',
        },
        {
          title: 'Говядина',
          url: './image/beefMeat.png',
        },
        {
          title: 'Свинина',
          url: './image/porkMeat.png',
        },
      ],
      type: 'radio',
    },
    {
      question: 'Дополнительные ингредиенты?',
      answers: [
        {
          title: 'Помидор',
          url: './image/tomato.png',
        },
        {
          title: 'Огурец',
          url: './image/cucumber.png',
        },
        {
          title: 'Салат',
          url: './image/salad.png',
        },
        {
          title: 'Лук',
          url: './image/onion.png',
        },
      ],
      type: 'checkbox',
    },
    {
      question: 'Добавить соус?',
      answers: [
        {
          title: 'Чесночный',
          url: './image/sauce1.png',
        },
        {
          title: 'Томатный',
          url: './image/sauce2.png',
        },
        {
          title: 'Горчичный',
          url: './image/sauce3.png',
        },
      ],
      type: 'radio',
    },
  ];

  btnOpenModal.addEventListener('click', () => {
    modal.classList.add('d-block');
    playTest();
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('d-block');
  });

  const playTest = () => {
    const finalAnswers = [];

    let numberQuestion = 0;

    const renderAnswers = (answer) => {
      questions[answer].answers.forEach((answer, item) => {
        const answerItem = document.createElement('div');
        answerItem.classList.add(
          'answers-item',
          'd-flex',
          'justify-content-center'
        );
        answerItem.innerHTML = `
                <input type="${questions[item].type}" id="${answer.title}" name="answer" class="d-none" value="${answer.title}">
                <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${answer.url}" alt="burger">
                  <span>${answer.title}</span>
                </label>
                `;
        formAnswers.appendChild(answerItem);
      });
    };

    const renderQuestions = (indexQuestion) => {
      formAnswers.innerHTML = '';

      switch (true) {
        case numberQuestion === 0:
          questionTitle.textContent = `${questions[indexQuestion].question}`;
          renderAnswers(indexQuestion);

          nextButton.classList.remove('d-none');
          prevButton.classList.remove('d-none');
          sendButton.classList.add('d-none');
          prevButton.classList.add('d-none');

          break;

        case numberQuestion >= 0 && numberQuestion <= questions.length - 1:
          questionTitle.textContent = `${questions[indexQuestion].question}`;
          renderAnswers(indexQuestion);

          nextButton.classList.remove('d-none');
          prevButton.classList.remove('d-none');
          sendButton.classList.add('d-none');
          break;

        case numberQuestion === questions.length:
          questionTitle.textContent = 'Введите ваш номер для связи:';
          nextButton.classList.add('d-none');
          prevButton.classList.add('d-none');
          sendButton.classList.remove('d-none');
          formAnswers.innerHTML = `
          <div class="form-group">
            <label for="numberPhone">Введите ваш телефон</label>
            <input type="phone" class="form-control" id="numberPhone">
          </div>
        `;
          break;

        case numberQuestion === questions.length + 1:
          questionTitle.textContent = 'Успех!';
          answerEnd.textContent = '';
          sendButton.classList.add('d-none');
          formAnswers.textContent = 'Спасибо за ваш заказ! Мы вам перезвоним.';
          setTimeout(() => {
            modal.classList.remove('d-block');
          }, 2000);
          break;
      }

      // if (numberQuestion >= 0 && numberQuestion <= questions.length - 1) {
      //   questionTitle.textContent = `${questions[indexQuestion].question}`;
      //   renderAnswers(indexQuestion);

      //   nextButton.classList.remove('d-none');
      //   prevButton.classList.remove('d-none');
      //   sendButton.classList.add('d-none');
      // }

      // if (numberQuestion === 0) {
      //   prevButton.classList.add('d-none');
      // }

      // if (numberQuestion === questions.length) {
      //   questionTitle.textContent = 'Введите ваш номер для связи:';
      //   nextButton.classList.add('d-none');
      //   prevButton.classList.add('d-none');
      //   sendButton.classList.remove('d-none');
      //   formAnswers.innerHTML = `
      //     <div class="form-group">
      //       <label for="numberPhone">Введите ваш телефон</label>
      //       <input type="phone" class="form-control" id="numberPhone">
      //     </div>
      //   `;
      // }

      // if (numberQuestion === questions.length + 1) {
      //   questionTitle.textContent = 'Успех!';
      //   answerEnd.textContent = '';
      //   sendButton.classList.add('d-none');
      //   formAnswers.textContent = 'Спасибо за ваш заказ! Мы вам перезвоним.';
      //   setTimeout(() => {
      //     modal.classList.remove('d-block');
      //   }, 2000);
      // }
    };

    renderQuestions(numberQuestion);

    const checkAnswer = () => {
      const obj = {};

      const inputs = [...formAnswers.elements].filter(
        (input) => input.checked || input.id === 'numberPhone'
      );

      inputs.forEach((input, index) => {
        numberQuestion >= 0 && numberQuestion <= questions.length - 1
          ? (obj[`${index}: ${questionTitle.textContent}`] = input.value)
          : (obj['Номер телефона'] = input.value);
      });

      finalAnswers.push(obj);
    };

    nextButton.onclick = () => {
      checkAnswer();
      numberQuestion++;
      renderQuestions(numberQuestion);
    };

    prevButton.onclick = () => {
      numberQuestion--;
      renderQuestions(numberQuestion);
    };

    sendButton.addEventListener('click', () => {
      checkAnswer();
      numberQuestion++;
      renderQuestions(numberQuestion);
      console.log(finalAnswers);
    });
  };
});
