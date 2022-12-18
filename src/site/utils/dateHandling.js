export function calculateDaysDifferenceBetweenTwoDays(date1, date2) {
  let difference = date1.getTime() - date2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

  return TotalDays;
}

export function calculateHoursDifferenceBetweenTwoDays(date1, date2) {
  let difference1 = date1.getTime() - date2.getTime();
  let TotalDays = difference1 / (1000 * 3600 * 24);

  let difference2 = date1.getTime() - date2.getTime();
  let TotalHours = Math.ceil(difference2 / (1000 * 3600));

  let remainHours = Math.abs(Math.ceil(TotalHours - TotalDays * 24));

  return remainHours;
}

export function calculateMinutesDifferenceBetweenTwoDays(date1, date2) {
  let difference1 = date1.getTime() - date2.getTime();
  let TotalDays = difference1 / (1000 * 3600 * 24);

  let difference2 = date1.getTime() - date2.getTime();
  let TotalMinutes = Math.ceil(difference2 / (1000 * 60));

  let remaiMinutes = Math.abs(Math.ceil(TotalMinutes - TotalDays * 24 * 60));

  return remaiMinutes;
}

export function calculateSecondsDifferenceBetweenTwoDays(date1, date2) {
  let difference1 = date1.getTime() - date2.getTime();
  let TotalDays = difference1 / (1000 * 3600 * 24);

  let difference = date1.getTime() - date2.getTime();
  let TotalSeconds = Math.ceil(difference / 1000);

  let remaiSeconds = Math.abs(
    Math.ceil(TotalSeconds - TotalDays * 24 * 60 * 60)
  );

  return remaiSeconds;
}
