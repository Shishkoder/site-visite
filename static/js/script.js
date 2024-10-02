// Добавляем обработчик события на форму или кнопку отправки
document.getElementById('email').addEventListener('input', function() {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;

    // Проверяем, пустое ли поле
    if (emailValue === "") {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.remove('is-valid');
        return; // Если поле пустое, не показываем валидацию
    }

    // Простая проверка на валидность email
    if (emailInput.checkValidity()) {
        // Если email корректный, убираем класс ошибки
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid'); // Можно добавить класс успешного ввода
    } else {
        // Если email некорректный, показываем сообщение об ошибке
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
    }
});
