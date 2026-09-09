const shared = {
  en: {
    nav: { home: "Home", about: "About us", services: "Services", contact: "Contact", work: "Work", call: "Strategy call" },
    common: { discover: "Request a discovery call", services: "Explore services", work: "View selected work", loading: "Loading…", retry: "Try again" },
    home: {
      hero: {
        eyebrow: "Boutique digital studio · Switzerland & worldwide",
        title: "Digital experiences that feel human—and work beautifully.",
        lead: "Trustence brings strategy, design, software engineering, and intelligent automation into one focused team.",
        body: "Tell us where the friction is. We will help you shape a clear, credible digital path forward.",
        secondary: "See how we work",
        trust: ["Clear scope", "Direct access to the team", "Built for long-term ownership"],
        cardEyebrow: "A calmer way to build",
        cardTitle: "From first conversation to confident launch.",
        steps: ["Understand the real objective", "Shape the right experience", "Build, test, and hand over clearly"],
        reply: "Thoughtful reply within one business day",
      },
      expertise: {
        eyebrow: "A boutique digital practice",
        title: "One team for the complete digital experience.",
        body: "Trustence brings strategy, design, software engineering, automation, search, and visual communication into one considered process—giving ambitious organisations fewer handovers and a more coherent result.",
        items: [
          ["Digital direction", "We define the audience, commercial objective, user journey, and technical priorities before a single interface is designed."],
          ["Bespoke web experiences", "We design and engineer distinctive, accessible websites and platforms with purposeful interaction and maintainable technology."],
          ["Automation and integration", "We connect forms, CRMs, APIs, data, and internal tools through carefully designed n8n workflows and custom integrations."],
          ["Visibility and growth", "We strengthen discoverability with technical SEO, structured content, performance, analytics, and considered post-launch improvement."],
        ],
      },
      portfolio: { eyebrow: "Selected work", title: "Digital experiences with a point of view.", body: "A curated look at the websites and platforms we have shaped through strategy, design, and engineering.", explore: "Explore the project", all: "View all work", empty: "No projects are available yet." },
      team: { titleBefore: "A multidisciplinary team behind", body: "Engineers, designers, strategists, and growth specialists working as one focused digital partner.", more: "More expertise", meet: "Meet the team", missing: "No team members found." },
      about: { eyebrow: "The Trustence standard", title: "Quiet confidence, engineered into every detail.", body: "We combine commercial thinking, restrained design, and dependable engineering to create digital experiences that feel unmistakably yours. Every decision has a purpose: strengthen perception, simplify the journey, and support measurable business value.", point1: "Discreet by nature", point1Body: "Clear communication, thoughtful handling of your information, and no unnecessary complexity.", point2: "From direction to ownership", point2Body: "One coherent process from first decision to launch, handover, and the next stage of growth.", studio: "About the studio", discuss: "Discuss a project" },
      discover: { title: "The right digital investment begins with a precise conversation." },
      services: { title: "Specialist capabilities. One considered digital partner.", items: [["Digital strategy and systems shaped around your business.", "We begin with the commercial objective, then define the right mix of experience design, architecture, integrations, and technology. The result is tailored, coherent, and built for ownership.", "Explore capabilities"], ["Bespoke websites with presence, performance, and purpose.", "Distinctive interfaces are paired with accessible development, technical SEO, and careful performance work—so the experience is as dependable as it is refined.", "View web services"], ["Automation and long-term digital stewardship", "We design n8n automations, custom integrations, maintenance plans, and measured optimisation around the systems your team relies on. Scope, ownership, and the path forward remain clear after launch.", "Explore automation"]] },
      faq: { title: "Clarity before commitment.", body: "Explore direct answers about scope, technology, timelines, ownership, and working together.", button: "Explore common questions" },
    },
    footer: { intro: "A boutique studio for considered digital work.", body: "Bespoke web experiences, custom systems, intelligent automation, and digital growth—designed as one coherent whole.", email: "Your email address", contact: "Contact me", prefer: "Prefer email? Leave your address and our team will start the conversation.", quick: "Quick links", resources: "Resources", follow: "Follow us", legal: "Legal", selected: "Selected work", studioEmail: "Email the studio", careers: "Careers", telegram: "Telegram account", linkedin: "LinkedIn profile", instagram: "Instagram gallery", whatsapp: "WhatsApp account", privacy: "Privacy policy", terms: "Terms of use", copyright: "Copyright notice", rights: "All rights reserved." },
  },
  fa: {
    nav: { home: "خانه", about: "درباره ما", services: "خدمات", contact: "تماس", work: "نمونه‌کارها", call: "جلسه راهبردی" },
    common: { discover: "درخواست جلسه آشنایی", services: "مشاهده خدمات", work: "دیدن نمونه‌کارها", loading: "در حال بارگذاری…", retry: "تلاش دوباره" },
    home: {
      hero: {
        eyebrow: "استودیوی دیجیتال بوتیک · سوئیس و سراسر جهان",
        title: "تجربه‌های دیجیتالی که انسانی‌اند و دقیق کار می‌کنند.",
        lead: "تراستنس، استراتژی، طراحی، مهندسی نرم‌افزار و اتوماسیون هوشمند را در یک تیم متمرکز کنار هم می‌آورد.",
        body: "از نقطه‌ای که اصطکاک ایجاد شده برایمان بگویید؛ ما مسیر دیجیتال روشن و قابل اتکایی برای ادامه می‌سازیم.",
        secondary: "روش همکاری ما",
        trust: ["دامنه کار شفاف", "ارتباط مستقیم با تیم", "ساخته‌شده برای مالکیت بلندمدت"],
        cardEyebrow: "ساختن، با آرامش بیشتر",
        cardTitle: "از اولین گفت‌وگو تا یک انتشار مطمئن.",
        steps: ["شناخت هدف واقعی کسب‌وکار", "طراحی تجربه مناسب", "ساخت، آزمون و تحویل شفاف"],
        reply: "پاسخ دقیق در یک روز کاری",
      },
      expertise: {
        eyebrow: "یک استودیوی دیجیتال بوتیک",
        title: "یک تیم برای تمام تجربه دیجیتال شما.",
        body: "تراستنس، استراتژی، طراحی، مهندسی نرم‌افزار، اتوماسیون، جست‌وجو و ارتباطات بصری را در یک فرایند منسجم ترکیب می‌کند؛ یعنی تحویل‌های پراکنده کمتر و نتیجه‌ای یکپارچه‌تر.",
        items: [
          ["راهبرد دیجیتال", "پیش از طراحی اولین رابط، مخاطب، هدف تجاری، مسیر کاربر و اولویت‌های فنی را مشخص می‌کنیم."],
          ["تجربه‌های وب اختصاصی", "وب‌سایت‌ها و پلتفرم‌های متمایز، دسترس‌پذیر و قابل نگهداری را با تعاملات هدفمند طراحی و مهندسی می‌کنیم."],
          ["اتوماسیون و یکپارچه‌سازی", "فرم‌ها، CRM، API، داده‌ها و ابزارهای داخلی را با گردش‌کارهای دقیق n8n و اتصال‌های اختصاصی به هم متصل می‌کنیم."],
          ["دیده‌شدن و رشد", "با سئوی فنی، محتوای ساختاریافته، عملکرد، تحلیل داده و بهبود پس از انتشار، قابلیت کشف برند را تقویت می‌کنیم."],
        ],
      },
      portfolio: { eyebrow: "نمونه‌کارهای منتخب", title: "تجربه‌های دیجیتال با هویتی مشخص.", body: "نگاهی گزیده به وب‌سایت‌ها و پلتفرم‌هایی که با استراتژی، طراحی و مهندسی شکل داده‌ایم.", explore: "مشاهده پروژه", all: "همه نمونه‌کارها", empty: "هنوز پروژه‌ای برای نمایش وجود ندارد." },
      team: { titleBefore: "تیمی چندتخصصی در قلب", body: "مهندسان، طراحان، استراتژیست‌ها و متخصصان رشد که به‌عنوان یک شریک دیجیتال متمرکز کنار هم کار می‌کنند.", more: "تخصص‌های بیشتر", meet: "آشنایی با تیم", missing: "عضوی برای نمایش پیدا نشد." },
      about: { eyebrow: "استاندارد تراستنس", title: "اعتمادی آرام که در تمام جزئیات مهندسی شده است.", body: "تفکر تجاری، طراحی سنجیده و مهندسی قابل اتکا را ترکیب می‌کنیم تا تجربه‌ای دیجیتال بسازیم که مختص شما باشد. هر تصمیم یک هدف روشن دارد: تقویت تصویر برند، ساده‌کردن مسیر کاربر و خلق ارزش قابل اندازه‌گیری.", point1: "محرمانگی در ذات همکاری", point1Body: "ارتباط شفاف، نگهداری مسئولانه از اطلاعات و حذف پیچیدگی‌های غیرضروری.", point2: "از جهت‌گیری تا مالکیت", point2Body: "فرایندی یکپارچه از نخستین تصمیم تا انتشار، تحویل و مرحله بعدی رشد.", studio: "درباره استودیو", discuss: "گفت‌وگو درباره پروژه" },
      discover: { title: "یک سرمایه‌گذاری دیجیتال درست، با گفت‌وگویی دقیق آغاز می‌شود." },
      services: { title: "تخصص‌های عمیق؛ یک شریک دیجیتال منسجم.", items: [["راهبرد و سیستم‌های دیجیتال متناسب با کسب‌وکار شما", "از هدف تجاری آغاز می‌کنیم و سپس ترکیب درست طراحی تجربه، معماری، یکپارچه‌سازی و فناوری را تعریف می‌کنیم؛ نتیجه، اختصاصی، منسجم و قابل مالکیت است.", "مشاهده توانمندی‌ها"], ["وب‌سایت‌های اختصاصی با هویت، سرعت و هدف", "رابط‌های متمایز را با توسعه دسترس‌پذیر، سئوی فنی و بهینه‌سازی عملکرد همراه می‌کنیم تا تجربه نهایی به همان اندازه که زیباست، قابل اتکا باشد.", "خدمات وب"], ["اتوماسیون و همراهی دیجیتال بلندمدت", "اتوماسیون‌های n8n، اتصال‌های اختصاصی، برنامه نگهداری و بهینه‌سازی پیوسته را حول سیستم‌های واقعی تیم شما طراحی می‌کنیم. دامنه، مالکیت و قدم بعدی همیشه شفاف می‌ماند.", "اتوماسیون هوشمند"]] },
      faq: { title: "شفافیت، پیش از تعهد.", body: "پاسخ‌های مستقیم درباره دامنه کار، فناوری، زمان‌بندی، مالکیت و شیوه همکاری را بخوانید.", button: "پرسش‌های متداول" },
    },
    footer: { intro: "استودیویی بوتیک برای کار دیجیتال سنجیده.", body: "تجربه‌های وب اختصاصی، سیستم‌های سفارشی، اتوماسیون هوشمند و رشد دیجیتال؛ طراحی‌شده به‌عنوان یک کل منسجم.", email: "نشانی ایمیل شما", contact: "با من تماس بگیرید", prefer: "ایمیل را ترجیح می‌دهید؟ نشانی خود را بگذارید تا تیم ما گفت‌وگو را آغاز کند.", quick: "دسترسی سریع", resources: "منابع", follow: "شبکه‌های اجتماعی", legal: "حقوقی", selected: "نمونه‌کارهای منتخب", studioEmail: "ایمیل به استودیو", careers: "همکاری با ما", telegram: "تلگرام", linkedin: "لینکدین", instagram: "اینستاگرام", whatsapp: "واتس‌اپ", privacy: "حریم خصوصی", terms: "شرایط استفاده", copyright: "حقوق محتوا", rights: "تمام حقوق محفوظ است." },
  },
};

export function getCopy(locale) {
  return shared[locale === "fa" ? "fa" : "en"];
}
