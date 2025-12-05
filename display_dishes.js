// Функция для отображения блюд на странице
function displayDishes() {
    console.log('Displaying dishes...');
    
    // Получаем все контейнеры для категорий
    const soupSection = document.querySelector('.dishes-section:nth-of-type(2) .dishes-grid');
    const mainCourseSection = document.querySelector('.dishes-section:nth-of-type(3) .dishes-grid');
    const saladSection = document.querySelector('.dishes-section:nth-of-type(4) .dishes-grid');
    const drinkSection = document.querySelector('.dishes-section:nth-of-type(5) .dishes-grid');
    const dessertSection = document.querySelector('.dishes-section:nth-of-type(6) .dishes-grid');
    
    // Получаем контейнеры фильтров
    const soupFilters = document.getElementById('soups-filters');
    const mainFilters = document.getElementById('main-filters');
    const drinkFilters = document.getElementById('drinks-filters');
    const saladFilters = document.getElementById('salads-filters');
    const dessertFilters = document.getElementById('desserts-filters');
    
    console.log('Sections found:', { 
        soupSection: !!soupSection, 
        mainCourseSection: !!mainCourseSection, 
        drinkSection: !!drinkSection,
        saladSection: !!saladSection,
        dessertSection: !!dessertSection
    });
    
    console.log('Filter containers:', {
        soupFilters: !!soupFilters,
        mainFilters: !!mainFilters,
        drinkFilters: !!drinkFilters,
        saladFilters: !!saladFilters,
        dessertFilters: !!dessertFilters
    });
    
    // Сортируем блюда по алфавиту
    const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b.name));
    
    console.log('Sorted dishes count:', sortedDishes.length);
    
    // Функция для отображения блюд определенной категории с учетом фильтра
    function displayCategoryDishes(category, container, filterContainer) {
        if (!container) return;
        
        container.innerHTML = '';
        
        // Получаем активный фильтр для этой категории
        let activeFilter = null;
        if (filterContainer) {
            const activeButton = filterContainer.querySelector('.filter-btn.active');
            if (activeButton) {
                activeFilter = activeButton.getAttribute('data-kind');
            }
        }
        
        console.log(`Displaying ${category} with filter: ${activeFilter}`);
        
        // Фильтруем блюда по категории
        let categoryDishes = sortedDishes.filter(dish => dish.category === category);
        
        // Применяем фильтр, если он есть
        if (activeFilter) {
            categoryDishes = categoryDishes.filter(dish => dish.kind === activeFilter);
        }
        
        // Если нет блюд, показываем сообщение
        if (categoryDishes.length === 0) {
            const noDishesMessage = document.createElement('p');
            noDishesMessage.className = 'no-dishes';
            noDishesMessage.textContent = 'Нет блюд для отображения';
            container.appendChild(noDishesMessage);
        }
        
        // Создаем карточки для каждого блюда
        categoryDishes.forEach(dish => {
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
            addButton.setAttribute('data-keyword', dish.keyword);
            
            // Добавляем элементы в карточку
            dishCard.appendChild(img);
            dishCard.appendChild(price);
            dishCard.appendChild(name);
            dishCard.appendChild(weight);
            dishCard.appendChild(addButton);
            
            // Добавляем карточку в соответствующую секцию
            container.appendChild(dishCard);
        });
    }
    
    // Отображаем блюда для каждой категории
    displayCategoryDishes('soup', soupSection, soupFilters);
    displayCategoryDishes('main_course', mainCourseSection, mainFilters);
    displayCategoryDishes('drink', drinkSection, drinkFilters);
    displayCategoryDishes('salad', saladSection, saladFilters);
    displayCategoryDishes('dessert', dessertSection, dessertFilters);
    
    // Добавляем обработчики событий на кнопки "Добавить"
    attachAddButtonListeners();
    
    console.log('Dishes displayed successfully');
}

