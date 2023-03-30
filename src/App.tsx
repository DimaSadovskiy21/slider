import React, { useEffect, useState } from "react";
import { photoAPI } from "./API/api";
import { Loading } from "./assets/common/Loading/Loading";
import { Error } from "./assets/common/Error/Error";
import { Slider } from "./components/Slider/Slider";
import { DataType } from "./models/Data";

function App() {
  const [photos, setPhotos] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    photoAPI
      .getPhotos()
      .then((data) => setPhotos(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading && !photos.length) return <Loading />;

  if (error) return <Error err={error} />;

  return <Slider photos={photos} />;
}

export default App;
