import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import HomePage from "./Components/Home";
import Search from "./Components/Search";

const Home: NextPage = () => {
  //STATE DE TODOS LOS ARTICULOS ENCONTRADOS
  const [homeArticles, setHomeArticles] = useState<any[]>([]);
  //STATE DEL INPUT SEARCH
  const [inputSearch, setInputSearch] = useState<string>("");
  //STATE DE ERROR
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (process.env.API_URL) {
      axios
        .get(process.env.API_URL)
        .then(({ data }) => {
          setHomeArticles(data.hits);
        })
        .catch((error) => setError(true));
    }
  }, []);

  //FUNCION PARA HACER LA BUSQUEDA SEGUN EL INPUT
  const handleSubmitSearch = (e?: any) => {
    e.preventDefault();
    setError(false);

    if (process.env.API_URL) {
      axios(`${process.env.API_URL}${inputSearch}`)
        .then(({ data }) => {
          setHomeArticles(data.hits);
        })
        .catch((error) => setError(true));
    }
  };

  return (
    <main>
      <Search
        handleSubmitSearch={handleSubmitSearch}
        setInputSearch={setInputSearch}
      />
      {error ? (
        <div className="error">
          <h1>Error</h1>
        </div>
      ) : (
        <HomePage homeArticles={homeArticles} />
      )}
    </main>
  );
};

export default Home;
