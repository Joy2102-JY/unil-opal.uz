// lang-switch.js

document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.language-switcher .lang-button');
    const htmlElement = document.documentElement;

    const translations = {
        ru: {
            nav_home: "Главная",
            nav_about_us: "О нас",
            nav_products: "Продукция",
            nav_why_choose_us: "Почему выбирают нас",
            nav_contact: "Контакты",
            hero_heading: "Unil Opal: Более 60 лет французского качества в мире смазочных материалов",
            hero_subheading: "Надежность, Инновации, Произведено во Франции.",
            hero_cta: "Изучить продукцию",
            about_title: "О компании Unil Opal",
            about_text_short: "Unil Opal — признанный французский производитель моторных масел...",
            about_text_full_paragraph: "Unil Opal — признанный французский производитель моторных масел и технических жидкостей, с более чем 60-летним опытом в отрасли. История бренда — это путь развития, инноваций и качества, который начался ещё в прошлом веке и продолжается по сей день.",
            timeline_title: "История компании",
            timeline_year_1963: "1963:",
            timeline_desc_1963: "Основание компании UNIL во Франции. Начало специализации на производстве смазочных материалов для автомобилей и промышленности.",
            timeline_year_1969: "1969:",
            timeline_desc_1969: "Основание компании OPAL, активная позиция на французском рынке масел.",
            timeline_year_1993: "1993:",
            timeline_desc_1993: "Слияние UNIL и OPAL, появление бренда Unil Opal, толчок к росту и международному развитию.",
            timeline_year_2007: "2007:",
            timeline_desc_2007: "Переход от группы Shell в состав независимой французской группы CIPELIA, акцент на качестве.",
            timeline_year_2011: "2011:",
            timeline_desc_2011: "Запуск современного производственного комплекса в Саумюре с лабораториями контроля качества и экологичными технологиями.",
            key_facts_title: "Unil Opal сегодня",
            key_fact_1: "100% французское производство",
            key_fact_2: "Собственные лаборатории R&D и постоянные инновации",
            key_fact_3: "5000+ видов продукции для автомобилей, мотоциклов, сельского хозяйства, транспорта и промышленности",
            key_fact_4: "Экспорт в более чем 60 стран мира",
            key_fact_5: "Сертификаты и официальные допуски от Mercedes-Benz, Renault, MAN, Volvo, PSA и других производителей",
            key_fact_6: "Экологические формулы и вклад в устойчивое развитие",
            key_fact_7: "Fuel Economy – снижение расхода топлива",
            key_fact_8: "Премиум-масло по цене стандартного",
            features_section_title: "Ключевые преимущества",
            feature_quality_title: "Высокое качество",
            feature_quality_desc: "Продукция соответствует международным стандартам и требованиям ведущих автопроизводителей.",
            feature_eco_title: "Экологичность",
            feature_eco_desc: "Использование современных технологий для минимизации воздействия на окружающую среду.",
            feature_innov_title: "Инновации",
            feature_innov_desc: "Постоянное внедрение новых разработок для повышения эффективности продукции.",
            feature_reliability_title: "Надежность",
            feature_reliability_desc: "Долгосрочное сотрудничество с ведущими мировыми компаниями.",
            main_links_title: "Узнайте больше",
            main_link_products: "Каталог продукции",
            main_link_products_desc: "Ознакомьтесь с ассортиментом масел и технических жидкостей Unil Opal.",
            main_link_whyus: "Почему выбирают Unil Opal?",
            main_link_whyus_desc: "Сертификаты, технологии, OEM-допуски и преимущества бренда.",
            footer_copyright_text: "Grace Group. Все права защищены.",
            footer_privacy: "Политика конфиденциальности",
            footer_terms: "Условия использования"
        },
        uz: {
            nav_home: "Bosh sahifa",
            nav_about_us: "Biz haqimizda",
            nav_products: "Mahsulotlar",
            nav_why_choose_us: "Nima uchun bizni tanlashadi",
            nav_contact: "Kontaktlar",
            hero_heading: "Unil Opal: Moylash materiallari dunyosida 60 yildan ortiq Fransuz sifati",
            hero_subheading: "Ishonchlilik, Innovatsiyalar, Fransiyada ishlab chiqarilgan.",
            hero_cta: "Mahsulotlarni ko'rib chiqish",
            about_title: "Unil Opal kompaniyasi haqida",
            about_text_short: "Unil Opal — tan olingan fransuz motor moylari...",
            about_text_full_paragraph: "Unil Opal — sohada 60 yildan ortiq tajribaga ega bo'lgan, motor moylari va texnik suyuqliklar ishlab chiqaruvchi tan olingan fransuz kompaniyasidir. Brend tarixi o'tgan asrda boshlangan va bugungi kungacha davom etayotgan rivojlanish, innovatsiyalar va sifat yo'lidir.",
            timeline_title: "Kompaniya tarixi",
            timeline_year_1963: "1963:",
            timeline_desc_1963: "Fransiyada UNIL kompaniyasi tashkil etildi. Avtomobillar va sanoat uchun moylash materiallari ishlab chiqarishga ixtisoslashish boshlandi.",
            timeline_year_1969: "1969:",
            timeline_desc_1969: "OPAL kompaniyasi tashkil etildi, Fransuz moy bozorida faol mavqega ega bo'ldi.",
            timeline_year_1993: "1993:",
            timeline_desc_1993: "UNIL va OPAL birlashdi, Unil Opal brendi paydo bo'ldi, bu o'sish va xalqaro rivojlanishga turtki bo'ldi.",
            timeline_year_2007: "2007:",
            timeline_desc_2007: "Shell guruhidan mustaqil fransuz CIPELIA guruhiga o'tdi, sifatga e'tibor qaratildi.",
            timeline_year_2011: "2011:",
            timeline_desc_2011: "Saumurda sifat nazorati laboratoriyalari va ekologik texnologiyalarga ega zamonaviy ishlab chiqarish majmuasi ishga tushirildi.",
            key_facts_title: "Bugungi Unil Opal",
            key_fact_1: "100% Fransuz ishlab chiqarishi",
            key_fact_2: "O'z Ar-Ge laboratoriyalari va doimiy innovatsiyalar",
            key_fact_3: "Avtomobillar, mototsikllar, qishloq xo'jaligi, transport va sanoat uchun 5000+ turdagi mahsulotlar",
            key_fact_4: "Dunyodagi 60 dan ortiq mamlakatlarga eksport",
            key_fact_5: "Mercedes-Benz, Renault, MAN, Volvo, PSA va boshqa ishlab chiqaruvchilardan sertifikatlar va rasmiy ruxsatnomalar",
            key_fact_6: "Ekologik formulalar va barqaror rivojlanishga hissa",
            key_fact_7: "Fuel Economy – yoqilg'i sarfini kamaytirish",
            key_fact_8: "Standart narxdagi premium moy",
            features_section_title: "Asosiy afzalliklar",
            feature_quality_title: "Yuqori sifat",
            feature_quality_desc: "Mahsulot xalqaro standartlarga va yetakchi avtomobil ishlab chiqaruvchilarining talablariga javob beradi.",
            feature_eco_title: "Ekologik tozalik",
            feature_eco_desc: "Atrof-muhitga ta'sirni minimallashtirish uchun zamonaviy texnologiyalardan foydalanish.",
            feature_innov_title: "Innovatsiyalar",
            feature_innov_desc: "Mahsulot samaradorligini oshirish uchun doimiy ravishda yangi ishlanmalarni joriy etish.",
            feature_reliability_title: "Ishonchlilik",
            feature_reliability_desc: "Yetakchi jahon kompaniyalari bilan uzoq muddatli hamkorlik.",
            main_links_title: "Ko'proq bilib oling",
            main_link_products: "Mahsulotlar katalogi",
            main_link_products_desc: "Unil Opal moylari va texnik suyuqliklari assortimenti bilan tanishing.",
            main_link_whyus: "Nima uchun Unil Opal'ni tanlashadi?",
            main_link_whyus_desc: "Sertifikatlar, texnologiyalar, OEM-ruxsatlari va brendning afzalliklari.",
            footer_copyright_text: "Grace Group. Barcha huquqlar himoyalangan.",
            footer_privacy: "Maxfiylik siyosati",
            footer_terms: "Foydalanish shartlari"
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ru'; // Default to Russian

    function setLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(function(element) {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (
                    element.tagName === 'INPUT' ||
                    element.tagName === 'TEXTAREA' ||
                    element.tagName === 'BUTTON'
                ) {
                    element.value = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            } else {
                console.warn(`Translation key '${key}' not found for language '${lang}'.`);
            }
        });
        htmlElement.lang = lang;
        langButtons.forEach(function(button) {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        localStorage.setItem('lang', lang);
    }

    langButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const lang = button.dataset.lang;
            if (currentLang !== lang) {
                currentLang = lang;
                setLanguage(lang);
            }
        });
    });

    // Set initial language when the page loads
    setLanguage(currentLang);

    // Update current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});