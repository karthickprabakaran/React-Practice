import { useEffect, useState } from "react";
import "./styles.css";

export function LoadMore({ limit }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [skip, setSkip] = useState(0);
  const pageLimit = limit ?? 10;
  async function fetchData() {
    setLoading(true);
    setHidden(true);

    const url = `https://dummyjson.com/products?limit=${pageLimit}&skip=${skip}`;
    let data = await fetch(url);
    const json = await data.json();
    console.log(json.products);
    setData((prev) => {
      return [...prev, ...json.products];
    });

    setSkip((prev) => prev + pageLimit);
    setLoading(false);
    setHidden(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>this is the load more</h1>

      {loading ? (
        <h1>Data is Loading</h1>
      ) : (
        <>
          {data.map((item, index) => {
            return (
              <>
                <img src={item.thumbnail} alt={item.title} />
              </>
            );
          })}
        </>
      )}
      <button className={hidden ? "hide" : ""} onClick={() => fetchData()}>
        Load More
      </button>
    </>
  );
}

