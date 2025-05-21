import Movie from './Movie';

const Movies = ({ movies, hasSearched }) => {
  return (
    <div className='container-fluid d-flex flex-column align-items-center'>
      <div className="row cards">
        {movies.length ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <Movie movie={movie} />
            </div>
          ))
        ) : ( 
          hasSearched && (
            <div className='v-stack align-items-center justify-content-center not-found' id='error'>
                <img src="https://static27.tgcnt.ru/posts/_0/08/08f456e69ffe00eed72183b1314fd629.jpg" alt="" />
                <h1 className='mt-2'>Зря ты сюда полез</h1>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Movies;
