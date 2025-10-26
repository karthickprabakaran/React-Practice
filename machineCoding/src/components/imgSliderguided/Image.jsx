import { useEffect, useState } from "react"

import './style.css';


export const Image = ({ url, limit, page }) => {

  const [images, setImages] = useState([]);
  const [currentSlide, SetcurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  async function fetchImages(getUrl, limit, page) {

    const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
    const data = await response.json();
    console.log(data);


    if (data) {
      setImages(data);
      setLoading(false);
    }



  }

  useEffect(() => {
    if (url) fetchImages(url, limit, page);
  }, [url])

  console.log(images);


  if (error !== null) {
    return (
      <>
        <h1>An Error Occured</h1>
      </>
    )
  }


  return (
    <div className="container">
      <p className="arrow arrow-left">{'<'}</p>
      {
        images && images.length ? images.map((img, key) => {
          return (
            <img
              src={img.download_url}
              key={img.id}
              className="current-image"
            />
          )
        })
          : null
      }
      <p className="arrow">></p>
      <span className="circle-indicators">
        {
          images && images.length ?
            images.map((img) => {
              return <button key={img.id} className="current"></button>
            })

            : null
        }

      </span>


    </div>

  )

}
