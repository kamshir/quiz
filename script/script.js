// Total Listener
document.addEventListener('DOMContentLoaded', function () { 
  const btnOpenModal = document.querySelector('#btnOpenModal');
  const modalBLock = document.querySelector('#modalBlock');
  const closeModal = document.querySelector('#closeModal');
  const questionTitle = document.querySelector('#question');
  const formAnswers = document.querySelector('#formAnswers');
  const nextButton = document.querySelector('#next');
  const prevButton = document.querySelector('#prev');
  const sendButton = document.querySelector('#send');

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
    const finalAnswers = [];
    let numberQuestion = 0;
    // Render Answers
    const renderAnswers = (index) => {
      questions[index].answers.forEach((answer, i) => {
        const answerItem = document.createElement('div');
        answerItem.classList.add('answers-item', 'd-flex', 'justify-content-center');
        answerItem.innerHTML = `
          <input type="${questions[index].type}" id="answerItem${i}" name="answer" class="d-none" value="${answer.title}">
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
      if (numberQuestion >= 0 && numberQuestion <= questions.length - 1){
        questionTitle.textContent = `${questions[indexQuestion].question}`;
        renderAnswers(indexQuestion);
        nextButton.classList.remove('d-none');
        prevButton.classList.remove('d-none');
        sendButton.classList.add('d-none');
      }

      if (numberQuestion === 0){
        prevButton.classList.add('d-none');
      }

      if (numberQuestion === questions.length){
        nextButton.classList.add('d-none');
        prevButton.classList.add('d-none');
        sendButton.classList.remove('d-none');
        questionTitle.textContent = `Напишите свой номер телефона, чтобы заказать бургер прямо сейчас`;
        formAnswers.innerHTML = `
          <div class="form-group">
            <label for="numberPhone">Телефон</label>
            <input type="phone" class="form-control" id="numberPhone" placeholder="Ваш номер телефона">
          </div>
        `;
      }

      if (numberQuestion === questions.length + 1){
        formAnswers.textContent = 'Спасибо за пройденный тест';
        questionTitle.textContent = ``;
        sendButton.classList.add('d-none');
        setTimeout(() => {
          modalBLock.classList.remove('d-block');
        }, 2000);
      }
    }

    renderQuestions(numberQuestion);

    const checkAnswer = () => {
      console.log('check');

      const obj = {};

      const inputs = [...formAnswers.elements].filter(input => input.checked || input.id === 'numberPhone');

      inputs.forEach((input, index) => {
        if (numberQuestion >= 0 && numberQuestion <= questions.length - 1){
          obj[`${index}_${questions[numberQuestion].question}`] = input.value;
        }

        if (numberQuestion === questions.length){
          obj['Номер телефона'] = input.value;
        }
      });

      finalAnswers.push(obj);
    }

    nextButton.addEventListener('click', () => {
      checkAnswer();
      numberQuestion++;
      renderQuestions(numberQuestion);
    });
    prevButton.addEventListener('click', () => {
      numberQuestion--;
      renderQuestions(numberQuestion);
    });
    sendButton.addEventListener('click', () => {
      checkAnswer();
      numberQuestion++;
      renderQuestions(numberQuestion);
      console.log(finalAnswers);
    })
  };
});

