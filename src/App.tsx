import React, { useEffect, useState } from "react";
import { photoAPI } from "./api/api";
import { Error, Loading, Slider } from "./components";

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


  if (error) return <Error err={error} />;

  return <>
  {loading ? <Loading /> : <Slider items={photos} />}
  </>;
}

export default App;
