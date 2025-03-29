const container = document.getElementById('quiz-container');
const quizData = [
  {
    question: 'What is the capital of France ?',
    answer: 'Peris',
    options: ['Delhi', 'New York', 'Jakarta', 'Peris']
  },
  {
    question: 'Who is the Prime Minister of India ?',
    answer: 'Mr. Modi',
    options: ['Mr. Modi', 'Trump', 'Netnyahu', 'Jelensiki']
  },
  {
    question: 'Which country has more population in the world ?',
    answer: 'India',
    options: ['India', 'Australia', 'France', 'Pakistan']
  }
];
let quizElements = [];
quizData.map((quiz, index) => {
  const divElement = document.createElement('div');
  let paraElement = document.createElement('p');
  paraElement.innerHTML = `[${index + 1}]: ${quiz.question}`;
  divElement.appendChild(paraElement);
  quiz.options.map((opt, optIndex) => {
    const inputElement = document.createElement('input');
    inputElement.type = 'radio';
    inputElement.value = opt;
    inputElement.name = `question-${index}`;
    inputElement.id = `qustion-${index}-${optIndex}`;

    const labelElement = document.createElement('label');
    labelElement.htmlFor = inputElement.id;
    labelElement.textContent = `${optIndex + 1}: ${opt}`;
    divElement.appendChild(inputElement);
    divElement.appendChild(labelElement);
  });
  quizElements.push(divElement);
});

quizElements.map((divElements) => {
  container.appendChild(divElements);
});
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
submitButton.style.marginTop = '24px';
container.appendChild(submitButton);
submitButton.onclick = () => {
  const totalQuestions = quizElements.length;
  let trueAnswers = 0;
  const result = document.createElement('p');
  const inputEl = document.getElementsByTagName('input');
  for (let i = 0; i < inputEl.length; i++) {
    if ((inputEl[i].type = 'radio')) {
      if (inputEl[i].checked) {
        quizData.map((data) => {
          if (inputEl[i].value === data.answer) {
            const labelColor = document.querySelector(
              `label[for=${inputEl[i].id}]`
            );
            labelColor.style.color = 'green';
            trueAnswers += 1;
          } else {
            const labelColor = document.querySelector(
              `label[for=${inputEl[i].id}]`
            );
            labelColor.style.color = 'red';
          }
        });
        result.textContent = `${trueAnswers} out of ${totalQuestions}`;
        container.appendChild(result);
      }
    }
  }
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Start Again';
  container.appendChild(resetButton);
  resetButton.onclick = () => {
    location.reload();
  };
};
