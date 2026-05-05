import { useEffect, useState } from "react";
import api from "./api";

function BuscarPelicula({ idPelicula }) {

    const [data, setData] = useState(null);

    useEffect(() => {
        if (!idPelicula) return;

        const fetchData = async () => {
            const res = await api.peliculaEspecifica(idPelicula);
            setData(res);
        };

        fetchData();
    }, [idPelicula]);

    if (!data) return <h2>Cargando...</h2>;

    return (
        <>
            <h1>{data.Title}</h1>
            <img src={data.Poster} alt={data.Title} />
            <h3>Año: {data.Year}</h3>
            <h3>Genero: {data.Genre}</h3>
            <p>Director: {data.Director}</p>
            <p>Actores: {data.Actors}</p>
            <p>SInopsis: {data.Plot}</p>
        </>
    );
}

export default BuscarPelicula;