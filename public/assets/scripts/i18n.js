// i18n.js - Internationalization module
const i18n = {
    // English (default)
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About us',
        'nav.contact': 'Contact us',
        'hero.title': 'Thousands of books at your fingertips',
        'hero.description': 'Discover the joy of reading, connect with a vibrant literary community, and find your next favorite book all in one welcoming place.',
        'hero.cta': 'GO TO LIVRIA',
        'hero.more': 'SEE MORE +',
        'services.title': 'Our Services',
        'services.description': 'Discover how Livria makes reading more accessible, interactive and community-focused.',
        "services.algorithms.title": "Smart Recommendations",
        "services.algorithms.description": "Advanced algorithms that analyze your reading habits to suggest books and authors tailored perfectly to your literary taste.",
        "services.communities.title": "Vibrant Communities",
        "services.communities.description": "Connect with readers who share your passion. Join niche groups and engage in deep discussions about your favorite genres and latest reads.",
        "services.search.title": "Advanced Search",
        "services.search.description": "Find exactly what you are looking for with powerful filters. Search by genre, publication date, author, or even specific narrative tropes.",
        "services.marketplace.title": "Digital & Physical Store",
        "services.marketplace.description": "The best of both worlds. Purchase instant E-books or order high-quality physical editions directly through our integrated secure marketplace.",
        "services.delivery.title": "Flexible Delivery",
        "services.delivery.description": "Tailored shipping options that adapt to your schedule. Choose between standard or local pick-up points for your physical books.",
        "services.catalog.title": "Extensive Catalog",
        "services.catalog.description": "Explore a massive universe of literature. From timeless classics to the latest indie releases, our library is constantly growing for you.",
        'about.title': 'ABOUT US',
        'about.Defontes.description': 'Defontes is a startup led by students from the Peruvian University of Applied Sciences (UPC) dedicated to promoting reading and facilitating its access in digital environments. With the goal of bringing literature to more people, the Livria project was developed, an innovative mobile application that allows users to discover, purchase, and enjoy books in various formats: physical, e-books, and audiobooks.',
        'about.Defontes.belief': 'At Defontes, we believe that reading is fundamental to learning, culture, and the development of critical thinking. It\'s not just a habit, but a choice.',
        'about.Defontes.tag': 'Defontes',
        'about.livria.tag': 'LIVRIA',
        'about.livria.description': 'Livria is a mobile application designed to revolutionize the way people acquire and enjoy books. Through an intuitive and accessible platform, it offers a wide selection of titles, allowing users to explore and purchase their favorite books quickly and easily. With the goal of encouraging the habit of reading and creating a community of book lovers, Livria facilitates the connection between readers and the literary world in a modern digital environment.',
        'video.team.title': 'About the Team',
        'video.team.description': 'Learn more about the people behind Livria.',
        'video.product.title': 'About the Product',
        'video.product.description': 'Discover the features and benefits of Livria.',
        'contact.title': 'CONTACT US',
        'contact.fullName': 'Full Name',
        'contact.email': 'Email',
        'contact.phone': 'Phone number',
        'contact.reason': 'Reason for contact',
        'contact.cv': 'If you\'d like to work with us, leave your CV!',
        'contact.upload': 'Add file',
        'contact.consent': 'I agree to share my personal information with the Defontes Livria team',
        'contact.submit': 'SEND',
        'contact.success': 'Thank you! Your message has been sent successfully.',
        'footer.tagline': 'Discover the joy of reading in a vibrant literary community.',
        'footer.navigation': 'Navigation',
        'footer.legal': 'Legal',
        'footer.terms': 'Terms and Conditions',
        'footer.privacy': 'Privacy Policy',
        'footer.cookies': 'Cookies Policy',
        'footer.complaints': 'Complaints Book',
        'footer.support': 'Support',
        'footer.help': 'Help',
        'footer.faq': 'Frequent Questions',
        'footer.contactUs': 'Contact Us',
        'footer.copyright': '© 2025 Defontes - Livria. All rights reserved.',
        "legal.terms.content": `
            <div class="legal-content">
                <h2>Livria Application Terms and Conditions</h2>
                <p><strong>Last Updated:</strong> 04/27/2025</p>
                
                <p>Welcome to Livria! These Terms and Conditions ("Terms") govern your use of the Livria mobile application and related services (collectively, the "Service"), provided by Defontes ("Defontes," "we," "us," or "our").</p>
                
                <p>By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, you must not access the Service.</p>

                <h3>1. Definitions</h3>
                <p><strong>Service:</strong> The Livria mobile application, developed and owned by Defontes.</p>
                <p><strong>Defontes:</strong> The company providing the Service, located at Av. República de Chile 661.</p>
                <p><strong>User:</strong> Any individual who accesses or uses the Service.</p>
                <p><strong>Content:</strong> All material displayed on or available through the Service.</p>

                <h3>2. User Accounts and Access</h3>
                <p><strong>2.1 Account Creation:</strong> You must provide accurate and current information during registration.</p>
                <p><strong>2.2 Account Security:</strong> You are responsible for maintaining the confidentiality of your credentials.</p>
                <p><strong>2.3 Local Storage:</strong> The Service uses client-side storage to enhance functionality and maintain session continuity.</p>

                <h3>3. Privacy and Data Collection</h3>
                <p><strong>3.1 Personal Information:</strong> Collection and use are governed by our Privacy Policy.</p>
                <p><strong>3.2 Geolocation:</strong> We use Google Maps API for store locations and routing. You agree to Google's Additional Terms of Service.</p>
                <p><strong>3.3 Device Permissions:</strong> The Service may request access to Camera, Gallery, and Geolocation.</p>

                <h3>4. Payment Terms</h3>
                <p><strong>4.1 Payment Processor:</strong> Livria uses bank transactions. When making a puchase, the verification of the transaction must be attached. Later, the Livria team will verificate the payment and process the order.</p>
                <p><strong>4.2 Subscriptions:</strong> You authorize the charge of the subscription amount, thus making the bank transfer each month.</p>

                <h3>5. Intellectual Property</h3>
                <p>All Content and software are owned by Defontes and protected by international copyright laws.</p>

                <h3>6. Termination</h3>
                <p>We may terminate or suspend your access immediately if you breach these Terms.</p>

                <h3>7. Limitation of Liability</h3>
                <p>The Service is provided "AS IS". Defontes shall not be liable for any indirect or consequential damages.</p>

                <h3>8. Governing Law</h3>
                <p>These Terms shall be governed and construed in accordance with the laws of <strong>Peru</strong>.</p>

                <h3>9. Contact Information</h3>
                <p>Email: <strong>support@defontes.com</strong><br>Address: Av. República de Chile 661</p>
            </div>
        `,
        "legal.privacy.content": `
            <div class="legal-content">
                <h2>Livria Privacy Policy</h2>
                <p><strong>Last Updated:</strong> 01/12/2025</p>
                
                <h3>1. Introduction</h3>
                <p>This Privacy Policy describes how Defontes ("we," "us," or "our") collects and uses your information when you use the Livria mobile application. We are committed to protecting your data in compliance with <strong>Peruvian Law N° 29733</strong>.</p>
        
                <h3>2. Information We Collect</h3>
                <p><strong>2.1 Personal Data:</strong> Full Name, Email, Phone Number, Physical Address, and Username/Password.</p>
                <p><strong>2.2 Usage Data:</strong> Device model, operating system, and unique identifiers.</p>
                <p><strong>2.3 Permissions:</strong> 
                    <ul>
                        <li><strong>Location:</strong> Used only for maps and shipping routes.</li>
                        <li><strong>Camera/Gallery:</strong> Used for profile pictures and book listings.</li>
                    </ul>
                </p>
        
                <h3>3. How We Use Your Information</h3>
                <ul>
                    <li>To provide and maintain the Service.</li>
                    <li>To process payments and deliver orders.</li>
                    <li>To provide customer support.</li>
                    <li>To monitor usage and detect technical issues.</li>
                </ul>
        
                <h3>4. Payment Information</h3>
                <p>We use third-party services like <strong>Izipay</strong>. We do not store your credit card details; they are processed directly by the provider under their own security standards.</p>
        
                <h3>5. Data Sharing</h3>
                <p>We do not sell your personal data. It is only shared with Service Providers (couriers, hosting) or by legal requirement from public authorities.</p>
        
                <h3>6. Data Security</h3>
                <p>We use SSL encryption and tokenization to protect your data. While we use commercially reasonable means, no internet transmission is 100% secure.</p>
        
                <h3>7. Your Rights (ARCO Rights)</h3>
                <p>In accordance with Peruvian Law, you have the following rights:</p>
                <ul>
                    <li><strong>Access:</strong> Request a copy of your data.</li>
                    <li><strong>Rectification:</strong> Correct inaccurate data.</li>
                    <li><strong>Cancellation:</strong> Request data deletion.</li>
                    <li><strong>Opposition:</strong> Object to processing for specific purposes.</li>
                </ul>
                <p>Contact us at <strong>support@defontes.com</strong> to exercise these rights.</p>
        
                <h3>8. Contact Us</h3>
                <p>Email: support@defontes.com<br>Address: Av. República de Chile 661, Lima, Peru.</p>
            </div>
        `,
        "legal.cookies.content": `
            <div class="legal-content">
                <h2>Livria Cookies Policy</h2>
                <p><strong>Last Updated:</strong> 01/12/2025</p>
                
                <p>This Cookies Policy explains how Livria uses cookies and similar technologies to recognize you when you visit our landing page or use our app.</p>
        
                <h3>1. What are cookies?</h3>
                <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
        
                <h3>2. Why do we use cookies?</h3>
                <p>We use first-party and third-party cookies for several reasons:</p>
                <ul>
                    <li><strong>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our Service (e.g., maintaining your session and language preferences).</li>
                    <li><strong>Performance and Functionality:</strong> These cookies are used to enhance the performance and functionality of our Service but are non-essential to their use (e.g., remembering your login details).</li>
                    <li><strong>Analytics:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Service is being used.</li>
                </ul>
        
                <h3>3. Your Language Preference</h3>
                <p>Livria specifically uses Local Storage and Cookies to remember if you prefer viewing our site in <strong>English or Spanish</strong>, so you don't have to select it every time you return.</p>
        
                <h3>4. How can I control cookies?</h3>
                <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
        
                <h3>5. Updates to this Policy</h3>
                <p>We may update this Cookies Policy from time to time in order to reflect changes to the cookies we use for operational, legal or regulatory reasons.</p>
        
                <h3>6. Contact Us</h3>
                <p>If you have questions about our use of cookies, please email us at <strong>support@defontes.com</strong>.</p>
            </div>
        `,
        "legal.complaints.content": `
            <div class="legal-content">
                <h2>Complaints Book</h2>
                <p>According to local regulations, you can file a complaint or claim about our service here.</p>
                <form class="contact__form" id="complaintsForm">
                    <div class="contact__form-row">
                        <div class="contact__form-group">
                            <label class="contact__label">Full Name</label>
                            <input type="text" name="fullName" class="contact__input" placeholder="Your full name" required>
                        </div>
                        <div class="contact__form-group">
                            <label class="contact__label">Reason for complaint</label>
                            <textarea name="contactReason" class="contact__textarea" rows="4" placeholder="Describe your issue in detail" required></textarea>
                        </div>
                    </div>
                    <div class="contact__form-row">
                        <div class="contact__form-group">
                            <label class="contact__label">Email</label>
                            <input type="email" name="email" class="contact__input" placeholder="your@email.com" required>
                        </div>
                        <div class="contact__form-group">
                            <label class="contact__label">Order ID (optional)</label>
                            <input type="text" name="orderId" class="contact__input" placeholder="e.g. ORD-12345">
                        </div>
                    </div>
                    <div class="contact__form-row">
                        <div class="contact__form-group">
                            <label class="contact__label">Phone number</label>
                            <input type="tel" name="phone" class="contact__input" placeholder="+51 999 999 999">
                        </div>
                    </div>
                    <div class="contact__form-row contact__form-row--consent">
                        <div class="contact__checkbox-group">
                            <input type="checkbox" id="complaintConsent" class="contact__checkbox" required>
                            <label for="complaintConsent" class="contact__checkbox-label">I agree to share my personal information with the Defontes Livria team</label>
                        </div>
                        <button type="button" id="complaintsSubmitBtn" class="btn btn--submit">SEND</button>
                    </div>
                </form>
            </div>
        `,
        'help.title': 'Help Center',
        'help.subtitle': 'Find quick answers or reach out to our team — we\'re here to help you.',
        'help.topics.title': 'Browse by <span>Topic</span>',
        'help.topic.app': 'Using the App',
        'help.topic.app.desc': 'Learn how to navigate Livria, manage your account, and get the most out of every feature.',
        'help.topic.payments': 'Payments',
        'help.topic.payments.desc': 'Understand how our bank-transfer payment system works, receipts, and refund policies.',
        'help.topic.delivery': 'Shipping & Delivery',
        'help.topic.delivery.desc': 'Track your physical book orders, delivery times, and pick-up point information.',
        'help.topic.subs': 'Subscriptions',
        'help.topic.subs.desc': 'Manage your subscription plan, billing cycle, and how to upgrade or cancel anytime.',
        'help.topic.catalog': 'Catalog & E-books',
        'help.topic.catalog.desc': 'How to download e-books, access your library, and discover new titles through recommendations.',
        'help.topic.contact': 'Contact Support',
        'help.topic.contact.desc': 'Didn\'t find what you need? Our team is ready to help you directly via our contact form.',
        'help.readmore': 'See answers <i class="fas fa-arrow-right"></i>',
        'help.contact.link': 'Go to contact <i class="fas fa-arrow-right"></i>',
        'help.steps.title': 'Getting <span>Started</span>',
        'help.step1.title': 'Download the app',
        'help.step1.desc': 'Livria is available on Google Play and the App Store. Install it for free and create your account in seconds.',
        'help.step2.title': 'Set up your profile',
        'help.step2.desc': 'Tell us your reading preferences so our algorithms can start personalizing recommendations just for you.',
        'help.step3.title': 'Browse the catalog',
        'help.step3.desc': 'Explore thousands of titles — physical books, e-books, and audiobooks — all in one place.',
        'help.step4.title': 'Buy & enjoy',
        'help.step4.desc': 'Purchase your books securely and receive them at your door or download them instantly to start reading.',
        'help.banner.title': 'Still need help?',
        'help.banner.desc': 'Our support team responds within 24 hours on business days.',
        'help.banner.btn': 'CONTACT US',
        'faq.title': 'Frequent Questions',
        'faq.subtitle': 'Everything you need to know about Livria, in one place.',
        'faq.filter.all': 'All', 'faq.filter.app': 'App',
        'faq.filter.payments': 'Payments', 'faq.filter.delivery': 'Delivery',
        'faq.filter.subscriptions': 'Subscriptions',
        'faq.app.title': 'Using the App',
        'faq.app.q1': 'How do I create an account on Livria?',
        'faq.app.a1': 'Download the app from Google Play or the App Store, open it, and tap "Sign Up". Enter your name, email, and a password. You\'ll receive a confirmation email — click the link inside and your account is ready to use.',
        'faq.app.q2': 'Can I use Livria on multiple devices?',
        'faq.app.a2': 'Yes. Log in with your account credentials on any device. Your library, reading progress, and preferences sync automatically across all your devices.',
        'faq.app.q3': 'How do the smart recommendations work?',
        'faq.app.a3': 'Our algorithm analyzes your reading history, ratings, genres you browse, and community activity to suggest books tailored to your taste. The more you use Livria, the more accurate the suggestions become.',
        'faq.app.q4': 'How do I download an e-book to read offline?',
        'faq.app.a4': 'After purchasing an e-book, open it from your Library and tap the download icon. The book will be saved to your device and accessible even without an internet connection.',
        'faq.app.q5': 'How do I join a reading community?',
        'faq.app.a5': 'Go to the "Communities" tab in the app, browse groups by genre or topic, and tap "Join". You\'ll immediately have access to discussions, shared reading lists, and community events.',
        'faq.payments.title': 'Payments',
        'faq.pay.q1': 'How does payment work on Livria?',
        'faq.pay.a1': 'Livria uses bank transfers as its primary payment method. When you place an order, you\'ll see our bank account details. Transfer the amount and upload a photo of the receipt in the app. Our team verifies it and processes your order — usually within a few hours.',
        'faq.pay.q2': 'How long does payment verification take?',
        'faq.pay.a2': 'Payment verification typically takes between 1 and 4 business hours. If your transfer was made outside business hours, it will be reviewed the following working day. You\'ll receive a push notification once confirmed.',
        'faq.pay.q3': 'Can I get a refund?',
        'faq.pay.a3': 'Refunds are available within 7 days of purchase for physical books that haven\'t been shipped yet, or for e-books with verified technical issues. To request one, contact our team via the Contact Us form with your order ID and reason.',
        'faq.pay.q4': 'Is my payment information secure?',
        'faq.pay.a4': 'Yes. Livria does not store any banking credentials. For third-party processors like Izipay, all transactions are handled under their own encrypted, PCI-compliant infrastructure. We only store a confirmation reference for your records.',
        'faq.delivery.title': 'Shipping & Delivery',
        'faq.del.q1': 'How long does shipping take?',
        'faq.del.a1': 'Standard delivery within Lima takes 2–4 business days after payment confirmation. Orders to other regions in Peru may take 5–8 business days. Express options may be available depending on your area.',
        'faq.del.q2': 'How can I track my order?',
        'faq.del.a2': 'Once your order is dispatched, you\'ll receive a tracking number via push notification and email. You can also check the status in real time from the "My Orders" section inside the app.',
        'faq.del.q3': 'Are there pick-up points available?',
        'faq.del.a3': 'Yes. During checkout you can select "Pick-up at a local point" and choose the nearest location using our integrated map. This option is free of charge and usually available within 1–2 business days.',
        'faq.del.q4': 'What happens if my book arrives damaged?',
        'faq.del.a4': 'If your physical book arrives damaged, take a photo of the packaging and the damage and contact us within 48 hours of delivery. We\'ll arrange a replacement or a full refund at no extra cost to you.',
        'faq.subs.title': 'Subscriptions',
        'faq.sub.q1': 'What does a Livria subscription include?',
        'faq.sub.a1': 'A Livria subscription gives you unlimited access to our e-book catalog, exclusive discounts on physical books, early access to new releases, and priority customer support. Premium members also enjoy an ad-free experience and advanced reading analytics.',
        'faq.sub.q2': 'How does subscription billing work?',
        'faq.sub.a2': 'Subscriptions are renewed monthly. You authorize a monthly bank transfer for the subscription amount. You\'ll receive a reminder 3 days before the renewal date so you can make the transfer on time and avoid any interruption.',
        'faq.sub.q3': 'Can I cancel my subscription at any time?',
        'faq.sub.a3': 'Yes. You can cancel anytime from "Settings → Subscription" in the app. Your benefits will remain active until the end of the current billing period, after which your account reverts to the free plan with no charges.',
        'faq.sub.q4': 'What happens to my downloaded e-books if I cancel?',
        'faq.sub.a4': 'E-books you individually purchased remain yours permanently. Books accessed through the subscription catalog will no longer be available after cancellation, but your reading progress is saved should you decide to resubscribe.',
        'faq.sub.q5': 'Is there a free trial?',
        'faq.sub.a5': 'Yes! New users get a 14-day free trial of the Premium subscription. No payment required to start — simply activate it from the Subscription section in the app. You\'ll be notified before the trial ends.',
        'faq.banner.title': 'Didn\'t find your answer?',
        'faq.banner.desc': 'Send us a message and we\'ll get back to you within 24 hours.',
        'faq.banner.btn': 'CONTACT US',
    },
    // Spanish
    es: {
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.about': 'Sobre nosotros',
        'nav.contact': 'Contáctanos',
        'hero.title': 'Miles de libros a tu disposición',
        'hero.description': 'Descubre el placer de leer, conecta con una comunidad literaria activa y encuentra tu próximo libro favorito en un espacio acogedor.',
        'hero.cta': 'IR A LIVRIA',
        'hero.more': 'VER MÁS +',
        'services.title': 'Nuestros Servicios',
        'services.description': 'Descubre cómo Livria hace la lectura más accesible, interactiva y centrada en la comunidad.',
        "services.algorithms.title": "Recomendaciones Inteligentes",
        "services.algorithms.description": "Algoritmos avanzados que analizan tus hábitos de lectura para sugerirte libros y autores que se adaptan perfectamente a tus gustos literarios.",
        "services.communities.title": "Comunidades Vibrantes",
        "services.communities.description": "Conéctate con lectores que comparten tu pasión. Únete a grupos específicos y participa en debates profundos sobre tus géneros favoritos y últimas lecturas.",
        "services.search.title": "Búsqueda Avanzada",
        "services.search.description": "Encuentra exactamente lo que buscas con filtros potentes. Busca por género, fecha de publicación, autor o incluso tropos narrativos específicos.",
        "services.marketplace.title": "Tienda Digital y Física",
        "services.marketplace.description": "Lo mejor de ambos mundos. Adquiere E-books al instante o solicita ediciones físicas de alta calidad a través de nuestro mercado integrado y seguro.",
        "services.delivery.title": "Entrega Flexible",
        "services.delivery.description": "Opciones de envío personalizadas que se adaptan a tu horario. Elige entre envío o recojo en tienda para tus libros físicos.",
        "services.catalog.title": "Catálogo Extenso",
        "services.catalog.description": "Explora un universo masivo de literatura. Desde clásicos atemporales hasta los últimos lanzamientos independientes, nuestra biblioteca crece constantemente para ti.",
        'about.title': 'SOBRE NOSOTROS',
        'about.Defontes.description': 'Defontes es una startup liderada por estudiantes de la Universidad Peruana de Ciencias Aplicadas (UPC) dedicada a promover la lectura y facilitar su acceso en entornos digitales. Con el objetivo de llevar la literatura a más personas, se desarrolló el proyecto Livria, una aplicación móvil innovadora que permite a los usuarios descubrir, comprar y disfrutar de libros en varios formatos: físicos, e-books y audiolibros.',
        'about.Defontes.belief': 'En Defontes, creemos que la lectura es fundamental para el aprendizaje, la cultura y el desarrollo del pensamiento crítico. No es solo un hábito, sino una elección.',
        'about.Defontes.tag': 'Defontes',
        'about.livria.tag': 'LIVRIA',
        'about.livria.description': 'Livria es una aplicación móvil diseñada para revolucionar la forma en que las personas adquieren y disfrutan los libros. A través de una plataforma intuitiva y accesible, ofrece una amplia selección de títulos, permitiendo a los usuarios explorar y comprar sus libros favoritos de manera rápida y sencilla. Con el objetivo de fomentar el hábito de la lectura y crear una comunidad de amantes de los libros, Livria facilita la conexión entre los lectores y el mundo literario en un entorno digital moderno.',
        'video.team.title': 'Acerca del Equipo',
        'video.team.description': 'Conoce más sobre las personas detrás de Livria.',
        'video.product.title': 'Acerca del Producto',
        'video.product.description': 'Descubre las características y beneficios de Livria.',
        'contact.title': 'CONTÁCTANOS',
        'contact.fullName': 'Nombre completo',
        'contact.email': 'Correo electrónico',
        'contact.phone': 'Número de teléfono',
        'contact.reason': 'Motivo de contacto',
        'contact.cv': '¡Si quieres trabajar con nosotros, déjanos tu CV!',
        'contact.upload': 'Añadir archivo',
        'contact.consent': 'Acepto compartir mi información personal con el equipo de Defontes Livria',
        'contact.submit': 'ENVIAR',
        'contact.success': '¡Gracias! Tu mensaje ha sido enviado con éxito.',
        'footer.tagline': 'Descubre el placer de leer en una vibrante comunidad literaria.',
        'footer.navigation': 'Navegación',
        'footer.legal': 'Legal',
        'footer.terms': 'Términos y Condiciones',
        'footer.privacy': 'Política de Privacidad',
        'footer.cookies': 'Política de Cookies',
        'footer.complaints': 'Libro de Reclamaciones',
        'footer.support': 'Soporte',
        'footer.help': 'Ayuda',
        'footer.faq': 'Preguntas Frecuentes',
        'footer.contactUs': 'Contáctanos',
        'footer.copyright': '© 2025 Defontes - Livria. Todos los derechos reservados.',
        "legal.terms.content": `
            <div class="legal-content">
                <h2>Términos y Condiciones de la Aplicación Livria</h2>
                <p><strong>Última actualización:</strong> 04/27/2025</p>
                
                <p>¡Bienvenido a Livria! Estos Términos y Condiciones ("Términos") rigen el uso de la aplicación móvil Livria y los servicios relacionados (colectivamente, el "Servicio"), proporcionados por Defontes ("Defontes", "nosotros" o "nuestro").</p>
                
                <p>Al acceder o utilizar el Servicio, usted acepta estar sujeto a estos Términos y a nuestra Política de Privacidad. Si no está de acuerdo con alguna parte de los términos, no debe acceder al Servicio.</p>

                <h3>1. Definiciones</h3>
                <p><strong>Servicio:</strong> La aplicación móvil Livria, desarrollada y propiedad de Defontes.</p>
                <p><strong>Defontes:</strong> La empresa que presta el Servicio, ubicada en Av. República de Chile 661.</p>
                <p><strong>Usuario:</strong> Cualquier persona que acceda o utilice el Servicio.</p>
                <p><strong>Contenido:</strong> Todo el material mostrado o disponible a través del Servicio.</p>

                <h3>2. Cuentas de Usuario y Acceso</h3>
                <p><strong>2.1 Creación de Cuenta:</strong> Debe proporcionar información precisa y actual durante el registro.</p>
                <p><strong>2.2 Seguridad de la Cuenta:</strong> Usted es responsable de mantener la confidencialidad de sus credenciales.</p>
                <p><strong>2.3 Almacenamiento Local:</strong> El Servicio utiliza mecanismos de almacenamiento en el dispositivo (Local Storage) para mejorar la funcionalidad y mantener la sesión.</p>

                <h3>3. Privacidad y Recolección de Datos</h3>
                <p><strong>3.1 Información Personal:</strong> La recolección y uso se rigen por nuestra Política de Privacidad.</p>
                <p><strong>3.2 Geolocalización:</strong> Utilizamos la API de Google Maps para ubicar librerías y rutas. Usted acepta los Términos de Servicio adicionales de Google Maps.</p>
                <p><strong>3.3 Permisos del Dispositivo:</strong> El Servicio puede solicitar acceso a la Cámara, Galería y Geolocalización.</p>

                <h3>4. Términos de Pago</h3>
                <p><strong>4.1 Procesador de pagos:</strong> Livria utiliza transacciones bancarias. Al realizar una oferta, debe adjuntar la verificación de la transacción. Posteriormente, el equipo de Livria verificará el pago y procesará el pedido.</p>
                <p><strong>4.2 Suscripciones:</strong> Usted autoriza el cargo del importe de la suscripción, realizando así la transferencia bancaria mensual.</p>
                
                <h3>5. Propiedad Intelectual</h3>
                <p>Todo el contenido y software son propiedad de Defontes y están protegidos por leyes internacionales de derechos de autor.</p>

                <h3>6. Rescisión</h3>
                <p>Podemos rescindir o suspender su acceso de inmediato si incumple estos Términos.</p>

                <h3>7. Limitación de Responsabilidad</h3>
                <p>El Servicio se proporciona "TAL CUAL". Defontes no será responsable de ningún daño indirecto o consecuente.</p>

                <h3>8. Ley Aplicable</h3>
                <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de <strong>Perú</strong>.</p>

                <h3>9. Información de Contacto</h3>
                <p>Email: <strong>support@defontes.com</strong><br>Dirección: Av. República de Chile 661</p>
            </div>
        `,
        "legal.privacy.content": `
            <div class="legal-content">
                <h2>Política de Privacidad de Livria</h2>
                <p><strong>Última actualización:</strong> 01/12/2025</p>
                
                <h3>1. Introducción</h3>
                <p>Esta Política de Privacidad describe cómo Defontes ("nosotros", "nuestro") recopila y utiliza su información en la aplicación Livria. Estamos comprometidos con la protección de sus datos en cumplimiento con la <strong>Ley Peruana N° 29733</strong>.</p>
        
                <h3>2. Información que Recopilamos</h3>
                <p><strong>2.1 Datos Personales:</strong> Nombre completo, correo electrónico, teléfono, dirección física y credenciales de acceso.</p>
                <p><strong>2.2 Datos de Uso:</strong> Modelo del dispositivo, sistema operativo e identificadores únicos.</p>
                <p><strong>2.3 Permisos:</strong> 
                    <ul>
                        <li><strong>Ubicación:</strong> Solo para funciones de mapas y rutas de envío.</li>
                        <li><strong>Cámara/Galería:</strong> Para fotos de perfil y registro de libros.</li>
                    </ul>
                </p>
        
                <h3>3. Uso de la Información</h3>
                <ul>
                    <li>Para proveer y mantener el Servicio.</li>
                    <li>Para procesar pagos y entregar pedidos.</li>
                    <li>Para brindar soporte al cliente.</li>
                    <li>Para detectar problemas técnicos y monitorear el uso.</li>
                </ul>
        
                <h3>4. Información de Pago</h3>
                <p>Utilizamos servicios de terceros como <strong>Izipay</strong>. No almacenamos los datos de su tarjeta; son procesados directamente por el proveedor bajo sus estándares de seguridad.</p>
        
                <h3>5. Uso Compartido de Datos</h3>
                <p>No vendemos sus datos. Solo se comparten con proveedores de servicios (curriers, hosting) o por requerimiento legal de autoridades públicas.</p>
        
                <h3>6. Seguridad de Datos</h3>
                <p>Usamos cifrado SSL y tokenización. Aunque aplicamos medidas comerciales razonables, ninguna transmisión por Internet es 100% segura.</p>
        
                <h3>7. Sus Derechos (Derechos ARCO)</h3>
                <p>Conforme a la Ley N° 29733, usted tiene derecho a:</p>
                <ul>
                    <li><strong>Acceso:</strong> Solicitar copia de sus datos.</li>
                    <li><strong>Rectificación:</strong> Corregir datos inexactos.</li>
                    <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos.</li>
                    <li><strong>Oposición:</strong> Oponerse al tratamiento para fines específicos.</li>
                </ul>
                <p>Contáctenos en <strong>support@defontes.com</strong> para ejercer estos derechos.</p>
        
                <h3>8. Contacto</h3>
                <p>Email: support@defontes.com<br>Dirección: Av. República de Chile 661, Lima, Perú.</p>
            </div>
        `,
        "legal.cookies.content": `
            <div class="legal-content">
                <h2>Política de Cookies de Livria</h2>
                <p><strong>Última actualización:</strong> 01/12/2025</p>
                
                <p>Esta Política de Cookies explica cómo Livria utiliza cookies y tecnologías similares para reconocerte cuando visitas nuestra página o utilizas nuestra aplicación.</p>
        
                <h3>1. ¿Qué son las cookies?</h3>
                <p>Las cookies son pequeños archivos de datos que se guardan en tu computadora o dispositivo móvil cuando visitas un sitio web. Son muy utilizadas para que los sitios funcionen correctamente o lo hagan de manera más eficiente.</p>
        
                <h3>2. ¿Por qué usamos cookies?</h3>
                <p>Utilizamos cookies propias y de terceros por varias razones:</p>
                <ul>
                    <li><strong>Cookies Esenciales:</strong> Son estrictamente necesarias para ofrecerte los servicios disponibles a través de nuestra plataforma (ej. mantener tu sesión iniciada y tu preferencia de idioma).</li>
                    <li><strong>Rendimiento y Funcionalidad:</strong> Se utilizan para mejorar el rendimiento, aunque no son esenciales para el uso del sitio (ej. recordar tus datos de inicio de sesión).</li>
                    <li><strong>Analítica:</strong> Recopilan información agregada para ayudarnos a entender cómo se utiliza nuestro servicio.</li>
                </ul>
        
                <h3>3. Tu Preferencia de Idioma</h3>
                <p>Livria utiliza específicamente Almacenamiento Local y Cookies para recordar si prefieres ver nuestro sitio en <strong>Inglés o Español</strong>, de modo que no tengas que seleccionarlo cada vez que regreses.</p>
        
                <h3>4. ¿Cómo puedo controlar las cookies?</h3>
                <p>Tienes el derecho de decidir si aceptas o rechazas las cookies. Puedes ajustar los controles de tu navegador web para aceptarlas o rechazarlas. Si eliges rechazar las cookies, es posible que algunas funciones de nuestro sitio se vean limitadas.</p>
        
                <h3>5. Actualizaciones de esta Política</h3>
                <p>Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies que utilizamos por razones operativas, legales o reglamentarias.</p>
        
                <h3>6. Contacto</h3>
                <p>Si tienes dudas sobre el uso de cookies, escríbenos a <strong>support@defontes.com</strong>.</p>
            </div>
        `,
        "legal.complaints.content": `
            <div class="legal-content">
                <h2>Libro de Reclamaciones</h2>
                <p>Conforme a las normas de protección al consumidor, puedes registrar una queja o reclamo aquí.</p>
                <form class="contact__form" id="complaintsForm">
                    <div class="contact__form-row">
                        <div class="contact__form-group">
                            <label class="contact__label">Nombre completo</label>
                            <input type="text" name="fullName" class="contact__input" placeholder="Tu nombre completo" required>
                        </div>
                        <div class="contact__form-group">
                            <label class="contact__label">Motivo de reclamación</label>
                            <textarea name="contactReason" class="contact__textarea" rows="4" placeholder="Describe el inconveniente en detalle" required></textarea>
                        </div>
                    </div>
                    <div class="contact__form-row">
                        <div class="contact__form-group">
                            <label class="contact__label">Correo electrónico</label>
                            <input type="email" name="email" class="contact__input" placeholder="tu@correo.com" required>
                        </div>
                        <div class="contact__form-group">
                            <label class="contact__label">ID de Pedido (opcional)</label>
                            <input type="text" name="orderId" class="contact__input" placeholder="Ej. ORD-12345">
                        </div>
                    </div>
                    <div class="contact__form-row">
                        <div class="contact__form-group">
                            <label class="contact__label">Número de teléfono</label>
                            <input type="tel" name="phone" class="contact__input" placeholder="+51 999 999 999">
                        </div>
                    </div>
                    <div class="contact__form-row contact__form-row--consent">
                        <div class="contact__checkbox-group">
                            <input type="checkbox" id="complaintConsent" class="contact__checkbox" required>
                            <label for="complaintConsent" class="contact__checkbox-label">Acepto compartir mi información personal con el equipo de Defontes Livria</label>
                        </div>
                        <button type="button" id="complaintsSubmitBtn" class="btn btn--submit">ENVIAR</button>
                    </div>
                </form>
            </div>
        `,
        'help.title': 'Centro de Ayuda',
        'help.subtitle': 'Encuentra respuestas rápidas o comunícate con nuestro equipo — estamos aquí para ayudarte.',
        'help.topics.title': 'Explorar por <span>Tema</span>',
        'help.topic.app': 'Usando la App',
        'help.topic.app.desc': 'Aprende a navegar Livria, gestionar tu cuenta y sacar el máximo provecho de cada función.',
        'help.topic.payments': 'Pagos',
        'help.topic.payments.desc': 'Entiende cómo funciona nuestro sistema de pago por transferencia bancaria, recibos y política de reembolsos.',
        'help.topic.delivery': 'Envíos y Entrega',
        'help.topic.delivery.desc': 'Rastrea tus pedidos de libros físicos, tiempos de entrega e información sobre puntos de recojo.',
        'help.topic.subs': 'Suscripciones',
        'help.topic.subs.desc': 'Gestiona tu plan, ciclo de facturación y cómo actualizar o cancelar en cualquier momento.',
        'help.topic.catalog': 'Catálogo y E-books',
        'help.topic.catalog.desc': 'Cómo descargar e-books, acceder a tu biblioteca y descubrir nuevos títulos.',
        'help.topic.contact': 'Contactar Soporte',
        'help.topic.contact.desc': '¿No encontraste lo que necesitas? Nuestro equipo está listo para ayudarte directamente.',
        'help.readmore': 'Ver respuestas <i class="fas fa-arrow-right"></i>',
        'help.contact.link': 'Ir al contacto <i class="fas fa-arrow-right"></i>',
        'help.steps.title': 'Cómo <span>Empezar</span>',
        'help.step1.title': 'Descarga la app',
        'help.step1.desc': 'Livria está disponible en Google Play y App Store. Instálala gratis y crea tu cuenta en segundos.',
        'help.step2.title': 'Configura tu perfil',
        'help.step2.desc': 'Cuéntanos tus preferencias de lectura para que nuestros algoritmos personalicen tus recomendaciones.',
        'help.step3.title': 'Explora el catálogo',
        'help.step3.desc': 'Descubre miles de títulos — libros físicos, e-books y audiolibros — todo en un solo lugar.',
        'help.step4.title': 'Compra y disfruta',
        'help.step4.desc': 'Adquiere tus libros de forma segura y recíbelos en casa o descárgalos al instante para empezar a leer.',
        'help.banner.title': '¿Aún necesitas ayuda?',
        'help.banner.desc': 'Nuestro equipo de soporte responde dentro de las 24 horas en días hábiles.',
        'help.banner.btn': 'CONTÁCTANOS',
        'faq.title': 'Preguntas Frecuentes',
        'faq.subtitle': 'Todo lo que necesitas saber sobre Livria, en un solo lugar.',
        'faq.filter.all': 'Todas', 'faq.filter.app': 'App',
        'faq.filter.payments': 'Pagos', 'faq.filter.delivery': 'Envíos',
        'faq.filter.subscriptions': 'Suscripciones',
        'faq.app.title': 'Usando la App',
        'faq.app.q1': '¿Cómo creo una cuenta en Livria?',
        'faq.app.a1': 'Descarga la app desde Google Play o App Store, ábrela y toca "Registrarse". Ingresa tu nombre, correo y contraseña. Recibirás un correo de confirmación — haz clic en el enlace y tu cuenta estará lista.',
        'faq.app.q2': '¿Puedo usar Livria en varios dispositivos?',
        'faq.app.a2': 'Sí. Inicia sesión con tus credenciales en cualquier dispositivo. Tu biblioteca, progreso de lectura y preferencias se sincronizan automáticamente.',
        'faq.app.q3': '¿Cómo funcionan las recomendaciones inteligentes?',
        'faq.app.a3': 'Nuestro algoritmo analiza tu historial de lectura, valoraciones, géneros que exploras y actividad en comunidades para sugerirte libros a tu medida. Cuanto más uses Livria, más precisas serán las sugerencias.',
        'faq.app.q4': '¿Cómo descargo un e-book para leer sin conexión?',
        'faq.app.a4': 'Tras comprar un e-book, ábrelo desde tu Biblioteca y toca el ícono de descarga. El libro se guardará en tu dispositivo y podrás acceder a él sin internet.',
        'faq.app.q5': '¿Cómo me uno a una comunidad lectora?',
        'faq.app.a5': 'Ve a la pestaña "Comunidades" en la app, explora grupos por género o tema y toca "Unirse". Accederás inmediatamente a debates, listas compartidas y eventos.',
        'faq.payments.title': 'Pagos',
        'faq.pay.q1': '¿Cómo funciona el pago en Livria?',
        'faq.pay.a1': 'Livria utiliza transferencias bancarias como método principal de pago. Al realizar un pedido, verás los datos de nuestra cuenta. Transfiere el monto y sube una foto del comprobante en la app. Nuestro equipo lo verifica y procesa tu pedido, generalmente en pocas horas.',
        'faq.pay.q2': '¿Cuánto tarda la verificación del pago?',
        'faq.pay.a2': 'La verificación suele tomar entre 1 y 4 horas hábiles. Si realizaste la transferencia fuera del horario de atención, se revisará el siguiente día hábil. Recibirás una notificación push al confirmarse.',
        'faq.pay.q3': '¿Puedo solicitar un reembolso?',
        'faq.pay.a3': 'Los reembolsos están disponibles dentro de 7 días de la compra para libros físicos que no han sido enviados aún, o para e-books con problemas técnicos verificados. Contáctanos con tu ID de pedido y motivo.',
        'faq.pay.q4': '¿Mi información de pago está segura?',
        'faq.pay.a4': 'Sí. Livria no almacena credenciales bancarias. Para procesadores como Izipay, las transacciones se gestionan bajo su infraestructura cifrada y compatible con PCI. Solo almacenamos una referencia de confirmación.',
        'faq.delivery.title': 'Envíos y Entrega',
        'faq.del.q1': '¿Cuánto tarda el envío?',
        'faq.del.a1': 'El envío estándar dentro de Lima toma 2–4 días hábiles tras la confirmación del pago. A otras regiones del Perú puede tomar 5–8 días hábiles. Opciones express pueden estar disponibles según tu zona.',
        'faq.del.q2': '¿Cómo puedo rastrear mi pedido?',
        'faq.del.a2': 'Una vez despachado tu pedido, recibirás un número de rastreo por notificación push y correo. También puedes ver el estado en tiempo real desde la sección "Mis Pedidos" en la app.',
        'faq.del.q3': '¿Hay puntos de recojo disponibles?',
        'faq.del.a3': 'Sí. En el proceso de compra puedes seleccionar "Recojo en punto local" y elegir la ubicación más cercana con nuestro mapa integrado. Esta opción es gratuita y suele estar disponible en 1–2 días hábiles.',
        'faq.del.q4': '¿Qué pasa si mi libro llega dañado?',
        'faq.del.a4': 'Si tu libro físico llega dañado, toma una foto del empaque y el daño, y contáctanos dentro de las 48 horas de recibido. Coordinaremos un reemplazo o reembolso completo sin costo adicional.',
        'faq.subs.title': 'Suscripciones',
        'faq.sub.q1': '¿Qué incluye una suscripción de Livria?',
        'faq.sub.a1': 'Una suscripción de Livria te da acceso ilimitado a nuestro catálogo de e-books, descuentos exclusivos en libros físicos, acceso anticipado a nuevos lanzamientos y soporte prioritario. Los miembros Premium también disfrutan de una experiencia sin anuncios y análisis avanzados de lectura.',
        'faq.sub.q2': '¿Cómo funciona la facturación de la suscripción?',
        'faq.sub.a2': 'Las suscripciones se renuevan mensualmente. Autorizas una transferencia bancaria mensual por el monto de la suscripción. Recibirás un recordatorio 3 días antes de la fecha de renovación para que puedas hacer la transferencia a tiempo.',
        'faq.sub.q3': '¿Puedo cancelar mi suscripción en cualquier momento?',
        'faq.sub.a3': 'Sí. Puedes cancelar desde "Configuración → Suscripción" en la app. Tus beneficios seguirán activos hasta el final del período de facturación actual, tras lo cual tu cuenta volverá al plan gratuito sin ningún cargo.',
        'faq.sub.q4': '¿Qué pasa con mis e-books descargados si cancelo?',
        'faq.sub.a4': 'Los e-books que compraste individualmente son tuyos de forma permanente. Los libros accedidos a través del catálogo de suscripción dejarán de estar disponibles, pero tu progreso de lectura se guarda por si decides volver a suscribirte.',
        'faq.sub.q5': '¿Hay una prueba gratuita?',
        'faq.sub.a5': '¡Sí! Los nuevos usuarios obtienen 14 días de prueba gratuita del plan Premium. No se requiere pago para comenzar — actívala desde la sección Suscripción en la app. Recibirás una notificación antes de que finalice.',
        'faq.banner.title': '¿No encontraste tu respuesta?',
        'faq.banner.desc': 'Envíanos un mensaje y te responderemos dentro de las 24 horas.',
        'faq.banner.btn': 'CONTÁCTANOS',
    }
};