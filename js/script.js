let titles = document.querySelectorAll('.card__question-title');

titles.forEach(title => {
    title.addEventListener('click', function() {
        let container = title.parentElement;
        if (container.classList.contains('card__question--active')) {
            container.classList.remove('card__question--active');
        } else {
            document.querySelectorAll('.card__question').forEach(question => {
                question.classList.remove('card__question--active');
            });
            container.classList.add('card__question--active');
        }
    })
})