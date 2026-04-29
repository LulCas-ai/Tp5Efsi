import { useEffect, useState } from "react";
import api from "./api";

function Pelicula({ PeliculaActual }) {

    const [data, setData] = useState(null);

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
            <h1>{data.Title}</h1>
            <img src={data.Poster} alt={data.Title} />
            <h3>Año: {data.Year}</h3>
            <h3>Género: {data.Genre}</h3>
            <h4>Director: {data.Director}</h4>
        </>
    );
}

export default Pelicula;