import React, { useState, useEffect } from "react";
import ladyGnome from "../gnomes/lady.jpg";
import gardenGnome from "../gnomes/garden.jpg";
import laughGnome from "../gnomes/laugh.jpg";
import militaryGnome from "../gnomes/military.jpg";
import redHatGnome from "../gnomes/red-hat.jpg";
import summerGnome from "../gnomes/summer.jpg";
import match from "../gnomes/nedladdning.png";
const allGnomes = [
    { id: 1,file: gardenGnome, description: "Garden Gnome", bio:"Jag är alltid på jakt efter nya skratt och letar efter någon som delar min glädje för humor.",price: 400 },
    { id: 2,file: ladyGnome, description: "Lady Gnome", bio:"Jag är alltid på jakt efter nya skratt och letar efter någon som delar min glädje för humor.", price: 120 },
    { id: 3,file: laughGnome, description: "Laughing Gnome", bio:"Jag är alltid på jakt efter nya skratt och letar efter någon som delar min glädje för humor." , price: 100 },
    { id: 4,file: militaryGnome, description: "Military Gnome", bio: "Letar efter någon att dela solnedgångar och skratt med.",price: 80 },
    { id: 5,file: redHatGnome, description: "Red Trouble", bio:"Hej där. Jag är en ganska normal person som gillar att göra vardagliga saker." ,price: 10 },
    { id: 6,file: summerGnome, description: "Double Summer", bio: "Hej där! Jag är en passionerad skrattentusiast som älskar att få folk att spruta ut kaffe genom näsan av skratt.", price: 80 }
]

function Card() {
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

            const newGnomeIndex = Math.floor(Math.random() * allGnomes.length);
        }
        setCurrentGnomeIndex((prevIndex) => (prevIndex + 1) % allGnomes.length);
    };

    useEffect(() => {
        if(!showMatch) 
        {setGnomePrice(Math.floor(Math.random() * 400) + 1);}
    }, [currentGnomeIndex, showMatch]);

    return (
        <div>
            <div className="dropdown">
<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true" data-bs-auto-close="false">
    Matches
</button>
<ul className="dropdown-menu">
    {prospects.map((prospect) => (
        <li className="list-group-item" key={prospect.description}>
            {prospect.description}
        </li>
    ))}
</ul>
</div>
            <div className="d-flex flex-column w-100 align-items-center mt-2">
                <h1 className="text-light">{showMatch ? `You matched with ${lastMatchedGnome.description}!` : "Do you like this gnome?"}</h1>
                
                <div style={{width: "250px", height: "450px", opacity: "0.9", }}className="card p-3 ">
                    <h5 className="text-center">{showMatch ? "" : gnome.description.toUpperCase()}</h5>
                    <img src={showMatch ? match : gnome.file} style={{width: "200px", height: "200px", boxShadow: "0px 1px 1px 1px"}}className="d-block object-fit-scale rounded "  alt={gnome.description} />
                    <div style={{margin: "0", width: "", height:"60%", overflow: "hidden",  }}className="text-left p-3 position-relative">
                        <p>{showMatch ? "Grab a beer and build some confidence. Gnomes love people with confidence." : gnome.bio }</p>
                        {showMatch ? (
                            <button className="mt-4 position-absolute top start-50 translate-middle btn btn-success" onClick={() => nextGnome(false)}>
                            Continue
                        </button>
                        ) : (
                            <>
                        <button className="position-absolute  start-0 btn btn-secondary " style={{marginTop: "10px", border: "2px solid lightgrey"}}onClick={() => nextGnome(false)}>No</button>
                        <button className="position-absolute end-0 btn btn-secondary" style={{marginTop: "10px", border: "2px solid lightgrey"}}onClick={() => nextGnome(true)}>Yes</button>
                        </>)}
                            </div>
                        </div>  
                </div>
            </div>
        
    ); 
}

export default Card;
