import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import "../App.css";

const URL = "https://api.bigcartel.com/endlehomegoods/products.js";

export const Card = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${URL}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data ? (
        <div className="card-container">
          {data?.slice(0, 9)?.map((data, id) => (
            <div className="card-content" key={id}>
              <div className="card-img">
                <img
                  src={data?.images[0].url}
                  alt="product images"
                  title={data?.name}
                />
              </div>
              <h1 className="card-text">
                {data?.name}
                <p>{data?.description}</p>
              </h1>
              <div />
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
