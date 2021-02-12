//Задача. Библиотека с книгами (работа с массивом)

/*
1) Добавь объекту bookShelf метод getBooks(), который просто возвращает значение свойства books.
2) Добавь метод addBook(bookName) так, чтобы он добавлял книгу bookName в конец массива книг в свойстве books.
3) Добавь метод removeBook(bookName) так, чтобы он удалял книгу bookName из массива книг в свойстве books.
4) Добавь метод updateBook(oldName, newName) так, чтобы он обновлял название книги с oldName на newName, в массиве книг в свойстве books.

*/

const bookShelf = {
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    if (this.books.includes(bookName)) {
      console.log(`Книга ${bookName} уже есть в библиотеке!`);
      return;
    }

    this.books.push(bookName);
    console.log(`Добавляем книгу ${bookName}`);
    return;
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    // console.log('Индекс для удаления ', bookIndex);

    if (bookIndex === -1) {
      console.log(`Книги ${bookName} нет в библиотеке!`);
      return;
    }

    this.books.splice(bookIndex, 1);
    console.log(`Удаляем книгу ${bookName}`);
    return;
  },
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    // console.log('Индекс для удаления ', bookIndex);

    if (bookIndex === -1) {
      console.log(`Книги ${oldName} нет в библиотеке!`);
      return;
    }

    this.books.splice(bookIndex, 1, newName);
    console.log(`Обновляем книгу ${oldName} на ${newName}`);
    return;
  },
};

//Проверки работы методов объекта

console.log(bookShelf.getBooks()); //показывает начальную библиотеку

bookShelf.addBook('Мгла')
bookShelf.addBook('Мгла')
bookShelf.addBook('Король и Королева')
bookShelf.removeBook('Страж снов')
bookShelf.removeBook('Страж снов')
bookShelf.updateBook('Мгла', 'Красная шапочка')
bookShelf.updateBook('Красная шапочка', 'Мгла')

console.table(bookShelf.getBooks()); //в таблицу выводятся все изменения в библиотеке
