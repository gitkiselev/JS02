let money,
	name,
	time,
	price,
	emp,
	items

	function start(){
		money = prompt('Ваш бюджет на месяц?');	
	    name  = prompt('Название вашего магазина?', '').toUpperCase();

	    time = 21;
	}
	//start();
	function getDailyBudget(){
		money = prompt('Ваш бюджет на месяц?');
		while (isNaN(money) || money == '' || money == null || money < '1'){
				money = prompt('Ваш бюджет на месяц?', '');
			}
		let dailyBudget = money/30;
		console.log(dailyBudget);
	}
	getDailyBudget();
	let mainList = {
		budget: money,
		storeName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		shopItems: [],
		chooseGoods: function chooseGoods(){
			for (let i = 0; i < 5; i++){
				let a = prompt('Какой тип  товара будем продавать?', '');
				mainList.shopGoods[i] = a;
					if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
						console.log('Все верно');
						mainList.shopGoods[i] = a;
					}else{
						console.log('else block error');
						i--;
					}	
			}
		},
		workTime: function workTime(time) {
			if (time < 0){
				console.log('Такого не может быть');
			} else if (time > 8 && time < 20){
				console.log ('Время работать!');
				mainList.open = true;
			} else if (time < 24){
				console.log('Уже слишком поздно');
			} else {
				console.log('В сутках только 24 часа!');
			}
		},
		dayBudget: function dayBudget(){
			alert('Ежедневный бюджет: ' + mainList.budget/30);
		},
		makeDiscount: function makeDiscount(){
			if(mainList.discount == false){
				price = price;
				console.log('У вас нет скидки');
			} else {
				price = price * 0.8;
				console.log('Ваша скидка 20%');
			}

		},
		hireEmployers: function hireEmployers(){
			for (let i = 0; i < 4; i++){
				let emp = prompt('Введите имя работника', '');
				mainList.employers[i] = emp;
				emp = emp.charAt(0).toUpperCase() + emp.slice(1).toLowerCase();//делаем имя работника с заглавной буквы, а остальные прописными
					if ((typeof(emp)) === 'string' && (typeof(emp)) !== null && emp !== '' && emp.length < 50) {
						console.log('Работник добавлен');
						mainList.employers[i] =  i+1 + ' - '  + emp;//тут без скобок норм оаботает
					}else{
						console.log('else block error');
						i--;
					}	
			}
		},
		chooseShopItems: function chooseShopItems(){
			let items = prompt('Перечислите через запятую товары', '');
			mainList.shopItems = items.split(',');
			mainList.shopItems.push(prompt('Подождите, еще ', ''));
			mainList.shopItems.sort();
			mainList.shopItems.forEach(function(item, i, arr){
				document.write('У нас вы можете купить: ' + (i+1) +' ' + item +'<br>');//без скобок не правильно работает счетчик
			});
		}

	};
	for(key in mainList){
		console.log('Наш магазин включает в себя: ' + key);
	}
	console.log(mainList);
	console.log();
	
	

	
