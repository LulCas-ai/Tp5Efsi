import { useEffect, useState } from "react";
import api from "./api";
import BuscarPelicula from "./Pelicula";


function Pelicula({ PeliculaActual }) {

    const [data, setData] = useState(null);
    const [idPelicula, setIdPelicula] = useState("")


    useEffect(() => {
        if (!PeliculaActual) return;

        const fetchData = async () => {
            const res = await api.buscarPelicula(PeliculaActual);
            setData(res);
        };

        fetchData();
    }, [PeliculaActual]);

    if (!data) return <h2>Buscá una película...</h2>;




    return (
        <>
            {!idPelicula && data.Search.map((e) => (
                <div key={e.imdbID}>
                    <h1>{e.Title}</h1>
                    <img src={e.Poster} alt={e.Title} />
                    <h3>Año: {e.Year}</h3>
                    <button onClick={() => setIdPelicula(e.imdbID)}>
                        Entrar
                    </button>
                </div>
            ))}

            {idPelicula && <BuscarPelicula idPelicula={idPelicula} />}
        </>
    );

}

export default Pelicula;