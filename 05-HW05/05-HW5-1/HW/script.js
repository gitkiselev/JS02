window.onload = function(){
	//1
console.log('Проверка');
let menu = document.querySelector('.menu');
let fifth = document.createElement('li');
fifth.classList.add('menu-item');
fifth.textContent ='Пятый пункт';
menu.appendChild(fifth);
//2
document.body.style.backgroundImage = "url('./img/apple_true.jpg')";
//3
document.getElementById('title').textContent = 'Мы продаем только подлинную технику Apple';
//4
let adv = document.querySelector('.adv');
adv.parentNode.removeChild(adv);
//5
let likeApple = prompt('Ваше отношение к технике Apple?', '');
let answer = document.querySelector('.prompt');
answer.textContent = likeApple;
}


