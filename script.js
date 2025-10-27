// JavaScript para StrongKids Play Gym

document.addEventListener('DOMContentLoaded', function() {
    
    // Variables globales
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const inscripcionForm = document.getElementById('inscripcion-form');
    
    // Funcionalidad del menú hamburguesa
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Cambiar ícono del botón
            const icon = menuToggle.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-xl';
            } else {
                icon.className = 'fas fa-times text-xl';
            }
        });
        
        // Cerrar menú móvil al hacer clic en un enlace
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = menuToggle.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
            });
        });
    }
    
    // Smooth scroll para enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.bg-white, .bg-gray-100');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Funcionalidad del formulario de inscripción
    if (inscripcionForm) {
        inscripcionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mostrar estado de carga
            const submitButton = inscripcionForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.classList.add('loading');
            submitButton.disabled = true;
            
            // Simular envío (aquí se integraría con Formspree)
            setTimeout(() => {
                // Mostrar mensaje de éxito
                showFormMessage('¡Inscripción enviada exitosamente! Te contactaremos pronto.', 'success');
                
                // Resetear formulario
                inscripcionForm.reset();
                
                // Restaurar botón
                submitButton.textContent = originalText;
                submitButton.classList.remove('loading');
                submitButton.disabled = false;
                
                // Scroll al mensaje
                const message = document.querySelector('.form-message');
                if (message) {
                    message.scrollIntoView({ behavior: 'smooth' });
                }
            }, 2000);
        });
        
        // Validación en tiempo real
        const formInputs = inscripcionForm.querySelectorAll('input, select');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                // Remover clases de error al escribir
                this.classList.remove('border-red-500');
                const errorMsg = this.parentNode.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            });
        });
    }
    
    // Función para validar campos del formulario
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.getAttribute('name');
        let isValid = true;
        let errorMessage = '';
        
        // Remover mensaje de error anterior
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Validaciones específicas
        switch(fieldName) {
            case 'nombre-padre':
            case 'nombre-nino':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'El nombre debe tener al menos 2 caracteres';
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Por favor ingresa un email válido';
                }
                break;
                
            case 'telefono':
                const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Por favor ingresa un teléfono válido';
                }
                break;
                
            case 'edad-nino':
                const age = parseInt(value);
                if (age < 3 || age > 17) {
                    isValid = false;
                    errorMessage = 'La edad debe estar entre 3 y 17 años';
                }
                break;
                
            case 'plan-membresia':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Por favor selecciona un plan';
                }
                break;
        }
        
        // Mostrar error si es necesario
        if (!isValid) {
            field.classList.add('border-red-500');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message text-red-500 text-sm mt-1';
            errorDiv.textContent = errorMessage;
            field.parentNode.appendChild(errorDiv);
        } else {
            field.classList.remove('border-red-500');
            field.classList.add('border-green-500');
        }
        
        return isValid;
    }
    
    // Función para mostrar mensajes del formulario
    function showFormMessage(message, type) {
        // Remover mensaje anterior si existe
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Crear nuevo mensaje
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Insertar después del formulario
        inscripcionForm.parentNode.insertBefore(messageDiv, inscripcionForm.nextSibling);
        
        // Auto-remover después de 5 segundos
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
    
    // Efectos de hover para las tarjetas
    const featureCards = document.querySelectorAll('.bg-gradient-to-br');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
        });
    });
    
    // Contador animado para estadísticas (si se agregan)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }
    
    // Efecto parallax suave para el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('#inicio');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Lazy loading para imágenes (si se agregan)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Funcionalidad del chatbot placeholder
    const chatbotPlaceholder = document.createElement('div');
    chatbotPlaceholder.className = 'chatbot-placeholder';
    chatbotPlaceholder.innerHTML = '<i class="fas fa-comments"></i>';
    chatbotPlaceholder.setAttribute('aria-label', 'Abrir chat de soporte');
    
    chatbotPlaceholder.addEventListener('click', function() {
        // Aquí se integraría la funcionalidad real del chatbot
        alert('¡Hola! Soy el asistente virtual de StrongKids. Pronto estaré disponible para ayudarte con tus consultas.');
    });
    
    document.body.appendChild(chatbotPlaceholder);
    
    // Mostrar chatbot después de 3 segundos
    setTimeout(() => {
        chatbotPlaceholder.style.opacity = '0';
        chatbotPlaceholder.style.transform = 'scale(0)';
        chatbotPlaceholder.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            chatbotPlaceholder.style.opacity = '1';
            chatbotPlaceholder.style.transform = 'scale(1)';
        }, 100);
    }, 3000);
    
    // Prevenir envío accidental del formulario con Enter
    inscripcionForm.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
            e.preventDefault();
        }
    });
    
    // Mejorar accesibilidad del teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Cerrar menú móvil con Escape
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = menuToggle.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
            }
        }
    });
    
    console.log('StrongKids Play Gym - Landing Page cargada exitosamente');
});

