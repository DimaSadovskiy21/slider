import { api } from 'api';
import { Error, Loader, Slider } from 'components';
import { useGetData } from 'api/useGetData';
import { TData } from 'types';

const SliderPage = () => {
  const {items, isLoading, error} = useGetData<TData[] | undefined>(api.getItems());

  if (error) return <Error message={error} />;

  return <>{isLoading ? <Loader /> : items && <Slider items={items} />}</>;
};

export default SliderPage;