// Элементы DOM
const levelElement = document.getElementById('level');
const questionCountElement = document.getElementById('question-count');
const correctCountElement = document.getElementById('correct-count');
const incorrectCountElement = document.getElementById('incorrect-count');
const levelIndicatorElement = document.getElementById('level-indicator');
const questionElement = document.getElementById('question');
const timerElement = document.getElementById('timer');
const feedbackElement = document.getElementById('feedback');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const exitButton = document.getElementById('exit-btn');
const levelUpMessage = document.getElementById('level-up-message');
const nextLevelButton = document.getElementById('next-level-btn');
const gameOverMessage = document.getElementById('game-over-message');
const finalScoreElement = document.getElementById('final-score');
const completionMessageElement = document.getElementById('completion-message');
const playAgainButton = document.getElementById('play-again-btn');

// Состояние игры
let gameState = {
    level: 1,
    currentQuestion: 1,
    totalQuestions: 10,
    correctAnswers: 0,
    incorrectAnswers: 0,
    timeLeft: 30,
    timer: null,
    usedQuestions: new Set(),
    gameActive: true
};

// Уровни сложности
const levels = {
    1: {
        name: "Начальный",
        description: "Арифметические операции",
        operators: ['+', '-', '×', '÷'],
        minNum: 1,
        maxNum: 15
    },
    2: {
        name: "Средний",
        description: "Арифметика и сравнения",
        operators: ['+', '-', '×', '÷', '>', '<', '='],
        minNum: 1,
        maxNum: 20
    },
    3: {
        name: "Продвинутый",
        description: "Логика и двоичные числа",
        operators: ['AND', 'OR', 'XOR', 'NOT', 'BIN'],
        minNum: 1,
        maxNum: 50
    }
};

// Инициализация игры
function initGame() {
    resetGameState();
    generateQuestion();
    startTimer();
    updateUI();
}

// Сброс состояния игры
function resetGameState() {
    gameState = {
        level: 1,
        currentQuestion: 1,
        totalQuestions: 10,
        correctAnswers: 0,
        incorrectAnswers: 0,
        timeLeft: 30,
        timer: null,
        usedQuestions: new Set(),
        gameActive: true
    };
    
    levelUpMessage.classList.add('hidden');
    gameOverMessage.classList.add('hidden');
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
    answerInput.value = '';
    answerInput.focus();
}

// Генерация вопроса
function generateQuestion() {
    const level = levels[gameState.level];
    let question, answer;
    
    do {
        if (gameState.level === 1) {
            const num1 = getRandomNumber(level.minNum, level.maxNum);
            const num2 = getRandomNumber(level.minNum, level.maxNum);
            const operator = level.operators[Math.floor(Math.random() * level.operators.length)];
            
            switch(operator) {
                case '+':
                    question = `${num1} + ${num2}`;
                    answer = num1 + num2;
                    break;
                case '-':
                    question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
                    answer = Math.max(num1, num2) - Math.min(num1, num2);
                    break;
                case '×':
                    question = `${num1} × ${num2}`;
                    answer = num1 * num2;
                    break;
                case '÷':
                    const divisor = getRandomNumber(1, 10);
                    const dividend = divisor * getRandomNumber(1, 10);
                    question = `${dividend} ÷ ${divisor}`;
                    answer = dividend / divisor;
                    break;
            }
        } else if (gameState.level === 2) {
            const useComparison = Math.random() > 0.5;
            
            if (useComparison) {
                const num1 = getRandomNumber(level.minNum, level.maxNum);
                const num2 = getRandomNumber(level.minNum, level.maxNum);
                const operator = ['>', '<', '='][Math.floor(Math.random() * 3)];
                
                question = `${num1} ${operator} ${num2}`;
                
                switch(operator) {
                    case '>': answer = num1 > num2 ? 'да' : 'нет'; break;
                    case '<': answer = num1 < num2 ? 'да' : 'нет'; break;
                    case '=': answer = num1 === num2 ? 'да' : 'нет'; break;
                }
            } else {
                const num1 = getRandomNumber(level.minNum, level.maxNum);
                const num2 = getRandomNumber(level.minNum, level.maxNum);
                const operator = ['+', '-', '×'][Math.floor(Math.random() * 3)];
                
                switch(operator) {
                    case '+':
                        question = `${num1} + ${num2}`;
                        answer = num1 + num2;
                        break;
                    case '-':
                        question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
                        answer = Math.max(num1, num2) - Math.min(num1, num2);
                        break;
                    case '×':
                        question = `${num1} × ${num2}`;
                        answer = num1 * num2;
                        break;
                }
            }
        } else {
            const operationType = Math.floor(Math.random() * 3);
            
            if (operationType === 0) {
                const num1 = getRandomNumber(1, 15);
                const num2 = getRandomNumber(1, 15);
                const operator = ['AND', 'OR', 'XOR'][Math.floor(Math.random() * 3)];
                
                question = `${num1} ${operator} ${num2}`;
                
                switch(operator) {
                    case 'AND': answer = num1 & num2; break;
                    case 'OR': answer = num1 | num2; break;
                    case 'XOR': answer = num1 ^ num2; break;
                }
            } else if (operationType === 1) {
                const num = getRandomNumber(1, 15);
                question = `NOT ${num}`;
                answer = ~num & 0xF;
            } else {
                const num = getRandomNumber(1, 15);
                if (Math.random() > 0.5) {
                    question = `Переведите ${num} в двоичную систему`;
                    answer = num.toString(2);
                } else {
                    const binaryNum = getRandomNumber(1, 15).toString(2);
                    question = `Переведите ${binaryNum} в десятичную систему`;
                    answer = parseInt(binaryNum, 2);
                }
            }
        }
    } while (gameState.usedQuestions.has(question));
    
    gameState.usedQuestions.add(question);
    questionElement.textContent = question;
    gameState.currentAnswer = answer;
}

