// Import language configurations
import uz from './lang/uz.js';
import ru from './lang/ru.js';

const translations = { uz, ru };
const DEFAULT_LANG = 'ru';

function setLanguage(lang) {
    // Save selected language
    localStorage.setItem('lang', lang);

    // Update button states
    document.querySelectorAll('.lang-button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update all translations
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'META') {
                element.setAttribute('content', translations[lang][key]);
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'IMG') {
                // Handle image alt text
                element.setAttribute('alt', translations[lang][key]);
            } else {
                element.textContent = translations[lang][key];
            }
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${lang}`);
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // For debugging
    console.log('Language changed to:', lang);
}
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Log form data (replace with your API endpoint)
    console.log('Form submitted:', formData);
    
    // Show success message (customize as needed)
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    
    // Reset form
    event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('mainNav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
                nav.classList.remove('active');
            }
        });
    }

    // Language switcher buttons
    document.querySelectorAll('.lang-button').forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Set initial language from localStorage or default
    const savedLang = localStorage.getItem('lang') || DEFAULT_LANG;
    setLanguage(savedLang);
});

function debugProject() {
    console.group('🔍 Project Debug Information');
    
    // 1. Check translations
    console.log('📚 Translations loaded:', {
        ru: Object.keys(translations.ru).length + ' keys',
        uz: Object.keys(translations.uz).length + ' keys'
    });

    // 2. Check elements with translations
    const elements = document.querySelectorAll('[data-lang-key]');
    console.log('🏷️ Elements with data-lang-key:', elements.length);

    // 3. Check for missing translations
    const missingTranslations = {
        ru: [],
        uz: []
    };

    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (!translations.ru[key]) missingTranslations.ru.push(key);
        if (!translations.uz[key]) missingTranslations.uz.push(key);
    });

    console.log('❌ Missing translations:', missingTranslations);

    // 4. Check language switcher buttons
    console.log('🔤 Language buttons:', {
        ru: document.getElementById('lang-ru') ? '✅' : '❌',
        uz: document.getElementById('lang-uz') ? '✅' : '❌'
    });

    // 5. Check current language
    console.log('🌍 Current language:', localStorage.getItem('lang') || 'Not set');

    console.groupEnd();
}

console.log('Script loaded');