
	console.log('Проект');
	//1
	let openStore = document.getElementById('open-btn');
	//2
	//let name 	  = document.getElementsByClassName('name')[0];
	let nameValue = document.getElementsByClassName('name-value')[0];

	//let budget      = document.getElementsByClassName('budget')[0];
	let budgetValue = document.getElementsByClassName('budget-value')[0];

	//let goods      = document.getElementsByClassName('goods')[0];
	let goodsValue = document.getElementsByClassName('goods-value')[0];

	//let items      = document.getElementsByClassName('items')[0];
	let itemsValue = document.getElementsByClassName('items-value')[0];

	//let employers      = document.getElementsByClassName('employers')[0];
	let employersValue = document.getElementsByClassName('employers-value')[0];

	//let discount      = document.getElementsByClassName('discount')[0];
	let discountValue = document.getElementsByClassName('discount-value')[0];

	//let isopen      = document.getElementsByClassName('isopen')[0];
	let isopenValue = document.getElementsByClassName('isopen-value')[0];
	//3
	let chooseGoods      = document.querySelector('.choose-goods');
	let chooseItem       = document.querySelector('.choose-item');
	let timeValue        = document.querySelector('.time-value');
	let countBudgetValue = document.querySelector('.count-budget-value');
	let goodsItem        = document.getElementsByClassName('goods-item');
	//4
	let goodsItemBtn     = document.getElementsByTagName('button')[1];
	let countBudgetBtn   = document.getElementsByTagName('button')[2];
	let hireEmployersBtn = document.getElementsByTagName('button')[3];

	//5
	let goods1 = document.querySelector('#goods_1');
	let goods2 = document.querySelector('#goods_2');
	let goods3 = document.querySelector('#goods_3');
	let goods4 = document.querySelector('#goods_4');
	

	let allBtns = document.getElementsByTagName('button');
	let inputs = document.querySelectorAll('input[type=text]');
	for(let i = 1; i < allBtns.length; i++){
		let btn = allBtns[i];
		btn.disabled = true;
	}

	
	//6
	let hireEmployersItem = document.querySelectorAll('.hire-employers-item');//поле ввода сотрудников
	
	let money,
		price,
		discountSystem

		let mainList = {
		budget: money,
		dailyBudget: money / 30,
		storeName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		shopItems: []
	};
		function readonlyFields (){
			for(let i = 0; i < inputs.length; i++){
				let input = inputs[i];
				input.readOnly = true;
			}
		}
		function notReadonlyFields(){
			for(let i = 0; i < inputs.length; i++){
				let input = inputs[i];
				input.readOnly = false;
			}
		}
		if(mainList.open == false){
			readonlyFields();
		}
	openStore.addEventListener('click', () => {
		
		money = prompt('Ваш бюджет на месяц?');
		while (isNaN(money) || money == '' || money == null || money < '1'){
			money = prompt('Ваш бюджет на месяц?');
		}	
		budgetValue.textContent = money;
		nameValue.textContent = prompt('Название вашего магазина?', '').toUpperCase();
		discountSystem = confirm('Вы покупали ранее товар на сумму свыше 30000 рублей?');
		notReadonlyFields();
		countBudgetValue.readOnly = true;//всегда readonly
		openStore.textContent = 'Магазин открыт';
		openStore.style.backgroundColor = 'green';
		
		if(discountSystem){
			mainList.discount = true;
			discountValue.style.backgroundColor = 'green';
		} else {
			mainList.discount = false;
			discountValue.style.backgroundColor = 'red';
		}
		
	});

		
	goodsItemBtn.addEventListener('click', () => {
		for (let i = 0; i < goodsItem.length; i++){
				let a = goodsItem[i].value;
				mainList.shopGoods[i] = a;
					if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
						console.log('Все верно');
						mainList.shopGoods[i] = a;
						goodsValue.textContent = mainList.shopGoods;
					}else{
						console.log('else block error');
						i--;
					}	
		}
	});
	chooseItem.addEventListener('change', () => {
		let items = chooseItem.value;
			if(isNaN(items) && items != ''){
				mainList.shopItems = items.split(',');
				mainList.shopItems.sort();
				itemsValue.textContent = mainList.shopItems;
			}		
	});





	timeValue.addEventListener('change', function(){
		let time = timeValue.value;
		
		if (time < 0){
				console.log('Такого не может быть');
				mainList.open = false;
				
		} else if (time > 8 && time < 20){
				console.log ('Время работать!');
				mainList.open = true;
		} else if (time < 24){
				console.log('Уже слишком поздно');
				mainList.open = false;
				
		}	else {
				console.log('В сутках только 24 часа!');
		}
		if(mainList.open == true){
			isopenValue.style.backgroundColor = 'green';
			notReadonlyFields();
		} else{
			isopenValue.style.backgroundColor = 'red';
			readonlyFields();
		}
	});	


	countBudgetBtn.addEventListener('click', () => {
		countBudgetValue.value = money / 30;
	});

	
	//1 Усложненное задание
	hireEmployersBtn.addEventListener('click', () => {
		for (let i = 0; i < hireEmployersItem.length; i++){
				let name = hireEmployersItem[i].value;
				name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();//делаем имя работника с заглавной буквы, а остальные прописными
				mainList.employers[i] = name;
				employersValue.textContent += mainList.employers[i] + ', ';	
				name = hireEmployersItem[i].value = '';//очищаем поля после клика
				hireEmployersBtn.disabled = true;//снова делаем кнопку ненажимаемой
			}
	});
		
		
	
	
	function isDiscount() {
		if(mainList.discount == false){
			price = price;
			console.log('У вас нет скидки');
		} else {
			price = price * 0.8;
			console.log('Ваша скидка 20%');
		}

	}
		

	countBudgetBtn.disabled = true;
	openStore.addEventListener('click', () => {
		countBudgetBtn.disabled = false;
	});
	
	function checkFields(){
		let gi1 = document.getElementById('goods_1');
		let gi2 = document.getElementById('goods_2');
		let gi3 = document.getElementById('goods_3');
		let gi4 = document.getElementById('goods_4');
		if(gi1.value != '' || gi2.value != '' || gi3.value != '' || gi4.value != ''){
			goodsItemBtn.disabled = false;
		}else {
			goodsItemBtn.disabled = true;
		}
	
	
	}
	function checkFieldsEmp(){
		let he1 = document.getElementById('employers_1');
		let he2 = document.getElementById('employers_2');
		let he3 = document.getElementById('employers_3');
		console.log('checkFieldsEmp');
			if(he1.value != '' || he2.value != '' || he3.value != ''){
				hireEmployersBtn.disabled = false;
			}else {
				hireEmployersBtn.disabled = true;
			}
	}
	


	//2 Усложненное задание
	for(let i = 0; i < hireEmployersItem.length; i++){
		let input = hireEmployersItem[i];
		let value = input.value;
		input.addEventListener('input', (e) => {
			
			let newValue = e.target.value;

				if( newValue.match(/[^А-ЯЁ]/i)) {
				     input.value = value;
				     return;
				}
			  	value = newValue;
			
		});
	}
	
	
	
	
	
	
	
	

	