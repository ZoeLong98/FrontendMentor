import { ButtonOption } from "../components/ButtonOption.js";
import { startquiz } from "./quiz.js";

let quizProgress = JSON.parse(localStorage.getItem("quizProgress"));
let icons = {};
let questions = JSON.parse(sessionStorage.getItem("questions")); // 先检查缓存

if (!quizProgress) {
  quizProgress = {
    currentCategory: "",
    currentQuestionIndex: 0,
    correctAnswers: 0,
    history: {
      HTML: 0,
      JavaScript: 0,
      CSS: 0,
      Accessibility: 0,
    },
  };
  localStorage.setItem("quizProgress", JSON.stringify(quizProgress));
} else {
  console.log("Loaded quizProgress from localStorage:", quizProgress);
}

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM fully loaded and parsed");

  await loadIcons(); // 先加载 SVG 图标
  await loadQuestions(); // 加载问题数据

  if (quizProgress.currentCategory === "") {
    setupButtons();
  } // 设置按钮
  else {
    checkQuizProgress();
  }
  // 检查是否需要恢复进度
});

// **检查并恢复 Quiz 进度**
function checkQuizProgress() {
  if (quizProgress.currentCategory !== "") {
    console.log("恢复上次的进度:", quizProgress);
    const questionsByCategory = questions.quizzes.find(
      (quiz) => quiz.title === quizProgress.currentCategory
    );
    // 隐藏欢迎界面
    document.getElementById("welcome").style.display = "none";
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("question-options").style.display = "flex";

    startquiz(questionsByCategory, quizProgress, icons);
  }
}

// **加载问题数据**
async function loadQuestions() {
  if (!questions) {
    try {
      const response = await fetch("./data.json");
      if (!response.ok) throw new Error(`数据加载失败: ${response.status}`);
      questions = await response.json();
      sessionStorage.setItem("questions", JSON.stringify(questions)); // 存入缓存
      console.log("数据加载成功:", questions);
    } catch (error) {
      console.error("获取数据失败:", error);
    }
  }
}

// **设置按钮**
function setupButtons() {
  const html = new ButtonOption(
    icons.HTML,
    "HTML",
    "var(--Orange50)",
    handleCategoryChange
  );
  const js = new ButtonOption(
    icons.JavaScript,
    "JavaScript",
    "var(--Blue50)",
    handleCategoryChange
  );
  const css = new ButtonOption(
    icons.CSS,
    "CSS",
    "var(--Green100)",
    handleCategoryChange
  );
  const accessibility = new ButtonOption(
    icons.Accessibility,
    "Accessibility",
    "var(--Purple100)",
    handleCategoryChange
  );

  html.attachTo("#HTML");
  js.attachTo("#JavaScript");
  css.attachTo("#CSS");
  accessibility.attachTo("#Accessibility");
}

// **开始 Quiz**
function handleCategoryChange(event) {
  if (!questions) {
    console.warn("数据尚未加载完成，请稍后重试");
    return;
  }

  const category = event.target.parentElement.id;
  console.log("选择的类别:", category);

  quizProgress.currentCategory = category;
  localStorage.setItem("quizProgress", JSON.stringify(quizProgress));

  const questionsByCategory = questions.quizzes.find(
    (quiz) => quiz.title === category
  );
  if (!questionsByCategory) {
    console.error("未找到匹配的题目:", category);
    return;
  }

  // 隐藏欢迎界面
  document.getElementById("welcome").style.display = "none";
  document.getElementById("main-menu").style.display = "none";

  startquiz(questionsByCategory, quizProgress);
  window.location.reload();
}

// **加载 SVG 图标**
async function loadIcons() {
  const iconPaths = {
    HTML: "./assets/images/icon-html.svg",
    JavaScript: "./assets/images/icon-js.svg",
    CSS: "./assets/images/icon-css.svg",
    Accessibility: "./assets/images/icon-accessibility.svg",
  };

  try {
    const iconPromises = Object.entries(iconPaths).map(async ([key, path]) => {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`无法加载 ${path}`);
      icons[key] = await response.text();
    });

    await Promise.all(iconPromises);
    console.log("所有 SVG 加载完成:", icons);
  } catch (error) {
    console.error("加载 SVG 失败:", error);
  }
}
