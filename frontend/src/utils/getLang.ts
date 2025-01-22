export function getLang(): string {
  const lang = localStorage.getItem('lang')
  if (lang) {
    return lang
  }
  localStorage.setItem('lang', 'en')
  return 'en'
}
