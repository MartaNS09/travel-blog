// Добавьте этот скрипт в консоль браузера для диагностики
export const findScrollProblem = () => {
  console.log('=== ДИАГНОСТИКА СКРОЛЛА ===');
  
  // Проверяем ширину элементов
  const allElements = document.querySelectorAll('*');
  const windowWidth = window.innerWidth;
  let foundProblem = false;
  
  allElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.right > windowWidth + 5) { // +5 для погрешности
      console.log('🚨 ПРОБЛЕМНЫЙ ЭЛЕМЕНТ:', el);
      console.log('   Ширина элемента:', rect.width);
      console.log('   Позиция right:', rect.right);
      console.log('   Ширина окна:', windowWidth);
      console.log('   Классы:', el.className);
      console.log('   Тег:', el.tagName);
      
      el.style.outline = '3px solid red';
      foundProblem = true;
    }
  });
  
  if (!foundProblem) {
    console.log('✅ Ни один элемент не выходит за границы окна');
    console.log('Проверяем body и html...');
    console.log('body scrollWidth:', document.body.scrollWidth);
    console.log('body clientWidth:', document.body.clientWidth);
    console.log('html scrollWidth:', document.documentElement.scrollWidth);
    console.log('html clientWidth:', document.documentElement.clientWidth);
  }
  
  return foundProblem;
};

// Запуск диагностики
findScrollProblem();
