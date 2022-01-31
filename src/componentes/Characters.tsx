import React, { FC } from 'react';
import { CharacterResponse } from '../types/Characters';

interface CharactersProps {
    characterValue: CharacterResponse[];
}

const Characters: FC<CharactersProps> = ({characterValue}) => {
  return (
    <div className="row">
        {
            characterValue.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{minWidth: "200px" }}>
                        <img src={item.image} alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <hr />
                            <p>species: {item.species}</p>
                            <p>location: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    );
};

export default Characters;