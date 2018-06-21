function ajax(){
let message = new Object();
message.loading = "Загрузка...";
message.success = "Спасибо! Скоро мы с вами свяжемся";
message.failure = "что пошло не так";

let form = document.getElementsByClassName("main-form")[0];
let input = form.getElementsByTagName("input");
let statusMessage = document.createElement("div");
statusMessage.classList.add("status");

form.addEventListener("submit", function(e) {
  event.preventDefault();
  form.appendChild(statusMessage);

  //AJAX
  let request = new XMLHttpRequest();
  request.open("POST", "server.php");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let formData = new FormData(form);

  request.send(formData);

  request.onreadystatechange = function() {
    if (request.readyState < 4) {
      statusMessage.innerHTML = message.loading;
    } else if (request.readyState === 4) {
      if (request.status === 200 && request.status < 300) {
        statusMessage.innerHTML = message.success;
        //можно  добавлять контент
      } else {
        statusMessage.innerHTML = message.failure;
      }
    }
  };

  for (let i = 0; i < input.length; i++) {
    input[i].value = ""; // ощищаем поля ввода
  }
});

//Скрипт к контактной форме
let message1 = new Object();
message1.loading = "Загрузка...";
message1.success = "Спасибо! Скоро мы с вами свяжемся";
message1.failure = "Недостаточно данных";
let contactForm = document.getElementById("form");
let contactInput = contactForm.getElementsByTagName("input");
let statusMessageCF = document.createElement("div");
statusMessageCF.classList.add("status");
let formDataCF = new FormData(contactForm);

contactForm.addEventListener("submit", function(e) {
  event.preventDefault();
  contactForm.appendChild(statusMessageCF);
  //AJAX for contact form
  let request1 = new XMLHttpRequest();
  request1.open("POST", "server.php");
  request1.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  request1.send(formDataCF);

  request1.onreadystatechange = function() {
    if (request1.readyState < 4) {
      statusMessageCF.innerHTML = message1.loading;
    } else if (request1.readyState === 4) {
      if (request1.status === 200 && request1.status < 300) {
        statusMessageCF.innerHTML = message1.success;
      } else {
        statusMessageCF.innerHTML = message1.failure;
      }
    }
  };
  for (let i = 0; i < contactInput.length; i++) {
    contactInput[i].value = ""; // ощищаем поля ввода
  }
});
}
module.exports = ajax;