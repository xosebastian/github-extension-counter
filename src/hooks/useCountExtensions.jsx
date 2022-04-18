import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  count, getExtensions, getPaths, search, orderBy,
} from '../utils';

const useCountExtensions = (path, q = '', o = 'asc') => {
  const [extensions, setExtensions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setExtensions([]);
    const fetchingPaths = async (paths = []) => {
      if (paths.length) {
        try {
          const {
            data: { tree },
          } = await axios(paths.shift());

          setExtensions((oldExtensions) => [
            ...oldExtensions,
            ...getExtensions(tree),
          ]);
          fetchingPaths([...paths, ...getPaths(tree)]);
        } catch (e) {
          setLoading(true);
          throw new Error(e);
        }
      }
      return setLoading(true);
    };
    fetchingPaths([path]);
  }, [path]);

  const data = orderBy(search(count(extensions), q), o);

  return [data, loading];
};

export default useCountExtensions;
