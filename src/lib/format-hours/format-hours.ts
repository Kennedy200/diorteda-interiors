import { site } from "@/config/site/site";

// Groups neighbouring days with the same hours, Monday first. Returns nothing while site.hours is empty.
export function formatHours() {
  const week = site.hours;
  const groups: { days: string; time: string }[] = [];
  let start = 0;

  week.forEach((day, i) => {
    const next = week[i + 1];
    if (next && next.open === day.open && next.close === day.close) return;
    const first = week[start].short;
    groups.push({
      days: start === i ? first : `${first} to ${day.short}`,
      time: day.open ? `${day.open} to ${day.close}` : "Closed",
    });
    start = i + 1;
  });

  return groups;
}
