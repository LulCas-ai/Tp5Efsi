import api from "./api";
import { useState, useEffect } from "react";

const peliculasLista = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "Fight Club",
    "The Matrix",
    "Goodfellas",
    "Se7en",
    "Interstellar",
    "Gladiator",
    "Titanic",
    "The Lion King",
    "Jurassic Park",
    "Star Wars: Episode IV - A New Hope",
    "The Avengers",
    "Avengers: Endgame",
    "The Silence of the Lambs",
    "Saving Private Ryan",
    "Schindler's List",
    "The Green Mile",
    "Braveheart",
    "The Prestige",
    "Whiplash",
    "Parasite",
    "Joker",
    "The Wolf of Wall Street",
    "Django Unchained",
    "Inglourious Basterds",
    "The Hateful Eight",
    "Once Upon a Time in Hollywood",
    "The Social Network",
    "Mad Max: Fury Road",
    "Blade Runner 2049",
    "Alien",
    "Aliens",
    "Terminator 2: Judgment Day",
    "Back to the Future",
    "The Departed",
    "Shutter Island",
    "The Irishman",
    "Casino",
    "Scarface",
    "Heat",
    "The Big Lebowski",
    "No Country for Old Men",
    "Logan",
    "Deadpool",
    "Spider-Man: Into the Spider-Verse",
    "Black Panther",
    "Doctor Strange",
    "Guardians of the Galaxy",
    "Thor: Ragnarok",
    "Iron Man",
    "Captain America: The Winter Soldier",
    "Harry Potter and the Sorcerer's Stone",
    "Harry Potter and the Prisoner of Azkaban",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Lord of the Rings: The Two Towers",
    "The Lord of the Rings: The Return of the King",
    "The Hobbit: An Unexpected Journey",
    "Frozen",
    "Moana",
    "Coco",
    "Toy Story",
    "Toy Story 3",
    "Finding Nemo",
    "Up",
    "Inside Out",
    "Ratatouille",
    "The Incredibles",
    "Cars",
    "Monsters, Inc.",
    "Wall-E",
    "Soul",
    "Encanto",
    "The Notebook",
    "La La Land",
    "A Star is Born",
    "Bohemian Rhapsody",
    "Rocketman",
    "The Greatest Showman",
    "Her",
    "Ex Machina",
    "Arrival",
    "Blade Runner",
    "The Truman Show",
    "Cast Away",
    "The Pursuit of Happyness",
    "Slumdog Millionaire",
    "Life of Pi",
    "The Revenant",
    "1917",
    "Dunkirk",
    "Oppenheimer",
    "Barbie"
];

function AlgunasPeliculas() {

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const filtrarPeliculas = async () => {
            const random10 = Array.from({ length: 10 }, () =>
                peliculasLista[Math.floor(Math.random() * peliculasLista.length)]
            );

            const results = await Promise.all(
                random10.map(e => api.buscarPelicula(e))
            );

            setPeliculas(results);
        };

        filtrarPeliculas();
    }, []);

    return (
        <>
            {peliculas.map((e, i) => (
                <div key={i}>
                    <h2>{e.Title}</h2>
                    <img src={e.Poster} alt={e.Title} />
                    <h2>{e.Year}</h2>
                    
                </div>
            ))}
        </>
    );
}

export default AlgunasPeliculas;