// Content of the Garvis homepage. Every value comes from veon/client.json (ids in comments); nothing is invented.

export type CentreType = "family" | "diag" | "surgery" | "rehab";

export interface Phone { label: string; href: string; short: string; }

// company.contacts.phones — єдиний контакт-центр
export const phones: Phone[] = [
  { label: "+38 (095) 283-10-20", href: "tel:+380952831020", short: "095 283-10-20" },
  { label: "+38 (067) 353-10-20", href: "tel:+380673531020", short: "067 353-10-20" },
];
export const mainPhone = phones[0];
export const email = "info@garvis.com.ua"; // company.contacts.emails[0]
export const hours = "щодня 08:00–20:00"; // company.contacts.hours

// socials: Instagram, Facebook, YouTube — confirmed by the project lead (TikTok is not used)
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/garvis_clinic/" },
  { name: "Facebook", href: "https://www.facebook.com/Garvisclinic/" },
  { name: "YouTube", href: "https://www.youtube.com/@garvis_clinic" },
];

export const typeLabel: Record<CentreType, string> = {
  family: "Сімейний лікар",
  diag: "Діагностика",
  surgery: "Хірургія",
  rehab: "Реабілітація",
};

export interface Centre { street: string; note?: string; names: string[]; types: CentreType[]; query: string; }

// company.contacts.addresses — 10 адрес, 11 закладів (C-008)
export const centres: Centre[] = [
  { street: "вул. Батумська, 7а", names: ["Хірургічний центр «Garvis»"], types: ["surgery"], query: "Дніпро, вул. Батумська, 7а" },
  { street: "вул. Набережна Перемоги, 1Н", names: ["Діагностичний центр «Garvis — Твоя територія здоров'я!»"], types: ["diag"], query: "Дніпро, вул. Набережна Перемоги, 1Н" },
  { street: "пр. Слобожанський, 109а", names: ["Діагностичний центр «Garvis»", "Реабілітаційний центр «Garvis»"], types: ["diag", "rehab"], query: "Дніпро, проспект Слобожанський, 109а" },
  { street: "бул. Кобзаря, 2", names: ["Медичний центр «Garvis/Сімейний лікар»"], types: ["family"], query: "Дніпро, бульвар Кобзаря, 2" },
  { street: "вул. Сонячна Набережна, 6", note: "пр. М. Малиновського", names: ["Медичний центр «Garvis/Сімейний лікар»"], types: ["family"], query: "Дніпро, вул. Сонячна Набережна, 6" },
  { street: "пр. Героїв, 17а", names: ["Медичний центр «Garvis/Сімейний лікар»"], types: ["family"], query: "Дніпро, проспект Героїв, 17а" },
  { street: "вул. Левка Лук'яненка, 20", note: "Жуковського", names: ["Медичний центр «Garvis/Сімейний лікар»"], types: ["family"], query: "Дніпро, вул. Левка Лук'яненка, 20" },
  { street: "бул. Зоряний, 1М", names: ["Медичний центр «Garvis/Сімейний лікар»"], types: ["family"], query: "Дніпро, бульвар Зоряний, 1М" },
  { street: "Запорізьке шосе, 80", names: ["Медичний центр «Garvis/Сімейний лікар»"], types: ["family"], query: "Дніпро, Запорізьке шосе, 80" },
  { street: "вул. Юрія Кондратюка, 10", names: ["Медичний центр «Garvis/Сімейний лікар»"], types: ["family"], query: "Дніпро, вул. Юрія Кондратюка, 10" },
];

export const mapsHref = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const countOf = (t: CentreType) => centres.filter((c) => c.types.includes(t)).length;

// products_services[2]: 16 хірургічних напрямів
export const surgeryAreas = [
  "загальна хірургія", "ендокринна хірургія", "ендоскопічна хірургія", "ЛОР-хірургія",
  "мамологія", "онкохірургія", "оперативна гінекологія", "оперативна урологія",
  "ортопедія-травматологія", "пластична хірургія", "проктологія", "спінальна хірургія",
  "судинна хірургія", "торакальна хірургія", "баріатрична хірургія", "щелепно-лицева хірургія",
];

// C-011: інші напрями з меню сайту
export const otherServices = [
  "Профільні фахівці", "Національний скринінг здоров'я 40+", "Check-up",
  "Хіміотерапія та онкоконсиліуми", "Онлайн-консультація лікаря",
  "Перевезення пацієнтів та виклик лікаря", "Подарункові сертифікати",
];

// C-014: безоплатно за декларацією
export const freeByDeclaration = [
  "Консультації сімейного лікаря і педіатра",
  "Базові аналізи",
  "Довідки",
  "Електронні направлення",
  "Програма «Доступні ліки»",
  "Вакцинація",
];

// C-009: хроніка
export const chronicle = [
  { year: "1997", text: "Професор Березницький Яків Соломонович засновує мережу." },
  { year: "2018", text: "Починає працювати «Garvis/Сімейний лікар». Сьогодні тут понад 36 тис. декларантів." },
  { year: "2021", text: "Центри об'єднуються під брендом «Garvis — Твоя територія здоров'я!»." },
  { year: "2023", text: "Відкрито реабілітаційний центр." },
];

// C-010: цифри з головної клієнта (без «29 років» — R-112)
export const facts = [
  { n: "520", t: "співробітників" },
  { n: "9 млн+", t: "наданих послуг" },
  { n: "60", t: "лікарських спеціальностей" },
  { n: "16", t: "хірургічних напрямів" },
  { n: "ISO 9001", t: "сертифікація" },
];

export const notes = {
  page: "Розділ у розробці",
  booking: "Онлайн-запис з'явиться в повній версії сайту",
  form: "Онлайн-заявка з'явиться в повній версії сайту",
};
