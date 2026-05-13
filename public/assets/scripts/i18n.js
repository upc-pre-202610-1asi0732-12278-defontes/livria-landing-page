// i18n.js - Internationalization module
const i18n = {
    // English (default)
    en: {
        'download':'Download now!',
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
        "services.marketplace.title": "Physical catalog & checkout",
        "services.marketplace.description": "Browse titles, build your cart, and pay by bank transfer to the CCI shown in the app. The current service focuses on physical books within our coverage area; any digital format only applies if explicitly offered on the product screen.",
        "services.delivery.title": "Delivery in Lima",
        "services.delivery.description": "Physical orders are managed within Metropolitan Lima, Peru, as stated at checkout. Order status is updated operationally in the app; real-time courier tracking is not guaranteed unless expressly indicated.",
        "services.catalog.title": "Extensive Catalog",
        "services.catalog.description": "Explore a massive universe of literature. From timeless classics to the latest indie releases, our library is constantly growing for you.",
        'about.title': 'ABOUT US',
        'about.Defontes.description': 'Defontes is a startup led by students from the Peruvian University of Applied Sciences (UPC) dedicated to promoting reading and making it easier to discover books through digital tools. The Livria project is a mobile application where readers explore a catalog, join communities, and order physical books within the coverage and payment flows shown in the app.',
        'about.Defontes.belief': 'At Defontes, we believe that reading is fundamental to learning, culture, and the development of critical thinking. It\'s not just a habit, but a choice.',
        'about.Defontes.tag': 'Defontes',
        'about.livria.tag': 'LIVRIA',
        'about.livria.description': 'Livria is a mobile application for discovering titles, sharing with reading communities, and placing orders for physical books using the payment and delivery rules defined in the app. It is designed to encourage reading habits and connect readers with literature in a clear, modern experience aligned with Peruvian consumer and data-protection law.',
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
        'footer.saas': 'SaaS Agreement',
        'footer.support': 'Support',
        'footer.help': 'Help',
        'footer.faq': 'Frequent Questions',
        'footer.contactUs': 'Contact Us',
        'footer.copyright': '© 2026 Defontes - Livria. All rights reserved.',
        "legal.terms.content": `
            <div class="legal-content">
                <h2>Livria — Terms and Conditions</h2>
                <p><strong>Last updated:</strong> May 12, 2026 · <strong>Version:</strong> 1.3</p>
                <p><strong>Company:</strong> Defontes S.A.C. · <strong>Product:</strong> Livria mobile application · <strong>Contact:</strong> support@defontes.com · <strong>Address:</strong> Av. República de Chile 661, Lima, Peru</p>
                <p>Welcome. These Terms govern use of the Livria mobile application and related services provided by Defontes S.A.C. By registering or using the Service you confirm that you have read and accept these Terms and the Privacy Policy. If you do not agree, do not use the Service.</p>
                <h3>1. Definitions</h3>
                <ul>
                    <li><strong>Service / Platform:</strong> the Livria app and its features (catalog, cart, orders, profile, communities, notifications, and similar).</li>
                    <li><strong>User or Customer:</strong> a natural person who creates an account and uses the Service.</li>
                    <li><strong>Content:</strong> information and materials shown on the Platform. Books offered are mainly physical copies subject to availability and the Coverage area.</li>
                    <li><strong>Order:</strong> a purchase request placed through the Platform.</li>
                    <li><strong>Coverage area (physical delivery):</strong> Metropolitan Lima, Peru, unless the checkout flow states otherwise.</li>
                </ul>
                <p><strong>Platform scope:</strong> The Livria consumer app covered by these Terms is provided for <strong>Android</strong> (for example via APK or other distribution channels published by Defontes). A native <strong>iOS</strong> client (App Store / TestFlight) is <strong>out of scope</strong> for the current release; any future iOS offering would require an explicit update to these Terms or to the <a href="acuerdo-saas.html" target="_blank" rel="noopener">SaaS Agreement</a>.</p>
                <h3>2. Account and security</h3>
                <p>You must provide truthful data and keep your username and password confidential. You are responsible for activity under your account. Report unauthorized use without delay. The app may use local storage on your device (preferences or session) for proper operation.</p>
                <h3>3. Privacy and data</h3>
                <p>Processing of personal data is described in the Privacy Policy (Part II), which forms part of these Terms. Defontes processes data in accordance with Peruvian Law No. 29733 and its regulations.</p>
                <h3>4. Maps and location</h3>
                <p>If you use store map or location features (e.g. Google Maps), you also accept that provider’s applicable terms and policies in addition to these Terms.</p>
                <h3>5. Device permissions</h3>
                <ul>
                    <li><strong>Camera and gallery:</strong> for profile photo and, when enabled, images in communities or other content you publish.</li>
                    <li><strong>Location:</strong> only for features that require it (store map or routes).</li>
                </ul>
                <h3>6. Payments (bank transfer — CCI)</h3>
                <p>Payments for products or the community plan are made by manual bank transfer to the CCI shown in the app. Livria does not integrate in-app card payment gateways and does not store full card numbers or CVV. You are responsible for transferring correctly and on time. Bank fees are borne by you unless mandatory law says otherwise.</p>
                <h3>7. Orders and logistics</h3>
                <p>Order status may be updated operationally by the team; real-time GPS tracking or integration with courier third parties is not guaranteed unless expressly stated in the app. Physical book delivery is limited to Metropolitan Lima. Outside that area, Defontes is not obliged to process physical deliveries.</p>
                <h3>8. Plans and communities</h3>
                <p>The Service includes a free tier and a paid tier for community features (as shown in the app). Specific features may change; material changes will be communicated with the legal notice period stated in these Terms.</p>
                <h3>9. Intellectual property</h3>
                <p>Livria’s brand, design, and software belong to Defontes or its licensors. Rights in the works sold belong to authors and publishers; Livria acts as an intermediary where applicable.</p>
                <h3>10. Minors</h3>
                <p>The Service is not directed at children under 13. If you are under 18, you must have a parent or legal guardian’s authorization to register and make purchases.</p>
                <h3>11. Suspension and termination</h3>
                <p>We may suspend or terminate access for serious breach or other causes under law and the SaaS Agreement. After termination, you have 30 calendar days to export your data from the app where the feature is available.</p>
                <h3>12. Limitation of liability</h3>
                <p>To the maximum extent allowed by Peruvian law, Defontes is not liable for indirect damages or lost profit except where mandatory law provides otherwise. This does not limit non-waivable consumer rights under Peruvian Law No. 29571.</p>
                <h3>13. Law and jurisdiction</h3>
                <p>These Terms are governed by the laws of Peru. Disputes are subject to the competent courts of Lima, unless mandatory law provides otherwise.</p>
                <h3>14. Contact</h3>
                <p>support@defontes.com · Av. República de Chile 661, Lima, Peru.</p>
                <h3>Full contractual framework</h3>
                <p>These Terms are complemented by the full <a href="acuerdo-saas.html" target="_blank" rel="noopener">Livria SaaS Agreement</a>, which sets out the main contractual framework. We encourage you to read it before accepting.</p>
                <p><strong>Acceptance:</strong> by checking the acceptance box at registration you confirm that you have read these Terms, the Privacy Policy, and the full SaaS Agreement.</p>
                <p>Livria © 2026 Defontes S.A.C. · Terms and Privacy summary v1.3</p>
            </div>
        `,
        "legal.privacy.content": `
            <div class="legal-content">
                <h2>Livria — Privacy Policy</h2>
                <p><strong>Last updated:</strong> May 12, 2026 · <strong>Version:</strong> 1.2</p>
                <p>Defontes S.A.C. explains how we process your personal data when you use the Livria app, in accordance with Peruvian Law No. 29733 (Personal Data Protection) and its regulations.</p>
                <h3>1. Data controller</h3>
                <p>Defontes S.A.C., Metropolitan Lima, Peru. Contact: support@defontes.com</p>
                <h3>2. Data we may process</h3>
                <ul>
                    <li><strong>Identity and account:</strong> visible name or nickname, email, username, password (stored securely).</li>
                    <li><strong>Orders:</strong> delivery address, city, information to manage the order and payment.</li>
                    <li><strong>Use of the Service:</strong> basic device and diagnostic data to operate and improve the app.</li>
                    <li><strong>Content you publish:</strong> images or text in communities or profile, where features are enabled.</li>
                </ul>
                <h3>3. Source of personal information</h3>
                <ul>
                    <li><strong>From you:</strong> data you voluntarily enter when registering, completing your profile, placing an order, uploading a receipt, posting in communities, or contacting us.</li>
                    <li><strong>From use of the Service:</strong> technical data for authentication, security, diagnostics, and improvement.</li>
                    <li><strong>Communications:</strong> content of messages or requests sent through official channels.</li>
                    <li><strong>Third parties:</strong> when you enable integrations such as maps (Google Maps), part of the information may be processed by that provider under its own terms.</li>
                </ul>
                <h3>4. Purposes</h3>
                <p>Managing registration and authentication; processing orders and subscriptions; sending Service-related notifications; support; security; legal compliance; improving the Service.</p>
                <h3>5. Payments (CCI)</h3>
                <p>Payments are made by manual bank transfer. We do not collect or store full card numbers or CVV inside Livria. We may record that you attached a receipt when the app allows it.</p>
                <h3>6. Location and maps</h3>
                <p>If you enable map or location features (Google Maps), location data is processed as needed for that function and under the map provider’s policies.</p>
                <h3>7. Camera and gallery</h3>
                <p>Only for purposes the app requests at the time (profile photo or community posts).</p>
                <h3>8. Retention and security</h3>
                <p>We keep data for as long as necessary for the purposes and legal retention periods. We apply reasonable technical and organizational measures, including encrypted connections where appropriate. No system is 100% invulnerable.</p>
                <h3>9. Transfers</h3>
                <p>We do not sell your personal data. We may share it with providers who help us operate the Service (hosting, messaging, etc.) under confidentiality duties, or when a competent authority requires it.</p>
                <h3>10. Data subject rights (ARCO and others)</h3>
                <p>You may exercise access, rectification, cancellation, opposition, and other rights recognized by Peruvian law by writing to support@defontes.com. We will respond within a maximum of 20 business days as set by Law No. 29733.</p>
                <h3>11. Minors</h3>
                <p>The Service is not directed at children under 13. We do not knowingly collect data from children. Users aged 13–17 must have legal guardian authorization.</p>
                <h3>12. Changes</h3>
                <p>We will publish the updated version in the app and/or channels indicated. Material changes will be communicated with the notice stated in the Terms.</p>
                <h3>13. Contact</h3>
                <p>support@defontes.com · Av. República de Chile 661, Lima, Peru.</p>
                <p>The full <a href="acuerdo-saas.html" target="_blank" rel="noopener">SaaS Agreement</a> contains additional provisions on data protection.</p>
            </div>
        `,
        "legal.cookies.content": `
            <div class="legal-content">
                <h2>Livria Cookies Policy</h2>
                <p><strong>Last Updated:</strong> May 12, 2026</p>
                
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
        'help.topic.delivery.desc': 'Order status, indicative timelines, and options shown in the app for delivery in Metropolitan Lima.',
        'help.topic.subs': 'Subscriptions',
        'help.topic.subs.desc': 'Manage your subscription plan, billing cycle, and how to upgrade or cancel anytime.',
        'help.topic.catalog': 'Catalog & orders',
        'help.topic.catalog.desc': 'How the catalog works, physical orders, and what the app shows for each product.',
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
        'help.step3.desc': 'Explore titles, read reviews, and add physical books to your cart according to availability and coverage.',
        'help.step4.title': 'Pay & receive',
        'help.step4.desc': 'Complete payment by bank transfer to the CCI shown in the app and follow your order status. Delivery rules are those indicated at checkout (Metropolitan Lima).',
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
        'faq.app.q4': 'Can I buy digital books in Livria?',
        'faq.app.a4': 'The service currently focuses on physical books within the coverage area. Any digital format only applies if the product screen and checkout explicitly offer it.',
        'faq.app.q5': 'How do I join a reading community?',
        'faq.app.a5': 'Go to the "Communities" tab in the app, browse groups by genre or topic, and tap "Join". You\'ll immediately have access to discussions, shared reading lists, and community events.',
        'faq.payments.title': 'Payments',
        'faq.pay.q1': 'How does payment work on Livria?',
        'faq.pay.a1': 'Livria uses bank transfers as its primary payment method. When you place an order, you\'ll see our bank account details. Transfer the amount and upload a photo of the receipt in the app. Our team verifies it and processes your order — usually within a few hours.',
        'faq.pay.q2': 'How long does payment verification take?',
        'faq.pay.a2': 'Payment verification typically takes between 1 and 4 business hours. If your transfer was made outside business hours, it will be reviewed the following working day. You\'ll receive a push notification once confirmed.',
        'faq.pay.q3': 'Can I get a refund?',
        'faq.pay.a3': 'Refunds may be available for physical books that have not yet been shipped, subject to our commercial policy and applicable consumer law in Peru. Contact us with your order ID and reason; we will respond through official channels.',
        'faq.pay.q4': 'Is my payment information secure?',
        'faq.pay.a4': 'Yes. Livria uses manual bank transfer to the CCI shown in the app. We do not store full card numbers or CVV for that flow. If you attach a transfer receipt when the app allows it, we process it for order confirmation only.',
        'faq.delivery.title': 'Shipping & Delivery',
        'faq.del.q1': 'How long does shipping take?',
        'faq.del.a1': 'Delivery times depend on operational capacity and are communicated in the app after payment confirmation. Physical delivery is offered within Metropolitan Lima, Peru, unless checkout states otherwise.',
        'faq.del.q2': 'How can I track my order?',
        'faq.del.a2': 'Order status is updated in the "My Orders" section. Livria does not guarantee real-time GPS tracking or mandatory courier integration unless expressly stated in the app.',
        'faq.del.q3': 'Are there pick-up points available?',
        'faq.del.a3': 'If pick-up or alternative delivery options appear in checkout, you can select them there. Availability depends on the version of the app and our operational policy.',
        'faq.del.q4': 'What happens if my book arrives damaged?',
        'faq.del.a4': 'If your physical book arrives damaged, take a photo of the packaging and the damage and contact us within 48 hours of delivery. We\'ll arrange a replacement or a full refund at no extra cost to you.',
        'faq.subs.title': 'Subscriptions',
        'faq.sub.q1': 'What does a Livria subscription include?',
        'faq.sub.a1': 'Paid plans mainly unlock community features (such as posting and participation), as shown in the Subscription screen. Catalog browsing and physical orders may remain available on the free tier depending on the app version.',
        'faq.sub.q2': 'How does subscription billing work?',
        'faq.sub.a2': 'When a paid community plan is active, renewal follows the CCI transfer flow indicated in the app. You will receive reminders according to in-app notifications.',
        'faq.sub.q3': 'Can I cancel my subscription at any time?',
        'faq.sub.a3': 'Yes, when the app provides cancellation in Settings → Subscription. Benefits last until the end of the paid period already covered, unless the app states otherwise.',
        'faq.sub.q4': 'What happens to my account if I cancel?',
        'faq.sub.a4': 'Your account reverts to the free tier. Purchased physical orders already completed are not affected. Any feature tied to the paid plan follows the rules shown in the app.',
        'faq.sub.q5': 'Is there a free trial?',
        'faq.sub.a5': 'Free trials or promotions, if any, are shown only inside the app. There is no guarantee of a fixed trial period on the website; check the Subscription section for the current offer.',
        'faq.banner.title': 'Didn\'t find your answer?',
        'faq.banner.desc': 'Send us a message and we\'ll get back to you within 24 hours.',
        'faq.banner.btn': 'CONTACT US',
    },
    // Spanish
    es: {
        'download':'¡Descarga ahora!',
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
        "services.marketplace.title": "Catálogo físico y checkout",
        "services.marketplace.description": "Explora títulos, arma tu carrito y paga con transferencia al CCI que muestra la app. El servicio actual se centra en libros físicos dentro de la zona de cobertura; cualquier formato digital solo aplica si la ficha y el checkout lo ofrecen de forma explícita.",
        "services.delivery.title": "Entrega en Lima",
        "services.delivery.description": "Los pedidos físicos se gestionan en Lima Metropolitana, Perú, según lo indicado al comprar. El estado del pedido se actualiza de forma operativa en la app; no se garantiza rastreo en tiempo real salvo que se indique expresamente.",
        "services.catalog.title": "Catálogo Extenso",
        "services.catalog.description": "Explora un universo masivo de literatura. Desde clásicos atemporales hasta los últimos lanzamientos independientes, nuestra biblioteca crece constantemente para ti.",
        'about.title': 'SOBRE NOSOTROS',
        'about.Defontes.description': 'Defontes es una startup liderada por estudiantes de la Universidad Peruana de Ciencias Aplicadas (UPC) dedicada a promover la lectura y a facilitar descubrir libros con herramientas digitales. El proyecto Livria es una aplicación móvil donde los lectores exploran un catálogo, participan en comunidades y realizan pedidos de libros físicos según la cobertura y los flujos de pago mostrados en la app.',
        'about.Defontes.belief': 'En Defontes, creemos que la lectura es fundamental para el aprendizaje, la cultura y el desarrollo del pensamiento crítico. No es solo un hábito, sino una elección.',
        'about.Defontes.tag': 'Defontes',
        'about.livria.tag': 'LIVRIA',
        'about.livria.description': 'Livria es una aplicación móvil para descubrir títulos, compartir con comunidades de lectura y realizar pedidos de libros físicos con las reglas de pago y entrega definidas en la app. Está pensada para fomentar el hábito de la lectura y conectar a los lectores con la literatura en una experiencia moderna y alineada con la normativa peruana de consumo y protección de datos.',
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
        'footer.saas': 'Acuerdo SaaS',
        'footer.support': 'Soporte',
        'footer.help': 'Ayuda',
        'footer.faq': 'Preguntas Frecuentes',
        'footer.contactUs': 'Contáctanos',
        'footer.copyright': '© 2026 Defontes - Livria. Todos los derechos reservados.',
        "legal.terms.content": `
            <div class="legal-content">
                <h2>Livria — Términos y Condiciones</h2>
                <p><strong>Última actualización:</strong> 12 de mayo de 2026 · <strong>Versión:</strong> 1.3</p>
                <p><strong>Empresa:</strong> Defontes S.A.C. · <strong>Producto:</strong> aplicación móvil Livria · <strong>Contacto:</strong> support@defontes.com · <strong>Domicilio:</strong> Av. República de Chile 661, Lima, Perú</p>
                <p>Bienvenido/a. Estos Términos regulan el uso de la aplicación móvil Livria y los servicios asociados, prestados por Defontes S.A.C. Al registrarte o usar el Servicio declaras haber leído y aceptado estos Términos y la Política de privacidad. Si no estás de acuerdo, no utilices el Servicio.</p>
                <h3>1. Definiciones</h3>
                <ul>
                    <li><strong>Servicio / Plataforma:</strong> la aplicación Livria y sus funciones (catálogo, carrito, pedidos, perfil, comunidades, notificaciones, etc.).</li>
                    <li><strong>Usuario o Cliente:</strong> persona natural que crea una cuenta y utiliza el Servicio.</li>
                    <li><strong>Contenido:</strong> información y materiales mostrados en la Plataforma. Los libros ofrecidos son principalmente ejemplares físicos sujetos a disponibilidad y Zona de cobertura.</li>
                    <li><strong>Pedido:</strong> solicitud de compra de productos realizada a través de la Plataforma.</li>
                    <li><strong>Zona de cobertura (entrega física):</strong> Lima Metropolitana, Perú, salvo indicación distinta en el flujo de compra.</li>
                </ul>
                <p><strong>Alcance de plataformas:</strong> la aplicación Livria regulada por estos Términos se ofrece para <strong>Android</strong> (por ejemplo mediante APK u otros canales publicados por Defontes). Un cliente nativo para <strong>iOS</strong> (App Store / TestFlight) <strong>no forma parte del alcance</strong> de la versión actual; un eventual despliegue en iOS requeriría actualizar expresamente estos documentos o el <a href="acuerdo-saas.html" target="_blank" rel="noopener">Acuerdo SaaS</a>.</p>
                <h3>2. Cuenta y seguridad</h3>
                <p>Debes proporcionar datos veraces y mantener la confidencialidad de tu usuario y contraseña. Eres responsable de las actividades realizadas con tu cuenta. Notifica de inmediato cualquier uso no autorizado. La aplicación puede usar almacenamiento local en tu dispositivo (preferencias o sesión) para el correcto funcionamiento del Servicio.</p>
                <h3>3. Privacidad y datos</h3>
                <p>El tratamiento de datos personales se describe en la Política de Privacidad (Parte II), que forma parte de estos Términos. Defontes trata los datos conforme a la Ley N.° 29733 y su normativa.</p>
                <h3>4. Mapas y ubicación</h3>
                <p>Si utilizas la función de mapa o ubicación de tienda (Google Maps), aceptas las condiciones y políticas aplicables de Google además de estos Términos.</p>
                <h3>5. Permisos del dispositivo</h3>
                <ul>
                    <li><strong>Cámara y galería:</strong> para foto de perfil y, cuando la funcionalidad lo permita, imágenes en comunidades u otro contenido que tú publiques.</li>
                    <li><strong>Ubicación:</strong> solo en relación con funciones que lo requieran (mapa de tienda o rutas).</li>
                </ul>
                <h3>6. Pagos (transferencia interbancaria — CCI)</h3>
                <p>Los pagos de productos o del plan de comunidades se realizan mediante transferencia bancaria manual al CCI indicado en la app. Livria no integra pasarelas de pago con tarjeta y no almacena número completo de tarjeta ni CVV. Eres responsable de realizar la transferencia correctamente y en los plazos indicados. Las comisiones bancarias son ajenas a Defontes salvo lo que imponga la ley imperativa.</p>
                <h3>7. Pedidos y logística</h3>
                <p>Los estados del pedido pueden actualizarse de forma operativa por el equipo; no se garantiza rastreo GPS en tiempo real ni integración con terceros de courier salvo indicación expresa en la app. La entrega de libros físicos se circunscribe a Lima Metropolitana. Fuera de ella, Defontes no está obligada a procesar entregas físicas.</p>
                <h3>8. Planes y comunidades</h3>
                <p>El Servicio incluye un plan gratuito y un plan de pago para funciones de comunidades (según lo mostrado en la app). Las funciones concretas pueden actualizarse; los cambios sustanciales se comunicarán con la antelación legal prevista.</p>
                <h3>9. Propiedad intelectual</h3>
                <p>La marca, diseño y software de Livria son de Defontes o sus licenciantes. Los derechos sobre las obras comercializadas corresponden a autores y editoriales; Livria actúa como intermediario en la medida que corresponda.</p>
                <h3>10. Menores de edad</h3>
                <p>El Servicio no está dirigido a personas menores de 13 años. Si eres menor de 18 años, debes contar con la autorización de tu padre, madre o tutor legal para registrarte y realizar compras.</p>
                <h3>11. Suspensión y terminación</h3>
                <p>Podemos suspender o terminar el acceso ante incumplimientos graves o por las causas previstas en la normativa y en el Acuerdo SaaS. Tras la terminación, dispondrás de 30 días calendario para exportar tus datos desde la app.</p>
                <h3>12. Limitación de responsabilidad</h3>
                <p>En la medida máxima permitida por la ley peruana, Defontes no responde por daños indirectos o lucro cesante salvo disposición legal en contrario. Lo anterior no limita los derechos irrenunciables del consumidor reconocidos por la Ley N.° 29571, Código de Protección y Defensa del Consumidor.</p>
                <h3>13. Ley y jurisdicción</h3>
                <p>Estos Términos se rigen por las leyes del Perú. Las controversias se someten a los tribunales competentes de Lima, salvo norma imperativa en contrario.</p>
                <h3>14. Contacto</h3>
                <p>support@defontes.com · Av. República de Chile 661, Lima, Perú.</p>
                <h3>Marco contractual completo</h3>
                <p>Estos Términos se complementan con el <a href="acuerdo-saas.html" target="_blank" rel="noopener">Acuerdo SaaS completo de Livria</a>, que constituye el marco contractual principal. Te recomendamos leerlo antes de aceptar.</p>
                <p><strong>Aceptación:</strong> al marcar la casilla de aceptación en el registro confirmas haber leído estos Términos, la Política de Privacidad y el Acuerdo SaaS completo.</p>
                <p>Livria © 2026 Defontes S.A.C. · Resumen Términos y Privacidad v1.3</p>
            </div>
        `,
        "legal.privacy.content": `
            <div class="legal-content">
                <h2>Livria — Política de Privacidad</h2>
                <p><strong>Última actualización:</strong> 12 de mayo de 2026 · <strong>Versión:</strong> 1.2</p>
                <p>Defontes S.A.C. describe cómo tratamos tus datos personales cuando usas la aplicación Livria, de conformidad con la Ley N.° 29733, Ley de Protección de Datos Personales del Perú, y su Reglamento.</p>
                <h3>1. Responsable del tratamiento</h3>
                <p>Defontes S.A.C., Lima Metropolitana, Perú. Contacto: support@defontes.com</p>
                <h3>2. Datos que podemos tratar</h3>
                <ul>
                    <li><strong>Identificación y cuenta:</strong> nombre o apodo visible, correo, usuario, contraseña (almacenada de forma protegida).</li>
                    <li><strong>Pedidos:</strong> dirección de entrega, ciudad, información para gestionar el pedido y el pago.</li>
                    <li><strong>Uso del Servicio:</strong> datos técnicos del dispositivo y diagnóstico básico para operar y mejorar la app.</li>
                    <li><strong>Contenido que publiques:</strong> imágenes o textos en comunidades o perfil, según las funciones habilitadas.</li>
                </ul>
                <h3>3. Origen de la información personal</h3>
                <ul>
                    <li><strong>Del titular (tú):</strong> datos ingresados voluntariamente al registrarte, completar perfil, realizar un pedido, subir comprobante, publicar en comunidades o contactarnos.</li>
                    <li><strong>Por uso del Servicio:</strong> datos técnicos para autenticación, seguridad, diagnóstico y mejora.</li>
                    <li><strong>Comunicaciones:</strong> contenido de mensajes o solicitudes enviadas a los canales oficiales.</li>
                    <li><strong>Terceros:</strong> al activar integraciones como mapas (Google Maps), parte de la información puede ser procesada por ese proveedor según sus propios términos.</li>
                </ul>
                <h3>4. Finalidades</h3>
                <p>Gestionar el registro y la autenticación; procesar pedidos y suscripciones; enviar notificaciones relacionadas con el Servicio; soporte; seguridad; cumplimiento legal; mejora del Servicio.</p>
                <h3>5. Pagos (CCI)</h3>
                <p>Los pagos se realizan mediante transferencia bancaria manual. No recopilamos ni almacenamos número completo de tarjeta ni CVV dentro de Livria. Podemos registrar que adjuntaste un comprobante cuando la funcionalidad lo permita.</p>
                <h3>6. Ubicación y mapas</h3>
                <p>Si activas funciones que usan mapa o ubicación (Google Maps), los datos de ubicación se tratan según lo necesario para esa función y las políticas del proveedor de mapas.</p>
                <h3>7. Cámara y galería</h3>
                <p>Solo para las finalidades que la app solicite en el momento (foto de perfil o publicación en comunidades).</p>
                <h3>8. Conservación y seguridad</h3>
                <p>Conservamos los datos el tiempo necesario para las finalidades y plazos legales. Aplicamos medidas técnicas y organizativas razonables, incluyendo conexiones cifradas cuando corresponda. Ningún sistema es 100 % invulnerable.</p>
                <h3>9. Cesiones</h3>
                <p>No vendemos tus datos personales. Podremos comunicarlos a proveedores que nos ayuden a operar el Servicio (hosting, mensajería, etc.) bajo obligaciones de confidencialidad, o cuando una autoridad competente lo exija.</p>
                <h3>10. Derechos del titular (ARCO y otros)</h3>
                <p>Puedes ejercer derechos de acceso, rectificación, cancelación, oposición y los demás que la ley peruana reconozca, escribiendo a support@defontes.com. Responderemos en un plazo máximo de 20 días hábiles conforme a la Ley N.° 29733.</p>
                <h3>11. Menores</h3>
                <p>El Servicio no está dirigido a menores de 13 años. No recopilamos datos de menores a sabiendas. Usuarios entre 13 y 17 años deben contar con autorización de su tutor legal.</p>
                <h3>12. Cambios</h3>
                <p>Publicaremos la versión actualizada en la app y/o canales indicados. Cambios relevantes se comunicarán con la antelación prevista en los Términos y Condiciones.</p>
                <h3>13. Contacto</h3>
                <p>support@defontes.com · Av. República de Chile 661, Lima, Perú.</p>
                <p>El <a href="acuerdo-saas.html" target="_blank" rel="noopener">Acuerdo SaaS</a> incluye disposiciones adicionales sobre protección de datos.</p>
            </div>
        `,
        "legal.cookies.content": `
            <div class="legal-content">
                <h2>Política de Cookies de Livria</h2>
                <p><strong>Última actualización:</strong> 12 de mayo de 2026</p>
                
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
        'help.topic.delivery.desc': 'Estados de pedido, plazos orientativos y opciones que aparezcan en la app para entrega en Lima Metropolitana.',
        'help.topic.subs': 'Suscripciones',
        'help.topic.subs.desc': 'Gestiona tu plan, ciclo de facturación y cómo actualizar o cancelar en cualquier momento.',
        'help.topic.catalog': 'Catálogo y pedidos',
        'help.topic.catalog.desc': 'Cómo funciona el catálogo, los pedidos físicos y lo que la app muestra para cada producto.',
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
        'help.step3.desc': 'Descubre títulos, lee reseñas y añade libros físicos al carrito según disponibilidad y cobertura.',
        'help.step4.title': 'Paga y recibe',
        'help.step4.desc': 'Completa el pago con transferencia al CCI indicado en la app y sigue el estado de tu pedido. Las reglas de entrega son las mostradas al comprar (Lima Metropolitana).',
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
        'faq.app.q4': '¿Puedo comprar libros digitales en Livria?',
        'faq.app.a4': 'El servicio actual se centra en libros físicos dentro de la zona de cobertura. Cualquier formato digital solo aplica si la ficha del producto y el checkout lo ofrecen de forma explícita.',
        'faq.app.q5': '¿Cómo me uno a una comunidad lectora?',
        'faq.app.a5': 'Ve a la pestaña "Comunidades" en la app, explora grupos por género o tema y toca "Unirse". Accederás inmediatamente a debates, listas compartidas y eventos.',
        'faq.payments.title': 'Pagos',
        'faq.pay.q1': '¿Cómo funciona el pago en Livria?',
        'faq.pay.a1': 'Livria utiliza transferencias bancarias como método principal de pago. Al realizar un pedido, verás los datos de nuestra cuenta. Transfiere el monto y sube una foto del comprobante en la app. Nuestro equipo lo verifica y procesa tu pedido, generalmente en pocas horas.',
        'faq.pay.q2': '¿Cuánto tarda la verificación del pago?',
        'faq.pay.a2': 'La verificación suele tomar entre 1 y 4 horas hábiles. Si realizaste la transferencia fuera del horario de atención, se revisará el siguiente día hábil. Recibirás una notificación push al confirmarse.',
        'faq.pay.q3': '¿Puedo solicitar un reembolso?',
        'faq.pay.a3': 'Los reembolsos pueden aplicar a libros físicos que aún no hayan sido enviados, según nuestra política comercial y la normativa de consumo aplicable en Perú. Escríbenos con tu ID de pedido y motivo; responderemos por los canales oficiales.',
        'faq.pay.q4': '¿Mi información de pago está segura?',
        'faq.pay.a4': 'Sí. Livria utiliza transferencia bancaria manual al CCI mostrado en la app. No almacenamos número completo de tarjeta ni CVV para ese flujo. Si adjuntas comprobante cuando la app lo permita, lo usamos solo para confirmar el pedido.',
        'faq.delivery.title': 'Envíos y Entrega',
        'faq.del.q1': '¿Cuánto tarda el envío?',
        'faq.del.a1': 'Los plazos de entrega dependen de la capacidad operativa y se comunican en la app tras confirmar el pago. La entrega física se ofrece en Lima Metropolitana, Perú, salvo que el checkout indique otra cosa.',
        'faq.del.q2': '¿Cómo puedo rastrear mi pedido?',
        'faq.del.a2': 'El estado se actualiza en la sección "Mis Pedidos". Livria no garantiza rastreo GPS en tiempo real ni integración obligatoria con courier salvo que se indique expresamente en la app.',
        'faq.del.q3': '¿Hay puntos de recojo u otras opciones?',
        'faq.del.a3': 'Si en el checkout aparecen opciones de recojo u otra modalidad, puedes seleccionarlas allí. La disponibilidad depende de la versión de la app y de la política operativa.',
        'faq.del.q4': '¿Qué pasa si mi libro llega dañado?',
        'faq.del.a4': 'Si tu libro físico llega dañado, toma una foto del empaque y el daño, y contáctanos dentro de las 48 horas de recibido. Coordinaremos un reemplazo o reembolso completo sin costo adicional.',
        'faq.subs.title': 'Suscripciones',
        'faq.sub.q1': '¿Qué incluye una suscripción de Livria?',
        'faq.sub.a1': 'Los planes de pago habilitan sobre todo funciones de comunidad (publicación y participación), según la pantalla de Suscripción. Explorar el catálogo y pedidos físicos puede seguir disponible en el plan gratuito según la versión de la app.',
        'faq.sub.q2': '¿Cómo funciona la facturación de la suscripción?',
        'faq.sub.a2': 'Cuando hay un plan de comunidad de pago activo, la renovación sigue el flujo de transferencia al CCI indicado en la app. Recibirás recordatorios según las notificaciones internas.',
        'faq.sub.q3': '¿Puedo cancelar mi suscripción en cualquier momento?',
        'faq.sub.a3': 'Sí, cuando la app ofrezca la cancelación en Configuración → Suscripción. Los beneficios se mantienen hasta el fin del periodo de pago ya cubierto, salvo que la app indique otra cosa.',
        'faq.sub.q4': '¿Qué pasa con mi cuenta si cancelo?',
        'faq.sub.a4': 'Tu cuenta vuelve al plan gratuito. Los pedidos físicos ya completados no se ven afectados. Cualquier función ligada al plan de pago sigue las reglas mostradas en la app.',
        'faq.sub.q5': '¿Hay una prueba gratuita?',
        'faq.sub.a5': 'Si existen pruebas o promociones, solo se muestran dentro de la app. No hay garantía de un periodo de prueba fijo en la web; revisa la sección Suscripción para la oferta vigente.',
        'faq.banner.title': '¿No encontraste tu respuesta?',
        'faq.banner.desc': 'Envíanos un mensaje y te responderemos dentro de las 24 horas.',
        'faq.banner.btn': 'CONTÁCTANOS',
    }
};
window.i18n = i18n;
