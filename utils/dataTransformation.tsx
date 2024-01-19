export function dataNormalisation(
  value: number,
  min: number,
  max: number
): number {
  return value - min / max - min;
}
