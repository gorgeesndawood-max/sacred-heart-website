import type { T } from './site';

export type Category = 'prayer' | 'music' | 'formation' | 'youth' | 'altar' | 'care';

export const categories: Record<Category, T> = {
  prayer: { en: 'Prayer Groups', ar: 'مجموعات الصلاة' },
  music: { en: 'Music & Choirs', ar: 'الموسيقى والجوقات' },
  formation: { en: 'Education & Formation', ar: 'التعليم والتنشئة' },
  youth: { en: 'Youth', ar: 'الشبيبة' },
  altar: { en: 'Altar Service', ar: 'خدمة المذبح' },
  care: { en: 'Parish Care', ar: 'خدمة الرعية' },
};

export type Ministry = {
  slug: string;
  category: Category;
  name: T;
  tagline: T;
  body: T[]; // paragraphs
  meets?: { when: T; where?: T };
  audience?: T;
  leaders?: T;
  contact?: { email?: string; instagram?: string };
  image: string;
  imageFit?: 'cover' | 'contain';
  gallery?: string[];
  verse?: { text: T; ref: T };
  /** old Wix URL, redirected in vercel.json */
  legacy?: string;
};

const askOffice: T = {
  en: 'Ask a parish council member after Sunday Mass, or call the office.',
  ar: 'اسأل أحد أعضاء المجلس الخورني بعد قداس الأحد، أو اتصل بمكتب الكنيسة.',
};

