import React, { useState } from "react";

import ladyGnome from "../gnomes/lady.jpg";
import gardenGnome from "../gnomes/garden.jpg";
import laughGnome from "../gnomes/laugh.jpg";
import militaryGnome from "../gnomes/military.jpg";
import redHatGnome from "../gnomes/red-hat.jpg";
import summerGnome from "../gnomes/summer.jpg";

const allGnomes = [
    { file: gardenGnome, description: "garden gnome", price: 400 },
    { file: ladyGnome, description: "lady gnome", price: 120 },
    { file: laughGnome, description: "laughing gnome", price: 300 },
    { file: militaryGnome, description: "military gnome", price: 240 },
    { file: redHatGnome, description: "red hat", price: 10 },
    { file: summerGnome, description: "double summer", price: 80 }
]

function Card() {
    const [currentGnomeIndex, setCurrentGnomeIndex] = useState(0);

    const nextGnome = () => {
        setCurrentGnomeIndex((prevIndex) => {
            return (prevIndex + 1) % allGnomes.length;  // Wraps around to the first gnome after the last gnome
        });
    };

    const gnome = allGnomes[currentGnomeIndex];

    return (
        <div className="d-flex flex-column mt-5 w-100 align-items-center border">
            <div className="card p-3">
                <h5>{gnome.description.toUpperCase()}</h5>
            <img src={gnome.file} className="d-block" style={{width: "200px", height: "200px"}} alt={gnome.description} />
            <div>
                <p>{gnome.price} kr</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
            <button className="btn btn-secondary"onClick={nextGnome}>No</button>
            <button className="btn btn-secondary"onClick={nextGnome}>Yes</button>
</div>  
        </div>
        </div>
    ); 
}

export default Card;
