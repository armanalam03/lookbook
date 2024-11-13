export const convertToMiliSeconds = (seconds) => {
  return seconds ? seconds.replace("s", "") * 1000 : null;
};
