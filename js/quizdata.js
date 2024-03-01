const quizData = [
  {
    id: 1,
    question: "Audio tegini atributlarini toping",
    a: "Loop , control",
    b: "poster , conrol",
    c: "title , control",
    d: "hidden , title",  
    correct: "a",
  },
  {
    id: 2,
    question: "Sarlavha teglar togri bolgan qatorni toping.",
    a: "h1, h2, h3, h4, h5, h6, h7",
    b: "h1, h2, h3, h4, h5, h6.",
    c: "p, span.",
    d: "Yuqoridagilarning barchasi togri",
    correct: "b",
  },
  {
    id: 3,
    question:
      "HTMLda i tegi sozni qanday holatda qilib qoyadi?",
    a: "Yotkizib qoyadi",
    b: "Ong tomonga qiyshartirib qoyadi",
    c: "Chap tomonga yotkizib qoyadi.",
    d: "El italiano shriftida qilib qoyadi",
    correct: "b",
  },
  {
    id: 4,
    question: "p tegiga lorem100  yozsa nima chiqadi?",
    a: "Hech balo",
    b: "Xatolik beradi",
    c: "Bilmayman",
    d: "100ta soz chiqadi.",
    correct: "d",
  },
  {
    id: 5,
    question: "Video tegini atributini yozing",
    a: "Poster",
    b: "Alt",
    c: "Row",
    d: "Var",
    correct: "a",
  },

  {
    id: 6,
    question: "Main bu saytning qaysi qismi?",
    a: "Tepa qismi",
    b: "Asosiy qismi",
    c: "Eng pastki qismi",
    d: "Hammasi togri",
    correct: "b",
  },
  {
    id: 7,
    question:
      "HTMLda qanday izoh qoldirish mumkin.",
    a: "/* Bu sharh */",
    b: "// Bu sharh",
    c: "<!–- Bu izoh -–>",
    d: "# Bu izoh #",
    correct: "c",
  },

  {
    id: 8,
    question: "Altni vazifasi nima?",
    a: "Bilmayman",
    b: "izoh qoldirish",
    c: "Sarlavha yaratish",
    d: "Kozi korlar uchun yaratilgan atribut",
    correct: "d",
  },
  {
    id: 9,
    question:
      "b tegini vazifasi ?",
    a: "qalinlashtirib beradi",
    b: "Yonboshlatib beradi",
    c: "kichiklashtiradi",
    d: "qoshtirnoq qoshadi",
    correct: "a", 
  },
  {
    id: 10,
    question: "U tegini vazifasi nima?",
    a: "Qoshtirnoq qoshib beradi",
    b: "Tagiga chiqiq torib beradi",
    c: "Qalinlashtiradi",
    d: "Kichiklashtiradi",
    correct: "b",
  },
  {
    id: 11,
    question: "HTMLda qaysi element tekst ustiga chizadi?",
    a: "Overline",
    b: "del",
    c: "u",
    d: "i",
    correct: "a",
  },
  {
    id: 12,
    question: "HTMLda qaysi element tekst ustiga chizadi?",
    a: "Overline",
    b: "del",
    c: "u",
    d: "i",
    correct: "b",
  },
  {
    id: 13,
    question: "Audio va video elementlarini avtomatik ijro qilish imkoniyatini qaysi atribut qo'shib beradi?",
    a: "Retry",
    b: "Autoplay",
    c: "Loop",
    d: "Mute",
    correct: "b",
  },
  {
    id: 14,
    question: "Audio va video elementlarini ovozsiz qilish imkoniyatini qaysi atribut qo'shib beradi?",
    a: "Retry",
    b: "Autoplay",
    c: "Loop",
    d: "Mute",
    correct: "d",
  },
  {
    id: 15,
    question: "Audio va video elementlarini qolipi qaysi atribut yordamida?",
    a: "Retry",
    b: "Autoplay",
    c: "Loop",
    d: "Controls",
    correct: "d",
  },
  {
    id: 16,
    question: "ul va ol ichida qaysi teg(lar) kelishi mumkin?",
    a: "li",
    b: "h1",
    c: "p",
    d: "Hammasi",
    correct: "a",
  },
  {
    id: 17,
    question: "Quyidagilardan qaysi biri inline element emas?",
    a: "div",
    b: "Button",
    c: "Strong",
    d: "Hammasi",
    correct: "a",
  },
  {
    id: 18,
    question: "Berilgan raqamga qo'ngiroq qilish imkoniyatini qaysi teg yaratib beradi?",
    a: "a",
    b: "tel",
    c: "Button",
    d: "Hammasi",
    correct: "b",
  },
  {
    id: 19,
    question: "HTMLda qatorni bitta pastga tushirish uchun qaysi tegdan foydalanamiz?",
    a: "a",
    b: "hr",
    c: "ol",
    d: "br",
    correct: "d",
  },
  {
    id: 20,
    question: "HTMLda qaysi element sahifaning boshqa sahifalarga yoki sahifa ichidagi qismlarga havola qiladigan qism hisoblanadi?",
    a: "Footer",
    b: "Header",
    c: "Section",
    d: "Nav",
    correct: "d",
  },
  {
    id: 21,
    question: "Berilgan raqamga qo'ngiroq qilish imkoniyatini qaysi teg yaratib beradi?",
    a: "Button",
    b: "a",
    c: "li",
    d: "Hammasi",
    correct: "b",
  },
  {
    id: 22,
    question: "Qaysi teg yordamida tartibsiz ro'yhat yaratishimiz mumkin?",
    a: "ul",
    b: "ol",
    c: "li",
    d: "a",
    correct: "a",
  },
  {
    id: 23,
    question: "Select ichiga malumotni guruhlashda qaysi tegdan foydalanamiz?",
    a: "Option",
    b: "Optgroup",
    c: "groupfull",
    d: "allgroup",
    correct: "b",
  },
  {
    id: 24,
    question: "head ichida quyidagi qaysi teg kela olmaydi?",
    a: "form",
    b: "title",
    c: "Button",
    d: "Strong",
    correct: "a",
  },
  {
    id: 25,
    question: "Qaysi teg yordamida tartibsiz ro'yhat yaratishimiz mumkin?",
    a: "ul",
    b: "ol",
    c: "li",
    d: "a",
    correct: "a",
  },
  {
    id: 26,
    question: "Web-sahifada ko'p qatorli matn kiritish maydonini yaratish uchun qaysi tegdan foydalanamiz",
    a: "Section",
    b: "p",
    c: "Input",
    d: "Textarea",
    correct: "d",
  },
  {
    id: 26,
    question: "Qaysi teg yoramida bir-birga bogliq elementlarni guruhlashimiz mumkin?",
    a: "ul",
    b: "Group",
    c: "fieldset",
    d: "a",
    correct: "c",
  },
  {
    id: 27,
    question: "Jadvalda bosh qator yacheykalari qaysi teg yordamida yaratiladi?",
    a: "th",
    b: "tr",
    c: "td",
    d: "h1",
    correct: "a",
  },
  {
    id: 28,
    question: "Inputga malumotni kiritishni shart qilish uchun qaysi atributdan foydalanamiz?",
    a: "Disabled",
    b: "Type",
    c: "Requied",
    d: "Hammasi",
    correct: "c",
  },
  {
    id: 29,
    question: "Quyidagilardan qaysi biri void element hisoblanadi?",
    a: "Img",
    b: "h1",
    c: "p",
    d: "div",
    correct: "a",
  },
  {
    id: 30,
    question: "Video ustiga rasm qo'yish uchun qaysi atributdan foydalanamiz?",
    a: "Loop",
    b: "Control",
    c: "p",
    d: "Poster",
    correct: "a",
  },
  {
    id: 31,
    question: "Quyidagilardan qaysi biiri formatlash tegi emas?",
    a: "Span",
    b: "Form",
    c: "ol",
    d: "loop",
    correct: "a",
  },
  {
    id: 32,
    question: "HTMLda havola yani link qaysi teg bilan yaratiladi?",
    a: "b",
    b: "h1",
    c: "p",
    d: "a",
    correct: "d",
  },
  {
    id: 33,
    question: "Inputga malumot kiritib bo'lmaydigan qilish uchun qaysi atributdan foydalanamiz?",
    a: "Disabled",
    b: "Required",
    c: "Search",
    d: "div",
    correct: "a",
  },
  {
    id: 34,
    question: "HTMLda qo'shtirnoq chiqarish uchun qaysi tegdan foydalanamiz",
    a: "p",
    b: "a",
    c: "q",
    d: "b",
    correct: "c",
  },
  {
    id: 35,
    question: "HTMLning 4.01-versiyasida Doctypelarning necha turi bor?",
    a: "4",
    b: "5",
    c: "6",
    d: "3",
    correct: "d",
  },
];
