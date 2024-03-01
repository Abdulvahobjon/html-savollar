// data start
let dataQuestion = [
  {
    id: 1,
    title: "<i>HTML</i> nima?",
    text: "HTML (inglizcha: Hypertext Markup Language — hipermatnli belgilash tili)",
    level: "oddiy",
  },

  {
    id: 2,
    title: "HTML da qanday qilib <i>style</i> yozsa boladi?",
    text: "style Tegini ochib ichiga yozsa boladi, yoki css ochib ulash",
    level: "oddiy",
  },

  {
    id: 3,
    title: "<i>HTML ga qanday qilib boshqa dasturlash tillarini ulash mumkum</i>?",
    text: "Link tegi orqali ulash mumkun",
    level: "oddiy",
  },

  {
    id: 4,
    title: "HTML-da <i>komentarya</i> qanday yaratasiz?",
    text: "html-da komentarya yaratish uchun <>\<!--   --\></> shu belgilardan foydalanasiz, va u belgilar ichidagi barcha yozuvlar komentarya hisoblanadi ",
    level: "oddiy",
  },

  {
    id: 5,
    title: "Eng katta <i>sarlavha</i> uchun to'g'ri HTML elementi qanday?",
    text: "H1 tegi title uchun ishlatiladigan.",
    level: "oddiy",
  },

  {
    id: 6,
    title: "Satr uzilishini kiritish uchun to'g'ri <i>HTML elementi</i> nima?",
    text: "Break tegi dan foydalanamiz",
    level: "oddiy",
  },

  {
    id: 7,
    title: "Fon rangini qo'shish uchun to'g'ri <i>HTML kodi</i> nima??",
    text: "body style=background-color:yellow;.",
    level: "oddiy",
  },

 
  {
    id: 8,
    title: " <i>Muhim matnni aniqlash</i> uchun to'g'ri HTML elementi qanday teg?",
    text: "!Important.",
    level: "oddiy",
  },

  {
    id: 9,
    title: "<i>Giperhavola</i> yaratish uchun to'g'ri HTML elementi  nima?",
    text: "a href=http://www.w3schools.comaW3Schools a",
    level: "oddiy",
  },

  {
    id: 10,
    title:
      "Html da <i>Yopuvchi</i> tegni ko'rsatish uchun qaysi belgi ishlatiladi?.",
    text: "/ belgisi ishlatiladi.",
    level: "o'rta",
  },

  {
    id: 11,
    title: "<i>h1 tegi</i> nima vazifani bajaradi ?",
    text: "h1 - tegi sayt sahifasida faqatgina <b>sarlavha</b> vazifasini bajaradi. ",
    level: "oddiy",
  },


  {
    id: 12,
    title: "<i>h2, h3, h4, h5, h6,</i> teglari nima vazifani bajaradi?",
    text: "Ular saytda deyarli <b>p</b> tegiga oxshab ketadi.Lekin ular aynan osha vazifani bajarmaydi.Ular asosan kichkina bolimlarga sarlavha yoki biror bir matn bolib keladi.Masalan:hero bolimini pastlarida <b>sarlavha</b> yoki <b>Sozboshi</b> bolib keladi.",
    level: "o'rta",
  },

  {
    id: 13,
    title: "<i>P</i> tegi qanday vazifani bajaradi ?",
    text: "P - saytlarda asosan <b>matn</b> vazifasini bajarib keladi.",
    level: "oddiy",
  },

  {
    id: 14,
    title: "<i>Lorem</i> nima ?",
    text: "Lorem - bu random sozlar.Asosan <b>p</b> tegini ichiga yoziladi.",
    level: "o'rta",
  },
  {
    id: 15,
    title: "<i>Img</i> haqida aytib bering ?",
    text: "Img - bu <b>rasmni</b> saytga joylash vazifasini bajaruvchi teg.",
    level: "oddiy",
  },

  {
    id: 16,
    title: "Nima uchun sizga <i>HTML</i> kerak ?",
    text: "Chunki saytni <b>Skelet</b> qismini bajaruvchi til.U siz <b>Css</b> yoki <b>JSON</b> bolmaydi.",
    level: "o'rta",
  },

  {
    id: 17,
    title: " <i>video</i> nima ?",
    text: "Video - <b>Video</b> qoyish tegi.",
    level: "oddiy",
  },

  {
    id: 18,
    title: " <i>Link</i> nima?",
    text: "Link - bu teg bolib,  <b>Css , Javascript</b>  papkasini <b>HTML</b> papkasiga ulash voitasi.",
    level: "oddiy",
  },

  {
    id: 19,
    title: " <i>Header</i> nima?",
    text: "<b>Header</b> - bu sayt sahifasining eng birinhi va tepa qismi hisoblanadi.",
    level: "oddiy",
  },

  {
    id: 20,
    title: "<i>Hero</i> nima ?",
    text: "<b>Hero</b> - bu saytning <b>Headerdan</b> pastki qismi hisoblanadi va osha <b>Hero</b> qismiga sarlavha qoyiladi ya'ni <b>h1</b>.",
    level: "qiyin",
  },

  {
    id: 21,
    title: "HTML-da Qanday qilib <i>yog'on text</i> yozsa boladi?",
    text: "b tegiga yozsa yog'on text boladi.",
    level: "qiyin",
  },

  {
    id: 22,
    title: "HTML-da <i>Meta</i> tegi nima?",
    text: "Meta teg kalit so'zlar",
    level: "qiyin",
  },
  {
    id: 23,
    title: "<i>DOCTYPE</i>  bu nima?",
    text: "Bu html ni versiyasini bildiradi",
    level: "oddiy",
  },

  {
    id: 24,
    title: "HTML da <i>section</i> bu nima?",
    text: "section bu aloxida bolim va bolimlarni bir biridan ajratib turishini bajaradi",
    level: "oddiy",
  },

  {
    id: 25,
    title: "HTML-da <i>ul</i> tegi nima vazifani bajaradi?",
    text: "ul bu tartibsiz list.",
    level: "o'rta",
  },

  {
    id: 26,
    title: "HTML-da<i>ol</i> tegi nima vazifani bajaradi?",
    text: "ol bu tartibli list.",
    level: "o'rta",
  },

  {
    id: 27,
    title: "HTML-da <i>li</i> ning vazifasi nima?",
    text: "li bu listning yani ul yoki ol di ichida yoziladigan teg ",
    level: "oddiy",
  },

  {
    id: 28,
    title: "HTML-da <i>U</i> tegi nima vazifani bajaradi?",
    text: "u tegi yani underline bolib tagida chiziqli text.",
    level: "o'rta",
  },

  {
    id: 29,
    title: "HTML-da <i>em</i> tegi nima vazifani bajaradi",
    text: "i tegi ni eski versiyasi",
    level: "o'rta",
  },

  {
    id: 30,
    title: "HTML-da <i>del</i> tegi nima vazifani bajaradi",
    text: "ochirilgan text.",
    level: "o'rta",
  },
  {
    id: 31,
    title: "<i>Button</i> nima?",
    text: "Button - bu <b>tugma</b>.",
    level: "o'rta",
  },

  {
    id: 32,
    title: "<i>hr</i> nima vazifani bajaradi?",
    text: "hr - bu <b>pastki chiziq</b>",
    level: "oddiy",
  },

  {
    id: 33,
    title:
      "<i>i</i> nima?",
    text: "i - tegi bu yozuvni mana bu korinishi: <i>salom</i>",
    level: "o'rta",
  },

  {
    id: 34,
    title:
      "<i>Input</i> nima?",
    text: "Input - bu <b>qidirish</b> bolimi.",
    level: "oddiy",
  },

  {
    id: 35,
    title:
      "<i>br</i> nima?",
    text: "br - bu <b>pastka joy tashlash</b>.",
    level: "oddiy",
  },

  {
    id: 36,
    title: "<i>div</i> nima ?",
    text: "<b>div - bu <b>bolim</b> hosil qilish.",
    level: "oddiy",
  },

  {
    id: 37,
    title: "<i>class</i> nima ?",
    text: "class - bu divga yoki teglarga <b>nom yoki ism</b> berish.",
    level: "oddiy",
  },

  {
    id: 38,
    title: "<i>body</i> nima ?",
    text: "Body - bu saytni hammayogi.Body ozi sayt deyarli.",
    level: "oddiy",
  },

  {
    id: 39,
    title:
      "<i>table</i> nima?",
    text: "Table - bu <b>jadval</b>.",
    level: "oddiy",
  },

  {
    id: 40,
    title: "<i>a</i> tegi nima vazifani bajaradi ?",
    text: "a - tegi ssilka yani <b>link</b> vazifani bajaradi.",
    level: "o'rta",
  },

  {
    id: 41,
    title: "HTML-da <i>textarea</i> tegi nima?",
    text: "textarea bu katta textlar yozish uchun masalan izohlar uchun.",
    level: "o'rta",
  },

  {
    id: 42,
    title: "HTML-da<i>Map</i> tegi nima vazifani bajaradi",
    text: "Bu xaritani rasmini chiqarib beradi.",
    level: "o'rta",
  },

  {
    id: 43,
    title: "HTML-da <i>title</i> tegi nima vazifani bajaradi",
    text: "saytning nomi.",
    level: "qiyin",
  },

  {
    id: 44,
    title: "HTML <i>teglari</i> nima??",
    text: "Elementlarni to'g'ri va mos formatda joylashtirish uchun biz HTML teglaridan foydalanamiz. Teglar HTML tarkibidan ajratish uchun < va > belgilaridan foydalanadi.",
    level: "oddiy",
  },

  {
    id: 45,
    title: "HTML <i>atributlar</i> nima?",
    text: "Atributlar HTML tegiga qo'shilishi mumkin bo'lgan xususiyatlardir. Bu atributlar tegning oʻzini tutishi yoki koʻrinishini oʻzgartiradi. Masalan, <img> tegida src atributi mavjud bo'lib, siz undan rasm ko'rsatilishi kerak bo'lgan manbani qo'shish uchun foydalanasiz.",
    level: "oddiy",
  },

  {
    id: 46,
    title: "HTMLda <i>tanlash maydoni</i> nima?",
    text: "Marquee veb-sahifadagi matnni aylantirish uchun ishlatiladi. U avtomatik ravishda rasm yoki matnni yuqoriga, pastga, chapga yoki o'ngga aylantiradi. Ajratish uchun ariza berish uchun siz </marquee> teglaridan foydalanishingiz kerak.",
    level: "oddiy",
  },

  {
    id: 47,
    title: "HTMLdagi <i>element</i> nima?",
    text: "HTML elementi veb-sahifaning ma'lum bir qismini belgilaydigan teglar to'plamidir. U boshlang'ich teg, tarkib va ​​yakuniy tegdan iborat.",
    level: "oddiy",
  },

  {
    id: 48,
    title: "<i>HTML</i> va <i>CSS</i> o'rtasidagi farq nima?",
    text: "HTML veb-sahifaning tuzilishi va mazmunini yaratish uchun, CSS esa sahifaning ko'rinishi va tartibini aniqlash uchun ishlatiladi.",
    level: "oddiy",
  },

  {
    id: 49,
    title: "<i>Teglar</i> va  <i>elementlari</i> bir xil narsami?",
    text: "Yo'q, HTML teglari veb-sahifaning strukturasini aniqlash uchun ishlatiladi va HTML elementlari veb-sahifaning muayyan qismini belgilaydigan teglar to'plamidan iborat.",
    level: "o'rta",
  },

  {
    id: 50,
    title:
      "<i>Sitebar</i> nima?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 51,
    title: "<i>Border</i> nima ?",
    text: "Boreder - bu osha tegni yoki sozni <b>chegarassi</b>.",
    level: "oddiy",
  },

  {
    id: 52,
    title: "<i>DD</i> nima ?",
    text: "Web sahifalar yozish tili",
    level: "oddiy",
  },


  {
    id: 54,
    title: "<i>Higher-order functions</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 55,
    title: "<i>Footer</i> nima ?",
    text: "Footer - bu saytning eng <b>pastki</b> qismi.",
    level: "oddiy",
  },

  {
    id: 56,
    title: "<i>Lang</i> haqida aytib bering.",
    text: "Lang - bu saytning tili.",
    level: "oddiy",
  },

  {
    id: 57,
    title: "<i>href</i> haqida aytib bering.",
    text: "href - bu <i>a</i> tegini atributi.Uni ichiga linklar qoyiladi.",
    level: "oddiy",
  },

  {
    id: 58,
    title: "<i>data</i> nima ?",
    text: "data - bu kun sana.",
    level: "oddiy",
  },

  {
    id: 59,
    title: "<i>time</i>  nima ?",
    text: "Time - bu <b>vaqt</b>.",
    level: "oddiy",
  },

  {
    id: 60,
    title: "<i>style</i> nima?",
    text: "Style - bu <b>HTMLda</b> <b>CSS</b> yozish qobiliyatini beruvchi teg.",
    level: "oddiy",
  },

  {
    id: 61,
    title: "HTMLda <i>bo'sh elementlar</i> nima?",
    text: "HTMLdagi bo'sh elementlar teglar bo'lib, ular yopish tegini talab qilmaydi. Ular qo'shimcha ma'lumot talab qilmaydigan tasvirlar, qatorlar va boshqa tarkiblarni kiritish uchun ishlatiladi.",
    level: "oddiy",
  },

  {
    id: 62,
    title: "<i>Bo'sh joyni yoqotishni afzalligi nimada?</i>",
    text: "HTML-dagi bo'shliqlarni yoqotish veb-sahifalar hajmini kamaytirishga yordam beradi va ularni tezroq yuklaydi. Bu HTML elementlari orasidagi keraksiz bo'shliqlarni olib tashlashni o'z ichiga oladi.",
    level: "oddiy",
  },

  {
    id: 63,
    title: "HTML <i>ob'ektlari</i> nima?",
    text: "HTML ob'ektlari klaviaturada terib bo'lmaydigan belgilarni ifodalash uchun ishlatiladigan maxsus belgilar. Ular ko'pincha maxsus belgilar va xorijiy belgilarni ko'rsatish uchun ishlatiladi.",
    level: "oddiy",
  },

  {
    id: 64,
    title: "HTML-ga <i>mualliflik huquqi</i> belgisini qanday kiritish mumkin?",
    text: "HTML faylga © yoki © dan foydalanib mualliflik huquqi belgisini kiritishingiz mumkin.",
    level: "oddiy",
  },


  {
    id: 66,
    title: "<i>Semantik HTML</i> nima?",
    text: "Semantik HTML kodlash uslubidir. Bu kontentning semantikasini yoki ma'nosini yaxshilash uchun HTML belgilaridan foydalanish.",
    level: "oddiy",
  },

  {
    id: 67,
    title: "HTMLda <i>SVG</i> nima?",
    text: "HTML SVG vektor yoki rastrli grafiklarni tasvirlash uchun ishlatiladi. SVG tasvirlari va ularning xatti-harakatlari XML matn fayllarida aniqlanadi.",
    level: "oddiy",
  },

  


  {
    id: 70,
    title: "HTMLda <i>alt</i> atribut nima?",
    text: "Alt atributi ba'zi texnik muammolar tufayli rasmni yuklash mumkin bo'lmaganda tasvir o'rniga matnni ko'rsatish uchun ishlatiladi.",
    level: "oddiy",
  },

  {
    id: 82,
    title: "HTML veb-sahifasiga <i>JavaScript-ni</i> qanday qo'shish mumkin?",
    text: "Brauzer hujjatning ushbu qismiga yetib borishi bilanoq bajariladigan HTML kodining istalgan joyida skript blokini belgilashingiz mumkin. Shuning uchun skript bloklari odatda HTML hujjatlarining pastki qismiga qo'shiladi.",
    level: "oddiy",
  },

  {
    id: 83,
    title: "HTMLda <i>class</i> atributi nima?",
    text: "HTML-dagi class atributi HTML elementining sinfini belgilaydi. U veb-sahifadagi elementlar guruhiga ma'lum styleni qo'llash uchun ishlatilishi mumkin.",
    level: "oddiy",
  },

  {
    id: 84,
    title: "HTML elementlarining <i>id va class</i> atributlari o'rtasidagi farq nima?",
    text: "“id” atributi HTML elementi uchun noyob identifikatorni, “class” atributi esa elementlar guruhi uchun sinfni belgilaydi. Id sahifada faqat bir marta ishlatilishi mumkin, ammo sinf bir necha marta ishlatilishi mumkin.",
    level: "oddiy",
  },


  {
    id: 86,
    title:
      "<i>HTML va HTML5</i> o'rtasidagi farq nima?",
    text: "HTML5 HTMLning eng soʻnggi versiyasi boʻlib, oldingi versiyalarga nisbatan yangi xususiyatlar va yaxshilanishlarni oʻz ichiga oladi. HTML va HTML5 o'rtasidagi ba'zi asosiy farqlar multimedia elementlarini qo'llab-quvvatlashni (video va audio kabi), yaxshilangan semantikani va mobil qurilmalarni yaxshiroq qo'llab-quvvatlashni o'z ichiga oladi.",
    level: "oddiy",
  },

  {
    id: 87,
    title:"HTMLda <i>form</i> nima?",
    text: "form - foydalanuvchi ma'lumotlarini yig'ish uchun kiritish maydonlari va boshqa elementlar to'plami. Shakllar tizimga kirish, sharhlar yuborish yoki xaridlarni amalga oshirish kabi turli maqsadlarda ishlatilishi mumkin.",
    level: "oddiy",
  },


  {
    id: 89,
    title:"HTML elementining atributlari sifatida foydalanilganda <i>displey:none va visibility:hidden</i> o'rtasidagi farq nima?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 80,
    title: "<i>Atribute</i> nima?",
    text: "atribut - bu tegga oxshaydi. Lekin u tegma u tegdi ichiga yoziladi.",
    level: "oddiy",
  },

  {
    id: 81,
    title: "<i>audio</i> nima?",
    text: "Audio - bu audio qoshish.",
    level: "oddiy",
  },

  {
    id: 82,
    title: "<i>Audio</i> nima uchun saytga chiqmaydi ?",
    text: "Chunki <b>control</b> atributini qoshib qoyish kerak.",
    level: "oddiy",
  },

  {
    id: 83,
    title: "<i>poster</i> haqida aytib bering.",
    text: "Videoda boshlanishidan oldin turadigan rasm.",
    level: "oddiy",
  },

  {
    id: 84,
    title: "<i>audioda loop atributi</i> nima vazifani bajaradi?",
    text: "Audio tugasa yana qaytattan boshlanadi.",
    level: "oddiy",
  },

  {
    id: 85,
    title:
      "<i>select</i>  nima?",
    text: "tanlash imkoniyati.",
    level: "oddiy",
  },

  {
    id: 86,
    title:
      "Agar <i>option</i> nima?",
    text: "bu ham tanlash imkoniyati.",
    level: "oddiy",
  },

  {
    id: 87,
    title:
      " <i>option</i> bilan <i>selsect</i> qanday keladi?",
    text: "Billa keladi.",
    level: "oddiy",
  },

  {
    id: 88,
    title:
      "<i>HIdden atributi</i> nima vazifani bajaradi?",
    text: "Elementni <b>Yoq</b> qolib qoyadi.",
    level: "oddiy",
  },

  {
    id: 89,
    title:
      "<i>Script</i> nima?",
    text: "Script bu <b>Javascriptni</b> ulash vositasi.",
    level: "oddiy",
  },

  {
    id: 90,
    title:
      "<i>src</i> nima?",
    text: "rasm , video , audiolarni src bilan ulaymiz.",
    level: "oddiy",
  },

  {
    id: 91,
    title:
      "<i>Imgning width atributi</i> nima vazifani bajaradi?",
    text: "Width - bu atribut rasmni <b>eniga kattalashtirsh</b>.",
    level: "oddiy",
  },

  {
    id: 92,
    title:
      "<i>Height</i> atributichi?",
    text: "Height - bu rasmni <b>uzunligini</b> kopaytiradi.",
    level: "oddiy",
  },

  {
    id: 93,
    title:
      "<i>td</i> nima?",
    text: "td - bu jadvalni eng birinchi yacheykasi.Uni shrifti sal yogonroq boaldi.",
    level: "oddiy",
  },

  {
    id: 94,
    title:
      "<i>th</i> nima?",
    text: "th - bu jadvalni <b>tddi</b> pastidagi yacheykasi.Uni shrifti <b>tddan</b> farqlanadi.",
    level: "oddiy",
  },

  {
    id: 95,
    title: "<i>Span</i> nima?",
    text: "Span - buni text ham div ham alohida bolim qilib ham ishlatsa boladigan teg.",
    level: "oddiy",
  },

  {
    id: 96,
    title: "<i>Main</i> nima?",
    text: "Main - bu saytni <b>Asosiy</b> qismi.",
    level: "oddiy",
  },

  {
    id: 97,
    title: "<i><></></i> bular nima vazifani bajaradi?",
    text: "Bu belgilar Ozbek tilida <b>Ochilib yopiluvchilar</b> masalan:<h1></h1>",
    level: "oddiy",
  },
];