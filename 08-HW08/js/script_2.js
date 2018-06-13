window.onload = function(){
	//console.log('script_2.js подключен');
	//timer
	let deadline = '2018-06-13';
	function getTimeRemaining(endtime){
		let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000;
		let seconds = Math.floor((t/1000) % 60);
		let minutes = Math.floor((t/1000/60) % 60);
		let hours = Math.floor((t/(1000*60*60)));
		if(seconds.getSeconds() <= 0){
			seconds.innerHTML = '00';
		}	
		if(minutes.getMinutes() < 0) {
			minutes.innerHTML = '00';
		}
		if(hours.getHours() < 0){
			hours.innerHTML = '00';
		}
		return {
			'total'  : t,
			'hours'  : hours,
			'minutes': minutes,
			'seconds': seconds
		};	
	};
	
	function setClock(id, endtime){
		let timer   = document.getElementById(id);
		let hours   = timer.querySelector('.hours');
		let minutes = timer.querySelector('.minutes');
		let seconds = timer.querySelector('.seconds');
		/*function zeros(digit){
			if(digit < 10){
				digit = '0' + digit;
			}
			return digit;
		};*/
		let timeInterval = setInterval(updateClock, 1000);
		function updateClock(){
			console.log('таймер');
			let t = getTimeRemaining(endtime);
			hours.innerHTML   = ('0' + t.hours).slice(-2);
			minutes.innerHTML = ('0' + t.minutes).slice(-2);
			seconds.innerHTML = ('0' + t.seconds).slice(-2);
			if(t <= 0){
				clearInterval(timeInterval);
				seconds.innerHTML = '00';
				minutes.innerHTML = '00';
				hours.innerHTML = '00';
			}
			
		};
		updateClock();
		

	};
	setClock('timer', deadline);
}
