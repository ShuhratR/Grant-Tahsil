const WHATSAPP_NUMBER = "992889908833";

const dictionaries = {
  ru: {
    pageTitle: "Grant Tahsil | Образование в Китае",
    pageDescription: "Подбор программ обучения в Китае, подготовка документов и сопровождение поступления с Grant Tahsil.",
    galleryAlt: "Вариант студенческого проживания",
    galleryHint: "На телефоне проведите по фотографиям в сторону",
    sending: "Отправляем заявку…",
    saveError: "Не удалось сохранить заявку. Проверьте соединение и попробуйте ещё раз.",
    wrongServer: "Сайт открыт через Live Server без API. Запустите npm start и откройте http://127.0.0.1:4173.",
    fallbackNotice: "Серверное сохранение недоступно. Заявка подготовлена для отправки через WhatsApp.",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    cityEducation: "Образовательный центр",
    cityCampus: "Студенческая среда",
    cityStudent: "Город для учёбы",
    cityChoose: "Выбрать город",
    citySelected: "Город выбран",
    brandTag: "Поступление в Китай",
    navPrograms: "Программы",
    navDorms: "Проживание",
    navApply: "Заявка",
    whatsapp: "Заполнить анкету",
    heroEyebrow: "Работаем с 2018 года • Душанбе",
    heroTitle: "Ваш путь к образованию в Китае начинается здесь",
    heroText: "Grant Tahsil помогает подобрать программу и университет, подготовить заявку и пройти основные этапы поступления в Китай.",
    heroPrimary: "Программы обучения",
    heroSecondary: "Получить консультацию",
    heroGuideEyebrow: "Консультация",
    heroGuideTitle: "Обсудим вашу цель обучения",
    heroGuideText: "Оставьте данные — менеджер поможет с программой и ответит на вопросы.",
    heroGuideButton: "Получить консультацию →",
    trustOne: "Языковые курсы",
    trustTwo: "Колледж",
    trustThree: "Бакалавриат",
    trustFour: "Магистратура",
    heroStatTitle: "Китай",
    heroStatText: "программы для разных уровней образования",
    heroCardProgram: "Program Match",
    heroCardProgramText: "подбор программы",
    heroCardDocs: "Documents",
    heroCardDocsText: "подготовка заявки",
    heroCardInvite: "Invitation Letter",
    heroCardInviteText: "приглашение",
    quickEyebrow: "Быстрый подбор",
    quickTitle: "Выберите цель обучения",
    quickLanguage: "Хочу языковые курсы",
    quickBachelor: "Хочу бакалавриат",
    quickMaster: "Хочу магистратуру",
    quickHelp: "Помогите подобрать",
    aboutEyebrow: "О компании",
    aboutTitle: "Grant Tahsil — ваш проводник к образованию в Китае",
    aboutText: "Компания помогает абитуриентам выбрать подходящую программу, подготовить документы и пройти основные этапы поступления на языковые программы, колледж, бакалавриат и магистратуру.",
    programsEyebrow: "Направления",
    programsTitle: "Программы обучения",
    programLanguage: "Языковые курсы",
    programLanguageText: "Для тех, кто хочет начать с китайского языка и адаптации.",
    programCollege: "Колледж",
    programCollegeText: "Практические образовательные программы после школы.",
    programBachelor: "Бакалавриат",
    programBachelorText: "Поступление на выбранную специальность в Китае.",
    programMaster: "Магистратура",
    programMasterText: "Продолжение образования и профессионального роста.",
    specialtiesEyebrow: "Специальности",
    specialtiesTitle: "Популярные направления",
    specialtiesLabel: "Популярные специальности",
    pauseCarousel: "Остановить движение",
    playCarousel: "Продолжить движение",
    specialtyCtaTitle: "Не нашли свою специальность?",
    specialtyCtaText: "Подберём подходящее направление и программу обучения.",
    specialtyCtaButton: "Получить консультацию",
    cityCtaTitle: "Не знаете, какой город выбрать?",
    cityCtaText: "Сравним города по программе, бюджету и условиям проживания.",
    cityCtaButton: "Подобрать город →",
    serviceCtaTitle: "Нужен понятный план поступления?",
    serviceCtaText: "На консультации определим подходящий объём сопровождения.",
    serviceCtaButton: "Обсудить поступление →",
    citiesEyebrow: "Города Китая",
    citiesTitle: "Города, которые часто выбирают студенты",
    dormsEyebrow: "Проживание",
    dormsTitle: "Варианты студенческого проживания в Китае",
    dormsText: "Фотографии показывают возможный формат общежитий и учебной среды. Конкретные варианты уточняются при подборе программы.",
    servicesEyebrow: "Сопровождение",
    servicesTitle: "Что входит в работу Grant Tahsil",
    includedTitle: "Основное сопровождение",
    includedOne: "Подбор программ и университетов",
    includedTwo: "Подача документов",
    includedThree: "Подача заявки",
    includedFour: "Получение приглашения",
    includedFive: "Помощь с визой",
    extraTitle: "Дополнительные услуги",
    extraOne: "Подготовка документов",
    extraTwo: "Перевод документов",
    extraThree: "Встреча студента в Китае",
    stepsEyebrow: "Путь студента",
    stepsTitle: "Этапы поступления",
    faqEyebrow: "FAQ",
    faqTitle: "Частые вопросы",
    applyEyebrow: "Заявка",
    applyTitle: "Оставьте данные — менеджер свяжется с вами",
    applyText: "После отправки откроется WhatsApp с готовым сообщением. Проверьте текст и нажмите отправить.",
    applyBenefitOne: "Бесплатная консультация после анкеты",
    applyBenefitTwo: "Подбор программы под вашу цель",
    applyBenefitThree: "Понятный следующий шаг",
    fieldName: "Имя",
    fieldAge: "Возраст",
    fieldPhone: "Номер телефона",
    fieldProgram: "Желаемая программа",
    selectProgram: "Выберите программу",
    fieldCities: "Выберите города Китая",
    fieldCitiesHint: "Можно выбрать до 5 городов.",
    cityDropdownPlaceholder: "Открыть список городов",
    fieldChinese: "Знаете ли вы китайский язык?",
    selectAnswer: "Выберите ответ",
    answerNo: "Нет",
    answerYes: "Да",
    fieldHsk: "Ваш уровень китайского языка",
    hskNoCert: "Изучаю, но сертификата HSK нет",
    submitApplication: "Отправить заявку",
    consentText: "Я согласен на обработку указанных данных для связи по моей заявке.",
    privacyTitle: "Как используются данные",
    privacyText: "Данные используются только для обработки заявки и связи с вами. Мы не публикуем их и не передаём посторонним организациям без необходимости для выбранной услуги.",
    formRequiredNote: "Заполните анкету, чтобы получить бесплатную консультацию. После отправки откроется WhatsApp с готовым сообщением.",
    footerText: "Поступление на обучение в Китай с профессиональным сопровождением.",
    contacts: "Контакты",
    address: "Душанбе, проспект Н. Махсум, 1",
    mobileApply: "Заявка",
    mobileWhatsapp: "Анкета",
    helpPick: "Помогите подобрать",
    maxCities: "Можно выбрать максимум 5 городов.",
    ageError: "Укажите возраст от 1 до 150 лет.",
    success: "Заявка сохранена. Сейчас откроется WhatsApp для отправки копии сообщения.",
    waHello: "Здравствуйте! Я посетил сайт Grant Tahsil и хочу получить консультацию по поступлению в Китай.",
    waLead: "Новая заявка с сайта Grant Tahsil",
    waProgram: "Программа",
    waCities: "Города",
    waChinese: "Китайский язык",
    waHsk: "Уровень",
    waName: "Имя",
    waAge: "Возраст",
    waPhone: "Телефон"
  },
  tj: {
    pageTitle: "Grant Tahsil | Таҳсил дар Чин",
    pageDescription: "Интихоби барномаҳои таҳсил дар Чин, омодасозии ҳуҷҷатҳо ва ҳамроҳии дохилшавӣ бо Grant Tahsil.",
    galleryAlt: "Намунаи иқомати донишҷӯён",
    galleryHint: "Дар телефон аксҳоро ба паҳлӯ ҳаракат диҳед",
    sending: "Дархост фиристода мешавад…",
    saveError: "Дархост нигоҳ дошта нашуд. Пайвастшавиро санҷида, аз нав кӯшиш кунед.",
    wrongServer: "Сайт тавассути Live Server бе API кушода шудааст. npm start-ро иҷро карда, http://127.0.0.1:4173-ро кушоед.",
    fallbackNotice: "Нигоҳдории серверӣ дастрас нест. Дархост барои фиристодан тавассути WhatsApp омода шуд.",
    menuOpen: "Кушодани меню",
    menuClose: "Пӯшидани меню",
    cityEducation: "Маркази таҳсилӣ",
    cityCampus: "Муҳити донишҷӯӣ",
    cityStudent: "Шаҳр барои таҳсил",
    cityChoose: "Интихоби шаҳр",
    citySelected: "Шаҳр интихоб шуд",
    brandTag: "Таҳсил дар Чин",
    navPrograms: "Барномаҳо",
    navDorms: "Иқомат",
    navApply: "Дархост",
    whatsapp: "Пур кардани анкета",
    heroEyebrow: "Аз соли 2018 кор мекунем • Душанбе",
    heroTitle: "Роҳи шумо ба таҳсил дар Чин аз ҳамин ҷо оғоз мешавад",
    heroText: "Grant Tahsil барои интихоби барнома ва донишгоҳ, омода намудани дархост ва гузаштани марҳилаҳои асосии дохилшавӣ ба Чин кӯмак мерасонад.",
    heroPrimary: "Барномаҳои таҳсил",
    heroSecondary: "Гирифтани машварат",
    heroGuideEyebrow: "Машварат",
    heroGuideTitle: "Ҳадафи таҳсили шуморо баррасӣ мекунем",
    heroGuideText: "Маълумотро гузоред — менеджер дар интихоби барнома кӯмак карда, ба саволҳо ҷавоб медиҳад.",
    heroGuideButton: "Гирифтани машварат →",
    trustOne: "Курсҳои забонӣ",
    trustTwo: "Коллеҷ",
    trustThree: "Бакалавриат",
    trustFour: "Магистратура",
    heroStatTitle: "Чин",
    heroStatText: "барномаҳо барои сатҳҳои гуногуни таҳсил",
    heroCardProgram: "Интихоби барнома",
    heroCardProgramText: "барномаи мувофиқ",
    heroCardDocs: "Ҳуҷҷатҳо",
    heroCardDocsText: "омодасозии дархост",
    heroCardInvite: "Даъватнома",
    heroCardInviteText: "қадами навбатӣ",
    quickEyebrow: "Интихоби зуд",
    quickTitle: "Ҳадафи таҳсилро интихоб кунед",
    quickLanguage: "Курсҳои забонӣ мехоҳам",
    quickBachelor: "Бакалавриат мехоҳам",
    quickMaster: "Магистратура мехоҳам",
    quickHelp: "Барои интихоб кӯмак кунед",
    aboutEyebrow: "Дар бораи ширкат",
    aboutTitle: "Grant Tahsil — роҳнамои шумо ба таҳсил дар Чин",
    aboutText: "Ширкат ба довталабон барои интихоби барномаи мувофиқ, омодасозии ҳуҷҷатҳо ва гузаштани марҳилаҳои асосии дохилшавӣ ба курсҳои забонӣ, коллеҷ, бакалавриат ва магистратура кӯмак мекунад.",
    programsEyebrow: "Самтҳо",
    programsTitle: "Барномаҳои таҳсил",
    programLanguage: "Курсҳои забонӣ",
    programLanguageText: "Барои онҳое, ки мехоҳанд аз омӯзиши забони чинӣ ва мутобиқшавӣ оғоз кунанд.",
    programCollege: "Коллеҷ",
    programCollegeText: "Барномаҳои амалии таҳсил баъд аз мактаб.",
    programBachelor: "Бакалавриат",
    programBachelorText: "Дохилшавӣ ба ихтисоси интихобшуда дар Чин.",
    programMaster: "Магистратура",
    programMasterText: "Идомаи таҳсил ва рушди касбӣ.",
    specialtiesEyebrow: "Ихтисосҳо",
    specialtiesTitle: "Самтҳои маъмул",
    specialtiesLabel: "Ихтисосҳои маъмул",
    pauseCarousel: "Қатъ кардани ҳаракат",
    playCarousel: "Идома додани ҳаракат",
    specialtyCtaTitle: "Ихтисоси худро наёфтед?",
    specialtyCtaText: "Самт ва барномаи мувофиқи таҳсилро интихоб мекунем.",
    specialtyCtaButton: "Гирифтани машварат",
    cityCtaTitle: "Намедонед кадом шаҳрро интихоб кунед?",
    cityCtaText: "Шаҳрҳоро аз рӯи барнома, буҷет ва шароити зист муқоиса мекунем.",
    cityCtaButton: "Интихоби шаҳр →",
    serviceCtaTitle: "Нақшаи равшани дохилшавӣ лозим аст?",
    serviceCtaText: "Дар машварат ҳаҷми мувофиқи ҳамроҳиро муайян мекунем.",
    serviceCtaButton: "Муҳокимаи дохилшавӣ →",
    citiesEyebrow: "Шаҳрҳои Чин",
    citiesTitle: "Шаҳрҳое, ки донишҷӯён бештар интихоб мекунанд",
    dormsEyebrow: "Иқомат",
    dormsTitle: "Намунаҳои иқомати донишҷӯён дар Чин",
    dormsText: "Аксҳо шакли эҳтимолии хобгоҳ ва муҳити таълимиро нишон медиҳанд. Вариантҳои мушаххас ҳангоми интихоби барнома муайян мешаванд.",
    servicesEyebrow: "Ҳамроҳӣ",
    servicesTitle: "Grant Tahsil дар чӣ кӯмак мекунад",
    includedTitle: "Ҳамроҳии асосӣ",
    includedOne: "Интихоби барномаҳо ва донишгоҳҳо",
    includedTwo: "Пешниҳоди ҳуҷҷатҳо",
    includedThree: "Пешниҳоди дархост",
    includedFour: "Гирифтани даъватнома",
    includedFive: "Кӯмак бо раводид",
    extraTitle: "Хизматрасониҳои иловагӣ",
    extraOne: "Омодасозии ҳуҷҷатҳо",
    extraTwo: "Тарҷумаи ҳуҷҷатҳо",
    extraThree: "Пешвозгирии донишҷӯ дар Чин",
    stepsEyebrow: "Роҳи донишҷӯ",
    stepsTitle: "Марҳилаҳои дохилшавӣ",
    faqEyebrow: "Саволҳо",
    faqTitle: "Саволҳои маъмул",
    applyEyebrow: "Дархост",
    applyTitle: "Маълумотро гузоред — менеджер бо шумо тамос мегирад",
    applyText: "Пас аз фиристодан WhatsApp бо паёми омода кушода мешавад. Матнро санҷед ва фиристед.",
    applyBenefitOne: "Машварати ройгон пас аз анкета",
    applyBenefitTwo: "Интихоби барнома мувофиқи ҳадафи шумо",
    applyBenefitThree: "Қадами навбатии фаҳмо",
    fieldName: "Ном",
    fieldAge: "Синну сол",
    fieldPhone: "Рақами телефон",
    fieldProgram: "Барномаи дилхоҳ",
    selectProgram: "Барномаро интихоб намоед",
    fieldCities: "Шаҳрҳои Чинро интихоб намоед",
    fieldCitiesHint: "То 5 шаҳр интихоб кардан мумкин аст.",
    cityDropdownPlaceholder: "Кушодани рӯйхати шаҳрҳо",
    fieldChinese: "Оё забони чиниро медонед?",
    selectAnswer: "Ҷавобро интихоб намоед",
    answerNo: "Не",
    answerYes: "Ҳа",
    fieldHsk: "Сатҳи дониши забони чинии шумо",
    hskNoCert: "Меомӯзам, вале сертификати HSK надорам",
    submitApplication: "Дархост пешниҳод кардан",
    consentText: "Ман ба коркарди маълумоти нишондодашуда барои тамос аз рӯи дархостам розӣ ҳастам.",
    privacyTitle: "Маълумот чӣ гуна истифода мешавад",
    privacyText: "Маълумот танҳо барои коркарди дархост ва тамос бо шумо истифода мешавад. Мо онро нашр намекунем ва бе зарурати хидмати интихобшуда ба шахсони бегона намедиҳем.",
    formRequiredNote: "Барои гирифтани машварати ройгон анкетаро пур кунед. Пас аз фиристодан WhatsApp бо паёми омода кушода мешавад.",
    footerText: "Дохилшавӣ ба таҳсил дар Чин бо ҳамроҳии касбӣ.",
    contacts: "Тамос",
    address: "Душанбе, проспекти Н. Махсум, 1",
    mobileApply: "Дархост",
    mobileWhatsapp: "Анкета",
    helpPick: "Барои интихоб кӯмак кунед",
    maxCities: "Ҳадди аксар 5 шаҳр интихоб кардан мумкин аст.",
    ageError: "Синну солро аз 1 то 150 нишон диҳед.",
    success: "Дархост нигоҳ дошта шуд. Ҳоло WhatsApp барои фиристодани нусхаи паём кушода мешавад.",
    waHello: "Салом! Ман аз сомонаи Grant Tahsil ворид шудам ва мехоҳам оид ба таҳсил дар Чин машварат гирам.",
    waLead: "Дархости нав аз сомонаи Grant Tahsil",
    waProgram: "Барнома",
    waCities: "Шаҳрҳо",
    waChinese: "Забони чинӣ",
    waHsk: "Сатҳ",
    waName: "Ном",
    waAge: "Синну сол",
    waPhone: "Телефон"
  }
};

