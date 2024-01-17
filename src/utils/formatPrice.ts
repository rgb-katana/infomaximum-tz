export default function formatPrice(
  value: string,
  locale: string = 'ru-RU',
  options: Intl.NumberFormatOptions = {}
): string {
  const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
  return new Intl.NumberFormat(locale, options)
    .format(numericValue)
    .replace(/,/g, ' ');
}
