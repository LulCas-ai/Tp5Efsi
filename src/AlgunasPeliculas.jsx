import { useEffect, useState } from "react";
import api from "./api";

function AlgunasPeliculas() {

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const fetchPeliculas = async () => {
            const random10 = Array.from({ length: 10 }, () =>
                peliculasLista[Math.floor(Math.random() * peliculasLista.length)]
            );

            const results = await Promise.all(
                random10.map(e => api.buscarPelicula(e))
            );

            setPeliculas(results);
        };

        fetchPeliculas();
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