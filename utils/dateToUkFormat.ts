export function dateToUKFormat(date: string) {
  return new Date(date)
    .toLocaleString("en-GB", {
      timeZone: "UTC",
    })
    .split(",", 1)[0];
}
