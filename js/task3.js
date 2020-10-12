/* Задача 3-3
Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), 
которая принимает объект сотрудников и возвращает 
имя самого продуктивного (который выполнил больше всех задач). 
Сотрудники и кол-во выполненных задач содержатся как свойства объекта 
в формате "имя":"кол-во задач". */

const findBestEmployee = function (employees) {
    'use strict';

    let bestEmployee = '';
    let maxResult = 0;

    for (const employee in employees) {
        // console.log(employee);
        // console.log(employees[employee]);
        if (employees[employee] > maxResult) {
            maxResult = employees[employee];
            bestEmployee = employee;
        }
    }
    return bestEmployee;
}
// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers)); 


/* Спопоб решения Жменьки

let result = '';
  const values = Object.values(employees);
  let maxNumber = 0;
  for (let i = 0; i < values.length; i += 1) {
    if (maxNumber < values[i]) {
    maxNumber = values[i];
      result = Object.keys(employees)[i];
    }

  }
 return result;
}; */