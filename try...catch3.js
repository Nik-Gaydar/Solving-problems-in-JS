function superCalculator(operation, num1, num2) {
  try {
    if (typeof operation !== 'string') {
      throw new TypeError("Это не строка!");
    }

    if (num1 !== undefined || num2 !== undefined) {
      throw new ReferenceError("Переменная не определена!");
    }
  }
}