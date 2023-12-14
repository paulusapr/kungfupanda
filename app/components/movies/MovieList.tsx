'use client';
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { StoreType } from "interfaces/states";
import { useUserContext } from "providers/userContext";
import { MovieType } from "interfaces/movie";
import { get } from 'services/api';

const MovieList = (props: StoreType) => {
  const { movie } = props;
  const { selected, setSelected } = useUserContext();
  const dispatch = useDispatch();

  const getMovies = async () => {
    await get('movies/api').then((res: any) => {
      const movies = res?.data?.movies;
      if (movies) {
        dispatch({
          type: "CHANGE_MOVIE",
          payload: {
            selected: movies[0].id,
            movie: movies
          }
        });
        setSelected(movies[0].id);
      }
    });
  };

  const changeMovie = (movieId: string) => {
    setSelected(movieId);
    dispatch({
      type: "CHANGE_MOVIE",
      payload: {
        selected: movieId,
      }
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movie.map((data: MovieType) => (
        <button
          onClick={() => changeMovie(data.id)}
          type="button"
          className={selected === data.id ? "active" : ""}
          key={data.id}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

function mapStateToProps(state: StoreType) {
  return state;
}

export default connect(mapStateToProps)(MovieList);
