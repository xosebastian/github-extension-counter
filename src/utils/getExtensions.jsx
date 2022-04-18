import { map, filter } from 'lodash';

const getExtensions = (obj) => map(
  filter(obj, (el) => el.type === 'blob'),
  ({ path }) => path.split('.').pop(),
);
export default getExtensions;
