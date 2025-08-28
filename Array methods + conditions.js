let orders = [
    { id: 1, customer: "Анна", amount: 1500, status: "delivered" },
    { id: 2, customer: "Борис", amount: 3200, status: "pending" },
    { id: 3, customer: "Вера", amount: 800, status: "delivered" },
    { id: 4, customer: "Анна", amount: 2100, status: "cancelled" },
    { id: 5, customer: "Глеб", amount: 950, status: "delivered" },
    { id: 6, customer: "Вера", amount: 1800, status: "pending" }
];

function getDeliveredStats(arr) {
    let result = {};
    let count = 0;

    for (let order of arr) {
        if (order.status === "delivered") {
            count++
            result.totalOrders = count;

            result.totalAmount = order.reduce((sum, item) => sum + item.amount);
        }
    }
    return result;
}

console.log(getDeliveredStats(orders))