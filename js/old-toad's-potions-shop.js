//Задача Лавка зелий "У старой жабы"  :D    ====Работа с массивом объектов=====

//=====  при работе с массивом объектов метод includes() не работает!!!!!!!!!!!!!!!!!!  ======

/*
Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой,
а в будущем может быть и другими характеристиками.
Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

1) getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.

2) addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.

3) removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.

4) updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

5) clear() - удаляет все товары с лавки
*/

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      // console.log(potion.name);
      if (potion.name === newPotion.name) {
        console.log(`Зелье "${newPotion.name}" уже есть в инвентаре!`);
        return;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (potionName === potion.name) {
        // console.log('Нашли');
        // console.log('Индекс для удаления позиции ', i);
        this.potions.splice(i, 1);
        return;
      }
    }
    console.log(`Зелья "${potionName}" нет в лавке`);
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (oldName === potion.name) {
        // console.log('Нашли');
        // console.log('Индекс для удаления позиции ', i);
        // console.log(newName = potion.name);
        this.potions.splice(i, 1, { name: newName, price: potion.price });
        return;
      }
    }
    console.log(
      `Зелья "${oldName}" нет в лавке, выберите другое зелье для замены`,
    );
  },
  clear() {
    return (this.potions = []);
  },
};

console.log(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
atTheOldToad.removePotion('Дыхание дракона');
atTheOldToad.removePotion('Дыхание дракона');
atTheOldToad.updatePotionName('Невидимка', 'Полиморф');
// atTheOldToad.clear();
console.table(atTheOldToad.getPotions());
