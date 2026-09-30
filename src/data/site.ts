// Single source of truth for parish facts. Every page reads from here,
// so a schedule or phone change only needs to be made once.

export type Lang = 'en' | 'ar';
export type T = { en: string; ar: string };

export const site = {
  name: { en: 'Sacred Heart Chaldean Catholic Church', ar: 'كنيسة القلب الأقدس الكلدانية الكاثوليكية' },
  shortName: { en: 'Sacred Heart', ar: 'القلب الأقدس' },
  url: 'https://www.sacredheartccc.com',
  founded: 1975,
  pastor: { en: 'Fr. Fadi Philip', ar: 'الأب فادي فيليب' },
  eparchy: {
    en: 'Chaldean Catholic Eparchy of St. Thomas the Apostle',
    ar: 'أبرشية مار توما الرسول الكلدانية الكاثوليكية',
  },
  eparchyUrl: 'https://chaldeanchurch.org',
  address: {
    street: '30590 Dequindre Rd',
    city: 'Warren',
    state: 'MI',
    zip: '48092',
    oneLine: '30590 Dequindre Rd, Warren, MI 48092',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sacred+Heart+Chaldean+Catholic+Church+30590+Dequindre+Rd+Warren+MI+48092',
  mapsEmbed: 'https://www.google.com/maps?q=30590+Dequindre+Rd,+Warren,+MI+48092&z=15&output=embed',
  phone: { display: '(586) 393-5809', tel: '+15863935809' },
  fax: '(586) 393-5812',
  eventsPhone: { name: { en: 'Hani', ar: 'هاني' }, display: '(586) 438-6079', tel: '+15864386079' },
  email: 'shccc21@gmail.com',
  // Where the website's contact / sign-up form delivers.
  formInbox: 'sacredheartchurch2022@gmail.com',
  officeHours: { en: 'Monday – Friday, 9 AM – 4 PM', ar: 'الاثنين – الجمعة، ٩ صباحاً – ٤ مساءً' },
  social: {
    instagram: 'https://www.instagram.com/sacredheartchaldeanchurch/',
    instagramHandle: '@sacredheartchaldeanchurch',
    facebook: 'https://www.facebook.com/sacredheartchaldeanparish',
    superSaints: 'https://www.instagram.com/supersaintssacredheart/',
  },
};

// ---- Weekly liturgical schedule ------------------------------------------
// day: 0 = Sunday … 6 = Saturday (used by the "Next Mass" widget).
export type Service = {
  day: number;
  time: string; // 24h "HH:MM" in America/Detroit
  kind: 'mass' | 'adoration' | 'confession';
  label: T;
  lang?: T;
  note?: T;
};

export const days: Record<number, T> = {
  0: { en: 'Sunday', ar: 'الأحد' },
  1: { en: 'Monday', ar: 'الاثنين' },
  2: { en: 'Tuesday', ar: 'الثلاثاء' },
  3: { en: 'Wednesday', ar: 'الأربعاء' },
  4: { en: 'Thursday', ar: 'الخميس' },
  5: { en: 'Friday', ar: 'الجمعة' },
  6: { en: 'Saturday', ar: 'السبت' },
};

const mass: T = { en: 'Holy Mass', ar: 'القداس الإلهي' };
const adoration: T = { en: 'Adoration & Rosary', ar: 'السجود للقربان والمسبحة الوردية' };
const confession: T = { en: 'Confessions', ar: 'سر الاعتراف' };
const surethArabic: T = { en: 'Sureth & Arabic', ar: 'السورث والعربية' };

export const schedule: Service[] = [
  { day: 5, time: '16:00', kind: 'confession', label: confession },
  { day: 5, time: '17:00', kind: 'adoration', label: adoration },
  { day: 5, time: '18:00', kind: 'mass', label: mass, lang: surethArabic },

  { day: 6, time: '12:30', kind: 'mass', label: mass, lang: { en: 'English', ar: 'الإنجليزية' },
    note: { en: 'Catechism & First Communion families', ar: 'لعائلات التعليم المسيحي والمناولة الأولى' } },
  { day: 6, time: '16:00', kind: 'confession', label: confession },
  { day: 6, time: '17:00', kind: 'adoration', label: adoration },
  { day: 6, time: '18:00', kind: 'mass', label: mass, lang: surethArabic },

  { day: 0, time: '10:00', kind: 'mass', label: mass, lang: { en: 'Arabic', ar: 'العربية' } },
  { day: 0, time: '12:30', kind: 'mass', label: mass, lang: { en: 'Sureth', ar: 'السورث' } },
];

export const scheduleDays = [5, 6, 0];

export function fmtTime(time: string, lang: Lang) {
  const [h, m] = time.split(':').map(Number);
  const h12 = ((h + 11) % 12) + 1;
  if (lang === 'ar') {
    const period = h < 12 ? 'صباحاً' : 'مساءً';
    return `${toArabicDigits(`${h12}:${String(m).padStart(2, '0')}`)} ${period}`;
  }
  return `${h12}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}

export function toArabicDigits(s: string) {
  return s.replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]);
}

export const L = (t: T | undefined, lang: Lang) => (t ? t[lang] : '');