const specialties = {
  ru: ["Международная торговля", "Финансы", "Компьютерные науки", "Программная инженерия", "Автоматизация", "Машиностроение", "Управление", "Пищевая инженерия", "Биотехнологии", "Дизайн продукции", "Маркетинг", "Журналистика", "Социальные науки", "Прикладная психология", "Китайский язык", "Международное образование", "Электронная коммерция"],
  tj: ["Савдои байналмилалӣ", "Молия", "Илмҳои компютерӣ", "Муҳандисии барномасозӣ", "Автоматизатсия", "Мошинсозӣ", "Идоракунӣ", "Муҳандисии хӯрокворӣ", "Биотехнология", "Дизайни маҳсулот", "Маркетинг", "Журналистика", "Илмҳои иҷтимоӣ", "Психологияи амалӣ", "Забони чинӣ", "Таҳсилоти байналмилалӣ", "Тиҷорати электронӣ"]
};

const cities = {
  ru: ["Шанхай", "Нанкин", "Чэнду", "Цанчжоу", "Янтай", "Сиань", "Ханчжоу", "Пекин", "Гуйчжоу", "Гуанчжоу", "Куньмин", "Циндао", "Ухань", "Тяньцзинь", "Сучжоу"],
  tj: ["Шанхай", "Нанкин", "Чэнду", "Цанчжоу", "Янтай", "Сиан", "Ханчжоу", "Пекин", "Гуйчжоу", "Гуанчжоу", "Кунмин", "Циндао", "Ухан", "Тянҷин", "Сучжоу"]
};

