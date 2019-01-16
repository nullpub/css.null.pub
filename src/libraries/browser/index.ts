import { isNil } from 'lodash-es';

export const scrollToHash = (id: string) => {
  const el = document.getElementById(id);
  if (!isNil(el)) {
    return el.scrollIntoView();
  }
  console.warn(`Could not scroll to element with id ${id}.`);
};
