# Conversor de Monedas

Un conversor de monedas simple y elegante desarrollado con HTML, CSS y JavaScript. Esta aplicación web permite convertir entre diferentes monedas de manera rápida y eficiente.

## 🚀 Características
- **Interfaz de Usuario Sencilla e Intuitiva:** Un diseño limpio y fácil de navegar permite a los usuarios realizar conversiones sin esfuerzo. Los campos de entrada y los menús desplegables son claros, y los botones son prominentes y fáciles de usar.

- **Conversión de Moneda en Tiempo Real:** La aplicación se conecta a una API externa para obtener las tasas de cambio más recientes, asegurando que las conversiones sean precisas y estén actualizadas.

- **Amplio Soporte de Monedas:** Permite la conversión entre una variedad de monedas, incluyendo las principales divisas globales y todas las monedas de Centroamérica (NIO, USD, EUR, GBP, JPY, MXN, BZD, CRC, GTQ, HNL, PAB).

- **Función de Intercambio Rápido:** Un botón dedicado permite a los usuarios intercambiar rápidamente las monedas de origen y destino, agilizando el proceso de conversión.

- **Visualización de Tasa de Cambio:** Muestra claramente la tasa de cambio actual utilizada para la conversión, proporcionando transparencia al usuario.

  - JPY (Yen Japonés)
  - MXN (Peso Mexicano)
- Botón de intercambio rápido entre monedas
- Muestra la tasa de cambio actual
- Diseño intuitivo y fácil de usar

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome (para iconos)
- API de tasas de cambio: [ExchangeRate-API](https://www.exchangerate-api.com/)

## 📋 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para obtener las tasas de cambio actualizadas)

## 💻 Cómo Usar

1. Abre `index.html` en tu navegador.
2. Ingresa la cantidad y selecciona las monedas de origen y destino en los menús desplegables.
3. Haz clic en el botón "Convertir" (o presiona Enter).
4. El resultado y la tasa de cambio se mostrarán al instante.

### 🔄 Intercambio Rápido

- Puedes intercambiar rápidamente las monedas de origen y destino usando el botón circular con el icono de intercambio

## 🎨 Estructura del Proyecto

```
conversor-de-monedas/
├── index.html      # Estructura principal de la aplicación
├── styles.css      # Estilos y diseño de la interfaz
├── script.js       # Lógica de conversión y funcionalidad
└── README.md       # Documentación del proyecto
```

## 🔄 Funcionamiento

1. La aplicación utiliza una API de tasas de cambio para obtener los valores actualizados
2. Los cálculos se realizan en tiempo real
3. La interfaz se actualiza automáticamente al realizar cambios
4. Los resultados se muestran con dos decimales para mayor precisión

## 📱 Diseño Responsivo

- La aplicación se adapta a diferentes tamaños de pantalla
- La interfaz de usuario está optimizada para una experiencia consistente y agradable tanto en dispositivos móviles como de escritorio.
- El diseño limpio y minimalista garantiza una fácil usabilidad en cualquier dispositivo.

### 🍴 Cómo Forkear el Proyecto

1. Ve al repositorio principal en GitHub
2. Haz clic en el botón "Fork" en la esquina superior derecha
3. Selecciona tu cuenta de GitHub como destino del fork
4. Espera a que se complete el proceso de forking
5. Clona tu fork localmente:
   ```bash
   git clone https://github.com/tu-usuario/conversor-de-monedas.git
   cd conversor-de-monedas
   ```
6. Configura el repositorio remoto original:
   ```bash
   git remote add upstream https://github.com/usuario-original/conversor-de-monedas.git
   ```
7. Mantén tu fork actualizado:
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

### 📤 Publicar en GitHub Pages

1. Ve a la configuración de tu repositorio en GitHub
2. En el menú lateral, haz clic en "Pages"
3. En la sección "Source", selecciona:
   - Branch: `main` (o la rama que desees publicar)
   - Folder: `/ (root)`
4. Haz clic en "Save"
5. Espera unos minutos mientras GitHub Pages procesa tu sitio
6. Tu sitio estará disponible en: `https://tu-usuario.github.io/conversor-de-monedas/`

Nota: Si tu repositorio es privado, necesitarás una cuenta de GitHub Pro para usar GitHub Pages.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## ✨ Créditos

- Iconos proporcionados por [Font Awesome](https://fontawesome.com/)
- Tasas de cambio proporcionadas por [API de tasas de cambio](https://exchangerate.host/)

## 🛠️ Configuración Local para Desarrollo

Para configurar y ejecutar el proyecto localmente en tu entorno de desarrollo, sigue estos pasos:

1.  **Clonar el Repositorio:** Si tienes Git instalado, abre tu terminal o línea de comandos y ejecuta el siguiente comando para clonar el repositorio:

