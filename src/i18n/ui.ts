import type { Lang } from '../data/site';

export const routes = {
  home: '/',
  about: '/about',
  mass: '/mass-times',
  ministries: '/ministries',
  events: '/events',
  contact: '/contact',
  support: '/support',
} as const;

/** Prefix a path with /ar for Arabic. */
export function href(path: string, lang: Lang) {
  if (lang === 'en') return path;
  return path === '/' ? '/ar' : `/ar${path}`;
}

/** The same page in the other language. */
export function altPath(pathname: string, lang: Lang) {
  const clean = pathname.replace(/\/$/, '') || '/';
  if (/^\/(ar\/)?404/.test(clean)) return lang === 'ar' ? '/' : '/ar';
  if (lang === 'ar') return clean.replace(/^\/ar/, '') || '/';
  return clean === '/' ? '/ar' : `/ar${clean}`;
}

const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.mass': 'Mass Times',
    'nav.ministries': 'Ministries',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'nav.support': 'Support',
    'nav.getInvolved': 'Get Involved',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.allMinistries': 'All ministries',
    'lang.switch': 'العربية',
    'lang.switchLabel': 'اقرأ هذه الصفحة بالعربية',
    'skip': 'Skip to content',
    'topbar.next': 'Next Mass',
    'topbar.call': 'Call the office',
    'cta.massTimes': 'Mass Times',
    'cta.getInvolved': 'Get Involved',
    'cta.directions': 'Get Directions',
    'cta.call': 'Call',
    'cta.learnMore': 'Learn more',
    'cta.interested': "I'm interested",
    'cta.seeAll': 'See all',
    'cta.follow': 'Follow on Instagram',
    'footer.address': 'Visit',
    'footer.contact': 'Contact',
    'footer.office': 'Office',
    'footer.fax': 'Fax',
    'footer.hours': 'Office Hours',
    'footer.explore': 'Explore',
    'footer.pastor': 'Pastor',
    'footer.eparchy': 'A parish of the',
    'footer.rights': 'All rights reserved.',
    'schedule.title': 'Weekly Schedule',
    'schedule.mass': 'Mass',
    'schedule.adoration': 'Adoration',
    'schedule.confession': 'Confession',
    'events.upcoming': 'Upcoming',
    'events.recent': 'Recent',
    'events.none': 'New events are posted on Instagram first. Follow along so you never miss one.',
    'meets': 'When we meet',
    'who': 'Who it’s for',
    'leaders': 'Led by',
    'contact.email': 'Email',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.mass': 'مواعيد القداس',
    'nav.ministries': 'الخدمات',
    'nav.events': 'المناسبات',
    'nav.contact': 'تواصل معنا',
    'nav.support': 'ادعم الرعية',
    'nav.getInvolved': 'شارك معنا',
    'nav.menu': 'القائمة',
    'nav.close': 'إغلاق القائمة',
    'nav.allMinistries': 'جميع الخدمات',
    'lang.switch': 'English',
    'lang.switchLabel': 'Read this page in English',
    'skip': 'انتقل إلى المحتوى',
    'topbar.next': 'القداس القادم',
    'topbar.call': 'اتصل بالمكتب',
    'cta.massTimes': 'مواعيد القداس',
    'cta.getInvolved': 'شارك معنا',
    'cta.directions': 'الاتجاهات',
    'cta.call': 'اتصل',
    'cta.learnMore': 'اعرف المزيد',
    'cta.interested': 'أرغب بالانضمام',
    'cta.seeAll': 'عرض الكل',
    'cta.follow': 'تابعنا على إنستغرام',
    'footer.address': 'زورونا',
    'footer.contact': 'تواصل',
    'footer.office': 'المكتب',
    'footer.fax': 'الفاكس',
    'footer.hours': 'ساعات المكتب',
    'footer.explore': 'تصفّح',
    'footer.pastor': 'كاهن الرعية',
    'footer.eparchy': 'رعية تابعة لـ',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'schedule.title': 'البرنامج الأسبوعي',
    'schedule.mass': 'قداس',
    'schedule.adoration': 'سجود',
    'schedule.confession': 'اعتراف',
    'events.upcoming': 'القادمة',
    'events.recent': 'الأخيرة',
    'events.none': 'تُنشر المناسبات الجديدة على إنستغرام أولاً. تابعونا كي لا يفوتكم شيء.',
    'meets': 'موعد اللقاء',
    'who': 'لمن',
    'leaders': 'بإشراف',
    'contact.email': 'البريد الإلكتروني',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
export const t = (lang: Lang, key: UIKey) => ui[lang][key];
