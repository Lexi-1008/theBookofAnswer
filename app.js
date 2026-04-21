const ANSWER_IMAGE_COUNT = 340;

const views = {
  intro: document.getElementById("view-intro"),
  ask: document.getElementById("view-ask"),
  result: document.getElementById("view-result")
};

const goToAsk = document.getElementById("go-to-ask");
const questionForm = document.getElementById("question-form");
const questionInput = document.getElementById("question-input");
const resultQuestion = document.getElementById("result-question");
const resultImage = document.getElementById("result-image");
const askAgain = document.getElementById("ask-again");

function showView(name) {
  Object.values(views).forEach((view) => view.classList.remove("active"));
  views[name].classList.add("active");
}

function randomAnswerImage() {
  const index = Math.floor(Math.random() * ANSWER_IMAGE_COUNT) + 1;
  return `resources/${index}.jpeg`;
}

goToAsk.addEventListener("click", () => {
  showView("ask");
  questionInput.focus();
});

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (!question) return;

  const image = randomAnswerImage();
  resultQuestion.textContent = "“"+question+"”";
  resultImage.src = image;
  resultImage.hidden = false;
  resultImage.onerror = () => {
    resultImage.hidden = true;
  };
  resultImage.onload = () => {
    resultImage.hidden = false;
  };
  questionInput.value = "";
  showView("result");
});

askAgain.addEventListener("click", () => {
  showView("ask");
  questionInput.focus();
});
