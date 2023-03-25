// simple validation
// https://dev.to/calvinpak/simple-url-validation-with-javascript-4oj5
/**
 * isValidUrl
 * @param {string} url
 * @returns boolean
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
};
