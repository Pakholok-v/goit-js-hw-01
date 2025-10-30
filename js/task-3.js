function getElementWidth(content, padding, border) {
  // 1. Видаляємо "px" і перетворюємо рядки на числа (Number)
  // Метод .slice(0, -2) видаляє останні два символи ('p' і 'x')
  const contentWidth = Number(content.slice(0, -2));
  const paddingValue = Number(padding.slice(0, -2));
  const borderValue = Number(border.slice(0, -2));

  // 2. Розраховуємо загальну ширину за моделлю border-box:
  // Ширина контенту + (падінг * 2) + (бордер * 2)
  const totalWidth = contentWidth + 2 * paddingValue + 2 * borderValue;

  // 3. Повертаємо результат
  return totalWidth;
}

// Код для перевірки коректності роботи функції (залишити для ментора)
console.log(getElementWidth("50px", "8px", "4px"));   // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px"));  // 200