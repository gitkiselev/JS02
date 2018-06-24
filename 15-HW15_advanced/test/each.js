/*Узнать, что нам вернет функция each в данных условиях.
 Проверить её на тип данных, который она возвращает,
  на соответствие ожидаемому результату 
  (который вы получили) и на свойство length*/
const obj = {
		each: function(startArr, f){return f(startArr)},
		arr1: [64, 49, 36, 25, 16],
		myFunc: function(a){
			var newArr = [];
			for (var i = 0; i < a.length; i++) {
				newArr[i]=Math.sqrt(a[i]);
			}
			return newArr;
		}
}

module.exports =  obj;