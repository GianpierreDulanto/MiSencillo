# MiSencillo Frontend Guide

Guia para construir nuevas pantallas en el proyecto sin romper consistencia visual, rutas ni arquitectura.

## 1. Stack del proyecto

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4
- Componentes UI con Radix/shadcn
- ESLint + Prettier

## 2. Comandos de desarrollo

- Instalar dependencias:
  npm install
- Levantar entorno local:
  npm run dev
- Lint:
  npm run lint
- Build:
  npm run build
- Formatear:
  npm run format

## 3. Estructura principal

- src/app
  - Rutas por pantalla con App Router
- src/components/shared
  - Componentes reutilizables para auth y flujos comunes
- src/components/ui
  - Componentes base de UI (ejemplo: Select)
- src/lib
  - utilidades, acciones, constantes

## 4. Regla principal: si se repite, se vuelve componente

Si un bloque se repite en 2 o mas pantallas, extraerlo antes de continuar.

Ejemplos ya existentes:

- src/components/shared/close-link-button.tsx
- src/components/shared/social-auth-buttons.tsx
- src/components/shared/numeric-keypad.tsx
- src/components/shared/pin-digit-boxes.tsx

Checklist rapido:

- Se repite layout o boton en varias pantallas
- Misma estructura + cambio de texto menor
- Misma logica de teclado, codigo o PIN

## 5. Estilos: usar tokens, NO colores hardcodeados

Obligatorio:

- Usar clases semanticas de Tailwind ya definidas en globals
- Priorizar tokens como:
  - bg-brand-violet
  - bg-brand-lime
  - bg-surface
  - bg-surface-soft
  - text-ink
  - text-brand-violet

No permitido:

- Poner hex directo en componentes cuando exista token
  - Ejemplo incorrecto: color morado hardcodeado
  - Ejemplo correcto: bg-brand-violet

Referencia de tema:

- src/app/globals.css

## 6. Enrutamiento y navegacion

Para flujos guiados se usa principalmente reemplazo de ruta para evitar volver atras con estados intermedios.

Patron recomendado:

- router.replace("/ruta-siguiente")

Usar Link para navegacion de texto o links secundarios.

## 7. Flujo actual de registro y KYC

Flujo principal implementado:

- /get-started
- /sign-up
- /verify-phone
- /verify-code
- /residence-country
- /upload-identity-proof
- /capture-id
- /enable-face-id
- /selfie-scan (opcional)
- /create-pin
- /aproval
- /dashboard

Login:

- /sign-in
- /enter-pin
- /dashboard

## 8. Como crear una nueva pantalla

1. Crear carpeta y page.tsx en src/app con la ruta objetivo.
2. Mantener layout mobile-first con max width consistente.
3. Reutilizar shared components existentes.
4. Si aparece un nuevo patron repetible, moverlo a src/components/shared.
5. Usar colores y radios del sistema de tema.
6. Conectar navegacion con router.replace en pasos de flujo.
7. Validar lint y errores antes de subir cambios.

## 9. Convenciones de UI

- Base de pantalla auth: fondo suave, contenido centrado, ancho maximo movil
- Botones primarios: brand-lime, texto legible, radio consistente
- Titulos: claros, jerarquia fuerte
- Inputs/selects: usar componentes UI existentes (por ejemplo Select)
- Evitar sobrecargar pantallas de camara: simple, frame visible, controles abajo

## 10. Calidad antes de merge

Checklist minimo:

- No hay errores en Problems panel
- No hay clases de Tailwind no canonicas cuando existe alternativa
- No hay colores hex hardcodeados si ya existe token
- No hay duplicacion innecesaria de JSX
- Navegacion completa validada manualmente
- npm run lint en verde

## 11. Problemas comunes

Errores de at-rules en CSS de Tailwind v4:

- El workspace ya tiene configuracion para evitar falsos positivos del linter CSS en VS Code.

Import de globals.css en layout:

- Si aparece error de tipos para side-effect import, revisar tipos globales y configuracion TypeScript del proyecto.

## 12. Regla de oro del equipo

Antes de agregar codigo nuevo, revisar:

- Si ya existe componente shared equivalente
- Si el color ya existe en el sistema de tema
- Si la ruta ya esta dentro del flujo definido

Si la respuesta es si, reutilizar. Si no, crear siguiendo esta guia.
