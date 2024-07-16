// Prueba JavaScript
// Autor: @PedroNavarrete

// He probado los scripts en esta pagina:
// https://littlesleepies.com/collections/pickle-power/products/pickle-power-zippy

(function() {
  // Los tamaños elegibles para la promoción y los mensajes correspondientes
  const eligibleSizes = ["18-24 months", "2T", "3T"];
  const messages = [
      "Add 2 of this product and the third one is free!",
      "Add another one free to your cart.",
      "Congrats! Add to cart now!"
  ];

  // Funciones auxiliares para obtener el tamaño activo y la cantidad
  function getActiveSize() {
      const activeSizeLabel = document.querySelector('label.pdp-variant-select-label-active');
      return activeSizeLabel ? activeSizeLabel.textContent.trim() : null;
  }

  function getQuantity() {
      const quantityInput = document.querySelector('.pdp-quantity-input');
      return quantityInput ? parseInt(quantityInput.value, 10) : null;
  }

  // Función principal para mostrar el mensaje
  function showMessage(selectedSize, quantity) {
      // Encontramos el elemento del precio, porque el mensaje se mostrará debajo de él
      const priceElement = document.querySelector('span[data-cy="product-price"]').parentElement;
      if (!priceElement) return;

      // Si ya hay un mensaje, lo actualizamos, de lo contrario, lo creamos
      let messageElement = document.getElementById('promotion-message');

      // Si no existe, lo creamos
      if (!messageElement) {
          messageElement = document.createElement('div');
          messageElement.id = 'promotion-message';
          Object.assign(messageElement.style, {
              color: 'black',
              backgroundColor: '#9fc1c5',
              margin: '40px 0 -40px 0',
              padding: '10px',
              borderRadius: '5px'
          });
          priceElement.appendChild(messageElement);
      }

      // Si el tamano y la cantidad son elegibles, mostramos el mensaje que toca
      if (eligibleSizes.includes(selectedSize) && quantity >= 1 && quantity <= 3) {
          messageElement.textContent = messages[quantity - 1];
          messageElement.style.display = 'block';
      } else {
          messageElement.style.display = 'none';
      }
  }

  function updateMessage() {
      // Obtenemos el tamaño y la cantidad seleccionados
      const selectedSize = getActiveSize();
      const quantity = getQuantity();
      if (selectedSize && quantity) {
          showMessage(selectedSize, quantity);
      }
  }

  // Adjuntamos los event listeners
  function attachEventListeners() {
      // Escuchamos por clicks en los botones de tamaño
      document.querySelectorAll('label[data-cy="product-variant"] input').forEach(radio => {
          radio.addEventListener('click', updateMessage);
      });
      // El input de cantidad cambia dinamicamente, asi que escuchamos clicks en los botones
      // de incrementar y decrementar cantidad
      document.querySelectorAll('.js-pdp-quantity-button').forEach(button => {
          button.addEventListener('click', updateMessage);
      });
  }

  attachEventListeners();
  updateMessage();
})();