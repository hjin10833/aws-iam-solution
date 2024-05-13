export default function isEmptyArrayHelper(list: unknown[]): boolean {
  return Array.isArray(list) && list.length === 0;
}
