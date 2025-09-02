// Variables globales
let cart = [];
let cartTotal = 0;

// Elementos del DOM
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const cartIcon = document.querySelector('.cart-icon');
const closeModal = document.querySelector('.close');
const clearCartBtn = document.getElementById('clear-cart');
const checkoutBtn = document.getElementById('checkout');
const orderForm = document.getElementById('orderForm');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Cargar carrito desde localStorage
    loadCart();
    
    // Event listeners
    setupEventListeners();
    
    // Configurar navegación móvil
    setupMobileNavigation();
    
    // Configurar scroll suave
    setupSmoothScrolling();
}

function setupEventListeners() {
    // Botones de agregar al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Carrito
    cartIcon.addEventListener('click', openCart);
    closeModal.addEventListener('click', closeCart);
    clearCartBtn.addEventListener('click', clearCart);
    checkoutBtn.addEventListener('click', checkout);
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            closeCart();
        }
    });

    // Formulario de pedido
    orderForm.addEventListener('submit', handleOrderSubmit);
}

function setupMobileNavigation() {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

function setupSmoothScrolling() {
    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Funciones del carrito
function addToCart(event) {
    const button = event.target;
    const productId = button.dataset.id;
    const productName = button.dataset.name;
    const productPrice = parseFloat(button.dataset.price);

    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    // Actualizar carrito
    updateCart();
    
    // Mostrar notificación
    showNotification(`${productName} agregado al carrito`, 'success');
    
    // Animación del botón
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

function updateCart() {
    // Calcular total
    cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Actualizar contador
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Actualizar items del carrito
    renderCartItems();
    
    // Guardar en localStorage
    saveCart();
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        cartTotalElement.textContent = '0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">S/ ${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="decreaseQuantity('${item.id}')">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="increaseQuantity('${item.id}')">+</button>
            </div>
            <button class="quantity-btn remove-btn" onclick="removeFromCart('${item.id}')">×</button>
        </div>
    `).join('');

    cartTotalElement.textContent = cartTotal.toFixed(2);
}

function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCart();
    } else if (item && item.quantity === 1) {
        removeFromCart(productId);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Producto removido del carrito', 'success');
}

function clearCart() {
    cart = [];
    updateCart();
    showNotification('Carrito vaciado', 'success');
}

function openCart() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }

    // Aquí puedes implementar la lógica de checkout
    // Por ahora, solo mostraremos un mensaje de éxito
    showNotification('¡Gracias por tu compra! Te contactaremos pronto.', 'success');
    
    // Limpiar carrito después del checkout
    setTimeout(() => {
        clearCart();
        closeCart();
    }, 2000);
}

// Funciones de localStorage
function saveCart() {
    localStorage.setItem('frunetCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('frunetCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Funciones de notificaciones
function showNotification(message, type = 'success') {
    // Remover notificaciones existentes
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Ocultar notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Manejo del formulario de pedido
function handleOrderSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(orderForm);
    const orderData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        location: formData.get('location'),
        date: formData.get('date'),
        time: formData.get('time'),
        notes: formData.get('notes'),
        cart: cart,
        total: cartTotal,
        timestamp: new Date().toISOString()
    };
    
    // Aquí puedes implementar el envío del pedido a un servidor
    // Por ahora, solo mostraremos un mensaje de éxito
    console.log('Datos del pedido:', orderData);
    
    showNotification('¡Pedido enviado con éxito! Te contactaremos pronto.', 'success');
    
    // Limpiar formulario
    orderForm.reset();
    
    // Limpiar carrito
    clearCart();
    
    // Enviar WhatsApp (opcional)
    sendWhatsAppOrder(orderData);
}

function sendWhatsAppOrder(orderData) {
    const phone = '926001110';
    const message = `🍓 *NUEVO PEDIDO FRUNET-AYACUCHO* 🍓

*Cliente:* ${orderData.name}
*Teléfono:* ${orderData.phone}
*Email:* ${orderData.email || 'No especificado'}
*Ubicación:* ${orderData.location}
*Fecha de entrega:* ${orderData.date}
*Hora:* ${orderData.time}
*Notas:* ${orderData.notes || 'Sin notas adicionales'}

*PRODUCTOS:*
${orderData.cart.map(item => `• ${item.name} x${item.quantity} - S/ ${item.price.toFixed(2)}`).join('\n')}

*TOTAL: S/ ${orderData.total.toFixed(2)}*

¡Gracias por elegirnos! 🍓`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp en nueva ventana
    setTimeout(() => {
        if (confirm('¿Deseas abrir WhatsApp para confirmar tu pedido?')) {
            window.open(whatsappUrl, '_blank');
        }
    }, 1000);
}

// Funciones de utilidad
function formatPrice(price) {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN'
    }).format(price);
}

// Animaciones de scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.product-card, .feature, .promotion-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Inicializar animaciones cuando la página esté completamente cargada
window.addEventListener('load', function() {
    animateOnScroll();
});

// Función para validar formulario
function validateForm() {
    const requiredFields = orderForm.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ff6b6b';
            isValid = false;
        } else {
            field.style.borderColor = '#e9ecef';
        }
    });
    
    return isValid;
}

// Agregar validación en tiempo real
orderForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = '#e9ecef';
        }
    });
    
    field.addEventListener('input', function() {
        if (this.style.borderColor === 'rgb(255, 107, 107)') {
            this.style.borderColor = '#e9ecef';
        }
    });
});

// Función para mostrar/ocultar menú móvil
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Event listener para el botón hamburguesa
if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}

// Cerrar menú móvil al hacer clic en enlaces
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Función para hacer scroll suave a secciones
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Event listeners para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Función para mostrar productos destacados
function highlightProducts() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

// Función para actualizar precios en tiempo real
function updatePrices() {
    // Aquí puedes implementar lógica para actualizar precios dinámicamente
    // Por ejemplo, aplicar descuentos, cambiar precios por temporada, etc.
    console.log('Precios actualizados');
}

// Función para manejar promociones
function handlePromotions() {
    const promotionButtons = document.querySelectorAll('.promotion-card .btn');
    
    promotionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const promotionTitle = this.closest('.promotion-card').querySelector('h3').textContent;
            showNotification(`¡Promoción "${promotionTitle}" aplicada!`, 'success');
        });
    });
}

// Inicializar funciones adicionales
document.addEventListener('DOMContentLoaded', function() {
    handlePromotions();
    updatePrices();
});
