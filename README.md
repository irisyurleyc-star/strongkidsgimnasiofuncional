<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StrongKids Play Gym - Fitness Funcional para Niños</title>
    <meta name="description" content="Gimnasio especializado en fitness funcional para niños. Desarrollo integral a través del ejercicio divertido y seguro.">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome para iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Configuración personalizada de Tailwind -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'strong-red': '#E53E3E',
                        'strong-yellow': '#F6AD55',
                        'strong-blue': '#3182CE',
                        'strong-green': '#38A169',
                        'strong-orange': '#DD6B20'
                    },
                    fontFamily: {
                        'poppins': ['Poppins', 'sans-serif']
                    }
                }
            }
        }
    </script>
    
    <!-- CSS personalizado -->
    <link rel="stylesheet" href="styles.css">
</head>
<body class="font-poppins bg-gray-50">
    
    <!-- Header Fijo y Responsivo -->
    <header class="fixed top-0 w-full bg-white shadow-lg z-50">
        <nav class="container mx-auto px-4 py-3">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center space-x-2">
                    <!-- Logo con imagen real -->
                    <img src="images/WhatsApp Image 2025-10-26 at 1.12.31 PM.jpeg" alt="StrongKids Play Gym Logo" class="w-12 h-12 rounded-lg object-cover">
                    <span class="text-xl font-bold text-gray-800">StrongKids</span>
                </div>
                
                <!-- Menú Desktop -->
                <div class="hidden md:flex space-x-8">
                    <a href="#inicio" class="text-gray-700 hover:text-strong-red transition-colors">Inicio</a>
                    <a href="#video" class="text-gray-700 hover:text-strong-red transition-colors">Video</a>
                    <a href="#programas" class="text-gray-700 hover:text-strong-red transition-colors">Programas</a>
                    <a href="#precios" class="text-gray-700 hover:text-strong-red transition-colors">Precios</a>
                    <a href="#inscripcion" class="text-gray-700 hover:text-strong-red transition-colors">Inscripción</a>
                    <a href="#contacto" class="text-gray-700 hover:text-strong-red transition-colors">Contacto</a>
                </div>
                
                <!-- Botón Hamburguesa -->
                <button id="menu-toggle" class="md:hidden text-gray-700 hover:text-strong-red">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
            
            <!-- Menú Móvil -->
            <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
                <div class="flex flex-col space-y-3">
                    <a href="#inicio" class="text-gray-700 hover:text-strong-red transition-colors py-2">Inicio</a>
                    <a href="#video" class="text-gray-700 hover:text-strong-red transition-colors py-2">Video</a>
                    <a href="#programas" class="text-gray-700 hover:text-strong-red transition-colors py-2">Programas</a>
                    <a href="#precios" class="text-gray-700 hover:text-strong-red transition-colors py-2">Precios</a>
                    <a href="#inscripcion" class="text-gray-700 hover:text-strong-red transition-colors py-2">Inscripción</a>
                    <a href="#contacto" class="text-gray-700 hover:text-strong-red transition-colors py-2">Contacto</a>
                </div>
            </div>
        </nav>
    </header>

    <!-- Sección Hero -->
    <section id="inicio" class="pt-20 bg-gradient-to-br from-strong-blue via-strong-green to-strong-yellow min-h-screen flex items-center relative cursor-test">
        <!-- Video de fondo -->
        <div class="absolute inset-0 overflow-hidden">
            <video autoplay muted loop class="w-full h-full object-cover opacity-30">
                <source src="images/WhatsApp Video 2025-10-09 at 3.37.32 PM.mp4" type="video/mp4">
                Tu navegador no soporta videos HTML5.
            </video>
        </div>
        
        <div class="container mx-auto px-4 py-16 relative z-10">
            <div class="max-w-4xl mx-auto text-center text-white">
                <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Donde la Fuerza se Encuentra con la Diversión
                </h1>
                <h2 class="text-xl md:text-2xl mb-8 font-light">
                    Fitness Funcional para Niños
                </h2>
                <p class="text-lg md:text-xl mb-10 opacity-90">
                    Gimnasio StrongKids Play Gym: Más que ejercicio, es desarrollo integral.
                </p>
                <a href="#inscripcion" class="inline-block bg-white text-strong-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                    ¡Inscríbete Ahora!
                </a>
            </div>
        </div>
    </section>

    <!-- Sección de Video Promocional -->
    <section id="video" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Conoce Nuestro Gimnasio
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Mira cómo nuestros niños disfrutan del fitness funcional en un ambiente seguro y divertido
                </p>
            </div>
            
            <div class="max-w-4xl mx-auto">
                <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                    <video controls class="w-full h-auto" poster="">
                        <source src="images/WhatsApp Video 2025-10-09 at 3.37.32 PM.mp4" type="video/mp4">
                        Tu navegador no soporta videos HTML5.
                    </video>
                    <!-- Overlay con información -->
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                        <h3 class="text-white text-xl font-bold mb-2">StrongKids Play Gym</h3>
                        <p class="text-white opacity-90">Fitness funcional para niños - Diversión y desarrollo integral</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección de Valor y Diferenciación -->
    <section id="programas" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    ¿Por Qué Elegir StrongKids?
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Ofrecemos una experiencia única que combina diversión, aprendizaje y desarrollo físico
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <!-- Card 1: IA 24/7 -->
                <div class="bg-gradient-to-br from-strong-red to-strong-orange p-8 rounded-2xl text-white text-center hover:transform hover:scale-105 transition-all shadow-lg">
                    <!-- Imagen opcional para la tarjeta -->
                    <!-- <img src="images/ia-chatbot.jpg" alt="Chatbot IA" class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"> -->
                    <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-robot text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">IA 24/7</h3>
                    <p class="text-lg opacity-90">
                        Soporte al Instante con Nuestro Chatbot Inteligente
                    </p>
                </div>
                
                <!-- Card 2: Método Funcional -->
                <div class="bg-gradient-to-br from-strong-blue to-strong-green p-8 rounded-2xl text-white text-center hover:transform hover:scale-105 transition-all shadow-lg">
                    <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-running text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Método Funcional</h3>
                    <p class="text-lg opacity-90">
                        Entrenamiento divertido para desarrollar coordinación y fuerza
                    </p>
                </div>
                
                <!-- Card 3: Comunidad Segura -->
                <div class="bg-gradient-to-br from-strong-yellow to-strong-green p-8 rounded-2xl text-white text-center hover:transform hover:scale-105 transition-all shadow-lg">
                    <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-shield-alt text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Comunidad Segura</h3>
                    <p class="text-lg opacity-90">
                        Instructores especializados en pedagogía infantil
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección de Inscripción -->
    <section id="inscripcion" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
            <div class="max-w-2xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Empieza Hoy Mismo
                    </h2>
                    <p class="text-lg text-gray-600">
                        Formulario de Pre-Inscripción
                    </p>
                </div>
                
                <div class="bg-white rounded-2xl shadow-lg p-8">
                    <form id="inscripcion-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="nombre-padre" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Nombre del Padre/Madre *
                                </label>
                                <input type="text" id="nombre-padre" name="nombre-padre" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strong-blue focus:border-transparent">
                            </div>
                            
                            <div>
                                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input type="email" id="email" name="email" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strong-blue focus:border-transparent">
                            </div>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="telefono" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Teléfono *
                                </label>
                                <input type="tel" id="telefono" name="telefono" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strong-blue focus:border-transparent">
                            </div>
                            
                            <div>
                                <label for="nombre-nino" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Nombre del Niño/Niña *
                                </label>
                                <input type="text" id="nombre-nino" name="nombre-nino" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strong-blue focus:border-transparent">
                            </div>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="edad-nino" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Edad del Niño/Niña *
                                </label>
                                <input type="number" id="edad-nino" name="edad-nino" min="3" max="17" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strong-blue focus:border-transparent">
                            </div>
                            
                            <div>
                                <label for="plan-membresia" class="block text-sm font-semibold text-gray-700 mb-2">
                                    Plan de Membresía Deseado *
                                </label>
                                <select id="plan-membresia" name="plan-membresia" required 
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strong-blue focus:border-transparent">
                                    <option value="">Selecciona un plan</option>
                                    <option value="basico">Plan Básico - 2 clases/semana</option>
                                    <option value="premium">Plan Premium - 4 clases/semana</option>
                                    <option value="ilimitado">Plan Ilimitado - Acceso completo</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <button type="submit" 
                                    class="bg-gradient-to-r from-strong-red to-strong-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-strong-orange hover:to-strong-red transition-all transform hover:scale-105 shadow-lg">
                                Enviar Inscripción
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contacto" class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Información de Contacto -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Contacto</h3>
                    <div class="space-y-2">
                        <p class="flex items-center">
                            <i class="fas fa-map-marker-alt mr-3 text-strong-yellow"></i>
                            Local 2 Centro Comercial Caobos
                        </p>
                        <p class="flex items-center">
                            <i class="fas fa-phone mr-3 text-strong-yellow"></i>
                            <a href="tel:+573123933873" class="hover:text-strong-yellow transition-colors">312-3933873</a>
                        </p>
                        <p class="flex items-center">
                            <i class="fas fa-envelope mr-3 text-strong-yellow"></i>
                            <a href="mailto:Strongkids@gmail.com" class="hover:text-strong-yellow transition-colors">Strongkids@gmail.com</a>
                        </p>
                        <p class="flex items-center">
                            <i class="fab fa-whatsapp mr-3 text-strong-yellow"></i>
                            <a href="https://wa.me/573123933873" target="_blank" class="hover:text-strong-yellow transition-colors">WhatsApp: 312-3933873</a>
                        </p>
                    </div>
                </div>
                
                <!-- Enlaces Rápidos -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Enlaces Rápidos</h3>
                    <div class="space-y-2">
                        <a href="#inicio" class="block hover:text-strong-yellow transition-colors">Inicio</a>
                        <a href="#programas" class="block hover:text-strong-yellow transition-colors">Programas</a>
                        <a href="#precios" class="block hover:text-strong-yellow transition-colors">Precios</a>
                        <a href="#inscripcion" class="block hover:text-strong-yellow transition-colors">Inscripción</a>
                    </div>
                </div>
                
                <!-- Redes Sociales -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Síguenos</h3>
                    <div class="flex space-x-4">
                        <a href="https://wa.me/573123933873" target="_blank" class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" title="WhatsApp">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-strong-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors" title="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-strong-green rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" title="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-strong-red rounded-full flex items-center justify-center hover:bg-red-600 transition-colors" title="YouTube">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                <p class="text-gray-400">
                    © 2025 StrongKids Play Gym. Todos los derechos reservados.
                </p>
            </div>
        </div>
    </footer>

    <!-- Chatbot Flotante -->
    <!-- 
    ESPACIO RESERVADO PARA INTEGRACIÓN DEL CHATBOT
    Aquí se debe integrar el widget del chatbot que debe ser un ícono flotante
    pegado a la esquina inferior derecha de la pantalla.
    
    Ejemplo de integración:
    <div id="chatbot-widget" class="fixed bottom-6 right-6 z-50">
        <button class="w-14 h-14 bg-gradient-to-r from-strong-blue to-strong-green rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110">
            <i class="fas fa-comments text-white text-xl"></i>
        </button>
    </div>
    -->

    <!-- JavaScript -->
    <script src="script.js"></script>
</body>
</html>










