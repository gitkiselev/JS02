const sum = require('./sum');
test('Функция возвращает тип данных true', () =>{
	expect(sum(2, 10)).toBe(true);
});