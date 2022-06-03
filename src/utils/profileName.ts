export const profileName = (name: string) => {
  return name
    .split(" ")
    .map((el) => (el = el[0]))
    .join("")
    .toUpperCase()
    .slice(0, 3);
};
