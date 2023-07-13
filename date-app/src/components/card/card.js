import React, { useState, useEffect } from "react";
import ladyGnome from "../gnomes/lady.jpg";
import gardenGnome from "../gnomes/garden.jpg";
import laughGnome from "../gnomes/laugh.jpg";
import militaryGnome from "../gnomes/military.jpg";
import redHatGnome from "../gnomes/red-hat.jpg";
import summerGnome from "../gnomes/summer.jpg";
import match from "../gnomes/nedladdning.png";

const allGnomes = [
    { id: 1,file: gardenGnome, description: "garden gnome", bio:"Jag är alltid på jakt efter nya skratt och letar efter någon som delar min glädje för humor.",price: 400 },
    { id: 2,file: ladyGnome, description: "lady gnome", bio:"Jag är alltid på jakt efter nya skratt och letar efter någon som delar min glädje för humor.", price: 120 },
    { id: 3,file: laughGnome, description: "laughing gnome", bio:"Jag är alltid på jakt efter nya skratt och letar efter någon som delar min glädje för humor." , price: 100 },
    { id: 4,file: militaryGnome, description: "military gnome", bio: "Letar efter någon att dela solnedgångar och skratt med.",price: 80 },
    { id: 5,file: redHatGnome, description: "red hat", bio:"Hej där. Jag är en ganska normal person som gillar att göra vardagliga saker." ,price: 10 },
    { id: 6,file: summerGnome, description: "double summer", bio: "Hej där! Jag är en passionerad skrattentusiast som älskar att få folk att spruta ut kaffe genom näsan av skratt.", price: 80 }
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
<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Matches
</button>
<ul class="dropdown-menu">
    {prospects.map((prospect) => (
        <li className="list-group-item" key={prospect.description}>
            {prospect.description}
        </li>
    ))}
</ul>
</div>
            <div className="d-flex flex-column w-100 align-items-center border border-primary ">
                <h1>{showMatch ? `You matched with ${lastMatchedGnome.description.toUpperCase()}!` : "Do you like this gnome?"}</h1>
                
                <div style={{width: "250px", height: "250px"}}className=" border border-primary p-3">
                    <h5 className="text-center">{showMatch ? "" : gnome.description.toUpperCase()}</h5>
                    <img src={showMatch ? match : gnome.file} style={{width: "200px", height: "200px"}}className="d-block object-fit-scale"  alt={gnome.description} />
                    <div style={{margin: "0 auto", width: "250px",height:"60%", overflow: "hidden" }}className="text-left p-1 border border-primary">
                        <p>{showMatch ? "" : gnome.bio }</p>
                        </div>
                    <div className="position-relative border border-primary">
                        {showMatch ? (
                            <button className="mt-4 position-absolute top start-50 translate-middle btn btn-success" onClick={() => nextGnome(false)}>
                            Continue
                        </button>
                        ) : (
                            <>
                        <button className="position-absolute top-0 start-0 btn btn-secondary" onClick={() => nextGnome(false)}>No</button>
                        <button className="position-absolute end-0 top-0 btn btn-secondary" onClick={() => nextGnome(true)}>Yes</button>
                        </>)}
                        </div>  
                </div>
            </div>
        </div>
    ); 
}

export default Card;
