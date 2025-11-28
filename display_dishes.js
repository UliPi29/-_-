// Функция для отображения блюд на странице
function displayDishes() {
    console.log('Displaying dishes...');
    
    // Получаем секции для каждой категории
    const soupSection = document.querySelector('.dishes-section:nth-of-type(1) .dishes-grid');
    const mainCourseSection = document.querySelector('.dishes-section:nth-of-type(2) .dishes-grid');
    const drinkSection = document.querySelector('.dishes-section:nth-of-type(3) .dishes-grid');
    
    console.log('Sections found:', { 
        soupSection: !!soupSection, 
        mainCourseSection: !!mainCourseSection, 
        drinkSection: !!drinkSection 
    });
    
    // Очищаем секции (на всякий случай)
    if (soupSection) soupSection.innerHTML = '';
    if (mainCourseSection) mainCourseSection.innerHTML = '';
    if (drinkSection) drinkSection.innerHTML = '';
    
    // Сортируем блюда по алфавиту
    const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b.name));
    
    console.log('Sorted dishes count:', sortedDishes.length);
    
    // Создаем карточки для каждого блюда
    sortedDishes.forEach(dish => {
        // Создаем элементы карточки
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.setAttribute('data-dish', dish.keyword);
        
        const img = document.createElement('img');
        img.src = dish.image;
        img.alt = dish.name;
        
        const price = document.createElement('p');
        price.className = 'dish-price';
        price.textContent = `${dish.price}Р`;
        
        const name = document.createElement('p');
        name.className = 'dish-name';
        name.textContent = dish.name;
        
        const weight = document.createElement('p');
        weight.className = 'dish-weight';
        weight.textContent = dish.count;
        
        const addButton = document.createElement('button');
        addButton.className = 'add-btn';
        addButton.textContent = 'Добавить';
        
        // Добавляем элементы в карточку
        dishCard.appendChild(img);
        dishCard.appendChild(price);
        dishCard.appendChild(name);
        dishCard.appendChild(weight);
        dishCard.appendChild(addButton);
        
        // Добавляем карточку в соответствующую секцию
        let targetSection;
        switch(dish.category) {
            case 'soup':
                targetSection = soupSection;
                break;
            case 'main_course':
                targetSection = mainCourseSection;
                break;
            case 'drink':
                targetSection = drinkSection;
                break;
        }
        
        if (targetSection) {
            targetSection.appendChild(dishCard);
        } else {
            console.error('No target section for dish:', dish);
        }
    });
    
    console.log('Dishes displayed successfully');
}

// Запускаем отображение блюд после загрузки DOM
document.addEventListener('DOMContentLoaded', displayDishes);