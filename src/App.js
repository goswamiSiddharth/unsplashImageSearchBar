import { createContext, useState } from "react";
import Background from "./components/Background";
import Images from "./components/Images";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

export const ImageContext = createContext();

function App() {

  const [searchImage, setSearchImage] = useState('');

  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=${
      process.env.REACT_APP_ACCESS_KEY}`);
      
      console.log(response);

      const value = {
        response,
        isLoading,
        error,
        fetchData,
        searchImage,
        setSearchImage
      }

  return (
    <ImageContext.Provider value={value}>
      <Background>
        <SearchField />
      </Background>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
