// 🍓 Frunet-Ayacucho - Archivo de Configuración
// Este archivo contiene todas las configuraciones personalizables del sistema

const FRUNET_CONFIG = {
    // Información de la Empresa
    company: {
        name: "Frunet-Ayacucho",
        slogan: "Ensaladas de Frutas Frescas y Naturales",
        description: "Empresa dedicada a la elaboración y venta de ensaladas de frutas frescas, naturales y de alta calidad",
        phone: "926001110",
        location: "Ayacucho, Perú",
        hours: "Lun - Dom: 8:00 AM - 8:00 PM",
        email: "info@frunet-ayacucho.com"
    },

    // Configuración de Productos
    products: [
        {
            id: "1",
            name: "Ensalada Clásica",
            description: "Mezcla perfecta de manzana, plátano, uvas y fresas",
            price: 8.00,
            image: "ensalada-1.jpg",
            category: "clasica",
            featured: true
        },
        {
            id: "2",
            name: "Ensalada Tropical",
            description: "Piña, mango, papaya y coco fresco",
            price: 10.00,
            image: "ensalada-2.jpg",
            category: "tropical",
            featured: true
        },
        {
            id: "3",
            name: "Ensalada Cítrica",
            description: "Naranja, mandarina, limón y pomelo",
            price: 9.00,
            image: "ensalada-3.jpg",
            category: "citrica",
            featured: false
        },
        {
            id: "4",
            name: "Ensalada Berry",
            description: "Fresas, arándanos, frambuesas y moras",
            price: 12.00,
            image: "ensalada-4.jpg",
            category: "berry",
            featured: true
        },
        {
            id: "5",
            name: "Ensalada Verde",
            description: "Kiwi, uvas verdes, manzana verde y pera",
            price: 9.50,
            image: "ensalada-5.jpg",
            category: "verde",
            featured: false
        },
        {
            id: "6",
            name: "Ensalada Premium",
            description: "Combinación exclusiva con frutas exóticas",
            price: 15.00,
            image: "ensalada-6.jpg",
            category: "premium",
            featured: true
        }
    ],

    // Configuración de Promociones
    promotions: [
        {
            id: "promo1",
            title: "Combo Familiar",
            description: "3 ensaladas por el precio de 2",
            oldPrice: 30.00,
            newPrice: 20.00,
            badge: "¡OFERTA!",
            type: "combo",
            active: true
        },
        {
            id: "promo2",
            title: "Descuento Estudiantil",
            description: "20% de descuento presentando carné",
            discount: 20,
            badge: "¡NUEVO!",
            type: "descuento",
            active: true
        },
        {
            id: "promo3",
            title: "Happy Hour",
            description: "2x1 en todas las ensaladas de 2:00 PM a 4:00 PM",
            timeRange: "2:00 PM - 4:00 PM",
            badge: "¡FLASH!",
            type: "temporal",
            active: true
        }
    ],

    // Configuración de Colores
    colors: {
        primary: "#ff6b6b",
        secondary: "#4ecdc4",
        accent: "#ffd700",
        success: "#4ecdc4",
        error: "#ff6b6b",
        warning: "#ffa726",
        info: "#42a5f5",
        dark: "#333333",
        light: "#f8f9fa",
        white: "#ffffff"
    },

    // Configuración de Redes Sociales
    socialMedia: {
        facebook: "https://facebook.com/frunetayacucho",
        instagram: "https://instagram.com/frunetayacucho",
        whatsapp: "https://wa.me/926001110",
        tiktok: "https://tiktok.com/@frunetayacucho"
    },

    // Configuración de Puntos de Venta
    locations: [
        "Centros Educativos",
        "Parques y Plazas",
        "Oficinas y Empresas",
        "Eventos Especiales",
        "Entrega a Domicilio"
    ],

    // Configuración de Horarios
    schedule: {
        monday: { open: "8:00 AM", close: "8:00 PM" },
        tuesday: { open: "8:00 AM", close: "8:00 PM" },
        wednesday: { open: "8:00 AM", close: "8:00 PM" },
        thursday: { open: "8:00 AM", close: "8:00 PM" },
        friday: { open: "8:00 AM", close: "8:00 PM" },
        saturday: { open: "8:00 AM", close: "8:00 PM" },
        sunday: { open: "8:00 AM", close: "8:00 PM" }
    },

    // Configuración de WhatsApp
    whatsapp: {
        phone: "926001110",
        messageTemplate: "🍓 *NUEVO PEDIDO FRUNET-AYACUCHO* 🍓\n\n*Cliente:* {name}\n*Teléfono:* {phone}\n*Email:* {email}\n*Ubicación:* {location}\n*Fecha de entrega:* {date}\n*Hora:* {time}\n*Notas:* {notes}\n\n*PRODUCTOS:*\n{products}\n\n*TOTAL: S/ {total}*\n\n¡Gracias por elegirnos! 🍓",
        autoOpen: true,
        confirmationDelay: 1000
    },

    // Configuración de Animaciones
    animations: {
        enabled: true,
        duration: 600,
        easing: "ease",
        scrollThreshold: 0.1,
        staggerDelay: 200
    },

    // Configuración de Notificaciones
    notifications: {
        enabled: true,
        duration: 3000,
        position: "top-right",
        sound: false,
        autoHide: true
    },

    // Configuración del Carrito
    cart: {
        maxItems: 50,
        saveToLocalStorage: true,
        showQuantityControls: true,
        allowNegativeQuantities: false,
        autoUpdateTotal: true
    },

    // Configuración de Formularios
    forms: {
        validateOnBlur: true,
        validateOnInput: true,
        showValidationMessages: true,
        requiredFieldIndicator: "*",
        successMessage: "¡Pedido enviado con éxito! Te contactaremos pronto.",
        errorMessage: "Por favor, completa todos los campos requeridos."
    },

    // Configuración de SEO
    seo: {
        title: "Frunet-Ayacucho - Ensaladas de Frutas Frescas y Naturales",
        description: "Descubre el sabor auténtico de las frutas de temporada de Ayacucho. Ensaladas frescas, naturales y de alta calidad.",
        keywords: "ensaladas, frutas, frescas, naturales, ayacucho, peru, saludable, nutritivo",
        author: "Frunet-Ayacucho",
        ogImage: "ensalada-1.jpg"
    },

    // Configuración de Analytics
    analytics: {
        enabled: false,
        googleAnalyticsId: "",
        facebookPixelId: "",
        hotjarId: ""
    },

    // Configuración de Mantenimiento
    maintenance: {
        enabled: false,
        message: "Sitio en mantenimiento. Volveremos pronto.",
        allowedIPs: []
    }
};

