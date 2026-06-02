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
  { label: 'Odak', href: '#focus' },
  { label: 'İletişim', href: '#contact' },
]

export const heroStats: HeroStat[] = [
  { value: '1 sayfa', label: 'tek sayfa yapı' },
  { value: 'React + TS', label: 'temiz bileşen akışı' },
  { value: 'Tailwind v4', label: 'hızlı arayüz kurulumu' },
]

export const aboutHighlights: HighlightItem[] = [
  {
    title: 'Kısa profil alanı',
    description: 'Bu alan daha sonra kişinin özeti, yaklaşımı ve odak alanları için kullanılabilir.',
  },
  {
    title: 'Düzenli yapı',
    description: 'Sekmeler, kartlar ve section tabanlı akış gelecek içeriklere kolayca uyarlanır.',
  },
  {
    title: 'Geliştirilebilir iskelet',
    description: 'İleride veri kaynağı, animasyon ya da backend entegrasyonu eklemek için hazırdır.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Araçlar',
    items: ['Vite', 'ESLint', 'Component tabanlı yapı'],
  },
  {
    title: 'Yaklaşım',
    items: ['Temiz mimari', 'Bakımı kolay kod', 'Basit tekrar kullanılabilirlik'],
  },
]

export const projectItems: ProjectItem[] = [
  {
    name: 'Proje Kartı 01',
    description: 'İleride gerçek bir proje özeti için kullanılacak placeholder kart.',
    stack: ['React', 'Tailwind'],
  },
  {
    name: 'Proje Kartı 02',
    description: 'İkinci örnek kart; içerik geldiğinde aynı düzen korunabilir.',
    stack: ['TypeScript', 'Vite'],
  },
  {
    name: 'Proje Kartı 03',
    description: 'Kısa açıklama ve etiketler için hazırlanmış üçüncü yer tutucu.',
    stack: ['UI', 'Layout'],
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    period: '2024 - bugün',
    title: 'Portfolyo iskeleti',
    description: 'Bu satır, ileride gerçek iş/öğrenim deneyimlerinin eklenmesi için örnek bir alan sunar.',
  },
  {
    period: '2023 - 2024',
    title: 'Bileşen tabanlı geliştirme',
    description: 'Tekrar kullanılabilir yapı ve sade API tasarımı için hazırlanmış örnek zaman çizelgesi.',
  },
]

export const focusItems: FocusItem[] = [
  {
    title: 'Net ilk ekran',
    description: 'İlk bakışta ne sunulduğunu belli eden, sade ve dengeli bir hero bölümü.',
  },
  {
    title: 'Okunabilir yapı',
    description: 'Klasörler, bileşenler ve veri katmanı büyüdükçe dağılmayacak şekilde düzenlendi.',
  },
  {
    title: 'Genişleyebilir iskelet',
    description: 'Gerçek içerik, animasyon veya CMS entegrasyonu eklemek için uygun temel.',
  },
]

export const contactItems: ContactItem[] = [
  {
    label: 'E-posta',
    value: 'merhaba@ornek.com',
    href: 'mailto:merhaba@ornek.com',
  },
  {
    label: 'LinkedIn',
    value: 'Profil bağlantısı',
    href: 'https://www.linkedin.com',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Kod deposu',
    href: 'https://github.com',
    external: true,
  },
]