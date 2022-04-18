/* eslint-disable consistent-return */
import { filter } from 'lodash';

const search = (obj, q) => filter(obj, (el) => {
  if (el.name.includes(q) || el.count === Number(q)) {
    return true;
  }
});

export default search;
