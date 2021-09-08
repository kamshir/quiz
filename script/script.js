document.addEventListener('DOMContentLoaded', function () { 
  const btnOpenModal = document.querySelector('#btnOpenModal');
  const modalBLock = document.querySelector('#modalBlock');
  const closeModal = document.querySelector('#closeModal');
  const questionTitle = document.querySelector('#question');
  const formAnswers = document.querySelector('#formAnswers');

  btnOpenModal.addEventListener('click', () => {
    modalBLock.classList.add('d-block');
    playTest();
  });

  closeModal.addEventListener('click', () => {
    modalBLock.classList.remove('d-block');
  });

  const playTest = () => {
    const renderQuestions = () => {
      questionTitle.textContent = 'Какого цвета бургер вы хотите?';

      let burger = 'Стандарт';
      let image = 'burger.png';

      formAnswers.innerHTML = `
        <div class="answers-item d-flex flex-column">
          <input type="radio" id="answerItem1" name="answer" class="d-none">
          <label for="answerItem1" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src="./image/${image}" alt="Бургер: ${burger}">
            <span>${burger}</span>
          </label>
        </div>
      `;
    }
    renderQuestions();
  };
});

