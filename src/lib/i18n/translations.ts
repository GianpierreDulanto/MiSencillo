export type Language = 'es' | 'en';

export type Translations = {
  // Auth - Sign In
  welcome_back: string;
  sign_in_account: string;
  your_email: string;
  password: string;
  invalid_email: string;
  password_min_length: string;
  show_password: string;
  hide_password: string;
  forgot_password: string;
  sign_in: string;

  // Auth - Sign Up
  create_account: string;
  start_using_misencillo: string;
  full_name: string;
  full_name_error: string;
  email: string;
  password_placeholder: string;

  // Auth - PIN & Verification
  create_pin: string;
  create_your_pin: string;
  set_pin_for_account: string;
  enter_your_pin: string;
  enter_pin: string;
  enter_4_digit_pin: string;
  set_pin_for_card: string;
  enter_card_pin: string;
  done: string;
  verify_code: string;
  verify_your_code: string;
  enter_4digit_code: string;
  verify_phone: string;
  verify_your_phone: string;
  we_send_code: string;
  phone_number: string;

  // Auth - General
  no_account: string;
  have_account: string;
  continue: string;
  continue_with_google: string;
  continue_with_apple: string;
  or_continue_with_sign_in: string;
  or_continue_with_sign_up: string;

  // Auth - KYC & Documents
  country_of_residence: string;
  primary_residence: string;
  select_country: string;
  terms_acceptance: string;
  upload_identity: string;
  capture_national_id: string;
  take_photo_id: string;
  selfie_scan: string;
  look_at_camera: string;
  enable_face_id: string;
  face_id_description: string;

  // Auth - Approval
  youre_approved: string;
  ready_to_start: string;

  // Auth - Get Started
  modern_way_money: string;
  move_fast_pay_easy: string;
  smart_insights_daily: string;
  skip: string;
  transfer_action: string;
  receive: string;

  // Settings
  settings: string;
  personal_details: string;
  linked_accounts: string;
  notifications: string;
  appearance: string;
  agreements: string;
  general: string;
  accounts: string;
  language: string;
  languages: string;
  select_language: string;
  spanish: string;
  english: string;
  passport: string;
  national_id: string;
  driver_license: string;

  // Components - Transfer
  transfer_money: string;
  enter_amount: string;
  add_note: string;
  send_money: string;
  confirm_transfer: string;
  amount: string;
  recipient: string;
  note: string;
  cancel: string;
  confirm: string;
  choose_recipients: string;
  search_contact: string;
  recent_payed: string;
  all_contact: string;
  all_done: string;
  successfully_transferred: string;

  // Components - Insights
  categories: string;
  shopping: string;
  banking: string;
  food_drink: string;
  subscriptions: string;
  transactions: string;
  total_spending: string;
  selected: string;

  // Components - Navigation & UI
  home: string;
  insights: string;
  my_cards: string;
  profile: string;
  back: string;

  // Cards Page
  freeze_card: string;
  freeze_card_description: string;
  pin_security: string;
  pin_security_description: string;
  card_settings: string;
  card_settings_description: string;
  card_not_found: string;
  personal_card: string;

  // Cards - Add Card Page
  add_new_card: string;
  accept_card_types: string;
  card_holder: string;
  card_holder_name: string;
  card_number: string;
  card_number_placeholder: string;
  expiry_date: string;
  cvv: string;

  // Transactions Page & Filters
  transactions_title: string;
  filter: string;
  date_range: string;
  last_7_days: string;
  this_month: string;
  select_date: string;
  price_range: string;
  transaction_categories: string;
  all: string;
  subscription_category: string;
  money_in: string;
  transfer: string;
  shopping_category: string;
  income: string;
  transport: string;
  gaming: string;
  my_qr_code: string;
  show_scan_qr: string;
  share_code: string;
  scan_qr: string;
  gallery: string;
  my_code: string;
  weekly: string;
  monthly: string;
  yearly: string;
  delete_last_digit: string;
  exp: string;
  close: string;
  star_button: string;
  close_transfer: string;
  scan_button: string;
  close_scanner: string;
  close_my_code: string;
  qr_scanner_alt: string;
  gallery_alt: string;
  my_code_alt: string;
  my_qr_code_alt: string;
  none: string;
  app_logo: string;
  selected_number: string;
  country_code: string;
  search: string;

  // Dashboard
  greeting_name: string;
  good_morning: string;
  total_balance: string;
  transfer_button: string;
  receive_button: string;
  more: string;
  make_purchase: string;
  invite_friend_cashback: string;
  invite_friends: string;
  recent_transactions: string;
  see_all: string;

  // Profile
  go_back: string;
  profile_title: string;
  jennifer_lopez: string;
  personal_account: string;
  member_id: string;
  privacy_security: string;
  help_center: string;
  log_out: string;
  my_identity: string;
  premium_member: string;
  copy_member_id: string;
  share: string;
  download: string;

  // Help Center
  account: string;
  payments: string;
  security: string;
  features: string;
  change_password: string;
  update_login_password: string;
  trusted_devices: string;
  manage_devices: string;
  account_protected: string;
  security_settings_up_to_date: string;
  access_control: string;
  biometric_login: string;
  use_face_id_fingerprint: string;
  two_factor_auth: string;
  extra_layer_security: string;
  privacy_settings: string;
  data_transparency: string;
  encryption_message: string;
  read_full_privacy_policy: string;
  live_chat: string;
  send_email: string;
  still_need_help: string;
  support_team_24_7: string;
  search_topics: string;
  top_questions: string;
  how_change_pin: string;
  why_transfer_pending: string;
  how_invite_friends: string;
  can_use_multiple_devices: string;

  // Stores & Marketplace
  marketplace: string;
  restaurants: string;
  supermarkets: string;
  fashion_style: string;
  fresh_mart: string;
  daily_shop: string;
  eco_market: string;
  quick_buy: string;
  velvet_co: string;
  trendly: string;
  sneaker_head: string;
  glamour: string;
  tech_haven: string;
  discount_active: string;
  discount_percentage: string;
  big_mac_day: string;
  your_discount_active: string;
  burgers: string;
  big_mac: string;
  groceries: string;
  essentials: string;
  organic: string;
  express_shop: string;
  clothing: string;
  accessories: string;
  shoes: string;
  beauty: string;
  electronics: string;
  fast_food: string;
  figma: string;
  today_1230_pm: string;
  yesterday_0800_am: string;
  may_10_600_pm: string;
  receive_from_alex: string;
  subscriptions_type: string;
  money_in_type: string;
  medium: string;
  hi_jennifer_help: string;
  account_protected_desc: string;

  // Missing UI Elements
  social_apple: string;
  social_google: string;
  exchange_page: string;
  transaction_not_found: string;
  transaction_details: string;
  transaction_number_id: string;
  transaction_fee: string;
  transaction_method: string;
  transaction_status: string;
  transaction_date_time: string;
  set_notifications: string;
  notification_ways: string;
  info_updates_title: string;
  financial_activity_title: string;
  non_financial_activity_title: string;
  security_settings_title: string;

  // Transaction Types & Time (Transactions Page)
  today: string;
  yesterday: string;
  subscriptions_transaction: string;
  money_in_receive: string;
  transfer_type: string;
  income_type: string;
  shopping_type: string;
  transport_type: string;
  gaming_type: string;
  transfer_from: string;
  transfer_to: string;

  version: string;
};