const steps = {
  ru: ["Консультация", "Подбор программы", "Документы", "Заявка", "Приглашение", "Виза", "Китай"],
  tj: ["Машварат", "Интихоби барнома", "Ҳуҷҷатҳо", "Дархост", "Даъватнома", "Раводид", "Чин"]
};

const faqs = {
  ru: [
    ["Вы работаете только с Китаем?", "Да, Grant Tahsil специализируется на поступлении в учебные заведения Китая."],
    ["Нужно ли знать китайский язык?", "Не всегда. Есть языковые программы, а уровень языка уточняется при подборе."],
    ["Показываете ли вы университеты на сайте?", "Пока нет. Университеты подбираются индивидуально после консультации."]
  ],
  tj: [
    ["Шумо танҳо бо Чин кор мекунед?", "Ҳа, Grant Tahsil ба дохилшавӣ ба муассисаҳои таълимии Чин ихтисос дорад."],
    ["Оё донистани забони чинӣ ҳатмист?", "На ҳамеша. Барномаҳои забонӣ мавҷуданд ва сатҳи забон ҳангоми интихоб муайян мешавад."],
    ["Оё донишгоҳҳо дар сайт нишон дода мешаванд?", "Айни ҳол не. Донишгоҳҳо пас аз машварат ба таври инфиродӣ интихоб мешаванд."]
  ]
};

