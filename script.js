// 打字效果
const text = "Mechanical Engineering | Robotics | Laser & Sensor Research";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text[index];
    index++;
    setTimeout(typeEffect, 70);
  }
}

typeEffect();

// 滑動到指定區塊
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Email 顯示 (避免爬蟲直接抓)
const email = "qaz789222@email.com";
document.getElementById("email").textContent = email;

// 複製 Email
function copyEmail() {
  navigator.clipboard.writeText(email);
  alert("Email 已複製: " + email);
}