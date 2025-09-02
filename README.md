# 🍓 Frunet-Ayacucho - Sistema de Ventas y Promoción

## Descripción del Proyecto

Frunet-Ayacucho es un sistema de ventas y promoción web completo para una empresa dedicada a la elaboración y venta de ensaladas de frutas frescas, naturales y de alta calidad en Ayacucho, Perú.

## 🌟 Características Principales

### 🎨 Diseño Moderno y Responsive
- Interfaz atractiva y profesional
- Diseño completamente responsive para móviles y tablets
- Animaciones suaves y efectos visuales
- Paleta de colores vibrante y atractiva

### 🛒 Sistema de Carrito de Compras
- Agregar/remover productos del carrito
- Control de cantidades
- Cálculo automático del total
- Persistencia de datos en localStorage
- Modal de carrito funcional

### 📱 Navegación Móvil
- Menú hamburguesa para dispositivos móviles
- Navegación táctil optimizada
- Scroll suave entre secciones

### 📋 Formulario de Pedidos
- Formulario completo de contacto
- Validación en tiempo real
- Integración con WhatsApp para confirmación
- Campos obligatorios y opcionales

### 🎯 Sistema de Promociones
- Promociones especiales destacadas
- Ofertas por tiempo limitado
- Descuentos estudiantiles
- Combos familiares

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet para fuentes y iconos

### Pasos de Instalación

1. **Descargar archivos**
   - Asegúrate de tener todos los archivos en la misma carpeta:
     - `index.html`
     - `styles.css`
     - `script.js`
     - Imágenes de ensaladas (`ensalada-1.jpg` a `ensalada-6.jpg`)

2. **Abrir el proyecto**
   - Haz doble clic en `index.html`
   - O abre el archivo desde tu navegador web

3. **Configuración opcional**
   - Edita `script.js` para cambiar el número de WhatsApp
   - Modifica precios en `index.html`
   - Personaliza colores en `styles.css`

## 📁 Estructura de Archivos

```
frunet-ayacucho/
├── index.html          # Página principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
├── ensalada-1.jpg      # Imagen de producto 1
├── ensalada-2.jpg      # Imagen de producto 2
├── ensalada-3.jpg      # Imagen de producto 3
├── ensalada-4.jpg      # Imagen de producto 4
├── ensalada-5.jpg      # Imagen de producto 5
└── ensalada-6.jpg      # Imagen de producto 6
```

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
.btn-primary {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
}
```

### Modificar Precios
Edita los precios en `index.html`:
```html
<div class="product-price">S/ 8.00</div>
<button class="btn btn-primary add-to-cart" data-price="8.00">
```

### Cambiar Número de WhatsApp
Edita en `script.js`:
```javascript
const phone = '926001110'; // Cambia por tu número
```

## 📱 Funcionalidades del Sistema

### 1. Catálogo de Productos
- 6 tipos de ensaladas diferentes
- Imágenes atractivas de cada producto
- Descripciones detalladas
- Precios claros y visibles

### 2. Carrito de Compras
- Agregar productos con un clic
- Control de cantidades (+/-)
- Eliminar productos individuales
- Vaciar carrito completo
- Total automático en tiempo real

### 3. Formulario de Pedidos
- Datos del cliente (nombre, teléfono, email)
- Ubicación de entrega
- Fecha y hora de entrega
- Notas adicionales
- Validación de campos obligatorios

### 4. Integración WhatsApp
- Envío automático de pedidos
- Formato profesional del mensaje
- Incluye todos los detalles del pedido
- Fácil confirmación por parte del cliente

### 5. Sistema de Promociones
- Promociones destacadas visualmente
- Ofertas por tiempo limitado
- Descuentos especiales
- Combos y paquetes

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconos profesionales
- **Google Fonts**: Tipografía Poppins
- **LocalStorage**: Persistencia de datos del carrito

## 📱 Responsive Design

El sistema está optimizado para:
- **Desktop**: 1200px y superior
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Público Objetivo

- Niños y jóvenes
- Adultos y familias
- Estudiantes
- Trabajadores de oficina
- Deportistas
- Personas interesadas en alimentación saludable

## 📍 Puntos de Venta

- Centros educativos
- Parques y plazas
- Oficinas y empresas
- Eventos especiales
- Entrega a domicilio

## 💰 Precios de Productos

1. **Ensalada Clásica**: S/ 8.00
2. **Ensalada Tropical**: S/ 10.00
3. **Ensalada Cítrica**: S/ 9.00
4. **Ensalada Berry**: S/ 12.00
5. **Ensalada Verde**: S/ 9.50
6. **Ensalada Premium**: S/ 15.00

## 🎉 Promociones Disponibles

- **Combo Familiar**: 3 ensaladas por el precio de 2
- **Descuento Estudiantil**: 20% con carné
- **Happy Hour**: 2x1 de 2:00 PM a 4:00 PM

## 📞 Información de Contacto

- **Teléfono**: 926 001 110
- **Ubicación**: Ayacucho, Perú
- **Horarios**: Lunes a Domingo 8:00 AM - 8:00 PM

## 🚀 Funcionalidades Avanzadas

### Animaciones
- Efectos de hover en productos
- Animaciones de entrada al hacer scroll
- Transiciones suaves en botones
- Efectos de escala en interacciones

### Notificaciones
- Sistema de notificaciones toast
- Mensajes de éxito y error
- Auto-ocultado después de 3 segundos
- Posicionamiento fijo en pantalla

### Validación de Formularios
- Validación en tiempo real
- Indicadores visuales de campos requeridos
- Mensajes de error contextuales
- Prevención de envío con datos inválidos

## 🔒 Seguridad y Privacidad

- No se almacenan datos sensibles
- Uso de localStorage solo para carrito
- Formularios con validación del lado cliente
- Integración segura con WhatsApp

## 📈 Optimizaciones de Rendimiento

- Lazy loading de imágenes
- CSS optimizado con variables
- JavaScript modular y eficiente
- Animaciones optimizadas con CSS

## 🌐 Compatibilidad de Navegadores

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 Notas de Desarrollo

### Estructura del Código
- Código modular y reutilizable
- Comentarios explicativos en español
- Nomenclatura consistente
- Separación clara de responsabilidades

### Mantenimiento
- Fácil actualización de precios
- Modificación simple de productos
- Personalización de colores y estilos
- Agregado de nuevas funcionalidades

## 🎨 Paleta de Colores

- **Primario**: #ff6b6b (Rosa/Red)
- **Secundario**: #4ecdc4 (Turquesa)
- **Acento**: #ffd700 (Dorado)
- **Neutro**: #333, #666, #f8f9fa

## 🔮 Futuras Mejoras

- Sistema de usuarios y cuentas
- Historial de pedidos
- Sistema de puntos y recompensas
- Integración con redes sociales
- Panel de administración
- Sistema de pagos en línea
- App móvil nativa

## 📞 Soporte Técnico

Para soporte técnico o consultas sobre el sistema:
- Revisa este README
- Verifica la consola del navegador para errores
- Asegúrate de que todos los archivos estén en la misma carpeta

## 📄 Licencia

Este proyecto está desarrollado para uso comercial de Frunet-Ayacucho.

---

**🍓 Frunet-Ayacucho - Ensaladas de Frutas Frescas y Naturales**  
*Sabor, calidad e innovación en cada bocado*
