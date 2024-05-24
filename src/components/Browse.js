import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";

const Browse = () => {
 
   useNowPlayingMovies();
   usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
          MainContainer
            - videoBackground
            - VideoTitle
          SecondaryContainer
            - MovieLost * N
            - Cards * N  
      */}
    </div>
  )
}

export default Browse