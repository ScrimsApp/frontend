/**
 *  Parse a string into a date
 *
 * @param {date} string The string version of a date
 */
export const parseDate = (date: string) => {
  let newDate = new Date(date);

  let parsedDate = newDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return parsedDate;
};
