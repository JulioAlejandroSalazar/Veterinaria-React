# 🐾 Veterinaria Cuidado Animal

Aplicación web desarrollada en **React** para la gestión de citas veterinarias.  
Permite visualizar citas agendadas, acceder al detalle de cada una y navegar de forma simple entre vistas, utilizando datos simulados con **MSW** y pruebas automatizadas.

---

## 📌 Características principales

- 📋 Listado de citas veterinarias
- 🔍 Visualización del detalle de una cita
- 🧭 Navegación entre vistas con React Router
- 🧪 Mock de API REST y GraphQL usando MSW
- ✅ Pruebas unitarias con Vitest
- 🧪 Pruebas End-to-End (E2E) con Cypress
- 🎨 Interfaz responsive con Tailwind CSS

---

## 🛠️ Tecnologías utilizadas

- **React**
- **Vite**
- **React Router DOM**
- **Tailwind CSS**
- **MSW (Mock Service Worker)**
- **Vitest** (pruebas unitarias)
- **Cypress** (pruebas E2E)

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd veterinaria-cuidado-animal
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar la aplicación en modo desarrollo
```bash
npm run dev
```

La aplicación se ejecuta por defecto en:
http://localhost:5173

---

## 🧪 Testing
### 🔹 Pruebas unitarias (Vitest)

El proyecto incluye pruebas unitarias para validar el comportamiento de componentes y lógica de la aplicación, ejecutadas con Vitest y entorno DOM simulado.

Para ejecutar las pruebas unitarias:
```bash
npm run test
```

### 🔹 Pruebas End-to-End (Cypress)

Las pruebas E2E verifican el flujo completo de la aplicación desde la perspectiva del usuario, incluyendo:

- Carga correcta de la página principal

- Visualización de al menos una cita

- Navegación al detalle de una cita

- Retorno al Home desde el detalle

Para ejecutar Cypress:
```bash
npx cypress open
```
