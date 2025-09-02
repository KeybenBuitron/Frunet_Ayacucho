# 🚀 Despliegue en Render - Frunet-Ayacucho

## 📋 Requisitos Previos

- ✅ Cuenta en [Render.com](https://render.com)
- ✅ Repositorio de GitHub conectado
- ✅ Proyecto subido a GitHub

## 🔧 Pasos para Desplegar en Render

### 1. **Conectar GitHub a Render**
1. Ve a [render.com](https://render.com) y crea una cuenta
2. Haz clic en "New +" y selecciona "Static Site"
3. Conecta tu cuenta de GitHub
4. Selecciona el repositorio: `KeybenBuitron/Frunet_Ayacucho`

### 2. **Configuración del Sitio**
- **Name**: `frunet-ayacucho`
- **Branch**: `main`
- **Build Command**: `echo "Static site - no build required"`
- **Publish Directory**: `.` (punto)

### 3. **Variables de Entorno (Opcional)**
```
NODE_ENV=production
SITE_NAME=Frunet-Ayacucho
SITE_DESCRIPTION=Ensaladas de frutas frescas y naturales
```

### 4. **Configuración Avanzada**
- **Auto-Deploy**: ✅ Activado
- **Pull Request Previews**: ✅ Activado (opcional)
- **Health Check Path**: `/` (raíz)

### 5. **Crear el Sitio**
- Haz clic en "Create Static Site"
- Render comenzará el despliegue automáticamente
- Espera 2-5 minutos para completar

## 🌐 URLs del Sitio

### **URL de Producción:**
```
https://frunet-ayacucho.onrender.com
```

### **URL de Previsualización (Pull Requests):**
```
https://frunet-ayacucho-pr-{numero}.onrender.com
```

## 📱 Características del Despliegue

### ✅ **Ventajas de Render:**
- **Hosting gratuito** para sitios estáticos
- **SSL automático** (HTTPS)
- **CDN global** para mejor rendimiento
- **Auto-deploy** desde GitHub
- **Previsualizaciones** de Pull Requests
- **Monitoreo** y logs automáticos

### 🔄 **Actualizaciones Automáticas:**
- Cada vez que hagas `git push` a `main`
- Render detectará los cambios automáticamente
- Desplegará la nueva versión en 2-5 minutos

## 🚨 Solución de Problemas

### **El sitio no se despliega:**
1. Verifica que el repositorio esté conectado
2. Revisa los logs de build en Render
3. Asegúrate de que `index.html` esté en la raíz

### **Errores 404:**
1. Verifica que `staticPublishPath` sea `.`
2. Asegúrate de que las rutas estén configuradas
3. Revisa que `index.html` sea el archivo principal

### **Problemas de CSS/JS:**
1. Verifica que los archivos estén en la raíz
2. Revisa las rutas en `index.html`
3. Asegúrate de que no haya errores de sintaxis

## 📊 Monitoreo y Analytics

### **Render Dashboard:**
- **Uptime**: Monitoreo de disponibilidad
- **Logs**: Registros de errores y acceso
- **Metrics**: Estadísticas de rendimiento

### **Integración con Google Analytics:**
```html
<!-- Agregar en index.html antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID-DE-GA"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID-DE-GA');
</script>
```

## 🎯 Próximos Pasos

1. **Desplegar en Render** siguiendo esta guía
2. **Configurar dominio personalizado** (opcional)
3. **Agregar Google Analytics** para métricas
4. **Configurar notificaciones** de despliegue
5. **Monitorear rendimiento** del sitio

## 📞 Soporte

- **Render Docs**: [docs.render.com](https://docs.render.com)
- **GitHub Issues**: [Frunet-Ayacucho Issues](https://github.com/KeybenBuitron/Frunet_Ayacucho/issues)
- **Comunidad**: [Render Community](https://community.render.com)

---

**🍓 ¡Tu sitio estará online en minutos! 🍓**
