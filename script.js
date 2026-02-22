document.querySelectorAll('.quick-view').forEach(button => {

button.addEventListener('click', () => {

const productName = button.closest('.product-card')

.querySelector('.product-name').innerText;

const message = Olá, quero comprar a ${productName};

const url = https://wa.me/5531998409222?text=${encodeURIComponent(message)};

window.open(url, '_blank');

});

});
