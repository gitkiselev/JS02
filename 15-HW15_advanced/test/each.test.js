const obj = require('./each');
test('Тип данных each это объект', () =>{
  expect(typeof(obj.each(obj.arr1, obj.myFunc))).toBe('object');
});

test('Длина возвращаемого массива равна 5', () => {
  expect(obj.each(obj.arr1, obj.myFunc).length).toBe(5);
});

test('Функция each возвращает [8,7,6,5,4]', () =>{
  expect(obj.each(obj.arr1, obj.myFunc)).toEqual([8,7,6,5,4]);
});