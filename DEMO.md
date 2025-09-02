# 🍓 Frunet-Ayacucho - Guía de Demostración

## 🚀 Cómo Probar el Sistema

### 1. Abrir el Sitio Web
1. Haz doble clic en `index.html`
2. El sitio se abrirá en tu navegador web
3. Verás la página principal con el diseño completo

### 2. Navegar por las Secciones
- **Inicio**: Página principal con hero section
- **Productos**: Catálogo de 6 ensaladas diferentes
- **Promociones**: Ofertas especiales y descuentos
- **Contacto**: Formulario de pedidos y información

### 3. Probar el Carrito de Compras
1. Ve a la sección "Productos"
2. Haz clic en "Agregar al Carrito" en cualquier ensalada
3. Verás una notificación de confirmación
4. Haz clic en el ícono del carrito (🛒) en la barra de navegación
5. En el modal del carrito puedes:
   - Ver los productos agregados
   - Cambiar cantidades con los botones + y -
   - Eliminar productos individuales
   - Vaciar todo el carrito
   - Ver el total en tiempo real

### 4. Probar el Formulario de Pedidos
1. Ve a la sección "Contacto"
2. Llena el formulario con datos de prueba:
   - **Nombre**: Juan Pérez
   - **Teléfono**: 926001110
   - **Email**: juan@ejemplo.com
   - **Ubicación**: Plaza Mayor, Ayacucho
   - **Fecha**: Selecciona una fecha futura
   - **Hora**: Selecciona una hora
   - **Notas**: Pedido de prueba
3. Haz clic en "Enviar Pedido"
4. Verás un mensaje de éxito
5. Se abrirá WhatsApp con el pedido formateado

### 5. Probar la Navegación Móvil
1. Redimensiona tu navegador a menos de 768px de ancho
2. Verás el menú hamburguesa (☰)
3. Haz clic para abrir/cerrar el menú móvil
4. Navega por las diferentes secciones

### 6. Probar las Promociones
1. Ve a la sección "Promociones"
2. Haz clic en los botones de cada promoción
3. Verás notificaciones de confirmación

## 🎯 Funcionalidades a Probar

### ✅ Carrito de Compras
- [ ] Agregar productos
- [ ] Cambiar cantidades
- [ ] Eliminar productos
- [ ] Vaciar carrito
- [ ] Cálculo automático del total
- [ ] Persistencia en localStorage

### ✅ Formulario de Pedidos
- [ ] Validación de campos requeridos
- [ ] Validación en tiempo real
- [ ] Envío exitoso
- [ ] Integración con WhatsApp
- [ ] Limpieza automática del formulario

### ✅ Navegación
- [ ] Scroll suave entre secciones
- [ ] Menú móvil responsive
- [ ] Navegación por enlaces internos
- [ ] Botón de regreso al inicio

### ✅ Animaciones
- [ ] Efectos hover en productos
- [ ] Animaciones de entrada al hacer scroll
- [ ] Transiciones suaves en botones
- [ ] Efectos de escala en interacciones

### ✅ Notificaciones
- [ ] Mensajes de éxito
- [ ] Mensajes de error
- - Auto-ocultado después de 3 segundos
- [ ] Posicionamiento correcto

## 📱 Responsive Design

### Desktop (>1200px)
- Diseño completo con sidebar
- Grid de productos en 3 columnas
- Navegación horizontal completa

### Tablet (768px - 1199px)
- Grid de productos en 2 columnas
- Navegación adaptada
- Elementos redimensionados

### Mobile (<768px)
- Grid de productos en 1 columna
- Menú hamburguesa
- Botones y textos optimizados para touch

## 🔧 Personalización Rápida

### Cambiar Colores
Edita `styles.css`:
```css
.btn-primary {
    background: linear-gradient(135deg, #tu-color, #tu-color-claro);
}
```

### Cambiar Precios
Edita `index.html`:
```html
<div class="product-price">S/ 10.00</div>
<button data-price="10.00">
```

### Cambiar Número de WhatsApp
Edita `config.js`:
```javascript
phone: "tu-numero-aqui"
```

## 🐛 Solución de Problemas

### El carrito no funciona
- Verifica que `script.js` esté cargado
- Abre la consola del navegador (F12) para ver errores
- Asegúrate de que todos los archivos estén en la misma carpeta

### Las imágenes no se muestran
- Verifica que las imágenes estén en la misma carpeta
- Los nombres deben coincidir exactamente: `ensalada-1.jpg`, etc.

### El formulario no envía
- Verifica que todos los campos requeridos estén llenos
- Revisa la consola del navegador para errores
- Asegúrate de tener conexión a internet para WhatsApp

### El diseño no se ve bien
- Verifica que `styles.css` esté cargado
- Limpia la caché del navegador (Ctrl+F5)
- Verifica que estés usando un navegador moderno

## 📊 Datos de Prueba

### Productos Disponibles
1. **Ensalada Clásica** - S/ 8.00
2. **Ensalada Tropical** - S/ 10.00
3. **Ensalada Cítrica** - S/ 9.00
4. **Ensalada Berry** - S/ 12.00
5. **Ensalada Verde** - S/ 9.50
6. **Ensalada Premium** - S/ 15.00

### Promociones Activas
- **Combo Familiar**: 3x2 (S/ 20.00)
- **Descuento Estudiantil**: 20% off
- **Happy Hour**: 2x1 (2:00 PM - 4:00 PM)

## 🎉 ¡Listo para Usar!

Tu sistema de ventas de Frunet-Ayacucho está completamente funcional y listo para:

- ✅ Mostrar productos a clientes
- ✅ Recibir pedidos online
- ✅ Gestionar carrito de compras
- ✅ Integrar con WhatsApp
- ✅ Funcionar en todos los dispositivos
- ✅ Personalizar fácilmente

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:
1. Revisa este archivo DEMO.md
2. Consulta el README.md completo
3. Verifica la consola del navegador para errores
4. Asegúrate de que todos los archivos estén presentes

---

**🍓 ¡Disfruta tu nuevo sistema de ventas! 🍓**
