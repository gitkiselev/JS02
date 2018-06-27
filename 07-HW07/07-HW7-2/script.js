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
	/*let day     = currentDate.getDay() + 1;
	let month   = currentDate.getMonth() + 1;
	let year    = currentDate.getFullYear();*/
	let out     = document.getElementById('out');
	out.innerHTML = zeros(hours) +":" + zeros(minutes) +":"+
 	zeros(seconds);
 	setTimeout(function() {//для красоты сделал setTimeout
    	showDate()
	}, 1000);
}
showDate();