function safeArrayAccess(array, index) {
  try {
    if (!Array.isArray(array)) {
      throw new Error("Не массив!");
    }

    if (index < 0) {
      throw new Error("Индекс не может быть отрицательным");
    }

    if (index >= array.length) {
      throw new Error("Индекс вне диапазона");
    }

    let result = array[index];
    return result;

  } catch(error) {
    console.log("Ошибка:", error.message);
    return undefined;
  }
}

let arr = [1,2,3,4,5,6,7];

console.log(safeArrayAccess(arr, 2));
console.log(safeArrayAccess(arr, 11));
console.log(safeArrayAccess(arr, -1));