const galleryItems = [
  { src: "assets/gallery/dorm-02.webp", ru: "Комната студента", tj: "Ҳуҷраи донишҷӯ" },
  { src: "assets/gallery/dorm-01.webp", ru: "Комната с мини-кухней", tj: "Ҳуҷра бо ошхонаи хурд" },
  { src: "assets/gallery/dorm-03.webp", ru: "Общая комната", tj: "Ҳуҷраи умумӣ" },
  { src: "assets/gallery/dorm-05.webp", ru: "Общежитие на несколько мест", tj: "Хобгоҳи чанднафара" },
  { src: "assets/gallery/dorm-08.webp", ru: "Кровать и рабочая зона", tj: "Кати хоб ва ҷои корӣ" },
  { src: "assets/gallery/dorm-04.webp", ru: "Рабочее место и шкаф", tj: "Ҷои корӣ ва ҷевон" },
  { src: "assets/gallery/dorm-07.webp", ru: "Общая кухня", tj: "Ошхонаи умумӣ" },
  { src: "assets/gallery/dorm-06.webp", ru: "Зона для учёбы и отдыха", tj: "Минтақаи таҳсил ва истироҳат" }
];

let currentLang = localStorage.getItem("grantTahsilLang") || "ru";
let galleryAutoTimer = null;
let galleryIsVisible = true;
let galleryIsInteracting = false;

