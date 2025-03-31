import { ButtonOption } from "../components/ButtonOption.js";
import { ButtonSubmit } from "../components/ButtonSubmit.js";

let optionButtons = []; // 存储选项按钮，避免重复创建
let nextButton = null; // 存储 Next 按钮，避免重复创建
let flag = 0;
function playAgain() {
  localStorage.removeItem("quizProgress");
  document.getElementById("quiz-results").style.display = "none";
  document.getElementById("quizCompleted").style.display = "none";
  window.location.reload();
}

export function startquiz(questionsByCategory, quizProgress, icons) {
  const questions = questionsByCategory.questions;

  if (quizProgress.currentQuestionIndex >= questions.length) {
    // **显示结果**
    document.getElementById("quizCompleted").style.display = "block";
    document.getElementById("quiz-results").style.display = "flex";
    document.getElementById("question").style.display = "none";
    document.getElementById("question-options").style.display = "none";
    document.getElementById("score").textContent = quizProgress.correctAnswers;
    document.getElementById("category").textContent =
      quizProgress.currentCategory;
    document.getElementById("icon").innerHTML =
      icons[quizProgress.currentCategory];

    const playAgainButton = new ButtonSubmit(
      "Play Again",
      "var(--Purple600)",
      playAgain
    );
    const buttonElement = playAgainButton.render(); // 确保 render 完成
    document.getElementById("quiz-results").appendChild(buttonElement);
    return;
  }

  const questionData = questions[quizProgress.currentQuestionIndex];

  // **更新题目文本**
  document.getElementById("question-text").textContent = questionData.question;
  document.getElementById("question-index").textContent = `Question ${
    quizProgress.currentQuestionIndex + 1
  } of ${questions.length}`;

  const optionIds = ["A", "B", "C", "D"];

  // **创建或更新选项按钮**
  if (optionButtons.length === 0) {
    optionIds.forEach((id, index) => {
      const button = new ButtonOption(
        id,
        questionData.options[index],
        "var(--Grey50)",
        handleOptionClick
      );
      button.attachTo("#" + id);
      optionButtons.push(button);
    });
  } else {
    optionButtons.forEach((button, index) => {
      const spans = button.element.querySelectorAll("span");
      if (spans.length > 1) {
        spans[1].textContent = questionData.options[index]; // 修改第二个 span 的文本
      }
    });
  }

  function handleOptionClick(event) {
    const spans = event.target.querySelectorAll("span");
    if (spans[1] && flag === 0) {
      console.log(flag);
      console.log("选择了:", spans[1].textContent);
      let selectedOption = spans[1].textContent; // 获取第二个 <span> 的文本内容
      let correctOption = questionData.answer;
      console.log("正确答案:", correctOption);

      if (selectedOption === correctOption) {
        quizProgress.correctAnswers++;
        localStorage.setItem("quizProgress", JSON.stringify(quizProgress));
      } else {
        event.target.classList.add("btn-wrong");
      }
    }
    flag = 1;
  }

  // **下一题按钮逻辑**
  function nextQuestion() {
    flag = 0;
    quizProgress.currentQuestionIndex++;
    localStorage.setItem("quizProgress", JSON.stringify(quizProgress));
    startquiz(questionsByCategory, quizProgress, icons);
  }

  if (!nextButton) {
    nextButton = new ButtonSubmit(
      "Next Question",
      "var(--Purple600)",
      nextQuestion
    );
    nextButton.attachTo("#question-options");
  }
}
