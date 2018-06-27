//console.log('Проект');
//1
let openStore = document.getElementById('open-btn');
//2
let name 	  = document.getElementsByClassName('name')[0];
let nameValue = document.getElementsByClassName('name-value')[0];

let budget      = document.getElementsByClassName('budget')[0];
let budgetValue = document.getElementsByClassName('budget-value')[0];

let goods      = document.getElementsByClassName('goods')[0];
let goodsValue = document.getElementsByClassName('goods-value')[0];

let items      = document.getElementsByClassName('items')[0];
let itemsValue = document.getElementsByClassName('items-value')[0];

let employers      = document.getElementsByClassName('employers')[0];
let employersValue = document.getElementsByClassName('employers-value')[0];

let discount      = document.getElementsByClassName('discount')[0];
let discountValue = document.getElementsByClassName('discount-value')[0];

let isopen      = document.getElementsByClassName('isopen')[0];
let isopenValue = document.getElementsByClassName('isopen-value')[0];
//3
let chooseGoods = document.querySelector('.choose-goods');
//4
let goodsItemBtn     = document.getElementsByTagName('button')[0];
let countBudgetBtn   = document.getElementsByTagName('button')[1];
let hireEmployersBtn = document.getElementsByTagName('button')[2];

//5
let goods1 = document.querySelector('#goods_1');
let goods2 = document.querySelector('#goods_2');
let goods3 = document.querySelector('#goods_3');
let goods4 = document.querySelector('#goods_4');

let chooseItems = document.querySelector('#items');//??

let time = document.querySelector('#time');

let dayBudget = document.querySelector('#budget');
//6
let hireEmployers = document.querySelectorAll('.hire-employers-item');