function t(key) {
  return dictionaries[currentLang][key] || dictionaries.ru[key] || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("grantTahsilLang", lang);
  document.documentElement.lang = lang === "tj" ? "tg" : "ru";
  document.title = t("pageTitle");
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", t("pageDescription"));

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionaries[lang][key]) node.textContent = dictionaries[lang][key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) menuToggle.setAttribute("aria-label", document.body.classList.contains("nav-open") ? t("menuClose") : t("menuOpen"));
  const specialtyToggle = document.querySelector("#specialtyToggle");
  if (specialtyToggle) {
    const paused = document.querySelector("#specialtiesCarousel")?.classList.contains("is-paused");
    specialtyToggle.querySelector("[data-i18n]").textContent = t(paused ? "playCarousel" : "pauseCarousel");
  }

  renderDynamicBlocks();
  renderGallery();
  updateWhatsappLinks();
}

function renderDynamicBlocks() {
  const specialtyList = document.querySelector("#specialtiesList");
  const specialtyItems = specialties[currentLang].map((item) => `<span>${item}</span>`).join("");
  specialtyList.innerHTML = `<div class="specialty-group">${specialtyItems}</div><div class="specialty-group" aria-hidden="true">${specialtyItems}</div>`;

  const cityOptions = document.querySelector("#cityOptions");
  const storedChecked = new Set([...cityOptions.querySelectorAll("input:checked")].map((input) => input.value));
  cityOptions.innerHTML = [
    ...cities[currentLang].map((city, index) => ({ label: city, value: cities.ru[index] || city })),
    { label: t("helpPick"), value: "Помогите подобрать" }
  ].map(({ label, value }) => (
    `<label><input type="checkbox" name="cities" value="${value}" ${value === "Помогите подобрать" ? "data-help-pick" : ""} ${storedChecked.has(value) ? "checked" : ""}><span>${label}</span></label>`
  )).join("");
  updateCitySelectionSummary();

  const faqList = document.querySelector("#faqList");
  faqList.innerHTML = faqs[currentLang].map(([q, a], index) => (
    `<details ${index === 0 ? "open" : ""}><summary>${q}</summary><p>${a}</p></details>`
  )).join("");
}

