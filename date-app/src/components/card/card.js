import React, { useState, useEffect } from "react";
import ladyGnome from "../gnomes/lady.jpg";
import gardenGnome from "../gnomes/garden.jpg";
import laughGnome from "../gnomes/laugh.jpg";
import militaryGnome from "../gnomes/military.jpg";
import redHatGnome from "../gnomes/red-hat.jpg";
import summerGnome from "../gnomes/summer.jpg";

const allGnomes = [
    { file: gardenGnome, description: "garden gnome", price: 400 },
    { file: ladyGnome, description: "lady gnome", price: 120 },
    { file: laughGnome, description: "laughing gnome", price: 100 },
    { file: militaryGnome, description: "military gnome", price: 80 },
    { file: redHatGnome, description: "red hat", price: 10 },
    { file: summerGnome, description: "double summer", price: 80 }
]

function Card(props) {
    const [currentGnomeIndex, setCurrentGnomeIndex] = useState(0);
    const [prospects, setProspects] = useState([]);
    const [isYes, setIsYes] = useState(false);
    const gnome = allGnomes[currentGnomeIndex];
    const [gnomePrice, setGnomePrice] = useState(Math.floor(Math.random() * 400) + 1);

    const nextGnome = (isYes) => {
        if (isYes && gnomePrice <= 100) {
            setProspects((prevProspects) => [...prevProspects, gnome]);
            // setIsYes(false);
            console.log(prospects)
        }
        setCurrentGnomeIndex((prevIndex) => (prevIndex + 1) % allGnomes.length);
         // Wraps around to the first gnome after the last gnome
        };
        useEffect(() => {
            setGnomePrice(Math.floor(Math.random() * 400) + 1);
        }, [currentGnomeIndex]);
    


    return (
        <div>
        <div className="w-25 position-absolute">
                <h3>Prospects</h3>
                <ul className="list-group float-end">
                    {prospects.map((prospect) => (
                        <li className="list-group-item" key={prospect.description}>
                            {prospect.description}
                        </li>
                    ))}
                </ul>

            </div>
        <div className="d-flex flex-column mt-5 w-100 align-items-center border">
            <h1>Do you like this gnome?</h1>
            
            <div className="card p-3">
                <h5>{gnome.description.toUpperCase()}</h5>
            <img src={gnome.file} className="d-block" style={{width: "200px", height: "200px"}} alt={gnome.description} />
            <div>
                <p>{gnomePrice} kr</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
            <button className="btn btn-secondary"onClick={ () =>nextGnome(false)}>No</button>
            <button className="btn btn-secondary"onClick={ () =>nextGnome(true)}>Yes</button>
</div>  
        </div>
        </div>
        </div>
    ); 
}

export default Card;