// Función para obtener configuración
function getConfig(key) {
    return key ? FRUNET_CONFIG[key] : FRUNET_CONFIG;
}

// Función para actualizar configuración
function updateConfig(key, value) {
    if (key && value !== undefined) {
        FRUNET_CONFIG[key] = value;
        console.log(`Configuración actualizada: ${key} =`, value);
    }
}

// Función para obtener productos destacados
function getFeaturedProducts() {
    return FRUNET_CONFIG.products.filter(product => product.featured);
}

// Función para obtener productos por categoría
function getProductsByCategory(category) {
    return FRUNET_CONFIG.products.filter(product => product.category === category);
}

// Función para obtener promociones activas
function getActivePromotions() {
    return FRUNET_CONFIG.promotions.filter(promo => promo.active);
}

// Función para formatear precio
function formatPrice(price) {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN'
    }).format(price);
}

// Función para validar número de teléfono
function validatePhone(phone) {
    const phoneRegex = /^[9]\d{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Función para validar email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para obtener horario actual
function getCurrentSchedule() {
    const now = new Date();
    const dayName = now.toLocaleDateString('es-ES', { weekday: 'long' });
    const dayKey = dayName.toLowerCase();
    
    if (FRUNET_CONFIG.schedule[dayKey]) {
        return FRUNET_CONFIG.schedule[dayKey];
    }
    
    return { open: "8:00 AM", close: "8:00 PM" };
}

// Función para verificar si está abierto
function isOpen() {
    const schedule = getCurrentSchedule();
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    const openTime = schedule.open.replace(/\s(AM|PM)/i, '');
    const closeTime = schedule.close.replace(/\s(AM|PM)/i, '');
    
    // Lógica simple de comparación de tiempo
    return currentTime >= openTime && currentTime <= closeTime;
}

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FRUNET_CONFIG;
} else {
    // Para uso en navegador
    window.FRUNET_CONFIG = FRUNET_CONFIG;
    window.getConfig = getConfig;
    window.updateConfig = updateConfig;
    window.getFeaturedProducts = getFeaturedProducts;
    window.getProductsByCategory = getProductsByCategory;
    window.getActivePromotions = getActivePromotions;
    window.formatPrice = formatPrice;
    window.validatePhone = validatePhone;
    window.validateEmail = validateEmail;
    window.getCurrentSchedule = getCurrentSchedule;
    window.isOpen = isOpen;
}

// Log de inicialización
console.log('🍓 Configuración de Frunet-Ayacucho cargada correctamente');
console.log('📱 Empresa:', FRUNET_CONFIG.company.name);
console.log('📞 Teléfono:', FRUNET_CONFIG.company.phone);
console.log('📍 Ubicación:', FRUNET_CONFIG.company.location);
console.log('🕒 Horarios:', FRUNET_CONFIG.company.hours);
console.log('🍎 Productos disponibles:', FRUNET_CONFIG.products.length);
console.log('🎉 Promociones activas:', getActivePromotions().length);