export const ministries: Ministry[] = [
  {
    slug: 'catechism',
    category: 'formation',
    name: { en: 'Catechism & First Communion', ar: 'التعليم المسيحي والمناولة الأولى' },
    tagline: {
      en: 'Helping our children learn about Jesus and His Church.',
      ar: 'نساعد أطفالنا على التعرّف على يسوع وكنيسته.',
    },
    body: [
      {
        en: 'Sacred Heart is proud to offer a Catechism program for students from pre-school through eighth grade. Each grade follows a curriculum approved by the Catholic Church, with one aim: to pass the Word of God on to the next generation.',
        ar: 'تفخر كنيسة القلب الأقدس بتقديم برنامج للتعليم المسيحي للطلاب من مرحلة ما قبل المدرسة حتى الصف الثامن. يتبع كل صف منهجاً معتمداً من الكنيسة الكاثوليكية، وهدفنا واحد: أن ننقل كلمة الله إلى الجيل القادم.',
      },
      {
        en: 'Alongside Catechism, our First Communion program prepares students in third grade and up to receive the Sacraments of Holy Communion and Reconciliation. Beyond the Word of God, students learn our Chaldean Catholic traditions, prayers in Sureth and English, and the meaning of the Holy Mass.',
        ar: 'إلى جانب التعليم المسيحي، يُعِدّ برنامج المناولة الأولى الطلاب من الصف الثالث فما فوق لقبول سرّي القربان المقدس والمصالحة. وإلى جانب كلمة الله، يتعلّم الطلاب تقاليدنا الكلدانية الكاثوليكية، والصلوات بالسورث والإنجليزية، ومعنى القداس الإلهي.',
      },
      {
        en: 'Classes meet on Saturdays and include the 12:30 PM English Mass. Registration is done in person at the parish office, Monday through Friday, 9 AM to 4 PM.',
        ar: 'تُعقد الصفوف أيام السبت وتشمل قداس الساعة ١٢:٣٠ ظهراً باللغة الإنجليزية. يتم التسجيل شخصياً في مكتب الكنيسة من الاثنين إلى الجمعة، من ٩ صباحاً حتى ٤ مساءً.',
      },
    ],
    meets: {
      when: { en: 'Saturdays, 10:00 AM – 1:30 PM (includes 12:30 PM Mass)', ar: 'السبت، ١٠:٠٠ صباحاً – ١:٣٠ ظهراً (يشمل قداس ١٢:٣٠)' },
      where: { en: 'Sacred Heart Church', ar: 'كنيسة القلب الأقدس' },
    },
    audience: {
      en: 'Catechism: Pre-school – 8th grade · First Communion: 3rd grade & up',
      ar: 'التعليم المسيحي: ما قبل المدرسة – الصف الثامن · المناولة الأولى: الصف الثالث فما فوق',
    },
    image: '/images/catechism-logo.webp',
    imageFit: 'contain',
    gallery: ['/images/ig/catechism-flyer.webp'],
    verse: {
      text: {
        en: 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.',
        ar: 'دَعُوا الأَوْلاَدَ يَأْتُونَ إِلَيَّ وَلاَ تَمْنَعُوهُمْ، لأَنَّ لِمِثْلِ هؤُلاَءِ مَلَكُوتَ السَّمَاوَاتِ.',
      },
      ref: { en: 'Matthew 19:14', ar: 'متى ١٩: ١٤' },
    },
    legacy: '/about-6',
  },
  {
    slug: 'mom-group',
    category: 'formation',
    name: { en: 'Mom Group', ar: 'مجموعة الأمهات' },
    tagline: {
      en: "For moms who want to make a difference in our children's future.",
      ar: 'للأمهات اللواتي يرغبن في صنع فرق في مستقبل أطفالنا.',
    },
    body: [
      {
        en: "Our Mom Group is an educational and service group for mothers of the parish. Together we support our children's faith, help with parish programs for kids, and encourage one another as Catholic moms.",
        ar: 'مجموعة الأمهات هي مجموعة تعليمية وخدمية لأمهات الرعية. معاً ندعم إيمان أطفالنا، ونساعد في برامج الرعية للأطفال، ونشجّع بعضنا البعض كأمهات كاثوليكيات.',
      },
      {
        en: 'New moms are always welcome. Send us a note through the Contact page and a member of the group will reach out.',
        ar: 'الأمهات الجدد مرحّب بهنّ دائماً. أرسلي لنا رسالة من صفحة التواصل وستتواصل معك إحدى عضوات المجموعة.',
      },
    ],
    meets: { when: { en: 'Contact us for the next gathering', ar: 'تواصلي معنا لمعرفة موعد اللقاء القادم' } },
    audience: { en: 'Mothers of the parish', ar: 'أمهات الرعية' },
    image: '/images/mom-group.webp',
    imageFit: 'contain',
  },
  {
    slug: 'super-saints',
    category: 'youth',
    name: { en: 'Super Saints Youth Group', ar: 'شبيبة سوبر سينتس (Super Saints)' },
    tagline: {
      en: "Be part of a team that is making a difference in our youth's future.",
      ar: 'كن جزءاً من فريق يصنع فرقاً في مستقبل شبابنا.',
    },
    body: [
      {
        en: 'Super Saints is Sacred Heart\'s youth group for young men and women ages 14 to 21. Our goal is to grow together, learn the Word of God, motivate each other with the love of God, and live in this world with the strength of God.',
        ar: 'سوبر سينتس هي شبيبة كنيسة القلب الأقدس للشباب والشابات من عمر ١٤ إلى ٢١ سنة. هدفنا أن ننمو معاً، ونتعلّم كلمة الله، ونشجّع بعضنا بمحبة الله، ونعيش في هذا العالم بقوة الله.',
      },
      {
        en: 'The name "Super Saints" points to the pathway of sainthood. We want to help each other become saints, worthy of the Lord. Come join us and let\'s grow together on the same path.',
        ar: 'يشير اسم "Super Saints" (القديسون الخارقون) إلى طريق القداسة. نريد أن نساعد بعضنا لنصبح قديسين، مستحقّين للرب. انضمّ إلينا ولننمُ معاً في الطريق نفسه.',
      },
    ],
    meets: { when: { en: 'Weekly during the school year. Follow @supersaintssacredheart for this week\'s details.', ar: 'أسبوعياً خلال العام الدراسي. تابعونا على @supersaintssacredheart لتفاصيل هذا الأسبوع.' } },
    audience: { en: 'Ages 14 – 21', ar: 'من ١٤ إلى ٢١ سنة' },
    contact: { email: 'supersaintsolph@gmail.com', instagram: 'https://www.instagram.com/supersaintssacredheart/' },
    image: '/images/super-saints-logo.webp',
    imageFit: 'contain',
    gallery: ['/images/youth-5.webp', '/images/youth-2.webp', '/images/youth-9.webp', '/images/youth-10.webp', '/images/youth-7.webp', '/images/youth-11.webp'],
    verse: {
      text: {
        en: 'Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity.',
        ar: 'لاَ يَسْتَهِنْ أَحَدٌ بِحَدَاثَتِكَ، بَلْ كُنْ قُدْوَةً لِلْمُؤْمِنِينَ فِي الْكَلاَمِ، فِي التَّصَرُّفِ، فِي الْمَحَبَّةِ، فِي الرُّوحِ، فِي الإِيمَانِ، فِي الطَّهَارَةِ.',
      },
      ref: { en: '1 Timothy 4:12', ar: '١ تيموثاوس ٤: ١٢' },
    },
    legacy: '/team-3',
  },
  {
    slug: 'bells-choir',
    category: 'music',
    name: { en: 'Bells Choir', ar: 'جوقة الأجراس' },
    tagline: {
      en: 'The first and only Chaldean bells choir in our community.',
      ar: 'أول وأوحد جوقة أجراس كلدانية في جاليتنا.',
    },
    body: [
      {
        en: 'Sacred Heart is proud to have the first and only Chaldean Bells Choir in our community. It is a unique choir: each handbell or chime is responsible for a single note, and when the bells ring together they become rich melodies and harmonies that help the faithful pray.',
        ar: 'تفخر كنيسة القلب الأقدس بامتلاك أول وأوحد جوقة أجراس كلدانية في جاليتنا. إنها جوقة فريدة: كل جرس يدوي مسؤول عن نغمة واحدة، وعندما تُقرع الأجراس معاً تتحوّل إلى ألحان وتناغمات غنية تساعد المؤمنين على الصلاة.',
      },
      {
        en: 'The sound of the bells fills the church as a prayer worthy of our Lord and God. The best part is when the whole choir performs a hymn in unity, a picture of the faithful praising God together.',
        ar: 'يملأ صوت الأجراس الكنيسة كصلاة تليق بربّنا وإلهنا. وأجمل ما في الأمر حين تؤدي الجوقة بأكملها ترنيمة في وحدة، صورةً للمؤمنين وهم يسبّحون الله معاً.',
      },
      {
        en: 'No experience needed. If you love music and want to serve, this is a joyful and easy-to-learn group.',
        ar: 'لا حاجة إلى خبرة سابقة. إن كنت تحب الموسيقى وترغب في الخدمة، فهذه مجموعة مُفرحة وسهلة التعلّم.',
      },
    ],
    meets: {
      when: { en: 'Thursdays, 7:00 – 8:30 PM (times vary near holidays)', ar: 'الخميس، ٧:٠٠ – ٨:٣٠ مساءً (قد يتغيّر الموعد قرب الأعياد)' },
    },
    leaders: { en: 'Directors: Maha & Amira', ar: 'المديرتان: مها وأميرة' },
    image: '/images/bells-closeup.webp',
    gallery: ['/images/bells-choir-1.webp', '/images/bells-choir-2.webp', '/images/bells-choir-3.webp'],
    legacy: '/about-3-1',
  },
  {
    slug: 'choir',
    category: 'music',
    name: { en: 'Arabic & Chaldean Choir', ar: 'الجوقة العربية والكلدانية' },
    tagline: { en: 'Serving the Lord in song at every Sunday and feast-day Mass.', ar: 'نخدم الرب بالترتيل في كل قداس أحد وعيد.' },
    body: [
      {
        en: 'The Arabic and Chaldean Choir serves all Masses on Sundays, holidays and feast days. Our priority is to pray, and to help others pray.',
        ar: 'تخدم الجوقة العربية والكلدانية جميع القداديس في أيام الآحاد والأعياد والمناسبات. أولويتنا أن نصلّي، وأن نساعد الآخرين على الصلاة.',
      },
      {
        en: 'Interested in joining? Come and speak to any choir member after Mass, or contact the parish office.',
        ar: 'هل ترغب بالانضمام؟ تحدّث مع أي عضو في الجوقة بعد القداس، أو تواصل مع مكتب الكنيسة.',
      },
    ],
    meets: { when: { en: 'Practice: Tuesdays at 7:30 PM', ar: 'التدريب: الثلاثاء الساعة ٧:٣٠ مساءً' } },
    image: '/images/choir-group.webp',
    legacy: '/team-1',
  },
  {
    slug: 'sacred-heart-group',
    category: 'prayer',
    name: { en: 'Sacred Heart of Jesus Group', ar: 'أخوية قلب يسوع الأقدس' },
    tagline: { en: 'A prayer group devoted to the Sacred Heart of Jesus.', ar: 'أخوية صلاة مكرّسة لقلب يسوع الأقدس.' },
    body: [
      {
        en: 'The Sacred Heart of Jesus Group is a prayer group devoted to the patron of our parish: the loving, pierced Heart of Christ, burning with love for every person.',
        ar: 'أخوية قلب يسوع الأقدس هي مجموعة صلاة مكرّسة لشفيع رعيتنا: قلب المسيح المحبّ المطعون، المتّقد حبّاً لكل إنسان.',
      },
      { en: 'All are welcome to join in prayer.', ar: 'الجميع مرحّب بهم للمشاركة في الصلاة.' },
    ],
    meets: { when: askOffice },
    image: '/images/sacred-heart-jesus.webp',
    legacy: '/about-8',
  },
  {
    slug: 'our-lady-of-perpetual-help',
    category: 'prayer',
    name: { en: 'Our Lady of Perpetual Help Group', ar: 'أخوية سيدة المعونة الدائمة' },
    tagline: { en: 'Devoted to Our Lady in prayer and service.', ar: 'مكرّسة للعذراء مريم في الصلاة والخدمة.' },
    body: [
      {
        en: 'Our Lady of Perpetual Help Prayer Group is devoted to Our Lady, Mother of God, whose perpetual help is forever needed. The group gathers to pray on Saturdays before Holy Mass.',
        ar: 'أخوية سيدة المعونة الدائمة مكرّسة للعذراء مريم أم الله، التي نحتاج معونتها الدائمة على الدوام. تجتمع الأخوية للصلاة أيام السبت قبل القداس الإلهي.',
      },
      { en: 'This prayer group welcomes all new members.', ar: 'ترحّب هذه الأخوية بجميع الأعضاء الجدد.' },
    ],
    meets: { when: { en: 'Saturdays at 5:00 PM, before the 6 PM Mass', ar: 'السبت الساعة ٥:٠٠ مساءً، قبل قداس الساعة ٦' } },
    image: '/images/olph-icon.webp',
    legacy: '/about-8-1',
  },
  {
    slug: 'aramaic-class',
    category: 'formation',
    name: { en: 'Aramaic / Chaldean Class', ar: 'صف اللغة الآرامية / الكلدانية' },
    tagline: { en: 'Learn to read and write the language of our liturgy.', ar: 'تعلّم قراءة وكتابة لغة طقوسنا.' },
    body: [
      {
        en: 'This class is taught by Deacon Luay Alyas to help our community read and write the Aramaic (Chaldean) language, the language our Lord spoke and the language of our Mass. The classes began in 2021.',
        ar: 'يُقدّم هذا الصف الشمّاس لؤي الياس لمساعدة أبناء جاليتنا على قراءة وكتابة اللغة الآرامية (الكلدانية)، اللغة التي تكلّم بها ربّنا ولغة قدّاسنا. بدأت الصفوف عام ٢٠٢١.',
      },
      {
        en: 'Students are already reading and serving the Mass using what they have learned. It is an honor to see the men and women of our parish learn to read, write, and serve the Mass in our own language, carrying our traditions forward.',
        ar: 'يقرأ الطلاب الآن ويخدمون القداس مستخدمين ما تعلّموه. إنه لشرف أن نرى رجال ونساء رعيتنا يتعلّمون القراءة والكتابة وخدمة القداس بلغتنا، حاملين تقاليدنا إلى الأمام.',
      },
      {
        en: 'Also a path for anyone who wishes to serve alongside the deacons. To register, call the parish office.',
        ar: 'وهو أيضاً طريق لكل من يرغب في الخدمة مع الشمامسة. للتسجيل، اتصل بمكتب الكنيسة.',
      },
    ],
    meets: { when: { en: 'Tuesdays at 6:00 PM', ar: 'الثلاثاء الساعة ٦:٠٠ مساءً' } },
    leaders: { en: 'Teacher: Deacon Luay Alyas', ar: 'المعلّم: الشمّاس لؤي الياس' },
    image: '/images/garshuni-text-1.webp',
    imageFit: 'contain',
    gallery: ['/images/garshuni-text-2.webp', '/images/chaldean-language.webp'],
    legacy: '/about-3',
  },
  {
    slug: 'deacons',
    category: 'altar',
    name: { en: 'Deacons / Shamasha', ar: 'الشمامسة' },
    tagline: { en: 'Serving at the altar on Sundays, holidays and feast days.', ar: 'نخدم على المذبح في أيام الآحاد والأعياد والمناسبات.' },
    body: [
      {
        en: 'Our deacons (shamasha) serve the Holy Mass on Sundays, holidays and feast days, chanting the ancient prayers of the Chaldean liturgy and assisting the priest at the altar.',
        ar: 'يخدم شمامستنا القداس الإلهي في أيام الآحاد والأعياد والمناسبات، مرتّلين الصلوات العريقة للطقس الكلداني ومساعدين الكاهن على المذبح.',
      },
      {
        en: 'Men who feel called to serve are encouraged to begin with the Aramaic / Chaldean class.',
        ar: 'نشجّع الرجال الذين يشعرون بدعوة للخدمة على البدء بصف اللغة الآرامية / الكلدانية.',
      },
    ],
    meets: { when: askOffice },
    image: '/images/deacons.webp',
  },
  {
    slug: 'altar-servers',
    category: 'altar',
    name: { en: 'Altar Boys & Girls', ar: 'خدّام المذبح' },
    tagline: { en: 'Young servers at Sunday, holiday and feast-day Masses.', ar: 'خدّام صغار في قداديس الآحاد والأعياد.' },
    body: [
      {
        en: 'Our altar boys and girls serve at Masses on Sundays, holidays and feast days. It is a beautiful way for children to grow close to the Eucharist and learn the Mass from the inside.',
        ar: 'يخدم أولادنا وبناتنا على المذبح في قداديس الآحاد والأعياد والمناسبات. إنها طريقة جميلة ليقترب الأطفال من القربان المقدس ويتعلّموا القداس من الداخل.',
      },
    ],
    meets: { when: askOffice },
    image: '/images/altar-servers.webp',
    imageFit: 'contain',
  },
  {
    slug: 'parish-council',
    category: 'care',
    name: { en: 'Parish Council', ar: 'المجلس الخورني' },
    tagline: { en: 'Serving all of the Church\'s needs.', ar: 'نخدم جميع احتياجات الكنيسة.' },
    body: [
      {
        en: 'The Parish Council works alongside our pastor to serve all of the Church\'s needs, from events and facilities to welcoming new families. Council members are available after Sunday Masses.',
        ar: 'يعمل المجلس الخورني إلى جانب كاهن الرعية لخدمة جميع احتياجات الكنيسة، من المناسبات والمرافق إلى الترحيب بالعائلات الجديدة. أعضاء المجلس متواجدون بعد قداديس الأحد.',
      },
    ],
    meets: { when: askOffice },
    image: '/images/sanctuary-full.webp',
  },
  {
    slug: 'decoration',
    category: 'care',
    name: { en: 'Decoration Group', ar: 'مجموعة التزيين' },
    tagline: { en: 'Preparing the church for every feast day and holiday.', ar: 'نُعِدّ الكنيسة لكل عيد ومناسبة.' },
    body: [
      {
        en: 'Be part of the group that prepares our church for feast days and holidays, from Christmas and Easter to the Feast of the Sacred Heart, so that our worship is surrounded by beauty.',
        ar: 'كن جزءاً من المجموعة التي تُعِدّ كنيستنا للأعياد والمناسبات، من الميلاد والقيامة إلى عيد القلب الأقدس، لتكون عبادتنا محاطة بالجمال.',
      },
    ],
    meets: { when: askOffice },
    image: '/images/stained-glass.webp',
  },
  {
    slug: 'cleaning',
    category: 'care',
    name: { en: 'Cleaning Group', ar: 'مجموعة التنظيف' },
    tagline: { en: 'Meeting weekly to prepare the church for Sundays and feast days.', ar: 'نجتمع أسبوعياً لتحضير الكنيسة للآحاد والأعياد.' },
    body: [
      {
        en: 'This group meets every week to prepare the church for Sundays and feast days. It is quiet, humble service, and it makes God\'s house ready to welcome everyone.',
        ar: 'تجتمع هذه المجموعة كل أسبوع لتحضير الكنيسة للآحاد والأعياد. إنها خدمة هادئة ومتواضعة تجعل بيت الله مستعداً لاستقبال الجميع.',
      },
    ],
    meets: { when: { en: 'Weekly. Contact the office for the current day.', ar: 'أسبوعياً. تواصل مع المكتب لمعرفة اليوم الحالي.' } },
    image: '/images/cleaning.webp',
    imageFit: 'contain',
  },
];

export const ministryBySlug = (slug: string) => ministries.find((m) => m.slug === slug);
