function superCalculator(operation, num1, num2) {
  try {
    if (typeof operation !== 'string') {
      throw new TypeError("Это не строка!");
    }

    if (num1 === undefined || num2 === undefined) {
      throw new ReferenceError("Переменная не определена!");
    }

    if (typeof  num1 !== 'number' || typeof num2 !== 'number') {
      throw new TypeError("Аргументы должны быть числами!");
    }

    if (operation !== "+" &&
      operation !== "-" &&
      operation !== "*" &&
      operation !== "/") {
      throw new Error("Неподдерживаемая операция!");
    }

    if (operation === "/" && num2 === 0) {
      throw new RangeError("Деление на ноль невозможно!");
    }

    if (operation === "+") {
      return num1 + num2;
    } else if (operation === "-") {
      return num1 - num2;
    } else if (operation === "*") {
      return num1 * num2;
    } else if (operation === "/") {
      return num1 / num2;
    }
  } catch(error) {
    console.log("ошибка:", error.message)
    return undefined;
  }
}

console.log(superCalculator("+", 2, 6));
console.log(superCalculator("-", 2, 6));
console.log(superCalculator("&", 2, 6));
console.log(superCalculator("/", 2, 6));
console.log(superCalculator("*", 2, 6));