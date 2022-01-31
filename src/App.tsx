import React, { useEffect, useState } from 'react';
import Characters from './componentes/Characters';

import Navbar from './componentes/Navbar';
import Pagination from './componentes/Pagination';
import { CharacterInfoResponse, CharacterInfoResponseInitial, CharacterResponse, CharacterResponseInitial } from './types/Characters';



function App() {
  const [characters, setcharacters] = useState<CharacterResponse[]>([CharacterResponseInitial]);
  const [info, setinfo] = useState<CharacterInfoResponse>(CharacterInfoResponseInitial);
  const url: string = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url: string) =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setinfo(data.info);
      setcharacters(data.results);
    })
    .catch(err => console.error(err))
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }
  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  useEffect(() => {
    fetchCharacters(url);
  }, []);
  

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characterValue={characters} />
        
      </div>
    </>
  );
}

export default App;
