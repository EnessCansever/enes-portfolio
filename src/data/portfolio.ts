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
  { label: 'Yetenekler', href: '#skills' },
  { label: 'Projeler', href: '#projects' },
  { label: 'Deneyim', href: '#experience' },
  { label: 'Odak Alanlarım', href: '#focus' },
  { label: 'İletişim', href: '#contact' },
]

export const heroStats: HeroStat[] = [
  { value: 'Odak', label: 'React odaklı frontend' },
  { value: 'Stack', label: 'Node.js ile full-stack gelişim' },
  { value: 'Ton', label: 'sade ve kullanıcı odaklı arayüzler' },
]

export const aboutHighlights: HighlightItem[] = [
  {
    title: 'Çalışma yaklaşımı',
    description: 'İşlevi ve okunabilirliği önde tutan, sade ama karakterli arayüzler kurmaya çalışıyorum.',
  },
  {
    title: 'Ürün hissi',
    description: 'Kısa yolları, net hiyerarşiyi ve iyi boşluk kullanımını seven bir düzen diliyle ilerliyorum.',
  },
  {
    title: 'Büyüme alanı',
    description: 'Bu portfolyo iskeleti; içerik, gerçek projeler ve daha ince etkileşimlerle zamanla genişleyebilir.',
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
    description: 'AI destekli hata analizi ve çözüm önerileri sunan, geliştiriciler için hazırlanmış full-stack web uygulaması.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    previewLabel: 'UI / Form akışı',
    previewText: 'Kısa ve net etkileşimlerle ilerleyen, servis odaklı bir ekran mantığı.',
    accent: 'cyan',
  },
  {
    name: 'Berber Randevu Yönetim Sistemi',
    description: 'Müşteri ve berber rolleri için randevu oluşturma, hizmet yönetimi ve onay akışlarını içeren full-stack uygulama.',
    stack: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    previewLabel: 'Operasyon / Takvim',
    previewText: 'Günlük kullanımı kolaylaştıran, hızlı karar alınan bir randevu akışı.',
    accent: 'violet',
  },
  {
    name: 'Node.js Blog Sistemi',
    description: 'Node.js core modülleriyle geliştirilen, daha sonra Express.js yapısına taşınan temel blog sistemi.',
    stack: ['Node.js', 'Express.js', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    previewLabel: 'API / İçerik',
    previewText: 'Yazı yönetimi ve kullanıcı akışını birlikte taşıyan sade bir backend kurgusu.',
    accent: 'blue',
  },
  {
    name: 'React Mini Projeler',
    description: 'React temellerini pekiştirmek için geliştirilen küçük uygulamalar ve arayüz denemeleri.',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    previewLabel: 'Deneme / UI',
    previewText: 'Kısa öğrenme iterasyonlarıyla ilerleyen küçük ve temiz örnekler.',
    accent: 'cyan',
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    period: '2024 - bugün',
    title: 'Digiway Akademi',
    description: 'HTML, CSS, JavaScript, Bootstrap ve React temelleri üzerine başlangıç seviyesindeki öğrencilere eğitim verdim. Teknik konuları sadeleştirme ve pratik örneklerle anlatma üzerine deneyim kazandım.',
  },
  {
    period: '2023 - 2024',
    title: 'Kişisel Projeler ve Full-Stack Gelişim',
    description: 'React, Node.js, Express ve MongoDB ile gerçek proje akışlarını deneyerek frontend dışındaki backend tarafını da güçlendirdiğim süreç.',
  },
]

export const focusItems: FocusItem[] = [
  {
    title: 'Daha güçlü TypeScript kullanımı',
    description: 'Tip güvenliğini artıran, bakım maliyetini azaltan daha sağlam component yapıları.',
  },
  {
    title: 'Backend mimarisi',
    description: 'Express.js, MongoDB ve kimlik doğrulama akışlarını daha düzenli kurgulamak.',
  },
  {
    title: 'SEO ve erişilebilirlik',
    description: 'Arayüzün sadece şık değil, bulunabilir ve anlaşılır da olmasına özen göstermek.',
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
    value: 'LinkedIn profili',
    href: '#',
  },
  {
    label: 'GitHub',
    value: 'enesscansever',
    href: 'https://github.com/enesscansever',
    external: true,
  },
]