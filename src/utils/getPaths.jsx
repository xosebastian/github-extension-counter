import { map, filter } from 'lodash';

const getPaths = (obj) => map(
  filter(obj, (el) => el.type === 'tree'),
  'url',
);

export default getPaths;
