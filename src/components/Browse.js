import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
 
   useNowPlayingMovies();
   usePopularMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch?(
        <GptSearch /> 
        ):(
           <>
            <MainContainer />
             <SecondaryContainer /> 
           </>
        )
      }
      
      
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