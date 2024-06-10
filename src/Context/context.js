//context <API> (warehouse)
// Provider (delivery)
// Consumer / useContext hooks (you)
import React, { useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

//We need to create a provider
const AppProvider = ({ children }) => {
  const [isLoading,setIsLoading] = useState(true);
  const [movie,setMovie] = useState([]);
  const [isError,setIsError] = useState({show:"false",msg:""});
  const [query,setQuery] = useState("Titanic");

  const getMovies = async(url)=>{
    setIsLoading(true);
      try{
        const res = await fetch(url);
        const data = await res.json();

        if(data.Response === "True"){
          setIsLoading(false);
          setMovie(data.Search);
          setIsError({
            show:false,
            msg:""
          });
        }else{
          setIsError({
            show:true,
            msg:data.Error
          });
        }
      }catch(error){
        console.log(error);
      }
  }
  useEffect(()=>{
    var timerOut = setTimeout(()=>{
      getMovies(`${API_URL}&s=${query}`);
      console.log('response test');
    },1000);
    
    return ()=> clearTimeout(timerOut);
  },[query]);
  return <AppContext.Provider value={{isLoading,isError,movie, query,setQuery}}>{children}</AppContext.Provider>;
};

//global custom hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
