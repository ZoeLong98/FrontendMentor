export class ButtonSubmit {
  constructor(text, bgColor = "white", onclick = null) {
    this.text = text;
    this.bgColor = bgColor;
    this.onclick = onclick;
    this.element = document.createElement("button");
  }
  render() {
    this.element.onclick = this.onclick;
    this.element.classList.add("btn-submit", "btn-primary");
    this.element.style.backgroundColor = this.bgColor;

    const textSpan = document.createElement("span");
    textSpan.classList.add("TextPreset4");
    textSpan.style.color = "var(--White)";
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
}
