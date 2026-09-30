import type { T } from './site';

// To add an event: copy one block, change the fields, redeploy.
// Past events move to "Recent" automatically (checked in the visitor's browser),
// so nothing ever shows as "upcoming" after its date.
export type ParishEvent = {
  id: string;
  start: string; // ISO local time, America/Detroit
  end?: string;
  title: T;
  summary: T;
  location?: T;
  price?: T;
  contact?: T;
  image?: string;
  tag: 'feast' | 'social' | 'youth' | 'formation' | 'pilgrimage';
};

const church: T = { en: 'Sacred Heart Chaldean Church', ar: 'كنيسة القلب الأقدس الكلدانية' };
const ticketsCall: T = {
  en: 'Tickets & info: Office (586) 393-5809 · Hani (586) 438-6079',
  ar: 'للتذاكر والمعلومات: المكتب ‎(586) 393-5809 · هاني ‎(586) 438-6079',
};

export const events: ParishEvent[] = [
  {
    id: 'exaltation-2026',
    start: '2026-09-14T19:00',
    title: { en: 'Feast of the Exaltation of the Holy Cross', ar: 'عيد الصليب المقدس' },
    summary: {
      en: 'Holy Mass in Sureth & Arabic, followed by a procession with the Cross and the traditional bonfire.',
      ar: 'القداس الإلهي بالسورث والعربية، يليه تطواف بالصليب وإشعال النار التقليدية.',
    },
    location: church,
    image: '/images/ig/exaltation-reel.webp',
    tag: 'feast',
  },
  {
    id: 'mens-conference-2026',
    start: '2026-08-20T19:00',
    title: { en: "Men's Conference", ar: 'مؤتمر الرجال' },
    summary: {
      en: 'An evening for men 18+ in Arabic & English. Free admission.',
      ar: 'أمسية للرجال من عمر ١٨ فما فوق باللغتين العربية والإنجليزية. الدخول مجاني.',
    },
    location: church,
    tag: 'formation',
  },
  {
    id: 'assumption-2026',
    start: '2026-08-15T19:00',
    title: { en: 'The Assumption of Mary', ar: 'عيد انتقال السيدة العذراء' },
    summary: { en: 'Holy Mass for the Solemnity of the Assumption.', ar: 'القداس الإلهي لعيد انتقال العذراء مريم.' },
    location: church,
    tag: 'feast',
  },
  {
    id: 'consolation-trip-2026',
    start: '2026-08-14T07:00',
    title: { en: 'Pilgrimage to Our Lady of Consolation', ar: 'رحلة حجّ إلى سيدة التعزية' },
    summary: {
      en: 'A parish day trip to the Basilica & National Shrine of Our Lady of Consolation. $68 per person.',
      ar: 'رحلة رعوية ليوم واحد إلى بازيليكا ومزار سيدة التعزية الوطني. ٦٨ دولاراً للشخص.',
    },
    price: { en: '$68 per person', ar: '٦٨ دولاراً للشخص' },
    contact: ticketsCall,
    tag: 'pilgrimage',
  },
  {
    id: 'transfiguration-2026',
    start: '2026-08-06T19:00',
    title: { en: 'Feast of the Transfiguration', ar: 'عيد التجلّي' },
    summary: { en: 'Holy Mass for the Transfiguration of the Lord.', ar: 'القداس الإلهي لعيد تجلّي الرب.' },
    location: church,
    tag: 'feast',
  },
  {
    id: 'sacred-heart-feast-2026',
    start: '2026-06-12T19:00',
    title: { en: 'Feast of the Sacred Heart', ar: 'عيد قلب يسوع الأقدس' },
    summary: {
      en: 'Our parish feast day. "The Heart of Jesus is our refuge and our home."',
      ar: 'عيد رعيتنا. "قلب يسوع ملجأنا وبيتنا."',
    },
    location: church,
    image: '/images/ig/sacred-heart-feast-2026.webp',
    tag: 'feast',
  },
];

// Recurring parish traditions (shown as "Through the year").
export const traditions: { month: T; title: T; text: T; image?: string }[] = [
  {
    month: { en: 'February', ar: 'شباط' },
    title: { en: "Valentine's Party", ar: 'حفلة عيد الحب' },
    text: {
      en: 'A night in the church hall with dinner, appetizers and live music. Doors open at 8 PM.',
      ar: 'أمسية في قاعة الكنيسة مع العشاء والمقبّلات والموسيقى الحيّة. تُفتح الأبواب الساعة ٨ مساءً.',
    },
    image: '/images/flyer-valentines-2024.webp',
  },
  {
    month: { en: 'Holy Week', ar: 'أسبوع الآلام' },
    title: { en: 'Holy Week & Easter', ar: 'أسبوع الآلام والقيامة' },
    text: {
      en: 'The heart of our liturgical year, celebrated with the full beauty of the Chaldean rite.',
      ar: 'قلب سنتنا الطقسية، نحتفل به بكامل جمال الطقس الكلداني.',
    },
    image: '/images/ig/corpus-christi-reel.webp',
  },
  {
    month: { en: 'June', ar: 'حزيران' },
    title: { en: 'Feast of the Sacred Heart', ar: 'عيد قلب يسوع الأقدس' },
    text: {
      en: 'Our parish feast: a special Mass and a community celebration with singers and dinner.',
      ar: 'عيد رعيتنا: قداس احتفالي وسهرة للجالية مع مطربين وعشاء.',
    },
    image: '/images/flyer-feast-2023.webp',
  },
  {
    month: { en: 'September', ar: 'أيلول' },
    title: { en: 'Feast of the Holy Cross', ar: 'عيد الصليب' },
    text: {
      en: 'Mass, a procession with the Cross and the traditional bonfire on September 14.',
      ar: 'قداس وتطواف بالصليب وإشعال النار التقليدية في ١٤ أيلول.',
    },
    image: '/images/ig/exaltation-reel.webp',
  },
  {
    month: { en: 'October 31', ar: '٣١ تشرين الأول' },
    title: { en: 'All Saints Party', ar: 'حفلة جميع القديسين' },
    text: {
      en: 'Our Catechism and First Communion kids dress up as their favorite saints.',
      ar: 'يتنكّر أطفال التعليم المسيحي والمناولة الأولى بزيّ قدّيسيهم المفضّلين.',
    },
    image: '/images/flyer-all-saints-2022.webp',
  },
  {
    month: { en: 'November', ar: 'تشرين الثاني' },
    title: { en: 'Thanksgiving Bazaar', ar: 'بازار عيد الشكر' },
    text: {
      en: 'A weekend bazaar in the Sacred Heart social hall. Vendors can rent a table.',
      ar: 'بازار لمدة عطلة نهاية الأسبوع في قاعة القلب الأقدس. يمكن للبائعين استئجار طاولة.',
    },
    image: '/images/flyer-bazaar-2022.webp',
  },
  {
    month: { en: 'December', ar: 'كانون الأول' },
    title: { en: 'Christmas Retreat & Christmas Party', ar: 'رياضة الميلاد وحفلة الميلاد' },
    text: {
      en: 'A day of reflection to prepare our hearts, then a parish Christmas party in the church hall.',
      ar: 'يوم تأمّل لتهيئة قلوبنا، ثم حفلة الميلاد للرعية في قاعة الكنيسة.',
    },
    image: '/images/flyer-christmas-2022.webp',
  },
];
