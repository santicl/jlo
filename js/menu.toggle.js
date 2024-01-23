function deleteBorderRadius() {
    const curtain = document.querySelector('.Curtain-Menu');
    const contentUl = document.querySelector('.Nav-Container ul');
    contentUl.classList.add('open');
    curtain.style.transition = 'border-radius 0.2s ease-in-out'; // Ajusta la duración según sea necesario
    curtain.style.borderRadius = '0';
}

document.addEventListener('DOMContentLoaded', function () {
    const iconMenuHamburguer = document.querySelector('.Hamburguer');
    const curtain = document.querySelector('.Curtain-Menu');

    iconMenuHamburguer.addEventListener('click', (e) => {
        e.preventDefault();

        if (iconMenuHamburguer.classList.contains('showX')) {
            iconMenuHamburguer.classList.remove('showX');
            curtain.classList.remove('open');
            curtain.style.transition = '';
            curtain.style.borderRadius = '50% 0 50% 0';
            const contentUl = document.querySelector('.Nav-Container ul.open');
            contentUl.classList.remove('open');
            const body = document.body;
            body.style.overflowY = 'scroll';
        } else {
            iconMenuHamburguer.classList.add('showX');
            curtain.classList.add('open');
            const body = document.body;
            body.style.overflow = 'hidden';
            setTimeout(() => {
                deleteBorderRadius();
            }, 150);
        }
    })
})