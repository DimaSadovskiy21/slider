import { useEffect, useState } from 'react';

import { TData } from 'types';
import { api } from 'api';
import { Error, Loader, Slider } from 'components';

const SliderPage = () => {
  const [items, setItems] = useState<TData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .getItems()
      .then((data) => setItems(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <Error err={error} />;

  return <>{loading ? <Loader /> : <Slider items={items} />}</>;
};

export default SliderPage;