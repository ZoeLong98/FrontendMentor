export class ButtonOption {
  constructor(option, text, bgColor = "white", onclick = null) {
    this.option = option;
    this.text = text;
    this.bgColor = bgColor;
    this.onclick = onclick;
    this.element = document.createElement("button");
  }
  render() {
    this.element.onclick = this.onclick;
    this.element.classList.add("btn");

    const optionSpan = document.createElement("span");
    optionSpan.style.backgroundColor = this.bgColor;
    optionSpan.classList.add("TextPreset4");
    optionSpan.classList.add("btn-icon");
    optionSpan.style.color = "var(--Grey500)";
    optionSpan.style.textAlign = "left";
    optionSpan.innerHTML = this.option; // 允许 HTML 或 SVG
    this.element.appendChild(optionSpan);

    const textSpan = document.createElement("span");
    textSpan.classList.add("TextPreset4");
    textSpan.style.color = "var(--Blue900)";
    textSpan.textContent = this.text;
    this.element.appendChild(textSpan);

    return this.element; // 返回 DOM 元素
  }
  attachTo(target) {
    const container = document.querySelector(target);
    if (container) {
      container.appendChild(this.render()); // 插入到指定的 DOM
    } else {
      console.error("目标容器不存在！");
    }
  }
  updateText(newText) {
    console.log("更新按钮文本:", newText);
    this.text = newText;

    // 同步更新到按钮的 DOM 元素
    if (this.element) {
      this.element.textContent = newText;
    }
  }
}
