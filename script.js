const vpns = [
  {
    rank: 1, name: 'VPNTYPE', logoImg: 'vpntype-icon.png', logoClass: 'logo-vt', pinned: true,
    badge: 'Выбор редакции',
    staticTags: ['iOS и Android · 10 устройств', 'Обходит ТСПУ — VLESS, Shadowsocks, XRAY'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Работает в РФ','Высокая скорость','Без логов'],
    free: 'Пробный период 5 дней за 1 ₽, далее — от 299 ₽/мес с безлимитным трафиком и 10 устройствами.',
    whyTitle: 'Самый стабильный рабочий VPN 2026 года для iOS и Android',
    whyText: 'Один аккаунт — 10 устройств: телефон Андроид, айфон, ноутбук, компьютер, ТВ-приставка. Семь протоколов в одном приложении на русском: VLESS, VMESS, Shadowsocks, XRAY, WireGuard, OpenVPN, V2Ray. Первые четыре маскируют ВПН-трафик под обычный HTTPS — проходят там, где стандартный WireGuard уже режется ТСПУ. На замерах 100 Мбит/с в сетях МТС и Ростелекома — YouTube 4K и Telegram-звонки идут без обрывов.',
    pros: ['Полностью русский интерфейс на всех платформах: Андроид, iPhone, Windows, ноутбук, компьютер', '7 протоколов с обфускацией трафика — обход ТСПУ и блокировок российских провайдеров', '10 устройств с одного аккаунта одновременно — хватит на семью', 'Оплата картой РФ через СБП и QIWI, поддержка отвечает на русском за минуты'],
    cons: ['Нет постоянного бесплатного тарифа — только пробник 5 дней за 1 ₽', 'Установка через APK с официального сайта — приложения нет в Google Play'],
    speed: 100, maxSpeed: 100,
    price: 'от 299 ₽/мес',
    review: '"Поставил на Android, ноутбук и iPhone жены — один аккаунт на всю семью. Интерфейс на русском, разобрался без инструкций. ТСПУ ходит мимо."',
    lifehack: 'Если у вашего провайдера тормозит WireGuard — в настройках VPNTYPE переключитесь на VLESS или Shadowsocks. Они маскируют трафик под обычный HTTPS, и DPI ТСПУ не отличает его от ваших обычных сайтов.',
    link: 'https://vk.cc/cUpjZq', ctaClass: 'cta-primary', ctaText: 'Скачать VPNTYPE — 5 дней за 1 ₽'
  },
  {
    rank: 2, name: 'AdGuard VPN', logoImg: 'adguard-icon.svg', logoClass: 'logo-ag', pinned: true,
    badge: null,
    staticTags: ['Русские разработчики', 'Блокирует рекламу YouTube'],
    tags: ['Для YouTube','Для Telegram','Работает в РФ','Бесплатный'],
    free: 'Бесплатно 3 ГБ в месяц на одно устройство — без регистрации карты.',
    whyTitle: 'Бесплатный VPN для iOS и Android от AdGuard с блокировкой рекламы',
    whyText: 'Одно из немногих VPN-приложений, изначально написанных на русском языке: интерфейс, поддержка, документация — всё родное, без машинного перевода. Делает то, чего не умеют конкуренты: одновременно ВПН и DNS-блокировщик рекламы, в том числе пре-роллов в YouTube. Доступен на Android, iPhone, Windows, macOS и Linux. Подходит даже тем, кто впервые скачивает ВПН без регистрации.',
    pros: ['Полностью русский интерфейс и поддержка — пишут разработчики из РФ', 'Блокировка рекламы YouTube и трекеров на уровне DNS — без сторонних адблоков', '92 Мбит/с — уверенный 1080p и 4K на Android, iPhone и ноутбуке', 'Официально в Google Play и App Store, плюс APK для Android-ТВ'],
    cons: ['3 ГБ/мес на бесплатном тарифе расходуются за 3 часа YouTube в HD', 'No-logs политика без независимого аудита внешней компанией'],
    speed: 92, maxSpeed: 100,
    price: 'от 329 ₽/мес',
    review: '"Скачал бесплатно на телефон и ноутбук — реклама в YouTube исчезла. Интерфейс на русском, всё нажимается одной кнопкой. Маме настроил за 3 минуты."',
    lifehack: 'На бесплатном тарифе переключите YouTube на 480p — трафик расходуется втрое медленнее, и 3 ГБ хватит на 9+ часов фоновой музыки или подкастов.',
    link: 'https://vk.cc/cUxOkm', ctaClass: 'cta-secondary', ctaText: 'Скачать AdGuard VPN'
  },
  {
    rank: 3, name: 'HideMy.Name', logoImg: 'hidemyname-icon.svg', logoClass: 'logo-hn', pinned: true,
    badge: null,
    staticTags: ['Русский ВПН с 2014 года', '80+ стран · 94 Мбит/с'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Работает в РФ','Высокая скорость'],
    free: 'Один день полного доступа бесплатно, далее — от 330 ₽/мес.',
    whyTitle: 'Рабочий VPN для iPhone и Android с 2014 года — стабильность вместо обещаний',
    whyText: 'Сервис работает с 2014 года и пережил несколько волн блокировок российских провайдеров. Русский интерфейс, оплата картой РФ, поддержка отвечает по-русски в течение 15 минут. Доступен на Android, iPhone, Windows, macOS, Linux и в виде расширения для браузеров. 94 Мбит/с в сети МТС — этого хватает на YouTube 4K на ноутбуке, Telegram-звонки на телефоне и Роблокс с пингом 60–80 мс через сервер в Германии.',
    pros: ['11+ лет на рынке, не уходил из РФ во время волн блокировок 2022–2025 годов', '94 Мбит/с — 4K YouTube без буферизации в вечерний час пик', '80+ стран серверов, включая Германию, Нидерланды и Финляндию для низкого пинга', 'Русскоязычная поддержка 24/7, инструкции и обучающие материалы на русском'],
    cons: ['Нет постоянного бесплатного тарифа — только сутки на полный тест', 'No-logs не прошёл независимый аудит крупной аудиторской компании'],
    speed: 94, maxSpeed: 100,
    price: 'от 330 ₽/мес',
    review: '"Год пользуюсь на Android и Windows. Интерфейс на русском, ничего лишнего, поддержка отвечает на родном языке за 12 минут. Один раз пришлось сменить сервер — и всё."',
    lifehack: 'Для YouTube и онлайн-игр выбирайте сервер в Нидерландах или Германии — это ближайшие к России точки, пинг 50–80 мс. Финляндия даёт ещё ниже задержку, но в час пик загружена сильнее.',
    link: 'https://vk.cc/cUxOxl', ctaClass: 'cta-tertiary', ctaText: 'Скачать HideMy.Name'
  },
  {
    rank: 4, name: 'AmneziaVPN', logo: 'AM', logoClass: 'logo-am', pinned: false,
    badge: 'Open-source',
    staticTags: ['Русский интерфейс · open-source', 'AmneziaWG — обходит ТСПУ'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Бесплатный','Без регистрации','Работает в РФ'],
    free: 'Полностью бесплатный клиент на всех платформах — нужен собственный VPS.',
    whyTitle: 'Бесплатный VPN с открытым кодом для iOS и Android — обходит ТСПУ',
    whyText: 'AmneziaVPN разработана русскоязычной командой и заточена под обход блокировок именно в России. Поддерживает уникальный протокол AmneziaWG — модифицированный WireGuard, который обманывает ТСПУ. Приложение бесплатное, открытый код на GitHub, есть на Android, iPhone, Windows, macOS и Linux. Без регистрации в самом приложении. Подходит тем, кто хочет полный контроль и готов настроить собственный сервер за 10 минут.',
    pros: ['Полностью бесплатный, без регистрации, без рекламы и подписок', 'AmneziaWG — авторский протокол с обфускацией, обходит ТСПУ в 2026', 'Открытый код на GitHub — можно проверить безопасность', 'Русский интерфейс, разработка ведётся русскоязычной командой'],
    cons: ['Нужен собственный VPS-сервер — 200–400 ₽/мес у российских хостеров', 'Первоначальная настройка через мастер — не для совсем новичков', 'Без VPS приложение бесполезно — это не готовый сервис'],
    speed: 88, maxSpeed: 100,
    price: 'Бесплатно (нужен VPS)',
    review: '"Развернул на VPS за полчаса по инструкции на YouTube. AmneziaWG проходит там, где обычный WireGuard режется. Ютуб в 1080p летит, плачу только за сервер."',
    lifehack: 'Возьмите самый дешёвый VPS в Нидерландах или Финляндии у русскоязычного хостера. AmneziaVPN сам сгенерирует конфиг — останется отсканировать QR-код в Android-приложении.'
  },
  {
    rank: 5, name: 'Proton VPN', logo: 'PV', logoClass: 'logo-pv', pinned: false,
    badge: null,
    staticTags: ['Безлимит на бесплатном тарифе', 'Швейцария · аудит no-logs'],
    tags: ['Для YouTube','Для Telegram','Бесплатный','Без логов'],
    free: 'Бесплатный тариф без ограничений по трафику — действительно безлимитный.',
    whyTitle: 'Единственный бесплатный VPN для iOS и Android с настоящим безлимитом',
    whyText: 'Швейцарский ВПН с интерфейсом на 30+ языках, включая полностью русскую локализацию. На бесплатном тарифе нет лимита по гигабайтам — можно смотреть Ютуб и сидеть в Телеграме сколько угодно. Доступен на Android, iPhone, Windows, macOS, Linux и Android TV. Исходный код приложения открыт на GitHub, no-logs подтверждён независимым аудитом SEC Consult. Швейцарская юрисдикция — вне действия требований ЕС, США и РФ о хранении логов.',
    pros: ['Бесплатный безлимитный трафик — единственный сервис в подборке без лимита', 'No-logs подтверждён независимым аудитом, репозиторий открыт на GitHub', 'Полная русская локализация на Android, iPhone и Windows', 'Switzerland-based — швейцарское законодательство о приватности'],
    cons: ['На бесплатном тарифе доступен один сервер — в вечерний час пик загружен', 'Скорость ниже платных сервисов (~75 Мбит/с против 90+)', 'Часть серверов нестабильна в России — иногда нужен ручной перебор'],
    speed: 75, maxSpeed: 100,
    price: 'Бесплатно · Plus от 6 €/мес',
    review: '"Скачала бесплатно на телефон и ноутбук — для Телеграма безлимит реальный, за месяц ни разу не уперлась в потолок. Ютуб в 720p смотрю спокойно."',
    lifehack: 'Бесплатный сервер Proton VPN заметно свободнее с 5 до 12 утра по МСК — если включаете ВПН в это время, скорость в 1,5–2 раза выше вечерней.'
  },
  {
    rank: 6, name: 'Hiddify', logo: 'HD', logoClass: 'logo-hd', pinned: false,
    badge: 'Open-source',
    staticTags: ['Все протоколы 2026: VLESS, Reality, Hysteria', 'Русская локализация'],
    tags: ['Для YouTube','Для Telegram','Бесплатный','Без регистрации','Работает в РФ'],
    free: 'Полностью бесплатный клиент с открытым кодом — нужна подписка по протоколу.',
    whyTitle: 'Бесплатный VPN-клиент для iOS и Android под современные протоколы',
    whyText: 'Hiddify — это не VPN-сервис, а универсальный клиент, который понимает все протоколы 2026 года: VLESS-Reality, Hysteria 2, TUIC, Shadowsocks-2022, WireGuard и Tor. Подключаетесь по подписке от любого провайдера (включая VPNTYPE) — клиент сам выбирает оптимальный сервер по задержке. Есть на Андроид, iPhone, Windows, macOS, Linux. Интерфейс переведён на русский. Работает там, где обычные приложения уже не справляются с ТСПУ.',
    pros: ['Поддержка VLESS-Reality — лучший из существующих протоколов обхода DPI в 2026', 'Без регистрации в самом приложении — нужен только конфиг от провайдера', 'Открытый код, доступен в Google Play, App Store и F-Droid', 'Русская локализация, авто-выбор сервера по задержке'],
    cons: ['Не подходит совсем новичкам — нужно понять, что такое подписка по конфигу', 'Без VPN-провайдера бесполезен — это только клиент, а не сервис', 'Иногда требует ручной настройки fragment-параметров под конкретного провайдера'],
    speed: 88, maxSpeed: 100,
    price: 'Клиент бесплатный',
    review: '"Поставил на Pixel 7 и Windows-ноутбук, импортировал подписку из VPNTYPE — Reality проходит везде, где APK-клиенты других сервисов сдались на Ростелекоме."',
    lifehack: 'Если стандартный клиент VPN-сервиса не справляется с ТСПУ — попросите у провайдера ссылку-подписку и импортируйте её в Hiddify. Reality маскирует трафик под обычный TLS-сайт и обходит почти любую блокировку.'
  },
  {
    rank: 7, name: 'Windscribe', logo: 'WS', logoClass: 'logo-ws', pinned: false,
    badge: null,
    staticTags: ['10 ГБ/мес бесплатно', 'Kill switch + WireGuard'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Бесплатный','Без логов'],
    free: '10 ГБ в месяц бесплатно после подтверждения email — без оплаты карты.',
    whyTitle: 'Бесплатный VPN с самым большим лимитом трафика для iOS и Android',
    whyText: '10 ГБ в месяц — примерно 10 часов YouTube в 720p, 30 часов Telegram-звонков или несколько недель базового сёрфинга на ноутбуке. Доступен на Android, iPhone, Windows, macOS, Linux и в виде расширений для браузеров. Нативный WireGuard-клиент, kill switch, R.O.B.E.R.T. — встроенный блокировщик рекламы и трекеров. Канадская юрисдикция, no-logs с публичной историей реакции на запросы.',
    pros: ['10 ГБ бесплатного трафика в месяц — самый щедрый бесплатный тариф в подборке', 'Kill switch и автоблокировка трекеров через R.O.B.E.R.T.', 'WireGuard работает быстро и не съедает батарею при включении в фоне', 'No-logs политика с многолетней репутацией и публичным разбором инцидентов'],
    cons: ['Интерфейс только на английском — русской локализации нет', 'В России работает нестабильно — иногда требуется ручной перебор сервера', 'В вечерний час пик скорость на бесплатных серверах падает заметнее платных'],
    speed: 85, maxSpeed: 100,
    price: 'от $5.75/мес (~540 ₽)',
    review: '"10 ГБ хватает на Telegram на весь месяц плюс пару вечеров YouTube в 720p. Английский интерфейс — единственный минус, но кнопка одна, разобрался."',
    lifehack: 'Подтвердите email и введите промокод TWITTER10 при регистрации — получите 15 ГБ вместо стандартных 10. Без подтверждения email лимит урезан до 2 ГБ.'
  },
  {
    rank: 8, name: '1.1.1.1 + WARP', logo: 'CF', logoClass: 'logo-cf', pinned: false,
    badge: null,
    staticTags: ['Бесплатно, безлимит, без регистрации', 'Cloudflare · Google Play и App Store'],
    tags: ['Для Telegram','Бесплатный','Без регистрации','Высокая скорость'],
    free: 'Бесплатно и безлимитно — оплата только за дополнительный WARP+.',
    whyTitle: 'Бесплатный VPN без регистрации от Cloudflare для iOS и Android',
    whyText: '1.1.1.1 — это официальное приложение Cloudflare, одной из крупнейших инфраструктурных компаний интернета. Включает WARP — VPN-режим на собственном протоколе на базе WireGuard. Бесплатно, без регистрации, без рекламы, без лимита трафика. Доступен на Android, iPhone, Windows и macOS. По строгости определения это не классический ВПН: не маскирует страну происхождения, но шифрует весь трафик и обходит часть провайдерских блокировок — например, замедление Телеграма.',
    pros: ['Полностью бесплатный, без регистрации, без лимита по трафику', 'Официальное приложение Cloudflare в Google Play и App Store — без вирусов', 'Шифрует трафик и DNS-запросы — защита на публичных Wi-Fi в кафе и метро', 'Прост как мессенджер: установил, нажал одну кнопку — работает'],
    cons: ['Не меняет страну: для разблокировки геозависимого контента не подходит', 'В России работает не у всех провайдеров — иногда требует включения MASQUE', 'Ютуб через WARP открывается, но без полного обхода замедления ТСПУ'],
    speed: 90, maxSpeed: 100,
    price: 'Бесплатно · WARP+ от $4.99/мес',
    review: '"Скачал бесплатный ВПН без регистрации для Телеграма — открыл, нажал кнопку — мессенджер заработал. Для Ютуба в РФ скорости иногда не хватает."',
    lifehack: 'Если WARP не подключается у вашего провайдера — в настройках 1.1.1.1 переключите протокол с WireGuard на MASQUE. Этот режим маскирует трафик под обычный HTTPS и обходит большинство DPI-блокировок 2026 года.'
  },
  {
    rank: 9, name: 'PlanetVPN', logo: 'PL', logoClass: 'logo-pl', pinned: false,
    badge: null,
    staticTags: ['Русский интерфейс · 5 локаций бесплатно', 'Проще некуда — для бабушек и дедушек'],
    tags: ['Для YouTube','Для Telegram','Бесплатный','Работает в РФ'],
    free: 'Бесплатно: безлимит, 5 серверов (США, Канада, Нидерланды, Германия, Великобритания).',
    whyTitle: 'Самый простой бесплатный VPN для айфона и андроида — без регистрации',
    whyText: 'PlanetVPN (он же FreeVPN.org) — приложение для тех, кому надо «просто работало». Полностью русский интерфейс, одна большая зелёная кнопка, ниже список флагов стран. Без регистрации, без лимита по трафику. Доступен на Android, iPhone, Windows, macOS и в Chrome. Скорость 60–70 Мбит/с — хватит на YouTube в 1080p и Telegram. На бесплатном тарифе — 5 проверенных локаций, без рекламы внутри приложения.',
    pros: ['Полностью русский интерфейс, понятный пожилым родственникам и детям', 'Бесплатный безлимитный трафик без регистрации и SMS', '5 локаций бесплатно: США, Канада, Нидерланды, Германия, Великобритания', 'Есть на всех платформах: Android, iPhone, Windows, macOS, Chrome'],
    cons: ['В вечерний час пик скорость на бесплатных серверах режется', 'Нет современных протоколов вроде VLESS и Reality — только OpenVPN и IKEv2', 'Премиум-тариф дороже большинства русских аналогов из подборки'],
    speed: 65, maxSpeed: 100,
    price: 'от $11.95/мес (~1100 ₽)',
    review: '"Поставила маме на телефон — открыл, нажал кнопку, Ютуб заработал. На русском, без регистрации. Для родителей — лучший вариант."',
    lifehack: 'Если бесплатный сервер тормозит — в приложении переключите страну: Германия и Нидерланды обычно свободнее, чем США. Для YouTube ставьте 720p, чтобы избежать буферизации.'
  },
  {
    rank: 10, name: 'Outline VPN', logo: 'OL', logoClass: 'logo-ol', pinned: false,
    badge: null,
    staticTags: ['Open-source · от Google Jigsaw', 'Shadowsocks — обходит DPI ТСПУ'],
    tags: ['Бесплатный','Для YouTube','Без логов','Работает в РФ'],
    free: 'Бесплатный клиент при наличии своего VPS — оплата только за сервер.',
    whyTitle: 'Бесплатный VPN для iOS и Android с полным контролем над сервером',
    whyText: 'Outline создан подразделением Google Jigsaw против цензуры. Это пара «сервер + клиент» на базе Shadowsocks — протокола, который маскирует трафик под обычные HTTPS-пакеты. Между вами и сетью нет посредника-провайдера: вы сами разворачиваете VPS на Oracle Cloud или DigitalOcean и управляете им. Подходит, если важна полная анонимность и есть базовые технические навыки. Клиент есть на Android, iPhone, Windows, macOS, Linux, ChromeOS.',
    pros: ['Полностью бесплатный клиент — оплата только за VPS (от $0 на Oracle Always Free)', 'Открытый код, аудит безопасности от Radically Open Security', 'Shadowsocks хорошо обходит DPI российских провайдеров', 'Официальное приложение Outline в Google Play и App Store без рекламы и трекеров'],
    cons: ['Нужен собственный VPS-сервер — без него приложение не работает', 'Первоначальная настройка через Outline Manager — не для новичков', 'Нет встроенного kill switch и автозапуска при загрузке устройства'],
    speed: 80, maxSpeed: 100,
    price: 'Бесплатно (нужен VPS)',
    review: '"Развернул на бесплатном Oracle Cloud за час, скачал клиент в Google Play, ввёл ключ — Ютуб 4K летает. Никакой сторонней компании в цепочке."',
    lifehack: 'Oracle Cloud Always Free даёт два VPS бесплатно навсегда — идеальная основа для Outline VPN без ежемесячных трат. Шаги: создайте VM Ubuntu Minimal, поставьте Outline Manager на ПК, скиньте ключ доступа на телефон.'
  }
];

function getRankBadge(rank) {
  if (rank === 1) return '<span class="card-rank-badge rank-gold">🥇 ТОП-1 · Выбор редакции</span>';
  if (rank === 2) return '<span class="card-rank-badge rank-silver">🥈 ТОП-2</span>';
  if (rank === 3) return '<span class="card-rank-badge rank-bronze">🥉 ТОП-3</span>';
  return `<span class="card-rank-badge rank-default">#${rank}</span>`;
}

function renderCard(vpn) {
  const speedPct = Math.round((vpn.speed / 100) * 100);
  const cardTags = vpn.staticTags.map(t => `<span class="card-tag card-tag-static">${t}</span>`).join('');
  const pros = vpn.pros.map(p => `<li>${p}</li>`).join('');
  const cons = vpn.cons.map(c => `<li>${c}</li>`).join('');

  const logoHtml = vpn.logoImg
    ? `<img src="${vpn.logoImg}" alt="${vpn.name}" class="card-logo-img" loading="lazy">`
    : `<div class="card-logo ${vpn.logoClass}">${vpn.logo}</div>`;

  return `
  <div class="vpn-card rank-${vpn.rank}" data-tags='${JSON.stringify(vpn.tags)}' data-pinned="${vpn.pinned}">
    <div class="card-header">
      ${logoHtml}
      <div class="card-title-area">
        ${getRankBadge(vpn.rank)}
        <h3 class="card-name">${vpn.name}</h3>
        <div class="card-tags-row">${cardTags}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="free-badge"><div class="free-badge-icon">🎁</div><div><span>Бесплатно / тест:</span> ${vpn.free}</div></div>
      <div class="why-block">
        <h4>${vpn.whyTitle}</h4>
        <p>${vpn.whyText}</p>
      </div>
      <div class="pros-cons">
        <div class="pros-cons-col pros-col">
          <h5>Плюсы</h5>
          <ul>${pros}</ul>
        </div>
        <div class="pros-cons-col cons-col">
          <h5>Минусы</h5>
          <ul>${cons}</ul>
        </div>
      </div>
      <div class="speed-price">
        <div class="metric">
          <div class="metric-label">Скорость</div>
          <div class="metric-value">${vpn.speed}</div>
          <div class="metric-unit">Мбит/с</div>
          <div class="speed-bar-wrap"><div class="speed-bar"><div class="speed-bar-fill" style="width:${speedPct}%"></div></div></div>
        </div>
        <div class="metric">
          <div class="metric-label">Цена</div>
          <div class="metric-value" style="font-size:14px;padding-top:4px">${vpn.price}</div>
        </div>
      </div>
      <div class="review-block">${vpn.review}</div>
      <div class="lifehack">
        <div class="lifehack-icon">💡</div>
        <div><div class="lifehack-label">Совет</div><p>${vpn.lifehack}</p></div>
      </div>
    </div>
    ${vpn.pinned && vpn.link ? `<div class="card-cta"><a href="${vpn.link}" class="cta-btn ${vpn.ctaClass}" target="_blank" rel="nofollow">${vpn.ctaText} →</a></div>` : ''}
  </div>`;
}

function renderGrid(activeTag) {
  const grid = document.getElementById('ratingGrid');
  const pinned = vpns.filter(v => v.pinned);
  const rest = vpns.filter(v => !v.pinned);

  const matchTag = (vpn) => {
    if (activeTag === 'all') return true;
    return vpn.tags.includes(activeTag);
  };

  const pinnedFiltered = pinned.filter(matchTag);
  const restFiltered = rest.filter(matchTag);

  let html = '';

  if (pinnedFiltered.length > 0) {
    html += `<div class="pinned-label">Выбор редакции — ТОП-3 рабочих VPN для iOS и Android</div>`;
    html += `<div class="cards-grid" id="pinnedGrid">`;
    pinnedFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (restFiltered.length > 0) {
    html += `<div class="rest-label">Позиции 4–10 — бесплатные VPN для iOS и Android</div>`;
    html += `<div class="cards-grid-two" id="restGrid">`;
    restFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (pinnedFiltered.length === 0 && restFiltered.length === 0) {
    html = `<div style="padding:32px;text-align:center;color:var(--text-muted);background:var(--card);border-radius:var(--radius)">По этому фильтру ВПН не найдено</div>`;
  }

  grid.innerHTML = html;
}

renderGrid('all');

document.getElementById('filterTags').addEventListener('click', function(e) {
  const btn = e.target.closest('.filter-tag');
  if (!btn) return;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(btn.dataset.tag);
});

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

const burger = document.getElementById('headerBurger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    });
  });
}

const navSections = ['rating','table','by-task','platforms','scams','faq','reviews']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
navSections.forEach(el => sectionObserver.observe(el));
