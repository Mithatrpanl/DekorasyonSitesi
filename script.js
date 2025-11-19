document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobil Hamburger Menü
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Navigasyon menüsünü aç/kapat
        navMenu.classList.toggle('nav-active');

        // Burger ikon animasyonu
        burger.classList.toggle('toggle');
    });

    // Menü linkine tıklayınca menüyü kapat
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('nav-active')) {
                navMenu.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    // 2. Sayfa Kaydırınca Navbar'a Gölge Ekleme
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. İçeriği Kaydırınca Gösterme (Fade-in efekti)
    const observerOptions = {
        root: null,
        threshold: 0.1, // Elemanın %10'u görününce
        rootMargin: "0px 0px -50px 0px" // Alt kısımdan 50px önce tetikle
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animasyon bir kez çalışsın
            }
        });
    }, observerOptions);

    // .fade-in sınıfına sahip tüm elemanları gözlemle
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));


    // 4. İletişim Formu Gönderimi (Basit)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Formun gerçekten gönderilmesini engelle
        
        // Form verilerini al (gerçek bir backend'e göndermek için)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Başarı mesajı göster
        alert('Mesajınız başarıyla gönderildi!\n\nAd: ' + name + '\nE-posta: 'N' + email);

        // Formu temizle
        contactForm.reset();
    });

});