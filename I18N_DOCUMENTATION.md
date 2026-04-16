# Sistema de Internacionalización (i18n)

## Descripción General

Se ha implementado un sistema completo y robusto de internacionalización que permite cambiar dinámicamente el idioma de la aplicación entre Español (es) e Inglés (en), **con persistencia garantizada en todas las páginas**.

## Características ✨

### ✅ Persistencia Garantizada

- **localStorage**: Guarda la preferencia en el navegador del usuario
- **Cookies del servidor**: Sincroniza la preferencia en el servidor
- **Sincronización entre pestañas**: Los cambios se sincronizan automáticamente si el usuario abre múltiples pestañas
- **Sincronización entre páginas**: Al navegar a cualquier página, el idioma se mantiene

### ✅ Selector de Idioma en Login

- Ubicado en la esquina superior derecha
- Componente Select de UI personalizado
- Guarda la preferencia inmediatamente

### ✅ Página de Idiomas en Settings

- Accesible desde Settings > General > Idiomas
- Interfaz intuitiva para cambiar el idioma
- Muestra información sobre los idiomas disponibles

### ✅ API de Cambio de Idioma

- Ruta: `POST /api/language`
- Guarda la preferencia en cookies del servidor
- GET `api/language` para obtener el idioma actual

## Estructura del Código

### Archivos Creados

```
src/
├── lib/i18n/
│   ├── translations.ts      # Definición de traducciones
│   ├── context.tsx          # React Context para idioma global
│   └── hooks.ts             # Hook personalizado para sincronización
├── components/shared/
│   └── language-selector.tsx # Componente selector de idioma
├── app/api/language/
│   └── route.ts             # API para cambiar idioma
└── app/(auth)/languages/
    └── page.tsx             # Página de selección de idioma
```

## Cómo Funciona la Persistencia

### 1. **Primer uso (Sin preferencia guardada)**

- Detecta el idioma guardado en `localStorage`
- Si no existe, usa Español (es) como predeterminado
- Renderiza con el idioma correcto

### 2. **Cambiar idioma (En Login)**

- Usuario selecciona idioma en el Select
- Se dispara `useLanguageSync()`
- Se actualiza `localStorage` inmediatamente
- Se sincroniza con la API (guarda en cookies del servidor)
- La aplicación re-renderiza con el nuevo idioma

### 3. **Navegación entre páginas**

- Al navegar, el `LanguageProvider` se mantiene
- El idioma se obtiene del `localStorage` en la hidratación
- Todas las páginas reflejan el idioma seleccionado

### 4. **Sincronización entre pestañas**

- Un `StorageEvent` listener detecta cambios en otras pestañas
- Actualiza automáticamente el contexto si cambia el idioma
- Todas las pestañas quedan sincronizadas

## Cómo Usar

### En Componentes

Para acceder a las traducciones en un componente, usa el hook `useLanguage`:

```typescript
'use client';

import { useLanguage } from '@/lib/i18n/context';

export function MyComponent() {
  const { t, language } = useLanguage();

  return (
    <div>
      <h1>{t.welcome_back}</h1>
      <p>Idioma actual: {language}</p>
    </div>
  );
}
```

### Para Cambiar el Idioma

Usa el hook `useLanguageSync` en componentes que permitan cambiar el idioma:

```typescript
'use client';

import { useLanguageSync } from '@/lib/i18n/hooks';

export function MyLanguageSwitcher() {
  const { language, setLanguage } = useLanguageSync();

  return (
    <button onClick={() => setLanguage('en')}>
      Switch to English
    </button>
  );
}
```

### Agregar Nuevas Traducciones

1. **Abre** `src/lib/i18n/translations.ts`
2. **Agrega** la nueva clave en la interfaz `Translations`:

```typescript
export type Translations = {
  // ... traducciones existentes
  new_key: string; // Nueva traducción
};
```

3. **Agrega** las traducciones en ambos idiomas:

```typescript
export const translations: Record<Language, Translations> = {
  es: {
    // ... traducciones existentes
    new_key: 'Mi texto en español',
  },
  en: {
    // ... traducciones existentes
    new_key: 'My text in English',
  },
};
```

4. **Usa** en tu componente:

```typescript
const { t } = useLanguage();
return <span>{t.new_key}</span>;
```

## Idiomas Soportados

- **es** - Español
- **en** - English

## Almacenamiento

| Ubicación                | Propósito                        | Duración      |
| ------------------------ | -------------------------------- | ------------- |
| **localStorage**         | Persistencia en el cliente       | Indefinida    |
| **cookies del servidor** | Sincronización server-side       | 1 año         |
| **React Context**        | Estado en memoria durante sesión | Sesión actual |

## Comportamiento

- **Valor por defecto**: Español (es)
- **Cambio**: Inmediato en toda la aplicación
- **Persistencia**: Entre sesiones
- **Sincronización**: Entre pestañas y páginas
- **Fallback**: Si hay error al acceder a localStorage, usa predeterminado

## Componentes Actualizados

- ✅ Página de Login (`sign-in`)
- ✅ Página de Settings
- ✅ Página de Idiomas (`languages`)
- ✅ Componente de Botones de Autenticación Social
- ✅ Selector de Idioma (UI)
- ✅ Layout Principal (envuelto con `LanguageProvider`)

## Requisitos

- React Context API (ya incluido)
- localStorage (navegadores modernos)
- El proveedor `LanguageProvider` debe envolver la aplicación (ya configurado en `src/app/layout.tsx`)

## Notas Importantes

- El componente `LanguageSelector` solo funciona en componentes cliente (`'use client'`)
- El `LanguageProvider` debe ser el padre de todos los componentes que usen `useLanguage()` o `useLanguageSync()`
- Las traducciones se cargan desde memoria, sin llamadas adicionales a la API por cada renderización
- La sincronización con la API es no-bloqueante (no afecta UX)
- Manejo robusto de errores si localStorage no está disponible

## Testing

Para probar la persistencia:

1. **En la página de login**: Cambia a English
2. **Navega a cualquier otra página**: Verifica que está en English
3. **Abre otra pestaña**: El idioma debe ser English
4. **En settings**: Cambia a Español
5. **Todos los idiomas en todas las páginas deben cambiar instantáneamente**
