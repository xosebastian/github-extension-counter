import { orderBy as _ordeyBy } from 'lodash';

const orderBy = (obj, o) => _ordeyBy(obj, ['count'], [o]);

export default orderBy;