function renderGallery() {
  const gallery = document.querySelector("#gallery");
  const loopItems = [...galleryItems, ...galleryItems, ...galleryItems];
  gallery.innerHTML = loopItems.map((item, index) => {
    const duplicate = index < galleryItems.length || index >= galleryItems.length * 2;
    const caption = item[currentLang] || item.ru;
    return `<figure class="gallery-card tilt-card" data-gallery-index="${index % galleryItems.length}" ${duplicate ? 'aria-hidden="true"' : ""}>
      <img src="${item.src}" alt="${duplicate ? "" : `${t("galleryAlt")}: ${caption}`}" loading="lazy">
      <figcaption><span>${caption}</span><small>Grant Tahsil</small></figcaption>
    </figure>`;
  }).join("");
  setupInfiniteGallery(true);
}

function updateWhatsappLinks() {
  document.querySelectorAll("[data-require-application]").forEach((link) => link.setAttribute("href", "#apply"));
}

function isMobileWhatsappDevice() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    || (navigator.maxTouchPoints > 1 && window.innerWidth < 900);
}

function buildWhatsappUrl(message) {
  const text = encodeURIComponent(message);

  return isMobileWhatsappDevice()
    ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${text}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${text}`;
}

function focusApplicationForm() {
  const form = document.querySelector("#applyForm");
  const formNote = document.querySelector("#formNote");
  document.querySelector("#apply").scrollIntoView({ behavior: "smooth", block: "start" });
  formNote.textContent = t("formRequiredNote");
  formNote.classList.remove("warning");
  window.setTimeout(() => {
    form.elements.name?.focus({ preventScroll: true });
  }, 650);
}

function updateCitySelectionSummary() {
  const count = document.querySelectorAll('input[name="cities"]:checked').length;
  const counter = document.querySelector("#citySelectionCount");
  if (counter) counter.textContent = `${count} / 5`;
}

function setupInfiniteGallery(resetPosition = false) {
  const gallery = document.querySelector("#gallery");
  if (!gallery) return;
  window.requestAnimationFrame(() => {
    const segment = gallery.scrollWidth / 3;
    if (resetPosition || gallery.scrollLeft < 4) {
      gallery.scrollLeft = segment;
    }
    gallery.dataset.segment = `${segment}`;
  });
}

function keepGalleryInfinite() {
  const gallery = document.querySelector("#gallery");
  const segment = Number(gallery.dataset.segment || 0);
  if (!segment) return;
  if (gallery.scrollLeft <= segment * 0.35) {
    gallery.scrollLeft += segment;
  } else if (gallery.scrollLeft >= segment * 1.65) {
    gallery.scrollLeft -= segment;
  }
}

function moveGallery(direction = 1) {
  const gallery = document.querySelector("#gallery");
  const card = gallery.querySelector(".gallery-card");
  const step = card ? card.getBoundingClientRect().width + 18 : 380;
  gallery.scrollBy({ left: step * direction, behavior: "smooth" });
}

function startGalleryAutoScroll() {
  window.clearInterval(galleryAutoTimer);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || document.hidden || !galleryIsVisible || galleryIsInteracting) return;
  galleryAutoTimer = window.setInterval(() => moveGallery(1), 30000);
}

function stopGalleryAutoScroll() {
  window.clearInterval(galleryAutoTimer);
  galleryAutoTimer = null;
}

function setupSpecialtyCarousel() {
  const carousel = document.querySelector("#specialtiesCarousel");
  const toggle = document.querySelector("#specialtyToggle");
  if (!carousel || !toggle) return;

  toggle.addEventListener("click", () => {
    const paused = carousel.classList.toggle("is-paused");
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.querySelector("[data-i18n]").textContent = t(paused ? "playCarousel" : "pauseCarousel");
  });

  const observer = new IntersectionObserver(([entry]) => {
    carousel.classList.toggle("is-offscreen", !entry.isIntersecting);
  }, { threshold: 0.05 });
  observer.observe(carousel);
}

function setupGalleryMotion() {
  const gallery = document.querySelector("#gallery");
  const track = document.querySelector(".gallery-track");
  if (!gallery || !track) return;

  const pause = () => {
    galleryIsInteracting = true;
    stopGalleryAutoScroll();
  };
  const resume = () => {
    galleryIsInteracting = track.matches(":hover") || track.contains(document.activeElement);
    startGalleryAutoScroll();
  };

  track.addEventListener("pointerenter", pause);
  track.addEventListener("pointerleave", resume);
  track.addEventListener("focusin", pause);
  track.addEventListener("focusout", () => window.setTimeout(resume, 0));
  gallery.addEventListener("touchstart", pause, { passive: true });

  new IntersectionObserver(([entry]) => {
    galleryIsVisible = entry.isIntersecting;
    if (galleryIsVisible) startGalleryAutoScroll();
    else stopGalleryAutoScroll();
  }, { threshold: 0.08 }).observe(track);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopGalleryAutoScroll();
    else startGalleryAutoScroll();
  });
}

function setupForm() {
  const form = document.querySelector("#applyForm");
  const knowsChinese = document.querySelector("#knowsChinese");
  const hskField = document.querySelector("#hskField");
  const formNote = document.querySelector("#formNote");
  const ageInput = form.elements.age;

  ageInput.addEventListener("input", () => {
    if (ageInput.value === "") return;
    const age = Number(ageInput.value);
    if (age < 1) ageInput.value = "";
    if (age > 150) ageInput.value = "150";
  });

  knowsChinese.addEventListener("change", () => {
    hskField.classList.toggle("hidden", knowsChinese.value !== "yes");
  });

  document.querySelector("#cityOptions").addEventListener("change", (event) => {
    if (event.target.name !== "cities") return;
    const helpPick = document.querySelector('#cityOptions input[data-help-pick]');
    const cityInputs = [...document.querySelectorAll('#cityOptions input[name="cities"]:not([data-help-pick])')];
    if (event.target === helpPick && helpPick.checked) {
      cityInputs.forEach((input) => {
        input.checked = false;
        input.disabled = true;
      });
    } else if (event.target === helpPick) {
      cityInputs.forEach((input) => { input.disabled = false; });
    } else if (event.target.checked && helpPick?.checked) {
      helpPick.checked = false;
      cityInputs.forEach((input) => { input.disabled = false; });
    }
    const checked = [...document.querySelectorAll('input[name="cities"]:checked')];
    if (checked.length > 5) {
      event.target.checked = false;
      formNote.textContent = t("maxCities");
      formNote.classList.add("warning");
    } else {
      formNote.textContent = "";
      formNote.classList.remove("warning");
    }
    updateCitySelectionSummary();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const age = Number(data.get("age"));
    if (!Number.isInteger(age) || age < 1 || age > 150) {
      formNote.textContent = t("ageError");
      formNote.classList.add("warning");
      return;
    }

    const selectedCities = [...form.querySelectorAll('input[name="cities"]:checked')].map((input) => input.value);
    const programSelect = form.elements.program;
    const selectedOption = programSelect.options[programSelect.selectedIndex];
    const knows = data.get("knowsChinese") === "yes" ? t("answerYes") : t("answerNo");
    const hsk = data.get("knowsChinese") === "yes" ? data.get("hsk") : "-";

    const lines = [
      t("waLead"),
      "",
      `${t("waName")}: ${data.get("name")}`,
      `${t("waAge")}: ${data.get("age")}`,
      `${t("waPhone")}: ${data.get("phone")}`,
      `${t("waProgram")}: ${selectedOption.textContent.trim()}`,
      `${t("waCities")}: ${selectedCities.length ? selectedCities.join(", ") : t("helpPick")}`,
      `${t("waChinese")}: ${knows}`,
      `${t("waHsk")}: ${hsk}`
    ];

    const application = {
      name: String(data.get("name") || "").trim().slice(0, 80),
      age,
      phone: String(data.get("phone") || "").trim().slice(0, 30),
      program: selectedOption.textContent.trim().slice(0, 80),
      cities: selectedCities.slice(0, 5),
      knowsChinese: data.get("knowsChinese") === "yes",
      hsk: String(hsk).slice(0, 32),
      language: currentLang
    };

    const mobileWhatsapp = isMobileWhatsappDevice();
    const pendingWhatsappWindow = mobileWhatsapp ? null : window.open("", "_blank");

    const submitButton = form.querySelector('[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = t("sending");
    formNote.textContent = t("sending");
    formNote.classList.remove("warning");

    let shouldOpenWhatsapp = false;
    let fallbackMode = false;
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(application)
      });
      if (!response.ok) {
        const requestError = new Error(`Application API returned ${response.status}`);
        if ([404, 405].includes(response.status) && ["127.0.0.1", "localhost"].includes(window.location.hostname)) {
          requestError.code = "wrong_server";
        }
        throw requestError;
      }
      const result = await response.json();
      fallbackMode = result.stored === false;
      shouldOpenWhatsapp = result.ok === true;
    } catch (error) {
      if (error.code === "wrong_server") {
        pendingWhatsappWindow?.close();
        formNote.textContent = t("wrongServer");
        formNote.classList.add("warning");
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        return;
      }
      const isStaticFallback = window.location.protocol === "file:" || !window.location.pathname.startsWith("/api/");
      if (error instanceof TypeError && isStaticFallback) {
        fallbackMode = true;
        shouldOpenWhatsapp = true;
      } else {
        pendingWhatsappWindow?.close();
        formNote.textContent = t("saveError");
        formNote.classList.add("warning");
      }
    }

    if (!shouldOpenWhatsapp) pendingWhatsappWindow?.close();
    if (shouldOpenWhatsapp) {
      formNote.textContent = fallbackMode ? t("fallbackNotice") : t("success");
      formNote.classList.toggle("warning", fallbackMode);
      const whatsappUrl = buildWhatsappUrl(lines.join("\n"));
      if (mobileWhatsapp) window.location.href = whatsappUrl;
      else if (pendingWhatsappWindow) pendingWhatsappWindow.location.href = whatsappUrl;
      else window.location.href = whatsappUrl;
    }
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  });
}

function setupInteractions() {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#mainNav");
  const setMenuOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? t("menuClose") : t("menuOpen"));
    if (open) nav.querySelector("a")?.focus();
  };
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  menuToggle.addEventListener("click", () => setMenuOpen(!document.body.classList.contains("nav-open")));

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
      setMenuOpen(false);
      menuToggle.focus();
    }
    if (event.key === "Tab" && document.body.classList.contains("nav-open")) {
      const focusable = [...nav.querySelectorAll("a"), menuToggle];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  document.querySelectorAll("[data-require-application]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setMenuOpen(false);
      focusApplicationForm();
    });
  });

  document.querySelector(".gallery-arrow.next").addEventListener("click", () => {
    moveGallery(1);
  });
  document.querySelector(".gallery-arrow.prev").addEventListener("click", () => {
    moveGallery(-1);
  });

  document.querySelector("#gallery").addEventListener("scroll", () => {
    window.requestAnimationFrame(keepGalleryInfinite);
  }, { passive: true });

  const updateHeader = () => {
    document.querySelector(".site-header").classList.toggle("is-scrolled", window.scrollY > 80);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", () => setupInfiniteGallery(false));
  startGalleryAutoScroll();
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

renderGallery();
applyLanguage(currentLang);
setupForm();
setupInteractions();
setupSpecialtyCarousel();
setupGalleryMotion();
setupReveal();
