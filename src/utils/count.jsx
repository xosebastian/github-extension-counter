import { values, groupBy } from 'lodash';

const count = (obj) => values(groupBy(obj)).map((d) => ({ name: d[0], count: d.length }));
export default count;