export const translations: Record<Language, Translations> = {
  es: {
    // Auth - Sign In
    welcome_back: 'Bienvenido de vuelta',
    sign_in_account: 'Inicia sesión en tu cuenta',
    your_email: 'Tu correo electrónico',
    password: 'Contraseña',
    invalid_email: 'Ingresa una dirección de correo válida.',
    password_min_length: 'La contraseña debe tener al menos 8 caracteres.',
    show_password: 'Mostrar contraseña',
    hide_password: 'Ocultar contraseña',
    forgot_password: '¿Olvidaste tu contraseña?',
    sign_in: 'Iniciar sesión',

    // Auth - Sign Up
    create_account: 'Crear cuenta',
    start_using_misencillo: 'Comienza a usar MiSencillo',
    full_name: 'Nombre completo',
    full_name_error: 'Ingresa tu nombre completo.',
    email: 'Correo electrónico',
    password_placeholder: 'Al menos 8 caracteres',

    // Auth - PIN & Verification
    create_pin: 'Crear PIN',
    create_your_pin: 'Crea tu PIN',
    set_pin_for_account: 'Establece un PIN de 4 dígitos para tu cuenta.',
    enter_your_pin: 'Ingresa tu PIN',
    enter_pin: 'Ingresa PIN',
    enter_4_digit_pin: 'Ingresa un PIN de 4 dígitos.',
    set_pin_for_card:
      'Establece un PIN de 4 dígitos para tu tarjeta MiSencillo',
    enter_card_pin: 'Ingresa el PIN de 4 dígitos de tu tarjeta MiSencillo',
    done: 'Listo',
    verify_code: 'Verificar código',
    verify_your_code: 'Verifica tu código',
    enter_4digit_code: 'Ingresa el código de 4 dígitos que te enviamos.',
    verify_phone: 'Verificar número de teléfono',
    verify_your_phone: 'Verifica tu número de teléfono',
    we_send_code: 'Te enviaremos un código de 4 dígitos.',
    phone_number: 'Número de teléfono',

    // Auth - General
    no_account: '¿No tienes cuenta? Crea una',
    have_account: '¿Ya tienes cuenta?',
    continue: 'Continuar',
    continue_with_google: 'Continuar con Google',
    continue_with_apple: 'Continuar con Apple',
    or_continue_with_sign_in: 'O continúa con',
    or_continue_with_sign_up: 'O regístrate con',

    // Auth - KYC & Documents
    country_of_residence: 'Tu país de residencia principal',
    primary_residence: 'País de residencia principal',
    select_country: 'Selecciona tu país',
    terms_acceptance:
      'Al registrarte, aceptas nuestros Términos de Uso y Política de Privacidad.',
    upload_identity: 'Sube una prueba de tu identidad',
    capture_national_id: 'Cédula de identidad',
    take_photo_id: 'Toma una foto del frente de tu ID',
    selfie_scan: 'Escaneo de selfie',
    look_at_camera: 'Mira directamente a la cámara',
    enable_face_id: 'Habilitar Face ID',
    face_id_description:
      'Habilitar Face ID te dará acceso más rápido a tu información.',

    // Auth - Approval
    youre_approved: '¡Estás aprobado!',
    ready_to_start: 'Ya estás listo para comenzar a usar MiSencillo.',

    // Auth - Get Started
    modern_way_money: 'La forma moderna de tu dinero',
    move_fast_pay_easy: 'Muévete rápido, paga fácil',
    smart_insights_daily: 'Perspectivas inteligentes, diariamente',
    skip: 'Omitir',
    transfer_action: 'Transferencia',
    receive: 'Acuerdos',

    // Settings
    settings: 'Configuración',
    personal_details: 'Detalles personales',
    linked_accounts: 'Cuentas vinculadas',
    notifications: 'Notificaciones',
    appearance: 'Apariencia',
    agreements: 'Acuerdos',
    general: 'General',
    accounts: 'Cuentas',
    language: 'Idioma',
    languages: 'Idiomas',
    select_language: 'Selecciona tu idioma',
    spanish: 'Español',
    english: 'English',
    passport: 'Pasaporte',
    national_id: 'Cédula de identidad',
    driver_license: 'Licencia de conducir',

    // Components - Transfer
    transfer_money: 'Transferir dinero',
    enter_amount: 'Ingresa el monto',
    add_note: 'Añadir nota...',
    send_money: 'Enviar dinero',
    confirm_transfer: 'Confirmar transferencia',
    amount: 'Monto',
    recipient: 'Destinatario',
    note: 'Nota',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    choose_recipients: 'Elegir destinatarios',
    search_contact: 'Buscar contacto',
    recent_payed: 'Pagos recientes',
    all_contact: 'Todos los contactos',
    all_done: '¡Listo!',
    successfully_transferred: 'Has transferido exitosamente tu dinero.',

    // Components - Insights
    categories: 'Categorías',
    shopping: 'Compras',
    banking: 'Banca',
    food_drink: 'Comida y bebida',
    subscriptions: 'Suscripciones',
    transactions: 'Transacciones',
    total_spending: 'Gasto total',
    selected: 'Seleccionado',

    // Components - Navigation & UI
    home: 'Inicio',
    insights: 'Perspectivas',
    my_cards: 'Mis tarjetas',
    profile: 'Perfil',
    back: 'Volver',

    // Cards Page
    freeze_card: 'Congelar tarjeta',
    freeze_card_description: 'Bloquea la tarjeta temporalmente',
    pin_security: 'PIN y Seguridad',
    pin_security_description: 'Desbloquea PIN o CVV y más',
    card_settings: 'Configuración',
    card_settings_description: 'Elimina o renombra la tarjeta y más',
    card_not_found: 'Tarjeta no encontrada',
    personal_card: 'Personal',

    // Cards - Add Card Page
    add_new_card: 'Agregar nueva tarjeta',
    accept_card_types: 'Aceptamos Visa, Mastercard y Maestro',
    card_holder: 'Titular de la tarjeta',
    card_holder_name: 'Juan Pérez',
    card_number: 'Número de tarjeta',
    card_number_placeholder: '0000 0000 0000',
    expiry_date: 'Fecha de vencimiento',
    cvv: 'CVV',

    // Transactions Page & Filters
    transactions_title: 'Transacciones',
    filter: 'Filtrar',
    date_range: 'Rango de fechas',
    last_7_days: 'Últimos 7 días',
    this_month: 'Este mes',
    select_date: 'Seleccionar fecha',
    price_range: 'Rango de precios',
    transaction_categories: 'Categorías',
    all: 'Todas',
    subscription_category: 'Suscripciones',
    money_in: 'Dinero entrante',
    transfer: 'Transferencia',
    shopping_category: 'Compras',
    income: 'Ingreso',
    transport: 'Transporte',
    gaming: 'Juegos',

    my_qr_code: 'Mi código QR',
    show_scan_qr:
      'Muestra y escanea este código QR para comenzar transacciones',
    share_code: 'Compartir código',
    scan_qr: 'Escanear QR',
    gallery: 'Galería',
    my_code: 'Mi código',
    weekly: 'Semanal',
    monthly: 'Mensual',
    yearly: 'Anual',
    delete_last_digit: 'Eliminar último dígito',
    exp: 'EXP',
    close: 'Cerrar',
    star_button: 'Asterisco',
    close_transfer: 'Cerrar transferencia',
    scan_button: 'Escanear',
    close_scanner: 'Cerrar escáner',
    close_my_code: 'Cerrar mi código',
    qr_scanner_alt: 'Escáner QR',
    gallery_alt: 'Galería',
    my_code_alt: 'Mi código',
    my_qr_code_alt: 'Mi código QR',
    none: 'Ninguno',
    app_logo: 'Logo de carga',
    selected_number: 'Número seleccionado:',
    country_code: 'Código',
    search: 'Buscar',

    // Dashboard
    greeting_name: 'Hola, Jennifer',
    good_morning: '¡Buenos días!',
    total_balance: 'Saldo Total',
    transfer_button: 'Transferir',
    receive_button: 'Recibir',
    more: 'Más',
    make_purchase: 'Realizar una Compra',
    invite_friend_cashback: 'Invita a un amigo y ambos ganan reembolso',
    invite_friends: 'Invitar amigos →',
    recent_transactions: 'Transacciones Recientes',
    see_all: 'Ver Todo',

    // Profile
    go_back: 'Volver',
    profile_title: 'Perfil',
    jennifer_lopez: 'Jennifer Lopez',
    personal_account: 'Cuenta Personal',
    member_id: 'ID de Miembro',
    privacy_security: 'Privacidad y Seguridad',
    help_center: 'Centro de Ayuda',
    log_out: 'Cerrar Sesión',
    my_identity: 'Mi Identidad',
    premium_member: 'Miembro Premium',
    copy_member_id: 'Copiar ID de Miembro',
    share: 'Compartir',
    download: 'Descargar',

    // Help Center
    account: 'Cuenta',
    payments: 'Pagos',
    security: 'Seguridad',
    features: 'Características',
    change_password: 'Cambiar Contraseña',
    update_login_password: 'Actualiza tu contraseña de inicio de sesión',
    trusted_devices: 'Dispositivos Confiables',
    manage_devices: 'Gestiona dispositivos con acceso',
    account_protected: 'Cuenta Protegida',
    security_settings_up_to_date:
      'Tus configuraciones de seguridad están actualizadas, Jennifer.',
    access_control: 'Control de Acceso',
    biometric_login: 'Inicio de Sesión Biométrico',
    use_face_id_fingerprint: 'Usa Face ID o Huella Dactilar',
    two_factor_auth: 'Autenticación de Dos Factores',
    extra_layer_security: 'Capa adicional de seguridad',
    privacy_settings: 'Configuración de Privacidad',
    data_transparency: 'Transparencia de Datos',
    encryption_message:
      'MiSencillo utiliza encriptación de extremo a extremo. Tus datos financieros nunca se comparten con terceros sin tu consentimiento explícito.',
    read_full_privacy_policy: 'Leer Política de Privacidad Completa',
    live_chat: 'Chat en Vivo',
    send_email: 'Enviar un Correo',
    still_need_help: '¿Aún necesitas ayuda?',
    support_team_24_7:
      'Nuestro equipo de soporte está disponible 24/7 para ayudarte, Jennifer.',
    search_topics: 'Buscar temas o preguntas...',
    top_questions: 'Preguntas Principales',
    how_change_pin: '¿Cómo cambio mi PIN?',
    why_transfer_pending: '¿Por qué mi transferencia está pendiente?',
    how_invite_friends: '¿Cómo invito a los amigos de Jennifer?',
    can_use_multiple_devices: '¿Puedo usar múltiples dispositivos?',

    // Stores & Marketplace
    marketplace: 'Tienda de Marcas',
    restaurants: 'Restaurantes',
    supermarkets: 'Supermercados',
    fashion_style: 'Moda y Estilo',
    fresh_mart: 'Fresh Mart',
    daily_shop: 'Daily Shop',
    eco_market: 'Eco Market',
    quick_buy: 'Quick Buy',
    velvet_co: 'Velvet Co',
    trendly: 'Trendly',
    sneaker_head: 'Sneaker Head',
    glamour: 'Glamour',
    tech_haven: 'Tech Haven',
    discount_active: 'Tu descuento de %s% está activo!',
    discount_percentage: '10%',
    big_mac_day: 'Día del Big Mac',
    your_discount_active: 'Jennifer, ¡tu descuento del 10% está activo!',
    burgers: 'Hamburguesas',
    big_mac: 'Big Mac',
    groceries: 'Abarrotes',
    essentials: 'Esenciales',
    organic: 'Orgánico',
    express_shop: 'Express',
    clothing: 'Ropa',
    accessories: 'Accesorios',
    shoes: 'Zapatos',
    beauty: 'Belleza',
    electronics: 'Electrónica',
    fast_food: 'Comida Rápida',
    figma: 'Figma',
    today_1230_pm: 'Hoy, 12:30 PM',
    yesterday_0800_am: 'Ayer, 08:00 AM',
    may_10_600_pm: '10 de Mayo, 06:00 PM',
    receive_from_alex: 'Recibir de Alex',
    subscriptions_type: 'Suscripciones',
    money_in_type: 'Dinero Entrante',
    medium: 'Medium',
    hi_jennifer_help: '¡Hola Jennifer,\n¿Cómo podemos ayudarte?',
    account_protected_desc: 'Cuenta Protegida',

    // Missing UI Elements
    social_apple: 'Apple',
    social_google: 'Google',
    exchange_page: 'Intercambio',
    transaction_not_found: 'Transacción no encontrada',
    transaction_details: 'Detalles de la Transacción',
    transaction_number_id: 'Número ID',
    transaction_fee: 'Comisión',
    transaction_method: 'Método',
    transaction_status: 'Estado',
    transaction_date_time: 'Fecha y Hora',
    set_notifications: 'Configura cómo recibes notificaciones',
    notification_ways:
      'Selecciona la forma más conveniente de notificarte sobre actualizaciones, mensajes y alertas.',
    info_updates_title: 'Info & Actualizaciones',
    financial_activity_title: 'Actividad Financiera',
    non_financial_activity_title: 'Actividad No Financiera',
    security_settings_title: 'Seguridad',

    // Transaction Types & Time
    today: 'Hoy',
    yesterday: 'Ayer',
    subscriptions_transaction: 'Suscripciones',
    money_in_receive: 'Dinero Entrante',
    transfer_type: 'Transferencia',
    income_type: 'Ingreso',
    shopping_type: 'Compras',
    transport_type: 'Transporte',
    gaming_type: 'Juegos',
    transfer_from: 'Transferencia de',
    transfer_to: 'Transferencia a',

    version: 'Versión',
  },
  en: {
    // Auth - Sign In
    welcome_back: 'Welcome back',
    sign_in_account: 'Sign in to your account',
    your_email: 'Your email',
    password: 'Password',
    invalid_email: 'Enter a valid email address.',
    password_min_length: 'Password must be at least 8 characters.',
    show_password: 'Show password',
    hide_password: 'Hide password',
    forgot_password: 'Forgot your password?',
    sign_in: 'Sign in',

    // Auth - Sign Up
    create_account: 'Create account',
    start_using_misencillo: 'Start using MiSencillo',
    full_name: 'Full name',
    full_name_error: 'Enter your full name.',
    email: 'Email',
    password_placeholder: 'At least 8 characters',

    // Auth - PIN & Verification
    create_pin: 'Create PIN',
    create_your_pin: 'Create your PIN',
    set_pin_for_account: 'Set a 4-digit PIN for your account.',
    enter_your_pin: 'Enter your PIN',
    enter_pin: 'Enter PIN',
    enter_4_digit_pin: 'Enter a 4-digit PIN.',
    set_pin_for_card: 'Set a 4-digit PIN for your MiSencillo card',
    enter_card_pin: 'Enter the 4-digit PIN of your MiSencillo card',
    done: 'Done',
    verify_code: 'Verify code',
    verify_your_code: 'Verify your code',
    enter_4digit_code: 'Enter the 4-digit code we sent you.',
    verify_phone: 'Verify your phone number',
    verify_your_phone: 'Verify your phone number',
    we_send_code: 'We will send you a 4-digit code.',
    phone_number: 'Phone number',

    // Auth - General
    no_account: "Don't have an account? Create one",
    have_account: 'Already have an account?',
    continue: 'Continue',
    continue_with_google: 'Continue with Google',
    continue_with_apple: 'Continue with Apple',
    or_continue_with_sign_in: 'Or sign in with',
    or_continue_with_sign_up: 'Or sign up with',

    // Auth - KYC & Documents
    country_of_residence: 'Your country of primary residence',
    primary_residence: 'Country of primary residence',
    select_country: 'Select your country',
    terms_acceptance:
      'By registering, you accept our Terms of Use and Privacy Policy.',
    upload_identity: 'Upload a proof of your identity',
    capture_national_id: 'National ID',
    take_photo_id: 'Take a photo of the front of your ID',
    selfie_scan: 'Selfie scan',
    look_at_camera: 'Look directly at the camera',
    enable_face_id: 'Enable Face ID',
    face_id_description:
      'Enabling Face ID will give you faster access to your information.',

    // Auth - Approval
    youre_approved: "You're approved!",
    ready_to_start: "You're ready to start using MiSencillo.",

    // Auth - Get Started
    modern_way_money: 'The Modern Way Your Money',
    move_fast_pay_easy: 'Move Fast, Pay Easy',
    smart_insights_daily: 'Smart Insights, Daily',
    skip: 'Skip',
    transfer_action: 'Transfer',
    receive: 'Receive',

    // Settings
    settings: 'Settings',
    personal_details: 'Personal Details',
    linked_accounts: 'Linked Accounts',
    notifications: 'Notifications',
    appearance: 'Appearance',
    agreements: 'Agreements',
    general: 'General',
    accounts: 'Accounts',
    language: 'Language',
    languages: 'Languages',
    select_language: 'Select your language',
    spanish: 'Español',
    english: 'English',
    passport: 'Passport',
    national_id: 'National ID',
    driver_license: 'Driver License',

    // Components - Transfer
    transfer_money: 'Transfer Money',
    enter_amount: 'Enter amount',
    add_note: 'Add note...',
    send_money: 'Send Money',
    confirm_transfer: 'Confirm Transfer',
    amount: 'Amount',
    recipient: 'Recipient',
    note: 'Note',
    cancel: 'Cancel',
    confirm: 'Confirm',
    choose_recipients: 'Choose Recipients',
    search_contact: 'Search contact',
    recent_payed: 'Recent Payed',
    all_contact: 'All Contact',
    all_done: 'All Done!',
    successfully_transferred: 'You have successfully transferred your money.',

    // Components - Insights
    categories: 'Categories',
    shopping: 'Shopping',
    banking: 'Banking',
    food_drink: 'Food & Drink',
    subscriptions: 'Subscriptions',
    transactions: 'transactions',
    total_spending: 'Total Spending',
    selected: 'Selected',

    // Components - Navigation & UI
    home: 'Home',
    insights: 'Insights',
    my_cards: 'My Cards',
    profile: 'Profile',
    back: 'Back',

    // Cards Page
    freeze_card: 'Freeze card',
    freeze_card_description: 'Block card temporarily',
    pin_security: 'PIN & Security',
    pin_security_description: 'Unblock PIN or CVV and more',
    card_settings: 'Settings',
    card_settings_description: 'Remove or rename card & more',
    card_not_found: 'Card not found',
    personal_card: 'Personal',

    // Cards - Add Card Page
    add_new_card: 'Add new card',
    accept_card_types: 'We accept Visa, Mastercard, and Maestro',
    card_holder: 'Card holder',
    card_holder_name: 'John Doe',
    card_number: 'Card number',
    card_number_placeholder: '0000 0000 0000',
    expiry_date: 'Expiry date',
    cvv: 'CVV',

    // Transactions Page & Filters
    transactions_title: 'Transactions',
    filter: 'Filter',
    date_range: 'Date Range',
    last_7_days: 'Last 7 days',
    this_month: 'This Month',
    select_date: 'Select Date',
    price_range: 'Price Range',
    transaction_categories: 'Categories',
    all: 'All',
    subscription_category: 'Subscriptions',
    money_in: 'Money In',
    transfer: 'Transfer',
    shopping_category: 'Shopping',
    income: 'Income',
    transport: 'Transport',
    gaming: 'Gaming',

    my_qr_code: 'My QR Code',
    show_scan_qr: 'Show and scan this QR code to start transactions',
    share_code: 'Share Code',
    scan_qr: 'Scan QR',
    gallery: 'Gallery',
    my_code: 'My Code',
    weekly: 'weekly',
    monthly: 'monthly',
    yearly: 'yearly',
    delete_last_digit: 'Delete last digit',
    exp: 'EXP',
    close: 'Close',
    star_button: 'Star',
    close_transfer: 'Close transfer',
    scan_button: 'Scan',
    close_scanner: 'Close scanner',
    close_my_code: 'Close my code',
    qr_scanner_alt: 'QR Scanner',
    gallery_alt: 'Gallery',
    my_code_alt: 'My Code',
    my_qr_code_alt: 'My QR Code',
    none: 'None',
    app_logo: 'Loading Logo',
    selected_number: 'Selected number:',
    country_code: 'Code',
    search: 'Search',

    // Dashboard
    greeting_name: 'Hi, Jennifer',
    good_morning: 'Good Morning!',
    total_balance: 'Total Balance',
    transfer_button: 'Transfer',
    receive_button: 'Receive',
    more: 'More',
    make_purchase: 'Make a Purchase',
    invite_friend_cashback: 'Invite a friend and both earn cashback',
    invite_friends: 'Invite friends →',
    recent_transactions: 'Transactions',
    see_all: 'See All',

    // Profile
    go_back: 'Go back',
    profile_title: 'Profile',
    jennifer_lopez: 'Jennifer Lopez',
    personal_account: 'Personal Account',
    member_id: 'Member ID',
    privacy_security: 'Privacy & Security',
    help_center: 'Help Center',
    log_out: 'Log Out',
    my_identity: 'My Identity',
    premium_member: 'Premium Member',
    copy_member_id: 'Copy Member ID',
    share: 'Share',
    download: 'Download',

    // Help Center
    account: 'Account',
    payments: 'Payments',
    security: 'Security',
    features: 'Features',
    change_password: 'Change Password',
    update_login_password: 'Update your login password',
    trusted_devices: 'Trusted Devices',
    manage_devices: 'Manage devices with access',
    account_protected: 'Account Protected',
    security_settings_up_to_date:
      'Your security settings are up to date, Jennifer.',
    access_control: 'Access Control',
    biometric_login: 'Biometric Login',
    use_face_id_fingerprint: 'Use Face ID or Fingerprint',
    two_factor_auth: 'Two-Factor Auth',
    extra_layer_security: 'Extra layer of security',
    privacy_settings: 'Privacy Settings',
    data_transparency: 'Data Transparency',
    encryption_message:
      'MiSencillo uses end-to-end encryption. Your financial data is never shared with third parties without your explicit consent.',
    read_full_privacy_policy: 'Read Full Privacy Policy',
    live_chat: 'Live Chat',
    send_email: 'Send an Email',
    still_need_help: 'Still need help?',
    support_team_24_7: 'Our support team is available 24/7 to assist Jennifer.',
    search_topics: 'Search for topics or questions...',
    top_questions: 'Top Questions',
    how_change_pin: 'How to change my PIN?',
    why_transfer_pending: 'Why is my transfer pending?',
    how_invite_friends: "How to invite Jennifer's friends?",
    can_use_multiple_devices: 'Can I use multiple devices?',

    // Stores & Marketplace
    marketplace: 'Marketplace',
    restaurants: 'Restaurants',
    supermarkets: 'Supermarkets',
    fashion_style: 'Fashion & Style',
    fresh_mart: 'Fresh Mart',
    daily_shop: 'Daily Shop',
    eco_market: 'Eco Market',
    quick_buy: 'Quick Buy',
    velvet_co: 'Velvet Co',
    trendly: 'Trendly',
    sneaker_head: 'Sneaker Head',
    glamour: 'Glamour',
    tech_haven: 'Tech Haven',
    discount_active: 'Your %s% discount is active!',
    discount_percentage: '10%',
    big_mac_day: 'Big Mac Day',
    your_discount_active: 'Jennifer, your 10% discount is active!',
    burgers: 'Burgers',
    big_mac: 'Big Mac',
    groceries: 'Groceries',
    essentials: 'Essentials',
    organic: 'Organic',
    express_shop: 'Express',
    clothing: 'Clothing',
    accessories: 'Accessories',
    shoes: 'Shoes',
    beauty: 'Beauty',
    electronics: 'Electronics',
    fast_food: 'Fast Food',

    // Transaction types and dates
    figma: 'Figma',
    today_1230_pm: 'Today, 12:30 PM',
    yesterday_0800_am: 'Yesterday, 08:00 AM',
    may_10_600_pm: 'May 10, 06:00 PM',
    receive_from_alex: 'Receive from Alex',
    subscriptions_type: 'Subscriptions',
    money_in_type: 'Money In',
    medium: 'Medium',
    hi_jennifer_help: 'Hi Jennifer,\nHow can we help you?',
    account_protected_desc: 'Account Protected',

    // Missing UI Elements
    social_apple: 'Apple',
    social_google: 'Google',
    exchange_page: 'Exchange',
    transaction_not_found: 'Transaction not found',
    transaction_details: 'Transaction Details',
    transaction_number_id: 'Number ID',
    transaction_fee: 'Fee',
    transaction_method: 'Method',
    transaction_status: 'Status',
    transaction_date_time: 'Date time',
    set_notifications: 'Set how you get notified',
    notification_ways:
      'Select the most convenient way to notify you of updates, messages, and warnings.',
    info_updates_title: 'Info & Updates',
    financial_activity_title: 'Financial Activity',
    non_financial_activity_title: 'Non Financial Activity',
    security_settings_title: 'Security',

    // Transaction Types & Time
    today: 'Today',
    yesterday: 'Yesterday',
    subscriptions_transaction: 'Subscriptions',
    money_in_receive: 'Money In',
    transfer_type: 'Transfer',
    income_type: 'Income',
    shopping_type: 'Shopping',
    transport_type: 'Transport',
    gaming_type: 'Gaming',
    transfer_from: 'Transfer from',
    transfer_to: 'Transfer to',

    version: 'Version',
  },
};
