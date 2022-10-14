export function getLocalTime(): String {
  let localHour = new Date().getHours();
  let localMin = new Date().getMinutes();
  let time: String;
  if (localMin < 10) time = `${localHour}:0${localMin}`;
  else time = `${localHour}:${localMin}`;
  return time;
}
