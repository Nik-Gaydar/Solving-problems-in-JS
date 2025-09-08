let cartItems = [
  { name: "Ноутбук", price: 45000, quantity: 1, inStock: true },
  { name: "Мышь", price: 1500, quantity: 2, inStock: true },
  { name: "Клавиатура", price: 3000, quantity: 1, inStock: false },
  { name: "Монитор", price: 25000, quantity: 1, inStock: true },
  { name: "Колонки", price: 2500, quantity: 2, inStock: false }
];

function result(arr) {
  return arr.map((item) =>
    item.inStock ? // Булево значение уже "готово" для сравнения
    `${item.name} - ${item.price} x${item.quantity} = ${item.price * item.quantity} ✅` :
    `${item.name} - ${item.price} x${item.quantity} = ${item.price * item.quantity} ❌ НЕТ В НАЛИЧИИ`);
}

console.log(result(cartItems));