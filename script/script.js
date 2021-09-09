document.addEventListener('DOMContentLoaded', function () { 
  const btnOpenModal = document.querySelector('#btnOpenModal');
  const modalBLock = document.querySelector('#modalBlock');
  const closeModal = document.querySelector('#closeModal');
  const questionTitle = document.querySelector('#question');
  const formAnswers = document.querySelector('#formAnswers');
  const nextButton = document.querySelector('#next');
  const prevButton = document.querySelector('#prev');

  const questions = [
    {
        "question": "Какого цвета бургер?",
        "answers": [
            {
                "title": "Стандарт",
                "url": "./image/burger.png"
            },
            {
                "title": "Черный",
                "url": "./image/burgerBlack.png"
            }
        ],
        "type": "radio"
    },
    {
        "question": "Из какого мяса котлета?",
        "answers": [
            {
                "title": "Курица",
                "url": "./image/chickenMeat.png"
            },
            {
                "title": "Говядина",
                "url": "./image/beefMeat.png"
            },
            {
                "title": "Свинина",
                "url": "./image/porkMeat.png"
            }
        ],
        "type": "radio"
    },
    {
        "question": "Дополнительные ингредиенты?",
        "answers": [
            {
                "title": "Помидор",
                "url": "./image/tomato.png"
            },
            {
                "title": "Огурец",
                "url": "./image/cucumber.png"
            },
            {
                "title": "Салат",
                "url": "./image/salad.png"
            },
            {
                "title": "Лук",
                "url": "./image/onion.png"
            }
        ],
        "type": "checkbox"
    },
    {
        "question": "Добавить соус?",
        "answers": [
            {
                "title": "Чесночный",
                "url": "./image/sauce1.png"
            },
            {
                "title": "Томатный",
                "url": "./image/sauce2.png"
            },
            {
                "title": "Горчичный",
                "url": "./image/sauce3.png"
            }
        ],
        "type": "radio"
    }
  ];

  btnOpenModal.addEventListener('click', () => {
    modalBLock.classList.add('d-block');
    playTest();
  });

  closeModal.addEventListener('click', () => {
    modalBLock.classList.remove('d-block');
  });

  const playTest = () => {
    let numberQuestion = 0;
    // Render Answers
    const renderAnswers = (index) => {
      questions[index].answers.forEach((answer, i) => {
        const answerItem = document.createElement('div');
        answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
        answerItem.innerHTML = `
          <input type="${questions[index].type}" id="answerItem${i}" name="answer" class="d-none">
          <label for="answerItem${i}" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src="${answer.url}" alt="Бургер: ${answer.title}">
            <span>${answer.title}</span>
          </label>
        `;
        
        formAnswers.appendChild(answerItem);
      });
    };
    // Render Question
    const renderQuestions = (indexQuestion) => {
      formAnswers.innerHTML = '';
      questionTitle.textContent = `${questions[indexQuestion].question}`;
      renderAnswers(indexQuestion);
      console.log(numberQuestion);
      numberQuestion > 0 ? prevButton.style.display = 'block' : prevButton.style.display = 'none';
      numberQuestion < questions.length-1 ? nextButton.style.display = 'block' : nextButton.style.display = 'none';
    }

    renderQuestions(numberQuestion);

    nextButton.addEventListener('click', () => {
      numberQuestion < questions.length-1 ? numberQuestion++ : numberQuestion;
      renderQuestions(numberQuestion);
    });
    prevButton.addEventListener('click', () => {
      numberQuestion > 0 ? numberQuestion-- : numberQuestion;
      renderQuestions(numberQuestion);
    });
  };
});

