import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieD, setMovieD] = useState([]);
  const { id } = useParams();
  // console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json);
    setMovieD(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return <div>{loading ? <h2>Detail Loading...</h2> : (
    <div>
      {movieD.map((movie) => )}

    </div>

  )}</div>;
}

export default Detail;
