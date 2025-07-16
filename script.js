// script.js

document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.language-switcher .lang-button');
    const htmlElement = document.documentElement;

    const translations = {
        ru: {
            // General Navigation (used across pages)
            nav_home: "Главная",
            nav_about_us: "О нас",
            nav_products: "Продукция",
            nav_why_choose_us: "Почему выбирают нас",
            nav_contact: "Контакты",

            // Footer (used across pages)
            footer_privacy: "Политика конфиденциальности",
            footer_terms: "Условия использования",

            // --- Index Page Specific Translations ---
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

            // --- About Us Page Specific Translations ---
            about_page_title: "О нас - Grace Oil & Unil Opal",
            about_meta_desc: "Grace Oil — официальный дистрибьютор Unil Opal во Франции. Наша миссия, видение и ценности.",
            about_og_title: "О нас - Grace Oil & Unil Opal",
            about_og_desc: "Официальный дистрибьютор французских смазочных материалов Unil Opal.",
            about_h1_title: "О нас – Grace Oil & Unil Opal",
            about_intro_p1: "<strong>Grace Oil</strong> — официальный дистрибьютор французского бренда <strong>Unil Opal</strong>, специализирующегося на производстве высококачественных моторных и промышленных масел.",
            about_intro_p2: "Наша миссия — обеспечить клиентов в Узбекистане и за его пределами надежными, сертифицированными и инновационными смазочными материалами, которые соответствуют международным стандартам.",
            about_intro_p3: "Мы работаем с автосервисами, транспортными компаниями, сельскохозяйственными и промышленными предприятиями, предлагая:",
            about_offer_1_icon: "💡",
            about_offer_1_title: "Профессиональные консультации",
            about_offer_1_desc: "Наши эксперты готовы предоставить исчерпывающую информацию и помочь с выбором идеальных смазочных материалов.",
            about_offer_2_icon: "🚚",
            about_offer_2_title: "Быстрая и стабильная логистика",
            about_offer_2_desc: "Гарантируем своевременную и безопасную доставку продукции в любую точку Узбекистана.",
            about_offer_3_icon: "🤝",
            about_offer_3_title: "Индивидуальные условия для партнеров",
            about_offer_3_desc: "Разрабатываем гибкие решения и предложения, учитывающие уникальные потребности каждого клиента.",
            about_intro_p4_icon: "🔬",
            about_intro_p4: "Unil Opal — это более 60 лет опыта, собственные лаборатории и постоянные инновации в области защиты двигателя и повышения эффективности.",
            about_intro_closing_icon: "🌍",
            about_intro_closing: "Мы гордимся тем, что представляем бренд, которому доверяют по всему миру.",
            mvv_section_title: "Наша философия",
            mvv_icon_mission: "🎯",
            mvv_mission_title: "Наша миссия",
            mvv_mission_text: "Обеспечить каждого автомобилиста в Узбекистане доступом к премиальным французским маслам, которые гарантируют долговечность двигателя, экономию топлива и безопасность на дороге.",
            mvv_icon_vision: "👁️",
            mvv_vision_title: "Наше видение",
            mvv_vision_text: "Стать ведущим поставщиком автомобильных масел в Центральной Азии, устанавливая новые стандарты качества и сервиса в отрасли.",
            mvv_icon_values: "🤍",
            mvv_values_title: "Наши ценности",
            mvv_values_text: "Качество превыше всего, честность в отношениях с клиентами, инновации в каждом решении и забота об окружающей среде.",
            footer_copyright_text_about_page: "Inoyat Grace Group. Все права защищены.",

            // --- Why Choose Us Page Specific Translations ---
            why_choose_us_page_title: "Unil Opal - Почему выбирают нас",
            why_choose_us_meta_desc: "Unil Opal — французские смазочные материалы. Более 60 лет качества, инноваций и надежности.",
            why_choose_us_og_title: "Unil Opal — Французские Смазочные Материалы",
            why_choose_us_og_desc: "Официальный сайт Unil Opal. Моторные масла, технические жидкости, международные сертификаты и премиум-качество.",
            why_choose_us_h1_title: "Unil Opal: Ваша уверенность в качестве и защите",
            cert_section_title: "Сертификаты и международные стандарты",
            cert_section_intro: "Наша продукция соответствует строжайшим международным стандартам качества и безопасности. Каждый сертификат подтверждает нашу приверженность превосходству:",
            iso9001_benefit: "Стабильное качество, надежность.",
            iso14001_benefit: "Партнерство с экологически ответственным производителем.",
            iso45001_benefit: "Забота о безопасности персонала и соблюдение норм.",
            api_benefit: "Соответствие мировым стандартам моторных масел.",
            acea_benefit: "Одобрение ведущих европейских автоконцернов.",
            nsfh1_benefit: "Безопасность для использования в пищевой промышленности.",
            halal_benefit: "Соответствие требованиям Халяль.",
            ecolabel_benefit: "Сниженное воздействие на окружающую среду.",
            oem_approvals_intro: "Официальные допуски от ведущих автопроизводителей подтверждают, что масла Unil Opal прошли строжайшие испытания и рекомендованы для использования в современных двигателях. Это обеспечивает сохранение гарантии на ваш автомобиль и гарантированную совместимость.",
            oem_volvo: "Volvo",
            oem_volkswagen: "Volkswagen: VW 504.00 / 507.00",
            oem_mercedes: "Mercedes-Benz: MB 229.51 / 229.52",
            oem_bmw: "BMW: Longlife-04",
            oem_renault: "Renault: RN0700 / RN0710",
            oem_porsche: "Porsche: C30",
            oem_and_more: "и др.",
            premium_price_title: "Премиум-качество по цене стандартного",
            premium_price_text: "С Unil Opal вы получаете все преимущества масел высокого класса — надежную защиту двигателя, экономию топлива, экологичность и международные одобрения — без переплаты за бренд. Мы предлагаем французское премиум-качество, доступное каждому.",
            premium_price_cta: "Профессионалы выбирают умно — выбирают Unil Opal.",
            footer_copyright_text_why_choose_us: " Все права защищены.",

            // --- Contact Page Specific Translations ---
            contact_page_title: "Контакты - Grace Oil & Unil Opal",
            contact_meta_desc: "Свяжитесь с Grace Oil & Unil Opal. Наша команда готова ответить на ваши вопросы. Телефон, email, адрес и карта.",
            contact_og_title: "Контакты - Grace Oil & Unil Opal",
            contact_og_desc: "Свяжитесь с нами по вопросам продукции Unil Opal.",
            contact_h1_title: "Свяжитесь с нами",
            contact_intro_text: "Наша команда готова ответить на ваши вопросы и предоставить всю необходимую информацию о продукции Unil Opal.",
            contact_form_title: "Оставьте нам сообщение",
            form_name_label: "Имя",
            form_name_placeholder: "Ваше имя",
            form_email_label: "Email",
            form_email_placeholder: "Ваш email",
            form_phone_label: "Телефон",
            form_phone_placeholder: "Ваш телефон (необязательно)",
            form_message_label: "Сообщение",
            form_message_placeholder: "Ваше сообщение",
            form_submit_button: "Отправить",
            contact_info_title: "Контактная информация",
            contact_phones_label: "Телефоны:",
            contact_email_label: "Email:",
            contact_address_label: "Адрес:",
            contact_map_title: "Наше расположение на карте"
        },
        uz: {
            // General Navigation (used across pages)
            nav_home: "Bosh sahifa",
            nav_about_us: "Biz haqimizda",
            nav_products: "Mahsulotlar",
            nav_why_choose_us: "Nima uchun bizni tanlashadi",
            nav_contact: "Kontaktlar",

            // Footer (used across pages)
            footer_privacy: "Maxfiylik siyosati",
            footer_terms: "Foydalanish shartlari",

            // --- Index Page Specific Translations ---
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

            // --- About Us Page Specific Translations ---
            about_page_title: "Biz haqimizda - Grace Oil & Unil Opal",
            about_meta_desc: "Grace Oil — Fransiyadagi Unil Opal rasmiy distribyutori. Bizning missiyamiz, ko'rishimiz va qadriyatlarimiz.",
            about_og_title: "Biz haqimizda - Grace Oil & Unil Opal",
            about_og_desc: "Fransuz moylash materiallari Unil Opal'ning rasmiy distribyutori.",
            about_h1_title: "Biz haqimizda – Grace Oil & Unil Opal",
            about_intro_p1: "<strong>Grace Oil</strong> — yuqori sifatli motor va sanoat moylari ishlab chiqarishga ixtisoslashgan Fransuz brendi <strong>Unil Opal</strong> rasmiy distribyutori.",
            about_intro_p2: "Bizning vazifamiz — O'zbekistondagi va undan tashqaridagi mijozlarimizni xalqaro standartlarga javob beradigan ishonchli, sertifikatlangan va innovatsion moylash materiallari bilan ta'minlashdir.",
            about_intro_p3: "Biz avtoservislar, transport kompaniyalari, qishloq xo'jaligi va sanoat korxonalari bilan ishlaymiz va quyidagilarni taklif qilamiz:",
            about_offer_1_icon: "💡",
            about_offer_1_title: "Professional konsultatsiyalar",
            about_offer_1_desc: "Mutaxassislarimiz keng qamrovli ma'lumot berishga va ideal moylash materiallarini tanlashda yordam berishga tayyor.",
            about_offer_2_icon: "🚚",
            about_offer_2_title: "Tez va barqaror logistika",
            about_offer_2_desc: "O'zbekistonning istalgan nuqtasiga mahsulotlarni o'z vaqtida va xavfsiz yetkazib berishni kafolatlaymiz.",
            about_offer_3_icon: "🤝",
            about_offer_3_title: "Hamkorlar uchun individual shartlar",
            about_offer_3_desc: "Har bir mijozning noyob ehtiyojlarini hisobga olgan holda moslashuvchan yechimlar va takliflarni ishlab chiqamiz.",
            about_intro_p4_icon: "🔬",
            about_intro_p4: "Unil Opal — bu 60 yildan ortiq tajriba, o'z laboratoriyalari va dvigatelni himoya qilish va samaradorlikni oshirish sohasida doimiy innovatsiyalar.",
            about_intro_closing_icon: "🌍",
            about_intro_closing: "Biz butun dunyo bo'ylab ishonchga sazovor bo'lgan brendni taqdim etishdan faxrlanamiz.",
            mvv_section_title: "Bizning falsafamiz",
            mvv_icon_mission: "🎯",
            mvv_mission_title: "Bizning missiyamiz",
            mvv_mission_text: "O'zbekistondagi har bir avtomobilchiga dvigatelning uzoq umr ko'rishini, yoqilg'i tejashni va yo'l xavfsizligini kafolatlaydigan premium fransuz moylaridan foydalanish imkoniyatini ta'minlash.",
            mvv_icon_vision: "👁️",
            mvv_vision_title: "Bizning ko'rishimiz",
            mvv_vision_text: "Markaziy Osiyida avtomobil moylarining yetakchi yetkazib beruvchisi bo'lish, sohada sifat va xizmatning yangi standartlarini o'rnatish.",
            mvv_icon_values: "🤍",
            mvv_values_title: "Bizning qadriyatlarimiz",
            mvv_values_text: "Har qanday holatda sifat ustuvorligi, mijozlar bilan munosabatlarda halollik, har bir yechimda innovatsiyalar va atrof-muhitga g'amxo'rlik.",
            footer_copyright_text_about_page: "Inoyat Grace Group. Barcha huquqlar himoyalangan.",

            // --- Why Choose Us Page Specific Translations ---
            why_choose_us_page_title: "Unil Opal - Nima uchun bizni tanlashadi",
            why_choose_us_meta_desc: "Unil Opal — fransuz moylash materiallari. 60 yildan ortiq sifat, innovatsiyalar va ishonchlilik.",
            why_choose_us_og_title: "Unil Opal — Fransuz Moylash Materiallari",
            why_choose_us_og_desc: "Unil Opal rasmiy sayti. Motor moylari, texnik suyuqliklar, xalqaro sertifikatlar va premium sifat.",
            why_choose_us_h1_title: "Unil Opal: Sifat va himoyaga ishonchingiz",
            cert_section_title: "Sertifikatlar va xalqaro standartlar",
            cert_section_intro: "Mahsulotlarimiz eng qat'iy xalqaro sifat va xavfsizlik standartlariga javob beradi. Har bir sertifikat bizning mukammallikka sodiqligimizni tasdiqlaydi:",
            iso9001_benefit: "Barqaror sifat, ishonchlilik.",
            iso14001_benefit: "Ekologik mas'uliyatli ishlab chiqaruvchi bilan hamkorlik.",
            iso45001_benefit: "Xodimlar xavfsizligi va normalarga rioya qilishga g'amxo'rlik.",
            api_benefit: "Motor moylarining jahon standartlariga muvofiqligi.",
            acea_benefit: "Yetakchi Yevropa avtokonsernlari tomonidan tasdiqlangan.",
            nsfh1_benefit: "Oziq-ovqat sanoatida foydalanish uchun xavfsizlik.",
            halal_benefit: "Halol talablarga muvofiqligi.",
            ecolabel_benefit: "Atrof-muhitga ta'sirni kamaytirish.",
            oem_approvals_intro: "Yetakchi avtomobil ishlab chiqaruvchilardan rasmiy ruxsatnomalar Unil Opal moylarining eng qat'iy sinovlardan o'tganligini va zamonaviy dvigatellarda foydalanish uchun tavsiya etilganligini tasdiqlaydi. Bu avtomobilingiz kafolati saqlanishini va kafolatlangan moslikni ta'minlaydi.",
            oem_volvo: "Volvo",
            oem_volkswagen: "Volkswagen: VW 504.00 / 507.00",
            oem_mercedes: "Mercedes-Benz: MB 229.51 / 229.52",
            oem_bmw: "BMW: Longlife-04",
            oem_renault: "Renault: RN0700 / RN0710",
            oem_porsche: "Porsche: C30",
            oem_and_more: "va b.",
            premium_price_title: "Standart narxdagi premium sifat",
            premium_price_text: "Unil Opal bilan siz yuqori sifatli moylarning barcha afzalliklariga — dvigatelni ishonchli himoya qilish, yoqilg'i tejash, ekologik tozalik va xalqaro ruxsatnomalarga — brend uchun ortiqcha to'lovsiz ega bo'lasiz. Biz har bir kishiga arzon narxda fransuz premium sifatini taklif etamiz.",
            premium_price_cta: "Mutaxassislar oqilona tanlaydi — Unil Opal'ni tanlaydi.",
            footer_copyright_text_why_choose_us: " Barcha huquqlar himoyalangan.",

            // --- Contact Page Specific Translations ---
            contact_page_title: "Kontaktlar - Grace Oil & Unil Opal",
            contact_meta_desc: "Grace Oil & Unil Opal bilan bog'laning. Bizning jamoamiz sizning savollaringizga javob berishga tayyor. Telefon, email, manzil va xarita.",
            contact_og_title: "Kontaktlar - Grace Oil & Unil Opal",
            contact_og_desc: "Unil Opal mahsulotlari bo'yicha biz bilan bog'laning.",
            contact_h1_title: "Biz bilan bog'laning",
            contact_intro_text: "Bizning jamoamiz sizning savollaringizga javob berishga va Unil Opal mahsulotlari haqida barcha kerakli ma'lumotlarni taqdim etishga tayyor.",
            contact_form_title: "Bizga xabar qoldiring",
            form_name_label: "Ism",
            form_name_placeholder: "Ismingiz",
            form_email_label: "Email",
            form_email_placeholder: "E-pochtangiz",
            form_phone_label: "Telefon",
            form_phone_placeholder: "Telefon raqamingiz (ixtiyoriy)",
            form_message_label: "Xabar",
            form_message_placeholder: "Xabaringiz",
            form_submit_button: "Yuborish",
            contact_info_title: "Bog'lanish ma'lumotlari",
            contact_phones_label: "Telefonlar:",
            contact_email_label: "Email:",
            contact_address_label: "Manzil:",
            contact_map_title: "Xaritadagi joylashuvimiz"
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ru'; // Default to Russian

    function setLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(function(element) {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key] !== undefined) {
                // Special handling for meta tags
                if (element.tagName === 'META') {
                    if (element.getAttribute('name') === 'description') {
                        element.setAttribute('content', translations[lang][key]);
                    } else if (element.getAttribute('property') === 'og:title' || element.getAttribute('property') === 'og:description') {
                        element.setAttribute('content', translations[lang][key]);
                    }
                }
                // Special handling for input placeholders
                else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.setAttribute('placeholder', translations[lang][key]);
                }
                // Handle elements that contain HTML (like strong tags)
                else if (key === 'about_intro_p1') { // This key might contain <strong>
                    element.innerHTML = translations[lang][key];
                }
                // Handle icon elements directly setting textContent
                else if (key.endsWith('_icon')) {
                     element.textContent = translations[lang][key];
                }
                // General text content for other elements
                else {
                    element.textContent = translations[lang][key];
                }
            } else {
                console.warn(`Translation key '${key}' not found or is undefined for language '${lang}'.`);
            }
        });

        // Handle title tag separately
        const titleElement = document.querySelector('head title');
        if (titleElement) {
            const currentPage = window.location.pathname.split('/').pop();
            let pageTitleKey;
            if (currentPage === 'index.html' || currentPage === '') {
                pageTitleKey = 'hero_heading'; // Or a dedicated index_page_title key
            } else if (currentPage === 'about-us.html') {
                pageTitleKey = 'about_page_title';
            } else if (currentPage === 'why-choose-us.html') {
                pageTitleKey = 'why_choose_us_page_title';
            } else if (currentPage === 'contact.html') {
                pageTitleKey = 'contact_page_title';
            }

            if (pageTitleKey && translations[lang] && translations[lang][pageTitleKey]) {
                titleElement.textContent = translations[lang][pageTitleKey];
            }
        }


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

    // Update current year in the footer for any element with an ID starting with 'current-year'
    const currentYearElements = document.querySelectorAll('[id^="current-year"]');
    currentYearElements.forEach(function(element) {
        element.textContent = new Date().getFullYear();
    });
});
document.getElementById('navToggle').onclick = function() {
  document.getElementById('mainNav').classList.toggle('open');
};