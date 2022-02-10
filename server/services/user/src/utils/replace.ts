export const replaceIfPossible = (base: string, searchValue: string | RegExp, replaceValue: string): string => {
  if(!base) return '';
  return base.replace(searchValue, replaceValue);
}