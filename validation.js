// Определяем допустимые комбинации (без десерта)
const VALID_COMBOS = [
    ['soup', 'main_course', 'salad', 'drink'],
    ['soup', 'main_course', 'drink'],
    ['soup', 'salad', 'drink'],
    ['main_course', 'salad', 'drink'],
    ['main_course', 'drink']
];

// Данные для уведомлений
const NOTIFICATIONS = {
    EMPTY: {
        text: 'Ничего не выбрано. Выберите блюда для заказа'
    },
    NO_DRINK: {
        text: 'Выберите напиток'
    },
    NO_MAIN_OR_SALAD: {
        text: 'Выберите главное блюдо/салат/стартер'
    },
    NO_SOUP_OR_MAIN: {
        text: 'Выберите суп или главное блюдо'
    },
    NO_MAIN: {
        text: 'Выберите главное блюдо'
    }
};

// Получаем категории выбранных блюд (без десерта)
function getSelectedCategories() {
    // Используем глобальный массив selectedDishes из order.js
    if (typeof selectedDishes === 'undefined' || selectedDishes.length === 0) {
        return [];
    }
    
    return selectedDishes
        .filter(dish => dish.category !== 'dessert')
        .map(dish => dish.category);
}

// Проверяем, соответствует ли заказ допустимому комбо
function isValidCombo(categories) {
    // Сортируем категории для сравнения
    const sortedCategories = [...categories].sort();
    
    for (const combo of VALID_COMBOS) {
        const sortedCombo = [...combo].sort();
        
        if (sortedCategories.length === sortedCombo.length && 
            sortedCategories.every((cat, index) => cat === sortedCombo[index])) {
            return true;
        }
    }
    return false;
}

// Определяем тип уведомления
function getNotificationType(categories) {
    const hasSoup = categories.includes('soup');
    const hasMain = categories.includes('main_course');
    const hasSalad = categories.includes('salad');
    const hasDrink = categories.includes('drink');
    
    // 1. Ничего не выбрано
    if (categories.length === 0) {
        return 'EMPTY';
    }
    
    // 2. Есть комбо без напитка
    const comboWithoutDrink = VALID_COMBOS.find(combo => {
        const comboWithoutDrinkCheck = [...combo].filter(cat => cat !== 'drink');
        return comboWithoutDrinkCheck.length === categories.length &&
               comboWithoutDrinkCheck.every(cat => categories.includes(cat));
    });
    
    if (comboWithoutDrink && !hasDrink) {
        return 'NO_DRINK';
    }
    
    // 3. Выбран суп, но нет главного и салата
    if (hasSoup && !hasMain && !hasSalad) {
        return 'NO_MAIN_OR_SALAD';
    }
    
    // 4. Выбран салат, но нет супа или главного
    if (hasSalad && !hasSoup && !hasMain) {
        return 'NO_SOUP_OR_MAIN';
    }
    
    // 5. Выбран напиток или десерт
    const hasDessert = selectedDishes.some(d => d.category === 'dessert');
    if ((hasDrink || hasDessert) && !hasMain) {
        return 'NO_MAIN';
    }
    
    // Если ничего не подошло, показываем общее уведомление
    return 'EMPTY';
}

// Показываем уведомление
function showNotification(type) {
    const notificationData = NOTIFICATIONS[type];
    
    // Создаем overlay
    const overlay = document.createElement('div');
    overlay.className = 'notification-overlay';
    
    // Создаем уведомление
    overlay.innerHTML = `
        <div class="notification">
            <p>${notificationData.text}</p>
            <button class="notification-ok">Окей</button>
        </div>
    `;
    
    // Добавляем на страницу
    document.body.appendChild(overlay);
    
    // Обработчик для кнопки "Окей"
    const okButton = overlay.querySelector('.notification-ok');
    okButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
}

// Валидация при отправке формы
function validateOrder(event) {
    event.preventDefault();
    
    const categories = getSelectedCategories();
    
    if (isValidCombo(categories)) {
        // Заказ валиден - отправляем форму
        event.target.submit();
    } else {
        // Показываем уведомление
        const notificationType = getNotificationType(categories);
        showNotification(notificationType);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', validateOrder);
    }
});