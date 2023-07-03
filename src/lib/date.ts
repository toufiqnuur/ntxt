const formatRelative = (date: number | string) => {
  const curr = new Date();
  const post = new Date(date);

  const diff = curr.getTime() - post.getTime();
  const dif_s = ~~(diff / 1000);
  const dif_m = ~~(diff / (1000 * 60));
  const dif_H = ~~(diff / (1000 * 3600));
  const dif_D = ~~(diff / (1000 * 3600 * 24));

  const dtime = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  })
    .format(post)
    .replace("Sept", "Sep");

  if (post.getFullYear() < curr.getFullYear()) {
    return dtime;
  }
  if (post.getMonth() < curr.getMonth()) {
    return dtime.slice(0, 6);
  }
  if (dif_D > 0) {
    return `${dif_D}d`;
  }
  if (dif_H > 0) {
    return `${dif_H}h`;
  }
  if (dif_m > 0) {
    return `${dif_m}m`;
  }
  if (dif_s > 0) {
    return `${dif_s}s`;
  }
  return "now";
};

export { formatRelative };
