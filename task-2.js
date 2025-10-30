function getShippingMessage(country, price, deliveryFee) {
  // Обчислюємо загальну вартість замовлення, додаючи вартість товару і доставку
  const totalPrice = price + deliveryFee;

  // Формуємо та повертаємо рядок-повідомлення
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Код для перевірки коректності роботи функції (залишити для ментора)
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"