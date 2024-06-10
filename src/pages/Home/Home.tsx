import { useLoaderData } from "react-router";
import { getMovies } from "../../common/Apis/movieApi.ts";
import MovieListing from "../../components/MovieListing/MovieListing.tsx";
import styles from "./Home.module.scss";
import { HomeProps } from "./Home.types.ts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice.ts";

const Home = ({}: HomeProps) => {
  const dispatch = useDispatch();
  console.log("get");
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    // getMoviesList();
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

// export const MovieListLoader = async () => {
//   let movieList;
//   try {
//     movieList = await getMovies();
//   } catch (e) {
//     console.log(e);
//   }
//   return movieList;
// };
