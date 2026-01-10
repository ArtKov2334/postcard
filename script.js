// Находим элементы
const changingText = document.getElementById('changing-text');
const mainContainer = document.getElementById('main-container');
const buttons = document.querySelectorAll('.action-button');
const mainGif = document.getElementById('main-gif');

const messages = [
    "вот прям сільна да?",
    "прям очєньочєньочєнь сільна?",
    "ну вот прям КАПЄЄЄЄЄЄЄЄЄЦ как сільна?",
    "правда сільна?..."
];

let currentStep = 0;
let currentFontSize = 18; // Начальный размер шрифта (соответствует CSS)

function handleButtonClick() {
    if (currentStep < messages.length) {
        // Устанавливаем новый текст
        changingText.textContent = messages[currentStep];

        // Проверяем, последняя ли это фраза
        if (currentStep === messages.length - 1) {
            // На последней фразе возвращаем размер "как в начале"
            currentFontSize = 18;
            changingText.style.fontSize = currentFontSize + "px";
            
            // И меняем гифку
            if (mainGif) {
                mainGif.src = 'image2.gif';
            }
        } else {
            // Если фраза не последняя — увеличиваем шрифт (например, на 10 пикселей)
            currentFontSize += 10;
            changingText.style.fontSize = currentFontSize + "px";
        }

        currentStep++;
    } else {
        // Переход к финалу
        showFinalContent();
    }
}

function showFinalContent() {
    mainContainer.innerHTML = `
        <div class="final-scene">
            <h1>Сюрприз! 🎉</h1>
            <p>Ты дошел до конца.</p>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueXByeXpueXByeXpueXByeXpueXByeXpueXByeXpueXByeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lI4bYaloS8mbW8/giphy.gif" alt="Успех">
        </div>
    `;
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});