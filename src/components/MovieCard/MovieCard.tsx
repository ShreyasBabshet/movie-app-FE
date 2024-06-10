import styles from "./MovieCard.module.scss";
import { MovieCardProps } from "./MovieCard.types.ts";

const MovieCard = ({ movieData }: MovieCardProps) => {
  console.log(movieData);
  return (
    <section className={styles.Card}>
      <section className={styles.CardInner}>
        <section className={styles.CardTop}>
          <img src={movieData?.Poster} alt={movieData?.Title} />
        </section>
        <section className={styles.CardBottom}>
          <div className={styles.CardInfo}>
            <h4>{movieData.Title}</h4>
            <p>{movieData.Year}</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default MovieCard;
