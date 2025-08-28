// Необходимо найти общее колличество оценок студентов

/*let students = {
  "Анна": [5, 4, 5, 3, 4],
  "Борис": [3, 3, 4, 4, 3],
  "Вера": [5, 5, 4, 5, 5],
  "Глеб": [2, 3, 3, 2, 4],
  "Дина": [4, 4, 5, 4, 4]
};

function countBall(obj) {
  return Object.values(obj).reduce((sum, arr) => sum + arr.length, 0);
}

console.log(countBall(students));*/

// Найти студента с самым высоким средним баллом

/*let students = {
  "Анна": [5, 4, 5, 3, 4],
  "Борис": [3, 3, 4, 4, 3],
  "Вера": [5, 5, 4, 5, 5],
  "Глеб": [2, 3, 3, 2, 4],
  "Дина": [4, 4, 5, 4, 4]
};

function bestStudent(obj) {
  let bestStudent = "";
  let avrScore = 0;

  for (let [name, grades] of Object.entries(students)) {
    let avg = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    if (avg > avrScore) {
      bestStudent = name;
      avrScore = avg;
    }
  }
  return bestStudent;
}

console.log(bestStudent(students))*/

// Создать объект со средними баллами всех студентов

/*let students = {
  "Анна": [5, 4, 5, 3, 4],
  "Борис": [3, 3, 4, 4, 3],
  "Вера": [5, 5, 4, 5, 5],
  "Глеб": [2, 3, 3, 2, 4],
  "Дина": [4, 4, 5, 4, 4]
};*/

/*let avarageScore = (obj) => {
  let result = {};

  for (let [name, grades] of Object.entries(obj)) {
    console.log(`Имя: ${name}, Средний бал: ${grades.reduce((sum, grade) => sum += grade, 0) / grades.length}`);
  }
}*/

/*let getAverageScores = (obj) => {
  return Object.fromEntries(    // Создаем объект из массива пар ключ-значение
    Object.entries(obj).map(([name, grades]) => [    // Превращаем получаемый объект в итерируемый, затем применяем метод массива для преобразования. внутри используем деструктуризацию.
      name,   //Ключ присваиваем переменной name
      grades.reduce((sum, grade) => sum + grade, 0) / grades.length // Подмассив с оценками схлопываем с помощью метода и получаем средний бал.
    ])
  );
}

console.log(getAverageScores(students));*/

// Создать объект с товарами только из категории "electronics"

/*let products = {
  "Ноутбук": { price: 45000, stock: 12, category: "electronics" },
  "Мышь": { price: 1500, stock: 45, category: "electronics" },
  "Книга": { price: 800, stock: 23, category: "books" },
  "Кофе": { price: 320, stock: 67, category: "food" },
  "Телефон": { price: 35000, stock: 8, category: "electronics" },
  "Хлеб": { price: 45, stock: 156, category: "food" }
};

function getProductsElectronics(obj) {

  return Object.fromEntries( // Обязательно возвращаем значение, чтобы созданный объект нам вернулся в результате выполнения фнкции!
     Object.entries(obj).filter(([name, data]) => data.category === "electronics") // ЗДесь мы уже рабтаем с массивом, поэтому используем деструктуризацию, чтобы обращаться к нужной категории.
  );
}

console.log(getProductsElectronics(products));*/

// Напишите функцию getEligibleStudents, которая вернет массив студентов, которые: Старше или равны 18 лет И имеют активный статус

/*
let students = [
  { name: "Анна", age: 19, isActive: true },
  { name: "Борис", age: 17, isActive: false },
  { name: "Вера", age: 22, isActive: true },
  { name: "Глеб", age: 16, isActive: true },
  { name: "Дина", age: 20, isActive: false }
];

function getEligibleStudents(arr) {
  return arr.filter(item => item.age >= 18 && item.isActive); // Поиск по массиву с использованием условий: item.isActive - тоже самое что и "item.isActive == true"
}

console.log(getEligibleStudents(students));*/

// ---------------------------------------------------->

/*Задание: Напишите функцию createStore, которая:

  - Объединит массивы fruits и vegetables в один массив products
  - Создаст новый объект магазина, который содержит:

  - Все свойства из storeInfo
  - Новое свойство products с объединенным массивом
  - Новое свойство totalItems с количеством товаров*/

/*
let fruits = ["яблоко", "банан", "апельсин"];
let vegetables = ["морковь", "картофель", "лук"];

let storeInfo = {
  name: "Продукты 24/7",
  address: "ул. Центральная, 15"
};

let createStore = (arr, arr2, obj) => ({ // За счет круглых скобок, фигурные становятся литералом объекта и автоматически создают новый объект
  ...obj, // Копируем содержимое входящего объекта в новый с помощью спрэд синтаксиса
  products: [...arr, ...arr2], // С помощью спрэд синтаксиса объединяем входящие массивы в свойство объекта
  totalItems: arr.length + arr2.length, // Суммируем длины массивов, чтобы вычислить колличетсво продуктов в магазине
})

console.log(createStore(fruits, vegetables, storeInfo));*/

// ---------------------------------------------------->

// Задание: Напишите функцию analyzeData, которая принимает этот массив и возвращает объект со статистикой по типам данных в массиве

let mixedData = [
  "hello",
  42,
  true,
  null,
  undefined,
  [1, 2, 3],
  {name: "Анна"},
  "",
  0,
  false
];

function analyzeData(arr) {
  let strings = 0;
  let numbers = 0;
  let booleans = 0;
  let arrays = 0;
  let objects = 0;
  let nullish = 0;

  for (let item of arr) {
    if (typeof item == "string") strings++;
    if (typeof item == "number") numbers++;
    if (typeof item == "boolean") booleans++;
    if (Array.isArray(item)) arrays++;
    if (typeof item === "object" && !Array.isArray(item) && item !== null) objects++;
    if (item === null || item === undefined) nullish++;
  }

  return {
    strings,
    numbers,
    booleans,
    arrays,
    objects,
    nullish
  }
}

console.log(analyzeData(mixedData));
