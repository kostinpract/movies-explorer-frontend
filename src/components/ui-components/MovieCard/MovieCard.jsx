import "./MovieCard.css";
import likeIcon from "../../../images/like-icon.svg";

function MovieCard({ title, duration, imageUrl }) {
  return (
    <li className="movie-card">
      <div className="movie-card__info">
        <p className="movie-card__title">{title}</p>
        <p className="movie-card__duration">{duration}</p>
        <button className="movie-card__like-button" type="button">
          <img src={likeIcon} alt="кнопка добавления в избранное" />
        </button>
      </div>

      <img
        className="movie-card__movie-cover"
        src={imageUrl}
        alt="обложка фильма"
      />
    </li>
  );
}

export default MovieCard;
