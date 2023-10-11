import React from 'react';
import "./SavedMovies.css";
import SearchFormSection from '../ui-components/SearchFormSection/SearchFormSection';
import MovieCard from '../ui-components/MovieCard/MovieCard';

function SavedMovies() {

  const testData = [
    {
      title: "dress",
      duration: "1 hour",
      imageUrl:
        "https://i.pinimg.com/736x/ba/19/e8/ba19e8936c391493ff14eaf69293e4c1.jpg",
    },
  ];
  return (
    <section class="saved">
      <SearchFormSection />
      <div className='saved__card-section'>
        {/* {
          testData.map((el, index) => {
            return (<MovieCard title={el.title} duration={el.duration} imageUrl={el.imageUrl} key={index} />)
          })
        } */}
        <MovieCard title={"dress"} duration={"1 hour"} imageUrl={"https://i.pinimg.com/736x/ba/19/e8/ba19e8936c391493ff14eaf69293e4c1.jpg"} />
        <MovieCard title={"dress"} duration={"1 hour"} imageUrl={"https://i.pinimg.com/736x/ba/19/e8/ba19e8936c391493ff14eaf69293e4c1.jpg"} />
        <MovieCard title={"dress"} duration={"1 hour"} imageUrl={"https://i.pinimg.com/736x/ba/19/e8/ba19e8936c391493ff14eaf69293e4c1.jpg"} />
        <MovieCard title={"dress"} duration={"1 hour"} imageUrl={"https://i.pinimg.com/736x/ba/19/e8/ba19e8936c391493ff14eaf69293e4c1.jpg"} />
        <MovieCard title={"dress"} duration={"1 hour"} imageUrl={"https://i.pinimg.com/736x/ba/19/e8/ba19e8936c391493ff14eaf69293e4c1.jpg"} />
      </div>
    </section>
  );

}

export default SavedMovies;