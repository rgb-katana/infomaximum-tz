type PluralVariants = {
  one: string;
  few: string;
  many: string;
  [key: string]: string;
};

export default function plural(
  value: number,
  variants: PluralVariants,
  locale = 'ru-RU'
): string {
  const key = new Intl.PluralRules(locale).select(value);
  return variants[key] || '';
}
