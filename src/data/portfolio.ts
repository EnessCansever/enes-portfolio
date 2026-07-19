import type {
  ContactItem,
  ExperienceItem,
  FocusItem,
  HeroStat,
  HighlightItem,
  NavigationItem,
  ProjectItem,
  SkillGroup,
} from '../types/portfolio'

export const navigationItems: NavigationItem[] = [
  { label: 'Hakkımda', href: '#about' },
  { label: 'Yetkinlikler', href: '#skills' },
  { label: 'Projeler', href: '#projects' },
  { label: 'Deneyim', href: '#experience' },
  { label: 'Odak Alanlarım', href: '#focus' },
  { label: 'İletişim', href: '#contact' },
]

export const heroStats: HeroStat[] = [
  { value: 'Odak', label: 'React ile kullanıcı arayüzleri geliştirme' },
  { value: 'Backend', label: 'Node.js, Express ve MongoDB ile API geliştirme' },
  { value: 'Yaklaşım', label: 'Sade, anlaşılır ve sürdürülebilir proje yapısı' },
]

export const aboutHighlights: HighlightItem[] = [
  {
    title: 'Eğitmenlik geçmişi',
    description: 'Frontend temellerini başlangıç seviyesindeki öğrencilere anlatarak teknik konuları sadeleştirme ve anlaşılır örneklerle aktarma pratiği kazandım.',
  },
  {
    title: 'Proje odaklı gelişim',
    description: 'Fixora, berber randevu sistemi ve Node.js blog sistemi gibi projelerle öğrendiklerimi gerçek uygulama akışlarına dönüştürüyorum.',
  },
  {
    title: 'Gelişim hedefi',
    description: 'React, TypeScript, Node.js ve MongoDB tarafında daha sağlam, sürdürülebilir ve canlıya alınabilir projeler geliştirmeye odaklanıyorum.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'JWT Authentication'],
  },
  {
    title: 'Araçlar',
    items: ['Git', 'GitHub', 'Vite', 'Vercel', 'Render', 'Postman / Thunder Client', 'VS Code'],
  },
  {
    title: 'Geliştirmeye Devam Ettiklerim',
    items: ['TypeScript', 'Backend mimarisi', 'Authentication akışları', 'API tasarımı', 'SEO temelleri'],
  },
]

export const projectItems: ProjectItem[] = [
  {
    name: 'Fixora',
    category: 'AI / Debugging',
    description: 'AI destekli hata analizi ve çözüm önerileri sunan, geliştiriciler için hazırlanmış full-stack web uygulaması.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    liveUrl: 'https://getfixora.dev/',
    githubUrl: 'https://github.com/EnessCansever/fixora',
    images: ['/projects/fixora1.png', '/projects/fixora2.png', '/projects/fixora3.png'],
    features: [
      'Gemini API ile kod hatalarını analiz edip olası nedenleri özetler',
      'Adım adım çözüm önerileri sunan sade bir debugging akışı',
      'React + Node.js/Express + MongoDB ile uçtan uca full-stack mimari',
    ],
    accent: 'indigo',
    featured: true,
  },
  {
    name: 'JobFit TR',
    category: 'Kariyer / İş Eşleştirme',
    description: 'Junior geliştiriciler için iş ilanı uygunluk analizi ve başvuru takip paneli.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'LocalStorage'],
    liveUrl: 'https://jobfit-tr.vercel.app',
    githubUrl: 'https://github.com/EnessCansever/jobfit-tr',
    images: [
      '/projects/jobfit-tr-dashboard.png',
      '/projects/jobfit-tr-saved-applications.png',
      '/projects/jobfit-tr-analysis-summary.png',
    ],
    features: [
      'İş ilanlarını junior profiline göre uygunluk açısından değerlendirir',
      'Başvuruları tek panelden takip etmeyi sağlar',
      'LocalStorage tabanlı, backend gerektirmeyen hafif bir mimari',
    ],
    accent: 'violet',
    featured: true,
  },
  {
    name: 'Berber Randevu Yönetim Sistemi',
    category: 'Full-Stack / Randevu',
    description: 'Müşteri ve berber rolleri için randevu oluşturma, hizmet yönetimi ve onay akışlarını içeren full-stack uygulama.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    liveUrl: '#',
    githubUrl: 'https://github.com/EnessCansever/barber-appointment-management-system',
    images: ['/projects/barber1.png', '/projects/barber2.png', '/projects/barber3.png'],
    features: [
      'Rol bazlı yetkilendirme ile müşteri ve berber akışlarını ayırır',
      'Hizmet yönetimi ve randevu onay/iptal durumlarını kapsar',
      'JWT tabanlı authentication ile güvenli oturum yönetimi',
    ],
    accent: 'blue',
  },
  {
    name: 'Node.js Blog Sistemi',
    category: 'Node.js / Backend',
    description: 'Node.js core modülleriyle geliştirilen, daha sonra Express.js yapısına taşınan temel blog sistemi.',
    stack: ['Node.js', 'Express.js', 'File System', 'Events', 'REST'],
    liveUrl: '#',
    githubUrl: 'https://github.com/EnessCansever/basit-blog-sistemi',
    features: [
      'Routing ve dosya tabanlı veri yönetimini sıfırdan Node.js core ile kurar',
      'Event sistemi ile temel backend mantığını uygular',
      'Daha sonra Express.js yapısına taşınarak REST prensipleriyle güçlendirilir',
    ],
    accent: 'slate',
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    period: '2024',
    title: 'Frontend Developer Eğitmeni — Digiway Akademi',
    description: 'HTML, CSS, JavaScript, Bootstrap ve React temelleri üzerine başlangıç seviyesindeki öğrencilere eğitim verdim. Teknik konuları sadeleştirme, pratik örneklerle anlatma ve öğrencilerin proje geliştirme sürecine destek olma deneyimi kazandım.',
  },
  {
    period: '2024 - 2026',
    title: 'Kişisel Projeler ve Full-Stack Gelişim',
    description: 'React, Node.js, Express ve MongoDB ile gerçek ürün akışları kurarak full-stack yetkinliğimi üretim seviyesine taşıdığım süreç. Fixora ve JobFit TR gibi projelerde uçtan uca geliştirme, deploy ve bakım sorumluluğunu üstlendim.',
  },
]

export const focusItems: FocusItem[] = [
  {
    title: 'React ve TypeScript',
    description: 'Component yapısı, state yönetimi, form akışları ve kullanıcı arayüzü geliştirme pratiğimi güçlendiriyorum.',
  },
  {
    title: 'Node.js ve Backend',
    description: 'Express, MongoDB, JWT ve REST API yapılarıyla backend tarafında daha düzenli proje geliştirmeye odaklanıyorum.',
  },
  {
    title: 'Canlıya alma ve ürün kalitesi',
    description: 'Vercel, Render, SEO, hata yönetimi ve kullanıcı deneyimi tarafında projelerimi daha üretim seviyesine yaklaştırıyorum.',
  },
]

export const contactItems: ContactItem[] = [
  {
    label: 'E-posta',
    value: 'enesscansever@hotmail.com',
    href: 'mailto:enesscansever@hotmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/enes-cansever-478766244',
    href: 'https://www.linkedin.com/in/enes-cansever-478766244/',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/EnessCansever',
    href: 'https://github.com/EnessCansever',
    external: true,
  },
]