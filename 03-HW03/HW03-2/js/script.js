window.onload = function(){
	//1
	let str = 'урок-3-был слишком легким';
	let upperString = str.charAt(0).toUpperCase() + str.slice(1);
	document.write(upperString + '<br>');
	console.log(upperString);//Урок-3-был слишком легким

	//2
	let newStr = upperString.replace(/-/ig,' ');
	document.write(newStr + '<br>');
	console.log(newStr);//Урок 3 был слишком легким

	//3
	let slicedString = newStr.slice(-6);
	let changed =slicedString.slice(0, 4) + 'о';
	document.write(changed + '<br>');
	console.log(changed);//легко

	//4
	let arr = [20, 33, 1, 'Человек', 2, 3];
	for(let i = 0; i < arr.length; i++){
		
		if(typeof(arr[i]) === 'number'){
			arr[i] = Math.pow(arr[i], 3);
		}
		else if (typeof(arr[i]) !== 'number'){
			arr.splice(i, 1);
			i--;
		}
		
	}
	let sum = 0;
	for(let j = 0; j < arr.length; j++){
		
		sum += arr[j];
	}
	let res = Math.sqrt(sum);
	
	document.write('Сумма всех элементов массива: ' + sum + '<br>');
	document.write('Квадратный корень из суммы элементов массива: ' + res + '<br>');
	console.log('Сумма всех элементов массива: ' + sum);
	console.log('Квадратный корень из суммы элементов массива: ' + res);

	//5 Тут мне понадобилась помощь поисковика
	function getMaxLengthString(str){
		if (typeof str !== 'string') {//все, что не строка
			return false;
			console.log('Введите строковый тип данных');
		}else {
			while (str.substring(0, 1) == ' '){
				str = str.substring(1, str.length);
			}
			while(str.substring(str.length - 1, str.length) == ' '){
				str = str.substring(0, str.length - 1);
			}

			if (str.length > 50) {
				str = str.slice(0, 50) + '...';
			}
			return str;
		}
			
		
	}
	console.log(getMaxLengthString('qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm'));
	console.log(getMaxLengthString(55));
	

}
	
	
	