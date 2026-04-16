# Flujo de Persistencia del Idioma

## 📊 Diagrama de Flujo

```
┌─────────────────────────────────────────────────────────────┐
│                     USUARIO INICIA SESIÓN                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  LanguageProvider Monta    │
        │  (App Root - layout.tsx)   │
        └────────────┬───────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  Lee localStorage          │
        │  (getStoredLanguage())     │
        └────────────┬───────────────┘
                     │
        ┌────────────┴──────────────────┐
        │                               │
        ▼                               ▼
    ┌────────────┐          ┌──────────────────┐
    │  Encontró  │   NO     │  No encontró     │
    │  (es o en) │ ─────► │  Usa DEFAULT: es │
    └────────────┘          └──────────────────┘
        │                              │
        │ SI                           │
        └───────────┬──────────────────┘
                    │
                    ▼
        ┌──────────────────────────┐
        │ Renderiza con idioma     │
        │ en localStorage          │
        └────────────┬─────────────┘
                     │
                     ▼
        ┌──────────────────────────────────┐
        │    USUARIO SELECCIONA IDIOMA     │
        │  (LOGIN o SETTINGS > LANGUAGES)  │
        └────────────┬─────────────────────┘
                     │
                     ▼
        ┌──────────────────────────────┐
        │   setLanguage('es' | 'en')   │
        │   (useLanguageSync hook)     │
        └────────────┬─────────────────┘
                     │
        ┌────────────┴────────────┬────────────────┐
        │                         │                │
        ▼                         ▼                ▼
    ┌──────────┐          ┌─────────────┐    ┌──────────┐
    │ localStorage.     │ dispatch    │    │ POST    │
    │ setItem(idioma)  │ StorageEvent│    │ /api/   │
    │                  │             │    │language │
    └────────┬─────────┘             └────┴────┬──────┘
             │                                │
             ▼                                ▼
    ┌────────────────────┐        ┌──────────────────────┐
    │ Contexto actualiza │        │ Cookies server-side  │
    │ estado (language)  │        │ actualiz. (1 año)    │
    └────────┬───────────┘        └──────────────────────┘
             │
             ▼
    ┌──────────────────────┐
    │ Re-render toda la    │
    │ app con new language │
    └──────────┬───────────┘
               │
    ┌──────────┴──────────────────┐
    │                             │
    ▼                             ▼
┌─────────────────┐      ┌──────────────────┐
│ Usuario navega  │      │ Usuario abre     │
│ entre páginas   │      │ otra pestaña     │
│                 │      │                  │
│ Idioma PERSISTE │      │ StorageEvent se  │
│ en localStorage │      │ dispara en todas │
│ y contexto      │      │ las pestañas     │
└─────────────────┘      │ Sincroniza idioma│
                         └──────────────────┘
```

## 🔄 Flujo de Sincronización

### 1️⃣ Primera Carga

```
        navegador abierto
             │
             ▼
    localStorage ("misencillo-language")
             │
      ¿Existe? ─?
       ├─ SI ──► Lee valor (es/en)
       │         │
       │         ▼
       │    useState = valor_guardado
       │         │
       └─ NO ── useState = 'es' (default)
                     │
                     ▼
           Renderiza con ese idioma
```

### 2️⃣ Cambio de Idioma

```
    Usuario clicks en Select
             │
             ▼
    setLanguage(newLanguage)
             │
        ┌────┴────┬────────┬────────┐
        │          │        │        │
        ▼          ▼        ▼        ▼
    Context  localStorage API    Event
    State     setItem()   sync  Dispatch
        │          │        │        │
        └─────────┬────────┬────────┘
                   │
                   ▼
         App re-renderiza
         Todas las páginas
         usan nuevo idioma
```

### 3️⃣ Navegación entre Páginas

```
    Usuario navega a /settings
             │
             ▼
    LanguageProvider mantiene contexto
             │
             ▼
    useLanguage() lee del contexto
             │
             ▼
    Página renderiza con idioma actual
    (Sin cambios, sin re-hidratación)
```

### 4️⃣ Sincronización entre Pestañas

```
    Pestaña 1: Usuario cambia a English
             │
             ▼
    localStorage.setItem('misencillo-language', 'en')
             │
             ▼
    Dispara StorageEvent en todas las pestañas
             │
    ┌────────┴────────┐
    │                 │
    ▼                 ▼
Pestaña 1         Pestaña 2
English           Escucha evento
converido         │
                  ▼
                Actualiza estado
                a 'en'
                │
                ▼
                Renderiza English
```

## 🛡️ Manejo de Errores

### localStorage no disponible

```
try/catch en getStoredLanguage()
    │
    ├─ Error ────► return DEFAULT_LANGUAGE ('es')
    │
    └─ OK ───────► return stored_language
```

### API de sincronización falla

```
fetch('/api/language')
    │
    ├─ Error ────► console.warn (no crítico)
    │              El idioma ya está en localStorage
    │
    └─ OK ───────► Cookies actualizadas en servidor
```

## 💾 Dónde se Guarda

| Almacenamiento   | Ventaja                     | Duración   | Donde se Lee                  |
| ---------------- | --------------------------- | ---------- | ----------------------------- |
| **localStorage** | Acceso rápido, síncrono     | Indefinida | Cliente (context)             |
| **Cookies**      | Disponible en servidor      | 1 año      | Server-side (si es necesario) |
| **Context**      | Escalable, con suscriptores | Sesión     | Cualquier componente          |

## 🧪 Testing - Cómo Verificar que Funciona

### Test 1: Persistencia Básica

```
1. Abre login
2. Cambia a "English"
   ✓ Todo cambia a English
3. Recarga la página (F5)
   ✓ Sigue en English
```

### Test 2: Navegación

```
1. En login, selecciona "English"
2. Navega a /settings
   ✓ Sigue siendo English
3. Entra a /languages
   ✓ El Select muestra "English"
4. Navega a otra página
   ✓ Idioma persiste
```

### Test 3: Sincronización entre Pestañas

```
1. Abre pestaña A en login (Español)
2. Abre pestaña B en cualquier página (Español)
3. En pestaña A, cambia a English
   ✓ Pestaña B se actualiza automáticamente a English
4. En pestaña B, cambia a Español
   ✓ Pestaña A se actualiza automáticamente a Español
```

### Test 4: Múltiples Cambios

```
1. Login: es
2. Cambiar: en
3. Navigate to /settings
4. Cambiar: es
5. Navigate to /languages
6. Cambiar: en
7. Recarga página (F5)
   ✓ Sigue en English
8. Cierra todo, reabre navegador
   ✓ Arranca en English
```

## 🚀 Configuración Actual

- **Clave localStorage**: `misencillo-language`
- **Clave cookie**: `language-preference`
- **Valores válidos**: `es`, `en`
- **Default**: `es`
- **Duración cookie**: 1 año
- **Sincronización**: Instantánea (StorageEvent)
