let orders = [
    { id: 1, customer: "Анна", amount: 1500, status: "delivered" },
    { id: 2, customer: "Борис", amount: 3200, status: "pending" },
    { id: 3, customer: "Вера", amount: 800, status: "delivered" },
    { id: 4, customer: "Анна", amount: 2100, status: "cancelled" },
    { id: 5, customer: "Глеб", amount: 950, status: "delivered" },
    { id: 6, customer: "Вера", amount: 1800, status: "pending" }
];

function getDeliveredStats(arr) {
// Фильтруем только доставленные заказы
  let deliveredOrders = arr.filter((item) => item.status === "delivered");

  // Используем reduce для подсчёта статистики
  const result = deliveredOrders.reduce(
    (acc, item) => {
      acc.totalOrders += 1;
      acc.totalAmount += item.amount;
      acc.customers.add(item.customer); // Добавляем покупателя в Set
      return acc;
    },
    { totalOrders: 0, totalAmount: 0, customers: new Set() }
  );

  // Вычисляем среднюю сумму (округляем до 2 знаков)
  result.averageAmount = result.totalOrders > 0
    ? Number((result.totalAmount / result.totalOrders).toFixed(2))
    : 0;

  // Преобразуем Set в массив
  result.customers = [...result.customers];

  return result;
}

console.log(getDeliveredStats(orders))