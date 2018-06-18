window.onload = function() {
  let tabs = document.querySelectorAll(".info-header-tab"); //заголовки табов
  let tabsWrapper = document.querySelector(".info-header"); //обертка хедеров табов
  let contents = document.querySelectorAll(".info-tabcontent");

  tabsWrapper.addEventListener("click", e => {
    if (e.target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        contents[i].classList.remove("show");
        if (e.target === tabs[i]) {
          tabs[i].classList.add("active");
          contents[i].classList.add("show");
        }
      }
    }
  });

  //timer
  let deadline = "2018-06-16";
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000;
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor(t / (1000 * 60 * 60));
    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  let zeros = digit => {
    if (digit < 10) {
      digit = "0" + digit;
    }
    return digit;
  };
  let setClock = (id, endtime) => {
    let timer = document.getElementById(id);
    let hours = timer.querySelector(".hours");
    let minutes = timer.querySelector(".minutes");
    let seconds = timer.querySelector(".seconds");

    let updateClock = () => {
      let t = getTimeRemaining(endtime);
      hours.innerHTML = zeros(t.hours);
      minutes.innerHTML = zeros(t.minutes);
      seconds.innerHTML = zeros(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
      }
    };
    let timeInterval = setInterval(updateClock, 1000);

    updateClock();
  };
  setClock("timer", deadline);

  //усложненное задание
  let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.5; // скорость, может иметь дробное значение через точку
  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].onclick = () => {
      let link = linkNav[i];
      let w = window.pageYOffset, //отступ сверху
        hash = link.href.replace(/[^#]*(.*)/, "$1"); //меняем местами
      (t = document.querySelector(hash).getBoundingClientRect().top),
        (start = null);
      let step = time => {
        if (start === null) start = time;
        let progress = time - start,
          r =
            t < 0
              ? Math.max(w - progress / V, w + t)
              : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      };
      false;
      requestAnimationFrame(step);
    };
  }
  //HomeWork 9
  //Modal
  let more = document.querySelector(".more");
  let info = document.querySelector(".info");
  let desc = document.querySelectorAll(".description-btn");
  let overlay = document.querySelector(".overlay");
  let close = document.querySelector(".popup-close");
  more.addEventListener("click", () => {
    more.classList.add("more-splash");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  info.addEventListener("click", e => {
    let target = e.target;
    if (target.classList.contains("description-btn")) {
      //this.classList.add('more-splash');
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
  close.addEventListener("click", () => {
    overlay.style.display = "none";
    close.classList.remove("more-splash");
    document.body.style.overflow = "";
  });

  //HW11
  let message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "что пошло не так";

  let form = document.getElementsByClassName('main-form')[0];
  let input = form.getElementsByTagName('input');
  let statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  form.addEventListener('submit', function(e){
    event.preventDefault();
    form.appendChild(statusMessage);
  });
  //AJAX
  let request = new XMLHttpRequest();
  request.open("POST", "server.php");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let formData = new FormData(form);

  request.send(formData);

  request.onreadystatechange = function(){
    if(request.readyState < 4){
      statusMessage.innerHTML = message.loading;
    } else if(request.readyState === 4){
      if(request.status === 200 && request.status < 300){
        statusMessage.innerHTML = message.success;
        //можно  добавлять контент
      } else {
        statusMessage.innerHTML = message.failure;
      }
    }
  }
  for(let i = 0; i < input.length; i++){
    input[i].value = '';// ощищаем поля ввода
  }
  //Скрипт к контактной форме
  let contactForm = document.getElementById('form');
  let contactInput = contactForm.getElementsByTagName('input');
  let statusMessageCF = document.createElement('div');
  statusMessageCF.classList.add('status');
  let formDataCF = new FormData(contactForm);
  contactForm.addEventListener('submit', function(e){
    event.preventDefault();
    form.appendChild(statusMessageCF);
  });
  //AJAX for contact form
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "server.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(formDataCF);

  xhr.onreadystatechange = function(){
    if(xhr.readyState < 4){
      statusMessageCF.innerHTML = message.loading;
    } else if(xhr.readyState === 4){
      if(xhr.status === 200 && xhr.status < 300){
        statusMessageCF.innerHTML = message.success;
      } else {
        statusMessageCF.innerHTML = message.failure;
      }
    }
  };
  for(let i = 0; i < contactInput.length; i++){
    contactInput[i].value = '';// ощищаем поля ввода
  }

  
};