// Функция для инициализации фильтров
function initializeFilters() {
    console.log('Initializing filters...');
    
    // Находим все контейнеры фильтров
    const filterContainers = [
        { id: 'soups-filters', category: 'soup' },
        { id: 'main-filters', category: 'main_course' },
        { id: 'drinks-filters', category: 'drink' },
        { id: 'salads-filters', category: 'salad' },
        { id: 'desserts-filters', category: 'dessert' }
    ];
    
    filterContainers.forEach(filterConfig => {
        const container = document.getElementById(filterConfig.id);
        if (!container) {
            console.error(`Filter container not found: ${filterConfig.id}`);
            return;
        }
        
        const buttons = container.querySelectorAll('.filter-btn');
        console.log(`Found ${buttons.length} filter buttons in ${filterConfig.id}`);
        
        buttons.forEach(button => {
            // Удаляем старые обработчики
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            // Добавляем новый обработчик
            newButton.addEventListener('click', function() {
                handleFilterClick(this, filterConfig.id);
            });
        });
    });
    
    console.log('Filters initialized');
}

// Обработчик клика по кнопке фильтра
function handleFilterClick(button, filterContainerId) {
    console.log(`Filter button clicked in ${filterContainerId}`);
    
    const filterContainer = document.getElementById(filterContainerId);
    if (!filterContainer) return;
    
    const buttons = filterContainer.querySelectorAll('.filter-btn');
    const filterKind = button.getAttribute('data-kind');
    const isActive = button.classList.contains('active');
    
    console.log(`Filter: ${filterKind}, Active: ${isActive}`);
    
    if (isActive) {
        // Если кнопка уже активна, снимаем фильтр
        button.classList.remove('active');
        console.log(`Filter ${filterKind} removed`);
    } else {
        // Снимаем активный класс со всех кнопок в этой группе
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Активируем текущую кнопку
        button.classList.add('active');
        console.log(`Filter ${filterKind} activated`);
    }
    
    // Перерисовываем блюда
    displayDishes();
}

// Функция для добавления обработчиков на кнопки "Добавить"
function attachAddButtonListeners() {
    document.querySelectorAll('.add-btn').forEach(button => {
        // Удаляем старые обработчики
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Добавляем новый обработчик
        newButton.addEventListener('click', function() {
            const dishKeyword = this.getAttribute('data-keyword');
            console.log(`Adding dish: ${dishKeyword}`);
            
            const dish = dishes.find(d => d.keyword === dishKeyword);
            
            if (dish) {
                // Проверяем, существует ли функция addToOrder
                if (typeof addToOrder === 'function') {
                    addToOrder(dish);
                } else {
                    console.error('Функция addToOrder не найдена');
                }
            }
        });
    });
}

// Запускаем отображение блюд после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Инициализируем фильтры
    initializeFilters();
    
    // Отображаем все блюда
    displayDishes();
    
    console.log('Initialization complete');
});
// от лаб 4
/*function displayDishes() {
    console.log('Displaying dishes...');
    
    // Получаем секции для каждой категории
    const soupSection = document.querySelector('.dishes-section:nth-of-type(1) .dishes-grid');
    const mainCourseSection = document.querySelector('.dishes-section:nth-of-type(2) .dishes-grid');
    const drinkSection = document.querySelector('.dishes-section:nth-of-type(3) .dishes-grid');
    const saladSection = document.querySelector('.dishes-section:nth-of-type(4) .dishes-grid');
    const dessertSection = document.querySelector('.dishes-section:nth-of-type(5) .dishes-grid')
    
    console.log('Sections found:', { 
        soupSection: !!soupSection, 
        mainCourseSection: !!mainCourseSection, 
        drinkSection: !!drinkSection,
        saladSection: !!saladSection,
        dessertSection: !!dessertSection
    });
    
    // Очищаем секции (на всякий случай)
    if (soupSection) soupSection.innerHTML = '';
    if (mainCourseSection) mainCourseSection.innerHTML = '';
    if (drinkSection) drinkSection.innerHTML = '';
    if (saladSection) saladSection.innerHTML = '';
    if (dessertSection) dessertSection.innerHTML = '';
    
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
            case 'salad':
                targetSection = saladSection;
                break;
            case 'dessert':
                targetSection = dessertSection;
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
document.addEventListener('DOMContentLoaded', displayDishes);*/