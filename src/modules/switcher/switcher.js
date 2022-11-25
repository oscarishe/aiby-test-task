export const addSwitcher = () => {
    const subButtons = document.querySelectorAll('.sub__item');
    const link = document.querySelector('.button');
    subButtons.forEach(item => {
        item.addEventListener('click', (e) => {
            subButtons.forEach(button => button.classList.remove('item_active'));
            item.classList.add('item_active');
            link.href = item.dataset.link;
            link.classList.remove('button_disabled');

        })
    })
}