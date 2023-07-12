import React, { useState, useEffect } from "react";
import ladyGnome from "../gnomes/lady.jpg";
import gardenGnome from "../gnomes/garden.jpg";
import laughGnome from "../gnomes/laugh.jpg";
import militaryGnome from "../gnomes/military.jpg";
import redHatGnome from "../gnomes/red-hat.jpg";
import summerGnome from "../gnomes/summer.jpg";
import match from "../gnomes/nedladdning.png";

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
    const [lastMatchedGnome, setLastMatchedGnome] = useState(null);
    const gnome = allGnomes[currentGnomeIndex];
    const [gnomePrice, setGnomePrice] = useState(Math.floor(Math.random() * 400) + 1);
    const [showMatch, setShowMatch] = useState(false);

    const nextGnome = (isYes) => {
        if (showMatch) {
            setShowMatch(false);
        }
        else if (isYes && gnomePrice <= 200) {
            setProspects((prevProspects) => [...prevProspects, gnome]);
            setLastMatchedGnome(gnome);
            setShowMatch(true);
        }
        setCurrentGnomeIndex((prevIndex) => (prevIndex + 1) % allGnomes.length);
    };

    useEffect(() => {
        if(!showMatch) 
        {setGnomePrice(Math.floor(Math.random() * 400) + 1);}
    }, [currentGnomeIndex, showMatch]);

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
                <h1>{showMatch ? `You matched with ${lastMatchedGnome.description.toUpperCase()}!` : "Do you like this gnome?"}</h1>
                
                <div className="card p-3">
                    <h5>{showMatch ? "" : gnome.description.toUpperCase()}</h5>
                    <img src={showMatch ? match : gnome.file} className="d-block" style={{width: "200px", height: "200px"}} alt={gnome.description} />
                    <div>
                        <p>{gnomePrice} kr</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <button className="btn btn-secondary" onClick={() => nextGnome(false)}>No</button>
                        <button className="btn btn-secondary" onClick={() => nextGnome(true)}>Yes</button>
                    </div>  
                </div>
            </div>
        </div>
    ); 
}

export default Card;
