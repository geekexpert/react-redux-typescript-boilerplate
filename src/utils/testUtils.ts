
// global utility functions for the application
export const makeSampleTextKebab = (text: string) : string => {
  return text.toLowerCase().replace(/ /g, '-');
};