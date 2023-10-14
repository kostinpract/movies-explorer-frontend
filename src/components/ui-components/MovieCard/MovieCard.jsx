import "./MovieCard.css";
import { useState } from "react";

function MovieCard({ title, duration, imageUrl }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <li className="movie-card">
      <div className="movie-card__info">
        <p className="movie-card__title">{title}</p>
        <p className="movie-card__duration">{duration}</p>
        <button
          className={`movie-card__like-button 
          movie-card__like-button_type_${isSaved ? "active" : "non-active"}`}
          type="button"
          onClick={() => {
            setIsSaved(!isSaved);
          }}
        ></button>
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
