import React from "react";
import { connect } from "react-redux";
import { UserLayout, MovieHeader, MovieDetail, MovieList } from "components";
import { MovieType } from "interfaces/movie";
import { StoreType } from "interfaces/states";
import { useUserContext } from "providers/userContext";

const HomeContainer = (props: StoreType) => {
  const { movie } = props;
  const { selected } = useUserContext();

  return (
    <UserLayout>
      <div className="home-container">
        <MovieHeader title="🎥 Movie Catalogue" />
        <div className="home-content">
          <MovieDetail
            {...(movie.find((movie: MovieType) => movie.id === selected) ?? movie[0])}
          />
          <MovieList />
        </div>
      </div>
    </UserLayout>
  );
};

function mapStateToProps(state: StoreType) {
  return state;
}

export default connect(mapStateToProps)(HomeContainer);
