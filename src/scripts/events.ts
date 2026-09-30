// Re-sorts server-rendered event cards in the visitor's browser so "Upcoming"
// is always accurate, even if the site hasn't been rebuilt in weeks.
//
// Markup contract:
//   [data-events-root]            wrapper (optional data-limit for the upcoming list)
//     [data-upcoming]             list for future events
//     [data-upcoming-empty]       shown when nothing is upcoming
//     [data-recent]               list for past events (optional)
//     [data-event data-end=ISO]   the cards themselves

export function sortEvents() {
  const now = Date.now();
  document.querySelectorAll<HTMLElement>('[data-events-root]').forEach((root) => {
    const upcoming = root.querySelector<HTMLElement>('[data-upcoming]');
    const recent = root.querySelector<HTMLElement>('[data-recent]');
    const empty = root.querySelector<HTMLElement>('[data-upcoming-empty]');
    const limit = Number(root.dataset.limit || 0);
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-event]'));

    // An event stays "upcoming" until the end of its day.
    const endOf = (el: HTMLElement) => {
      const d = new Date((el.dataset.end || el.dataset.start || '') + ':00');
      d.setHours(23, 59, 59);
      return d.getTime();
    };
    const future = cards.filter((c) => endOf(c) >= now).sort((a, b) => endOf(a) - endOf(b));
    const past = cards.filter((c) => endOf(c) < now).sort((a, b) => endOf(b) - endOf(a));

    const wrap = (c: HTMLElement) => (c.parentElement?.matches('li') ? c.parentElement : c);
    future.forEach((c, i) => {
      const item = wrap(c);
      if (upcoming) upcoming.appendChild(item);
      item.hidden = limit > 0 && i >= limit;
    });
    past.forEach((c) => {
      const item = wrap(c);
      if (recent) recent.appendChild(item);
      else item.hidden = true;
    });

    if (empty) empty.hidden = future.length > 0;
    if (upcoming) upcoming.hidden = future.length === 0;
    root.querySelectorAll<HTMLElement>('[data-recent-section]').forEach((s) => (s.hidden = past.length === 0));
  });
}
