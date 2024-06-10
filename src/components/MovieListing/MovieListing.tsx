import { useSelector } from "react-redux";
import styles from "./MovieListing.module.scss";
import { MovieListingProps } from "./MovieListing.types.ts";
import { getAllMovies } from "../../features/movies/movieSlice.ts";
import MovieCard from "../MovieCard/MovieCard.tsx";

const MovieListing = ({}: MovieListingProps) => {
  const movies = useSelector(getAllMovies);
  console.log(movies);

  const isDataAvailable = movies?.data?.Response === "True";
  console.log(isDataAvailable);
  console.log(movies?.data?.Search);
  const moviesArray = movies?.data?.Search || [];
  console.log(moviesArray);

  return (
    <section className={styles.MovieWrapper}>
      <section className={styles.MovieList}>
        <h2>Movies</h2>
        <div className={styles.MovieContainer}>
          {isDataAvailable ? (
            moviesArray?.map((movie: any, index: number) => {
              return <MovieCard key={index} movieData={movie} />;
            })
          ) : (
            <div className="Error">
              <h3 className="ErrorMsg">No Data</h3>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default MovieListing;
