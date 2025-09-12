function safeParseNumber(str) {
  try {
    if (str === "" || str === undefined) {
      throw new SyntaxError("Пустая строка!");
    }

    let result = parseInt(str);

    if (isNan(parseInt(str))) {
      throw new SyntaxError("Не число!");
    }

    return result;
  } catch(error) {
    console.log("Ошибка:", error.message);
    return 0;
  }
}

console.log(safeParseNumber("dfdfd"))