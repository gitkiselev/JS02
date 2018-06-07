//console.log('Проверка');
//1 and 2

function zeros(digit){
	if(digit < 10){
		digit = '0' + digit;
	}
	return digit;
}
function showDate(){
	let currentDate = new Date();
	let hours   = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
	let day     = currentDate.getDay();
	let month   = currentDate.getMonth() + 1;
	let year    = currentDate.getFullYear();
	let out     = document.getElementById('out');
	out.innerHTML = zeros(hours) +":" + zeros(minutes) +":"+
 	zeros(seconds) + ' ' + zeros(day) +"." + zeros(month) +"." + year;;
 	setTimeout(function() {//для красоты сделал setTimeout
    	showDate()
	}, 1000);
}
showDate();
//3
let today = new Date();




//.toLocaleString("ru", options);

function dayweekString(num){
	switch (num) {
		case 0:
	     	return ('Воскресенье');
	     	break;
        case 1:
	        return ('Понедельник');
	        break;
    	case 2:
		    return ('Вторник');
		    break;
	  	case 3:
		    return ('Среда');
		    break;
	    case 4:
		    return('Четверг');
		    break;
	    case 5:
		    return ('Пятница');
		    break;
	    case 6:
	    	return('Суббота');
	    	break;
	    default:
	        console.log('Такого дня недели нет');
}
}	
let  todayOutput = document.getElementById('today-output');
let p = today.getDay();
console.log(dayweekString(p));
todayOutput.innerHTML += dayweekString(p);
//4
let day1 = document.getElementById('day1_field');
let day2 = document.getElementById('day2_field');
let result = document.getElementById('result');
let getResult = document.getElementById('get-result');
let arrDates = [];// положил даты в массив, по другому не получалось



//getResult.disabled = true;
day1.onchange = function(){
	
	let d1 = day1.value;
	let d1m = new Date(d1);
	arrDates.push(d1m);
	
	console.log('changed 1');
	return d1m;
}

day2.onchange = function(){
	
	let d2 = day2.value;
	let d2m = new Date(d2);
	arrDates.push(d2m);
	
	console.log('changed 2');
	return d2m;
	
}


getResult.addEventListener('click', function(){
	result.value = '';
	console.log('Проверка');
		let timeDiff = Math.abs(arrDates[1].getTime() - arrDates[0].getTime());
		let diffDays = Math.ceil(timeDiff/(1000*3600*24));
		result.value = diffDays;


});
	




