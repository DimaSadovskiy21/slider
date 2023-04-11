import { useGetData } from "api";
import { Error, Loader, Slider } from "components";
import { data } from "data";
import { TData } from "types";

const SliderPage = () => {
  const { items, isLoading, error } = useGetData<TData[]>(data);

  if (error) return <Error message={error} />;

  return isLoading ? (
    <Loader />
  ) : items ? (
    <Slider items={items} />
  ) : (
    <div>no data(</div>
  );
};

export default SliderPage;
