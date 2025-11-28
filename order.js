// Объект для хранения текущего выбора
let currentOrder = {
    soup: null,
    main_course: null,
    drink: null
};

// Функция для обновления отображения заказа в форме
function updateOrderDisplay() {
    // Проверяем, есть ли выбранные блюда
    const hasSelectedItems = currentOrder.soup || currentOrder.main_course || currentOrder.drink;
    
    const emptyMessage = document.getElementById('order-empty-message');
    const orderItems = document.getElementById('order-items');
    const orderTotalSection = document.getElementById('order-total-section');
    
    console.log('Updating order display, hasSelectedItems:', hasSelectedItems);
    console.log('Current order:', currentOrder);
    
    if (hasSelectedItems) {
        // Показываем блок с выбранными блюдами, скрываем сообщение "Ничего не выбрано"
        emptyMessage.style.display = 'none';
        orderItems.style.display = 'block';
        
        // Обновляем отображение для каждой категории
        updateCategoryDisplay('soup');
        updateCategoryDisplay('main_course');
        updateCategoryDisplay('drink');
        
        // Обновляем общую стоимость
        updateOrderCost();
        
        // Показываем блок с общей стоимостью
        orderTotalSection.style.display = 'block';
    } else {
        // Показываем сообщение "Ничего не выбрано", скрываем блок с выбранными блюдами
        emptyMessage.style.display = 'block';
        orderItems.style.display = 'none';
        
        // Скрываем блок с общей стоимостью
        orderTotalSection.style.display = 'none';
    }
    
    // Обновляем скрытые поля для отправки формы
    updateHiddenFields();
}

// Функция для обновления отображения конкретной категории
function updateCategoryDisplay(category) {
    const element = document.getElementById(`selected-${category}`);
    const item = currentOrder[category];
    
    if (!element) {
        console.error(`Element with id selected-${category} not found`);
        return;
    }
    
    if (item) {
        element.textContent = `${item.name} ${item.price}Р`;
        element.style.color = '#333';
        element.style.fontWeight = 'bold';
        console.log(`Updated ${category}: ${item.name} ${item.price}Р`);
    } else {
        element.textContent = 'Блюдо не выбрано';
        element.style.color = '#666';
        element.style.fontWeight = 'normal';
        console.log(`Updated ${category}: Блюдо не выбрано`);
    }
}

// Функция для обновления скрытых полей формы
function updateHiddenFields() {
    document.getElementById('soup-hidden').value = currentOrder.soup ? currentOrder.soup.keyword : '';
    document.getElementById('main_course-hidden').value = currentOrder.main_course ? currentOrder.main_course.keyword : '';
    document.getElementById('drink-hidden').value = currentOrder.drink ? currentOrder.drink.keyword : '';
}

// Функция для расчета и отображения стоимости заказа
function updateOrderCost() {
    let totalCost = 0;
    
    // Считаем стоимость выбранных блюд
    if (currentOrder.soup) {
        totalCost += currentOrder.soup.price;
    }
    
    if (currentOrder.main_course) {
        totalCost += currentOrder.main_course.price;
    }
    
    if (currentOrder.drink) {
        totalCost += currentOrder.drink.price;
    }
    
    // Обновляем отображение общей стоимости
    const totalElement = document.getElementById('order-total');
    if (totalElement) {
        totalElement.textContent = `${totalCost}Р`;
        console.log(`Updated total cost: ${totalCost}Р`);
    }
}

// Функция для обработки клика по карточке блюда
function handleDishClick(event) {
    // Проверяем, был ли клик по карточке или кнопке "Добавить"
    const dishCard = event.target.closest('.dish-card');
    
    if (dishCard) {
        // Получаем keyword блюда из data-атрибута
        const dishKeyword = dishCard.getAttribute('data-dish');
        
        console.log('Clicked dish card with data-dish:', dishKeyword);
        
        // Находим блюдо в массиве по keyword
        const selectedDish = dishes.find(dish => dish.keyword === dishKeyword);
        
        if (selectedDish) {
            console.log('Found dish:', selectedDish);
            
            // Обновляем текущий выбор в соответствующей категории
            currentOrder[selectedDish.category] = selectedDish;
            
            // Обновляем отображение заказа
            updateOrderDisplay();
        } else {
            console.error('Dish not found for keyword:', dishKeyword);
        }
    } else {
        console.log('Click was not on a dish card or add button');
    }
}

// Функция для сброса заказа
function resetOrder() {
    currentOrder = {
        soup: null,
        main_course: null,
        drink: null
    };
    updateOrderDisplay();
}

// Инициализация обработчиков событий
document.addEventListener('DOMContentLoaded', function() {
    console.log('Order.js initialized');
    
    // Добавляем обработчик клика для всех карточек блюд
    document.addEventListener('click', function(event) {
        if (event.target.closest('.dish-card') || event.target.classList.contains('add-btn')) {
            handleDishClick(event);
        }
    });
    
    // Обработчик для кнопки сброса формы
    const resetButton = document.querySelector('.reset-btn');
    if (resetButton) {
        resetButton.addEventListener('click', resetOrder);
    }
    
    // Инициализируем отображение заказа
    updateOrderDisplay();
});