// Проверка ответа
function checkAnswer() {
    if (!gameState.gameActive) return;
    
    const userAnswer = answerInput.value.trim().toLowerCase();
    let correctAnswer = String(gameState.currentAnswer).toLowerCase();
    
    if (userAnswer === 'да') correctAnswer = 'да';
    if (userAnswer === 'нет') correctAnswer = 'нет';
    
    if (userAnswer === correctAnswer) {
        gameState.correctAnswers++;
        feedbackElement.textContent = "Правильно!";
        feedbackElement.className = "feedback correct";
    } else {
        gameState.incorrectAnswers++;
        feedbackElement.textContent = `Неправильно! Правильный ответ: ${gameState.currentAnswer}`;
        feedbackElement.className = "feedback incorrect";
    }
    
    setTimeout(() => {
        gameState.currentQuestion++;
        updateUI();
        
        if (gameState.currentQuestion > gameState.totalQuestions) {
            finishLevel();
        } else {
            resetTimer();
            generateQuestion();
            answerInput.value = '';
            answerInput.focus();
        }
    }, 1500);
}

// Завершение уровня
function finishLevel() {
    clearInterval(gameState.timer);
    gameState.gameActive = false;
    
    const successRate = gameState.correctAnswers / gameState.totalQuestions;
    
    if (successRate >= 0.8 && gameState.level < 3) {
        levelUpMessage.classList.remove('hidden');
    } else {
        finalScoreElement.textContent = `Ваш результат: ${gameState.correctAnswers}/${gameState.totalQuestions}`;
        
        if (gameState.level === 3 && successRate >= 0.8) {
            completionMessageElement.textContent = "Поздравляем! Вы прошли все уровни игры!";
        } else {
            completionMessageElement.textContent = "Попробуйте еще раз, чтобы улучшить результат!";
        }
        
        gameOverMessage.classList.remove('hidden');
    }
}

// Переход на следующий уровень
function nextLevel() {
    gameState.level++;
    gameState.currentQuestion = 1;
    gameState.correctAnswers = 0;
    gameState.incorrectAnswers = 0;
    gameState.usedQuestions.clear();
    gameState.gameActive = true;
    
    levelUpMessage.classList.add('hidden');
    updateUI();
    generateQuestion();
    resetTimer();
    answerInput.focus();
}

// Таймер
function startTimer() {
    clearInterval(gameState.timer);
    gameState.timeLeft = 30;
    updateTimer();
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateTimer();
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            if (gameState.gameActive) {
                feedbackElement.textContent = "Время вышло!";
                feedbackElement.className = "feedback incorrect";
                gameState.incorrectAnswers++;
                
                setTimeout(() => {
                    gameState.currentQuestion++;
                    updateUI();
                    
                    if (gameState.currentQuestion > gameState.totalQuestions) {
                        finishLevel();
                    } else {
                        resetTimer();
                        generateQuestion();
                        answerInput.value = '';
                        answerInput.focus();
                    }
                }, 1500);
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(gameState.timer);
    startTimer();
}

function updateTimer() {
    timerElement.textContent = `Время: ${gameState.timeLeft} сек`;
}

// Обновление интерфейса
function updateUI() {
    levelElement.textContent = levels[gameState.level].name;
    questionCountElement.textContent = `${gameState.currentQuestion}/${gameState.totalQuestions}`;
    correctCountElement.textContent = gameState.correctAnswers;
    incorrectCountElement.textContent = gameState.incorrectAnswers;
    levelIndicatorElement.textContent = `${levels[gameState.level].name} уровень: ${levels[gameState.level].description}`;
}

// Вспомогательные функции
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Обработчики событий
submitButton.addEventListener('click', checkAnswer);
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

nextLevelButton.addEventListener('click', nextLevel);
playAgainButton.addEventListener('click', initGame);
restartButton.addEventListener('click', initGame);
exitButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Запуск игры
initGame();